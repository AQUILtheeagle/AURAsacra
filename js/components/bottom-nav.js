// Mobile Bottom Navigation Bar for Aura Sacra
import { icons } from '../icons.js';

export function renderBottomNav(container, activeTab, onNavigate, onOpenModal) {
  const tabs = [
    { id: 'bible', label: 'Scripture', icon: 'book', isTab: true },
    { id: 'penance', label: 'Penance', icon: 'calendar', isTab: true },
    { id: 'chat', label: 'Jesus', icon: 'message', isTab: true },
    { id: 'journal', label: 'Journal', icon: 'heart', isTab: true },
    { id: 'tools', label: 'Tools', icon: 'grid', isModal: true }
  ];

  container.innerHTML = `
    <div class="border-t border-stone-300 dark:border-stone-800 bg-[var(--bg-card)]/95 backdrop-blur-md px-2 py-2 flex items-center justify-around shadow-lg">
      ${tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return `
          <button data-tab="${tab.id}" data-type="${tab.isModal ? 'modal' : 'tab'}" class="flex flex-col items-center justify-center flex-1 py-1 transition-colors cursor-pointer ${
            isActive 
              ? 'text-[var(--accent-vermilion)] font-bold' 
              : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
          }">
            <div class="mb-0.5">${icons[tab.icon] ? icons[tab.icon]('w-5 h-5') : icons.sun('w-5 h-5')}</div>
            <span class="text-[10px] font-sans tracking-wide uppercase font-semibold">${tab.label}</span>
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
