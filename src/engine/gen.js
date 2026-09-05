/**
 * Процедурная генерация: рельеф с горами и морем, биомы, пещеры, руды, деревья.
 * Всё детерминировано по (x, z, seed) — можно восстанавливать любой чанк.
 */
import { Noise, hash2, hash3i } from './noise.js';
import { CHUNK, HEIGHT, SEA, SNOW_LINE, idx } from './constants.js';
import { byKey } from './blocks.js';

/** Границы высот: подобраны под фактическую гистограмму рельефа (~6% гор, ~8% океана). */
const MOUNTAIN_LINE = 56;
const SNOW_CAP = 70;
const TREE_LINE = 61;        // выше уже голые камни, как в Minecraft

const B = {
  stone: byKey('stone'), dirt: byKey('dirt'), grass: byKey('grass'), sand: byKey('sand'),
  sandstone: byKey('sandstone'), gravel: byKey('gravel'), bedrock: byKey('bedrock'),
  water: byKey('water'), snow: byKey('snow'), podzol: byKey('podzol'), log: byKey('log'),
  leaves: byKey('leaves'), coal: byKey('coal_ore'), iron: byKey('iron_ore'), gold: byKey('gold_ore'),
  diamond: byKey('diamond_ore'), redstone: byKey('redstone_ore'), cactus: byKey('cactus'),
  tall_grass: byKey('tall_grass'), fern: byKey('fern'), flower_red: byKey('flower_red'),
  flower_yellow: byKey('flower_yellow'),
  planks: byKey('planks'), glass: byKey('glass'), torch: byKey('torch'),
  glowstone: byKey('glowstone'), cobblestone: byKey('cobblestone'), stone_bricks: byKey('stone_bricks'),
  farmland: byKey('farmland'), wheat: byKey('wheat'), hay_block: byKey('hay_block'),
};

export const BIOME = { OCEAN: 0, BEACH: 1, PLAINS: 2, FOREST: 3, DESERT: 4, SNOWY: 5, MOUNTAIN: 6, SAVANNA: 7, SWAMP: 8, TAIGA: 9 };

/* --- деревни ---------------------------------------------------------------
 * Регион 96×96 блоков может содержать деревню: сетка 3×3 по 32 блока,
 * улицы между клетками, в центре площадь с колодцем и фонарями. Всё считается
 * из сида, поэтому любой чанк достраивается независимо и одинаково с обеих
 * сторон границы — как деревья.
 */
const V_CELL = 32;
const V_HALF = V_CELL * 1.5;               // 48 — половина стороны деревни
const V_IN = 12;                           // застройка клетки: |lx| <= V_IN, дорога 13..15
const V_BIOMES = [BIOME.PLAINS, BIOME.SAVANNA, BIOME.DESERT, BIOME.TAIGA, BIOME.SNOWY];
const V_PROBE = [[0, 0], [38, 0], [-38, 0], [0, 38], [0, -38], [26, 26], [-26, -26], [26, -26], [-26, 26]];

export const DEFAULT_SEED = 42;

const clamp01 = (v) => (v < 0 ? 0 : v > 1 ? 1 : v);
const smooth = (a, b, x) => { const t = clamp01((x - a) / (b - a)); return t * t * (3 - 2 * t); };
/** Вода: [r,g,b] — близкие к белому, чтобы не ломать привычный цвет моря. */
export const BIOME_WATER_TINT = [
  [0.62, 0.78, 1.0], [0.72, 0.86, 1.0], [0.80, 0.90, 1.0], [0.76, 0.90, 1.0],
  [0.95, 0.92, 0.82], [0.86, 0.94, 1.0], [0.88, 0.94, 1.0], [0.86, 0.92, 0.96],
  [0.52, 0.72, 0.56], [0.78, 0.90, 0.98],
];

export const BIOME_NAMES = ['Океан', 'Пляж', 'Равнины', 'Лес', 'Пустыня', 'Снега', 'Горы', 'Саванна', 'Болото', 'Тайга'];

