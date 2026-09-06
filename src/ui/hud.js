/** DOM-интерфейс: хотбар, отладка, тосты, меню, настройки, инвентарь, хелсы. */
import { BLOCKS } from '../engine/blocks.js';

const $ = (id) => document.getElementById(id);

export const DEFAULT_SETTINGS = {
  renderDistance: 10,
  fov: 74,
  mobs: 14,
  creative: false,
  sensitivity: 1,
  sfx: 0.55,
  music: 0.22,
  dayLength: 8,
  freeTime: false,
  clouds: 0.75,
  shaders: 1,
  netName: '', netUrl: '', netRoom: 'world',
  renderScale: 1,
  ao: true,
  smoothLight: true,
  viewBob: true,
  autoJump: true,
  showDebug: true,
  touch: false,
};


// Категории палитры креатива — только для отображения: порядок id в BLOCKS
// нагрузочный (блоки 38+ — предметы и инструменты), поэтому сортируем здесь,
// а не трогаем реестр блоков.
const CREATIVE_CATEGORIES = [
  ['Стройка', null], ['Природа', null], ['Руды и свет', null], ['Растения и ферма', null],
  ['Инструменты', null], ['Предметы', null], ['Прочее', null],
];
const CAT_KEYS = {
  'Стройка': ['stone', 'cobblestone', 'stone_bricks', 'bricks', 'planks', 'log', 'glass', 'sandstone', 'obsidian', 'crafting_table', 'wool_white', 'wool_red', 'wool_blue', 'wool_yellow', 'wool_lime', 'wool_black'],
  'Природа': ['grass', 'dirt', 'sand', 'gravel', 'leaves', 'snow', 'podzol', 'bedrock', 'cactus', 'water'],
  'Руды и свет': ['coal_ore', 'iron_ore', 'gold_ore', 'diamond_ore', 'redstone_ore', 'glowstone'],
  'Растения и ферма': ['tall_grass', 'fern', 'flower_red', 'flower_yellow', 'sapling', 'wheat', 'farmland', 'hay_block'],
};
function categoryOf(key) {
  for (const [cat, keys] of Object.entries(CAT_KEYS)) if (keys.includes(key)) return cat;
  if (/_pickaxe|_axe|_shovel|_sword/.test(key)) return 'Инструменты';
  if (key === 'emerald' || key.endsWith(':item') || ['leather', 'pork', 'stick', 'coal_item'].includes(key)) return 'Предметы';
  return 'Прочее';
}

