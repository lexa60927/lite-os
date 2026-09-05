/**
 * Проверка деревень: как часто встречаются, плоские ли площадки, корректна ли
 * застройка на границах чанков (главное — детерминированность: чанк не должен
 * зависеть от порядка генерации, иначе на стыках половины домов не будет).
 */
import { World } from '../src/engine/world.js';
import { byKey, BLOCKS } from '../src/engine/blocks.js';
import { buildChunkMesh } from '../src/engine/mesher.js';
import { buildTiles } from '../src/engine/tiles.js';
import { TILE, CELL, GRID } from '../src/engine/pixels.js';
import { CHUNK, HEIGHT, idx } from '../src/engine/constants.js';

let errors = 0;
const bad = (m) => { errors++; console.log('✘', m); };
const ok = (m) => console.log('✔', m);

const ID = {
  farmland: byKey('farmland'), wheat: byKey('wheat'), hay: byKey('hay_block'),
  glass: byKey('glass'), glow: byKey('glowstone'), log: byKey('log'),
  planks: byKey('planks'), gravel: byKey('gravel'), water: byKey('water'),
  leaves: byKey('leaves'), sandstone: byKey('sandstone'),
};

function findSite(world, range = 10) {
  const T = world.terrain;
  for (let rx = -range; rx <= range; rx++) {
    for (let rz = -range; rz <= range; rz++) {
      T.cache.clear();
      const s = T.villageSite(rx, rz);
      if (s) return s;
    }
  }
  return null;
}

// 1) частота и пригодность площадок на нескольких сидах
let sites = 0, checked = 0, badBiome = 0, tooSteep = 0;
for (const seed of [7, 42, 1337, 20260905, 99]) {
  const w = new World(seed);
  for (let rx = -6; rx <= 6; rx++) for (let rz = -6; rz <= 6; rz++) {
    w.terrain.cache.clear();
    const s = w.terrain.villageSite(rx, rz);
    checked++;
    if (!s) continue;
    sites++;
    const b = w.terrain.col(s.cx, s.cz).biome;
    if (![2, 3, 4, 5, 7, 9].includes(b)) badBiome++;
    let minH = 999, maxH = 0;
    for (const [dx, dz] of [[0, 0], [40, 0], [-40, 0], [0, 40], [0, -40]]) {
      const h = w.terrain.col(s.cx + dx, s.cz + dz).h;
      minH = Math.min(minH, h); maxH = Math.max(maxH, h);
    }
    if (maxH - minH > 12) tooSteep++;      // площадка должна влезать в перепад, который сгладит само генерирование
  }
}
if (sites < 5) bad(`деревень почти нет: ${sites} на ${checked} регионов`);
else ok(`деревни генерируются: ${sites} на ${checked} регионов (~${(sites / checked * 100).toFixed(0)}%)`);
if (badBiome) bad(`${badBiome} деревень в неподходящем биоме`);
if (tooSteep) bad(`${tooSteep} деревень на слишком крутом рельефе`);

// 2) застройка: считаем блоки деревни и проверяем планировку
const world = new World(42);
const site = findSite(world);
if (!site) { bad('в сиде 42 не нашлось ни одной деревни'); process.exit(1); }
const r = 48;
const cx0 = Math.floor((site.cx - r) / CHUNK), cx1 = Math.floor((site.cx + r) / CHUNK);
const cz0 = Math.floor((site.cz - r) / CHUNK), cz1 = Math.floor((site.cz + r) / CHUNK);
const count = new Map();
const bump = (id) => count.set(id, (count.get(id) ?? 0) + 1);

const grab = (w) => {
  const out = new Map();
  for (let cz = cz0; cz <= cz1; cz++) for (let cx = cx0; cx <= cx1; cx++) {
    const c = w.ensureChunk(cx, cz);
    const key = [];
    for (let lz = 0; lz < CHUNK; lz++) for (let lx = 0; lx < CHUNK; lx++) for (let y = 0; y < HEIGHT; y++) {
      const id = c.blocks[idx(lx, y, lz)];
      if (id) key.push(`${cx * CHUNK + lx},${y},${cz * CHUNK + lz}:${id}`);
    }
    out.set(`${cx},${cz}`, key);
  }
  return out;
};

