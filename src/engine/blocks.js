/**
 * Реестр блоков. id — байт в чанковом массиве, остальное — свойства.
 * tiles: ссылки на имена тайлов атласа (top/bottom/side), render — способ отрисовки.
 */
export const AIR = 0;

/** Предметы-ингредиенты (id 38..42) и инструменты (id 43+). */
const ITEM_DEFS = [
  { id: 38, name: 'Саженец', key: 'sapling', tiles: { all: 'sapling' , tinted: true}, render: 'cross', cutout: true, breakable: true, hardness: 0.15, sound: 'grass', plantH: 0.4 },
  { id: 39, name: 'Кожа', key: 'leather', tiles: { all: 'item_leather' }, render: 'item', sound: 'soft' },
  { id: 40, name: 'Мясо', key: 'pork', tiles: { all: 'item_pork' }, render: 'item', sound: 'soft' },
  { id: 41, name: 'Палка', key: 'stick', tiles: { all: 'item_stick' }, render: 'item', sound: 'wood' },
  { id: 42, name: 'Уголь', key: 'coal_item', tiles: { all: 'item_coal' }, render: 'item', sound: 'soft' },
];

const TOOL_KINDS = [
  { kind: 'pickaxe', label: 'кирка', fem: true, mine: ['stone', 'glass'] },
  { kind: 'axe', label: 'топор', mine: ['wood'] },
  { kind: 'shovel', label: 'лопата', fem: true, mine: ['dirt', 'sand', 'grass'] },
  { kind: 'sword', label: 'меч', mine: ['plant', 'wool', 'grass'] },
];
// прилагательное согласуем с родом существительного: «каменная кирка», но «каменный топор»
const TOOL_TIERS = [
  { tier: 'wood', fem: 'деревянная', masc: 'деревянный', speed: 2.4, damage: 2, uses: 60 },
  { tier: 'stone', fem: 'каменная', masc: 'каменный', speed: 3.6, damage: 3, uses: 132 },
  { tier: 'iron', fem: 'железная', masc: 'железный', speed: 5.6, damage: 5, uses: 251 },
  { tier: 'diamond', fem: 'алмазная', masc: 'алмазный', speed: 8.2, damage: 7, uses: 601 },
];
const VILLAGE_DEFS = [
  { id: 59, name: 'Грядка', key: 'farmland', tiles: { top: 'farmland', bottom: 'dirt', side: 'dirt' }, render: 'cube', solid: true, opaque: true, breakable: true, hardness: 0.4, sound: 'sand', drops: 'dirt' },
  { id: 60, name: 'Пшеница', key: 'wheat', tiles: { all: 'wheat' }, render: 'cross', solid: false, opaque: false, cutout: true, breakable: true, hardness: 0.05, sound: 'grass', replaceable: true, plantH: 0.62 },
  { id: 61, name: 'Стог сена', key: 'hay_block', tiles: { top: 'hay_top', bottom: 'hay_top', side: 'hay_side' }, render: 'cube', solid: true, opaque: true, breakable: true, hardness: 0.5, sound: 'grass' },
  { id: 62, name: 'Изумруд', key: 'emerald', tiles: { all: 'item_emerald' }, render: 'item', sound: 'soft' },
];

const TOOL_DEFS = [];
{
  let id = 43;
  for (const tier of TOOL_TIERS) {
    for (const kind of TOOL_KINDS) {
      TOOL_DEFS.push({
        id: id++,
        name: `${((kind.fem ? tier.fem : tier.masc))[0].toUpperCase()}${(kind.fem ? tier.fem : tier.masc).slice(1)} ${kind.label}`,
        key: `${tier.tier}_${kind.kind}`,
        tiles: { all: `tool_${kind.kind}_${tier.tier}` },
        render: 'item',
        sound: 'wood',
        tool: { kind: kind.kind, mine: kind.mine, speed: tier.speed, damage: tier.damage, uses: tier.uses },
      });
    }
  }
}

/**
 * Новое содержимое 0.3.0 (иды 63+): три блока и шесть предметов.
 * Еда (`food`) и «информация» (`info`) — поля, которые читает game-слой:
 * яблоко/хлеб съедаются ПКМ, компас/часы показывают данные в панели F3 и при
 * выборе слота. `bonus` — что может выпасть из блока вместо основного дропа
 * (детерминированно: исход зависит от координат, а не от random, чтобы один и
 * тот же гравий на всех клиентах давал одно и то же).
 */