/** Оттенок травы/листвы (умножается на тайл через вершинный tint). */
export const BIOME_TINT = [
  [0.62, 0.84, 0.44],  // океан
  [0.74, 0.86, 0.56],  // пляж
  [0.62, 0.84, 0.44],  // равнины
  [0.45, 0.76, 0.32],  // лес
  [0.90, 0.86, 0.56],  // пустыня
  [0.76, 0.88, 0.82],  // снега
  [0.70, 0.80, 0.64],  // горы
  [0.84, 0.82, 0.44],  // саванна
  [0.50, 0.64, 0.30],  // болото
  [0.52, 0.78, 0.42],  // тайга
];


export class Terrain {
  constructor(seed = 1) {
    this.seed = seed >>> 0;
    this.h = new Noise(this.seed ^ 0x51ed2701);
    this.bi = new Noise(this.seed ^ 0x9e3779b9);
    this.cv = new Noise(this.seed ^ 0x2545f491);
    this.or = new Noise(this.seed ^ 0x7feb352d);
    /** Мемо на колонку: height/climate/biome/tree считаем один раз за генерацию чанка. */
    this.cache = new Map();
    /** Мемо «регион → деревня»: планировка считается один раз на регион. */
    this._villages = new Map();
  }

  /** Климат: [temperature, humidity] в 0..1 */
  climate(x, z) {
    const temp = this.bi.fbm2(x / 470 + 13.7, z / 470 - 4.2, 3) * 0.5 + 0.5;
    const humid = this.bi.fbm2(x / 380 - 31.3, z / 380 + 57.1, 3) * 0.5 + 0.5;
    return [temp, humid];
  }

  /** Высота рельефа (0..HEIGHT). */
  rawHeight(x, z) {
    // Крупные формы (материки, холмы, хребты) + минимум мелкого шума: тогда
    // рельеф читается как большой мир, а не как «ступеньки» в каждый блок.
    const cont = this.h.fbm2(x / 420, z / 420, 4) * 0.5 + 0.5;      // материки и океаны
    const hills = this.h.fbm2(x / 118, z / 118, 3);                 // холмы
    const ridged = this.h.ridged2(x / 260, z / 260, 3);             // горные хребты
    const rough = this.h.fbm2(x / 46, z / 46, 1);                   // мягкая неровность
    // широкие горные «провинции»: без них хребты получались одинокими иглами
    const mask = Math.max(0, this.h.fbm2(x / 700 + 220, z / 700 - 120, 2) * 1.5);
    const mountains = Math.pow(ridged, 1.9) * (8 + mask * 78);
    let y = 24 + cont * 21 + hills * 10.5 + mountains + rough * 1.3;
    if (cont < 0.5) y -= (0.5 - cont) * 58;      // океанические впадины
    return Math.max(3, Math.min(HEIGHT - 8, Math.round(y)));
  }

  /** Кэшированная колонка: {h, temp, humid, biome}. */
  col(x, z) {
    const key = x * 4194304 + z;   // достаточно для ±2048 вокруг спавна... используется в пределах чанка
    let c = this.cache.get(key);
    if (c) return c;
    const h = this.rawHeight(x, z);
    const [temp, humid] = this.climate(x, z);
    let biome;
    if (h < SEA - 2) biome = BIOME.OCEAN;
    else if (h >= MOUNTAIN_LINE) biome = BIOME.MOUNTAIN;
    else if (h <= SEA + 1) biome = BIOME.BEACH;
    else if (temp > 0.55 && humid < 0.46) biome = BIOME.DESERT;
    else if (temp < 0.36) biome = BIOME.SNOWY;
    else if (h <= SEA + 7 && humid > 0.6) biome = BIOME.SWAMP;
    else if (humid > 0.55) biome = BIOME.FOREST;
    else if (temp > 0.5 && humid > 0.4) biome = BIOME.SAVANNA;
    else if (temp < 0.46 && humid > 0.44) biome = BIOME.TAIGA;
    else biome = BIOME.PLAINS;
    c = { h, temp, humid, biome };
    this.cache.set(key, c);
    return c;
  }

  height(x, z) { return this.col(x, z).h; }
  biomeAt(x, z) { return this.col(x, z).biome; }
  climateAt(x, z) { const c = this.col(x, z); return [c.temp, c.humid]; }

