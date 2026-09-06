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
uniform float uQuality;
uniform float uFogDensity;
uniform float uFogStart;
uniform float uFogEnd;
// Чанки three для карты теней: имена переменных (worldPosition, transformedNormal)
// заданы самим <shadowmap_vertex>, поэтому их не «выбираем», а исполняем.
#include <common>
#include <shadowmap_pars_vertex>

void main() {
  vUv = uv;
  vLight = light;
  vTint = tint;
  vec3 p = position;
  vec4 world = modelMatrix * vec4(p, 1.0);
  if (uWave > 0.5 && light.w > 0.5) {
    // «Ультра» (уровень 3): амплитуда волн крупнее и фазы совпадают с
    // waterSlope() во фрагментном шейдере — иначе блик скользил бы не по гребню,
    // а мимо него, и вода выглядела нарисованной поверх другой воды.
    if (uQuality > 2.5) {
      // Покачивание намеренно маленькое: 2-4 см. Крупнее — и вода начинает
      // «кипеть» на каждом кадре, а на скриншотах-примерах как раз спокойная
      // поверхность с мягкой дорожкой света.
      float t = uTime;
      world.y += sin(world.x * 0.62 + t * 1.3) * 0.022
               + cos(world.z * 0.62 - t * 1.1) * 0.018
               + sin((world.x + world.z) * 1.35 + t * 2.1) * 0.008;
    } else {
      world.y += sin(world.x * 0.8 + uTime * 1.6) * 0.035 + cos(world.z * 1.1 - uTime * 1.2) * 0.03;
    }
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

  // Тени: нормалей у нашей геометрии нет, для смещения выборки (normalBias)
  // берём «вверх» — на верхних гранях (именно они читаются как рельеф) этого
  // достаточно, а на вертикальных normalBias выключен уменьшением (см. sunShadow).
  vec4 worldPosition = world;
  vec3 transformedNormal = normalize(normalMatrix * vec3(0.0, 1.0, 0.0));
  #include <shadowmap_vertex>
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
uniform vec3 uZenithC;
uniform float uSea;
uniform float uWave;
uniform float uTime;
uniform float uShadow;        // сила теней 0..1 (0 — даже при включённой карте)
uniform samplerCube uProbe;   // отражение мира в воде (куб-проба)
uniform float uRefl;          // 0 — только небо, 1 — проба мира полностью
varying vec4 vLight;
varying vec3 vTint;
varying vec2 vUv;
varying float vFog;
varying vec3 vWorld;

#include <common>
#include <packing>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>

vec3 aces(vec3 x) {
  return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0);
}

/**
 * Наклон поверхности воды аналитически: высота — сумма трёх волн, нормаль — её
 * градиент. Дешевле и устойчивее, чем «шумовые» нормали: блик всегда лежит ровно
 * там, где геометрия поднялась (см. вершинный шейдер), и вода не расползается.
 */
vec2 waterSlope(vec2 p, float t) {
  const float k1 = 0.62;   // долгая зыбь
  const float k2 = 1.35;   // волна по диагонали
  const float k3 = 2.9;    // рябь
  float a1 = k1 * cos(p.x * k1 + t * 1.3) * 0.022 + k2 * cos((p.x + p.y) * k2 + t * 2.1) * 0.008 + k3 * cos(p.x * k3 - t * 3.7) * 0.0025;
  float a2 = k1 * cos(p.y * k1 - t * 1.1) * 0.018 + k2 * cos((p.x + p.y) * k2 + t * 2.1) * 0.008 + k3 * cos(p.y * k3 + t * 3.1) * 0.0025;
  return vec2(a1, a2);
}

/** Цвет неба по направлению — то же приближение, что и в куполе неба. Нужно,
 *  чтобы вода отражала закат, а не просто синий цвет. */
vec3 skyLike(vec3 dir, vec3 horizon, vec3 zenith, float day) {
  float h = clamp(dir.y * 0.5 + 0.5, 0.0, 1.0);
  return mix(horizon, zenith, pow(h, 0.62)) * (0.94 + 0.12 * h) * (0.22 + 0.78 * day);
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
    // Материал двусторонний, а нормалей у геометрии нет: знак производной
    // зависит от порядка обхода треугольника, поэтому половина граней могла
    // получать нормаль «от камеры» → освещение прыгало шахматкой между
    // соседними квадами. Разворачиваем нормаль к зрителю: тогда она зависит
    // только от того, на какую сторону мы смотрим.
    vec3 Vw = normalize(cameraPosition - vWorld);
    if (dot(nrm, Vw) < 0.0) nrm = -nrm;
    lit0 = 0.72 + 0.5 * max(dot(nrm, uSunDirW), 0.0);
  }

  // getShadowMask() = 1 без активной карты теней, поэтому вызов безопасен всегда.
  float shade = mix(1.0, clamp(getShadowMask(), 0.0, 1.0), uShadow);
  // Тень не должна быть чёрной дырой: в тени остаётся свет неба (и потому она
  // чуть холоднее — как на нормальных шейдерах, а не «выключенный пиксель»).
  vec3 sunTerm = uSunColor * (uSun * sky) * shade;
  vec3 skyLight = (uAmbient * mix(vec3(1.08, 1.12, 1.2), vec3(1.0), shade)) + sunTerm;
  vec3 lit = skyLight * occ * lit0 + uTorch * blk * (0.25 + 0.75 * occ);
  vec3 col = tex.rgb * vTint * lit;
  float sunGate = shade;                        // блики под деревом не нужны

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
    // Vw из блока выше здесь уже не видна (свой scope), поэтому считаем заново
    vec3 V = normalize(cameraPosition - vWorld);
    vec3 H = normalize(uSunDirW + V);
    float sp = pow(max(dot(nrm, H), 0.0), 34.0);
    col += uSunColor * sp * 0.26 * sunGate;
    float rim = pow(1.0 - clamp(dot(nrm, V), 0.0, 1.0), 3.0);
    col += uFogColor * rim * 0.09 * sky;
    if (uWave > 0.5) {
      vec3 V2 = normalize(cameraPosition - vWorld);
      float fr = pow(1.0 - clamp(dot(nrm, V2), 0.0, 1.0), 3.0);
      col = mix(col, uFogColor * (0.72 + 0.5 * uSun * sky), fr * 0.5);
      col += uSunColor * pow(max(dot(nrm, normalize(uSunDirW + V2)), 0.0), 120.0) * uSun * 0.45 * sunGate;
    }
  }

  if (uQuality > 2.5) {
    // ————— ВОДА: отражение (небо + мир), узкая солнечная дорожка, лёгкая рябь.
    // Ориентир — спокойная вода с мягким бликом, а не зеркало и не «стиральная
    // доска»: амплитуды маленькие, fresnel ограничен снизу и сверху.
    if (uWave > 0.5) {
      vec2 sl = waterSlope(vWorld.xz, uTime);
      vec3 nw = normalize(vec3(-sl.x, 1.0, -sl.y));
      vec3 V = normalize(cameraPosition - vWorld);
      vec3 R = reflect(-V, nw);
      vec3 refl = skyLike(R, uFogColor, uZenithC, clamp(uSun, 0.0, 1.2));
      if (uRefl > 0.01) refl = mix(refl, textureCube(uProbe, R).rgb, uRefl * 0.8);
      float fr = pow(1.0 - clamp(dot(V, nw), 0.0, 1.0), 4.2);
      col = mix(col, refl, clamp(0.12 + fr * 0.5, 0.0, 0.58));
      // дорожка солнца: узкий пик + широкий лепесток; под тенью дерева гаснет
      vec3 H = normalize(uSunDirW + V);
      float sd = max(dot(uSunDirW, nw), 0.0) * sunGate;
      float spk = pow(max(dot(nw, H), 0.0), 220.0) * 1.05 + pow(max(dot(nw, H), 0.0), 26.0) * 0.1;
      col += uSunColor * spk * sd * clamp(uSun, 0.0, 1.0);
      // ночная вода не чёрная: в ней живёт лунный свет и звёздное небо
      col += uZenithC * 0.035 * (1.0 - clamp(uSun, 0.0, 1.0));
    } else {
      // ————— ЗЕМЛЯ: тёплый ободок против солнца и лёгкий подсвет неба сверху
      vec3 V = normalize(cameraPosition - vWorld);
      float back = pow(max(dot(-V, uSunDirW), 0.0), 3.0);
      col += uSunColor * back * 0.075 * sky * clamp(uSun, 0.0, 1.0) * sunGate;
      col += uZenithC * 0.045 * max(nrm.y, 0.0) * (0.25 + clamp(uSun, 0.0, 1.0) * 0.6);
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
  if (uQuality > 2.5) {
    // Воздушная перспектива: глядя против солнца, дымку видим тёплой и яркой —
    // ровно то, что отличает «закат по-настоящему» от серой пелены на горизонте.
    vec3 fwd = normalize(vWorld - cameraPosition);
    float toSun = pow(max(dot(fwd, uSunDirW), 0.0), 3.0) * clamp(uSun, 0.0, 1.0);
    vec3 fogc = uFogColor + uSunColor * toSun * 0.42;
    col = mix(col, fogc, fg);
  } else {
    col = mix(col, uFogColor, fg);
  }
  gl_FragColor = vec4(col, uAlpha);
}
`;

export function createVoxelMaterials(atlas) {
  // `lights: true` обязывает материал нести light-униформы: THREE не подмешивает
  // UniformsLib.lights в ShaderMaterial сам, а WebGLRenderer на каждом кадре пишет
  // uniforms.directionalLights.value = … — без этих ключей первый же кадр с
  // включёнными тенями падает с «Cannot set properties of undefined (setting
  // 'needsUpdate')». Клонируем: три обновляет эти объекты на программу.
  const shared = {
    ...THREE.UniformsUtils.clone(THREE.UniformsLib.lights),
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
    uZenithC: { value: new THREE.Color(0.19, 0.4, 0.86) },   // зенит — для отражений воды
    uShadow: { value: 0 },      // сила теней: 0 = тени выключены (картинка как прежде)
    uRefl: { value: 0 },        // доля отражения «мира» (куб-пробы) в воде
    uProbe: { value: null },
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
      // lights:true нужен, чтобы three отдал программе униформы directional-света
      // и саму карту теней (без этого getShadowMask() всегда вернёт 1.0)
      lights: true,
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
    /**
     * Уровень «шейдеров»: 0 выкл, 1 мягкие, 2 красивые, 3 ультра (своя ветка в
     * небе + отражающая вода через куб-пробу + финальный грейд). Меняет только униформу.
     */
    setQuality(q) { shared.uQuality.value = Math.max(0, Math.min(3, q | 0)); },
    /** Сила теней 0..1 (0 — карта теней не влияет на картинку вовсе). */
    setShadow(s) { shared.uShadow.value = Math.max(0, Math.min(1, s)); },
    /** Куб-проба для отражений воды + её доля (0 — только аналитическое небо). */
    setReflection(tex, amount = 0) {
      shared.uProbe.value = tex ?? null;
      shared.uRefl.value = tex ? Math.max(0, Math.min(1, amount)) : 0;
    },
    quality() { return shared.uQuality.value; },
    // 0.15: у вырезанных тайлов (трава, папоротник, листва) средний alpha на
    // дальних mipmap-уровнях падает до 0.2–0.4, и при пороге 0.4 кроны и трава
    // просто исчезали бы за полем зрения.
    solid: make({ wave: false, alpha: 1, alphaTest: 0.15, transparent: false }),
    water: make({ wave: true, alpha: 0.76, alphaTest: 0.02, transparent: true }),
  };
}
