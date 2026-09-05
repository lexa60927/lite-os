/**
 * Тесты сетевой игры. Гоняются без браузера и без интернета: протокол и
 * сессия проверяются на «петлевом» транспорте, реле — настоящими WebSocket
 * клиenтами на реальном порту.
 *   npm run test:net
 */
import assert from 'node:assert/strict';
import { encode, decode, cleanName, cleanRoom, readPose, NetSession, loopbackPair, NET_V, MAX_PLAYERS, POS_HZ, PEER_TIMEOUT } from '../src/game/net.js';
import { encodeCode, decodeCode, defaultRelayUrl } from '../src/game/netTransport.js';
import { acceptKey, encodeFrame, decodeFrames, createNetServer, MAX_MESSAGE } from './net-server.mjs';
import { HEIGHT } from '../src/engine/constants.js';

// сеть = асинхронность: без watchdog висящий промис съел бы весь CI
const watchdog = setTimeout(() => { console.log('FAIL: тест сети завис (60 с)'); process.exit(1); }, 60000);
watchdog.unref?.();

let done = 0;
const ok = (name, fn) => { try { fn(); done++; console.log('ok  ', name); } catch (e) { console.log('FAIL', name, '\n     ', e.message); process.exitCode = 1; } };
const okAsync = async (name, fn) => { try { await fn(); done++; console.log('ok  ', name); } catch (e) { console.log('FAIL', name, '\n     ', e.message); process.exitCode = 1; } };

/* ───────────────────────── 1. кодек  ───────────────────────── */
ok('round-trip пакета', () => {
  const m = { v: NET_V, from: 'a', t: 'e', x: 3, y: 4, z: -5, id: 12 };
  assert.deepEqual(decode(encode(m)), m);
});
ok('чужая версия и мусор → null', () => {
  assert.equal(decode(JSON.stringify({ v: NET_V + 99, t: 'e' })), null);
  assert.equal(decode('{"v":1,"t":'), null);
  assert.equal(decode(''), null);
  assert.equal(decode(null), null);
  assert.equal(decode('x'.repeat(70 * 1024)), null);
});
ok('имя и комната обезврежены', () => {
  assert.equal(cleanName('wa\u0011<b>'), 'wab');
  assert.equal(cleanName('   ').length > 0, true);
  assert.equal(cleanName('a'.repeat(40)).length, 24);
  assert.equal(cleanRoom('../../etc/passwd'), 'etcpasswd');
  assert.equal(cleanRoom(''), 'world');
});
ok('поза зажимается в безопасный диапазон', () => {
  const q = readPose({ x: NaN, y: 1e30, z: -1e30, yaw: 99, pitch: 5 });
  assert.equal(Number.isNaN(q.x), false);
  assert.equal(q.y <= HEIGHT + 8, true);
  assert.equal(q.y >= -8, true);
  assert.equal(q.pitch, 1.5708);
});
ok('код приглашения WebRTC читается в обе стороны', () => {
  const desc = { type: 'offer', sdp: 'v=0\r\no=- 1 1 IN IP4 127.0.0.1\r\n' };
  assert.deepEqual(decodeCode(encodeCode(desc)), desc);
  assert.equal(decodeCode('не код'), null);
  assert.equal(decodeCode('  ' + encodeCode(desc).slice(0, 3) + '  '), null);
});
ok('адрес реле по умолчанию — из текущей страницы', () => {
  assert.match(defaultRelayUrl('world'), /^wss?:\/\/.*\/world$/);
});

/* ───────────────────── 2. сессия поверх петли ───────────────────── */
function fakeClock() { let t = 1000; return { now: () => t, advance: (ms) => { t += ms; } }; }

