/**
 * Отображение чанков: потоковая генерация/меширование с бюджетом на кадр,
 * перестройка только изменённых чанков, выгрузка далёких.
 */
import * as THREE from 'three';
import { CHUNK, HEIGHT, chunkKey, decodeChunkKey } from '../engine/constants.js';

const neighborsReady = (world, cx, cz) => !!world.getChunk(cx + 1, cz) && !!world.getChunk(cx - 1, cz)
  && !!world.getChunk(cx, cz + 1) && !!world.getChunk(cx, cz - 1);

// Непroteцный пол бюджета стриминга (мс на кадр). Раньше при просадке fps пул
// умножался на 0.4 и генерация получала 0.4*0.15 ≈ 0.36 мс — это ~4 чанка в
// секунду, а игрок на спринте влетает в 5–6 новых чанков в секунду. Отсюда и
// «идёшь — впереди пустота»: очередь не разгребалась никогда. Лучше чуть
// подтормаживающий кадр, чем прозрачный мир, поэтому below this line work wins.
const POOL_MIN = 3.4;
const STREAM_BURST = 16;   // мс на кадр, пока очередь глубже 60 чанков
const GEN_MIN = 1.2;      // мс, которые генерация получает всегда
import { buildChunkMesh } from '../engine/mesher.js';

/**
 * План работы стриминга на кадр. Вынесено из update(), чтобы политику можно
 * было проверить без браузера: именно она решает, увидит ли игрок пустые чанки.
 *
 *   frameMs — сглаженное время кадра, backlog — сколько чанков ждёт меша.
 *
 * Глубокая очередь (сразу после спавна, после смены радиуса, после телепорта)
 * — особый случай: здесь тормозить контрпродуктивно, мир пока пустой, и
 * игрок всё равно никуда не смотрит, кроме дыр. Поэтому бюджет наоборот
 * расширяется, а не режется.
 */
export function streamPlan(frameMs, backlog, budget = 6) {
  const deep = backlog > 60;
  let pool = budget;
  if (deep) pool = STREAM_BURST;
  else if (frameMs > 20 && backlog < 32) pool = pool * 0.4;
  else if (frameMs < 13 && backlog > 8) pool = budget * 1.4;
  return { pool: Math.max(POOL_MIN, pool), gen: deep ? 0.8 : backlog > 24 ? 0.35 : 0.5 };
}

export class ChunkView {
  constructor(world, scene, materials, atlas) {
    this.world = world;
    this.scene = scene;
    this.materials = materials;
    this.atlas = atlas;
    this.objects = new Map();     // world key -> { solid, water }
    this.renderDistance = 10;
    // Один общий бюджет на весь стриминг (генерация + свет + меши). Раньше
    // лимиты складывались: 9 + 2.5 + 8 = до 19.5 мс в кадре при планке 16.7 мс,
    // т.е. каждый второй кадр гарантированно пропускался — «мир подлагивает».
    this.streamBudget = 6;
    this._frameMs = 16.7;
    this._last = 0;
    this._candidates = [];
    this.stats = { gen: 0, mesh: 0, quads: 0, pending: 0, ms: 0 };
  }

  static key(cx, cz) { return chunkKey(cx, cz); }

  setRenderDistance(r) { this.renderDistance = Math.max(2, Math.min(16, r | 0)); }

  /** Состояние конвейера для отладочной строки: дыры в мире должны быть видны,
   *  а не прятаться в консоли (оверлей Vite выключен намеренно). */
  streamDebug() {
    const w = this.world;
    return { gen: this.stats.gen, mesh: this.stats.mesh, pending: w.dirtyMesh.size,
      light: w.dirtyLight.size, genErr: this._genErrCount ?? 0, meshErr: this._meshErrCount ?? 0,
      msg: w.lastGenError ?? this._meshErrMsg ?? '' };
  }

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
    const backlog = world.dirtyMesh.size;
    // Сглаженное время кадра: если мы и так не успеваем — работу не раздуваем, а
    // ужимаем; если в кадре есть запас и очередь большая — догоняем.
    const now = performance.now();
    if (this._last) {
      const ft = Math.min(250, now - this._last);
      this._frameMs += (ft - this._frameMs) * 0.15;
    }
    this._last = now;
    const plan = streamPlan(this._frameMs, backlog, this.streamBudget);
    const pool = plan.pool;
    const deadline = now + pool;
    // пока очередь меширования длинная, генерация уступает ей время (иначе
    // новые чанки приходят быстрее, чем успевают стать геометрией), но не
    // меньше GEN_MIN — иначе мир вообще перестаёт расти
    const genEnd = now + Math.max(GEN_MIN, pool * plan.gen);
    let gen = 0;
    // 1. генерация кольцами от «фокуса» (на один дальше, чем радиус меширования)
    outer:
    for (let ring = 0; ring <= R + 1; ring++) {
      for (let dz = -ring; dz <= ring; dz++) {
        for (let dx = -ring; dx <= ring; dx++) {
          if (Math.max(Math.abs(dx), Math.abs(dz)) !== ring) continue;
          const cx = fcx + dx, cz = fcz + dz;
          const here = world.getChunk(cx, cz);
          if (here) {
            // чанк уже есть, но меша у него нет (появился, пока был вне радиуса,
            // или его тронула правка соседа). В очередь кладём только когда все
            // соседи на месте: иначе он вечно прыгал бы там и сюда
            if (here.needsMesh && neighborsReady(world, cx, cz)) world.dirtyMesh.add(ChunkView.key(cx, cz));
          }
          if (!here) {
            try {
              world.ensureChunk(cx, cz);
            } catch (e) {
              this._genErrCount = (this._genErrCount ?? 0) + 1;
              if (!this._genErr) { this._genErr = 1; console.error('чанк не сгенерирован:', cx, cz, e); }
              continue;
            }
            gen++;
            if (performance.now() >= genEnd) break outer;
          }
        }
      }
    }

