/**
 * Рендер-превью без браузера: берёт настоящие меши чанков (тот же mesher, что и в игре)
 * и растеризует их софтверно — перспектива, z-буфер, nearest-выборка атласа, пер-вершинный
 * свет и оттенок биома. Нужен, чтобы глазами проверить текстуры, свет и рельеф там,
 * где WebGL недоступен (headless-песочница, CI).
 *
 *   node dev/render-view.mjs [--seed 42] [--cx 0] [--cz 0] [--r 2]
 *                            [--yaw 0.7] [--pitch -0.42] [--dist 30] [--height 0]
 *                            [--w 960] [--h 560] [--time 0.28] [--out preview.png]
 *
 * --height 0 значит «встать на рельеф», иначе — абсолютная Y камеры.
 * --time — время суток 0..1 (0.28 ≈ утро), влияет на солнце и туман так же, как в игре.
 */
import fs from 'node:fs';
import zlib from 'node:zlib';
import { World } from '../src/engine/world.js';
import { buildChunkMesh, mesherFlags } from '../src/engine/mesher.js';
import { buildTiles } from '../src/engine/tiles.js';
import { packAtlas, TILE } from '../src/engine/pixels.js';
import { CHUNK } from '../src/engine/constants.js';

const args = {};
for (let i = 2; i < process.argv.length; i += 2) args[process.argv[i].replace(/^--/, '')] = process.argv[i + 1];
const num = (k, d) => (args[k] === undefined ? d : +args[k]);
const W = num('w', 960), H = num('h', 560);
const seed = num('seed', 42);
const R = num('r', 2);
const cx0 = num('cx', 0), cz0 = num('cz', 0);
const yaw = num('yaw', 0.7), pitch = num('pitch', -0.42);
const dist = num('dist', 30);
const absoluteY = num('height', 0);   // 0 = встать на рельеф
const timeOfDay = num('time', 0.28);
const out = args.out ?? 'preview.png';
const water = args.water !== undefined;

mesherFlags.ao = true;
mesherFlags.smoothLight = true;

const { tiles, index } = buildTiles();
const packed = packAtlas(tiles);
const atlas = { index, tile: TILE, cell: packed.width / 16, grid: 16 };
const A = packed.data, AW = packed.width;

// солнце и туман — те же формулы, что в sky.js (day = elev*2.1+0.18)
function skyAtTime(t) {
  const angle = (t - 0.25) * Math.PI * 2 + Math.PI / 2;
  const elev = Math.sin(angle) / Math.hypot(Math.cos(angle), Math.sin(angle), 0.34);
  const day = Math.max(0, Math.min(1, elev * 2.1 + 0.18));
  const dusk = Math.max(0, Math.min(1, 1 - Math.abs(elev) * 4.5));
  const night = 1 - day;
  const mix = (a, b, k) => [a[0] + (b[0] - a[0]) * k, a[1] + (b[1] - a[1]) * k, a[2] + (b[2] - a[2]) * k];
  let hor = mix([0.72, 0.85, 0.98], [0.05, 0.07, 0.14], night);
  hor = mix(hor, [0.98, 0.46, 0.22], dusk * 0.75);
  return { day, fog: hor };
}

const world = new World(seed);
const ox = cx0 * CHUNK, oz = cz0 * CHUNK;
// ставим камеру над самой высокой точкой окрестности — иначе она окажется внутри горы
let targetY = 0;
for (let dz = -R; dz <= R; dz++) for (let dx = -R; dx <= R; dx++) {
  const h = world.terrain.col(ox + dx * CHUNK + 8, oz + dz * CHUNK + 8).h;
  if (h > targetY) targetY = h;
}

// --------------------------------------------------------------- геометрия
const P = [], U = [], L = [], T = [], I = [];
let tris = 0, skipped = 0;
for (let dz = -R; dz <= R; dz++) {
  for (let dx = -R; dx <= R; dx++) {
    const cx = cx0 + dx, cz = cz0 + dz;
    const chunk = world.ensureChunk(cx, cz);
    if (!chunk?.blocks) { skipped++; continue; }
    const mesh = buildChunkMesh(world, chunk, atlas);
    for (const key of water ? ['solid', 'water'] : ['solid']) {
      const q = mesh?.[key];
      if (!q || !q.index?.length) continue;
      const base = P.length / 3;
      const nv = q.position.length / 3;
      const ddx = cx * CHUNK, ddz = cz * CHUNK;
      for (let i = 0; i < nv; i++) {
        P.push(q.position[i * 3] + ddx, q.position[i * 3 + 1], q.position[i * 3 + 2] + ddz);
        U.push(q.uv[i * 2], q.uv[i * 2 + 1]);
        L.push(q.light[i * 4], q.light[i * 4 + 1], q.light[i * 4 + 2]);
        if (q.tint) T.push(q.tint[i * 3], q.tint[i * 3 + 1], q.tint[i * 3 + 2]);
        else T.push(1, 1, 1);
      }
      for (let i = 0; i < q.index.length; i++) I.push(q.index[i] + base);
      tris += q.index.length / 3;
    }
  }
}

