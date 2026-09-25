// Top Navbar component for Aura Sacra
import { icons } from '../icons.js';
import { getPhaseDetails, getCurrentPhase } from '../circadian.js';
import { getCurrentScheduleStatus } from '../schedule.js';
import { getDayPenanceStatus } from '../data/penance.js';

export function renderNavbar(container, state, onNavigate, onOpenModal) {
  const phase = getPhaseDetails(getCurrentPhase());
  const scheduleStatus = getCurrentScheduleStatus();
  const todayPenance = getDayPenanceStatus(new Date());

  container.innerHTML = `
    <div class="border-b border-stone-300/60 dark:border-stone-800 bg-[var(--bg-secondary)] px-4 sm:px-6 lg:px-8 py-3 transition-colors duration-500">
      <div class="max-w-7xl mx-auto flex items-center justify-between gap-3">
        
        <!-- Logo & Title -->
        <div class="flex items-center gap-3 cursor-pointer select-none" id="nav-brand">
          <img src="./icons/logo.png" alt="Aura Sacra Logo" class="w-10 h-10 rounded-xl object-cover shadow-sm border border-amber-600/40">
          <div>
            <h1 class="text-xl sm:text-2xl font-bold tracking-widest text-[var(--accent-vermilion)] leading-tight">AURA SACRA</h1>
            <p class="text-xs text-[var(--text-muted)] font-serif italic hidden sm:block">Universal Christian Platform • 100% Offline</p>
          </div>
        </div>

        <!-- Center: Liturgical Phase, Schedule & Penance Status Pill -->
        <div class="hidden lg:flex items-center gap-2">
          <!-- Circadian Badge -->
          <div class="flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-[var(--bg-card)] text-xs text-[var(--text-secondary)] shadow-sm">
            <span class="text-amber-500">${icons[phase.icon] ? icons[phase.icon]('w-4 h-4') : icons.sun('w-4 h-4')}</span>
            <span class="font-medium">${phase.name}</span>
            <span class="text-stone-400 font-sans">(${phase.hours})</span>
          </div>

          <!-- Schedule Status Pill -->
          <button id="btn-nav-schedule" class="flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs shadow-sm transition hover:opacity-85 ${
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
        </div>

        <!-- Right Quick Action Bar -->
        <div class="flex items-center gap-2 sm:gap-3">
          
          <!-- SOS Peace & Temptation Shield Button (High Priority) -->
          <button id="btn-nav-sos" class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-700 hover:bg-red-800 text-white font-medium text-xs sm:text-sm shadow-md transition transform active:scale-95 border border-red-600" title="Emergency Peace & Temptation Shield">
            ${icons.shield('w-4 h-4')}
            <span class="hidden sm:inline font-sans">SOS Peace</span>
            <span class="sm:hidden font-sans">SOS</span>
          </button>

          <!-- The Jar of Promises Quick Access -->
          <button id="btn-nav-promises" class="p-2 rounded-lg border border-amber-600/30 bg-[var(--bg-card)] text-amber-600 hover:border-amber-600 transition shadow-sm" title="The Jar of Promises">
            ${icons.jar('w-5 h-5')}
          </button>

          <!-- Focus / Rain Quick Access -->
          <button id="btn-nav-focus" class="p-2 rounded-lg border border-stone-300 dark:border-stone-700 bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-amber-600 transition shadow-sm" title="Focus & Rain Meditation">
            ${icons.flame('w-5 h-5')}
          </button>

          <!-- Settings Button -->
          <button id="btn-nav-settings" class="p-2 rounded-lg border border-stone-300 dark:border-stone-700 bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-amber-600 transition shadow-sm" title="Settings & Confession">
            ${icons.settings('w-5 h-5')}
          </button>

          <!-- Mobile Tools Trigger Button -->
          <button id="btn-nav-mobile-tools" class="p-2 rounded-lg border border-amber-600/40 bg-[var(--bg-card)] text-amber-600 hover:border-amber-600 transition shadow-sm md:hidden flex items-center justify-center cursor-pointer" title="Sacred Tools Hub">
            ${icons.grid('w-5 h-5')}
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

  const mobileToolsBtn = container.querySelector('#btn-nav-mobile-tools');
  if (mobileToolsBtn) {
    mobileToolsBtn.addEventListener('click', () => onOpenModal('tools'));
  }
}
