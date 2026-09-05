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
