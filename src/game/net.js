/**
 * Сетевая игра: протокол и состояние сессии. Транспорт подключается снаружи
 * (WebSocket-реле или WebRTC-пара), поэтому весь этот модуль можно честно
 * протестировать в Node: `npm run test:net`.
 *
 * Что синхронизируется и почему именно так:
 *   • мир НЕ передаётся — он детерминирован из сида, поэтому гость при входе
 *     переключается на сид хоста и генерирует то же самое сам;
 *   • правки блоков (id + координаты) — единственный источник расхождений,
 *     идут всем остальным;
 *   • поза игрока 12 раз в секунду + интерполяция на стороне получателя;
 *   • держим пиров по «последнему пакету»: молчавшего 15 с выбрасываем,
 *     чтобы обрыв связи не оставлял призрака в мире.
 *
 * Всё входящее проходит валидацию: чужой клиент не должен иметь возможности
 * записать блок за пределамиHeight, с id за пределами реестра или NaN в
 * координатах (это роняло бы меширование целых чанков).
 */
import { HEIGHT } from '../engine/constants.js';

export const NET_V = 1;
export const POS_HZ = 12;
export const PEER_TIMEOUT = 15000;
export const MAX_PLAYERS = 16;
const COORD_LIMIT = 1e7;

const num = (v, def = 0) => (typeof v === 'number' && Number.isFinite(v) ? v : def);
const clamp = (v, lo, hi) => (v < lo ? lo : v > hi ? hi : v);

export function encode(msg) { return JSON.stringify(msg); }

/** Разбор пакета: мусор, чужая версия и слишком длинные строки → null. */
export function decode(text) {
  if (typeof text !== 'string' || text.length > 64 * 1024) return null;
  let m;
  try { m = JSON.parse(text); } catch { return null; }
  if (!m || typeof m !== 'object' || m.v !== NET_V || typeof m.t !== 'string') return null;
  return m;
}

/** Санитизация имени: не больше 24 символов, без управляющих последовательностей. */
export function cleanName(raw) {
  const s = String(raw ?? '').replace(/[\u0000-\u001f<>]/g, '').trim().slice(0, 24);
  return s || 'игрок';
}

/** Идентификатор комнаты: только буквы/цифры/дефис/подчёркивание. */
export function cleanRoom(raw) {
  const s = String(raw ?? '').toLowerCase().replace(/[^a-z0-9_-]/g, '').slice(0, 32);
  return s || 'world';
}

/** Привести позу из пакета к безопасным значениям. */
export function readPose(p) {
  const x = clamp(num(p?.x), -COORD_LIMIT, COORD_LIMIT);
  const y = clamp(num(p?.y, 64), -8, HEIGHT + 8);
  const z = clamp(num(p?.z), -COORD_LIMIT, COORD_LIMIT);
  const yaw = num(p?.yaw) % (Math.PI * 2);
  const pitch = clamp(num(p?.pitch), -1.5708, 1.5708);
  return { x, y, z, yaw, pitch };
}

export class NetSession {
  /**
   * @param {object} o  { id, name, seed, blockCount, send, onEdit, onPeerJoin,
   *                      onPeerLeave, onChat, log }
   */
  constructor(o = {}) {
    this.id = String(o.id ?? 'me');
    this.name = cleanName(o.name);
    this.seed = o.seed >>> 0;
    this.blockCount = o.blockCount ?? 256;
    this.send = typeof o.send === 'function' ? o.send : () => {};
    this.onEdit = o.onEdit ?? null;
    this.onPeerJoin = o.onPeerJoin ?? null;
    this.onPeerLeave = o.onPeerLeave ?? null;
    this.onChat = o.onChat ?? null;
    this.onSeed = o.onSeed ?? null;
    this.log = o.log ?? (() => {});
    this.clock = o.clock ?? null; // подменяемые часы для тестов
    this.shareSeed = !!o.shareSeed;
    this.peers = new Map();
    this.edits = 0;
    this.dropped = 0;
    this.stats = { in: 0, out: 0, bad: 0 };
    this._lastPos = 0;
    this.closed = false;
  }

  /** Соединение установлено: представляемся и просим мир у хоста. */
  announce(extra = {}) {
    this._raw({ t: 'hello', n: this.name, s: this.seed, ...extra });
  }

  _raw(msg) {
    if (this.closed) return;
    this.stats.out++;
    try { this.send(encode({ v: NET_V, from: this.id, ...msg })); }
    catch (e) { this.log('отправка не удалась: ' + (e?.message ?? e)); }
  }

  /** Хост объявил новый сид (например, игрок сгенерировал другой мир) — все перестраиваются. */
  announceSeed() {
    this._raw({ t: 'seed', s: this.seed >>> 0 });
  }

  broadcastEdit(x, y, z, id) {
    this._raw({ t: 'e', x: x | 0, y: y | 0, z: z | 0, id: id | 0 });
    this.edits++;
  }

  broadcastPosition(pose, held = 0) {
    const now = this.now();
    if (now - this._lastPos < 1000 / POS_HZ) return;
    this._lastPos = now;
    const q = readPose({ ...pose });
    this._raw({ t: 'p', x: +q.x.toFixed(3), y: +q.y.toFixed(3), z: +q.z.toFixed(3), yaw: +q.yaw.toFixed(4), pitch: +q.pitch.toFixed(4), h: held | 0 });
  }

