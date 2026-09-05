/**
 * Мобы: боксовые модели из тех же тайлов, что и мир (общий материал вокселей —
 * работают туман, свет факелов, подкраска биома и вспышка урона через вершинный tint).
 * Физика — AABB с поосевым разрешением и ступенькой, ИИ — блуждание,
 * преследование ночью, атака вблизи, бегство после удара.
 */
import * as THREE from 'three';
import { FACES, QuadBuffer, tileRect } from '../engine/mesher.js';
import { byKey, isLiquid as liquidBlock } from '../engine/blocks.js';

/** parts: p — центр относительно центра модели, s — размер, limb — качается. */
export const MOB_TYPES = {
  pig: {
    name: 'Свинья', hp: 10, w: 0.85, h: 0.9, speed: 1.5, passive: true, aggro: 0,
    drops: () => [{ id: byKey('pork'), n: 2 }],
    parts: [
      { p: [0, 0.05, 0.28], s: [0.75, 0.6, 0.9], tile: 'mob_pig', shade: 1 },
      { p: [0, 0.32, -0.5], s: [0.42, 0.42, 0.34], tile: 'mob_face', shade: 0.95 },
      { p: [0, 0.18, -0.68], s: [0.28, 0.2, 0.1], tile: 'mob_snout', shade: 0.9 },
      { p: [-0.24, -0.3, 0.28], s: [0.2, 0.42, 0.2], tile: 'mob_pig', shade: 0.72, limb: 1 },
      { p: [0.24, -0.3, 0.28], s: [0.2, 0.42, 0.2], tile: 'mob_pig', shade: 0.72, limb: 1 },
      { p: [-0.24, -0.3, -0.22], s: [0.2, 0.42, 0.2], tile: 'mob_pig', shade: 0.72, limb: 1 },
      { p: [0.24, -0.3, -0.22], s: [0.2, 0.42, 0.2], tile: 'mob_pig', shade: 0.72, limb: 1 },
    ],
  },
  cow: {
    name: 'Корова', hp: 14, w: 1.1, h: 1.25, speed: 1.4, passive: true, aggro: 0,
    drops: () => [{ id: byKey('leather'), n: 2 }, { id: byKey('pork'), n: 1 }],
    parts: [
      { p: [0, 0.1, 0.25], s: [0.95, 0.8, 1.15], tile: 'mob_cow', shade: 1 },
      { p: [0, 0.38, -0.62], s: [0.55, 0.52, 0.42], tile: 'mob_face', shade: 0.96 },
      { p: [-0.36, 0.62, -0.55], s: [0.14, 0.16, 0.14], tile: 'mob_cow', shade: 1.05 },
      { p: [0.36, 0.62, -0.55], s: [0.14, 0.16, 0.14], tile: 'mob_cow', shade: 1.05 },
      { p: [-0.3, -0.35, 0.45], s: [0.24, 0.5, 0.24], tile: 'mob_cow', shade: 0.7, limb: 1 },
      { p: [0.3, -0.35, 0.45], s: [0.24, 0.5, 0.24], tile: 'mob_cow', shade: 0.7, limb: 1 },
      { p: [-0.3, -0.35, -0.1], s: [0.24, 0.5, 0.24], tile: 'mob_cow', shade: 0.7, limb: 1 },
      { p: [0.3, -0.35, -0.1], s: [0.24, 0.5, 0.24], tile: 'mob_cow', shade: 0.7, limb: 1 },
    ],
  },
  sheep: {
    name: 'Овца', hp: 8, w: 0.9, h: 1.15, speed: 1.5, passive: true, aggro: 0,
    drops: () => [{ id: byKey('wool_white'), n: 2 }],
    parts: [
      { p: [0, 0.1, 0.2], s: [0.8, 0.75, 1.0], tile: 'mob_sheep', shade: 1 },
      { p: [0, 0.45, -0.45], s: [0.45, 0.42, 0.36], tile: 'mob_face', shade: 0.9 },
      { p: [-0.26, -0.32, 0.3], s: [0.2, 0.45, 0.2], tile: 'mob_sheep', shade: 0.72, limb: 1 },
      { p: [0.26, -0.32, 0.3], s: [0.2, 0.45, 0.2], tile: 'mob_sheep', shade: 0.72, limb: 1 },
      { p: [-0.26, -0.32, -0.05], s: [0.2, 0.45, 0.2], tile: 'mob_sheep', shade: 0.72, limb: 1 },
      { p: [0.26, -0.32, -0.05], s: [0.2, 0.45, 0.2], tile: 'mob_sheep', shade: 0.72, limb: 1 },
    ],
  },
  husk: {
    name: 'Сумеречник', hp: 18, w: 0.6, h: 1.85, speed: 2.5, hostile: true, damage: 3,
    reach: 1.8, aggro: 20, burnsInSun: true,
    drops: () => [{ id: byKey('coal_item'), n: 1 }],
    parts: [
      { p: [0, 0.35, 0], s: [0.55, 0.7, 0.32], tile: 'mob_husk', shade: 1 },
      { p: [0, 0.82, 0], s: [0.44, 0.44, 0.44], tile: 'mob_husk', shade: 1.06 },
      { p: [-0.36, 0.4, 0.16], s: [0.18, 0.62, 0.18], tile: 'mob_husk', shade: 0.8, limb: 1 },
      { p: [0.36, 0.4, 0.16], s: [0.18, 0.62, 0.18], tile: 'mob_husk', shade: 0.8, limb: 1 },
      { p: [-0.14, -0.42, 0], s: [0.2, 0.7, 0.2], tile: 'mob_husk', shade: 0.72, limb: 1 },
      { p: [0.14, -0.42, 0], s: [0.2, 0.7, 0.2], tile: 'mob_husk', shade: 0.72, limb: 1 },
    ],
  },
  villager: {
    name: 'Житель', hp: 20, w: 0.7, h: 1.9, speed: 1.0, passive: true, aggro: 0, villageOnly: true,
    drops: () => [{ id: byKey('emerald'), n: 1 }],
    parts: [
      { p: [0, 0.05, 0.02], s: [0.66, 1.1, 0.46], tile: 'mob_villager', shade: 1 },
      { p: [0, 0.62, 0], s: [0.52, 0.5, 0.52], tile: 'mob_villager_face', shade: 0.98 },
      { p: [0, 0.58, -0.3], s: [0.2, 0.22, 0.16], tile: 'mob_villager_face', shade: 1.12 },
      { p: [-0.4, 0.12, 0.02], s: [0.16, 0.74, 0.22], tile: 'mob_villager', shade: 0.78, limb: 1 },
      { p: [0.4, 0.12, 0.02], s: [0.16, 0.74, 0.22], tile: 'mob_villager', shade: 0.78, limb: 1 },
      { p: [-0.16, -0.62, 0.02], s: [0.24, 0.55, 0.26], tile: 'mob_villager', shade: 0.64, limb: 1 },
      { p: [0.16, -0.62, 0.02], s: [0.24, 0.55, 0.26], tile: 'mob_villager', shade: 0.64, limb: 1 },
    ],
  },

  crawler: {
    name: 'Пещерник', hp: 12, w: 0.95, h: 0.75, speed: 3.1, hostile: true, damage: 2,
    reach: 1.6, aggro: 13, jumps: true, darkOnly: true,
    drops: () => [{ id: byKey('glowstone'), n: 1 }],
    parts: [
      { p: [0, 0.05, 0], s: [0.8, 0.5, 0.8], tile: 'mob_crawler', shade: 1 },
      { p: [0, 0.2, -0.42], s: [0.4, 0.34, 0.34], tile: 'mob_crawler', shade: 1.08 },
      { p: [-0.4, -0.15, 0.24], s: [0.16, 0.34, 0.16], tile: 'mob_crawler', shade: 0.7, limb: 1 },
      { p: [0.4, -0.15, 0.24], s: [0.16, 0.34, 0.16], tile: 'mob_crawler', shade: 0.7, limb: 1 },
      { p: [-0.4, -0.15, -0.24], s: [0.16, 0.34, 0.16], tile: 'mob_crawler', shade: 0.7, limb: 1 },
      { p: [0.4, -0.15, -0.24], s: [0.16, 0.34, 0.16], tile: 'mob_crawler', shade: 0.7, limb: 1 },
    ],
  },
};

