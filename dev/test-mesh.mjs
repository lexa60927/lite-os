import { buildChunkMesh, FACES } from '../src/engine/mesher.js';
import { CHUNK, HEIGHT, idx } from '../src/engine/constants.js';
import { byKey } from '../src/engine/blocks.js';

const STONE = byKey('stone'), GRASS = byKey('grass'), WATER = byKey('water');
const atlas = { index: { stone: 0, dirt: 1, grass_top: 2, grass_side: 3, water: 4 }, cell: 32, tile: 16, grid: 16 };
const blocks = new Uint8Array(CHUNK*CHUNK*HEIGHT);
for (let z=0;z<CHUNK;z++) for (let x=0;x<CHUNK;x++) { blocks[idx(x,40,z)] = GRASS; blocks[idx(x,39,z)] = STONE; }
for (let z=0;z<CHUNK;z++) blocks[idx(15,41,z)] = WATER;

const skyH = new Uint8Array(CHUNK*CHUNK).fill(41);
const chunk0 = { cx:0, cz:0, blocks, skyH, light: null };
const world = {
  terrain: { col: ()=>({h:40}) },
  getChunk: (cx,cz)=> (cx===0&&cz===0)? chunk0 : null,
  getBlock: (x,y,z)=> (x>=0&&x<CHUNK&&z>=0&&z<CHUNK)? blocks[idx(x,y,z)] : 0,
  isOpaque: ()=>false, skyAt: (x,y,z)=> y >= 41 ? 1 : 0.5, lightAt: ()=>0,
};
const m = buildChunkMesh(world, chunk0, atlas);
const dirKeys = FACES.map(f=>f.dir.map((x)=>(Math.sign(x)||0)).join(','));

function check(buf, name) {
  if (!buf) { console.log(name, 'пустой'); return; }
  const p = buf.position, ix = buf.index;
  const g = (vi) => [p[vi*3], p[vi*3+1], p[vi*3+2]];
  const hist = {}; let badWinding = 0, nan = 0, aabbMax = [0,0,0];
  for (let q=0;q<buf.quads;q++) {
    for (const tri of [[0,1,2],[3,4,5]]) {
      const v0=g(ix[q*6+tri[0]]), v1=g(ix[q*6+tri[1]]), v2=g(ix[q*6+tri[2]]);
      const e1=[v1[0]-v0[0],v1[1]-v0[1],v1[2]-v0[2]], e2=[v2[0]-v0[0],v2[1]-v0[1],v2[2]-v0[2]];
      const n=[e1[1]*e2[2]-e1[2]*e2[1], e1[2]*e2[0]-e1[0]*e2[2], e1[0]*e2[1]-e1[1]*e2[0]];
      const area = Math.hypot(n[0],n[1],n[2]);
      if (!Number.isFinite(area)) { nan++; continue; }
      if (area < 1e-6) { badWinding++; continue; }
      const key = n.map((x)=>(Math.sign(x) || 0)).join(',');
      hist[key]=(hist[key]||0)+1;
      if (!dirKeys.includes(key)) badWinding++;
    }
    for (let k=0;k<4;k++){ const v=g(q*4+k); for(let a=0;a<3;a++) aabbMax[a]=Math.max(aabbMax[a], v[a]); }
  }
  const allDirs = Object.keys(hist).every(k=>dirKeys.includes(k));
  console.log(`${name}: квадов=${buf.quads} вырожденных=${badWinding} NaN=${nan} aabbMax=[${aabbMax.map(v=>v.toFixed(2))}] нормали=${JSON.stringify(hist)} ${allDirs && !badWinding ? '✔ ориентация верна' : '✘ ПРОБЛЕМА'}`);
  return hist;
}
check(m.solid, 'SOLID');
check(m.water, 'WATER');

// AO-проверка: блок камня в углу ямы должен иметь разный occlusion по вершинам
const b2 = new Uint8Array(CHUNK*CHUNK*HEIGHT);
for (let y=0;y<20;y++) for (let z=0;z<CHUNK;z++) for (let x=0;x<CHUNK;x++) b2[idx(x,y,z)] = STONE;
for (let y=18;y<20;y++) for (let z=8;z<16;z++) for (let x=8;x<16;x++) b2[idx(x,y,z)] = 0;  // яма
const c2 = { cx:0, cz:0, blocks:b2, skyH: new Uint8Array(CHUNK*CHUNK).fill(20), light: null };
const w2 = { terrain:{col:()=>({h:20})}, getChunk:(a,b)=>(a===0&&b===0)?c2:null, getBlock:(x,y,z)=> (x>=0&&x<CHUNK&&z>=0&&z<CHUNK)? b2[idx(x,y,z)] : 0, isOpaque:()=>true, skyAt:()=>1, lightAt:()=>0 };
const m2 = buildChunkMesh(w2, c2, atlas);
const lp = m2.solid.light;
const uniq = new Set(); for (let i=0;i<lp.length;i+=3) uniq.add(lp[i].toFixed(3));
console.log('разных уровней окклюзии в яме:', uniq.size, [...uniq].slice(0,8).join(' '));

// --- атрибут tint (оттенок биома) обязан быть у каждой геометрии, иначе в шейдере будет чёрный ---
function checkTint(buf, name) {
  const q = buf.quads ?? 0;
  if (!buf.tint) { console.log(`${name}: ✘ атрибута tint нет — чанк отрисуется чёрным`); return false; }
  let bad = 0, ones = 0;
  for (let i = 0; i < q * 4 * 3; i += 3) {
    const v = [buf.tint[i], buf.tint[i + 1], buf.tint[i + 2]];
    if (v.some((x) => !Number.isFinite(x) || x <= 0 || x > 2)) bad++;
    if (v[0] === 1 && v[1] === 1 && v[2] === 1) ones++;
  }
  const ok = bad === 0 && q > 0;
  console.log(`${name}: tint у ${q * 4 - ones} вершин отличается от белого, ошибок ${bad} ${ok ? '✔' : '✘'}`);
  return ok;
}
const tintOk = checkTint(m.solid, 'TINT');
if (!tintOk) process.exitCode = 1;
