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
};

export const BIOME = { OCEAN: 0, BEACH: 1, PLAINS: 2, FOREST: 3, DESERT: 4, SNOWY: 5, MOUNTAIN: 6, SAVANNA: 7, SWAMP: 8, TAIGA: 9 };
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
  treeAt(x, z) {
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

    for (let lz = 0; lz < CHUNK; lz++) {
      for (let lx = 0; lx < CHUNK; lx++) {
        const x = cx * CHUNK + lx;
        const z = cz * CHUNK + lz;
        const c = this.col(x, z);
        const h = c.h;
        const biome = c.biome;
        const temp = c.temp;
        heights[lz * CHUNK + lx] = h;
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
          }
        }
      }
    }

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
        if (r < (forest ? 0.22 : savanna ? 0.3 : 0.13)) blocks[above] = B.tall_grass;
        else if (r < (forest ? 0.28 : 0.16)) blocks[above] = B.fern;
        else if (r > 0.955) blocks[above] = B.flower_red;
        else if (r > 0.935) blocks[above] = B.flower_yellow;
      }
    }
    return solid;
  }
}

/** Доля блока, занятая рудой внутри подходящей ячейки. */
export const ORE_FILL = { [B.coal]: 0.42, [B.iron]: 0.34, [B.gold]: 0.26, [B.diamond]: 0.22, [B.redstone]: 0.32 };
