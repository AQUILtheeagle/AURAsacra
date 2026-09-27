// Top Navbar component for Aura Sacra
import { icons } from '../icons.js';
import { t, getLanguage, setLanguage, SUPPORTED_LANGUAGES } from '../i18n.js';

export function renderNavbar(container, state, onNavigate, onOpenModal) {
  const currentLang = getLanguage();
  const currentLangObj = SUPPORTED_LANGUAGES.find(l => l.code === currentLang) || SUPPORTED_LANGUAGES[0];

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

        <!-- Right Action Group: SOS, Lingua, Impostazioni -->
        <div class="flex items-center gap-2 sm:gap-2.5">
          
          <!-- 1. SOS Peace & Temptation Shield Button -->
          <button id="btn-nav-sos" class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-700 hover:bg-red-800 text-white font-medium text-xs sm:text-sm shadow-md transition transform active:scale-95 border border-red-600 cursor-pointer" title="${t('tools.sosDesc', 'Emergency Peace & Temptation Shield')}">
            ${icons.shield('w-4 h-4')}
            <span class="hidden sm:inline font-sans">${t('nav.sos', 'SOS Peace')}</span>
            <span class="sm:hidden font-sans">SOS</span>
          </button>

          <!-- 2. Quick Language Switcher Dropdown Trigger -->
          <div class="relative">
            <button id="btn-nav-lang-picker" class="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-stone-300 dark:border-stone-700 bg-[var(--bg-card)] text-[var(--text-primary)] hover:border-amber-600 transition shadow-sm text-xs font-semibold cursor-pointer" title="${t('settings.language', 'Language')}">
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

          <!-- 3. Settings Button -->
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
  container.querySelector('#btn-nav-settings').addEventListener('click', () => onOpenModal('settings'));

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
