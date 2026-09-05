/** Профиль стриминга: время генерации и меширования чанков (без DOM/атласа). */
import { World } from '../src/engine/world.js';
import { buildChunkMesh } from '../src/engine/mesher.js';
import { buildTiles } from '../src/engine/tiles.js';
import { TILE, CELL, GRID } from '../src/engine/pixels.js';

const R = +(process.argv[2] ?? 5);
const seed = +(process.argv[3] ?? 7);
const { index } = buildTiles();
const atlas = { index, cell: CELL, tile: TILE, grid: GRID };
const w = new World(seed);
const hr = () => Number(process.hrtime.bigint()) / 1e6;

let t = hr();
for (let cz = -R; cz <= R; cz++) for (let cx = -R; cx <= R; cx++) w.ensureChunk(cx, cz);
const gen = hr() - t;

t = hr();
let quads = 0, ms = 0;
for (const c of w.chunks.values()) {
  const t0 = hr();
  const d = buildChunkMesh(w, c, atlas);
  ms += hr() - t0;
  quads += (d.solid?.quads ?? 0) + (d.water?.quads ?? 0);
}
const mesh = ms;
const hmax = [...w.chunks.values()].reduce((s, c) => s + c.hmax, 0) / w.chunks.size;
const n = w.chunks.size;
console.log(`чанков ${n} · генерация ${gen.toFixed(0)} мс (${(gen / n * 1000).toFixed(0)} мкс/чанк) · меширование ${mesh.toFixed(0)} мс (${(mesh / n).toFixed(2)} мс/чанк)`);
console.log(`квадов ${quads} · средний hmax ${hmax.toFixed(1)} из 96 · очередь меширования после генерации: ${w.dirtyMesh.size}`);
console.log(`при бюджете 6 мс/кадр одно меширование чанка стоит ${(mesh / n).toFixed(2)} мс → ${(6 / (mesh / n)).toFixed(1)} чанк(ов) на кадр`);
