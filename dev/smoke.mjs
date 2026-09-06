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

// --- прыжок и полёт: полёт — только в творчестве ---
game.keys.add('Space');
await dom.__pumpFrames(12);
game.keys.delete('Space');
const yJump = p.y;
await dom.__pumpFrames(20);
// режим трогаем напрямую (setCreative добирает хотбар и сломал бы дальнейшие проверки)
const wasCreative = game.inv.creative;
game.inv.creative = false;
game.toggleFly();
await dom.__pumpFrames(4);
console.log(`${!p.flying ? '✔' : '✘'} в выживании полёт запрещён (flying=${p.flying})`);
if (p.flying) throw new Error('в выживании включился полёт');
game.inv.creative = true;
game.toggleFly();
await dom.__pumpFrames(30);
console.log(`✔ прыжок (y ${yJump.toFixed(2)}), в творчестве полёт включён: ${p.flying}`);
if (!p.flying) throw new Error('в творчестве полёт не включился');
game.toggleFly();

// автоповтор зажатой клавиши не должен переключать полёт и плодить тосты:
// ровно так рождался «дождь» из 12 сообщений «Полёт: вкл/выкл» на скриншоте
game.inv.creative = true;
game.keys.clear();
game.keys.add('KeyW');
const toastBox = game.hud.el.toasts;
while (toastBox.children.length) toastBox.removeChild(toastBox.children[0]);   // мешают старые сообщения
const key = (code, repeat) => ({ code, repeat, target: null, preventDefault() {}, stopPropagation() {} });
for (let i = 0; i < 40; i++) game.onKey(key('Space', true), true);
game.onKey(key('KeyW', true), true);
await dom.__pumpFrames(2);
const wHeld = game.keys.has('KeyW');
game.keys.delete('KeyW');   // иначе игрок поедет вперёд и следующие проверки промахнутся
const spam = toastBox.children.length;
// но обычное двойное нажатие без повтора обязано работать как раньше
game.onKey(key('Space', false), true);
game.onKey(key('Space', false), true);
const dblWorks = p.flying === true;
game.onKey(key('Space', false), false);   // отпускаем: иначе игрок продолжит прыгать и следующие проверки поплывут
game.toggleFly();
while (toastBox.children.length) toastBox.removeChild(toastBox.children[0]);
console.log(`${!p.flying && spam === 0 && wHeld && dblWorks ? '✔' : '✘'} автоповтор Space игнорируется (новых тостов ${spam}), двойное нажатие работает: ${dblWorks}, удержанная W в keys: ${wHeld}`);
if (p.flying) throw new Error('автоповтор клавиши включил полёт');
if (spam > 0) throw new Error(`автоповтор наплодал тостов: ${spam}`);
if (!dblWorks) throw new Error('двойное нажатие Space перестало включать полёт');
if (!wHeld) throw new Error('защита от автоповора выкидывает удерживаемые клавиши движения');
if (spam > 1) throw new Error(`автоповтор наплодил тостов: ${spam}`);
// одинаковые сообщения не стакаются, а разные не занимают больше 6 мест
for (let i = 0; i < 12; i++) game.hud.toast('Полёт: вкл');
const same = toastBox.children.filter((c) => c.__toastKey === 'Полёт: вкл').length;
for (let i = 0; i < 12; i++) game.hud.toast(`уникальное ${i}`);
const total = toastBox.children.length;
console.log(`${same === 1 && total <= 6 ? '✔' : '✘'} тосты: дубль показан ${same} раз, всего в стопке ${total}`);
if (same !== 1) throw new Error('одинаковые тосты стакаются в стопку');
if (total > 6) throw new Error(`стопка тостов не ограничена: ${total}`);
game.inv.creative = wasCreative;

