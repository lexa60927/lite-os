/**
 * Регрессии «красивой картинки»: тени от солнца, отражения воды, постобработка
 * без bloom, уровни настроек и новое содержимое 0.3.0.
 *
 * Почему это вообще можно проверить без браузера: GLSL мы не скомпилируем, зато
 * можем проверить ВСЁ, что вокруг него — и именно там случаются настоящие
 * поломки:
 *   • материал без `lights: true` или без shadow-чанка = тени молча не работают
 *     (никакой ошибки, просто картинка без теней);
 *   • cubemap-униформа, выставленная в null при включённом uRefl = чёрная вода;
 *   • несовпадение амплитуд волны в вершине и во фрагменте = блик «мимо гребня»;
 *   • отказ постобработки обязан гасить её, а не игру.
 * Плюс математика (snap к сетке текселей, ночное выключение, силы) и весь
 * новый контент: id, тайлы, рецепты, бонусные дропы, еда.
 *
 * Запуск: node --experimental-loader ./dev/loaders/css.mjs dev/test-render.mjs
 */
import * as THREE from 'three';
import { installDom } from './dom-stub.mjs';

installDom();

let fail = 0;
const bad = (m) => { console.log('✘ ' + m); fail++; };
const ok = (m) => console.log('✔ ' + m);

const read = async (rel) => {
  const { readFile } = await import('node:fs/promises');
  return readFile(new URL('../' + rel, import.meta.url), 'utf8');
};

