// SOS Peace & Temptation Shield Modal (Emergency grounding against temptation and spiritual distress)
import { icons } from '../icons.js';

export function renderSOSTemptationModal(container, onClose) {
  let breathState = 'inhale'; // inhale, hold, exhale
  let countdown = 30;
  let timerInterval = null;

  function render() {
    container.innerHTML = `
      <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in">
        <div class="bg-[var(--bg-card)] border-2 border-red-600 rounded-3xl max-w-md w-full p-6 text-center shadow-2xl relative space-y-6">
          
          <!-- Close Button -->
          <button id="btn-close-sos" class="absolute top-4 right-4 text-stone-400 hover:text-white p-1">
            ${icons.close('w-5 h-5')}
          </button>

          <!-- Header -->
          <div class="flex flex-col items-center">
            <div class="w-14 h-14 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg mb-2 sos-breathing">
              ${icons.shield('w-7 h-7')}
            </div>
            <h2 class="text-2xl font-bold font-display text-red-600">
              SOS Peace & Temptation Shield
            </h2>
            <p class="text-xs text-[var(--text-muted)] italic font-serif">
              Pause for a moment. Do not yield to temptation or anxiety. Christ is right here with you.
            </p>
          </div>

          <!-- 30-Second Guided Calming Heart Breathing -->
          <div class="py-4">
            <div class="w-32 h-32 rounded-full border-4 border-red-500/40 bg-red-950/20 flex flex-col items-center justify-center mx-auto shadow-inner transition-all duration-1000 ${
              breathState === 'inhale' ? 'scale-110 border-red-500' : 'scale-90 border-amber-500'
            }">
              <span class="text-3xl font-mono font-bold text-red-500">${countdown}s</span>
              <span id="breath-label" class="text-xs font-bold uppercase tracking-wider text-amber-500 mt-1">
                ${breathState === 'inhale' ? 'Inhale Grace' : breathState === 'hold' ? "Hold in God's Peace" : 'Exhale Temptation'}
              </span>
            </div>
          </div>

          <!-- Scripture Shield of Victory -->
          <div class="bg-[var(--bg-secondary)] border border-stone-300 dark:border-stone-800 rounded-xl p-4 text-left space-y-2">
            <div class="flex items-center gap-2 text-xs font-bold text-red-500 uppercase tracking-wider">
              ${icons.cross('w-4 h-4')}
              <span>Shield Scripture • 1 Corinthians 10:13</span>
            </div>
            <p class="text-sm font-serif italic text-[var(--text-primary)] leading-relaxed">
              «God is faithful, and he will not let you be tempted beyond what you can bear; but when you are tempted, he will also provide a way out so that you can endure it.»
            </p>
          </div>

          <!-- Instant Prayer of Victory -->
          <div class="border-l-4 border-red-600 bg-red-500/10 rounded-r-xl p-3 text-left text-xs sm:text-sm font-serif italic text-[var(--text-primary)]">
            <span class="font-bold not-italic text-red-600 block mb-1">Instant Heart Prayer:</span>
            «Lord Jesus Christ, Son of the Living God, have mercy on me. Break this chain of temptation, guard my eyes, my mind, and my hands. Grant me Your holy victory and peace. Amen!»
          </div>

          <!-- Finished Button -->
          <button id="btn-finish-sos" class="w-full py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm shadow-md transition transform active:scale-95">
            I Have Found Peace • Close Shield
          </button>

        </div>
      </div>
    `;

    // Listeners
    container.querySelector('#btn-close-sos').addEventListener('click', () => {
      clearInterval(timerInterval);
      onClose();
    });

    container.querySelector('#btn-finish-sos').addEventListener('click', () => {
      clearInterval(timerInterval);
      onClose();
    });
  }

  render();

  // Run the 30-second breathing cycle
  timerInterval = setInterval(() => {
    countdown--;
    if (countdown % 8 >= 4) {
      breathState = 'exhale';
    } else {
      breathState = 'inhale';
    }

    const label = container.querySelector('#breath-label');
    const cdEl = container.querySelector('.font-mono');
    if (cdEl) cdEl.textContent = `${countdown}s`;
    if (label) {
      label.textContent = breathState === 'inhale' ? 'Inhale Grace' : 'Exhale Temptation';
    }

    if (countdown <= 0) {
      clearInterval(timerInterval);
      if (cdEl) cdEl.textContent = '0s';
      if (label) label.textContent = 'Victory in Christ';
    }
  }, 1000);
}
