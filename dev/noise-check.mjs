import { Noise } from '../src/engine/noise.js';
const n = new Noise(12345);
let mn=9,mx=-9,sum=0,cnt=0;
for (let i=0;i<200;i++){ const v=n.perlin2(i*0.1, i*0.37); mn=Math.min(mn,v); mx=Math.max(mx,v); sum+=v; cnt++; }
console.log('perlin2 min/max/avg', mn.toFixed(3), mx.toFixed(3), (sum/cnt).toFixed(3));
console.log('samples', Array.from({length:12},(_,i)=>+n.perlin2(i*0.7,3.3).toFixed(3)));
console.log('fbm2', Array.from({length:8},(_,i)=>+n.fbm2(i*0.7,i*0.3,4).toFixed(3)));
let hmn=9,hmx=-9; const hs=[];
for(let x=0;x<64;x++){const v=n.fbm2(x/40, 7.5, 4); hs.push(+v.toFixed(2)); hmn=Math.min(hmn,v);hmx=Math.max(hmx,v);}
console.log('fbm2 along line', hs, hmn.toFixed(2), hmx.toFixed(2));
console.log('ridged', Array.from({length:8},(_,i)=>+n.ridged2(i*0.9,i*0.4,4).toFixed(3)));
console.log('perlin3', Array.from({length:8},(_,i)=>+n.perlin3(i*0.8,i*0.5,2.1).toFixed(3)));
