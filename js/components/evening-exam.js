// Evening Examination of Conscience with Night Protection of Christ Modal for Aura Sacra
import { icons } from '../icons.js';

export function renderEveningExamModal(container, onClose) {
  let step = 1;

  function render() {
    container.innerHTML = `
      <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
        <div class="bg-[var(--bg-card)] border-2 border-amber-600/40 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative space-y-6 parchment-border">
          
          <!-- Close Button -->
          <button id="btn-close-exam" class="absolute top-4 right-4 text-stone-400 hover:text-white p-1">
            ${icons.close('w-5 h-5')}
          </button>

          <!-- Header -->
          <div class="text-center">
            <div class="w-12 h-12 rounded-full border border-amber-500/40 bg-[var(--bg-secondary)] flex items-center justify-center mx-auto text-amber-500 mb-2">
              ${icons.moon('w-6 h-6')}
            </div>
            <h2 class="text-2xl font-bold font-display text-[var(--accent-vermilion)]">
              Compline • Evening Examination & Protection
            </h2>
            <p class="text-xs text-[var(--text-muted)] italic font-serif">
              Step ${step} of 4 • Evening meditation before holy rest
            </p>
          </div>

          <!-- Step Content -->
          <div class="min-h-[220px] flex flex-col justify-center">
            ${step === 1 ? `
              <div class="space-y-3 animate-fade-in text-left">
                <span class="text-xs font-bold uppercase tracking-wider text-amber-600 font-sans">1. Memory of Gifts (Gratitude)</span>
                <p class="text-sm font-serif leading-relaxed text-[var(--text-primary)]">
                  Enter into stillness. Look back over the hours of this day and thank God for <strong>three specific graces</strong> (an encounter, a meal, guidance in study or work, health).
                </p>
                <div class="p-3 bg-[var(--bg-secondary)] rounded-xl border border-stone-300 dark:border-stone-800 text-xs italic text-[var(--text-secondary)]">
                  «I give thanks to you, Lord, with all my heart; I forget none of your benefits.»
                </div>
              </div>
            ` : step === 2 ? `
              <div class="space-y-3 animate-fade-in text-left">
                <span class="text-xs font-bold uppercase tracking-wider text-amber-600 font-sans">2. Reconciliation & Forgiveness</span>
                <p class="text-sm font-serif leading-relaxed text-[var(--text-primary)]">
                  Humbly acknowledge any harsh words, impure thoughts, procrastination, or failings today. Ask God for mercy and forgive anyone who hurt you.
                </p>
                <div class="p-3 bg-red-950/20 border border-red-500/30 rounded-xl text-xs sm:text-sm font-serif italic text-[var(--text-primary)]">
                  «Create in me a pure heart, O God, and renew a steadfast spirit within me. In Your forgiveness I find rest.»
                </div>
              </div>
            ` : step === 3 ? `
              <div class="space-y-3 animate-fade-in text-left">
                <span class="text-xs font-bold uppercase tracking-wider text-red-500 font-sans flex items-center gap-1.5">
                  ${icons.shield('w-4 h-4')}
                  <span>3. Invocation of Christ's Night Protection</span>
                </span>
                <p class="text-xs text-[var(--text-muted)] italic">
                  Pray for deliverance and guarding against nightmares, night anxiety, and all spiritual harm:
                </p>
                <div class="p-4 bg-[var(--bg-secondary)] border-2 border-red-600/40 rounded-xl space-y-2 text-xs sm:text-sm font-serif text-[var(--text-primary)] leading-relaxed">
                  <p class="italic font-bold text-[var(--accent-vermilion)]">
                    «Lord Jesus Christ, extend Your protecting hand over my home and upon this bed. May Your precious presence be my shield against all fear, nightmares, or dark thoughts of the night.»
                  </p>
                  <p class="italic text-[var(--text-secondary)]">
                    «Send Your holy angels to watch over my sleep and all those I love. Visit this dwelling and drive far from it all snares of the enemy.»
                  </p>
                  <p class="font-sans font-bold text-amber-600 text-xs text-right">
                    📖 Psalm 4:8 • «In peace I will lie down and sleep, for you alone, Lord, make me dwell in safety!»
                  </p>
                </div>
              </div>
            ` : `
              <div class="space-y-3 animate-fade-in text-center">
                <span class="text-xs font-bold uppercase tracking-wider text-emerald-500 font-sans">4. Surrendering Your Rest to God</span>
                <p class="text-base font-serif italic text-[var(--text-primary)] leading-relaxed">
                  Let go of all anxiety about tomorrow. Tomorrow belongs to the Father's loving providence. Close your eyes in His peace.
                </p>
                <div class="candle-wrapper py-2 scale-110">
                  <div class="candle-flame"></div>
                  <div class="candle-wick"></div>
                  <div class="candle-body"></div>
                </div>
                <p class="text-xs text-[var(--text-muted)]">
                  «Into Your hands, Lord, I commend my spirit.»
                </p>
              </div>
            `}
          </div>

          <!-- Navigation Footer -->
          <div class="flex items-center justify-between pt-2 border-t border-stone-200 dark:border-stone-800">
            ${step > 1 ? `
              <button id="btn-prev-step" class="px-4 py-2 rounded-xl border border-stone-300 dark:border-stone-700 text-xs font-medium text-[var(--text-secondary)] hover:border-amber-600">
                ← Previous
              </button>
            ` : '<div></div>'}

            ${step < 4 ? `
              <button id="btn-next-step" class="px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-md transition">
                Next →
              </button>
            ` : `
              <button id="btn-complete-exam" class="px-6 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs shadow-md transition">
                Good Night in the Lord • Complete
              </button>
            `}
          </div>

        </div>
      </div>
    `;

    // Listeners
    container.querySelector('#btn-close-exam').addEventListener('click', onClose);

    const prevBtn = container.querySelector('#btn-prev-step');
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        if (step > 1) {
          step--;
          render();
        }
      });
    }

    const nextBtn = container.querySelector('#btn-next-step');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (step < 4) {
          step++;
          render();
        }
      });
    }

    const completeBtn = container.querySelector('#btn-complete-exam');
    if (completeBtn) {
      completeBtn.addEventListener('click', onClose);
    }
  }

  render();
}