  /**
   * Пещерный шум: пересечение двух «червячных» полей даёт тоннели,
   * ниже y=24 добавляются овальные пещеры. Ранний выход — ради скорости.
   */
  isCave(x, y, z) {
    const a = Math.abs(this.cv.perlin3(x / 52, y / 64, z / 52));
    if (a < 0.06) {
      const b = Math.abs(this.cv.perlin3(x / 46 + 90, y / 57 + 40, z / 46 - 70));
      if (b < 0.08) return true;
    }
    if (y < 24 && a < 0.16) {
      const pocket = this.cv.fbm3(x / 26, y / 20, z / 26, 3);
      if (pocket > 0.62) return true;
    }
    return false;
  }

  /** Тип руды для ячейки 4×4×4 (дешевле, чем шум на каждый блок). */
  oreCellType(x, cellY, z) {
    const v = this.or.perlin3(x * 0.26, cellY * 1.05, z * 0.26);
    if (v < 0.58) return 0;
    const yTop = cellY * 4;
    if (yTop < 13 && v > 0.855) return B.diamond;
    if (yTop < 23 && v > 0.80) return B.redstone;
    if (yTop < 31 && v > 0.755) return B.gold;
    if (yTop < 57 && v > 0.685) return B.iron;
    if (v > 0.625) return B.coal;
    return 0;
  }

  /** Есть ли в этой колонне дерево; возвращает описание или null. */
  /** Деревня, если регион (rx, rz) ей подходит; иначе null. Мемоизируется. */
  villageSite(rx, rz) {
    const mk = rx + ',' + rz;
    if (this._villages.has(mk)) return this._villages.get(mk);
    const site = this.#makeVillage(rx, rz);
    if (this._villages.size > 8192) this._villages.clear();
    this._villages.set(mk, site);
    return site;
  }

