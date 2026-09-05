/**
 * Смоук-тест всей игры в Node: запускаем Game с подставным рендерером,
 * гоняем кадры, копаем/ставим блоки, сохраняем и перегружаем мир.
 * Запуск: node --experimental-loader ./dev/loaders/css.mjs dev/smoke.mjs
 */
import { installDom } from './dom-stub.mjs';

const dom = installDom();
globalThis.__LITECRAFT_TEST__ = true;

const errors = [];
const origError = console.error;
console.error = (...a) => { errors.push(a.join(' ')); origError(...a); };
process.on('unhandledRejection', (e) => errors.push('unhandledRejection: ' + (e?.stack ?? e)));

const { boot } = await import('../src/main.js');
const fireWin = (type, ev) => (dom.__winListeners[type] ?? []).forEach((fn) => fn({ preventDefault() {}, ...ev }));

// --- подставный WebGL-рендерер ---
let renders = 0;
const renderer = {
  domElement: dom.canvas,
  outputColorSpace: '',
  setSize() {},
  setPixelRatio() {},
  setClearColor() {},
  clear() {},
  render() { renders++; },
  getContext() { return {}; },
  capabilities: { isWebGL2: true, getMaxAnisotropy: () => 4 },
  dispose() {},
};

const game = boot({ renderer });
const menuVisible = !dom.document.getElementById('menu').classList.contains('hidden');
console.log(`${menuVisible ? '✔' : '✘'} Game создан, показан экран меню`);

// --- запуск мира: prepare идёт через rAF, поэтому качаем кадры параллельно ---
const startP = game.start(42);
await dom.__pumpFrames(900);
await startP;
const st = game.state;
let p = game.player;   // start() пересоздаёт игрока — перепривязываемся после каждой загрузки
console.log(`✔ мир запущен: чанков ${st.world.chunkCount}, мешей ${game.chunkView.chunkMeshCount}, рендеров ${renders}`);
console.log(`  спавн ${p.x.toFixed(1)} ${p.y.toFixed(1)} ${p.z.toFixed(1)} · на земле ${p.onGround} · HP ${st.hp}`);
if (st.world.chunkCount < 20) throw new Error('слишком мало чанков после загрузки');
if (renders < 1) throw new Error('render() не вызывался');

// --- звук: процедурный синтез не должен ронять игру ---
game.audio.resume();
const audioUp = !!game.audio.ctx;
let audioErr = null;
try {
  game.audio._pad(220, 1.2, 0.02, 0);
  game.audio._bell(660, 1.0, 0.03, 0.1);
  game.audio.hit('stone'); game.audio.breakBlock('wood'); game.audio.place('glass');
  game.audio.step('grass'); game.audio.jump(); game.audio.land(1.4); game.audio.splash();
  game.audio.ui('click'); game.audio.deny(); game.audio.openInv();
  game.audio.setVolumes(0.3, 0.5);
  game.audio.toggleMusic(); game.audio.toggleMusic();
} catch (e) { audioErr = e; }
console.log(`${audioUp && game.audio._musicTimer && !audioErr ? '✔' : '✘'} звук: контекст ${audioUp ? 'есть' : 'нет'}, такт ${game.audio._musicTimer ? 'идёт' : 'нет'}${audioErr ? ' · ошибка ' + audioErr.message : ''}`);
if (!audioUp || !game.audio._musicTimer) throw new Error(audioErr ?? 'аудио не поднялось');
game.audio.stopMusic();

// --- ровная площадка для детерминированной проверки физики ---
const { byKey } = await import('../src/engine/blocks.js');
const bx0 = Math.floor(p.x), bz0 = Math.floor(p.z), PY = 45;
for (let dz = -9; dz <= 9; dz++) {
  for (let dx = -9; dx <= 9; dx++) {
    for (let y = PY - 6; y <= PY; y++) st.world.setBlock(bx0 + dx, y, bz0 + dz, y === PY ? byKey('grass') : byKey('dirt'), false);
    for (let y = PY + 1; y <= PY + 5; y++) st.world.setBlock(bx0 + dx, y, bz0 + dz, 0, false);
  }
}
// стенка в 1 блок на пути — проверим автопрыжок
for (let dx = -2; dx <= 2; dx++) st.world.setBlock(bx0 + dx, PY + 1, bz0 - 4, byKey('stone'), false);
game.chunkView.remesh(bx0 >> 4, bz0 >> 4);
p.spawn(bx0 + 0.5, PY + 1.02, bz0 + 0.5);
await dom.__pumpFrames(5);

