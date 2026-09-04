/** Все пиксель-арт тайлы атласа. Индекс = позиция в сетке атласа. */
import { PixelTile, GRID } from './pixels.js';
import { hash2 } from './noise.js';

const C = {
  dirt: ['#866043', '#79553a', '#6d4c33', '#93704f', '#5f4228'],
  dirtDark: ['#5b4026', '#6a4b30'],
  grass: ['#5aa832', '#4f9a2c', '#67b83a', '#438a27', '#72c446'],
  grassDark: ['#3b7a24', '#2f6a1e'],
  stone: ['#8a8a8a', '#7f7f7f', '#949494', '#767676', '#9d9d9d'],
  cobble: ['#8f8f8f', '#7a7a7a', '#9e9e9e', '#6b6b6b'],
  sand: ['#e0cfa1', '#d8c596', '#e8d8ad', '#cdbc8c'],
  sandstone: ['#dbcb94', '#d2c088', '#e3d5a3', '#c9b87e'],
  gravel: ['#8a8580', '#7b7671', '#999494', '#6e6a66', '#a39d95'],
  log: ['#6b5133', '#5d4529', '#785c3c', '#4e3a22'],
  logRing: ['#a8874f', '#96773f', '#b99a5f'],
  leaves: ['#3f7d24', '#356c1e', '#4a8f2c', '#2c5d19', '#57a238'],
  planks: ['#b98d54', '#ac8149', '#c69a61', '#9e7640'],
  water: ['#3b6ecc', '#2f5fbd', '#4879d6', '#2a55aa'],
  bedrock: ['#3a3a3a', '#4a4a4a', '#2b2b2b', '#565656'],
  snow: ['#f4fbff', '#e8f4fb', '#ffffff', '#dcebf5'],
  coal: ['#2b2b2b', '#1d1d1d', '#3a3a3a'],
  iron: ['#c9915f', '#b57f52', '#dda874'],
  gold: ['#f5d33c', '#e0bb25', '#fff07a'],
  diamond: ['#4fe3dd', '#33c7d6', '#8ff6f2'],
  redstone: ['#c02b2b', '#9c1f1f', '#e04040'],
  brick: ['#a2554a', '#8f4a40', '#b06257'],
  mortar: ['#c9c2ba', '#d5cec6'],
  obsidian: ['#1a1226', '#241a35', '#120c1c', '#3a2a55'],
  cactus: ['#4d8f3a', '#3f7d2f', '#5aa145'],
  woolW: ['#e9e9e9', '#dedede', '#f2f2f2'],
  woolR: ['#b02e2e', '#9c2727', '#c13a3a'],
  woolB: ['#2f4ecb', '#2741b3', '#3a5cdb'],
  woolY: ['#e0c02f', '#c9a926', '#f0d346'],
  woolL: ['#a6d434', '#94c02a', '#b6e246'],
  woolK: ['#242424', '#1b1b1b', '#313131'],
  glow: ['#f6d98a', '#e8c26a', '#fff0b0', '#c99f4f'],
  stoneBrick: ['#8f8f8f', '#828282', '#9c9c9c', '#747474'],
};

function t(fn) {
  const tile = new PixelTile();
  fn(tile);
  return tile;
}

/** Простая кромка «слой сверху»: зелёные зубцы травы поверх земли. */
function overlayTop(tile, seed, palette, topColors, base = 3, extra = 4) {
  tile.noise(palette, seed, 10);
  for (let x = 0; x < 16; x++) {
    const h = base + ((hash2(x, 1, seed) * extra) | 0);
    for (let y = 0; y < h; y++) {
      tile.set(x, y, topColors[(hash2(x, y, seed + 3) * topColors.length) | 0]);
    }
  }
  return tile;
}

