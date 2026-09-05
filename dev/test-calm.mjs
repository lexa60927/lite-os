/**
 * «Спокойные» материалы: у песка, снега, камня, земли и травы соседние пиксели
 * не должны отличаться сильнее, чем на несколько единиц яркости. Попиксельный
 * шум (grain/speckles с большой амплитудой) — вот что выглядит «сломанной
 * текстурой»: на дистанции он даёт рябь и шахматку, а не пиксель-арт.
 * Пороги выставлены по фактическим замерам, чтобы тест не давал откатиться.
 */
import { buildTiles } from '../src/engine/tiles.js';

// однотонные на вид материалы: шум запрещён
const CALM = ['sand', 'sandstone_top', 'snow', 'snow_side', 'stone', 'dirt', 'grass_top', 'grass_side', 'gravel', 'podzol', 'sandstone_side'];
// материалы с намеренным узором (камни, доски, крона): там важен масштаб контраста,
// а не его величина — проверяем только «не живёт ли он на одном пикселе»
const PATTERN = ['cobblestone', 'stone_bricks', 'planks', 'log_side', 'leaves', 'bedrock', 'obsidian', 'bricks'];
const luma = (data, i) => 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];

const { tiles, index } = buildTiles();
let errors = 0;
const rows = [];
for (const [name, group] of [...CALM.map((n) => [n, 'calm']), ...PATTERN.map((n) => [n, 'pattern'])]) {
  const t = tiles[index[name]];
  if (!t) { console.log(`✘ нет тайла ${name}`); errors++; continue; }
  const op = (i) => t.tile.data[i + 3] > 128;           // дырки листвы контраст не считают
  let adj = 0, n = 0, blocky = 0, nb = 0;
  for (let y = 0; y < 16; y++) {
    for (let x = 0; x < 15; x++) {
      const i = (y * 16 + x) * 4, j = (y * 16 + x + 1) * 4;
      if (!op(i) || !op(j)) continue;
      adj += Math.abs(luma(t.tile.data, i) - luma(t.tile.data, j)); n++;
    }
  }
  for (let y = 0; y < 16; y += 2) {
    for (let x = 0; x < 14; x += 2) {
      const i = (y * 16 + x) * 4, j = (y * 16 + x + 2) * 4;
      if (!op(i) || !op(j)) continue;
      blocky += Math.abs(luma(t.tile.data, i) - luma(t.tile.data, j)); nb++;
    }
  }
  const hf = adj / n, lf = blocky / nb;
  // главная метрика: насколько соседние пиксели «кричат» друг на друга
  const ratio = hf / Math.max(0.001, lf);
  rows.push(`${name.padEnd(14)} соседние пиксели Δ=${hf.toFixed(1)}  поля 2px Δ=${lf.toFixed(1)}  высокочастотная доля ${ratio.toFixed(2)}`);
  if (group === 'calm') {
    if (hf > 9.5) { errors++; console.log(`✘ ${name}: попиксельный шум Δ=${hf.toFixed(1)} — на дистанции это рябь, нужна крупная крапинка (mottle/blobs)`); }
    if (ratio > 1.15) { errors++; console.log(`✘ ${name}: контраст живёт на 1px (доля ${ratio.toFixed(2)}) — узор должен читаться полями по 2-3px`); }
  } else if (ratio > 1.3) {
    errors++; console.log(`✘ ${name}: узор рассыпался в шум (доля ${ratio.toFixed(2)})`);
  }
}
for (const r of rows) console.log('  ', r);
console.log(errors ? `\n${errors} замечаний` : `\n✔ материалы спокойные: шум на 1px не выше Δ 9.5, узор читается полями (${CALM.length + PATTERN.length} тайлов)`);
process.exit(errors ? 1 : 0);
