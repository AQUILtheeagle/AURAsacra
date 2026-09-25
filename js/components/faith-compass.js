// Faith Compass (Bussola dei Grandi Dubbi di Fede) Modal for Aura Sacra
import { FAITH_DOUBTS } from '../data/doubts.js';
import { icons } from '../icons.js';

export function renderFaithCompassModal(container, onClose, onAskJesus) {
  let activeDoubt = FAITH_DOUBTS[0];

  function render() {
    container.innerHTML = `
      <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
        <div class="bg-[var(--bg-card)] border-2 border-stone-300 dark:border-stone-800 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 relative parchment-border space-y-6">
          
          <!-- Close Button -->
          <button id="btn-close-compass" class="absolute top-4 right-4 text-stone-400 hover:text-[var(--text-primary)] p-1">
            ${icons.close('w-5 h-5')}
          </button>

          <!-- Header -->
          <div class="flex items-center gap-3 border-b border-stone-200 dark:border-stone-800 pb-4">
            <div class="w-12 h-12 rounded-full border border-amber-500/40 bg-[var(--bg-secondary)] flex items-center justify-center text-amber-600">
              ${icons.compass('w-6 h-6')}
            </div>
            <div>
              <h2 class="text-2xl font-bold font-display text-[var(--accent-vermilion)]">
                Faith Compass
              </h2>
              <p class="text-xs text-[var(--text-muted)] italic font-serif">
                Scriptural and rational wisdom for life's deepest dilemmas
              </p>
            </div>
          </div>

          <!-- Question Pills Carousel -->
          <div class="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
            ${FAITH_DOUBTS.map((d) => `
              <button class="doubt-pill-btn whitespace-nowrap px-3 py-1.5 rounded-lg border text-xs font-display font-semibold transition ${
                activeDoubt.id === d.id 
                  ? 'border-amber-600 bg-amber-600/15 text-[var(--accent-vermilion)] font-bold' 
                  : 'border-stone-300 dark:border-stone-700 bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:border-amber-500'
              }" data-id="${d.id}">
                ${d.title}
              </button>
            `).join('')}
          </div>

          <!-- Active Doubt Content Card -->
          <div class="bg-[var(--bg-parchment)] border border-stone-300/80 dark:border-stone-800 rounded-2xl p-6 shadow-md space-y-4">
            
            <div class="border-b border-stone-200 dark:border-stone-800 pb-3">
              <h3 class="text-xl font-bold font-display text-[var(--accent-vermilion)]">
                ${activeDoubt.title}
              </h3>
              <p class="text-xs italic text-[var(--text-muted)]">
                ${activeDoubt.summary}
              </p>
            </div>

            <!-- Main Content -->
            <div class="space-y-3 text-sm font-serif leading-relaxed text-[var(--text-primary)]">
              <p>${activeDoubt.content || activeDoubt.content_en}</p>
            </div>

            <!-- Quote -->
            <div class="p-3 bg-[var(--bg-secondary)] rounded-xl border border-stone-200 dark:border-stone-800 text-xs italic text-[var(--text-secondary)] notranslate" translate="no">
              ${activeDoubt.quote}
            </div>

            <!-- Scriptural Anchors -->
            <div class="pt-2 flex flex-wrap items-center gap-2 notranslate" translate="no">
              <span class="text-xs font-mono font-bold text-amber-600 notranslate" translate="no">📖 Key Scripture Passages:</span>
              ${activeDoubt.verses.map((v) => `
                <span class="px-2 py-0.5 rounded-md bg-amber-500/10 border border-amber-600/30 text-xs font-mono text-amber-700 dark:text-amber-400 notranslate" translate="no">
                  ${v}
                </span>
              `).join('')}
            </div>

          </div>

          <!-- Footer Actions -->
          <div class="flex items-center justify-between gap-3 pt-2">
            <button id="btn-ask-jesus-doubt" class="flex-1 py-2.5 px-4 rounded-xl bg-amber-700 hover:bg-amber-800 text-white font-medium text-xs sm:text-sm shadow-md transition flex items-center justify-center gap-2">
              ${icons.message('w-4 h-4')}
              <span>Discuss this question with Jesus in Chat</span>
            </button>
          </div>

        </div>
      </div>
    `;

    // Listeners
    container.querySelector('#btn-close-compass').addEventListener('click', onClose);

    container.querySelectorAll('.doubt-pill-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        activeDoubt = FAITH_DOUBTS.find((d) => d.id === id) || FAITH_DOUBTS[0];
        render();
      });
    });

    container.querySelector('#btn-ask-jesus-doubt').addEventListener('click', () => {
      onClose();
      onAskJesus(`Lord Jesus, help me understand this question in my heart: ${activeDoubt.title}`);
    });
  }

  render();
}
