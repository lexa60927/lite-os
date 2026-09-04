/**
 * Детерминированный шум для генерации мира.
 * Perlin 2D/3D + fbm/ridged + хеши для рассадки руд и деревьев.
 */

/** xorshift32 — компактный ПСЧ для сборки таблиц подстановки. */
export function makeRng(seed) {
  let s = (seed >>> 0) || 0x9e3779b9;
  return function rng() {
    s ^= s << 13; s >>>= 0;
    s ^= s >>> 17;
    s ^= s << 5; s >>>= 0;
    return s / 4294967296;
  };
}

const GRAD = [
  [1, 1, 0], [-1, 1, 0], [1, -1, 0], [-1, -1, 0],
  [1, 0, 1], [-1, 0, 1], [1, 0, -1], [-1, 0, -1],
  [0, 1, 1], [0, -1, 1], [0, 1, -1], [0, -1, -1],
];

function fade(t) { return t * t * t * (t * (t * 6 - 15) + 10); }
function lerp(a, b, t) { return a + (b - a) * t; }

export class Noise {
  constructor(seed = 1337) {
    const rng = makeRng(seed);
    const p = new Uint8Array(256);
    for (let i = 0; i < 256; i++) p[i] = i;
    for (let i = 255; i > 0; i--) {
      const j = (rng() * (i + 1)) | 0;
      const t = p[i]; p[i] = p[j]; p[j] = t;
    }
    this.perm = new Uint8Array(512);
    for (let i = 0; i < 512; i++) this.perm[i] = p[i & 255];
  }

  /** Классический Perlin 2D, диапазон примерно [-1, 1]. */
  perlin2(x, y) {
    const X = Math.floor(x) & 255;
    const Y = Math.floor(y) & 255;
    const xf = x - Math.floor(x);
    const yf = y - Math.floor(y);
    const u = fade(xf);
    const v = fade(yf);
    const perm = this.perm;
    const aa = perm[perm[X] + Y] % 12;
    const ab = perm[perm[X] + Y + 1] % 12;
    const ba = perm[perm[X + 1] + Y] % 12;
    const bb = perm[perm[X + 1] + Y + 1] % 12;
    const d = (g, dx, dy) => GRAD[g][0] * dx + GRAD[g][1] * dy;
    const x1 = lerp(d(aa, xf, yf), d(ba, xf - 1, yf), u);
    const x2 = lerp(d(ab, xf, yf - 1), d(bb, xf - 1, yf - 1), u);
    return lerp(x1, x2, v);
  }

  /** Perlin 3D для пещер и рудных жил. */
  perlin3(x, y, z) {
    const X = Math.floor(x) & 255;
    const Y = Math.floor(y) & 255;
    const Z = Math.floor(z) & 255;
    const xf = x - Math.floor(x);
    const yf = y - Math.floor(y);
    const zf = z - Math.floor(z);
    const u = fade(xf), v = fade(yf), w = fade(zf);
    const perm = this.perm;
    const A = perm[X] + Y, AA = perm[A] + Z, AB = perm[A + 1] + Z;
    const B = perm[X + 1] + Y, BA = perm[B] + Z, BB = perm[B + 1] + Z;
    const g = (h) => GRAD[perm[h] % 12];
    const dot = (gg, dx, dy, dz) => gg[0] * dx + gg[1] * dy + gg[2] * dz;
    const n = (h, dx, dy, dz) => dot(g(h), dx, dy, dz);
    const x1 = lerp(n(AA, xf, yf, zf), n(BA, xf - 1, yf, zf), u);
    const x2 = lerp(n(AB, xf, yf - 1, zf), n(BB, xf - 1, yf - 1, zf), u);
    const y1 = lerp(x1, x2, v);
    const x3 = lerp(n(AA + 1, xf, yf, zf - 1), n(BA + 1, xf - 1, yf, zf - 1), u);
    const x4 = lerp(n(AB + 1, xf, yf - 1, zf - 1), n(BB + 1, xf - 1, yf - 1, zf - 1), u);
    const y2 = lerp(x3, x4, v);
    return lerp(y1, y2, w);
  }

  /** Фрактальный шум (fBm). */
  fbm2(x, y, octaves = 4, lacunarity = 2, gain = 0.5) {
    let amp = 1, freq = 1, sum = 0, norm = 0;
    for (let i = 0; i < octaves; i++) {
      sum += amp * this.perlin2(x * freq, y * freq);
      norm += amp;
      amp *= gain;
      freq *= lacunarity;
    }
    return sum / norm;
  }

  fbm3(x, y, z, octaves = 3, lacunarity = 2, gain = 0.5) {
    let amp = 1, freq = 1, sum = 0, norm = 0;
    for (let i = 0; i < octaves; i++) {
      sum += amp * this.perlin3(x * freq, y * freq, z * freq);
      norm += amp;
      amp *= gain;
      freq *= lacunarity;
    }
    return sum / norm;
  }

  /** Гребневой шум — для хребтов и гор. */
  ridged2(x, y, octaves = 4) {
    let amp = 1, freq = 1, sum = 0, norm = 0;
    for (let i = 0; i < octaves; i++) {
      const n = 1 - Math.abs(this.perlin2(x * freq, y * freq));
      sum += amp * n * n;
      norm += amp;
      amp *= 0.5;
      freq *= 2;
    }
    return sum / norm;
  }
}

/** Стабильный хеш целых координат → [0,1). Используется для деревьев/руд. */
export function hash2(x, z, seed = 0) {
  let h = x * 374761393 + z * 668265263 + seed * 1274126177;
  h = (h ^ (h >>> 13)) * 1274126177;
  h = (h ^ (h >>> 16)) >>> 0;
  return h / 4294967296;
}

export function hash3i(x, y, z, seed = 0) {
  let h = x * 374761393 + y * 1103515245 + z * 668265263 + seed * 1274126177;
  h = (h ^ (h >>> 13)) * 1274126177;
  h = (h ^ (h >>> 16)) >>> 0;
  return h / 4294967296;
}

/** Строка сида → число (для ввода с клавиатуры). */
export function seedFromString(str) {
  const s = String(str).trim();
  if (s !== '' && !Number.isNaN(Number(s))) return Math.abs(Math.trunc(Number(s))) >>> 0;
  let h = 2166136261 >>> 0;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}
