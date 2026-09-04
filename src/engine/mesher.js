/**
 * Меширование чанка: отсечение скрытых граней, AO по углам, запечённый свет.
 * Только данные (типизированные массивы) — без three.js.
 *
 * Атрибуты вершины: position(3, локально в чанке), uv(2), light(4) = [окклюзия, небо, блок, волна].
 */
import { CHUNK, HEIGHT, idx } from './constants.js';
import { BLOCKS } from './blocks.js';
import { OPAQUE, RENDER, HIDE_SAME, CUTOUT, FULL_BRIGHT, LIGHT, INSET, R_CUBE, R_LIQUID, R_CROSS, R_TORCH } from './props.js';

export const F_TOP = 0, F_BOTTOM = 1;

/** Порядок вершин: cross(v1-v0, v2-v0) сонаправлен с dir (CCW снаружи). */
export const FACES = [
  { dir: [1, 0, 0], shade: 0.76, verts: [[1, 0, 0], [1, 1, 0], [1, 1, 1], [1, 0, 1]], uv: [[0, 1], [0, 0], [1, 0], [1, 1]] },
  { dir: [-1, 0, 0], shade: 0.76, verts: [[0, 0, 1], [0, 1, 1], [0, 1, 0], [0, 0, 0]], uv: [[0, 1], [0, 0], [1, 0], [1, 1]] },
  { dir: [0, 1, 0], shade: 1.0, verts: [[0, 1, 1], [1, 1, 1], [1, 1, 0], [0, 1, 0]], uv: [[0, 0], [1, 0], [1, 1], [0, 1]] },
  { dir: [0, -1, 0], shade: 0.52, verts: [[0, 0, 0], [1, 0, 0], [1, 0, 1], [0, 0, 1]], uv: [[0, 0], [1, 0], [1, 1], [0, 1]] },
  { dir: [0, 0, 1], shade: 0.9, verts: [[1, 0, 1], [1, 1, 1], [0, 1, 1], [0, 0, 1]], uv: [[0, 1], [0, 0], [1, 0], [1, 1]] },
  { dir: [0, 0, -1], shade: 0.9, verts: [[0, 0, 0], [0, 1, 0], [1, 1, 0], [1, 0, 0]], uv: [[0, 1], [0, 0], [1, 0], [1, 1]] },
];

/** Настройки меширования (управляются из UI). */
export const mesherFlags = { ao: true, smoothLight: true };

const AO_LEVELS = [0.4, 0.6, 0.8, 1.0];
const WATER_DROP = 0.125;

export class QuadBuffer {
  constructor(quads = 4096) {
    this.cap = quads;
    this.pos = new Float32Array(quads * 12);
    this.uv = new Float32Array(quads * 8);
    this.light = new Float32Array(quads * 16);
    this.index = new Uint32Array(quads * 6);
    this.q = 0;
  }

  ensure() {
    if (this.q < this.cap) return;
    this.cap = Math.max(64, this.cap * 2);
    const grow = (arr, per) => { const n = new arr.constructor(this.cap * per); n.set(arr); return n; };
    this.pos = grow(this.pos, 12);
    this.uv = grow(this.uv, 8);
    this.light = grow(this.light, 16);
    this.index = grow(this.index, 6);
  }

  push(verts, uvs, lights, flip) {
    this.ensure();
    const b = this.q * 12;
    const lb = this.q * 16;
    const ub = this.q * 8;
    const ib = this.q * 6;
    for (let i = 0; i < 4; i++) {
      const v = verts[i];
      const l = lights[i];
      const pi = b + i * 3;
      this.pos[pi] = v[0];
      this.pos[pi + 1] = v[1];
      this.pos[pi + 2] = v[2];
      const li = lb + i * 4;
      this.light[li] = l[0];
      this.light[li + 1] = l[1];
      this.light[li + 2] = l[2];
      this.light[li + 3] = l[3] || 0;
      this.uv[ub + i * 2] = uvs[i][0];
      this.uv[ub + i * 2 + 1] = uvs[i][1];
    }
    const o = this.q * 4;
    const ix = this.index;
    if (flip) {
      ix[ib] = o + 1; ix[ib + 1] = o + 2; ix[ib + 2] = o + 3;
      ix[ib + 3] = o + 1; ix[ib + 4] = o + 3; ix[ib + 5] = o;
    } else {
      ix[ib] = o; ix[ib + 1] = o + 1; ix[ib + 2] = o + 2;
      ix[ib + 3] = o; ix[ib + 4] = o + 2; ix[ib + 5] = o + 3;
    }
    this.q++;
  }

