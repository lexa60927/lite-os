/**
 * Реестр блоков. id — байт в чанковом массиве, остальное — свойства.
 * tiles: ссылки на имена тайлов атласа (top/bottom/side), render — способ отрисовки.
 */
export const AIR = 0;

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
    render: 'cube', solid: true, opaque: true, breakable: true, hardness: 0.6, sound: 'grass', drops: 'dirt',
  },
  { id: 3, name: 'Земля', key: 'dirt', tiles: { all: 'dirt' }, render: 'cube', solid: true, opaque: true, breakable: true, hardness: 0.5, sound: 'dirt' },
  { id: 4, name: 'Булыжник', key: 'cobblestone', tiles: { all: 'cobblestone' }, render: 'cube', solid: true, opaque: true, breakable: true, hardness: 1.3, sound: 'stone' },
  { id: 5, name: 'Доски', key: 'planks', tiles: { all: 'planks' }, render: 'cube', solid: true, opaque: true, breakable: true, hardness: 1.0, sound: 'wood' },
  { id: 6, name: 'Песок', key: 'sand', tiles: { all: 'sand' }, render: 'cube', solid: true, opaque: true, breakable: true, hardness: 0.5, sound: 'sand' },
  { id: 7, name: 'Песчаник', key: 'sandstone', tiles: { top: 'sandstone_top', bottom: 'sandstone_top', side: 'sandstone_side' }, render: 'cube', solid: true, opaque: true, breakable: true, hardness: 0.9, sound: 'stone' },
  { id: 8, name: 'Гравий', key: 'gravel', tiles: { all: 'gravel' }, render: 'cube', solid: true, opaque: true, breakable: true, hardness: 0.6, sound: 'sand' },
  { id: 9, name: 'Бревно', key: 'log', tiles: { top: 'log_top', bottom: 'log_top', side: 'log_side' }, render: 'cube', solid: true, opaque: true, breakable: true, hardness: 1.2, sound: 'wood' },
  { id: 10, name: 'Листва', key: 'leaves', tiles: { all: 'leaves' }, render: 'cube', solid: true, opaque: false, cutout: true, breakable: true, hardness: 0.3, sound: 'grass' },
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
  { id: 25, name: 'Высокая трава', key: 'tall_grass', tiles: { all: 'tall_grass' }, render: 'cross', solid: false, opaque: false, cutout: true, breakable: true, hardness: 0.05, sound: 'grass', replaceable: true, fullBright: true },
  { id: 26, name: 'Папоротник', key: 'fern', tiles: { all: 'fern' }, render: 'cross', solid: false, opaque: false, cutout: true, breakable: true, hardness: 0.05, sound: 'grass', replaceable: true, fullBright: true },
  { id: 27, name: 'Красный цветок', key: 'flower_red', tiles: { all: 'flower_red' }, render: 'cross', solid: false, opaque: false, cutout: true, breakable: true, hardness: 0.05, sound: 'grass', replaceable: true, fullBright: true },
  { id: 28, name: 'Жёлтый цветок', key: 'flower_yellow', tiles: { all: 'flower_yellow' }, render: 'cross', solid: false, opaque: false, cutable: true, cutout: true, replaceable: true, hardness: 0.05, sound: 'grass', fullBright: true },
  { id: 29, name: 'Кактус', key: 'cactus', tiles: { top: 'cactus_top', bottom: 'cactus_top', side: 'cactus_side' }, render: 'cube', solid: true, opaque: true, breakable: true, hardness: 0.5, sound: 'grass', inset: 0.06 },
  { id: 30, name: 'Белая шерсть', key: 'wool_white', tiles: { all: 'wool_white' }, render: 'cube', solid: true, opaque: true, breakable: true, hardness: 0.7, sound: 'wool' },
  { id: 31, name: 'Красная шерсть', key: 'wool_red', tiles: { all: 'wool_red' }, render: 'cube', solid: true, opaque: true, breakable: true, hardness: 0.7, sound: 'wool' },
  { id: 32, name: 'Синяя шерсть', key: 'wool_blue', tiles: { all: 'wool_blue' }, render: 'cube', solid: true, opaque: true, breakable: true, hardness: 0.7, sound: 'wool' },
  { id: 33, name: 'Жёлтая шерсть', key: 'wool_yellow', tiles: { all: 'wool_yellow' }, render: 'cube', solid: true, opaque: true, breakable: true, hardness: 0.7, sound: 'wool' },
  { id: 34, name: 'Зелёная шерсть', key: 'wool_lime', tiles: { all: 'wool_lime' }, render: 'cube', solid: true, opaque: true, breakable: true, hardness: 0.7, sound: 'wool' },
  { id: 35, name: 'Чёрная шерсть', key: 'wool_black', tiles: { all: 'wool_black' }, render: 'cube', solid: true, opaque: true, breakable: true, hardness: 0.7, sound: 'wool' },
  { id: 36, name: 'Верстак', key: 'crafting_table', tiles: { top: 'crafting_top', bottom: 'planks', side: 'crafting_side' }, render: 'cube', solid: true, opaque: true, breakable: true, hardness: 1.0, sound: 'wood' },
  { id: 37, name: 'Подзол', key: 'podzol', tiles: { top: 'podzol', bottom: 'dirt', side: 'podzol' }, render: 'cube', solid: true, opaque: true, breakable: true, hardness: 0.5, sound: 'dirt' },
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
