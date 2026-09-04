/** DOM-интерфейс: хотбар, отладка, тосты, меню, настройки, инвентарь, хелсы. */
import { BLOCKS } from '../engine/blocks.js';

const $ = (id) => document.getElementById(id);

export const DEFAULT_SETTINGS = {
  renderDistance: 6,
  fov: 74,
  sensitivity: 1,
  sfx: 0.55,
  music: 0.22,
  dayLength: 8,
  freeTime: false,
  clouds: 0.75,
  ao: true,
  smoothLight: true,
  viewBob: true,
  autoJump: true,
  showDebug: true,
  touch: false,
};

export const CONTROLS = [
  ['WASD / ←↑↓→', 'движение'],
  ['Мышь', 'осмотр'],
  ['ЛКМ (держать)', 'копать блок'],
  ['ПКМ', 'поставить блок'],
  ['СКМ', 'выбрать блок под курсором'],
  ['Пробел', 'прыжок · двойной — полёт'],
  ['Shift (в полёте)', 'вниз'],
  ['Ctrl / 2×W', 'бег'],
  ['1…9 · колесо', 'слот хотбара'],
  ['E', 'инвентарь'],
  ['Q', 'выбросить (сброс слота)'],
  ['R', 'наверх, если застрял'],
  ['N', 'промотать время'],
  ['M', 'музыка вкл/выкл'],
  ['F', 'полный экран'],
  ['F1', 'спрятать интерфейс'],
  ['F3', 'отладка'],
  ['Esc', 'пауза'],
];

export class Hud {
  constructor(atlas) {
    this.atlas = atlas;
    this.el = {
      hud: $('hud'), hotbar: $('hotbar'), blockname: $('blockname'), debug: $('debug'),
      toasts: $('toasts'), menu: $('menu'), pause: $('pause'), settings: $('settings'),
      inventory: $('inventory'), loading: $('loading'), loadFill: $('load-fill'), loadText: $('load-text'),
      water: $('water-tint'), vignette: $('vignette'), hp: $('hp'), crosshair: $('crosshair'),
      seed: $('seed'), worlds: $('worlds'), touch: $('touch-ui'), invGrid: $('inv-grid'), invHotbar: $('inv-hotbar'),
      settingsBody: $('settings-body'), pauseStats: $('pause-stats'), controls: $('controls-list'),
    };
    this.slots = [];
    this.settings = { ...DEFAULT_SETTINGS };
    this.el.controls.innerHTML = CONTROLS.map(([k, v]) => `<div><kbd>${k}</kbd><span class="muted">${v}</span></div>`).join('');
  }

  // -------------------------------------------------------------- экраны
  show(name) {
    for (const key of ['menu', 'pause', 'settings', 'inventory', 'loading']) {
      this.el[key].classList.toggle('hidden', key !== name);
    }
    this.el.hud.classList.toggle('hidden', name !== null);
    if (this.el.hud.dataset.keep === '1') this.el.hud.classList.remove('hidden');
  }

  setLoading(p, text) {
    this.el.loadFill.style.width = `${Math.round(p * 100)}%`;
    if (text) this.el.loadText.textContent = text;
  }

  toast(text, kind = '') {
    const d = document.createElement('div');
    d.className = `toast ${kind}`;
    d.textContent = text;
    this.el.toasts.appendChild(d);
    setTimeout(() => {
      d.style.transition = 'opacity .4s';
      d.style.opacity = '0';
      setTimeout(() => d.remove(), 420);
    }, 2400);
  }

  // -------------------------------------------------------------- хотбар
  buildHotbar(hotbar, selected, onChange) {
    this.hotbar = hotbar;
    this.sel = selected;
    this.onHotbarChange = onChange;
    const render = (into, compact) => {
      into.innerHTML = '';
      const refs = [];
      hotbar.forEach((id, i) => {
        const slot = document.createElement('div');
        slot.className = 'slot' + (i === selected ? ' sel' : '');
        if (!compact) {
          const num = document.createElement('span');
          num.className = 'num';
          num.textContent = String(i + 1);
          slot.appendChild(num);
        }
        if (id) {
          const img = document.createElement('img');
          img.src = this.atlas.icon(id, 48);
          img.alt = BLOCKS[id].name;
          slot.appendChild(img);
        }
        slot.title = id ? BLOCKS[id].name : 'пусто';
        slot.addEventListener('click', (e) => {
          e.stopPropagation();
          this.onHotbarChange?.(i, 'click');
        });
        into.appendChild(slot);
        refs.push(slot);
      });
      return refs;
    };
    this.slots = render(this.el.hotbar, false);
    this.el.invHotbar.innerHTML = '';
    this.invSlots = render(this.el.invHotbar, true);
  }

  selectSlot(i) {
    this.sel = i;
    [...this.slots, ...(this.invSlots ?? [])].forEach((s, n) => s.classList.toggle('sel', n % 9 === i));
  }

  showBlockName(id) {
    const el = this.el.blockname;
    el.textContent = id ? BLOCKS[id].name : 'Пусто';
    el.classList.add('show');
    clearTimeout(this._nameT);
    this._nameT = setTimeout(() => el.classList.remove('show'), 1400);
  }

