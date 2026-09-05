/**
 * Материал вокселей: запечённая окклюзия + свет неба + блочный свет (факелы),
 * экспоненциальный туман, лёгкая волна на поверхности воды.
 * Два инстанса (твёрдый/вода) на всю сцену — общие униформы.
 *
 * Качество картинки задаётся одной униформой uQuality (настройка «Шейдеры»):
 *   0 — базовый: как было всегда (атлас Nearest + AO + туман);
 *   1 — «мягкие»: нормаль грани из производных → солнечный блик по стороне,
 *       туман по высоте (у земли дымка гуще), вода с переливом;
 *   2 — «красивые»: плюс киношный тонмаппинг (ACES), лёгкое перенасыщение,
 *       rim-подсветка от неба, specular-всплеск на воде, кинематографичная
 *       виньетка включается отдельно (hud.setCinematic).
 *
 * Почему одна программа с веткой, а не три материала: меньше компиляции и
 * переключений, а наquality-ветка uniform-ная — то есть никакого rebuild при
 * смене настроек. Нулевое качество даёт ровно те же формулы, что и раньше,
 * поэтому «выкл» — это гарантированное прежнее поведение, а не «чуть хуже».
 */
import * as THREE from 'three';
import { SEA_TOP } from '../engine/constants.js';

export const VOXEL_VERT = /* glsl */`
attribute vec4 light;
attribute vec3 tint;
varying vec4 vLight;
varying vec3 vTint;
varying vec2 vUv;
varying float vFog;
varying vec3 vWorld;
uniform float uTime;
uniform float uWave;
uniform float uFogDensity;
uniform float uFogStart;
uniform float uFogEnd;

void main() {
  vUv = uv;
  vLight = light;
  vTint = tint;
  vec3 p = position;
  vec4 world = modelMatrix * vec4(p, 1.0);
  if (uWave > 0.5 && light.w > 0.5) {
    world.y += sin(world.x * 0.8 + uTime * 1.6) * 0.035 + cos(world.z * 1.1 - uTime * 1.2) * 0.03;
  }
  vWorld = world.xyz;
  vec4 mv = viewMatrix * world;
  float d = length(mv.xyz);
  // Поздний линейный туман: до uFogStart мир абсолютно чистый, плотнеет только
  // к границе прокрутки — так мир читается большим, а край чанков не виден.
  float lin = clamp((d - uFogStart) / max(1.0, uFogEnd - uFogStart), 0.0, 1.0);
  float expf = 1.0 - exp(-uFogDensity * uFogDensity * d * d);
  vFog = clamp(max(lin * lin, expf), 0.0, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = 1.0;
}
`;

