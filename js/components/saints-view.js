import {
  getSaintsForConfession,
  getTodaySaints,
  DAILY_SAINTS_CALENDAR,
  LITURGICAL_COLORS,
  getLiturgicalColorMeta,
  getLocalizedSaint
} from '../data/saints.js';
import { icons } from '../icons.js';
import { getSetting } from '../db.js';
import { t, getLanguage } from '../i18n.js';

let activeViewFilter = 'today'; // 'today' | 'calendar' | 'fathers'

export async function renderSaintsView(container, onOpenShareCard) {
  const lang = getLanguage();
  const confession = (await getSetting('user_confession', 'ecumenical')).toLowerCase();
  const traditionSaints = getSaintsForConfession(confession);
  const todaySaints = getTodaySaints(confession);

  // Flatten calendar saints
  const allCalendarSaints = [];
  Object.keys(DAILY_SAINTS_CALENDAR).forEach(dateKey => {
    const list = DAILY_SAINTS_CALENDAR[dateKey] || [];
    list.forEach(saint => {
      allCalendarSaints.push({
        ...saint,
        dateKey,
        colorMeta: LITURGICAL_COLORS[saint.color] || LITURGICAL_COLORS.white
      });
    });
  });

  function render() {
    let displayedSaints = [];
    if (activeViewFilter === 'today') {
      displayedSaints = todaySaints;
    } else if (activeViewFilter === 'fathers') {
      displayedSaints = traditionSaints.map(s => ({
        ...s,
        colorMeta: LITURGICAL_COLORS[s.color] || LITURGICAL_COLORS.white
      }));
    } else {
      displayedSaints = allCalendarSaints;
    }

    container.innerHTML = `
      <div class="space-y-6 pb-32 sm:pb-24 animate-fade-in max-w-5xl mx-auto">
        
        <!-- Header -->
        <div class="bg-[var(--bg-card)] border border-stone-300 dark:border-stone-800 rounded-2xl p-5 shadow-sm space-y-4">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 rounded-2xl border border-amber-500/40 bg-[var(--bg-secondary)] flex items-center justify-center text-amber-600 shadow-sm flex-shrink-0">
                ${icons.cross('w-6 h-6')}
              </div>
              <div>
                <h1 class="text-xl sm:text-2xl font-bold font-display text-[var(--accent-vermilion)]">
                  ${t('saints.title', 'Saints & Church Fathers')}
                </h1>
                <p class="text-xs sm:text-sm text-[var(--text-muted)] italic font-serif">
                  ${t('saints.subtitle', 'Cloud of Witnesses across Church history')} • <span class="capitalize font-bold text-amber-600">${t('settings.confessions.' + confession, confession)}</span>
                </p>
              </div>
            </div>

            <!-- View Filter Tabs -->
            <div class="bg-[var(--bg-secondary)] p-1 rounded-xl border border-stone-300 dark:border-stone-700 flex gap-1">
              <button data-filter="today" class="px-3 py-1.5 rounded-lg text-xs font-sans font-semibold transition cursor-pointer ${
                activeViewFilter === 'today'
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }">
                ${t('saints.filterToday', 'Today Only')} (${todaySaints.length})
              </button>
              <button data-filter="calendar" class="px-3 py-1.5 rounded-lg text-xs font-sans font-semibold transition cursor-pointer ${
                activeViewFilter === 'calendar'
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }">
                ${t('saints.calendarTitle', 'Full Year Calendar')}
              </button>
              <button data-filter="fathers" class="px-3 py-1.5 rounded-lg text-xs font-sans font-semibold transition cursor-pointer ${
                activeViewFilter === 'fathers'
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }">
                ${t('nav.spiritualLife', 'Tradition Fathers')}
              </button>
            </div>
          </div>

          <!-- Liturgical Color Legend -->
          <div class="bg-[var(--bg-secondary)] border border-stone-200 dark:border-stone-800/80 rounded-xl p-3 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div class="flex items-center gap-2">
              <span class="font-bold text-[var(--text-primary)]">${t('saints.liturgicalColor', 'Liturgical Colors:')}</span>
            </div>
            <div class="flex flex-wrap items-center gap-3 text-[11px] font-sans">
              <span class="flex items-center gap-1.5 font-semibold text-stone-700 dark:text-stone-300">
                <span class="w-2.5 h-2.5 rounded-full bg-stone-200 dark:bg-stone-300 ring-1 ring-stone-400 dark:ring-stone-500"></span>
                <span>† ${t('colors.white', 'White')}</span>
                <span class="text-[10px] text-[var(--text-muted)] font-normal hidden md:inline">(${t('colors.whiteDesc')})</span>
              </span>
              <span class="flex items-center gap-1.5 font-semibold text-blue-600 dark:text-blue-400">
                <span class="w-2.5 h-2.5 rounded-full bg-blue-600 dark:bg-blue-500 ring-1 ring-blue-400"></span>
                <span>† ${t('colors.blue', 'Blue')}</span>
                <span class="text-[10px] text-[var(--text-muted)] font-normal hidden md:inline">(${t('colors.blueDesc')})</span>
              </span>
              <span class="flex items-center gap-1.5 font-semibold text-red-600 dark:text-red-400">
                <span class="w-2.5 h-2.5 rounded-full bg-red-600 dark:bg-red-500 ring-1 ring-red-400"></span>
                <span>† ${t('colors.red', 'Red')}</span>
                <span class="text-[10px] text-[var(--text-muted)] font-normal hidden md:inline">(${t('colors.redDesc')})</span>
              </span>
            </div>
          </div>
        </div>

        <!-- Saints Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
          ${displayedSaints.map((saint) => {
            const locSaint = getLocalizedSaint(saint, lang);
            const cMeta = locSaint.colorMeta || getLiturgicalColorMeta(locSaint.color || 'white', lang);
            const cName = locSaint.colorName || cMeta.name;
            const rankName = locSaint.rankName || (locSaint.rank ? t(`ranks.${locSaint.rank}`, locSaint.rank) : t('ranks.memorial'));
            const primaryName = locSaint.displayName || locSaint.name;

            return `
              <div class="bg-[var(--bg-parchment)] border-2 ${cMeta.borderClass} rounded-2xl p-5 sm:p-6 shadow-md flex flex-col justify-between space-y-4 parchment-border hover:shadow-xl transition">
                
                <div>
                  <div class="flex items-start justify-between gap-3 border-b border-stone-200 dark:border-stone-800 pb-3">
                    <div class="space-y-0.5">
                      <h3 class="text-lg font-bold font-display text-[var(--accent-vermilion)] leading-tight">
                        ${primaryName}
                      </h3>
                      <p class="text-xs font-serif italic text-[var(--text-muted)]">${locSaint.title}</p>
                    </div>

                    <!-- Badges: Color & Rank -->
                    <div class="flex flex-col items-end gap-1 flex-shrink-0">
                      <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md border text-[11px] font-sans font-bold ${cMeta.badgeClass}">
                        <span>${cMeta.symbol}</span>
                        <span>${cName}</span>
                      </span>
                      <span class="inline-flex items-center px-2 py-0.5 rounded-md border border-stone-300 dark:border-stone-700 bg-[var(--bg-secondary)] text-[var(--text-secondary)] text-[10px] font-sans font-semibold uppercase">
                        ${rankName}
                      </span>
                    </div>
                  </div>

                  <!-- Quote -->
                  ${locSaint.quote ? `
                    <blockquote class="my-3 text-sm sm:text-base italic font-serif text-[var(--text-primary)] border-l-4 border-amber-600/70 pl-3 py-1 bg-amber-500/5 rounded-r-lg">
                      ${locSaint.quote}
                    </blockquote>
                  ` : ''}

                  <!-- Bio -->
                  ${locSaint.bio ? `
                    <p class="text-xs sm:text-sm text-[var(--text-secondary)] font-serif leading-relaxed">
                      ${locSaint.bio}
                    </p>
                  ` : ''}
                </div>

                <!-- Card Footer: Scripture Ref & Share -->
                <div class="pt-3 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between text-xs">
                  <span class="font-mono font-semibold text-amber-600">
                    📖 ${locSaint.scriptureRef || (lang === 'it' ? 'Evangelo di Cristo' : 'Gospel of Christ')}
                  </span>

                  ${locSaint.quote ? `
                    <button class="btn-share-saint flex items-center gap-1.5 font-medium text-amber-600 hover:text-amber-700 px-3 py-1 rounded-lg border border-amber-600/30 hover:border-amber-600 transition cursor-pointer" data-quote="${encodeURIComponent(locSaint.quote)}" data-name="${encodeURIComponent(primaryName)}">
                      ${icons.share('w-3.5 h-3.5')}
                      <span>${t('saints.shareQuote', 'Share Quote')}</span>
                    </button>
                  ` : ''}
                </div>

              </div>
            `;
          }).join('')}
        </div>

      </div>
    `;

    // Filter Buttons
    container.querySelectorAll('button[data-filter]').forEach((btn) => {
      btn.addEventListener('click', () => {
        activeViewFilter = btn.getAttribute('data-filter');
        render();
      });
    });

    // Share buttons
    container.querySelectorAll('.btn-share-saint').forEach((btn) => {
      btn.addEventListener('click', () => {
        const quote = decodeURIComponent(btn.getAttribute('data-quote') || '');
        const name = decodeURIComponent(btn.getAttribute('data-name') || '');
        if (onOpenShareCard) {
          onOpenShareCard(quote, name);
        }
      });
    });
  }

  render();
}
