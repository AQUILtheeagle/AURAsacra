// Focus & Work with God Component (Candle + Procedural Rain + Pomodoro)
import { icons } from '../icons.js';
import { toggleRain, isPlayingRain, setRainVolume, getRainVolume, playMonasticBell } from '../audio-engine.js';

let focusSeconds = 25 * 60;
let initialSeconds = 25 * 60;
let focusInterval = null;
let isFocusRunning = false;

export function renderFocusMode(container) {
  function updateView() {
    const minutes = Math.floor(focusSeconds / 60);
    const seconds = focusSeconds % 60;
    const formatted = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    const rainActive = isPlayingRain();
    const volume = getRainVolume();

    container.innerHTML = `
      <div class="max-w-2xl mx-auto space-y-6">
        
        <!-- Header Card -->
        <div class="bg-[var(--bg-card)] border border-stone-300 dark:border-stone-800 rounded-2xl p-6 sm:p-8 text-center shadow-lg">
          
          <div class="flex items-center justify-center gap-2 mb-2">
            <span class="text-amber-500">${icons.flame('w-5 h-5')}</span>
            <h2 class="text-2xl font-bold font-display text-[var(--accent-vermilion)]">
              Focus with God • Peaceful Study & Work
            </h2>
          </div>
          
          <p class="text-sm italic text-[var(--text-muted)] max-w-md mx-auto mb-6">
            For students tackling exams and workers needing calm focus. Let the gentle rainfall wash away distractions as Christ's light illuminates your task.
          </p>

          <!-- Center Animated Candle -->
          <div class="py-8 flex flex-col items-center justify-center">
            <div class="candle-wrapper scale-125 mb-4">
              <div class="candle-flame"></div>
              <div class="candle-wick"></div>
              <div class="candle-body"></div>
            </div>
            
            <div class="text-4xl sm:text-5xl font-mono font-bold tracking-widest text-[var(--accent-gold)] my-4">
              ${formatted}
            </div>

            <!-- Timer Action Buttons -->
            <div class="flex items-center justify-center gap-3">
              <button id="btn-main-timer-toggle" class="px-6 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm shadow-md transition transform active:scale-95 flex items-center gap-2">
                ${isFocusRunning ? icons.pause('w-4 h-4') : icons.play('w-4 h-4')}
                <span>${isFocusRunning ? 'Pause' : 'Start Focus Session'}</span>
              </button>

              <button id="btn-main-timer-reset" class="px-4 py-2.5 rounded-xl border border-stone-300 dark:border-stone-700 text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)]">
                Reset
              </button>
            </div>

            <!-- Preset Buttons -->
            <div class="flex items-center gap-2 mt-4 text-xs font-sans">
              <button class="preset-btn px-3 py-1 rounded-lg border border-stone-300 dark:border-stone-700 hover:border-amber-600" data-min="15">15 min</button>
              <button class="preset-btn px-3 py-1 rounded-lg border border-stone-300 dark:border-stone-700 hover:border-amber-600 font-bold text-amber-600" data-min="25">25 min (Pomodoro)</button>
              <button class="preset-btn px-3 py-1 rounded-lg border border-stone-300 dark:border-stone-700 hover:border-amber-600" data-min="45">45 min</button>
              <button class="preset-btn px-3 py-1 rounded-lg border border-stone-300 dark:border-stone-700 hover:border-amber-600" data-min="60">60 min</button>
            </div>
          </div>

          <!-- Offline Procedural Rainfall Audio Controller -->
          <div class="mt-6 pt-6 border-t border-stone-200 dark:border-stone-800 bg-[var(--bg-secondary)] rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            
            <div class="flex items-center gap-3">
              <button id="btn-toggle-rain-audio" class="p-3 rounded-full border transition ${
                rainActive 
                  ? 'border-blue-500 bg-blue-500 text-white shadow-md' 
                  : 'border-stone-300 dark:border-stone-700 bg-[var(--bg-card)] text-stone-400 hover:text-blue-500'
              }">
                ${icons.rain('w-6 h-6')}
              </button>
              <div class="text-left">
                <p class="text-sm font-bold text-[var(--text-primary)] font-display">Offline Gentle Rainfall</p>
                <p class="text-xs text-[var(--text-muted)]">Pure procedural sound • zero downloads</p>
              </div>
            </div>

            <div class="flex items-center gap-3 w-full sm:w-auto">
              <span class="text-xs font-sans text-stone-400">Volume:</span>
              <input type="range" id="rain-vol-slider" min="0" max="1" step="0.05" value="${volume}" class="flex-1 sm:w-32 accent-blue-500 cursor-pointer">
            </div>

          </div>

          <!-- Detach Pop-up Window Button -->
          <div class="mt-4 pt-3 border-t border-stone-200 dark:border-stone-800">
            <button id="btn-detach-focus-popup" class="w-full py-2.5 px-4 rounded-xl border border-amber-600/40 bg-amber-600/10 hover:bg-amber-600/20 text-amber-600 text-xs font-bold font-sans flex items-center justify-center gap-2 transition cursor-pointer">
              ${icons.share('w-4 h-4')}
              <span>Detach Candle to Standalone Pop-up Window</span>
            </button>
          </div>

        </div>

      </div>
    `;

    // Event Handlers
    container.querySelector('#btn-main-timer-toggle').addEventListener('click', () => {
      if (isFocusRunning) {
        clearInterval(focusInterval);
        isFocusRunning = false;
      } else {
        isFocusRunning = true;
        focusInterval = setInterval(() => {
          if (focusSeconds > 0) {
            focusSeconds--;
            updateView();
          } else {
            clearInterval(focusInterval);
            isFocusRunning = false;
            playMonasticBell();
            alert('Aura Sacra: Session finished! Praise God for your labor and rest a moment.');
            focusSeconds = initialSeconds;
            updateView();
          }
        }, 1000);
      }
      updateView();
    });

    container.querySelector('#btn-main-timer-reset').addEventListener('click', () => {
      clearInterval(focusInterval);
      isFocusRunning = false;
      focusSeconds = initialSeconds;
      updateView();
    });

    container.querySelectorAll('.preset-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const min = parseInt(btn.getAttribute('data-min'));
        initialSeconds = min * 60;
        focusSeconds = initialSeconds;
        clearInterval(focusInterval);
        isFocusRunning = false;
        updateView();
      });
    });

    container.querySelector('#btn-toggle-rain-audio').addEventListener('click', () => {
      toggleRain();
      updateView();
    });

    container.querySelector('#rain-vol-slider').addEventListener('input', (e) => {
      setRainVolume(parseFloat(e.target.value));
    });

    const detachBtn = container.querySelector('#btn-detach-focus-popup');
    if (detachBtn) {
      detachBtn.addEventListener('click', () => {
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
  }

  updateView();
}
