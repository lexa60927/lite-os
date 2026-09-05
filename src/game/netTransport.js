/**
 * Транспорты для сетевой игры. Оба отдают наружу один и тот же интерфейс
 * (send / onMessage / onOpen / onClose), поэтому NetSession не знает, как
 * именно доехали байты: через реле, через WebRTC или через тестовую петлю.
 *
 *  • wsTransport  — через маленькое WebSocket-реле (dev/net-server.mjs):
 *    один внешний адрес, комната в пути URL, играют сколько угодно клиентов.
 *  • rtcTransport — напрямую между двумя браузерами, БЕЗ сервера: хост
 *    копирует «код приглашения», гость вставляет его и отвечает своим кодом.
 *    Это не магия, а ручной сигнальный обмен: нужны только два обмена
 *    строками (чат, почта, что угодно). Работает в одной сети почти всегда;
 *    за NAT без STUN — как повезёт, для этого и держим второй вариант.
 */

const b64enc = (s) => (typeof globalThis.btoa === 'function'
  ? globalThis.btoa(unescape(encodeURIComponent(s)))
  : Buffer.from(s, 'utf8').toString('base64'));
const b64dec = (s) => (typeof globalThis.atob === 'function'
  ? decodeURIComponent(escape(globalThis.atob(s)))
  : Buffer.from(s, 'base64').toString('utf8'));

export function encodeCode(desc) { return b64enc(JSON.stringify(desc)); }
export function decodeCode(code) {
  try {
    const d = JSON.parse(b64dec(String(code).trim().replace(/\s+/g, '')));
    return d && d.type && d.sdp ? d : null;
  } catch { return null; }
}

/**
 * Мини-эмиттер. Именно объект с замыканиями, а не класс: транспорт отдаёт
 * наружу `{ ...makeBus(), send, close }`, и у класса так скопировались бы
 * только поля — все методы остались бы на прототипе и вызвались бы undefined.
 */
function makeBus() {
  const h = { message: [], open: [], close: [], error: [] };
  const add = (kind, fn) => { if (typeof fn === 'function') h[kind].push(fn); return api; };
  const api = {
    onMessage: (fn) => add('message', fn),
    onOpen: (fn) => add('open', fn),
    onClose: (fn) => add('close', fn),
    onError: (fn) => add('error', fn),
    emit(kind, arg) { for (const fn of h[kind]) { try { fn(arg); } catch { /* подписчик не роняет транспорт */ } } },
  };
  return api;
}

/** WebSocket-клиент к реле. url вида ws://host:8790/lite-os (путь = комната). */
export function wsTransport(url) {
  const bus = makeBus();
  let ws = null;
  let queue = [];
  let closed = false;
  const open = () => {
    if (closed) return;
    const WS = globalThis.WebSocket;
    if (typeof WS !== 'function') { bus.emit('error', 'браузер не поддерживает WebSocket'); return; }
    try { ws = new WS(url); } catch (e) { bus.emit('error', String(e?.message ?? e)); return; }
    ws.onopen = () => { for (const m of queue) { try { ws.send(m); } catch { break; } } queue = []; bus.emit('open'); };
    ws.onmessage = (ev) => { if (typeof ev.data === 'string') bus.emit('message', ev.data); };
    ws.onclose = () => { ws = null; bus.emit('close'); };
    ws.onerror = () => { bus.emit('error', 'нет соединения с сервером'); };
  };
  open();
  return {
    ...bus,
    get ready() { return !!ws && ws.readyState === 1; },
    send(text) {
      if (ws && ws.readyState === 1) { try { ws.send(text); return; } catch { /* утонуло — не страшно */ } }
      // очередь на 256 пакетов: пока соединение поднимается, теряем только
      // устаревшие позы, а не критичные правки блоков
      if (queue.length < 256) queue.push(text);
    },
    close() { closed = true; try { ws?.close(); } catch { /* уже закрыто */ } ws = null; },
  };
}

