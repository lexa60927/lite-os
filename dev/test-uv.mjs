/**
 * Страж ориентации и посадки текстур. Ловит ровно два класса багов, которые
 * игрок описывает как «текстуры перевёрнуты / съехали»:
 *
 *   1) packAtlas и tileRect должны говорить на одном языке: v=v0 обязано
 *      попадать в ПЕРВУЮ строку арта (верх тайла), а не в bleed-поле;
 *   2) вершина грани с y=1 (верх блока) обязана брать именно эту строку.
 *
 * Плюс проверяется контракт three.js, из-за которого всё это работает: у
 * DataTexture flipY=false, т.е. строка 0 данных лежит у v=0. Если three
 * поменяет дефолт — тест упадёт здесь, а не на глазах у игрока.
 *
 * Запуск: node dev/test-uv.mjs
 */
import { buildTiles } from '../src/engine/tiles.js';
import { packAtlas, TILE, GRID, CELL, PAD } from '../src/engine/pixels.js';
import { FACES, tileRect, buildChunkMesh } from '../src/engine/mesher.js';
import { BLOCKS, byKey } from '../src/engine/blocks.js';
import { CHUNK, HEIGHT, idx } from '../src/engine/constants.js';
import { PLANT_H } from '../src/engine/props.js';
import { DataTexture } from 'three';

let fail = 0;
const tilesByIndex = new Map();
const bad = (msg) => { console.log('✘ ' + msg); fail++; };
const ok = (msg) => console.log('✔ ' + msg);

const { tiles, index } = buildTiles();
for (const t of tiles) tilesByIndex.set(t.index, t.name);
const packed = packAtlas(tiles);
const px = (atlasX, atlasY) => {
  const k = (atlasY * packed.width + atlasX) * 4;
  return [packed.data[k], packed.data[k + 1], packed.data[k + 2], packed.data[k + 3]];
};

// ── 1. контракт three.js: данные выгружаются без вертикального флипа ──────
if (new DataTexture().flipY !== false) {
  bad('у DataTexture flipY ≠ false — весь атлас отрисуется вверх ногами');
} else ok('DataTexture.flipY === false (строка 0 данных = v=0)');

// ── 2. packAtlas кладёт арт без флипа и ровно в (col*CELL+PAD, row*CELL+PAD) ──
{
  let shift = 0, flipped = 0;
  for (const t of tiles) {
    const ox = (t.index % GRID) * CELL + PAD, oy = ((t.index / GRID) | 0) * CELL + PAD;
    const a = t.tile.data;
    for (let x = 0; x < TILE; x++) {
      const top = x * 4;                                              // арт y=0
      if (px(ox + x, oy).slice(0, 3) + '' !== [a[top], a[top + 1], a[top + 2]] + '') shift++;
      // последний ряд арта обязан лежать на y=TILE-1, а не на y=0
      const bot = ((TILE - 1) * TILE + x) * 4;
      if (px(ox + x, oy + TILE - 1).slice(0, 3) + '' !== [a[bot], a[bot + 1], a[bot + 2]] + '') flipped++;
    }
  }
  if (shift) bad(`атлас: ${shift} пикселей не на своей позиции (съехавший bleed)`);
  else ok(`атлас: ${tiles.length} тайлов лежат ровно в (col*CELL+PAD, row*CELL+PAD)`);
  if (flipped) bad(`атлас: ${flipped} пикселей нижних строк арта нашло в верхних — packAtlas переворачивает строки`);
  else ok('атлас: строки арта не перевёрнуты (y=0 сверху, y=15 снизу)');
}

