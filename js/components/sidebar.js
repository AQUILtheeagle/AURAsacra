// Desktop Monastic Sidebar Navigation for Aura Sacra
import { icons } from '../icons.js';

export function renderSidebar(container, activeTab, onNavigate, onOpenModal) {
  const navItems = [
    { id: 'bible', label: 'Sacred Scripture', icon: 'book', isTab: true },
    { id: 'penance', label: 'Penance & Fasting Calendar', icon: 'calendar', isTab: true },
    { id: 'chat', label: 'Dialogue with Jesus', icon: 'message', isTab: true },
    { id: 'journal', label: 'Prayer Journal', icon: 'heart', isTab: true },
    { id: 'saints', label: 'Saints & Fathers', icon: 'cross', isTab: true },
    { id: 'focus', label: 'Focus with Candle & Rain', icon: 'flame', isTab: true }
  ];

  const toolsItems = [
    { id: 'promises', label: 'The Jar of Promises', icon: 'jar', isModal: true },
    { id: 'doubts', label: 'Faith Compass', icon: 'compass', isModal: true },
    { id: 'evening', label: 'Night Examination & Protection', icon: 'moon', isModal: true },
    { id: 'schedule', label: 'School & Work Planner', icon: 'clock', isModal: true },
    { id: 'share', label: 'Parchment Card Maker', icon: 'share', isModal: true },
    { id: 'feedback', label: 'GitHub Feedback Issue', icon: 'github', isModal: true }
  ];

  container.innerHTML = `
    <div class="bg-[var(--bg-card)] border border-stone-300 dark:border-stone-800 rounded-xl p-3 shadow-sm sticky top-6 space-y-6">
      
      <!-- Spiritual Modules Section -->
      <div>
        <p class="text-[11px] font-sans font-semibold uppercase tracking-wider text-[var(--text-muted)] px-3 mb-2">Spiritual Life</p>
        <div class="space-y-1">
          ${navItems.map((item) => {
            const isActive = activeTab === item.id;
            return `
              <button data-nav-tab="${item.id}" class="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-left transition-all ${
                isActive 
                  ? 'bg-amber-600/15 text-[var(--accent-vermilion)] font-bold border-l-4 border-amber-600' 
                  : 'text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)] hover:text-[var(--text-primary)]'
              }">
                <span class="${isActive ? 'text-[var(--accent-vermilion)]' : 'text-amber-600/80'}">${icons[item.icon]('w-4 h-4')}</span>
                <span>${item.label}</span>
              </button>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Tools & Contemplation Section -->
      <div class="border-t border-stone-200 dark:border-stone-800 pt-4">
        <p class="text-[11px] font-sans font-semibold uppercase tracking-wider text-[var(--text-muted)] px-3 mb-2">Sacred Tools</p>
        <div class="space-y-1">
          ${toolsItems.map((item) => `
            <button data-nav-modal="${item.id}" class="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-left text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)] hover:text-[var(--text-primary)] transition">
              <span class="text-stone-400 group-hover:text-amber-600">${icons[item.icon]('w-4 h-4')}</span>
              <span>${item.label}</span>
            </button>
          `).join('')}
        </div>
      </div>

      <!-- Monastic Motto Box -->
      <div class="border-t border-stone-200 dark:border-stone-800 pt-3 px-3">
        <p class="text-xs italic text-[var(--text-muted)] leading-relaxed">
          «Ora et Labora» • Pray and work in the holy presence of God.
        </p>
      </div>

    </div>
  `;

  container.querySelectorAll('button[data-nav-tab]').forEach((btn) => {
    btn.addEventListener('click', () => {
      onNavigate(btn.getAttribute('data-nav-tab'));
    });
  });

  container.querySelectorAll('button[data-nav-modal]').forEach((btn) => {
    btn.addEventListener('click', () => {
      onOpenModal(btn.getAttribute('data-nav-modal'));
    });
  });
}
