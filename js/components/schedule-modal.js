// School & Work Schedule & Breaks Planner Modal for Aura Sacra
import { getSchedule, saveSchedule, getCurrentScheduleStatus } from '../schedule.js';
import { icons } from '../icons.js';

export function renderScheduleModal(container, onClose) {
  const current = getSchedule();
  const status = getCurrentScheduleStatus();

  container.innerHTML = `
    <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div class="bg-[var(--bg-card)] border-2 border-stone-300 dark:border-stone-800 rounded-3xl max-w-lg w-full max-h-[92vh] overflow-y-auto p-6 shadow-2xl relative space-y-6 parchment-border">
        
        <!-- Close Button -->
        <button id="btn-close-schedule" class="absolute top-4 right-4 text-stone-400 hover:text-[var(--text-primary)] p-1">
          ${icons.close('w-5 h-5')}
        </button>

        <!-- Header -->
        <div class="text-center">
          <div class="w-12 h-12 rounded-full border border-amber-500/40 bg-[var(--bg-secondary)] flex items-center justify-center mx-auto text-amber-600 mb-2">
            ${icons.clock('w-6 h-6')}
          </div>
          <h2 class="text-2xl font-bold font-display text-[var(--accent-vermilion)]">
            School & Work Routine Planner
          </h2>
          <p class="text-xs text-[var(--text-muted)] italic font-serif">
            Set your school or work routine and quiet hours so you stay undisturbed.
          </p>
        </div>

        <!-- Current Status Banner -->
        <div class="p-4 rounded-xl border flex items-center gap-3 ${
          status.status === 'busy' ? 'border-red-500/40 bg-red-950/20 text-red-500 dark:text-red-400' :
          status.status === 'break' ? 'border-amber-500/40 bg-amber-950/20 text-amber-500 dark:text-amber-400' :
          'border-emerald-500/40 bg-emerald-950/20 text-emerald-600 dark:text-emerald-400'
        }">
          <span class="p-2 rounded-full bg-black/20">${icons.clock('w-5 h-5')}</span>
          <div>
            <p class="text-xs font-bold uppercase tracking-wider font-sans">Current Status: ${status.label}</p>
            <p class="text-xs opacity-90">${status.description}</p>
          </div>
        </div>

        <!-- Form Settings -->
        <form id="schedule-form" class="space-y-4 text-left">
          
          <!-- Enable Toggle -->
          <div class="flex items-center justify-between p-3 bg-[var(--bg-secondary)] rounded-xl border border-stone-200 dark:border-stone-800">
            <div>
              <span class="text-sm font-bold text-[var(--text-primary)]">Enable School / Work Routine</span>
              <p class="text-xs text-[var(--text-muted)]">Silences prayer chimes during class or work hours</p>
            </div>
            <input type="checkbox" id="sched-enabled" ${current.enabled ? 'checked' : ''} class="w-5 h-5 accent-amber-600 cursor-pointer">
          </div>

          <!-- Busy Hours (Start - End) -->
          <div class="p-4 bg-[var(--bg-secondary)] rounded-xl border border-stone-200 dark:border-stone-800 space-y-3">
            <span class="text-xs font-bold uppercase tracking-wider text-red-500 font-sans block">1. Busy Hours (Classes or Work Shift):</span>
            
            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block text-[11px] text-[var(--text-muted)] mb-1">Start (e.g. 08:30):</label>
                <input type="time" id="sched-busy-start" value="${current.busyStart}" class="w-full bg-[var(--bg-card)] border border-stone-300 dark:border-stone-700 rounded-lg px-3 py-1.5 text-sm font-mono text-[var(--text-primary)]" />
              </div>
              <div>
                <label class="block text-[11px] text-[var(--text-muted)] mb-1">End (e.g. 16:30):</label>
                <input type="time" id="sched-busy-end" value="${current.busyEnd}" class="w-full bg-[var(--bg-card)] border border-stone-300 dark:border-stone-700 rounded-lg px-3 py-1.5 text-sm font-mono text-[var(--text-primary)]" />
              </div>
            </div>
          </div>

          <!-- Break Times (Start - End) -->
          <div class="p-4 bg-[var(--bg-secondary)] rounded-xl border border-stone-200 dark:border-stone-800 space-y-3">
            <span class="text-xs font-bold uppercase tracking-wider text-amber-500 font-sans block">2. Break Times (Recess or Lunch):</span>
            
            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block text-[11px] text-[var(--text-muted)] mb-1">Break Start (e.g. 12:30):</label>
                <input type="time" id="sched-break-start" value="${current.breakStart}" class="w-full bg-[var(--bg-card)] border border-stone-300 dark:border-stone-700 rounded-lg px-3 py-1.5 text-sm font-mono text-[var(--text-primary)]" />
              </div>
              <div>
                <label class="block text-[11px] text-[var(--text-muted)] mb-1">Break End (e.g. 13:30):</label>
                <input type="time" id="sched-break-end" value="${current.breakEnd}" class="w-full bg-[var(--bg-card)] border border-stone-300 dark:border-stone-700 rounded-lg px-3 py-1.5 text-sm font-mono text-[var(--text-primary)]" />
              </div>
            </div>
          </div>

          <!-- Micro-pause duration -->
          <div class="p-3 bg-[var(--bg-secondary)] rounded-xl border border-stone-200 dark:border-stone-800 flex items-center justify-between">
            <div>
              <span class="text-xs font-bold text-[var(--text-primary)]">Micro-Pause Contemplation Duration:</span>
              <p class="text-[11px] text-[var(--text-muted)]">Short quiet reflection between classes or meetings</p>
            </div>
            <select id="sched-micro" class="bg-[var(--bg-card)] border border-stone-300 dark:border-stone-700 rounded-lg px-2 py-1 text-xs font-sans text-[var(--text-primary)]">
              <option value="30" ${current.microPauseDuration === 30 ? 'selected' : ''}>30 Seconds</option>
              <option value="60" ${current.microPauseDuration === 60 ? 'selected' : ''}>60 Seconds</option>
            </select>
          </div>

          <!-- Submit Button -->
          <button type="submit" class="w-full py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm shadow-md transition transform active:scale-95">
            Save Routine Schedule
          </button>

        </form>

      </div>
    </div>
  `;

  // Listeners
  container.querySelector('#btn-close-schedule').addEventListener('click', onClose);

  container.querySelector('#schedule-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const enabled = container.querySelector('#sched-enabled').checked;
    const busyStart = container.querySelector('#sched-busy-start').value;
    const busyEnd = container.querySelector('#sched-busy-end').value;
    const breakStart = container.querySelector('#sched-break-start').value;
    const breakEnd = container.querySelector('#sched-break-end').value;
    const microPauseDuration = parseInt(container.querySelector('#sched-micro').value);

    await saveSchedule({
      enabled,
      busyStart,
      busyEnd,
      breakStart,
      breakEnd,
      microPauseDuration
    });

    onClose();
  });
}