const GRAVITY = 24;
const DESPAWN = 96;
const SPAWN_MIN = 16;
const SPAWN_MAX = 44;

/** AABB (x,y — низ) пересекает твёрдые блоки? */
export function boxCollides(world, x, y, z, w, h) {
  const e = 0.001;
  const x0 = Math.floor(x - w / 2 + e), x1 = Math.floor(x + w / 2 - e);
  const y0 = Math.floor(y + e), y1 = Math.floor(y + h - e);
  const z0 = Math.floor(z - w / 2 + e), z1 = Math.floor(z + w / 2 - e);
  for (let by = y0; by <= y1; by++) {
    if (by < 0) return true;
    for (let bz = z0; bz <= z1; bz++) {
      for (let bx = x0; bx <= x1; bx++) if (world.isSolid(bx, by, bz)) return true;
    }
  }
  return false;
}

/** Геометрия одной части: куб из граней FACES, UV тайла, свет по умолчанию. */
function partGeometry(part, atlas, lift) {
  const qb = new QuadBuffer(6);
  const rect = tileRect(atlas.index[part.tile] ?? 0, atlas.cell, atlas.tile, atlas.grid);
  const sh = part.shade ?? 1;
  const [sx, sy, sz] = part.s;
  const cy = part.p[1] + lift;
  const v = [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]];
  const u = [[0, 0], [0, 0], [0, 0], [0, 0]];
  const l = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
  for (const face of FACES) {
    for (let k = 0; k < 4; k++) {
      const q = face.verts[k];
      v[k][0] = part.p[0] + (q[0] - 0.5) * sx;
      v[k][1] = cy + (q[1] - 0.5) * sy;
      v[k][2] = part.p[2] + (q[2] - 0.5) * sz;
      const t = face.uv[k];
      u[k][0] = rect.u0 + t[0] * rect.s;
      u[k][1] = rect.v0 + t[1] * rect.s;
      l[k][0] = sh * face.shade;
      l[k][1] = 1;
      l[k][2] = 0;
      l[k][3] = 0;
    }
    qb.push(
      [[v[0][0], v[0][1], v[0][2]], [v[1][0], v[1][1], v[1][2]], [v[2][0], v[2][1], v[2][2]], [v[3][0], v[3][1], v[3][2]]],
      [[u[0][0], u[0][1]], [u[1][0], u[1][1]], [u[2][0], u[2][1]], [u[3][0], u[3][1]]],
      [[l[0][0], l[0][1], l[0][2], l[0][3]], [l[1][0], l[1][1], l[1][2], l[1][3]], [l[2][0], l[2][1], l[2][2], l[2][3]], [l[3][0], l[3][1], l[3][2], l[3][3]]],
      false,
    );
  }
  const data = qb.slice();
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(data.position, 3));
  geo.setAttribute('uv', new THREE.BufferAttribute(data.uv, 2));
  geo.setAttribute('light', new THREE.BufferAttribute(data.light, 4));
  const tint = new Float32Array(data.tint.length);
  tint.fill(1);
  geo.setAttribute('tint', new THREE.BufferAttribute(tint, 3));
  geo.setIndex(new THREE.BufferAttribute(data.index, 1));
  geo.computeBoundingSphere();
  return geo;
}

