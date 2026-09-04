/**
 * Процедурный звук на WebAudio: шаги, копка, установка, вода, UI и спокойная
 * фоновая музыка. Никаких аудиофайлов — всё синтезируется.
 */
const MATERIAL_TONE = {
  stone: { freq: 720, q: 1.1, decay: 0.09, gain: 0.55 },
  dirt: { freq: 380, q: 0.8, decay: 0.1, gain: 0.5 },
  grass: { freq: 1500, q: 0.7, decay: 0.07, gain: 0.32 },
  wood: { freq: 520, q: 2.2, decay: 0.12, gain: 0.5 },
  sand: { freq: 2600, q: 0.5, decay: 0.08, gain: 0.3 },
  glass: { freq: 3200, q: 3.5, decay: 0.16, gain: 0.45 },
  wool: { freq: 260, q: 0.6, decay: 0.09, gain: 0.35 },
  splash: { freq: 900, q: 0.4, decay: 0.35, gain: 0.6 },
  soft: { freq: 1200, q: 0.5, decay: 0.06, gain: 0.3 },
};

export class Audio {
  constructor() {
    this.ctx = null;
    this.sfxVolume = 0.6;
    this.musicVolume = 0.28;
    this.musicOn = true;
    this._musicTimer = null;
    this._noise = null;
    this._muted = false;
  }

  /** Вызывать из жеста пользователя. */
  resume() {
    if (!this.ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return false;
      this.ctx = new AC();
      this.master = this.ctx.createGain();
      this.master.gain.value = 1;
      this.master.connect(this.ctx.destination);
      this.sfx = this.ctx.createGain();
      this.sfx.gain.value = this.sfxVolume;
      this.sfx.connect(this.master);
      this.music = this.ctx.createGain();
      this.music.gain.value = 0.0001;
      this.musicBus = this.ctx.createGain();
      this.musicBus.connect(this.music);
      // короткий «реверб» из задержек
      const d1 = this.ctx.createDelay(1.0); d1.delayTime.value = 0.19;
      const d2 = this.ctx.createDelay(1.0); d2.delayTime.value = 0.37;
      const fb = this.ctx.createGain(); fb.gain.value = 0.34;
      this.musicBus.connect(d1); this.musicBus.connect(d2);
      d1.connect(fb); d2.connect(fb); fb.connect(d2);
      d1.connect(this.music); d2.connect(this.music);
      const len = this.ctx.sampleRate * 1.2;
      const buf = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
      const ch = buf.getChannelData(0);
      for (let i = 0; i < len; i++) ch[i] = Math.random() * 2 - 1;
      this._noise = buf;
      if (this.musicOn) this.startMusic();
    }
    if (this.ctx.state === 'suspended') this.ctx.resume();
    return true;
  }

  setVolumes(sfx, music) {
    this.sfxVolume = sfx;
    this.musicVolume = music;
    if (this.sfx) this.sfx.gain.value = sfx;
    if (this.music) {
      this.music.gain.cancelScheduledValues(this.ctx.currentTime);
      this.music.gain.linearRampToValueAtTime(music > 0 ? music : 0.0001, this.ctx.currentTime + 0.4);
    }
  }

  get ready() { return !!this.ctx && this.ctx.state === 'running'; }

  _noiseHit({ freq = 800, q = 1, decay = 0.1, gain = 0.5, sweep = 0, when = 0 }) {
    const ctx = this.ctx;
    const src = ctx.createBufferSource();
    src.buffer = this._noise;
    src.playbackRate.value = 1 + (Math.random() - 0.5) * 0.2;
    const bp = ctx.createBiquadFilter();
    bp.type = 'bandpass';
    bp.frequency.value = freq;
    bp.Q.value = q;
    const g = ctx.createGain();
    const t = ctx.currentTime + when;
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(gain, t + 0.004);
    g.gain.exponentialRampToValueAtTime(0.0008, t + decay);
    if (sweep) bp.frequency.exponentialRampToValueAtTime(Math.max(60, freq * sweep), t + decay);
    src.connect(bp).connect(g).connect(this.sfx);
    src.start(t);
    src.stop(t + decay + 0.05);
  }

  _tone({ freq = 440, dur = 0.12, gain = 0.2, type = 'sine', when = 0, glide = 0, detune = 0 }) {
    const ctx = this.ctx;
    const o = ctx.createOscillator();
    o.type = type;
    const t = ctx.currentTime + when;
    o.frequency.setValueAtTime(freq, t);
    if (glide) o.frequency.exponentialRampToValueAtTime(Math.max(40, freq * glide), t + dur);
    o.detune.value = detune;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(gain, t + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0005, t + dur);
    o.connect(g).connect(this.sfx);
    o.start(t);
    o.stop(t + dur + 0.05);
  }

  hit(material, strength = 1) {
    if (!this.ready) return;
    const m = MATERIAL_TONE[material] ?? MATERIAL_TONE.stone;
    this._noiseHit({ freq: m.freq * (0.9 + Math.random() * 0.25), q: m.q, decay: m.decay * 0.7, gain: m.gain * 0.5 * strength });
  }

  breakBlock(material) {
    if (!this.ready) return;
    const m = MATERIAL_TONE[material] ?? MATERIAL_TONE.stone;
    this._noiseHit({ freq: m.freq, q: m.q, decay: m.decay * 1.7, gain: m.gain, sweep: 0.45 });
    this._tone({ freq: m.freq / 6, dur: 0.1, gain: 0.06, type: 'triangle', glide: 0.6 });
  }