    // 2. свет
    const lightEnd = Math.min(deadline, performance.now() + pool * 0.2);
    if (world.dirtyLight.size) {
      for (const k of [...world.dirtyLight]) {
        const [cx, cz] = decodeChunkKey(k);
        const c = world.getChunk(cx, cz);
        if (c) world.recomputeLight(c);
        world.dirtyLight.delete(k);
        if (performance.now() >= lightEnd) break;
      }
    }

    // 3. меширование «грязных» чанков по близости к игроку
    let meshed = 0;
    const ready = [];
    for (const k of world.dirtyMesh) {
      const [cx, cz] = decodeChunkKey(k);
      // за пределами кольца не мешим совсем: очередь без этой чистки расползалась
      // на сотни чанков, сортировалась каждый кадр и не рассасывалась никогда
      if (Math.max(Math.abs(cx - pcx), Math.abs(cz - pcz)) > R + 1) { world.dirtyMesh.delete(k); continue; }
      const c = world.getChunk(cx, cz);
      if (!c) { world.dirtyMesh.delete(k); continue; }
      // соседей нет — грани считать рано; needsMesh оставляем, кольцевой обход
      // вернёт чанк в очередь, как только он станет готов
      if (!neighborsReady(world, cx, cz)) { world.dirtyMesh.delete(k); continue; }
      ready.push([((cx - fcx) ** 2 + (cz - fcz) ** 2), cx, cz]);
    }
    ready.sort((a, b) => a[0] - b[0]);
    for (const [, cx, cz] of ready) {
      // один неудачный чанк не должен ронять весь кадр: иначе стриминг встаёт
      // молча и мир «перестаёт расти» для игрока
      try {
        this.remesh(cx, cz);
      } catch (e) {
        this._meshErrCount = (this._meshErrCount ?? 0) + 1;
        this._meshErrMsg = String(e?.message ?? e);
        if (!this._meshErr) { this._meshErr = 1; console.error('меширование чанка не удалось:', cx, cz, e); }
      }
      world.dirtyMesh.delete(ChunkView.key(cx, cz));
      meshed++;
      if (performance.now() >= deadline) break;
    }
    this.stats.gen = gen;
    this.stats.mesh = meshed;
    this.stats.pending = world.dirtyMesh.size;
    this.stats.ms = performance.now() - now;
    this.stats.frameMs = this._frameMs;

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
    let geo = mesh ? mesh.geometry : null;
    if (!geo) {
      geo = new THREE.BufferGeometry();
      // сфера ограничивающая — по размеру чанка целиком: пересчитывать её по
      // всем вершинам на каждую правку дорого, а bounds у чанка постоянны
      geo.boundingSphere = new THREE.Sphere(new THREE.Vector3(CHUNK / 2, HEIGHT / 2, CHUNK / 2),
        Math.sqrt((CHUNK / 2) ** 2 * 2 + (HEIGHT / 2) ** 2));
      geo.boundingBox = new THREE.Box3(new THREE.Vector3(0, 0, 0), new THREE.Vector3(CHUNK, HEIGHT, CHUNK));
    }
    const put = (name, arr, size) => {
      const prev = geo.getAttribute(name);
      if (prev && prev.array.length >= arr.length) {
        prev.array.set(arr);
        prev.needsUpdate = true;
        return;
      }
      const attr = new THREE.BufferAttribute(arr, size);
      attr.setUsage(THREE.DynamicDrawUsage);
      geo.setAttribute(name, attr);
    };
    put('position', data.position, 3);
    put('uv', data.uv, 2);
    put('light', data.light, 4);
    put('tint', data.tint, 3);
    const idxPrev = geo.getIndex();
    if (idxPrev && idxPrev.array.length >= data.index.length) {
      idxPrev.array.set(data.index);
      idxPrev.needsUpdate = true;
    } else {
      const attr = new THREE.BufferAttribute(data.index, 1);
      attr.setUsage(THREE.DynamicDrawUsage);
      geo.setIndex(attr);
    }
    // буферы могут быть длиннее (переиспользованы) — рисуем ровно столько, сколько квадов
    geo.setDrawRange(0, data.index.length);
    if (mesh) { mesh.geometry = geo; return mesh; }
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