  #makeVillage(rx, rz) {
    if (hash2(rx * 3 + 1, rz * 7 + 5, (this.seed ^ 0x51a31f) >>> 0) < 0.72) return null;
    const jx = Math.round((hash2(rx + 11, rz - 3, (this.seed + 91) >>> 0) - 0.5) * 14);
    const jz = Math.round((hash2(rx - 7, rz + 17, (this.seed + 441) >>> 0) - 0.5) * 14);
    const cx = rx * V_CELL * 3 + V_CELL * 1.5 + jx;
    const cz = rz * V_CELL * 3 + V_CELL * 1.5 + jz;
    const c0 = this.col(cx, cz);
    if (!V_BIOMES.includes(c0.biome)) return null;
    let minH = 255, maxH = 0;
    for (const [dx, dz] of V_PROBE) {
      const c = this.col(cx + dx, cz + dz);
      if (!V_BIOMES.includes(c.biome)) return null;
      if (c.h < minH) minH = c.h;
      if (c.h > maxH) maxH = c.h;
    }
    if (maxH - minH > 6 || minH <= SEA + 1) return null;
    const h = Math.max(SEA + 2, Math.round((minH + maxH) / 2));
    const desert = c0.biome === BIOME.DESERT;
    const cold = c0.biome === BIOME.SNOWY || c0.biome === BIOME.TAIGA;
    const cells = [];
    for (let cj = 0; cj < 3; cj++) {
      for (let ci = 0; ci < 3; ci++) {
        if (ci === 1 && cj === 1) { cells.push({ kind: 'plaza' }); continue; }
        const r = hash2(rx * 97 + ci * 13 + 5, rz * 61 + cj * 29 + 7, (this.seed + ci * 31 + cj * 733) >>> 0);
        const kind = r < 0.56 ? 'house' : r < 0.78 ? 'farm' : 'yard';
        const rr = hash2(ci * 7 + rz, cj * 11 + rx, (this.seed + 17) >>> 0);
        cells.push({
          kind,
          w: 9 + (rr > 0.55 ? 3 : 0) + (rr > 0.86 ? 2 : 0),
          l: 9 + (rr > 0.35 && rr <= 0.6 ? 3 : 0),
          tall: rr > 0.72,
        });
      }
    }
    if (!cells.some((c) => c.kind === 'house')) cells[0] = { ...cells[0], kind: 'house', w: 9, l: 9, tall: false };
    return { cx, cz, h, biome: c0.biome, desert, cold, cells, top: desert ? B.sand : cold && c0.biome === BIOME.SNOWY ? B.snow : B.grass };
  }

  /** Принадлежит ли колонка территории деревни (для подавления деревьев и спавна мобов). */
  villageAt(x, z) {
    const rx = Math.floor(x / (V_CELL * 3));
    const rz = Math.floor(z / (V_CELL * 3));
    for (let dx = -1; dx <= 1; dx++) {
      for (let dz = -1; dz <= 1; dz++) {
        const site = this.villageSite(rx + dx, rz + dz);
        if (!site) continue;
        const ddx = x - site.cx, ddz = z - site.cz;
        if (Math.abs(ddx) <= V_HALF && Math.abs(ddz) <= V_HALF) return site;
      }
    }
    return null;
  }

  /** Застройка деревни: возвращает массив [y, id] для колонки или null. */
  villageColumn(ctx) {
    const { site, cell, ci, cj, lx, lz } = ctx;
    const h = site.h;
    const out = [];
    const road = Math.abs(lx) > V_IN || Math.abs(lz) > V_IN;
    const inPlaza = cell.kind === 'plaza';
    const put = (y, id) => { if (y >= 0 && y < HEIGHT) out.push([y, id]); };

    if (road) {                                        // улицы: гравий, в пустыне — песчаник
      put(h, site.desert ? B.sandstone : B.gravel);
      return out;
    }
    if (inPlaza) {
      const d = Math.max(Math.abs(lx), Math.abs(lz));
      if (d <= 1) { put(h, B.cobblestone); put(h + 1, B.water); }       // колодец
      else if (d === 2) { put(h, B.cobblestone); put(h + 1, B.stone_bricks); }
      else if (Math.abs(lx) === 9 && Math.abs(lz) === 9) {               // фонарные столбы по углам
        for (let y = h + 1; y <= h + 3; y++) put(y, B.log);
        put(h + 4, B.glowstone);
        put(h, B.cobblestone);
      } else if (d <= 7) put(h, B.stone_bricks);                         // только сама площадь, остальное — луга
      return out;
    }

    const hw = cell.w >> 1, hl = cell.l >> 1;
    if (cell.kind === 'house') {
      const u = lx + hw, v = lz + hl;                  // 0..w-1 / 0..l-1
      const inside = u >= 0 && v >= 0 && u < cell.w && v < cell.l;
      const wallH = cell.tall ? 5 : 4;
      const roofY = h + 2 + wallH;                 // крыша на блок выше стен — с парапетом
      const eave = roofY - 1;
      if (!inside) {
        const near = Math.abs(lx) <= hw + 1 && Math.abs(lz) <= hl + 1;
        if (near) put(eave, B.planks);             // свес карниза
        return out;
      }
      const edge = u === 0 || v === 0 || u === cell.w - 1 || v === cell.l - 1;
      const wall = site.desert ? B.sandstone : site.cold ? B.cobblestone : B.planks;
      const frame = B.log;
      if (edge) {
        const corner = (u === 0 || u === cell.w - 1) && (v === 0 || v === cell.l - 1);
        const midU = u === hw, midV = v === hl;
        const doorSide = (ci < 1 && u === cell.w - 1) || (ci > 1 && u === 0)
          || (cj < 1 && v === cell.l - 1) || (cj > 1 && v === 0);
        const doorCell = doorSide && ((ci !== 1 ? midV : midU));
        for (let y = h + 1; y <= h + wallH; y++) {
          if (doorCell && (y === h + 1 || y === h + 2)) { put(y, 0); continue; }
          put(y, corner || y === h + wallH ? frame : wall);
        }
        // окна в середине стен
        if (!doorCell && (ci !== 1 ? midV : midU)) { put(h + 3, B.glass); put(h + 2, B.glass); }
        put(h, site.desert ? B.sand : B.cobblestone);
        if (doorCell) put(h + 3, B.log);                  // притолока
      } else {
        put(h, B.planks);                                 // пол
        const rim = u === 0 || v === 0 || u === cell.w - 1 || v === cell.l - 1;
        for (let y = h + 1; y < eave; y++) put(y, 0);     // пустая комната
        put(eave, B.planks);                               // перекрытие
        put(roofY, rim ? B.planks : 0);                    // парапет по краю
        if (u === hw && v === hl) put(roofY, B.log);       // конёк
        if (u === 1 && v === 1) for (let y = h + 1; y <= roofY + 1; y++) put(y, B.cobblestone);   // труба
        if (u === hw && v === hl && cell.tall) put(roofY + 1, B.glowstone);   // фонарь на коньке
      }
      return out;
    }

    if (cell.kind === 'farm') {
      const inField = Math.abs(lx) <= 8 && Math.abs(lz) <= 6;
      const pond = Math.abs(lx - 9) <= 1 && Math.abs(lz + 5) <= 1;
      if (pond) { put(h, B.water); return out; }
      if (Math.abs(lx) === 10 || Math.abs(lz) === 8) { put(h + 1, B.log); return out; }   // изгородь
      if (!inField) return out;
      const row = ((lz + 6) % 2) === 0;
      put(h, row ? B.farmland : B.dirt);
      if (row) put(h + 1, B.wheat);
      if (Math.abs(lx + 9) <= 1 && Math.abs(lz - 6) <= 1) { put(h + 1, B.hay_block); if (lx === -9 && lz === 6) put(h + 2, B.hay_block); }
      return out;
    }

    // двор: сено, пара столбов, остальное — обычная трава (декор добавится ниже)
    if ((Math.abs(lx) === 4 && Math.abs(lz) === 4) && ((lx + lz) & 2) === 0) put(h + 1, B.hay_block);
    if (Math.abs(lx) === 7 && Math.abs(lz) === 1) { put(h + 1, B.log); put(h + 2, B.log); }
    return out;
  }

  treeAt(x, z) {
    if (villageSiteSafe(this, x, z)) return null;  // в деревнях деревьев нет: кроны прорастали бы через крыши
    const r = hash2(x, z, this.seed ^ 0x5bd1e995);
    const c = this.col(x, z);
    const biome = c.biome;
    if (c.h > TREE_LINE) return null;          // на вершинах деревья не растут
    const density =
      biome === BIOME.FOREST ? 0.055 :
      biome === BIOME.TAIGA ? 0.042 :
      biome === BIOME.PLAINS ? 0.008 :
      biome === BIOME.SAVANNA ? 0.006 :
      biome === BIOME.SWAMP ? 0.03 :
      biome === BIOME.SNOWY ? 0.02 :
      biome === BIOME.MOUNTAIN ? 0.004 : 0;
    if (biome === BIOME.DESERT) {
      if (r > 0.006) return null;
      if (c.h <= SEA + 1) return null;
      return { kind: 'cactus', trunk: 2 + ((hash2(x, z, 7) * 3) | 0), h: c.h };
    }
    if (density === 0 || r > density) return null;
    // деревья не ставим на крутых склонах и в воде
    const h = c.h;
    if (h <= SEA + 1) return null;
    const d = Math.max(
      Math.abs(h - this.col(x + 1, z).h),
      Math.abs(h - this.col(x, z - 1).h),
      Math.abs(h - this.col(x - 1, z).h),
      Math.abs(h - this.col(x, z + 1).h),
    );
    if (d > 4) return null;
    const spruce = biome === BIOME.SNOWY || biome === BIOME.MOUNTAIN || biome === BIOME.TAIGA || biome === BIOME.SWAMP;
    const trunk = spruce ? 6 + ((hash2(x, z, 11) * 5) | 0) : 4 + ((hash2(x, z, 13) * 3) | 0);
    return { kind: spruce ? 'spruce' : 'oak', trunk, h };
  }

  /**
   * Список блоков дерева относительно (0,0,0) в (dx, dy, dz).
   * Детерминирован по координатам — соседние чанки ставят те же блоки.
   */
  treeBlocks(x, z) {
    const t = this.treeAt(x, z);
    if (!t) return null;
    const out = [];
    const base = t.h;
    if (t.kind === 'cactus') {
      for (let i = 1; i <= t.trunk; i++) out.push([0, base + i, 0, B.cactus]);
      return out;
    }
    if (t.kind === 'spruce') {
      for (let i = 1; i <= t.trunk; i++) out.push([0, base + i, 0, B.log]);
      const top = base + t.trunk;
      for (let layer = 0; layer < 3; layer++) {
        const r = layer === 0 ? 2 : layer === 1 ? 1 : 0;
        for (let dx = -r; dx <= r; dx++) for (let dz = -r; dz <= r; dz++) {
          if (Math.abs(dx) + Math.abs(dz) > r + 1) continue;
          if (dx === 0 && dz === 0) continue;
          out.push([dx, top - 1 - layer, dz, B.leaves]);
        }
      }
      out.push([0, top + 1, 0, B.leaves]);
      return out;
    }
    for (let i = 1; i <= t.trunk; i++) out.push([0, base + i, 0, B.log]);
    const top = base + t.trunk;
    for (let dy = -2; dy <= 1; dy++) {
      const r = dy <= -1 ? 2 : 1;
      for (let dx = -r; dx <= r; dx++) for (let dz = -r; dz <= r; dz++) {
        const dist = Math.abs(dx) + Math.abs(dz);
        if (dist > r + 1) continue;
        if (dx === 0 && dz === 0 && dy < 1) continue;
        if (dist === r + 1 && hash2(x + dx, z + dz + dy * 3, this.seed + 31) > 0.6) continue;
        const y = top + dy;
        if (y >= HEIGHT) continue;
        out.push([dx, y, dz, B.leaves]);
      }
    }
    out.push([0, top + 1, 0, B.leaves]);
    return out;
  }

  /**
   * Заполняет чанковые массивы. chunk — объект с blocks/heights (Uint8Array).
   * Возвращает количество твёрдых блоков (для статистики).
   */
  generate(chunk) {
    this.cache.clear();
    const { cx, cz } = chunk;
    const blocks = chunk.blocks;
    const heights = new Uint8Array(CHUNK * CHUNK);   // рельеф колонки (для декора)
    if (!chunk.biomes || chunk.biomes.length !== CHUNK * CHUNK) chunk.biomes = new Uint8Array(CHUNK * CHUNK);
    const biomes = chunk.biomes;
    blocks.fill(0);
    let solid = 0;
    let hmax = 0;                  // верхняя занятая клетка — см. mesher (yTop)

    for (let lz = 0; lz < CHUNK; lz++) {
      for (let lx = 0; lx < CHUNK; lx++) {
        const x = cx * CHUNK + lx;
        const z = cz * CHUNK + lz;
        const c = this.col(x, z);
        const h = c.h;
        const biome = c.biome;
        const temp = c.temp;
        heights[lz * CHUNK + lx] = h;
        if (h > hmax) hmax = h;
        biomes[lz * CHUNK + lx] = biome;

        let oreCell = -1;
        let oreType = 0;
        const sandy = biome === BIOME.DESERT || biome === BIOME.BEACH;
        const cold = biome === BIOME.SNOWY || biome === BIOME.TAIGA || (h >= SNOW_CAP && temp < 0.45);
        const swamp = biome === BIOME.SWAMP;

        for (let y = 0; y <= h; y++) {
          let id;
          if (y === 0) id = B.bedrock;
          else if (y === h) {
            if (h <= SEA + 1) id = hash2(x, z, 91) > 0.86 ? B.gravel : B.sand;
            else if (swamp) id = h <= SEA + 2 ? B.podzol : B.grass;
            else if (sandy) id = B.sand;
            else if (cold) id = B.snow;
            else if (biome === BIOME.MOUNTAIN) id = B.stone;
            else if (biome === BIOME.SNOWY) id = B.podzol;
            else id = B.grass;
          } else if (y > h - 4) {
            id = sandy || h <= SEA + 1 ? B.dirt : (cold || biome === BIOME.MOUNTAIN ? B.stone : B.dirt);
            if (sandy && y < h - 1) id = B.sandstone;
          } else {
            id = B.stone;
            if (y > 1 && this.isCave(x, y, z)) id = 0;
            else if (y < h - 3) {
              if ((y >> 2) !== oreCell) { oreCell = y >> 2; oreType = this.oreCellType(x, oreCell, z); }
              if (oreType && hash3i(x, y, z, this.seed + oreType * 17) < ORE_FILL[oreType]) id = oreType;
            }
            if (y === 1 && hash2(x * 3, z * 5, this.seed + 5) > 0.55) id = B.bedrock;
          }
          if (id) { blocks[idx(lx, y, lz)] = id; solid++; }
        }
        // вода выше рельефа (на болоте — на блок-два выше уровня моря)
        const waterTop = swamp ? SEA + 1 : SEA;
        for (let y = h + 1; y <= waterTop; y++) blocks[idx(lx, y, lz)] = B.water;
        if (waterTop > hmax) hmax = waterTop;
      }
    }

    // --- деревни: планировка участка и застройка (пишем поверх рельефа) ---
    // --- деревни: планировка участка и застройка (пишем поверх рельефа) ---
    // Деревенская застройка не имеет права ронять генерацию чанка.
    // Было: этот вызов падал с «terrain.villageAt is not a function» (устаревший
    // экземпляр Terrain после HMR), исключение улетало в ensureChunk, а тот уже
    // успел положить ЧАСТИЧНЫЙ чанк в кэш — стриминг видел «чанк есть» и больше
    // к нему не обращался. Итог: мир «сгенерирован», но чанки пустые и невидимые
    // навсегда. Теперь сбойный участок просто пропускается, чанк всё равно честный.
    try {
          for (let lz = 0; lz < CHUNK; lz++) {
            for (let lx = 0; lx < CHUNK; lx++) {
              const x = cx * CHUNK + lx, z = cz * CHUNK + lz;
              const site = villageSiteAt(this, x, z);
              if (!site) continue;
              const ctx = cellAt(site, x - site.cx, z - site.cz);
              if (!ctx) continue;
              const rows = this.villageColumn(ctx);
              const th = heights[lz * CHUNK + lx];
              let top = site.h;
              // пещера, съевшая поверхность, не должна оставлять дом над провалом
              if (!blocks[idx(lx, site.h, lz)]) {
                let from = site.h;
                while (from > 0 && !blocks[idx(lx, from - 1, lz)] && site.h - from < 10) from--;
                for (let y = site.h; y >= from; y--) blocks[idx(lx, y, lz)] = y === site.h ? site.top : B.dirt;
              }
              if (th < site.h) {
                for (let y = th + 1; y <= site.h; y++) blocks[idx(lx, y, lz)] = y === site.h ? site.top : B.dirt;
              } else if (th > site.h) {
                for (let y = site.h + 1; y <= th; y++) blocks[idx(lx, y, lz)] = 0;
                blocks[idx(lx, site.h, lz)] = site.top;
              }
              for (const [y, id] of rows) {
                blocks[idx(lx, y, lz)] = id;
                if (id !== 0 && y > top) top = y;
                if (y + 1 > hmax) hmax = y + 1;
              }
              heights[lz * CHUNK + lx] = Math.min(HEIGHT - 1, top);
            }
          }

          // --- деревья: проходим по расширенной области, пишем только свои блоки ---
          for (let oz = -3; oz < CHUNK + 3; oz++) {
            for (let ox = -3; ox < CHUNK + 3; ox++) {
              const x = cx * CHUNK + ox;
              const z = cz * CHUNK + oz;
              const list = this.treeBlocks(x, z);
              if (!list) continue;
              for (const [dx, dy, dz, id] of list) {
                const lx = ox + dx, lz = oz + dz;
                if (lx < 0 || lz < 0 || lx >= CHUNK || lz >= CHUNK) continue;
                const y = dy;
                if (y < 0 || y >= HEIGHT) continue;
                const i = idx(lx, y, lz);
                const cur = blocks[i];
                if (id === B.leaves ? cur === 0 || cur === B.tall_grass : true) {
                  if (id === B.log) blocks[i] = id;
                  else if (cur === 0) { blocks[i] = id; solid++; }
                  if (y + 1 > hmax) hmax = y + 1;
                }
              }
            }
            }
    } catch (e) { genDegraded(this, e); }

    // --- трава и цветы на собственном рельефе ---
    for (let lz = 0; lz < CHUNK; lz++) {
      for (let lx = 0; lx < CHUNK; lx++) {
        const x = cx * CHUNK + lx;
        const z = cz * CHUNK + lz;
        const h = heights[lz * CHUNK + lx];
        if (h <= SEA || h >= SNOW_CAP) continue;
        const i = idx(lx, h, lz);
        if (blocks[i] !== B.grass && blocks[i] !== B.podzol) continue;
        const r = hash2(x, z, this.seed ^ 0x27d4eb2f);
        const above = idx(lx, h + 1, lz);
        if (blocks[above] !== 0) continue;
        const bcol = this.col(x, z).biome;
        const forest = bcol === BIOME.FOREST || bcol === BIOME.SWAMP;
        const savanna = bcol === BIOME.SAVANNA;
        if (h + 1 > hmax) hmax = h + 1;
        // Куртины: трава растёт пятнами, а не равномерным «конфетти» по всей
        // площади. Раньше в саванне травинка была на 30% клеток — луг читался
        // полем зелёных штырьков, и это выглядело как «сломанные текстуры».
        const cl = hash2(x >> 2, z >> 2, (this.seed + 0x5c31) >>> 0);
        const patch = cl > 0.72 ? 0.2 : cl > 0.46 ? 0.55 : 1.2;
        const tuft = (forest ? 0.12 : savanna ? 0.075 : 0.06) * patch;
        const toFern = tuft + (forest ? 0.05 : 0.028) * patch;
        if (r < tuft) blocks[above] = B.tall_grass;
        else if (r < toFern) blocks[above] = B.fern;
        else if (r > 0.968) blocks[above] = B.flower_red;
        else if (r > 0.95) blocks[above] = B.flower_yellow;
      }
    }
    chunk.hmax = Math.min(HEIGHT - 1, hmax);
    return solid;
  }
}

