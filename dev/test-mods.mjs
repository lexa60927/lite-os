/**
 * Тесты системы модов и своих шейдеров.
 *
 * Проверяем ровно то, без чего моды были бы кнопкой «сломать игру»:
 *  1. без модов игра не меняется вообще — ни числом тайлов/блоков, ни строкой шейдера;
 *  2. хороший мод применяется целиком и нормализуется так, как ждёт движок;
 *  3. битый мод даёт причину, а не исключение, и не мешает соседям;
 *  4. GLSL проходит валидатор, объявления униформ встают вне main(), код — в свой якорь;
 *  5. своя руда детерминирована (иначе сеть разъедется) и не затирает правки игрока;
 *  6. хранилище: вкл/выкл, свой мод из textarea, битый сохранённый мод не ломает запуск.
 *
 * Запуск: node dev/test-mods.mjs   (или npm run test:mods)
 */
import {
  register, resetMods, snapshot, loadMods, parseSource, checkGlsl, shaderChunks,
  modUniforms, modBlockIds, modOf, orePass, hasOre, hasShaders, setUniform,
  setModEnabled, saveUserSource, readUserSource, LIMITS, normId, GLSL_RESERVED,
} from '../src/game/mods.js';
import { mainLocals, globalNames } from './shader-locals.mjs';
import { readFileSync } from 'node:fs';
const mainSrc = readFileSync(new URL('../src/main.js', import.meta.url), 'utf8');
import { parse as parseGlslRaw } from '@shaderfrog/glsl-parser';
import { BLOCKS, BY_KEY, AIR } from '../src/engine/blocks.js';
import { buildTiles, TILE_NAMES } from '../src/engine/tiles.js';
import { buildVoxelShaders, VOXEL_FRAG, VOXEL_VERT, glslTypeOf } from '../src/render/voxelMaterial.js';
import { World } from '../src/engine/world.js';

/** Минимальный префикс three + раскрываем его чанки заглушками: цель — проверить,
 * что OUR текст синтаксически цел (вставка мода не порезала скобки и main). */
