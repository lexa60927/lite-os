/**
 * Мод-система LiteCraft: свои блоки, предметы, рецепты, мобы, руды и шейдеры.
 *
 * Мод — это объект-описание. Два способа его добавить:
 *   1. файл в каталоге `mods/` — сборка подхватывает его сама (import.meta.glob);
 *   2. текст в Настройки → «Моды» — работает и на собранной версии с GitHub Pages,
 *      где никакого сборщика нет. Оба способа используют один и тот же формат.
 *
 * Порядок применения жёсткий, потому что у движка инициализация «один раз»:
 *   1. тайлы — атлас строится по TILE_NAMES и больше не пересобирается;
 *   2. блоки — BLOCKS индексируется id (байт в чанке), поэтому новые только в конец;
 *   3. рецепты — им нужны уже существующие ключи;
 *   4. мобы, руды, шейдерные вставки и униформы.
 *
 * Гарантии (без них моды были бы кнопкой «сломать игру»):
 *   - ошибка одного мода не мешает остальным и не останавливает запуск: причина
 *     видна в панели «Моды»;
 *   - мод валидируется целиком и применяется атомарно: «тайл есть, блока нет» —
 *     худший из возможных полутонов;
 *   - лимиты проверяются ДО записи: id блока = байт (0..255), атлас = 16×16 тайлов;
 *   - GLSL проходит проверку до вставки в материал: битый шейдер — это чёрный экран,
 *     а не сообщение в консоли, и ловить его глазами поздно.
 */
import { BLOCKS, BY_KEY, AIR } from '../engine/blocks.js';
import { TILE_NAMES, registerTilePainter } from '../engine/tiles.js';
import { RECIPES, RECIPES_CLEAN, addRecipes } from './craft.js';   // RECIPES нужен только для отката
import { MOB_TYPES, addMobTypes } from './mobs.js';

export const MOD_KEY = 'litecraft:mods';
export const LIMITS = { ids: 256, tiles: 256, shader: 6000, mods: 64 };

const reg = {
  loaded: false,
  list: [],            // [{ id, name, source, ok, off, error, applied }]
  tiles: [],           // имена тайлов, добавленные модами (для отката)
  blockIds: [],        // id, выданные модам
  modOfKey: new Map(), // key → id мода (подсказка в HUD «чей блок»)
  recipes: [],         // [{ src, clean }]
  mobs: [],            // ключи MOB_TYPES, добавленные модами
  ore: [],             // [{ block, into, y0, y1, chance, veins, size, salt }]
  uniforms: {},        // имя → { value } — уедет в материал чанков
  shader: { vert: [], frag: [], fragFinal: [], post: [], names: [] },
};

const ID_RE = /^[a-z][a-z0-9_-]{1,23}$/;

// ─────────────────────────────────────────────── загрузка описаний

/**
 * Модули из `mods/`. Вызов обязан быть буквальным `import.meta.glob(...)`: Vite
 * подменяет его на серию `import()` на этапе сборки и через переменную его не видит
 * (тогда каталог молча не подхватывается — ровно так и было до этой правки).
 * В Node (тесты) поля `glob` у import.meta нет вовсе — отсюда try/catch.
 */
function fileMods() {
  const out = {};
  let files;
  try {
    files = import.meta.glob('../../mods/*.js', { eager: true });
  } catch { return {}; }        // каталога нет (npm-пакет без исходников) — не беда
  for (const [path, mod] of Object.entries(files || {})) {
    const name = String(path).split('/').pop().replace(/\.js$/, '');
    const def = mod && (mod.default ?? mod);
    if (def && typeof def === 'object' && !Array.isArray(def)) out[name] = { def, file: name };
  }
  return out;
}

function readStore(storage) {
  try {
    const data = JSON.parse((storage?.getItem?.(MOD_KEY)) || 'null');
    if (!data || typeof data !== 'object') return { disabled: [], enabled: [], user: [] };
    const strs = (x) => (Array.isArray(x) ? x : []).filter((v) => typeof v === 'string');
    return {
      disabled: strs(data.disabled),
      // Примеры в mods/ выключены по умолчанию, чтобы «поставил игру — картинка та же»;
      // включённый список — это то, что пользователь сам щёлкнул галкой.
      enabled: strs(data.enabled),
      user: (Array.isArray(data.user) ? data.user : []).filter((u) => u && typeof u.src === 'string'),
    };
  } catch { return { disabled: [], enabled: [], user: [] }; }
}

function isOff(id, def, store) {
  const on = new Set(store.enabled), off = new Set(store.disabled);
  if (def?.enabledByDefault === false) return !on.has(id);   // молча выключен, пока не включат
  return off.has(id);
}

function writeStore(storage, data) {
  try { storage?.setItem?.(MOD_KEY, JSON.stringify(data)); return true; } catch { return false; }  // приватный режим
}

/**
 * Загрузить и применить всё. Идемпотентно: второй вызов — no-op, пока не позван
 * resetMods() (нужно тестам и кнопке «Применить» в панели).
 */
