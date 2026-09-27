// Top Navbar component for Aura Sacra
import { icons } from '../icons.js';
import { getPhaseDetails, getCurrentPhase } from '../circadian.js';
import { getCurrentScheduleStatus } from '../schedule.js';
import { getDayPenanceStatus } from '../data/penance.js';
import { getTodaySaints } from '../data/saints.js';
import { t, getLanguage, setLanguage, SUPPORTED_LANGUAGES } from '../i18n.js';

export function renderNavbar(container, state, onNavigate, onOpenModal) {
  const currentLang = getLanguage();
  const currentLangObj = SUPPORTED_LANGUAGES.find(l => l.code === currentLang) || SUPPORTED_LANGUAGES[0];
  const phase = getPhaseDetails(getCurrentPhase());
  const scheduleStatus = getCurrentScheduleStatus();
  const todayPenance = getDayPenanceStatus(new Date());
  const todaySaints = getTodaySaints();
  const primaryTodaySaint = todaySaints[0] || null;

  container.innerHTML = `
    <div class="border-b border-stone-300/60 dark:border-stone-800 bg-[var(--bg-secondary)] px-4 sm:px-6 lg:px-8 py-3 transition-colors duration-500 relative">
      <div class="max-w-7xl mx-auto flex items-center justify-between gap-3">
        
        <!-- Logo & Title -->
        <div class="flex items-center gap-3 cursor-pointer select-none" id="nav-brand">
          <img src="./icons/logo.png" alt="Aura Sacra Logo" class="w-10 h-10 rounded-xl object-cover shadow-sm border border-amber-600/40">
          <div>
            <h1 class="text-xl sm:text-2xl font-bold tracking-widest text-[var(--accent-vermilion)] leading-tight">AURA SACRA</h1>
            <p class="text-xs text-[var(--text-muted)] font-serif italic hidden sm:block">${t('nav.brandSub', 'Universal Christian Platform • 100% Offline')}</p>
          </div>
        </div>

        <!-- Center: Liturgical Phase, Schedule & Penance / Saints Status Pill -->
        <div class="hidden lg:flex items-center gap-2">
          <!-- Circadian Badge -->
          <div class="flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-[var(--bg-card)] text-xs text-[var(--text-secondary)] shadow-sm">
            <span class="text-amber-500">${icons[phase.icon] ? icons[phase.icon]('w-4 h-4') : icons.sun('w-4 h-4')}</span>
            <span class="font-medium">${t(`circadian.${phase.name.toLowerCase().split(' ')[0]}`, phase.name)}</span>
            <span class="text-stone-400 font-sans">(${phase.hours})</span>
          </div>

          <!-- Schedule Status Pill -->
          <button id="btn-nav-schedule" class="flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs shadow-sm transition hover:opacity-85 cursor-pointer ${
            scheduleStatus.status === 'busy' ? 'border-red-500/40 bg-red-950/20 text-red-500 dark:text-red-400' :
            scheduleStatus.status === 'break' ? 'border-amber-500/40 bg-amber-950/20 text-amber-500 dark:text-amber-400' :
            'border-emerald-500/40 bg-emerald-950/20 text-emerald-600 dark:text-emerald-400'
          }">
            ${icons.clock('w-3.5 h-3.5')}
            <span class="font-medium">${scheduleStatus.label}</span>
          </button>

          <!-- Today Penance & Fasting Pill -->
          <button id="btn-nav-penance" class="flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs shadow-sm transition hover:opacity-85 cursor-pointer ${
            todayPenance.badge.color === 'vermilion' ? 'border-red-500/40 bg-red-950/20 text-red-600 dark:text-red-400' :
            todayPenance.badge.color === 'purple' ? 'border-purple-500/40 bg-purple-950/20 text-purple-600 dark:text-purple-400' :
            todayPenance.badge.color === 'gold' ? 'border-amber-500/40 bg-amber-950/20 text-amber-500 dark:text-amber-400' :
            'border-stone-300 dark:border-stone-700 bg-[var(--bg-card)] text-[var(--text-secondary)]'
          }" title="View Fasting & Penance Calendar">
            ${icons[todayPenance.badge.icon]('w-3.5 h-3.5')}
            <span class="font-medium">${todayPenance.badge.label}</span>
          </button>

          <!-- Today Commemorated Saint Pill (Correlated with Liturgical Color) -->
          ${primaryTodaySaint ? `
            <button id="btn-nav-today-saint" class="flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs shadow-sm transition hover:opacity-85 cursor-pointer ${primaryTodaySaint.colorMeta.badgeClass}" title="${primaryTodaySaint.name} • ${primaryTodaySaint.colorMeta.name} (${t(`ranks.${primaryTodaySaint.rank}`, primaryTodaySaint.rank)})">
              <span class="w-2 h-2 rounded-full ${primaryTodaySaint.colorMeta.dotClass}"></span>
              <span class="font-medium truncate max-w-[140px]">${currentLang === 'it' && primaryTodaySaint.name_it ? primaryTodaySaint.name_it.split(',')[0] : primaryTodaySaint.name.split(',')[0]}</span>
            </button>
          ` : ''}
        </div>

        <!-- Right Quick Action Bar -->
        <div class="flex items-center gap-2 sm:gap-2.5">
          
          <!-- SOS Peace & Temptation Shield Button (High Priority) -->
          <button id="btn-nav-sos" class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-700 hover:bg-red-800 text-white font-medium text-xs sm:text-sm shadow-md transition transform active:scale-95 border border-red-600 cursor-pointer" title="Emergency Peace & Temptation Shield">
            ${icons.shield('w-4 h-4')}
            <span class="hidden sm:inline font-sans">${t('nav.sos', 'SOS Peace')}</span>
            <span class="sm:hidden font-sans">SOS</span>
          </button>

          <!-- Quick Language Switcher Dropdown Trigger -->
          <div class="relative">
            <button id="btn-nav-lang-picker" class="flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-stone-300 dark:border-stone-700 bg-[var(--bg-card)] text-[var(--text-primary)] hover:border-amber-600 transition shadow-sm text-xs font-semibold cursor-pointer" title="Switch Language / Cambia Lingua">
              <span>${currentLangObj.flag}</span>
              <span class="uppercase font-mono">${currentLangObj.code}</span>
              <span class="text-[10px] text-stone-400">▾</span>
            </button>

            <!-- Language Popover Menu -->
            <div id="nav-lang-menu" class="hidden absolute right-0 mt-2 w-48 bg-[var(--bg-card)] border-2 border-stone-300 dark:border-stone-700 rounded-2xl shadow-2xl p-1.5 z-50 space-y-0.5 animate-fade-in parchment-border">
              <div class="px-2.5 py-1 text-[10px] font-sans font-bold uppercase tracking-wider text-[var(--text-muted)] border-b border-stone-200 dark:border-stone-800 mb-1">
                ${t('settings.language', 'Language')}
              </div>
              ${SUPPORTED_LANGUAGES.map(lang => `
                <button data-switch-lang="${lang.code}" class="w-full flex items-center justify-between px-2.5 py-1.5 rounded-xl text-xs text-left transition cursor-pointer ${
                  currentLang === lang.code 
                    ? 'bg-amber-600 text-white font-bold shadow-xs' 
                    : 'text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]'
                }">
                  <span class="flex items-center gap-2">
                    <span>${lang.flag}</span>
                    <span>${lang.nativeName}</span>
                  </span>
                  <span class="text-[10px] uppercase font-mono opacity-70">${lang.code}</span>
                </button>
              `).join('')}
            </div>
          </div>

          <!-- The Jar of Promises Quick Access -->
          <button id="btn-nav-promises" class="p-2 rounded-lg border border-amber-600/30 bg-[var(--bg-card)] text-amber-600 hover:border-amber-600 transition shadow-sm cursor-pointer" title="${t('nav.promises', 'The Jar of Promises')}">
            ${icons.jar('w-5 h-5')}
          </button>

          <!-- Focus / Rain Quick Access -->
          <button id="btn-nav-focus" class="p-2 rounded-lg border border-stone-300 dark:border-stone-700 bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-amber-600 transition shadow-sm cursor-pointer" title="${t('nav.focus', 'Focus Meditation')}">
            ${icons.flame('w-5 h-5')}
          </button>

          <!-- Settings Button -->
          <button id="btn-nav-settings" class="p-2 rounded-lg border border-stone-300 dark:border-stone-700 bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-amber-600 transition shadow-sm cursor-pointer" title="${t('nav.settings', 'Settings & Confession')}">
            ${icons.settings('w-5 h-5')}
          </button>
        </div>

      </div>
    </div>
  `;

  // Event Listeners
  container.querySelector('#nav-brand').addEventListener('click', () => onNavigate('bible'));
  container.querySelector('#btn-nav-sos').addEventListener('click', () => onOpenModal('sos'));
  container.querySelector('#btn-nav-promises').addEventListener('click', () => onOpenModal('promises'));
  container.querySelector('#btn-nav-focus').addEventListener('click', () => onNavigate('focus'));
  container.querySelector('#btn-nav-settings').addEventListener('click', () => onOpenModal('settings'));
  
  const scheduleBtn = container.querySelector('#btn-nav-schedule');
  if (scheduleBtn) {
    scheduleBtn.addEventListener('click', () => onOpenModal('schedule'));
  }

  const penanceBtn = container.querySelector('#btn-nav-penance');
  if (penanceBtn) {
    penanceBtn.addEventListener('click', () => onNavigate('penance'));
  }

  const saintBtn = container.querySelector('#btn-nav-today-saint');
  if (saintBtn) {
    saintBtn.addEventListener('click', () => onNavigate('penance'));
  }

  // Language Popover Toggle & Selection
  const langPickerBtn = container.querySelector('#btn-nav-lang-picker');
  const langMenu = container.querySelector('#nav-lang-menu');
  if (langPickerBtn && langMenu) {
    langPickerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langMenu.classList.toggle('hidden');
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!langMenu.contains(e.target) && !langPickerBtn.contains(e.target)) {
        langMenu.classList.add('hidden');
      }
    });

    langMenu.querySelectorAll('button[data-switch-lang]').forEach((btn) => {
      btn.addEventListener('click', async () => {
        const langCode = btn.getAttribute('data-switch-lang');
        langMenu.classList.add('hidden');
        await setLanguage(langCode);
      });
    });
  }
}
