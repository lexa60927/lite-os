/**
 * Мир: чанки (данные), правки игрока, блочный свет, высота неба, сохранение.
 * Без three.js — геометрию в сцену ставит src/render/chunkView.js.
 */
import { CHUNK, HEIGHT, SEA, idx, blockKey, chunkKey, decodeChunkKey } from './constants.js';
import { Terrain, DEFAULT_SEED } from './gen.js';
import { BLOCKS } from './blocks.js';

const LIGHT_RADIUS = 7;

class Chunk {
  constructor(cx, cz) {
    this.cx = cx;
    this.cz = cz;
    this.blocks = new Uint8Array(CHUNK * CHUNK * HEIGHT);
    this.skyH = new Uint8Array(CHUNK * CHUNK);
    this.light = null;
    this.emitters = [];
    this.generated = false;
    this.needsMesh = true;
  }
}

export class World {
  constructor(seed = DEFAULT_SEED) {
    this.seed = seed >>> 0;
    this.terrain = new Terrain(this.seed);
    this.chunks = new Map();
    this.edits = new Map();
    this._original = new Map();
    this.dirtyMesh = new Set();
    this.dirtyLight = new Set();
    this._cacheKey = -1;
    this._cacheChunk = null;
    this.stats = { generated: 0 };
  }

  key(cx, cz) { return chunkKey(cx, cz); }
  static decode(k) { return decodeChunkKey(k); }

  getChunk(cx, cz) {
    const k = this.key(cx, cz);
    if (k === this._cacheKey) return this._cacheChunk;
    const c = this.chunks.get(k) ?? null;
    this._cacheKey = k;
    this._cacheChunk = c;
    return c;
  }

  ensureChunk(cx, cz) {
    const k = this.key(cx, cz);
    let c = this.chunks.get(k);
    if (c) return c;
    c = new Chunk(cx, cz);
    this.chunks.set(k, c);
    this.terrain.generate(c);
    this.applyEdits(c);
    this.finalize(c);
    c.generated = true;
    c.needsMesh = true;
    this.stats.generated++;
    this.dirtyLight.add(k);
    return c;
  }

  applyEdits(chunk) {
    if (this.edits.size === 0) return;
    const ox = chunk.cx * CHUNK;
    const oz = chunk.cz * CHUNK;
    if (this.edits.size < 6000) {
      for (const [key, id] of this.edits) {
        const a1 = key.indexOf(',');
        const a2 = key.indexOf(',', a1 + 1);
        const x = +key.slice(0, a1);
        const y = +key.slice(a1 + 1, a2);
        const z = +key.slice(a2 + 1);
        const lx = x - ox;
        const lz = z - oz;
        if (lx < 0 || lz < 0 || lx >= CHUNK || lz >= CHUNK || y < 0 || y >= HEIGHT) continue;
        chunk.blocks[idx(lx, y, lz)] = id;
      }
      return;
    }
    for (let lz = 0; lz < CHUNK; lz++) {
      for (let lx = 0; lx < CHUNK; lx++) {
        for (let y = 0; y < HEIGHT; y++) {
          const id = this.edits.get(blockKey(ox + lx, y, oz + lz));
          if (id !== undefined) chunk.blocks[idx(lx, y, lz)] = id;
        }
      }
    }
  }

  finalize(chunk) {
    const blocks = chunk.blocks;
    chunk.emitters.length = 0;
    for (let lz = 0; lz < CHUNK; lz++) {
      for (let lx = 0; lx < CHUNK; lx++) {
        let h = 255;
        for (let y = HEIGHT - 1; y >= 0; y--) {
          const id = blocks[idx(lx, y, lz)];
          if (id === 0) continue;
          const def = BLOCKS[id];
          if (def.light && chunk.emitters.length < 512) chunk.emitters.push([lx, y, lz, def.light]);
          if (def.opaque) { h = y + 1; break; }
        }
        chunk.skyH[lz * CHUNK + lx] = h;
      }
    }
  }

  getBlock(x, y, z) {
    if (y < 0 || y >= HEIGHT) return 0;
    const cx = x >> 4;
    const cz = z >> 4;
    const chunk = this.getChunk(cx, cz);
    if (!chunk) return 0;
    return chunk.blocks[idx(x - cx * CHUNK, y, z - cz * CHUNK)];
  }

  isOpaque(x, y, z) { return BLOCKS[this.getBlock(x, y, z)].opaque; }
  isSolid(x, y, z) { return BLOCKS[this.getBlock(x, y, z)].solid; }
  isReplaceable(x, y, z) {
    const id = this.getBlock(x, y, z);
    return id === 0 || BLOCKS[id].replaceable === true;
  }

