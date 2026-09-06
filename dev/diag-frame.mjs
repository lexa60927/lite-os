/**
 * Диагностика «мир не рисуется»: запускаем игру на подставном рендерере и честим
 * её настройки через реальный путь (applySettings), а потом отвечаем на три
 * вопроса числами, а не догадками:
 *
 *   1. попадают ли меши чанков во фрустум камеры (три считает его точно так же,
 *      как на GPU: Frustum.setFromProjectionMatrix + boundingSphere);
 *   2. куда падают вершины ближнего блока в NDC (весь кадр 0..1 или мусор);
 *   3. не выкидывает ли фрагменты discard (проверяем альфу атласа там, где игра
 *      её берёт) и не обнуляется ли свет (пересчитываем формулу шейдера на CPU).
 *
 * Запуск: node dev/diag-frame.mjs [--settings shaders=0,ao=0,...]
 */
import { installDom } from './dom-stub.mjs';

const dom = installDom();
globalThis.__LITECRAFT_TEST__ = true;

const argv = process.argv.slice(2);
const arg = (name, dflt) => {
  const hit = argv.find((a) => a.startsWith(`--${name}=`));
  return hit === undefined ? dflt : hit.slice(name.length + 3);
};

const errors = [];
const origError = console.error;
console.error = (...a) => { errors.push(a.map((x) => String(x?.message ?? x)).join(' ')); origError(...a); };

const THREE = await import('three');
const { boot } = await import('../src/main.js');
const { BLOCKS } = await import('../src/engine/blocks.js');

let renders = 0;
const renderer = {
  domElement: dom.canvas, outputColorSpace: '', setSize() {}, setPixelRatio() {}, setClearColor() {}, clear() {},
  render(scene, cam) { renders++; scene.updateMatrixWorld(true); cam.updateMatrixWorld(true); globalThis.__s = scene; globalThis.__c = cam; },
  getContext() { return {}; }, capabilities: { isWebGL2: true, getMaxAnisotropy: () => 4 }, dispose() {},
  shadowMap: { enabled: false, type: 0 }, setRenderTarget() {}, getRenderTarget() { return null; },
  getDrawingBufferSize(v) { return v.set(1280, 800); },
};

const game = boot({ renderer });
const want = arg('settings', '');
if (want) {
  for (const pair of want.split(',')) {
    const [k, v] = pair.split('=');
    const cur = game.settings[k];
    const val = typeof v === 'string' && v === 'true' ? true : typeof v === 'string' && v === 'false' ? false
      : !Number.isNaN(Number(v)) ? Number(v) : v;
    try { game.applySettings(k, typeof cur === 'boolean' ? !!val : val); }
    catch (e) { console.log(`  ✘ applySettings(${k}) бросило: ${e.message}`); }
  }
}
const startP = game.start(Number(arg('seed', 42)));
await dom.__pumpFrames(Number(arg('frames', 900)));
await startP;

const st = game.state;
const p = game.player;
console.log(`\n== состояние: чанков ${st.world.chunkCount}, мешей ${game.chunkView.chunkMeshCount}, рендеров ${renders}`);
console.log(`   игрок ${p.x.toFixed(2)} ${p.y.toFixed(2)} ${p.z.toFixed(2)} · на земле ${p.onGround} · шейдеры ${game.settings.shaders} · дистанция ${game.settings.renderDistance} · AO ${game.settings.ao}`);

