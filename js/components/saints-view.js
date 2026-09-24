// Saints & Church Fathers View for Aura Sacra
import { getSaintsForConfession } from '../data/saints.js';
import { icons } from '../icons.js';
import { getSetting } from '../db.js';

export async function renderSaintsView(container, onOpenShareCard) {
  const confession = (await getSetting('user_confession', 'ecumenical')).toLowerCase();
  const saints = getSaintsForConfession(confession);

  container.innerHTML = `
    <div class="space-y-6">
      
      <!-- Header -->
      <div class="bg-[var(--bg-card)] border border-stone-300 dark:border-stone-800 rounded-xl p-5 shadow-sm">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-full border border-amber-500/40 bg-[var(--bg-secondary)] flex items-center justify-center text-amber-600">
            ${icons.cross('w-5 h-5')}
          </div>
          <div>
            <h2 class="text-xl sm:text-2xl font-bold font-display text-[var(--accent-vermilion)]">
              Saints & Fathers • Cloud of Witnesses
            </h2>
            <p class="text-xs sm:text-sm text-[var(--text-muted)] italic font-serif">
              Current Tradition: <span class="capitalize font-bold text-amber-600">${confession}</span> (Switch anytime in Settings)
            </p>
          </div>
        </div>
      </div>

      <!-- Saints Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        ${saints.map((saint) => {
          const primaryName = saint.name.split('/')[0].trim();
          return `
            <div class="bg-[var(--bg-parchment)] border border-stone-300/80 dark:border-stone-800 rounded-2xl p-6 shadow-md flex flex-col justify-between space-y-4 parchment-border">
              
              <div>
                <div class="flex items-start justify-between gap-2 border-b border-stone-200 dark:border-stone-800 pb-3">
                  <div>
                    <h3 class="text-lg font-bold font-display text-[var(--accent-vermilion)]">${primaryName}</h3>
                    <p class="text-xs font-sans text-stone-400">${saint.title} • <span class="italic text-amber-600">${saint.feast}</span></p>
                  </div>
                </div>

                <!-- Quote -->
                <blockquote class="my-4 text-base italic font-serif text-[var(--text-primary)] border-l-4 border-amber-600/60 pl-3 py-1">
                  ${saint.quote || saint.quote_en}
                </blockquote>

                <p class="text-sm text-[var(--text-secondary)] leading-relaxed">
                  ${saint.bio}
                </p>
              </div>

              <!-- Card Footer: Scripture Ref & Share -->
              <div class="pt-3 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between">
                <span class="text-xs font-mono font-semibold text-amber-600">
                  📖 ${saint.scriptureRef}
                </span>

                <button class="btn-share-saint flex items-center gap-1.5 text-xs font-medium text-amber-600 hover:text-amber-700 px-3 py-1 rounded-lg border border-amber-600/30 hover:border-amber-600 transition" data-quote="${encodeURIComponent(saint.quote_en)}" data-name="${encodeURIComponent(primaryName)}">
                  ${icons.share('w-3.5 h-3.5')}
                  <span>Share Quote</span>
                </button>
              </div>

            </div>
          `;
        }).join('')}
      </div>

    </div>
  `;

  container.querySelectorAll('.btn-share-saint').forEach((btn) => {
    btn.addEventListener('click', () => {
      const quote = decodeURIComponent(btn.getAttribute('data-quote'));
      const name = decodeURIComponent(btn.getAttribute('data-name'));
      onOpenShareCard(quote, name);
    });
  });
}
