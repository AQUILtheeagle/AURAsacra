// Shareable Parchment Card Modal for WhatsApp, Telegram, iMessage, and Socials
import { generateParchmentCard, shareOrDownloadCard } from '../card-generator.js';
import { BIBLE_BOOKS, SCRIPTURE_TEXTS, ensureFullBibleLoaded } from '../data/scriptures.js';
import { icons } from '../icons.js';

export async function renderShareCardModal(container, initialQuote = '', initialCitation = '', onClose) {
  await ensureFullBibleLoaded();

  let quote = initialQuote || 'Blessed are the poor in spirit: for theirs is the kingdom of heaven.';
  let citation = initialCitation || 'Matthew 5:3';
  let previewDataUrl = null;
  let isGenerating = false;

  // Identify active book and chapter from initialCitation
  let activeBookId = 'matt';
  let activeChapter = 5;
  let activeVerseNum = 3;

  for (const b of BIBLE_BOOKS) {
    if (citation.toLowerCase().includes(b.title.toLowerCase()) || citation.toLowerCase().includes(b.id.toLowerCase())) {
      activeBookId = b.id;
      const match = citation.match(/(\d+):(\d+)/);
      if (match) {
        activeChapter = parseInt(match[1], 10);
        activeVerseNum = parseInt(match[2], 10);
      } else if (b.chapters?.length) {
        activeChapter = b.chapters[0];
      }
      break;
    }
  }

  async function updatePreview() {
    isGenerating = true;
    const { dataUrl } = await generateParchmentCard(quote, citation);
    previewDataUrl = dataUrl;
    isGenerating = false;
    render();
  }

  function render() {
    const book = BIBLE_BOOKS.find((b) => b.id === activeBookId) || BIBLE_BOOKS[2];
    const availableChapters = book.chapters || [1];
    if (!availableChapters.includes(activeChapter)) {
      activeChapter = availableChapters[0];
    }
    const chapterData = SCRIPTURE_TEXTS[activeBookId]?.[activeChapter] || {
      title: `Chapter ${activeChapter}`,
      verses: []
    };
    const isPsalm = book.id === 'ps';

    const testamentGroups = {
      'Old Testament': [],
      'Deuterocanon & Apocrypha': [],
      'Wisdom & Poetry': [],
      'Prophets': [],
      'Gospels': [],
      'Apostolic & Epistles': [],
      'Apocalypse': []
    };
    BIBLE_BOOKS.forEach((b) => {
      const groupKey = testamentGroups[b.testament] !== undefined ? b.testament : 'Gospels';
      testamentGroups[groupKey].push(b);
    });

    container.innerHTML = `
      <div class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
        <div class="bg-[var(--bg-card)] border-2 border-amber-600/50 rounded-3xl max-w-lg w-full max-h-[94vh] overflow-y-auto p-5 sm:p-6 shadow-2xl relative space-y-4 parchment-border">
          
          <!-- Close Button -->
          <button id="btn-close-share" class="absolute top-4 right-4 text-stone-400 hover:text-[var(--text-primary)] p-1 transition" title="Close">
            ${icons.close('w-5 h-5')}
          </button>

          <!-- Header -->
          <div class="text-center pr-6">
            <h2 class="text-xl sm:text-2xl font-bold font-display text-[var(--accent-vermilion)]">
              Share Sacred Scripture Card
            </h2>
            <p class="text-xs text-[var(--text-muted)] italic font-serif mt-0.5">
              Select any verse by clicking its reference below • Ready to send
            </p>
          </div>

          <!-- Live Card Preview -->
          <div class="relative rounded-2xl overflow-hidden shadow-xl border-2 border-amber-600/50 max-w-xs mx-auto aspect-square flex items-center justify-center bg-stone-900">
            ${previewDataUrl ? `
              <img src="${previewDataUrl}" alt="Aura Sacra Card" class="w-full h-full object-cover">
            ` : `
              <div class="text-xs text-amber-500 font-serif animate-pulse">Generating manuscript card...</div>
            `}
          </div>

          <!-- Selected Verse Badge (Read-Only, No Writing Required) -->
          <div class="bg-[var(--bg-secondary)] border border-amber-600/30 rounded-2xl p-3 text-center shadow-xs">
            <div class="text-[10px] uppercase font-sans font-bold tracking-widest text-amber-600">Selected Scripture to Send</div>
            <div class="text-base sm:text-lg font-display font-bold text-[var(--accent-vermilion)] mt-0.5">
              — ${citation} —
            </div>
            <div class="text-xs sm:text-sm font-serif italic text-[var(--text-primary)] mt-1 max-h-20 overflow-y-auto px-2 leading-relaxed">
              "${quote}"
            </div>
          </div>

          <!-- Quick Verse Selector: Click name and number:number to switch verse -->
          <div class="space-y-2 pt-1 border-t border-stone-200 dark:border-stone-800">
            <div class="flex items-center justify-between">
              <span class="text-[11px] font-sans font-bold uppercase tracking-wider text-[var(--text-muted)]">
                Select Verse to Send:
              </span>
              <span class="text-[11px] font-serif italic text-amber-600">
                Click any number to update card
              </span>
            </div>

            <!-- Book and Chapter Pickers -->
            <div class="grid grid-cols-2 gap-2">
              <select id="modal-select-book" class="bg-[var(--bg-secondary)] border border-stone-300 dark:border-stone-700 rounded-xl px-2.5 py-1.5 text-xs font-display font-semibold text-[var(--text-primary)] focus:outline-none focus:border-amber-600 cursor-pointer">
                ${Object.entries(testamentGroups)
                  .filter(([_, books]) => books.length > 0)
                  .map(
                    ([group, books]) => `
                  <optgroup label="${group}">
                    ${books
                      .map(
                        (b) => `
                      <option value="${b.id}" ${b.id === activeBookId ? 'selected' : ''}>
                        ${b.title}
                      </option>
                    `
                      )
                      .join('')}
                  </optgroup>
                `
                  )
                  .join('')}
              </select>

              <select id="modal-select-chapter" class="bg-[var(--bg-secondary)] border border-stone-300 dark:border-stone-700 rounded-xl px-2.5 py-1.5 text-xs font-display font-semibold text-[var(--text-primary)] focus:outline-none focus:border-amber-600 cursor-pointer">
                ${availableChapters.map((ch) => `
                  <option value="${ch}" ${ch === activeChapter ? 'selected' : ''}>
                    ${isPsalm ? 'Psalm' : 'Chapter'} ${ch}
                  </option>
                `).join('')}
              </select>
            </div>

            <!-- Clickable Verse Pills (numero:numero) -->
            <div class="flex flex-wrap gap-1.5 max-h-28 overflow-y-auto p-2 bg-[var(--bg-card)] rounded-xl border border-stone-300 dark:border-stone-800/80">
              ${chapterData.verses.map((v) => {
                const verseRef = `${book.title} ${isPsalm ? '' : activeChapter + ':'}${isPsalm ? activeChapter + ':' : ''}${v.v}`;
                const isCurrent = citation.includes(`${activeChapter}:${v.v}`) || (activeVerseNum === v.v && citation.includes(book.title));
                return `
                  <button class="modal-verse-chip px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition flex items-center gap-1 ${
                    isCurrent
                      ? 'bg-amber-600 text-white shadow-sm ring-1 ring-amber-500'
                      : 'bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:bg-amber-600/20 hover:text-amber-600 border border-stone-300/60 dark:border-stone-700/60'
                  }" data-verse-num="${v.v}" title="Select ${verseRef}">
                    <span>${activeChapter}:${v.v}</span>
                  </button>
                `;
              }).join('')}
            </div>
          </div>

          <!-- Share Actions -->
          <div class="pt-2 flex flex-col sm:flex-row items-center gap-2">
            <button id="btn-native-share" class="w-full flex-1 py-3 px-4 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs sm:text-sm shadow-md transition flex items-center justify-center gap-2 transform active:scale-95">
              ${icons.share('w-4 h-4')}
              <span>Share on WhatsApp / Telegram</span>
            </button>

            <button id="btn-download-image" class="w-full sm:w-auto py-3 px-4 rounded-xl border border-stone-300 dark:border-stone-700 hover:border-amber-600 text-xs sm:text-sm font-medium text-[var(--text-secondary)] flex items-center justify-center gap-1.5 transition">
              ${icons.download('w-4 h-4')}
              <span>Save Image</span>
            </button>
          </div>

        </div>
      </div>
    `;

    // Listeners
    container.querySelector('#btn-close-share').addEventListener('click', onClose);

    container.querySelector('#modal-select-book').addEventListener('change', (e) => {
      activeBookId = e.target.value;
      const targetBook = BIBLE_BOOKS.find((b) => b.id === activeBookId);
      activeChapter = targetBook?.chapters?.[0] || 1;
      const targetChapterData = SCRIPTURE_TEXTS[activeBookId]?.[activeChapter];
      if (targetChapterData && targetChapterData.verses.length > 0) {
        const firstV = targetChapterData.verses[0];
        activeVerseNum = firstV.v;
        quote = firstV.text || firstV.en;
        const psalmPrefix = targetBook.id === 'ps';
        citation = `${targetBook.title} ${psalmPrefix ? '' : activeChapter + ':'}${psalmPrefix ? activeChapter + ':' : ''}${firstV.v}`;
        updatePreview();
      } else {
        render();
      }
    });

    container.querySelector('#modal-select-chapter').addEventListener('change', (e) => {
      activeChapter = parseInt(e.target.value, 10);
      const targetChapterData = SCRIPTURE_TEXTS[activeBookId]?.[activeChapter];
      if (targetChapterData && targetChapterData.verses.length > 0) {
        const firstV = targetChapterData.verses[0];
        activeVerseNum = firstV.v;
        quote = firstV.text || firstV.en;
        const psalmPrefix = book.id === 'ps';
        citation = `${book.title} ${psalmPrefix ? '' : activeChapter + ':'}${psalmPrefix ? activeChapter + ':' : ''}${firstV.v}`;
        updatePreview();
      } else {
        render();
      }
    });

    container.querySelectorAll('.modal-verse-chip').forEach((chip) => {
      chip.addEventListener('click', () => {
        const vNum = parseInt(chip.getAttribute('data-verse-num'), 10);
        const verseObj = chapterData.verses.find((v) => v.v === vNum);
        if (verseObj) {
          activeVerseNum = vNum;
          quote = verseObj.text || verseObj.en;
          citation = `${book.title} ${isPsalm ? '' : activeChapter + ':'}${isPsalm ? activeChapter + ':' : ''}${vNum}`;
          updatePreview();
        }
      });
    });

    container.querySelector('#btn-native-share').addEventListener('click', async () => {
      await shareOrDownloadCard(quote, citation);
    });

    container.querySelector('#btn-download-image').addEventListener('click', async () => {
      await shareOrDownloadCard(quote, citation);
    });
  }

  await updatePreview();
}