/** Доля блока, занятая рудой внутри подходящей ячейки. */
/**
 * Есть ли рядом деревня. Отдельная функция (а не метод Terrain), чтобы не падать,
 * если после HMR в браузере мир ещё носит старый экземпляр без нового метода:
 * «terrain.villageAt is not a function» в промисе ронял игру на пустом месте.
 */
  /**
 * Доступ к планировке деревни, который не может уронить генерацию: устаревший
 * после HMR экземпляр Terrain не обязан иметь эти методы.
 */
function villageSiteAt(terrain, x, z) {
  try { return typeof terrain.villageAt === 'function' ? terrain.villageAt(x, z) : null; }
  catch (e) { genDegraded(terrain, e); return null; }
}

const villageSiteSafe = (terrain, x, z) => !!villageSiteAt(terrain, x, z);

/** Деревенская планировка для смещения от центра (null — улица/пусто). */
function cellAt(site, dx, dz) {
  const ci = Math.floor((dx + V_HALF) / V_CELL), cj = Math.floor((dz + V_HALF) / V_CELL);
  if (ci < 0 || cj < 0 || ci > 2 || cj > 2) return null;
  return { site, ci, cj, lx: dx - (ci - 1) * V_CELL, lz: dz - (cj - 1) * V_CELL, cell: site.cells[cj * 3 + ci] };
}

/** О деревенских сбоях сообщаем один раз: молчаливая деградация хуже, чем крик. */
function genDegraded(terrain, e) {
  if (terrain && terrain._villageWarned) return;
  if (terrain) terrain._villageWarned = true;
  console.warn('застройка деревень пропущена (мир генерируется без неё):', e?.message ?? e);
}

export function villageNear(world, x, z) {
  const t = world?.terrain;
  return typeof t?.villageAt === 'function' ? !!t.villageAt(Math.floor(x), Math.floor(z)) : false;
}

export const ORE_FILL = { [B.coal]: 0.42, [B.iron]: 0.34, [B.gold]: 0.26, [B.diamond]: 0.22, [B.redstone]: 0.32 };
