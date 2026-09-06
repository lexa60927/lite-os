/** Вид от первого лица: блок в руке + покачивание и замах; рамка цели и трещины. */
import * as THREE from 'three';
import { BLOCKS } from '../engine/blocks.js';
import { FACES, tileRect } from '../engine/mesher.js';
import { CRACK_STAGES } from './cracks.js';

const SHADE = [0.76, 0.76, 1.0, 0.55, 0.9, 0.9];

/**
 * Позиция руки задаётся ДОЛЯМИ ЭКРАНА, а не мировыми единицами. Иначе вид от
 * первого лица разъезжается: при FOV 110 (бег/полёт) тот же офсет в 0.34
 * оказывается ближе к центру, а на узком окне или при малом FOV — за правым
 * краем, и «блок в руке» просто пропадал. Единичные доли сняты с прежней
 * раскладки при FOV 70 и окне 16:9, поэтому по умолчанию картинка та же.
 */
const LAYOUT = {
  fov: 70,                                  // базовый FOV, от которого считали доли
  block: { fx: 0.4406, fy: 0.7372, size: 0.7833, depth: 0.62 },
  arm: { fx: 0.3212, fy: 0.857, depth: 0.6 },
};

/** tan(половины вертикального угла обзора) — сколько world-единиц на единицу глубины. */
const tanHalf = (fovDeg) => Math.tan(((fovDeg || LAYOUT.fov) * Math.PI) / 360);

