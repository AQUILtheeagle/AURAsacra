// The Jar of Promises Modal for Aura Sacra
import { PROMISE_CATEGORIES, PROMISES_DATABASE } from '../data/promises.js';
import { icons } from '../icons.js';

export function renderJarPromisesModal(container, onClose, onOpenShareCard) {
  let selectedCategory = null;
  let drawnPromise = null;

  function render() {
    container.innerHTML = `
      <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
        <div class="bg-[var(--bg-card)] border-2 border-amber-600/40 rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 relative parchment-border">
          
          <!-- Close Button -->
          <button id="btn-close-promises" class="absolute top-4 right-4 text-stone-400 hover:text-[var(--text-primary)] p-1">
            ${icons.close('w-5 h-5')}
          </button>

          <!-- Header -->
          <div class="text-center mb-6">
            <div class="w-12 h-12 rounded-full border border-amber-500/40 bg-[var(--bg-secondary)] flex items-center justify-center mx-auto text-amber-600 mb-2">
              ${icons.jar('w-6 h-6')}
            </div>
            <h2 class="text-2xl font-bold font-display text-[var(--accent-vermilion)]">
              The Jar of Promises
            </h2>
            <p class="text-xs sm:text-sm text-[var(--text-muted)] italic font-serif mt-1">
              Select what your heart is experiencing. Draw a faithful promise from the Word of God.
            </p>
          </div>

          <!-- State Selection Grid (if none drawn) -->
          ${!drawnPromise ? `
            <div class="grid grid-cols-2 gap-3">
              ${PROMISE_CATEGORIES.map((cat) => `
                <button class="promise-cat-btn flex flex-col items-center justify-center text-center p-3 rounded-xl border border-stone-300 dark:border-stone-800 bg-[var(--bg-secondary)] hover:border-amber-600 hover:scale-[1.02] transition shadow-sm" data-id="${cat.id}">
                  <span class="text-amber-600 mb-1.5">${icons[cat.icon] ? icons[cat.icon]('w-5 h-5') : icons.heart('w-5 h-5')}</span>
                  <span class="text-xs font-bold font-display text-[var(--text-primary)]">${cat.label}</span>
                  <span class="text-[10px] text-stone-400 font-sans mt-0.5">${cat.description}</span>
                </button>
              `).join('')}
            </div>
          ` : `
            <!-- Revealed Promise Parchment Scroll -->
            <div class="space-y-4 animate-scale-up notranslate" translate="no">
              
              <div class="bg-[var(--bg-parchment)] border-2 border-amber-600/50 rounded-xl p-5 shadow-inner notranslate" translate="no">
                <div class="text-center border-b border-stone-300 dark:border-stone-800 pb-2 mb-3">
                  <span class="text-xs font-display font-bold text-amber-600 uppercase tracking-widest notranslate" translate="no">
                    ${drawnPromise.ref.split('/')[0].trim()}
                  </span>
                </div>

                <blockquote class="text-base sm:text-lg font-serif italic text-[var(--text-primary)] text-center leading-relaxed mb-4 notranslate" translate="no">
                  «${drawnPromise.verse || drawnPromise.verse_en}»
                </blockquote>

                <!-- Reflection -->
                <div class="bg-[var(--bg-secondary)] rounded-lg p-3 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                  <span class="font-bold text-[var(--accent-vermilion)]">Word for You: </span>
                  ${drawnPromise.reflection}
                </div>

                <!-- 30-Second Micro-Prayer -->
                <div class="border-l-4 border-amber-600 bg-amber-500/10 rounded-r-lg p-3 text-xs sm:text-sm italic font-serif text-[var(--text-primary)]">
                  <span class="font-bold not-italic text-amber-700 dark:text-amber-400 block mb-1">30-Second Prayer of Surrender:</span>
                  ${drawnPromise.prayer}
                </div>
              </div>

              <!-- Action Buttons -->
              <div class="flex items-center justify-between gap-3 pt-2">
                <button id="btn-draw-again" class="flex-1 py-2 px-3 rounded-xl border border-stone-300 dark:border-stone-700 text-xs font-medium text-[var(--text-secondary)] hover:border-amber-600 transition">
                  ← Draw Another Promise
                </button>

                <button id="btn-share-drawn-card" class="flex-1 py-2 px-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold shadow-md transition flex items-center justify-center gap-1.5">
                  ${icons.share('w-4 h-4')}
                  <span>Share Card</span>
                </button>
              </div>

            </div>
          `}

        </div>
      </div>
    `;

    // Listeners
    container.querySelector('#btn-close-promises').addEventListener('click', onClose);

    container.querySelectorAll('.promise-cat-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        selectedCategory = btn.getAttribute('data-id');
        const list = PROMISES_DATABASE[selectedCategory] || PROMISES_DATABASE.anxiety;
        drawnPromise = list[Math.floor(Math.random() * list.length)];
        render();
      });
    });

    const drawAgainBtn = container.querySelector('#btn-draw-again');
    if (drawAgainBtn) {
      drawAgainBtn.addEventListener('click', () => {
        drawnPromise = null;
        render();
      });
    }

    const shareCardBtn = container.querySelector('#btn-share-drawn-card');
    if (shareCardBtn && drawnPromise) {
      shareCardBtn.addEventListener('click', () => {
        onClose();
        const cleanRef = drawnPromise.ref.split('/')[0].trim();
        onOpenShareCard(drawnPromise.verse_en, cleanRef);
      });
    }
  }

  render();
}