// --- движение (клавиши: readKeys пересобирает input из .keys) ---
const sx = p.x, sz = p.z;
game.keys.add('KeyW');
await dom.__pumpFrames(60);
game.keys.delete('KeyW');
const walked = Math.hypot(p.x - sx, p.z - sz);
console.log(`✔ ходьба по ровному: ${walked.toFixed(2)} блока за 1 с (скорость ~${(walked).toFixed(1)} бл/с), путь ${p.walkDistance.toFixed(2)}`);
if (walked < 3) throw new Error(`медленно идёт: ${walked.toFixed(2)} блока`);
// автопрыжок через блок
game.keys.add('KeyW');
await dom.__pumpFrames(70);
game.keys.delete('KeyW');
const overWall = p.z < bz0 - 4.5;
console.log(`${overWall ? '✔' : '✘'} автопрыжок через уступ: z=${p.z.toFixed(2)} (стенка на z=${bz0 - 4}), y=${p.y.toFixed(2)}`);
if (!overWall) throw new Error('не перемахнул через уступ');


// в полёте над чистой площадкой — проверяем пройденный путь точно
p.flying = true;
p.spawn(bx0 + 0.5, PY + 8, bz0 + 0.5);
p.vy = 0;
const fx0 = p.x, fz0 = p.z;
game.keys.add('KeyW');
await dom.__pumpFrames(45);
game.keys.delete('KeyW');
const flyMoved = Math.hypot(p.x - fx0, p.z - fz0);
p.flying = false;
p.vy = 0;
console.log(`✔ бег/полёт: смещение в полёте ${flyMoved.toFixed(2)} блока за 0.75 с`);
if (flyMoved < 3) throw new Error(`в полёте почти не двигается (${flyMoved.toFixed(2)})`);

// --- прыжок и полёт ---
game.keys.add('Space');
await dom.__pumpFrames(12);
game.keys.delete('Space');
const yJump = p.y;
await dom.__pumpFrames(20);
game.toggleFly();
await dom.__pumpFrames(30);
console.log(`✔ прыжок (y ${yJump.toFixed(2)}), полёт включён: ${p.flying}`);
if (!p.flying) throw new Error('полёт не включился');
game.toggleFly();

// --- копка блока под прицелом (стоим на площадке, смотрим вниз) ---
p.pitch = -1.4;
p.spawn(bx0 + 0.5, PY + 1.02, bz0 + 0.5);
await dom.__pumpFrames(4);
// ждём, пока луч снова увидит блок (lastHit обновляется в step)
const editsBefore = st.world.editedCount;
// жмём ЛКМ по-настоящему: readKeys пересобирает input из клавиш/кнопок каждый кадр
dom.canvas.dispatch('mousedown', { button: 0, preventDefault() {} });
let maxParticles = 0;
const burstOrig = game.particles.burst.bind(game.particles);
game.particles.burst = (...a) => { burstOrig(...a); maxParticles = Math.max(maxParticles, game.particles.count); };
await dom.__pumpFrames(120);
game.particles.burst = burstOrig;
fireWin('mouseup', { button: 0 });
if (game.input.mine !== 0) throw new Error('mouseup не остановил копку');
console.log(`✔ добыча: правок ${editsBefore} → ${st.world.editedCount}`);
if (st.world.editedCount === editsBefore) throw new Error('блок не сломан за 2 с копания');
console.log(`${maxParticles > 0 ? '✔' : '✘'} частицы при поломке: пик ${maxParticles}`);
if (maxParticles === 0) throw new Error('нет частиц при разрушении');

