import { World } from '../src/engine/world.js';
import { buildChunkMesh } from '../src/engine/mesher.js';
import { TILE_NAMES } from '../src/engine/tiles.js';
import { CHUNK } from '../src/engine/constants.js';

const atlas = { index: Object.fromEntries(TILE_NAMES.map((n, i) => [n, i])), cell: 24, tile: 16, grid: 16 };
const w = new World(42);
const spawn = w.findSpawn();
const cx = Math.floor(spawn[0] / CHUNK), cz = Math.floor(spawn[2] / CHUNK);
const R = 5;
let t0 = Date.now();
for (let dz = -R; dz <= R; dz++) for (let dx = -R; dx <= R; dx++) w.ensureChunk(cx + dx, cz + dz);
const genMs = (Date.now() - t0) / ((2 * R + 1) ** 2);
t0 = Date.now();
let quads = 0, tri = 0;
for (let dz = -R; dz <= R; dz++) for (let dx = -R; dx <= R; dx++) {
  const c = w.ensureChunk(cx + dx, cz + dz);
  const m = buildChunkMesh(w, c, atlas);
  quads += (m.solid?.quads ?? 0) + (m.water?.quads ?? 0);
}
const meshMs = (Date.now() - t0) / ((2 * R + 1) ** 2);
const secs = (genMs + meshMs);
console.log(`чанков: ${(2*R+1)**2} | генерация ${genMs.toFixed(2)} мс | меширование ${meshMs.toFixed(2)} мс | итого ${secs.toFixed(1)} мс/чанк`);
console.log(`квадов в среднем на чанк: ${(quads/((2*R+1)**2)).toFixed(0)} → треугольников ~${(quads/((2*R+1)**2)*2).toFixed(0)}, вершин ~${(quads/((2*R+1)**2)*4).toFixed(0)}`);
