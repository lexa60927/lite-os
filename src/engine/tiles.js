/** Все пиксель-арт тайлы атласа. Индекс = позиция в сетке атласа. */
import { PixelTile, GRID } from './pixels.js';
import { tint } from './pixels.js';
import { hash2 } from './noise.js';

const C = {
  dirt: ['#8a6647', '#7f5c3e', '#93704f', '#75543a'],
  dirtDark: ['#5f4529', '#6a4b30'],
  grass: ['#63ad3c', '#59a133', '#6cba45', '#4f952c'],
  grassDark: ['#3f8327', '#357021'],
  stone: ['#8e8e8e', '#878787', '#949494', '#7e7e7e'],
  cobble: ['#9a9a9a', '#8d8d8d', '#a4a4a4', '#828282'],
  cobbleSeam: ['#5f5f5f', '#6a6a6a', '#565656'],
  sand: ['#e2d1a4', '#dbca9c', '#e8d8ae', '#d4c293'],
  sandstone: ['#ddcd97', '#d5c48c', '#e4d6a5', '#cdbd83'],
  gravel: ['#8b8681', '#827d78', '#949088', '#797471'],
  log: ['#6d5335', '#63492c', '#77593a', '#573f26'],
  logRing: ['#a9884f', '#9c7b45', '#b4955c'],
  leaves: ['#43832a', '#3a7624', '#4c9231', '#316920', '#57a238'],
  planks: ['#bb8f56', '#b0854d', '#c49860', '#a5793f'],
  water: ['#3b6ecc', '#3465c0', '#457ad4', '#2e5db8'],
  bedrock: ['#414141', '#383838', '#4b4b4b', '#2f2f2f'],
  snow: ['#f6fcff', '#eef7fd', '#ffffff', '#e4f1f9'],
  coal: ['#2b2b2b', '#1d1d1d', '#3a3a3a'],
  iron: ['#c9915f', '#b57f52', '#dda874'],
  gold: ['#f5d33c', '#e0bb25', '#fff07a'],
  diamond: ['#4fe3dd', '#33c7d6', '#8ff6f2'],
  redstone: ['#c02b2b', '#9c1f1f', '#e04040'],
  brick: ['#a2554a', '#954b41', '#ac5f54'],
  mortar: ['#c3bcb3', '#cec7bf'],
  obsidian: ['#20172f', '#2a1f3d', '#180f24', '#3a2a55'],
  cactus: ['#4d8f3a', '#447f31', '#569c42'],
  woolW: ['#e9e9e9', '#dedede', '#f2f2f2'],
  woolR: ['#b02e2e', '#9c2727', '#c13a3a'],
  woolB: ['#2f4ecb', '#2741b3', '#3a5cdb'],
  woolY: ['#e0c02f', '#c9a926', '#f0d346'],
  woolL: ['#a6d434', '#94c02a', '#b6e246'],
  woolK: ['#242424', '#1b1b1b', '#313131'],
  glow: ['#f2d488', '#e6c069', '#f8e0a0', '#d3a95d'],
  stoneBrick: ['#949494', '#8b8b8b', '#9d9d9d', '#7f7f7f'],
  podzol: ['#6d5130', '#634829', '#785a38', '#55712c'],
};

function t(fn) {
  const tile = new PixelTile();
  fn(tile);
  return tile;
}

/** Каменная основа для руд и булыжника: мягкое поле + редкие точки. */
function stoneBase(tl, seed = 0) {
  return tl.mottle(C.stone, 7 + seed, 5, 1.4, 3.0, 2.4).speckles('#7c7c7c', 4, 21 + seed, 6);
}

/** Кромка травы: земля + зелёная бахрома сверху с зубцами (как в Minecraft). */
function grassFringe(tile, seed, topPalette, dirtPalette, base = 3, jitter = 3) {
  tile.mottle(dirtPalette, seed, 5, 1.3, 2.8, 2.2);
  tile.pebbles('#6f4f33', 5, seed + 5, 2, 8, -10);
  for (let x = 0; x < 16; x++) {
    // зубцы по 2px и цвет пятнами: попиксельный перебор превращал кромку дёрна
    // в шум — сверху блок травы выглядел «рябым»
    const h = base + ((hash2((x / 2) | 0, 1, seed) * jitter) | 0);
    for (let y = 0; y < h; y++) tile.set(x, y, topPalette[(hash2((x / 2) | 0, (y / 2) | 0, seed + 3) * topPalette.length) | 0]);
    if (hash2(x, 5, seed + 8) > 0.35) tile.set(x, h, C.grassDark[(hash2((x / 2) | 0, 6, seed) * 2) | 0]);
  }
  return tile;
}

