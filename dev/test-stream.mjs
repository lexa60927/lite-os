/**
 * Регрессия на «прозрачные чанки». Симптом был такой: идёшь — впереди пустота,
 * мир достраивается рывками или не достраивается вовсе.
 *
 * Причина — политика бюджета: при медленных кадрах стриминг резал себе время
 * (pool × 0.4), а при глубокой очереди генерация получала ещё и 0.15 от него.
 * На старте очередь — 400+ чанков, и именно там политика сама себя душила:
 * ~0.036 мс на генерацию кадра, т.е. мир обязан был «прорастать» минутами.
 *
 * Тест воспроизводит медленную машину честно: бюджет сознательно мал, а
 * рядом — никакого GPU, так что единственное, что мы требуем, — чтобы
 * ближние кольца всё равно были залиты геометрией за конечное число кадров.
 * Запуск: node dev/test-stream.mjs
 */
import * as THREE from 'three';
import { World } from '../src/engine/world.js';
import { ChunkView, streamPlan } from '../src/render/chunkView.js';
import { buildTiles } from '../src/engine/tiles.js';
import { CELL, TILE, GRID } from '../src/engine/pixels.js';
import { CHUNK } from '../src/engine/constants.js';
import { buildChunkMesh } from '../src/engine/mesher.js';

let fail = 0;
const bad = (m) => { console.log('✘ ' + m); fail++; };
const ok = (m) => console.log('✔ ' + m);

// ── 1. политика бюджета ───────────────────────────────────────────────────
{
  const deep = streamPlan(60, 400);         // медленная машина + стартовая прогрузка
  if (!(deep.pool >= 12 && deep.gen >= 0.6)) bad(`глубокая очередь: pool ${deep.pool} / gen ${deep.gen} — прогрузка растянется на минуты`);
  else ok(`стартовая прогрузка: ${deep.pool} мс/кадр, ${Math.round(deep.gen * 100)}% на генерацию`);

  const slow = streamPlan(33, 6);          // просадка fps, очередь маленькая
  if (!(slow.pool >= 3 && slow.pool <= 8)) bad(`просадка fps: pool ${slow.pool} — вне разумного диапазона`);
  else ok(`просадка fps: бюджет сжимается до ${slow.pool} мс, но не в ноль`);

  for (const [fm, bl] of [[300, 0], [300, 500], [0.1, 9], [16.7, 3]]) {
    const p = streamPlan(fm, bl);
    if (!(p.pool >= 3 && p.gen >= 0.3)) bad(`streamPlan(${fm}, ${bl}) = ${p.pool}/${p.gen} — стриминг голодает (пустые чанки)`);
  }
  ok('ни одна комбинация frameMs/backlog не оставляет генерацию без времени');
}

// ── 2. настоящий конвейер на «очень медленной машине» ───────────────────────
// Моделируем момент, когда игра закончила генерацию стартового радиуса и всё
// это надо превратить в геометрию: 13×13 чанков в очереди, бюджет 0.6 мс/кадр.
// Здесь мы проверяем не скорость (в Node чанк мешируется быстрее, чем в
// браузере, и цифры непереносимы), а то, что конвейер не встаёт: очередь
// обязана разгребаться и у ближних колец обязана появиться геометрия.
// Собственно политику «не голодать» проверяет секция 1 — она и есть регрессия
// на «прозрачные чанки», потому что именно она в браузере решала, сколько
// чанков в секунду мир успевает достроить за игроком.
{
  const { index } = buildTiles();
  const atlas = { index, cell: CELL, tile: TILE, grid: GRID };
  const world = new World(12345);
  const scene = new THREE.Scene();
  const materials = { solid: new THREE.MeshBasicMaterial(), water: new THREE.MeshBasicMaterial() };
  const view = new ChunkView(world, scene, materials, atlas);
  view.setRenderDistance(6);
  view.streamBudget = 0.6;                  // жестоко: машине «почти ничего» нельзя

  const AREA = 6;                           // генерируем чанки |cx|,|cz| ≤ 6
  for (let cz = -AREA; cz <= AREA; cz++) for (let cx = -AREA; cx <= AREA; cx++) world.ensureChunk(cx, cz);
  // стартовый радиус: игра делает это в prepare(); здесь — вручную, чтобы
  // проверить именно drain-цикл, а не расписание prepare
  for (const [k, c] of world.chunks) if (c.generated) { c.needsMesh = true; world.dirtyMesh.add(k); }
  const queued = world.dirtyMesh.size;
  if (queued < 150) bad(`слишком маленькая очередь в тесте: ${queued} (должна быть вся AREA)`);

  const pos = { x: 0.5, y: 44, z: 0.5, vx: 0, vz: 0 };
  const RING = 3;
  const readyCount = () => {
    let ready = 0;
    for (let dz = -RING; dz <= RING; dz++) for (let dx = -RING; dx <= RING; dx++) {
      const o = view.objects.get(ChunkView.key(dx, dz));
      if (o && (o.solid || o.water)) ready++;
    }
    return ready;
  };
  const need = (RING * 2 + 1) ** 2;
  const t0 = Date.now();
  let frames = 0;
  while (frames < 150 && readyCount() < need) { view.update(pos); frames++; if (Date.now() - t0 > 25000) break; }
  const got = readyCount();
  if (got < need) bad(`ближние чанки не залиты геометрией: ${got}/${need} за ${frames} кадров при бюджете ${view.streamBudget} мс — это и есть «прозрачные чанки»`);
  else ok(`радиус ${RING} замешен за ${frames} кадров (было в очереди ${queued}), бюджет ${view.streamBudget} мс`);

  if (world.dirtyMesh.size > queued) bad(`очередь меша растёт вместо того, чтобы разгребаться: ${world.dirtyMesh.size}`);
  else ok(`очередь меша разгребается: ${queued} → ${world.dirtyMesh.size}`);
  const d = view.streamDebug();
  if (d.genErr || d.meshErr) bad(`сбои в конвейере: ген ${d.genErr}, меш ${d.meshErr}`);
  else ok('ни одной ошибки генерации/меширования');
}

