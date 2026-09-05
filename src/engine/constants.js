export const CHUNK = 16;          // размер чанка по X/Z
export const HEIGHT = 96;         // высота мира
export const SEA = 34;            // уровень моря
export const SEA_TOP = SEA + 4;   // верх воды: выше неё меш не укорачивают, от неё же считается дымка
export const SNOW_LINE = 60;      // выше — снежные вершины
export const MAX_EDIT_Y = HEIGHT - 1;

export const idx = (x, y, z) => (y * CHUNK + z) * CHUNK + x;
/**
 * Чанковый ключ для Map/Set. Упаковка со смещением корректна для отрицательных
 * координат в диапазоне ±32767 чанков (±524272 блоков).
 */
export const KEY_BIAS = 32768;
export const KEY_BASE = 65536;
export const chunkKey = (cx, cz) => (cx + KEY_BIAS) * KEY_BASE + (cz + KEY_BIAS);
export function decodeChunkKey(k) {
  const cx = Math.floor(k / KEY_BASE) - KEY_BIAS;
  const cz = (k % KEY_BASE) - KEY_BIAS;
  return [cx, cz];
}
export const blockKey = (x, y, z) => x + ',' + y + ',' + z;