function parseGlsl(src) {
  const stubs = `
precision highp float;
uniform mat4 modelMatrix; uniform mat4 viewMatrix; uniform mat4 projectionMatrix; uniform mat4 modelViewMatrix;
uniform mat3 normalMatrix; uniform vec3 cameraPosition; uniform bool isOrthographic;
float getShadowMask() { return 1.0; }
`;
  const body = src.replace(/^[ \t]*#include\s*<[^>]+>[ \t]*$/gm, '');
  return parseGlslRaw(stubs + body, { quiet: true });
}

// Vec-униформы после нормализации обязаны быть конечными.
function uniformIsFinite() {
  const probe = { id: 'nanprobe', name: 'NaN', shader: { uniforms: { uNan: [NaN, 1 / 0, 0.5] }, frag: 'col += vec3(uNan.x, uNan.y, 0.0) * 0.0;' } };
  register('nanprobe', probe, 'тест');
  const u = modUniforms();
  const v = u && u.uNan;
  const finite = !!(v && Number.isFinite(v.x) && Number.isFinite(v.y) && Number.isFinite(v.z));
  resetMods();
  return finite;
}

let fails = 0;
const ok = (m) => console.log('  ✔ ' + m);
const bad = (m) => { console.log('  ✘ ' + m); fails++; };
const has = (s, sub) => String(s || '').includes(sub);
const strip = (src) => src.replace(/[ \t]*\/\*MOD_[A-Z_]+\*\/[ \t]*\n/g, '').replace(/[ \t]+$/gm, '');

class MemStore {
  constructor(init = {}) { this.m = new Map(Object.entries(init)); }
  getItem(k) { return this.m.has(k) ? this.m.get(k) : null; }
  setItem(k, v) { this.m.set(k, String(v)); }
  removeItem(k) { this.m.delete(k); }
}

// ── 0. чистое состояние = прежняя игра
console.log('0. без модов ничего не меняется');
resetMods();
{
  const t = buildTiles();
  if (t.tiles.length !== 88) bad(`тайлов ${t.tiles.length}, до мод-системы было 88`);
  else ok(`тайлов ${t.tiles.length}`);
  if (BLOCKS.length !== 72) bad(`блоков ${BLOCKS.length}, было 72`);
  else ok(`блоков ${BLOCKS.length}`);
  if (hasOre() || hasShaders()) bad('пустой реестр заявляет руду или шейдер');
  else ok('руды и шейдеров нет — материал и генерация строятся прежней дорогой');
  const built = buildVoxelShaders(shaderChunks());
  if (built.fragmentShader !== strip(VOXEL_FRAG) || built.vertexShader !== strip(VOXEL_VERT)) {
    bad('без модов собранный шейдер отличается от исходного');
  } else ok('шейдер без модов = VOXEL_FRAG/VERT, символ в символ');
  if (/MOD_/.test(built.fragmentShader + built.vertexShader)) bad('маркер якоря просочился в GPU-исходник');
  else ok('служебных маркеров в итоговом коде нет');
  if (modBlockIds().length || Object.keys(modUniforms() || {}).length) bad('после resetMods остались следы мода');
  else ok('resetMods возвращает реестр в ноль');
}

// ── 1. хороший мод со всеми секциями
console.log('1. мод: тайлы + блоки + рецепты + руда + моб + шейдер');
const GOOD = {
  id: 'ruby',
  name: 'Рубины',
  tiles: {
    ruby_ore: { base: '#6f6f73', speck: '#d81b52', density: 0.3, seed: 12 },
    ruby_block: { base: '#b3154c', grid: 4, shade: 0.2 },
    item_ruby: { base: '#e2386a', icon: 'gem', light: '#ff8fb0', dark: '#8d0f36' },
  },
  blocks: [
    { key: 'ruby_ore', name: 'Рубиновая руда', tile: 'ruby_ore', hard: 2.4, sound: 'stone', drops: 'ruby' },
    { key: 'ruby_block', name: 'Рубиновый блок', tile: 'ruby_block', hard: 2, sound: 'stone' },
    { key: 'ruby', name: 'Рубин', tile: 'item_ruby', item: true },
    { key: 'ruby_lamp', name: 'Лампа', tile: 'ruby_block', torch: true, glow: 0.85 },
    { key: 'ruby_pick', name: 'Кирка', tile: 'item_ruby', tool: { kind: 'pickaxe', mine: ['stone'], speed: 6.8, damage: 6 } },
    { key: 'ruby_glass', name: 'Стекло', tile: 'ruby_block', transparent: true },
    { key: 'pie', name: 'Пирог', tile: 'item_ruby', food: 6 },
    { key: 'ruby_dust', name: 'Пыль', tile: 'item_ruby', item: true, bonusOf: 'ruby_ore', bonus: 0.2 },
    { key: 'dirt', patch: { hardness: 0.2 } },
  ],
  recipes: [
    { out: 'ruby_block', n: 1, need: [['ruby', 4]], name: 'Рубиновый блок', table: true },
    { out: 'ruby', n: 4, need: [['ruby_block', 1]], name: 'Рубины из блока' },
  ],
  ore: { block: 'ruby_ore', into: 'stone', min: 2, max: 18, chance: 0.5, veins: 9, size: 5 },
  mobs: {
    rubygolem: {
      name: 'Голем', color: '#c2185b', hp: 24, size: 1.25, hostile: true, damage: 4,
      jumps: true, darkOnly: true, drops: [{ block: 'ruby', n: 2 }],
    },
  },
  shader: {
    name: 'Тёплый закат',
    uniforms: { uAmount: 0.55, uTint: [0.4, 0.9, 0.2] },
    frag: 'float k = clamp(uDusk * uAmount, 0.0, 1.0); col = mix(col, col * vec3(1.16, 1.0, 0.84), k) + vec3(uTint.x) * 0.0;',
    fragFinal: (m) => `if (tileIndex() == ${m.tileIndex('ruby_ore')}.0) col *= 1.02;`,
    post: 'c.rgb = mix(c.rgb, vec3(dot(c.rgb, vec3(0.3, 0.3, 0.3))), uAmount);',
  },
};
{
  const rec = register('ruby', GOOD, 'mods/ruby.js');
  if (!rec.ok) bad('хороший мод отклонён: ' + rec.error);
  else ok('мод принят');
  const ap = rec.applied || { tiles: [], blocks: [], patches: [], recipes: [], mobs: [], ore: 0, uniforms: [] };
  const want = [
    [ap.tiles.length === 4, `тайлов добавлено ${ap.tiles?.length}, ждём 4 (с моим mob_rubygolem)`],
    [modBlockIds().length === 8, `новых id ${modBlockIds().length}, ждём 8 (патч id не даёт)`],
    [modBlockIds()[0] === 72 && modBlockIds()[7] === 79, 'id выданы подряд, после ванильных'],
    [ap.ore === 1 && ap.mobs.join() === 'rubygolem' && ap.recipes.length === 2, `руд ${ap.ore}, мобы ${ap.mobs}, рецептов ${ap.recipes.length}`],
    [ap.shader === 'Тёплый закат' && ap.uniforms.join() === 'uAmount,uTint', 'шейдер и униформы записаны'],
  ];
  for (const [cond, msg] of want) if (!cond) bad(msg);
  ok('секции применены: 4 тайла, 8 блоков, 2 рецепта, жила, моб, шейдер');

  const ore = BY_KEY.get('ruby_ore'), lamp = BY_KEY.get('ruby_lamp'), glass = BY_KEY.get('ruby_glass');
  const pick = BY_KEY.get('ruby_pick'), pie = BY_KEY.get('pie'), item = BY_KEY.get('ruby'), dirt = BY_KEY.get('dirt');
  const shape = [
    [ore.hardness === 2.4, 'hard → hardness'],
    [ore.cutout !== true && ore.solid === true && ore.opaque === true, 'руда — полный непрозрачный блок (участвует в тенях)'],
    [ore.tiles.all === 'ruby_ore' && ore.tiles.top === undefined, 'один tile → tiles.all (mesher сам берёт all для недостающих граней)'],
    [ore.drops === 'ruby' && ore.mod === 'ruby', 'drops и метка автора'],
    [item.render === 'item' && item.solid === false && item.breakable === false, 'item → спрайт, не трогается как блок'],
    [lamp.torch !== undefined || lamp.render === 'torch', 'torch → своя отрисовка'],
    [lamp.light === 0.85 && lamp.fullBright === true && lamp.cutout === true && lamp.hardness === 0.3, 'glow → light, без AO, вырез'],
    [glass.opaque === false && glass.cutout === true, 'transparent → cutout'],
    [pick.tool.speed === 6.8 && pick.tool.uses === 150 && pick.tool.damage === 6 && pick.render === 'item', 'инструмент: uses по умолчанию 150, урон, render=item'],
    [pie.food === 6 && pie.solid === false, 'еда — предмет с food'],
    [BY_KEY.get('ruby_dust').bonusOf === 'ruby_ore' && BY_KEY.get('ruby_dust').bonus === 0.2, 'бонусный дроп привязан к координатам'],
    [dirt.hardness === 0.2 && BLOCKS[dirt.id] === dirt && modOf('dirt') === 'ruby', 'patch дописал свойства, id сохранил, помечен как модовый'],
    [TILE_NAMES.includes('mob_rubygolem'), 'у моба свой тайл в атласе'],
  ];
  for (const [cond, msg] of shape) if (!cond) bad('нормализация: ' + msg);
  ok(`${shape.length} свойств блоков приведены к форме движка`);

  // инструмент должен работать против руды — matching идёт по sound
  const { mineMultiplier } = await import('../src/engine/blocks.js');
  if (mineMultiplier(ore, pick.id) !== 6.8) bad('кирка мода не ускоряет добычу руды мода');
  else ok('кирка мода ускоряет добычу (match по sound, как у ванильных)');

  const { RECIPES, canCraft } = await import('../src/game/craft.js');
  const r = RECIPES.find((x) => x.out === 'ruby_block');
  if (!r || !r.table) bad('рецепт с table не долетел до крафта');
  else ok('рецепты в общем списке, table учтён');

  const { MOB_TYPES } = await import('../src/game/mobs.js');
  const mob = MOB_TYPES.rubygolem;
  const mobChecks = [
    [mob && mob.name === 'Голем' && mob.hp === 24, 'имя и hp'],
    [mob.w === 1.25 && mob.h === 1.25, `размер из size (${mob.w}×${mob.h})`],
    [mob.hostile === true && mob.passive === false && mob.damage === 4 && mob.aggro === 14, 'агрессия'],
    [mob.jumps === true && mob.darkOnly === true && mob.burnsInSun === false, 'поведение'],
    [mob.speed === 1.6 && mob.reach === 1.7, 'скорость и дистанция по умолчанию'],
    [mob.parts.length === 6 && mob.parts[2].limb === 1, 'форма собрана, конечности машут'],
    [mob.mod === 'ruby', 'моб помечен автором'],
  ];
  for (const [cond, msg] of mobChecks) if (!cond) bad('моб: ' + msg);
  const drop = mob.drops();
  if (drop[0]?.id !== BY_KEY.get('ruby').id || drop[0]?.n !== 2) bad('дроп моба не разрешился: ' + JSON.stringify(drop));
  else ok('моб: ' + mobChecks.length + ' проверок + дроп на id мода');

  const chunks = shaderChunks();
  if (chunks.frag.length !== 1 || chunks.fragFinal.length !== 1 || chunks.post.length !== 1) bad('части шейдера не доехали');
  else if (chunks.frag[0].mod !== 'ruby' || !has(chunks.fragFinal[0].code, 'tileIndex() ==')) bad('у вставки нет автора или номер тайла не подставился');
  else ok('три вставки, у каждой — имя мода, номер тайла подставлен');
  if (!hasShaders()) bad('hasShaders() молчит при активном шейдере');
  else ok('hasShaders()/hasOre() горят');
}

// ── 2. место вставок в собранном шейдере
console.log('2. вставки в шейдер');
{
  const built = buildVoxelShaders(shaderChunks());
  const f = built.fragmentShader;
  const checks = [
    [f.indexOf('uniform float uAmount;') > 0 && f.indexOf('uniform float uAmount;') < f.indexOf('void main()'), 'объявления униформ — вне main(), как требует GLSL'],
    [/uniform vec3 uTint;/.test(f), 'тип из значения: массив → vec3'],
    [f.indexOf('uDusk * uAmount') > 0 && f.indexOf('uDusk * uAmount') < f.indexOf('col = clamp('), 'frag — до тонмаппинга (иначе его съедает экспозиция)'],
    [f.indexOf('if (tileIndex() ==') > f.indexOf('uFogColor'), 'fragFinal — после дымки'],
    [/\/\/ ——— шейдер мода «ruby»\n\s*\{/.test(f), 'каждый мод в отдельном блоке { } — локалы модов не сталкиваются'],
    [/float tileIndex\(\)/.test(f), 'хелпер tileIndex() объявлен во фрагментном'],
    [/tileIndex\(\) == \d+\.0/.test(f), 'функция в shader.frag получила реальный номер тайла'],
    [!has(built.vertexShader, 'uAmount *'), 'в вершинный шейдер код frag не попал'],
    [!/MOD_/.test(f + built.vertexShader), 'ни одного служебного маркера в итоговом коде'],
    [!has(f, 'gl_FragColor = vec4(col, uAmount'), 'вывод не испорчен'],
  ];
  for (const [cond, msg] of checks) if (!cond) bad(msg);
  const n = (s, re) => (s.match(re) || []).length;
  if (n(f, /{/g) !== n(f, /}/g)) bad('скобки разъехались — шейдер не скомпилируется');
  else ok(`${checks.length + 1} проверок расстановки кода (включая баланс скобок)`);
  if (glslTypeOf(1) !== 'float' || glslTypeOf([1, 2]) !== 'vec2' || glslTypeOf([1, 2, 3]) !== 'vec3' || glslTypeOf('x') !== '') {
    bad('вывод типа униформы неверный: ' + [glslTypeOf(1), glslTypeOf([1, 2]), glslTypeOf([1, 2, 3]), glslTypeOf('x')].join('/'));
  } else ok('glslTypeOf: float/vec2/vec3, мусор → пустая строка (объявление не пишется)');

  resetMods();
  const off = buildVoxelShaders(shaderChunks());
  if (has(off.fragmentShader, 'tileIndex() == 8')) bad('после resetMods код мода остался в материале');
  else ok('resetMods чистит шейдер — перезагрузка без мода возвращает прежний вид');
  const t = buildTiles();
  if (t.tiles.length !== 88) bad(`тайлов после отката ${t.tiles.length}, ждём 88`);
  else ok('атлас откатывается к 88 тайлам (красивый reset без утечки имён)');
}

// ── 3. валидатор GLSL
console.log('3. валидатор шейдерного кода');
{
  const good = ['col *= 1.1;', 'col += vec3(0.01) * sin(uTime);', 'if (vWorld.y < 5.0) col *= 0.9;', 'float a = smoothstep(0.0, 1.0, uDay); col *= a;'];
  for (const code of good) if (checkGlsl(code, 'frag')) bad(`законный код отвергнут: ${checkGlsl(code, 'frag')}`);
  const wrong = [
    ['void main() { gl_FragColor = vec4(1.0); }', 'свой main'],
    ['#include <common>\ncol *= 1.1;', 'препроцессор'],
    ['#define A 1.0\ncol *= A;', '#define'],
    ['#ifdef X\ncol *= 1.0;\n#endif', '#ifdef'],
    ['if (uTime > 0.0) { col *= 1.1;', 'несбалансированные скобки'],
    ['col *= uMoon;', 'несуществующая униформа'],
    ['gl_FragColor = vec4(col, 1.0);', 'запись в gl_FragColor'],
    ['float col = 1.0;', 'переобъявление col'],
    ['wat(uTime);', 'неизвестная функция'],
    ['uniform float uX = 1.0;', 'своё объявление uniform'],
    ['varying vec2 vX;', 'свой varying'],
    ['discard;', 'discard'],
    ['col *= 1.0;'.repeat(2000), 'длина за лимитом'],
  ];
  for (const [code, what] of wrong) if (!checkGlsl(code, 'frag')) bad(`пропущен битый код: ${what}`);
  ok(`${good.length} законных и ${wrong.length} битых вставок отработаны`);
  if (!checkGlsl('col *= 1.1;', 'vert')) bad('вершинная вставка с col не отклонена');
  else if (!checkGlsl('world.y += 0.1;', 'frag')) bad('запись в world во фрагментном не отклонена');
  else ok('стадии различаются: col — только во frag, world — только в vert');

  resetMods();
  const clash = register('clash', { id: 'clash', shader: { frag: 'col *= uTime;', uniforms: { uTime: 1 } } }, 'тест');
  if (clash.ok) bad('мод переписал нашу униформу uTime и прошёл');
  else if (!has(clash.error, 'уже униформа игры') && !has(clash.error, 'униформа')) bad('нет внятной причины про униформу: ' + clash.error);
  else ok('имена униформ нашего шейдера заняты: uTime не перехватить');
  const unused = register('unused', { id: 'unused', shader: { frag: 'col *= 1.1;', uniforms: { uNope: 1 } } }, 'тест');
  if (unused.ok) bad('неиспользованная униформа прошла');
  else ok('объявил uNope, не использовал → отказ (иначе непонятно, зачем она)');
  const own = register('own', { id: 'own', shader: { name: 'own', frag: 'col *= uFoo;', uniforms: { uFoo: 0.5 } } }, 'тест');
  if (!own.ok) bad('своя униформа не работает: ' + own.error);
  else ok('своя униформа из shader.uniforms доступна коду');
  const big = register('big', { id: 'big', blocks: Array.from({ length: 200 }, (_, i) => ({ key: 'b' + i, tile: 'dirt' })) }, 'тест');
  if (big.ok) bad('мод на 200 блоков прошёл, хотя id — байт');
  else if (!has(big.error, 'байт')) bad('нет сообщения про лимит id: ' + big.error);
  else ok('лимит 256 id блока работает, с сообщением');
  resetMods();
}

// ── 4. битый мод
console.log('4. битый мод: причина, а не падение');
{
  resetMods();
  const wrong = [
    [{ key: 'x' }, 'нет id'],
    [{ id: 'ok', unknownSection: 1 }, 'неизвестная секция'],
    [{ id: 'ok', blocks: 'много' }, 'blocks не массив'],
    [{ id: 'ok', blocks: [{ name: 'без ключа' }] }, 'блок без key'],
    [{ id: 'ok', blocks: [{ key: 'Кирпич' }] }, 'ключ не-ascii'],
    [{ id: 'ok', blocks: [{ key: 'stone' }] }, 'тень ванильного ключа без patch'],
    [{ id: 'ok', blocks: [{ key: 'a_b' }] }, 'ни тайла, ни патча'],
    [{ id: 'ok', blocks: [{ key: 'a_b', tile: 'net_takogo' }] }, 'тайла нет в атласе'],
    [{ id: 'ok', blocks: [{ key: 'a_b', tile: 'dirt', tool: { kind: 'wand' } }] }, 'неизвестный kind инструмента'],
    [{ id: 'ok', blocks: [{ key: 'a_b', tile: 'dirt', drops: 'net_predmeta' }] }, 'дропа нет'],
    [{ id: 'ok', blocks: [{ key: 'a_b', tile: 'dirt', light: 4 }] }, 'light вне 0..1'],
    [{ id: 'ok', blocks: [{ key: 'a_b', tile: 'dirt', food: 90 }] }, 'food слишком большой'],
    [{ id: 'ok', ore: { block: 'a_b', min: 10, max: 4 } }, 'низ жилы выше верха'],
    [{ id: 'ok', ore: { block: 'net_bloka' } }, 'руда ссылается на неизвестный блок'],
    [{ id: 'ok', recipes: [{ need: [['dirt', 1]] }] }, 'рецепт без out'],
    [{ id: 'ok', recipes: [{ out: 'a_b', need: [['net_takogo', 1]] }] }, 'рецепт на неизвестный ингредиент'],
    [{ id: 'ok', mobs: { thing: {} } }, 'моб без поля'],
    [{ id: 'ok', mobs: { thing: { name: 'x', hp: 1, parts: [{ p: [0, 0, 0] }] } } }, 'у части нет размера'],
    [{ id: 'ok', shader: { name: 'пусто' } }, 'шейдер без кода'],
    [{ id: 'ok', tiles: { dirt: { base: '#f00' } } }, 'тайл с ванильным именем'],
    [{ id: 'ok', tiles: { my_tile: { krasota: 1 } } }, 'неизвестное поле тайла'],
    [{ id: 'ok', blocks: [{ key: 'a_b', tile: 'dirt' }, { key: 'a_b', tile: 'dirt' }] }, 'два блока с одним ключом'],
    [{ id: 'ok', tiles: { t2: { base: 'нет' } } }, 'не цвет'],
    [{ id: 'ok', blocks: [{ key: 'a_b', tile: 'dirt', tool: { kind: 'pickaxe', speed: 99 } }] }, 'speed за разумным'],
  ];
  const b0 = BLOCKS.length, t0 = TILE_NAMES.length;
  for (const [def, what] of wrong) {
    const rec = register(normId(def.id || 'x'), def, 'тест');
    if (rec.ok) bad(`${what}: мод прошёл`);
    else if (!rec.error || rec.error.length < 12) bad(`${what}: причина не по-человечески короткая — ${rec.error}`);
    else if (!/[а-яa-z]/.test(rec.error)) bad(`${what}: причина без текста: ${rec.error}`);
    if (BLOCKS.length !== b0 || TILE_NAMES.length !== t0) bad(`${what}: отклонённый мод дотронулся до игры (блоков ${BLOCKS.length}, тайлов ${TILE_NAMES.length})`);
  }
  ok(`${wrong.length} битых описаний отклонены с причиной, ни одно не дотронулось до BLOCKS/атласа`);
  if (BLOCKS.length !== 72 || buildTiles().tiles.length !== 88) bad('после 22 отказов что-то осталось в игре');
  else ok('whole-mod отказ: ни блоков, ни тайлов от битых модов');
  const empty = register('empty', { id: 'empty', name: 'ничего' }, 'тест');
  if (empty.ok) bad('мод без единой секции принялся');
  else if (!has(empty.error, 'не делает ничего')) bad('нет подсказки про пустой мод: ' + empty.error);
  else ok('пустой мод → подсказка «не делает ничего»');

  resetMods();
  const broken = register('broken', { id: 'broken', blocks: [{ key: 'x' }], tiles: { t: {} } }, 'тест');
  const good = register('ruby', GOOD, 'mods/ruby.js');
  if (broken.ok || !good.ok) bad('изоляция сломана: broken=' + broken.ok + ', ruby=' + good.ok);
  else ok('сосед битого мода применился — ошибка одного не останавливает остальные');
  const snap = snapshot();
  if (snap.mods.length !== 2 || snap.mods[0].error === '' || snap.mods[1].error !== '') bad('в снапшоте не видно, кто именно упал');
  else ok('в снапшоте у каждого — свой статус и причина');
  if (snap.mods[0].applied !== null) bad('у битого мода заполнен applied');
  else ok('у битого мода applied: null — панель не покажет полуприменённое');
  resetMods();
}

// ── 5. textarea
console.log('5. свой мод из текстового поля');
{
  const j = JSON.stringify(GOOD);
  for (const [name, code] of [
    ['export default', `export default ${j};`],
    ['module.exports', `module.exports = ${j};`],
    ['голый объект', `{ ${j.slice(1, -1)} }`],
    ['с комментарием', `// мой\nexport default ${j};`],
  ]) {
    const p = parseSource(code);
    if (p.error || p.def?.id !== 'ruby') bad(`${name}: ${p.error || 'разобрал не то'}`);
  }
  ok('четыре формата текста разбираются (функции тоже допустимы: храним текст, не JSON)');
  const fn = parseSource('export default { id: "txt", name: "x", tiles: { moy: { paint: (tl) => { tl.fill("#123"); return tl; } } } }');
  if (fn.error) bad('код с функцией не собрался: ' + fn.error);
  else {
    const rec = register('txt', fn.def, 'textarea');
    if (!rec.ok) bad('мод с paint-функцией из textarea отвергнут: ' + rec.error);
    else ok('своя paint-функция из текстового поля применяется');
    resetMods();
  }
  if (!parseSource('export default { this.x }').error) bad('this утекает в evaluation');
  else ok('this/globalThis недоступны — код не дотянется до окружения страницы');
  const brokenParse = parseSource('export default { id: ');
  if (!brokenParse.error || !has(brokenParse.error, 'не разобрал')) bad('синтаксическая ошибка не сообщена: ' + brokenParse.error);
  else ok('битый синтаксис → «' + brokenParse.error.slice(0, 40) + '…»');
  const arr = parseSource('export default [1,2]');
  if (!arr.error) bad('массив приняло за описание');
  else ok('не-объект → подсказка про формат');
}

// ── 6. хранилище
console.log('6. сохранение, включение, перезапуск');
{
  resetMods();
  const store = new MemStore();
  saveUserSource(`export default ${JSON.stringify(GOOD)};`, store);
  const r = loadMods({ storage: store, skipFiles: true, force: true });
  if (r.mods.length !== 1 || !r.mods[0].ok) bad('свой мод из хранилища не применился: ' + JSON.stringify(r.mods.map((m) => m.error)));
  else ok('свой мод прочитан из хранилища и применён');
  if (BLOCKS.length !== 80) bad(`блоков ${BLOCKS.length}, ждём 80 (72 + 8)`);
  else ok('блоки мода встали после ванильных');
  loadMods({ storage: store, skipFiles: true, force: true });
  if (BLOCKS.length !== 80) bad(`повторная загрузка удваивает блоки: ${BLOCKS.length}`);
  else ok('loadMods({force}) не наращивает реестр повторно');
  setModEnabled('ruby', false, store);
  const r3 = loadMods({ storage: store, skipFiles: true, force: true });
  if (r3.mods.some((m) => m.ok)) bad('выключенный мод применился');
  else if (!has(r3.mods[0].error, 'выключен')) bad('у выключенного мода нет статуса: ' + r3.mods[0].error);
  else ok('выключенный мод помечен «выключен», а не ошибкой');
  const src = readUserSource(store);
  if (!has(src, '"id":"ruby"')) bad('текст мода потерялся при выключении');
  else ok('текст мода на месте — галка ничего не стирает');
  setModEnabled('ruby', true, store);
  const r4 = loadMods({ storage: store, skipFiles: true, force: true });
  if (!r4.mods.some((m) => m.ok)) bad('мод не вернулся после включения');
  else ok('галка обратно — мод снова применён');

  const store2 = new MemStore();
  saveUserSource('this is not js at all', store2);
  const r5 = loadMods({ storage: store2, skipFiles: true, force: true });
  if (r5.mods.some((m) => m.ok) || !r5.mods[0]?.error) bad('битый сохранённый мод прошёл');
  else ok('битый сохранённый мод не ломает запуск: «' + r5.mods[0].error.slice(0, 30) + '…»');

  const store3 = new MemStore();
  saveUserSource('export default ' + JSON.stringify({ id: 'quiet', name: 'Тихий', enabledByDefault: false, shader: { frag: 'col *= 1.01;' } }) + ';', store3);
  resetMods();
  const r6 = loadMods({ storage: store3, skipFiles: true, force: true });
  if (r6.mods.some((m) => m.ok)) bad('мод с enabledByDefault:false включился сам');
  else ok('примеры по умолчанию выключены: сама папка mods/ не меняет картинку');
  const quiet = { id: 'quiet', name: 'Тихий', enabledByDefault: false, shader: { frag: 'col *= 1.01;' } };
  const store4 = new MemStore({ 'litecraft:mods': JSON.stringify({ disabled: [], enabled: ['quiet'], user: [{ id: 'user', src: 'export default ' + JSON.stringify(quiet) + ';' }] }) });
  const r7 = loadMods({ storage: store4, skipFiles: true, force: true });
  if (!r7.mods.some((m) => m.ok)) bad('галка «включить» не сработала: ' + JSON.stringify(r7.mods.map((m) => m.error)));
  else ok('список enabled включает молча выключенный пример');

  const dup = new MemStore({ 'litecraft:mods': JSON.stringify({ disabled: [], enabled: [], user: [{ id: 'user', src: 'export default ' + JSON.stringify({ id: 'dup', name: 'дубль', blocks: [{ key: 'dup_block', tile: 'dirt' }] }) + ';' }] }) });
  loadMods({ storage: dup, skipFiles: true, force: true });
  const dupN = snapshot().mods.filter((m) => m.name === 'дубль' && m.ok).length;
  if (dupN !== 1) bad(`дубль применился ${dupN} раз`);
  else ok('мод из хранилища применяется ровно один раз за загрузку');
  resetMods();
}

// ── 7. руда
console.log('7. своя руда в рельефе');
{
  resetMods();
  register('ruby', GOOD, 'mods/ruby.js');
  const oreId = BY_KEY.get('ruby_ore').id;
  const dump = (world) => {
    let h = 2166136261 >>> 0, count = 0;
    for (let cx = -1; cx <= 1; cx++) for (let cz = -1; cz <= 1; cz++) {
      const b = world.ensureChunk(cx, cz).blocks;
      for (let i = 0; i < b.length; i++) {
        h = (h ^ b[i]) * 16777619 >>> 0;
        if (b[i] === oreId) count++;
      }
    }
    return { h, count };
  };
  const a = new World(4242), b = new World(4242), c = new World(4343);
  for (const w of [a, b, c]) w.modPass = orePass;
  const da = dump(a), db = dump(b), dc = dump(c);
  if (da.count < 30) bad(`рубы почти нет: ${da.count} блоков на 9 чанках`);
  else ok(`жилы есть: ${da.count} блоков руды на 9 чанках`);
  if (da.h !== db.h) bad('два мира с одним сидом разошлись — сеть рассинхронизировалась бы');
  else ok('детерминизм: один сид → побайтово один результат');
  if (da.h === dc.h) bad('разные сиды дали одинаковый мир');
  else ok('разные сиды → разные жилы');
  if (hasOre() !== true) bad('hasOre() потерял моду');

  // правки игрока накладываются ПОСЛЕ прохода мода
  const ch = a.ensureChunk(0, 0);
  let spot = -1;
  for (let i = 0; i < ch.blocks.length; i++) if (ch.blocks[i] === oreId) { spot = i; break; }
  if (spot < 0) bad('в чанке 0,0 не нашлось руды для проверки правок');
  else {
    const y = (spot / 256) | 0, z = ((spot / 16) | 0) % 16, x = spot % 16;
    a.setBlock(x, y, z, AIR);
    a.chunks.delete(a.key(0, 0));
    const again = a.ensureChunk(0, 0);
    if (again.blocks[spot] !== AIR) bad('правка игрока затёрта рудой мода — копать свой мод было бы нельзя');
    else ok('выкопанная мода-руда остаётся выкопанной (edits после modPass)');
  }
  // без мода — прохода нет вовсе
  resetMods();
  const clean = new World(4242);
  if (clean.modPass) bad('без модов у мира появился modPass');
  else ok('без модов world.modPass не выставлен: генерация идёт прежней дорогой');
  // главный инвариант: мод с рудой меняет РОВНО те клетки, куда положил свою руду,
  // и ничего больше. Тогда test:world и старые сохранения остаются при своём мнении.
  const withMod = new World(5150);
  register('ruby', GOOD, 'mods/ruby.js');
  withMod.modPass = orePass;
  const without = new World(5150);
  const stoneId = BY_KEY.get('stone').id;
  let diff = 0, explained = 0;
  for (let cx = -2; cx <= 2; cx++) for (let cz = -2; cz <= 2; cz++) {
    const A = withMod.ensureChunk(cx, cz).blocks, B = without.ensureChunk(cx, cz).blocks;
    for (let i = 0; i < A.length; i++) {
      if (A[i] === B[i]) continue;
      diff++;
      if (A[i] === oreId && (B[i] === stoneId || B[i] === AIR)) explained++;
    }
  }
  if (!diff) bad('мод с рудой не изменил мир вообще');
  else if (diff !== explained) bad(`мод тронул ${diff - explained} клеток сверх руды — проход залез не туда`);
  else ok(`${diff} клеток отличается, и все они — руда вместо камня (25 чанков)`);
  resetMods();
  const bare = new World(5150);
  let same = true;
  for (let cx = -1; cx <= 1 && same; cx++) for (let cz = -1; cz <= 1 && same; cz++) {
    const A = without.ensureChunk(cx, cz).blocks, B = bare.ensureChunk(cx, cz).blocks;
    for (let i = 0; i < A.length; i++) if (A[i] !== B[i]) { same = false; break; }
  }
  if (!same) bad('мир без мода перестал совпадать с самим собой — генерация поехала');
  else ok('генерация без модов не поехала (побайтово тот же мир)');

  // выключенный мод: сохранение с его id не должно ронять чанки
  register('ruby', GOOD, 'mods/ruby.js');
  const w1 = new World(9090);
  w1.modPass = orePass;               // как это делает boot(): мод с рудой включает проход
  const oreCell = w1.ensureChunk(0, 0);
  let oreHere = -1;
  for (let i = 0; i < oreCell.blocks.length; i++) if (oreCell.blocks[i] === oreId) { oreHere = i; break; }
  if (oreHere < 0) bad('в чанке 0,0 нет руды — нечем проверить осиротевшее сохранение');
  w1.setBlock(oreHere % 16, (oreHere / 256) | 0, ((oreHere / 16) | 0) % 16, AIR);
  w1.setBlock(oreHere % 16 + 1, (oreHere / 256) | 0, ((oreHere / 16) | 0) % 16, oreId);
  const edits = [];
  for (const [k, v] of w1.edits) edits.push(k + ':' + v);
  resetMods();                       // мод выключили, сохранения остались
  const w2 = new World(9090);
  w2.loadEdits(edits.concat(['5,5,5:250', '6,6,6:-3', '7,7,7:abc']));
  let ghost = 0;
  for (let cx = -1; cx <= 1; cx++) for (let cz = -1; cz <= 1; cz++) {
    const c = w2.ensureChunk(cx, cz);
    for (let i = 0; i < c.blocks.length; i++) if (c.blocks[i] >= BLOCKS.length) ghost++;
  }
  if (ghost) bad(`в чанк попали ${ghost} клеток с id вне BLOCKS — mesher бы упал`);
  else ok('правки выключенного мода не доезжают до чанка — он остаётся видимым');
  // mesher читает BLOCKS[id] для каждой клетки: достаточно, чтобы ни одна клетка
  // не вышла за BLOCKS.length — чанк останется видимым (см. fix 04db220 про
  // «невидимые чанки»: та же классика, только причина в осиротевшем id).
  const kept = w2.editedCount;
  if (kept < 1 || kept > edits.length) bad(`фильтр loadEdits съел законные правки: осталось ${kept} из ${edits.length}`);
  else ok('осиротевшие и мусорные id отброшены (3 штуки), законные правки целы');
  let lit = 0;
  for (let cx = -1; cx <= 1; cx++) for (let cz = -1; cz <= 1; cz++) {
    const c = w2.ensureChunk(cx, cz);
    for (let i = 0; i < c.blocks.length; i++) if (c.blocks[i]) lit++;
  }
  if (!lit) bad('мир после отключённого мода оказался пустым');
  else ok(`чанки с осиротевшим сохранением наполнены блоками (${lit}) — mesher их не боится`);
}

// ── 8. униформы на лету
console.log('8. живые униформы');
{
  resetMods();
  register('ruby', GOOD, 'mods/ruby.js');
  const fake = { uniforms: { uAmount: { value: 0 } } };
  if (setUniform('uAmount', 0.77, fake) !== true) bad('setUniform не применился');
  else if (fake.uniforms.uAmount.value !== 0.77) bad('значение не дошло до материала');
  else if (modUniforms().uAmount !== 0.77) bad('реестр не запомнил значение (после перезагрузки слетит)');
  else ok('слайдер в панели доходит и до материала, и до хранилища значений');
  if (setUniform('col', 1, fake) !== false) bad('чужое имя пролезло в униформы');
  else if (setUniform('uNope', 1, fake) !== false) bad('несуществующая униформа «применилась»');
  else ok('нельзя ни переопределить наш uniform, ни выдумать свой на ходу');
  if (setUniform('uAmount', 0.4, null) !== true) bad('setUniform без материалов должен молча обновить реестр');
  else ok('материалов нет — значение просто ждёт своей сборки');
  resetMods();
}

// ── 9. примеры из mods/
console.log('9. примеры мода');
{
  resetMods();
  for (const f of ['example-ruby.js', 'example-warmdusk.js', 'example-crt.js']) {
    const mod = (await import('../mods/' + f)).default;
    if (mod.enabledByDefault !== false) bad(`${f}: пример включён по умолчанию — он не должен менять игру сам`);
    const rec = register(mod.id, mod, 'mods/' + f);
    if (!rec.ok) bad(`${f}: ${rec.error}`);
    else ok(`${f} — принят (блоков ${rec.applied.blocks.length}, шейдер ${rec.applied.shader || 'нет'})`);
  }
  const built = buildVoxelShaders(shaderChunks());
  if (/MOD_/.test(built.fragmentShader)) bad('из примеров в шейдер просочился маркер');
  else ok('шейдер с тремя примерами собирается чисто');
  resetMods();
}

// ── 10. API для консоли и HUD
console.log('10. снапшот для панели');
{
  resetMods();
  register('ruby', GOOD, 'mods/ruby.js');
  register('broken', { id: 'broken', blocks: [{ key: '!' }] }, 'mods/broken.js');
  const snap = snapshot();
  const fields = ['mods', 'blockIds', 'tiles', 'uniforms', 'oreCount', 'shaderNames'];
  for (const f of fields) if (!(f in snap)) bad('в снапшоте нет поля ' + f);
  if (snap.oreCount !== 1 || snap.shaderNames.join() !== 'Тёплый закат') bad('счётчики снапшота врут');
  if (!has(snap.mods[1].error, 'key')) bad('для битого мода причина нечитаема: ' + snap.mods[1].error);
  if (uniformIsFinite()) ok('NaN в униформе не проходит'); else bad('NaN в vec-униформе доходит до шейдера — мир исчезнет');
  const json = JSON.parse(JSON.stringify(snap));
  if (!json || typeof json !== 'object') bad('снапшот не сериализуется — HUD бы упал');
  else ok('снапшот сериализуется (его показывает панель и game.mods из консоли)');
  resetMods();
  if (snapshot().mods.length) bad('snapshot после reset не пуст');
  else ok('после reset панель покажет «модов нет»');
}

// ─── 11. Коллизия имён: наш main() и вставка мода живут в одном scope
// Именно так v0.4.1 и потеряла мир: в общем фрагментном шейдере появился локал
// alpha, пользовательский мод объявил свой — GLSL «redefinition of 'alpha'»,
// программа не собрана, меши чанков не нарисованы НИ ОДНИМ пикселем. Тест
// сверяет список резерва с реальным текстом шейдера, чтобы такое ловить до сборки.
{
  console.log('\n11. Имена: локалы нашего main() зарезервированы');
  const built = buildVoxelShaders({});
  const fragLocals = mainLocals(built.fragmentShader);
  const vertLocals = mainLocals(built.vertexShader);
  const unreserved = [...fragLocals, ...vertLocals].filter((n) => !GLSL_RESERVED.has(n));
  if (unreserved.length) bad(`локалы вне резерва (мод с таким именем не скомпилируется): ${unreserved.join(', ')}`);
  else ok(`все ${new Set([...fragLocals, ...vertLocals]).size} локалов main() зарезервированы`);
  for (const n of globalNames(VOXEL_FRAG)) {
    if (!GLSL_RESERVED.has(n)) bad(`глобальное имя «${n}» не в резерве`);
  }
  ok('глобальные функции и varying тоже в резерве');

  // Исторический случай: мод, который объявляет alpha, обязан проходить и собираться.
  const alphaMod = { id: 'alphatest', name: 'Alpha', shader: { frag: 'float alpha = 0.5; col += alpha * 0.0;' } };
  const rec = register('alphatest', alphaMod, 'тест');
  if (!rec.ok) bad(`мод со своим alpha отвергнут зря: ${rec.error}`);
  else ok('своё «float alpha» в моде — законно, шейдер прежний не мешает');
  const withAlpha = buildVoxelShaders(shaderChunks());
  const decls = (withAlpha.fragmentShader.match(/^\s*(?:const\s+)?float\s+alpha\b/gm) || []).length;
  if (decls !== 1) bad(`в собранном фраге имя alpha объявлено ${decls} раз(а), должно 1 — иначе «redefinition»`);
  else ok('в собранном шейдере alpha объявлена ровно один раз');
  try { parseGlsl(withAlpha.fragmentShader, 'frag'); ok('шейдер с таким модом читается GLSL-парсером'); }
  catch (e) { bad('GLSL-парсер отверг шейдер с модом: ' + e.message.split('\n')[0]); }
  resetMods();

  const rej = [
    ['float lcAlpha = 1.0;', 'frag', 'lcAlpha'],
    ['vec4 tex = vec4(1.0);', 'frag', 'tex'],
    ['float shade;', 'frag', 'shade'],               // без инициализатора — тоже коллизия
    ['vec3 one, col;', 'frag', 'col'],               // список через запятую
    ['float worldPosition = 1.0;', 'vert', 'worldPosition'],
    ['vec4 o; float vWorld = 1.0;', 'frag', 'vWorld'],
    ['vec4 t = texture(uMap, vUv);', 'frag', 'texture('],
    ['gl_FragDepth = 0.4;', 'frag', 'gl_FragDepth'],
    ['precision mediump float;', 'decl', 'precision'],
  ];
  for (const [code, stage, why] of rej) {
    const e = checkGlsl(code, stage);
    if (!e) bad(`пропустили вставку «${why}» (${stage}) — она не скомпилируется`);
  }
  ok(`${rej.length} опасных вставок отсеяны`);
  for (const [code, stage] of [['float alpha = 0.5;', 'frag'], ['float d = length(mv.xyz);', 'vert'], ['vec3 p = vWorld;', 'frag'], ['float t = uTime;', 'frag'], ['vec2 g = vec2(1.0, 2.0);', 'decl'], ['vec4 o = vec4(col, 1.0);', 'fragFinal']]) {
    const e = checkGlsl(code, stage);
    if (e) bad(`законную вставку «${code}» (${stage}) отвергнут: ${e}`);
  }
  ok('безобидные имена (alpha, d, p, t, g) больше не режутся — коллизий с нами нет');
  // Свои функции во вставке запрещены документированно (mods/README.md): рекурсии
  // в ES 1.0 нет, а зависший драйвер починкой не лечится.
  if (!checkGlsl('float f(float a) { return a; }', 'decl')) bad('определять функцию внутри вставки надо отклонять');
  else ok('своя функция во вставке отклонена — как и обещано в mods/README.md');
  // Страховка игры: собрался ли шейдер мода — решает watchdog в main.js, а не удаляй
  if (!/watchVoxelProgram|revertModShaders/.test(mainSrc)) bad('в main.js нет watchdog-а «мир пропал» — одна опечатка в моде снова гасит мир');
  else ok('в игре есть откат на базовый материал при несобранной программе');
}

console.log(fails ? `\n✘ провалов: ${fails}` : '\nмоды в порядке');
process.exit(fails ? 1 : 0);
