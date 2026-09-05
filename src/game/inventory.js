/**
 * Инвентарь: хотбар (9) + основной рюкзак (27), стеки по 64.
 * В творческом режиме числа не тратятся (counts = 0 значит «∞»).
 */
export const STACK = 64;
export const HOT_SIZE = 9;
export const MAIN_SIZE = 27;

export class Inventory {
  constructor() {
    this.hot = new Array(HOT_SIZE).fill(0);
    this.hotN = new Array(HOT_SIZE).fill(0);
    this.main = new Array(MAIN_SIZE).fill(0);
    this.mainN = new Array(MAIN_SIZE).fill(0);
    this.sel = 0;
    this.creative = true;
    this.cursor = 0;      // id под курсором при перекладывании
    this.cursorN = 0;
  }

  kind(kind) { return kind === 'hot' ? [this.hot, this.hotN] : [this.main, this.mainN]; }
  id(kind, i) { return this.kind(kind)[0][i] | 0; }
  n(kind, i) { return this.kind(kind)[1][i] | 0; }
  set(kind, i, id, count) { const [a, b] = this.kind(kind); a[i] = id | 0; b[i] = Math.max(0, count | 0); }
  swap(kindA, i, kindB, j) {
    const [a, an] = this.kind(kindA), [b, bn] = this.kind(kindB);
    const id = a[i], n = an[i];
    a[i] = b[j]; an[i] = bn[j];
    b[j] = id; bn[j] = n;
  }

  selectedId() { return this.hot[this.sel] | 0; }
  selectedCount() { return this.creative ? Infinity : this.hotN[this.sel] | 0; }

  /** Сколько блоков данного id лежит в сумме. */
  count(id) {
    let total = 0;
    if (this.creative) return this.hot.includes(id) ? Infinity : 0;
    for (let i = 0; i < HOT_SIZE; i++) if (this.hot[i] === id) total += this.hotN[i];
    for (let i = 0; i < MAIN_SIZE; i++) if (this.main[i] === id) total += this.mainN[i];
    return total;
  }

  /** Кладёт предметы; возвращает сколько не влезло. */
  add(id, n = 1) {
    id |= 0;
    if (!id || n <= 0) return 0;
    if (this.creative) {
      // в творчестве предмет просто появляется в первом пустом слоте (или дополняется)
      for (let i = 0; i < HOT_SIZE; i++) if (this.hot[i] === id) return 0;
      for (let i = 0; i < HOT_SIZE; i++) if (!this.hot[i]) { this.hot[i] = id; this.hotN[i] = 0; return 0; }
      for (let i = 0; i < MAIN_SIZE; i++) if (!this.main[i]) { this.main[i] = id; this.mainN[i] = 0; return 0; }
      return 0;
    }
    let left = n;
    const fill = (arr, cnt, capOne) => {
      void capOne;
      for (let i = 0; i < arr.length && left > 0; i++) {
        if (arr[i] !== id) continue;
        const space = STACK - cnt[i];
        if (space <= 0) continue;
        const put = Math.min(space, left);
        cnt[i] += put; left -= put;
      }
    };
    fill(this.hot, this.hotN);
    fill(this.main, this.mainN);
    const empty = (arr, cnt) => {
      for (let i = 0; i < arr.length && left > 0; i++) {
        if (arr[i]) continue;
        const put = Math.min(STACK, left);
        arr[i] = id; cnt[i] = put; left -= put;
      }
    };
    empty(this.hot, this.hotN);
    empty(this.main, this.mainN);
    return left;
  }

  /** Забирает n штук; возвращает сколько реально забрал. */
  take(id, n = 1) {
    if (this.creative) return n;
    let left = n;
    const eat = (arr, cnt) => {
      for (let i = arr.length - 1; i >= 0 && left > 0; i--) {
        if (arr[i] !== id) continue;
        const put = Math.min(cnt[i], left);
        cnt[i] -= put; left -= put;
        if (cnt[i] <= 0) { arr[i] = 0; cnt[i] = 0; }
      }
    };
    eat(this.main, this.mainN);
    eat(this.hot, this.hotN);
    return n - left;
  }

  consumeSelected(k = 1) {
    if (this.creative) return true;
    const i = this.sel;
    if (!this.hot[i]) return false;
    this.hotN[i] -= k;
    if (this.hotN[i] <= 0) { this.hot[i] = 0; this.hotN[i] = 0; }
    return true;
  }

  /** Клетка под индексом 'kind:i' → строка для UI. */
  snapshot() {
    return {
      hot: this.hot.map((id, i) => ({ id, n: this.creative ? 0 : this.hotN[i] })),
      main: this.main.map((id, i) => ({ id, n: this.creative ? 0 : this.mainN[i] })),
      sel: this.sel,
      cursor: { id: this.cursor, n: this.cursorN },
      creative: this.creative,
    };
  }

  serialize() {
    return { hot: this.hot.slice(), hotN: this.hotN.slice(), main: this.main.slice(), mainN: this.mainN.slice(), sel: this.sel, creative: this.creative };
  }

  load(data) {
    if (!data) return false;
    const copy = (src, dst) => { if (Array.isArray(src)) for (let i = 0; i < dst.length && i < src.length; i++) dst[i] = src[i] | 0; };
    copy(data.hot, this.hot);
    copy(data.hotN, this.hotN);
    copy(data.main, this.main);
    copy(data.mainN, this.mainN);
    this.sel = data.sel | 0;
    if (typeof data.creative === 'boolean') this.creative = data.creative;
    return true;
  }
}
