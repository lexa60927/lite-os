/**
 * Аватары других игроков. Рисуются простыми боксами в палитре воксельного
 * мира: своей модели у нас нет, а чужой игрок должен быть узнаваем — отсюда
 * цвет по имени и табличка над головой.
 *
 * Модуль ничего не знает про сеть: `update(peers)` получает уже посчитанные
 * NetSession позиции (с интерполяцией), а `setDayLight` затемняет аватары
 * ночью так же, как шейдер чанков затемняет блоки.
 */
import * as THREE from 'three';

const PALETTE = [0x4fc3f7, 0xffb74d, 0x81c784, 0xba68c8, 0xe57373, 0x4db6ac, 0xf06292, 0xfff176];
const SKIN = 0xc98c63;

function hash(s) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i)) * 16777619;
  return h >>> 0;
}

const BOX = (w, h, d, color) => ({ geo: new THREE.BoxGeometry(w, h, d), color });

export class PeerAvatars {
  constructor(scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    this.group.name = 'peers';
    this.scene.add(this.group);
    this.items = new Map();
    this.day = 1;
    // геометрии общие на всех: 10 игроков ≠ 10 комплектов буферов
    this.parts = [
      BOX(0.5, 0.5, 0.5, SKIN),      // голова
      BOX(0.55, 0.7, 0.3, 0),        // туловище (цвет задаём per-instance)
      BOX(0.22, 0.75, 0.22, 0),      // рука левая
      BOX(0.22, 0.75, 0.22, 0),      // рука правая
      BOX(0.25, 0.8, 0.25, 0),       // нога левая
      BOX(0.25, 0.8, 0.25, 0),       // нога правая
    ];
    this.offs = [[0, 1.45, 0], [0, 0.85, 0], [-0.4, 0.85, 0], [0.4, 0.85, 0], [-0.15, 0.4, 0], [0.15, 0.4, 0]];
    this.mats = [];
  }

  _label(name) {
    const cv = document.createElement('canvas');
    cv.width = 256; cv.height = 64;
    const g = cv.getContext('2d');
    g.fillStyle = 'rgba(12,16,20,0.68)';
    g.fillRect(0, 0, cv.width, cv.height);
    g.font = '600 34px ui-monospace, monospace';
    g.fillStyle = '#eaf2f7';
    g.textAlign = 'center';
    g.textBaseline = 'middle';
    g.fillText(name.slice(0, 18), cv.width / 2, cv.height / 2 + 2);
    const tex = new THREE.CanvasTexture(cv);
    tex.colorSpace = THREE.SRGBColorSpace ?? undefined;
    const spr = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: true }));
    spr.scale.set(1.6, 0.4, 1);
    spr.position.set(0, 2.15, 0);
    spr.renderOrder = 3;
    spr.userData.tex = tex;
    return spr;
  }

  /** Добавить/обновить аватар; возвращает объект игрока. */
  ensure(id, name) {
    let it = this.items.get(id);
    if (it) {
      if (it.name !== name) {
        it.name = name;
        it.group.remove(it.label);
        it.label.material.map.dispose();
        it.label.material.dispose();
        it.label = this._label(name);
        it.group.add(it.label);
      }
      return it;
    }
    const color = PALETTE[hash(String(name || id)) % PALETTE.length];
    const group = new THREE.Group();
    const meshes = [];
    this.parts.forEach((p, i) => {
      const mat = new THREE.MeshBasicMaterial({ color: i === 0 ? SKIN : (i === 1 ? color : shade(color)) });
      const mesh = new THREE.Mesh(p.geo, mat);
      const o = this.offs[i];
      mesh.position.set(o[0], o[1], o[2]);
      group.add(mesh);
      meshes.push(mesh);
    });
    const label = this._label(name || 'игрок');
    group.add(label);
    this.group.add(group);
    it = {
      id, name: name || 'игрок', group, meshes, label, t: 0, px: 0, pz: 0,
      base: meshes.map((m) => m.material.color.clone()),
    };
    this.items.set(id, it);
    if (this.day !== 1) this._apply(it);
    return it;
  }

  /** Кадр: ставим позы из peers, убираем тех, кто отвалился, покачиваем ноги. */
  update(peers, dt) {
    const seen = new Set();
    for (const p of peers) {
      seen.add(p.id);
      const it = this.ensure(p.id, p.name);
      it.group.position.set(p.x ?? 0, (p.y ?? 0) - 0.02, p.z ?? 0);
      it.group.rotation.y = -(p.yaw ?? 0);
      const dist = Math.hypot((p.x ?? 0) - it.px, (p.z ?? 0) - it.pz);
      it.px = p.x ?? 0; it.pz = p.z ?? 0;
      it.t += dt * (1.5 + dist * 9);
      const swing = Math.sin(it.t * 3.4) * Math.min(0.7, dist * 4);
      if (it.meshes[4]) it.meshes[4].rotation.x = swing;
      if (it.meshes[5]) it.meshes[5].rotation.x = -swing;
      if (it.meshes[2]) it.meshes[2].rotation.x = -swing * 0.7;
      if (it.meshes[3]) it.meshes[3].rotation.x = swing * 0.7;
    }
    for (const id of [...this.items.keys()]) if (!seen.has(id)) this.remove(id);
    return this.items.size;
  }

  remove(id) {
    const it = this.items.get(id);
    if (!it) return;
    this.group.remove(it.group);
    for (const m of it.meshes) m.material.dispose();
    it.label.material.map?.dispose?.();
    it.label.material.dispose();
    this.items.delete(id);
  }

  clear() { for (const id of [...this.items.keys()]) this.remove(id); }

  /** Ночью аватары темнеют вместе с миром, иначе они светятся как фонарики. */
  setDayLight(k) {
    const v = Math.max(0.28, Math.min(1, k));
    if (Math.abs(v - this.day) < 0.01) return;
    this.day = v;
    for (const it of this.items.values()) this._apply(it);
  }

  _apply(it) {
    it.meshes.forEach((m, i) => {
      if (it.base[i]) m.material.color.copy(it.base[i]).multiplyScalar(this.day);
    });
  }
}

function shade(color) {
  const c = new THREE.Color(color);
  c.multiplyScalar(0.72);
  return c.getHex();
}

export { PALETTE as AVATAR_PALETTE };