const painters = {
  grass_top: (tl) => tl.noise(C.grass, 11, 14).speckles('#3d7a22', 22, 12, 8),
  grass_side: (tl) => overlayTop(tl, 21, C.dirt, C.grass, 3, 4),
  dirt: (tl) => tl.noise(C.dirt, 3, 12).speckles('#5b4026', 26, 5, 10),
  podzol: (tl) => tl.noise(['#6b4f2f', '#5c4227', '#7a5c39', '#4a6b2a'], 61, 12),
  stone: (tl) => tl.noise(C.stone, 7, 12).blobs('#6e6e6e', 3, 8, 2.2),
  cobblestone: (tl) => {
    tl.noise(C.stone, 5, 10);
    // сетка «булыжника» со светлыми камнями и тёмными швами
    const cells = [[0, 0, 7, 6], [8, 0, 7, 4], [0, 7, 4, 8], [5, 7, 10, 5], [5, 13, 10, 2], [13, 5, 2, 10]];
    for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) {
      let inside = false;
      for (const [cx, cy, cw, ch] of cells) {
        if (x >= cx + 1 && x < cx + cw - 1 && y >= cy + 1 && y < cy + ch - 1) inside = true;
      }
      if (!inside) tl.set(x, y, ['#5a5a5a', '#636363', '#4f4f4f'][(hash2(x, y, 42) * 3) | 0]);
      else tl.set(x, y, ['#9a9a9a', '#8b8b8b', '#a6a6a6', '#7e7e7e'][(hash2(x, y, 91) * 4) | 0]);
    }
    return tl;
  },
  stone_bricks: (tl) => {
    tl.noise(C.stoneBrick, 33, 8);
    for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) {
      const row = (y / 8) | 0;
      const off = row % 2 ? 4 : 0;
      const seamH = y % 8 === 0;
      const seamV = ((x + off) % 8 === 7);
      if (seamH || seamV) tl.set(x, y, ['#6a6a6a', '#626262'][(hash2(x, y, 4) * 2) | 0]);
    }
    return tl;
  },
  sand: (tl) => tl.noise(C.sand, 17, 8).speckles('#c9b781', 18, 19, 6),
  sandstone_side: (tl) => {
    tl.noise(C.sandstone, 23, 6);
    for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) {
      if (y === 0 || y === 15) tl.set(x, y, '#c0ae75');
      else if (hash2(x, y * 2, 55) > 0.94) tl.set(x, y, '#c8b67f');
    }
    return tl;
  },
  sandstone_top: (tl) => tl.noise(C.sandstone, 29, 10).border('#c0ae75'),
  gravel: (tl) => tl.noise(C.gravel, 37, 16).blobs('#6e6a66', 5, 41, 2.0),
  log_side: (tl) => {
    tl.noise(C.log, 43, 8);
    for (let x = 0; x < 16; x++) {
      const dark = hash2(x, 0, 47) > 0.6;
      for (let y = 0; y < 16; y++) {
        const jitter = hash2(x * 2, y, 51) > 0.88;
        if (dark || jitter) tl.set(x, y, ['#4e3a22', '#573f26'][(hash2(x, y, 5) * 2) | 0]);
      }
    }
    return tl;
  },
  log_top: (tl) => {
    tl.noise(C.logRing, 53, 6);
    for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) {
      const d = Math.hypot(x - 7.5, y - 7.5);
      const ring = Math.sin(d * 2.1) > 0.2;
      tl.set(x, y, ring ? '#8a6a3a' : '#a8874f');
      if (d > 7.2) tl.set(x, y, C.log[(hash2(x, y, 61) * 4) | 0]);
    }
    return tl;
  },
  leaves: (tl) => {
    tl.clear();
    for (let y = 0; y < 16; y++) {
      for (let x = 0; x < 16; x++) {
        const r = hash2(x, y, 67);
        if (r > 0.86) continue; // дырки для cutout-листвы
        const c = C.leaves[(r * C.leaves.length) | 0];
        tl.set(x, y, c, 255);
      }
    }
    return tl;
  },
  planks: (tl) => {
    tl.noise(C.planks, 71, 8);
    for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) {
      if (y % 4 === 3) tl.set(x, y, '#8a6a35');
      else if (hash2(x * 3, y, 73) > 0.9) tl.set(x, y, '#c69a61');
    }
    for (const x of [5, 12]) for (let y = 0; y < 16; y++) if (y % 4 !== 3) tl.set(x, y, '#9c7640');
    return tl;
  },
  glass: (tl) => {
    tl.clear();
    for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) {
      const edge = x === 0 || y === 0 || x === 15 || y === 15;
      if (edge) tl.set(x, y, '#cfe9f2', 255);
      else if ((x - y === 2 || x - y === 3 || x - y === -8) && (x + y) % 4 !== 0) tl.set(x, y, '#eaf7ff', 110);
    }
    return tl;
  },
  water: (tl) => {
    tl.noise(C.water, 79, 10);
    for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) {
      const w = Math.sin((x + y * 0.6) * 0.9) > 0.55;
      if (w) tl.set(x, y, '#5c8ce0');
    }
    return tl;
  },
  bedrock: (tl) => tl.noise(C.bedrock, 83, 18).blobs('#2b2b2b', 6, 89, 2.4),
  snow: (tl) => tl.noise(C.snow, 97, 5).speckles('#d6e8f2', 10, 101, 4),
  coal_ore: (tl) => { tl.noise(C.stone, 7, 12); return tl.blobs('#222222', 5, 103, 2.6); },
  iron_ore: (tl) => { tl.noise(C.stone, 7, 12); return tl.blobs('#c9915f', 5, 107, 2.3); },
  gold_ore: (tl) => { tl.noise(C.stone, 7, 12); return tl.blobs('#f5d33c', 5, 109, 2.1); },
  diamond_ore: (tl) => { tl.noise(C.stone, 7, 12); return tl.blobs('#4fe3dd', 5, 113, 2.1); },
  redstone_ore: (tl) => { tl.noise(C.stone, 7, 12); return tl.blobs('#c02b2b', 6, 127, 2.0); },
  bricks: (tl) => {
    tl.noise(C.brick, 131, 10);
    for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) {
      const row = (y / 4) | 0;
      const off = row % 2 ? 4 : 0;
      if (y % 4 === 0 || (x + off) % 8 === 0) tl.set(x, y, C.mortar[(hash2(x, y, 13) * 2) | 0]);
    }
    return tl;
  },
  obsidian: (tl) => tl.noise(C.obsidian, 137, 14).speckles('#5b3f8c', 12, 139, 10),
  glowstone: (tl) => tl.noise(C.glow, 149, 16).blobs('#fff3c4', 4, 151, 2.2),
  torch: (tl) => {
    tl.clear();
    for (let y = 6; y < 16; y++) {
      for (let x = 6; x < 10; x++) tl.set(x, y, y % 3 === 0 ? '#6b4a24' : '#8a6234');
    }
    for (let y = 2; y < 7; y++) {
      for (let x = 5; x < 11; x++) {
        const d = Math.hypot(x - 7.5, y - 4);
        if (d < 3) tl.set(x, y, d < 1.3 ? '#fff6c0' : d < 2.2 ? '#ffc23c' : '#e07a1e');
      }
    }
    return tl;
  },
  tall_grass: (tl) => {
    tl.clear();
    for (let i = 0; i < 7; i++) {
      const bx = 1 + i * 2 + ((hash2(i, 3, 157) * 2) | 0);
      const h = 6 + ((hash2(i, 7, 163) * 8) | 0);
      const lean = (hash2(i, 11, 167) - 0.5) * 3;
      for (let s = 0; s < h; s++) {
        const y = 15 - s;
        const x = Math.round(bx + (lean * s) / h);
        const col = s > h - 3 ? '#7ac44a' : s > h * 0.5 ? '#5aa832' : '#3f7d24';
        tl.set(x, y, col);
        if (s % 3 === 0) tl.set(x + 1, y, '#4a9427');
      }
    }
    return tl;
  },
  fern: (tl) => {
    tl.clear();
    for (let s = 0; s < 12; s++) {
      const y = 15 - s;
      const w = 1 + ((s * 0.6) | 0);
      for (let x = 8 - w; x <= 8 + w; x++) {
        if (Math.abs(x - 8) === w && s % 2) continue;
        tl.set(x, y, s > 8 ? '#5aa832' : '#3f7d24');
      }
    }
    return tl;
  },
  flower_red: (tl) => {
    tl.clear();
    for (let y = 8; y < 16; y++) tl.set(7, y, '#3f7d24');
    for (let y = 9; y < 12; y++) tl.set(y % 2 ? 8 : 6, y, '#4f9a2c');
    const petals = [[6, 5], [7, 4], [8, 5], [9, 6], [8, 7], [7, 8], [6, 7], [5, 6]];
    for (const [x, y] of petals) tl.set(x, y, '#d93b3b');
    tl.set(7, 6, '#ffe27a'); tl.set(8, 6, '#ffd63c');
    return tl;
  },
  flower_yellow: (tl) => {
    tl.clear();
    for (let y = 8; y < 16; y++) tl.set(8, y, '#3f7d24');
    const petals = [[7, 5], [8, 4], [9, 5], [10, 6], [9, 7], [8, 8], [7, 7], [6, 6]];
    for (const [x, y] of petals) tl.set(x, y, '#f5d33c');
    tl.set(8, 6, '#a06b1e'); tl.set(8, 5, '#c9911e');
    return tl;
  },
  cactus_side: (tl) => {
    tl.noise(C.cactus, 171, 6);
    for (let y = 0; y < 16; y++) {
      tl.set(0, y, '#2f5f22'); tl.set(15, y, '#2f5f22');
      if (y % 4 === 1) { tl.set(4, y, '#dfeee0'); tl.set(11, y, '#dfeee0'); }
    }
    return tl;
  },
  cactus_top: (tl) => tl.noise(['#4d8f3a', '#5aa145', '#3f7d2f'], 173, 6).border('#2f5f22'),
  wool_white: (tl) => tl.noise(C.woolW, 181, 6),
  wool_red: (tl) => tl.noise(C.woolR, 183, 6),
  wool_blue: (tl) => tl.noise(C.woolB, 185, 6),
  wool_yellow: (tl) => tl.noise(C.woolY, 187, 6),
  wool_lime: (tl) => tl.noise(C.woolL, 189, 6),
  wool_black: (tl) => tl.noise(C.woolK, 191, 6),
  crafting_top: (tl) => {
    tl.noise(C.planks, 193, 6);
    for (let y = 1; y < 15; y++) for (let x = 1; x < 15; x++) {
      if (x % 7 === 0 || y % 7 === 0) tl.set(x, y, '#7a5a2f');
    }
    return tl;
  },
  crafting_side: (tl) => {
    tl.noise(C.planks, 197, 6);
    for (let y = 2; y < 7; y++) for (let x = 2; x < 14; x++) {
      if ((x + y) % 3 === 0) tl.set(x, y, '#8a6a35');
    }
    return tl;
  },
};

/** Снег сбоку: белый слой сверху, снизу — земля. */
painters.snow_side = (tl) => overlayTop(tl, 201, C.dirt, C.snow, 4, 3);

export const TILE_NAMES = Object.keys(painters).filter((n) => painters[n]);

/** name → index в атласе; тайл → PixelTile */
export function buildTiles() {
  const tiles = [];
  const index = {};
  TILE_NAMES.forEach((name, i) => {
    const pt = t(painters[name]);
    index[name] = i;
    tiles.push({ name, index: i, tile: pt, transparentPadding: name !== 'water' });
  });
  if (tiles.length > GRID * GRID) throw new Error('Слишком много тайлов для атласа');
  return { tiles, index };
}