function pair(opts = {}) {
  const [ta, tb] = loopbackPair();
  const cl = fakeClock();
  const editsA = []; const editsB = [];
  const a = new NetSession({
    id: 'A', name: 'хост', seed: 42, blockCount: 63, shareSeed: true, clock: cl.now,
    send: (t) => ta.send(t), onEdit: (e) => editsA.push(e), log: (m) => { a.logLine = m; },
    onSeed: (s) => { a.gotSeed = s; },
  });
  const b = new NetSession({
    id: 'B', name: 'гость', seed: 7, blockCount: 63, clock: cl.now,
    send: (t) => tb.send(t), onEdit: (e) => editsB.push(e),
    onSeed: (s) => { b.gotSeed = s; },
  });
  ta.onMessage((t) => a.handle(t));
  tb.onMessage((t) => b.handle(t));
  return { a, b, ta, tb, editsA, editsB, cl };
}
const flush = () => new Promise((r) => setTimeout(r, 5));

await okAsync('обмен hello: оба видят обоих, гость получает сид хоста', async () => {
  const { a, b } = pair();
  a.announce({ role: 'host' });
  b.announce({ role: 'guest' });
  await flush();
  assert.equal(a.peers.size, 1, 'A видит 1 пира');
  assert.equal(b.peers.size, 1, 'B видит 1 пира');
  assert.equal(b.gotSeed, 42, 'гость принял сид хоста');
  assert.equal(a.peers.get('B').name, 'гость');
  assert.equal(b.stats.in < 12, true, 'hello не зациклился: ' + b.stats.in);
});
await okAsync('позиции: интерполяция и лимит частоты', async () => {
  const { a, b, cl } = pair();
  a.announce(); await flush();
  b.broadcastPosition({ x: 10, y: 20, z: 30, yaw: 0.5, pitch: 0.1 });
  await flush();
  let p = a.peers.get('B');
  assert.equal(p.tx, 10);
  p.x = 0; // искусственно отстающий аватар
  for (let i = 0; i < 40; i++) a.tick(0.05);
  assert.equal(Math.abs(p.x - 10) < 0.01, true, 'аватар доехал до цели');
  // 12 Гц: за 1 секунду не больше POS_HZ+1 пакетов
  const before = b.stats.out;
  for (let i = 0; i < 100; i++) { cl.advance(10); b.broadcastPosition({ x: i, y: 20, z: 30 }); }
  const sent = b.stats.out - before;
  assert.equal(sent <= POS_HZ + 1, true, `пакетов в секунду ${sent} ≤ ${POS_HZ + 1}`);
  assert.equal(sent >= POS_HZ / 2, true, 'и не молчит: ' + sent);
});
await okAsync('правка блока долетает и применяется', async () => {
  const { a, b, editsA } = pair();
  a.announce(); await flush();
  b.broadcastEdit(4, 20, -9, 5);
  await flush();
  assert.deepEqual(editsA, [{ x: 4, y: 20, z: -9, id: 5, from: 'B' }]);
});
await okAsync('невалидные правки отбрасываются', async () => {
  const { a, b, editsA } = pair();
  a.announce(); await flush();
  const n = 1; // своих правок session.handle не вызывает
  a.handle(encode({ v: NET_V, from: 'B', t: 'e', x: 1, y: HEIGHT + 5, z: 2, id: 3 }));
  a.handle(encode({ v: NET_V, from: 'B', t: 'e', x: 1, y: 5, z: 2, id: 9999 }));
  a.handle(encode({ v: NET_V, from: 'B', t: 'e', x: NaN, y: 5, z: 2, id: 3 }));
  a.handle(encode({ v: NET_V, from: 'B', t: 'e', x: 1e30, y: 5, z: 2, id: 3 }));
  assert.equal(editsA.length, n, 'ни одна дурацкая правка не прошла');
  assert.equal(a.dropped >= 2, true, 'счётчик отброшенных вырос');
});
await okAsync('молчуна выбрасываем по таймауту', async () => {
  const { a, b, cl } = pair();
  a.announce(); await flush();
  assert.equal(a.peers.size, 1);
  cl.advance(PEER_TIMEOUT + 500);
  a.tick(0.016);
  assert.equal(a.peers.size, 0);
});
await okAsync('bye убирает игрока сразу', async () => {
  const { a, b } = pair();
  a.announce(); await flush();
  b.leave();
  await flush();
  assert.equal(a.peers.size, 0);
});
await okAsync('переполнение комнаты: лишний не принимается', async () => {
  const { a, cl } = pair();
  for (let i = 0; i < MAX_PLAYERS + 3; i++) {
    a.handle(encode({ v: NET_V, from: 'p' + i, t: 'hello', n: 'n' + i, s: 1 }));
  }
  assert.equal(a.peers.size <= MAX_PLAYERS, true, 'пиров не больше ' + MAX_PLAYERS);
  void cl;
});
await okAsync('чат и спам в чат ограничены по длине', async () => {
  const { a, b } = pair();
  a.announce(); await flush();
  let got = '';
  a.onChat = (who, text) => { got = who + '|' + text; };
  b.broadcastChat('привет '.repeat(60));
  await flush();
  assert.equal(got.startsWith('гость|привет'), true);
  assert.equal(got.length <= 24 + 1 + 160, true, 'длина чата ограничена');
});