// ── 1. материал вокселей: тени подключены корректно и обнуляются до прежней картинки
{
  const { VOXEL_VERT, VOXEL_FRAG, createVoxelMaterials } = await import('../src/render/voxelMaterial.js');
  const { buildTiles } = await import('../src/engine/tiles.js');
  const tiles = buildTiles();
  const atlas = { texture: new THREE.Texture(), index: tiles.index, tiles: tiles.tiles };
  const mats = createVoxelMaterials(atlas);

  if (!VOXEL_VERT.includes('#include <shadowmap_pars_vertex>')) bad('в вершинном шейдере нет <shadowmap_pars_vertex> — vDirectionalShadowCoord не объявлен');
  if (!/#include <shadowmap_vertex>/.test(VOXEL_VERT)) bad('в вершинном шейдере нет <shadowmap_vertex> — координаты тени не считаются');
  const order = VOXEL_VERT.indexOf('vec4 worldPosition = world;');
  if (!(order > 0 && VOXEL_VERT.indexOf('#include <shadowmap_vertex>') > order)) bad('<shadowmap_vertex> идёт раньше worldPosition — чанк читает неинициализированную переменную');
  for (const inc of ['<common>', '<packing>', '<lights_pars_begin>', '<shadowmap_pars_fragment>', '<shadowmask_pars_fragment>']) {
    if (!VOXEL_FRAG.includes(`#include ${inc}`)) bad(`во фрагментном шейдере нет <${inc}> — getShadowMask() не соберётся`);
  }
  if (!VOXEL_FRAG.includes('getShadowMask()')) bad('getShadowMask() не вызывается — теней не будет вовсе');
  if (!/uShadow/.test(VOXEL_FRAG)) bad('нет униформы uShadow — тени нельзя выключить без пересборки шейдера');
  if (mats.solid.lights !== true || mats.water.lights !== true) bad('material.lights !== true: three не отдаст программе униформы света и карту теней');
  if (mats.solid.uniforms.uShadow !== mats.water.uniforms.uShadow) bad('униформы теней не общие: суша и вода начнут жить в разных режимах');
  if (mats.solid.uniforms.uMap !== mats.water.uniforms.uMap) bad('атлас не общий — два источника правды про текстуру');

  // «выключено» обязано означать «как раньше»: сила тени 0 → shade === 1.0
  // три не подмешивает UniformsLib.lights в ShaderMaterial сам, но `lights: true`
  // обязывает их нести: WebGLRenderer пишет uniforms.directionalLights.value = …
  // и без этих ключей первый же кадр с тенями падает («Cannot set properties of
  // undefined (setting 'needsUpdate')») — в браузере это белый экран и замершая игра
  {
    const need = Object.keys(THREE.UniformsLib.lights);
    for (const [name, mat] of [['solid', mats.solid], ['water', mats.water]]) {
      const lack = need.filter((k) => !mat.uniforms[k] || !('value' in mat.uniforms[k]));
      if (lack.length) bad(`у материала «${name}» нет световых униформ: ${lack.join(', ')} — тени уронят рендер`);
      if (mat.uniforms.ambientLightColor === THREE.UniformsLib.lights.ambientLightColor) bad(`«${name}» делит световые униформы с глобальным UniformsLib — два мира в одной вкладке начнут светить друг другу`);
      if (mat.uniforms.directionalShadowMap !== mats.solid.uniforms.directionalShadowMap) bad(`directionalShadowMap у «${name}» отдельный — суша и вода начнут брать разные карты теней`);
    }
  }
  mats.setShadow(0);
  if (mats.uniforms.uShadow.value !== 0) bad('setShadow(0) не обнулил силу — выключенные тени всё равно темнят картинку');
  mats.setShadow(5);
  if (mats.uniforms.uShadow.value !== 1) bad('сила тени не ограничена сверху единицей');
  mats.setShadow(0);

  // отражение: без текстуры доля обязана стать нулём, иначе сэмпл из null-cube = чёрная вода
  mats.setReflection({ isTexture: true }, 1);
  if (mats.uniforms.uRefl.value !== 1) bad('setReflection с текстурой не поднял uRefl');
  mats.setReflection(null, 1);
  if (mats.uniforms.uRefl.value !== 0) bad('setReflection(null) оставил uRefl > 0 — sampling из пустого кубика, вода станет чёрной');
  if (mats.uniforms.uProbe.value !== null) bad('uProbe не обнулён');

  // качество: 3 уровня доступны, больше — нет (иначе ветки не существует)
  mats.setQuality(9);
  if (mats.quality() !== 3) bad(`setQuality(9) дал ${mats.quality()} — ожидается 3`);
  mats.setQuality(0);

  // амплитуды волны в вершине и во фрагменте обязаны совпадать, иначе блик
  // гуляет мимо гребня (это и есть «вода не живая, аshader-шум»)
  const freqs = [...VOXEL_VERT.matchAll(/(?:world|p)\.(x|z) \* (0\.62|1\.35)/g)].length;
  const ampsV = [...VOXEL_VERT.matchAll(/\* (0\.022|0\.018|0\.008);?\s*$/gm)].map((m) => m[1]);
  const ampsF = [...VOXEL_FRAG.matchAll(/cos\([^)]*\) \* (0\.022|0\.018|0\.008)/g)].map((m) => m[1]);
  if (freqs < 2) bad('в вершинном шейдере не найдены частоты волны 0.62/1.35');
  if (ampsV.length !== 3) bad(`в вершине ${ampsV.length} амплитуд волны, ожидалось 3`);
  if (ampsF.length < 2) bad(`во фрагменте ${ampsF.length} амплитуд — waterSlope рассинхронизирован с геометрией`);
  if (ampsV.length === 3 && ampsF.length >= 2 && !(ampsV.includes('0.022') && ampsF.includes('0.022'))) bad('амплитуды вершины и наклона разные');
  ok(`материал: shadow-чанки на месте, lights:true, сила тени и отражения обнуляются, амплитуды волны совпадают (${ampsV.join('/')})`);
}