export function loadMods({ storage = globalThis.localStorage, force = false, skipFiles = false } = {}) {
  if (reg.loaded && !force) return snapshot();
  if (force) resetMods();
  reg.loaded = true;
  const store = readStore(storage);
  const seen = new Set();

  if (!skipFiles) {
    for (const { def, file } of Object.values(fileMods())) {
      const id = normId(def.id || file);
      if (seen.has(id)) continue;
      seen.add(id);
      register(id, def, `mods/${file}.js`, isOff(id, def, store));
    }
  }
  for (const u of store.user) {
    const parsed = parseSource(u.src);
    const id = normId(parsed.def?.id || u.id || 'user');
    if (parsed.error) {
      reg.list.push({ id, name: id, source: 'настроен вручную', ok: false, off: false, error: parsed.error, applied: null });
      continue;
    }
    if (seen.has(id)) {
      reg.list.push({ id, name: id, source: 'настроен вручную', ok: false, off: false, error: `id «${id}» уже занят другим модом`, applied: null });
      continue;
    }
    seen.add(id);
    register(id, parsed.def, 'настроен вручную', isOff(id, parsed.def, store));
  }
  return snapshot();
}

export const normId = (s) => String(s || 'user').toLowerCase().replace(/[^a-z0-9_-]/g, '').slice(0, 24) || 'user';

/** Текст из textarea = JS-выражение, возвращающее объект описания. */
export function parseSource(src) {
  let text = String(src || '').trim();
  if (!text) return { error: 'пусто' };
  // Терпим к любому из трёх способов отдать объект — export default, module.exports
  // или голый литерал; точка с запятой в конце и комментарии сверху тоже норма.
  text = text.replace(/^(?:\s*\/\/[^\n]*\n|\s)+/, '')
    .replace(/^export\s+default\s+/, '')
    .replace(/^module\.exports\s*=\s*/, '')
    .replace(/;+\s*$/, '')
    .trim();
  const code = text;
  try {
    // new Function, а не eval: внутрь не видны переменные окружения. Свои моды
    // пользователь пишет себе же в своём браузере — чужой текст сюда не попадает.
    const def = new Function(`"use strict"; return (${code});`)();
    if (!def || typeof def !== 'object' || Array.isArray(def)) return { error: 'нужен объект-описание: { id, name, blocks: […] }' };
    return { def };
  } catch (e) {
    return { error: `не разобрал код — ${e.message}` };
  }
}

/** Один мод: проверка → применение → запись в список. Ошибка не выпадает наружу. */
export function register(id, def, source = 'код', disabled = false) {
  const rec = { id: normId(id), name: String(def?.name || id), source, ok: false, off: !!disabled, error: '', applied: null };
  if (disabled) {
    rec.error = 'выключен';
    reg.list.push(rec);
    return rec;
  }
  try {
    if (reg.list.filter((m) => m.ok).length >= LIMITS.mods) throw new Error(`слишком много модов (максимум ${LIMITS.mods})`);
    const problems = validate(rec.id, def);
    if (problems.length) throw new Error(problems.join('; '));
    rec.applied = apply(rec.id, def);
    rec.ok = true;
  } catch (e) {
    rec.error = String(e?.message || e);
  }
  reg.list.push(rec);
  return rec;
}

// ─────────────────────────────────────────────── проверка описания

