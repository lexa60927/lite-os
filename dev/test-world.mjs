import { World } from '../src/engine/world.js';
import { buildChunkMesh } from '../src/engine/mesher.js';
import { CHUNK, HEIGHT, idx } from '../src/engine/constants.js';
import { byKey } from '../src/engine/blocks.js';

const atlas = { index: Object.fromEntries(Array.from({length:50},(_,i)=>['t'+i,i])), cell: 24, tile: 16, grid: 16 };
import { TILE_NAMES } from '../src/engine/tiles.js';
atlas.index = Object.fromEntries(TILE_NAMES.map((n,i)=>[n,i]));

const t0 = Date.now();
const w = new World(42);
const spawn = w.findSpawn();
console.log('spawn', spawn.map(v=>v.toFixed(1)));
const cx = Math.floor(spawn[0]/CHUNK), cz = Math.floor(spawn[2]/CHUNK);
for (let dz=-1; dz<=1; dz++) for (let dx=-1; dx<=1; dx++) w.ensureChunk(cx+dx, cz+dz);
console.log('ген 9 чанков:', Date.now()-t0, 'мс');
const tm = Date.now();
let quads = 0;
for (let dz=0; dz<=0; dz++) for (let dx=0; dx<=0; dx++) {
  const c = w.ensureChunk(cx+dx, cz+dz);
  const m = buildChunkMesh(w, c, atlas);
  quads = (m.solid?.quads ?? 0) + (m.water?.quads ?? 0);
}
console.log('меширование чанка:', Date.now()-tm, 'мс, квадов:', quads);
// проверка правок и света
const bx = Math.floor(spawn[0]), by = Math.floor(spawn[1]) - 1, bz = Math.floor(spawn[2]);
console.log('блок под ногами:', w.getBlock(bx, by, bz));
w.setBlock(bx, by + 2, bz, byKey('torch'));
console.log('факел поставлен, light в соседней клетке:', w.lightAt(bx+1, by+2, bz).toFixed(3));
console.log('emitters:', w.ensureChunk(cx,cz).emitters.length, 'dirty mesh:', w.dirtyMesh.size);
w.setBlock(bx, by, bz, 0);
console.log('после поломки блок:', w.getBlock(bx,by,bz), 'правок:', w.edits.size);
// сохранение/загрузка
const saved = w.serializeEdits();
const w2 = new World(42);
w2.loadEdits(saved);
w2.ensureChunk(cx,cz);
w2.ensureChunk(cx+1,cz); w2.ensureChunk(cx,cz+1); w2.ensureChunk(cx+1,cz+1);
console.log('после загрузки правок:', JSON.stringify(saved), '→ факел на месте?', w2.getBlock(bx, by+2, bz) === byKey('torch'));