/** Куб с UV из атласа и печёной яркостью граней. */
export function blockCubeGeometry(def, atlas, size = 1) {
  const pos = [];
  const uv = [];
  const col = [];
  const idxArr = [];
  const tiles = def.tiles ?? {};
  for (let f = 0; f < 6; f++) {
    const face = FACES[f];
    const name = f === 0 ? (tiles.top ?? tiles.all) : f === 1 ? (tiles.bottom ?? tiles.all) : (tiles.side ?? tiles.all);
    const rect = tileRect(atlas.index[name] ?? atlas.index[tiles.all] ?? 0, atlas.cell, atlas.tile, atlas.grid);
    const base = pos.length / 3;
    for (let k = 0; k < 4; k++) {
      const v = face.verts[k];
      pos.push(v[0] * size - size / 2, v[1] * size - size / 2, v[2] * size - size / 2);
      const u = face.uv[k];
      uv.push(rect.u0 + u[0] * rect.s, rect.v0 + u[1] * rect.s);
      const s = SHADE[f];
      col.push(s, s, s);
    }
    idxArr.push(base, base + 1, base + 2, base, base + 2, base + 3);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  g.setIndex(idxArr);
  return g;
}

export class ViewModel {
  constructor(atlas) {
    this.atlas = atlas;
    this.group = new THREE.Group();
    this.blockMesh = null;
    this.blockId = -1;

    // depthWrite: false обязательно: с записью глубины рука оставляла дыру в
    // прозрачном проходе — вода вокруг блока обрывалась, и казалось, что блок
    // «заходит в воду».
    this.arm = new THREE.Mesh(
      new THREE.BoxGeometry(0.16, 0.5, 0.14),
      new THREE.MeshBasicMaterial({ color: 0xd9a06a, depthTest: false, depthWrite: false }),
    );
    const armGeo = this.arm.geometry;
    const colors = new Float32Array((armGeo.attributes.position.count / 4) * 4 * 3);
    let ci = 0;
    for (let f = 0; f < 6; f++) {
      for (let k = 0; k < 4; k++) {
        const s = 0.62 + (f === 2 ? 0.38 : f === 3 ? 0.05 : 0.2);
        colors[ci++] = s; colors[ci++] = s; colors[ci++] = s;
      }
    }
    armGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    this.arm.material.vertexColors = true;
    this.arm.position.set(0.24, -0.36, -0.6);
    this.arm.rotation.set(0.5, 0, 0.1);
    this.arm.renderOrder = 999;
    this.group.add(this.arm);

    this.baseBlock = new THREE.Vector3(0.34, -0.32, -0.62);
    this.baseArm = this.arm.position.clone();
    this.blockSize = 0.34;              // ребро куба в мировых единицах (считается в layout)
    this.fov = LAYOUT.fov;
    this.aspect = 16 / 9;
    this.swing = 0;
    this.swingActive = 0;
    this.bobPhase = 0;
    this.dayLight = 1;
  }

  setBlock(id) {
    if (id === this.blockId) return;
    this.blockId = id;
    if (this.blockMesh) {
        this.group.remove(this.blockMesh);
        this.blockMesh.geometry.dispose();
        this.blockMesh = null;
    }
    const def = BLOCKS[id];
    if (!def || !def.tiles) { this.arm.visible = true; return; }
    // Куб строится единичным: размер рука получает через scale в layout(), иначе
    // при смене FOV блок менял бы величину вместе с перспективой.
    const g = blockCubeGeometry(def, this.atlas, 1);
    const m = new THREE.MeshBasicMaterial({ map: this.atlas.texture, vertexColors: true, side: THREE.DoubleSide, depthTest: false, depthWrite: false });
    this.blockMesh = new THREE.Mesh(g, m);
    this.blockMesh.position.copy(this.baseBlock);
    this.blockMesh.scale.setScalar(this.blockSize);
    this.blockMesh.rotation.set(0.1, -0.72, 0.12);
    this.blockMesh.renderOrder = 999;
    this.group.add(this.blockMesh);
    this.arm.visible = false;
  }

  /**
   * Пересчитать раскладку под текущие FOV и пропорции окна. Вызывается из update(),
   * когда что-то из них поменялось (настройка, бег, под/над водой, resize).
   * Возвращает false, если менять нечего — тогда вызывающий может не трогать меш.
   */
  layout(fov = this.fov, aspect = this.aspect) {
    const a = Number.isFinite(fov) && fov > 1 ? fov : LAYOUT.fov;
    const b = Number.isFinite(aspect) && aspect > 0.2 ? aspect : 16 / 9;
    if (a === this.fov && Math.abs(b - this.aspect) < 1e-4) return false;
    this.fov = a;
    this.aspect = b;
    const t = tanHalf(a);
    // Половина высоты/ширины экрана в мировых единицах на глубине руки.
    const half = (d) => ({ h: t * d, w: t * d * b });
    const hb = half(LAYOUT.block.depth);
    // Размер: доля экрана, но не шире половины ширины окна — иначе на вертикальном
    // окне рука заняла бы весь экран.
    const size = Math.min(LAYOUT.block.size * hb.h, 0.62 * hb.w);
    const lim = size * 0.9;                        // половина повёрнутого куба на экране
    this.blockSize = size;
    // По горизонтали блок обязан остаться в кадре, по вертикали — только его центр:
    // нижняя половина специально свисает за край, так блок и выглядит «в руке», а не
    // наклейкой по центру экрана.
    this.baseBlock.set(
      Math.min(LAYOUT.block.fx * hb.w, hb.w - lim),
      -Math.min(LAYOUT.block.fy * hb.h, hb.h + size * 0.55),
      -LAYOUT.block.depth,
    );
    const ha = half(LAYOUT.arm.depth);
    const as = size / 0.34;                        // кисть растёт вместе с блоком
    this.arm.scale.setScalar(as);
    this.baseArm.set(
      Math.min(LAYOUT.arm.fx * ha.w, ha.w - 0.15 * as),
      -Math.min(LAYOUT.arm.fy * ha.h, ha.h + 0.6 * as),
      -LAYOUT.arm.depth,
    );
    return true;
  }

  triggerSwing() { this.swingActive = 1; }

  update(dt, { moving = 0, breaking = 0, breakProgress = 0, fov = 0, aspect = 0 } = {}) {
    if (fov || aspect) this.layout(fov || this.fov, aspect || this.aspect);
    if (this.blockMesh) this.blockMesh.scale.setScalar(this.blockSize);
    this.bobPhase += dt * (2 + moving * 7);
    this.swingActive = Math.max(0, this.swingActive - dt * 3.4);
    const s = this.swingActive;
    const swingAngle = Math.sin((1 - s) * Math.PI) * 0.9;
    const bobX = Math.cos(this.bobPhase) * 0.012 * moving;
    const bobY = Math.abs(Math.sin(this.bobPhase)) * 0.016 * moving;
    const breakShake = breaking ? Math.sin(performance.now() * 0.04) * 0.01 * (0.4 + breakProgress) : 0;

    const target = this.blockMesh ?? this.arm;
    if (this.blockMesh) {
      const k = this.blockSize / 0.34;   // замах и покачивание — в тех же долях экрана
      this.blockMesh.position.set(this.baseBlock.x + (bobX + breakShake) * k, this.baseBlock.y - bobY * k, this.baseBlock.z + swingAngle * 0.12 * k);
      this.blockMesh.rotation.set(0.1 - swingAngle * 0.7, -0.72, 0.12 + swingAngle * 0.25);
    }
    this.arm.position.set(this.baseArm.x + bobX + breakShake, this.baseArm.y - bobY, this.baseArm.z + swingAngle * 0.14);
    this.arm.rotation.set(0.5 - swingAngle * 0.9, 0, 0.1);
    void target;

    // Пол не ниже 0.46: раньше рука на ночь затемнялась до 0.28 и блок в руке
    // сливался с ночным небом — выглядело как «предмет пропал».
    const light = 0.46 + 0.54 * this.dayLight;
    const tint = new THREE.Color(light, light, light * 1.02);
    if (this.blockMesh) this.blockMesh.material.color.copy(tint);
    this.arm.material.color.copy(tint);
  }
}

export class BlockTarget {
  constructor(atlas) {
    this.atlas = atlas;
    const box = new THREE.BoxGeometry(1.004, 1.004, 1.004);
    this.outline = new THREE.LineSegments(
      new THREE.EdgesGeometry(new THREE.BoxGeometry(1.002, 1.002, 1.002)),
      new THREE.LineBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.5, depthWrite: false }),
    );
    this.outline.visible = false;
    this.crack = new THREE.Mesh(
      box,
      new THREE.MeshBasicMaterial({
        transparent: true, depthWrite: false, polygonOffset: true,
        polygonOffsetFactor: -2, polygonOffsetUnits: -2, side: THREE.DoubleSide,
      }),
    );
    this.crack.visible = false;
    this.stage = -1;
    this.group = new THREE.Group();
    this.group.add(this.outline, this.crack);
  }

  show(hit) {
    if (!hit) {
      this.outline.visible = this.crack.visible = false;
      return;
    }
    this.outline.position.set(hit.x + 0.5, hit.y + 0.5, hit.z + 0.5);
    this.crack.position.copy(this.outline.position);
    this.outline.visible = true;
  }

  /** Спрятать подсветку (например, когда в прицеле моб, а не блок). */
  hide() { this.show(null); }

  setBreakProgress(p) {
    if (p <= 0) { this.crack.visible = false; this.stage = -1; return; }
    const stage = Math.min(CRACK_STAGES - 1, Math.floor(p * CRACK_STAGES));
    if (stage !== this.stage) {
      this.stage = stage;
      this.crack.material.map = this.atlas.cracks[stage];
      this.crack.material.needsUpdate = true;
    }
    // пересобрать UV одного куба под трещины не нужно: тайл занимает всю грань
    this.crack.visible = true;
  }

  setDayLight(d) {
    const v = 0.35 + 0.65 * d;
    this.crack.material.color.setRGB(v, v, v);
    this.outline.material.opacity = 0.25 + 0.3 * d;
  }
}