function validate(id, def) {
  const bad = [];
  if (!def || typeof def !== 'object') return ['мод должен быть объектом с описаниями'];
  if (!ID_RE.test(id)) bad.push(`id «${id}»: 2…24 символа, строчные латинские, цифры, _ или -`);

  if (!(def.tiles || def.blocks || def.recipes || def.ore || def.mobs || def.shader)) {
    bad.push('мод не делает ничего: нужна хотя бы одна секция — tiles, blocks, recipes, ore, mobs или shader');
  }
  const newTiles = def.tiles ? Object.keys(def.tiles) : [];
  for (const name of newTiles) {
    if (!ID_RE.test(name)) bad.push(`имя тайла «${name}»: только строчные латинские, цифры, _ или -`);
    if (TILE_NAMES.includes(name)) bad.push(`тайл «${name}» уже есть в атласе — придумай своё имя`);
    const spec = def.tiles[name];
    const known = ['base', 'colors', 'speck', 'blobs', 'density', 'seed', 'grid', 'border', 'icon', 'grain', 'soft', 'shade', 'light', 'dark', 'paint'];
    for (const k of Object.keys(spec || {})) {
      if (!known.includes(k)) bad.push(`тайл «${name}»: не знаю поле «${k}» (есть ${known.join(', ')})`);
    }
    // Цвет — единственное, что в тайле можно написать неправильно «красиво»: пиксели
    // молча станут чёрными, и выглядеть будет как сломанный атлас, а не как опечатка.
    const isColor = (v) => typeof v === 'string' && (/^#[0-9a-fA-F]{3,8}$/.test(v.trim()) || /^[a-z]+$/.test(v.trim()));
    for (const [field, val] of Object.entries(spec || {})) {
      if (!['base', 'speck', 'blobs', 'light', 'dark'].includes(field)) continue;
      if (!isColor(val)) bad.push(`тайл «${name}»: ${field} — цвет строкой «#rrggbb» или именем («red»), а не «${val}»`);
    }
    for (const [i, c] of [].concat(spec?.colors || []).entries()) {
      if (!isColor(c)) bad.push(`тайл «${name}»: colors[${i}] — не цвет («${c}»)`);
    }
  }
  if (TILE_NAMES.length + newTiles.length > LIMITS.tiles) {
    bad.push(`атлас вмещает ${LIMITS.tiles} тайлов, с этим модом будет ${TILE_NAMES.length + newTiles.length}`);
  }

  // Ключи блока должны быть известны ДО проверки drops/recipes: внутри одного
  // мода блок вполне может ронять другой блок этого же мода, объявленный ниже.
  const declared = (def.blocks || []).map((b) => String(b?.key || '')).filter((k) => ID_RE.test(k));
  const keys = new Set(declared);
  if (keys.size !== declared.length) bad.push('в блоках два блока с одним key — второй движок пропустит молча, убери дубль');
  let added = 0;
  for (const b of def.blocks || []) {
    const key = String(b?.key || '');
    if (!ID_RE.test(key)) { bad.push(`блок без корректного key: ${JSON.stringify(b?.key)}`); continue; }
    if (BY_KEY.has(key)) {
      if (!b.patch) bad.push(`блок «${key}» уже существует — меняй через patch: { key: '${key}', patch: { … } }`);
      continue;
    }
    added++;
    const tileNames = b.tile ? [b.tile] : Object.values(b.tiles || {});
    if (!tileNames.length && !b.item && !b.patch) bad.push(`у блока «${key}» нет ни tile, ни tiles`);
    for (const t of tileNames) {
      if (!TILE_NAMES.includes(t) && !newTiles.includes(t)) bad.push(`блок «${key}» ссылается на тайл «${t}», которого нет в атласе`);
    }
    for (const [field, val] of Object.entries({ drops: b.drops, bonusOf: b.bonusOf })) {
      if (val != null && !BY_KEY.has(String(val)) && !keys.has(String(val))) bad.push(`блок «${key}»: ${field} «${val}» — такого блока нет`);
    }
    if (b.tool) {
      const kinds = ['axe', 'pickaxe', 'shovel', 'sword', 'shears'];
      const k0 = String(b.tool.kind || '');
      if (!kinds.includes(k0)) bad.push(`блок «${key}»: tool.kind «${k0}» — движок умеет ${kinds.join(', ')}`);
      if (b.tool.speed != null && !(+b.tool.speed > 0 && +b.tool.speed <= 20)) bad.push(`блок «${key}»: tool.speed 0…20`);
      if (b.tool.damage != null && !(+b.tool.damage >= 0 && +b.tool.damage <= 60)) bad.push(`блок «${key}»: tool.damage 0…60`);
    }
    if (b.light != null && !(+b.light >= 0 && +b.light <= 1)) bad.push(`у блока «${key}» light должен быть 0…1`);
    if (b.glow != null && !(+b.glow >= 0 && +b.glow <= 1)) bad.push(`у блока «${key}» glow должен быть 0…1`);
    if (b.food != null && !(+b.food > 0 && +b.food <= 20)) bad.push(`у блока «${key}» food — пол-единицы сердца, 1…20`);
    if (b.tool && !/^[a-z]+$/.test(String(b.tool.kind || ''))) bad.push(`у блока «${key}» tool.kind — слово из строчных букв`);
  }
  if (BLOCKS.length + added > LIMITS.ids) {
    bad.push(`id блока — байт: сейчас ${BLOCKS.length}, с этим модом будет ${BLOCKS.length + added}, максимум ${LIMITS.ids}`);
  }

  for (const r of def.recipes || []) {
    if (!r || !r.out || !Array.isArray(r.need) || !r.need.length) {
      bad.push('рецепт = { out: key, n, need: [[key, число], …], name, table?, shape? }');
      continue;
    }
    const exists = (k) => BY_KEY.has(k) || keys.has(k);
    if (!exists(r.out)) bad.push(`рецепт «${r.name || r.out}»: результат «${r.out}» неизвестен`);
    if (!(Number(r.n ?? 1) > 0 && Number(r.n ?? 1) <= 64)) bad.push(`рецепт «${r.name || r.out}»: n должно быть 1…64`);
    for (const pair of r.need) {
      if (!Array.isArray(pair) || pair.length !== 2 || !exists(pair[0]) || !(Number(pair[1]) > 0)) {
        bad.push(`рецепт «${r.name || r.out}»: ингредиент ${JSON.stringify(pair)} — нужно [ключ существующего блока, число]`);
      }
    }
  }

  for (const o of [].concat(def.ore || [])) {
    if (!o) continue;
    if (!o.block || !(BY_KEY.has(o.block) || keys.has(o.block))) bad.push(`руда ссылается на неизвестный блок «${o?.block}»`);
    if (o.into && !(BY_KEY.has(o.into) || keys.has(o.into))) bad.push(`руда: заменять «${o.into}» — такого блока нет`);
    if ((o.min ?? 0) > (o.max ?? 255)) bad.push('руда: min больше max');
    if (o.chance != null && !(+o.chance > 0 && +o.chance <= 1)) bad.push('руда: chance — доля 0…1');
  }

  for (const [key, mo] of Object.entries(def.mobs || {})) {
    if (!ID_RE.test(key)) bad.push(`моб: ключ «${key}» не подходит под ${ID_RE}`);
    if (MOB_TYPES[key]) bad.push(`моб «${key}» уже существует`);
    if (!mo || (!mo.color && !mo.parts)) bad.push(`моб «${key}»: нужен color (тогда части соберутся сами) или parts`);
    for (const p of (mo && mo.parts) || []) {
      if (!TILE_NAMES.includes(p?.tile) && !newTiles.includes(p?.tile)) bad.push(`моб «${key}»: часть ссылается на тайл «${p?.tile}», которого нет`);
      // без s:[w,h,d] генератор меша упал бы на undefined — это ровно тот случай,
      // который надо поймать до применения, а не в кадре
      for (const [f, len] of [['p', 3], ['s', 3]]) {
        if (!Array.isArray(p?.[f]) || p[f].length !== len || p[f].some((v) => !Number.isFinite(+v))) {
          bad.push(`моб «${key}»: у части поля ${f} должны быть ${len} числа`);
        }
      }
    }
    for (const d of (mo && mo.drops) || []) {
      const k = typeof d === 'string' ? d : (d?.block || d?.item || d?.key);
      if (!k || (!BY_KEY.has(String(k)) && !keys.has(String(k)))) bad.push(`моб «${key}»: дроп «${k}» — такого блока нет`);
    }
    if (mo && mo.hp != null && !(+mo.hp > 0 && +mo.hp <= 200)) bad.push(`моб «${key}»: hp 1…200`);
  }

  if (def.shader) {
    if (!def.shader || typeof def.shader !== 'object' || Array.isArray(def.shader)) bad.push('shader должен быть объектом с vert/frag/fragFinal/post');
    const s = def.shader && typeof def.shader === 'object' ? def.shader : {};
    if (!['vert', 'frag', 'fragFinal', 'post'].some((p) => s[p] != null)) {
      bad.push('в shader нет ни одной вставки: нужна vert, frag, fragFinal или post');
    }
    // shader.frag может быть функцией (только в файле мода): ей передаётся
    // { tileIndex(key) } — номер тайла в атласе, чтобы код мог быть «мой блок,
    // мой блок» без захардкоженных цифр.
    const codeOf = (v) => (typeof v === 'function' ? String(v({ tileIndex: (key) => TILE_NAMES.indexOf(String(key)) })) : v == null ? null : String(v));
    for (const part of ['vert', 'frag', 'fragFinal', 'post']) {
      if (s[part] == null) continue;
      if (typeof s[part] !== 'function' && typeof s[part] !== 'string') { bad.push(`шейдер ${part}: строка или функция`); continue; }
      const code = codeOf(s[part]);
      if (code.length > LIMITS.shader) bad.push(`шейдер ${part}: ${code.length} символов, максимум ${LIMITS.shader}`);
      OWN_UNIFORMS = new Set(Object.keys(s.uniforms || {}));
      const err = checkGlsl(code, part === 'vert' ? 'vert' : 'frag');
      OWN_UNIFORMS = null;
      if (err) bad.push(`шейдер ${part}: ${err}`);
    }
    const own = new Set(Object.keys(s.uniforms || {}));
    for (const name of own) {
      if (!/^u[A-Z0-9][A-Za-z0-9_]*$/.test(name)) bad.push(`униформу мода надо назвать uSomething, а не «${name}»`);
    }
    for (const [name, val] of Object.entries(s.uniforms || {})) {
      if (!/^u[A-Z0-9][A-Za-z0-9_]*$/.test(name)) bad.push(`униформу мода надо назвать uSomething, а не «${name}»`);
      else if (OURS_UNIFORMS.has(name)) bad.push(`униформа «${name}» уже униформа игры — своё назови, например, ${name}Mod`);
      else if (name in reg.uniforms) bad.push(`униформа «${name}» уже занята другим модом`);
      else if (!(typeof val === 'number' || typeof val === 'boolean' || Array.isArray(val))) {
        bad.push(`униформу «${name}» задают числом или массивом [r, g, b]`);
      }
      else {
        // «не используется» — только если имени нет ни в одной вставке; иначе
        // честный код, который читает uAmount во frag, получал три ложных ошибки
        const all = ['vert', 'frag', 'fragFinal', 'post'].map((p) => codeOf(s[p])).join('\n');
        if (all && !all.includes(name)) bad.push(`униформа «${name}» объявлена, но не используется ни в одной вставке`);
      }
    }
    const unknown = Object.keys(s).filter((k) => !['name', 'vert', 'frag', 'fragFinal', 'post', 'uniforms'].includes(k));
    for (const k of unknown) bad.push(`в shader нет поля «${k}» (есть name, vert, frag, fragFinal, post, uniforms)`);
  }
  const unsupported = Object.keys(def).filter((k) => !['id', 'name', 'version', 'author', 'description', 'enabledByDefault', 'tiles', 'blocks', 'recipes', 'ore', 'mobs', 'shader'].includes(k));
  for (const k of unsupported) bad.push(`не знаю секцию «${k}» (умею tiles, blocks, recipes, ore, mobs, shader, enabledByDefault)`);
  return bad;
}

// ─────────────────────────────────────────────── применение

function apply(id, def) {
  const out = { tiles: [], blocks: [], patches: [], recipes: [], mobs: [], ore: 0, shader: null, uniforms: [] };

  for (const [name, spec] of Object.entries(def.tiles || {})) {
    registerTilePainter(name, modPainter(spec, name));
    reg.tiles.push(name);
    out.tiles.push(name);
  }

  for (const b of def.blocks || []) {
    if (b.patch && BY_KEY.has(b.key)) {
      Object.assign(BY_KEY.get(b.key), normalizeBlock(b.patch, b.key, BY_KEY.get(b.key)));
      reg.modOfKey.set(b.key, id);      // чтобы HUD показал, что блок тронул чужой мод
      out.patches.push(b.key);
      continue;
    }
    if (BY_KEY.has(b.key)) continue;
    const def2 = normalizeBlock(b, b.key, null);
    def2.mod = id;
    BLOCKS.push(def2);
    BY_KEY.set(b.key, def2);
    reg.blockIds.push(def2.id);
    reg.modOfKey.set(b.key, id);
    out.blocks.push(def2.key);
  }

  if (def.recipes?.length) {
    const made = addRecipes(def.recipes, id);
    for (const m of made) reg.recipes.push(m);
    out.recipes = made.map((m) => m.clean.name || m.clean.outId);
  }

  if (def.mobs) {
    const made = addMobTypes(id, def.mobs, (name, spec) => {
      registerTilePainter(name, modPainter(spec, name));
      reg.tiles.push(name);
      out.tiles.push(name);
    });
    for (const key of made) reg.mobs.push(key);
    out.mobs = made;
  }

  for (const o of [].concat(def.ore || [])) {
    const block = BY_KEY.get(o.block)?.id ?? AIR;
    if (!block) continue;
    reg.ore.push({
      mod: id,
      block,
      into: o.into ? BY_KEY.get(o.into)?.id ?? AIR : AIR,
      y0: Math.max(1, Math.min(126, o.min ?? 2 | 0)),
      y1: Math.max(2, Math.min(127, o.max ?? 24 | 0)),
      chance: Math.max(0.02, Math.min(1, o.chance ?? 0.35)),
      veins: Math.max(1, Math.min(48, o.veins ?? 8 | 0)),
      size: Math.max(1, Math.min(12, o.size ?? 4 | 0)),
      salt: (hashStr(id) ^ hashStr(String(o.block))) >>> 0,
    });
    out.ore++;
  }

  if (def.shader) {
    const s = def.shader;
    const codeOf = (v) => (typeof v === 'function' ? String(v({ tileIndex: (key) => TILE_NAMES.indexOf(String(key)) })) : String(v));
    if (s.vert) reg.shader.vert.push({ mod: id, code: codeOf(s.vert) });
    if (s.frag) reg.shader.frag.push({ mod: id, code: codeOf(s.frag) });
    if (s.fragFinal) reg.shader.fragFinal.push({ mod: id, code: codeOf(s.fragFinal) });
    if (s.post) reg.shader.post.push({ mod: id, code: codeOf(s.post) });
    reg.shader.names.push(s.name || `шейдер ${id}`);
    for (const [name, val] of Object.entries(s.uniforms || {})) {
      reg.uniforms[name] = { value: uniformValue(val) };
      out.uniforms.push(name);
    }
    out.shader = s.name || id;
  }
  return out;
}

/** Дружественная форма блока → форма движка (см. блокировку: движок ждёт tiles-объект и id=индекс). */
function normalizeBlock(b, key, base) {
  const out = base ? {} : {
    id: BLOCKS.length,
    key,
    name: String(b.name ?? key),
    tiles: null,
    render: 'cube',
    solid: true,
    opaque: true,
    breakable: true,
    hardness: 1,
    sound: 'stone',
  };
  const set = (obj, k, v) => { if (v !== undefined) obj[k] = v; };
  set(out, 'name', b.name != null ? String(b.name) : undefined);
  if (b.tile != null) out.tiles = { all: String(b.tile) };
  if (b.tiles) out.tiles = { ...(out.tiles || {}), ...normTiles(b.tiles) };
  set(out, 'hardness', b.hardness != null ? +b.hardness : b.hard != null ? +b.hard : undefined);
  if (b.item) { out.render = 'item'; out.solid = false; out.opaque = false; out.breakable = false; }
  if (b.plant) { out.render = 'cross'; out.solid = false; out.opaque = false; out.cutout = true; out.replaceable = true; out.plantH = +b.plant || 0.5; out.hardness = 0.05; out.sound = 'grass'; }
  if (b.torch) { out.render = 'torch'; out.solid = false; out.opaque = false; out.cutout = true; out.slim = true; out.fullBright = true; out.hardness = 0.3; }
  if (b.liquid) { out.render = 'liquid'; out.liquid = true; out.solid = false; out.opaque = false; out.hideSame = true; out.breakable = false; }
  if (b.transparent) { out.opaque = false; out.cutout = true; }
  if (b.glow != null) { out.light = +b.glow; out.fullBright = true; }
  set(out, 'light', b.light != null ? +b.light : undefined);
  if (b.food != null && !b.plant && !b.liquid && !b.torch) {
    // еду носят в руке и съедают, а не строят из неё (если не просили другую форму)
    out.render = 'item'; out.solid = false; out.opaque = false; out.breakable = false;
  }
  set(out, 'food', b.food != null ? +b.food : undefined);
  set(out, 'info', b.info != null ? String(b.info) : undefined);
  set(out, 'drops', b.drops != null ? String(b.drops) : undefined);
  if (b.bonusOf != null) { out.bonusOf = String(b.bonusOf); out.bonus = b.bonus != null ? +b.bonus : 0.15; }
  if (b.tool) {
    out.tool = {
      kind: String(b.tool.kind), mine: b.tool.mine || [], speed: +(b.tool.speed ?? 3),
      damage: +(b.tool.damage ?? 2), uses: +(b.tool.uses ?? 150),
    };
    out.render = 'item'; out.solid = false; out.opaque = false; out.breakable = false;
  }
  for (const f of ['solid', 'opaque', 'cutout', 'breakable', 'fullBright', 'slim', 'hideSame', 'replaceable', 'tinted', 'inset', 'sound', 'render', 'hardness']) {
    if (b[f] !== undefined) out[f] = b[f];
  }
  if (!base) {
    if (!out.tiles && out.render !== 'none') out.tiles = { all: 'stone' };
    else if (out.tiles) out.tiles = { all: out.tiles.all ?? out.tiles.side ?? out.tiles.top, ...out.tiles };
  }
  return out;
}

function normTiles(tiles) {
  const o = {};
  for (const [face, name] of Object.entries(tiles)) {
    o[['top', 'bottom', 'side', 'all'].includes(face) ? face : 'all'] = String(name);
  }
  return o;
}

function uniformValue(val) {
  if (typeof val === 'boolean') return val ? 1 : 0;
  if (Array.isArray(val)) {
    const v = val.map(Number);
    // {x,y}/{x,y,z} вместо THREE.Vector*: three читает именно эти поля, а mods.js
    // не должен тянуть three — тогда его можно тестировать в Node без загрузчика
    if (v.length >= 3) return { x: v[0], y: v[1], z: v[2] ?? 0 };
    if (v.length === 2) return { x: v[0], y: v[1] };
    return v[0];
  }
  return Number(val) || 0;
}

// ─────────────────────────────────────────────── пиксель-арт по описанию

/**
 * Декларация тайла → painter. Набор примитивов маленький, но покрывает почти всё:
 * base (+colors) — заливка с шумом, speck/blobs — вкрапления (руда), grid — сетка
 * кирпичей/дощек, border — обводка (стекло, панель), icon — готовые силуэты
 * предметов, paint (только в файле мода) — свой код на PixelTile.
 */
function modPainter(spec, name) {
  const s = spec && typeof spec === 'object' ? spec : { base: String(spec || '#888888') };
  if (typeof s.paint === 'function') return s.paint;
  const seed = hashStr(name) ^ ((s.seed | 0) * 7919);
  const base = s.base ?? '#7f7f7f';
  const colors = s.colors ?? [base, shade(base, -0.1), shade(base, 0.08), shade(base, -0.18)];
  return (tl) => {
    if (s.soft === false) tl.noise(colors, seed, s.grain ?? 6);
    else tl.mottle(colors, seed, 5, 1.4, 3.2, s.grain ?? 2.2);
    if (s.grid) {
      const g = Math.max(2, s.grid | 0);
      for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) {
        if (x % g === 0 || y % g === 0) tl.set(x, y, shade(base, -(s.shade ?? 0.22)));
      }
    }
    if (s.speck) {
      const n = Math.max(1, Math.round((s.density ?? 0.2) * 40));
      tl.speckles(s.speck, n, seed + 13, 8);
      if (s.density > 0.3) tl.blobs(s.speck, 2, seed + 29, 2.2);
    }
    if (s.blobs) tl.blobs(s.blobs, 4, seed + 41, 2.8);
    if (s.icon) drawIcon(tl, s.icon, s.base ?? '#e91e63', s);
    if (s.border) tl.border(s.border);
    return tl;
  };
}