  slice() {
    if (this.q === 0) return null;
    return {
      position: this.pos.subarray(0, this.q * 12),
      uv: this.uv.subarray(0, this.q * 8),
      light: this.light.subarray(0, this.q * 16),
      index: this.index.subarray(0, this.q * 6),
      quads: this.q,
      vertices: this.q * 4,
    };
  }
}

export function tileRect(tileIndex, cell, tile, grid) {
  const size = cell * grid;
  const col = tileIndex % grid;
  const row = (tileIndex / grid) | 0;
  const off = (cell - tile) / 2;
  return { u0: (col * cell + off) / size, v0: (row * cell + off) / size, s: tile / size };
}

/** Кэш чанковых массивов 3×3 вокруг мешуемого чанка — без Map-поисков на каждый блок. */
class NeighborCache {
  constructor(world, cx, cz) {
    const list = [];
    for (let i = 0; i < 9; i++) list.push(null);
    this.at = (dx, dz) => list[(dx + 1) * 3 + (dz + 1)] ??= world.getChunk(cx + dx, cz + dz) ?? undefined;
    this.world = world;
    this.cx = cx;
    this.cz = cz;
  }
}

/**
 * @param {object} world  World (getBlock/isOpaque/skyAt/lightAt)
 * @param {object} chunk  { cx, cz, blocks, skyH, light }
 * @param {object} atlas  { index: {name: i}, cell, tile, grid }
 */