export const CONTROLS = [
  ['WASD / ←↑↓→', 'движение'],
  ['Мышь', 'осмотр'],
  ['ЛКМ (держать)', 'копать блок · атака по мобу'],
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
      invCursor: $('inv-cursor'), invCraft: $('inv-craft'), invCraftTitle: $('inv-craft-title'),
      invPalette: $('inv-palette'), invPaletteTitle: $('inv-palette-title'), invHint: $('inv-hint'),
      net: $('net'), netStatus: $('net-status'), netPeers: $('net-peers'), netRole: $('net-role'),
      netName: $('net-name'), netUrl: $('net-url'), netRoom: $('net-room'), netCode: $('net-code'),
      netChat: $('net-chat'), netChatRow: $('net-chat-row'),
    };
    this.slots = [];
    this.settings = { ...DEFAULT_SETTINGS };
    this.el.controls.innerHTML = CONTROLS.map(([k, v]) => `<div><kbd>${k}</kbd><span class="muted">${v}</span></div>`).join('');
  }

  // -------------------------------------------------------------- экраны
  show(name) {
    for (const key of ['menu', 'pause', 'settings', 'inventory', 'loading', 'net']) {
      this.el[key].classList.toggle('hidden', key !== name);
    }
    this.el.hud.classList.toggle('hidden', name !== null);
    if (this.el.hud.dataset.keep === '1') this.el.hud.classList.remove('hidden');
  }

  setLoading(p, text) {
    this.el.loadFill.style.width = `${Math.round(p * 100)}%`;
    if (text) this.el.loadText.textContent = text;
  }

  // ------------------------------------------------------------- сетевая игра
  /** Что сейчас в полях панели сети. */
  netState() {
    return {
      role: this._netRole ?? 'host',
      name: (this.el.netName?.value ?? '').trim(),
      url: (this.el.netUrl?.value ?? '').trim(),
      room: (this.el.netRoom?.value ?? '').trim(),
    };
  }

  /** Предзаполнить панель; connected — показать поле чата и не трогать адрес вслепую. */
  netPrefill(v) {
    if (this.el.netName) this.el.netName.value = v.name ?? '';
    if (this.el.netUrl) this.el.netUrl.value = v.url ?? '';
    if (this.el.netRoom) this.el.netRoom.value = v.room ?? '';
    this.netRole(v.role ?? 'host');
    if (this.el.netChatRow) this.el.netChatRow.classList.toggle('hidden', !v.connected);
    if (v.text !== undefined) this.netStatus(v.text ?? '', v.kind ?? '');
  }

  /** Переключатель «хост/гость»: кнопки лежат в .seg, состояние держим у себя. */
  netRole(role) {
    this._netRole = role === 'guest' ? 'guest' : 'host';
    for (const b of this.el.netRole?.children ?? []) {
      if (b && b.classList) b.classList.toggle('on', (b.dataset?.v ?? '') === this._netRole);
    }
  }

  netStatus(text, kind = '') {
    const el = this.el.netStatus;
    if (!el) return;
    el.textContent = text;
    el.classList?.toggle('on', kind === 'on');
    el.classList?.toggle('err', kind === 'err');
  }

  netCode(text) { if (this.el.netCode) this.el.netCode.value = text ?? ''; }
  netCodeValue() { return String(this.el.netCode?.value ?? ''); }

  netPeers(list) {
    const el = this.el.netPeers;
    if (!el) return;
    const s = list.length
      ? 'в комнате: ' + list.map((p) => `${p.name} (${Math.round(p.x ?? 0)}; ${Math.round(p.z ?? 0)})`).join(', ')
      : 'пока никого — правки и шаги видят только тебя';
    if (el.textContent !== s) el.textContent = s;
  }

  /**
   * Всплывающее сообщение. Одинаковый текст не плодит стопку: без этого спам от
   * автоповтора клавиши («Полёт: вкл» по 12 штук) закрывал половину экрана.
   * Повтор только перезапускает таймер уже висящего сообщения, а всего на экране
   * держим не больше шести — самое старое вытесняем сразу.
   */
  toast(text, kind = '') {
    const box = this.el.toasts;
    if (!box) return;
    const key = String(text);
    for (const c of box.children ?? []) {
      if (c.__toastKey === key) { this._toastArm(c); return; }
    }
    const d = document.createElement('div');
    d.className = `toast ${kind}`;
    d.textContent = text;
    d.__toastKey = key;
    box.appendChild(d);
    while ((box.children?.length ?? 0) > 6) box.removeChild(box.children[0]);
    this._toastArm(d);
  }

  _toastArm(d) {
    clearTimeout(d.__t);
    d.style.opacity = '';
    d.__t = setTimeout(() => {
      d.style.transition = 'opacity .4s';
      d.style.opacity = '0';
      d.__t = setTimeout(() => d.remove(), 420);
    }, 2400);
  }

  /** Полёт доступен — иначе сенсорная кнопка ✈ затемняется (нажать можно: подскажет причину). */
  setFlyAvailable(on) {
    const b = document.getElementById('t-fly');
    if (b?.classList) b.classList.toggle('dim', !on);
  }

  /** Активная кнопка в переключателе-сегменте (.seg с data-v у кнопок). */
  seg(el, value) {
    for (const b of el?.children ?? []) b.classList?.toggle('on', (b.dataset?.v ?? b.__v) === value);
  }

  // -------------------------------------------------------------- хотбар
  buildHotbar(hotbar, selected, onChange, counts = null) {
    this.hotbar = hotbar;
    this.sel = selected;
    this.hotCounts = counts;
    this.onHotbarChange = onChange ?? this.onHotbarChange;
    const render = (into, compact, kind) => {
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
          const n = counts ? counts[i] | 0 : 0;
          if (n > 1) {
            const cnt = document.createElement('span');
            cnt.className = 'cnt';
            cnt.textContent = String(n);
            slot.appendChild(cnt);
          }
        }
        slot.title = id ? BLOCKS[id].name : 'пусто';
        slot.addEventListener('click', (e) => {
          e.stopPropagation();
          if (kind === 'inv') this.onInvSlot?.('hot', i);
          else this.onHotbarChange?.(i, 'click');
        });
        into.appendChild(slot);
        refs.push(slot);
      });
      return refs;
    };
    this.slots = render(this.el.hotbar, false, 'hud');
    if (this.el.invHotbar) this.invSlots = render(this.el.invHotbar, true, 'inv');
  }

  markInventorySelection(i) {
    (this.invSlots ?? []).forEach((sl, n) => sl.classList.toggle('sel', n === i));
    (this.slots ?? []).forEach((sl, n) => sl.classList.toggle('sel', n === i));
  }

  /** Полный экран инвентаря: рюкзак + хотбар + курсор + крафт + палитра. */
  renderInventory(view) {
    const { snap, recipes, creative, icon, names, onSlot, onPick, onCraft, nearTable, onCreative } = view;
    this.onInvSlot = onSlot;
    const mk = (id, n, kind, index) => {
      const slot = document.createElement('div');
      slot.className = 'slot' + (kind === 'hot' && index === snap.sel ? ' sel' : '');
      if (id) {
        const img = document.createElement('img');
        img.src = icon(id, 44);
        img.alt = names(id);
        slot.appendChild(img);
        if (n > 1) {
          const c = document.createElement('span');
          c.className = 'cnt';
          c.textContent = String(n);
          slot.appendChild(c);
        }
      }
      slot.title = id ? `${names(id)}${n ? ' ×' + n : ''}` : 'пусто';
      slot.onclick = () => onSlot(kind, index);
      return slot;
    };
    const grid = this.el.invGrid;
    grid.innerHTML = '';
    snap.main.forEach((it, i) => grid.appendChild(mk(it.id, it.n, 'main', i)));
    this.buildHotbar(snap.hot.map((x) => x.id), snap.sel, this.onHotbarSelect, creative ? null : snap.hot.map((x) => x.n));
    this.el.invCursor.textContent = snap.cursor.id
      ? `В руке: ${names(snap.cursor.id)}${snap.cursor.n > 1 ? ' ×' + snap.cursor.n : ''} — кликни по клетке, чтобы положить`
      : creative ? 'Творчество: клик по палитре кладёт блок в выбранный слот' : 'Клик по клетке — взять стек, по другой — положить/обменять';
    const craft = this.el.invCraft;
    craft.innerHTML = '';
    if (this.el.invCraftTitle) {
      this.el.invCraftTitle.textContent = nearTable ? 'Крафт · верстак рядом — доступны все рецепты' : 'Крафт · у верстака (в 4 блоках) открываются инструменты из камня и железа';
    }
    recipes.forEach((r, i) => {
      const row = document.createElement('div');
      row.className = 'craft-row' + (r.ok ? ' ok' : ' locked');
      const img = document.createElement('img');
      img.src = icon(r.outId, 32);
      row.appendChild(img);
      const name = document.createElement('span');
      name.className = 'cname';
      name.textContent = `${names(r.outId)}${r.n > 1 ? ' ×' + r.n : ''}`;
      row.appendChild(name);
      const need = document.createElement('span');
      need.className = 'cneed';
      need.textContent = r.need.map((x) => `${names(x.id)} ${x.have}/${x.n}`).join(' · ') + (r.table ? ' · верстак' : '');
      row.appendChild(need);
      const btn = document.createElement('button');
      btn.textContent = r.ok ? 'Скрафтить' : '—';
      btn.disabled = !r.ok;
      btn.onclick = () => onCraft(i);
      row.appendChild(btn);
      craft.appendChild(row);
    });
    // ── палитра креатива: ВСЕ блоки и предметы, сгруппированные и с поиском ──
    // Раньше это был один сплошной список по id: найти нужный блок среди 60+
    // иконок было нельзя, и «креатив, где все блоки есть» формально работал, но
    // пользоваться им было тяжело.
    const pal = this.el.invPalette;
    const palTitle = this.el.invPaletteTitle;
    if (pal) {
      pal.innerHTML = '';
      if (palTitle) palTitle.style.display = creative ? '' : 'none';
      if (creative) {
        if (palTitle) {
          palTitle.innerHTML = '';
          const txt = document.createElement('span');
          txt.textContent = 'Все блоки (' + BLOCKS.filter((d) => d && d.id && d.render !== 'none').length + ')';
          const find = document.createElement('input');
          find.type = 'search';
          find.className = 'pal-search';
          find.placeholder = 'Поиск: стекло, кирка, шерсть…';
          find.value = this.palQuery ?? '';
          find.oninput = () => { this.palQuery = find.value; this.renderInventory(view); };
          const tog = document.createElement('button');
          tog.className = 'btn ghost mini';
          tog.textContent = 'Творчество: вкл';
          tog.title = 'Выключить — инвентарь снова становится обычным, а блоки начинают тратиться';
          tog.onclick = () => { onCreative?.(); this.renderInventory(view); };
          palTitle.append(txt, find, tog);
        }
        const q = (this.palQuery ?? '').trim().toLowerCase();
        const buckets = new Map(CREATIVE_CATEGORIES.map((c) => [c[0], []]));
        for (const def of BLOCKS) {
          if (!def.id || def.render === 'none') continue;
          if (q && !(def.name.toLowerCase().includes(q) || def.key.includes(q))) continue;
          (buckets.get(categoryOf(def.key)) ?? buckets.get('Прочее')).push(def);
        }
        let shown = 0;
        for (const [label, list] of buckets) {
          if (!list.length) continue;
          shown += list.length;
          const head = document.createElement('div');
          head.className = 'pal-cat';
          head.textContent = label;
          pal.appendChild(head);
          for (const def of list) {
            const slot = document.createElement('div');
            slot.className = 'slot';
            const img = document.createElement('img');
            img.src = icon(def.id, 36);
            img.alt = def.name;
            slot.appendChild(img);
            slot.title = def.name;
            slot.onclick = () => onPick(def.id);
            pal.appendChild(slot);
          }
        }
        if (q && !shown) {
          const empty = document.createElement('div');
          empty.className = 'muted pal-empty';
          empty.textContent = `По запросу «${q}» в палитре ничего нет — попробуй «кирка», «шерсть», «песч»`;
          pal.appendChild(empty);
        }
      }
    }
  }

  selectSlot(i) {
    this.sel = i;
    [...this.slots, ...(this.invSlots ?? [])].forEach((s, n) => s.classList.toggle('sel', n % 9 === i));
  }

  /** Кинематографичная виньетка для режима «красивые» шейдеры. */
  setCinematic(on) {
    const el = this.el.vignette;
    if (!el || !el.classList) return;
    el.classList.toggle('cine', !!on);
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
      { key: 'renderDistance', label: 'Дальность прорисовки', min: 2, max: 16, step: 1, fmt: (v) => `${v} чанк · ~${v * 16} блоков` },
      { key: 'fov', label: 'Поле зрения', min: 55, max: 110, step: 1, fmt: (v) => `${v}°` },
      { key: 'sensitivity', label: 'Чувствительность мыши', min: 0.2, max: 3, step: 0.05, fmt: (v) => v.toFixed(2) },
      { key: 'sfx', label: 'Громкость эффектов', min: 0, max: 1, step: 0.05, fmt: (v) => `${Math.round(v * 100)}%` },
      { key: 'music', label: 'Громкость музыки', min: 0, max: 1, step: 0.05, fmt: (v) => `${Math.round(v * 100)}%` },
      { key: 'clouds', label: 'Облачность', min: 0, max: 1, step: 0.05, fmt: (v) => `${Math.round(v * 100)}%` },
      { key: 'renderScale', label: 'Разрешение рендера', min: 0.5, max: 1, step: 0.05, fmt: (v) => `${Math.round(v * 100)}%${v >= 0.98 ? ' · пиксель в пиксель' : v >= 0.8 ? ' · мягко' : ' · экономно'}` },
      { key: 'dayLength', label: 'Длина суток, мин', min: 2, max: 40, step: 1, fmt: (v) => `${v}` },
      { key: 'mobs', label: 'Мобов вокруг', min: 0, max: 32, step: 1, fmt: (v) => (v ? `${v}` : 'выкл') },
    ];
    const selects = [
      {
        key: 'shaders',
        label: 'Шейдеры',
        options: [
          [0, 'Выкл — базовая картинка'],
          [1, 'Мягкие — блики, дымка, живая вода'],
          [2, 'Красивые — тонмаппинг, небо в отражениях, виньетка'],
        ],
      },
    ];
    const checks = [
      { key: 'ao', label: 'Мягкое затенение (AO)' },
      { key: 'smoothLight', label: 'Плавный свет' },
      { key: 'viewBob', label: 'Покачивание камеры' },
      { key: 'autoJump', label: 'Автопрыжок через уступы' },
      { key: 'creative', label: 'Творчество: блоки не тратятся, урон не страшен, полёт доступен' },
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
    for (const d of selects) {
      const row = document.createElement('div');
      row.className = 'setting';
      const lab = document.createElement('label');
      lab.textContent = d.label;
      const sel = document.createElement('select');
      for (const [v, text] of d.options) {
        const o = document.createElement('option');
        o.value = String(v); o.textContent = text;
        if (Number(settings[d.key]) === v) o.selected = true;
        sel.appendChild(o);
      }
      sel.onchange = () => { const v = +sel.value; settings[d.key] = v; onChange(d.key, v); };
      row.append(lab, sel);
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
      const all = [btn, btn2];
      if (extra.onLowSpec) {
        const b3 = document.createElement('button');
        b3.className = 'btn ghost';
        b3.textContent = 'Слабое железо';
        b3.title = 'Меньше пикселей, без AO, реже свет и облака · дальность прорисовки не трогаем';
        b3.onclick = extra.onLowSpec;
        all.push(b3);
      }
      row.append(...all);
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