/** Силуэты предметов те же, что у внутренних тайлов: ромб-самоцвет, стержень, слиток. */
function drawIcon(tl, kind, color, s) {
  const c = s.light ?? shade(color, 0.25), d = s.dark ?? shade(color, -0.3);
  tl.clear();          // предметы рисуются на пустом тайле: фон = прозрачный
  const put = (x, y, col, a = 255) => tl.set(x, y, col, a);
  if (kind === 'gem') {
    for (let y = 0; y < 16; y++) {
      const w = Math.round(7 - Math.abs(y - 7.5) * 1.6);
      if (w <= 0) continue;
      for (let x = 8 - w; x < 8 + w; x++) put(x, y, x + y < 12 ? c : (x + y > 18 ? d : color));
    }
  } else if (kind === 'rod' || kind === 'ingot' || kind === 'dust') {
    for (let i = 3; i < 13; i++) {
      if (kind === 'rod') { put(i, 12 - i, color); put(i + 1, 12 - i, d); }
      else if (kind === 'ingot') { for (let x = 3; x < 13; x++) for (let y = 6; y < 11; y++) if (x + y > 9 && x + y < 20) put(x, y, y < 8 ? c : color); }
      else { put(6 + (i % 4), 8 + (i % 3), color); put(4 + (i % 6), 6 + (i % 5), d); }
    }
  } else if (kind === 'ball') {
    for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) {
      const dx = x - 7.5, dy = y - 7.5, r = dx * dx + dy * dy;
      if (r < 30) put(x, y, r < 12 ? c : color);
    }
  } else {
    for (let y = 4; y < 12; y++) for (let x = 4; x < 12; x++) put(x, y, (x + y) % 4 === 0 ? d : color);
  }
  return tl;
}

