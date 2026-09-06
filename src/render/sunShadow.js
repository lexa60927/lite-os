/**
 * Тени от солнца (уровень «Красивые»/«Ультра»).
 *
 * Как это устроено и почему именно так:
 *
 * • Один DirectionalLight с ortho-камерой теней, которая СЛЕДИТ за игроком:
 *   область 2R×2R вокруг игрока, а не на весь мир. Иначе карта теней утонула бы
 *   в земле, а при R=64 чанков её не хватило бы ни на что.
 * • Камера привязана к сетке текселей (snap). Без этого тень «дышит» и дрожит
 *   при каждом шаге: тексели карты скользят по пикселям экрана.
 * • Дальность света вдоль направления солнца ограничена (near/far): за горизонт
 *   в карту ничего не пишется, и self-shadow acne не накапливается к краям зоны.
 * • Обновление кадра теней троттлится: солнце ходит медленно, геометрия меняется
 *   только при правке блока, так что гонять ~100 мешей в карту каждый кадр —
 *   чистая расточительность.
 *
 * Всё выключается одним `setEnabled(false)`: material без USE_SHADOWMAP
 * компилируется заново и getShadowMask() превращается в 1.0 — то есть «тени
 * выключены» это ровно прежняя картинка, а не «чуть хуже».
 */
import * as THREE from 'three';

/** Настройки карты. Разбираем подробно, потому что это единственное, что
 *  определяет, будут ли тени резкими в 20 блоков или кашей. */
export const SHADOW = {
  mapSize: 2048,
  /** Половина стороны ortho-объёма в блоках: 64 → зона 128×128 блоков вокруг игрока. */
  radius: 64,
  /** Смещение выборки вдоль вертикали: снимает «полосу» (acne) на верхних гранях. */
  normalBias: 0.14,
  /** Глубинный bias. Отрицательный — придвигает геометрию к свету. */
  bias: -0.0006,
  /** Высота объёма: у нас мир до 96 блоков + деревья. */
  height: 150,
};

export class SunShadow {
  constructor(scene) {
    this.light = new THREE.DirectionalLight(0xffffff, 1);
    this.light.castShadow = true;
    // свет сам по себе ничего не красит (наши шейдеры берут uSun/uSunColor из неба);
    // он нужен только как источник карты теней
    this.light.intensity = 1;
    const sh = this.light.shadow;
    sh.mapSize.set(SHADOW.mapSize, SHADOW.mapSize);
    sh.bias = SHADOW.bias;
    sh.normalBias = SHADOW.normalBias;
    sh.camera.left = -SHADOW.radius;
    sh.camera.right = SHADOW.radius;
    sh.camera.top = SHADOW.radius;
    sh.camera.bottom = -SHADOW.radius;
    sh.camera.near = 1;
    sh.camera.far = SHADOW.height * 3;
    sh.camera.updateProjectionMatrix();
    sh.autoUpdate = false;          // сами решаем, когда перерисовывать карту
    this.light.target.position.set(0, 0, 0);
    scene.add(this.light);
    scene.add(this.light.target);

    this.scene = scene;
    this.enabled = false;
    this._texel = (SHADOW.radius * 2) / SHADOW.mapSize;
    this._last = { x: NaN, z: NaN, sun: NaN, t: -1, mesh: -1 };
    this._frame = 0;
    this._interval = 2;
    this.stats = { radius: SHADOW.radius, updated: 0, interval: 0 };
  }

  /** @param {boolean} on  @param {number} [radius] половина зоны в блоках */
  setEnabled(on, radius = SHADOW.radius) {
    this.enabled = !!on;
    this.light.castShadow = this.enabled;
    const r = Math.max(24, Math.min(160, radius | 0));
    if (r !== this.stats.radius) {
      this.stats.radius = r;
      const c = this.light.shadow.camera;
      c.left = c.bottom = -r;
      c.right = c.top = r;
      c.updateProjectionMatrix();
      this._texel = (r * 2) / SHADOW.mapSize;
    }
    // при включении карту надо нарисовать немедленно, иначе первый кадр — без теней
    if (this.enabled) this.light.shadow.needsUpdate = true;
    this.light.shadow.autoUpdate = false;
  }

  /**
   * @param {object} p        позиция игрока { x, y, z }
   * @param {THREE.Vector3} dir  направление на солнце (от земли к светилу)
   * @param {number} day      0..1 — освещённость неба (ночью теней нет)
   * @param {number} meshStat меняется, когда мир перемешали (правка блока)
   */
  update(p, dir, day, meshStat = 0) {
    this._frame++;
    if (!this.enabled) { this.stats.interval = 0; return false; }
    // Ночью солнце под землёй: тени рисовать нечем, а инвертированный свет
    // выглядел бы как тени от луны в неправильную сторону.
    const sun = Math.max(0, dir.y);
    if (day < 0.04 || sun < 0.02) { this._last.t = -1; return false; }

    // центр объёма теней — под игроком, на half-height мира
    const focus = this._focus ?? (this._focus = new THREE.Vector3());
    focus.set(p.x, p.y + SHADOW.height * 0.12, p.z);
    // snap к сетке текселей — иначе тени дрожат на каждом шагу
    focus.x = Math.round(focus.x / this._texel) * this._texel;
    focus.z = Math.round(focus.z / this._texel) * this._texel;
    focus.y = Math.round(focus.y / this._texel) * this._texel;

    const dist = SHADOW.height * 1.35;
    this.light.position.set(
      focus.x + dir.x * dist,
      focus.y + sun * dist + 8,
      focus.z + dir.z * dist,
    );
    this.light.target.position.copy(focus);
    this.light.target.updateMatrixWorld();
    this.light.position.add(new THREE.Vector3(0, 0, 0));
    this.light.updateMatrixWorld();
    this.light.shadow.camera.updateProjectionMatrix();

    // Перерисовываем карту, только если что-то могло измениться: игрок сдвинулся,
    // солнце ушло, мир правили — или просто раз в _interval кадров.
    const moved = Math.abs(p.x - this._last.x) > 0.6 || Math.abs(p.z - this._last.z) > 0.6;
    const sunMoved = Math.abs(sun - this._last.sun) > 0.002;
    const edited = meshStat !== this._last.mesh;
    const moving = moved || sunMoved || edited;
    this._interval = moved || edited ? 1 : (day > 0.6 ? 4 : 8);
    const due = this._frame % this._interval === 0;
    let did = false;
    if (this._last.t < 0 || moving || due) {
      this.light.shadow.needsUpdate = true;     // one-shot при autoUpdate=false
      this._last = { x: p.x, z: p.z, sun, t: this._frame, mesh: meshStat };
      this.stats.updated++;
      did = true;
    }
    return did;
  }

  /** Мягкость края тени (радиус PCF-выборки в текселях). */
  setSoftness(px) {
    this.light.shadow.radius = Math.max(1, Math.min(8, px | 0));
  }

  dispose() {
    this.light.shadow.map?.dispose();
    this.light.shadow.map = null;
    this.scene.remove(this.light);
    this.scene.remove(this.light.target);
  }
}

/** Флаг «бросать тень» для меша чанка +alpha-test материал, чтобы листва и
 *  трава отбрасывали дырявую тень, а не прямоугольник. */
export function applyShadowFlags(obj, { cast = true, receive = true } = {}) {
  if (!obj) return;
  obj.castShadow = cast;
  obj.receiveShadow = receive;
}