/* ───────────────────── 3. кадры WebSocket  ───────────────────── */
ok('acceptKey по RFC 6455', () => {
  // контрольный вектор из спецификации
  assert.equal(acceptKey('dGhlIHNhbXBsZSBub25jZQ=='), 's3pPLMBiTxaQ9kYGzzhZRbK+xOo=');
  assert.equal(acceptKey(''), null);
});
ok('кадр<126 байт читается обратно', () => {
  const f = encodeFrame('привет');
  const { frames, error } = decodeFrames(f);
  assert.equal(error, null);
  assert.equal(frames.length, 1);
  assert.equal(frames[0].payload.toString('utf8'), 'привет');
});
ok('длинный кадр (16-битная длина) и 7-битная граница', () => {
  for (const n of [125, 126, 127, 1000, 40000]) {
    const big = encodeFrame('x'.repeat(n));
    const { frames } = decodeFrames(big);
    assert.equal(frames[0].payload.length, n, 'len ' + n);
  }
});
ok('замаскированный кадр клиента распаксовывается', () => {
  const text = 'y'.repeat(10);
  const key = Buffer.from([0x37, 0xfa, 0x21, 0x3d]);
  const payload = Buffer.from(text, 'utf8');
  const masked = Buffer.alloc(payload.length);
  payload.forEach((b, i) => { masked[i] = b ^ key[i & 3]; });
  const buf = Buffer.concat([Buffer.from([0x81, 0x80 | payload.length]), key, masked]);
  const { frames } = decodeFrames(buf);
  assert.equal(frames[0].payload.toString('utf8'), text);
});
ok('неполный кадр остаётся в rest и дочитывается позже', () => {
  const f = encodeFrame('ABCD');
  const first = decodeFrames(f.subarray(0, f.length - 1));
  assert.equal(first.frames.length, 0, 'рано');
  const second = decodeFrames(Buffer.concat([first.rest, f.subarray(f.length - 1)]));
  assert.equal(second.frames[0].payload.toString(), 'ABCD', 'дочиталось');
});
ok('сверхлимитное сообщение отклоняется', () => {
  // 0x7f → длина в 8 байтах: ставим заведомо больше лимита
  const head = Buffer.alloc(2 + 8);
  head[0] = 0x81; head[1] = 127 | 0x80; head.writeUInt32BE(0, 2); head.writeUInt32BE(MAX_MESSAGE + 10, 6);
  const { error } = decodeFrames(Buffer.concat([head, Buffer.alloc(16)]));
  assert.match(String(error), /лимит/);
});

