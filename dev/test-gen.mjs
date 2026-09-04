import { Terrain, BIOME, BIOME_NAMES } from '../src/engine/gen.js';
import { CHUNK, HEIGHT, SEA, idx } from '../src/engine/constants.js';
import { BLOCKS } from '../src/engine/blocks.js';

const t = new Terrain(12345);
const counts = {};
let airAbove = 0, maxUsed = 0;
const t0 = Date.now();
for (let cz = -2; cz <= 2; cz++) {
  for (let cx = -2; cx <= 2; cx++) {
    const chunk = { cx, cz, blocks: new Uint8Array(CHUNK*CHUNK*HEIGHT), heights: new Uint8Array(CHUNK*CHUNK) };
    t.generate(chunk);
    for (let i = 0; i < chunk.blocks.length; i++) {
      const id = chunk.blocks[i];
      counts[id] = (counts[id]||0)+1;
      if (id > maxUsed) maxUsed = id;
    }
  }
}
const ms = Date.now()-t0;
console.log(`25 чанков сгенерировано за ${ms} мс (${(ms/25).toFixed(1)} мс/чанк)`);
for (const [id, c] of Object.entries(counts).sort((a,b)=>b[1]-a[1])) {
  console.log(String(id).padStart(2), (BLOCKS[id]?.name ?? '?').padEnd(16), c, ((c/(25*CHUNK*CHUNK*HEIGHT))*100).toFixed(1)+'%');
}
// срез мира для глазамиой проверки (вид сбоку)
let out='';
for (let z=0; z<48; z++){ let row='';
  for (let x=0;x<48;x++){ const cx=(x/16)|0, cz=(z/16)|0;
    const ch={cx,cz,blocks:new Uint8Array(CHUNK*CHUNK*HEIGHT),heights:new Uint8Array(CHUNK*CHUNK)};
    t.generate(ch);
    const h=ch.heights[(z%16)*CHUNK+(x%16)];
    row += h<SEA?'~':h<SEA+3?'.':h<45?'-':h<58?'=':'A';
  } out+=row+'\n'; }
console.log('карта высот (48x48):'); console.log(out);
console.log('height(0,0)=',t.height(0,0),'biome=',BIOME_NAMES[t.biomeAt(0,0)], 'clim', t.climate(0,0).map(v=>v.toFixed(2)));
