/**
 * LiteCraft — точка входа: сцена, игровой цикл, ввод, добыча/установка блоков,
 * сохранение мира. Three.js только здесь и в src/render/*.
 */
import * as THREE from 'three';
import './ui/styles.css';
import { createRenderer } from './render/renderer.js';

import { Atlas } from './render/atlas.js';
import { createVoxelMaterials } from './render/voxelMaterial.js';
import { Sky } from './render/sky.js';
import { ChunkView } from './render/chunkView.js';
import { Particles } from './render/particles.js';
import { ViewModel, BlockTarget } from './render/viewmodel.js';

import { World } from './engine/world.js';
import { AIR, BLOCKS, byKey, damageOf, dropOf, isItem, mineMultiplier } from './engine/blocks.js';
import { CHUNK, HEIGHT, blockKey } from './engine/constants.js';
import { DEFAULT_SEED } from './engine/gen.js';
import { seedFromString } from './engine/noise.js';
import { mesherFlags } from './engine/mesher.js';
import { BIOME_NAMES } from './engine/gen.js';

import { Player } from './game/player.js';
import { raycast } from './game/raycast.js';
import { Audio } from './game/audio.js';
import { saveWorld, loadWorld, listWorlds, deleteWorld, saveSettings, loadSettings, saveLastSeed, loadLastSeed, debounce } from './game/save.js';
import { Hud, DEFAULT_SETTINGS } from './ui/hud.js';
import { installTouch } from './ui/touch.js';
import { Inventory, STACK } from './game/inventory.js';
import { RECIPES_CLEAN, canCraft, craft } from './game/craft.js';
import { Mobs } from './game/mobs.js';

const HOTBAR_DEFAULT = ['grass', 'dirt', 'stone', 'cobblestone', 'planks', 'log', 'glass', 'torch', 'glowstone'];
const FIXED = 1 / 60;

