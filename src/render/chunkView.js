/**
 * Отображение чанков: потоковая генерация/меширование с бюджетом на кадр,
 * перестройка только изменённых чанков, выгрузка далёких.
 */
import * as THREE from 'three';
import { CHUNK, chunkKey, decodeChunkKey } from '../engine/constants.js';
import { buildChunkMesh } from '../engine/mesher.js';

export class ChunkView {
  constructor(world, scene, materials, atlas) {
    this.world = world;
    this.scene = scene;
    this.materials = materials;
    this.atlas = atlas;
    this.objects = new Map();     // world key -> { solid, water }
    this.renderDistance = 10;
    this.genBudget = 9;           // мс на кадр
    this.meshBudget = 8;
    this._candidates = [];
    this.stats = { gen: 0, mesh: 0, quads: 0, pending: 0 };
  }

  static key(cx, cz) { return chunkKey(cx, cz); }

  setRenderDistance(r) { this.renderDistance = Math.max(2, Math.min(16, r | 0)); }

  /** Обновить потоковую загрузку; вызывать каждый кадр. */
  update(playerPos) {
    const world = this.world;
    const pcx = Math.floor(playerPos.x / CHUNK);
    const pcz = Math.floor(playerPos.z / CHUNK);
    const R = this.renderDistance;

    // Упреждение по скорости: кольцо генерации смещается туда, куда мы идём, —
    // новые чанки успевают появиться перед носом, а дыры остаются позади (в тумане).
    const vx = playerPos.vx ?? 0, vz = playerPos.vz ?? 0;
    const ax = Math.max(-2, Math.min(2, Math.round((vx * 1.1) / CHUNK)));
    const az = Math.max(-2, Math.min(2, Math.round((vz * 1.1) / CHUNK)));
    const fcx = pcx + ax, fcz = pcz + az;
    // после телепорта/быстрого полёта очередь большая — временно тратим больше кадра
    const boost = world.dirtyMesh.size > 20 ? 2 : 1;

    let t0 = performance.now();
    let gen = 0;
    // 1. генерация кольцами от «фокуса» (на один дальше, чем радиус меширования)
    outer:
    for (let ring = 0; ring <= R + 1; ring++) {
      for (let dz = -ring; dz <= ring; dz++) {
        for (let dx = -ring; dx <= ring; dx++) {
          if (Math.max(Math.abs(dx), Math.abs(dz)) !== ring) continue;
          const cx = fcx + dx, cz = fcz + dz;
          if (!world.getChunk(cx, cz)) {
            try {
              world.ensureChunk(cx, cz);
            } catch (e) {
              if (!this._genErr) { this._genErr = 1; console.error('чанк не сгенерирован:', cx, cz, e); }
              continue;
            }
            gen++;
            if (performance.now() - t0 > this.genBudget * boost) break outer;
          }
        }
      }
    }

    // 2. свет
    t0 = performance.now();
    if (world.dirtyLight.size) {
      for (const k of [...world.dirtyLight]) {
        const [cx, cz] = decodeChunkKey(k);
        const c = world.getChunk(cx, cz);
        if (c) world.recomputeLight(c);
        world.dirtyLight.delete(k);
        if (performance.now() - t0 > 2.5) break;
      }
    }

    // 3. меширование «грязных» чанков по близости к игроку
    t0 = performance.now();
    let meshed = 0;
    const ready = [];
    for (const k of world.dirtyMesh) {
      const [cx, cz] = decodeChunkKey(k);
      const c = world.getChunk(cx, cz);
      if (!c) { world.dirtyMesh.delete(k); continue; }
      if (!world.getChunk(cx + 1, cz) || !world.getChunk(cx - 1, cz) || !world.getChunk(cx, cz + 1) || !world.getChunk(cx, cz - 1)) continue;
      ready.push([((cx - fcx) ** 2 + (cz - fcz) ** 2), cx, cz]);
    }
    ready.sort((a, b) => a[0] - b[0]);
    for (const [, cx, cz] of ready) {
      // один неудачный чанк не должен ронять весь кадр: иначе стриминг встаёт
      // молча и мир «перестаёт расти» для игрока
      try {
        this.remesh(cx, cz);
      } catch (e) {
        if (!this._meshErr) { this._meshErr = 1; console.error('меширование чанка не удалось:', cx, cz, e); }
      }
      world.dirtyMesh.delete(ChunkView.key(cx, cz));
      meshed++;
      if (performance.now() - t0 > this.meshBudget * boost) break;
    }
    this.stats.gen = gen;
    this.stats.mesh = meshed;
    this.stats.pending = world.dirtyMesh.size;

    // 4. выгрузка (гистерезис: чанки упреждения не выбрасываем в том же кадре)
    const keep = R + 3;
    for (const [k, obj] of this.objects) {
      const [cx, cz] = decodeChunkKey(k);
      if (Math.max(Math.abs(cx - pcx), Math.abs(cz - pcz)) > keep) {
        this.disposeObject(obj);
        this.objects.delete(k);
        world.removeChunk(cx, cz);
      }
    }
  }

  remesh(cx, cz) {
    const world = this.world;
    const chunk = world.getChunk(cx, cz);
    if (!chunk) return;
    const k = ChunkView.key(cx, cz);
    let obj = this.objects.get(k);
    const data = buildChunkMesh(world, chunk, this.atlas);

    if (!data.solid && !data.water) {
      if (obj) { this.disposeObject(obj); this.objects.delete(k); }
      chunk.needsMesh = false;
      return;
    }

    if (!obj) {
      obj = { solid: null, water: null };
      this.objects.set(k, obj);
    }
    obj.solid = this.applyMesh(obj.solid, data.solid, this.materials.solid, cx, cz);
    obj.water = this.applyMesh(obj.water, data.water, this.materials.water, cx, cz);
    chunk.needsMesh = false;
    this.stats.quads = (data.solid?.quads ?? 0) + (data.water?.quads ?? 0);
  }

  applyMesh(mesh, data, material, cx, cz) {
    if (!data) {
      if (mesh) { this.scene.remove(mesh); mesh.geometry.dispose(); }
      return null;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(data.position, 3));
    geo.setAttribute('uv', new THREE.BufferAttribute(data.uv, 2));
    geo.setAttribute('light', new THREE.BufferAttribute(data.light, 4));
    geo.setAttribute('tint', new THREE.BufferAttribute(data.tint, 3));
    geo.setIndex(new THREE.BufferAttribute(data.index, 1));
    geo.computeBoundingSphere();
    geo.computeBoundingBox();
    if (mesh) {
      mesh.geometry.dispose();
      mesh.geometry = geo;
      return mesh;
    }
    const m = new THREE.Mesh(geo, material);
    m.position.set(cx * CHUNK, 0, cz * CHUNK);
    m.matrixAutoUpdate = false;
    m.updateMatrix();
    m.renderOrder = material === this.materials.water ? 2 : 0;
    m.frustumCulled = true;
    this.scene.add(m);
    return m;
  }

  disposeObject(obj) {
    for (const m of [obj.solid, obj.water]) {
      if (!m) continue;
      this.scene.remove(m);
      m.geometry.dispose();
    }
  }

  /** Полная перестройка (например после изменения атласа/настройки). */
  rebuildAll() {
    for (const k of this.world.chunks.keys()) this.world.dirtyMesh.add(k);
  }

  /** Всё visible — для скриншотов/режима «праздник». */
  setVisible(v) { for (const o of this.objects.values()) { if (o.solid) o.solid.visible = v; if (o.water) o.water.visible = v; } }

  get chunkMeshCount() { return this.objects.size; }
}
