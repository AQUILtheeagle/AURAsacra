// Prayer Journal (Diario delle Preghiere) for Aura Sacra
// Each entry without a newline is an independent prayer container. Auto-scrolls to the bottom on opening.
import { icons } from '../icons.js';
import { getJournalEntries, addJournalEntry, deleteJournalEntry, markJournalEntrySentToJesus } from '../db.js';

export async function renderPrayerJournal(container, onBringPrayerToJesus) {
  let entries = await getJournalEntries();

  function renderView() {
    container.innerHTML = `
      <div class="bg-[var(--bg-card)] border border-stone-300 dark:border-stone-800 rounded-2xl shadow-lg flex flex-col h-[78vh] overflow-hidden">
        
        <!-- Header -->
        <div class="px-6 py-4 border-b border-stone-200 dark:border-stone-800 bg-[var(--bg-secondary)] flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full border border-red-500/30 bg-[var(--bg-card)] flex items-center justify-center text-red-500 shadow-sm">
              ${icons.heart('w-5 h-5')}
            </div>
            <div>
              <h2 class="text-base sm:text-lg font-bold font-display text-[var(--accent-vermilion)]">
                Prayer Journal
              </h2>
              <p class="text-xs text-[var(--text-muted)] italic font-serif">
                Every line is a prayer to God. Tap "Bring to Jesus" to dialogue in the AI chat.
              </p>
            </div>
          </div>

          <span class="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-[var(--bg-card)] border border-stone-300 dark:border-stone-700 text-[var(--text-muted)]">
            ${entries.length} Prayers
          </span>
        </div>

        <!-- Scrollable Prayers Feed -->
        <div id="journal-scroll-feed" class="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          ${entries.length === 0 ? `
            <div class="text-center py-16 px-4 max-w-sm mx-auto space-y-3">
              <div class="w-12 h-12 rounded-full bg-amber-500/10 text-amber-600 flex items-center justify-center mx-auto">
                ${icons.plus('w-6 h-6')}
              </div>
              <h3 class="text-base font-bold font-display text-[var(--accent-vermilion)]">
                The First Page of Your Soul
              </h3>
              <p class="text-sm italic text-[var(--text-muted)] leading-relaxed">
                Write a prayer, a sigh, a petition, or a word of gratitude in the box below. It will be preserved privately offline.
              </p>
            </div>
          ` : entries.map((entry) => {
            const dateStr = new Date(entry.createdAt).toLocaleDateString([], { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
            return `
              <div class="bg-[var(--bg-parchment)] border border-stone-300/80 dark:border-stone-800 rounded-xl p-4 shadow-sm relative group transition hover:border-amber-600/40" data-entry-id="${entry.id}">
                
                <!-- Prayer Text -->
                <p class="text-base sm:text-lg font-serif text-[var(--text-primary)] leading-relaxed whitespace-pre-wrap">
                  «${entry.text}»
                </p>

                <!-- Prayer Footer: Date, Bring to Jesus, and Delete -->
                <div class="mt-3 pt-2 border-t border-stone-200/80 dark:border-stone-800/80 flex items-center justify-between gap-2">
                  <span class="text-[11px] font-sans text-stone-400">
                    ${dateStr}
                  </span>

                  <div class="flex items-center gap-2">
                    <!-- Bring to Jesus Button -->
                    <button class="btn-bring-jesus flex items-center gap-1.5 px-3 py-1 rounded-lg border border-amber-600/40 bg-amber-600/10 hover:bg-amber-600/20 text-amber-600 text-xs font-medium transition" data-text="${encodeURIComponent(entry.text)}" data-id="${entry.id}">
                      ${icons.message('w-3.5 h-3.5')}
                      <span>Bring to Jesus</span>
                    </button>

                    <!-- Delete Button -->
                    <button class="btn-delete-entry text-stone-400 hover:text-red-500 p-1 transition" data-id="${entry.id}" title="Delete prayer">
                      ${icons.trash('w-3.5 h-3.5')}
                    </button>
                  </div>
                </div>

              </div>
            `;
          }).join('')}
        </div>

        <!-- Input Box at the Bottom (Always Focused / Ready) -->
        <div class="p-3 sm:p-4 border-t border-stone-200 dark:border-stone-800 bg-[var(--bg-secondary)]">
          <form id="journal-input-form" class="flex items-center gap-2">
            <input 
              type="text" 
              id="journal-input" 
              placeholder="Write a prayer to God (press Enter to place in your journal)..." 
              class="flex-1 bg-[var(--bg-card)] border border-stone-300 dark:border-stone-700 rounded-xl px-4 py-2.5 text-sm sm:text-base text-[var(--text-primary)] focus:outline-none focus:border-amber-600"
              autocomplete="off"
            />
            <button 
              type="submit" 
              class="p-2.5 sm:px-4 rounded-xl bg-amber-700 hover:bg-amber-800 text-white font-medium shadow-md transition transform active:scale-95 flex items-center gap-1.5"
            >
              ${icons.plus('w-4 h-4')}
              <span class="hidden sm:inline text-xs font-sans uppercase tracking-wider font-bold">Send to God</span>
            </button>
          </form>
        </div>

      </div>
    `;

    // Ensure it scrolls to the bottom so the user finds the space to write
    const feed = container.querySelector('#journal-scroll-feed');
    if (feed) {
      setTimeout(() => {
        feed.scrollTop = feed.scrollHeight;
      }, 50);
    }

    // Form submission handler
    const form = container.querySelector('#journal-input-form');
    const input = container.querySelector('#journal-input');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const text = input.value.trim();
      if (!text) return;

      input.value = '';
      await addJournalEntry(text);
      entries = await getJournalEntries();
      renderView();
    });

    // Bring to Jesus action handler
    container.querySelectorAll('.btn-bring-jesus').forEach((btn) => {
      btn.addEventListener('click', async () => {
        const text = decodeURIComponent(btn.getAttribute('data-text'));
        const id = btn.getAttribute('data-id');
        await markJournalEntrySentToJesus(id);
        onBringPrayerToJesus(text);
      });
    });

    // Delete handler
    container.querySelectorAll('.btn-delete-entry').forEach((btn) => {
      btn.addEventListener('click', async () => {
        const id = btn.getAttribute('data-id');
        if (confirm('Delete this prayer?')) {
          await deleteJournalEntry(id);
          entries = await getJournalEntries();
          renderView();
        }
      });
    });
  }

  renderView();
}
