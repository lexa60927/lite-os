/**
 * Реле для сетевой игры — без единой зависимости (node http + crypto), чтобы
 * его можно было запустить где угодно: `npm run net` и кинуть друзьям адрес.
 *
 * Реле НЕ знает правил игры. Оно только:
 *   • раздает комнаты по пути URL (/lite-os → комната «lite-os»),
 *   • дублирует каждый текстовый пакет всем остальным в комнате,
 *   • пингует и отбрасывает молчащие соединения,
 *   • не пускает больше MAX_PLAYERS и не пропускает чужой протокол.
 * Логика мира, сида и правок живёт в браузере (src/game/net.js), поэтому
 * сервер можно хоть перезапускать посреди игры — игроками он не управляет.
 */
import http from 'node:http';
import crypto from 'node:crypto';
import os from 'node:os';

export const GUID = '258EAFA5-E914-47DA-95CA-C5AB0DC85B11';
export const MAX_MESSAGE = 64 * 1024;
export const MAX_PLAYERS = 16;
const WS_ACCEPT_SALT = GUID;

/** Ключ ответа на handshake (RFC 6455, §1.3). */
export function acceptKey(key) {
  if (typeof key !== 'string' || !key.trim()) return null;
  return crypto.createHash('sha1').update(key.trim() + WS_ACCEPT_SALT).digest('base64');
}

/** Сборка кадра. mask не нужен серверу, поэтому всегда false. */
export function encodeFrame(payload, { opcode = 1, fin = true } = {}) {
  const buf = Buffer.isBuffer(payload) ? payload : Buffer.from(String(payload), 'utf8');
  const n = buf.length;
  const head = n < 126 ? 2 : n < 65536 ? 4 : 10;
  const out = Buffer.allocUnsafe(head + n);
  out[0] = (fin ? 0x80 : 0) | opcode;
  if (n < 126) out[1] = n;
  else if (n < 65536) { out[1] = 126; out.writeUInt16BE(n, 2); }
  else { out[1] = 127; out.writeUInt32BE(0, 2); out.writeUInt32BE(n, 6); }
  buf.copy(out, head);
  return out;
}

/**
 * Разбор потока в кадры. Возвращает { frames, rest, error }: остатки
 * оставляем в буфере соединения — TCP не обещает, что кадр придёт целиком.
 */
export function decodeFrames(buf, { maxMessage = MAX_MESSAGE } = {}) {
  const frames = [];
  let off = 0;
  while (buf.length - off >= 2) {
    const b0 = buf[off];
    const b1 = buf[off + 1];
    const fin = (b0 & 0x80) !== 0;
    const opcode = b0 & 0x0f;
    const masked = (b1 & 0x80) !== 0;
    let len = b1 & 0x7f;
    let p = off + 2;
    if (len === 126) {
      if (buf.length - p < 2) break;
      len = buf.readUInt16BE(p); p += 2;
    } else if (len === 127) {
      if (buf.length - p < 8) break;
      const hi = buf.readUInt32BE(p);
      const lo = buf.readUInt32BE(p + 4);
      p += 8;
      if (hi > 0) return { frames, rest: buf.subarray(off), error: 'кадр слишком большой' };
      len = lo;
    }
    if (len > maxMessage) return { frames, rest: buf.subarray(off), error: 'превышен лимит сообщения' };
    let key = null;
    if (masked) {
      if (buf.length - p < 4) break;
      key = buf.subarray(p, p + 4); p += 4;
    }
    if (buf.length - p < len) break; // ждём продолжения
    let payload = buf.subarray(p, p + len);
    if (key) {
      const copy = Buffer.allocUnsafe(len);
      for (let i = 0; i < len; i++) copy[i] = payload[i] ^ key[i & 3];
      payload = copy;
    } else {
      payload = Buffer.from(payload); // копия: rest может переиспользовать буфер
    }
    frames.push({ fin, opcode, payload });
    off = p + len;
  }
  return { frames, rest: buf.subarray(off), error: null };
}

const PONG = 10;
const CLOSE = 8;

/**
 * Поднять реле. port=0 → случайный порт (так делают тесты).
 * @returns {{ server: http.Server, rooms: Map<string, Set<import('node:net').Socket>>, close: () => Promise<void>, port: () => number }}
 */
