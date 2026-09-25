// Anonymous User Feedback to GitHub Issues Modal for Aura Sacra
import { formatAnonymousGitHubIssue } from '../github-feedback.js';
import { icons } from '../icons.js';

export function renderFeedbackModal(container, onClose) {
  let issueResult = null;

  function render() {
    container.innerHTML = `
      <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
        <div class="bg-[var(--bg-card)] border-2 border-stone-300 dark:border-stone-800 rounded-3xl max-w-lg w-full max-h-[92vh] overflow-y-auto p-6 shadow-2xl relative space-y-5 parchment-border">
          
          <!-- Close Button -->
          <button id="btn-close-feedback" class="absolute top-4 right-4 text-stone-400 hover:text-[var(--text-primary)] p-1">
            ${icons.close('w-5 h-5')}
          </button>

          <!-- Header -->
          <div class="text-center">
            <div class="w-12 h-12 rounded-full border border-stone-400/40 bg-[var(--bg-secondary)] flex items-center justify-center mx-auto text-[var(--text-primary)] mb-2">
              ${icons.github('w-6 h-6')}
            </div>
            <h2 class="text-2xl font-bold font-display text-[var(--accent-vermilion)]">
              Anonymous Community Feedback
            </h2>
            <p class="text-xs text-[var(--text-muted)] italic font-serif">
              Algorithm that anonymizes community feedback and formats GitHub Issues.
            </p>
          </div>

          ${!issueResult ? `
            <form id="feedback-form" class="space-y-4 text-left">
              
              <!-- Category -->
              <div>
                <label class="block text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] font-sans mb-1">Category:</label>
                <select id="fb-category" class="w-full bg-[var(--bg-secondary)] border border-stone-300 dark:border-stone-700 rounded-xl px-3 py-2 text-xs sm:text-sm text-[var(--text-primary)]">
                  <option value="feature">💡 Feature Request</option>
                  <option value="bug">🐛 Bug Report</option>
                  <option value="spiritual">🕊️ Liturgical / Spiritual Suggestion</option>
                  <option value="question">❓ Question / Inquiry</option>
                </select>
              </div>

              <!-- Title -->
              <div>
                <label class="block text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] font-sans mb-1">Title / Subject:</label>
                <input type="text" id="fb-title" placeholder="e.g. Add Proverbs book, audio chime issue on Safari..." class="w-full bg-[var(--bg-secondary)] border border-stone-300 dark:border-stone-700 rounded-xl px-3 py-2 text-xs sm:text-sm text-[var(--text-primary)] focus:outline-none focus:border-amber-600 font-sans" required />
              </div>

              <!-- Details -->
              <div>
                <label class="block text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] font-sans mb-1">Description / Details:</label>
                <textarea id="fb-details" rows="4" placeholder="Write your feedback openly. The algorithm automatically sanitizes personal data and formats technical device diagnostics..." class="w-full bg-[var(--bg-secondary)] border border-stone-300 dark:border-stone-700 rounded-xl p-3 text-xs sm:text-sm text-[var(--text-primary)] focus:outline-none focus:border-amber-600 font-serif leading-relaxed" required></textarea>
              </div>

              <!-- Submit -->
              <button type="submit" class="w-full py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs sm:text-sm shadow-md transition transform active:scale-95 flex items-center justify-center gap-2">
                ${icons.github('w-4 h-4')}
                <span>Process with GitHub Issues Algorithm</span>
              </button>

            </form>
          ` : `
            <!-- Generated Result Preview -->
            <div class="space-y-4 animate-scale-up">
              
              <div class="p-3 bg-emerald-950/20 border border-emerald-500/40 rounded-xl text-xs text-emerald-500 flex items-center gap-2">
                ${icons.check('w-4 h-4')}
                <span>Issue generated and anonymized successfully!</span>
              </div>

              <div class="bg-[var(--bg-secondary)] border border-stone-300 dark:border-stone-800 rounded-xl p-3 max-h-48 overflow-y-auto">
                <pre class="text-[11px] font-mono whitespace-pre-wrap text-[var(--text-secondary)]">${issueResult.markdown}</pre>
              </div>

              <div class="flex flex-col sm:flex-row items-center gap-2 pt-2">
                <a href="${issueResult.url}" target="_blank" rel="noopener noreferrer" class="w-full flex-1 py-3 px-4 rounded-xl bg-stone-900 hover:bg-black text-white text-xs sm:text-sm font-bold shadow-md transition flex items-center justify-center gap-2">
                  ${icons.github('w-4 h-4')}
                  <span>Open on GitHub Issues</span>
                </a>

                <button id="btn-copy-payload" class="w-full sm:w-auto py-3 px-4 rounded-xl border border-stone-300 dark:border-stone-700 hover:border-amber-600 text-xs sm:text-sm font-medium text-[var(--text-primary)] flex items-center justify-center gap-1.5 transition">
                  ${icons.copy('w-4 h-4')}
                  <span>Copy Markdown</span>
                </button>
              </div>

              <button id="btn-reset-feedback" class="text-xs text-[var(--text-muted)] hover:underline block mx-auto pt-2">
                ← Submit another message
              </button>

            </div>
          `}

        </div>
      </div>
    `;

    // Handlers
    container.querySelector('#btn-close-feedback').addEventListener('click', onClose);

    const form = container.querySelector('#feedback-form');
    if (form) {
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const category = container.querySelector('#fb-category').value;
        const title = container.querySelector('#fb-title').value.trim();
        const details = container.querySelector('#fb-details').value.trim();

        issueResult = await formatAnonymousGitHubIssue({ category, title, details });
        render();
      });
    }

    const copyBtn = container.querySelector('#btn-copy-payload');
    if (copyBtn && issueResult) {
      copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(issueResult.markdown);
        alert('Markdown payload copied to clipboard!');
      });
    }

    const resetBtn = container.querySelector('#btn-reset-feedback');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        issueResult = null;
        render();
      });
    }
  }

  render();
}