// ------------------------------------------------------------------ камера
const sky = skyAtTime(timeOfDay);
const sun = sky.day;
const fog = sky.fog;
const tx = ox + 8, tz = oz + 8, ty = Math.min(targetY + 1, world.terrain.col(ox + 8, oz + 8).h + 1);
const cx = tx + Math.cos(pitch) * Math.sin(yaw) * dist;
const cz = tz + Math.cos(pitch) * Math.cos(yaw) * dist;
const cy = (absoluteY > 0 ? absoluteY : Math.max(ty, targetY + 6) - Math.sin(pitch) * dist);
let fx = tx - cx, fy = ty - cy, fz = tz - cz;
const fl = Math.hypot(fx, fy, fz); fx /= fl; fy /= fl; fz /= fl;
let rx = fz, ry = 0, rz = -fx;
const rl = Math.hypot(rx, ry, rz) || 1; rx /= rl; rz /= rl;
const ux = fy * rz - fz * ry, uy = fz * rx - fx * rz, uz = fx * ry - fy * rx;
const FOV = 1 / Math.tan((70 * Math.PI / 180) / 2);

const col = new Float32Array(W * H * 3);
const zb = new Float32Array(W * H).fill(Infinity);
for (let i = 0; i < W * H; i++) {
  col[i * 3] = fog[0]; col[i * 3 + 1] = fog[1]; col[i * 3 + 2] = fog[2];
}
const far = num('far', (2 * R + 1) * CHUNK / 2);
const fogStart = far * 0.55, fogEnd = far * 1.02, fogExp = 0.0007;