const painters = {
  grass_top: (tl) => tl.mottle(C.grass, 11, 5, 1.6, 3.4, 1.8),
  grass_side: (tl) => grassFringe(tl, 21, C.grass, C.dirt, 3, 3),
  podzol_side: (tl) => grassFringe(tl, 62, C.podzol, C.dirt, 2, 2),
  dirt: (tl) => tl.mottle(C.dirt, 3, 5, 1.3, 2.8, 2.4).pebbles('#6f4f33', 5, 5, 2, 8, -12),
  podzol: (tl) => { tl.mottle(C.podzol, 61, 5, 1.4, 3.0, 2.2); for (let x = 0; x < 16; x++) if (x % 3) tl.set(x, 0, C.grassDark[(hash2(x, 1, 63) * 2) | 0]); return tl; },
  stone: (tl) => stoneBase(tl),
  cobblestone: (tl) => {
    tl.fill('#616161');                     // раствор между камнями
    const xs = [-1, 5, 11, 17], ys = [-1, 6, 12, 17];
    for (let ry = 0; ry < ys.length - 1; ry++) {
      for (let rx = 0; rx < xs.length - 1; rx++) {
        const x0 = Math.max(0, xs[rx] + 1), x1 = Math.min(16, xs[rx + 1] - 1);
        const y0 = Math.max(0, ys[ry] + 1), y1 = Math.min(16, ys[ry + 1] - 1);
        for (let y = y0; y < y1; y++) {
          for (let x = x0; x < x1; x++) {
            let c = C.cobble[(hash2(x, y, 92) * C.cobble.length) | 0];
            if (y === y0 || x === x0) c = tint(c, 18);            // светлая грань камня
            if (y === y1 - 1 || x === x1 - 1) c = tint(c, -16);  // тёмная
            tl.set(x, y, c);
          }
        }
      }
    }
    return tl.grain(4, 93);
  },
  stone_bricks: (tl) => {
    tl.soft(C.stoneBrick, 33, 6, 4).grain(3, 34);
    for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) {
      const row = (y / 8) | 0;
      const off = row % 2 ? 4 : 0;
      if (y % 8 === 0 || (x + off) % 8 === 7) tl.set(x, y, ['#6f6f6f', '#676767'][(hash2(x, y, 4) * 2) | 0]);
      else if (y % 8 === 1 || (x + off) % 8 === 6) tl.set(x, y, '#a0a0a0');   // блик верхней грани кирпича
    }
    return tl;
  },
  sand: (tl) => tl.mottle(C.sand, 18, 4, 1.8, 3.6, 1.5),
  sandstone_side: (tl) => {
    tl.mottle(C.sandstone, 23, 4, 1.8, 3.6, 1.6);
    for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) {
      if (y === 0 || y === 15) tl.set(x, y, '#c2b078');
      else if (y === 7 || y === 8) tl.set(x, y, '#cbb983');
    }
    return tl;
  },
  sandstone_top: (tl) => tl.fill('#dbcb94').grain(5, 30).border('#c2b078'),
  gravel: (tl) => {
    tl.mottle(C.gravel, 37, 4, 1.6, 3.2, 1.6);
    for (let i = 0; i < 15; i++) {
      const x = (hash2(i, 3, 41) * 15) | 0, y = (hash2(i, 7, 42) * 15) | 0;
      const w = 1 + ((hash2(i, 11, 43) * 2) | 0), h = 1 + ((hash2(i, 13, 44) * 2) | 0);
      const tone = C.gravel[(hash2(i, 17, 45) * C.gravel.length) | 0];
      for (let yy = 0; yy < h; yy++) for (let xx = 0; xx < w; xx++) {
        const hl = (xx === 0 && yy === 0) ? 14 : (xx === w - 1 && yy === h - 1) ? -16 : 0;
        tl.set(x + xx, y + yy, tint(tone, hl));
      }
    }
    return tl.grain(3, 46);
  },
  log_side: (tl) => {
    tl.soft(C.log, 43, 6, 4).grain(3, 44);
    for (let x = 0; x < 16; x++) {
      const dark = hash2(x, 0, 47) > 0.62;                       // тёмные полоса коры
      for (let y = 0; y < 16; y++) {
        if (!dark && hash2(x * 2, y, 51) <= 0.9) continue;
        tl.set(x, y, tint(['#4e3a22', '#573f26'][(hash2(x, y, 5) * 2) | 0], (hash2(x, y, 52) - 0.5) * 7));
      }
    }
    return tl;
  },
  log_top: (tl) => {
    tl.soft(C.logRing, 53, 5, 4);
    for (let y = 0; y < 16; y++) {
      for (let x = 0; x < 16; x++) {
        const d = Math.hypot(x - 7.5, y - 7.5);
        const ring = Math.sin(d * 2.1) > 0.2;                     // годовые кольца
        tl.set(x, y, tint(ring ? '#8a6a3a' : '#a8874f', (hash2(x, y, 54) - 0.5) * 6));
        if (d > 7.2) tl.set(x, y, C.log[(hash2(x, y, 61) * C.log.length) | 0]);
      }
    }
    return tl;
  },
  leaves: (tl) => {
    // Крупные кластеры вместо попиксельного перебора: 5 оттенков зелёного на
    // каждом пикселе давали «рябь» и на дистанции превращали крону в шум.
    tl.clear();
    tl.mottle(C.leaves, 66, 5, 1.6, 3.4, 2.0);
    tl.blobs('#316920', 5, 81, 2.3);
    tl.blobs('#57a238', 3, 97, 1.7);
    for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) {
      const edge = x === 0 || y === 0 || x === 15 || y === 15;
      if (edge ? hash2(x, y, 67) > 0.55 : hash2(x, y, 68) > 0.972) tl.set(x, y, [0, 0, 0], 0);
    }
    return tl;
  },
  planks: (tl) => {
    tl.mottle([C.planks[0], C.planks[1]], 71, 4, 2.2, 4.2, 1.6);
    for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) if (y % 4 === 3) tl.set(x, y, '#8a6a35');
    for (let i = 0; i < 6; i++) {                    // волокно: короткие полосы, не точки
      const y = (hash2(i, 3, 73) * 16) | 0, x = (hash2(i, 5, 74) * 12) | 0, w = 2 + ((hash2(i, 7, 75) * 3) | 0);
      if (y % 4 === 3) continue;
      for (let k = 0; k < w; k++) tl.set(x + k, y, '#c69a61');
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
    tl.soft(C.water, 79, 6, 5).grain(3, 80);
    for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) {
      const w = Math.sin((x + y * 0.6) * 0.9) > 0.72;
      if (w) tl.set(x, y, '#5890e2');
    }
    return tl;
  },
  bedrock: (tl) => tl.soft(C.bedrock, 83, 10, 3).grain(5, 84).pebbles('#262626', 8, 89, 2, -10, 12),
  snow: (tl) => tl.mottle(C.snow, 98, 4, 1.8, 3.4, 1.2),
  coal_ore: (tl) => { stoneBase(tl, 1); return tl.pebbles('#242424', 4, 103, 2, -6, -22); },
  iron_ore: (tl) => { stoneBase(tl, 2); return tl.pebbles('#c9915f', 4, 107, 2, 18, -16); },
  gold_ore: (tl) => { stoneBase(tl, 3); return tl.pebbles('#f5d33c', 4, 109, 2, 20, -16); },
  diamond_ore: (tl) => { stoneBase(tl, 4); return tl.pebbles('#4fe3dd', 4, 113, 2, 22, -14); },
  redstone_ore: (tl) => { stoneBase(tl, 5); return tl.pebbles('#c02b2b', 5, 127, 2, 16, -18); },
  bricks: (tl) => {
    tl.soft(C.brick, 131, 6, 4).grain(3, 132);
    for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) {
      const row = (y / 4) | 0;
      const off = row % 2 ? 4 : 0;
      if (y % 4 === 0 || (x + off) % 8 === 0) tl.set(x, y, C.mortar[(hash2(x, y, 13) * 2) | 0]);
    }
    return tl;
  },
  obsidian: (tl) => tl.soft(C.obsidian, 137, 9, 4).grain(4, 138).speckles('#6b4aa8', 6, 139, 12),
  glowstone: (tl) => tl.soft(C.glow, 149, 8, 4).grain(4, 150).pebbles('#fff3c4', 6, 151, 2, 16, -18),
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
    // 5 травинок вместо 7 и высота 5–8 px вместо 6–13: при 7 «штырьках» на
    // весь тайл крестовина читалась как сплошной забор, а луг — как кукуруза.
    // Палитра приглушённая (MC-овская олива), без кислотного верха.
    for (let i = 0; i < 5; i++) {
      const bx = 1 + i * 2 + ((hash2(i, 3, 157) * 2) | 0);
      const h = 5 + ((hash2(i, 7, 163) * 4) | 0);
      const lean = (hash2(i, 11, 167) - 0.5) * 3;
      for (let s = 0; s < h; s++) {
        const y = 15 - s;
        const x = Math.round(bx + (lean * s) / h);
        const col = s > h - 2 ? '#69a440' : s > h * 0.45 ? '#4f8a2c' : '#3c6a21';
        tl.set(x, y, col);
        if (s % 4 === 0 && hash2(x, y, 179) > 0.55) tl.set(x + 1, y, '#3f7024');
      }
    }
    // сухие кончики — то, чего не хватало: без них трава выглядела нарисованной
    // одним цветом и на дистанции сливалась в зелёную кашу
    for (let i = 0; i < 3; i++) {
      const x = 2 + ((hash2(i, 23, 181) * 12) | 0);
      tl.set(x, 15 - (4 + ((hash2(i, 29, 183) * 3) | 0)), '#7c8a3c');
    }
    return tl;
  },
  fern: (tl) => {
    tl.clear();
    // Папоротнник — «ёлочка», а не воронка: раньше к верху он расширялся до
    // половины тайла и на крестовине превращался в зелёный треугольник.
    for (let s = 0; s < 11; s++) {
      const y = 15 - s;
      // Силуэт обязан быть широким ВНИЗУ и узким на макушке — иначе квад читается
      // как перевёрнутый треугольник («текстуры вверх ногами»), каким он и был.
      const w = 1 + (((10 - s) * 0.45) | 0);
      for (let x = 8 - w; x <= 8 + w; x++) {
        const d = Math.abs(x - 8);
        if (d === w && s % 2) continue;
        if (d === 0 && s > 4 && s % 3 === 0) continue;          // просветы в середине
        tl.set(x, y, s > 7 ? '#548c2e' : d === w ? '#356a1f' : '#3f7d24');
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


/** Инструменты: рукоять по диагонали + наконечник нужного материала. */
const TOOL_TIERS = {
  wood: ['#a97f4a', '#8a6134'],
  stone: ['#9a9a9a', '#7d7d7d'],
  iron: ['#e2e2e2', '#b9bcc2'],
  diamond: ['#57e6e0', '#31b9c2'],
};
const KINDS = ['pickaxe', 'axe', 'shovel', 'sword'];

function drawTool(tl, kind, head, edge) {
  const wood = '#8a6134', woodDark = '#6d4c28';
  if (kind === 'sword') {
    for (let i = 0; i < 9; i++) { tl.set(5 + i, 12 - i, i > 5 ? edge : head); }
    for (let i = 0; i < 8; i++) { tl.set(4 + i, 13 - i, i > 5 ? edge : head); }
    tl.set(4, 11, wood); tl.set(5, 12, wood); tl.set(3, 12, woodDark); tl.set(4, 13, woodDark);
    tl.set(2, 13, woodDark); tl.set(3, 14, wood); tl.set(2, 14, woodDark);
    tl.set(5, 10, edge); tl.set(6, 9, edge); tl.set(7, 8, edge); tl.set(8, 7, edge);
    tl.set(2, 11, woodDark); tl.set(3, 10, wood); tl.set(1, 12, woodDark);
    return tl;
  }
  for (let i = 0; i < 10; i++) {
    const x = 3 + i, y = 14 - i;
    tl.set(x, y, wood);
    tl.set(x, y + 1, woodDark);
  }
  const tipX = 12, tipY = 5;
  if (kind === 'pickaxe') {
    for (let i = -4; i <= 4; i++) { tl.set(tipX + i, tipY - 1 + Math.abs(i) >> 1, head); }
    for (let i = -3; i <= 3; i++) { tl.set(tipX + i, tipY + Math.abs(i) >> 1, head); }
    tl.set(tipX - 4, tipY + 1, edge); tl.set(tipX + 4, tipY + 1, edge);
    tl.set(tipX - 5, tipY + 2, edge); tl.set(tipX + 5, tipY + 2, edge);
    tl.set(tipX, tipY, edge); tl.set(tipX - 1, tipY, edge);
  } else if (kind === 'axe') {
    for (let y = -2; y <= 3; y++) for (let x = -1; x <= 3; x++) tl.set(tipX + x, tipY + y, head);
    for (let y = -2; y <= 3; y++) tl.set(tipX + 3, tipY + y, edge);
    tl.set(tipX - 1, tipY - 2, edge); tl.set(tipX - 1, tipY + 3, edge);
  } else {
    for (let y = -1; y <= 3; y++) for (let x = -2; x <= 2; x++) tl.set(tipX + x, tipY + y, head);
    for (let y = 0; y <= 2; y++) tl.set(tipX, tipY + y, edge);
    tl.set(tipX - 2, tipY + 3, woodDark); tl.set(tipX + 2, tipY + 3, woodDark);
  }
  return tl;
}

/** Шкура мобов: светлая база (цвет даёт вершинный tint) и морда с глазами. */
function drawMobSkin(tl, spot) {
  tl.fill('#e8e8e8');
  tl.noise(['#e2e2e2', '#efefef', '#d9d9d9'], 313, 10);
  if (spot) for (const [x, y] of spot) tl.rect(x, y, 2, 2, '#f2f2f2');
  return tl;
}

/** Снег сбоку: белый слой сверху, снизу — земля. */
painters.snow_side = (tl) => grassFringe(tl, 201, C.snow, C.dirt, 4, 3);

for (const [tier, [head, edge]] of Object.entries(TOOL_TIERS)) {
  for (const kind of KINDS) {
    painters[`tool_${kind}_${tier}`] = (tl) => drawTool(tl, kind, head, edge);
  }
}
painters.mob_pig = (tl) => drawMobSkin(tl, null);
painters.mob_face = (tl) => {
  drawMobSkin(tl, null);
  tl.set(3, 6, '#241a1a'); tl.set(4, 6, '#241a1a');
  tl.set(11, 6, '#241a1a'); tl.set(12, 6, '#241a1a');
  tl.rect(6, 10, 4, 2, '#3a2a2a');
  return tl;
};
painters.mob_snout = (tl) => { drawMobSkin(tl, null); tl.rect(4, 4, 8, 6, '#d9a6a0'); tl.set(5, 6, '#5a3a38'); tl.set(10, 6, '#5a3a38'); return tl; };
painters.mob_cow = (tl) => { drawMobSkin(tl, null); tl.rect(0, 0, 16, 5, '#4a3a34'); tl.rect(3, 9, 6, 5, '#3a2c28'); return tl; };
painters.mob_sheep = (tl) => { drawMobSkin(tl, [[2, 2], [9, 5], [4, 10]]); return tl; };
painters.mob_husk = (tl) => { drawMobSkin(tl, null); tl.rect(0, 0, 16, 16, '#6f7d5f'); tl.noise(['#5d6b52', '#7c8a68'], 77, 12); tl.set(3, 6, '#0e1408'); tl.set(4, 6, '#0e1408'); tl.set(11, 6, '#0e1408'); tl.set(12, 6, '#0e1408'); return tl; };
painters.mob_crawler = (tl) => { drawMobSkin(tl, null); tl.rect(0, 0, 16, 16, '#39424f'); tl.noise(['#2e3742', '#48525f'], 91, 14); tl.rect(4, 4, 3, 2, '#d8e6ff'); tl.rect(10, 4, 3, 2, '#d8e6ff'); return tl; };

/** Предметы-ингредиенты. */
painters.sapling = (tl) => {
  tl.rect(6, 11, 4, 4, '#6b4a2a');
  for (const [x, y] of [[5, 7], [6, 6], [7, 5], [8, 4], [9, 5], [10, 6], [11, 7], [6, 8], [9, 8], [7, 7], [8, 7], [8, 6]]) tl.set(x, y, '#4f9a2c');
  for (const [x, y] of [[7, 6], [9, 6], [8, 8], [6, 7], [10, 7]]) tl.set(x, y, '#5aa832');
  return tl;
};
painters.item_stick = (tl) => {
  for (let i = 0; i < 9; i++) { tl.set(4 + i, 12 - i, '#8a6134'); tl.set(4 + i, 13 - i, '#6d4c28'); }
  return tl;
};
painters.item_coal = (tl) => {
  tl.blobs('#232323', 7, 12, 3.4);
  tl.blobs('#3b3b3b', 5, 44, 2.2);
  return tl;
};
painters.item_leather = (tl) => {
  tl.rect(3, 3, 10, 10, '#9c6b45');
  tl.rect(4, 4, 8, 8, '#ab7850');
  for (let i = 0; i < 4; i++) { tl.set(4 + i * 2, 4, '#8a5b3a'); tl.set(11, 5 + i * 2, '#8a5b3a'); }
  return tl;
};
painters.item_pork = (tl) => {
  tl.rect(3, 5, 10, 7, '#e08f8a');
  tl.rect(4, 6, 8, 5, '#f0a8a2');
  tl.rect(5, 7, 3, 2, '#f8c6c2');
  tl.set(12, 5, '#c96f6c'); tl.set(12, 11, '#c96f6c');
  return tl;
};

// --- деревни ---
painters.farmland = (tl) => {
  tl.fill('#4b3520');
  tl.grain('#3f2b19', '#57401f', 0.55);
  for (let y = 1; y < 15; y += 3) { tl.rect(0, y, 16, 2, '#33220f'); tl.rect(0, y + 2, 16, 1, '#5c4525'); }
  tl.speckles('#6d5230', 16, 7);
  tl.border('#2b1c0c', 0.5);
  return tl;
};
painters.wheat = (tl) => {
  tl.clear();
  const stalks = [[2, 5], [6, 3], [10, 6], [13, 4], [4, 11], [8, 12], [12, 10]];
  for (const [x, top] of stalks) {
    for (let y = 15; y >= top; y--) tl.set(x, y, '#8aa63c', 255);
    for (let i = 0; i < 4; i++) {                     // колос
      tl.rect(x - 1, top + i, 3, 1, '#dcb955');
      tl.set(x, top + i, '#f0d67e', 255);
    }
    tl.set(x + 1, top + 3, '#6f8a2e', 255);           // листик
  }
  return tl;
};
painters.hay_side = (tl) => {
  tl.fill('#c2a03c');
  tl.grain('#b28f2f', '#d3b254', 0.5);
  for (let y = 0; y < 16; y += 2) tl.rect(0, y, 16, 1, '#ad8b2c');
  tl.rect(3, 0, 2, 16, '#6d5318');                    // перевязи
  tl.rect(11, 0, 2, 16, '#6d5318');
  tl.rect(0, 0, 16, 1, '#8f7220');
  tl.rect(0, 15, 16, 1, '#7e6318');
  return tl;
};
painters.hay_top = (tl) => {
  tl.fill('#d3b254');
  tl.grain('#c4a344', '#e0c266', 0.5);
  for (const [x, y, w] of [[2, 2, 12], [4, 4, 8], [6, 6, 4]]) {
    tl.rect(x, y, w, 1, '#a98731');
    tl.rect(x, y + w - 1, w, 1, '#a98731');
    tl.rect(x, y, 1, w, '#a98731');
    tl.rect(x + w - 1, y, 1, w, '#a98731');
  }
  tl.rect(7, 7, 2, 2, '#8a6c28');
  return tl;
};
painters.item_emerald = (tl) => {
  tl.clear();
  for (let y = 0; y < 16; y++) {
    const half = Math.round(2 + (6 - Math.abs(y - 7.5)) * 1.1);
    tl.rect(8 - half, y, half * 2, 1, '#1f9c58');
  }
  tl.rect(5, 5, 4, 4, '#43d47f');
  tl.rect(4, 4, 2, 2, '#a6f2c4');
  tl.rect(9, 9, 3, 3, '#146c3c');
  tl.set(8, 3, '#8be9b6'); tl.set(3, 8, '#8be9b6');
  return tl;
};
painters.mob_villager = (tl) => {
  tl.fill('#6d4b2c');
  tl.grain('#5f4025', '#7d5a37', 0.5);
  for (let y = 1; y < 16; y += 4) tl.rect(0, y, 16, 1, '#57381f');
  tl.rect(0, 6, 16, 3, '#8a6a44');                     // пояс/воронник
  tl.rect(0, 7, 16, 1, '#a3855c');
  tl.rect(2, 10, 12, 1, '#57381f');
  return tl;
};
painters.mob_villager_face = (tl) => {
  tl.fill('#c39a6b');
  tl.grain('#b8905f', '#cba876', 0.4);
  tl.rect(0, 0, 16, 4, '#4a3520');                     // волосы/капюшон
  tl.rect(0, 3, 16, 1, '#5d452a');
  tl.rect(3, 7, 2, 2, '#2f2a3a'); tl.rect(11, 7, 2, 2, '#2f2a3a');   // глаза
  tl.rect(2, 6, 4, 1, '#8a6a44'); tl.rect(10, 6, 4, 1, '#8a6a44');   // брови
  tl.rect(7, 8, 2, 4, '#ab7f52'); tl.rect(6, 11, 4, 2, '#b98d5d');   // нос
  tl.rect(4, 13, 8, 1, '#4a3520');                     // борода
  return tl;
};

// ——— 0.3.0: замшелый булыжник, лёд, фонарь и новые предметы ———
// Техника та же, что у остальных тайлов: детерминированный шум (hash2), Никаких
// Math.random — атлас должен собраться пиксель в пиксель на любом железе.
painters.mossy_cobblestone = (tl) => {
  painters.cobblestone(tl);
  tl.blobs('#3d7a2a', 12, 331, 2.7);
  tl.blobs('#4f9433', 9, 332, 1.9);
  for (let y = 0; y < 16; y++) {
    for (let x = 0; x < 16; x++) {
      if (tl.get(x, y)[1] > 120 && hash2(x, y, 333) > 0.82) tl.set(x, y, '#2f6a24');   // мхи забиваются в швы
    }
  }
  return tl.grain(3, 334);
};
painters.ice = (tl) => {
  tl.fill('#a6d3ec');
  tl.soft(['#bcdff4', '#a9d6ef', '#cbe9f8', '#96c8e6'], 241, 6, 4);
  for (let i = 0; i < 24; i++) {                              // трещины света
    const x0 = (hash2(i, 3, 242) * 12) | 0, y0 = (hash2(i, 7, 243) * 12) | 0;
    const len = 3 + ((hash2(i, 11, 244) * 5) | 0);
    const dir = hash2(i, 13, 245) > 0.5 ? 1 : -1;
    for (let k = 0; k < len; k++) tl.set(Math.min(15, x0 + k), Math.min(15, y0 + k * dir), '#e8f7ff', 235);
  }
  tl.border('#c9e6f6');
  return tl.grain(2, 246);
};
painters.lantern = (tl) => {
  tl.clear();
  tl.rect(6, 0, 4, 1, '#5d5d64');                             // дужка
  tl.rect(7, 1, 2, 1, '#494950');
  tl.rect(4, 2, 8, 1, '#565660');                             // верхняя крышка
  tl.rect(3, 3, 10, 1, '#3f3f47');
  tl.rect(4, 4, 8, 8, '#2f2f36');                             // корпус
  for (let y = 5; y < 11; y++) {
    for (let x = 5; x < 11; x++) {                            // стекло с пламенем
      const d = Math.hypot(x - 7.5, y - 8);
      tl.set(x, y, d < 1.6 ? '#fff6c8' : d < 3 ? '#ffd167' : '#e8973a');
    }
  }
  tl.rect(3, 12, 10, 1, '#3f3f47');
  tl.rect(4, 13, 8, 1, '#565660');
  for (let y = 5; y < 11; y += 2) { tl.set(4, y, '#6b6b76'); tl.set(11, y, '#6b6b76'); }   // заклёпки
  return tl;
};
painters.item_flint = (tl) => {
  tl.clear();
  for (let y = 3; y < 14; y++) {
    const w = 1 + Math.round(5 * Math.sin((y - 2) * 0.55));
    const x0 = 3 + ((hash2(y, 5, 251) * 3) | 0);
    for (let x = x0; x < x0 + 5 + w; x++) {
      if (x > 15 || x < 0) continue;
      const edge = y === 3 || y === 13 || x === x0 || x === x0 + 4 + w;
      tl.set(x, y, edge ? '#3b3b44' : hash2(x, y, 252) > 0.6 ? '#2a2a31' : '#494954');
    }
  }
  tl.rect(6, 6, 3, 1, '#8f8fa3'); tl.rect(7, 7, 2, 1, '#c6c6d6');   // скол блестит
  return tl;
};
painters.item_apple = (tl) => {
  tl.clear();
  for (let y = 4; y < 15; y++) {
    for (let x = 2; x < 14; x++) {
      const dx = (x - 7.5) / 5.4, dy = (y - 9.6) / 4.8;
      const d = dx * dx + dy * dy;
      if (d > 1.05) continue;
      let c = d < 0.62 ? '#d8352f' : '#b1241f';
      if (x < 5 && y < 9) c = '#f0625a';
      if (hash2(x, y, 253) > 0.9) c = '#c92b26';
      tl.set(x, y, c);
    }
  }
  tl.rect(7, 2, 1, 3, '#6b4326'); tl.rect(8, 1, 1, 2, '#7d5230');    // черенок
  tl.rect(9, 2, 3, 2, '#4f9a35'); tl.rect(10, 1, 2, 1, '#63b844');   // лист
  tl.set(5, 6, '#ffd9d3'); tl.set(6, 5, '#ffe9e4');                   // блик
  return tl;
};
painters.item_bread = (tl) => {
  tl.clear();
  for (let y = 5; y < 12; y++) {
    const inset = y === 5 || y === 11 ? 3 : 1;
    for (let x = inset; x < 16 - inset; x++) {
      const top = y < 8;
      let c = top ? (hash2(x, y, 254) > 0.5 ? '#c98a3f' : '#b87a33') : '#8f5d26';
      if (y === 6 && x % 4 === 1) c = '#e0ab5c';
      tl.set(x, y, c);
    }
  }
  for (const k of [3, 7, 11]) { tl.set(k, 7, '#f0c877'); tl.set(k + 1, 8, '#dcae5e'); }   // надрезы
  return tl.rect(1, 11, 14, 1, '#6f4620');
};
painters.item_compass = (tl) => {
  tl.clear();
  for (let y = 0; y < 16; y++) {
    for (let x = 0; x < 16; x++) {
      const d = Math.hypot(x - 7.5, y - 7.5);
      if (d > 7) continue;
      if (d > 5.9) tl.set(x, y, hash2(x, y, 255) > 0.6 ? '#9a8542' : '#c4ad5c');       // ободок
      else tl.set(x, y, d < 1 ? '#efe7d2' : '#dcd3bb');                                 // циферблат
    }
  }
  for (let i = 0; i < 6; i++) { tl.set(7, 2 + i, '#c0392b'); tl.set(8, 2 + i, '#e74c3c'); }   // стрелка на север
  for (let i = 0; i < 5; i++) { tl.set(8 - i, 9 + i, '#4a4a52'); tl.set(7 - i, 9 + i, '#6b6b73'); }
  tl.rect(7, 7, 2, 2, '#2b2b31');
  tl.set(7, 1, '#f4ead0'); tl.set(8, 1, '#f4ead0'); tl.set(1, 7, '#f4ead0'); tl.set(14, 8, '#f4ead0');   // румб
  return tl;
};
painters.item_clock = (tl) => {
  tl.clear();
  for (let y = 0; y < 16; y++) {
    for (let x = 0; x < 16; x++) {
      const d = Math.hypot(x - 7.5, y - 7.5);
      if (d > 7.2) continue;
      if (d > 6) tl.set(x, y, hash2(x, y, 256) > 0.55 ? '#b98f26' : '#e8c96a');
      else tl.set(x, y, d < 0.9 ? '#3a3a42' : '#f4efe0');
    }
  }
  for (let i = 0; i < 4; i++) tl.set(8, 4 + i, '#3a3a42');           // минутная
  for (let i = 0; i < 3; i++) tl.set(5 + i, 8, '#6b5a2a');           // часовая
  for (const [x, y] of [[7, 1], [14, 7], [7, 14], [1, 7]]) tl.set(x, y, '#7a5c18');
  return tl.rect(6, 0, 4, 1, '#c9a33c');                              // ушки
};
painters.item_shears = (tl) => {
  tl.clear();
  for (let i = 0; i < 7; i++) {                                       // лезвия крестом
    tl.set(3 + i, 3 + i, '#cfd4dc'); tl.set(4 + i, 3 + i, '#9aa1ad');
    tl.set(10 - i, 3 + i, '#cfd4dc'); tl.set(9 - i, 3 + i, '#9aa1ad');
  }
  tl.set(7, 7, '#7b8290'); tl.set(8, 7, '#7b8290');                   // ось
  for (const [cx, cy] of [[4, 11], [11, 11]]) {                       // кольца
    for (let a = 0; a < 12; a++) {
      const ang = (a / 12) * Math.PI * 2;
      tl.set(Math.round(cx + Math.cos(ang) * 2.4), Math.round(cy + Math.sin(ang) * 2.4), '#b8422f');
    }
  }
  return tl;
};

export const TILE_NAMES = Object.keys(painters).filter((n) => painters[n]);

/**
 * Регистрация тайла модом. Атлас строится один раз (buildTiles inside new Atlas),
 * поэтому моды применяют тайлы ДО создания игры — main.js так и делает.
 * paint = null снимает тайл (откат в тестах); индексы атласа при этом сдвигаются,
 * но меши чанков строятся по имени тайла, а не по индексу, так что перестройка
 * чанков (rebuildAll / новая загрузка) возвращает порядок.
 */
export function registerTilePainter(name, paint) {
  const key = String(name);
  const at = TILE_NAMES.indexOf(key);
  if (!paint) {
    if (at >= 0) TILE_NAMES.splice(at, 1);
    delete painters[key];
    return false;
  }
  if (typeof paint !== 'function') throw new Error(`тайл «${key}»: painter должен быть функцией`);
  painters[key] = paint;
  if (at < 0) TILE_NAMES.push(key);
  return true;
}

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