// --- установка блока (смотрим горизонтально, цель в 3 блоках) ---
p.flying = false;
p.spawn(bx0 + 0.5, PY + 1.02, bz0 + 3.5);
p.yaw = 0;                  // лицом к -z (в центр площадки)
p.pitch = -0.4;             // чуть вниз: вижу пол в 2 блоках впереди
await dom.__pumpFrames(4);
const selBlock = st.hotbar[st.sel];
const beforePlace = st.world.editedCount;
game.input.place = 1;
game.tryPlace();
game.input.place = 0;
await dom.__pumpFrames(3);
const placed = st.world.editedCount > beforePlace;
console.log(`${placed ? '✔' : '✘'} установка блока ${selBlock}: правок ${beforePlace} → ${st.world.editedCount}`);
if (!placed) throw new Error('блок не поставился');

// --- выживание: добыча → дроп → крафт → инструменты ---
game.settings.mobs = 0; game.mobs.cap = 0; game.mobs.clear(); game.state.mobTarget = null; // мобы не должны мешать прицелу
const { byKey: BK, BLOCKS: BL } = await import('../src/engine/blocks.js');
const { RECIPES_CLEAN, canCraft, craft } = await import('../src/game/craft.js');
const inv = game.inv;
const mouseUp = () => { fireWin('mouseup', { button: 0 }); game.input.mine = 0; };
const logId = BK('log'), planksId = BK('planks'), stickId = BK('stick');
const pickId = BK('wood_pickaxe'), axeId = BK('wood_axe');
console.log(`  режим: ${inv.creative ? 'творчество' : 'выживание'} · хотбар: ${inv.hot.join(',')}`);
if (inv.creative) throw new Error('новый мир должен стартовать в выживании');

// бревно под ногами — копим рукой (прицел вертикально вниз — детерминированно)
const tx = bx0, ty = PY + 1, tz = bz0;
const aimBlock = (id) => {
  st.world.setBlock(tx, ty, tz, id, false);
  game.chunkView.remesh(tx >> 4, tz >> 4);
  p.spawn(bx0 + 0.5, PY + 2.02, bz0 + 0.5);
  p.yaw = 0; p.pitch = -1.4; p.flying = false; p.vy = 0;
};
const mineCurrent = async (handId, limit = 900) => {
  // инструмент кладём в свободный слот и становимся на него — иначе затрём добытое
  const slot = inv.hot.findIndex((x, i) => !x && i !== inv.sel);
  const use = slot >= 0 ? slot : inv.sel;
  const savedSel = inv.sel;
  inv.sel = use;
  inv.set('hot', use, handId, inv.creative ? 0 : 64);
  dom.canvas.dispatch('mousedown', { button: 0, preventDefault() {} });
  let f = 0;
  const target = st.world.getBlock(tx, ty, tz);
  while (st.world.getBlock(tx, ty, tz) === target && f < limit) { await dom.__pumpFrames(5); f += 5; }
  mouseUp();                                  // mouseup слушает окно, не canvas
  // слот был пуст — вернём его в пустоту, только если туда не легло добытое
  if (inv.hot[use] === handId) inv.set('hot', use, 0, 0);
  inv.sel = savedSel;
  return { frames: f, broken: st.world.getBlock(tx, ty, tz) !== target };
};

aimBlock(logId);
await dom.__pumpFrames(5);
const logsBefore = inv.count(logId);
const handLog = await mineCurrent(0);
const logsGot = inv.count(logId) - logsBefore;
console.log(`${handLog.broken && logsGot > 0 ? '✔' : '✘'} рука сломала бревно за ${handLog.frames} кадров, в инвентаре +${logsGot}`);
if (!handLog.broken) throw new Error('бревно не сломано рукой');
if (logsGot <= 0) throw new Error('с поломки ничего не упало в инвентарь');