const cam = game.camera;
console.log(`   камера: fov ${cam.fov} near ${cam.near} far ${cam.far} aspect ${cam.aspect.toFixed(3)} visible ${cam.visible}`);
const u = game.materials.uniforms;
const fin = (v) => (Number.isFinite(v) ? (+v).toFixed(4) : 'NaN!!');
console.log(`   туман: start ${fin(u.uFogStart.value)} end ${fin(u.uFogEnd.value)} dens ${fin(u.uFogDensity.value)} цвет ${u.uFogColor.value.getHex().toString(16)}`);
console.log(`   свет: uSun ${fin(u.uSun.value)} exposure ${fin(u.uExposure.value)} quality ${fin(u.uQuality.value)} shadow ${fin(u.uShadow.value)} refl ${fin(u.uRefl.value)} sea ${fin(u.uSea.value)}`);
for (const [k, m] of Object.entries({ solid: game.materials.solid, water: game.materials.materials?.water ?? game.materials.water })) {
  console.log(`   материал ${k}: visible=${m.visible} transparent=${m.transparent} depthWrite=${m.depthWrite} depthTest=${m.depthTest} side=${m.side} blending=${m.blending} alphaTest=${m.alphaTest} uAlpha=${fin(m.uniforms.uAlpha?.value)} uAlphaTest=${fin(m.uniforms.uAlphaTest?.value)} uWave=${fin(m.uniforms.uWave?.value)} program-длина=${m.fragmentShader.length}`);
}

// ── 1. фрустум
const frustum = new THREE.Frustum().setFromProjectionMatrix(new THREE.Matrix4().multiplyMatrices(cam.projectionMatrix, cam.matrixWorldInverse));
let inFrustum = 0, visibleCount = 0, total = 0, bsBad = 0;
const sample = [];
for (const rec of game.chunkView.objects.values()) {
  for (const kind of ['solid', 'water']) {
    const o = rec[kind];
    if (!o) continue;
    total++;
    if (o.visible) visibleCount++;
    const geo = o.geometry;
    if (!geo.boundingSphere) geo.computeBoundingSphere();
    const bs = geo.boundingSphere;
    if (!bs || !Number.isFinite(bs.radius)) { bsBad++; continue; }
    const sphere = bs.clone().applyMatrix4(o.matrixWorld);
    if (o.visible && frustum.intersectsSphere(sphere)) {
      inFrustum++;
      if (sample.length < 3) sample.push({ kind, cx: rec.cx, cz: rec.cz, center: [sphere.center.x, sphere.center.y, sphere.center.z].map((x) => +x.toFixed(1)), r: +sphere.radius.toFixed(1) });
    }
  }
}
console.log(`\n== 1) фрустум: объектов ${total}, visible ${visibleCount}, во фрустуме ${inFrustum}, boundingSphere битый ${bsBad}`);
if (sample.length) console.log('   примеры попавших:', JSON.stringify(sample));
if (!total) console.log('   ✘ объектов вообще нет — меши не создаются');
else if (visibleCount === 0) console.log('   ✘ ВСЕ меши скрыты (visible=false) — это и есть «мира нет»');
else if (inFrustum === 0) console.log('   ✘ видно-но-не-во-фрустуме: камера/проекция сломаны, мир вырезается целиком');
else console.log(`   ✔ ${inFrustum} мешей готовы к отрисовке в этом кадре`);

