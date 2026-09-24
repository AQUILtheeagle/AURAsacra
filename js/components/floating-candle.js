// Desktop Always-on-top Floating Living Candle Widget for Aura Sacra
import { icons } from '../icons.js';
import { toggleRain, isPlayingRain, setRainVolume, getRainVolume, playMonasticBell } from '../audio-engine.js';

let initialSeconds = 25 * 60;
let timerSeconds = 25 * 60;
let timerInterval = null;
let isTimerRunning = false;
let isMinimized = false;

export function renderFloatingCandle(container) {
  function updateUI() {
    if (isMinimized) {
      container.innerHTML = `
        <div class="floating-candle-widget minimized cursor-pointer hover:scale-105 transition" id="btn-maximize-candle" title="Open Sacred Candle & Rain Focus">
          <div class="candle-wrapper scale-90">
            <div class="candle-flame"></div>
            <div class="candle-wick"></div>
            <div class="candle-body"></div>
          </div>
        </div>
      `;
      container.querySelector('#btn-maximize-candle').addEventListener('click', () => {
        isMinimized = false;
        updateUI();
      });
      return;
    }

    const minutes = Math.floor(timerSeconds / 60);
    const seconds = timerSeconds % 60;
    const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    const rainActive = isPlayingRain();
    const volume = getRainVolume();

    container.innerHTML = `
      <div class="floating-candle-widget w-72 p-4 border border-amber-600/30 bg-[var(--bg-card)]/95 backdrop-blur-md shadow-2xl rounded-2xl select-none">
        
        <!-- Header: Controls & Pop-up Window -->
        <div class="flex items-center justify-between pb-2 border-b border-stone-200 dark:border-stone-800">
          <div class="flex items-center gap-1.5">
            <span class="text-amber-500">${icons.flame('w-4 h-4')}</span>
            <span class="text-xs font-bold uppercase tracking-wider font-display text-[var(--accent-vermilion)]">Candle</span>
          </div>
          <div class="flex items-center gap-1.5">
            <button id="btn-open-external-popup" class="text-[11px] text-amber-500 hover:text-amber-400 px-2 py-0.5 rounded-md bg-amber-500/10 border border-amber-500/30 flex items-center gap-1 font-sans cursor-pointer transition hover:bg-amber-500/20" title="Open as detached standalone Pop-up window">
              ${icons.share('w-3 h-3')}
              <span>Pop-up Window</span>
            </button>
            <button id="btn-minimize-candle" class="text-stone-400 hover:text-stone-200 p-1 cursor-pointer" title="Minimize">
              ${icons.minimize('w-4 h-4')}
            </button>
          </div>
        </div>

        <!-- Center: Living Candle Flame -->
        <div class="py-3 flex flex-col items-center justify-center">
          <div class="candle-wrapper mb-2">
            <div class="candle-flame"></div>
            <div class="candle-wick"></div>
            <div class="candle-body"></div>
          </div>
          <p class="text-[11px] italic text-[var(--text-muted)] text-center mt-1">
            «Lux in Tenebris Lucet»
          </p>
        </div>

        <!-- Timer Controls with Modifier Buttons -->
        <div class="bg-[var(--bg-secondary)] rounded-xl p-3 text-center border border-stone-200 dark:border-stone-800 space-y-2">
          
          <div class="flex items-center justify-center gap-3">
            <button id="btn-timer-sub5" class="w-7 h-7 rounded-lg border border-stone-300 dark:border-stone-700 hover:border-amber-600 text-xs font-bold text-[var(--text-secondary)] flex items-center justify-center cursor-pointer transition active:scale-95" title="Subtract 5 minutes">
              -5
            </button>

            <div class="text-2xl font-mono font-bold tracking-widest text-[var(--accent-gold)]">
              ${formattedTime}
            </div>

            <button id="btn-timer-add5" class="w-7 h-7 rounded-lg border border-stone-300 dark:border-stone-700 hover:border-amber-600 text-xs font-bold text-[var(--text-secondary)] flex items-center justify-center cursor-pointer transition active:scale-95" title="Add 5 minutes">
              +5
            </button>
          </div>

          <!-- Presets -->
          <div class="flex items-center justify-center gap-1">
            <button class="candle-preset px-1.5 py-0.5 rounded text-[10px] font-sans border cursor-pointer ${initialSeconds === 300 ? 'border-amber-600 bg-amber-600/10 text-amber-500 font-bold' : 'border-stone-300 dark:border-stone-700 text-[var(--text-muted)] hover:border-amber-500'}" data-sec="300">5m</button>
            <button class="candle-preset px-1.5 py-0.5 rounded text-[10px] font-sans border cursor-pointer ${initialSeconds === 900 ? 'border-amber-600 bg-amber-600/10 text-amber-500 font-bold' : 'border-stone-300 dark:border-stone-700 text-[var(--text-muted)] hover:border-amber-500'}" data-sec="900">15m</button>
            <button class="candle-preset px-1.5 py-0.5 rounded text-[10px] font-sans border cursor-pointer ${initialSeconds === 1500 ? 'border-amber-600 bg-amber-600/10 text-amber-500 font-bold' : 'border-stone-300 dark:border-stone-700 text-[var(--text-muted)] hover:border-amber-500'}" data-sec="1500">25m</button>
            <button class="candle-preset px-1.5 py-0.5 rounded text-[10px] font-sans border cursor-pointer ${initialSeconds === 2700 ? 'border-amber-600 bg-amber-600/10 text-amber-500 font-bold' : 'border-stone-300 dark:border-stone-700 text-[var(--text-muted)] hover:border-amber-500'}" data-sec="2700">45m</button>
            <button class="candle-preset px-1.5 py-0.5 rounded text-[10px] font-sans border cursor-pointer ${initialSeconds === 3600 ? 'border-amber-600 bg-amber-600/10 text-amber-500 font-bold' : 'border-stone-300 dark:border-stone-700 text-[var(--text-muted)] hover:border-amber-500'}" data-sec="3600">60m</button>
          </div>
          
          <div class="flex items-center justify-center gap-2 pt-1">
            <button id="btn-toggle-timer" class="flex-1 py-1 px-3 rounded-lg bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold flex items-center justify-center gap-1 shadow-sm cursor-pointer transition active:scale-95">
              ${isTimerRunning ? icons.pause('w-3.5 h-3.5') : icons.play('w-3.5 h-3.5')}
              <span>${isTimerRunning ? 'Pause' : 'Start'}</span>
            </button>
            <button id="btn-reset-timer" class="py-1 px-2.5 rounded-lg border border-stone-300 dark:border-stone-700 text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)] cursor-pointer">
              Reset
            </button>
          </div>
        </div>

        <!-- Offline Rain Sound Controller -->
        <div class="mt-3 pt-3 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between gap-2">
          <button id="btn-toggle-rain" class="flex items-center gap-1.5 text-xs font-medium px-2.5 py-1.5 rounded-lg border transition ${
            rainActive 
              ? 'border-blue-500 bg-blue-500/10 text-blue-500' 
              : 'border-stone-300 dark:border-stone-700 text-[var(--text-secondary)] hover:border-blue-400'
          }">
            ${icons.rain('w-4 h-4')}
            <span>${rainActive ? 'Rain Playing' : 'Gentle Rain'}</span>
          </button>

          <input type="range" id="slider-rain-volume" min="0" max="1" step="0.05" value="${volume}" class="w-20 accent-blue-500 cursor-pointer" title="Rain volume">
        </div>

      </div>
    `;

    // Event handlers
    const extPopupBtn = container.querySelector('#btn-open-external-popup');
    if (extPopupBtn) {
      extPopupBtn.addEventListener('click', () => {
        const w = 340;
        const h = 500;
        const left = Math.max(0, (window.screen?.width || 1200) - w - 40);
        const top = 80;
        window.open(
          './candle-popup.html',
          'AuraSacraCandlePopup',
          `popup=1,width=${w},height=${h},left=${left},top=${top},menubar=no,toolbar=no,location=no,status=no,resizable=yes`
        );
      });
    }

    container.querySelector('#btn-minimize-candle').addEventListener('click', () => {
      isMinimized = true;
      updateUI();
    });

    container.querySelector('#btn-toggle-timer').addEventListener('click', () => {
      if (isTimerRunning) {
        clearInterval(timerInterval);
        isTimerRunning = false;
      } else {
        isTimerRunning = true;
        timerInterval = setInterval(() => {
          if (timerSeconds > 0) {
            timerSeconds--;
            updateUI();
          } else {
            clearInterval(timerInterval);
            isTimerRunning = false;
            playMonasticBell();
            alert('Aura Sacra: Contemplation / Work session completed! Take a gentle rest.');
            timerSeconds = initialSeconds;
            updateUI();
          }
        }, 1000);
      }
      updateUI();
    });

    const sub5Btn = container.querySelector('#btn-timer-sub5');
    if (sub5Btn) {
      sub5Btn.addEventListener('click', () => {
        if (timerSeconds > 5 * 60) {
          timerSeconds -= 5 * 60;
          initialSeconds = timerSeconds;
          updateUI();
        }
      });
    }

    const add5Btn = container.querySelector('#btn-timer-add5');
    if (add5Btn) {
      add5Btn.addEventListener('click', () => {
        timerSeconds += 5 * 60;
        initialSeconds = timerSeconds;
        updateUI();
      });
    }

    container.querySelectorAll('.candle-preset').forEach((btn) => {
      btn.addEventListener('click', () => {
        const sec = parseInt(btn.getAttribute('data-sec'));
        initialSeconds = sec;
        timerSeconds = sec;
        clearInterval(timerInterval);
        isTimerRunning = false;
        updateUI();
      });
    });

    container.querySelector('#btn-reset-timer').addEventListener('click', () => {
      clearInterval(timerInterval);
      isTimerRunning = false;
      timerSeconds = initialSeconds;
      updateUI();
    });

    container.querySelector('#btn-toggle-rain').addEventListener('click', () => {
      toggleRain();
      updateUI();
    });

    container.querySelector('#slider-rain-volume').addEventListener('input', (e) => {
      setRainVolume(parseFloat(e.target.value));
    });
  }

  updateUI();
}
