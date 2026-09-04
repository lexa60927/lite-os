import { buildTiles } from '../src/engine/tiles.js';
import { packAtlas } from '../src/engine/pixels.js';
const { tiles, index } = buildTiles();
console.log('tiles:', tiles.length);
const img = packAtlas(tiles);
console.log('atlas', img.width, img.height);
const gt = tiles[index.grass_top].tile.data, gl = tiles[index.glass].tile.data;
let opaque=0, alpha=0;
for (let i=3;i<gt.length;i+=4) if (gt[i]===255) opaque++;
for (let i=3;i<gl.length;i+=4) if (gl[i]===0) alpha++;
console.log('grass_top opaque:', opaque, 'glass transparent:', alpha);
const px=(t,x,y)=>Array.from(t.data.slice((y*16+x)*4,(y*16+x)*4+3));
for (const n of ['grass_top','grass_side','stone','dirt','water','leaves','log_side','torch','cobblestone','snow','snow_side','flower_red','wool_red','tall_grass'])
  console.log(n.padEnd(12), JSON.stringify(px(tiles[index[n]].tile,8,8)));