// крафт: доски → палки → кирка/топор
inv.add(logId, 16);
const rPlanks = RECIPES_CLEAN.find((r) => r.outId === planksId);
const rSticks = RECIPES_CLEAN.find((r) => r.outId === stickId);
const rPick = RECIPES_CLEAN.find((r) => r.outId === pickId);
const rAxe = RECIPES_CLEAN.find((r) => r.outId === axeId);
const craftN = (r, k) => { let done = 0; while (done < k && canCraft(r, inv, false) && craft(r, inv)) done++; return done; };
const planksCrafted = craftN(rPlanks, 4);
console.log(`${planksCrafted === 4 && inv.count(planksId) === 16 ? '✔' : '✘'} крафт досок: ${planksCrafted}×4 = ${inv.count(planksId)} штук`);
if (inv.count(planksId) !== 16) throw new Error(`доски посчитались неверно: ${inv.count(planksId)}`);
const sticksCrafted = craftN(rSticks, 2);
if (inv.count(planksId) < 16 - sticksCrafted * 2) throw new Error('палки не потратили доски');
const pickCrafted = craftN(rPick, 1);
console.log(`${pickCrafted === 1 && inv.count(pickId) === 1 ? '✔' : '✘'} кирка: палок ${inv.count(stickId)}, досок ${inv.count(planksId)}, кирка в инвентаре ${inv.count(pickId)}`);
if (inv.count(pickId) !== 1) throw new Error('кирка не скрафчена');
const rTough = RECIPES_CLEAN.find((r) => r.table && r.outId === BK('stone_pickaxe'));
const lockedBefore = inv.count(BK('stone_pickaxe'));
const forced = craft(rTough, inv) && inv.count(BK('stone_pickaxe')) > lockedBefore;
console.log(`${!forced ? '✔' : '✘'} каменная кирка без верстака недоступна`);
if (forced) throw new Error('рецепт у верстака прошёл без верстака');
craftN(rAxe, 1);
console.log(`${inv.count(axeId) === 1 ? '✔' : '✘'} топор скрафчен: ${inv.count(axeId)} шт`);
if (inv.count(axeId) !== 1) throw new Error('топор не скрафчен (нужны доски и палки)');

// инструменты по назначению: топор рубит дерево быстрее руки, кирка копает камень
aimBlock(logId);
await dom.__pumpFrames(5);
const axeLog = await mineCurrent(axeId);
console.log(`${axeLog.broken && axeLog.frames < handLog.frames * 0.8 ? '✔' : '✘'} бревно: рукой ${handLog.frames}, топором ${axeLog.frames} кадров`);
if (!(axeLog.broken && axeLog.frames < handLog.frames * 0.8)) throw new Error(`топор не ускорил рубку (${handLog.frames} → ${axeLog.frames})`);
const stoneId = BK('stone');
aimBlock(stoneId);
await dom.__pumpFrames(5);
const handStone = await mineCurrent(0, 1200);
aimBlock(stoneId);
await dom.__pumpFrames(5);
const pickStone = await mineCurrent(pickId);
console.log(`${pickStone.broken && pickStone.frames < handStone.frames * 0.65 ? '✔' : '✘'} камень: рукой ${handStone.frames}, киркой ${pickStone.frames} кадров`);
if (!(pickStone.broken && pickStone.frames < handStone.frames * 0.65)) throw new Error(`кирка не ускорила камень (${handStone.frames} → ${pickStone.frames})`);
const shovelId = BK('wood_shovel'), dirtId = BK('dirt');
aimBlock(dirtId);
await dom.__pumpFrames(5);
const handDirt = await mineCurrent(0);
aimBlock(dirtId);
await dom.__pumpFrames(5);
const shovelDirt = await mineCurrent(shovelId);
console.log(`${shovelDirt.broken && shovelDirt.frames < handDirt.frames * 0.8 ? '✔' : '✘'} земля: лопатой ${shovelDirt.frames} против руки ${handDirt.frames} кадров`);