export function buildChunkMesh(world, chunk, atlas) {
  const solid = new QuadBuffer(4096);
  const water = new QuadBuffer(1024);
  const cx = chunk.cx;
  const cz = chunk.cz;
  const self = chunk.blocks;
  const cache = new NeighborCache(world, cx, cz);
  const CH = CHUNK;

  // --- быстрые выборки, знающие про границы чанка ---
  const blockAt = (lx, ly, lz) => {
    if (ly < 0) return 1;
    if (ly >= HEIGHT) return 0;
    if (lx >= 0 && lx < CH && lz >= 0 && lz < CH) return self[idx(lx, ly, lz)];
    const dx = lx < 0 ? -1 : lx >= CH ? 1 : 0;
    const dz = lz < 0 ? -1 : lz >= CH ? 1 : 0;
    const c = cache.at(dx, dz);
    if (!c) return 0;
    return c.blocks[idx(lx + (dx ? -dx * CH : 0), ly, lz + (dz ? -dz * CH : 0))];
  };
  const opaqueAt = (lx, ly, lz) => {
    if (ly < 0) return true;
    if (ly >= HEIGHT) return false;
    if (lx >= 0 && lx < CH && lz >= 0 && lz < CH) return OPAQUE[self[idx(lx, ly, lz)]] === 1;
    const dx = lx < 0 ? -1 : lx >= CH ? 1 : 0;
    const dz = lz < 0 ? -1 : lz >= CH ? 1 : 0;
    const c = cache.at(dx, dz);
    if (!c) return false;
    return OPAQUE[c.blocks[idx(lx + (dx ? -dx * CH : 0), ly, lz + (dz ? -dz * CH : 0))]] === 1;
  };
  const skyAtLocal = (lx, ly, lz) => {
    if (ly >= HEIGHT) return 1;
    const dx = lx < 0 ? -1 : lx >= CH ? 1 : 0;
    const dz = lz < 0 ? -1 : lz >= CH ? 1 : 0;
    const c = dx || dz ? cache.at(dx, dz) : chunk;
    const gx = lx + (dx ? -dx * CH : 0);
    const gz = lz + (dz ? -dz * CH : 0);
    let h;
    if (c) h = c.skyH[(gz & 15) * CH + (gx & 15)];
    else h = world.terrain.col(cx * CH + lx, cz * CH + lz).h + 1;
    if (h === 255 || ly >= h) return 1;
    return Math.max(0.13, 1 - (h - ly) * 0.055);
  };
  const lightAtLocal = (lx, ly, lz) => {
    if (ly < 0 || ly >= HEIGHT) return 0;
    const dx = lx < 0 ? -1 : lx >= CH ? 1 : 0;
    const dz = lz < 0 ? -1 : lz >= CH ? 1 : 0;
    const c = dx || dz ? cache.at(dx, dz) : chunk;
    if (!c || !c.light) return 0;
    return c.light[idx(lx + (dx ? -dx * CH : 0), ly, lz + (dz ? -dz * CH : 0))];
  };

  const v0 = [0, 0, 0];
  const v1 = [0, 0, 0];
  const v2 = [0, 0, 0];
  const v3 = [0, 0, 0];
  const uv0 = [0, 0], uv1 = [0, 0], uv2 = [0, 0], uv3 = [0, 0];
  const li0 = [0, 0, 0], li1 = [0, 0, 0], li2 = [0, 0, 0], li3 = [0, 0, 0];

  for (let ly = 0; ly < HEIGHT; ly++) {
    for (let lz = 0; lz < CH; lz++) {
      const rowBase = (ly * CH + lz) * CH;
      for (let lx = 0; lx < CH; lx++) {
        const id = self[rowBase + lx];
        if (id === 0) continue;
        const render = RENDER[id];
        const def = BLOCKS[id];

        if (render === R_CROSS || render === R_TORCH) {
          const rect = tileRect(atlas.index[def.tiles.all], atlas.cell, atlas.tile, atlas.grid);
          const glow = FULL_BRIGHT[id] ? 1 : lightAtLocal(lx, ly, lz);
          const U = (u, v) => [rect.u0 + u * rect.s, rect.v0 + v * rect.s];
          uv0[0] = U(0, 1)[0]; uv0[1] = U(0, 1)[1];
          uv1[0] = U(0, 0)[0]; uv1[1] = U(0, 0)[1];
          uv2[0] = U(1, 0)[0]; uv2[1] = U(1, 0)[1];
          uv3[0] = U(1, 1)[0]; uv3[1] = U(1, 1)[1];
          li0[0] = li1[0] = li2[0] = li3[0] = 1;
          li0[1] = li1[1] = li2[1] = li3[1] = 1;
          li0[2] = li1[2] = li2[2] = li3[2] = glow;
          li0[3] = li1[3] = li2[3] = li3[3] = 0;
          const a0 = uv0, a1 = uv1, a2 = uv2, a3 = uv3;
          const uvs = [a0, a1, a2, a3];
          const lights = [li0, li1, li2, li3];
          if (render === R_TORCH) {
            const A = 0.4, B = 0.6, T = 0.625;
            solid.push([[lx + B, ly, lz + B], [lx + B, ly + T, lz + B], [lx + A, ly + T, lz + B], [lx + A, ly, lz + B]], uvs, lights);
            solid.push([[lx + A, ly, lz + A], [lx + A, ly + T, lz + A], [lx + B, ly + T, lz + A], [lx + B, ly, lz + A]], uvs, lights);
            solid.push([[lx + B, ly, lz + A], [lx + B, ly + T, lz + A], [lx + B, ly + T, lz + B], [lx + B, ly, lz + B]], uvs, lights);
            solid.push([[lx + A, ly, lz + B], [lx + A, ly + T, lz + B], [lx + A, ly + T, lz + A], [lx + A, ly, lz + A]], uvs, lights);
            solid.push([[lx + A, ly + T, lz + B], [lx + B, ly + T, lz + B], [lx + B, ly + T, lz + A], [lx + A, ly + T, lz + A]], [uv0, uv1, uv2, uv3], lights);
          } else {
            const c = 0.146, d = 0.854;
            solid.push([[lx + c, ly, lz + c], [lx + c, ly + 1, lz + c], [lx + d, ly + 1, lz + d], [lx + d, ly, lz + d]], uvs, lights);
            solid.push([[lx + d, ly, lz + c], [lx + d, ly + 1, lz + c], [lx + c, ly + 1, lz + d], [lx + c, ly, lz + d]], uvs, lights);
          }
          continue;
        }

        if (render !== R_CUBE && render !== R_LIQUID) continue;
        const isLiquid = render === R_LIQUID;
        const buf = isLiquid ? water : solid;
        const inset = INSET[id];
        const flat = FULL_BRIGHT[id] === 1;
        const glow = LIGHT[id];
        const cut = CUTOUT[id] === 1;
        const hideSame = HIDE_SAME[id] === 1;
        const drop = isLiquid && blockAt(lx, ly + 1, lz) !== id ? WATER_DROP : 0;
        const tiles = def.tiles;
        const useAO = mesherFlags.ao && !isLiquid && !flat && !cut;

        for (let f = 0; f < 6; f++) {
          const face = FACES[f];
          const nlx = lx + face.dir[0];
          const nly = ly + face.dir[1];
          const nlz = lz + face.dir[2];
          const nbId = blockAt(nlx, nly, nlz);
          if (nbId === id && hideSame) continue;
          if (nbId !== 0) {
            if (OPAQUE[nbId] === 1) continue;
            if (isLiquid && RENDER[nbId] === R_LIQUID) continue;
          }
          const tileName = f === F_TOP ? (tiles.top ?? tiles.all) : f === F_BOTTOM ? (tiles.bottom ?? tiles.all) : (tiles.side ?? tiles.all);
          const tIdx = atlas.index[tileName] ?? atlas.index[tiles.all];
          const rect = tileRect(tIdx, atlas.cell, atlas.tile, atlas.grid);
          const wave = isLiquid && drop > 0 && f === F_TOP ? 1 : 0;
          let skyL = skyAtLocal(nlx, nly, nlz);
          if (!mesherFlags.smoothLight) skyL = skyL >= 1 ? 1 : 0.28;
          const blkL = flat ? 1 : glow > 0 ? Math.max(glow, lightAtLocal(nlx, nly, nlz)) : lightAtLocal(nlx, nly, nlz);
          const shade = face.shade;

          const vs = [v0, v1, v2, v3];
          const uvs = [uv0, uv1, uv2, uv3];
          const ls = [li0, li1, li2, li3];
          const ao = [0, 0, 0, 0];
          for (let k = 0; k < 4; k++) {
            const v = face.verts[k];
            vs[k][0] = inset ? lx + (v[0] ? 1 - inset : inset) : lx + v[0];
            vs[k][1] = ly + v[1] - (v[1] === 1 ? drop : 0);
            vs[k][2] = inset ? lz + (v[2] ? 1 - inset : inset) : lz + v[2];

            let occ = shade;
            if (useAO) {
              const p = face.verts[(k + 1) & 3];
              const m = face.verts[(k + 3) & 3];
              const t1x = p[0] - v[0], t1y = p[1] - v[1], t1z = p[2] - v[2];
              const t2x = m[0] - v[0], t2y = m[1] - v[1], t2z = m[2] - v[2];
              const s1 = opaqueAt(nlx + t1x, nly + t1y, nlz + t1z) ? 1 : 0;
              const s2 = opaqueAt(nlx + t2x, nly + t2y, nlz + t2z) ? 1 : 0;
              const cr = (s1 && s2) ? 0 : (opaqueAt(nlx + t1x + t2x, nly + t1y + t2y, nlz + t1z + t2z) ? 1 : 0);
              const level = s1 && s2 ? 0 : 3 - (s1 + s2 + cr);
              occ *= AO_LEVELS[level];
              ao[k] = level;
            }
            ls[k][0] = occ;
            ls[k][1] = skyL;
            ls[k][2] = blkL;
            ls[k][3] = wave;
            const uv = face.uv[k];
            uvs[k][0] = rect.u0 + uv[0] * rect.s;
            uvs[k][1] = rect.v0 + uv[1] * rect.s;
          }
          buf.push(vs, uvs, ls, ao[0] + ao[2] > ao[1] + ao[3]);
        }
      }
    }
  }

  return { solid: solid.slice(), water: water.slice() };
}