const NEW_DEFS = [
  { id: 63, name: 'Замшелый булыжник', key: 'mossy_cobblestone', tiles: { all: 'mossy_cobblestone' }, render: 'cube', solid: true, opaque: true, breakable: true, hardness: 1.3, sound: 'stone' },
  { id: 64, name: 'Лёд', key: 'ice', tiles: { all: 'ice' }, render: 'cube', solid: true, opaque: false, cutout: true, hideSame: true, breakable: true, hardness: 0.6, sound: 'stone', drops: 'ice' },
  { id: 65, name: 'Фонарь', key: 'lantern', tiles: { all: 'lantern' }, render: 'torch', solid: false, opaque: false, cutout: true, breakable: true, hardness: 0.4, sound: 'stone', light: 1.0, fullBright: true, slim: true },
  { id: 66, name: 'Кремень', key: 'flint', tiles: { all: 'item_flint' }, render: 'item', sound: 'soft', bonusOf: 'gravel', bonus: 0.16 },
  { id: 67, name: 'Яблоко', key: 'apple', tiles: { all: 'item_apple' }, render: 'item', sound: 'soft', food: 4, bonusOf: 'leaves', bonus: 0.14 },
  { id: 68, name: 'Хлеб', key: 'bread', tiles: { all: 'item_bread' }, render: 'item', sound: 'soft', food: 8 },
  { id: 69, name: 'Компас', key: 'compass', tiles: { all: 'item_compass' }, render: 'item', sound: 'soft', info: 'spawn' },
  { id: 70, name: 'Часы', key: 'clock', tiles: { all: 'item_clock' }, render: 'item', sound: 'soft', info: 'time' },
  { id: 71, name: 'Ножницы', key: 'shears', tiles: { all: 'item_shears' }, render: 'item', sound: 'wood', tool: { kind: 'shears', mine: ['grass', 'plant', 'wool'], speed: 4.2, damage: 2, uses: 118 } },
];