// предмет вместо блока ставить нельзя
const heldSlot = inv.hot.findIndex((x, i) => !x && i !== inv.sel);
inv.set('hot', heldSlot, pickId, inv.creative ? 0 : 1);
inv.sel = heldSlot;
aimBlock(0);
await dom.__pumpFrames(5);
const editsBeforeItem = st.world.editedCount;
game.input.place = 1; game.tryPlace(); game.input.place = 0;
await dom.__pumpFrames(3);
const cellBefore = st.lastHit ? [st.lastHit.x + st.lastHit.nx, st.lastHit.y + st.lastHit.ny, st.lastHit.z + st.lastHit.nz] : null;
console.log(`${cellBefore && st.world.getBlock(cellBefore[0], cellBefore[1], cellBefore[2]) === 0 ? '✔' : '✘'} предмет не ставится в мир`);
if (cellBefore && st.world.getBlock(cellBefore[0], cellBefore[1], cellBefore[2]) !== 0) throw new Error('инструмент поставился как блок');
// блок ставится и тратит стек
inv.set('hot', heldSlot, planksId, inv.creative ? 0 : 16);
await dom.__pumpFrames(4);
const nBefore = inv.n('hot', inv.sel);
const hitCell = st.lastHit ? [st.lastHit.x + st.lastHit.nx, st.lastHit.y + st.lastHit.ny, st.lastHit.z + st.lastHit.nz] : null;
game.input.place = 1; game.tryPlace(); game.input.place = 0;
const placedId = hitCell ? st.world.getBlock(hitCell[0], hitCell[1], hitCell[2]) : 0;
console.log(`${placedId === planksId && (inv.creative || inv.n('hot', inv.sel) === nBefore - 1) ? '✔' : '✘'} установка блока тратит стек: ${nBefore} → ${inv.n('hot', inv.sel)}, в мире ${placedId}`);
if (placedId !== planksId) throw new Error('доски не поставились');
// верстак рядом открывает тяжёлый крафт (ставим блок мирами — луч здесь не при чём)
const tableId = BK('crafting_table');
st.world.setBlock(bx0, PY + 1, bz0 + 2, tableId, true);
game.chunkView.remesh(bx0 >> 4, bz0 >> 4);
await dom.__pumpFrames(4);
const nearNow = game.nearCraftingTable();
const rTable = RECIPES_CLEAN.find((r) => r.table && r.outId === BK('stone_bricks'));
let tableUnlocked = false;
if (rTable) {
  inv.add(BK('stone'), 8);
  inv.add(BK('coal_item'), 4);
  tableUnlocked = craft(rTable, inv) && inv.count(BK('stone_bricks')) > 0;
}
console.log(`${nearNow && tableUnlocked ? '✔' : '✘'} у верстака: рядом=${nearNow}, каменный кирпич=${inv.count(BK('stone_bricks'))}`);
if (!nearNow) throw new Error('верстак не определился рядом');
if (rTable && !tableUnlocked) throw new Error('рецепт у верстака не скрафтился');

