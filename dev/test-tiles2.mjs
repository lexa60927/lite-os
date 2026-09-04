import { buildTiles } from '../src/engine/tiles.js';
import { packAtlas } from '../src/engine/pixels.js';
const { tiles, index } = buildTiles();
const img = packAtlas(tiles);
console.log('tiles:', tiles.length, 'atlas', img.width + 'x' + img.height);
const px=(t,x,y)=>Array.from(t.data.slice((y*16+x)*4,(y*16+x)*4+3));
for (const n of ['grass_top','grass_side','stone','dirt','water','leaves','log_side','torch','cobblestone','snow','snow_side','flower_red','wool_red','tall_grass','glass'])
  console.log(n.padEnd(12), JSON.stringify(px(tiles[index[n]].tile,8,8)));
// проверка padding: пиксель слева от тайла stone в атласе = цвет края тайла
const i = index.stone, col = i % 16, row = (i/16)|0, S = img.width;
const at=(cx,cy)=>Array.from(img.data.slice((cy*S+cx)*4,(cy*S+cx)*4+4));
console.log('inner', at(col*24+8, row*24+8), 'padded', at(col*24+1, row*24+8), 'alpha pad', at(col*24+1, row*24+8)[3]);
