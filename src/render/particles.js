/** Простые частицы разрушения/брызг: CPU-симуляция, упаковка в начало буфера. */
import * as THREE from 'three';

export class Particles {
  constructor(scene, max = 700) {
    this.max = max;
    this.count = 0;
    this.pos = new Float32Array(max * 3);
    this.col = new Float32Array(max * 3);
    this.vel = new Float32Array(max * 3);
    this.life = new Float32Array(max);
    this.maxLife = new Float32Array(max);
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3));
    g.setAttribute('color', new THREE.BufferAttribute(this.col, 3));
    g.setDrawRange(0, 0);
    this.geo = g;
    this.points = new THREE.Points(g, new THREE.PointsMaterial({
      size: 0.12, sizeAttenuation: true, vertexColors: true, transparent: true, opacity: 0.95, depthWrite: true,
    }));
    this.points.frustumCulled = false;
    scene.add(this.points);
  }

  burst(x, y, z, n, color, opts = {}) {
    const speed = opts.speed ?? 3.2;
    const life = opts.life ?? 0.75;
    const gravity = opts.gravity ?? 22;
    for (let i = 0; i < n; i++) {
      if (this.count >= this.max) this.swap(0, --this.count);   // вытесняем старейшую
      const k = this.count++;
      this.pos[k * 3] = x + (Math.random() - 0.5) * (opts.spread ?? 0.7);
      this.pos[k * 3 + 1] = y + (Math.random() - 0.5) * (opts.spread ?? 0.7);
      this.pos[k * 3 + 2] = z + (Math.random() - 0.5) * (opts.spread ?? 0.7);
      this.vel[k * 3] = (Math.random() - 0.5) * speed;
      this.vel[k * 3 + 1] = Math.random() * speed * 0.7 + 1.2;
      this.vel[k * 3 + 2] = (Math.random() - 0.5) * speed;
      this.col[k * 3] = color[0] * (0.75 + Math.random() * 0.4);
      this.col[k * 3 + 1] = color[1] * (0.75 + Math.random() * 0.4);
      this.col[k * 3 + 2] = color[2] * (0.75 + Math.random() * 0.4);
      this.life[k] = life * (0.6 + Math.random() * 0.6);
      this.maxLife[k] = this.life[k];
      this.gravity = gravity;
    }
  }

  swap(a, b) {
    for (let j = 0; j < 3; j++) {
      [this.pos[a * 3 + j], this.pos[b * 3 + j]] = [this.pos[b * 3 + j], this.pos[a * 3 + j]];
      [this.col[a * 3 + j], this.col[b * 3 + j]] = [this.col[b * 3 + j], this.col[a * 3 + j]];
      [this.vel[a * 3 + j], this.vel[b * 3 + j]] = [this.vel[b * 3 + j], this.vel[a * 3 + j]];
    }
    [this.life[a], this.life[b]] = [this.life[b], this.life[a]];
    [this.maxLife[a], this.maxLife[b]] = [this.maxLife[b], this.maxLife[a]];
  }

  update(dt) {
    const g = this.gravity ?? 22;
    let i = 0;
    while (i < this.count) {
      this.life[i] -= dt;
      if (this.life[i] <= 0) {
        this.swap(i, --this.count);
        continue;
      }
      this.vel[i * 3 + 1] -= g * dt;
      for (let j = 0; j < 3; j++) this.pos[i * 3 + j] += this.vel[i * 3 + j] * dt;
      i++;
    }
    this.geo.setDrawRange(0, this.count);
    this.geo.attributes.position.needsUpdate = true;
    this.geo.attributes.color.needsUpdate = true;
  }
}