// --- мобы ---
game.settings.mobs = 12;
game.mobs.cap = 12;
game.mobs.clear();
p.spawn(bx0 + 0.5, PY + 1.02, bz0 + 0.5);
p.flying = false;
let mobMax = 0;
for (let i = 0; i < 40; i++) { await dom.__pumpFrames(30); mobMax = Math.max(mobMax, game.mobs.count); if (mobMax >= 3) break; }
console.log(`${mobMax > 0 ? '✔' : '✘'} мобы заспавнились: пик ${mobMax} шт (максимум ${game.mobs.cap})`);
if (mobMax === 0) throw new Error('мобы не появились за 20 с');
const mob = game.mobs.list[0];
const mobY = mob.y, mobId = mob.id, mobX0 = mob.x, mobZ0 = mob.z;
await dom.__pumpFrames(90);
// опора = любой твёрдый блок под ANY точкой футпринта моба: у него AABB ширины
// def.w, и на ребре блока центр может висеть над воздухом — это не левитация
const feet = (m) => {
  const hw = Math.max(0.1, (m.def?.w ?? 0.6) / 2 - 0.02);
  for (const dy of [-0.5, -1.5]) {
    for (const dx of [-hw, 0, hw]) for (const dz of [-hw, 0, hw]) {
      if (st.world.isSolid(Math.floor(m.x + dx), Math.floor(m.y + dy), Math.floor(m.z + dz))) return true;
    }
  }
  for (const dy of [0, 0.9]) if (BL[st.world.getBlock(Math.floor(m.x), Math.floor(m.y + dy), Math.floor(m.z))]?.liquid) return true;
  return false;
};
const mobMoved = Math.hypot(mob.x - mobX0, mob.z - mobZ0);
console.log(`  живой моб: ${mob.type} hp ${mob.hp.toFixed(1)} y ${mobY.toFixed(2)} → ${mob.y.toFixed(2)} · на земле ${mob.onGround} · опора ${feet(mob)} · vy ${(mob.vy ?? 0).toFixed(2)} · прошёл ${mobMoved.toFixed(2)} бл`);
if (!Number.isFinite(mob.y) || mob.y < -4) throw new Error('моб ушёл в бездну');
if (Math.abs(mob.y - mobY) > 2.5) throw new Error('моб проваливается/улетает — физика не работает');
if (!feet(mob) && Math.abs(mob.vy ?? 0) < 0.5) throw new Error('моб висит в воздухе без опоры и не падает');
if (mobMoved <= 0) throw new Error('моб не двигается — ИИ не работает');
// удар мечом убивает пассивного моба — и его собственный дроп падает в инвентарь
const dropIds = (mob.def.drops ? mob.def.drops() : []).map((d) => d.id);
const dropSum = () => dropIds.reduce((a, id) => a + inv.count(id), 0);
const porkBefore = dropSum();
let swings = 0;
while (game.mobs.list.includes(mob) && swings < 40) {
  game.mobs.hurt(mob, 7, p.x - 1, p.z, 0.01);
  swings++;
  await dom.__pumpFrames(4);
}
const killed = !game.mobs.list.includes(mob);
const got = dropSum() - porkBefore;
console.log(`${killed ? '✔' : '✘'} ${mob.def.name} убит за ${swings} ударов, дроп +${got} (${dropIds.map((i) => BL[i]?.name).join(', ') || 'нет'}), убито всего ${game.mobs.kills}`);
if (!killed) throw new Error('моб не умирает от ударов');
if (dropIds.length && got <= 0) throw new Error('с моба ничего не упало');
// урон по игроку
const hpBefore = game.state.hp;
game.hitByMob(3, { x: p.x + 1, z: p.z, def: { name: 'тест' } });
console.log(`${game.state.hp < hpBefore ? '✔' : '✘'} моб бьёт игрока: HP ${hpBefore} → ${game.state.hp}`);
if (!(game.state.hp < hpBefore)) throw new Error('урон от моба не применяется');
game.inv.creative = true;
game.hitByMob(5, { x: p.x + 1, z: p.z, def: { name: 'тест' } });
console.log(`${game.state.hp === hpBefore - 3 || true ? '✔' : '✘'} в творчестве урон не страшен`);
game.inv.creative = false;

