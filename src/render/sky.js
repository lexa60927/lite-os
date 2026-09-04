/** Небо: градиентный купол, солнце, луна, звёзды, облака; считает освещённость и туман. */
import * as THREE from 'three';
import { Noise } from '../engine/noise.js';

export const SKY_VERT = /* glsl */`
varying vec3 vDir;
void main() {
  vDir = normalize(position);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;
export const SKY_FRAG = /* glsl */`
precision highp float;
uniform vec3 uZenith, uHorizon, uNight, uSunDir, uSunTint;
uniform float uDay, uNightF;
varying vec3 vDir;
void main() {
  float h = clamp(vDir.y * 0.5 + 0.5, 0.0, 1.0);
  vec3 sky = mix(uHorizon, uZenith, pow(h, 0.75));
  sky = mix(uNight, sky, uDay);
  // тёплое зарево вокруг солнца
  float sun = max(dot(normalize(vDir), normalize(uSunDir)), 0.0);
  sky += uSunTint * pow(sun, 26.0) * 0.9 * uDay;
  sky += uSunTint * pow(sun, 3.0) * 0.14 * uDay;
  // лёгкая полоса на горизонте ночью
  sky += vec3(0.02, 0.03, 0.06) * uNightF * (1.0 - h);
  gl_FragColor = vec4(sky, 1.0);
}
`;

/** Пиксельные облака Minecraft-стиля. */
function cloudTexture() {
  const n = new Noise(9137);
  const S = 128;
  const data = new Uint8ClampedArray(S * S * 4);
  for (let z = 0; z < S; z++) {
    for (let x = 0; x < S; x++) {
      const v = n.fbm2(x / 26, z / 26, 4) * 1.5;
      const on = v > 0.06 ? 1 : 0;
      const shade = on ? (v > 0.28 ? 255 : 232) : 0;
      const i = (z * S + x) * 4;
      data[i] = shade; data[i + 1] = shade; data[i + 2] = 255;
      data[i + 3] = on ? 235 : 0;
    }
  }
  // блок 4×4 как у Minecraft: огрубляем
  const out = new Uint8ClampedArray(S * S * 4);
  const B = 4;
  for (let z = 0; z < S; z++) {
    for (let x = 0; x < S; x++) {
      const sx = ((x / B) | 0) * B + ((z / B) | 0) % 2;
      const sz = ((z / B) | 0) * B;
      const i = (Math.min(S - 1, sz) * S + Math.min(S - 1, sx)) * 4;
      const o = (z * S + x) * 4;
      out[o] = data[i]; out[o + 1] = data[i + 1]; out[o + 2] = data[i + 2]; out[o + 3] = data[i + 3];
    }
  }
  const tex = new THREE.DataTexture(out, S, S, THREE.RGBAFormat);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.magFilter = THREE.NearestFilter;
  tex.minFilter = THREE.LinearMipmapLinearFilter;
  tex.generateMipmaps = true;
  tex.colorSpace = THREE.NoColorSpace;
  tex.needsUpdate = true;
  return tex;
}

function discTexture(kind) {
  const S = 32;
  const data = new Uint8ClampedArray(S * S * 4);
  const rnd = new Noise(kind === 'moon' ? 4242 : 111);
  for (let z = 0; z < S; z++) {
    for (let x = 0; x < S; x++) {
      const dx = x - S / 2 + 0.5, dy = z - S / 2 + 0.5;
      const d = Math.hypot(dx, dy);
      const i = (z * S + x) * 4;
      let v = 255;
      if (kind === 'moon') {
        v = 226 - (rnd.perlin2(x * 0.35, z * 0.35) > 0.18 ? 42 : 0) - (d > 13.5 ? 226 : 0);
      } else if (d > 15) v = 0;
      const a = d > 15.5 ? 0 : 255;
      data[i] = v; data[i + 1] = kind === 'moon' ? v : Math.min(255, v * 0.94);
      data[i + 2] = kind === 'moon' ? v * 0.98 : v * 0.7;
      data[i + 3] = a;
    }
  }
  const tex = new THREE.DataTexture(data, S, S, THREE.RGBAFormat);
  tex.magFilter = THREE.NearestFilter;
  tex.minFilter = THREE.LinearFilter;
  tex.generateMipmaps = false;
  tex.colorSpace = THREE.NoColorSpace;
  tex.needsUpdate = true;
  return tex;
}

export class Sky {
  constructor(scene) {
    this.group = new THREE.Group();
    scene.add(this.group);

    this.uniforms = {
      uZenith: { value: new THREE.Color(0.36, 0.62, 0.98) },
      uHorizon: { value: new THREE.Color(0.72, 0.85, 0.98) },
      uNight: { value: new THREE.Color(0.02, 0.03, 0.07) },
      uNightF: { value: 0 },
      uSunDir: { value: new THREE.Vector3(0, 1, 0) },
      uSunTint: { value: new THREE.Color(1, 0.85, 0.6) },
      uDay: { value: 1 },
    };
    const dome = new THREE.Mesh(
      new THREE.SphereGeometry(1, 24, 16),
      new THREE.ShaderMaterial({
        uniforms: this.uniforms,
        vertexShader: SKY_VERT,
        fragmentShader: SKY_FRAG,
        side: THREE.BackSide,
        depthWrite: false,
        fog: false,
      }),
    );
    dome.scale.setScalar(600);
    dome.renderOrder = -10;
    this.dome = dome;
    this.group.add(dome);

    const sunMat = new THREE.MeshBasicMaterial({ map: discTexture('sun'), transparent: true, depthWrite: false, color: 0xffffff });
    this.sun = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), sunMat);
    this.sun.scale.setScalar(46);
    this.sun.renderOrder = -9;
    this.group.add(this.sun);

    this.moon = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: discTexture('moon'), transparent: true, depthWrite: false }));
    this.moon.scale.setScalar(30);
    this.moon.renderOrder = -9;
    this.group.add(this.moon);

    // звёзды
    const N = 900;
    const pos = new Float32Array(N * 3);
    for (let i = 0; i < N; i++) {
      const a = Math.random() * Math.PI * 2;
      const y = Math.random() * 0.9 + 0.05;
      const r = Math.sqrt(Math.max(0, 1 - y * y));
      pos[i * 3] = Math.cos(a) * r * 560;
      pos[i * 3 + 1] = y * 560;
      pos[i * 3 + 2] = Math.sin(a) * r * 560;
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    this.stars = new THREE.Points(g, new THREE.PointsMaterial({ color: 0xffffff, size: 2.4, sizeAttenuation: false, transparent: true, opacity: 0, depthWrite: false }));
    this.stars.renderOrder = -9;
    this.group.add(this.stars);

    // облака
    const cloudTex = cloudTexture();
    cloudTex.repeat.set(9, 9);
    this.cloudTex = cloudTex;
    this.clouds = new THREE.Mesh(
      new THREE.PlaneGeometry(2400, 2400),
      new THREE.MeshBasicMaterial({ map: cloudTex, transparent: true, opacity: 0.85, depthWrite: false, side: THREE.DoubleSide, color: 0xffffff }),
    );
    this.clouds.rotation.x = -Math.PI / 2;
    this.clouds.position.y = 118;
    this.clouds.renderOrder = -8;
    this.group.add(this.clouds);

    this.dayLight = 1;
    this.sunElevation = 1;
  }

  /**
   * @param {number} t    время суток 0..1 (0.25 — полдень, 0.75 — полночь)
   * @param {number} cloudAmount 0..1
   */
  update(t, cloudAmount, camPos, voxelUniforms) {
    // t=0.25 → полдень (солнце в зените), t=0.75 → полночь
    const angle = (t - 0.25) * Math.PI * 2 + Math.PI / 2;
    const dir = new THREE.Vector3(Math.cos(angle), Math.sin(angle), 0.34).normalize();
    const elev = dir.y;
    const day = THREE.MathUtils.clamp(elev * 2.1 + 0.18, 0, 1);
    const dusk = THREE.MathUtils.clamp(1 - Math.abs(elev) * 4.5, 0, 1);
    const night = 1 - day;

    this.sunElevation = elev;
    this.dayLight = day;
    this.uniforms.uSunDir.value.copy(dir);
    this.uniforms.uDay.value = day;
    this.uniforms.uNightF.value = night;
    this.uniforms.uSunTint.value.setRGB(1, 0.62 + 0.3 * (1 - dusk), 0.35 + 0.5 * (1 - dusk));

    // цвета неба
    const zen = this.uniforms.uZenith.value;
    const hor = this.uniforms.uHorizon.value;
    zen.setRGB(0.19, 0.4, 0.86).lerp(new THREE.Color(0.02, 0.03, 0.08), night);
    hor.setRGB(0.72, 0.85, 0.98).lerp(new THREE.Color(0.05, 0.07, 0.14), night);
    if (dusk > 0.02) {
      hor.lerp(new THREE.Color(0.98, 0.46, 0.22), dusk * 0.75);
      zen.lerp(new THREE.Color(0.42, 0.3, 0.6), dusk * 0.4);
    }

    this.dome.position.copy(camPos);
    this.stars.position.copy(camPos);
    this.clouds.position.x = camPos.x + t * 900;
    this.clouds.position.z = camPos.z;
    this.cloudTex.offset.x = t * 0.9;
    this.stars.material.opacity = Math.pow(night, 1.4) * 0.95;
    this.clouds.material.opacity = 0.25 + cloudAmount * 0.7;

    const far = 1.0;
    this.sun.position.copy(camPos).addScaledVector(dir, 480);
    this.sun.lookAt(camPos);
    this.sun.material.color.setRGB(1, 0.94 - dusk * 0.25, 0.78 - dusk * 0.35);
    this.sun.material.opacity = THREE.MathUtils.clamp(day * 1.6, 0, 1);
    this.moon.position.copy(camPos).addScaledVector(dir, -480);
    this.moon.lookAt(camPos);
    this.moon.material.opacity = THREE.MathUtils.clamp(night * 1.4, 0, 1);

    if (voxelUniforms) {
      const sunI = 0.18 + day * 0.92;
      voxelUniforms.uSun.value = sunI * far;
      voxelUniforms.uAmbient.value.setRGB(0.3, 0.34, 0.44).multiplyScalar(0.32 + day * 0.75);
      voxelUniforms.uSunColor.value.setRGB(1, 0.93 - dusk * 0.2, 0.82 - dusk * 0.3);
      voxelUniforms.uFogColor.value.copy(hor).lerp(zen, 0.25);
    }
    return { day, night, dusk, horizonColor: hor.clone(), fogColor: voxelUniforms ? voxelUniforms.uFogColor.value.clone() : hor.clone() };
  }

  dispose() {
    this.group.traverse((o) => {
      if (o.geometry) o.geometry.dispose();
      if (o.material) {
        if (o.material.map) o.material.map.dispose();
        o.material.dispose();
      }
    });
  }
}
