// First-run Ecumenical Onboarding Modal for Aura Sacra
// Fully responsive across all mobile (e.g. Samsung S25 Ultra, iPhone) and desktop viewports
import { setSetting } from '../db.js';
import { icons } from '../icons.js';
import { t } from '../i18n.js';

export function renderOnboardingModal(container, onComplete) {
  let selectedConfession = 'ecumenical';

  container.innerHTML = `
    <div class="fixed inset-0 z-50 overflow-y-auto overscroll-contain bg-black/80 backdrop-blur-md p-3 sm:p-6 flex min-h-full items-center justify-center animate-fade-in" id="onboarding-overlay">
      <div class="bg-[var(--bg-card)] border-2 border-amber-600/70 rounded-2xl sm:rounded-3xl max-w-lg w-full max-h-[92dvh] sm:max-h-[90vh] flex flex-col shadow-2xl relative parchment-border my-auto overflow-hidden text-center">
        
        <!-- Header Section (Fixed at top of modal) -->
        <div class="p-4 sm:p-6 pb-2.5 sm:pb-3 flex-shrink-0 text-center space-y-1.5 sm:space-y-2 border-b border-stone-200/50 dark:border-stone-800/50">
          <img src="./icons/logo.png" alt="Aura Sacra" width="64" height="64" style="width: 56px; height: 56px; max-width: 64px; max-height: 64px;" class="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl mx-auto shadow-md border-2 border-amber-600/50 object-cover">
          <div>
            <h2 class="text-xl sm:text-2xl font-bold font-display text-[var(--accent-vermilion)] leading-tight">
              ${t('onboarding.welcome', 'Welcome to Aura Sacra')}
            </h2>
            <p class="text-xs sm:text-sm text-[var(--text-muted)] italic font-serif mt-0.5 leading-snug">
              ${t('onboarding.subtitle', 'Universal, ecumenical, and 100% offline Christian spiritual platform.')}
            </p>
          </div>
        </div>

        <!-- Scrollable Content Section (Adapts dynamically to viewport height) -->
        <div class="overflow-y-auto overscroll-contain px-4 sm:px-6 py-3 sm:py-4 space-y-4 flex-1 text-left custom-scrollbar">
          
          <!-- Question 1: Confession / Tradition -->
          <div class="space-y-2">
            <label class="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] font-sans">
              ${t('onboarding.traditionQuestion', '1. What is your faith tradition or spiritual path?')}
            </label>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
              <button type="button" class="conf-btn p-2.5 sm:p-3 rounded-xl border-2 border-stone-300 dark:border-stone-800 bg-[var(--bg-secondary)] text-left hover:border-amber-600/50 transition cursor-pointer" data-conf="catholic">
                <span class="conf-title block text-xs sm:text-sm font-bold font-display text-[var(--text-primary)]">${t('onboarding.traditions.catholicTitle', 'Catholic (Roman)')}</span>
                <span class="text-[10px] sm:text-xs text-stone-400 block mt-0.5 leading-tight">${t('onboarding.traditions.catholicDesc', 'Full biblical canon, saints, and Roman liturgy')}</span>
              </button>

              <button type="button" class="conf-btn p-2.5 sm:p-3 rounded-xl border-2 border-stone-300 dark:border-stone-800 bg-[var(--bg-secondary)] text-left hover:border-amber-600/50 transition cursor-pointer" data-conf="traditional">
                <span class="conf-title block text-xs sm:text-sm font-bold font-display text-[var(--text-primary)]">${t('onboarding.traditions.traditionalTitle', 'Traditional Catholic (1962)')}</span>
                <span class="text-[10px] sm:text-xs text-stone-400 block mt-0.5 leading-tight">${t('onboarding.traditions.traditionalDesc', 'Latin Mass, Ember Days, Vigils & traditional fasts')}</span>
              </button>

              <button type="button" class="conf-btn p-2.5 sm:p-3 rounded-xl border-2 border-stone-300 dark:border-stone-800 bg-[var(--bg-secondary)] text-left hover:border-amber-600/50 transition cursor-pointer" data-conf="orthodox">
                <span class="conf-title block text-xs sm:text-sm font-bold font-display text-[var(--text-primary)]">${t('onboarding.traditions.orthodoxTitle', 'Orthodox (Eastern)')}</span>
                <span class="text-[10px] sm:text-xs text-stone-400 block mt-0.5 leading-tight">${t('onboarding.traditions.orthodoxDesc', 'Eastern tradition, Church Fathers, and Hesychasm')}</span>
              </button>

              <button type="button" class="conf-btn p-2.5 sm:p-3 rounded-xl border-2 border-stone-300 dark:border-stone-800 bg-[var(--bg-secondary)] text-left hover:border-amber-600/50 transition cursor-pointer" data-conf="protestant">
                <span class="conf-title block text-xs sm:text-sm font-bold font-display text-[var(--text-primary)]">${t('onboarding.traditions.protestantTitle', 'Protestant / Evangelical')}</span>
                <span class="text-[10px] sm:text-xs text-stone-400 block mt-0.5 leading-tight">${t('onboarding.traditions.protestantDesc', '66-book canon and evangelical faith')}</span>
              </button>

              <button type="button" class="conf-btn sm:col-span-2 p-2.5 sm:p-3 rounded-xl border-2 border-amber-600 bg-amber-600/10 text-left transition cursor-pointer shadow-sm" data-conf="ecumenical">
                <span class="conf-title block text-xs sm:text-sm font-bold font-display text-amber-500">${t('onboarding.traditions.ecumenicalTitle', 'Ecumenical / Seeker')}</span>
                <span class="text-[10px] sm:text-xs text-stone-400 block mt-0.5 leading-tight">${t('onboarding.traditions.ecumenicalDesc', 'Shared sacred ground for all seekers of God')}</span>
              </button>
            </div>
          </div>

          <!-- Question 2: Name / Pseudo-Account -->
          <div class="space-y-1.5 pt-1">
            <label class="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] font-sans" for="ob-username">
              ${t('onboarding.nameQuestion', '2. How would you like to be addressed in spiritual dialogue?')}
            </label>
            <input type="text" id="ob-username" autocomplete="name" placeholder="${t('onboarding.namePlaceholder', 'Your name (or leave blank for Disciple)')}" class="w-full bg-[var(--bg-secondary)] border-2 border-stone-300 dark:border-stone-700 rounded-xl px-3.5 py-2.5 text-sm text-[var(--text-primary)] placeholder-stone-400 focus:outline-none focus:border-amber-600 transition" />
          </div>
        </div>

        <!-- Sticky Footer Action Button (Always visible on mobile & desktop) -->
        <div class="p-3.5 sm:p-5 pt-3 pb-safe bg-[var(--bg-card)] border-t border-stone-200/60 dark:border-stone-800/60 flex-shrink-0">
          <button id="btn-complete-onboarding" type="button" class="w-full py-3.5 rounded-xl bg-amber-600 hover:bg-amber-700 active:bg-amber-800 text-white font-bold text-sm sm:text-base shadow-lg transition transform active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2">
            <span>${t('onboarding.beginJourney', 'Begin Journey with Aura Sacra →')}</span>
          </button>
        </div>

      </div>
    </div>
  `;

  // Select handlers with persistent border-2 and grid span preservation
  const updateSelection = (selected) => {
    container.querySelectorAll('.conf-btn').forEach((b) => {
      const isSel = b.getAttribute('data-conf') === selected;
      const titleSpan = b.querySelector('.conf-title');
      const isSpan2 = b.getAttribute('data-conf') === 'ecumenical';
      const baseSpan = isSpan2 ? 'sm:col-span-2 ' : '';

      if (isSel) {
        b.className = `conf-btn ${baseSpan}p-2.5 sm:p-3 rounded-xl border-2 border-amber-600 bg-amber-600/10 text-left transition cursor-pointer shadow-sm`;
        if (titleSpan) titleSpan.className = 'conf-title block text-xs sm:text-sm font-bold font-display text-amber-500';
      } else {
        b.className = `conf-btn ${baseSpan}p-2.5 sm:p-3 rounded-xl border-2 border-stone-300 dark:border-stone-800 bg-[var(--bg-secondary)] text-left hover:border-amber-600/50 transition cursor-pointer`;
        if (titleSpan) titleSpan.className = 'conf-title block text-xs sm:text-sm font-bold font-display text-[var(--text-primary)]';
      }
    });
  };

  container.querySelectorAll('.conf-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      selectedConfession = btn.getAttribute('data-conf');
      updateSelection(selectedConfession);
    });
  });

  const completeBtn = container.querySelector('#btn-complete-onboarding');
  const nameInputEl = container.querySelector('#ob-username');

  if (completeBtn) {
    let isSaving = false;
    const handleComplete = async (e) => {
      if (e) e.preventDefault();
      if (isSaving) return;
      isSaving = true;

      completeBtn.disabled = true;
      completeBtn.style.opacity = '0.75';
      completeBtn.innerHTML = `<span>⏳</span> <span>${t('onboarding.loading', 'Saving...')}</span>`;

      try {
        const nameInput = (nameInputEl?.value || '').trim();
        await setSetting('user_confession', selectedConfession || 'ecumenical');
        await setSetting('confession', selectedConfession || 'ecumenical');
        await setSetting('penance_tradition', selectedConfession || 'ecumenical');
        await setSetting('user_name', nameInput || 'Disciple');
        await setSetting('onboarding_completed', true);
        localStorage.setItem('aurasacra_onboarding_completed', 'true');
        localStorage.setItem('aurasacra_user_confession', selectedConfession || 'ecumenical');
        if (nameInput) localStorage.setItem('aurasacra_user_name', nameInput);
      } catch (err) {
        console.error('Onboarding save error:', err);
      } finally {
        onComplete();
      }
    };

    completeBtn.addEventListener('click', handleComplete);

    if (nameInputEl) {
      nameInputEl.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          handleComplete();
        }
      });
    }
  }
}
