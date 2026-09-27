// Dedicated Google Gemini API Key Modal for Aura Sacra
import { icons } from '../icons.js';
import { getGeminiApiKey, setGeminiApiKey, removeGeminiApiKey, testGeminiApiKey } from '../ai-engine.js';
import { t } from '../i18n.js';

export async function renderApiKeyModal(container, onSaved, onClose) {
  const currentKey = await getGeminiApiKey();
  let isPasswordHidden = true;
  let statusMessage = null; // { type: 'success' | 'error' | 'loading', text: '' }
  let isTesting = false;

  function render() {
    container.innerHTML = `
      <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in" id="api-key-modal-overlay">
        <div class="bg-[var(--bg-card)] border-2 border-stone-300 dark:border-stone-800 rounded-3xl max-w-md w-full max-h-[90vh] overflow-y-auto p-6 shadow-2xl relative space-y-5 parchment-border">
          
          <!-- Close Button -->
          <button id="btn-close-api-key-modal" class="absolute top-4 right-4 text-stone-400 hover:text-[var(--text-primary)] p-1.5 rounded-lg transition cursor-pointer" title="${t('common.close', 'Close')}">
            ${icons.close('w-5 h-5')}
          </button>

          <!-- Header -->
          <div class="text-center space-y-1.5">
            <div class="w-12 h-12 rounded-full border border-amber-500/40 bg-amber-500/10 flex items-center justify-center mx-auto text-amber-600 shadow-sm">
              ${icons.key('w-6 h-6')}
            </div>
            <h2 class="text-xl sm:text-2xl font-bold font-display text-[var(--accent-vermilion)]">
              ${t('apiKeyModal.title', 'Google Gemini API Key')}
            </h2>
            <p class="text-xs text-[var(--text-muted)] italic font-serif">
              ${t('apiKeyModal.subtitle', 'Answers real questions, doubts, and dilemmas with Google Gemini (3.7 & 3.8 Flash)')}
            </p>
          </div>

          <!-- Current Key Status Badge -->
          <div class="p-3 rounded-xl border ${currentKey ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-800 dark:text-emerald-300' : 'bg-stone-500/10 border-stone-400/30 text-stone-600 dark:text-stone-400'} text-xs flex items-center justify-between">
            <span class="font-medium">${t('apiKeyModal.activeStatus', 'Active Status:')}</span>
            <span class="font-semibold flex items-center gap-1.5">
              ${currentKey ? `
                <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>${t('apiKeyModal.configured', 'Configured')} (${currentKey.slice(0, 6)}...${currentKey.slice(-4)})</span>
              ` : `
                <span class="w-2 h-2 rounded-full bg-amber-500"></span>
                <span>${t('apiKeyModal.noKey', 'No Key Configured')}</span>
              `}
            </span>
          </div>

          <!-- Input Field Area -->
          <div class="space-y-2">
            <div class="flex items-center justify-between text-xs">
              <label for="input-gemini-key-val" class="font-bold text-[var(--text-secondary)] font-sans uppercase tracking-wider text-[11px]">
                ${t('apiKeyModal.enterKey', 'Enter Gemini API Key:')}
              </label>
              <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener noreferrer" class="text-amber-600 hover:underline flex items-center gap-1 font-medium">
                <span>${t('apiKeyModal.getFreeKey', 'Get Free Key')}</span>
                <span class="text-[10px]">↗</span>
              </a>
            </div>

            <!-- Input with Eye and Clear -->
            <div class="relative flex items-center">
              <input 
                type="${isPasswordHidden ? 'password' : 'text'}" 
                id="input-gemini-key-val" 
                value="${currentKey}" 
                placeholder="AIzaSy..." 
                autocomplete="off"
                spellcheck="false"
                class="w-full bg-[var(--bg-secondary)] border border-stone-300 dark:border-stone-700 rounded-xl pl-3 pr-20 py-2.5 text-xs font-mono text-[var(--text-primary)] focus:outline-none focus:border-amber-600 shadow-inner"
              />

              <div class="absolute right-2 flex items-center gap-1">
                <!-- Toggle Visibility -->
                <button 
                  type="button" 
                  id="btn-toggle-key-visibility" 
                  class="p-1 text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 transition cursor-pointer" 
                  title="${isPasswordHidden ? t('apiKeyModal.showKey', 'Show Key') : t('apiKeyModal.hideKey', 'Hide Key')}"
                >
                  ${isPasswordHidden ? icons.eye('w-4 h-4') : icons.eyeOff('w-4 h-4')}
                </button>

                <!-- Clear Key -->
                <button 
                  type="button" 
                  id="btn-clear-key-input" 
                  class="p-1 text-stone-400 hover:text-red-500 transition cursor-pointer" 
                  title="${t('apiKeyModal.clearInput', 'Clear input')}"
                >
                  ${icons.close('w-3.5 h-3.5')}
                </button>
              </div>
            </div>

            <!-- Quick Paste Button -->
            <div class="flex items-center justify-between pt-0.5">
              <button 
                type="button" 
                id="btn-paste-clipboard" 
                class="text-[11px] text-stone-500 hover:text-amber-600 flex items-center gap-1 font-sans transition cursor-pointer"
              >
                ${icons.copy('w-3 h-3')}
                <span>${t('apiKeyModal.pasteClipboard', 'Paste from Clipboard')}</span>
              </button>
              <span class="text-[10px] text-stone-400 italic">${t('apiKeyModal.savedSecurely', 'Saved securely on this device only')}</span>
            </div>
          </div>

          <!-- Dynamic Status / Error / Success Message -->
          ${statusMessage ? `
            <div class="p-3 rounded-xl text-xs leading-relaxed animate-fade-in ${
              statusMessage.type === 'success' 
                ? 'bg-emerald-500/15 border border-emerald-500/40 text-emerald-800 dark:text-emerald-200 font-medium' 
                : statusMessage.type === 'error'
                  ? 'bg-red-500/15 border border-red-500/40 text-red-800 dark:text-red-200 font-medium'
                  : 'bg-amber-500/15 border border-amber-500/40 text-amber-800 dark:text-amber-200 font-medium flex items-center gap-2'
            }">
              ${statusMessage.type === 'loading' ? '<span class="w-2.5 h-2.5 rounded-full bg-amber-600 animate-ping"></span>' : ''}
              <span>${statusMessage.text}</span>
            </div>
          ` : ''}

          <!-- Action Buttons -->
          <div class="space-y-2 pt-2">
            <!-- Test & Save Key -->
            <button 
              type="button" 
              id="btn-test-and-save-key" 
              ${isTesting ? 'disabled' : ''}
              class="w-full py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm shadow-md transition transform active:scale-95 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              ${isTesting ? `
                <span class="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                <span>${t('apiKeyModal.verifying', 'Verifying with Google Gemini...')}</span>
              ` : `
                ${icons.sparkles('w-4 h-4')}
                <span>${t('apiKeyModal.verifyAndSave', 'Verify & Save Key')}</span>
              `}
            </button>

            <!-- Disconnect / Remove Key -->
            ${currentKey ? `
              <button 
                type="button" 
                id="btn-remove-key" 
                ${isTesting ? 'disabled' : ''}
                class="w-full py-2 rounded-xl border border-red-400/40 bg-red-500/10 hover:bg-red-500/20 text-red-600 dark:text-red-400 font-semibold text-xs transition flex items-center justify-center gap-1.5 cursor-pointer"
              >
                ${icons.trash('w-3.5 h-3.5')}
                <span>${t('apiKeyModal.disconnectKey', 'Disconnect & Remove Key')}</span>
              </button>
            ` : ''}
          </div>

          <!-- Explanatory note -->
          <p class="text-[11px] text-stone-400 text-center leading-relaxed">
            ${t('apiKeyModal.note', 'A free Gemini API key allows unlimited spiritual dialogue, answers questions about biblical meaning, and explains faith dilemmas.')}
          </p>

        </div>
      </div>
    `;

    // Handlers
    const closeBtn = container.querySelector('#btn-close-api-key-modal');
    if (closeBtn) closeBtn.addEventListener('click', onClose);

    const overlay = container.querySelector('#api-key-modal-overlay');
    if (overlay) {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) onClose();
      });
    }

    // Toggle password visibility
    const toggleVisBtn = container.querySelector('#btn-toggle-key-visibility');
    if (toggleVisBtn) {
      toggleVisBtn.addEventListener('click', () => {
        isPasswordHidden = !isPasswordHidden;
        const input = container.querySelector('#input-gemini-key-val');
        if (input) input.type = isPasswordHidden ? 'password' : 'text';
        toggleVisBtn.innerHTML = isPasswordHidden ? icons.eye('w-4 h-4') : icons.eyeOff('w-4 h-4');
        toggleVisBtn.title = isPasswordHidden ? t('apiKeyModal.showKey', 'Show Key') : t('apiKeyModal.hideKey', 'Hide Key');
      });
    }

    // Clear input
    const clearInputBtn = container.querySelector('#btn-clear-key-input');
    if (clearInputBtn) {
      clearInputBtn.addEventListener('click', () => {
        const input = container.querySelector('#input-gemini-key-val');
        if (input) {
          input.value = '';
          input.focus();
        }
      });
    }

    // Paste from clipboard
    const pasteBtn = container.querySelector('#btn-paste-clipboard');
    if (pasteBtn) {
      pasteBtn.addEventListener('click', async () => {
        try {
          const text = await navigator.clipboard.readText();
          if (text) {
            const input = container.querySelector('#input-gemini-key-val');
            if (input) {
              input.value = text.trim();
              input.focus();
            }
          }
        } catch (e) {
          alert(t('apiKeyModal.clipboardError', 'Could not access clipboard. Please paste manually into the input box.'));
        }
      });
    }

    // Test & Save Key
    const testSaveBtn = container.querySelector('#btn-test-and-save-key');
    if (testSaveBtn) {
      testSaveBtn.addEventListener('click', async () => {
        const input = container.querySelector('#input-gemini-key-val');
        const key = (input ? input.value : '').trim().replace(/^["']|["']$/g, '');

        if (!key) {
          statusMessage = {
            type: 'error',
            text: t('apiKeyModal.pasteBeforeSaving', 'Please paste a Gemini API Key before saving.')
          };
          render();
          return;
        }

        isTesting = true;
        statusMessage = {
          type: 'loading',
          text: t('apiKeyModal.verifyingWithGemini', 'Verifying API Key with Google Gemini...')
        };
        render();

        try {
          await testGeminiApiKey(key);
          await setGeminiApiKey(key);
          isTesting = false;
          statusMessage = {
            type: 'success',
            text: t('apiKeyModal.verifiedSuccess', '✓ Key verified successfully with Google Gemini! Saved.')
          };
          render();

          setTimeout(() => {
            if (onSaved) onSaved(key);
            onClose();
          }, 900);
        } catch (err) {
          isTesting = false;
          statusMessage = {
            type: 'error',
            text: `${t('apiKeyModal.verificationFailed', 'Verification failed')}: ${err.message || t('apiKeyModal.invalidKey', 'Invalid API Key')}`
          };
          render();
        }
      });
    }

    // Disconnect / Remove Key
    const removeKeyBtn = container.querySelector('#btn-remove-key');
    if (removeKeyBtn) {
      removeKeyBtn.addEventListener('click', async () => {
        if (confirm(t('apiKeyModal.confirmDisconnect', 'Disconnect and remove this Google Gemini API Key from this device?'))) {
          await removeGeminiApiKey();
          statusMessage = {
            type: 'success',
            text: t('apiKeyModal.disconnectedSuccess', 'API Key disconnected and removed.')
          };
          render();
          setTimeout(() => {
            if (onSaved) onSaved('');
            onClose();
          }, 800);
        }
      });
    }
  }

  render();
}
