/** Атлас текстур (DataTexture), canvas-тайлы для UI, трещины при поломке, иконки блоков. */
import * as THREE from 'three';
import { buildTiles } from '../engine/tiles.js';
import { packAtlas, tileToCanvas, TILE, CELL as PACK_CELL, GRID as PACK_GRID } from '../engine/pixels.js';
import { buildCracks } from './cracks.js';
import { BLOCKS, AIR } from '../engine/blocks.js';

// 16×16 ячеек по 32 px = атлас 512×512: степень двойки, поэтому mipmaps легальны
// в любом WebGL-контексте (с 384 px — NPOT, и без mipmaps дальние грани рябили).
export const GRID = PACK_GRID;
export const CELL = PACK_CELL;

export class Atlas {
  constructor() {
    const { tiles, index } = buildTiles();
    const packed = packAtlas(tiles);
    const tex = new THREE.DataTexture(packed.data, packed.width, packed.height, THREE.RGBAFormat);
    tex.magFilter = THREE.NearestFilter;              // вблизи — честный пиксель-арт
    // Mipmap нужен, чтобы наискось уходящая в даль поверхность не рябила (moiré):
    // без него 16px тайл на дистанции превращается в шум. Кровоток между тайлами
    // закрыт PAD-полем (packAtlas дублирует крайние пиксели), поэтому уровни
    // смешивают только сам тайл — разводов, как было с плотной упаковкой, нет.
    tex.minFilter = THREE.LinearMipmapLinearFilter;
    tex.generateMipmaps = true;
    tex.wrapS = tex.wrapT = THREE.ClampToEdgeWrapping;
    tex.colorSpace = THREE.NoColorSpace;
    tex.needsUpdate = true;

    this.texture = tex;
    this.index = index;
    this.tile = TILE;
    this.cell = CELL;
    this.grid = GRID;
    this.canvases = {};
    for (const t of tiles) this.canvases[t.name] = tileToCanvas(t.tile, 1);
    this.cracks = buildCracks();
    this.iconCache = new Map();
  }

  /** Максимальная анизотропия браузера: с ней боковые грани остаются резкими далеко. */
  setMaxAnisotropy(n) {
    const a = Math.max(1, Math.min(8, n | 0));
    this.texture.anisotropy = a;
    this.texture.needsUpdate = true;
    return a;
  }

  /** Иконка блока: изометрический кубик из тайлов (как в хотбаре Minecraft). */
  icon(id, size = 48) {
    const key = id + ':' + size;
    const hit = this.iconCache.get(key);
    if (hit) return hit;
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = size;
    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;
    const def = BLOCKS[id] ?? BLOCKS[AIR];
    if (def && def.tiles) {
      const flat = def.render === 'cross' || def.render === 'torch' || def.render === 'item';
      const top = this.canvases[def.tiles.top ?? def.tiles.all];
      const side = this.canvases[def.tiles.side ?? def.tiles.all];
      if (flat || !top || !side) {
        const src = this.canvases[def.tiles.all] ?? top;
        if (src) {
          const s = size * 0.8;
          ctx.drawImage(src, (size - s) / 2, (size - s) / 2, s, s);
        }
      } else {
        drawIsoCube(ctx, size, top, side);
      }
    }
    const url = canvas.toDataURL();
    this.iconCache.set(key, url);
    return url;
  }
}

function drawIsoCube(ctx, s, topCanvas, sideCanvas) {
  const u = s * 0.46;         // половина ширины куба
  const h = s * 0.42;          // высота боковой грани
  const oy = s * 0.08;
  ctx.save();
  ctx.translate(0, oy);
  // верхняя грань
  ctx.save();
  ctx.setTransform(u, u * 0.5, -u, u * 0.5, s / 2, 0);
  ctx.drawImage(topCanvas, 0, 0, 1, 1);
  ctx.restore();
  // левая грань
  ctx.save();
  ctx.setTransform(u, u * 0.5, 0, h, s / 2 - u, u * 0.5);
  ctx.drawImage(sideCanvas, 0, 0, 1, 1);
  ctx.fillStyle = 'rgba(0,0,0,0.28)';
  ctx.fillRect(0, 0, 1, 1);
  ctx.restore();
  // правая грань
  ctx.save();
  ctx.setTransform(u, -u * 0.5, 0, h, s / 2, u * 0.5);
  ctx.drawImage(sideCanvas, 0, 0, 1, 1);
  ctx.fillStyle = 'rgba(0,0,0,0.12)';
  ctx.fillRect(0, 0, 1, 1);
  ctx.restore();
  ctx.restore();
}
