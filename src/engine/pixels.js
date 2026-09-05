/**
 * Мини-«графический» слой: пиксельные тайлы 16×16 рисуются кодом,
 * никаких внешних ассетов. Каждый тайл — Uint8ClampedArray 16*16*4.
 */
import { hash2 } from './noise.js';

export const TILE = 16;      // размер пиксель-арт тайла
export const PAD = 8;        // отступ для mipmaps: 8px дублированной кромки
export const CELL = TILE + PAD * 2;
export const GRID = 16;      // тайлов по горизонтали/вертикали

const clamp = (v) => (v < 0 ? 0 : v > 255 ? 255 : v | 0);

const hexCache = new Map();
function hexToRgb(hex) {
  let rgb = hexCache.get(hex);
  if (rgb) return rgb;
  const n = parseInt(hex.slice(1), 16);
  rgb = [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  hexCache.set(hex, rgb);
  return rgb;
}

/** color + яркостной дельта → [r,g,b] */
export function tint(color, d = 0) {
  const c = typeof color === 'string' ? hexToRgb(color) : color;
  return [c[0] + d, c[1] + d, c[2] + d];
}

/** Класс пиксельного «холста» 16×16. */
export class PixelTile {
  constructor() {
    this.data = new Uint8ClampedArray(TILE * TILE * 4);
  }

  /** color: '#rrggbb' или [r,g,b] (можно с дробными дельтами). */
  set(x, y, color, a = 255) {
    x = x | 0; y = y | 0;
    if (x < 0 || y < 0 || x >= TILE || y >= TILE) return;
    const rgb = typeof color === 'string' ? hexToRgb(color) : color;
    const i = (y * TILE + x) * 4;
    this.data[i] = clamp(rgb[0]);
    this.data[i + 1] = clamp(rgb[1]);
    this.data[i + 2] = clamp(rgb[2]);
    this.data[i + 3] = a;
  }

  /** Добавить яркость пикселю (для «объёма» камня/тени). */
  shade(x, y, amount) {
    x = x | 0; y = y | 0;
    if (x < 0 || y < 0 || x >= TILE || y >= TILE) return;
    const i = (y * TILE + x) * 4;
    this.data[i] = clamp(this.data[i] + amount);
    this.data[i + 1] = clamp(this.data[i + 1] + amount);
    this.data[i + 2] = clamp(this.data[i + 2] + amount);
  }

  /** Прямоугольник. */
  rect(x0, y0, w, h, color, a = 255) {
    for (let y = y0; y < y0 + h; y++) for (let x = x0; x < x0 + w; x++) this.set(x, y, color, a);
    return this;
  }

  get(x, y) {
    const i = ((y | 0) * TILE + (x | 0)) * 4;
    return [this.data[i], this.data[i + 1], this.data[i + 2], this.data[i + 3]];
  }

  fill(rgb, a = 255) {
    for (let y = 0; y < TILE; y++) for (let x = 0; x < TILE; x++) this.set(x, y, rgb, a);
    return this;
  }

  /** Зашумленная заливка — основа большинства блоков. */
  noise(colors, seed = 0, amount = 8) {
    for (let y = 0; y < TILE; y++) {
      for (let x = 0; x < TILE; x++) {
        const r = hash2(x, y, seed);
        const c = colors[(r * colors.length) | 0] ?? colors[0];
        const d = (hash2(x + 7, y * 3 + 1, seed + 99) - 0.5) * amount;
        this.set(x, y, tint(c, d));
      }
    }
    return this;
  }

  /**
   * Заливка *плавным* низкочастотным полем (интерполяция coarse-решётки).
   * Даёт пятна по 3-6 px, как в Minecraft, а не «телевизионный» шум 1px,
   * который на расстоянии складывается в грязь.
   */
  soft(colors, seed = 0, amount = 8, cell = 5) {
    const sm = (v) => v * v * (3 - 2 * v);
    const g = (ix, iy) => hash2(ix, iy, seed);
    for (let y = 0; y < TILE; y++) {
      for (let x = 0; x < TILE; x++) {
        const fx = x / cell, fy = y / cell;
        const x0 = Math.floor(fx), y0 = Math.floor(fy);
        const tx = sm(fx - x0), ty = sm(fy - y0);
        const a = g(x0, y0), b = g(x0 + 1, y0), c = g(x0, y0 + 1), d = g(x0 + 1, y0 + 1);
        const v = (a * (1 - tx) + b * tx) * (1 - ty) + (c * (1 - tx) + d * tx) * ty;
        const col = colors[(v * colors.length) | 0] ?? colors[0];
        this.set(x, y, tint(col, (v - 0.5) * amount));
      }
    }
    return this;
  }

  /** Мелкое пер-пиксельное зерно — только чтобы разбить ровные заливки. */
  grain(amount = 5, seed = 0) {
    for (let y = 0; y < TILE; y++) for (let x = 0; x < TILE; x++) {
      this.shade(x, y, (hash2(x * 5 + 1, y * 7 + 3, seed) - 0.5) * amount);
    }
    return this;
  }

  /** Галька/вкрапления: аккуратные пятна size×size со светлой гранью сверху. */
  pebbles(color, count, seed = 0, size = 2, hi = 16, lo = -14) {
    for (let i = 0; i < count; i++) {
      const cx = 1 + ((hash2(i * 7 + 3, i * 5 + 11, seed) * (TILE - 2)) | 0);
      const cy = 1 + ((hash2(i * 13 + 5, i * 3 + 7, seed + 21) * (TILE - 2)) | 0);
      const w = 1 + ((hash2(i, i + 9, seed + 3) * size) | 0);
      const h = 1 + ((hash2(i + 4, i * 2 + 1, seed + 5) * size) | 0);
      for (let y = cy; y < cy + h; y++) for (let x = cx; x < cx + w; x++) {
        this.set(x, y, tint(color, (y === cy || x === cx) ? hi : (y === cy + h - 1 || x === cx + w - 1) ? lo : 0));
      }
    }
    return this;
  }

  /** Случайные крапинки. */
  speckles(color, count, seed = 0, spread = 10) {
    for (let i = 0; i < count; i++) {
      const rx = hash2(i * 3 + 1, i * 7 + 5, seed);
      const ry = hash2(i * 13 + 2, i * 5 + 9, seed + 1);
      const d = (hash2(i, i + 3, seed + 2) - 0.5) * spread;
      this.set((rx * TILE) | 0, (ry * TILE) | 0, tint(color, d));
    }
    return this;
  }

  /** Мягкие «пятна» (камни, рудные вкрапления). */
  /**
   * Пятнистая основа: irregular-кластеры 2-4px вместо интерполяции по сетке.
   * soft() считает значение по узлам решётки (cell) — на 16px-тайле это даёт
   * заметную диагональную решётку/«царапины», которые читаются как битая текстура.
   */
  mottle(colors, seed = 0, perColor = 5, minR = 1.5, maxR = 3.4, grain = 2.5) {
    this.fill(colors[0]);
    for (let i = 1; i < colors.length; i++) {
      for (let k = 0; k < perColor; k++) {
        const sd = (seed + i * 97 + k * 13) >>> 0;
        const cx = hash2(i * 7 + k, k * 31 + i, sd) * TILE;
        const cy = hash2(k * 17 + i, i * 13 + k, sd + 5) * TILE;
        const rad = minR + hash2(i, k, sd + 9) * (maxR - minR);
        for (let y = Math.floor(cy - rad); y <= cy + rad; y++) {
          for (let x = Math.floor(cx - rad); x <= cx + rad; x++) {
            const dx = x + 0.5 - cx, dy = y + 0.5 - cy;
            const d2 = dx * dx + dy * dy;
            if (d2 > rad * rad) continue;
            if (d2 < (rad - 0.7) ** 2 && hash2(x * 5 + i, y * 3 + k, sd + 21) > 0.8) continue;
            this.set(((x % TILE) + TILE) % TILE, ((y % TILE) + TILE) % TILE, colors[i]);
          }
        }
      }
    }
    if (grain) this.grain(grain, seed + 1009);
    return this;
  }

  blobs(color, count, seed = 0, size = 2.6) {
    for (let i = 0; i < count; i++) {
      const cx = hash2(i * 5 + 3, i * 11 + 7, seed) * TILE;
      const cy = hash2(i * 17 + 1, i * 23 + 4, seed + 40) * TILE;
      const rad = size * (0.6 + hash2(i, i * 2 + 1, seed + 7) * 0.8);
      for (let y = Math.floor(cy - rad); y <= cy + rad; y++) {
        for (let x = Math.floor(cx - rad); x <= cx + rad; x++) {
          const dx = x + 0.5 - cx, dy = y + 0.5 - cy;
          if (dx * dx + dy * dy > rad * rad) continue;
          const d = (hash2(x * 3, y * 5, seed + 11) - 0.5) * 14;
          this.set(x, y, tint(color, d));
        }
      }
    }
    return this;
  }

  /** Обводка контура сверху/снизу/по бокам (для стекла, досок и т.п.). */
  border(color, alpha = 255) {
    for (let i = 0; i < TILE; i++) {
      this.set(i, 0, color, alpha);
      this.set(i, TILE - 1, color, alpha);
      this.set(0, i, color, alpha);
      this.set(TILE - 1, i, color, alpha);
    }
    return this;
  }

  clear() {
    this.data.fill(0);
    return this;
  }
}

/**
 * Собирает все тайлы в один квадратный атлас (Uint8ClampedArray RGBA)
 * с padding'ом по краям тайлов. Возвращаемый объект подходит THREE.DataTexture.
 */
export function packAtlas(tiles) {
  const size = CELL * GRID;
  const out = { data: new Uint8ClampedArray(size * size * 4), width: size, height: size };
  const dst = out.data;
  for (const t of tiles) {
    const col = t.index % GRID;
    const row = (t.index / GRID) | 0;
    const ox = col * CELL + PAD;
    const oy = row * CELL + PAD;
    // сначала сам тайл
    for (let y = 0; y < TILE; y++) {
      for (let x = 0; x < TILE; x++) {
        const si = (y * TILE + x) * 4;
        const di = ((oy + y) * size + (ox + x)) * 4;
        dst[di] = t.tile.data[si];
        dst[di + 1] = t.tile.data[si + 1];
        dst[di + 2] = t.tile.data[si + 2];
        dst[di + 3] = t.tile.data[si + 3];
      }
    }
    // затем расширяем крайние пиксели в padding — mipmaps не тянут чужие тайлы
    for (let y = -PAD; y < TILE + PAD; y++) {
      for (let x = -PAD; x < TILE + PAD; x++) {
        if (x >= 0 && x < TILE && y >= 0 && y < TILE) continue;
        const sx = Math.max(0, Math.min(TILE - 1, x));
        const sy = Math.max(0, Math.min(TILE - 1, y));
        const si = (sy * TILE + sx) * 4;
        const di = ((oy + y) * size + (ox + x)) * 4;
        if (t.tile.data[si + 3] === 0 && t.transparentPadding) {
          dst[di + 3] = 0;
          continue;
        }
        dst[di] = t.tile.data[si];
        dst[di + 1] = t.tile.data[si + 1];
        dst[di + 2] = t.tile.data[si + 2];
        dst[di + 3] = Math.max(dst[di + 3], t.tile.data[si + 3]);
      }
    }
  }
  return out;
}

/** 16-пиксельный тайл → canvas (для иконок интерфейса). */
export function tileToCanvas(tile, scale = 1) {
  const c = document.createElement('canvas');
  c.width = TILE * scale;
  c.height = TILE * scale;
  const ctx = c.getContext('2d');
  const img = new ImageData(tile.data, TILE, TILE);
  const tmp = document.createElement('canvas');
  tmp.width = TILE; tmp.height = TILE;
  tmp.getContext('2d').putImageData(img, 0, 0);
  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(tmp, 0, 0, c.width, c.height);
  return c;
}