// ── 3. tileRect: начало UV = начало арта, край = последний пиксель тайла ──
{
  const size = CELL * GRID;
  let off = 0, out = 0;
  for (const name of Object.keys(index)) {
    const r = tileRect(index[name], CELL, TILE, GRID);
    const gx = (index[name] % GRID) * CELL + PAD, gy = ((index[name] / GRID) | 0) * CELL + PAD;
    if (Math.abs(r.u0 * size - gx) > 0.5 || Math.abs(r.v0 * size - gy) > 0.5) off++;
    if (r.u0 < 0 || r.v0 < 0 || r.u0 + r.s > 1.0001 || r.v0 + r.s > 1.0001) out++;
    if (Math.abs(r.s - TILE / size) > 1e-9) bad(`tileRect(${name}): размер ${r.s} ≠ тайл/атлас`);
  }
  if (off) bad(`${off} тайл(ов): UV начинается не с первой строки/столбца арта (bleed съедает край текстуры)`);
  else ok('tileRect: u0v0 = первый пиксель арта, bleed не попадает в выборку');
  if (out) bad(`${out} тайл(ов): UV-прямоугольник вылезает за атлас`);
}

// ── 4. боковые грани: верх блока обязан брать верхнюю строку тайла ─────────
{
  let wrong = 0;
  for (let f = 0; f < 6; f++) {
    const face = FACES[f];
    if (face.dir[1] !== 0) continue;                 // только вертикальные (боковые) грани
    for (let k = 0; k < 4; k++) {
      const y = face.verts[k][1], v = face.uv[k][1];
      if (y === 1 && v !== 0) wrong++;
      if (y === 0 && v !== 1) wrong++;
    }
  }
  if (wrong) bad(`FACES: ${wrong} вершин боковых граней с неверным v — текстуры вверх ногами`);
  else ok('FACES: y=1 → v=0 (верх тайла наверху), y=0 → v=1');
}

// ── 5. кресты растений: та же ориентация + высота из PLANT_H ───────────────
{
  const plant = BLOCKS.find((d) => d && d.render === 'cross');
  const id = byKey(plant.key);
  const name = plant.tiles.all ?? plant.tiles.side;
  const rect = tileRect(index[name], CELL, TILE, GRID);
  const blocks = new Uint8Array(CHUNK * CHUNK * HEIGHT);
  for (let z = 0; z < CHUNK; z++) for (let x = 0; x < CHUNK; x++) {
    blocks[idx(x, 40, z)] = byKey('grass');
    blocks[idx(x, 39, z)] = byKey('stone');
  }
  blocks[idx(8, 41, 8)] = id;
  const chunk = { cx: 0, cz: 0, blocks, biomes: new Uint8Array(CHUNK * CHUNK), skyH: new Uint8Array(CHUNK * CHUNK).fill(42), light: null, hmax: 42 };
  const world = {
    terrain: { col: () => ({ h: 40 }) },
    getChunk: (cx, cz) => (cx === 0 && cz === 0 ? chunk : null),
    getBlock: (x, y, z) => (x >= 0 && x < CHUNK && z >= 0 && z < CHUNK ? blocks[idx(x, y, z)] : 0),
    isOpaque: () => false, skyAt: (x, y, z) => (y >= 42 ? 1 : 0.5), lightAt: () => 0,
  };
  const mesh = buildChunkMesh(world, chunk, { index, cell: CELL, tile: TILE, grid: GRID });
  const buf = mesh.solid;
  if (!buf || !buf.quads) { bad('меширование чанка с растением не дало геометрии'); }
  else {
    // QuadBuffer.slice() отдаёт «голые» типизированные массивы (атрибуты собирает
    // уже ChunkView), поэтому индексируем напрямую: 3 координаты и 2 на UV.
    const p = buf.position, u = buf.uv;
    let minY = Infinity, maxY = -Infinity, vAtMin = -Infinity, vAtMax = Infinity, n = 0;
    for (let i = 0; i < buf.quads * 4; i++) {
      const v = u[i * 2 + 1], x = p[i * 3], y = p[i * 3 + 1];
      // вершины именно нашего растения: v внутри прямоугольника тайла и x=8..9
      if (v < rect.v0 - 1e-6 || v > rect.v0 + rect.s + 1e-6) continue;
      if (Math.abs(x - 8) > 0.9) continue;
      n++;
      if (y < minY) { minY = y; vAtMin = v; }
      if (y > maxY) { maxY = y; vAtMax = v; }
    }
    if (!n) bad('квад растения не найден в меш-буфере');
    else {
      if (!(vAtMin > vAtMax)) bad(`растение: нижняя вершина (y=${minY}) имеет v=${vAtMin.toFixed(4)}, верхняя (y=${maxY}) v=${vAtMax.toFixed(4)} — цветки оказались внизу`);
      else ok(`растение: низ v=${vAtMin.toFixed(4)} → верх v=${vAtMax.toFixed(4)} (арт читается правильно)`);
      const wantH = PLANT_H[id] ?? plant.plantH;
      const gotH = maxY - minY;
      // float32-координаты: сравниваем с его разрешающей способностью
      if (Math.abs(gotH - wantH) > 1e-5) bad(`растение: высота квада ${gotH} вместо plantH ${wantH}`);
      else ok(`растение ${plant.key}: высота квада ${gotH.toFixed(3)} = plantH`);
      if (Math.abs(vAtMax - rect.v0) > 1e-5) bad('растение: верх квада не совпадает с v0 тайла');
      if (Math.abs(vAtMin - (rect.v0 + rect.s)) > 1e-5) bad('растение: низ квада не совпадает с v0+s (арт срезан)');
    }
  }
}

