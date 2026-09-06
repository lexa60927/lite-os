/**
 * Пример мода: рубины — своя текстура, блок, предмет, рецепт, руда в камне и моб.
 *
 * Файл лежит в mods/, поэтому Vite подхватывает его при сборке; в Настройки → «Моды»
 * он появляется списком. enabledByDefault: false — включённая игра выглядит ровно
 * как без мода, и только галка в настройках её меняет.
 *
 * Справочник по всем полям — mods/README.md.
 */
export default {
  id: 'ruby',
  name: 'Рубины',
  version: '1.0',
  author: 'пример',
  description: 'Рубиновая руда в камне, блок и самоцвет, два рецепта, голем из рубина',
  enabledByDefault: false,

  // Тайлы рисуются описаниями (16×16). base — цвет поля, speck — вкрапления,
  // density — густота, icon — готовый силуэт предмета.
  tiles: {
    ruby_ore: { base: '#6f6f73', speck: '#d81b52', density: 0.34, seed: 12 },
    ruby_block: { base: '#b3154c', grid: 4, shade: 0.2, seed: 3 },
    item_ruby: { base: '#e2386a', icon: 'gem', light: '#ff8fb0', dark: '#8d0f36' },
  },

  blocks: [
    {
      key: 'ruby_ore', name: 'Рубиновая руда', tile: 'ruby_ore',
      hard: 2.4, sound: 'stone', drops: 'ruby',
    },
    {
      key: 'ruby_block', name: 'Рубиновый блок', tile: 'ruby_block',
      hard: 2.0, sound: 'stone', drops: 'ruby_block',
    },
    { key: 'ruby', name: 'Рубин', tile: 'item_ruby', item: true },
    {
      key: 'ruby_lantern', name: 'Рубиновый фонарь', tile: 'ruby_block',
      torch: true, glow: 0.85, drops: 'ruby_lantern',
    },
    // Инструмент: kind/mine/speed/damage — как у внутренних инструментов.
    {
      key: 'ruby_pickaxe', name: 'Рубиновая кирка', tile: 'item_ruby',
      tool: { kind: 'pickaxe', mine: ['stone', 'glass'], speed: 6.8, damage: 6, uses: 300 },
    },
    // Бонусный дроп: шанс считается из координат, поэтому сосед по сети найдёт то же.
    { key: 'ruby_dust', name: 'Рубиновая пыль', tile: 'item_ruby', item: true, bonusOf: 'ruby_ore', bonus: 0.2 },
  ],

  recipes: [
    { out: 'ruby_block', n: 1, need: [['ruby', 4]], name: 'Рубиновый блок', table: true },
    { out: 'ruby', n: 4, need: [['ruby_block', 1]], name: 'Рубины из блока' },
    { out: 'ruby_lantern', n: 2, need: [['ruby', 1], ['glass', 1]], name: 'Рубиновый фонарь' },
  ],

  // Жилы в камне на глубине 2..18: chance — доля клеток-кандидатов, veins — сколько
  // попыток на чанк, size — длина жилы. Всё детерминированно по координатам.
  ore: { block: 'ruby_ore', into: 'stone', min: 2, max: 18, chance: 0.5, veins: 9, size: 5 },

  mobs: {
    rubygolem: {
      name: 'Рубиновый голем', color: '#c2185b', hp: 24, size: 1.25, speed: 1.9,
      hostile: true, damage: 4, jumps: true, darkOnly: true,
      drops: [{ block: 'ruby', n: 2 }, { block: 'ruby_dust', n: 1 }],
    },
  },
};