export const BLOCKS = [
  {
    id: 0, name: 'Воздух', key: 'air', tiles: null, render: 'none',
    solid: false, opaque: false, breakable: false, replaceable: true, hardness: 0, sound: 'soft',
  },
  {
    id: 1, name: 'Камень', key: 'stone', tiles: { all: 'stone' }, render: 'cube',
    solid: true, opaque: true, breakable: true, hardness: 1.1, sound: 'stone', drops: 'cobblestone',
  },
  {
    id: 2, name: 'Дёрн', key: 'grass', tiles: { top: 'grass_top', bottom: 'dirt', side: 'grass_side' },
    render: 'cube', solid: true, opaque: true, breakable: true, hardness: 0.6, sound: 'grass', drops: 'dirt', tinted: true,
  },
  { id: 3, name: 'Земля', key: 'dirt', tiles: { all: 'dirt' }, render: 'cube', solid: true, opaque: true, breakable: true, hardness: 0.5, sound: 'dirt' },
  { id: 4, name: 'Булыжник', key: 'cobblestone', tiles: { all: 'cobblestone' }, render: 'cube', solid: true, opaque: true, breakable: true, hardness: 1.3, sound: 'stone' },
  { id: 5, name: 'Доски', key: 'planks', tiles: { all: 'planks' }, render: 'cube', solid: true, opaque: true, breakable: true, hardness: 1.0, sound: 'wood' },
  { id: 6, name: 'Песок', key: 'sand', tiles: { all: 'sand' }, render: 'cube', solid: true, opaque: true, breakable: true, hardness: 0.5, sound: 'sand' },
  { id: 7, name: 'Песчаник', key: 'sandstone', tiles: { top: 'sandstone_top', bottom: 'sandstone_top', side: 'sandstone_side' }, render: 'cube', solid: true, opaque: true, breakable: true, hardness: 0.9, sound: 'stone' },
  { id: 8, name: 'Гравий', key: 'gravel', tiles: { all: 'gravel' }, render: 'cube', solid: true, opaque: true, breakable: true, hardness: 0.6, sound: 'sand' },
  { id: 9, name: 'Бревно', key: 'log', tiles: { top: 'log_top', bottom: 'log_top', side: 'log_side' }, render: 'cube', solid: true, opaque: true, breakable: true, hardness: 1.2, sound: 'wood' },
  { id: 10, name: 'Листва', key: 'leaves', tiles: { all: 'leaves' }, render: 'cube', solid: true, opaque: false, cutout: true, breakable: true, hardness: 0.3, sound: 'grass', tinted: true, drops: 'sapling' },
  { id: 11, name: 'Вода', key: 'water', tiles: { all: 'water' }, render: 'liquid', solid: false, opaque: false, liquid: true, hideSame: true, breakable: false, hardness: 0, sound: 'splash' },
  { id: 12, name: 'Стекло', key: 'glass', tiles: { all: 'glass' }, render: 'cube', solid: true, opaque: false, cutout: true, hideSame: true, breakable: true, hardness: 0.4, sound: 'glass' },
  { id: 13, name: 'Кирпичи', key: 'bricks', tiles: { all: 'bricks' }, render: 'cube', solid: true, opaque: true, breakable: true, hardness: 1.4, sound: 'stone' },
  { id: 14, name: 'Каменный кирпич', key: 'stone_bricks', tiles: { all: 'stone_bricks' }, render: 'cube', solid: true, opaque: true, breakable: true, hardness: 1.3, sound: 'stone' },
  { id: 15, name: 'Снег', key: 'snow', tiles: { top: 'snow', bottom: 'dirt', side: 'snow_side' }, render: 'cube', solid: true, opaque: true, breakable: true, hardness: 0.3, sound: 'grass' },
  { id: 16, name: 'Уголь', key: 'coal_ore', tiles: { all: 'coal_ore' }, render: 'cube', solid: true, opaque: true, breakable: true, hardness: 1.6, sound: 'stone' },
  { id: 17, name: 'Железо', key: 'iron_ore', tiles: { all: 'iron_ore' }, render: 'cube', solid: true, opaque: true, breakable: true, hardness: 2.0, sound: 'stone' },
  { id: 18, name: 'Золото', key: 'gold_ore', tiles: { all: 'gold_ore' }, render: 'cube', solid: true, opaque: true, breakable: true, hardness: 2.2, sound: 'stone' },
  { id: 19, name: 'Алмазы', key: 'diamond_ore', tiles: { all: 'diamond_ore' }, render: 'cube', solid: true, opaque: true, breakable: true, hardness: 2.6, sound: 'stone' },
  { id: 20, name: 'Редстоун', key: 'redstone_ore', tiles: { all: 'redstone_ore' }, render: 'cube', solid: true, opaque: true, breakable: true, hardness: 2.0, sound: 'stone', light: 0.25 },
  { id: 21, name: 'Обсидиан', key: 'obsidian', tiles: { all: 'obsidian' }, render: 'cube', solid: true, opaque: true, breakable: true, hardness: 5.0, sound: 'stone' },
  { id: 22, name: 'Бедрок', key: 'bedrock', tiles: { all: 'bedrock' }, render: 'cube', solid: true, opaque: true, breakable: false, hardness: 0, sound: 'stone' },
  { id: 23, name: 'Светокамень', key: 'glowstone', tiles: { all: 'glowstone' }, render: 'cube', solid: true, opaque: true, breakable: true, hardness: 0.5, sound: 'glass', light: 1.0, fullBright: true },
  {
    id: 24, name: 'Факел', key: 'torch', tiles: { all: 'torch' }, render: 'torch',
    solid: false, opaque: false, cutout: true, breakable: true, hardness: 0.05, sound: 'wood',
    light: 1.0, fullBright: true, noSelect: false, slim: true,
  },
  { id: 25, name: 'Высокая трава', key: 'tall_grass', tiles: { all: 'tall_grass' , tinted: true}, render: 'cross', solid: false, opaque: false, cutout: true, breakable: true, hardness: 0.05, sound: 'grass', replaceable: true, plantH: 0.5 },
  { id: 26, name: 'Папоротник', key: 'fern', tiles: { all: 'fern' , tinted: true}, render: 'cross', solid: false, opaque: false, cutout: true, breakable: true, hardness: 0.05, sound: 'grass', replaceable: true, plantH: 0.46 },
  { id: 27, name: 'Красный цветок', key: 'flower_red', tiles: { all: 'flower_red' }, render: 'cross', solid: false, opaque: false, cutout: true, breakable: true, hardness: 0.05, sound: 'grass', replaceable: true, plantH: 0.38 },
  { id: 28, name: 'Жёлтый цветок', key: 'flower_yellow', tiles: { all: 'flower_yellow' }, render: 'cross', solid: false, opaque: false, cutable: true, cutout: true, replaceable: true, hardness: 0.05, sound: 'grass', plantH: 0.38 },
  { id: 29, name: 'Кактус', key: 'cactus', tiles: { top: 'cactus_top', bottom: 'cactus_top', side: 'cactus_side' }, render: 'cube', solid: true, opaque: true, breakable: true, hardness: 0.5, sound: 'grass', inset: 0.06 },
  { id: 30, name: 'Белая шерсть', key: 'wool_white', tiles: { all: 'wool_white' }, render: 'cube', solid: true, opaque: true, breakable: true, hardness: 0.7, sound: 'wool' },
  { id: 31, name: 'Красная шерсть', key: 'wool_red', tiles: { all: 'wool_red' }, render: 'cube', solid: true, opaque: true, breakable: true, hardness: 0.7, sound: 'wool' },
  { id: 32, name: 'Синяя шерсть', key: 'wool_blue', tiles: { all: 'wool_blue' }, render: 'cube', solid: true, opaque: true, breakable: true, hardness: 0.7, sound: 'wool' },
  { id: 33, name: 'Жёлтая шерсть', key: 'wool_yellow', tiles: { all: 'wool_yellow' }, render: 'cube', solid: true, opaque: true, breakable: true, hardness: 0.7, sound: 'wool' },
  { id: 34, name: 'Зелёная шерсть', key: 'wool_lime', tiles: { all: 'wool_lime' }, render: 'cube', solid: true, opaque: true, breakable: true, hardness: 0.7, sound: 'wool' },
  { id: 35, name: 'Чёрная шерсть', key: 'wool_black', tiles: { all: 'wool_black' }, render: 'cube', solid: true, opaque: true, breakable: true, hardness: 0.7, sound: 'wool' },
  { id: 36, name: 'Верстак', key: 'crafting_table', tiles: { top: 'crafting_top', bottom: 'planks', side: 'crafting_side' }, render: 'cube', solid: true, opaque: true, breakable: true, hardness: 1.0, sound: 'wood' },
  { id: 37, name: 'Подзол', key: 'podzol', tiles: { top: 'podzol', bottom: 'dirt', side: 'podzol_side' }, render: 'cube', solid: true, opaque: true, breakable: true, hardness: 0.5, sound: 'dirt' },
  ...ITEM_DEFS,
  ...TOOL_DEFS,
  // --- деревни (59+): их ставит генератор, в творческом инвентаре доступны.
  // ВАЖНО: BLOCKS индексируется по id, поэтому новые блоки — только в конце
  // и с id, равным числу предыдущих записей (иначе BLOCKS[id] читает чужой def).
  ...VILLAGE_DEFS,
  ...NEW_DEFS,
];