// --- урон от падения: больно, но с обычной горы не смертельно ---
{
  const gy = Math.floor(p.y);
  const hp0 = game.state.hp;
  const dropFrom = (h) => {
    game.state.hp = 20;
    p.flying = false; p.vy = 0; p.fallDamage = 0;
    p.spawn(p.x + 0.5 > Math.floor(p.x) + 0.5 ? p.x : p.x, gy + h, p.z);
    p._airMax = null; p.fallStart = null; p.onGround = false;
    for (let i = 0; i < 400; i++) { p.update(1 / 60, { forward: 0, back: 0, left: 0, right: 0, jump: 0, sneak: 0, sprint: 0 }); if (p.fallDamage > 0.001) break; }
    const d = p.fallDamage; p.fallDamage = 0;
    return Math.floor(d);   // именно столько снимает игра: main.js берёт целые HP
  };
  const dSmall = dropFrom(3);      // спрыгнул с уступа
  const dMid = dropFrom(20);       // вылетел из дупла дерева
  const dBig = dropFrom(40);       // сорвался с горы
  console.log(`${dSmall === 0 && dMid > 0 && dMid <= 9 && dBig >= 10 && dBig < 20 ? '✔' : '✘'} падение: 3 бл → ${dSmall} HP, 20 бл → ${dMid} HP, 40 бл → ${dBig} HP (старая формула: 20 бл = 16 HP, 25 бл = смерть)`);
  if (dSmall !== 0) throw new Error(`безобидный спрыг даёт урон ${dSmall}`);
  if (!(dMid > 0 && dMid <= 9)) throw new Error(`падение с 20 блоков: ${dMid} HP — должно быть больно, но живым`);
  if (!(dBig >= 10 && dBig < 20)) throw new Error(`падение с 40 блоков: ${dBig} HP — должно оставлять шанс выжить`);
  game.state.hp = hp0;
  game.hud.setHealth(hp0);
}

// --- режим нового мира: переключатель в меню → settings → инвентарь ---
{
  const wasSettings = game.settings.creative;
  game.menuMode = 'creative';
  game.applyMenuMode();
  const on = !!game.settings.creative;
  const invCreative = (() => { game.setupInventory(undefined, null); return game.inv.creative; })();
  // а существующий мир живёт своим режимом — сохранённым
  game.setupInventory(false, null);
  const savedKeeps = game.inv.creative === false;
  console.log(`${on && invCreative && savedKeeps ? '✔' : '✘'} режим из меню доходит до мира, сохранённый не перетирается`);
  if (!on) throw new Error('переключатель режима не пишет в settings');
  if (!invCreative) throw new Error('новый мир не перешёл в творчество');
  if (!savedKeeps) throw new Error('режим из сохранения перетирается настройкой');
  game.settings.creative = wasSettings;
  game.setupInventory(wasSettings, null);
  game.menuMode = wasSettings ? 'creative' : 'survival';
}

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
// в выбранном слоте обязан быть ставящийся блок: добыча могла принести предмет (уголь)
{
  const { byKey: BK0 } = await import('../src/engine/blocks.js');
  const cur = st.hotbar[st.sel];
  if (!cur || cur === BK0('coal_item') || cur === BK0('pork') || cur === BK0('leather')) st.hotbar[st.sel] = BK0('cobblestone');
}
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
const hpCreative = game.state.hp;
game.hitByMob(5, { x: p.x + 1, z: p.z, def: { name: 'тест' } });
console.log(`${game.state.hp === hpCreative ? '✔' : '✘'} в творчестве урон не страшен: HP ${hpCreative} → ${game.state.hp}`);
if (game.state.hp !== hpCreative) throw new Error('в творчестве моб всё-таки снимает здоровье');
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
    if (!game.chunkView.objects.has(k)) missing++;   // строго: без правок блок должен быть ВИДЕН
  }
  const backlog = game.state.world.dirtyMesh.size;
  console.log(`${missing === 0 && backlog < 4 ? '✔' : '✘'} бесконечная генерация в пути: чанков вокруг ${seen}, без меша ${missing}, в очереди ${backlog} (радиус ${R})`);
  if (missing > 0) throw new Error(`в радиусе игрока ${missing} чанков так и не сгенерированы`);
  if (backlog >= 4) throw new Error(`очередь меширования не рассасывается: ${backlog}`);
  game.settings.renderDistance = 10; game.chunkView.setRenderDistance(10);
  p.flying = false;
}