// ── 2. SunShadow: snap, клампы, ночь, выключение
{
  const { SunShadow, SHADOW } = await import('../src/render/sunShadow.js');
  const scene = new THREE.Scene();
  const sh = new SunShadow(scene);
  if (!(sh.light.shadow.mapSize.x >= 1024)) bad(`карта теней ${sh.light.shadow.mapSize.x} — слишком мелко для 128 блоков`);
  if (typeof sh.light.shadow.bias !== 'number') bad('у тени нет bias — будет ползать self-shadow acne');

  sh.setEnabled(true, 64);
  const cam = sh.light.shadow.camera;
  if (!(cam.left === -64 && cam.right === 64)) bad(`ortho-объём не перестроен под радиус: ${cam.left}..${cam.right}`);
  sh.setEnabled(true, 96);
  if (!(cam.left === -96)) bad('clamped radius не применён');
  sh.setEnabled(true, 5000);
  if (!(cam.right <= 160)) bad(`радиус не ограничен сверху: ${cam.right} — карта теней растянется в кашу`);
  if (sh.light.castShadow !== true) bad('setEnabled(true) не поднял castShadow');

  const p = { x: 10.4, y: 45, z: -3.2 };
  const sunHigh = new THREE.Vector3(0.2, 0.9, 0.34).normalize();
  const did = sh.update(p, sunHigh, 1, 0);
  if (!did) bad('первый кадр обязан нарисовать карту теней');
  const texel = sh._texel;            // ровно тот шаг, который использует snap
  if (Math.abs(texel - (sh.stats.radius * 2) / SHADOW.mapSize) > 1e-9) bad('шаг текселя не соответствует текущему радиусу');
  const f = sh._focus;
  if (!f) bad('нет точки фокуса теней');
  else for (const a of ['x', 'y', 'z']) {
    const r = Math.abs(f[a] / texel - Math.round(f[a] / texel));
    if (r > 1e-6) bad(`фокус по ${a} не на сетке текселей (${f[a]}) — тени будут дрожать при ходьбе`);
  }
  // ночь: теней нет, и свет не «переворачивается» вверх ногами
  const before = sh.stats.updated;
  sh.update(p, new THREE.Vector3(0.2, -0.4, 0.34), 0.0, 0);
  if (sh.stats.updated !== before) bad('ночью (day=0) карта теней всё равно перерисовывается');
  sh.update(p, sunHigh, 0.01, 0);
  if (sh.stats.updated !== before) bad('при почти нулевом дне тени считаются');
  // выключение: light.castShadow=false → USE_SHADOWMAP уходит из программы
  sh.setEnabled(false);
  if (sh.light.castShadow !== false) bad('setEnabled(false) не снял castShadow');
  ok(`тени: snap ${(texel * 100).toFixed(2)} см/тексель, зона до 160 блоков, ночь и выключение не тратят кадр`);
}

