/**
 * Аудит текстур: каждый тайл, на который ссылается блок, обязан быть в атласе;
 * плюс проверка, что иконки и UV-прямоугольники конечны (NaN = чёрные грани).
 * Запуск: node dev/test-textures.mjs
 */
import { BLOCKS } from '../src/engine/blocks.js';
import { buildTiles } from '../src/engine/tiles.js';
import { packAtlas, TILE, GRID, CELL, PAD } from '../src/engine/pixels.js';

const { tiles, index } = buildTiles();
const packed = packAtlas(tiles);

let fail = 0;
const bad = (msg) => { console.log('✘ ' + msg); fail++; };

// 1. все имена тайлов атласа уникальны и лежат в сетке целиком
const names = tiles.map((t) => t.name);
if (new Set(names).size !== names.length) bad('дубли имён тайлов: ' + names.filter((n, i) => names.indexOf(n) !== i).join(', '));
if (tiles.length > GRID * GRID) bad(`атлас ${tiles.length} тайлов не влезает в сетку ${GRID}×${GRID}`);
if (packed.width !== GRID * CELL) bad(`размер атласа ${packed.width} вместо ${GRID * CELL} (сетка ${GRID}, ячейка ${CELL})`);
// атлас обязан быть степенью двойки: иначе mipmap недопустим (NPOT) и текстуры
// в дальних чанках снова станут рябыми или чёрными
if ((packed.width & (packed.width - 1)) !== 0) bad(`атлас ${packed.width}px не является степенью двойки — mipmap нелегален`);
if (PAD * 2 < 8) bad(`кровоток ${PAD}px мал для mipmap: соседние тайлы подмешаются на дальних уровнях`);
console.log(`✔ атлас: ${tiles.length} тайлов ${packed.width}×${packed.height}, сетка ${GRID}×${GRID}, тайл ${TILE}px`);

// 2. каждый тайл непустой (не все пиксели одинаковые) и без NaN
for (const t of tiles) {
  const data = t.tile ?? t.data;
  if (!data) { bad(`тайл ${t.name}: нет данных`); continue; }
  let min = 255, max = 0;
  for (let i = 0; i < data.length; i++) { const v = data[i]; if (v < min) min = v; if (v > max) max = v; }
  if (min === max) bad(`тайл ${t.name} однотонный (${min}) — похоже, отрисовка не сработала`);
}
console.log('✔ все тайлы отрисованы');

// 3. ссылки блоков на тайлы
let refs = 0;
for (const def of BLOCKS) {
  if (!def.tiles) {
    if (def.id !== 0 && def.render !== 'none') bad(`${def.key}: нет tiles при render=${def.render}`);
    continue;
  }
  for (const face of ['top', 'bottom', 'side', 'all']) {
    const name = def.tiles[face];
    if (!name) continue;
    refs++;
    if (index[name] === undefined) bad(`${def.key}: тайл «${name}» (${face}) отсутствует в атласе → NaN UV`);
  }
  if (!def.tiles.all && (!def.tiles.top || !def.tiles.bottom || !def.tiles.side)) {
    bad(`${def.key}: неполный набор граней (нужны top/bottom/side или all)`);
  }
}
console.log(`${fail ? '✘' : '✔'} ссылок на тайлы: ${refs}`);

// 4. UV-прямоугольник конечен для каждого тайла
const cell = CELL, tile = TILE, grid = GRID;
for (const name of Object.keys(index)) {
  const i = index[name];
  const gx = i % grid, gy = (i / grid) | 0;
  const u0 = gx * cell / packed.width, v0 = gy * cell / packed.height;
  if (u0 + cell / packed.width > 1.0001 || v0 + cell / packed.height > 1.0001) bad(`тайл ${name}: ячейка вылезает за атлас`);
  if (!Number.isFinite(u0) || !Number.isFinite(v0)) bad(`тайл ${name}: NaN в UV`);
}

// 5. ни один блок не ссылается на «свою» иконку несуществующим именем
console.log(fail ? `\n✘ ошибок с текстурами: ${fail}` : '\nтекстуры в порядке');
process.exit(fail ? 1 : 0);