export const BY_KEY = new Map(BLOCKS.map((b) => [b.key, b]));
export const byKey = (key) => (key == null ? AIR : BY_KEY.get(key)?.id ?? AIR);
export const byId = (id) => BLOCKS[id] ?? BLOCKS[0];
export const isOpaque = (id) => BLOCKS[id]?.opaque === true;
export const isSolid = (id) => BLOCKS[id]?.solid === true;
export const isLiquid = (id) => BLOCKS[id]?.liquid === true;
export const isReplaceable = (id) => BLOCKS[id]?.replaceable === true;
export const isCutout = (id) => BLOCKS[id]?.cutout === true;
/** Прозрачно для трассировки луча (вид сквозь блок). */
export const seeThrough = (id) => !isOpaque(id);

/** Это предмет: в мире не существует, в хотбаре — стек до 64. */
export const isItem = (id) => BLOCKS[id]?.render === 'item';
/** Сколько блоков выдаёт поломка (drops → key → id). */
export const dropOf = (id) => {
  const def = BLOCKS[id];
  if (!def) return 0;
  if (def.drops) return byKey(def.drops);
  return def.item || def.replaceable ? 0 : id;
};
/**
 * Бонусный дроп из блока: гравий может дать кремень, листва — яблоко.
 * Исход считаем из координат (hash2), а не из random(): один и тот же блок у
 * всех игроков и во всех клиентах даёт одно и то же, и сетевая синхронизация
 * не начинает спорить сама с собой.
 */
export function bonusDropOf(id, x, y, z) {
  for (const def of NEW_DEFS) {
    if (!def.bonusOf || def.bonusOf !== BLOCKS[id]?.key) continue;
    const h = (x * 73856093) ^ (y * 19349663) ^ (z * 83492791);
    const r = ((h >>> 0) % 1000) / 1000;
    if (r < (def.bonus ?? 0.15)) return def.id;
  }
  return 0;
}

/** Скорость поломки с учётом инструмента: 1 = рука. */
export function mineMultiplier(def, tool) {
  if (!def || !tool) return 1;
  const t = BLOCKS[tool]?.tool;
  if (!t) return 1;
  if (t.mine.includes(def.sound)) return t.speed;
  return def.sound === 'stone' || def.sound === 'glass' ? 0.45 : 1;
}
/** Урон по мобу от предмета в руке. */
export const damageOf = (id) => BLOCKS[id]?.tool?.damage ?? 1;


/** Всё, что перекрывает соседнюю грань (для мешинга граней). */
export function hidesFace(id, neighborId) {
  const nb = BLOCKS[neighborId];
  const cur = BLOCKS[id];
  if (!nb || nb.render === 'none') return false;
  if (nb.opaque) return true;
  // вода не прячет сама себя, листва/стекло не прячут друг друга
  if (nb.cutout || nb.liquid) return cur.key === nb.key && !nb.cutout;
  return false;
}