class Mob {
  constructor(type, x, y, z, id) {
    const def = MOB_TYPES[type];
    this.type = type;
    this.def = def;
    this.id = id;
    this.x = x; this.y = y; this.z = z;
    this.vx = 0; this.vy = 0; this.vz = 0;
    this.yaw = Math.random() * Math.PI * 2;
    this.hp = def.hp;
    this.onGround = false;
    this.think = Math.random() * 2;
    this.walkPhase = Math.random() * 6;
    this.hurtT = 0;
    this.attackCd = 0;
    this.fleeT = 0;
    this.burnT = 0;
    this.lightKey = -1;
    this.parts = [];
    this.group = new THREE.Group();
  }
}

export class Mobs {
  /**
   * @param material материал вокселей (solid) — мобы светятся/тонут в тумане как мир
   * @param onPlayerHit(damage, mob) @param onDrop(id, count)
   */
  constructor({ world, scene, material, atlas, onPlayerHit, onDrop, particles, audio, rng = Math.random }) {
    this.world = world;
    this.scene = scene;
    this.material = material;
    this.atlas = atlas;
    this.onPlayerHit = onPlayerHit ?? (() => {});
    this.onDrop = onDrop ?? (() => {});
    this.particles = particles;
    this.audio = audio;
    this.rng = rng;
    this.list = [];
    this.cap = 14;
    this.enabled = true;
    this.spawnT = 1;
    this.day = 1;
    this.nextId = 1;
    this.kills = 0;
  }

  get count() { return this.list.length; }

  clear() {
    for (const m of this.list) {
      this.scene.remove(m.group);
      for (const p of m.parts) p.geo.dispose();
    }
    this.list.length = 0;
  }

  dispose() { this.clear(); }