  place(material) {
    if (!this.ready) return;
    const m = MATERIAL_TONE[material] ?? MATERIAL_TONE.stone;
    this._noiseHit({ freq: m.freq * 0.7, q: 1.4, decay: 0.07, gain: m.gain * 0.7 });
    this._tone({ freq: 180, dur: 0.07, gain: 0.09, type: 'sine', glide: 0.6 });
  }

  step(material) {
    if (!this.ready) return;
    const m = MATERIAL_TONE[material] ?? MATERIAL_TONE.dirt;
    this._noiseHit({ freq: m.freq * (0.85 + Math.random() * 0.3), q: m.q * 0.8, decay: m.decay * 0.5, gain: m.gain * 0.22 });
  }

  jump() { if (this.ready) this._tone({ freq: 300, dur: 0.07, gain: 0.05, type: 'sine', glide: 1.6 }); }
  land(power = 1) {
    if (!this.ready) return;
    this._noiseHit({ freq: 220, q: 0.7, decay: 0.1 + power * 0.08, gain: 0.22 * Math.min(1.6, power) });
  }
  splash() {
    if (!this.ready) return;
    this._noiseHit({ freq: 900, q: 0.4, decay: 0.35, gain: 0.5, sweep: 0.3 });
  }
  ui(kind = 'click') {
    if (!this.ready) return;
    if (kind === 'hover') this._tone({ freq: 900, dur: 0.04, gain: 0.03, type: 'sine' });
    else if (kind === 'back') this._tone({ freq: 320, dur: 0.1, gain: 0.08, type: 'triangle', glide: 0.6 });
    else this._tone({ freq: 640, dur: 0.07, gain: 0.09, type: 'square' });
  }
  deny() { if (this.ready) this._tone({ freq: 180, dur: 0.12, gain: 0.08, type: 'sawtooth', glide: 0.7 }); }
  openInv() { if (this.ready) { this._tone({ freq: 520, dur: 0.09, gain: 0.06, type: 'triangle' }); this._tone({ freq: 780, dur: 0.12, gain: 0.05, type: 'triangle', when: 0.05 }); } }

  // ------------------------------------------------------------ музыка
  startMusic() {
    if (!this.ctx || this._musicTimer) return;
    const scale = [0, 2, 4, 7, 9, 12, 14, 16, 19, 21];
    const roots = [174.61, 196.0, 146.83, 164.81];
    let bar = 0;
    const playBar = () => {
      if (!this.ctx || this.ctx.state !== 'running') return;
      const ctx = this.ctx;
      const root = roots[bar % roots.length];
      bar++;
      const now = ctx.currentTime;
      const chord = [0, 4, 7].map((iv, i) => ({ freq: root * Math.pow(2, iv / 12) * (i === 2 ? 2 : 1), when: i * 0.12 }));
      for (const c of chord) this._pad(c.freq, 5.2, 0.035, c.when);
      const notes = 1 + ((Math.random() * 3) | 0);
      for (let i = 0; i < notes; i++) {
        const deg = scale[(Math.random() * scale.length) | 0];
        const freq = root * 2 * Math.pow(2, deg / 12);
        this._bell(freq, 1.6 + Math.random(), 0.055, 0.3 + i * 0.75 + Math.random() * 0.3);
      }
      if (Math.random() > 0.75) this._bell(root * 4 * Math.pow(2, scale[(Math.random() * 5) | 0] / 12), 2.4, 0.03, 2.2);
      void now;
    };
    const pad = (freq, dur, gain, when) => {
      const t = ctx.currentTime + when;
      const o = ctx.createOscillator();
      o.type = 'sine';
      o.frequency.value = freq;
      const o2 = ctx.createOscillator();
      o2.type = 'triangle';
      o2.frequency.value = freq * 1.004;
      const g = ctx.createGain();
      g.gain.setValueAtTime(0.0001, t);
      g.gain.linearRampToValueAtTime(gain, t + dur * 0.35);
      g.gain.linearRampToValueAtTime(0.0001, t + dur);
      o.connect(g); o2.connect(g); g.connect(this.musicBus);
      o.start(t); o2.start(t);
      o.stop(t + dur + 0.1); o2.stop(t + dur + 0.1);
    };
    const bell = (freq, dur, gain, when) => {
      const t = ctx.currentTime + when;
      const o = ctx.createOscillator();
      o.type = 'sine';
      o.frequency.value = freq;
      const g = ctx.createGain();
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(gain, t + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      const f = ctx.createBiquadFilter();
      f.type = 'lowpass';
      f.frequency.value = 2400;
      o.connect(f).connect(g).connect(this.musicBus);
      o.start(t); o.stop(t + dur + 0.1);
    };
    this._pad = pad;
    this._bell = bell;
    playBar();
    this._musicTimer = setInterval(playBar, 5400);
  }

  stopMusic() {
    if (this._musicTimer) clearInterval(this._musicTimer);
    this._musicTimer = null;
  }

  toggleMusic() {
    this.musicOn = !this.musicOn;
    if (this.musicOn) { if (this.ctx) this.startMusic(); }
    else this.stopMusic();
    return this.musicOn;
  }
}