/**
 * Прямое соединение браузер↔браузер. Хост вызывает hostStart() и отдаёт
 * полученный код гостю; гость — guestAccept(code) и возвращает свой код.
 */
export function rtcTransport({ label = 'lite', ice = true } = {}) {
  const RTC = globalThis.RTCPeerConnection;
  const bus = makeBus();
  if (!RTC) { bus.emit('error', 'браузер не поддерживает WebRTC'); return { ...bus, ready: false, send() {}, close() {} }; }
  const pc = new RTC({ iceServers: ice ? [{ urls: ['stun:stun.l.google.com:19302', 'stun:stun1.l.google.com:19302'] }] : [] });
  let dc = null;
  let closed = false;

  const gathered = () => new Promise((res) => {
    if (pc.iceGatheringState === 'complete') return res();
    const to = setTimeout(res, 2500); // не ждём вечно: часть кандидатов необязательна
    pc.addEventListener('icegatheringstatechange', () => {
      if (pc.iceGatheringState === 'complete') { clearTimeout(to); res(); }
    });
  });
  const bind = (channel) => {
    dc = channel;
    dc.binaryType = 'arraybuffer';
    dc.onmessage = (ev) => { if (typeof ev.data === 'string') bus.emit('message', ev.data); };
    dc.onopen = () => bus.emit('open');
    dc.onclose = () => { if (!closed) bus.emit('close'); };
  };
  pc.ondatachannel = (ev) => bind(ev.channel);
  pc.onconnectionstatechange = () => {
    if (pc.connectionState === 'failed' || pc.connectionState === 'disconnected') bus.emit('close');
  };

  return {
    ...bus,
    get ready() { return !!dc && dc.readyState === 'open'; },
    send(text) { if (dc && dc.readyState === 'open') { try { dc.send(text); } catch { /* потеря пакета — интерполяция сгладит */ } } },
    async hostStart() {
      bind(pc.createDataChannel(label, { ordered: true }));
      const off = await pc.createOffer();
      await pc.setLocalDescription(off);
      await gathered();
      return encodeCode(pc.localDescription);
    },
    async guestAccept(offerCode) {
      const d = decodeCode(offerCode);
      if (!d) throw new Error('код приглашения не читается');
      await pc.setRemoteDescription(d);
      const ans = await pc.createAnswer();
      await pc.setLocalDescription(ans);
      await gathered();
      return encodeCode(pc.localDescription);
    },
    async guestFinish(answerCode) {
      const d = decodeCode(answerCode);
      if (!d) throw new Error('ответ не читается');
      await pc.setRemoteDescription(d);
    },
    close() { closed = true; try { dc?.close(); } catch { /* уже */ } try { pc.close(); } catch { /* уже */ } },
  };
}

/**
 * Адрес реле «из коробки», чтобы поле не пришлось заполнять руками.
 * Отдельный случай — песочницы и прокси, где порт зашит в поддомен
 * (5173-abcd.example → реле живёт на 8790-abcd.example, свой порт там не
 * указать): такой хост переписываем целиком и идём по wss.
 */
export function defaultRelayUrl(room, relayPort = 8790) {
  const loc = globalThis.location;
  const clean = cleanRoom(room);
  if (!loc || !loc.protocol) return `ws://127.0.0.1:${relayPort}/${clean}`;
  const proto = loc.protocol === 'https:' ? 'wss:' : 'ws:';
  const proxied = /^(\d+)-(.+)$/.exec(loc.hostname ?? '');
  if (proxied) return `${proto}//${relayPort}-${proxied[2]}/${clean}`;
  return `${proto}//${loc.hostname}:${relayPort}/${clean}`;
}

function cleanRoom(raw) {
  const s = String(raw ?? '').toLowerCase().replace(/[^a-z0-9_-]/g, '').slice(0, 32);
  return s || 'world';
}