  skyAt(x, y, z) {
    if (y >= HEIGHT) return 1;
    const cx = x >> 4;
    const cz = z >> 4;
    const chunk = this.getChunk(cx, cz);
    let h;
    if (chunk) h = chunk.skyH[(z - cz * CHUNK) * CHUNK + (x - cx * CHUNK)];
    else h = this.terrain.col(x, z).h + 1;
    if (h === 255 || y >= h) return 1;
    return Math.max(0.13, 1 - (h - y) * 0.055);
  }

  lightAt(x, y, z) {
    if (y < 0 || y >= HEIGHT) return 0;
    const cx = x >> 4;
    const cz = z >> 4;
    const chunk = this.getChunk(cx, cz);
    if (!chunk || !chunk.light) return 0;
    return chunk.light[idx(x - cx * CHUNK, y, z - cz * CHUNK)];
  }

  setBlock(x, y, z, id, record = true) {
    if (y < 0 || y >= HEIGHT) return false;
    const cx = x >> 4;
    const cz = z >> 4;
    const chunk = this.ensureChunk(cx, cz);
    const lx = x - cx * CHUNK;
    const lz = z - cz * CHUNK;
    const i = idx(lx, y, lz);
    const prev = chunk.blocks[i];
    if (prev === id) return false;
    chunk.blocks[i] = id;
    this.postEdit(chunk, lx, y, lz, prev, id);
    if (record) {
      const key = blockKey(x, y, z);
      if (!this._original.has(key)) this._original.set(key, prev);
      const orig = this._original.get(key);
      if (orig === id) this.edits.delete(key);
      else this.edits.set(key, id);
    }
    this.touch(chunk, lx, lz);
    return true;
  }

  /** Обновляет эмиттеры света и карту высоты неба после правки блока. */
  postEdit(chunk, lx, y, lz, prev, next) {
    if (BLOCKS[prev].light) {
      const list = chunk.emitters;
      for (let i = list.length - 1; i >= 0; i--) {
        const e = list[i];
        if (e[0] === lx && e[1] === y && e[2] === lz) list.splice(i, 1);
      }
    }
    if (BLOCKS[next].light && chunk.emitters.length < 512) {
      chunk.emitters.push([lx, y, lz, BLOCKS[next].light]);
    }
    const ci = lz * CHUNK + lx;
    const wasOpaque = BLOCKS[prev].opaque;
    const isOpaque = BLOCKS[next].opaque;
    if (isOpaque && !wasOpaque) {
      if (y + 1 > chunk.skyH[ci] || chunk.skyH[ci] === 255) chunk.skyH[ci] = Math.min(255, y + 1);
    } else if (wasOpaque && !isOpaque) {
      this.recomputeColumn(chunk, lx, lz);
    }
  }

  recomputeColumn(chunk, lx, lz) {
    let h = 255;
    for (let y = HEIGHT - 1; y >= 0; y--) {
      const id = chunk.blocks[idx(lx, y, lz)];
      if (id !== 0 && BLOCKS[id].opaque) { h = y + 1; break; }
    }
    chunk.skyH[lz * CHUNK + lx] = h;
  }

  touch(chunk, lx, lz) {
    const k = this.key(chunk.cx, chunk.cz);
    this.dirtyMesh.add(k);
    this.dirtyLight.add(k);
    if (lx === 0) this.markNeighbor(chunk.cx - 1, chunk.cz);
    if (lx === CHUNK - 1) this.markNeighbor(chunk.cx + 1, chunk.cz);
    if (lz === 0) this.markNeighbor(chunk.cx, chunk.cz - 1);
    if (lz === CHUNK - 1) this.markNeighbor(chunk.cx, chunk.cz + 1);
  }

  markNeighbor(cx, cz) {
    const k = this.key(cx, cz);
    const c = this.chunks.get(k);
    if (c) c.needsMesh = true;
    this.dirtyMesh.add(k);
    this.dirtyLight.add(k);
  }

  recomputeLight(chunk) {
    const sources = [];
    for (let dx = -1; dx <= 1; dx++) {
      for (let dz = -1; dz <= 1; dz++) {
        const c = this.getChunk(chunk.cx + dx, chunk.cz + dz);
        if (!c) continue;
        for (const [x, y, z, power] of c.emitters) sources.push([x + dx * CHUNK, y, z + dz * CHUNK, power]);
      }
    }
    if (sources.length === 0) {
      if (chunk.light) chunk.light.fill(0);
      return false;
    }
    if (!chunk.light) chunk.light = new Float32Array(CHUNK * CHUNK * HEIGHT);
    chunk.light.fill(0);
    for (const [sx, sy, sz, power] of sources) {
      const y0 = Math.max(0, sy - LIGHT_RADIUS);
      const y1 = Math.min(HEIGHT - 1, sy + LIGHT_RADIUS);
      for (let y = y0; y <= y1; y++) {
        const dy2 = (y - sy) * (y - sy) * 1.45;
        for (let z = Math.max(0, sz - LIGHT_RADIUS); z <= Math.min(CHUNK - 1, sz + LIGHT_RADIUS); z++) {
          const dz2 = (z - sz) * (z - sz);
          for (let x = Math.max(0, sx - LIGHT_RADIUS); x <= Math.min(CHUNK - 1, sx + LIGHT_RADIUS); x++) {
            const d = Math.sqrt((x - sx) * (x - sx) + dy2 + dz2);
            if (d > LIGHT_RADIUS) continue;
            const v = power * Math.pow(1 - d / LIGHT_RADIUS, 1.7);
            const i = idx(x, y, z);
            if (v > chunk.light[i]) chunk.light[i] = v;
          }
        }
      }
    }
    return true;
  }

