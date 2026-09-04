/** Воксельный рейкаст (Amanatides & Woo) — какой блок под прицелом и с какой стороны. */
import { HEIGHT } from '../engine/constants.js';
import { BLOCKS } from '../engine/blocks.js';

export function raycast(world, ox, oy, oz, dx, dy, dz, maxDist = 6, opts = {}) {
  const hitLiquids = opts.liquids === true;
  let x = Math.floor(ox), y = Math.floor(oy), z = Math.floor(oz);
  const stepX = dx > 0 ? 1 : -1;
  const stepY = dy > 0 ? 1 : -1;
  const stepZ = dz > 0 ? 1 : -1;
  const invX = dx !== 0 ? Math.abs(1 / dx) : Infinity;
  const invY = dy !== 0 ? Math.abs(1 / dy) : Infinity;
  const invZ = dz !== 0 ? Math.abs(1 / dz) : Infinity;
  let tMaxX = dx !== 0 ? ((stepX > 0 ? x + 1 - ox : ox - x) * invX) : Infinity;
  let tMaxY = dy !== 0 ? ((stepY > 0 ? y + 1 - oy : oy - y) * invY) : Infinity;
  let tMaxZ = dz !== 0 ? ((stepZ > 0 ? z + 1 - oz : oz - z) * invZ) : Infinity;
  let t = 0;
  let nx = 0, ny = 0, nz = 0;

  for (let i = 0; i < 256 && t <= maxDist; i++) {
    const id = y < 0 ? 1 : world.getBlock(x, y, z);
    const def = BLOCKS[id];
    if (id !== 0 && def.replaceable !== true && (hitLiquids || !def.liquid)) {
      return { x, y, z, nx, ny, nz, id, dist: t, replaceable: false };
    }
    const which = tMin(tMaxX, tMaxY, tMaxZ);
    if (which === 'a') { x += stepX; t = tMaxX; tMaxX += invX; nx = -stepX; ny = 0; nz = 0; }
    else if (which === 'b') { y += stepY; t = tMaxY; tMaxY += invY; nx = 0; ny = -stepY; nz = 0; }
    else { z += stepZ; t = tMaxZ; tMaxZ += invZ; nx = 0; ny = 0; nz = -stepZ; }
    if (y < -1 || y > HEIGHT + 1) return null;
  }
  return null;
}

const tMin = (a, b, c) => (a <= b && a <= c ? 'a' : b <= c ? 'b' : 'c');