export const VOXEL_FRAG = /* glsl */`
precision highp float;
uniform sampler2D uMap;
uniform vec3 uSunColor;
uniform vec3 uAmbient;
uniform vec3 uTorch;
uniform vec3 uFogColor;
uniform float uSun;
uniform float uAlpha;
uniform float uAlphaTest;
uniform float uExposure;
uniform float uQuality;
uniform vec3 uSunDirW;
uniform float uSea;
uniform float uWave;
uniform float uTime;
varying vec4 vLight;
varying vec3 vTint;
varying vec2 vUv;
varying float vFog;
varying vec3 vWorld;

vec3 aces(vec3 x) {
  return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0);
}

void main() {
  vec4 tex = texture2D(uMap, vUv);
  if (tex.a < uAlphaTest) discard;
  float occ = vLight.x;
  float sky = vLight.y;
  float blk = vLight.z;

  vec3 nrm = vec3(0.0, 1.0, 0.0);
  float lit0 = 1.0;
  if (uQuality > 0.5) {
    // Нормали у геометрии чанков нет (и не будет: это +3 float на вершину).
    // Грань плоская, поэтому нормаль точно восстанавливается из производных
    // мировой координаты — дёшево и без дополнительных атрибутов.
    nrm = normalize(cross(dFdx(vWorld), dFdy(vWorld)));
    lit0 = 0.72 + 0.5 * max(dot(nrm, uSunDirW), 0.0);
  }

  vec3 skyLight = uAmbient + uSunColor * (uSun * sky);
  vec3 lit = skyLight * occ * lit0 + uTorch * blk * (0.25 + 0.75 * occ);
  vec3 col = tex.rgb * vTint * lit;

  if (uQuality > 0.5 && uWave > 0.5) {
    // Вода: лёгкое волновое возмущение нормали + френелевское отражение неба
    // и солнечная дорожка. Без этого вода выглядела плоской закрашенной
    // поверхностью, и «шейдеров» как бы не было видно вовсе.
    float w1 = sin(vWorld.x * 1.7 + uTime * 2.1) + sin(vWorld.z * 1.31 - uTime * 1.7);
    float w2 = cos(vWorld.x * 1.13 - uTime * 1.3) + cos(vWorld.z * 1.9 + uTime * 1.9);
    nrm = normalize(nrm + vec3(w1 * 0.09, 0.0, w2 * 0.09));
    col *= (0.9 + 0.2 * (1.0 + w1 * 0.5));
  }

  if (uQuality > 1.5) {
    vec3 V = normalize(cameraPosition - vWorld);
    vec3 H = normalize(uSunDirW + V);
    float sp = pow(max(dot(nrm, H), 0.0), 34.0);
    col += uSunColor * sp * 0.26;
    float rim = pow(1.0 - clamp(dot(nrm, V), 0.0, 1.0), 3.0);
    col += uFogColor * rim * 0.09 * sky;
    if (uWave > 0.5) {
      vec3 V2 = normalize(cameraPosition - vWorld);
      float fr = pow(1.0 - clamp(dot(nrm, V2), 0.0, 1.0), 3.0);
      col = mix(col, uFogColor * (0.72 + 0.5 * uSun * sky), fr * 0.5);
      col += uSunColor * pow(max(dot(nrm, normalize(uSunDirW + V2)), 0.0), 120.0) * uSun * 0.85;
    }
  }

  col = clamp(col, 0.0, 1.45) * uExposure;
  if (uQuality > 1.5) {
    col = aces(col);
    float l = dot(col, vec3(0.299, 0.587, 0.114));
    col = mix(vec3(l), col, 1.12);
  }
  float fg = clamp(vFog, 0.0, 1.0);
  if (uQuality > 0.5) {
    // Дымка у земли: ниже уровня моря и в низинах туман держится гуще, чем на
    // возвышенностях. Это единственное, что делает рельеф «объёмным» вдали.
    float hz = clamp((uSea + 9.0 - vWorld.y) / 26.0, 0.0, 1.0) * 0.32;
    fg = clamp(max(fg, hz * (1.0 - fg)), 0.0, 1.0);
  }
  col = mix(col, uFogColor, fg);
  gl_FragColor = vec4(col, uAlpha);
}
`;

export function createVoxelMaterials(atlas) {
  const shared = {
    uMap: { value: atlas.texture },
    uTime: { value: 0 },
    uSun: { value: 1.0 },
    uSunColor: { value: new THREE.Color(1.0, 0.97, 0.9) },
    uAmbient: { value: new THREE.Color(0.36, 0.42, 0.55) },
    uTorch: { value: new THREE.Color(1.0, 0.58, 0.22) },
    uFogColor: { value: new THREE.Color(0.72, 0.85, 0.98) },
    uFogDensity: { value: 0.008 },
    uFogStart: { value: 70 },
    uFogEnd: { value: 110 },
    uExposure: { value: 1.0 },
    uQuality: { value: 0 },
    uSunDirW: { value: new THREE.Vector3(0, 1, 0) },
    uSea: { value: SEA_TOP },   // дымка по высоте считается от верхушки воды
  };

  const make = (opts) => {
    const mat = new THREE.ShaderMaterial({
      uniforms: {
        ...shared,
        uWave: { value: opts.wave ? 1 : 0 },
        uAlpha: { value: opts.alpha },
        uAlphaTest: { value: opts.alphaTest },
      },
      vertexShader: VOXEL_VERT,
      fragmentShader: VOXEL_FRAG,
      transparent: opts.transparent,
      side: THREE.DoubleSide,
      depthWrite: true,
    });
    // dFdx/dFdy нужны для нормалей из производных. three добавит
    // #extension GL_OES_standard_derivatives сам (см. WebGLProgram).
    mat.extensions = { derivatives: true };
    // общие униформы должны быть одни и те же объекты
    for (const k of Object.keys(shared)) mat.uniforms[k] = shared[k];
    return mat;
  };

  return {
    uniforms: shared,
    /** Уровень «шейдеров»: 0 выкл, 1 мягкие, 2 красивые. Меняет только униформу. */
    setQuality(q) { shared.uQuality.value = Math.max(0, Math.min(2, q | 0)); },
    quality() { return shared.uQuality.value; },
    // 0.15: у вырезанных тайлов (трава, папоротник, листва) средний alpha на
    // дальних mipmap-уровнях падает до 0.2–0.4, и при пороге 0.4 кроны и трава
    // просто исчезали бы за полем зрения.
    solid: make({ wave: false, alpha: 1, alphaTest: 0.15, transparent: false }),
    water: make({ wave: true, alpha: 0.76, alphaTest: 0.02, transparent: true }),
  };
}