// ── 2. NDC ближнего блока: проецируем реальные вершины ближнего чанка
{
  const near = [...game.chunkView.objects.values()].find((r) => r.solid);
  if (near?.solid) {
    const geo = near.solid.geometry;
    const pos = geo.attributes.position.array;
    const mvp = new THREE.Matrix4().multiplyMatrices(cam.projectionMatrix, cam.matrixWorldInverse).multiply(near.solid.matrixWorld);
    const v = new THREE.Vector3();
    let inx = 0, behind = 0, nan = 0;
    const mn = [1e9, 1e9, 1e9], mx = [-1e9, -1e9, -1e9];
    for (let i = 0; i < pos.length; i += 3) {
      v.set(pos[i], pos[i + 1], pos[i + 2]).applyMatrix4(mvp);
      if (!Number.isFinite(v.x + v.y + v.z)) { nan++; continue; }
      const w = v.w === 0 ? 1e-9 : v.w;
      const ndc = { x: v.x / w, y: v.y / w, z: v.z / w };
      if (v.w <= 0) behind++;
      if (Math.abs(ndc.x) <= 1 && Math.abs(ndc.y) <= 1 && ndc.z <= 1) inx++;
      for (const [k, key] of [[0, 'x'], [1, 'y'], [2, 'z']].entries()) {
        const axis = ['x', 'y', 'z'][k];
        mn[k] = Math.min(mn[k], ndc[axis]); mx[k] = Math.min(mx[k] === 1e9 ? ndc[axis] : mx[k], ndc[axis]);
      }
    }
    console.log(`\n== 2) ближний чанок ${near.cx},${near.cz}: вершин ${pos.length / 3}, в NDC-кубе ${inx}, за камерой ${behind}, NaN ${nan}`);
    console.log(`   диапазон NDC: x ${mn[0].toFixed(2)}..${isFinite(mx[0]) ? mx[0].toFixed(2) : '—'} y ${mn[1].toFixed(2)}..${isFinite(mx[1]) ? mx[1].toFixed(2) : '—'} z ${mn[2].toFixed(2)}..${isFinite(mx[2]) ? mx[2].toFixed(2) : '—'}`);
    if (nan) console.log('   ✘ NaN в вершинах — драйвер вырежет весь меш');
    else if (!inx) console.log('   ✘ ни одна вершина не попала в кадр — мир за пределами видимого');
    else console.log('   ✔ геометрия проецируется в кадр');
  }
}

// ── 3. discard и свет: проверяем альфу атласа и формулу освещения на CPU
{
  const atlas = game.atlas;
  const data = atlas?.data ?? atlas?.texture?.image?.data;
  const solid = game.materials.solid;
  const th = solid.uniforms.uAlphaTest?.value ?? 0.15;
  if (!data) console.log('\n== 3) атлас: данные недоступны (в браузере будет доступен)');
  else {
    let below = 0;
    const n = data.length / 4;
    for (let i = 0; i < n; i++) if (data[i * 4 + 3] / 255 < th) below++;
    console.log(`\n== 3) атлас: пикселей с alpha < ${th}: ${below} из ${n} (${((below / n) * 100).toFixed(1)}%) — столько граней уйдёт в discard`);
    if (below === n) console.log('   ✘ АТЛАС ПОЛНОСТЬЮ ПРОЗРАЧНЫЙ — discard вырезает всё, мир невидим');
    else if (below > n * 0.9) console.log('   ✘ подозрительно много прозрачных пикселей');
    else console.log('   ✔ атлас непрозрачен, discard всё не режет');
  }
  // формула frag на одном реальном блоке земли: tex*vTint*lit, уровни 0 и 3
  const id = game.state.world.getBlock(Math.floor(p.x), Math.floor(p.y) - 1, Math.floor(p.z));
  const def = BLOCKS[id];
  const lit0 = u.uSun.value * (1 - 0.45);
  const sky = 1;
  const amb = u.uAmbient.value;
  const lum = (def ? 1 : 0) * (0.35 + 0.65 * lit0) * (0.6 + 0.4 * sky);
  console.log(`   блок под игроком: ${def?.key ?? 'пусто'} · оценка яркости col ≈ ${lum.toFixed(2)} (0 = чёрный мир, NaN = пустой мир)`);
  if (!Number.isFinite(lum)) console.log('   ✘ свет NaN');
  else if (lum <= 0.02) console.log('   ✘ свет почти нулевой: мир чёрный/невидимый при этих униформах');
  else console.log('   ✔ свет есть');
}

const progErr = errors.filter((e) => /WebGLProgram|Shader Error|Program Info Log/i.test(e));
console.log(`\n== ошибки консоли: всего ${errors.length}, из них про шейдеры ${progErr.length}`);
for (const e of errors.slice(0, 6)) console.log('   · ' + e.slice(0, 200));
if (progErr.length) console.log('   ✘ шейдерная программа не собралась — меши не рисуются, вот текст:');
console.log('\n' + (errors.length && !progErr.length ? 'есть посторонние ошибки, смотри выше' : 'готово'));
process.exit(0);
