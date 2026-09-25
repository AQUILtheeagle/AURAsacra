// Automatic circadian liturgical theme controller for Aura Sacra
import { getSetting, setSetting } from './db.js';

export const LITURGICAL_PHASES = {
  dawn: {
    id: 'dawn',
    name: 'Dawn / Lauds',
    hours: '06:00 – 11:59',
    description: 'Golden sunrise light, soft illuminated parchment. A time of morning praise and resurrection.',
    candleColor: '#ffc107',
    icon: 'sun'
  },
  midday: {
    id: 'midday',
    name: 'Midday / Scriptorium',
    hours: '12:00 – 17:59',
    description: 'Classic warm vellum with dark bistre ink and vermilion accents. Deep study and focused work.',
    candleColor: '#ffa726',
    icon: 'book'
  },
  sunset: {
    id: 'sunset',
    name: 'Sunset / Vespers',
    hours: '18:00 – 21:59',
    description: 'Warm amber beeswax light. Evening thanksgiving, peace, and family communion.',
    candleColor: '#ff9800',
    icon: 'flame'
  },
  night: {
    id: 'night',
    name: 'Night / Compline',
    hours: '22:00 – 05:59',
    description: 'Deep cathedral night with gentle candlelight font. Examination of conscience and Christ’s peace.',
    candleColor: '#ffb300',
    icon: 'moon'
  }
};

let currentPhase = 'dawn';
let listeners = [];

export function getLocalLiturgicalPhase() {
  const hour = new Date().getHours();
  if (hour >= 6 && hour < 12) {
    return 'dawn';
  } else if (hour >= 12 && hour < 18) {
    return 'midday';
  } else if (hour >= 18 && hour < 22) {
    return 'sunset';
  } else {
    return 'night';
  }
}

export async function initCircadianTheme() {
  const override = await getSetting('theme_override', 'auto');
  
  if (override === 'auto' || !override) {
    currentPhase = getLocalLiturgicalPhase();
  } else {
    currentPhase = override;
  }

  applyTheme(currentPhase);

  // Periodically check local time every minute to adapt theme automatically
  setInterval(async () => {
    const activeOverride = await getSetting('theme_override', 'auto');
    if (activeOverride === 'auto' || !activeOverride) {
      const calculated = getLocalLiturgicalPhase();
      if (calculated !== currentPhase) {
        currentPhase = calculated;
        applyTheme(currentPhase);
      }
    }
  }, 60000);

  return currentPhase;
}

export function getCurrentPhase() {
  return currentPhase;
}

export function getPhaseDetails(phaseId = currentPhase) {
  return LITURGICAL_PHASES[phaseId] || LITURGICAL_PHASES.dawn;
}

export async function setLiturgicalThemeOverride(override) {
  await setSetting('theme_override', override);
  if (override === 'auto') {
    currentPhase = getLocalLiturgicalPhase();
  } else {
    currentPhase = override;
  }
  applyTheme(currentPhase);
}

function applyTheme(phase) {
  document.documentElement.setAttribute('data-theme', phase);
  
  // Update meta theme-color for browser address bar on mobile
  const metaThemeColor = document.querySelector('meta[name="theme-color"]');
  if (metaThemeColor) {
    const colors = {
      dawn: '#c69214',
      midday: '#b37d0e',
      sunset: '#241b16',
      night: '#121214'
    };
    metaThemeColor.setAttribute('content', colors[phase] || '#c69214');
  }

  // Notify registered listeners
  listeners.forEach((fn) => {
    try {
      fn(phase, LITURGICAL_PHASES[phase]);
    } catch (e) {
      console.error('Theme listener error:', e);
    }
  });
}

export function onThemeChange(listener) {
  listeners.push(listener);
  return () => {
    listeners = listeners.filter((l) => l !== listener);
  };
}
