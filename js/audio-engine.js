// Procedural Offline Web Audio Engine for Aura Sacra
// Generates soothing ambient rainfall and gentle monastic bells without external audio files.

let audioCtx = null;
let rainNode = null;
let rainGain = null;
let isRainPlaying = false;
let rainVolume = 0.5;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AudioContextClass();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

// 1. Procedural Ambient Rainfall Generator
export function toggleRain() {
  if (isRainPlaying) {
    stopRain();
    return false;
  } else {
    startRain();
    return true;
  }
}

export function isPlayingRain() {
  return isRainPlaying;
}

export function setRainVolume(vol) {
  rainVolume = Math.max(0, Math.min(1, vol));
  if (rainGain) {
    rainGain.gain.setTargetAtTime(rainVolume * 0.4, audioCtx.currentTime, 0.1);
  }
}

export function getRainVolume() {
  return rainVolume;
}

export function startRain() {
  try {
    const ctx = getAudioContext();
    if (isRainPlaying) return;

    // Buffer of pink/brown noise (5 seconds looping)
    const bufferSize = ctx.sampleRate * 5;
    const noiseBuffer = ctx.createBuffer(2, bufferSize, ctx.sampleRate);
    
    for (let channel = 0; channel < 2; channel++) {
      const output = noiseBuffer.getChannelData(channel);
      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        // Pink noise filter algorithm
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.05;
        b6 = white * 0.115926;
      }
    }

    const whiteNoise = ctx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;
    whiteNoise.loop = true;

    // Dual filter to create realistic soft rain frequency profile
    const lowpass = ctx.createBiquadFilter();
    lowpass.type = 'lowpass';
    lowpass.frequency.setValueAtTime(850, ctx.currentTime);

    const highpass = ctx.createBiquadFilter();
    highpass.type = 'highpass';
    highpass.frequency.setValueAtTime(220, ctx.currentTime);

    rainGain = ctx.createGain();
    rainGain.gain.setValueAtTime(0.01, ctx.currentTime);
    rainGain.gain.exponentialRampToValueAtTime(rainVolume * 0.4, ctx.currentTime + 1.5);

    whiteNoise.connect(lowpass);
    lowpass.connect(highpass);
    highpass.connect(rainGain);
    rainGain.connect(ctx.destination);

    whiteNoise.start(0);
    rainNode = whiteNoise;
    isRainPlaying = true;
  } catch (err) {
    console.error('Audio engine startRain error:', err);
  }
}

export function stopRain() {
  if (rainGain && audioCtx) {
    try {
      rainGain.gain.setTargetAtTime(0.001, audioCtx.currentTime, 0.4);
      setTimeout(() => {
        if (rainNode) {
          rainNode.stop();
          rainNode.disconnect();
          rainNode = null;
        }
        isRainPlaying = false;
      }, 500);
    } catch (e) {
      isRainPlaying = false;
    }
  } else {
    isRainPlaying = false;
  }
}

// 2. Monastic Bell Chime (Pure Additive Synthesis)
export function playMonasticBell() {
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;
    
    // Fundamental tone + overtones (characteristic of cathedral bronze bells)
    const partials = [
      { freq: 440, gain: 0.5, decay: 3.5 },  // Strike note (A4)
      { freq: 524, gain: 0.35, decay: 4.0 }, // Tierce (Minor third)
      { freq: 659, gain: 0.25, decay: 3.0 }, // Quint
      { freq: 880, gain: 0.15, decay: 2.5 }, // Nominal (Octave)
      { freq: 220, gain: 0.3, decay: 4.5 }   // Hum tone
    ];

    partials.forEach((p) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(p.freq, now);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.exponentialRampToValueAtTime(p.gain * 0.35, now + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + p.decay);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + p.decay + 0.1);
    });
  } catch (err) {
    console.error('Audio bell error:', err);
  }
}