function putVertex(i, o) {
  const x = P[i * 3], y = P[i * 3 + 1], z = P[i * 3 + 2];
  const vx = x - cx, vy = y - cy, vz = z - cz;
  const ex = vx * rx + vy * ry + vz * rz;
  const ey = vx * ux + vy * uy + vz * uz;
  const ez = vx * fx + vy * fy + vz * fz;
  if (!(ez > 0.05)) { o.bad = true; return o; }
  o.x = (ex / ez * FOV * 0.5 + 0.5) * W;
  o.y = (0.5 - ey / ez * FOV * 0.5) * H;
  o.z = ez;
  o.u = U[i * 2]; o.v = U[i * 2 + 1];   // DataTexture: v=0 — первая строка буфера
  o.oc = L[i * 3], o.sk = L[i * 3 + 1], o.bl = L[i * 3 + 2];
  o.tr = T[i * 3], o.tg = T[i * 3 + 1], o.tb = T[i * 3 + 2];
  o.f = 1 / ez;
  o.bad = false;
  return o;
}
const va = {}, vb = {}, vc = {};
for (let t = 0; t < tris; t++) {
  putVertex(I[t * 3], va); putVertex(I[t * 3 + 1], vb); putVertex(I[t * 3 + 2], vc);
  if (va.bad || vb.bad || vc.bad) continue;
  let minx = Math.min(va.x, vb.x, vc.x), maxx = Math.max(va.x, vb.x, vc.x);
  let miny = Math.min(va.y, vb.y, vc.y), maxy = Math.max(va.y, vb.y, vc.y);
  if (maxx < 0 || maxy < 0 || minx > W || miny > H) continue;
  minx = Math.max(0, minx | 0); miny = Math.max(0, miny | 0);
  maxx = Math.min(W - 1, Math.ceil(maxx)); maxy = Math.min(H - 1, Math.ceil(maxy));
  const d = (vb.x - va.x) * (vc.y - va.y) - (vc.x - va.x) * (vb.y - va.y);
  if (Math.abs(d) < 1e-9) continue;
  const id = 1 / d;
  for (let py = miny; py <= maxy; py++) {
    for (let px = minx; px <= maxx; px++) {
      const q = px + 0.5, r = py + 0.5;
      const w0 = ((vb.x - q) * (vc.y - r) - (vc.x - q) * (vb.y - r)) * id;
      const w1 = ((vc.x - q) * (va.y - r) - (va.x - q) * (vc.y - r)) * id;
      const w2 = 1 - w0 - w1;
      if (w0 < -0.001 || w1 < -0.001 || w2 < -0.001) continue;
      const z = w0 * va.z + w1 * vb.z + w2 * vc.z;
      const pxi = py * W + px;
      if (z >= zb[pxi]) continue;
      const wf0 = w0 * va.f, wf1 = w1 * vb.f, wf2 = w2 * vc.f;
      const ws = wf0 + wf1 + wf2;
      if (!(ws > 0)) continue;
      const u = (wf0 * va.u + wf1 * vb.u + wf2 * vc.u) / ws;
      const v = (wf0 * va.v + wf1 * vb.v + wf2 * vc.v) / ws;
      const tw = 1 / ws;
      const oc = (wf0 * va.oc + wf1 * vb.oc + wf2 * vc.oc) * tw;
      const sk = (wf0 * va.sk + wf1 * vb.sk + wf2 * vc.sk) * tw;
      const bl = (wf0 * va.bl + wf1 * vb.bl + wf2 * vc.bl) * tw;
      const tr = (wf0 * va.tr + wf1 * vb.tr + wf2 * vc.tr) * tw;
      const tg = (wf0 * va.tg + wf1 * vb.tg + wf2 * vc.tg) * tw;
      const tb = (wf0 * va.tb + wf1 * vb.tb + wf2 * vc.tb) * tw;
      const tx0 = Math.min(AW - 1, Math.max(0, Math.floor(u * AW)));
      const ty0 = Math.min(AW - 1, Math.max(0, Math.floor(v * AW)));
      const si = (ty0 * AW + tx0) * 4;
      if (A[si + 3] < 100) continue;
      zb[pxi] = z;
      const lit = Math.min(1.45, (0.14 + 0.92 * sun * sk) * oc + 0.85 * bl * (0.25 + 0.75 * oc));
      let cr = (A[si] / 255) * tr * lit;
      let cg = (A[si + 1] / 255) * tg * lit;
      let cb = (A[si + 2] / 255) * tb * lit;
      const lin = Math.max(0, Math.min(1, (z - fogStart) / Math.max(1, fogEnd - fogStart)));
      const fg = Math.max(lin * lin, 1 - Math.exp(-fogExp * fogExp * z * z));
      cr = cr * (1 - fg) + fog[0] * fg;
      cg = cg * (1 - fg) + fog[1] * fg;
      cb = cb * (1 - fg) + fog[2] * fg;
      col[pxi * 3] = Math.min(1, cr); col[pxi * 3 + 1] = Math.min(1, cg); col[pxi * 3 + 2] = Math.min(1, cb);
    }
  }
}

// --------------------------------------------------------------------- PNG
function crc32(buf) {
  let c, table = crc32.t ?? (crc32.t = (() => {
    const tt = new Int32Array(256);
    for (let n = 0; n < 256; n++) { c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1; tt[n] = c; }
    return tt;
  })());
  c = -1;
  for (let i = 0; i < buf.length; i++) c = table[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ -1) >>> 0;
}
function chunk(type, data) {
  const len = Buffer.alloc(4); len.writeUInt32BE(data.length);
  const td = Buffer.concat([Buffer.from(type, 'ascii'), data]);
  const crc = Buffer.alloc(4); crc.writeUInt32BE(crc32(td));
  return Buffer.concat([len, td, crc]);
}
const raw = Buffer.alloc(H * (W * 3 + 1));
for (let y = 0; y < H; y++) {
  raw[y * (W * 3 + 1)] = 0;
  for (let x = 0; x < W; x++) {
    const i = (y * W + x) * 3, o = y * (W * 3 + 1) + 1 + x * 3;
    for (let k = 0; k < 3; k++) raw[o + k] = Math.round(Math.pow(Math.max(0, col[i + k]), 1 / 2.2) * 255);
  }
}
const ihdr = Buffer.alloc(13);
ihdr.writeUInt32BE(W, 0); ihdr.writeUInt32BE(H, 4);
ihdr[8] = 8; ihdr[9] = 2; ihdr[10] = 0; ihdr[11] = 0; ihdr[12] = 0;
const png = Buffer.concat([
  Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
  chunk('IHDR', ihdr),
  chunk('IDAT', zlib.deflateSync(raw, { level: 6 })),
  chunk('IEND', Buffer.alloc(0)),
]);
fs.writeFileSync(out, png);
console.log(`VIEW ${out} · ${W}×${H} · чанков ${(2 * R + 1) ** 2 - skipped} (пропущено ${skipped}) · троек ${tris} · сид ${seed} · чанк ${cx0},${cz0} · время ${timeOfDay}`);