export function createNetServer({ port = 8790, host = '0.0.0.0', maxPlayers = MAX_PLAYERS, log = () => {} } = {}) {
  const rooms = new Map();
  const sockets = new Set();

  const server = http.createServer((req, res) => {
    if (req.method !== 'GET') { res.writeHead(405); res.end(); return; }
    const counts = [...rooms.entries()].map(([r, set]) => `${r}:${set.size}`).join(' ') || 'нет игроков';
    res.writeHead(200, { 'content-type': 'text/plain; charset=utf-8', 'access-control-allow-origin': '*' });
    res.end(`lite-os relay ok\nкомнаты: ${counts}\n`);
  });

  server.on('upgrade', (req, socket) => {
    const key = req.headers['sec-websocket-key'];
    const accept = acceptKey(key);
    if (req.headers.upgrade?.toLowerCase() !== 'websocket' || !accept) {
      socket.write('HTTP/1.1 400 Bad Request\r\n\r\n'); socket.destroy(); return;
    }
    const room = (req.url ?? '/').split('?')[0].replace(/[^a-zA-Z0-9_-]/g, '').slice(0, 32) || 'world';
    const peers = rooms.get(room) ?? new Set();
    if (peers.size >= maxPlayers) {
      socket.write('HTTP/1.1 503 Too Many Players\r\n\r\n'); socket.destroy(); return;
    }
    socket.write('HTTP/1.1 101 Switching Protocols\r\n'
      + 'Upgrade: websocket\r\n'
      + 'Connection: Upgrade\r\n'
      + `Sec-WebSocket-Accept: ${accept}\r\n\r\n`);
    socket.setNoDelay(true);

    const client = { socket, room, buf: Buffer.alloc(0), frag: [], fragOp: 0, alive: true };
    peers.add(client); rooms.set(room, peers); sockets.add(client);
    log(`+ ${room} (${peers.size})`);

    const broadcast = (frame, from) => {
      for (const c of peers) if (c !== from && !c.dead) { try { c.socket.write(frame); } catch { /* отвалится по пингу */ } }
    };

    socket.on('data', (chunk) => {
      client.buf = client.buf.length ? Buffer.concat([client.buf, chunk]) : chunk;
      const { frames, rest, error } = decodeFrames(client.buf);
      client.buf = rest;
      if (error) { log(`${room}: ${error}`); drop(client, 1009); return; }
      for (const f of frames) {
        client.alive = true;
        if (f.opcode === CLOSE) { drop(client, 1000); return; }
        if (f.opcode === PONG) continue;
        if (f.opcode === 9) { try { socket.write(encodeFrame(f.payload, { opcode: PONG })); } catch { return; } continue; }
        if (f.opcode === 0) { // продолжение большого сообщения
          client.frag.push(f.payload);
          if (!f.fin) continue;
          const joined = Buffer.concat(client.frag); client.frag = [];
          if (client.fragOp === 1) broadcast(encodeFrame(joined.toString('utf8')), client);
          continue;
        }
        if (f.opcode === 1) {
          if (!f.fin) { client.frag = [f.payload]; client.fragOp = 1; continue; }
          broadcast(encodeFrame(f.payload.toString('utf8')), client);
        }
        // бинарные кадры (2) протоколом не используются — молча игнорируем
      }
    });
    socket.on('error', () => drop(client, 1011));
    socket.on('close', () => drop(client, 1001));
  });

  function drop(client, code) {
    if (client.dead) return;
    client.dead = true;
    const peers = rooms.get(client.room);
    if (peers) {
      peers.delete(client);
      if (!peers.size) rooms.delete(client.room);
      log(`- ${client.room} (${peers.size})`);
    }
    sockets.delete(client);
    try { client.socket.write(encodeFrame('', { opcode: CLOSE })); } catch { /* уже закрыт */ }
    try { client.socket.destroy(); } catch { /* уже закрыт */ }
    void code;
  }

  const pinger = setInterval(() => {
    for (const c of sockets) {
      if (!c.alive) { drop(c, 1001); continue; }
      c.alive = false;
      try { c.socket.write(encodeFrame('hb', { opcode: 9 })); } catch { drop(c, 1011); }
    }
  }, 25000);

  return {
    server,
    rooms,
    port: () => server.address()?.port ?? port,
    count: (room) => rooms.get(room)?.size ?? 0,
    close() {
      clearInterval(pinger);
      for (const c of [...sockets]) drop(c, 1001);
      return new Promise((res) => server.close(() => res()));
    },
    ready: () => new Promise((res) => server.listen(port, host, () => res(server.address().port))),
  };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const arg = (name, def) => {
    const i = process.argv.indexOf(name);
    return i > 0 && process.argv[i + 1] ? process.argv[i + 1] : def;
  };
  const p = Number(arg('--port', 8790));
  const srv = createNetServer({ port: p, log: (m) => console.log(m) });
  srv.ready().then((got) => {
    const ips = Object.values(os.networkInterfaces()).flat().filter((a) => a && a.family === 'IPv4' && !a.internal).map((a) => a.address);
    console.log(`\nlite-os relay слушает порт ${got}`);
    console.log(`  дома:      ws://127.0.0.1:${got}/world`);
    for (const ip of ips) console.log(`  по сети:   ws://${ip}:${got}/world`);
    console.log('Игрокам в игре: «Сетевая игра» → «Подключиться к реле» → этот адрес и комната world');
    console.log('Комната — как название сервера: в разных комнатах друг друга не видно.');
    console.log('Остановка: Ctrl+C');
  });
  process.on('SIGINT', () => { srv.close().then(() => process.exit(0)); });
}
