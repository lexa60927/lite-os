/**
 * Постобработка уровня «Ультра» (настройка «Шейдеры» = 3).
 *
 * Схема: сцена → буфер с MSAA 4× → финальный грейд (тёплый закат / холодная
 * ночь, подводный цвет, лёгкая виньетка, бережный прирост насыщенности) → экран.
 *
 * Никакого bloom: «свечение» (UnrealBloomPass) стояло здесь первой версией и
 * было убрано по просьбе — оно мылило небо и превращало солнце в белое пятно.
 * Красота берётся из теней (см. sunShadow.js), отражений воды и MSAA.
 *
 * Три вещи, которые тут важно понимать:
 *
 * 1. Никакого OutputPass. Наши шейдеры сами пишут готовые для экрана значения
 *    (ACES внутри материала), а renderer.outputColorSpace = LinearSRGB —
 *    то есть конвертации не ждёт никто. OutputPass добавил бы sRGB-преобразование
 *    поверх, и картинка посветлела бы «в молоко».
 * 2. Тип буфера — UnsignedByte: он есть везде, а HDR нам больше не нужен
 *    (со значениями > 1 как раз и было связано «свечение»).
 * 3. Всё сделано так, чтобы отказ был дешёвым: не хватило MSAA,
 *    драйвер споткнулся о bloom — PostFX выключается сам, и кадр идёт напрямую
 *    через renderer.render. «Ультра» не имеет права ломать запуск игры.
 */
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';

const GRADE_FRAG = /* glsl */`
precision highp float;
uniform sampler2D tDiffuse;
uniform float uTime;
uniform float uUnder;      // камера в воде
uniform float uDusk;       // 0..1 — закат/рассвет (греет кадр)
uniform float uNight;      // 0..1 — ночь (холодит и приглушает)
uniform float uVignette;   // кинематографичная виньетка (настройка)
varying vec2 vUv;

void main() {
  vec2 uv = vUv;
  // Под водой свет ходит волнами: искажение крошечное, но именно оно даёт ощущение
  // «я внутри воды», а не «на экран наклеили синий фильтр».
  if (uUnder > 0.5) {
    uv.x += sin(uv.y * 26.0 + uTime * 1.7) * 0.0016;
    uv.y += cos(uv.x * 22.0 - uTime * 1.3) * 0.0012;
  }
  vec4 c = texture2D(tDiffuse, uv);
  if (uUnder > 0.5) {
    c.rgb = mix(c.rgb, c.rgb * vec3(0.52, 0.92, 1.02) + vec3(0.0, 0.02, 0.05), 0.55);
  }
  // Закат греет тени, ночь холодит всё; уклон маленький, иначе цвет травы
  // уезжает в грязь на первом же вечернем кадре.
  c.rgb *= mix(vec3(1.0), vec3(1.06, 0.98, 0.9), uDusk * 0.55);
  c.rgb *= mix(vec3(1.0), vec3(0.92, 0.96, 1.06), uNight * 0.5);
  float l = dot(c.rgb, vec3(0.299, 0.587, 0.114));
  c.rgb = mix(vec3(l), c.rgb, 1.07);
  if (uVignette > 0.5) {
    float d = length(vUv - 0.5);
    c.rgb *= 1.0 - 0.26 * pow(clamp(d * 1.42, 0.0, 1.0), 2.2);
  }
  gl_FragColor = vec4(c.rgb, 1.0);
}
`;

const GRADE_VERT = /* glsl */`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

export class PostFX {
  constructor(renderer, scene, camera) {
    this.renderer = renderer;
    this.enabled = false;
    this.ok = false;
    this.composer = null;
    this.grade = null;
    try {
      const gl2 = renderer.capabilities?.isWebGL2 !== false;
      const size = renderer.getDrawingBufferSize(new THREE.Vector2());
      const rt = new THREE.WebGLRenderTarget(Math.max(2, size.x), Math.max(2, size.y), {
        type: THREE.UnsignedByteType,
        // MSAA в самом буфере: у воксельных граней диагональные края — самое
        // заметное «лесенкой», и без антиалиасинга рендерера это видно сразу.
        samples: gl2 ? 4 : 0,
        depthBuffer: true,
        stencilBuffer: false,
      });
      this.composer = new EffectComposer(renderer, rt);
      this.composer.addPass(new RenderPass(scene, camera));
      this.grade = new ShaderPass({
        uniforms: {
          tDiffuse: { value: null },
          uTime: { value: 0 },
          uUnder: { value: 0 },
          uDusk: { value: 0 },
          uNight: { value: 0 },
          uVignette: { value: 0 },
        },
        vertexShader: GRADE_VERT,
        fragmentShader: GRADE_FRAG,
      });
      this.grade.renderToScreen = true;
      this.composer.addPass(this.grade);
      this.ok = true;
      this.setSize();
    } catch (e) {
      // Драйвер/браузер не потянул — тихо отключаемся, игра продолжает
      // рисовать напрямую (см. frame(): этот случай покрыт this.post?.active).
      console.warn('постобработка недоступна:', e?.message ?? e);
      this.ok = false;
      this.enabled = false;
      this.composer = null;
    }
  }

  /** true — только когда и включено, и построено успешно. */
  get active() { return this.ok && this.enabled; }

  setEnabled(on) {
    if (!this.ok) { this.enabled = false; return; }
    this.enabled = !!on;
  }

  setSize() {
    if (!this.ok || !this.composer) return;
    const size = this.renderer.getDrawingBufferSize(new THREE.Vector2());
    this.composer.setSize(Math.max(2, size.x), Math.max(2, size.y));
  }

  /**
   * @param {number} dt   секунды (UnrealBloomPass обновляет/blends по нему)
   * @param {object} [g]  { under, dusk, night, vignette }
   */
  render(dt, g) {
    if (g) {
      const u = this.grade.uniforms;
      u.uTime.value = (u.uTime.value ?? 0) + (dt || 0);
      u.uUnder.value = g.under ? 1 : 0;
      u.uDusk.value = Math.max(0, Math.min(1, g.dusk ?? 0));
      u.uNight.value = Math.max(0, Math.min(1, g.night ?? 0));
      u.uVignette.value = g.vignette ? 1 : 0;
    }
    try {
      this.composer.render(dt || 1 / 60);
    } catch (e) {
      // Сбой на середине кадра (оборванный контекст, таймер) — выключаемся и
      // возвращаем обычный путь рендера, а не падаем в белом экране.
      console.warn('постобработка выключена из-за сбоя:', e?.message ?? e);
      this.ok = false;
      this.enabled = false;
      // Ничего в этом кадре не дорисовываем: следующий кадр frame() уже пойдёт
      // прямым путём (this.post.active стал false), а полупустой буфер не показываем.
      this.renderer.setRenderTarget(null);
    }
  }

  dispose() {
    try {
      this.grade?.dispose?.();
      this.composer?.renderTarget1?.dispose();
      this.composer?.renderTarget2?.dispose();
    } catch { /* уже удалено или не важно */ }
    this.composer = null;
    this.ok = false;
    this.enabled = false;
  }
}
