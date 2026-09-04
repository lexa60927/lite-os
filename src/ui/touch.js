/** Сенсорное управление: джойстик движения, свайп-обзор, кнопки. */
export function installTouch(root, { input, api }) {
  const stick = root.querySelector('#stick');
  const knob = root.querySelector('#stick-knob');
  const state = { active: false, id: -1, cx: 0, cy: 0, ex: 0, ey: 0 };
  const RAD = 46;

  const start = (e) => {
    const r = stick.getBoundingClientRect();
    state.cx = r.left + r.width / 2;
    state.cy = r.top + r.height / 2;
    state.active = true;
    state.id = e.changedTouches ? e.changedTouches[0].identifier : 'm';
    move(e);
    e.preventDefault();
  };
  const move = (e) => {
    if (!state.active) return;
    const t = e.changedTouches ? findTouch(e.changedTouches, state.id) : e;
    if (!t) return;
    let dx = t.clientX - state.cx;
    let dy = t.clientY - state.cy;
    const d = Math.hypot(dx, dy);
    if (d > RAD) { dx = (dx / d) * RAD; dy = (dy / d) * RAD; }
    knob.style.transform = `translate(${dx}px, ${dy}px)`;
    input.tForward = dy < -6 ? 1 : 0;
    input.tBack = dy > 6 ? 1 : 0;
    input.tLeft = dx < -6 ? 1 : 0;
    input.tRight = dx > 6 ? 1 : 0;
    input.tAnalog = Math.min(1, d / RAD);
    e.preventDefault();
  };
  const end = (e) => {
    state.active = false;
    knob.style.transform = '';
    input.tForward = input.tBack = input.tLeft = input.tRight = 0;
    input.tAnalog = 1;
    void e;
  };
  stick.addEventListener('touchstart', start, { passive: false });
  stick.addEventListener('touchmove', move, { passive: false });
  stick.addEventListener('touchend', end);
  stick.addEventListener('touchcancel', end);

  const hold = (id, on, off) => {
    const b = root.querySelector(id);
    if (!b) return;
    const set = (v) => { b.classList.toggle('active', v); v ? on() : off?.(); };
    b.addEventListener('touchstart', (e) => { e.preventDefault(); set(true); }, { passive: false });
    b.addEventListener('touchend', (e) => { e.preventDefault(); set(false); }, { passive: false });
    b.addEventListener('click', (e) => { e.preventDefault(); });
  };
  hold('#t-jump', () => { input.tJump = 1; }, () => { input.tJump = 0; });
  hold('#t-sneak', () => { input.tSneak = 1; input.tSprint = 0; }, () => { input.tSneak = 0; });
  hold('#t-mine', () => { input.mine = 1; api.onMineStart?.(); }, () => { input.mine = 0; api.onMineEnd?.(); });
  hold('#t-place', () => { api.place?.(); }, () => {});
  root.querySelector('#t-fly')?.addEventListener('click', () => {
    api.toggleFly?.();
  });

  // обзор: свайп по всему экрану, кроме джойстика/кнопок
  const look = { id: -1, x: 0, y: 0 };
  const canvas = document.getElementById('gl');
  canvas.addEventListener('touchstart', (e) => {
    const t = e.changedTouches[0];
    if (t.clientX < window.innerWidth * 0.32 && t.clientY > window.innerHeight * 0.6) return;
    if (t.target !== canvas) return;
    look.id = t.identifier;
    look.x = t.clientX; look.y = t.clientY;
    canvasLookTouch = true;
  }, { passive: true });
  let canvasLookTouch = false;
  canvas.addEventListener('touchmove', (e) => {
    const t = [...e.changedTouches].find((c) => c.identifier === look.id);
    if (!t) return;
    input.lookX += (t.clientX - look.x) * 0.0045;
    input.lookY += (t.clientY - look.y) * 0.0045;
    look.x = t.clientX; look.y = t.clientY;
    e.preventDefault();
  }, { passive: false });
  const lookEnd = (e) => {
    const t = [...e.changedTouches].find((c) => c.identifier === look.id);
    if (!t) return;
    look.id = -1;
    if (canvasLookTouch && performance.now() - tapStart < 250) api.tap?.();
    canvasLookTouch = false;
  };
  let tapStart = 0;
  canvas.addEventListener('touchstart', () => { tapStart = performance.now(); }, { passive: true });
  canvas.addEventListener('touchend', lookEnd, { passive: true });
  canvas.addEventListener('touchcancel', lookEnd, { passive: true });

  return {
    uninstall() {
      stick.replaceWith(stick.cloneNode(true));
    },
  };
}

function findTouch(list, id) {
  for (let i = 0; i < list.length; i++) if (list[i].identifier === id) return list[i];
  return null;
}