/** Осветлить/затемнить #rrggbb на долю. Свой, чтобы не тянуть внутренний tint. */
function shade(hex, k) {
  const h = String(hex).replace('#', '');
  const n = h.length === 3 ? h.split('').map((c) => c + c).join('') : h.slice(0, 6);
  const r = parseInt(n.slice(0, 2), 16) || 0, g = parseInt(n.slice(2, 4), 16) || 0, b = parseInt(n.slice(4, 6), 16) || 0;
  const f = (v) => Math.max(0, Math.min(255, Math.round(v + (k > 0 ? (255 - v) * k : v * k))));
  return `#${[f(r), f(g), f(b)].map((v) => v.toString(16).padStart(2, '0')).join('')}`;
}

// ─────────────────────────────────────────────── проверка GLSL

/**
 * Быстрая проверка вставки: баланс скобок, запрет препроцессора и main, только
 * те идентификаторы, которые мы обещаем. Полноценного парсера GLSL тут нет и не
 * нужно: цель — не дать моду сделать чёрный экран вместо игры.
 */
/** Униформы мода, которые проверяются в рамках одного описания (ещё не в reg). */
let OWN_UNIFORMS = null;

export function checkGlsl(code, stage = 'frag') {
  const src = String(code || '');
  if (!src.trim()) return 'пустая вставка';
  if (src.length > LIMITS.shader) return `слишком длинно: ${src.length} символов, длиннее лимита ${LIMITS.shader}`;
  if (/#\s*(include|define|undef|if|ifdef|version|pragma)/.test(src)) return 'препроцессор ( #include/#define/#if/#version ) во вставке запрещён — им нечем управлять';
  if (/\bvoid\s+main\b/.test(src)) return 'свой main запрещён: вставка выполняется внутри нашего шейдера';
  if (/^\s*(uniform|attribute|varying|in|out)\b/m.test(src)) {
    return 'объявлять uniform/varying здесь не надо — свои значения пиши в shader.uniforms, они уже объявлены';
  }
  let depth = 0;
  for (const ch of src) {
    if (ch === '{' || ch === '(' || ch === '[') depth++;
    else if (ch === '}' || ch === ')' || ch === ']') depth--;
    if (depth < 0) return 'лишняя закрывающая скобка';
  }
  if (depth !== 0) return `скобки не сбалансированы (разница ${depth})`;
  for (const m of src.matchAll(/\b([A-Za-z_][A-Za-z0-9_]*)\s*\(/g)) {
    const fn = m[1];
    if (!GLSL_FN.has(fn) && !/^(if|for|while|return)$/.test(fn)) return `не знаю функцию «${fn}» — доступны только те, что есть в GLSL и в нашем материале`;
  }
  for (const m of src.matchAll(/\b(u[A-Z][A-Za-z0-9_]*)\b/g)) {
    const u = m[1];
    if (!OURS_UNIFORMS.has(u) && !(u in reg.uniforms) && !(OWN_UNIFORMS && OWN_UNIFORMS.has(u))) {
      return `униформа «${u}» не существует; есть ${[...OURS_UNIFORMS].join(', ')} и свои из shader.uniforms`;
    }
  }
  for (const m of src.matchAll(/\b(vec[234]|float|int|bool|mat[234])\s+([A-Za-z_][A-Za-z0-9_]*)\s*=/g)) {
    const name = m[2];
    if (RESERVED.has(name)) return `имя «${name}» занято нашим шейдером: его переопределение сломает вывод молча, выбери другое`;
  }
  for (const bad0 of ['gl_FragColor', 'discard']) {
    if (src.includes(bad0)) return `«${bad0}» во вставке не нужен: результат берётся из col (в post — из c), а discard вырезал бы грань целиком`;
  }
  if (stage === 'vert' && /\bcol\b/.test(src)) return 'в вершинном шейдере нет col — цвет правь во frag';
  if ((stage === 'frag' || stage === 'fragFinal') && /\bworld\b/.test(src)) return 'во фрагментном нет world — геометрию правь в vert';
  if (stage === 'post' && /\bcol\b/.test(src)) return 'в пост-проходе нет col — правь c (цвет кадра)';
  return '';
}

// tileIndex — наш хелпер (см. render/voxelMaterial.js): номер тайла в атласе.
const GLSL_FN = new Set(['tileIndex', 'sin', 'cos', 'tan', 'asin', 'acos', 'atan', 'pow', 'exp', 'log', 'exp2', 'log2',
  'sqrt', 'inversesqrt', 'abs', 'sign', 'floor', 'ceil', 'fract', 'mod', 'min', 'max', 'clamp', 'mix',
  'step', 'smoothstep', 'length', 'distance', 'dot', 'cross', 'normalize', 'faceforward', 'reflect',
  'refract', 'texture2D', 'textureCube', 'vec2', 'vec3', 'vec4', 'float', 'int', 'bool', 'mat2', 'mat3', 'mat4']);
const OURS_UNIFORMS = new Set(['uTime', 'uMap', 'uQuality', 'uShadow', 'uRefl', 'uProbe', 'uSun', 'uSunColor', 'uSunDirW', 'uAmbient', 'uTorch', 'uFogColor', 'uFogDensity', 'uFogStart', 'uFogEnd', 'uExposure', 'uSea', 'uZenithC', 'uWave', 'uAlpha', 'uAlphaTest', 'uDay', 'uDusk', 'uNight']);
// Только те имена, чьё переопределение молча ломает результат: col — вход и выход
// вставки, c — то же в пост-проходе, world/pos — геометрия, vUv — UV тайла.
// Остальные локалы мод может называть как хочет: вставка живёт в своём блоке { }.
const RESERVED = new Set(['col', 'c', 'world', 'pos', 'vUv', 'vWorld', 'gl_FragColor']);

function hashStr(s) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
}

// ─────────────────────────────────────────────── руды: пост-проход генерации

/**
 * Вызывается из World.ensureChunk после terrain.generate и ДО applyEdits:
 * правка игрока всегда перекрывает моду. Только хеш координат и сида — ни одного
 * Math.random, иначе сосед по сети видел бы другие жилы.
 */
export function orePass(world, chunk) {
  if (!reg.ore.length || !chunk?.blocks) return false;
  const data = chunk.blocks;
  const SIZE = 16, HEIGHT = (data.length / (SIZE * SIZE)) | 0;
  const S = (world.seed >>> 0) || 1;
  for (const spec of reg.ore) {
    for (let i = 0; i < spec.veins; i++) {
      if (hash3(spec.salt + i, chunk.cx, chunk.cz, S) % 10000 / 10000 > spec.chance) continue;
      let x = hash3(spec.salt + i * 3 + 1, chunk.cx, chunk.cz, S) % SIZE;
      let z = hash3(spec.salt + i * 5 + 2, chunk.cz, chunk.cx + 7, S) % SIZE;
      let y = spec.y0 + hash3(spec.salt + i * 7 + 3, x, z, S) % Math.max(1, spec.y1 - spec.y0 + 1);
      let n = 1 + hash3(spec.salt + i * 11 + 4, y, x * 3 + z, S) % spec.size;
      while (n-- > 0) {
        if (x >= 0 && x < SIZE && z >= 0 && z < SIZE && y >= 1 && y < HEIGHT) {
          const idx = (y * SIZE + z) * SIZE + x;
          const cur = data[idx];
          const want = spec.into || 0;
          const replaceable = want ? cur === want : cur && (BLOCKS[cur]?.sound === 'stone');
          if (replaceable) data[idx] = spec.block;
        }
        const step = hash3(spec.salt + n, x, y + z * 5, S) % 6;
        x += step === 0 ? 1 : step === 1 ? -1 : 0;
        z += step === 2 ? 1 : step === 3 ? -1 : 0;
        y += step === 4 ? 1 : step === 5 ? -1 : 0;
      }
    }
  }
  return true;
}

function hash3(a, b, c, seed) {
  let h = (a ^ 0x9e3779b9) >>> 0;
  h = Math.imul(h ^ (b + seed + 0x85ebca6b), 0xc2b2ae35) >>> 0;
  h = Math.imul(h ^ (c + 0x27d4eb2f), 0x165667b1) >>> 0;
  h ^= h >>> 15;
  return h >>> 0;
}

// ─────────────────────────────────────────────── интерфейс для игры

export function snapshot() {
  return {
    mods: reg.list.map((r) => ({ id: r.id, name: r.name, source: r.source, ok: r.ok, off: !!r.off, error: r.error || '', applied: r.applied })),
    blockIds: reg.blockIds.slice(),
    tiles: reg.tiles.slice(),
    uniforms: Object.keys(reg.uniforms),
    oreCount: reg.ore.length,
    shaderNames: reg.shader.names.slice(),
  };
}

/** Есть ли смысл вообще вставлять в шейдеры код и тянуть проход руд. */
export function hasShaders() {
  return !!(reg.shader.vert.length || reg.shader.frag.length || reg.shader.fragFinal.length || reg.shader.post.length);
}
export function hasOre() { return reg.ore.length > 0; }
export function shaderChunks() {
  return {
    vert: reg.shader.vert.slice(),
    frag: reg.shader.frag.slice(),
    fragFinal: reg.shader.fragFinal.slice(),
    post: reg.shader.post.slice(),
    names: reg.shader.names.slice(),
    uniforms: modUniforms() || undefined,
  };
}
/** Значения униформ мода для материала (raw: float/vec2/vec3 выбирает форма). */
export function modUniforms() {
  const out = {};
  for (const [k, v] of Object.entries(reg.uniforms)) out[k] = v.value;
  return Object.keys(out).length ? out : null;
}
export function modBlockIds() { return reg.blockIds.slice(); }
export function modOf(key) { return reg.modOfKey.get(key) ?? null; }

/** Обновить униформу мода на лету: game.mods.setUniform('uRuby', 0.8). */
export function setUniform(name, value, materials) {
  if (!(name in reg.uniforms)) return false;
  reg.uniforms[name].value = uniformValue(value);
  if (materials?.uniforms?.[name]) materials.uniforms[name].value = reg.uniforms[name].value;
  return true;
}

/** Вкл/выкл мода. Применяется после перезагрузки: id блоков живут в сохранённом мире. */
export function setModEnabled(id, on, storage = globalThis.localStorage) {
  const store = readStore(storage);
  const disabled = new Set(store.disabled), enabled = new Set(store.enabled);
  if (on) { disabled.delete(id); enabled.add(id); } else { enabled.delete(id); disabled.add(id); }
  return writeStore(storage, { disabled: [...disabled], enabled: [...enabled], user: store.user });
}

export function saveUserSource(src, storage = globalThis.localStorage, id = 'user') {
  const store = readStore(storage);
  const user = store.user.filter((u) => (u.id || 'user') !== id);
  if (src && src.trim()) user.push({ id, src });
  return writeStore(storage, { disabled: store.disabled, user });
}

export function readUserSource(storage = globalThis.localStorage, id = 'user') {
  return readStore(storage).user.find((u) => (u.id || 'user') === id)?.src ?? '';
}

/** Откатить всё, что добавили моды. Нужно тестам и «применить заново». */
export function resetMods() {
  for (const key of reg.mobs) delete MOB_TYPES[key];
  for (const { src, clean } of reg.recipes) {
    let i = RECIPES.indexOf(src); if (i >= 0) RECIPES.splice(i, 1);
    i = RECIPES_CLEAN.indexOf(clean); if (i >= 0) RECIPES_CLEAN.splice(i, 1);
  }
  // блоки можно снимать только с конца: id = индекс, и мир мог уже ничего не прочитать
  while (reg.blockIds.length) {
    const id = reg.blockIds.pop();
    const def = BLOCKS[id];
    if (!def || BLOCKS.length - 1 !== id || !def.mod) { reg.blockIds.push(id); break; }
    BY_KEY.delete(def.key);
    reg.modOfKey.delete(def.key);
    BLOCKS.pop();
  }
  for (const name of reg.tiles) registerTilePainter(name, null);
  reg.mobs.length = 0;
  reg.recipes.length = 0;
  reg.tiles.length = 0;
  reg.ore.length = 0;
  for (const k of Object.keys(reg.uniforms)) delete reg.uniforms[k];
  reg.list.length = 0;
  reg.shader.vert.length = reg.shader.frag.length = reg.shader.fragFinal.length = reg.shader.post.length = 0;
  reg.shader.names.length = 0;
  reg.loaded = false;
}
