/**
 * Рецепты. `need` — пары [ключ блока, количество]; `table` — нужен верстак рядом.
 * Простые без сетки: собрал материалы → нажал «скрафтить».
 */
import { byKey } from '../engine/blocks.js';

const TIER_NAME = { stone: 'камень', iron: 'железо', diamond: 'алмаз' };
const TIER_MAT = { stone: 'cobblestone', iron: 'iron_ore', diamond: 'diamond_ore' };

export const RECIPES = [
  { out: 'planks', n: 4, need: [['log', 1]], name: 'Доски' },
  { out: 'stick', n: 4, need: [['planks', 2]], name: 'Палки' },
  { out: 'crafting_table', n: 1, need: [['planks', 4]], name: 'Верстак' },
  { out: 'torch', n: 4, need: [['stick', 1], ['coal_item', 1]], name: 'Факелы' },
  { out: 'cobblestone', n: 1, need: [['stone', 1]], name: 'Булыжник' },
  { out: 'glass', n: 1, need: [['sand', 1], ['coal_item', 1]], table: true, name: 'Стекло' },
  { out: 'stone_bricks', n: 4, need: [['stone', 2], ['coal_item', 1]], table: true, name: 'Каменный кирпич' },
  { out: 'bricks', n: 4, need: [['clay', 2], ['coal_item', 1]], table: true, name: 'Кирпичи' },
  // ————— 0.3.0: новое содержимое
  { out: 'mossy_cobblestone', n: 1, need: [['cobblestone', 1], ['sapling', 1]], name: 'Замшелый булыжник' },
  { out: 'ice', n: 1, need: [['snow', 4]], table: true, name: 'Лёд' },
  { out: 'lantern', n: 2, need: [['glass', 1], ['flint', 1], ['coal_item', 1]], name: 'Фонарь' },
  { out: 'flint', n: 1, need: [['gravel', 1]], name: 'Кремень из гравия' },
  { out: 'bread', n: 1, need: [['wheat', 3]], table: true, name: 'Хлеб' },
  { out: 'compass', n: 1, need: [['iron_ore', 4], ['emerald', 1]], table: true, name: 'Компас' },
  { out: 'clock', n: 1, need: [['gold_ore', 4], ['redstone_ore', 1]], table: true, name: 'Часы' },
  { out: 'shears', n: 1, need: [['iron_ore', 2]], name: 'Ножницы' },
  // ————— деревянные инструменты (руками)
  { out: 'wood_pickaxe', n: 1, need: [['planks', 3], ['stick', 1]], name: 'Кирка (дерево)' },
  { out: 'wood_axe', n: 1, need: [['planks', 3], ['stick', 2]], name: 'Топор (дерево)' },
  { out: 'wood_shovel', n: 1, need: [['planks', 1], ['stick', 1]], name: 'Лопата (дерево)' },
  { out: 'wood_sword', n: 1, need: [['planks', 2], ['stick', 1]], name: 'Меч (дерево)' },
  // ————— камень / железо / алмаз (верстак)
  ...['stone', 'iron', 'diamond'].flatMap((tier) => [
    { out: `${tier}_pickaxe`, n: 1, need: [[TIER_MAT[tier], 3], ['stick', 2]], table: true, name: `Кирка (${TIER_NAME[tier]})` },
    { out: `${tier}_axe`, n: 1, need: [[TIER_MAT[tier], 3], ['stick', 2]], table: true, name: `Топор (${TIER_NAME[tier]})` },
    { out: `${tier}_shovel`, n: 1, need: [[TIER_MAT[tier], 1], ['stick', 1]], table: true, name: `Лопата (${TIER_NAME[tier]})` },
    { out: `${tier}_sword`, n: 1, need: [[TIER_MAT[tier], 2], ['stick', 1]], table: true, name: `Меч (${TIER_NAME[tier]})` },
  ]),
];

/** id 'clay' отсутствует — рецепт с неизвестным ингредиентом отбрасываем при загрузке. */
export const RECIPES_CLEAN = RECIPES.filter((r) => {
  if (!byKey(r.out)) return false;
  for (const [key] of r.need) if (!byKey(key)) return false;
  return true;
}).map((r) => ({
  outId: byKey(r.out),
  n: r.n,
  table: !!r.table,
  name: r.name,
  need: r.need.map(([key, count]) => ({ id: byKey(key), n: count })),
}));

/**
 * Рецепты модов: та же нормализация, что у RECIPES_CLEAN (ключ → id). Иначе
 * рецепт с неизвестным ключом выглядел бы доступным, но собрать его было бы
 * нельзя — а такое в настройках мода легко опечататься.
 * Возвращает [{ src, clean }], чтобы mods.js мог откатить ровно свои записи.
 */
export function addRecipes(defs, mod = null) {
  const made = [];
  for (const r of defs || []) {
    if (!r || !r.out || !Array.isArray(r.need) || !r.need.length) continue;
    const src = { ...r, mod };
    const clean = {
      outId: byKey(r.out),
      n: Math.max(1, r.n | 0 || 1),
      table: !!r.table,
      name: r.name,
      mod,
      need: r.need.map(([key, count]) => ({ id: byKey(key), n: Math.max(1, count | 0 || 1) })),
    };
    RECIPES.push(src);
    RECIPES_CLEAN.push(clean);
    made.push({ src, clean });
  }
  return made;
}

/** Можно ли собрать рецепт: инвентарь — объект с count(id). nearTable — верстак рядом. */
export function canCraft(recipe, inv, nearTable) {
  if (recipe.table && !nearTable) return false;
  for (const need of recipe.need) if (inv.count(need.id) < need.n) return false;
  return true;
}

export function craft(recipe, inv) {
  for (const need of recipe.need) {
    if (inv.take(need.id, need.n) !== need.n) return false;
  }
  const left = inv.add(recipe.outId, recipe.n);
  if (left > 0) {
    // не влезло — возвращаем материалы
    for (const need of recipe.need) inv.add(need.id, need.n);
    return false;
  }
  return true;
}
