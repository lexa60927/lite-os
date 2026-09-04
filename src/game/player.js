/**
 * Игрок: движение, гравитация, коллизии AABB с воксельной сеткой,
 * плавание и режим полёта. Чистые данные — three.js не нужен.
 */
import { HEIGHT } from '../engine/constants.js';
import { BLOCKS } from '../engine/blocks.js';

export const PLAYER_W = 0.6;
export const PLAYER_H = 1.8;
export const EYE = 1.62;
export const HALF = PLAYER_W / 2;

const GRAVITY = 28;
const JUMP_V = 8.6;
const WALK = 4.317;
const SPRINT = 5.9;
const SNEAK = 1.5;
const FLY = 11;
const FLY_SPRINT = 26;
const WATER_GRAVITY = 7.5;
const MAX_FALL = 58;

const SOLID = new Uint8Array(BLOCKS.length);
for (let i = 0; i < BLOCKS.length; i++) SOLID[i] = BLOCKS[i].solid ? 1 : 0;
const LIQUID = new Uint8Array(BLOCKS.length);
for (let i = 0; i < BLOCKS.length; i++) LIQUID[i] = BLOCKS[i].liquid ? 1 : 0;

export class Player {
  constructor(world) {
    this.world = world;
    this.x = 0; this.y = 80; this.z = 0;
    this.vx = 0; this.vy = 0; this.vz = 0;
    this.yaw = 0; this.pitch = 0;
    this.onGround = false;
    this.inWater = false;
    this.headInWater = false;
    this.flying = false;
    this.sprinting = false;
    this.sneaking = false;
    this.walkDistance = 0;
    this.bob = 0;
    this.stepAcc = 0;
    this.bumped = false;
    this._airMax = null;
    this.fallDamage = 0;
    this.justLanded = 0;
    this._wasInWater = false;
    this._wasHead = false;
  }

  spawn(x, y, z) {
    this.x = x; this.y = y; this.z = z;
    this.vx = this.vy = this.vz = 0;
    this._airMax = null;
    this.fallDamage = 0;
    this.justLanded = 0;
    // если точка внутри блока — поднимаемся, пока не станет свободно
    for (let i = 0; i < 24 && this.collides(this.x, this.y, this.z); i++) this.y += 1;
    this.onGround = false;
  }

  get eyeY() { return this.y + EYE - (this.sneaking ? 0.18 : 0); }

  eye(out = {}) { out.x = this.x; out.y = this.eyeY; out.z = this.z; return out; }

  /** Взгляд → направление. */
  forward(out = {}) {
    const cp = Math.cos(this.pitch);
    out.x = -Math.sin(this.yaw) * cp;
    out.y = Math.sin(this.pitch);
    out.z = -Math.cos(this.yaw) * cp;
    return out;
  }

  collides(x, y, z) {
    const w = this.world;
    const x0 = Math.floor(x - HALF), x1 = Math.floor(x + HALF);
    const y0 = Math.floor(y), y1 = Math.floor(y + PLAYER_H - 0.001);
    const z0 = Math.floor(z - HALF), z1 = Math.floor(z + HALF);
    for (let by = y0; by <= y1; by++) {
      if (by < 0) return true;
      if (by >= HEIGHT) continue;
      for (let bz = z0; bz <= z1; bz++) {
        for (let bx = x0; bx <= x1; bx++) {
          if (SOLID[w.getBlock(bx, by, bz)]) return true;
        }
      }
    }
    return false;
  }

  moveAxis(axis, amount) {
    if (amount === 0) return false;
    if (axis === 'y') { /* вертикаль не участвует в auto-jump */ }
    const step = amount;
    const before = this[axis];
    this[axis] = before + step;
    if (!this.collides(this.x, this.y, this.z)) return false;
    // откат к границе блока
    let hit = false;
    for (let i = 0; i < 24; i++) {
      const delta = step * (1 - i / 24);
      const test = before + delta;
      const p = { x: this.x, y: this.y, z: this.z };
      p[axis] = test;
      if (!this.collides(p.x, p.y, p.z)) {
        this.x = p.x; this.y = p.y; this.z = p.z;
        hit = true;
        break;
      }
    }
    if (!hit) { this[axis] = before; hit = true; }
    if (hit && axis !== 'y') this.bumped = true;
    return hit;
  }

  blockAtFeet() {
    return this.world.getBlock(Math.floor(this.x), Math.floor(this.y - 0.1), Math.floor(this.z));
  }

