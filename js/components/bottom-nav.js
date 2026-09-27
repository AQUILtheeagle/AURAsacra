// Mobile Bottom Navigation Bar for Aura Sacra
import { icons } from '../icons.js';
import { t } from '../i18n.js';

export function renderBottomNav(container, activeTab, onNavigate, onOpenModal) {
  const tabs = [
    { id: 'bible', label: t('nav.tabBible', 'Bible'), icon: 'book', isTab: true },
    { id: 'penance', label: t('nav.tabPenance', 'Penance'), icon: 'calendar', isTab: true },
    { id: 'chat', label: t('nav.tabJesus', 'Jesus'), icon: 'message', isTab: true },
    { id: 'journal', label: t('nav.tabJournal', 'Journal'), icon: 'heart', isTab: true },
    { id: 'tools', label: t('nav.tabTools', 'Tools'), icon: 'grid', isModal: true }
  ];

  container.innerHTML = `
    <div class="rounded-2xl sm:rounded-3xl border-2 border-stone-300/80 dark:border-stone-800 bg-[var(--bg-card)]/95 backdrop-blur-xl px-1 sm:px-2 py-1 flex items-center justify-between shadow-2xl parchment-border">
      ${tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return `
          <button data-tab="${tab.id}" data-type="${tab.isModal ? 'modal' : 'tab'}" class="flex flex-col items-center justify-center flex-1 py-1 px-0.5 rounded-xl transition-all duration-200 cursor-pointer min-w-0 ${
            isActive 
              ? 'text-[var(--accent-vermilion)] font-bold bg-amber-500/10 scale-105 shadow-xs' 
              : 'text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-stone-500/5'
          }" title="${tab.label}">
            <div class="mb-0.5 flex-shrink-0">${icons[tab.icon] ? icons[tab.icon]('w-5 h-5') : icons.sun('w-5 h-5')}</div>
            <span class="text-[9.5px] sm:text-[11px] font-sans tracking-tight uppercase font-semibold truncate w-full text-center leading-tight block">${tab.label}</span>
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
