// Mobile Bottom Navigation Bar for Aura Sacra
import { icons } from '../icons.js';

export function renderBottomNav(container, activeTab, onNavigate) {
  const tabs = [
    { id: 'bible', label: 'Scripture', icon: 'book' },
    { id: 'chat', label: 'Jesus', icon: 'message' },
    { id: 'journal', label: 'Journal', icon: 'heart' },
    { id: 'focus', label: 'Candle', icon: 'flame' },
    { id: 'saints', label: 'Saints', icon: 'cross' }
  ];

  container.innerHTML = `
    <div class="border-t border-stone-300 dark:border-stone-800 bg-[var(--bg-card)]/95 backdrop-blur-md px-2 py-2 flex items-center justify-around shadow-lg">
      ${tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return `
          <button data-tab="${tab.id}" class="flex flex-col items-center justify-center flex-1 py-1 transition-colors ${
            isActive 
              ? 'text-[var(--accent-vermilion)] font-bold' 
              : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
          }">
            <div class="mb-0.5">${icons[tab.icon]('w-5 h-5')}</div>
            <span class="text-[10px] font-sans tracking-wide uppercase">${tab.label}</span>
          </button>
        `;
      }).join('')}
    </div>
  `;

  container.querySelectorAll('button[data-tab]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');
      onNavigate(targetTab);
    });
  });
}