// деревни: застраиваются, мешируются без копания и в них живут жители
{
  const world = game.state.world, T = world.terrain;
  let site = null;
  for (let rx = -14; rx <= 14 && !site; rx++) for (let rz = -14; rz <= 14 && !site; rz++) {
    T.cache.clear();
    site = T.villageSite(rx, rz);
  }
  if (!site) throw new Error('в тестовом сиде не нашлось ни одной деревни');
  p.spawn(site.cx + 0.5, site.h + 6, site.cz + 0.5);
  p.flying = true; p.vy = 0;
  for (let i = 0; i < 6; i++) await dom.__pumpFrames(40);            // грузим кольцо стримером, ничего не ломая
  const got = (dx, dz, y) => {
    const x = Math.round(site.cx + dx), z = Math.round(site.cz + dz);
    return world.getBlock(x, y, z);
  };
  // площадь: мостовая на уровне площадки и вода в колодце
  const plaza = got(0, 0, site.h), well = got(0, 0, site.h + 1);
  let built = 0, cells = 0;
  for (let dz = -30; dz <= 30; dz += 3) for (let dx = -30; dx <= 30; dx += 3) {
    cells++;
    if (got(dx, dz, site.h)) built++;
  }
  // дома: стекло и доски должны появиться в мешах (иначе чанк «невидимый»)
  let meshQuads = 0;
  for (let cz = site.cz - 48; cz <= site.cz + 48; cz += 16) for (let cx = site.cx - 48; cx <= site.cx + 48; cx += 16) {
    const o = game.chunkView.objects.get((Math.floor(cx / 16) + 32768) * 65536 + (Math.floor(cz / 16) + 32768));
    if (o?.solid) meshQuads++;
  }
  // жителей проверяем детерминированно: не ждём удачного кадра, а зовём спавнер
  const capSave = game.mobs.cap;
  game.settings.mobs = 40; game.mobs.cap = 40; game.mobs.clear();
  for (let i = 0; i < 400 && game.mobs.count < 40; i++) game.mobs.trySpawn(p);
  game.mobs.cap = capSave;
  const hostilesIn = game.mobs.list.filter((m) => m.def.hostile && T.villageAt(Math.floor(m.x), Math.floor(m.z)));
  const okPlaza = !!plaza && !!well;
  console.log(`  деревня ${site.cx},${site.cz} (h=${site.h}, биом ${(await import('../src/engine/gen.js')).BIOME_NAMES[site.biome]}): застроено ${built}/${cells} колонок, чанков с мешем ${meshQuads}/49, жителей ${game.mobs.list.filter((m) => m.type === 'villager').length}, врагов в деревне ${hostilesIn.length}`);
  if (!okPlaza) throw new Error(`площадь деревни не отстроена (блок ${plaza}, вода ${well})`);
  if (built / cells < 0.9) throw new Error(`деревня построена лишь на ${(built / cells * 100).toFixed(0)}% участка`);
  if (meshQuads < 45) throw new Error(`чанки деревни не смещались сами: ${meshQuads}/49 — нужен пинок правкой`);
  if (!game.mobs.list.some((m) => m.type === 'villager')) {
    throw new Error(`жители не заселили деревню за ${game.mobs.count} попыток спавна (разрешённые: ${[...new Set(game.mobs.list.map((m) => m.type))].join(', ')})`);
  }
  if (hostilesIn.length) throw new Error('враждебные мобы спавнятся прямо в деревне');
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

// --- ограничитель кадров: 20 к/с ≠ медленнее игра ---
// считаем не вызовы step(), а физические подшаги: мир догоняет фиксированным
// шагом 1/60, и именно их число должно остаться прежним при любом лимите
{
  const lim = game.settings.fpsLimit;
  await dom.__pumpFrames(80, 16.7);   // пусть генерация чанков выдохнется — она тоже забирает кадры
  let ticks = 0;
  const updWas = p.update.bind(p);
  p.update = (dt, input) => { ticks++; return updWas(dt, input); };
  game.settings.fpsLimit = 0;
  game._nextDraw = 0;
  const a0 = renders;
  ticks = 0;
  await dom.__pumpFrames(24, 16.7);
  const free = renders - a0, ticksFree = ticks;
  game.settings.fpsLimit = 20;
  game._nextDraw = 0;
  const a1 = renders;
  ticks = 0;
  await dom.__pumpFrames(24, 16.7);
  const capped = renders - a1, ticksCapped = ticks;
  p.update = updWas;
  game.settings.fpsLimit = lim ?? 120;
  game._nextDraw = 0;
  const ok = free >= 22 && capped >= 6 && capped <= 13 && Math.abs(ticksFree - ticksCapped) <= 3;
  console.log(`${ok ? '✔' : '✘'} лимит FPS: без лимита ${free}/24 кадров и ${ticksFree} подшагов мира, с 20 к/с ${capped}/24 кадра и ${ticksCapped} подшагов`);
  if (free < 22) throw new Error(`без лимита рисуем ${free} из 24 кадров`);
  if (!(capped >= 6 && capped <= 13)) throw new Error(`лимит 20 к/с дал ${capped} кадров из 24 по 16.7 мс`);
  if (Math.abs(ticksFree - ticksCapped) > 3) throw new Error(`мир получил ${ticksCapped} подшагов вместо ${ticksFree}: лимит кадров замедляет игру`);
}

// --- ультра: тени, отражения, отказ без GL ---
{
  const shadersWas = game.settings.shaders;
  game.settings.shadows = 2;
  game.settings.waterRefl = 2;
  game.applySettings('shaders', 3);
  const lit = game.applyLighting(game.settings);
  await dom.__pumpFrames(8);
  const castOn = game.sunShadow.light.castShadow === true;
  const shadowZone = game.sunShadow.light.shadow.camera.right * 2;
  const uShadow = game.materials.uniforms.uShadow.value;
  const probeDead = !game.probe || game.probe.enabled === false;
  const uReflDead = game.materials.uniforms.uRefl.value;
  const stillRunning = game.state.running && game.state.world.chunkCount > 100;
  // живая проба (вNode GL нет) — проверяем, что отражение всё-таки подключается
  const probeWas = game.probe;
  let probes = 0;
  game.probe = { enabled: true, ok: true, texture: {}, stats: { updates: 0 }, setEnabled() {}, update() { probes++; } };
  game.applyLighting(game.settings);
  const uReflLive = game.materials.uniforms.uRefl.value;
  await dom.__pumpFrames(4);
  game.probe = probeWas;
  game.applySettings('shaders', 0);
  const castOff = game.sunShadow.light.castShadow === false && game.materials.uniforms.uShadow.value === 0;
  game.applySettings('shaders', shadersWas);
  const ok = lit.shadowOn && lit.refl && castOn && probeDead && stillRunning
    && uReflDead === 0 && uReflLive > 0.5 && probes > 0 && castOff;
  console.log(`${ok ? '✔' : '✘'} ультра: тени (зона ${shadowZone} бл, сила ${uShadow.toFixed(2)}), отражения включаются с живой пробой (${uReflLive.toFixed(2)}, снимков ${probes}), без GL проба гаснет и uRefl=0, выключение возвращает прежнюю картинку`);
  if (!lit.shadowOn || !lit.refl) throw new Error('applyLighting не включил тени/отражения при шейдерах 3');
  if (!castOn) throw new Error('light.castShadow не поднят — карты теней не будет');
  if (!probeDead) throw new Error('отражения не погасли без GL — игра упала бы на первом же кадре');
  if (uReflDead !== 0) throw new Error('мёртвая проба оставила отражения в шейдере');
  if (!(uReflLive > 0.5) || probes === 0) throw new Error('живая проба не подключила отражения воды');
  if (!stillRunning) throw new Error('ультра убила игру');
  if (!castOff) throw new Error('выключение теней не вернуло прежнюю картинку');
}

// --- креатив без сердец, еда, компас/часы, бонусный дроп ---
{
  const inv = game.inv;
  game.setCreative(true);
  const hidden = game.hud.el.hp.style.display === 'none';
  game.setCreative(false);
  const shown = game.hud.el.hp.style.display !== 'none';
  const { bonusDropOf } = await import('../src/engine/blocks.js');
  inv.creative = false;
  game.state.hp = 8;
  inv.set('hot', inv.sel, byKey('bread'), 3);
  st.lastHit = null;
  game.tryPlace();
  const healed = game.state.hp === 16, spent = inv.n('hot', inv.sel) === 2, cd = st.placeCd > 0.5;
  game.state.worldSpawn = [p.x + 300, p.z];
  const comp = game.handInfo(byKey('compass'));
  game.state.time = 0.25;
  const clockTxt = game.handInfo(byKey('clock'));
  let flintAt = null;
  const gravel = byKey('gravel'), flint = byKey('flint');
  for (let x = 0; x < 60 && !flintAt; x++) for (let z = 0; z < 60 && !flintAt; z++) if (bonusDropOf(gravel, x, 40, z) === flint) flintAt = [x, 40, z];
  const dropFlint = !!flintAt && game.dropFor({ id: gravel, x: flintAt[0], y: 40, z: flintAt[2] }) === flint;
  const dropStone = game.dropFor({ id: byKey('stone'), x: 1, y: 20, z: 3 }) === byKey('cobblestone');
  console.log(`${hidden && shown && healed && spent && cd ? '✔' : '✘'} сердец в креативе нет: ${hidden}, вернулись: ${shown} · хлеб: HP 8→${game.state.hp}, стек 3→${inv.n('hot', inv.sel)}, пауза ${st.placeCd.toFixed(2)} с`);
  if (!hidden) throw new Error('в творчестве линейка сердец осталась');
  if (!shown) throw new Error('в выживании сердца не вернулись');
  if (!healed || !spent) throw new Error(`еда не работает: hp=${game.state.hp} стек=${inv.n('hot', inv.sel)}`);
  if (!cd) throw new Error('после еды нет паузы — стек съелся бы за одно удержание ПКМ');
  console.log(`${/спавн 300/.test(comp) && /12:00/.test(clockTxt) ? '✔' : '✘'} компас: ${comp.trim() || '—'} · часы: ${clockTxt.trim() || '—'}`);
  if (!/спавн 300/.test(comp)) throw new Error(`компас врёт: ${comp}`);
  if (!/12:00/.test(clockTxt)) throw new Error(`часы врут: ${clockTxt}`);
  if (!dropFlint || !dropStone) throw new Error('бонусный дроп не подключён к игре');
  console.log(`✔ бонусный дроп: гравий по координатам (${flintAt[0]}, ${flintAt[2]}) даёт кремень, камень — булыжник`);
}

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

// --- свои моды и шейдеры ---
{
  const M = await import('../src/game/mods.js');
  M.resetMods();
  const probe = M.register('probe', {
    id: 'probe', name: 'Проба',
    shader: { name: 'Проба', uniforms: { uK: 0.3 }, frag: 'col *= 1.0 + uK * 0.1;', post: 'c.rgb *= 1.0 - uK * 0.05;' },
  }, 'смоук');
  if (!probe.ok) throw new Error('мод-проба не применился: ' + probe.error);
  if (!game.applyModShaders()) throw new Error('чистый шейдер-мод потребовал перезагрузки');
  if (!(game.materials.solid.fragmentShader || '').includes('шейдер мода «probe»')) throw new Error('код мода не попал в материал');
  if (!(game.materials.water.fragmentShader || '').includes('шейдер мода «probe»')) throw new Error('вода осталась без мода');
  if (game.mods.setUniform('uK', 0.9) !== true) throw new Error('setUniform не применился');
  if (Math.abs(game.materials.uniforms.uK.value - 0.9) > 1e-6) throw new Error('ручка мода не дошла до материала');

  // панель настроек обязана показать секцию и управления
  game.openSettings('pause');
  const walk = (el, acc = []) => { for (const c of (el && el.children) || []) { acc.push(c); walk(c, acc); } return acc; };
  const nodes = walk(document.getElementById('settings-body'));
  const texts = nodes.map((e) => e.textContent || '');
  if (!nodes.some((e) => e.tagName === 'TEXTAREA')) throw new Error('в настройках нет поля для своего мода');
  for (const need of ['Моды и свои шейдеры', 'Проба', 'Применить шейдеры сейчас', 'Сохранить мод', 'uK']) {
    if (!texts.some((t) => t.includes(need))) throw new Error('в секции модов нет «' + need + '»');
  }
  // чекбоксов в настройках много (ao, тени, …) — ищем именно строку нашего мода:
  // div, у которого первый ребёнок — checkbox, а второй несёт имя мода
  const row = nodes.find((e) => (e.children || []).length === 2
    && e.children[0].tagName === 'INPUT' && e.children[0].type === 'checkbox'
    && String(e.children[1].textContent || '').includes('Проба'));
  const cb = row && row.children[0];
  if (!cb) throw new Error('у мода нет чекбокса включения');
  if (cb.checked !== true) throw new Error('включённый мод показан выключенным');
  cb.checked = false;
  if (typeof cb.onchange !== 'function') throw new Error('чекбокс мода без обработчика');
  cb.onchange();
  if (!JSON.parse(localStorage.getItem(M.MOD_KEY) || '{}').disabled?.includes('probe')) throw new Error('выключение мода не записалось в хранилище');
  else setModEnabledClean();

  // чужие сохранения: мода с блоками применяются только перезагрузкой — панель обязана это сказать
  const withBlocks = M.register('withb', { id: 'withb', name: 'С блоком', blocks: [{ key: 'probe_block', name: 'Пробный блок', tile: 'stone' }] }, 'смоук');
  if (!withBlocks.ok) throw new Error('мод с блоком не применился: ' + withBlocks.error);
  if (game.applyModShaders() !== false) throw new Error('мод с блоками применился на живом материале — так id разъедутся с миром');
  const { BY_KEY } = await import('../src/engine/blocks.js');
  const tag = game.modTag(BY_KEY.get('probe_block').id);
  if (!tag.includes('withb')) throw new Error('в подсказке не видно автора блока: «' + tag + '»');
  if (game.modTag(1) !== '') throw new Error('ванильный блок помечен как модовый');

  M.resetMods();
  if (!game.applyModShaders()) throw new Error('после отката не удалось вернуть прежний материал');
  if ((game.materials.solid.fragmentShader || '').includes('probe')) throw new Error('resetMods оставил код мода в шейдере');
  if (game.modTag(BY_KEY.get('probe_block') ? BY_KEY.get('probe_block').id : 1) !== '') throw new Error('тег автора пережил откат');
  localStorage.removeItem(M.MOD_KEY);
  function setModEnabledClean() { M.setModEnabled('probe', true, globalThis.localStorage); }
  console.log('✔ свои моды: шейдер применяется на живом материале, панель показывает мод и его ручки, мод с блоками честно требует перезагрузки, откат чист');
}

// --- блок в руке: не уезжать за край при любом FOV и окне ---
{
  const THREE = await import('three');
  const cam = game.camera;
  const keep = { fov: cam.fov, aspect: cam.aspect };
  const p = new THREE.Vector3();
  const { byKey } = await import('../src/engine/blocks.js');
  game.inv.hot[0] = byKey('dirt');                  // предмет в руке должен быть блоком, а не пустотой
  game.viewModel.setBlock(byKey('dirt'));
  if (!game.viewModel.blockMesh) throw new Error('блок в руке не превратился в меш');
  const out = [];
  for (const fov of [55, 70, 90, 110]) {
    for (const aspect of [0.6, 1.0, 1.78, 2.6]) {
      cam.fov = fov; cam.aspect = aspect;
      cam.updateProjectionMatrix();
      cam.updateMatrixWorld(true);
      game.viewModel.update(1 / 60, { moving: 0, breaking: 0, breakProgress: 0, fov, aspect });
      game.camera.updateMatrixWorld(true);
      p.setFromMatrixPosition(game.viewModel.blockMesh.matrixWorld).project(cam);
      // по горизонтали блок обязан быть в кадре, внизу может свисать (так задумано)
      if (Math.abs(p.x) > 0.98 || p.y > -0.05 || p.y < -1.9) out.push(`${fov}/${aspect}: ${p.x.toFixed(2)},${p.y.toFixed(2)}`);
    }
  }
  cam.fov = keep.fov; cam.aspect = keep.aspect;
  cam.updateProjectionMatrix();
  game.viewModel.update(1 / 60, { fov: keep.fov, aspect: keep.aspect });
  if (out.length) throw new Error('блок в руке уезжает за край: ' + out.slice(0, 4).join(' | '));
  console.log('✔ блок в руке в кадре при FOV 55…110 и окне 0.6…2.6 (по ширине), свисает вниз как задумано');
  if (game.viewModel.blockMesh.material.depthWrite !== false) throw new Error('рука пишет глубину — на воде будет дыра');
  console.log('✔ рука не пишет глубину — поверхность воды вокруг неё не рвётся');
}

game.audio.stopMusic();
await dom.__pumpFrames(5);
if (errors.length) {
  console.log(`\n✘ ошибок в консоли: ${errors.length}`);
  errors.slice(0, 10).forEach((e) => console.log('  ' + e.slice(0, 500)));
  process.exit(1);
}
console.log('\nсмоук-тест пройден, ошибок нет');
process.exit(0);
