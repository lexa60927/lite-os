/** Минимальные заглушки браузера: DOM, canvas 2D, WebAudio, localStorage, rAF. */

class Param {
  constructor(v = 0) { this.value = v; }
  setValueAtTime() { return this; }
  linearRampToValueAtTime() { return this; }
  exponentialRampToValueAtTime() { return this; }
  cancelScheduledValues() { return this; }
}
class Node2 {
  constructor() { this.connects = []; }
  connect(target) { this.connects.push(target); return target; }
  disconnect() {}
}
class Gain extends Node2 { constructor() { super(); this.gain = new Param(1); } }
class Osc extends Node2 {
  constructor() { super(); this.frequency = new Param(440); this.detune = new Param(0); this.type = 'sine'; }
  start() {} stop() {}
}
class Src extends Node2 {
  constructor() { super(); this.playbackRate = new Param(1); this.buffer = null; }
  start() {} stop() {}
}
class Filter extends Node2 {
  constructor() { super(); this.frequency = new Param(1000); this.Q = new Param(1); this.type = 'lowpass'; }
}
class Delay extends Node2 { constructor() { super(); this.delayTime = new Param(0); } }

export class AudioContextStub {
  constructor() { this.state = 'running'; this.sampleRate = 48000; this.currentTime = 0; this.destination = new Gain(); }
  resume() { this.state = 'running'; return Promise.resolve(); }
  createGain() { return new Gain(); }
  createOscillator() { return new Osc(); }
  createBufferSource() { return new Src(); }
  createBiquadFilter() { return new Filter(); }
  createDelay() { return new Delay(); }
  createBuffer(ch, len) { const d = new Float32Array(len); return { getChannelData: () => d, length: len }; }
}

class ClassList {
  constructor(el) { this.el = el; this.set = new Set(); }
  add(...c) { c.forEach((x) => x && this.set.add(x)); }
  remove(...c) { c.forEach((x) => this.set.delete(x)); }
  contains(c) { return this.set.has(c); }
  toggle(c, force) {
    const want = force === undefined ? !this.set.has(c) : !!force;
    if (want) this.set.add(c); else this.set.delete(c);
    return want;
  }
  get value() { return [...this.set].join(' '); }
}

class Ctx2 {
  constructor(canvas) {
    this.canvas = canvas;
    this.imageSmoothingEnabled = true;
    this.fillStyle = '#000';
    this.calls = 0;
  }
  save() {} restore() {} translate() {} scale() {} rotate() {}
  setTransform() {} beginPath() {} closePath() {} moveTo() {} lineTo() {} fill() {} stroke() {}
  fillRect() { this.calls++; }
  clearRect() {}
  drawImage() { this.calls++; }
  putImageData() {}
  getImageData(x, y, w, h) {
    const data = new Uint8ClampedArray(w * h * 4);
    for (let i = 0; i < data.length; i += 4) {
      const v = (i * 7919) % 251;
      data[i] = v; data[i + 1] = (v * 3) % 251; data[i + 2] = (v * 5) % 251; data[i + 3] = 255;
    }
    return { data, width: w, height: h };
  }
  createLinearGradient() { return { addColorStop() {} }; }
  // текст и трансформации — их рисовать в Node некому, но методы обязаны
  // существовать: иначе любой код, подписывающий canvas (табличка имени в
  // сетевой игре), роняет тесты, которые в браузере проходят
  fillText(text, x, y) { this.text = { text, x, y }; }
  strokeText(text, x, y) { this.text = { text, x, y }; }
  measureText(t) { return { width: String(t).length * 8 }; }
  save() {} restore() {} translate() {} rotate() {} scale() {} setTransform() {}
  beginPath() {} closePath() {} moveTo() {} lineTo() {} arc() {} fill() {} stroke() {} clip() {} rect() {}
  createPattern() { return null; }
}

class Canvas {
  constructor() {
    this.width = 1; this.height = 1; this._ctx = null; this.tagName = 'CANVAS';
    this.style = {}; this.dataset = {}; this.handlers = {}; this.children = [];
    this.classList = new ClassList(this);
  }
  getContext(kind) { if (kind === '2d') return (this._ctx ??= new Ctx2(this)); return null; }
  toDataURL() { return 'data:image/png;base64,0'; }
  addEventListener(t, fn) { (this.handlers[t] ??= []).push(fn); }
  removeEventListener() {}
  dispatch(t, ev = {}) { (this.handlers[t] ?? []).forEach((fn) => fn({ preventDefault() {}, stopPropagation() {}, ...ev })); }
  querySelector() { return new El('div'); }
  querySelectorAll() { return []; }
  appendChild(c) { this.children.push(c); return c; }
  getBoundingClientRect() { return { left: 0, top: 0, width: 1280, height: 800, right: 1280, bottom: 800 }; }
  requestPointerLock() { globalThis.document.pointerLockElement = this; }
  focus() {}
}