  setDebug(text) {
    if (!this.el.debug) return;
    this.el.debug.textContent = text;
  }
  hideDebug(v) { this.el.debug.classList.toggle('hidden', v); }
  hideHud(v) { this.el.hud.classList.toggle('hidden', v); this.el.crosshair.style.opacity = v ? '0' : ''; }
  setWater(on) { this.el.water.classList.toggle('on', on); }
  setMining(on) { this.el.crosshair.classList.toggle('mine', on); }
  hurt() {
    this.el.vignette.classList.add('hurt');
    setTimeout(() => this.el.vignette.classList.remove('hurt'), 550);
  }
  setHealth(hp, max = 20) {
    const hearts = [];
    for (let i = 0; i < max / 2; i++) {
      const v = Math.max(0, Math.min(1, hp - i * 2)) / 2;
      hearts.push(v >= 0.99 ? '❤️' : v >= 0.4 ? '🧡' : '🖤');
    }
    this.el.hp.textContent = hearts.join('');
  }

  // -------------------------------------------------------------- меню
  renderWorlds(worlds, onLoad, onDelete) {
    const box = this.el.worlds;
    box.innerHTML = '';
    if (!worlds.length) {
      box.innerHTML = '<div class="muted small">Сохранённых миров пока нет.</div>';
      return;
    }
    for (const w of worlds) {
      const row = document.createElement('div');
      row.className = 'world-item';
      row.innerHTML = `<div class="grow">Сид <b>${w.seed}</b> · правок: ${w.edits ?? 0}
        <div class="muted small">${w.saved ? new Date(w.saved).toLocaleString('ru-RU') : ''}</div></div>`;
      const load = document.createElement('button');
      load.className = 'btn';
      load.textContent = 'Продолжить';
      load.onclick = () => onLoad(w.seed);
      const del = document.createElement('button');
      del.className = 'btn ghost danger';
      del.textContent = 'Удалить';
      del.onclick = () => onDelete(w.seed);
      row.append(load, del);
      box.appendChild(row);
    }
  }

  // ------------------------------------------------------ настройки
  settingsForm(settings, onChange, extra = {}) {
    const defs = [
      { key: 'renderDistance', label: 'Дальность прорисовки', min: 2, max: 12, step: 1, fmt: (v) => `${v} чанк.` },
      { key: 'fov', label: 'Поле зрения', min: 55, max: 110, step: 1, fmt: (v) => `${v}°` },
      { key: 'sensitivity', label: 'Чувствительность мыши', min: 0.2, max: 3, step: 0.05, fmt: (v) => v.toFixed(2) },
      { key: 'sfx', label: 'Громкость эффектов', min: 0, max: 1, step: 0.05, fmt: (v) => `${Math.round(v * 100)}%` },
      { key: 'music', label: 'Громкость музыки', min: 0, max: 1, step: 0.05, fmt: (v) => `${Math.round(v * 100)}%` },
      { key: 'clouds', label: 'Облачность', min: 0, max: 1, step: 0.05, fmt: (v) => `${Math.round(v * 100)}%` },
      { key: 'dayLength', label: 'Длина суток, мин', min: 2, max: 40, step: 1, fmt: (v) => `${v}` },
    ];
    const checks = [
      { key: 'ao', label: 'Мягкое затенение (AO)' },
      { key: 'smoothLight', label: 'Плавный свет' },
      { key: 'viewBob', label: 'Покачивание камеры' },
      { key: 'autoJump', label: 'Автопрыжок через уступы' },
      { key: 'freeTime', label: 'Заморозить время' },
      { key: 'showDebug', label: 'Панель отладки (F3)' },
      { key: 'touch', label: 'Сенсорное управление' },
    ];
    const box = this.el.settingsBody;
    box.innerHTML = '';
    for (const d of defs) {
      const row = document.createElement('div');
      row.className = 'setting';
      const lab = document.createElement('label');
      lab.textContent = d.label;
      const input = document.createElement('input');
      input.type = 'range';
      input.min = d.min; input.max = d.max; input.step = d.step;
      input.value = settings[d.key];
      const val = document.createElement('span');
      val.className = 'val';
      val.textContent = d.fmt(+input.value);
      input.oninput = () => {
        const v = +input.value;
        val.textContent = d.fmt(v);
        settings[d.key] = v;
        onChange(d.key, v);
      };
      row.append(lab, input, val);
      box.appendChild(row);
    }
    for (const c of checks) {
      const row = document.createElement('div');
      row.className = 'setting';
      const lab = document.createElement('label');
      lab.className = 'check';
      const input = document.createElement('input');
      input.type = 'checkbox';
      input.checked = !!settings[c.key];
      input.onchange = () => { settings[c.key] = input.checked; onChange(c.key, input.checked); };
      lab.append(input, document.createTextNode(c.label));
      row.appendChild(lab);
      box.appendChild(row);
    }
    if (extra.onRegenerate) {
      const row = document.createElement('div');
      row.className = 'row buttons';
      const btn = document.createElement('button');
      btn.className = 'btn ghost';
      btn.textContent = 'Пересобрать чанки';
      btn.onclick = extra.onRegenerate;
      const btn2 = document.createElement('button');
      btn2.className = 'btn ghost';
      btn2.textContent = 'Сбросить настройки';
      btn2.onclick = extra.onReset;
      row.append(btn, btn2);
      box.appendChild(row);
    }
  }

  // -------------------------------------------------------- инвентарь
  buildInventory(onPick) {
    const grid = this.el.invGrid;
    grid.innerHTML = '';
    for (const def of BLOCKS) {
      if (def.id === 0) continue;
      const cell = document.createElement('div');
      cell.className = 'inv-cell';
      const img = document.createElement('img');
      img.src = this.atlas.icon(def.id, 48);
      const name = document.createElement('span');
      name.textContent = def.name;
      cell.append(img, name);
      cell.onclick = () => onPick(def.id);
      cell.onmouseenter = () => { window.__hudHover?.(); };
      grid.appendChild(cell);
    }
  }
}