  #attach(m) {
    const lift = m.def.h / 2;
    for (const part of m.def.parts) {
      const geo = partGeometry(part, this.atlas, lift);
      const mesh = new THREE.Mesh(geo, this.material);
      mesh.position.set(0, 0, 0);
      m.parts.push({ mesh, geo, base: part.p, limb: !!part.limb });
      m.group.add(mesh);
    }
    m.group.position.set(m.x, m.y, m.z);
    m.group.rotation.y = m.yaw;
    this.scene.add(m.group);
  }

  /** Подходящий ли это моб для данного места/времени. */
  #allowed(def, night, light, y, inVillage = false) {
    if (def.villageOnly) return inVillage;             // жители живут только в деревнях
    if (def.hostile && inVillage) return false;        // в деревнях не спавнятся: площадь освещена и безопасна
    if (def.darkOnly && light > 7) return false;
    if (y < 6) return false;
    return night || light > 7;
  }

  trySpawn(player) {
    if (!this.enabled || this.list.length >= this.cap) return false;
    const world = this.world;
    const night = this.day < 0.3;
    const keys = Object.keys(MOB_TYPES);
    // ищем место только среди загруженных чанков — иначе ниже уровня моря getBlock
    // возвращает 0 и спавн молча срывается
    const pool = [];
    for (const c of world.chunks.values()) {
      if (!c?.blocks) continue;
      const dx = c.cx * 16 + 8 - player.x, dz = c.cz * 16 + 8 - player.z;
      const d = Math.hypot(dx, dz);
      if (d > 6 || d < SPAWN_MAX) pool.push(c);
    }
    for (let attempt = 0; attempt < 14 && pool.length; attempt++) {
      const c = pool[(this.rng() * pool.length) | 0];
      const lx = (this.rng() * 16) | 0, lz = (this.rng() * 16) | 0;
      const x = c.cx * 16 + lx;
      const z = c.cz * 16 + lz;
      const dx = x - player.x, dz = z - player.z;
      const dd = Math.hypot(dx, dz);
      if (dd < SPAWN_MIN * 0.55 || dd > SPAWN_MAX) continue;
      let ground = world.terrain.col(x, z).h;
      // рельеф ≠ поверхность: деревенскую площадку генератор выровнял и
      // приподнял, платформы игрока достроены — поднимаемся на настоящий верх,
      // иначе спавн упирается в пол и срывается (в деревнях не появлялся никто)
      for (let i = 0; i < 10 && world.isSolid(x, ground + 1, z); i++) ground++;
      if (ground < 3) continue;
      const below = world.getBlock(x, ground, z);
      if (!below || liquidBlock(below)) continue;
      const y = ground + 1;
      const sky = world.skyAt(x, y, z);
      const light = Math.max(sky * 15 * (night ? 0.22 : 1), world.lightAt(x, y, z) * 15);
      const inVillage = !!world.terrain.villageAt(x, z);
      const ok = keys.filter((k) => this.#allowed(MOB_TYPES[k], night, light, y, inVillage));
      if (!ok.length) continue;
      const type = ok[(this.rng() * ok.length) | 0];
      const def = MOB_TYPES[type];
      // нужен твёрдый пол ровно под ногами и две свободные клетки сверху
      if (boxCollides(world, x + 0.5, y, z + 0.5, def.w, def.h)) continue;
      const m = new Mob(type, x + 0.5, y, z + 0.5, this.nextId++);
      this.#attach(m);
      m.lightKey = -1;
      this.#tint(m, true);
      this.list.push(m);
      return true;
    }
    return false;
  }

  /** Пересечение луча с mobs: ближайший моб или null. */
  pick(ox, oy, oz, dx, dy, dz, maxDist) {
    let best = null, bestT = maxDist;
    for (const m of this.list) {
      const w = m.def.w / 2 + 0.14, h = m.def.h;
      const min = [m.x - w, m.y, m.z - w], max = [m.x + w, m.y + h, m.z + w];
      const o = [ox, oy, oz], d = [dx, dy, dz];
      let t0 = 0, t1 = bestT, ok = true;
      for (let i = 0; i < 3; i++) {
        if (Math.abs(d[i]) < 1e-6) {
          if (o[i] < min[i] || o[i] > max[i]) { ok = false; break; }
          continue;
        }
        let ta = (min[i] - o[i]) / d[i], tb = (max[i] - o[i]) / d[i];
        if (ta > tb) { const s = ta; ta = tb; tb = s; }
        t0 = Math.max(t0, ta); t1 = Math.min(t1, tb);
        if (t0 > t1) { ok = false; break; }
      }
      if (ok && t1 >= 0 && t0 <= bestT) { bestT = t0; best = m; }
    }
    return best;
  }

  hurt(m, dmg, fromX, fromZ, knock = 5.5) {
    if (!m || m.hp <= 0) return false;
    m.hp -= dmg;
    m.hurtT = 0.3;
    if (m.def.passive) m.fleeT = 5;
    const dx = m.x - fromX, dz = m.z - fromZ;
    const len = Math.hypot(dx, dz) || 1;
    m.vx += (dx / len) * knock;
    m.vz += (dz / len) * knock;
    m.vy = Math.max(m.vy, 4);
    this.particles?.burst(m.x, m.y + m.def.h * 0.6, m.z, 8, m.def.hostile ? [0.5, 0.75, 0.45] : [0.9, 0.4, 0.4], { speed: 2.6, life: 0.5, spread: 0.5 });
    this.audio?.hit?.('soft', 1.5);
    this.#tint(m, true);
    if (m.hp <= 0) { this.kills++; this.#kill(m, true); }
    return true;
  }

  #kill(m, drop) {
    const i = this.list.indexOf(m);
    if (i >= 0) this.list.splice(i, 1);
    this.scene.remove(m.group);
    for (const p of m.parts) p.geo.dispose();
    if (drop) {
      this.particles?.burst(m.x, m.y + m.def.h * 0.5, m.z, 18, [0.85, 0.85, 0.85], { speed: 3.4, life: 0.7, spread: 0.6 });
      for (const d of m.def.drops ? m.def.drops() : []) { if (d.id) this.onDrop(d.id, d.n); }
      this.audio?.breakBlock?.('wool');
    }
  }

  /** Серый коэффициент света + красная вспышка. Пересчитываем только когда свет изменился. */
  #tint(m, force = false) {
    const world = this.world;
    const bx = Math.floor(m.x), by = Math.floor(m.y + m.def.h * 0.7), bz = Math.floor(m.z);
    const sky = world.skyAt(bx, by, bz);
    const torch = world.lightAt(bx, by, bz);
    const key = Math.round(sky * 16) * 32 + Math.round(torch * 16);
    const hurt = m.hurtT > 0;
    if (!hurt && !force && key === m.lightKey) return;
    m.lightKey = key;
    const lit = Math.min(1.3, 0.18 + sky * (0.2 + 0.85 * this.day) + torch * 0.95);
    const r = hurt ? Math.min(1.7, lit + 0.8) : lit;
    const g = hurt ? lit * 0.4 : lit;
    const b = hurt ? lit * 0.35 : lit;
    for (const p of m.parts) {
      const attr = p.geo.getAttribute('tint');
      const arr = attr.array;
      for (let i = 0; i < arr.length; i += 3) { arr[i] = r; arr[i + 1] = g; arr[i + 2] = b; }
      attr.needsUpdate = true;
    }
  }

  #step(m, dt, player) {
    const world = this.world;
    const def = m.def;
    if (m.hurtT > 0) m.hurtT -= dt;
    if (m.fleeT > 0) m.fleeT -= dt;
    m.attackCd -= dt;
    m.think -= dt;

    const px = player.x - m.x, pz = player.z - m.z, py = player.y - m.y;
    const dist = Math.hypot(px, pz);
    let wantX = 0, wantZ = 0, speed = def.speed;
    const aggro = def.aggro || 16;
    const chasing = def.hostile && dist < aggro && Math.abs(py) < 5;

    if (chasing) {
      const len = dist || 1;
      wantX = px / len; wantZ = pz / len;
      m.yaw = Math.atan2(wantX, wantZ);
      if (dist < def.reach && Math.abs(py) < 2.2 && m.attackCd <= 0) {
        m.attackCd = 1.15;
        this.onPlayerHit(def.damage, m);
        if (def.jumps) m.vy = Math.max(m.vy, 6.4);
      }
    } else if (m.fleeT > 0) {
      const len = dist || 1;
      wantX = -px / len; wantZ = -pz / len;
      m.yaw = Math.atan2(wantX, wantZ);
      speed *= 1.7;
    } else if (m.think <= 0) {
      m.think = 1.8 + this.rng() * 4;
      if (this.rng() < 0.4) { wantX = 0; wantZ = 0; }
      else {
        const a = this.rng() * Math.PI * 2;
        m.yaw = a; wantX = Math.sin(a); wantZ = Math.cos(a);
      }
    } else if (m.think > 0.7) {
      wantX = Math.sin(m.yaw); wantZ = Math.cos(m.yaw);
    }

    const tvx = wantX * speed, tvz = wantZ * speed;
    const k = Math.min(1, dt * (def.hostile ? 9 : 5));
    m.vx += (tvx - m.vx) * k;
    m.vz += (tvz - m.vz) * k;
    m.vy -= GRAVITY * dt;
    if (m.vy < -52) m.vy = -52;

    // горение на солнце
    if (def.burnsInSun && this.day > 0.5) {
      const sky = world.skyAt(Math.floor(m.x), Math.floor(m.y + 1), Math.floor(m.z));
      if (sky >= 0.97) {
        m.burnT += dt;
        if (m.burnT > 1) {
          m.burnT = 0;
          m.hp -= 1.8;
          this.particles?.burst(m.x, m.y + def.h * 0.8, m.z, 5, [1, 0.6, 0.2], { speed: 1.4, life: 0.45, spread: 0.3 });
          this.#tint(m, true);
          if (m.hp <= 0) { this.#kill(m, true); return; }
        }
      } else m.burnT = 0;
    }

    const w = def.w, h = def.h;
    const move = (axis, d) => {
      if (!d) return;
      const nx = axis === 'x' ? m.x + d : m.x;
      const nz = axis === 'z' ? m.z + d : m.z;
      if (!boxCollides(world, nx, m.y, nz, w, h)) { m.x = nx; m.z = nz; return; }
      const freeUp = !boxCollides(world, nx, m.y + 1.02, nz, w, h) && !boxCollides(world, m.x, m.y + 1.02, m.z, w, h);
      if (m.onGround && freeUp) { m.y += 1.02; m.x = nx; m.z = nz; m.vy = 0; return; }
      if (def.jumps && m.onGround) m.vy = 7.2;
      if (axis === 'x') m.vx = 0; else m.vz = 0;
    };
    move('x', m.vx * dt);
    move('z', m.vz * dt);

    const inWater = liquidBlock(world.getBlock(Math.floor(m.x), Math.floor(m.y + 0.3), Math.floor(m.z)));
    if (inWater) m.vy = Math.max(m.vy, 1.6);
    const ny = m.y + m.vy * dt;
    if (m.vy <= 0) {
      if (boxCollides(world, m.x, ny, m.z, w, h)) {
        m.y = Math.floor(ny) + 1;
        if (m.y < ny) m.y = ny;
        m.vy = 0;
        m.onGround = true;
      } else { m.y = ny; m.onGround = inWater ? false : m.onGround && false; }
      if (inWater) m.onGround = false;
    } else {
      if (boxCollides(world, m.x, ny, m.z, w, h)) { m.vy = 0; } else m.y = ny;
      m.onGround = false;
    }
    if (m.y < -4) { this.#kill(m, false); return; }

    const sp = Math.hypot(m.vx, m.vz);
    m.walkPhase += dt * (3.4 + sp * 2.2);
    const sw = Math.sin(m.walkPhase) * Math.min(0.75, sp * 0.3);
    for (let i = 0; i < m.parts.length; i++) {
      const p = m.parts[i];
      if (!p.limb) continue;
      p.mesh.rotation.x = (i % 2 ? sw : -sw) * 0.85;
    }
    m.group.position.set(m.x, m.y + Math.abs(Math.sin(m.walkPhase)) * 0.03 * Math.min(1, sp), m.z);
    m.group.rotation.y = m.yaw;
    this.#tint(m);
  }

  update(dt, player) {
    if (!this.world || !player) return;
    if (!this.enabled || this.cap <= 0) { if (this.list.length) this.clear(); return; }
    this.spawnT -= dt;
    if (this.spawnT <= 0) { this.spawnT = 0.8; this.trySpawn(player); }
    for (let i = this.list.length - 1; i >= 0; i--) {
      const m = this.list[i];
      if (Math.hypot(m.x - player.x, m.z - player.z) > DESPAWN || Math.abs(m.y - player.y) > 48) { this.#kill(m, false); continue; }
      this.#step(m, dt, player);
    }
  }

  /** Для статистики и теста: сколько мобов вокруг игрока. */
  nearCount(player, r = 40) {
    let n = 0;
    for (const m of this.list) if (Math.hypot(m.x - player.x, m.z - player.z) < r) n++;
    return n;
  }
}

export const MOB_NAMES = Object.fromEntries(Object.entries(MOB_TYPES).map(([k, v]) => [k, v.name]));
