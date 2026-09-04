import { Terrain } from '../src/engine/gen.js';
import { CHUNK, HEIGHT, SEA, idx } from '../src/engine/constants.js';
import { BLOCKS } from '../src/engine/blocks.js';
const seed = Number(process.argv[2] || 12345);
const t = new Terrain(seed);
// 1) карта высот 128x128 с шагом 4
let map = '';
const step = 4;
for (let z = 0; z < 128; z += step) {
  let row = '';
  for (let x = 0; x < 128; x += step) {
    const c = t.col(x, z);
    row += c.h < SEA - 4 ? '~' : c.h < SEA - 1 ? '≈' : c.h <= SEA + 1 ? '.' : c.h < 44 ? '-' : c.h < 54 ? '=' : c.h < 64 ? '+' : c.h < 74 ? '#' : 'A';
  }
  map += row + '\n';
}
console.log('карта (128x128, шаг 4):', map);
// 2) распределение биомов и время генерации чанков
const counts = {}; let water = 0, total = 0;
const N = 6, t0 = Date.now();
for (let cz = 0; cz < N; cz++) for (let cx = 0; cx < N; cx++) {
  const ch = { cx, cz, blocks: new Uint8Array(CHUNK*CHUNK*HEIGHT), heights: new Uint8Array(CHUNK*CHUNK) };
  t.generate(ch);
  for (let i = 0; i < ch.blocks.length; i++) { const id = ch.blocks[i]; counts[id]=(counts[id]||0)+1; total++; if (id===BLOCKS.findIndex(b=>b.key==='water')) water++; }
}
const ms = Date.now() - t0;
console.log(`${N*N} чанков: ${ms} мс, ${(ms/(N*N)).toFixed(1)} мс/чанк; воды ${(water/total*100).toFixed(1)}%`);
const names = Object.entries(counts).sort((a,b)=>b[1]-a[1]).slice(0,14).map(([id,c])=>`${BLOCKS[id].name}:${(c/total*100).toFixed(2)}%`);
console.log(names.join('  '));
const biomeCounts={}; for(let z=0;z<200;z+=8) for(let x=0;x<200;x+=8){const b=t.biomeAt(x,z);biomeCounts[b]=(biomeCounts[b]||0)+1;}
console.log('биомы:', JSON.stringify(biomeCounts));
