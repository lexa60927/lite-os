/**
 * Лист тайлов атласа в PNG (увеличение ×3, без bleed-поля), чтобы смотреть
 * текстуры глазами, а не по массивам: `node dev/render-tiles.mjs [out.png]`
 */
import { deflateSync } from 'node:zlib';
import { writeFileSync } from 'node:fs';
import { buildTiles } from '../src/engine/tiles.js';
import { packAtlas, GRID, TILE, PAD } from '../src/engine/pixels.js';

const out = process.argv[2] ?? '/home/user/tiles-sheet.png';
const S = 3;
const { tiles } = buildTiles();
const packed = packAtlas(tiles);
const cells = 16;                                   // 16×16 сетка
const size = cells * (TILE * S + 1);
const img = Buffer.alloc(size * size * 3);
img.fill(0x18);                                      // тёмный фон между тайлами
for (let i = 0; i < cells * cells; i++) {
  const col = i % cells, row = (i / cells) | 0;
  const ox = col * (TILE * S + 1) + S / 2 | 0, oy = row * (TILE * S + 1) + (S / 2 | 0);
  for (let y = 0; y < TILE; y++) {
    for (let x = 0; x < TILE; x++) {
      const t = tiles[i];
      let r = 40, g = 40, b = 40;
      if (t) {
        const si = ((y + 0) * TILE + x) * 4;
        const a = t.tile.data[si + 3];
        const mix = (c) => Math.round((t.tile.data[si + c] * a + 24 * (255 - a)) / 255);
        r = mix(0); g = mix(1); b = mix(2);
      }
      for (let dy = 0; dy < S; dy++) {
        for (let dx = 0; dx < S; dx++) {
          const p = (((oy + y * S + dy) * size) + ox + x * S + dx) * 3;
          img[p] = r; img[p + 1] = g; img[p + 2] = b;
        }
      }
    }
  }
}
const raw = Buffer.alloc(size * (size * 3 + 1));
for (let y = 0; y < size; y++) {
  raw[y * (size * 3 + 1)] = 0;
  img.copy(raw, y * (size * 3 + 1) + 1, y * size * 3, (y + 1) * size * 3);
}
const crcTable = [];
for (let n = 0; n < 256; n++) { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1; crcTable[n] = c >>> 0; }
const crc = (buf) => { let c = 0xffffffff; for (const b of buf) c = crcTable[(c ^ b) & 255] ^ (c >>> 8); return (c ^ 0xffffffff) >>> 0; };
const chunk = (type, data) => {
  const len = Buffer.alloc(4); len.writeUInt32BE(data.length);
  const td = Buffer.concat([Buffer.from(type), data]);
  const cc = Buffer.alloc(4); cc.writeUInt32BE(crc(td));
  return Buffer.concat([len, td, cc]);
};
const ihdr = Buffer.alloc(13);
ihdr.writeUInt32BE(size, 0); ihdr.writeUInt32BE(size, 4);
ihdr[8] = 8; ihdr[9] = 2;                                     // 8 бит, truecolor
writeFileSync(out, Buffer.concat([
  Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
  chunk('IHDR', ihdr), chunk('IDAT', deflateSync(raw)), chunk('IEND', Buffer.alloc(0)),
]));
console.log(`TILES ${out} · ${size}×${size} · тайлов ${tiles.length} · PAD ${PAD}`);