// ── 3. чанк, где генерация упала, не обязан оставаться дырой навсегда ───────
// Классика этого проекта: ensureChunk клал ЧАСТИЧНЫЙ чанк в кэш до generate.
// Исключение внутри генерации (например, «villageAt is not a function» после
// HMR) оставляло в мире пустую оболочку: getChunk отвечает «чанк есть»,
// стриминг к нему больше не возвращается, needsMesh не взведён — дыра навечно,
// при этом chunkCount растёт, т.е. «мир генерируется, но чанки невидимые».
{
  const { index } = buildTiles();
  const atlas = { index, cell: CELL, tile: TILE, grid: GRID };
  const world = new World(777);
  const t = world.terrain;
  const orig = t.generate.bind(t);
  let thrown = 0;
  t.generate = (c) => { if (c.cx === 0 && c.cz === 0 && thrown++ < 1) throw new TypeError('terrain.villageAt is not a function'); orig(c); };

  const view = new ChunkView(world, new THREE.Scene(), { solid: new THREE.MeshBasicMaterial(), water: new THREE.MeshBasicMaterial() }, atlas);
  view.setRenderDistance(3);
  const pos = { x: 0.5, y: 44, z: 0.5, vx: 0, vz: 0 };
  for (let i = 0; i < 40; i++) view.update(pos);

  if (!world.getChunk(0, 0)) ok('сбойный чанк не остался пустой оболочкой в кэше (будет пересобран)');
  else if (world.getChunk(0, 0).generated) ok('сбойный чанк догенерился на повторной попытке');
  else bad('в кэше лежит сгенерированный-но-пустой чанк: такая дыра не закроется никогда');

  t.generate = orig;
  for (let i = 0; i < 60; i++) view.update(pos);
  const c = world.getChunk(0, 0);
  if (!c || !c.generated) bad('чанк так и не был собран после устранения причины');
  else {
    let filled = 0;
    for (let i = 0; i < c.blocks.length; i++) if (c.blocks[i]) filled++;
    if (filled < 4000) bad(`чанк собрался, но почти пустой (${filled} блоков) — блоки не записаны`);
    else ok(`чанк восстановился: ${filled} блоков, hmax ${c.hmax}`);
    const mesh = view.objects.get(ChunkView.key(0, 0));
    if (!mesh || (!mesh.solid && !mesh.water)) bad('чанк восстановился, но геометрии так и нет — невидимый мир');
    else ok('геометрия после восстановления появилась');
  }

  // бесконечный повторный обход нам не нужен: после 3 попыток чанк отсеивается
  const w2 = new World(778);
  w2.terrain.generate = () => { throw new Error('всегда падаю'); };
  let tries = 0;
  for (let i = 0; i < 10; i++) { try { w2.ensureChunk(1, 1); } catch { tries++; } }
  if (tries !== 10) bad(`падения считаются неверно: ${tries} из 10`);
  else ok('падения считаются');
  if (w2.chunks.size) bad('падящий чанк всё-таки осел в кэше');
  else ok('падящий чанк не забивает кэш пустотой');
  if (String(w2.lastGenError).includes('всегда падаю')) ok('последняя ошибка генерации доступна UI: ' + w2.lastGenError);
  else bad(`lastGenError не заполнен: ${w2.lastGenError}`);
}

// ── 4. устаревший после HMR Terrain обязан ронять деревни, а не мир ─────────
{
  const { index } = buildTiles();
  const world = new World(4242);
  const t = world.terrain;
  for (const m of ['villageAt', 'villageSite', 'villageColumn']) { try { delete t[m]; } catch {} }
  t.villageSiteSafeDeleted = true;
  let chunk = null, err = null;
  try {
    chunk = world.ensureChunk(2, 1);
  } catch (e) { err = e; }
  if (err) bad(`нет villageAt → генерация падает: ${err.message} — мир станет прозрачным`);
  else {
    let solid = 0;
    for (let i = 0; i < chunk.blocks.length; i++) if (chunk.blocks[i]) solid++;
    if (solid < 4000) bad(`чанк без деревенских методов почти пустой (${solid} блоков) — генерация деградировала в дыру`);
    else ok(`Terrain без деревенских методов: чанк собран полностью (${solid} блоков), без исключений`);
    const mesh = buildChunkMesh(world, chunk, { index, cell: CELL, tile: TILE, grid: GRID });
    if (!mesh.solid || mesh.solid.quads < 500) bad(`геометрия не построена: ${mesh.solid?.quads ?? 0} квадов`);
    else ok(`меширование такого чанка даёт ${mesh.solid.quads} квадов`);
  }
}

console.log(fail ? `\n✘ стриминг: ${fail} проблем` : '\nстриминг не оставляет дыр');
process.exit(fail ? 1 : 0);
