// First-run Ecumenical Onboarding Modal for Aura Sacra
import { setSetting } from '../db.js';
import { icons } from '../icons.js';

export function renderOnboardingModal(container, onComplete) {
  let selectedConfession = 'ecumenical';

  container.innerHTML = `
    <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div class="bg-[var(--bg-card)] border-2 border-amber-600/70 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative space-y-6 parchment-border text-center transform scale-100">
        
        <!-- Official Logo -->
        <img src="./icons/logo.png" alt="Aura Sacra" class="w-20 h-20 rounded-2xl mx-auto shadow-lg border-2 border-amber-600/50 object-cover">

        <div>
          <h2 class="text-2xl sm:text-3xl font-bold font-display text-[var(--accent-vermilion)]">
            Welcome to Aura Sacra
          </h2>
          <p class="text-xs sm:text-sm text-[var(--text-muted)] italic font-serif mt-1">
            Universal, ecumenical, and 100% offline Christian spiritual platform.
          </p>
        </div>

        <!-- Question 1: Confession / Tradition -->
        <div class="space-y-3 text-left">
          <label class="block text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] font-sans">
            1. What is your faith tradition or spiritual path?
          </label>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <button type="button" class="conf-btn p-3 rounded-xl border-2 border-stone-300 dark:border-stone-800 bg-[var(--bg-secondary)] text-left hover:border-amber-600/50 transition cursor-pointer" data-conf="catholic">
              <span class="conf-title block text-xs font-bold font-display text-[var(--text-primary)]">Catholic (Roman)</span>
              <span class="text-[10px] text-stone-400">Full biblical canon, saints, and Roman liturgy</span>
            </button>

            <button type="button" class="conf-btn p-3 rounded-xl border-2 border-stone-300 dark:border-stone-800 bg-[var(--bg-secondary)] text-left hover:border-amber-600/50 transition cursor-pointer" data-conf="traditional">
              <span class="conf-title block text-xs font-bold font-display text-[var(--text-primary)]">Traditional Catholic (1962)</span>
              <span class="text-[10px] text-stone-400">Latin Mass, Ember Days, Vigils & traditional fasts</span>
            </button>

            <button type="button" class="conf-btn p-3 rounded-xl border-2 border-stone-300 dark:border-stone-800 bg-[var(--bg-secondary)] text-left hover:border-amber-600/50 transition cursor-pointer" data-conf="orthodox">
              <span class="conf-title block text-xs font-bold font-display text-[var(--text-primary)]">Orthodox (Eastern)</span>
              <span class="text-[10px] text-stone-400">Eastern tradition, Church Fathers, and Hesychasm</span>
            </button>

            <button type="button" class="conf-btn p-3 rounded-xl border-2 border-stone-300 dark:border-stone-800 bg-[var(--bg-secondary)] text-left hover:border-amber-600/50 transition cursor-pointer" data-conf="protestant">
              <span class="conf-title block text-xs font-bold font-display text-[var(--text-primary)]">Protestant / Evangelical</span>
              <span class="text-[10px] text-stone-400">66-book canon and evangelical faith</span>
            </button>

            <button type="button" class="conf-btn p-3 rounded-xl border-2 border-amber-600 bg-amber-600/10 text-left transition cursor-pointer shadow-sm" data-conf="ecumenical">
              <span class="conf-title block text-xs font-bold font-display text-amber-500">Ecumenical / Seeker</span>
              <span class="text-[10px] text-stone-400">Shared sacred ground for all seekers of God</span>
            </button>
          </div>
        </div>

        <!-- Question 2: Name -->
        <div class="space-y-2 text-left">
          <label class="block text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] font-sans">
            2. How would you like to be addressed in spiritual dialogue?
          </label>
          <input type="text" id="ob-username" placeholder="Your name (or leave blank for 'Disciple')" class="w-full bg-[var(--bg-secondary)] border border-stone-300 dark:border-stone-700 rounded-xl px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-amber-600" />
        </div>

        <!-- Complete Button -->
        <button id="btn-complete-onboarding" class="w-full py-3.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm shadow-lg transition transform active:scale-95 cursor-pointer">
          Begin Journey with Aura Sacra →
        </button>

      </div>
    </div>
  `;

  // Select handlers with persistent border-2
  const updateSelection = (selected) => {
    container.querySelectorAll('.conf-btn').forEach((b) => {
      const isSel = b.getAttribute('data-conf') === selected;
      const titleSpan = b.querySelector('.conf-title');
      if (isSel) {
        b.className = 'conf-btn p-3 rounded-xl border-2 border-amber-600 bg-amber-600/10 text-left transition cursor-pointer shadow-sm';
        if (titleSpan) titleSpan.className = 'conf-title block text-xs font-bold font-display text-amber-500';
      } else {
        b.className = 'conf-btn p-3 rounded-xl border-2 border-stone-300 dark:border-stone-800 bg-[var(--bg-secondary)] text-left hover:border-amber-600/50 transition cursor-pointer';
        if (titleSpan) titleSpan.className = 'conf-title block text-xs font-bold font-display text-[var(--text-primary)]';
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
  if (completeBtn) {
    const handleComplete = async (e) => {
      if (e) e.preventDefault();
      completeBtn.disabled = true;
      completeBtn.style.opacity = '0.7';
      completeBtn.innerHTML = 'Loading...';

      try {
        const nameInput = (container.querySelector('#ob-username')?.value || '').trim();
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
    completeBtn.addEventListener('touchend', handleComplete);
  }
}