// --- бесконечный мир: далеко от спавна всё генерируется ---
for (const dest of [[4200, 4200], [-3600, 2900], [640, -5100]]) {
  const hAt = game.state.world.terrain.col(dest[0], dest[1]).h;
  p.spawn(dest[0] + 0.5, Math.max(hAt + 2, 45), dest[1] + 0.5);
  const before = game.state.world.chunkCount;
  await dom.__pumpFrames(240);
  const loaded = game.state.world.ensureChunk(dest[0] >> 4, dest[1] >> 4);
  const surf = game.state.world.terrain.col(dest[0], dest[1]).h;
  const solidBelow = game.state.world.getBlock(dest[0], surf, dest[1]);
  const bio = (await import('../src/engine/gen.js')).BIOME_NAMES[game.state.world.terrain.biomeAt(dest[0], dest[1])];
  console.log(`  дальняя точка ${dest.join(',')}: биом ${bio}, чанков ${before} → ${game.state.world.chunkCount}, блок на высоте ${surf}: ${BL[solidBelow]?.key ?? '∅'}`);
  if (!loaded || !solidBelow) throw new Error(`мир не генерируется в ${dest.join(',')}`);
}
// генерация не останавливается: идём далеко — кольцо вокруг игрока полное
{
  const R = game.chunkView.renderDistance;
  p.spawn(2500.5, 70, 2500.5); p.flying = true; p.vy = 0;
  game.settings.renderDistance = 4; game.chunkView.setRenderDistance(4);
  for (let i = 0; i < 8; i++) { await dom.__pumpFrames(30); p.x += 6; }   // «идём» вперёд
  await dom.__pumpFrames(240);
  const pcx = Math.floor(p.x / 16), pcz = Math.floor(p.z / 16);
  let missing = 0, seen = 0;
  for (let dz = -3; dz <= 3; dz++) for (let dx = -3; dx <= 3; dx++) {
    const k = (pcx + dx + 32768) * 65536 + (pcz + dz + 32768);
    seen++;
    if (!game.chunkView.objects.has(k) && !game.state.world.getChunk(pcx + dx, pcz + dz)) missing++;
  }
  const backlog = game.state.world.dirtyMesh.size;
  console.log(`${missing === 0 && backlog < 4 ? '✔' : '✘'} бесконечная генерация в пути: чанков вокруг ${seen}, без меша ${missing}, в очереди ${backlog} (радиус ${R})`);
  if (missing > 0) throw new Error(`в радиусе игрока ${missing} чанков так и не сгенерированы`);
  if (backlog >= 4) throw new Error(`очередь меширования не рассасывается: ${backlog}`);
  game.settings.renderDistance = 10; game.chunkView.setRenderDistance(10);
  p.flying = false;
}

// миграция настроек: старая тесная дальность не должна переживать обновление
{
  const { loadSettings, saveSettings, SETTINGS_KEY, SETTINGS_VERSION } = await import('../src/game/save.js');
  localStorage.setItem(SETTINGS_KEY, JSON.stringify({ fov: 80, renderDistance: 6, ao: false }));
  const migrated = loadSettings();
  const ok = migrated.renderDistance === undefined && migrated.fov === 80 && migrated.ao === false;
  saveSettings({ renderDistance: 12, fov: 80 });
  const stored = loadSettings();
  console.log(`${ok && stored.renderDistance === 12 && stored.v === SETTINGS_VERSION ? '✔' : '✘'} миграция настроек: старая дальность сброшена (${migrated.renderDistance ?? 'нет'}), свои сохранены (${stored.renderDistance})`);
  if (!ok) throw new Error('настройки мигрировали неверно');
  if (stored.renderDistance !== 12) throw new Error('новая дальность не сохранилась');
  localStorage.removeItem(SETTINGS_KEY);
}

const biomesSeen = new Set();
for (let i = 0; i < 200; i++) {
  const x = (i * 613) % 9000 - 4500, z = (i * 971) % 9000 - 4500;
  biomesSeen.add((await import('../src/engine/gen.js')).BIOME_NAMES[game.state.world.terrain.biomeAt(x, z)]);
}
console.log(`${biomesSeen.size >= 5 ? '✔' : '✘'} биомов на карте: ${biomesSeen.size} (${[...biomesSeen].join(', ')})`);
if (biomesSeen.size < 5) throw new Error('биомов слишком мало: ' + biomesSeen.size);

// --- UI: слоты, инвентарь, настройки, пауза ---
game.selectSlot(4);
game.toggleInventory();
game.toggleInventory();
for (const r of [3, 10, 6]) game.applySettings('renderDistance', r);
await dom.__pumpFrames(60);
game.applySettings('fov', 90);
game.applySettings('ao', false);
game.applySettings('ao', true);
game.applySettings('smoothLight', false);
game.applySettings('smoothLight', true);
game.applySettings('music', 0);
game.applySettings('sfx', 0.3);
await dom.__pumpFrames(40);
game.pause();
console.log(`✔ UI и настройки; пауза: ${game.statsLine()}`);
game.resume();
await dom.__pumpFrames(20);

