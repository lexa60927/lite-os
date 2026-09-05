/**
 * Статическая проверка: все вызовы this.<модуль>.<метод>() из main.js реально
 * существуют. Случайный вызов несуществующего метода — это упавший кадр, а
 * значит замерший мир без единого сообщения в консоли (так и терялись чанки).
 */
import { readFileSync } from 'node:fs';
import { Game } from '../src/main.js';
import { BlockTarget, ViewModel } from '../src/render/viewmodel.js';
import { ChunkView } from '../src/render/chunkView.js';
import { World } from '../src/engine/world.js';
import { Inventory } from '../src/game/inventory.js';
import { Mobs } from '../src/game/mobs.js';
import { Sky } from '../src/render/sky.js';
import { Particles } from '../src/render/particles.js';
import { Hud } from '../src/ui/hud.js';
import { Atlas } from '../src/render/atlas.js';
import { Audio } from '../src/game/audio.js';
import { Player } from '../src/game/player.js';

const src = readFileSync(new URL('../src/main.js', import.meta.url), 'utf8');
const PROTOTYPES = new Map([
  ['target', BlockTarget.prototype], ['viewModel', ViewModel.prototype],
  ['chunkView', ChunkView.prototype], ['world', World.prototype],
  ['inv', Inventory.prototype], ['mobs', Mobs.prototype],
  ['sky', Sky.prototype], ['particles', Particles.prototype],
  ['atlas', Atlas.prototype], ['audio', Audio.prototype],
  ['player', Player.prototype],
]);

const has = (proto, name) => {
  for (let o = proto; o; o = Object.getPrototypeOf(o)) {
    if (Object.getOwnPropertyNames(o).includes(name)) return true;
  }
  return !!Object.getOwnPropertyNames(proto).includes(name);
};

let checked = 0, bad = 0;
for (const m of src.matchAll(/this\.([a-zA-Z]+)\.([a-zA-Z_][\w]*)\s*\(/g)) {
  const [, obj, method] = m;
  const proto = PROTOTYPES.get(obj);
  if (!proto) continue;
  checked++;
  if (!has(proto, method)) { bad++; console.log(`✘ this.${obj}.${method}() — такого метода нет`); }
}
// hud создаётся лениво и живёт в ui/hud.js — проверяем отдельно
const hudProto = Hud.prototype;
if (hudProto) {
  for (const m of src.matchAll(/this\.hud\.([a-zA-Z_][\w]*)\s*\(/g)) {
    checked++;
    if (!has(hudProto, m[1])) { bad++; console.log(`✘ this.hud.${m[1]}() — такого метода нет`); }
  }
}
if (checked < 60) { console.log(`✘ разбор почти ничего не нашёл (${checked} вызовов) — проверка сломалась`); bad++; }
console.log(bad ? `\n${bad} битых вызовов из ${checked}` : `\n✔ все вызовы методов (${checked}) существуют`);
process.exit(bad ? 1 : 0);
