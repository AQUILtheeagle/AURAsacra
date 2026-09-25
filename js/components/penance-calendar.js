// Penitential Days, Fasting & Abstinence Calendar for Aura Sacra
import {
  TRADITIONS,
  getDayPenanceStatus,
  getMonthPenanceDays,
  PENANCE_GUIDE
} from '../data/penance.js';
import { icons } from '../icons.js';
import { getSetting, saveSetting } from '../db.js';

let activeTradition = 'universal';
let currentDisplayDate = new Date();
let selectedDayData = null;

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

export async function renderPenanceCalendar(container) {
  // Load saved tradition preference
  activeTradition = await getSetting('penance_tradition', 'universal');
  const today = new Date();
  currentDisplayDate = new Date(today.getFullYear(), today.getMonth(), 1);
  selectedDayData = getDayPenanceStatus(today, activeTradition);

  function render() {
    const today = new Date();
    const todayStatus = getDayPenanceStatus(today, activeTradition);

    const curYear = currentDisplayDate.getFullYear();
    const curMonth = currentDisplayDate.getMonth();
    const monthName = MONTH_NAMES[curMonth];
    const monthDays = getMonthPenanceDays(curYear, curMonth, activeTradition);

    // Calculate grid padding for first day of month (0 = Sun, 1 = Mon...)
    const firstDayIndex = new Date(curYear, curMonth, 1).getDay();

    const selected = selectedDayData || todayStatus;
    const isInspectingToday = isSameDate(selected.date || today, today);

    container.innerHTML = `
      <div class="space-y-6 pb-20 animate-fade-in max-w-5xl mx-auto">
        
        <!-- Header & Tradition Selection -->
        <div class="bg-[var(--bg-card)] border border-stone-300 dark:border-stone-800 rounded-2xl p-5 shadow-sm space-y-4">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div class="flex items-center gap-2 text-amber-600 dark:text-amber-500 font-sans font-bold text-xs uppercase tracking-widest">
                <span>${icons.calendar('w-4 h-4')}</span>
                <span>Sacred Liturgical Discipline</span>
              </div>
              <h1 class="text-2xl sm:text-3xl font-display font-bold text-[var(--accent-vermilion)] mt-1">
                Penance, Fasting & Abstinence
              </h1>
              <p class="text-xs sm:text-sm text-[var(--text-muted)] font-serif italic mt-0.5">
                Know when to fast, abstain from meat, and sanctify your days in union with the Cross of Christ.
              </p>
            </div>

            <!-- Tradition Mode Segmented Control -->
            <div class="bg-[var(--bg-secondary)] p-1 rounded-xl border border-stone-300 dark:border-stone-700 flex flex-wrap sm:flex-nowrap gap-1">
              ${TRADITIONS.map(
                (trad) => `
                <button data-tradition="${trad.id}" class="px-3 py-1.5 rounded-lg text-xs font-sans font-semibold transition ${
                  activeTradition === trad.id
                    ? 'bg-amber-600 text-white shadow-sm'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-stone-500/10'
                }" title="${trad.subtitle}">
                  ${trad.name}
                </button>
              `
              ).join('')}
            </div>
          </div>

          <!-- Active Tradition Description Pill -->
          <div class="text-xs text-[var(--text-muted)] bg-[var(--bg-secondary)] px-3 py-2 rounded-xl border border-stone-200 dark:border-stone-800/80 flex items-center justify-between gap-2">
            <div>
              <strong class="text-[var(--text-primary)] font-semibold">Active Rite:</strong>
              ${TRADITIONS.find((t) => t.id === activeTradition)?.subtitle} — ${
      TRADITIONS.find((t) => t.id === activeTradition)?.description
    }
            </div>
          </div>
        </div>

        <!-- Today's Status Banner -->
        <div class="rounded-2xl p-5 sm:p-6 shadow-md border-2 relative overflow-hidden transition ${
          todayStatus.badge.color === 'vermilion'
            ? 'bg-red-500/10 border-red-600/70 text-red-950 dark:text-red-100'
            : todayStatus.badge.color === 'purple'
            ? 'bg-purple-500/10 border-purple-600/70 text-purple-950 dark:text-purple-100'
            : todayStatus.badge.color === 'gold'
            ? 'bg-amber-500/10 border-amber-500/70 text-amber-950 dark:text-amber-100'
            : 'bg-[var(--bg-card)] border-stone-300 dark:border-stone-800'
        } parchment-border">
          
          <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div class="space-y-1">
              <div class="flex items-center gap-2">
                <span class="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                  todayStatus.badge.color === 'vermilion'
                    ? 'bg-red-600 text-white'
                    : todayStatus.badge.color === 'purple'
                    ? 'bg-purple-600 text-white'
                    : todayStatus.badge.color === 'gold'
                    ? 'bg-amber-600 text-white'
                    : 'bg-stone-300 dark:bg-stone-700 text-[var(--text-primary)]'
                }">
                  <span>${icons[todayStatus.badge.icon]('w-3.5 h-3.5')}</span>
                  <span>${todayStatus.badge.label}</span>
                </span>
                <span class="text-xs font-mono text-[var(--text-muted)]">Today • ${formatDateString(today)}</span>
              </div>
              <h2 class="text-xl sm:text-2xl font-display font-bold text-[var(--text-primary)]">
                ${todayStatus.title}
              </h2>
              <p class="text-xs sm:text-sm font-serif italic text-[var(--text-secondary)]">
                ${todayStatus.subtitle}
              </p>
            </div>

            <!-- Quick Food Indicator Badge -->
            <div class="bg-[var(--bg-card)]/90 border border-stone-300 dark:border-stone-700 rounded-xl p-3 text-xs space-y-1 w-full sm:w-72 shadow-xs">
              <div class="flex items-center gap-1.5 font-bold text-emerald-700 dark:text-emerald-400">
                <span>✓ Allowed:</span>
                <span class="font-normal text-[var(--text-primary)] truncate">${todayStatus.rules.allowed.split(',')[0]} & more</span>
              </div>
              <div class="flex items-center gap-1.5 font-bold text-red-700 dark:text-red-400">
                <span>✗ Avoid:</span>
                <span class="font-normal text-[var(--text-primary)] truncate">${todayStatus.rules.avoid}</span>
              </div>
            </div>
          </div>

          <!-- Bottom Action Buttons on Today's Banner -->
          <div class="mt-4 pt-3 border-t border-stone-300/60 dark:border-stone-700/60 flex flex-wrap items-center justify-between gap-3 text-xs">
            <span class="text-[var(--text-muted)] italic">
              «${todayStatus.scripture.ref}»: "${todayStatus.scripture.text.slice(0, 90)}..."
            </span>
            <button id="btn-inspect-today" class="font-bold text-amber-700 dark:text-amber-400 hover:underline flex items-center gap-1 cursor-pointer">
              <span>View Full Day Guide & Prayer</span>
              <span>${icons.chevronRight('w-3.5 h-3.5')}</span>
            </button>
          </div>

        </div>

        <!-- Monthly Calendar Grid Section -->
        <div class="bg-[var(--bg-card)] border border-stone-300 dark:border-stone-800 rounded-2xl p-4 sm:p-6 shadow-sm space-y-4">
          
          <!-- Month & Year Navigation Toolbar -->
          <div class="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 dark:border-stone-800 pb-3">
            <div class="flex items-center gap-2">
              <button id="btn-prev-month" class="p-2 rounded-xl border border-stone-300 dark:border-stone-700 text-[var(--text-secondary)] hover:text-amber-600 hover:border-amber-600 transition" title="Previous Month">
                ${icons.chevronLeft('w-4 h-4')}
              </button>
              <h3 class="text-lg sm:text-xl font-display font-bold text-[var(--text-primary)] min-w-[160px] text-center">
                ${monthName} ${curYear}
              </h3>
              <button id="btn-next-month" class="p-2 rounded-xl border border-stone-300 dark:border-stone-700 text-[var(--text-secondary)] hover:text-amber-600 hover:border-amber-600 transition" title="Next Month">
                ${icons.chevronRight('w-4 h-4')}
              </button>
            </div>

            <!-- Quick Action: Jump to Today & Legend -->
            <div class="flex items-center gap-2">
              <button id="btn-jump-today" class="px-3 py-1.5 rounded-xl border border-amber-600/40 text-amber-600 hover:bg-amber-600/10 text-xs font-semibold font-sans transition">
                Today
              </button>
              
              <!-- Legend Pills -->
              <div class="hidden lg:flex items-center gap-2 text-[11px] font-sans text-[var(--text-muted)] border-l border-stone-300 dark:border-stone-700 pl-3">
                <span class="flex items-center gap-1"><span class="w-2.5 h-2.5 rounded-full bg-red-600"></span> Strict Fast</span>
                <span class="flex items-center gap-1"><span class="w-2.5 h-2.5 rounded-full bg-purple-600"></span> Abstinence</span>
                <span class="flex items-center gap-1"><span class="w-2.5 h-2.5 rounded-full bg-amber-500"></span> Ember Day</span>
                <span class="flex items-center gap-1"><span class="w-2.5 h-2.5 rounded-full bg-emerald-500"></span> Dispensation</span>
              </div>
            </div>
          </div>

          <!-- Weekday Headers -->
          <div class="grid grid-cols-7 gap-1 text-center font-sans font-bold text-[11px] uppercase tracking-wider text-[var(--text-muted)] py-1">
            <span>Sun</span>
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span class="text-purple-600 dark:text-purple-400 font-black">Fri (Penance)</span>
            <span>Sat</span>
          </div>

          <!-- Calendar Days Grid -->
          <div class="grid grid-cols-7 gap-1.5 sm:gap-2">
            <!-- Empty Padding Days -->
            ${Array.from({ length: firstDayIndex })
              .map(
                () => `
              <div class="h-20 sm:h-24 rounded-xl bg-stone-500/5 border border-transparent opacity-30"></div>
            `
              )
              .join('')}

            <!-- Month Days -->
            ${monthDays
              .map((dObj) => {
                const isToday = isSameDate(dObj.date, today);
                const isSelected = selected && isSameDate(dObj.date, selected.date);

                let cellColorStyle = 'border-stone-200 dark:border-stone-800 bg-[var(--bg-secondary)] hover:border-amber-600';
                if (dObj.badge.color === 'vermilion') {
                  cellColorStyle = 'border-red-600/50 bg-red-500/10 hover:border-red-600';
                } else if (dObj.badge.color === 'purple') {
                  cellColorStyle = 'border-purple-600/40 bg-purple-500/10 hover:border-purple-600';
                } else if (dObj.badge.color === 'gold') {
                  cellColorStyle = 'border-amber-500/40 bg-amber-500/10 hover:border-amber-500';
                }

                return `
                <button data-calendar-day="${dObj.day}" class="h-20 sm:h-24 rounded-xl border p-1.5 sm:p-2 flex flex-col justify-between text-left transition relative cursor-pointer group ${cellColorStyle} ${
                  isSelected ? 'ring-2 ring-amber-600 shadow-md scale-[1.02]' : ''
                } ${isToday ? 'border-2 border-amber-600 font-bold' : ''}">
                  
                  <div class="flex items-center justify-between w-full">
                    <span class="text-xs sm:text-sm font-display ${
                      isToday
                        ? 'text-amber-600 dark:text-amber-400 font-bold'
                        : 'text-[var(--text-primary)]'
                    }">
                      ${dObj.day}
                    </span>

                    ${
                      isToday
                        ? `<span class="w-1.5 h-1.5 rounded-full bg-amber-600 animate-pulse" title="Today"></span>`
                        : ''
                    }
                  </div>

                  <!-- Day Indicator Badge / Icon -->
                  <div class="w-full">
                    ${
                      dObj.isPenitential
                        ? `
                      <div class="flex items-center gap-1 text-[10px] font-sans font-semibold rounded-md px-1 py-0.5 truncate ${
                        dObj.badge.color === 'vermilion'
                          ? 'bg-red-600 text-white'
                          : dObj.badge.color === 'purple'
                          ? 'bg-purple-600 text-white'
                          : 'bg-amber-600 text-white'
                      }">
                        <span>${icons[dObj.badge.icon]('w-2.5 h-2.5')}</span>
                        <span class="truncate hidden sm:inline">${dObj.badge.label}</span>
                      </div>
                    `
                        : dObj.type === 'solemnity_dispensation'
                        ? `
                      <div class="flex items-center gap-1 text-[10px] font-sans font-semibold rounded-md px-1 py-0.5 truncate bg-amber-500/20 text-amber-700 dark:text-amber-400 border border-amber-500/30">
                        <span>${icons.sparkles('w-2.5 h-2.5')}</span>
                        <span class="truncate hidden sm:inline">Dispensed</span>
                      </div>
                    `
                        : `
                      <div class="text-[9px] text-[var(--text-muted)] font-serif italic truncate hidden sm:block">
                        Ordinary
                      </div>
                    `
                    }
                  </div>

                </button>
              `;
              })
              .join('')}
          </div>

        </div>

        <!-- Selected Day Inspector Drawer / Details Card -->
        <div id="day-inspector" class="bg-[var(--bg-card)] border-2 border-amber-600/50 rounded-2xl p-6 sm:p-8 shadow-xl parchment-border space-y-6 animate-fade-in">
          
          <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-stone-200 dark:border-stone-800 pb-4">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-xs font-mono uppercase tracking-widest text-amber-600 dark:text-amber-400 font-bold">
                  Inspection of Selected Date
                </span>
                <span class="text-xs font-sans text-[var(--text-muted)]">•</span>
                <span class="text-xs font-mono text-[var(--text-secondary)] font-semibold">
                  ${formatDateString(selected.date || today)}
                </span>
              </div>
              <h3 class="text-2xl sm:text-3xl font-display font-bold text-[var(--accent-vermilion)] mt-1">
                ${selected.title}
              </h3>
              <p class="text-sm font-serif italic text-[var(--text-muted)] mt-0.5">
                ${selected.subtitle}
              </p>
            </div>

            <!-- Badge -->
            <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border ${
              selected.badge.color === 'vermilion'
                ? 'bg-red-600 text-white border-red-700 shadow-sm'
                : selected.badge.color === 'purple'
                ? 'bg-purple-600 text-white border-purple-700 shadow-sm'
                : selected.badge.color === 'gold'
                ? 'bg-amber-600 text-white border-amber-700 shadow-sm'
                : 'bg-[var(--bg-secondary)] text-[var(--text-primary)] border-stone-300 dark:border-stone-700'
            }">
              <span>${icons[selected.badge.icon]('w-4 h-4')}</span>
              <span class="font-sans font-bold text-xs uppercase tracking-wider">${selected.badge.label}</span>
            </div>
          </div>

          <!-- Rules Grid: Fasting, Abstinence, Allowed, Avoid -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <!-- Fasting Rule Card -->
            <div class="bg-[var(--bg-secondary)] border border-stone-300 dark:border-stone-700 rounded-xl p-4 space-y-2">
              <div class="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
                <span>${icons.bread('w-4 h-4')}</span>
                <span>Fasting Discipline (Quantity of Meals)</span>
              </div>
              <p class="text-sm text-[var(--text-primary)] leading-relaxed">
                ${selected.rules.fasting}
              </p>
            </div>

            <!-- Abstinence Rule Card -->
            <div class="bg-[var(--bg-secondary)] border border-stone-300 dark:border-stone-700 rounded-xl p-4 space-y-2">
              <div class="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-700 dark:text-purple-400">
                <span>${icons.fish('w-4 h-4')}</span>
                <span>Abstinence Discipline (Quality of Food)</span>
              </div>
              <p class="text-sm text-[var(--text-primary)] leading-relaxed">
                ${selected.rules.abstinence}
              </p>
            </div>

            <!-- Foods Allowed -->
            <div class="bg-emerald-500/5 border border-emerald-500/30 rounded-xl p-4 space-y-1.5">
              <div class="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                <span>✓ Permitted Table</span>
              </div>
              <p class="text-xs sm:text-sm text-[var(--text-primary)] leading-relaxed">
                ${selected.rules.allowed}
              </p>
            </div>

            <!-- Foods to Avoid -->
            <div class="bg-red-500/5 border border-red-500/30 rounded-xl p-4 space-y-1.5">
              <div class="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-red-700 dark:text-red-400">
                <span>✗ Prohibited or Restricted</span>
              </div>
              <p class="text-xs sm:text-sm text-[var(--text-primary)] leading-relaxed">
                ${selected.rules.avoid}
              </p>
            </div>

          </div>

          <!-- Theological & Biblical Foundations -->
          <div class="bg-[var(--bg-parchment)] border border-stone-300/80 dark:border-stone-700/80 rounded-xl p-5 space-y-3">
            <div>
              <h4 class="text-xs font-sans font-bold uppercase tracking-wider text-[var(--accent-vermilion)]">
                Theological Meaning
              </h4>
              <p class="text-sm sm:text-base font-serif text-[var(--text-primary)] leading-relaxed mt-1">
                ${selected.theology}
              </p>
            </div>

            <div class="border-t border-stone-300/60 dark:border-stone-700/60 pt-3">
              <span class="text-xs font-mono font-bold text-amber-600">— ${selected.scripture.ref}</span>
              <p class="text-xs sm:text-sm font-serif italic text-[var(--text-primary)] mt-0.5">
                "${selected.scripture.text}"
              </p>
            </div>
          </div>

          <!-- Prayer of Strength -->
          <div class="bg-amber-600/10 border-l-4 border-amber-600 rounded-r-xl p-4 space-y-1">
            <span class="text-[11px] font-sans font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
              Penitential Prayer of the Day
            </span>
            <p class="text-xs sm:text-sm font-serif italic text-[var(--text-primary)] leading-relaxed">
              «${selected.prayer}»
            </p>
          </div>

        </div>

        <!-- Comprehensive Spiritual Guide & Patristic Wisdom Accordion -->
        <div class="bg-[var(--bg-card)] border border-stone-300 dark:border-stone-800 rounded-2xl p-5 sm:p-6 shadow-sm space-y-6">
          
          <div class="text-center max-w-xl mx-auto space-y-1">
            <h3 class="text-xl sm:text-2xl font-display font-bold text-[var(--accent-vermilion)]">
              The Three Pillars of Gospel Penance
            </h3>
            <p class="text-xs sm:text-sm font-serif italic text-[var(--text-muted)]">
              «When you give alms... when you pray... when you fast» (Matthew 6)
            </p>
          </div>

          <!-- 3 Pillars Cards -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            ${PENANCE_GUIDE.pillars
              .map(
                (p) => `
              <div class="bg-[var(--bg-secondary)] border border-stone-200 dark:border-stone-800 rounded-xl p-4 text-center space-y-2">
                <div class="w-10 h-10 rounded-full bg-amber-600/15 text-amber-600 flex items-center justify-center mx-auto">
                  ${icons[p.icon]('w-5 h-5')}
                </div>
                <h4 class="font-display font-bold text-base text-[var(--text-primary)]">${p.title}</h4>
                <p class="text-xs text-[var(--text-secondary)] font-serif leading-relaxed">${p.desc}</p>
              </div>
            `
              )
              .join('')}
          </div>

          <!-- Fasting vs. Abstinence Definitions -->
          <div class="space-y-3 pt-2 border-t border-stone-200 dark:border-stone-800">
            <h4 class="text-sm font-sans font-bold uppercase tracking-wider text-[var(--text-primary)]">
              Canonical & Spiritual Definitions
            </h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
              ${PENANCE_GUIDE.definitions
                .map(
                  (d) => `
                <div class="bg-[var(--bg-secondary)] border border-stone-200 dark:border-stone-800 rounded-xl p-4 space-y-1">
                  <div class="flex items-center justify-between">
                    <strong class="text-sm font-display font-bold text-[var(--accent-vermilion)]">${d.term}</strong>
                    <span class="text-[10px] uppercase font-mono text-amber-600 font-bold">${d.summary}</span>
                  </div>
                  <p class="text-xs text-[var(--text-secondary)] leading-relaxed pt-1">
                    ${d.details}
                  </p>
                </div>
              `
                )
                .join('')}
            </div>
          </div>

          <!-- Lawful Canonical Exemptions -->
          <div class="bg-amber-500/5 border border-amber-600/30 rounded-xl p-4 space-y-2">
            <div class="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
              <span>${icons.shield('w-4 h-4')}</span>
              <span>Lawful Canonical Exemptions (Who is Excused?)</span>
            </div>
            <p class="text-xs text-[var(--text-secondary)]">
              The Church exercises maternal care. God desires mercy and not sacrifice (Mt 9:13). Those in the following conditions are naturally excused from the physical fast:
            </p>
            <ul class="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-[var(--text-primary)] list-disc list-inside">
              ${PENANCE_GUIDE.exemptions.map((ex) => `<li>${ex}</li>`).join('')}
            </ul>
            <p class="text-[11px] text-[var(--text-muted)] italic pt-1">
              Those excused from food fasts are warmly invited to practice spiritual fasting (refraining from idle talk, television, social media) or performing an act of charity.
            </p>
          </div>

          <!-- Patristic Quotes Carousel / Cards -->
          <div class="space-y-3 pt-2 border-t border-stone-200 dark:border-stone-800">
            <h4 class="text-sm font-sans font-bold uppercase tracking-wider text-[var(--text-primary)]">
              Voices of the Holy Fathers
            </h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              ${PENANCE_GUIDE.patristicQuotes
                .map(
                  (q) => `
                <div class="bg-[var(--bg-secondary)] border border-stone-200 dark:border-stone-800 rounded-xl p-3.5 space-y-1">
                  <div class="text-xs font-sans font-bold text-amber-700 dark:text-amber-400">${q.author}</div>
                  <p class="text-xs font-serif italic text-[var(--text-secondary)] leading-relaxed">
                    «${q.quote}»
                  </p>
                </div>
              `
                )
                .join('')}
            </div>
          </div>

        </div>

      </div>
    `;

    // Event Listeners
    // 1. Tradition Switcher Buttons
    container.querySelectorAll('button[data-tradition]').forEach((btn) => {
      btn.addEventListener('click', async () => {
        activeTradition = btn.getAttribute('data-tradition');
        await saveSetting('penance_tradition', activeTradition);
        selectedDayData = getDayPenanceStatus(selectedDayData?.date || new Date(), activeTradition);
        render();
      });
    });

    // 2. Previous Month
    container.querySelector('#btn-prev-month').addEventListener('click', () => {
      currentDisplayDate = new Date(
        currentDisplayDate.getFullYear(),
        currentDisplayDate.getMonth() - 1,
        1
      );
      render();
    });

    // 3. Next Month
    container.querySelector('#btn-next-month').addEventListener('click', () => {
      currentDisplayDate = new Date(
        currentDisplayDate.getFullYear(),
        currentDisplayDate.getMonth() + 1,
        1
      );
      render();
    });

    // 4. Jump to Today
    container.querySelector('#btn-jump-today').addEventListener('click', () => {
      const now = new Date();
      currentDisplayDate = new Date(now.getFullYear(), now.getMonth(), 1);
      selectedDayData = getDayPenanceStatus(now, activeTradition);
      render();
    });

    // 5. Inspect Today from banner
    const inspectTodayBtn = container.querySelector('#btn-inspect-today');
    if (inspectTodayBtn) {
      inspectTodayBtn.addEventListener('click', () => {
        selectedDayData = todayStatus;
        render();
        const inspectorEl = container.querySelector('#day-inspector');
        if (inspectorEl) {
          inspectorEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      });
    }

    // 6. Calendar Day Click
    container.querySelectorAll('button[data-calendar-day]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const dayNum = parseInt(btn.getAttribute('data-calendar-day'), 10);
        const clickedDate = new Date(curYear, curMonth, dayNum);
        selectedDayData = getDayPenanceStatus(clickedDate, activeTradition);
        render();
        const inspectorEl = container.querySelector('#day-inspector');
        if (inspectorEl) {
          inspectorEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      });
    });
  }

  function isSameDate(d1, d2) {
    if (!d1 || !d2) return false;
    return (
      d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate()
    );
  }

  function formatDateString(d) {
    return d.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  render();
}
