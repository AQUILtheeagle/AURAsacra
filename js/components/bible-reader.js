// Sacred Scripture Bible Reader for Aura Sacra
import { BIBLE_BOOKS, SCRIPTURE_TEXTS, ensureFullBibleLoaded, getLoadedBibleBooks } from '../data/scriptures.js';
import { SUPPORTED_BIBLES, getDefaultBibleForLanguage, getArchivalChapter } from '../data/scripture-archives.js';
import { icons } from '../icons.js';
import { getHighlights, saveHighlight, removeHighlight, getSetting } from '../db.js';
import { getLanguage, t, onLanguageChange } from '../i18n.js';

let activeBookId = 'matt';
let activeChapter = 5;
let activeBibleVersion = null;
let activeCanon = null;
let activeHighlights = [];
const selectedVerses = new Set();
let lastLoadedLang = null;

onLanguageChange(async (newLang) => {
  activeBibleVersion = getDefaultBibleForLanguage(newLang);
  lastLoadedLang = newLang;
  await ensureFullBibleLoaded(activeBibleVersion);
});

// Normalize legacy IDs
function normalizeBookAndChapter(bookId, chapter) {
  const legacyMap = {
    matt5: { book: 'matt', chapter: 5 },
    matt6: { book: 'matt', chapter: 6 },
    matt11: { book: 'matt', chapter: 11 },
    ps23: { book: 'ps', chapter: 23 },
    ps91: { book: 'ps', chapter: 91 },
    luke15: { book: 'luke', chapter: 15 },
    john1: { book: 'john', chapter: 1 },
    john14: { book: 'john', chapter: 14 },
    rom8: { book: 'rom', chapter: 8 },
    '1cor13': { book: '1cor', chapter: 13 },
    phil4: { book: 'phil', chapter: 4 },
    rev21: { book: 'rev', chapter: 21 }
  };
  if (legacyMap[bookId]) {
    return legacyMap[bookId];
  }
  return { book: bookId, chapter };
}

