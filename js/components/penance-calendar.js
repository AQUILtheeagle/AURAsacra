// Penitential Days, Fasting, Abstinence & Liturgical Saints Calendar for Aura Sacra
import {
  TRADITIONS,
  getDayPenanceStatus,
  getMonthPenanceDays,
  PENANCE_GUIDE,
  getTraditionMeta
} from '../data/penance.js';
import {
  getSaintsForDate,
  getTodaySaints,
  LITURGICAL_COLORS,
  getLiturgicalColorMeta,
  getLocalizedSaint
} from '../data/saints.js';
import { icons } from '../icons.js';
import { getSetting, saveSetting } from '../db.js';
import { t, getLanguage } from '../i18n.js';

function getSaintName(saint, lang = 'it') {
  if (!saint) return '';
  const loc = getLocalizedSaint(saint, lang);
  return loc ? loc.name : (saint.name || '');
}

let activeTradition = 'universal';
let currentDisplayDate = new Date();
let selectedDayData = null;

export async function renderPenanceCalendar(container, onOpenShareCard) {
  // Correlate calendar directly with the user's saved faith belief (confession)
  const userConfession = (await getSetting('user_confession')) || (await getSetting('confession', 'catholic'));
  const normalizedTradition =
    userConfession === 'orthodox' || userConfession === 'eastern' ? 'orthodox' :
    userConfession === 'protestant' ? 'protestant' :
    userConfession === 'traditional' ? 'traditional' :
    userConfession === 'ecumenical' ? 'ecumenical' :
    'catholic';

  activeTradition = await getSetting('penance_tradition', normalizedTradition);
  const userNationality = ((await getSetting('user_nationality', 'universal')) || 'universal').toLowerCase();
  const today = new Date();
  currentDisplayDate = new Date(today.getFullYear(), today.getMonth(), 1);
  selectedDayData = getDayPenanceStatus(today, activeTradition, getLanguage());
  selectedDayData.date = today;

  function render() {
    const lang = getLanguage();
    const today = new Date();
    const todayStatus = getDayPenanceStatus(today, activeTradition, lang);
    todayStatus.date = today;
    const todaySaints = getTodaySaints(activeTradition, userNationality, lang);

    const curYear = currentDisplayDate.getFullYear();
    const curMonth = currentDisplayDate.getMonth();
    const monthName = getLocalizedMonthName(curMonth, lang);
    const monthDays = getMonthPenanceDays(curYear, curMonth, activeTradition, lang);

    // Calculate grid padding for first day of month (0 = Sun, 1 = Mon...)
    const firstDayIndex = new Date(curYear, curMonth, 1).getDay();

    const selected = selectedDayData || todayStatus;
    const selectedDate = selected.date || today;
    const isInspectingToday = isSameDate(selectedDate, today);
    const selectedDaySaints = getSaintsForDate(selectedDate, activeTradition, userNationality, lang);
    const primarySelectedSaint = selectedDaySaints[0] || null;
    const locPrimarySelectedSaint = primarySelectedSaint ? getLocalizedSaint(primarySelectedSaint, lang) : null;

    container.innerHTML = `
      <div class="space-y-6 pb-32 sm:pb-24 animate-fade-in max-w-5xl mx-auto">
        
        <!-- Header & Tradition Selection -->
        <div class="bg-[var(--bg-card)] border border-stone-300 dark:border-stone-800 rounded-2xl p-5 shadow-sm space-y-4">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div class="flex items-center gap-2 text-amber-600 dark:text-amber-500 font-sans font-bold text-xs uppercase tracking-widest">
                <span>${icons.calendar('w-4 h-4')}</span>
                <span>${t('penance.badge', 'Sacred Liturgical Discipline')}</span>
              </div>
              <h1 class="text-2xl sm:text-3xl font-display font-bold text-[var(--accent-vermilion)] mt-1">
                ${t('penance.title', 'Penance, Fasting & Abstinence')}
              </h1>
              <p class="text-xs sm:text-sm text-[var(--text-muted)] font-serif italic mt-0.5">
                ${t('penance.subtitle', 'Know when to fast, abstain from meat, and sanctify your days in union with the Cross of Christ.')}
              </p>
            </div>

            <!-- Tradition Mode Segmented Control -->
            <div class="bg-[var(--bg-secondary)] p-1 rounded-xl border border-stone-300 dark:border-stone-700 flex flex-wrap sm:flex-nowrap gap-1">
              ${TRADITIONS.map(
                (trad) => {
                  const meta = getTraditionMeta(trad.id, lang);
                  return `
                <button data-tradition="${trad.id}" class="px-3 py-1.5 rounded-lg text-xs font-sans font-semibold transition cursor-pointer ${
                  activeTradition === trad.id
                    ? 'bg-amber-600 text-white shadow-sm'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-stone-500/10'
                }" title="${meta.subtitle}">
                  ${meta.name}
                </button>
              `;
                }
              ).join('')}
            </div>
          </div>

          <!-- Active Tradition Description Pill -->
          <div class="text-xs text-[var(--text-muted)] bg-[var(--bg-secondary)] px-3 py-2 rounded-xl border border-stone-200 dark:border-stone-800/80 flex items-center justify-between gap-2">
            <div>
              <strong class="text-[var(--text-primary)] font-semibold">${t('penance.activeRite', 'Active Rite:')}</strong>
              ${getTraditionMeta(activeTradition, lang).subtitle} — ${
      getTraditionMeta(activeTradition, lang).description
    }
            </div>
          </div>
        </div>

        <!-- Today's Status Banner with Saints of the Day -->
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
            <div class="space-y-1.5">
              <div class="flex flex-wrap items-center gap-2">
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
                <span class="text-xs font-mono text-[var(--text-muted)]">${t('penance.today', 'Today')} • ${formatLocalizedDate(today, lang)}</span>
              </div>
              <h2 class="text-xl sm:text-2xl font-display font-bold text-[var(--text-primary)]">
                ${todayStatus.title}
              </h2>
              <p class="text-xs sm:text-sm font-serif italic text-[var(--text-secondary)]">
                ${todayStatus.subtitle}
              </p>

              <!-- Today's Saint Highlight Pill -->
              ${todaySaints.length > 0 ? `
                <div class="pt-1 flex flex-wrap items-center gap-2">
                  <span class="text-[11px] font-sans font-bold text-amber-600 uppercase tracking-wider">${t('penance.todayCommemoration', "Today's Saint / Feast:")}</span>
                  ${todaySaints.map(s => {
                    const locS = getLocalizedSaint(s, lang);
                    const cMeta = locS.colorMeta || getLiturgicalColorMeta(locS.color, lang);
                    const cName = locS.colorName || cMeta.name;
                    const sName = locS.displayName || locS.name;
                    const rankName = locS.rankName || t(`ranks.${locS.rank}`, locS.rank);
                    return `
                      <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg border text-xs font-sans font-semibold ${cMeta.badgeClass}">
                        ${locS.nationalityMeta ? `<span title="${locS.nationalityMeta.name}">${locS.nationalityMeta.flag}</span>` : ''}
                        <span>${cMeta.symbol} ${sName}</span>
                        <span class="opacity-75 text-[10px]">(${cName} • ${rankName})</span>
                      </span>
                    `;
                  }).join('')}
                </div>
              ` : ''}
            </div>

            <!-- Quick Food Indicator Badge -->
            <div class="bg-[var(--bg-card)]/90 border border-stone-300 dark:border-stone-700 rounded-xl p-3 text-xs space-y-1 w-full sm:w-72 shadow-xs">
              <div class="flex items-center gap-1.5 font-bold text-emerald-700 dark:text-emerald-400">
                <span>✓ ${t('common.allowed', 'Allowed')}:</span>
                <span class="font-normal text-[var(--text-primary)] truncate">${todayStatus.rules.allowed.split(',')[0]} & more</span>
              </div>
              <div class="flex items-center gap-1.5 font-bold text-red-700 dark:text-red-400">
                <span>✗ ${t('common.avoid', 'Avoid')}:</span>
                <span class="font-normal text-[var(--text-primary)] truncate">${todayStatus.rules.avoid}</span>
              </div>
            </div>
          </div>

          <!-- Bottom Action Buttons on Today's Banner -->
          <div class="mt-4 pt-3 border-t border-stone-300/60 dark:border-stone-700/60 flex flex-wrap items-center justify-between gap-3 text-xs">
            <span class="text-[var(--text-muted)] italic truncate max-w-md notranslate" translate="no">
              «${todayStatus.scripture?.ref || ''}»: "${(todayStatus.scripture?.text || '').slice(0, 85)}..."
            </span>
            <button id="btn-inspect-today" class="font-bold text-amber-700 dark:text-amber-400 hover:underline flex items-center gap-1 cursor-pointer">
              <span>${t('penance.viewDayGuide', 'View Full Day Guide & Prayer')}</span>
              <span>${icons.chevronRight('w-3.5 h-3.5')}</span>
            </button>
          </div>

        </div>

        <!-- Monthly Calendar Grid Section -->
        <div class="bg-[var(--bg-card)] border border-stone-300 dark:border-stone-800 rounded-2xl p-4 sm:p-6 shadow-sm space-y-4">
          
          <!-- Month & Year Navigation Toolbar -->
          <div class="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 dark:border-stone-800 pb-3">
            <div class="flex items-center gap-2">
              <button id="btn-prev-month" class="p-2 rounded-xl border border-stone-300 dark:border-stone-700 text-[var(--text-secondary)] hover:text-amber-600 hover:border-amber-600 transition cursor-pointer" title="${t('penance.prevMonth', 'Previous Month')}">
                ${icons.chevronLeft('w-4 h-4')}
              </button>
              <h3 class="text-lg sm:text-xl font-display font-bold text-[var(--text-primary)] min-w-[160px] text-center">
                ${monthName} ${curYear}
              </h3>
              <button id="btn-next-month" class="p-2 rounded-xl border border-stone-300 dark:border-stone-700 text-[var(--text-secondary)] hover:text-amber-600 hover:border-amber-600 transition cursor-pointer" title="${t('penance.nextMonth', 'Next Month')}">
                ${icons.chevronRight('w-4 h-4')}
              </button>
            </div>

            <!-- Quick Action: Jump to Today & Liturgical Color Legend -->
            <div class="flex items-center gap-3">
              <button id="btn-jump-today" class="px-3 py-1.5 rounded-xl border border-amber-600/40 text-amber-600 hover:bg-amber-600/10 text-xs font-semibold font-sans transition cursor-pointer">
                ${t('penance.jumpToday', 'Jump to Today')}
              </button>
              
              <!-- Liturgical Colors Legend Pills (Red, Blue, Black, Ordinary) -->
              <div class="hidden xl:flex items-center gap-2.5 text-[11px] font-sans text-[var(--text-muted)] border-l border-stone-300 dark:border-stone-700 pl-3">
                <span class="flex items-center gap-1 font-semibold text-red-600 dark:text-red-400" title="${t('colors.redDesc')}">
                  <span class="w-2.5 h-2.5 rounded-full bg-red-600 dark:bg-red-500 ring-1 ring-red-400"></span>
                  <span>† ${t('colors.red', 'Red')}</span>
                </span>
                <span class="flex items-center gap-1 font-semibold text-blue-600 dark:text-blue-400" title="${t('colors.blueDesc')}">
                  <span class="w-2.5 h-2.5 rounded-full bg-blue-600 dark:bg-blue-500 ring-1 ring-blue-400"></span>
                  <span>† ${t('colors.blue', 'Blue')}</span>
                </span>
                <span class="flex items-center gap-1 font-semibold text-stone-900 dark:text-stone-200" title="${t('colors.blackDesc')}">
                  <span class="w-2.5 h-2.5 rounded-full bg-stone-800 dark:bg-stone-300 ring-1 ring-stone-600 dark:ring-stone-400"></span>
                  <span>† ${t('colors.black', 'Black')}</span>
                </span>
                <span class="flex items-center gap-1 font-normal text-stone-600 dark:text-stone-400" title="${t('colors.whiteDesc')}">
                  <span>${t('colors.white', 'Ordinary')}</span>
                </span>
              </div>
            </div>
          </div>

          <!-- Weekday Headers -->
          <div class="grid grid-cols-7 gap-1 text-center font-sans font-bold text-[11px] uppercase tracking-wider text-[var(--text-muted)] py-1">
            <span>${t('common.sun', 'Sun')}</span>
            <span>${t('common.mon', 'Mon')}</span>
            <span>${t('common.tue', 'Tue')}</span>
            <span>${t('common.wed', 'Wed')}</span>
            <span>${t('common.thu', 'Thu')}</span>
            <span class="text-purple-600 dark:text-purple-400 font-black">${t('common.friPenance', 'Fri (Penance)')}</span>
            <span>${t('common.sat', 'Sat')}</span>
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

            <!-- Month Days with Integrated Saints Indicators -->
            ${monthDays
              .map((dObj) => {
                const isToday = isSameDate(dObj.date, today);
                const isSelected = isSameDate(dObj.date, selectedDate);
                const daySaints = getSaintsForDate(dObj.date, activeTradition, userNationality, lang);
                const primarySaint = daySaints[0] || null;
                const locPrimary = primarySaint ? getLocalizedSaint(primarySaint, lang) : null;

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
                  isSelected ? 'ring-2 ring-amber-600 bg-amber-500/15 shadow-md scale-[1.02]' : ''
                } ${isToday ? 'border-2 border-amber-600 font-bold' : ''}">
                  
                  <div class="flex items-center justify-between w-full">
                    <span class="text-xs sm:text-sm font-display ${
                      isToday
                        ? 'text-amber-600 dark:text-amber-400 font-bold'
                        : 'text-[var(--text-primary)]'
                    }">
                      ${dObj.day}
                    </span>

                    <div class="flex items-center gap-1">
                      ${
                        locPrimary && locPrimary.nationalityMeta && locPrimary.nationalityMeta.flag
                          ? `<span class="text-[10px]" title="${locPrimary.nationalityMeta.name}">${locPrimary.nationalityMeta.flag}</span>`
                          : ''
                      }
                      ${
                        locPrimary && primarySaint.colorMeta && primarySaint.colorMeta.dotClass
                          ? `<span class="w-2 h-2 rounded-full ${primarySaint.colorMeta.dotClass}" title="${locPrimary.displayName || locPrimary.name} (${locPrimary.colorName || primarySaint.colorMeta.name})"></span>`
                          : ''
                      }
                    </div>
                  </div>

                  <!-- Day Indicator Badge & Saint Mini Title -->
                  <div class="w-full space-y-1">
                    ${
                      locPrimary ? `
                        <div class="text-[8.5px] sm:text-[9.5px] font-sans font-semibold truncate leading-tight ${primarySaint.colorMeta.textClass}">
                          ${primarySaint.colorMeta.symbol ? primarySaint.colorMeta.symbol + ' ' : ''}${(locPrimary.displayName || locPrimary.name).split(',')[0]}
                        </div>
                      ` : ''
                    }

                    ${
                      dObj.isPenitential
                        ? `
                      <div class="flex items-center gap-1 text-[9px] sm:text-[10px] font-sans font-semibold rounded-md px-1 py-0.5 truncate ${
                        dObj.badge.color === 'vermilion'
                          ? 'bg-red-600 text-white'
                          : dObj.badge.color === 'purple'
                          ? 'bg-purple-600 text-white'
                          : 'bg-amber-600 text-white'
                      }">
                        <span>${icons[dObj.badge.icon]('w-2.5 h-2.5')}</span>
                        <span class="truncate">${dObj.badge.label}</span>
                      </div>
                    `
                        : dObj.type === 'solemnity_dispensation'
                        ? `
                      <div class="flex items-center gap-1 text-[9px] sm:text-[10px] font-sans font-semibold rounded-md px-1 py-0.5 truncate bg-amber-500/20 text-amber-700 dark:text-amber-400 border border-amber-500/30">
                        <span>${icons.sparkles('w-2.5 h-2.5')}</span>
                        <span class="truncate">${t('penance.dispensation', 'Dispensation')}</span>
                      </div>
                    `
                        : `
                      <div class="text-[8.5px] sm:text-[9.5px] text-[var(--text-muted)] font-serif italic truncate">
                        ${t('penance.ordinary', 'Ordinary')}
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

        <!-- Selected Day Inspector Drawer / Details Card with Saints Integration -->
        <div id="day-inspector" class="bg-[var(--bg-card)] border-2 border-amber-600/50 rounded-2xl p-6 sm:p-8 shadow-xl parchment-border space-y-6 animate-fade-in">
          
          <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-stone-200 dark:border-stone-800 pb-4">
            <div class="space-y-1">
              <div class="flex flex-wrap items-center gap-2">
                <span class="text-xs font-mono uppercase tracking-widest text-amber-600 dark:text-amber-400 font-bold">
                  ${t('penance.inspection', 'Inspection of Selected Date')}
                </span>
                <span class="text-xs font-sans text-[var(--text-muted)]">•</span>
                <span class="text-xs font-mono text-[var(--text-secondary)] font-semibold">
                  ${formatLocalizedDate(selectedDate, lang)}
                </span>
              </div>

              ${locPrimarySelectedSaint ? `
                <div class="pt-1 flex items-center gap-1.5 flex-wrap">
                  ${locPrimarySelectedSaint.nationalityMeta ? `
                    <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg border border-amber-500/30 bg-amber-500/10 text-amber-800 dark:text-amber-300 text-xs font-sans font-bold" title="${locPrimarySelectedSaint.nationalityMeta.name}">
                      <span>${locPrimarySelectedSaint.nationalityMeta.flag}</span>
                      <span>${locPrimarySelectedSaint.nationalityMeta.name}</span>
                    </span>
                  ` : ''}
                  <div class="inline-flex items-center gap-2 px-3 py-1 rounded-lg border text-xs font-sans font-bold ${locPrimarySelectedSaint.colorMeta?.badgeClass || 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/30'}">
                    ${locPrimarySelectedSaint.colorMeta?.symbol ? `<span>${locPrimarySelectedSaint.colorMeta.symbol}</span>` : ''}
                    <span>${locPrimarySelectedSaint.displayName || locPrimarySelectedSaint.name}</span>
                    <span class="opacity-80 text-[10px] uppercase font-semibold">(${locPrimarySelectedSaint.colorName || locPrimarySelectedSaint.colorMeta?.name || ''} • ${locPrimarySelectedSaint.rankName || t(`ranks.${locPrimarySelectedSaint.rank}`, locPrimarySelectedSaint.rank)})</span>
                  </div>
                </div>
              ` : ''}

              <h3 class="text-2xl sm:text-3xl font-display font-bold text-[var(--accent-vermilion)] mt-1">
                ${locPrimarySelectedSaint ? (locPrimarySelectedSaint.displayName || locPrimarySelectedSaint.name) : selected.title}
              </h3>
              <p class="text-sm font-serif italic text-[var(--text-muted)] mt-0.5">
                ${locPrimarySelectedSaint && locPrimarySelectedSaint.title ? locPrimarySelectedSaint.title + ' • ' : ''}${selected.title} — ${selected.subtitle}
              </p>
            </div>

            <!-- Penance Status Badge -->
            <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border flex-shrink-0 ${
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

          <!-- Saints Commemorated on this Day (White, Blue, Red correlated) -->
          <div class="space-y-3 bg-[var(--bg-secondary)] border border-stone-300 dark:border-stone-700/80 rounded-2xl p-5 shadow-xs">
            <div class="flex items-center justify-between">
              <h4 class="text-xs font-sans font-bold uppercase tracking-wider text-amber-600 dark:text-amber-500 flex items-center gap-2">
                <span>${icons.cross('w-4 h-4')}</span>
                <span>${t('penance.saintsOnThisDay', 'Saints & Feasts Commemorated on this Day')}</span>
              </h4>
              <span class="text-[11px] font-sans text-[var(--text-muted)]">
                ${selectedDaySaints.length} ${selectedDaySaints.length === 1 ? t('penance.feast', 'Feast') : t('penance.feasts', 'Feasts')}
              </span>
            </div>

            <div class="space-y-3">
              ${selectedDaySaints.map(saint => {
                const locSaint = getLocalizedSaint(saint, lang);
                const cMeta = locSaint.colorMeta || getLiturgicalColorMeta(locSaint.color, lang);
                const cName = locSaint.colorName || cMeta.name;
                const rankName = locSaint.rankName || t(`ranks.${locSaint.rank}`, locSaint.rank);
                const saintDisplayName = locSaint.displayName || locSaint.name;

                return `
                  <div class="bg-[var(--bg-card)] border-2 ${cMeta.borderClass} rounded-xl p-4 space-y-3 shadow-xs transition hover:shadow-md">
                    
                    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-200 dark:border-stone-800 pb-2.5">
                      <div>
                        <h5 class="text-base sm:text-lg font-display font-bold text-[var(--text-primary)]">
                          ${saintDisplayName}
                        </h5>
                        <p class="text-xs font-serif italic text-[var(--text-muted)] mt-0.5">
                          ${locSaint.title}
                        </p>
                      </div>

                      <!-- Liturgical Color, Nationality & Rank Badges -->
                      <div class="flex items-center gap-1.5 flex-wrap">
                        ${locSaint.nationalityMeta ? `
                          <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg border border-amber-500/30 bg-amber-500/10 text-amber-800 dark:text-amber-300 text-xs font-sans font-bold" title="${locSaint.nationalityMeta.name}">
                            <span>${locSaint.nationalityMeta.flag}</span>
                            <span>${locSaint.nationalityMeta.name}</span>
                          </span>
                        ` : ''}
                        <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg border text-xs font-sans font-bold ${cMeta.badgeClass}">
                          ${cMeta.symbol ? `<span>${cMeta.symbol}</span>` : ''}
                          <span>${cName}</span>
                        </span>
                        <span class="inline-flex items-center px-2.5 py-1 rounded-lg border border-stone-300 dark:border-stone-700 bg-[var(--bg-secondary)] text-[var(--text-secondary)] text-xs font-sans font-semibold uppercase">
                          ${rankName}
                        </span>
                      </div>
                    </div>

                    <!-- Saint Spiritual Quote -->
                    ${locSaint.quote ? `
                      <blockquote class="text-sm font-serif italic text-[var(--text-primary)] border-l-4 border-amber-600/70 pl-3 py-1 bg-amber-500/5 rounded-r-lg">
                        ${locSaint.quote}
                      </blockquote>
                    ` : ''}

                    <!-- Saint Spiritual Bio -->
                    ${locSaint.bio ? `
                      <p class="text-xs sm:text-sm text-[var(--text-secondary)] font-serif leading-relaxed">
                        ${locSaint.bio}
                      </p>
                    ` : ''}

                    <!-- Footer: Scripture & Share Quote Action -->
                    <div class="flex items-center justify-between pt-2 border-t border-stone-200 dark:border-stone-800 text-xs">
                      <span class="font-mono text-amber-600 font-semibold">
                        📖 ${locSaint.scriptureRef || (lang === 'it' ? 'Evangelo di Cristo' : 'Gospel of Christ')}
                      </span>

                      ${locSaint.quote ? `
                        <button class="btn-share-calendar-saint flex items-center gap-1 text-amber-600 hover:text-amber-700 font-sans font-semibold border border-amber-600/30 hover:border-amber-600 px-2.5 py-1 rounded-lg transition cursor-pointer" data-quote="${encodeURIComponent(locSaint.quote)}" data-author="${encodeURIComponent(saintDisplayName)}">
                          ${icons.share('w-3.5 h-3.5')}
                          <span>${t('saints.shareQuote', 'Share Quote')}</span>
                        </button>
                      ` : ''}
                    </div>

                  </div>
                `;
              }).join('')}
            </div>

            <!-- Liturgical Color Guidelines Footer -->
            <div class="text-[11px] text-[var(--text-muted)] pt-1 flex flex-wrap items-center gap-3">
              <span class="flex items-center gap-1"><strong class="text-red-600 dark:text-red-400">† ${t('colors.red', 'Red')}:</strong> ${t('colors.redDesc')}</span>
              <span class="flex items-center gap-1"><strong class="text-blue-600 dark:text-blue-400">† ${t('colors.blue', 'Blue')}:</strong> ${t('colors.blueDesc')}</span>
              <span class="flex items-center gap-1"><strong class="text-stone-900 dark:text-stone-200">† ${t('colors.black', 'Black')}:</strong> ${t('colors.blackDesc')}</span>
              <span class="flex items-center gap-1"><strong class="text-stone-600 dark:text-stone-400">${t('colors.white', 'Ordinary')}:</strong> ${t('colors.whiteDesc')}</span>
            </div>
          </div>

          <!-- Rules Grid: Fasting, Abstinence, Allowed, Avoid -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <!-- Fasting Rule Card -->
            <div class="bg-[var(--bg-secondary)] border border-stone-300 dark:border-stone-700 rounded-xl p-4 space-y-2">
              <div class="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
                <span>${icons.bread('w-4 h-4')}</span>
                <span>${t('penance.fastingDiscipline', 'Fasting Discipline (Quantity of Meals)')}</span>
              </div>
              <p class="text-sm text-[var(--text-primary)] leading-relaxed">
                ${selected.rules.fasting}
              </p>
            </div>

            <!-- Abstinence Rule Card -->
            <div class="bg-[var(--bg-secondary)] border border-stone-300 dark:border-stone-700 rounded-xl p-4 space-y-2">
              <div class="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-700 dark:text-purple-400">
                <span>${icons.fish('w-4 h-4')}</span>
                <span>${t('penance.abstinenceDiscipline', 'Abstinence Discipline (Quality of Food)')}</span>
              </div>
              <p class="text-sm text-[var(--text-primary)] leading-relaxed">
                ${selected.rules.abstinence}
              </p>
            </div>

            <!-- Foods Allowed -->
            <div class="bg-emerald-500/5 border border-emerald-500/30 rounded-xl p-4 space-y-1.5">
              <div class="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                <span>${t('penance.allowedTable', '✓ Permitted Table')}</span>
              </div>
              <p class="text-xs sm:text-sm text-[var(--text-primary)] leading-relaxed">
                ${selected.rules.allowed}
              </p>
            </div>

            <!-- Foods to Avoid -->
            <div class="bg-red-500/5 border border-red-500/30 rounded-xl p-4 space-y-1.5">
              <div class="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-red-700 dark:text-red-400">
                <span>${t('penance.avoidTable', '✗ Prohibited or Restricted')}</span>
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
                ${t('penance.theologicalMeaning', 'Theological & Biblical Meaning')}
              </h4>
              <p class="text-sm sm:text-base font-serif text-[var(--text-primary)] leading-relaxed mt-1">
                ${selected.theology}
              </p>
            </div>

            <div class="border-t border-stone-300/60 dark:border-stone-700/60 pt-3 notranslate" translate="no">
              <span class="text-xs font-mono font-bold text-amber-600 notranslate" translate="no">— ${selected.scripture?.ref || ''}</span>
              <p class="text-xs sm:text-sm font-serif italic text-[var(--text-primary)] mt-0.5 notranslate" translate="no">
                «${selected.scripture?.text || ''}»
              </p>
            </div>
          </div>

          <!-- Prayer of Strength -->
          <div class="bg-amber-600/10 border-l-4 border-amber-600 rounded-r-xl p-4 space-y-1 notranslate" translate="no">
            <span class="text-[11px] font-sans font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
              ${t('penance.prayerOfDay', 'Penitential Prayer of the Day')}
            </span>
            <p class="text-xs sm:text-sm font-serif italic text-[var(--text-primary)] leading-relaxed notranslate" translate="no">
              «${selected.prayer}»
            </p>
          </div>

        </div>

        <!-- Comprehensive Spiritual Guide & Three Pillars -->
        <div class="bg-[var(--bg-card)] border border-stone-300 dark:border-stone-800 rounded-2xl p-5 sm:p-6 shadow-sm space-y-6">
          
          <div class="text-center max-w-xl mx-auto space-y-1">
            <h3 class="text-xl sm:text-2xl font-display font-bold text-[var(--accent-vermilion)]">
              ${t('penance.pillarsTitle', 'The Three Pillars of Gospel Penance')}
            </h3>
            <p class="text-xs sm:text-sm font-serif italic text-[var(--text-muted)]">
              ${t('penance.pillarsSubtitle', '«When you give alms... when you pray... when you fast» (Matthew 6)')}
            </p>
          </div>

          <!-- 3 Pillars Cards -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="bg-[var(--bg-secondary)] border border-stone-200 dark:border-stone-800 rounded-xl p-4 text-center space-y-2">
              <div class="w-10 h-10 rounded-full bg-amber-600/15 text-amber-600 flex items-center justify-center mx-auto">
                ${icons.flame('w-5 h-5')}
              </div>
              <h4 class="font-display font-bold text-base text-[var(--text-primary)]">${t('penance.prayerPillarTitle', '1. Interior Prayer')}</h4>
              <p class="text-xs text-[var(--text-secondary)] font-serif leading-relaxed">${t('penance.prayerPillarDesc')}</p>
            </div>

            <div class="bg-[var(--bg-secondary)] border border-stone-200 dark:border-stone-800 rounded-xl p-4 text-center space-y-2">
              <div class="w-10 h-10 rounded-full bg-amber-600/15 text-amber-600 flex items-center justify-center mx-auto">
                ${icons.bread('w-5 h-5')}
              </div>
              <h4 class="font-display font-bold text-base text-[var(--text-primary)]">${t('penance.fastingPillarTitle', '2. Bodily Fasting')}</h4>
              <p class="text-xs text-[var(--text-secondary)] font-serif leading-relaxed">${t('penance.fastingPillarDesc')}</p>
            </div>

            <div class="bg-[var(--bg-secondary)] border border-stone-200 dark:border-stone-800 rounded-xl p-4 text-center space-y-2">
              <div class="w-10 h-10 rounded-full bg-amber-600/15 text-amber-600 flex items-center justify-center mx-auto">
                ${icons.heart('w-5 h-5')}
              </div>
              <h4 class="font-display font-bold text-base text-[var(--text-primary)]">${t('penance.almsPillarTitle', '3. Generous Almsgiving')}</h4>
              <p class="text-xs text-[var(--text-secondary)] font-serif leading-relaxed">${t('penance.almsPillarDesc')}</p>
            </div>
          </div>

          <!-- Lawful Canonical Exemptions -->
          <div class="bg-amber-500/5 border border-amber-600/30 rounded-xl p-4 space-y-2">
            <div class="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
              <span>${icons.shield('w-4 h-4')}</span>
              <span>${t('penance.exemptionsTitle', 'Lawful Canonical Exemptions (Who is Excused?)')}</span>
            </div>
            <p class="text-xs text-[var(--text-secondary)]">
              ${t('penance.exemptionsDesc', 'The Church exercises maternal care. God desires mercy and not sacrifice (Mt 9:13). Those who are sick, pregnant, elderly, or engaged in exhausting manual labor are excused from food fasts and invited to practice prayer and acts of charity.')}
            </p>
            <ul class="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-[var(--text-primary)] list-disc list-inside">
              ${(Array.isArray(t('penance.exemptionsList')) ? t('penance.exemptionsList') : PENANCE_GUIDE.exemptions).map((ex) => `<li>${ex}</li>`).join('')}
            </ul>
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
        await saveSetting('user_confession', activeTradition);
        await saveSetting('confession', activeTradition);
        try {
          localStorage.setItem('aurasacra_user_confession', activeTradition);
        } catch (e) {}
        selectedDayData = getDayPenanceStatus(selectedDayData?.date || new Date(), activeTradition, lang);
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
      selectedDayData = getDayPenanceStatus(now, activeTradition, lang);
      selectedDayData.date = now;
      render();
      const inspectorEl = container.querySelector('#day-inspector');
      if (inspectorEl) {
        inspectorEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });

    // 5. Inspect Today from banner
    const inspectTodayBtn = container.querySelector('#btn-inspect-today');
    if (inspectTodayBtn) {
      inspectTodayBtn.addEventListener('click', () => {
        selectedDayData = todayStatus;
        selectedDayData.date = today;
        render();
        const inspectorEl = container.querySelector('#day-inspector');
        if (inspectorEl) {
          inspectorEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    }

    // 6. Calendar Day Click
    container.querySelectorAll('button[data-calendar-day]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const dayNum = parseInt(btn.getAttribute('data-calendar-day'), 10);
        const clickedDate = new Date(curYear, curMonth, dayNum);
        selectedDayData = getDayPenanceStatus(clickedDate, activeTradition, lang);
        selectedDayData.date = clickedDate;
        render();
        const inspectorEl = container.querySelector('#day-inspector');
        if (inspectorEl) {
          inspectorEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

    // 7. Share Saint Quote Buttons
    container.querySelectorAll('.btn-share-calendar-saint').forEach((btn) => {
      btn.addEventListener('click', () => {
        const quote = decodeURIComponent(btn.getAttribute('data-quote') || '');
        const author = decodeURIComponent(btn.getAttribute('data-author') || '');
        if (onOpenShareCard) {
          onOpenShareCard(quote, author);
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

  function getLocalizedMonthName(monthIndex, lang) {
    const key = [
      'january', 'february', 'march', 'april', 'may', 'june',
      'july', 'august', 'september', 'october', 'november', 'december'
    ][monthIndex];
    return t(`common.${key}`, new Date(2026, monthIndex, 1).toLocaleDateString(lang, { month: 'long' }));
  }

  function formatLocalizedDate(d, lang) {
    try {
      return d.toLocaleDateString(lang, {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch (e) {
      return d.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    }
  }

  render();
}