// ── 3. постобработка: без bloom, отказ не ломает игру
{
  const code = await read('src/render/postfx.js');
  if (/new UnrealBloomPass\(/.test(code)) bad('в постобработке остался UnrealBloomPass — «свечение» просили убрать');
  if (!/GRADE_FRAG/.test(code)) bad('нет финального грейда');
  const { PostFX } = await import('../src/render/postfx.js');
  const broken = { capabilities: null, getDrawingBufferSize() { throw new Error('нет GL'); }, setRenderTarget() {}, render() {} };
  const fx = new PostFX(broken, new THREE.Scene(), new THREE.PerspectiveCamera());
  if (fx.ok) bad('PostFX на битом renderer должен честно сообщить ok=false');
  if (fx.active) bad('active должен быть false, иначе frame() позовёт render() в пустоту');
  fx.setEnabled(true);
  if (fx.enabled !== false) bad('setEnabled на нерабочем эффекте не подавлен');
  ok('постобработка: bloom удалён, отказ renderer’а превращается в ok=false, а не в белый экран');
}

// ── 4. небо: солнце без пересвета, ультра-ветки есть
{
  const code = await read('src/render/sky.js');
  if (/setRGB\(\s*this\.ultra \? 2\.7/.test(code)) bad('солнце пишется значениями > 1 — без bloom это выбитое белое пятно');
  if (!/uUltra/.test(code)) bad('небо не знает про уровень «ультра»');
  if (!/pow\(sun, 900\.0\) \* 0\.\d+/.test(code)) bad('гало солнца не уменьшено (коэффициент > 1 = «свечение»)?');
  const { Sky } = await import('../src/render/sky.js');
  const scene = new THREE.Scene();
  const sky = new Sky(scene);
  sky.setUltra(true);
  if (sky.uniforms.uUltra.value !== 1) bad('setUltra не поднял униформу');
  if (sky.cirrus.visible !== true) bad('верхний слой облаков не появился в «ультре»');
  sky.setUltra(false);
  if (sky.cirrus.visible !== false || sky.uniforms.uUltra.value !== 0) bad('«ультра» выключается не до конца');
  const day = sky.update(0.28, 0.6, new THREE.Vector3(0, 45, 0), null);
  if (!(day.day > 0.5)) bad(`днём освещённость ${day.day} — странно`);
  const night = sky.update(0.75, 0.6, new THREE.Vector3(0, 45, 0), null);
  if (night.day > 0.2) bad(`ночью освещённость ${night.day} — небо не гаснет`);
  sky.dispose();
  ok('небо: солнце в диапазоне 0..1, ультра-ветки включаются/выключаются, сутки считаются');
}

// ── 5. куб-проба: никогда не бросает наружу
{
  const { WaterProbe } = await import('../src/render/waterProbe.js');
  const fake = { setRenderTarget() {}, render() { throw new Error('нет GL'); } };
  const pr = new WaterProbe(fake, new THREE.Scene(), { size: 64 });
  if (!pr.ok) bad('конструирование пробы не должно требовать GL (таргет — только параметры)');
  pr.setEnabled(true);
  if (!pr.enabled) bad('проба не включилась');
  let threw = false;
  try { pr.update({ x: 0, y: 40, z: 0 }, 0, []); } catch (e) { threw = true; bad('update() бросил наружу: ' + e.message); }
  if (!threw && pr.enabled) bad('после сбоя рендера проба обязана выключиться сама');
  if (pr.texture === undefined) bad('нет геттера texture');
  pr.dispose();
  ok('отражения: сбой съёмки гасит пробу, игра продолжает рендерить');
}

// ── 6. меши чанков: флаги теней и вода, которую не видно в отражении
{
  const { World } = await import('../src/engine/world.js');
  const { ChunkView } = await import('../src/render/chunkView.js');
  const { buildTiles } = await import('../src/engine/tiles.js');
  const { CELL, TILE, GRID } = await import('../src/engine/pixels.js');
  const { index } = buildTiles();
  const atlas = { index, cell: CELL, tile: TILE, grid: GRID };
  const { SEA_TOP } = await import('../src/engine/constants.js');
  const world = new World(777);
  for (let cz = -1; cz <= 1; cz++) for (let cx = -1; cx <= 1; cx++) world.ensureChunk(cx, cz);
  // воду в тест приносим руками: в конкретном чанке её может не быть, а
  // проверять надо именно «меши воды перечислены» — иначе отражение снимает воду.
  // Ставим поверх рельефа: внутри земли грань воды не мешируется (ее не видно).
  for (let x = 0; x < 8; x++) {
    for (let z = 0; z < 8; z++) {
      let top = 0;
      for (let y = SEA_TOP + 24; y > 1; y--) if (world.getBlock(x, y, z)) { top = y; break; }
      world.setBlock(x, top + 1, z, byKeyWater(), false);
    }
  }
  world.dirtyMesh.add(ChunkView.key(0, 0));
  const scene = new THREE.Scene();
  const materials = { solid: new THREE.MeshBasicMaterial(), water: new THREE.MeshBasicMaterial() };
  const view = new ChunkView(world, scene, materials, atlas);
  const depth = new THREE.MeshDepthMaterial({ depthPacking: THREE.RGBADepthPacking, alphaTest: 0.5 });
  function byKeyWater() { return 11; }   // вода — id 11 (см. blocks.js); держим числом, чтобы тест не зависел от реестра

  view.setShadows(true, depth);
  view.remesh(0, 0);
  const obj = view.objects.get(ChunkView.key(0, 0));
  if (!obj?.solid) bad('не мешится чанок в тесте — бессмысленно проверять флаги');
  else {
    if (obj.solid.castShadow !== true) bad('суша не бросает тень');
    if (obj.solid.receiveShadow !== true) bad('суша не принимает тень');
    if (obj.solid.customDepthMaterial !== depth) bad('нет customDepthMaterial — листва отбрасывала бы квадрат');
  }
  if (obj?.water) {
    if (obj.water.castShadow === true) bad('вода бросает тень — полупрозрачная плоскость замутнит всю карту');
    if (obj.water.receiveShadow !== true) bad('вода не принимает тень (дерево над водой обязано быть видно в отражении)');
  }
  let waters = 0;
  for (const o of view.objects.values()) if (o.water) waters++;
  const list = view.waterMeshes;
  if (!Array.isArray(list)) bad('waterMeshes должен быть массивом');
  else if (list.length !== waters) bad(`waterMeshes вернул ${list.length} вместо ${waters} — часть воды попадёт в отражение и даст эхо`);
  else if (waters === 0) bad('в тестовом чанке нет воды — секция ничего не проверяет (смените сид)');
  view.setShadows(false);
  if (obj?.solid && obj.solid.castShadow !== false) bad('setShadows(false) не снял флаги');
  // большая дальность: бюджет стриминга и уборка
  view.setRenderDistance(64);
  if (!(view.streamBudget > 6)) bad(`при 64 чанках бюджет всё ещё ${view.streamBudget} мс — мир будет достраиваться вечность`);
  if (view._cullEvery !== 40) bad('на дальней прорисовке не включена уборка чанков');
  view.setRenderDistance(10);
  if (view._cullEvery !== 0) bad('на обычной дальности уборка не нужна, а она включена');
  if (view.renderDistance !== 10) bad('кламп радиуса сломан');
  const dropped = view.cullFarChunks({ x: 0, y: 45, z: 0 }, 1);
  if (dropped < 0) bad('cullFarChunks вернул мусор');
  ok(`меши: флаги теней корректны, при 64 чанках бюджет ${view.streamBudget} мс, при 10 — уборка выключена`);
}

// ── 7. настройки: лимит FPS, дальность 64, тени, отражения, сердца в креативе
{
  const { Hud, DEFAULT_SETTINGS } = await import('../src/ui/hud.js');
  if (DEFAULT_SETTINGS.fpsLimit !== 120) bad(`лимит FPS по умолчанию ${DEFAULT_SETTINGS.fpsLimit}, просили 120`);
  if (DEFAULT_SETTINGS.renderDistance !== 10) bad('дальность по умолчанию уехала с 10');
  if (!(DEFAULT_SETTINGS.shadows >= 1)) bad('тени должны быть включены там, где они доступны');
  if (!(DEFAULT_SETTINGS.waterRefl >= 1)) bad('отражения воды должны быть включены по умолчанию');
  const hud = new Hud({ texture: new THREE.Texture(), index: {}, tiles: [] });
  const settings = { ...DEFAULT_SETTINGS };
  const seen = [];
  hud.settingsForm(settings, (k, v) => seen.push([k, v]), {});
  const rows = hud.el.settingsBody.children ?? [];
  const labels = rows.map((r) => r.children?.[0]?.textContent ?? '');
  const rd = rows.find((r, i) => /Дальность/.test(labels[i]));
  const rdInput = rd?.children?.[1];
  if (!(+rdInput?.max >= 64)) bad(`ползунок дальности ограничен ${rdInput?.max}, просили 64`);
  const fpsRow = rows.find((r, i) => /Лимит кадров/.test(labels[i]));
  if (!fpsRow) bad('в настройках нет ограничителя кадров');
  else {
    const opts = (fpsRow.children?.[1]?.children ?? []).map((o) => o.textContent);
    if (!opts.some((t) => /120/.test(t))) bad('в списке лимита нет 120');
    if (!opts.some((t) => /без лимита/.test(t))) bad('в списке лимита нет «без лимита»');
    if (!opts.some((t) => /(^|[^0-9])20/.test(t))) bad('в списке лимита нет 20');
  }
  for (const need of ['Тени от солнца', 'Отражения воды']) {
    const row = rows.find((r, i) => (labels[i] ?? '').includes(need));
    if (!row) { bad(`нет настройки «${need}»`); continue; }
    const n = (row.children?.[1]?.children ?? []).length;
    if (n < 3) bad(`«${need}» предлагает только ${n} варианта`);
  }
  // сердца: в творчестве их нет
  hud.el.hp.style = {};
  hud.setHealthVisible(false);
  if (hud.el.hp.style.display !== 'none') bad('в творчестве линейка сердец осталась на экране');
  hud.setHealthVisible(true);
  if (hud.el.hp.style.display !== '') bad('в выживании сердца не вернулись');
  ok('настройки: лимит 20…без лимита (120 по умолчанию), дальность до 64, тени и отражения есть, сердец в креативе нет');
}

// ── 8. новое содержимое: id, тайлы, рецепты, дропы, еда
{
  const { BLOCKS, byKey, dropOf, bonusDropOf, isItem, mineMultiplier } = await import('../src/engine/blocks.js');
  const { buildTiles, TILE_NAMES } = await import('../src/engine/tiles.js');
  const keys = ['mossy_cobblestone', 'ice', 'lantern', 'flint', 'apple', 'bread', 'compass', 'clock', 'shears'];
  for (const k of keys) {
    const id = byKey(k);
    if (!id) { bad(`нет блока/предмета ${k}`); continue; }
    if (BLOCKS[id]?.key !== k) bad(`${k}: id ${id} читает чужой def`);
    const tiles = BLOCKS[id].tiles;
    const names = tiles ? [...new Set(Object.values(tiles).filter(Boolean))] : [];
    for (const t of names) if (!TILE_NAMES.includes(t)) bad(`${k}: тайл ${t} не нарисован в атласе`);
  }
  if (BLOCKS.length !== Math.max(...BLOCKS.map((b) => b.id)) + 1) bad('id блоков рассинхронизированы с индексами массива');
  // фонарь светит, лёд не непрозрачен, еда ест, компас/часы informational
  if (!(BLOCKS[byKey('lantern')].light > 0.8)) bad('фонарь не светит — зачем он тогда');
  if (BLOCKS[byKey('ice')].opaque !== false) bad('лёд делает соседние грани невидимыми (opaque:true)');
  if (BLOCKS[byKey('apple')].food !== 4 || BLOCKS[byKey('bread')].food !== 8) bad('еда не лечит: fields food потеряны');
  if (BLOCKS[byKey('compass')].info !== 'spawn' || BLOCKS[byKey('clock')].info !== 'time') bad('компас/часы не помечены как «показывающие данные»');
  if (!isItem(byKey('bread'))) bad('хлеб не предмет — его нельзя носить стопкой');
  if (isItem(byKey('lantern'))) bad('фонарь — блок, не предмет');
  // ножницы стригут листву быстрее руки и не копают камень
  const shears = BLOCKS[byKey('shears')].tool;
  if (!(shears.speed > 2)) bad('ножницы не ускоряют стрижку');
  const leaves = BLOCKS[byKey('leaves')], stone = BLOCKS[byKey('stone')];
  if (!(mineMultiplier(leaves, byKey('shears')) > mineMultiplier(leaves, 0))) bad('ножницы не ускоряют поломку листвы');
  if (mineMultiplier(stone, byKey('shears')) > 1) bad('ножницы ускоряют копание камня — этого быть не должно');
  // бонусные дропы: доля и детерминизм
  const gravel = byKey('gravel'), flint = byKey('flint'), leavesId = byKey('leaves'), apple = byKey('apple');
  let f = 0, a = 0, N = 0;
  for (let x = 0; x < 40; x++) for (let z = 0; z < 40; z++) { N++; if (bonusDropOf(gravel, x, 40, z) === flint) f++; if (bonusDropOf(leavesId, x, 46, z) === apple) a++; }
  const pf = f / N, pa = a / N;
  if (!(pf > 0.05 && pf < 0.35)) bad(`кремень из гравия выпадает в ${(pf * 100).toFixed(1)}% случаев`);
  if (!(pa > 0.05 && pa < 0.35)) bad(`яблоко из листвы выпадает в ${(pa * 100).toFixed(1)}% случаев`);
  if (bonusDropOf(gravel, 12, 40, 7) !== bonusDropOf(gravel, 12, 40, 7)) bad('бонусный дроп недетерминирован — сеть разойдётся');
  if (bonusDropOf(stone, 3, 40, 3) !== 0) bad('из камня выпадает бонус — он не должен');
  if (dropOf(gravel) !== gravel) bad('обычный дроп гравия сломан');
  // рецепты
  const { RECIPES_CLEAN, canCraft, craft } = await import('../src/game/craft.js');
  const { Inventory } = await import('../src/game/inventory.js');
  const want = ['Замшелый булыжник', 'Лёд', 'Фонарь', 'Хлеб', 'Компас', 'Часы', 'Ножницы'];
  const found = want.filter((n) => RECIPES_CLEAN.some((r) => r.name === n));
  if (found.length !== want.length) bad(`рецептов нет: ${want.filter((n) => !found.includes(n)).join(', ')} (всего найдено ${found.length})`);
  let done = 0;
  for (const name of found) {
    const r = RECIPES_CLEAN.find((x) => x.name === name);
    if (!r?.need?.length) { bad(`${name}: у рецепта нет ингредиентов после очистки`); continue; }
    const stock = (inv) => { inv.creative = false; for (const nd of r.need) inv.add(nd.id, nd.n + 4); return inv; };
    // без верстака «верстачный» рецепт обязан быть закрыт — иначе 3×3 теряется
    if (r.table && canCraft(r, stock(new Inventory()), false)) { bad(`${name}: крафтится без верстака, хотя размечен table:true`); continue; }
    const inv = stock(new Inventory());
    if (!canCraft(r, inv, true)) { bad(`${name}: нельзя скрафтить из ${r.need.map((nd) => `${BLOCKS[nd.id].key}×${nd.n}`).join(' + ')}`); continue; }
    const before = inv.count(r.outId);
    if (!craft(r, inv) || inv.count(r.outId) <= before) { bad(`${name}: крафт не выдал предмет`); continue; }
    for (const nd of r.need) if (inv.count(nd.id) !== 4) { bad(`${name}: ингредиенты списаны неверно (${nd.id}: ${inv.count(nd.id)})`); break; }
    done++;
  }
  ok(`контент: ${keys.length} новых id, тайлы в атласе (${buildTiles().tiles.length}), еда/свет/инструмент работают, бонусный дроп ${(pf * 100).toFixed(0)}%/${(pa * 100).toFixed(0)}%, скрафчено ${done}/${want.length}`);
}

// ── 9. генерация не съехала: new blocks не лезут в ландшафт (gen.js заморожен)
{
  const { World } = await import('../src/engine/world.js');
  const { BLOCKS, byKey } = await import('../src/engine/blocks.js');
  const w = new World(4242);
  const seen = new Set();
  for (let cz = 0; cz < 4; cz++) for (let cx = 0; cx < 4; cx++) {
    w.ensureChunk(cx, cz);
    const c = w.getChunk(cx, cz);
    if (!c) continue;
    for (const id of c.blocks) if (id) seen.add(id);
  }
  const newIds = ['mossy_cobblestone', 'lantern', 'flint', 'apple', 'bread', 'compass', 'clock', 'shears'].map(byKey);
  const leaked = newIds.filter((id) => seen.has(id));
  if (leaked.length) bad(`в ландшафте появились крафтовые вещи: ${leaked.map((i) => BLOCKS[i].name).join(', ')} — генерация не должна была измениться`);
  else ok('генерация не тронута: 8 новых id в ландшафте не встречаются');
}

// ── 10. вода «ультра» и рука: прозрачность по углу, зеркало неба, якорь на экране
{
  const frag = await read('src/render/voxelMaterial.js');
  const checks = [
    [/float lcAlpha = uAlpha;/.test(frag), 'альфа — локальная, поэтому уровни «выкл/мягкие/красивые» не сдвинулись'],
    [/gl_FragColor = vec4\(col, lcAlpha\);/.test(frag), 'вывод берёт прозрачность из переменной'],
    [/if \(uWave > 0\.5 && uQuality < 2\.5\)/.test(frag), 'подделка отражения уровня 2 уступает «ультре» (два mix друг друга гасят)'],
    [/float facing = clamp\(dot\(V, nw\), 0\.0, 1\.0\)/.test(frag), 'есть угол взгляда — из него и прозрачность, и сила зеркала'],
    [/refl \+= uSunColor \* \(pow\(rs, 420\.0\)/.test(frag), 'солнце в отражении — узким диском, а не размытым пятном'],
    [/textureCube\(uProbe, R\)\.rgb, clamp\(uRefl \* \(1\.0 - up \* 0\.8\)/.test(frag), 'куб-проба мира не размывает отражение неба'],
    [/lcAlpha = mix\(0\.92, mix\(0\.30, 0\.92, clear\), step\(uSea, cameraPosition\.y\)\);/.test(frag), 'взгляд сверху вниз — дно видно; вскользь — зеркало; из-под воды — плотно'],
    [!/gl_FragColor = vec4\(col, uAlpha\);/.test(frag), 'в шейдере не осталось старой константной альфы'],
  ];
  for (const [cond, msg] of checks) cond ? ok(msg) : bad('не так: ' + msg);

  const vmSrc = await read('src/render/viewmodel.js');
  const pairs = [
    [/depthTest: false, depthWrite: false/.test(vmSrc), 'рука не пишет глубину (иначе она пробивает дыру в воде)'],
    [/const light = 0\.46 \+ 0\.54 \* this\.dayLight;/.test(vmSrc), 'ночью блок в руке остаётся читаемым'],
    [/layout\(fov = this\.fov, aspect = this\.aspect\)/.test(vmSrc), 'раскладка руки привязана к экрану, а не к frustum'],
  ];
  for (const [cond, msg] of pairs) cond ? ok(msg) : bad('не так: ' + msg);
  if ((vmSrc.match(/depthTest: false, depthWrite: false/g) || []).length !== 2) bad('depthWrite: false должно быть и у кисти, и у блока');
  else ok('оба материала руки не пишут глубину');

  // ————— числа: раскладка не должна уезжать за экран ни при каком FOV/окне
  const { ViewModel } = await import('../src/render/viewmodel.js');
  const atlas = { texture: null, index: { dirt: 0 }, cell: 32, tile: 16, grid: 16, cracks: [null] };
  const vm = new ViewModel(atlas);
  vm.fov = 0; vm.aspect = 0;
  vm.layout(70, 16 / 9);
  const drift = Math.max(Math.abs(vm.baseBlock.x - 0.34), Math.abs(vm.baseBlock.y + 0.32), Math.abs(vm.blockSize - 0.34));
  if (drift > 0.006) bad(`при FOV 70 и 16:9 рука сдвинулась на ${drift.toFixed(4)} — базовая картинка не должна меняться`);
  else ok('FOV 70 / 16:9 — раскладка совпадает с прежней (0.34, −0.32, 0.34)');
  let out = [];
  for (const fov of [55, 60, 70, 80, 95, 110, 115]) {
    for (const aspect of [0.5, 0.75, 1.0, 1.33, 1.6, 1.78, 2.4, 3.2]) {
      vm.fov = 0; vm.aspect = 0;
      vm.layout(fov, aspect);
      const t = Math.tan((fov * Math.PI) / 180 / 2);
      const hh = t * 0.62, hw = hh * aspect;
      const r = vm.blockSize * 0.78;                  // полуширина повёрнутого куба
      const b = vm.baseBlock;
      if (Math.abs(b.x) + r > hw + 1e-6) out.push(`ширина ${fov}/${aspect}`);
      // вниз блок имеет право свисать (почти на половину), но не больше
      if (!(b.y < 0) || Math.abs(b.y) > hh + vm.blockSize * 0.6) out.push(`высота ${fov}/${aspect}`);
      if (!(vm.blockSize > 0.05 && vm.blockSize < 0.9)) out.push(`размер ${fov}/${aspect}`);
      if (!(vm.baseArm.x > 0 && vm.baseArm.y < 0)) out.push(`кисть ${fov}/${aspect}`);
    }
  }
  if (out.length) bad(`рука уходит за край экрана при FOV/окне: ${out.slice(0, 6).join(', ')}`);
  else ok('56 комбинаций FOV×окно: блок в руке целиком в кадре, кисть там же, где надо');

  // ————— рамка цели не должна висеть над неотрисованным чанком
  const cv = await read('src/render/chunkView.js');
  const main = await read('src/main.js');
  if (!/hasMesh\(cx, cz\) \{ return this\.objects\.has\(ChunkView\.key\(cx, cz\)\); \}/.test(cv)) bad('у ChunkView нет hasMesh(cx, cz)');
  else ok('ChunkView.hasMesh есть');
  if (!/this\.chunkView\.hasMesh\(st\.lastHit\.x >> 4, st\.lastHit\.z >> 4\)/.test(main)) bad('main.js не фильтрует рамку по отрисованным чанкам');
  else ok('рамка выделения показывается только там, где блок уже нарисован');
}

console.log(fail ? `\nЕсть провалы: ${fail}` : '\nрендер и контент в порядке');
process.exit(fail ? 1 : 0);