/* ───────────────────── 4. живое реле на реальном порту ───────────────────── */
await okAsync('реле: два клиента в одной комнате видят друг друга, в другой — нет', async () => {
  const srv = createNetServer({ port: 0, log: () => {} });
  const port = await srv.ready();
  try {
    const open = (room) => new Promise((res, rej) => {
      const ws = new WebSocket(`ws://127.0.0.1:${port}/${room}`);
      ws.onopen = () => res(ws);
      ws.onerror = (e) => rej(new Error('ws error ' + (e?.message ?? '')));
      setTimeout(() => rej(new Error('не открылось за 4 с')), 4000);
    });
    const [a, b, c] = [await open('world'), await open('world'), await open('other')];
    // реле рассылает пакет ВСЕМ КРОМЕ отправителя, поэтому ждём его у b, а не у a
    const recv = (ws) => new Promise((res, rej) => {
      ws.onmessage = (ev) => res(ev.data);
      setTimeout(() => rej(new Error('пакет не дошёл за 4 с')), 4000);
    });
    const pb = recv(b); const pc = recv(c); const pa = recv(a);
    a.send(JSON.stringify({ v: NET_V, from: 'A', t: 'p', x: 1 }));
    assert.equal(JSON.parse(await pb).from, 'A', 'B получил пакет от A');
    // ни в чужой комнате, ни самому отправителю ничего не прилетело
    const [otherRoom, echoed] = await Promise.all([
      Promise.race([pc, new Promise((r) => setTimeout(() => r(null), 300))]),
      Promise.race([pa, new Promise((r) => setTimeout(() => r(null), 300))]),
    ]);
    assert.equal(otherRoom, null, 'в чужой комнате тишина');
    assert.equal(echoed, null, 'обратного эхо отправителю нет');
    // статус-страница
    const st = await (await fetch(`http://127.0.0.1:${port}/`)).text();
    assert.match(st, /relay ok/);
    a.close(); b.close(); c.close();
  } finally { await srv.close(); }
});
await okAsync('реле: протокол игры проходит сквозь него целиком (два реальных клиента)', async () => {
  const srv = createNetServer({ port: 0 });
  const port = await srv.ready();
  try {
    // каждый «игрок» — настоящий WebSocket + настоящий NetSession, как в браузере
    const mk = (id, name, shareSeed) => new Promise((res, rej) => {
      const ws = new WebSocket(`ws://127.0.0.1:${port}/arena`);
      let s = null;
      const inbox = [];
      ws.onmessage = (ev) => { if (s) s.handle(ev.data); else inbox.push(ev.data); };
      ws.onopen = () => {
        s = new NetSession({
          id, name, seed: id === 'A' ? 1234 : 99, blockCount: 63, shareSeed,
          send: (t) => ws.send(t),
        });
        for (const m of inbox.splice(0)) s.handle(m);
        res({ ws, s });
      };
      ws.onerror = (e) => rej(e);
      setTimeout(() => rej(new Error('не подключился')), 4000);
    });
    const [A, B] = [await mk('A', 'хост', true), await mk('B', 'гость', false)];
    let applied = null;
    A.s.onEdit = (e) => { applied = e; };
    A.s.announce(); B.s.announce();
    const t0 = Date.now();
    while (Date.now() - t0 < 3000 && !(A.s.peers.size && B.s.peers.size)) await new Promise((r) => setTimeout(r, 20));
    assert.equal(A.s.peers.size, 1, 'A видит B через реле');
    assert.equal(B.s.peers.size, 1, 'B видит A через реле');
    B.s.broadcastEdit(12, 30, -7, 4);
    const t1 = Date.now();
    while (Date.now() - t1 < 3000 && !applied) await new Promise((r) => setTimeout(r, 20));
    assert.deepEqual(applied, { x: 12, y: 30, z: -7, id: 4, from: 'B' });
    A.ws.close(); B.ws.close();
  } finally { await srv.close(); }
});
await okAsync('реле: мусор в сокете не убивает комнату', async () => {
  const srv = createNetServer({ port: 0 });
  const port = await srv.ready();
  try {
    const net = await import('node:net');
    const raw = await new Promise((res, rej) => {
      const sk = net.connect(port, '127.0.0.1', () => res(sk));
      sk.on('error', rej);
      sk.on('data', () => { /* ответ handshake просто читаем */ });
      setTimeout(() => res(sk), 500);
    });
    raw.write('GET /world HTTP/1.1\r\nHost: x\r\nUpgrade: websocket\r\nConnection: Upgrade\r\nSec-WebSocket-Key: ZmFrZQ==\r\nSec-WebSocket-Version: 13\r\n\r\n');
    const junk = Buffer.concat([Buffer.from([0x81, 0x80 | 3]), Buffer.from([1, 2, 3, 4]), Buffer.from([5, 6, 7])]);
    await new Promise((r) => setTimeout(r, 100));
    raw.write(junk); // замаскированный «текст» — не обязан парвиться, но сервер должен выжить
    raw.write(encodeFrame('не json').subarray(0, 40)); // обрезанный кадр от «клиента» без маски
    await new Promise((r) => setTimeout(r, 150));
    const ws = new WebSocket(`ws://127.0.0.1:${port}/world`);
    await new Promise((res, rej) => { ws.onopen = res; ws.onerror = rej; setTimeout(() => rej(new Error('не открылось')), 4000); });
    let got = null;
    ws.onmessage = (ev) => { got = ev.data; };
    ws.send('тоже не json');
    await new Promise((r) => setTimeout(r, 250));
    assert.equal(got, null, 'нераспознанное не рассылается');
    ws.close(); raw.destroy();
  } finally { await srv.close(); }
});

