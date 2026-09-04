/** Текстуры трещин для анимации поломки блока (8 стадий). */
import * as THREE from 'three';
import { PixelTile, TILE } from '../engine/pixels.js';
import { hash2 } from '../engine/noise.js';

export const CRACK_STAGES = 8;

function crackTile(stage) {
  const t = new PixelTile();
  t.clear();
  const lines = 2 + stage;
  const seed = stage * 7 + 3;
  for (let i = 0; i < lines; i++) {
    let x = 1 + ((hash2(i, stage, seed) * (TILE - 2)) | 0);
    let y = 1 + ((hash2(i + 5, stage, seed + 1) * (TILE - 2)) | 0);
    const dir = hash2(i, 0, seed + 2) > 0.5 ? 1 : -1;
    const steps = 3 + ((stage * 0.9 + hash2(i, 1, seed) * 4) | 0);
    for (let s = 0; s < steps; s++) {
      const grow = stage >= 4 ? 1 : 0;
      t.set(x, y, [12, 12, 12], 225);
      if (grow) { t.set(x + dir, y, [30, 30, 30], 150); t.set(x, y + 1, [20, 20, 20], 120); }
      x += dir * (hash2(s, i, seed + 3) > 0.45 ? 1 : 0);
      y += hash2(s, i + 2, seed + 4) > 0.35 ? 1 : -1;
      x = Math.max(0, Math.min(TILE - 1, x));
      y = Math.max(0, Math.min(TILE - 1, y));
    }
  }
  if (stage >= 6) t.speckles([0, 0, 0], 14, stage, 0);
  return t;
}

export function buildCracks() {
  const list = [];
  for (let i = 0; i < CRACK_STAGES; i++) {
    const t = crackTile(i);
    const tex = new THREE.DataTexture(t.data, TILE, TILE, THREE.RGBAFormat);
    tex.magFilter = THREE.NearestFilter;
    tex.minFilter = THREE.NearestFilter;
    tex.generateMipmaps = false;
    tex.colorSpace = THREE.NoColorSpace;
    tex.needsUpdate = true;
    list.push(tex);
  }
  return list;
}