for (let cz = cz0; cz <= cz1; cz++) for (let cx = cx0; cx <= cx1; cx++) {
  const c = world.ensureChunk(cx, cz);
  for (let lz = 0; lz < CHUNK; lz++) for (let lx = 0; lx < CHUNK; lx++) {
    const gx = cx * CHUNK + lx, gz = cz * CHUNK + lz;
    const dx = gx - site.cx, dz = gz - site.cz;
    if (Math.abs(dx) > r || Math.abs(dz) > r) continue;
    for (let y = 0; y < HEIGHT; y++) {
      const id = c.blocks[idx(lx, y, lz)];
      if (id) bump(id);
    }
  }
}
for (const [name, id] of Object.entries(ID)) {
  const n = count.get(id) ?? 0;
  console.log(`  ${name}: ${n}`);
}
const need = [['farmland', 20], ['wheat', 20], ['hay', 1], ['glass', 4], ['log', 20], ['planks', 40]];
for (const [name, min] of need) {
  const id = ID[name === 'hay' ? 'hay' : name];
  const n = count.get(id) ?? 0;
  if (n < min) bad(`в деревне слишком мало «${name}»: ${n} < ${min}`);
}
if (!errors) ok(`деревня в (${site.cx}, ${site.cz}) отстроена: дом, огород, площадь, фонари`);

// 3) деревья внутри деревни запрещены
let trees = 0;
for (let dz = -r; dz <= r; dz += 3) for (let dx = -r; dx <= r; dx += 3) {
  if (world.terrain.treeAt(site.cx + dx, site.cz + dz)) trees++;
}
if (trees) bad(`внутри деревни намечено ${trees} деревьев — они прорастут через крыши`);
else ok('деревьев в деревне нет (крона не ломает крыши)');

// 4) планировка: по всей площадке на высоте h лежит твёрдый блок (улица, двор,
// пол дома или грядка) — только так дома не висят над ямами
let level = 0, total = 0;
const { isSolid, isLiquid } = await import('../src/engine/blocks.js');
for (let dz = -r + 2; dz <= r - 2; dz += 2) for (let dx = -r + 2; dx <= r - 2; dx += 2) {
  const gx = site.cx + dx, gz = site.cz + dz;
  const c = world.getChunk(Math.floor(gx / CHUNK), Math.floor(gz / CHUNK));
  if (!c) continue;
  total++;
  const id = c.blocks[idx(gx - c.cx * CHUNK, site.h, gz - c.cz * CHUNK)];
  if (isSolid(id) || isLiquid(id)) level++;      // пруд в огороде — тоже планировка
}
const share = level / total;
if (share < 0.97) bad(`площадка не выровнена: твёрдый блок на уровне ${site.h} только в ${(share * 100).toFixed(0)}% колонок`);
else ok(`площадка ровная: твёрдый блок на уровне ${site.h} в ${(share * 100).toFixed(0)}% колонок (${level}/${total})`);

// 5) детерминированность на границах чанков: другой порядок генерации → те же блоки
const world2 = new World(42);
const a = grab(world2);
const world3 = new World(42);
const order = [];
for (let cz = cz1; cz >= cz0; cz--) for (let cx = cx1; cx >= cx0; cx--) order.push([cx, cz]);
const b = new Map();
for (const [cx, cz] of order) {
  const c = world3.ensureChunk(cx, cz);
  const key = [];
  for (let lz = 0; lz < CHUNK; lz++) for (let lx = 0; lx < CHUNK; lx++) for (let y = 0; y < HEIGHT; y++) {
    const id = c.blocks[idx(lx, y, lz)];
    if (id) key.push(`${cx * CHUNK + lx},${y},${cz * CHUNK + lz}:${id}`);
  }
  b.set(`${cx},${cz}`, key);
}
let diff = 0;
for (const [k, v] of a) {
  const w = b.get(k);
  if (!Array.isArray(v) || !w) continue;
  if (v.join('|') !== w.join('|')) diff++;
}
if (diff) bad(`${diff} чанков деревни различаются при разном порядке генерации — стыки разъедутся`);
else ok(`чанков проверено ${a.size}: застройка одинакова при любом порядке генерации`);

// 6) меш деревенского чанка строится и не содержит NaN (листва/стекло/кресты)
const { index } = buildTiles();
const atlas = { index, cell: CELL, tile: TILE, grid: GRID };
const vc = world.getChunk(Math.floor(site.cx / CHUNK), Math.floor(site.cz / CHUNK));
const mesh = buildChunkMesh(world, vc, atlas);
const qa = mesh.solid?.quads ?? 0;
let nan = 0;
if (mesh.solid) for (const v of mesh.solid.position) if (!Number.isFinite(v)) nan++;
if (qa < 200) bad(`в чанке с деревней всего ${qa} квадов`);
if (nan) bad(`${nan} NaN в геометрии деревенского чанка`);
if (!nan && qa >= 200) ok(`меширование деревни: ${qa} квадов, ${mesh.water?.quads ?? 0} водных, NaN 0`);

console.log(errors ? `\n${errors} ошибок` : '\nдеревни в порядке');
process.exit(errors ? 1 : 0);
