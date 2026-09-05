/**
 * Плоские таблицы свойств блоков (числовые) — горячий путь меширования
 * не должен лезть в объекты и строки.
 */
import { BLOCKS } from './blocks.js';

export const R_NONE = 0, R_CUBE = 1, R_LIQUID = 2, R_CROSS = 3, R_TORCH = 4;

const n = BLOCKS.length;
const f = (i, def, key, dflt = 0) => (def[key] ? 1 : dflt);

export const OPAQUE = new Uint8Array(n);
export const SOLID = new Uint8Array(n);
export const RENDER = new Uint8Array(n);
export const HIDE_SAME = new Uint8Array(n);
export const CUTOUT = new Uint8Array(n);
export const FULL_BRIGHT = new Uint8Array(n);
export const REPLACEABLE = new Uint8Array(n);
export const LIGHT = new Float32Array(n);
export const INSET = new Float32Array(n);
export const ITEM = new Uint8Array(n);
/** Блок берёт цвет из BIOME_TINT (трава, листва, растения). */
export const TINTED = new Uint8Array(n);
/** Жидкость — свой (более слабый) оттенок биома. */
export const WATER_TINT = new Uint8Array(n);

for (let i = 0; i < n; i++) {
  const def = BLOCKS[i];
  OPAQUE[i] = f(i, def, 'opaque');
  SOLID[i] = f(i, def, 'solid');
  CUTOUT[i] = f(i, def, 'cutout');
  HIDE_SAME[i] = f(i, def, 'hideSame');
  FULL_BRIGHT[i] = f(i, def, 'fullBright');
  REPLACEABLE[i] = f(i, def, 'replaceable');
  LIGHT[i] = def.light || 0;
  INSET[i] = def.inset || 0;
  ITEM[i] = def.render === 'item' ? 1 : 0;
  TINTED[i] = def.tinted ? 1 : 0;
  WATER_TINT[i] = def.liquid ? 1 : 0;
  RENDER[i] = def.render === 'cube' ? R_CUBE
    : def.render === 'liquid' ? R_LIQUID
      : def.render === 'cross' ? R_CROSS
        : def.render === 'torch' ? R_TORCH : R_NONE;
}
