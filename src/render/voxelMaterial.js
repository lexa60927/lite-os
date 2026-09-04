/**
 * Материал вокселей: запечённая окклюзия + свет неба + блочный свет (факелы),
 * экспоненциальный туман, лёгкая волна на поверхности воды.
 * Два инстанса (твёрдый/вода) на всю сцену — общие униформы.
 */
import * as THREE from 'three';

export const VOXEL_VERT = /* glsl */`
attribute vec4 light;
varying vec4 vLight;
varying vec2 vUv;
varying float vFog;
uniform float uTime;
uniform float uWave;
uniform float uFogDensity;

void main() {
  vUv = uv;
  vLight = light;
  vec3 p = position;
  vec4 world = modelMatrix * vec4(p, 1.0);
  if (uWave > 0.5 && light.w > 0.5) {
    world.y += sin(world.x * 0.8 + uTime * 1.6) * 0.035 + cos(world.z * 1.1 - uTime * 1.2) * 0.03;
  }
  vec4 mv = viewMatrix * world;
  float d = length(mv.xyz);
  vFog = 1.0 - exp(-uFogDensity * uFogDensity * d * d);
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
varying vec4 vLight;
varying vec2 vUv;
varying float vFog;

void main() {
  vec4 tex = texture2D(uMap, vUv);
  if (tex.a < uAlphaTest) discard;
  float occ = vLight.x;
  float sky = vLight.y;
  float blk = vLight.z;
  vec3 skyLight = uAmbient + uSunColor * (uSun * sky);
  vec3 lit = skyLight * occ + uTorch * blk * (0.25 + 0.75 * occ);
  vec3 col = tex.rgb * lit;
  col = clamp(col, 0.0, 1.45) * uExposure;
  col = mix(col, uFogColor, clamp(vFog, 0.0, 1.0));
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
    uExposure: { value: 1.0 },
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
    // общие униформы должны быть одни и те же объекты
    for (const k of Object.keys(shared)) mat.uniforms[k] = shared[k];
    return mat;
  };

  return {
    uniforms: shared,
    solid: make({ wave: false, alpha: 1, alphaTest: 0.4, transparent: false }),
    water: make({ wave: true, alpha: 0.76, alphaTest: 0.02, transparent: true }),
  };
}
