/**
 * Отражение мира в воде — дешёвая и честная версия: куб-проба.
 *
 * Идея: раз несколько кадров снимаем мир шестью камерами из точки глаз игрока в
 * маленький cubemap (128²), а шейдер воды при выборке берёт цвет оттуда по
 * отражённому вектору. Это даёт реальное отражение холмов, деревьев и берега —
 * то, чего аналитическим «небом по направлению» не изобразить, — ценой одной
 * короткой серии рендеров, а не второго полного кадра.
 *
 * Почему не planar reflection (отдельный RT с перевёрнутой камерой): он требует
 * второго прохода по всей геометрии каждый кадр и красиво работает только на
 * плоской воде у берега. На нашем море (сотни чанков, взгляд под любым углом)
 * куб-проба даёт бо́льшую часть эффекта за малую долю цены.
 *
 * Вода на время съёмки прячется: иначе отражение начинает перерисовывать само
 * себя, и по поверхности расходится эхо.
 */
import * as THREE from 'three';

export class WaterProbe {
  constructor(renderer, scene, opts = {}) {
    const size = opts.size ?? 128;
    this.enabled = false;
    this.every = opts.every ?? 12;
    this.renderer = renderer;
    this.scene = scene;
    this._frame = 0;
    this._last = { x: NaN, y: NaN, z: NaN, mesh: -1 };
    this.ok = false;
    this.rt = null;
    this.camera = null;
    this.stats = { updates: 0, size, every: this.every };
    try {
      this.rt = new THREE.WebGLCubeRenderTarget(size, {
        type: THREE.UnsignedByteType,      // HDR для отражений не нужен
        generateMipmaps: false,
        minFilter: THREE.LinearFilter,
        magFilter: THREE.LinearFilter,
      });
      this.camera = new THREE.CubeCamera(0.6, opts.far ?? 190, this.rt);
      // сама проба не должна попадать в сцену как объект — только координаты
      this.ok = true;
    } catch (e) {
      console.warn('отражения воды недоступны:', e?.message ?? e);
      this.enabled = false;
    }
  }

  setEnabled(on) {
    this.enabled = this.ok && !!on;
  }

  /**
   * @param {object} pos   { x, y, z } — глаза игрока
   * @param {number} meshStat счётчик мешей: меняется, когда мир перестроили
   * @param {Array}  hide  меши, которые нельзя пускать в отражение (вода)
   * @returns {boolean} был ли кадр съёмки
   */
  update(pos, meshStat = 0, hide = []) {
    if (!this.ok || !this.enabled) return false;
    this._frame++;
    const moved = Math.abs(pos.x - this._last.x) > 1.2
      || Math.abs(pos.z - this._last.z) > 1.2
      || Math.abs(pos.y - this._last.y) > 1.2;
    const edited = meshStat !== this._last.mesh;
    const due = this._frame % Math.max(1, this.every) === 0;
    if (!(moved || edited || due)) return false;
    this._last = { x: pos.x, y: pos.y, z: pos.z, mesh: meshStat };

    const was = hide.map((o) => o.visible);
    for (const o of hide) o.visible = false;
    try {
      this.camera.position.set(pos.x, pos.y, pos.z);
      this.camera.updateMatrixWorld();
      this.camera.update(this.renderer, this.scene);   // шесть граней + restore таргета
      this.stats.updates++;
      return true;
    } catch (e) {
      console.warn('съёмка отражения не удалась, выключаем:', e?.message ?? e);
      this.enabled = false;
      return false;
    } finally {
      hide.forEach((o, i) => { o.visible = was[i]; });
    }
  }

  get texture() { return this.rt?.texture ?? null; }

  dispose() {
    try { this.rt?.dispose(); } catch { /* уже удалён */ }
    this.rt = null;
    this.enabled = false;
  }
}