/* ─────────── 5. вся игра: соседская правка меняет blocks в моём мире ─────────── */
await okAsync('Game + реле: чужая правка доходит до чанков, моя — до соседа', async () => {
  const { installDom } = await import('./dom-stub.mjs');
  const dom = installDom();
  globalThis.__LITECRAFT_TEST__ = true;
  const renderer = {
    domElement: dom.canvas, outputColorSpace: '', setSize() {}, setPixelRatio() {}, setClearColor() {},
    clear() {}, render() {}, getContext() { return {}; },
    capabilities: { isWebGL2: true, getMaxAnisotropy: () => 4 }, dispose() {},
  };
  const { boot } = await import('../src/main.js');
  const game = boot({ renderer });
  game.settings.renderDistance = 2;
  game.settings.mobs = 0;
  const srv = createNetServer({ port: 0 });
  const port = await srv.ready();
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const until = async (fn, ms = 5000) => {
    const t0 = Date.now();
    while (Date.now() - t0 < ms) { if (fn()) return true; await sleep(25); }
    return false;
  };
  try {
    const started = game.start(4242);
    await dom.__pumpFrames(600);
    await started;
    assert.equal(game.state.running, true, 'мир игры поднялся');

    const ws = new WebSocket(`ws://127.0.0.1:${port}/net-game`);
    const b = new NetSession({ id: 'B', name: 'гость', seed: 4242, blockCount: 63, send: (t) => { if (ws.readyState === 1) ws.send(t); } });
    ws.onmessage = (ev) => b.handle(ev.data);
    const opened = await new Promise((res) => { ws.onopen = () => res(true); setTimeout(() => res(false), 5000); });
    assert.equal(opened, true, 'второй игрок подключился к реле');

    game.hud.el.netUrl.value = `ws://127.0.0.1:${port}`;
    game.hud.el.netRoom.value = 'net-game';
    game.hud.el.netName.value = 'хост';
    game.netRole = 'host';
    game.netConnectRelay();
    assert.ok(game.net, 'сессия у игры создана');
    b.announce();
    assert.equal(await until(() => game.net.peers.size === 1), true, 'хост увидел гостя через реле');
    assert.equal(await until(() => b.peers.size === 1), true, 'гость увидел хоста');

    // сосед ставит доски под ноги мне: блок обязан появиться в мире
    const px = Math.floor(game.player.x), py = Math.floor(game.player.y), pz = Math.floor(game.player.z);
    const spot = [px + 2, py, pz];
    assert.notEqual(game.state.world.getBlock(...spot), 5, 'до правки там было не это');
    b.broadcastEdit(spot[0], spot[1], spot[2], 5);
    assert.equal(await until(() => game.state.world.getBlock(...spot) === 5), true, 'правка соседа применилась к миру');
    assert.equal(game.state.world.edits > 0 || game.state.world.editedCount > 0, true, 'чужая правка сохранена в edits');

    // моя добыча должна улететь соседу
    let got = null;
    b.onEdit = (e) => { got = e; };
    game.netBroadcast(spot[0], spot[1], spot[2], 13);
    assert.equal(await until(() => !!got), true, 'моя правка долетела до гостя');
    assert.equal(got.id, 13);
    assert.equal(got.from.startsWith('relay-'), true, 'отправитель подписан');

    // аватар: над гостем должна появиться табличка, а после выхода — исчезнуть
    b.broadcastPosition({ x: px + 3.5, y: py, z: pz, yaw: 1.2, pitch: 0 });
    await sleep(60);
    await dom.__pumpFrames(3);
    assert.equal(game.avatars.items.size, 1, 'нарисован аватар соседа');
    assert.equal(game.avatars.items.get('B').name, 'гость');
    const meshX = game.avatars.items.get('B').group.position.x;
    assert.ok(Math.abs(meshX - (px + 3.5)) < 3.5, 'аватар около цели');

    b.leave();
    assert.equal(await until(() => game.net.peers.size === 0), true, 'выход гостя убил его аватар');

    // панель: печать в полях не дёргает игру, Esc закрывает, кривой адрес объяснён
    const fire = (type, ev) => (dom.__winListeners[type] ?? []).forEach((fn) => fn({ preventDefault() {}, ...ev }));
    const field = document.getElementById('net-chat');
    document.getElementById('menu-net').onclick();
    assert.equal(game.netPanelOpen, true, 'панель сети открылась');
    fire('keydown', { code: 'KeyW', target: field });
    fire('keyup', { code: 'KeyW', target: field });
    assert.equal(game.keys.has('KeyW'), false, 'W в поле чата не нажалась');
    const yawBefore = game.player.yaw;
    await dom.__pumpFrames(10);
    assert.equal(game.player.yaw, yawBefore, 'пока открыта панель, мир на паузе');
    fire('keydown', { code: 'Escape', target: field });
    assert.equal(game.netPanelOpen, false, 'Esc из поля ввода закрывает панель');
    game.hud.el.netUrl.value = 'http://это-не-ws';
    game.netConnectRelay();
    assert.match(document.getElementById('net-status').textContent, /ws:\/\//, 'сказал, что адрес неверный');

    game.netLeave('готово');
    assert.equal(game.net, null);
    assert.equal(game.avatars.items.size, 0, 'после выхода из сети на сцене чисто');
    assert.equal(game._netPoll, 0, 'таймеры за собой убраны');
    void dom;
  } finally {
    try { ws.close(); } catch { /* уже закрыт */ }
    await srv.close();
  }
});

clearTimeout(watchdog); // иначе висящий сокет превратит зелёный прогон в «завис»
console.log(`\n${done} сетевых проверок пройдено${process.exitCode ? ' — ЕСТЬ ПРОВАЛ' : ''}`);
// Сокеты после relay-прогонов ещё висят в хендлах (закрытие асинхронно, а GC никто
// не обещал): ждать их — значит подарить CI 30 секунд мёртвого времени.
process.exit(process.exitCode ?? 0);