class El {
  constructor(tag = 'div', id = '') {
    this.tagName = String(tag).toUpperCase();
    this.id = id;
    this.children = [];
    this.classList = new ClassList(this);
    this.style = new Proxy({ cssText: '' }, { set: (t, k, v) => { t[k] = v; return true; }, get: (t, k) => t[k] ?? '' });
    this.dataset = {};
    this.textContent = '';
    this._html = '';
    this.value = '';
    this.checked = false;
    this.disabled = false;
    this.title = '';
    this.alt = '';
    this.src = '';
    this.min = 0; this.max = 1; this.step = 1;
    this.handlers = {};
    if (tag === 'canvas') return new Canvas();
  }
  // className и classList в браузере — одна и та же информация; без синхронизации
  // заглушка «теряла» классы, проставленные через className, и проверки вида
  // «в палитре 62 слота» давали ложный ноль
  get className() { return this.classList.value; }
  set className(v) { this.classList.set = new Set(String(v).split(/\s+/).filter(Boolean)); }
  set innerHTML(v) { this._html = v; if (v === '') this.children = []; }
  get innerHTML() { return this._html; }
  appendChild(c) { this.children.push(c); c.parent = this; return c; }
  append(...cs) { cs.forEach((c) => this.appendChild(c)); }
  removeChild(c) { const i = this.children.indexOf(c); if (i >= 0) this.children.splice(i, 1); }
  remove() { this.parent?.removeChild(this); }
  replaceWith(n) { void n; }
  cloneNode() { return new El(this.tagName, this.id); }
  addEventListener(t, fn) { (this.handlers[t] ??= []).push(fn); }
  removeEventListener() {}
  dispatch(t, ev = {}) { (this.handlers[t] ?? []).forEach((fn) => fn({ preventDefault() {}, stopPropagation() {}, ...ev })); }
  querySelector(sel) { return this.find(sel)[0] ?? new El('div'); }
  querySelectorAll(sel) { return this.find(sel); }
  find(sel) {
    const cls = sel.startsWith('.') ? sel.slice(1) : null;
    return cls ? this.children.filter((c) => c.classList.contains(cls)) : [];
  }
  getBoundingClientRect() { return { left: 0, top: 0, width: 120, height: 120, right: 120, bottom: 120 }; }
  requestPointerLock() { globalThis.document.pointerLockElement = this; }
  focus() {}
  click() { this.dispatch('click'); }
  get firstChild() { return this.children[0] ?? null; }
}

export function installDom({ width = 1280, height = 800 } = {}) {
  const byId = new Map();
  const canvasEl = new Canvas();
  canvasEl.id = 'gl';
  byId.set('gl', canvasEl);

  const document = {
    pointerLockElement: null,
    hidden: false,
    fullscreenElement: null,
    body: new El('body'),
    documentElement: new El('html'),
    createElement: (tag) => new El(tag),
    // текст без обёртки — hud вставляет подписи чекбоксов именно так
    createTextNode: (t) => ({ nodeType: 3, textContent: String(t), parentNode: null }),
    getElementById(id) {
      if (!byId.has(id)) byId.set(id, new El('div', id));
      return byId.get(id);
    },
    querySelector: (s) => new El('div'),
    addEventListener(t, fn) { (this._h ??= {})[t] = this._h?.[t] ?? []; this._h[t]?.push(fn); },
    exitPointerLock() { document.pointerLockElement = null; },
    exitFullscreen() {},
    listeners: {},
  };
  document.addEventListener = function (t, fn) { (this.listeners[t] ??= []).push(fn); };
  const winListeners = {};

  const raf = [];
  const g = globalThis;
  g.window = {
    addEventListener: (t, fn) => { (winListeners[t] ??= []).push(fn); },
    removeEventListener() {},
    innerWidth: width,
    innerHeight: height,
    devicePixelRatio: 1,
    matchMedia: () => ({ matches: false, addEventListener() {}, addListener() {} }),
    AudioContext: AudioContextStub,
    webkitAudioContext: AudioContextStub,
    requestAnimationFrame: (fn) => { raf.push(fn); return raf.length; },
    localStorage: null,
    __LITECRAFT_TEST__: true,
  };
  Object.defineProperty(g, 'document', { value: document, configurable: true, writable: true });
  g.innerWidth = width; g.innerHeight = height; g.devicePixelRatio = 1;
  g.matchMedia = () => ({ matches: false, addEventListener() {}, addListener() {} });
  g.requestAnimationFrame = (fn) => { raf.push(fn); return raf.length; };
  g.cancelAnimationFrame = () => {};
  g.addEventListener = (t, fn) => { (winListeners[t] ??= []).push(fn); };
  g.removeEventListener = () => {};
  g.AudioContext = AudioContextStub;
  g.webkitAudioContext = AudioContextStub;
  g.ImageData = class { constructor(data, w, h) { this.data = data; this.width = w; this.height = h; } };
  g.confirm = () => true;
  g.alert = () => {};
  const store = new Map();
  g.localStorage = {
    get length() { return store.size; },
    key: (i) => [...store.keys()][i] ?? null,
    getItem: (k) => (store.has(k) ? store.get(k) : null),
    setItem: (k, v) => store.set(k, String(v)),
    removeItem: (k) => store.delete(k),
    clear: () => store.clear(),
  };
  g.__winListeners = winListeners;
  g.__raf = raf;
  // Виртуальные часы: монотонны между вызовами, иначе dt игры уходит в 0
  // и фиксированный шаг физики/копания почти не продвигается.
  g.__clock = 0;
  g.__pumpFrames = async (n, dtMs = 16.7) => {
    const base = Math.max(g.__clock, performance.now());
    for (let i = 0; i < n; i++) {
      const t = base + i * dtMs;
      g.__clock = t;
      const due = raf.splice(0, raf.length);
      for (const fn of due) fn(t);
      await new Promise((r) => setImmediate(r));
    }
  };
  return {
    document, window: g.window, canvas: canvasEl, store,
    __pumpFrames: g.__pumpFrames, __raf: g.__raf, __winListeners: g.__winListeners,
  };
}