  broadcastChat(text) {
    const s = String(text ?? '').slice(0, 160);
    if (s.trim()) this._raw({ t: 'c', x: s });
  }

  /** Часы можно подменить в тестах. */
  now() { return this.clock ? this.clock() : Date.now(); }

  handle(text) {
    if (this.closed) return;
    this.stats.in++;
    const m = decode(text);
    if (!m) { this.stats.bad++; return; }
    const from = String(m.from ?? '').slice(0, 64);
    if (!from || from === this.id) return;
    const now = this.now();
    switch (m.t) {
      case 'hello': {
        // Отвечаем ТОЛЬКО на первое представление: иначе два клиента,
        // отвечающих друг другу на каждый hello, устроили бы бесконечный обмен.
        const isNew = !this.peers.has(from);
        const peer = this._touch(from, now);
        peer.name = cleanName(m.n);
        if (typeof m.s === 'number' && Number.isFinite(m.s)) peer.seed = m.s >>> 0;
        if (isNew && this.peers.size > MAX_PLAYERS) {
          this.log('слишком много игроков, лишний отключён');
          this.peers.delete(from);
          return;
        }
        if (isNew) {
          this._raw({ t: 'hello', n: this.name, s: this.seed });
          // хост сообщает гостю сид: мир детерминирован, и это единственное,
          // что нужно передать вместо целой генерации
          if (this.shareSeed) this._raw({ t: 'seed', s: this.seed });
          this.onPeerJoin?.(from, peer);
        }
        return;
      }
      case 'seed': {
        const s = num(m.s, NaN);
        if (Number.isFinite(s)) this.onSeed?.(s >>> 0);
        return;
      }
      case 'p': {
        const peer = this._touch(from, now);
        const q = readPose(m);
        // цель для интерполяции; текущие x/z — куда уже плавно едет аватар
        peer.tx = q.x; peer.ty = q.y; peer.tz = q.z; peer.tyaw = q.yaw; peer.tpitch = q.pitch;
        if (peer.x === undefined) { peer.x = q.x; peer.y = q.y; peer.z = q.z; peer.yaw = q.yaw; peer.pitch = q.pitch; }
        peer.held = num(m.h, 0) | 0;
        peer.seen = now;
        return;
      }
      case 'e': {
        const x = num(m.x, NaN), y = num(m.y, NaN), z = num(m.z, NaN);
        const id = num(m.id, NaN) | 0;
        if (![x, y, z].every(Number.isFinite)) { this.stats.bad++; return; }
        if (y < 0 || y >= HEIGHT || id < 0 || id >= this.blockCount) { this.dropped++; return; }
        this.onEdit?.({ x: x | 0, y: y | 0, z: z | 0, id, from });
        this.edits++;
        return;
      }
      case 'c': {
        const peer = this._touch(from, now);
        this.onChat?.(cleanName(peer.name ?? m.n), String(m.x ?? '').slice(0, 160));
        return;
      }
      case 'bye': {
        if (this.peers.delete(from)) this.onPeerLeave?.(from);
        return;
      }
      default:
        this.stats.bad++;
    }
  }

  _touch(from, now) {
    let p = this.peers.get(from);
    if (!p) { p = { id: from, name: 'игрок', x: 0, y: 0, z: 0, yaw: 0, pitch: 0, seen: now }; this.peers.set(from, p); }
    p.seen = now;
    return p;
  }

  /** Раз в кадр: интерполяция аватаров и выброс молчунов. */
  tick(dt) {
    const now = this.now();
    for (const [id, p] of this.peers) {
      if (now - (p.seen ?? 0) > PEER_TIMEOUT) {
        this.peers.delete(id);
        this.onPeerLeave?.(id);
        continue;
      }
      const k = Math.max(0, Math.min(1, dt * 9));
      if (p.tx === undefined) continue;
      p.x += (p.tx - p.x) * k;
      p.y += (p.ty - p.y) * k;
      p.z += (p.tz - p.z) * k;
      p.yaw += (p.tyaw - p.yaw) * k;
      p.pitch += (p.tpitch - p.pitch) * k;
    }
  }

  leave() {
    this._raw({ t: 'bye' });
    this.closed = true;
  }

  peerList() {
    return [...this.peers.values()].map((p) => ({ id: p.id, name: p.name, x: p.x, y: p.y, z: p.z }));
  }
}

/**
 * Пара связаных «трубок» для тестов и для игры по локальному лупу: то, что
 * написал один конец, читает другой. Настоящий транспорт (WebSocket/WebRTC)
 * подменяет ровно этот же интерфейс.
 */
export function loopbackPair() {
  const a = { to: null, handlers: [], send(t) { queueMicrotask(() => this.to?.fire(t)); }, onMessage(fn) { this.handlers.push(fn); }, fire(t) { for (const fn of this.handlers) fn(t); }, close() { this.closed = true; } };
  const b = { ...a, to: null, handlers: [], send(t) { queueMicrotask(() => this.to?.fire(t)); }, onMessage(fn) { this.handlers.push(fn); }, fire(t) { for (const fn of this.handlers) fn(t); }, close() { this.closed = true; } };
  a.to = b; b.to = a;
  return [a, b];
}

export function sessionOver(transport, opts) {
  const s = new NetSession({ ...opts, send: (text) => transport.send(text) });
  transport.onMessage((text) => s.handle(text));
  return s;
}