export async function renderBibleReader(container, onOpenShareCard) {
  const currentLang = getLanguage();
  if (!activeBibleVersion || lastLoadedLang !== currentLang) {
    activeBibleVersion = getDefaultBibleForLanguage(currentLang);
    lastLoadedLang = currentLang;
  }
  if (!activeCanon) {
    const userConfession = await getSetting('user_confession', 'ecumenical');
    if (userConfession === 'catholic' || userConfession === 'traditional') {
      activeCanon = 'catholic';
    } else if (userConfession === 'orthodox') {
      activeCanon = 'orthodox';
    } else if (userConfession === 'protestant') {
      activeCanon = 'protestant';
    } else {
      activeCanon = 'all';
    }
  }
  await ensureFullBibleLoaded(activeBibleVersion);

  const norm = normalizeBookAndChapter(activeBookId, activeChapter);
  activeBookId = norm.book;
  activeChapter = norm.chapter;

  activeHighlights = await getHighlights(activeBookId, activeChapter);

  function filterBooksByCanon(books, canonId) {
    if (!canonId || canonId === 'all') return books;
    if (canonId === 'protestant') {
      return books.filter((b) => b.testament !== 'Deuterocanon & Apocrypha');
    }
    if (canonId === 'catholic') {
      const catholicDeut = ['tob', 'jdt', 'wis', 'sir', 'bar', '1macc', '2macc'];
      return books.filter((b) => b.testament !== 'Deuterocanon & Apocrypha' || catholicDeut.includes(b.id));
    }
    if (canonId === 'orthodox') {
      const orthodoxDeut = ['tob', 'jdt', 'wis', 'sir', 'bar', '1macc', '2macc', '1esd', 'man', 'prazar', 'sus', 'bel'];
      return books.filter((b) => b.testament !== 'Deuterocanon & Apocrypha' || orthodoxDeut.includes(b.id));
    }
    return books;
  }

  function getCitationRange(bookTitle, chapterNum, verseNums) {
    if (!verseNums || verseNums.length === 0) return `${bookTitle} ${chapterNum}`;
    const sorted = [...verseNums].sort((a, b) => a - b);
    if (sorted.length === 1) {
      return `${bookTitle} ${chapterNum}:${sorted[0]}`;
    }
    const isContiguous = sorted[sorted.length - 1] - sorted[0] === sorted.length - 1;
    if (isContiguous) {
      return `${bookTitle} ${chapterNum}:${sorted[0]}–${sorted[sorted.length - 1]}`;
    }
    return `${bookTitle} ${chapterNum}:${sorted.join(', ')}`;
  }

  function getCombinedVersesText(chapterVerses, verseNums) {
    const sorted = [...verseNums].sort((a, b) => a - b);
    if (sorted.length === 1) {
      const vObj = chapterVerses.find((v) => v.v === sorted[0]);
      return vObj ? (vObj.text || vObj.en) : '';
    }
    return sorted
      .map((vNum) => {
        const vObj = chapterVerses.find((v) => v.v === vNum);
        return vObj ? `[${vNum}] ${vObj.text || vObj.en}` : '';
      })
      .filter(Boolean)
      .join('\n\n');
  }

  async function updateView() {
    await ensureFullBibleLoaded(activeBibleVersion);

    const allAvailableBooks = getLoadedBibleBooks(activeBibleVersion) || BIBLE_BOOKS;
    const activeBooks = filterBooksByCanon(allAvailableBooks, activeCanon);
    const currentBookIndex = activeBooks.findIndex((b) => b.id === activeBookId);
    const book = currentBookIndex >= 0 ? activeBooks[currentBookIndex] : (activeBooks[0] || BIBLE_BOOKS[0]);
    activeBookId = book.id;

    const availableChapters = book.chapters || [1];
    if (!availableChapters.includes(activeChapter)) {
      activeChapter = availableChapters[0];
    }

    const currentBibleObj = SUPPORTED_BIBLES.find((b) => b.id === activeBibleVersion) || SUPPORTED_BIBLES[0];
    const archivalChapter = getArchivalChapter(activeBibleVersion, activeBookId, activeChapter);
    const isArchivalCustom = !!archivalChapter;

    const currentChapterIndex = availableChapters.indexOf(activeChapter);
    const chapterData = archivalChapter || SCRIPTURE_TEXTS[activeBookId]?.[activeChapter] || {
      title: `Chapter ${activeChapter}`,
      verses: []
    };

    const hasPrevChapter = currentChapterIndex > 0 || currentBookIndex > 0;
    const hasNextChapter =
      currentChapterIndex < availableChapters.length - 1 || currentBookIndex < activeBooks.length - 1;

    // Group books by testament for clean categorized dropdown
    const testamentOld = t('reader.testamentOld', 'Old Testament');
    const testamentDeut = t('reader.testamentDeut', 'Deuterocanon & Apocrypha');
    const testamentWisdom = t('reader.testamentWisdom', 'Wisdom & Poetry');
    const testamentProphets = t('reader.testamentProphets', 'Prophets');
    const testamentGospels = t('reader.testamentGospels', 'Gospels');
    const testamentEpistles = t('reader.testamentEpistles', 'Apostolic & Epistles');
    const testamentApocalypse = t('reader.testamentApocalypse', 'Apocalypse');

    const testamentGroups = {
      [testamentOld]: [],
      [testamentDeut]: [],
      [testamentWisdom]: [],
      [testamentProphets]: [],
      [testamentGospels]: [],
      [testamentEpistles]: [],
      [testamentApocalypse]: []
    };
    const testamentMap = {
      'Old Testament': testamentOld,
      'Deuterocanon & Apocrypha': testamentDeut,
      'Wisdom & Poetry': testamentWisdom,
      'Prophets': testamentProphets,
      'Gospels': testamentGospels,
      'Apostolic & Epistles': testamentEpistles,
      'Apocalypse': testamentApocalypse
    };
    activeBooks.forEach((b) => {
      const groupKey = testamentMap[b.testament] || testamentGospels;
      if (testamentGroups[groupKey]) {
        testamentGroups[groupKey].push(b);
      }
    });

    const isPsalm = book.id === 'ps';
    const chapterLabel = isPsalm ? t('reader.psalm', 'Psalm') : t('reader.chapter', 'Chapter');

    const selectedCount = selectedVerses.size;
    const sortedSelected = [...selectedVerses].sort((a, b) => a - b);
    const currentCitationRange = getCitationRange(book.title, activeChapter, sortedSelected);

    container.innerHTML = `
      <div class="space-y-6 pb-32 sm:pb-24">
        
        <!-- Header & Scripture Selector Toolbar -->
        <div class="bg-[var(--bg-card)] border border-stone-300 dark:border-stone-800 rounded-2xl p-3 sm:p-4 shadow-sm space-y-3">
          
          <!-- Top Row: Bible Version & Status Badge -->
          <div class="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 sm:gap-4">
            
            <!-- Version & Canon Selectors with Icon -->
            <div class="flex flex-wrap sm:flex-nowrap items-center gap-2 flex-1 min-w-0">
              <span class="text-amber-600 flex-shrink-0">${icons.book('w-5 h-5')}</span>
              <select id="select-bible-version" class="flex-1 min-w-[130px] bg-[var(--bg-secondary)] border border-stone-300 dark:border-stone-700 rounded-xl px-2.5 py-2 text-xs font-semibold text-[var(--text-primary)] focus:outline-none focus:border-amber-600 cursor-pointer shadow-sm truncate notranslate" translate="no" title="${t('reader.canonicalArchive', 'Historic Canonical Scripture Archive')}">
                ${SUPPORTED_BIBLES.map((b) => `
                  <option value="${b.id}" ${b.id === activeBibleVersion ? 'selected' : ''}>
                    ${b.flag} ${b.label} — ${b.name}
                  </option>
                `).join('')}
              </select>
              <select id="select-bible-canon" class="w-auto min-w-[130px] bg-[var(--bg-secondary)] border border-stone-300 dark:border-stone-700 rounded-xl px-2.5 py-2 text-xs font-semibold text-[var(--text-primary)] focus:outline-none focus:border-amber-600 cursor-pointer shadow-sm truncate notranslate" translate="no" title="${t('reader.canon', 'Scripture Canon')}">
                <option value="catholic" ${activeCanon === 'catholic' ? 'selected' : ''}>🕊️ ${t('reader.canonCatholic', 'Catholic (73)')}</option>
                <option value="orthodox" ${activeCanon === 'orthodox' ? 'selected' : ''}>☦️ ${t('reader.canonOrthodox', 'Orthodox (78)')}</option>
                <option value="protestant" ${activeCanon === 'protestant' ? 'selected' : ''}>📖 ${t('reader.canonProtestant', 'Protestant (66)')}</option>
                <option value="all" ${activeCanon === 'all' ? 'selected' : ''}>🏛️ ${t('reader.canonAll', 'All Books (80)')}</option>
              </select>
            </div>

            <!-- Scripture Archive Status & Selection Badge -->
            <div class="flex items-center justify-between sm:justify-end gap-2 flex-shrink-0">
              <button id="btn-toggle-select-all" class="text-xs font-sans font-medium text-amber-600 hover:text-amber-700 px-2.5 py-1.5 rounded-lg border border-amber-600/40 hover:bg-amber-600/10 transition cursor-pointer flex-shrink-0">
                ${selectedCount === chapterData.verses.length ? t('reader.deselectAll', 'Deselect All') : t('reader.selectChapter', 'Select Chapter')}
              </button>
              <div class="flex items-center gap-1.5 text-xs font-sans text-[var(--text-muted)] bg-[var(--bg-secondary)] px-2.5 py-1.5 rounded-xl border border-stone-300 dark:border-stone-700 notranslate flex-shrink-0" translate="no">
                <span class="w-2 h-2 rounded-full ${isArchivalCustom ? 'bg-emerald-500' : 'bg-amber-500'}"></span>
                <span class="truncate max-w-[150px] sm:max-w-none">${isArchivalCustom ? `${currentBibleObj.label} ${t('reader.canonicalArchive', 'Archive')}` : `KJV ${t('reader.canonicalArchive', 'Archive')}`}</span>
              </div>
            </div>

          </div>

          <!-- Bottom Row: Book, Chapter, and Steppers -->
          <div class="flex items-center gap-2 pt-2 border-t border-stone-200/60 dark:border-stone-800/60 w-full min-w-0">
            
            <!-- Book Dropdown -->
            <select id="select-bible-book" class="flex-1 min-w-0 max-w-full bg-[var(--bg-secondary)] border border-stone-300 dark:border-stone-700 rounded-xl px-2.5 sm:px-3 py-2 text-xs sm:text-sm font-display font-semibold text-[var(--text-primary)] focus:outline-none focus:border-amber-600 cursor-pointer shadow-sm truncate notranslate" translate="no">
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

            <!-- Chapter Dropdown -->
            <select id="select-bible-chapter" class="w-24 sm:w-32 flex-shrink-0 bg-[var(--bg-secondary)] border border-stone-300 dark:border-stone-700 rounded-xl px-2 sm:px-3 py-2 text-xs sm:text-sm font-display font-semibold text-[var(--text-primary)] focus:outline-none focus:border-amber-600 cursor-pointer shadow-sm notranslate" translate="no">
              ${availableChapters
                .map(
                  (ch) => `
                <option value="${ch}" ${ch === activeChapter ? 'selected' : ''}>
                  ${chapterLabel} ${ch}
                </option>
              `
                )
                .join('')}
            </select>

            <!-- Chapter Stepper Buttons -->
            <div class="flex items-center gap-1 flex-shrink-0">
              <button id="btn-prev-chapter" class="p-2 rounded-lg border border-stone-300 dark:border-stone-700 text-[var(--text-secondary)] hover:text-amber-600 hover:border-amber-600 transition disabled:opacity-30 disabled:pointer-events-none cursor-pointer" ${
                !hasPrevChapter ? 'disabled' : ''
              } title="${t('reader.prevChapter', 'Previous Chapter')}">
                ${icons.chevronLeft('w-4 h-4')}
              </button>
              <button id="btn-next-chapter" class="p-2 rounded-lg border border-stone-300 dark:border-stone-700 text-[var(--text-secondary)] hover:text-amber-600 hover:border-amber-600 transition disabled:opacity-30 disabled:pointer-events-none cursor-pointer" ${
                !hasNextChapter ? 'disabled' : ''
              } title="${t('reader.nextChapter', 'Next Chapter')}">
                ${icons.chevronRight('w-4 h-4')}
              </button>
            </div>

          </div>

        </div>

        <!-- Sacred Manuscript Open-Codex View -->
        <div class="bg-[var(--bg-parchment)] border-2 border-stone-300/80 dark:border-stone-800/80 rounded-2xl p-4 sm:p-8 md:p-10 shadow-lg relative parchment-border notranslate" translate="no">
          
          <!-- Chapter Heading -->
          <div class="text-center mb-8 border-b border-stone-300/60 dark:border-stone-800 pb-4 notranslate" translate="no">
            <span class="text-xs uppercase tracking-widest text-amber-700 dark:text-amber-500 font-sans font-semibold notranslate" translate="no">
              ${testamentMap[book.testament] || book.testament} • ${book.title}
            </span>
            <h2 class="text-2xl sm:text-3xl font-display font-bold text-[var(--accent-vermilion)] mt-1 mb-1 notranslate" translate="no">
              ${book.title} ${isPsalm ? '' : `${chapterLabel} `}${activeChapter}
            </h2>
            <p class="text-sm sm:text-base font-serif italic text-[var(--text-muted)] notranslate" translate="no">
              ${chapterData.title}
            </p>
          </div>

          <!-- Verses Feed -->
          <div class="space-y-3 max-w-3xl mx-auto notranslate" translate="no">
            ${chapterData.verses
              .map((verse, idx) => {
                const highlight = activeHighlights.find((h) => h.verse === verse.v);
                const hlClass = highlight ? `hl-${highlight.color}` : '';
                const isSelected = selectedVerses.has(verse.v);
                const isFirstVerse = idx === 0;
                const verseText = verse.text || verse.en;

                return `
                <div class="group relative rounded-xl p-3 transition border ${
                  isSelected
                    ? 'border-amber-600 bg-amber-500/10 shadow-sm'
                    : 'border-transparent hover:border-stone-300 dark:hover:border-stone-800 hover:bg-stone-500/5'
                }" data-verse-num="${verse.v}">
                  
                  <div class="flex items-start gap-3">
                    
                    <!-- Verse Checkbox Toggle -->
                    <button class="verse-checkbox-btn mt-1 text-stone-400 hover:text-amber-600 transition flex-shrink-0" data-verse="${
                      verse.v
                    }" title="${isSelected ? t('reader.deselectVerse', 'Deselect Verse') : t('reader.selectVerse', 'Select Verse')}">
                      <span class="w-4 h-4 rounded border flex items-center justify-center ${
                        isSelected
                          ? 'bg-amber-600 border-amber-600 text-white'
                          : 'border-stone-400 dark:border-stone-600 hover:border-amber-600'
                      }">
                        ${isSelected ? icons.check('w-3 h-3') : ''}
                      </span>
                    </button>

                    <!-- Clickable Verse Reference Badge (Nome Numero:Numero) to send card directly -->
                    <button class="verse-ref-click-btn font-mono text-xs font-bold text-amber-700 dark:text-amber-400 bg-amber-500/10 hover:bg-amber-600 hover:text-white px-2 py-0.5 rounded-lg border border-amber-600/30 transition shadow-xs flex items-center gap-1 flex-shrink-0 mt-0.5 cursor-pointer notranslate" translate="no" data-verse-num="${verse.v}" title="${book.title} ${isPsalm ? '' : activeChapter + ':'}${isPsalm ? activeChapter + ':' : ''}${verse.v}">
                      <span>${book.title} ${isPsalm ? '' : activeChapter + ':'}${isPsalm ? activeChapter + ':' : ''}${verse.v}</span>
                    </button>
                    
                    <!-- Verse Body -->
                    <div class="flex-1 text-base sm:text-lg leading-relaxed ${hlClass} rounded px-1.5 py-0.5 text-[var(--text-primary)] font-serif cursor-pointer verse-text-body notranslate" translate="no" data-verse="${
                  verse.v
                }">
                      ${
                        isFirstVerse
                          ? `<span class="illuminated-initial notranslate" translate="no">${verseText[0]}</span>${verseText.slice(1)}`
                          : verseText
                      }
                    </div>
                  </div>

                  <!-- Verse Toolbar (Individual Highlights & Share Card) -->
                  <div class="mt-2 pt-2 border-t border-stone-200/70 dark:border-stone-800/50 flex items-center justify-between opacity-75 group-hover:opacity-100 transition pl-7">
                    
                    <!-- 5-Color Spiritual Highlighting Palette -->
                    <div class="flex items-center gap-1.5">
                      <span class="text-[10px] uppercase tracking-wider font-sans text-[var(--text-muted)] hidden sm:inline">${t('reader.highlight', 'Highlight:')}</span>
                      
                      <button class="hl-btn w-4 h-4 rounded-full bg-amber-400 border border-amber-600 hover:scale-125 transition" data-color="gold" title="${t('reader.palette.goldDesc', 'Gold: Grace & Promises')}"></button>
                      <button class="hl-btn w-4 h-4 rounded-full bg-blue-400 border border-blue-600 hover:scale-125 transition" data-color="blue" title="${t('reader.palette.blueDesc', 'Blue: Peace & Faith')}"></button>
                      <button class="hl-btn w-4 h-4 rounded-full bg-red-400 border border-red-600 hover:scale-125 transition" data-color="red" title="${t('reader.palette.redDesc', 'Red: Sacrifice & Love')}"></button>
                      <button class="hl-btn w-4 h-4 rounded-full bg-emerald-400 border border-emerald-600 hover:scale-125 transition" data-color="green" title="${t('reader.palette.greenDesc', 'Green: Spiritual Growth')}"></button>
                      <button class="hl-btn w-4 h-4 rounded-full bg-purple-400 border border-purple-600 hover:scale-125 transition" data-color="purple" title="${t('reader.palette.purpleDesc', 'Purple: Wisdom & Repentance')}"></button>
                      
                      ${
                        highlight
                          ? `
                        <button class="remove-hl-btn text-[10px] text-red-500 hover:underline ml-1 cursor-pointer" data-verse="${verse.v}">
                          ${t('reader.remove', 'Remove')}
                        </button>
                      `
                          : ''
                      }
                    </div>

                    <!-- Single Verse Share Card Button -->
                    <button class="share-single-verse-btn flex items-center gap-1 text-xs text-amber-600 hover:text-amber-700 font-sans font-medium cursor-pointer" data-verse-text="${encodeURIComponent(
                      verseText
                    )}" data-ref="${book.title} ${isPsalm ? '' : activeChapter + ':'}${isPsalm ? activeChapter + ':' : ''}${verse.v}">
                      ${icons.share('w-3.5 h-3.5')}
                      <span>${t('reader.shareCard', 'Share Card')}</span>
                    </button>

                  </div>

                </div>
              `;
              })
              .join('')}
          </div>

        </div>

        <!-- Sticky Floating Multi-Verse Action Bar -->
        ${
          selectedCount > 0
            ? `
          <div class="fixed bottom-28 sm:bottom-24 md:bottom-6 left-1/2 -translate-x-1/2 z-40 bg-[var(--bg-card)]/95 backdrop-blur-md border-2 border-amber-600/80 shadow-2xl rounded-2xl px-4 py-3 flex flex-wrap items-center justify-between gap-3 max-w-xl w-[92%] animate-fade-in parchment-border">
            
            <div class="flex items-center gap-2">
              <span class="bg-amber-600 text-white font-bold text-xs px-2.5 py-1 rounded-full shadow-sm">
                ${selectedCount} ${selectedCount === 1 ? t('reader.verse', 'Verse') : t('reader.verses', 'Verses')}
              </span>
              <button id="btn-click-range-ref" class="text-xs sm:text-sm font-display font-bold text-[var(--accent-vermilion)] hover:text-amber-600 cursor-pointer flex items-center gap-1" title="${t('reader.clickToShare', 'Click to share')} ${currentCitationRange}">
                <span>${currentCitationRange}</span>
              </button>
            </div>

            <!-- Batch Palette and Share Selection Button -->
            <div class="flex items-center gap-2">
              <!-- Batch Highlights -->
              <div class="hidden sm:flex items-center gap-1 border-r border-stone-300 dark:border-stone-700 pr-2">
                <span class="text-[10px] text-[var(--text-muted)] mr-1">${t('reader.highlightAll', 'Highlight all:')}</span>
                <button class="batch-hl-btn w-3.5 h-3.5 rounded-full bg-amber-400 border border-amber-600 hover:scale-125 transition cursor-pointer" data-color="gold" title="${t('reader.palette.gold', 'Gold')}"></button>
                <button class="batch-hl-btn w-3.5 h-3.5 rounded-full bg-blue-400 border border-blue-600 hover:scale-125 transition cursor-pointer" data-color="blue" title="${t('reader.palette.blue', 'Blue')}"></button>
                <button class="batch-hl-btn w-3.5 h-3.5 rounded-full bg-red-400 border border-red-600 hover:scale-125 transition cursor-pointer" data-color="red" title="${t('reader.palette.red', 'Red')}"></button>
                <button class="batch-hl-btn w-3.5 h-3.5 rounded-full bg-emerald-400 border border-emerald-600 hover:scale-125 transition cursor-pointer" data-color="green" title="${t('reader.palette.green', 'Green')}"></button>
                <button class="batch-hl-btn w-3.5 h-3.5 rounded-full bg-purple-400 border border-purple-600 hover:scale-125 transition cursor-pointer" data-color="purple" title="${t('reader.palette.purple', 'Purple')}"></button>
                <button type="button" class="batch-remove-hl-btn text-[10px] text-red-500 hover:underline ml-1 font-sans cursor-pointer" title="${t('reader.removeHlTooltip', 'Remove highlights from selected verses')}">${t('reader.clear', 'Clear')}</button>
              </div>

              <!-- Share Selection as Card -->
              <button id="btn-share-selection-card" class="bg-amber-600 hover:bg-amber-700 text-white px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition shadow-md active:scale-95 cursor-pointer">
                ${icons.share('w-3.5 h-3.5')}
                <span>${t('reader.shareSelection', 'Share Range Card')}</span>
              </button>

              <!-- Clear Selection -->
              <button id="btn-clear-selection" class="text-xs text-[var(--text-muted)] hover:text-red-500 px-2 py-1 transition" title="${t('reader.clearSelection', 'Clear selection')}">
                ${icons.close('w-4 h-4')}
              </button>
            </div>

          </div>
        `
            : ''
        }

      </div>
    `;

    // 0. Bible Version Selector Change
    const versionSelect = container.querySelector('#select-bible-version');
    if (versionSelect) {
      versionSelect.addEventListener('change', async (e) => {
        activeBibleVersion = e.target.value;
        await ensureFullBibleLoaded(activeBibleVersion);
        selectedVerses.clear();
        await updateView();
      });
    }

    // 0b. Scripture Canon Selector Change
    const canonSelect = container.querySelector('#select-bible-canon');
    if (canonSelect) {
      canonSelect.addEventListener('change', async (e) => {
        activeCanon = e.target.value;
        const allAvailableBooks = getLoadedBibleBooks(activeBibleVersion) || BIBLE_BOOKS;
        const currentActiveBooks = filterBooksByCanon(allAvailableBooks, activeCanon);
        if (!currentActiveBooks.some((b) => b.id === activeBookId)) {
          activeBookId = currentActiveBooks[0]?.id || 'gen';
          activeChapter = 1;
        }
        selectedVerses.clear();
        await updateView();
      });
    }

    // 1. Book Selector Change
    container.querySelector('#select-bible-book').addEventListener('change', async (e) => {
      activeBookId = e.target.value;
      const allAvailableBooks = getLoadedBibleBooks(activeBibleVersion) || BIBLE_BOOKS;
      const currentActiveBooks = filterBooksByCanon(allAvailableBooks, activeCanon);
      const targetBook = currentActiveBooks.find((b) => b.id === activeBookId) || allAvailableBooks.find((b) => b.id === activeBookId);
      activeChapter = targetBook?.chapters?.[0] || 1;
      selectedVerses.clear();
      activeHighlights = await getHighlights(activeBookId, activeChapter);
      await updateView();
    });

    // 2. Chapter Selector Change
    container.querySelector('#select-bible-chapter').addEventListener('change', async (e) => {
      activeChapter = parseInt(e.target.value, 10);
      selectedVerses.clear();
      activeHighlights = await getHighlights(activeBookId, activeChapter);
      await updateView();
    });

    // 3. Previous Chapter
    const prevBtn = container.querySelector('#btn-prev-chapter');
    if (prevBtn) {
      prevBtn.addEventListener('click', async () => {
        if (currentChapterIndex > 0) {
          activeChapter = availableChapters[currentChapterIndex - 1];
        } else if (currentBookIndex > 0) {
          const prevBook = activeBooks[currentBookIndex - 1];
          activeBookId = prevBook.id;
          activeChapter = prevBook.chapters[prevBook.chapters.length - 1];
        }
        selectedVerses.clear();
        activeHighlights = await getHighlights(activeBookId, activeChapter);
        await updateView();
      });
    }

    // 4. Next Chapter
    const nextBtn = container.querySelector('#btn-next-chapter');
    if (nextBtn) {
      nextBtn.addEventListener('click', async () => {
        if (currentChapterIndex < availableChapters.length - 1) {
          activeChapter = availableChapters[currentChapterIndex + 1];
        } else if (currentBookIndex < activeBooks.length - 1) {
          const nextBook = activeBooks[currentBookIndex + 1];
          activeBookId = nextBook.id;
          activeChapter = nextBook.chapters[0] || 1;
        }
        selectedVerses.clear();
        activeHighlights = await getHighlights(activeBookId, activeChapter);
        await updateView();
      });
    }

    // 5. Select All / Deselect All
    const selectAllBtn = container.querySelector('#btn-toggle-select-all');
    if (selectAllBtn) {
      selectAllBtn.addEventListener('click', async () => {
        if (selectedVerses.size === chapterData.verses.length) {
          selectedVerses.clear();
        } else {
          chapterData.verses.forEach((v) => selectedVerses.add(v.v));
        }
        await updateView();
      });
    }

    // 6. Checkbox Click and Verse Text Click
    container.querySelectorAll('.verse-checkbox-btn').forEach((btn) => {
      btn.addEventListener('click', async (e) => {
        e.stopPropagation();
        const vNum = parseInt(btn.getAttribute('data-verse'), 10);
        if (selectedVerses.has(vNum)) {
          selectedVerses.delete(vNum);
        } else {
          selectedVerses.add(vNum);
        }
        await updateView();
      });
    });

    container.querySelectorAll('.verse-text-body').forEach((el) => {
      el.addEventListener('click', async () => {
        const vNum = parseInt(el.getAttribute('data-verse'), 10);
        if (selectedVerses.has(vNum)) {
          selectedVerses.delete(vNum);
        } else {
          selectedVerses.add(vNum);
        }
        await updateView();
      });
    });

    // 7. Individual Verse Highlight Listeners
    container.querySelectorAll('.hl-btn').forEach((btn) => {
      btn.addEventListener('click', async (e) => {
        if (e) {
          e.preventDefault();
          e.stopPropagation();
        }
        const verseEl = e.target.closest('[data-verse-num]');
        const verseNum = parseInt(verseEl.getAttribute('data-verse-num'), 10);
        const color = btn.getAttribute('data-color');
        const existing = activeHighlights.find((h) => h.verse === verseNum);
        if (existing && existing.color === color) {
          await removeHighlight(activeBookId, activeChapter, verseNum);
        } else {
          await saveHighlight(activeBookId, activeChapter, verseNum, color);
        }
        activeHighlights = await getHighlights(activeBookId, activeChapter);
        await updateView();
      });
    });

    container.querySelectorAll('.remove-hl-btn').forEach((btn) => {
      btn.addEventListener('click', async (e) => {
        if (e) {
          e.preventDefault();
          e.stopPropagation();
        }
        const verseNum = parseInt(btn.getAttribute('data-verse'), 10);
        await removeHighlight(activeBookId, activeChapter, verseNum);
        activeHighlights = await getHighlights(activeBookId, activeChapter);
        await updateView();
      });
    });

    // 8. Click on Verse Reference (Nome Numero:Numero) to Send Card Directly
    container.querySelectorAll('.verse-ref-click-btn').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const vNum = parseInt(btn.getAttribute('data-verse-num'), 10);
        const vObj = chapterData.verses.find((v) => v.v === vNum);
        if (vObj) {
          const text = vObj.text || vObj.en;
          const ref = `${book.title} ${isPsalm ? '' : activeChapter + ':'}${isPsalm ? activeChapter + ':' : ''}${vNum}`;
          onOpenShareCard(text, ref);
        }
      });
    });

    // Individual Verse Share Card Button
    container.querySelectorAll('.share-single-verse-btn').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const text = decodeURIComponent(btn.getAttribute('data-verse-text'));
        const ref = btn.getAttribute('data-ref');
        onOpenShareCard(text, ref);
      });
    });

    // 9. Multi-Verse Floating Action Bar Handlers
    const triggerShareSelection = () => {
      const sorted = [...selectedVerses].sort((a, b) => a - b);
      const combinedText = getCombinedVersesText(chapterData.verses, sorted);
      const citationRange = getCitationRange(book.title, activeChapter, sorted);
      onOpenShareCard(combinedText, citationRange);
    };

    const shareSelectionBtn = container.querySelector('#btn-share-selection-card');
    if (shareSelectionBtn) {
      shareSelectionBtn.addEventListener('click', triggerShareSelection);
    }

    const clickRangeRefBtn = container.querySelector('#btn-click-range-ref');
    if (clickRangeRefBtn) {
      clickRangeRefBtn.addEventListener('click', triggerShareSelection);
    }

    const clearSelectionBtn = container.querySelector('#btn-clear-selection');
    if (clearSelectionBtn) {
      clearSelectionBtn.addEventListener('click', async () => {
        selectedVerses.clear();
        await updateView();
      });
    }

    // 10. Batch Highlighting for Selected Verses
    container.querySelectorAll('.batch-hl-btn').forEach((btn) => {
      btn.addEventListener('click', async (e) => {
        if (e) {
          e.preventDefault();
          e.stopPropagation();
        }
        const color = btn.getAttribute('data-color');
        const promises = [...selectedVerses].map((vNum) =>
          saveHighlight(activeBookId, activeChapter, vNum, color)
        );
        await Promise.all(promises);
        activeHighlights = await getHighlights(activeBookId, activeChapter);
        await updateView();
      });
    });

    container.querySelectorAll('.batch-remove-hl-btn').forEach((btn) => {
      btn.addEventListener('click', async (e) => {
        if (e) {
          e.preventDefault();
          e.stopPropagation();
        }
        const promises = [...selectedVerses].map((vNum) =>
          removeHighlight(activeBookId, activeChapter, vNum)
        );
        await Promise.all(promises);
        activeHighlights = await getHighlights(activeBookId, activeChapter);
        await updateView();
      });
    });
  }

  await updateView();
}
