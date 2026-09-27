// Mobile Bottom Navigation Bar for Aura Sacra
import { icons } from '../icons.js';
import { t } from '../i18n.js';

export function renderBottomNav(container, activeTab, onNavigate, onOpenModal) {
  const tabs = [
    { id: 'bible', label: t('nav.scripture', 'Scripture'), icon: 'book', isTab: true },
    { id: 'penance', label: t('nav.penance', 'Penance'), icon: 'calendar', isTab: true },
    { id: 'chat', label: t('nav.jesus', 'Jesus'), icon: 'message', isTab: true },
    { id: 'journal', label: t('nav.journal', 'Journal'), icon: 'heart', isTab: true },
    { id: 'tools', label: t('nav.tools', 'Tools'), icon: 'grid', isModal: true }
  ];

  container.innerHTML = `
    <div class="rounded-2xl sm:rounded-3xl border-2 border-stone-300/80 dark:border-stone-800 bg-[var(--bg-card)]/95 backdrop-blur-xl px-2 py-1.5 flex items-center justify-around shadow-2xl parchment-border">
      ${tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return `
          <button data-tab="${tab.id}" data-type="${tab.isModal ? 'modal' : 'tab'}" class="flex flex-col items-center justify-center flex-1 py-1 px-1 rounded-xl transition-all duration-200 cursor-pointer ${
            isActive 
              ? 'text-[var(--accent-vermilion)] font-bold bg-amber-500/10 scale-105 shadow-xs' 
              : 'text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-stone-500/5'
          }">
            <div class="mb-0.5">${icons[tab.icon] ? icons[tab.icon]('w-5 h-5') : icons.sun('w-5 h-5')}</div>
            <span class="text-[10px] font-sans tracking-wide uppercase font-semibold truncate max-w-[64px]">${tab.label}</span>
          </button>
        `;
      }).join('')}
    </div>
  `;

  container.querySelectorAll('button[data-tab]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-tab');
      const type = btn.getAttribute('data-type');
      if (type === 'modal') {
        if (onOpenModal) onOpenModal(target);
      } else {
        onNavigate(target);
      }
    });
  });
}
