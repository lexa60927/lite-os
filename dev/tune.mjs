import { Noise } from '../src/engine/noise.js';
const SEA = 34, H = 96;
const clamp01 = (v) => (v < 0 ? 0 : v > 1 ? 1 : v);
const sstep = (a, b, x) => { const t = clamp01((x - a) / (b - a)); return t * t * (3 - 2 * t); };
function mk(seed) {
  const h = new Noise(seed ^ 0x51ed2701);
  return (x, z) => {
    const cont = h.fbm2(x / 330, z / 330, 4) * 0.72 + 0.5;          // ~0..1
    const land = sstep(0.40, 0.50, cont);
    const deep = sstep(0.40, 0.20, cont);
    let y = SEA + 8 + (land - 0.5) * 8 - deep * 36;
    const hills = h.fbm2(x / 105, z / 105, 4) * 1.45;
    y += hills * 11 * (0.3 + 0.7 * land);
    const rough = h.fbm2(x / 21, z / 21, 2) * 1.45;
    y += rough * 2.4;
    // горы: поле хребтов, ограничено крупными регионами
    const ridged = h.ridged2(x / 200, z / 200, 4);
    const field = Math.pow(clamp01(ridged * 1.5 - 0.34), 1.2);
    const region = sstep(0.50, 0.70, h.fbm2(x / 520 + 220, z / 520 - 120, 2) * 0.72 + 0.5);
    const mtnStep = Math.round(field * 9) / 9;   // уступы
    y += mtnStep * region * 78 * land;
    return Math.max(3, Math.min(H - 6, Math.round(y)));
  };
}
for (const seed of [12345, 777, 20260904, 42]) {
  const height = mk(seed);
  let arr = [], mn = 999, mx = -999;
  for (let z = 0; z < 600; z += 2) for (let x = 0; x < 600; x += 2) { const v = height(x, z); arr.push(v); mn = Math.min(mn, v); mx = Math.max(mx, v); }
  arr.sort((a, b) => a - b);
  const q = (p) => arr[Math.floor(p * (arr.length - 1))];
  const pct = (f) => (arr.filter(f).length / arr.length * 100).toFixed(1);
  const avg = arr.reduce((a, b) => a + b, 0) / arr.length;
  const std = Math.sqrt(arr.reduce((a, b) => a + (b - avg) ** 2, 0) / arr.length);
  console.log(`seed ${seed}: min=${mn} p5=${q(.05)} p25=${q(.25)} med=${q(.5)} p75=${q(.75)} p95=${q(.95)} p99=${q(.99)} max=${mx} std=${std.toFixed(1)} | вода ${pct(v=>v<SEA)}% гор ${pct(v=>v>62)}% снег ${pct(v=>v>72)}% обрывы>6: ${pct((v,i)=> i>200 && Math.abs(v-arr[i-1])>6)}%`);
  if (seed === 12345) {
    let map = '';
    for (let z = 0; z < 240; z += 3) { let row = ''; for (let x = 0; x < 240; x += 3) { const v = height(x, z); row += v < SEA - 8 ? '~' : v < SEA - 1 ? '≈' : v <= SEA + 1 ? '.' : v < 45 ? '-' : v < 55 ? '=' : v < 65 ? '+' : v < 75 ? '#' : 'A'; } map += row + '\n'; }
    console.log(map);
  }
}
