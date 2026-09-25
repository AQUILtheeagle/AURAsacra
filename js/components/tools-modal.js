// Mobile & Desktop Sacred Tools Hub Modal for Aura Sacra
import { icons } from '../icons.js';

export function renderToolsModal(container, onClose, onNavigate, onOpenModal) {
  const toolsSections = [
    {
      category: 'Spiritual Disciplines & Daily Rhythm',
      items: [
        {
          id: 'penance',
          label: 'Penance & Fasting Calendar',
          desc: 'Daily fasts, meat abstinence, and liturgical rules',
          icon: 'calendar',
          badge: 'New',
          color: 'border-amber-600/60 bg-amber-500/10 text-amber-700 dark:text-amber-400',
          isTab: true
        },
        {
          id: 'promises',
          label: 'The Jar of Promises',
          desc: 'Biblical promises for anxiety, sorrow, decisions & gratitude',
          icon: 'jar',
          color: 'border-amber-600/40 bg-amber-500/5 text-amber-600',
          isModal: true
        },
        {
          id: 'evening',
          label: 'Night Examination & Protection',
          desc: 'Compline examen of conscience and peaceful sleep prayer',
          icon: 'moon',
          color: 'border-blue-600/40 bg-blue-500/5 text-blue-600',
          isModal: true
        },
        {
          id: 'focus',
          label: 'Focus with Candle & Rain',
          desc: 'Living flame meditation and procedural soothing rain',
          icon: 'flame',
          color: 'border-orange-600/40 bg-orange-500/5 text-orange-600',
          isTab: true
        }
      ]
    },
    {
      category: 'Wisdom & Spiritual Armor',
      items: [
        {
          id: 'sos',
          label: 'SOS Temptation & Peace Shield',
          desc: '30-second rhythmic breathing and 1 Cor 10:13 shield verse',
          icon: 'shield',
          color: 'border-red-600/60 bg-red-500/10 text-red-600',
          isModal: true
        },
        {
          id: 'doubts',
          label: 'Faith Compass',
          desc: 'Guidance on profound existential and theological questions',
          icon: 'compass',
          color: 'border-emerald-600/40 bg-emerald-500/5 text-emerald-600',
          isModal: true
        },
        {
          id: 'saints',
          label: 'Saints & Church Fathers',
          desc: 'Treasury of wisdom from the desert fathers and doctors',
          icon: 'cross',
          color: 'border-amber-600/40 bg-amber-500/5 text-amber-600',
          isTab: true
        }
      ]
    },
    {
      category: 'Sacred Utilities & Personal Growth',
      items: [
        {
          id: 'share',
          label: 'Parchment Card Maker',
          desc: 'Design and share illuminated Scripture cards to social apps',
          icon: 'share',
          color: 'border-amber-600/40 bg-amber-500/5 text-amber-600',
          isModal: true
        },
        {
          id: 'schedule',
          label: 'School & Work Planner',
          desc: 'Harmonize your study and labor with the monastic hours',
          icon: 'clock',
          color: 'border-blue-600/40 bg-blue-500/5 text-blue-600',
          isModal: true
        },
        {
          id: 'settings',
          label: 'Settings & Confession',
          desc: 'API key setup, local backup & restore, circadian themes',
          icon: 'settings',
          color: 'border-stone-400 dark:border-stone-700 bg-stone-500/5 text-stone-600 dark:text-stone-300',
          isModal: true
        },
        {
          id: 'feedback',
          label: 'GitHub Feedback',
          desc: 'Suggest improvements or report an issue on GitHub',
          icon: 'github',
          color: 'border-stone-400 dark:border-stone-700 bg-stone-500/5 text-stone-600 dark:text-stone-300',
          isModal: true
        }
      ]
    }
  ];

  container.innerHTML = `
    <div class="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div class="bg-[var(--bg-card)] border-t-2 sm:border-2 border-amber-600/60 rounded-t-3xl sm:rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-5 sm:p-7 shadow-2xl relative space-y-6 parchment-border">
        
        <!-- Header -->
        <div class="flex items-center justify-between border-b border-stone-200 dark:border-stone-800 pb-3">
          <div class="flex items-center gap-2.5">
            <span class="p-2 rounded-xl bg-amber-600/15 text-amber-600">
              ${icons.grid('w-5 h-5')}
            </span>
            <div>
              <h2 class="text-xl sm:text-2xl font-display font-bold text-[var(--accent-vermilion)] leading-tight">
                Sacred Tools & Contemplation
              </h2>
              <p class="text-xs text-[var(--text-muted)] font-serif italic">
                Instruments for prayer, fasting, peace, and spiritual growth
              </p>
            </div>
          </div>

          <button id="btn-close-tools" class="p-2 text-stone-400 hover:text-[var(--text-primary)] rounded-lg transition" title="Close">
            ${icons.close('w-5 h-5')}
          </button>
        </div>

        <!-- Sections Grid -->
        <div class="space-y-5">
          ${toolsSections
            .map(
              (section) => `
            <div class="space-y-2">
              <h3 class="text-[11px] font-sans font-bold uppercase tracking-wider text-[var(--text-muted)] px-1">
                ${section.category}
              </h3>
              
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                ${section.items
                  .map(
                    (item) => `
                  <button data-tool-id="${item.id}" data-tool-type="${
                      item.isTab ? 'tab' : 'modal'
                    }" class="w-full text-left p-3.5 rounded-2xl border ${
                      item.color
                    } hover:border-amber-600 hover:shadow-md transition flex items-start gap-3 group active:scale-[0.98] cursor-pointer">
                    <div class="p-2 rounded-xl bg-[var(--bg-card)] border border-stone-200 dark:border-stone-800 flex-shrink-0 group-hover:scale-110 transition">
                      ${icons[item.icon] ? icons[item.icon]('w-5 h-5') : icons.sun('w-5 h-5')}
                    </div>
                    <div class="flex-1 min-w-0">
                      <div class="flex items-center justify-between gap-1">
                        <span class="font-display font-bold text-sm text-[var(--text-primary)] group-hover:text-amber-600 transition">
                          ${item.label}
                        </span>
                        ${
                          item.badge
                            ? `<span class="bg-amber-600 text-white font-mono font-bold text-[9px] px-1.5 py-0.5 rounded-full uppercase">${item.badge}</span>`
                            : ''
                        }
                      </div>
                      <p class="text-[11px] text-[var(--text-muted)] font-serif italic mt-0.5 line-clamp-2 leading-relaxed">
                        ${item.desc}
                      </p>
                    </div>
                  </button>
                `
                  )
                  .join('')}
              </div>
            </div>
          `
            )
            .join('')}
        </div>

        <!-- Footer Motto -->
        <div class="border-t border-stone-200 dark:border-stone-800 pt-3 text-center">
          <p class="text-xs italic text-[var(--text-muted)] font-serif">
            «Ora et Labora» • All tools run 100% offline with zero cloud tracking.
          </p>
        </div>

      </div>
    </div>
  `;

  // Close Listener
  container.querySelector('#btn-close-tools').addEventListener('click', onClose);

  // Tool Item Click Listeners
  container.querySelectorAll('button[data-tool-id]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const toolId = btn.getAttribute('data-tool-id');
      const toolType = btn.getAttribute('data-tool-type');
      onClose();
      if (toolType === 'tab') {
        onNavigate(toolId);
      } else {
        onOpenModal(toolId);
      }
    });
  });
}