  /**
   * Точка появления: суша возле воды, без деревьев и крутых склонов,
   * чтобы игрок не стартовал внутри бревна.
   */
  findSpawn() {
    let fallback = null;
    for (let r = 0; r < 72; r++) {
      for (let a = 0; a < 12; a++) {
        const ang = (a / 12) * Math.PI * 2 + r * 0.31;
        const x = Math.round(Math.cos(ang) * r * 5);
        const z = Math.round(Math.sin(ang) * r * 5);
        const c = this.terrain.col(x, z);
        if (c.h <= SEA + 1 || c.h > 64) continue;
        const slope = Math.max(
          Math.abs(c.h - this.terrain.col(x + 1, z).h),
          Math.abs(c.h - this.terrain.col(x - 1, z).h),
          Math.abs(c.h - this.terrain.col(x, z + 1).h),
          Math.abs(c.h - this.terrain.col(x, z - 1).h),
        );
        if (slope > 3) continue;
        if (!fallback) fallback = [x + 0.5, c.h + 1.05, z + 0.5];
        if (this.terrain.treeAt(x, z)) continue;
        return [x + 0.5, c.h + 1.05, z + 0.5];
      }
    }
    if (fallback) return fallback;
    const c = this.terrain.col(0, 0);
    return [0.5, c.h + 1.05, 0.5];
  }

  /**
   * Ищет рядом открытую ровную клетку по фактическим блокам (не крона дерева,
   * не вода, не скала без опоры). Возвращает [x, y, z] или null.
   */
  findOpenSpot(x, z, radius = 56) {
    const GROUND = new Set([
      BLOCKS.findIndex((b) => b.key === 'grass'),
      BLOCKS.findIndex((b) => b.key === 'dirt'),
      BLOCKS.findIndex((b) => b.key === 'sand'),
      BLOCKS.findIndex((b) => b.key === 'snow'),
      BLOCKS.findIndex((b) => b.key === 'podzol'),
      BLOCKS.findIndex((b) => b.key === 'gravel'),
    ]);
    for (let r = 0; r <= radius; r += 2) {
      for (let a = 0; a < 12; a++) {
        const ang = (a / 12) * Math.PI * 2 + r * 0.37;
        const px = Math.round(x + Math.cos(ang) * r);
        const pz = Math.round(z + Math.sin(ang) * r);
        const cx = px >> 4;
        const cz = pz >> 4;
        const chunk = this.getChunk(cx, cz);
        if (!chunk) continue;
        const lx = px - cx * CHUNK;
        const lz = pz - cz * CHUNK;
        for (let y = HEIGHT - 3; y > 1; y--) {
          const below = chunk.blocks[idx(lx, y - 1, lz)];
          if (!GROUND.has(below)) continue;
          if (chunk.blocks[idx(lx, y, lz)] !== 0) continue;
          if (chunk.blocks[idx(lx, y + 1, lz)] !== 0) continue;
          if (chunk.blocks[idx(lx, y + 2, lz)] !== 0) continue;
          return [px + 0.5, y + 0.02, pz + 0.5];
        }
      }
    }
    return null;
  }

  removeChunk(cx, cz) {
    const k = this.key(cx, cz);
    this.chunks.delete(k);
    this.dirtyMesh.delete(k);
    this.dirtyLight.delete(k);
    if (this._cacheKey === k) this._cacheKey = -1;
  }

  serializeEdits() {
    const out = [];
    for (const [k, v] of this.edits) out.push(k + ':' + v);
    return out;
  }

  loadEdits(list) {
    this.edits.clear();
    this._original.clear();
    if (!Array.isArray(list)) return;
    for (const item of list) {
      const at = item.lastIndexOf(':');
      if (at < 0) continue;
      const key = item.slice(0, at);
      const id = +item.slice(at + 1);
      this.edits.set(key, id);
      const a1 = key.indexOf(',');
      const a2 = key.indexOf(',', a1 + 1);
      this._original.set(key, -1);
    }
  }

  get editedCount() { return this.edits.size; }
  get chunkCount() { return this.chunks.size; }
}
