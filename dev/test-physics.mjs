import { Player } from '../src/game/player.js';
import { raycast } from '../src/game/raycast.js';
import { byKey } from '../src/engine/blocks.js';

const STONE = byKey('stone'), WATER = byKey('water'), DIRT = byKey('dirt');
const world = {
  getBlock(x, y, z) {
    if (y < 0 || y > 95) return 0;
    if (y <= 40) return STONE;
    if (x >= 20 && x < 26 && y <= 46) return STONE;   // стена
    if (x >= 8 && x < 14 && y === 41) return WATER;    // лужа на полу? (над полом)
    return 0;
  },
};
const p = new Player(world);
p.spawn(0.5, 50, 0.5);
const empty = { forward:0, back:0, left:0, right:0, jump:0, sneak:0, sprint:0 };
let steps = 0;
while (!p.onGround && steps < 400) { p.update(1/60, empty); steps++; }
console.log(`падение: приземлился за ${(steps/60).toFixed(2)} с на y=${p.y.toFixed(3)} (ожидается ровно 41.000), vy=${p.vy.toFixed(2)}`);

// ходьба вперёд
for (let i=0;i<60;i++) p.update(1/60, {...empty, forward:1});
console.log('после 1 с ходьбы: z=', p.z.toFixed(2), '(около -4.3), y=', p.y.toFixed(3));

// прыжок
p.update(1/60, {...empty, jump:1});
let peak = p.y; for (let i=0;i<60;i++){ p.update(1/60, empty); peak=Math.max(peak,p.y); }
console.log('высота прыжка:', (peak-41).toFixed(2), 'блоков; на земле:', p.onGround);

// в стену
const before = p.x;
p.x = 18.0; p.z = 22; p.y = 41; p.vx = 0; p.vz = 0;
for (let i=0;i<90;i++) p.update(1/60, {...empty, forward:1, right:1});
console.log('упор в стену: x=', p.x.toFixed(3), '(должно быть ≤ 19.7 при грани 20), collides=', p.collides(p.x,p.y,p.z));

// вода
p.spawn(11.5, 43.5, 0.5);
for (let i=0;i<40;i++) p.update(1/60, empty);
console.log('в воде: inWater=', p.inWater, 'vy=', p.vy.toFixed(2), 'y=', p.y.toFixed(2));

// рейкаст вниз
const hit = raycast(world, 0.5, 45, 0.5, 0, -1, 0, 10);
console.log('рейкаст вниз:', JSON.stringify(hit));
const hit2 = raycast(world, 15.5, 43, 22, 1, 0, 0, 10);
console.log('рейкаст в стену:', JSON.stringify(hit2));
const miss = raycast(world, 0.5, 45, 0.5, 0, 1, 0, 10);
console.log('рейкаст в небо:', miss);
// установка блока не должна вмуровывать игрока
p.spawn(0.5, 41, 0.5);
console.log('intersectsBlock(0,41,0)=', p.intersectsBlock(0,41,0), ' intersectsBlock(5,41,0)=', p.intersectsBlock(5,41,0));

// --- кривая урона от падения: спрыгнул с уступа — чисто, с дерева — больно, с горы — на грани
{
  const { fallDamageOf } = await import('../src/game/player.js');
  const rows = [[0, 0], [3, 0], [4, 0], [10, 3], [20, 8], [40, 18], [60, 28]];
  let ok = true;
  for (const [drop, want] of rows) {
    const got = fallDamageOf(drop);
    if (Math.abs(got - want) > 1e-9) { ok = false; console.log(`✘ ${drop} блоков → ${got}, ожидалось ${want}`); }
  }
  const mono = [5, 10, 20, 30].every((d, i, a) => i === 0 || fallDamageOf(d) > fallDamageOf(a[i - 1]));
  console.log(`${ok && mono ? '✔' : '✘'} урон от падения: 4 бл = ${fallDamageOf(4)}, 10 = ${fallDamageOf(10)}, 20 = ${fallDamageOf(20)}, 40 = ${fallDamageOf(40)} HP (смерть с ~44; раньше — с 24)`);
  if (!ok) throw new Error('неверная кривая урона от падения');
  if (!mono) throw new Error('урон не растёт с высотой');
  if (fallDamageOf(20) >= 20) throw new Error('падение с 20 блоков по-прежнему убивает');
}
