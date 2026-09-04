/** Фабрика WebGL-рендерера (отдельно, чтобы можно было подменить в тестах). */
import * as THREE from 'three';

export function createRenderer(canvas) {
  const renderer = new THREE.WebGLRenderer({
    canvas, antialias: false, powerPreference: 'high-performance', stencil: false, alpha: false,
  });
  renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
  renderer.setClearColor(0x87ceeb, 1);
  renderer.shadowMap.enabled = false;
  return renderer;
}