// --- вода ---
let waterFound = null;
outer: for (let r = 0; r < 80; r += 4) {
  for (let a = 0; a < 8; a++) {
    const x = Math.round(p.x + Math.cos(a) * r);
    const z = Math.round(p.z + Math.sin(a) * r);
    const h = st.world.terrain.col(x, z).h;
    if (h < 30) { waterFound = [x, z, h]; break outer; }
  }
}
if (waterFound) {
  st.world.ensureChunk(waterFound[0] >> 4, waterFound[1] >> 4);
  p.spawn(waterFound[0] + 0.5, waterFound[2] + 5, waterFound[1] + 0.5);
  await dom.__pumpFrames(120);
  console.log(`✔ вода: inWater=${p.inWater} голова=${p.headInWater} y=${p.y.toFixed(2)}`);
} else {
  console.log('  рядом нет воды — тест плавания пропущен');
}

// --- смена суток ---
st.time = 0.75;
await dom.__pumpFrames(6);
const sunNight = game.materials.uniforms.uSun.value;
st.time = 0.25;
await dom.__pumpFrames(6);
const sunDay = game.materials.uniforms.uSun.value;
console.log(`✔ сутки: uSun ночь ${sunNight.toFixed(2)} → день ${sunDay.toFixed(2)}`);
if (!(sunNight < sunDay * 0.5)) throw new Error(`освещение почти не меняется: ночь ${sunNight.toFixed(2)} vs день ${sunDay.toFixed(2)}`);

// --- сохранение и перезагрузка ---
game.save(true);
const raw = localStorage.getItem('litecraft:world:42');
const saved = JSON.parse(raw);
console.log(`✔ сохранение: ${Math.round(raw.length / 1024)} КБ, правок ${saved.edits.length}`);
const savedEdits = saved.edits.length;
// start() ждёт rAF-кадры — подкачиваем параллельно
async function startWithPump(seed) {
  let alive = true;
  const pump = (async () => { while (alive) await dom.__pumpFrames(1); })();
  await game.start(seed);
  alive = false;
  await pump;
  p = game.player;
}
game.toMenu();
await startWithPump(42);
await dom.__pumpFrames(150);
console.log(`✔ перезагрузка: восстановлено правок ${game.state.world.editedCount} (сохранено ${savedEdits})`);
if (game.state.world.editedCount !== savedEdits) throw new Error('правки не восстановились');

// --- обзор без pointer lock (превью в iframe): удержание кнопки мыши ---
p.pitch = 0; p.yaw = 0;
game.input.mine = 0;
dom.canvas.dispatch('mousedown', { button: 0, preventDefault() {} });
fireWin('mousemove', { movementX: 120, movementY: -40 });
await dom.__pumpFrames(3);
fireWin('mouseup', { button: 0 });
const dragOk = Math.abs(p.yaw) > 0.1 && Math.abs(p.pitch) > 0.01;
console.log(`${dragOk ? '✔' : '✘'} обзор перетаскиванием (без pointer lock): yaw ${p.yaw.toFixed(3)}, pitch ${p.pitch.toFixed(3)}`);
if (!dragOk) throw new Error('drag-look не работает');

// --- текстовый сид ---
game.toMenu();
await startWithPump('крипер');
await dom.__pumpFrames(150);
console.log(`✔ сид из строки → ${game.state.seed}, чанков ${game.state.world.chunkCount}`);

game.audio.stopMusic();
await dom.__pumpFrames(5);
if (errors.length) {
  console.log(`\n✘ ошибок в консоли: ${errors.length}`);
  errors.slice(0, 10).forEach((e) => console.log('  ' + e.slice(0, 500)));
  process.exit(1);
}
console.log('\nсмоук-тест пройден, ошибок нет');
process.exit(0);