  /**
   * @param dt   шаг по времени (сек)
   * @param input { forward, back, left, right, jump, sneak, sprint, up, down }
   */
  update(dt, input) {
    const w = this.world;
    dt = Math.min(dt, 1 / 20);

    const feet = w.getBlock(Math.floor(this.x), Math.floor(this.y + 0.2), Math.floor(this.z));
    const mid = w.getBlock(Math.floor(this.x), Math.floor(this.y + 1), Math.floor(this.z));
    this.inWater = LIQUID[feet] === 1 || LIQUID[mid] === 1;
    this.headInWater = LIQUID[w.getBlock(Math.floor(this.x), Math.floor(this.eyeY), Math.floor(this.z))] === 1;

    // --- желаемая скорость в плоскости ---
    const sy = Math.sin(this.yaw), cy = Math.cos(this.yaw);
    let fx = 0, fz = 0;
    if (input.forward) { fx -= sy; fz -= cy; }
    if (input.back) { fx += sy; fz += cy; }
    if (input.left) { fx -= cy; fz += sy; }
    if (input.right) { fx += cy; fz -= sy; }
    const len = Math.hypot(fx, fz);
    if (len > 0) { fx /= len; fz /= len; }

    this.sneaking = !!input.sneak && !this.flying;
    this.sprinting = !!input.sprint && !this.sneaking && input.forward && !this.inWater;
    let speed = this.flying ? (input.sprint ? FLY_SPRINT : FLY)
      : this.inWater ? WALK * 0.55
        : this.sneaking ? SNEAK
          : this.sprinting ? SPRINT : WALK;

    const accel = this.flying ? 34 : this.onGround ? 62 : this.inWater ? 24 : 22;
    const analog = input.analog ?? 1;
    const targetX = fx * speed * analog;
    const targetZ = fz * speed * analog;
    this.vx += (targetX - this.vx) * Math.min(1, accel * dt);
    this.vz += (targetZ - this.vz) * Math.min(1, accel * dt);
    if (len === 0 && (this.onGround || this.inWater)) {
      const fr = (this.flying ? 9 : this.onGround ? 12 : 3.4) * dt;
      this.vx -= this.vx * Math.min(1, fr);
      this.vz -= this.vz * Math.min(1, fr);
    }

    // --- вертикаль ---
    if (this.flying) {
      let vy = 0;
      if (input.jump) vy += speed * 0.75;
      if (input.sneak) vy -= speed * 0.75;
      this.vy += (vy - this.vy) * Math.min(1, 22 * dt);
    } else if (this.inWater) {
      this.vy -= WATER_GRAVITY * dt;
      if (input.jump) this.vy = Math.min(this.vy + 26 * dt, 3.4);
      this.vy = Math.max(this.vy, -3.4);
      this.vy *= 1 - Math.min(0.6, 3.4 * dt);
    } else {
      this.vy -= GRAVITY * dt;
      this.vy = Math.max(this.vy, -MAX_FALL);
      if (input.jump && this.onGround) {
        this.vy = JUMP_V;
        this.onGround = false;
        this._airMax = this.y;
      }
    }

    // --- разрешение коллизий по осям ---
    const wantX = this.vx;
    const wantZ = this.vz;
    const wasGround = this.onGround;
    this.onGround = false;
    if (this.moveAxis('x', this.vx * dt)) this.vx = 0;
    if (this.moveAxis('z', this.vz * dt)) this.vz = 0;
    if (this.moveAxis('y', this.vy * dt)) {
      if (this.vy < 0) {
        this.onGround = true;
        if (!this.flying && !wasGround && this.fallStart !== null) {
          this.fallDamage = Math.max(0, this.fallStart - this.y - 3.2);
        }
        this.fallStart = this.inWater ? null : this.y;
      } else if (this.vy > 0) this.vy = Math.min(0, this.vy);
    }
    // --- падение: урон и «приземлился» ---
    if (this.onGround) {
      this.vy = 0;
      if (!wasGround && this._airMax !== null) {
        const drop = this._airMax - this.y;
        this.fallDamage = this.flying || this.inWater ? 0 : Math.max(0, drop - 3.2);
        this.justLanded = drop > 0.7 ? Math.min(2, drop / 7) : 0;
      }
      this._airMax = null;
    } else {
      this._airMax = this._airMax === null ? this.y : Math.max(this._airMax, this.y);
    }

    // --- автопрыжок: через одиночный уступ, но не в глухую стену ---
    if (this.bumped) {
      this.bumped = false;
      const wantsMove = input.forward || input.back || input.left || input.right;
      const ok = this.onGround && !this.inWater && !this.flying && !this.sneaking && wantsMove && input.autoJump !== false;
      if (ok) {
        const px = this.x + Math.sign(wantX) * 0.46;
        const pz = this.z + Math.sign(wantZ) * 0.46;
        if (!this.collides(px, this.y + 1.12, pz)) {
          this.vy = JUMP_V * 0.94;
          this.onGround = false;
          // сохраняем импульс, чтобы перелететь уступ, а не тыкаться в него
          if (wantX !== 0) this.vx = wantX;
          if (wantZ !== 0) this.vz = wantZ;
        }
      }
    }

    // --- шаги/качание ---
    const horiz = Math.hypot(this.vx, this.vz);
    this.walkDistance += horiz * dt;
    if (this.onGround && horiz > 0.6) {
      this.stepAcc += horiz * dt;
      this.bob += dt * (6 + horiz * 0.8);
    } else {
      this.bob += (Math.round(this.bob / Math.PI) * Math.PI - this.bob) * Math.min(1, dt * 6);
    }
    const stepped = this.stepAcc > 1.9;
    if (stepped) this.stepAcc = 0;
    const enteredWater = this.inWater && !this._wasInWater;
    this._wasInWater = this.inWater;

    // не выпадаем за пределы мира
    if (this.y < -8) { this.y = HEIGHT - 4; this.vy = 0; }
    if (this.y > HEIGHT + 40) this.y = HEIGHT + 40;

    return { stepped, splash: enteredWater, submerge: this.headInWater !== this._wasHead };
  }

  /** Пересекает ли блок (bx,by,bz) хитбокс игрока — защита от вмуровывания. */
  intersectsBlock(bx, by, bz) {
    return !(bx + 1 <= this.x - HALF || bx >= this.x + HALF ||
      by + 1 <= this.y || by >= this.y + PLAYER_H ||
      bz + 1 <= this.z - HALF || bz >= this.z + HALF);
  }
}