export class Game {
  constructor(deps = {}) {
    this.canvas = document.getElementById('gl');
    this.renderer = deps.renderer ?? createRenderer(this.canvas);
    if (!deps.renderer) this.renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 2));

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(74, 1, 0.08, 1800);
    this.camera.rotation.order = 'YXZ';
    this.scene.add(this.camera);

    this.atlas = new Atlas();
    this.materials = createVoxelMaterials(this.atlas);
    this.sky = new Sky(this.scene);
    this.particles = new Particles(this.scene);
    this.target = new BlockTarget(this.atlas);
    this.scene.add(this.target.group);
    this.viewModel = new ViewModel(this.atlas);
    this.camera.add(this.viewModel.group);

    this.settings = { ...DEFAULT_SETTINGS, ...loadSettings() };
    mesherFlags.ao = this.settings.ao;
    mesherFlags.smoothLight = this.settings.smoothLight;

    this.audio = new Audio();
    this.hud = new Hud(this.atlas);
    this.input = { forward: 0, back: 0, left: 0, right: 0, jump: 0, sneak: 0, sprint: 0, mine: 0, place: 0, lookX: 0, lookY: 0, analog: 1 };
    this.keys = new Set();

    this.state = {
      running: false, paused: false, loading: false, hudHidden: false,
      time: 0.28, seed: DEFAULT_SEED, world: null,
      hotbar: HOTBAR_DEFAULT.map((k) => BLOCKS.find((b) => b.key === k)?.id ?? 0),
      sel: 0, breakProgress: 0, breakTarget: null, lastHit: null, dragging: false,
      hp: 20, regenT: 0, saveT: 0, placeCd: 0, stepT: 0, fps: 0, ms: 0,
      acc: 0, flyTapT: 0, sprintTapT: 0,
    };

    this.blockTint = this.computeTints();
    this.inv = new Inventory();
    this.state.hotbar = this.inv.hot;
    this.state.counts = this.inv.hotN;
    this.state.sel = this.inv.sel;
    this.attackCd = 0;
    this.state.mobTarget = null;
    this.mobs = new Mobs({
      world: null,
      scene: this.scene,
      material: this.materials.solid,
      atlas: this.atlas,
      particles: this.particles,
      audio: this.audio,
      onPlayerHit: (dmg, mob) => this.hitByMob(dmg, mob),
      onDrop: (id, n) => this.pickup(id, n),
    });
    this.debouncedSave = debounce(() => this.save(), 1500);
    this.applySettings(null, true);
    this.bindUI();
    this.bindInput();
    this.resize();
    addEventListener('resize', () => this.resize());
    this.hud.show('menu');
    this.refreshWorlds();
    document.addEventListener('visibilitychange', () => { if (document.hidden && this.state.running) this.pause(); });
    requestAnimationFrame((t) => this.frame(t));
  }

  /** Средний цвет каждого блока — для частиц. */
  computeTints() {
    const out = new Map();
    for (const def of BLOCKS) {
      if (!def.tiles) continue;
      const name = def.tiles.side ?? def.tiles.all;
      const cv = this.atlas.canvases[name];
      if (!cv) continue;
      const ctx = cv.getContext('2d');
      const d = ctx.getImageData(0, 0, cv.width, cv.height).data;
      let r = 0, g = 0, b = 0, n = 0;
      for (let i = 0; i < d.length; i += 4) {
        if (d[i + 3] < 40) continue;
        r += d[i]; g += d[i + 1]; b += d[i + 2]; n++;
      }
      if (n) out.set(def.id, [r / n / 255, g / n / 255, b / n / 255]);
    }
    return out;
  }

  // ------------------------------------------------------------- меню/UI
  bindUI() {
    const { el } = this.hud;
    el.seed.value = loadLastSeed() ?? '';
    document.getElementById('play').onclick = () => this.startFromMenu();
    document.getElementById('rnd-seed').onclick = () => {
      el.seed.value = String((Math.random() * 1e9) | 0);
      this.audio.ui('click');
    };
    el.seed.onkeydown = (e) => { if (e.key === 'Enter') this.startFromMenu(); };
    document.getElementById('open-settings').onclick = () => this.openSettings('settings');
    document.getElementById('pause-settings').onclick = () => this.openSettings('settings');
    document.getElementById('settings-close').onclick = () => {
      this.hud.show(this.state.running ? 'pause' : 'menu');
      if (this.state.running) this.resume();
    };
    document.getElementById('resume').onclick = () => this.resume();
    document.getElementById('save-now').onclick = () => { this.save(true); };
    document.getElementById('pause-quit').onclick = () => { this.save(); this.toMenu(); };
    this.hud.onHotbarSelect = (i, how) => {
      if (this.inventoryOpen) {
        this.invTarget = i;
        this.hud.markInventorySelection(i);
      } else {
        this.selectSlot(i);
        if (how === 'click') this.resume();
      }
    };
    this.hud.buildHotbar(this.inv.hot, this.inv.sel, this.hud.onHotbarSelect, null);
    window.__hudHover = () => this.audio.ui('hover');
  }

  openSettings(from) {
    this.hud.settingsForm(this.settings, (key, value) => this.applySettings(key, value), {
      onRegenerate: () => { if (this.state.world) { this.state.world.rebuildAll?.(); this.chunkView?.rebuildAll(); } },
      onReset: () => {
        this.settings = { ...DEFAULT_SETTINGS };
        saveSettings(this.settings);
        this.applySettings(null, true);
        this.openSettings(from);
      },
    });
    this.settingsFrom = from;
    this.hud.show('settings');
  }

  applySettings(key, value) {
    if (key && value !== null) {
      this.settings[key] = value;
      saveSettings(this.settings);
    }
    const s = this.settings;
    mesherFlags.ao = s.ao;
    mesherFlags.smoothLight = s.smoothLight;
    if (this.chunkView) this.chunkView.setRenderDistance(s.renderDistance);
    if (this.audio.ready) this.audio.setVolumes(s.sfx, s.music);
    this.audio.musicVolume = s.music;
    this.audio.sfxVolume = s.sfx;
    this.camera.fov = s.fov;
    this.camera.updateProjectionMatrix();
    this.hud.hideDebug(!s.showDebug);
    if (key === 'ao' || key === 'smoothLight') { this.chunkView?.rebuildAll(); }
    if (key === 'touch' || key === null) this.setupTouch();
  }

  setupTouch() {
    const coarse = matchMedia('(pointer: coarse)').matches;
    const want = this.settings.touch || coarse;
    const box = this.hud.el.touch;
    if (!box) return;
    box.classList.toggle('hidden', !want);
    if (want && !this.touchApi) {
      this.touchApi = installTouch(box, {
        input: this.input,
        api: {
          toggleFly: () => this.toggleFly(),
          toggleInv: () => this.toggleInventory(),
          place: () => this.tryPlace(),
          onMineStart: () => { this.input.mine = 1; },
          onMineEnd: () => { this.input.mine = 0; },
          tap: () => { this.tryPlace(); },
        },
      });
    }
  }

  refreshWorlds() {
    const worlds = listWorlds().map((w) => ({ seed: w.seed, edits: w.edits?.length ?? w.edits ?? 0, saved: w.saved }));
    this.hud.renderWorlds(worlds, (seed) => this.start(seed), (seed) => {
      if (confirm(`Удалить мир «${seed}»? Это сотрёт все изменения.`)) {
        deleteWorld(seed);
        this.refreshWorlds();
        this.hud.toast('Мир удалён', 'warn');
      }
    });
  }

  startFromMenu() {
    const raw = this.hud.el.seed.value.trim();
    const seed = raw === '' ? ((Math.random() * 1e9) | 0) : seedFromString(raw);
    this.start(seed);
  }

  // ---------------------------------------------------------------- запуск
  async start(seedRaw) {
    const seed = (typeof seedRaw === 'string' || typeof seedRaw === 'number') && !Number.isNaN(Number(seedRaw)) ? Number(seedRaw) >>> 0 : seedFromString(String(seedRaw));
    saveLastSeed(seed);
    const world = new World(seed);
    const save = loadWorld(seed);
    if (save?.edits) world.loadEdits(save.edits);
    this.state.world = world;
    this.state.seed = seed;
    this.state.time = save?.time ?? 0.28;
    void 0;

    this.player = new Player(world);
    const spawn = save?.spawn ?? world.findSpawn();
    this.player.spawn(spawn[0], spawn[1], spawn[2]);
    if (save?.yaw !== undefined) { this.player.yaw = save.yaw; this.player.pitch = save.pitch; }
    if (save?.hp !== undefined) this.state.hp = save.hp;
    this.mobs.world = world;
    this.mobs.clear();
    this.chunkView = new ChunkView(world, this.scene, this.materials, this.atlas);
    this.chunkView.setRenderDistance(this.settings.renderDistance);
    this.setupInventory(!!save ? save.creative : undefined, save?.inv ?? save?.hotbar);
    this.syncHotbar();
    this.hud.setHealth(this.state.hp);


    this.state.running = false;
    this.state.paused = false;
    this.state.loading = true;
    this.hud.show('loading');
    await this.prepare(Math.min(this.settings.renderDistance, 5));
    this.state.loading = false;
    // спавн мог оказаться внутри кроны/скалы — ищем открытую клетку по реальным блокам
    const spot = world.findOpenSpot(Math.floor(this.player.x), Math.floor(this.player.z));
    if (spot) this.player.spawn(spot[0], spot[1], spot[2]);
    else this.settlePlayer();
    if (!this.inv.creative) this.hud.toast('Выживание: бей дерево ЛКМ, E — инвентарь и крафт', '');
    this.state.running = true;
    this.state.hp = Math.max(1, this.state.hp);
    this.audio.resume();
    this.audio.setVolumes(this.settings.sfx, this.settings.music);
    this.hud.show(null);
    this.hud.toast(`Мир ${seed} готов · ${world.chunkCount} чанков`);
    this.lockPointer();
  }

  /** Предзагрузка чанков с прогрессом. */
  prepare(radius) {
    const world = this.state.world;
    const pcx = Math.floor(this.player.x / CHUNK);
    const pcz = Math.floor(this.player.z / CHUNK);
    const queue = [];
    for (let dz = -radius; dz <= radius; dz++) {
      for (let dx = -radius; dx <= radius; dx++) queue.push([pcx + dx, pcz + dz, dx * dx + dz * dz]);
    }
    queue.sort((a, b) => a[2] - b[2]);
    const total = queue.length;
    const genList = queue.slice();
    const meshList = queue.map(([cx, cz]) => [cx, cz]);
    return new Promise((resolve) => {
      const pumpGen = () => {
        const t0 = performance.now();
        while (genList.length && performance.now() - t0 < 14) {
          const [cx, cz] = genList.shift();
          world.ensureChunk(cx, cz);
        }
        this.hud.setLoading(0.15 + 0.5 * (1 - genList.length / total), `генерация ландшафта: ${total - genList.length}/${total} чанков`);
        if (genList.length) requestAnimationFrame(pumpGen);
        else requestAnimationFrame(pumpMesh);
      };
      const pumpMesh = () => {
        const t0 = performance.now();
        while (meshList.length && performance.now() - t0 < 14) {
          const [cx, cz] = meshList.shift();
          for (const k of [...world.dirtyLight]) {
            const c = world.getChunk(...World.decode(k));
            if (c) world.recomputeLight(c);
          }
          world.dirtyLight.clear();
          this.chunkView.remesh(cx, cz);
          world.dirtyMesh.delete(this.chunkView.constructor.key(cx, cz));
        }
        this.hud.setLoading(0.65 + 0.35 * (1 - meshList.length / total), `построение мешей: ${total - meshList.length}/${total}`);
        if (meshList.length) requestAnimationFrame(pumpMesh);
        else resolve();
      };
      pumpGen();
    });
  }

  // ---------------------------------------------------------------- ввод
  bindInput() {
    const canvas = this.canvas;
    addEventListener('keydown', (e) => this.onKey(e, true));
    addEventListener('keyup', (e) => this.onKey(e, false));
    addEventListener('blur', () => { this.keys.clear(); this.input.mine = 0; });

    canvas.addEventListener('mousedown', (e) => {
      if (!this.state.running) return;
      if (e.button === 0) this.input.mine = 1;
      if (e.button === 2) this.input.place = 1;
      if (e.button === 1) this.pickBlock();
      this.state.dragging = true;
      this.audio.resume();
    });
    addEventListener('mouseup', (e) => {
      if (e.button === 0) { this.input.mine = 0; this.state.breakProgress = 0; this.target.setBreakProgress(0); }
      if (e.button === 2) this.input.place = 0;
      this.state.dragging = false;
    });
    canvas.addEventListener('contextmenu', (e) => e.preventDefault());
    addEventListener('wheel', (e) => {
      if (!this.state.running || this.inventoryOpen) return;
      this.selectSlot((this.state.sel + (e.deltaY > 0 ? 1 : -1) + 9) % 9);
    }, { passive: true });
    addEventListener('mousemove', (e) => {
      if (!this.state.running || this.state.paused || this.inventoryOpen) return;
      const locked = document.pointerLockElement === canvas;
      if (!locked && !this.state.dragging) return;
      const s = 0.0022 * this.settings.sensitivity * (locked ? 1 : 1.25);
      this.input.lookX += (e.movementX ?? 0) * s;
      this.input.lookY -= (e.movementY ?? 0) * s;
    });
    document.addEventListener('pointerlockchange', () => {
      if (!document.pointerLockElement && this.state.running && !this.state.paused && !this.inventoryOpen) this.pause();
    });
  }

  onKey(e, down) {
    const code = e.code;
    const block = ['Tab', 'F1', 'F3', 'Space', 'KeyE', 'Slash', 'Backquote'].includes(code);
    if (down && block) e.preventDefault();
    if (down) this.keys.add(code); else this.keys.delete(code);
    if (!down) return;

    const st = this.state;
    if (code === 'Escape') {
      if (this.inventoryOpen) this.closeInventory();
      else if (st.running && !st.paused) this.pause();
      else if (st.paused) this.resume();
      return;
    }
    if (!st.running) return;
    if (code === 'KeyE') { this.toggleInventory(); return; }
    if (code === 'F3') { this.settings.showDebug = !this.settings.showDebug; this.hud.hideDebug(!this.settings.showDebug); saveSettings(this.settings); return; }
    if (code === 'F1') { st.hudHidden = !st.hudHidden; this.hud.hideHud(st.hudHidden); return; }
    if (code === 'KeyF') { this.fullscreen(); return; }
    if (code === 'KeyM') {
      const on = this.audio.toggleMusic();
      this.hud.toast(on ? 'Музыка: вкл' : 'Музыка: выкл');
      return;
    }
    if (code === 'KeyN') { st.time = (st.time + 0.25) % 1; this.hud.toast('Время перемотано'); return; }
    if (code === 'KeyR') { this.unstick(); return; }
    if (code === 'KeyQ') { if (!this.inv.creative) this.inv.set('hot', this.inv.sel, this.inv.id('hot', this.inv.sel), Math.max(0, this.inv.n('hot', this.inv.sel) - 1)); else this.inv.set('hot', this.inv.sel, AIR, 0); this.syncHotbar(); return; }
    if (code.startsWith('Digit')) {
      const n = +code.slice(5);
      if (n >= 1 && n <= 9) this.selectSlot(n - 1);
      return;
    }
    // двойное нажатие — пробел (полёт) и W (бег)
    if (code === 'Space') {
      const now = performance.now();
      if (this.lastSpace && now - this.lastSpace < 280) this.toggleFly();
      this.lastSpace = now;
    }
    if (code === 'KeyW') {
      const now = performance.now();
      if (this.lastW && now - this.lastW < 280) this.keys.add('ControlLeft');
      this.lastW = now;
    }
  }

  readKeys() {
    const k = this.keys;
    const i = this.input;
    const on = (code) => (k.has(code) ? 1 : 0);
    i.forward = on('KeyW') || on('ArrowUp') || i.tForward;
    i.back = on('KeyS') || on('ArrowDown') || i.tBack;
    i.left = on('KeyA') || on('ArrowLeft') || i.tLeft;
    i.right = on('KeyD') || on('ArrowRight') || i.tRight;
    i.jump = on('Space') || i.tJump;
    i.sneak = on('ShiftLeft') || on('ShiftRight') || i.tSneak;
    i.sprint = on('ControlLeft') || on('ControlRight') || i.tSprint;
    i.analog = i.tAnalog ?? 1;
    i.autoJump = this.settings.autoJump;
  }

  toggleFly() {
    this.player.flying = !this.player.flying;
    if (this.player.flying) this.player.vy = 0;
    this.hud.toast(this.player.flying ? 'Полёт: вкл (креатив)' : 'Полёт: выкл');
    this.audio.ui('click');
  }

  selectSlot(i) {
    const n = ((i | 0) % 9 + 9) % 9;
    this.inv.sel = n;
    this.state.sel = n;
    this.hud.selectSlot(n);
    this.viewModel.setBlock(this.inv.hot[n]);
    this.hud.showBlockName(this.inv.hot[n]);
    this.state.breakProgress = 0;
    this.target.setBreakProgress(0);
  }

  /** Перерисовать хотбар/руку по текущему состоянию инвентаря. */
  syncHotbar() {
    this.state.hotbar = this.inv.hot;
    this.state.counts = this.inv.hotN;
    this.state.sel = this.inv.sel;
    this.hud.buildHotbar(this.inv.hot, this.inv.sel, this.hud.onHotbarChange, this.inv.creative ? null : this.inv.hotN);
    this.hud.selectSlot(this.inv.sel);
    this.viewModel.setBlock(this.inv.hot[this.inv.sel]);
    if (this.inventoryOpen) this.refreshInventoryUI();
  }

  /** Режим мира + содержимое инвентаря (из сохранения или по умолчанию). */
  /** Сменить режим, не теряя мир: творчество добирает хотбар, выживание — нет. */
  setCreative(on) {
    this.inv.creative = !!on;
    this.state.creative = !!on;
    if (on) {
      for (let i = 0; i < 9; i++) this.inv.hotN[i] = 0;
      if (!this.inv.hot.some((id) => id)) HOTBAR_DEFAULT.forEach((k, i) => { this.inv.hot[i] = byKey(k); });
    } else {
      // выдадим выживальщику ровно то, что он заработал; пусто — значит пусто
    }
    this.syncHotbar();
  }

  setupInventory(creativeSaved, invData) {
    const creative = typeof creativeSaved === 'boolean' ? creativeSaved : !!this.settings.creative;
    this.inv.creative = creative;
    this.inv.hot.fill(0); this.inv.hotN.fill(0);
    this.inv.main.fill(0); this.inv.mainN.fill(0);
    if (invData && Array.isArray(invData.hot)) {
      this.inv.load(typeof invData.hot === 'object' && !Array.isArray(invData.hot) ? invData : { hot: invData, hotN: [], main: [], mainN: [], creative });
    } else if (creative) {
      HOTBAR_DEFAULT.forEach((k, i) => { this.inv.hot[i] = byKey(k); });
    } else if (invData == null) {
      // выживание: как в оригинале — руки пусты, всё добывается и крафтится
    }
    this.inv.sel = Math.max(0, Math.min(8, this.inv.sel));
    this.state.creative = creative;
  }

  /** Выдать предмет (сбор, крафт, дроп). */
  pickup(id, n = 1) {
    if (!id) return;
    const left = this.inv.add(id, n);
    if (left > 0) { this.hud.toast('Инвентарь полон', 'warn'); return; }
    this.syncHotbar();
    this.scheduleSave();
  }

  /** Верстак в радиусе 4 блоков — открывает рецепты посложнее. */
  nearCraftingTable() {
    const world = this.state.world;
    if (!world) return false;
    const p = this.player;
    const tableId = byKey('crafting_table');
    const x0 = Math.floor(p.x) - 4, x1 = Math.floor(p.x) + 4;
    const y0 = Math.floor(p.y) - 2, y1 = Math.floor(p.y) + 3;
    const z0 = Math.floor(p.z) - 4, z1 = Math.floor(p.z) + 4;
    for (let y = y0; y <= y1; y++) {
      for (let z = z0; z <= z1; z++) {
        for (let x = x0; x <= x1; x++) if (world.getBlock(x, y, z) === tableId) return true;
      }
    }
    return false;
  }

  // ------------------------------------------------------------ инвентарь UI
  refreshInventoryUI() {
    const near = this.nearCraftingTable();
    const snap = this.inv.snapshot();
    const recipes = RECIPES_CLEAN.map((r) => ({
      name: r.name,
      outId: r.outId,
      n: r.n,
      table: r.table,
      ok: canCraft(r, this.inv, near),
      need: r.need.map((x) => ({ id: x.id, n: x.n, have: Math.min(this.inv.count(x.id), 999) })),
    }));
    this.hud.renderInventory({
      snap,
      recipes,
      nearTable: near,
      creative: this.inv.creative,
      icon: (id, size) => this.atlas.icon(id, size),
      names: (id) => BLOCKS[id]?.name ?? '—',
      onSlot: (kind, i) => this.inventorySlotClick(kind, i),
      onPick: (id) => this.inventoryPick(id),
      onCraft: (idx) => this.doCraft(idx),
      onClose: () => this.closeInventory(),
    });
  }

  inventorySlotClick(kind, i) {
    const inv = this.inv;
    if (inv.cursor) {
      const cur = inv.id(kind, i);
      if (cur === inv.cursor) {
        const space = inv.creative ? STACK : STACK - inv.n(kind, i);
        const put = Math.min(space, inv.cursorN);
        inv.set(kind, i, cur, inv.creative ? 0 : inv.n(kind, i) + put);
        if (!inv.creative) inv.cursorN -= put;
        if (inv.cursorN <= 0 || inv.creative) { inv.cursor = 0; inv.cursorN = 0; }
      } else {
        const tId = cur, tN = inv.n(kind, i);
        inv.set(kind, i, inv.cursor, inv.creative ? 0 : inv.cursorN);
        inv.cursor = tId;
        inv.cursorN = inv.creative ? 1 : tN;
        if (inv.creative) { inv.cursor = 0; inv.cursorN = 0; }
      }
    } else {
      const id = inv.id(kind, i);
      if (!id) return;
      if (inv.creative) { this.inventoryPick(id); return; }
      inv.cursor = id;
      inv.cursorN = inv.n(kind, i);
      inv.set(kind, i, 0, 0);
    }
    this.syncHotbar();
    this.audio.ui('click');
  }

  inventoryPick(id) {
    const slot = this.invTarget ?? this.inv.sel;
    this.inv.set('hot', slot, id, this.inv.creative ? 0 : STACK);
    this.invTarget = slot;
    this.syncHotbar();
    this.hud.showBlockName(id);
    this.audio.ui('click');
    this.scheduleSave();
  }

  doCraft(idx) {
    const r = RECIPES_CLEAN[idx];
    if (!r) return;
    const near = this.nearCraftingTable();
    if (!canCraft(r, this.inv, near)) {
      this.audio.deny();
      this.hud.toast(r.table && !near ? 'Нужен верстак рядом (поставь и подойди)' : 'Не хватает материалов', 'warn');
      return;
    }
    if (craft(r, this.inv)) {
      this.audio.place('wood');
      this.hud.toast(`Скрафчено: ${BLOCKS[r.outId].name}`, '');
      this.syncHotbar();
      this.scheduleSave();
    }
  }

  toggleInventory() {
    if (this.inventoryOpen) { this.closeInventory(); return; }
    this.inventoryOpen = true;
    this.invTarget = this.inv.sel;
    this.hud.show('inventory');
    this.hud.el.hud.dataset.keep = '1';
    this.hud.el.hud.classList.remove('hidden');
    this.keys.clear();
    this.input.mine = 0; this.input.place = 0;
    document.exitPointerLock?.();
    this.audio.openInv();
    this.refreshInventoryUI();
  }

  closeInventory() {
    if (!this.inventoryOpen) return;
    this.inventoryOpen = false;
    const inv = this.inv;
    if (inv.cursor) {
      // недоставленный стек возвращается в инвентарь, а не исчезает
      if (!inv.creative) inv.add(inv.cursor, inv.cursorN);
      inv.cursor = 0; inv.cursorN = 0;
    }
    this.invTarget = null;
    this.hud.el.hud.dataset.keep = '0';
    this.hud.show(null);
    this.syncHotbar();
    this.lockPointer();
    this.audio.ui('click');
  }

  pause() {
    this.input.mine = 0; this.input.place = 0; this.keys.clear();
    if (!this.state.running || this.state.paused) return;
    this.state.paused = true;
    document.exitPointerLock?.();
    this.hud.el.pauseStats.textContent = this.statsLine();
    this.hud.show('pause');
    this.save();
  }

  resume() {
    this.state.paused = false;
    this.inventoryOpen = false;
    this.hud.show(null);
    this.lockPointer();
    this.audio.resume();
  }

  toMenu() {
    this.input.mine = 0; this.input.place = 0; this.keys.clear();
    this.mobs.clear();
    this.state.running = false;
    this.state.paused = false;
    this.inventoryOpen = false;
    document.exitPointerLock?.();
    if (this.chunkView) {
      for (const [k, obj] of this.chunkView.objects) {
        this.chunkView.disposeObject(obj);
        this.chunkView.objects.delete(k);
      }
    }
    if (this.state.world) {
      for (const k of [...this.state.world.chunks.keys()]) {
        const [cx, cz] = World.decode(k);
        this.state.world.removeChunk(cx, cz);
      }
      this.state.world.chunks.clear();
    }
    this.refreshWorlds();
    this.hud.show('menu');
  }

  lockPointer() {
    if (this.settings.touch) return;      // на тач-устройстве без указателя
    if (matchMedia('(hover: none)').matches && !this.settings.touch) return;
    if (document.pointerLockElement === this.canvas) return;
    try {
      // во встроенном превью pointer lock часто запрещён — тогда не роняем игру,
      // обзор остаётся перетаскиванием кнопки мыши
      const r = this.canvas.requestPointerLock?.();
      if (r && typeof r.catch === 'function') r.catch(() => {});
    } catch { /* ignore */ }
  }

  /** Если игрок внутри блоков — найти свободную клетку над ним. */
  settlePlayer() {
    const p = this.player;
    if (!p || !this.state.world) return false;
    if (!p.collides(p.x, p.y, p.z)) return false;
    const x = Math.floor(p.x);
    const z = Math.floor(p.z);
    for (let y = Math.floor(p.y); y < HEIGHT; y++) {
      if (!p.collides(x + 0.5, y + 0.02, z + 0.5)) {
        p.x = x + 0.5; p.y = y + 0.02; p.z = z + 0.5; p.vy = 0;
        this.hud.toast('Подняты над блоками', 'warn');
        return true;
      }
    }
    const sp = this.state.world.findSpawn();
    p.spawn(sp[0], sp[1], sp[2]);
    return true;
  }

  unstick() {
    const world = this.state.world;
    const x = Math.floor(this.player.x);
    const z = Math.floor(this.player.z);
    for (let y = HEIGHT - 2; y > 0; y--) {
      if (world.isOpaque(x, y, z)) {
        this.player.x = x + 0.5; this.player.z = z + 0.5; this.player.y = y + 1.05;
        this.player.vy = 0;
        this.hud.toast('Вы вынесены на поверхность');
        return;
      }
    }
    const s = world.findSpawn();
    this.player.spawn(s[0], s[1], s[2]);
    this.hud.toast('Спавн сброшен');
  }

  // ------------------------------------------------------ взаимодействие
  pickBlock() {
    const hit = this.state.lastHit;
    if (!hit) return;
    const id = hit.id;
    this.inv.set('hot', this.inv.sel, id, this.inv.creative ? 0 : Math.max(1, this.inv.n('hot', this.inv.sel)));
    this.hud.buildHotbar(this.state.hotbar, this.state.sel, this.hud.onHotbarChange);
    this.hud.selectSlot(this.state.sel);
    this.viewModel.setBlock(id);
    this.hud.showBlockName(id);
    this.audio.ui('click');
  }

  tryPlace() {
    const hit = this.state.lastHit;
    const st = this.state;
    if (!hit) return;
    const id = this.inv.hot[this.inv.sel];
    if (!id) { this.audio.deny(); this.hud.toast('Пустой слот — E открывает инвентарь', 'warn'); return; }
    if (isItem(id)) { this.audio.deny(); this.hud.toast(`${BLOCKS[id].name} — предмет, его не поставить`, 'warn'); return; }
    if (!this.inv.creative && this.inv.hotN[this.inv.sel] <= 0) { this.audio.deny(); this.hud.toast('Блоки кончились', 'warn'); return; }
    const world = st.world;
    let tx = hit.x + hit.nx;
    let ty = hit.y + hit.ny;
    let tz = hit.z + hit.nz;
    const targetId = world.getBlock(hit.x, hit.y, hit.z);
    const replaceable = BLOCKS[targetId]?.replaceable || BLOCKS[targetId]?.liquid;
    if (replaceable) { tx = hit.x; ty = hit.y; tz = hit.z; }
    if (ty < 0 || ty >= HEIGHT) return;
    const cur = world.getBlock(tx, ty, tz);
    if (cur !== 0 && !BLOCKS[cur].replaceable && !BLOCKS[cur].liquid) return;
    if (BLOCKS[id].solid && this.player.intersectsBlock(tx, ty, tz)) {
      this.audio.deny();
      this.hud.toast('Здесь стоит игрок', 'warn');
      return;
    }
    if (!world.setBlock(tx, ty, tz, id)) return;
    if (!this.inv.creative) { this.inv.consumeSelected(1); this.syncHotbar(); }
    this.audio.place(BLOCKS[id].sound);
    this.viewModel.triggerSwing();
    const tint = this.blockTint.get(id) ?? [0.8, 0.8, 0.8];
    this.particles.burst(tx + 0.5, ty + 0.2, tz + 0.5, 4, tint, { speed: 1.2, life: 0.35, spread: 0.5 });
    this.scheduleSave();
  }

  mineTick(dt) {
    const st = this.state;
    const world = st.world;
    const hit = st.lastHit;
    if (st.mobTarget) {
      if (st.breakProgress > 0) { st.breakProgress = 0; this.target.setBreakProgress(0); }
      return;
    }
    if (!this.input.mine || !hit) {
      if (st.breakProgress > 0) { st.breakProgress = 0; this.target.setBreakProgress(0); }
      this.hud.setMining(false);
      return;
    }
    const key = blockKey(hit.x, hit.y, hit.z);
    if (st.breakTarget !== key) { st.breakTarget = key; st.breakProgress = 0; }
    const def = BLOCKS[hit.id];
    if (!def.breakable) {
      if (st.breakTarget !== key) {
        st.breakTarget = key;
        this.audio.deny();
        this.hud.toast(`${def.name}: можно только обставить со всех сторон`, 'warn');
      }
      st.breakProgress = 0;
      this.target.setBreakProgress(0);
      return;
    }
    const toolId = this.inv.hot[this.inv.sel];
    const total = Math.max(0.08, def.hardness / Math.max(0.34, mineMultiplier(def, toolId)));
    const speed = this.player.flying ? 2.6 : 1;
    st.breakProgress += (dt / total) * speed;
    this.hud.setMining(true);
    if (performance.now() - (this.lastHitSound ?? 0) > 210) {
      this.lastHitSound = performance.now();
      this.audio.hit(def.sound, 0.8);
      const tint = this.blockTint.get(hit.id) ?? [0.7, 0.7, 0.7];
      this.particles.burst(hit.x + 0.5 + hit.nx * 0.5, hit.y + 0.5 + hit.ny * 0.5, hit.z + 0.5 + hit.nz * 0.5, 3, tint, { speed: 1.6, life: 0.3, spread: 0.35, gravity: 16 });
    }
    this.target.setBreakProgress(Math.min(0.999, st.breakProgress));
    if (st.breakProgress >= 1) {
      st.breakProgress = 0;
      st.breakTarget = null;
      this.target.setBreakProgress(0);
      this.hud.setMining(false);
      world.setBlock(hit.x, hit.y, hit.z, AIR);
      if (!this.inv.creative) this.pickup(dropOf(hit.id), 1);
      this.audio.breakBlock(def.sound);
      const tint = this.blockTint.get(hit.id) ?? [0.7, 0.7, 0.7];
      this.particles.burst(hit.x + 0.5, hit.y + 0.5, hit.z + 0.5, 14, tint, { speed: 3.4, life: 0.8, spread: 0.8 });
      this.viewModel.triggerSwing();
      this.scheduleSave();
    }
  }

  // ------------------------------------------------------------- сохранение
  scheduleSave() { this.state.saveT = 2.5; }

  save(now = false) {
    if (!this.state.world) return;
    const world = this.state.world;
    const data = {
      seed: this.state.seed,
      saved: Date.now(),
      spawn: [this.player.x, this.player.y, this.player.z],
      yaw: this.player.yaw, pitch: this.player.pitch,
      time: this.state.time,
      hotbar: this.inv.hot.slice(),
      inv: this.inv.serialize(),
      creative: this.inv.creative,
      hp: this.state.hp,
      edits: world.serializeEdits(),
    };
    void now;
    if (saveWorld(this.state.seed, data)) {
      this.hud.toast(`Сохранено · правок: ${world.editedCount}`, '');
    }
  }

  statsLine() {
    const w = this.state.world;
    if (!w) return '';
    return `чанков в памяти: ${w.chunkCount} · правок: ${w.editedCount} · меши: ${this.chunkView?.chunkMeshCount ?? 0}`;
  }

  // ------------------------------------------------------------ цикл
  resize() {
    const w = innerWidth, h = innerHeight;
    this.renderer.setSize(w, h, false);
    this.renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 2));
    this.camera.aspect = w / Math.max(1, h);
    this.camera.updateProjectionMatrix();
  }

  frame(now) {
    requestAnimationFrame((t) => this.frame(t));
    // rAF-время может прыгнуть (фоновая вкладка, подставные часы) — защищаемся
    const raw = (now - (this.lastFrame ?? now)) / 1000;
    const dt = Number.isFinite(raw) ? Math.max(0, Math.min(0.1, raw)) : 1 / 60;
    this.lastFrame = now;
    this.state.fps = this.state.fps * 0.9 + (1 / Math.max(0.0005, dt)) * 0.1;
    const t0 = performance.now();

    if (this.state.running && !this.state.paused && !this.inventoryOpen && !this.state.loading) this.step(dt);
    else if (this.state.world) {
      // в меню/паузе всё равно обновляем небо, чтобы фон жил
      this.sky.update(this.state.time, this.settings.clouds, this.camera.position, this.materials.uniforms);
    }

    this.renderer.render(this.scene, this.camera);
    this.state.ms = this.state.ms * 0.9 + (performance.now() - t0) * 0.1;
  }

  step(dt) {
    const st = this.state;
    const world = st.world;
    const input = this.input;
    this.readKeys();

    // взгляд
    this.player.yaw -= input.lookX;
    this.player.pitch = Math.max(-1.5533, Math.min(1.5533, this.player.pitch + input.lookY));
    input.lookX = 0; input.lookY = 0;

    // физика фиксированными шагами
    st.acc = Math.min(st.acc + dt, 0.2);
    let steps = 0;
    let res = { stepped: false, splash: false };
    while (st.acc >= FIXED && steps < 5) {
      st.acc -= FIXED;
      steps++;
      const r = this.player.update(FIXED, input);
      void r;
      res.stepped = res.stepped || r.stepped;
      res.splash = res.splash || r.splash;
    }
    if (res.stepped && !this.player.flying) {
      const id = world.getBlock(Math.floor(this.player.x), Math.floor(this.player.y - 0.2), Math.floor(this.player.z));
      this.audio.step(BLOCKS[id]?.sound ?? 'dirt');
    }
    if (res.splash) this.audio.splash();

    // урон от падения
    if (this.player.fallDamage > 0.05) {
      const dmg = Math.floor(this.player.fallDamage);
      this.player.fallDamage = 0;
      if (dmg > 0 && !this.player.flying) {
        st.hp = Math.max(0, st.hp - dmg);
        this.hud.setHealth(st.hp);
        this.hud.hurt();
        this.audio.land(1.6);
        if (st.hp <= 0) this.respawn();
      }
    }
    if (this.player.justLanded) {
      this.audio.land(this.player.justLanded);
      this.player.justLanded = 0;
    }

    // регенерация
    st.regenT += dt;
    if (st.regenT > 6 && st.hp < 20) { st.regenT = 0; st.hp = Math.min(20, st.hp + 1); this.hud.setHealth(st.hp); }

    // камера
    const cam = this.camera;
    const bobAmp = this.settings.viewBob ? 1 : 0;
    const bob = Math.sin(this.player.bob) * 0.045 * bobAmp * Math.min(1, Math.hypot(this.player.vx, this.player.vz) / 4);
    cam.position.set(this.player.x, this.player.eyeY + bob, this.player.z);
    cam.rotation.set(this.player.pitch, this.player.yaw, Math.sin(this.player.bob * 0.5) * 0.006 * bobAmp);
    const targetFov = this.settings.fov + (this.player.sprinting ? 5 : 0) + (this.player.inWater ? -6 : 0) + (this.player.flying ? 3 : 0);
    cam.fov += (targetFov - cam.fov) * Math.min(1, dt * 8);
    cam.updateProjectionMatrix();

    // цель
    const dir = this.player.forward({});
    const eye = { x: cam.position.x, y: cam.position.y, z: cam.position.z };
    st.lastHit = raycast(world, eye.x, eye.y, eye.z, dir.x, dir.y, dir.z, 6.2);
    this.target.show(st.lastHit);
    if (!st.lastHit) this.target.setBreakProgress(0);

    // действия
    this.attackTick(dt);
    this.mineTick(dt);
    st.placeCd -= dt;
    if (input.place && st.placeCd <= 0) { this.tryPlace(); st.placeCd = 0.2; }

    // мир
    this.chunkView.update(this.player);
    this.particles.update(dt);
    this.viewModel.update(dt, { moving: Math.min(1, Math.hypot(this.player.vx, this.player.vz) / 5), breaking: this.input.mine && st.lastHit ? 1 : 0, breakProgress: st.breakProgress });

    // небо/свет
    if (!this.settings.freeTime) st.time = (st.time + dt / (this.settings.dayLength * 60)) % 1;
    const sky = this.sky.update(st.time, this.settings.clouds, cam.position, this.materials.uniforms);
    this.viewModel.dayLight = sky.day;
    this.target.setDayLight(sky.day);
    // мобы
    const mv = this.mobs;
    mv.day = sky.day;
    mv.cap = this.settings.mobs | 0;
    mv.enabled = mv.cap > 0 && !st.paused;
    if (mv.enabled) mv.update(dt, this.player);
    else if (mv.count) mv.clear();
    const u = this.materials.uniforms;
    u.uTime.value += dt;
    const far = this.settings.renderDistance * CHUNK;
    const under = this.player.headInWater;
    if (under) {
      u.uFogDensity.value = 0.16;
      u.uFogStart.value = 0.5;
      u.uFogEnd.value = 15;
    } else {
      u.uFogDensity.value = 0.0007;                       // лёгкая дымка на горизонте
      u.uFogStart.value = far * 0.55;                     // чётко до этой дистанции
      u.uFogEnd.value = far * 1.02;                       // к краю прокрутки — полностью в дымке
    }
    if (under) {
      u.uFogColor.value.setRGB(0.09 * (0.35 + sky.day), 0.26 * (0.35 + sky.day), 0.42 * (0.35 + sky.day));
    }
    this.renderer.setClearColor(sky.fogColor, 1);
    this.hud.setWater(under);
    this.camera.near = under ? 0.05 : 0.08;
    this.camera.updateProjectionMatrix();

    // автосохранение и отладка
    if (st.saveT > 0) {
      st.saveT -= dt;
      if (st.saveT <= 0) this.debouncedSave();
    }
    this.dbgT = (this.dbgT ?? 0) - dt;
    if (this.dbgT <= 0) { this.dbgT = 0.25; this.updateDebug(sky); }
    if (st.hp <= 0) this.respawn();
  }

  /** Клик по мобу в прицеле: урон инструментом в руке. */
  attackTick(dt) {
    this.attackCd -= dt;
    const st = this.state;
    const cam = this.camera;
    const dir = this.player.forward({});
    const mob = this.mobs.pick(cam.position.x, cam.position.y, cam.position.z, dir.x, dir.y, dir.z, 4.4);
    st.mobTarget = mob;
    if (mob) this.target.hide();
    if (!mob || !this.input.mine || this.attackCd > 0 || st.paused || this.inventoryOpen) return;
    this.attackCd = 0.42;
    const dmg = damageOf(this.inv.hot[this.inv.sel]);
    this.mobs.hurt(mob, dmg, this.player.x, this.player.z, mob.def.hostile ? 4.2 : 6.4);
    this.viewModel.triggerSwing();
  }

  /** Моб ударил игрока. В творческом режиме — не больно. */
  hitByMob(dmg, mob) {
    const st = this.state;
    if (this.inv.creative || st.hp <= 0 || !st.running || st.paused) return;
    st.hp = Math.max(0, st.hp - dmg);
    this.hud.setHealth(st.hp);
    this.hud.hurt();
    this.audio.land(1.3);
    const dx = this.player.x - mob.x, dz = this.player.z - mob.z;
    const len = Math.hypot(dx, dz) || 1;
    this.player.vx += (dx / len) * 4.4;
    this.player.vz += (dz / len) * 4.4;
    this.player.vy = Math.max(this.player.vy, 4.6);
    if (st.hp <= 0) this.respawn();
  }

  respawn() {
    const s = this.state.world.findSpawn();
    this.player.spawn(s[0], s[1] + 0.2, s[2]);
    this.state.hp = 20;
    this.hud.setHealth(20);
    this.hud.toast('Вы разбились. Воскрешение на спавне…', 'err');
  }

  updateDebug(sky) {
    if (!this.settings.showDebug) return;
    const p = this.player;
    const world = this.state.world;
    const cx = Math.floor(p.x / CHUNK), cz = Math.floor(p.z / CHUNK);
    const biome = BIOME_NAMES[world.terrain.biomeAt(Math.floor(p.x), Math.floor(p.z))];
    const clock = `${String(Math.floor(((p.yaw * 180 / Math.PI) % 360 + 360) % 360 / 360 * 24)).padStart(2, '0')}`;
    const hours = Math.floor((this.state.time * 24 + 6) % 24);
    const mins = Math.floor((((this.state.time * 24 + 6) % 24) % 1) * 60);
    const cv = this.chunkView;
    this.hud.setDebug([
      `LiteCraft · ${this.state.fps.toFixed(0)} FPS · ${this.state.ms.toFixed(1)} мс`,
      `XYZ ${p.x.toFixed(2)} / ${p.y.toFixed(2)} / ${p.z.toFixed(2)}  чанк ${cx},${cz}  блок ${Math.floor(p.x)},${Math.floor(p.y)},${Math.floor(p.z)}`,
      `биом: ${biome}  ·  время ${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}  ·  свет ${(sky.day * 15) | 0}/15`,
      `чанков: ${world.chunkCount} (мешей ${cv?.chunkMeshCount ?? 0}, в очереди ${cv?.stats.pending ?? 0}) · правок: ${world.editedCount}`,
      `режим: ${p.flying ? 'полёт' : p.sprinting ? 'бег' : 'ходок'} · HP ${this.state.hp / 2} · ${this.inv.creative ? 'творчество' : 'выживание'} · сид ${this.state.seed}`,
      `мобов вокруг: ${this.mobs.count} (видно ${this.mobs.nearCount(p, 48)}) · убито: ${this.mobs.kills} · в руке: ${BLOCKS[this.inv.hot[this.inv.sel]]?.name ?? '—'} ×${this.inv.creative ? '∞' : this.inv.hotN[this.inv.sel]}`,
      `${p.headInWater ? 'под водой' : p.inWater ? 'в воде' : 'на суше'}${p.onGround ? ' · на земле' : ''} · E — инвентарь, F3 — вкл/выкл панели`,
    ].join('\n'));
    void clock;
  }
}



export function boot(deps = {}) {
  const game = new Game(deps);
  window.game = game;
  window.addEventListener('beforeunload', () => {
    if (game.state?.world && game.state.running) game.save();
  });
  return game;
}

if (typeof window !== 'undefined' && !window.__LITECRAFT_TEST__ && document.getElementById('gl')) {
  try {
    boot();
  } catch (err) {
    showFatal(err);
    throw err;
  }
}

function showFatal(err) {
  const box = document.createElement('pre');
  box.style.cssText = 'position:fixed;inset:auto 12px 12px 12px;max-height:45vh;overflow:auto;background:#2b0e0e;color:#ffd9d3;padding:14px;font:12px/1.5 ui-monospace,monospace;border:1px solid #612;border-radius:4px;z-index:9999;white-space:pre-wrap';
  box.textContent = 'Ошибка запуска LiteCraft:\n\n' + (err?.stack ?? String(err));
  document.body.appendChild(box);
}