// ── 6. каждая грань обязана брать СВОЙ тайл (ловит съехавшие F_TOP/F_BOTTOM) ─
// Порядок FACES — +X, -X, +Y, -Y, +Z, -Z, поэтому верх это 2, а низ 3. Если эти
// константы разъедутся, мир не почернеет и тесты ориентации пройдут: просто у
// травы верх станет боковым тайлом, у ствола — кольцами с макушки, а «волна»
// воды переедет на боковые грани. Ровно так и было, пока это не стало видно на
// скриншотах. Поэтому здесь сверяется именно ИМЯ тайла под UV каждой грани.
{
  const G = 40;
  const size = CELL * GRID;
  const blocks = new Uint8Array(CHUNK * CHUNK * HEIGHT);
  for (let z = 0; z < CHUNK; z++) for (let x = 0; x < CHUNK; x++) {
    blocks[idx(x, G, z)] = byKey('grass');
    blocks[idx(x, G - 1, z)] = byKey('stone');
  }
  const log = byKey('log'), snow = byKey('snow'), water = byKey('water');
  for (let dy = 1; dy <= 3; dy++) blocks[idx(8, G + dy, 8)] = log;   // ствол: бока — кора, торец — кольца
  blocks[idx(2, G + 1, 2)] = snow;
  blocks[idx(12, G + 1, 12)] = water;
  const chunk = { cx: 0, cz: 0, blocks, biomes: new Uint8Array(CHUNK * CHUNK), skyH: new Uint8Array(CHUNK * CHUNK).fill(G + 6), light: null, hmax: G + 6 };
  const world = {
    terrain: { col: () => ({ h: G }) },
    getChunk: (cx, cz) => (cx === 0 && cz === 0 ? chunk : null),
    getBlock: (x, y, z) => (x >= 0 && x < CHUNK && z >= 0 && z < CHUNK && y >= 0 && y < HEIGHT ? blocks[idx(x, y, z)] : 0),
    isOpaque: (x, y, z) => world.getBlock(x, y, z) !== 0, skyAt: (x, y, z) => (y >= G + 4 ? 1 : 0.5), lightAt: () => 0,
  };
  const nameOfUv = (uu, vv) => {
    const col = Math.min(GRID - 1, Math.max(0, Math.floor((uu * size) / CELL)));
    const row = Math.min(GRID - 1, Math.max(0, Math.floor((vv * size) / CELL)));
    return tilesByIndex.get(row * GRID + col) ?? '?';
  };
  const mesh = buildChunkMesh(world, chunk, { index, cell: CELL, tile: TILE, grid: GRID });
  const wantTile = (id, face) => {
    const t = BLOCKS[id].tiles;
    return (face === 'top' ? (t.top ?? t.all) : face === 'bottom' ? (t.bottom ?? t.all) : (t.side ?? t.all)) ?? null;
  };
  const seen = new Map();     // «ключ/грань» -> {need, got:Set, n}
  const wave = { top: -1, side: -1 };
  for (const kind of ['solid', 'water']) {
    const buf = mesh[kind];
    if (!buf || !buf.quads) continue;
    const p = buf.position, u = buf.uv, li = buf.light;
    for (let q = 0; q < buf.quads; q++) {
      const b = q * 4;
      let minX = 9e9, maxX = -9e9, minY = 9e9, maxY = -9e9, minZ = 9e9, maxZ = -9e9, minU = 9e9, minV = 9e9;
      for (let k = 0; k < 4; k++) {
        const x = p[(b + k) * 3], y = p[(b + k) * 3 + 1], z = p[(b + k) * 3 + 2];
        if (x < minX) minX = x; if (x > maxX) maxX = x;
        if (y < minY) minY = y; if (y > maxY) maxY = y;
        if (z < minZ) minZ = z; if (z > maxZ) maxZ = z;
        const uu = u[(b + k) * 2], vv = u[(b + k) * 2 + 1];
        if (uu < minU) minU = uu; if (vv < minV) minV = vv;
      }
      const spanX = maxX - minX, spanY = maxY - minY, spanZ = maxZ - minZ;
      let face, owner;
      if (spanY < 0.01) {
        const plane = Math.round(minY);
        const gx = Math.floor(minX + 0.1), gz = Math.floor(minZ + 0.1);
        const above = world.getBlock(gx, plane, gz), below = world.getBlock(gx, plane - 1, gz);
        if (below && !above) { face = 'top'; owner = [gx, plane - 1, gz]; }
        else if (above && !below) { face = 'bottom'; owner = [gx, plane, gz]; }
        else continue;
      } else if (spanX < 0.01) {
        const plane = Math.round(minX);
        const y = Math.floor((minY + maxY) / 2), gz = Math.floor(minZ + 0.1);
        const l = world.getBlock(plane - 1, y, gz), r = world.getBlock(plane, y, gz);
        if (l && !r) { face = 'side'; owner = [plane - 1, y, gz]; }
        else if (r && !l) { face = 'side'; owner = [plane, y, gz]; }
        else continue;
      } else if (spanZ < 0.01) {
        const plane = Math.round(minZ);
        const y = Math.floor((minY + maxY) / 2), gx = Math.floor(minX + 0.1);
        const l = world.getBlock(gx, y, plane - 1), r = world.getBlock(gx, y, plane);
        if (l && !r) { face = 'side'; owner = [gx, y, plane - 1]; }
        else if (r && !l) { face = 'side'; owner = [gx, y, plane]; }
        else continue;
      } else continue;
      const id = world.getBlock(...owner);
      if (!id) continue;
      const need = wantTile(id, face);
      if (!need) continue;
      const key = `${BLOCKS[id].key}/${face}`;
      const rec = seen.get(key) ?? { need, got: new Set(), n: 0 };
      rec.got.add(nameOfUv(minU, minV));
      rec.n++;
      seen.set(key, rec);
      if (id === water) {
        const w = li ? li[(b + 0) * 4 + 3] : 0;   // light.w: флаг «эта грань колышется»
        if (face === 'top') wave.top = w; else if (wave.side < 0) wave.side = w;
      }
    }
  }
  let wrong = 0;
  for (const [key, r] of seen) {
    const got = [...r.got];
    if (got.length !== 1 || got[0] !== r.need) { wrong++; bad(`${key}: ${r.n} граней(и) с UV ${got.join(',')} — ожидался тайл ${r.need}`); }
  }
  if (!wrong) ok(`тайлы по граням: ${[...seen].map(([k, r]) => `${k}→${r.need}`).join(', ')}`);
  if (mesh.water && mesh.water.quads) {
    if (!(wave.top > 0.5)) bad('вода: у верхней грани не стоит флаг волны (light.w) — поверхность будет плоской');
    else ok('вода: волна навешана на верхнюю грань');
    if (wave.side > 0.5) bad('вода: флаг волны есть на боковой грани — берег будет дрожать и светиться полосой');
    else ok('вода: боковые грани спокойны');
  }
}

console.log(fail ? `\n✘ UV-ориентация: ${fail} проблем` : '\nUV и ориентация текстур в порядке');
process.exit(fail ? 1 : 0);
