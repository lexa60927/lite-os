/** Сохранение мира и настроек в localStorage (с дебаунсом). */
const PREFIX = 'litecraft:';

export function worldKey(seed) { return `${PREFIX}world:${seed}`; }
export const SETTINGS_KEY = PREFIX + 'settings';
export const LAST_SEED_KEY = PREFIX + 'lastSeed';

export function saveWorld(seed, data) {
  try {
    localStorage.setItem(worldKey(seed), JSON.stringify(data));
    return true;
  } catch (e) {
    console.warn('Не удалось сохранить мир:', e);
    return false;
  }
}

export function loadWorld(seed) {
  try {
    const raw = localStorage.getItem(worldKey(seed));
    return raw ? JSON.parse(raw) : null;
  } catch (e) { console.warn('Чтение сохранения не удалось:', e); return null; }
}

export function listWorlds() {
  const out = [];
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (!k?.startsWith(PREFIX + 'world:')) continue;
      const raw = localStorage.getItem(k);
      if (!raw) continue;
      const parsed = JSON.parse(raw);
      out.push({ key: k, seed: k.slice((PREFIX + 'world:').length), size: raw.length, ...parsed });
    }
  } catch (e) { void e; }
  return out.sort((a, b) => (b.saved ?? 0) - (a.saved ?? 0));
}

export function deleteWorld(seed) {
  try { localStorage.removeItem(worldKey(seed)); return true; } catch { return false; }
}

export function saveSettings(obj) {
  try { localStorage.setItem(SETTINGS_KEY, JSON.stringify(obj)); } catch { /* ignore */ }
}

export function loadSettings() {
  try { return JSON.parse(localStorage.getItem(SETTINGS_KEY) ?? '{}') ?? {}; } catch { return {}; }
}

export function saveLastSeed(seed) {
  try { localStorage.setItem(LAST_SEED_KEY, String(seed)); } catch { /* ignore */ }
}
export function loadLastSeed() {
  try { return localStorage.getItem(LAST_SEED_KEY); } catch { return null; }
}

/** Дебаунс для автосохранения. */
export function debounce(fn, ms = 1200) {
  let t = null;
  const wrapped = (...args) => {
    if (t) clearTimeout(t);
    t = setTimeout(() => { t = null; fn(...args); }, ms);
  };
  wrapped.flush = (...args) => { if (t) { clearTimeout(t); t = null; fn(...args); } };
  wrapped.cancel = () => { if (t) { clearTimeout(t); t = null; } };
  return wrapped;
}
