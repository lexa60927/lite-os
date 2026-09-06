/**
 * Запасные материалы мира. Нужны для одного случая: GPU не смог собрать нашу
 * воксельную программу (кривый драйвер, отсутствие нужного расширения, чужой
 * GLSL из мода). Обычное поведение three в такой ситуации — молча не нарисовать
 * НИ ОДИН меш: небо, облака, рука и рамка цели живут на своих материалах и
 * остаются, а мир исчезает целиком. Именно это и означало «весь мир прозрачный,
 * не видимый».
 *
 * Поэтому ступеней три:
 *   0 — основной материал (свет, тени, вода с отражением, дымка);
 *   1 — лёгкий: те же атрибуты и та же дымка, но без uniform-библиотеки
 *         освещения three, без карты теней, без samplerCube и без производных;
 *   2 — базовый: MeshBasicMaterial с атласом. Плоско, зато собирается везде.
 *
 * Униформы (время, солнце, туман, сила теней) отдаются ССЫЛКОЙ из основного
 * материала: игра продолжает писать в них каждый кадр, и лёгкий режим живёт на
 * том же управляющем коде, без вилки в main.js.
 */
import * as THREE from 'three';

/** Лёгкий набор: один-два оператора на канал, никаких three-овских чанков. */
export const LITE_VERT = /* glsl */`
precision mediump float;
attribute vec3 tint;
attribute vec4 light;
uniform float uTime;
uniform float uWave;
uniform float uFogDensity;
uniform float uFogStart;
uniform float uFogEnd;
varying vec2 vUv;
varying vec4 vLight;
varying vec3 vTint;
varying float vFog;

void main() {
  vUv = uv;
  vLight = light;
  vTint = tint;
  vec4 world = modelMatrix * vec4(position, 1.0);
  if (uWave > 0.5) {
    // покачивание воды то же по смыслу, но одной строкой: без него вода стояла бы
    // мёртвым стеклом, а это уже «сломанная графика», а не «упрощённая»
    world.y += sin(world.x * 0.8 + uTime * 1.6) * 0.03 + cos(world.z * 1.1 - uTime * 1.2) * 0.03;
  }
  vec4 mv = viewMatrix * world;
  float d = length(mv.xyz);
  float lin = clamp((d - uFogStart) / max(1.0, uFogEnd - uFogStart), 0.0, 1.0);
  float expf = 1.0 - exp(-uFogDensity * uFogDensity * d * d);
  vFog = clamp(max(lin * lin, expf), 0.0, 1.0);
  gl_Position = projectionMatrix * mv;
}
`;

export const LITE_FRAG = /* glsl */`
precision mediump float;
uniform sampler2D uMap;
uniform float uAlpha;
uniform float uAlphaTest;
uniform float uSun;
uniform vec3 uSunColor;
uniform vec3 uAmbient;
uniform vec3 uTorch;
uniform vec3 uFogColor;
varying vec2 vUv;
varying vec4 vLight;
varying vec3 vTint;
varying float vFog;

void main() {
  vec4 tex = texture2D(uMap, vUv);
  if (tex.a < uAlphaTest) discard;
  float occ = vLight.x;      // затенение углами (AO)
  float sky = vLight.y;      // сколько неба видит грань
  float blk = vLight.z;      // свет от факелов и лавы
  vec3 day = uSunColor * (0.34 + 0.66 * sky) * clamp(uSun, 0.05, 1.25);
  vec3 lit = (uAmbient * (0.5 + 0.5 * sky) + day) * (0.4 + 0.6 * occ) + uTorch * blk * (0.3 + 0.7 * occ);
  vec3 col = tex.rgb * vTint * lit;
  col = clamp(col, 0.0, 1.4);
  col = mix(col, uFogColor, clamp(vFog, 0.0, 1.0));
  gl_FragColor = vec4(col, uAlpha);
}
`;

/**
 * @param {{texture: THREE.Texture}} atlas   лист тайлов (тот же, что у основного материала)
 * @param {object} uniforms                 униформы основного материала (передаются ссылкой)
 */
export function createLiteMaterials(atlas, uniforms) {
  // У общих униформ нет разделения «solid/water» (uAlpha одно на двоих), поэтому
  // у лёгкого материала они СВОИ, склонированные из общих: дальше всё как в
  // основном материале — вода прозрачнее, у земли alphaTest режет вырезанные тайлы.
  const cloneFor = (kind, opts) => {
    const u = {};
    for (const [k, v] of Object.entries(uniforms || {})) u[k] = k === 'uAlpha' || k === 'uAlphaTest' || k === 'uWave'
      ? { value: opts[k] }
      : v;
    const mat = new THREE.ShaderMaterial({
      uniforms: u,
      vertexShader: LITE_VERT,
      fragmentShader: LITE_FRAG,
      transparent: !!opts.transparent,
      depthWrite: opts.depthWrite !== false,
      side: THREE.DoubleSide,
    });
    return { mat, u };
  };
  const s = cloneFor('solid', { uAlpha: 1, uAlphaTest: 0.15, uWave: 0 });
  const w = cloneFor('water', { uAlpha: 0.76, uAlphaTest: 0.02, uWave: 1, transparent: true });
  const shared = Object.assign({}, uniforms, { uAlpha: s.u.uAlpha, uAlphaTest: s.u.uAlphaTest, uWave: s.u.uWave });
  return {
    solid: s.mat,
    water: w.mat,
    // общий набор: игра продолжает писать uTime/uSun/туман как раньше
    uniforms: shared,
    lite: true,
    setQuality() { /* лёгкий материал один на все уровни */ },
    setShadow() { /* теней в лёгком режиме нет намеренно */ },
    setReflection() { /* и отражений тоже */ },
    quality() { return 0; },
    dispose() { s.mat.dispose(); w.mat.dispose(); },
  };
}

/** Ступень 2: три-овский базовый материал. Не освещается, зато компилируется везде. */
export function createBasicMaterials(atlas, uniforms) {
  const map = atlas?.texture ?? null;
  const solid = new THREE.MeshBasicMaterial({ map, alphaTest: 0.1, side: THREE.DoubleSide });
  const water = new THREE.MeshBasicMaterial({ map, alphaTest: 0.02, transparent: true, opacity: 0.72, side: THREE.DoubleSide, depthWrite: false });
  return {
    solid,
    water,
    // Игра пишет каждый кадр в uTime/uSun/туман — пусть пишет в те же объекты,
    // что и прежде: базовый материал их не читает, зато ни один вызов не падает.
    uniforms: uniforms ?? {},
    setQuality() {},
    setShadow() {},
    setReflection() {},
    quality() { return 0; },
    dispose() { solid.dispose(); water.dispose(); },
  };
}
