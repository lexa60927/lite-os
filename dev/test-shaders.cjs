/** Синтаксис GLSL + сверка uniforms/varyings с JS-обёртками. */
const tokenize = require('glsl-tokenizer/string');
const parse = require('glsl-parser/direct');
const fs = require('node:fs');
const path = require('node:path');

function shaderSources(file) {
  const src = fs.readFileSync(path.join(__dirname, '..', file), 'utf8');
  const out = {};
  const re = /export const (\w+)\s*=\s*\/\*\s*glsl\s*\*\/\s*`([\s\S]*?)`;/g;
  let m;
  while ((m = re.exec(src))) out[m[1]] = m[2];
  return { shaders: out, source: src };
}

const PRELUDE = `precision highp float;
uniform mat4 modelMatrix;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat3 normalMatrix;
uniform vec3 cameraPosition;
attribute vec3 position;
attribute vec3 normal;
attribute vec2 uv;
`;

const cases = [
  { file: 'src/render/voxelMaterial.js', vert: 'VOXEL_VERT', frag: 'VOXEL_FRAG', jsFile: 'src/render/voxelMaterial.js' },
  { file: 'src/render/sky.js', vert: 'SKY_VERT', frag: 'SKY_FRAG', jsFile: 'src/render/sky.js' },
];

let failed = 0;
const fail = (msg) => { failed++; console.log('  ✘ ' + msg); };

for (const c of cases) {
  console.log(`\n${c.file}`);
  const { shaders, source } = shaderSources(c.file);
  const vert = shaders[c.vert], frag = shaders[c.frag];
  if (!vert || !frag) { fail('не нашёл исходники шейдеров'); continue; }

  const declared = (src, kind) => {
    const re = new RegExp(`^\\s*${kind}\\s+\\w+\\s+([\\w,\\s]+);`, 'gm');
    const set = new Set();
    let m;
    while ((m = re.exec(src))) m[1].split(',').forEach((n) => set.add(n.trim()));
    return set;
  };
  const vVary = declared(vert, 'varying');
  const fVary = declared(frag, 'varying');
  for (const v of vVary) if (!fVary.has(v)) fail(`varying ${v} объявлен в вершинном, но не во фрагментном`);

  // синтаксис
  for (const [name, body] of [[c.vert, vert], [c.frag, frag]]) {
    try {
      const ast = parse(tokenize(PRELUDE + body));
      if (!ast || !ast.children) throw new Error('пустое AST');
      console.log(`  ✔ ${name}: парсится (${body.split('\n').filter(Boolean).length} строк)`);
    } catch (e) {
      fail(`${name}: ${String(e.message).split('\n')[0]}`);
    }
    if (/\b(in|out)\s+(float|vec[234]|mat[234])/.test(body) && !/varying/.test(body)) {
      fail(`${name}: похоже на GLSL ES 3.0 (in/out) — three использует ES 1.0 синтаксис в шейдерных строках`);
    }
  }

  // uniforms: все, что объявлено в GLSL, должны быть в JS
  const jsUniforms = new Set();
  let m;
  const ure = /u([A-Z]\w*)\s*:\s*\{\s*value/g;
  while ((m = ure.exec(source))) jsUniforms.add('u' + m[1]);
  const usedUniforms = new Set([...declared(vert, 'uniform'), ...declared(frag, 'uniform')]);
  const missing = [...usedUniforms].filter((u) => !jsUniforms.has(u));
  if (missing.length) fail(`нет в JS-униформах: ${missing.join(', ')}`);
  else console.log(`  ✔ все uniforms объявлены в JS (${usedUniforms.size})`);
}
console.log(failed ? `\nПРОБЛЕМ: ${failed}` : '\nшейдеры в порядке');
process.exit(failed ? 1 : 0);
