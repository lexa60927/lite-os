/**
 * Перебор настроек: для каждой комбинации поднимаем игру на подставном рендерере,
 * применяем настройки РЕАЛЬНЫМ путём (applySettings, как это делает панель) и
 * меряем, сколько мешей чанков в этом кадре готово к отрисовке (фрустум three),
 * все ли меши смотрят в актуальный материал, и нет ли NaN в геометрии/униформах.
 *
 * Это ответ на «мир невидимый, а тесты зелёные»: тут не строки проверяются, а
 * число пиксельно-значимых предпосылок отрисовки.
 *
 * Запуск: node dev/diag-sweep.mjs
 */
import { installDom } from './dom-stub.mjs';
import * as THREE from 'three';

const combos = [
  { label: 'по умолчанию' },
  { label: 'шейдеры 0 (базовые)', shaders: 0 },
  { label: 'шейдеры 0 + тени 0', shaders: 0, shadows: 0, waterRefl: 0 },
  { label: 'шейдеры 0 + ao off + свет плоский', shaders: 0, ao: false, smoothLight: false },
  { label: 'шейдеры 0 + дистанция 2', shaders: 0, renderDistance: 2 },
  { label: 'шейдеры 0 + дистанция 64', shaders: 0, renderDistance: 64 },
  { label: 'шейдеры 0 + clouds 0', shaders: 0, clouds: 0 },
  { label: 'шейдеры 0 + вода 0', shaders: 0, water: 0 },
  { label: 'шейдеры 0 + pixel scale 0.5', shaders: 0, renderScale: 0.5 },
  { label: 'шейдеры 0 + fov 110', shaders: 0, fov: 110 },
  { label: 'шейдеры 0 + показать отладку', shaders: 0, showDebug: true },
  { label: 'шейдеры 3 (ультра) + отражения 2', shaders: 3, waterRefl: 2, shadows: 2 },
];

let fails = 0;
for (const c of combos) {
  const dom = installDom();
  globalThis.__LITECRAFT_TEST__ = true;
  const errs = [];
  const realError = console.error;
  console.error = (...a) => { errs.push(a.map((x) => String(x?.message ?? x)).join(' ')); };
  const { boot } = await import(`../src/main.js?case=${encodeURIComponent(c.label)}`);
  const renderer = {
    domElement: dom.canvas, outputColorSpace: '', setSize() {}, setPixelRatio() {}, setClearColor() {}, clear() {},
    render() {}, getContext() { return {}; }, capabilities: { isWebGL2: true, getMaxAnisotropy: () => 4 }, dispose() {},
    shadowMap: { enabled: false, type: 0 }, setRenderTarget() {}, getRenderTarget() { return null; },
    getDrawingBufferSize(v) { return v.set(1280, 800); },
  };
  let game;
  try { game = boot({ renderer }); } catch (e) { console.log(`✘ ${c.label}: boot бросило ${e.message}`); fails++; continue; }
  for (const [k, v] of Object.entries(c)) {
    if (k === 'label') continue;
    try { game.applySettings(k, v); } catch (e) { console.log(`  ✘ applySettings(${k}=${v}) кинуло: ${e.message}`); fails++; }
  }
  try { game.applySettings(null, true); } catch (e) { console.log(`  ✘ applySettings(all) кинуло: ${e.message}`); fails++; }
  const startP = game.start(42);
  await dom.__pumpFrames(500);
  await startP;
  game.applySettings(null, true);
  await dom.__pumpFrames(30);

  const cam = game.camera;
  cam.updateMatrixWorld(true);
  const fr = new THREE.Frustum().setFromProjectionMatrix(new THREE.Matrix4().multiplyMatrices(cam.projectionMatrix, cam.matrixWorldInverse));
  let total = 0, vis = 0, inf = 0, desync = 0, nanv = 0;
  for (const rec of game.chunkView.objects.values()) {
    for (const kind of ['solid', 'water']) {
      const o = rec[kind];
      if (!o) continue;
      total++;
      if (!o.visible) continue;
      vis++;
      const want = kind === 'solid' ? game.materials.solid : game.materials.water;
      if (o.material !== want) desync++;
      const bs = o.geometry.boundingSphere ?? (o.geometry.computeBoundingSphere(), o.geometry.boundingSphere);
      if (!Number.isFinite(bs?.radius)) { nanv++; continue; }
      if (inf >= 0 && fr.intersectsSphere(bs.clone().applyMatrix4(o.matrixWorld))) inf++;
    }
  }
  const shaderErr = errs.filter((e) => /WebGLProgram|Shader Error|Program Info Log/i.test(e)).length;
  const bad = !total || inf === 0 || desync || nanv || shaderErr || errs.length;
  if (bad) fails++;
  console.log(`${bad ? '✘' : '✔'} ${c.label.padEnd(34)} объектов ${total}, visible ${vis}, во фрустуме ${inf}, не тот материал ${desync}, битый boundingSphere ${nanv}, ошибок ${errs.length}${shaderErr ? ` (шейдерных ${shaderErr})` : ''}`);
  for (const e of errs.slice(0, 2)) console.log('      · ' + e.slice(0, 160));
  console.error = realError;
}
console.log(fails ? `\n✘ комбинаций с проблемами: ${fails}` : '\nвсе комбинации рисуют мир');
process.exit(fails ? 1 : 0);
