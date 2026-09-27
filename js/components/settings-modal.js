// Settings & Backup Modal for Aura Sacra
import { getSetting, setSetting, exportAllData, importAllData } from '../db.js';
import { setLiturgicalThemeOverride } from '../circadian.js';
import { icons } from '../icons.js';
import { 
  getGeminiApiKey, 
  setGeminiApiKey, 
  testGeminiApiKey,
  getSelectedGeminiModel,
  setSelectedGeminiModel,
  AVAILABLE_MODELS
} from '../ai-engine.js';
import { t, getLanguage, setLanguage, SUPPORTED_LANGUAGES } from '../i18n.js';

export async function renderSettingsModal(container, onClose, onRefresh) {
  const currentLanguage = getLanguage();
  const currentConfession = await getSetting('user_confession', 'ecumenical');
  const currentThemeOverride = await getSetting('theme_override', 'auto');
  const currentUserName = await getSetting('user_name', '');
  const currentGeminiKey = await getGeminiApiKey();
  const currentGeminiModel = getSelectedGeminiModel();

  function render() {
    container.innerHTML = `
      <div class="fixed inset-0 z-50 overflow-y-auto overscroll-contain bg-black/75 backdrop-blur-sm p-3 sm:p-6 flex min-h-full items-center justify-center animate-fade-in">
        <div class="bg-[var(--bg-card)] border-2 border-stone-300 dark:border-stone-800 rounded-2xl sm:rounded-3xl max-w-lg w-full max-h-[92dvh] sm:max-h-[90vh] overflow-y-auto overscroll-contain p-5 sm:p-6 shadow-2xl relative space-y-6 parchment-border my-auto custom-scrollbar">
          
          <!-- Close Button -->
          <button id="btn-close-settings" class="absolute top-4 right-4 text-stone-400 hover:text-[var(--text-primary)] p-1 cursor-pointer">
            ${icons.close('w-5 h-5')}
          </button>

          <!-- Header -->
          <div class="text-center">
            <div class="w-12 h-12 rounded-full border border-stone-400/40 bg-[var(--bg-secondary)] flex items-center justify-center mx-auto text-amber-600 mb-2">
              ${icons.settings('w-6 h-6')}
            </div>
            <h2 class="text-2xl font-bold font-display text-[var(--accent-vermilion)]">
              ${t('settings.title', 'Settings & Sacred Preferences')}
            </h2>
            <p class="text-xs text-[var(--text-muted)] italic font-serif">
              ${t('settings.subtitle', 'Customize faith tradition, language, circadian theme, and 100% offline data backup')}
            </p>
          </div>

          <!-- Language Selector -->
          <div class="space-y-2 bg-[var(--bg-secondary)] p-3 rounded-2xl border border-amber-600/30">
            <div class="flex items-center justify-between">
              <label class="block text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-500 font-sans flex items-center gap-1.5">
                <span>🌐</span>
                <span>${t('settings.language', 'Interface Language:')}</span>
              </label>
              <span class="text-[10px] text-[var(--text-muted)] font-mono">${SUPPORTED_LANGUAGES.length} ${t('settings.nativeLangs', 'Native Languages')}</span>
            </div>
            <select id="setting-language" class="w-full bg-[var(--bg-card)] border border-stone-300 dark:border-stone-700 rounded-xl px-3 py-2.5 text-sm text-[var(--text-primary)] font-semibold cursor-pointer">
              ${SUPPORTED_LANGUAGES.map(lang => `
                <option value="${lang.code}" ${currentLanguage === lang.code ? 'selected' : ''}>
                  ${lang.flag} ${lang.name} (${lang.nativeName})
                </option>
              `).join('')}
            </select>
          </div>

          <!-- Confession / Tradition Selector -->
          <div class="space-y-2">
            <label class="block text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] font-sans">
              ${t('settings.confession', 'Christian Faith Tradition:')}
            </label>
            <select id="setting-confession" class="w-full bg-[var(--bg-secondary)] border border-stone-300 dark:border-stone-700 rounded-xl px-3 py-2 text-sm text-[var(--text-primary)] cursor-pointer">
              <option value="catholic" ${currentConfession === 'catholic' ? 'selected' : ''}>${t('settings.confessions.catholic', 'Catholic (Roman)')}</option>
              <option value="traditional" ${currentConfession === 'traditional' ? 'selected' : ''}>${t('settings.confessions.traditional', 'Traditional Catholic (Latin 1962 / Ember Days)')}</option>
              <option value="orthodox" ${currentConfession === 'orthodox' ? 'selected' : ''}>${t('settings.confessions.orthodox', 'Orthodox (Eastern Byzantine)')}</option>
              <option value="protestant" ${currentConfession === 'protestant' ? 'selected' : ''}>${t('settings.confessions.protestant', 'Protestant / Evangelical')}</option>
              <option value="ecumenical" ${currentConfession === 'ecumenical' ? 'selected' : ''}>${t('settings.confessions.ecumenical', 'Ecumenical / Spiritual Seeker')}</option>
            </select>
          </div>

          <!-- Name -->
          <div class="space-y-2">
            <label class="block text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] font-sans">
              ${t('settings.name', 'Your Name or Form of Address:')}
            </label>
            <input type="text" id="setting-username" value="${currentUserName}" placeholder="${t('settings.namePlaceholder', 'e.g., John, Mary, or leave blank...')}" class="w-full bg-[var(--bg-secondary)] border border-stone-300 dark:border-stone-700 rounded-xl px-3 py-2 text-sm text-[var(--text-primary)]" />
          </div>

          <!-- Circadian Liturgical Theme Override -->
          <div class="space-y-2">
            <label class="block text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] font-sans">
              ${t('settings.theme', 'Circadian Liturgical Theme:')}
            </label>
            <select id="setting-theme" class="w-full bg-[var(--bg-secondary)] border border-stone-300 dark:border-stone-700 rounded-xl px-3 py-2 text-sm text-[var(--text-primary)] cursor-pointer">
              <option value="auto" ${currentThemeOverride === 'auto' ? 'selected' : ''}>${t('settings.themeAuto')}</option>
              <option value="dawn" ${currentThemeOverride === 'dawn' ? 'selected' : ''}>${t('settings.themeDawn')}</option>
              <option value="midday" ${currentThemeOverride === 'midday' ? 'selected' : ''}>${t('settings.themeMidday')}</option>
              <option value="sunset" ${currentThemeOverride === 'sunset' ? 'selected' : ''}>${t('settings.themeSunset')}</option>
              <option value="night" ${currentThemeOverride === 'night' ? 'selected' : ''}>${t('settings.themeNight')}</option>
            </select>
          </div>

          <!-- Gemini AI Engine (Questions & Doubts) -->
          <div class="pt-4 border-t border-stone-200 dark:border-stone-800 space-y-3">
            <div class="flex items-center justify-between">
              <label class="block text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] font-sans">
                ${t('settings.aiTitle', 'Google Gemini AI (Questions & Doubts):')}
              </label>
              <span class="text-[11px] font-sans font-semibold text-amber-600 flex items-center gap-1">
                ${icons.sparkles('w-3.5 h-3.5')}
                <span>${t('settings.aiReasoning', 'AI Reasoning')}</span>
              </span>
            </div>

            <!-- API Key Input -->
            <div class="space-y-1.5">
              <div class="flex items-center justify-between text-xs">
                <span class="text-[var(--text-secondary)] font-medium">${t('settings.aiKey', 'Google Gemini API Key:')}</span>
                <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener noreferrer" class="text-amber-600 hover:underline flex items-center gap-0.5 font-medium">
                  ${t('settings.aiKeyLink', 'Get Free Key at Google AI Studio ↗')}
                </a>
              </div>
              <div class="relative flex items-center">
                <input 
                  type="password" 
                  id="setting-gemini-key" 
                  value="${currentGeminiKey}" 
                  placeholder="${t('apiKeyModal.enterKey', 'Paste your Gemini API key (starts with AIza...)')}" 
                  class="w-full bg-[var(--bg-secondary)] border border-stone-300 dark:border-stone-700 rounded-xl pl-3 pr-20 py-2.5 text-xs font-mono text-[var(--text-primary)] focus:outline-none focus:border-amber-600"
                />
                <div class="absolute right-2 flex items-center gap-1">
                  <button type="button" id="btn-toggle-setting-key-vis" class="p-1 text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 transition cursor-pointer" title="${t('apiKeyModal.showKey', 'Show Key')}">
                    ${icons.eye('w-4 h-4')}
                  </button>
                  <button type="button" id="btn-clear-setting-key" class="p-1 text-stone-400 hover:text-red-500 transition cursor-pointer" title="${t('apiKeyModal.clearInput', 'Clear key')}">
                    ${icons.close('w-3.5 h-3.5')}
                  </button>
                </div>
              </div>

              <!-- Test Key & Status Row -->
              <div class="flex items-center justify-between text-[11px] pt-0.5">
                <button type="button" id="btn-test-setting-key" class="px-2.5 py-1 rounded-lg bg-amber-600/10 hover:bg-amber-600/20 text-amber-600 border border-amber-600/30 flex items-center gap-1 font-semibold transition cursor-pointer">
                  ${icons.sparkles('w-3 h-3')}
                  <span>${t('settings.testKey', 'Test Connection')}</span>
                </button>
                <span id="setting-key-feedback" class="text-[11px] font-sans"></span>
              </div>

              <!-- Gemini Model Selection -->
              <div class="space-y-1.5 pt-2">
                <label for="setting-gemini-model" class="block text-[11px] font-bold uppercase tracking-wider text-[var(--text-muted)] font-sans">
                  ${t('settings.aiModel', 'Gemini AI Model / Version:')}
                </label>
                <select id="setting-gemini-model" class="w-full bg-[var(--bg-secondary)] border border-stone-300 dark:border-stone-700 rounded-xl px-3 py-2 text-xs font-semibold text-[var(--text-primary)] focus:outline-none focus:border-amber-600 cursor-pointer">
                  ${AVAILABLE_MODELS.map(m => `
                    <option value="${m.id}" ${currentGeminiModel === m.id ? 'selected' : ''}>
                      ${m.name} - ${m.desc}
                    </option>
                  `).join('')}
                </select>
                <p class="text-[10px] text-stone-400 italic">
                  ${t('settings.modelRecommended', 'Recommended: <strong>Gemini 3.7 Flash</strong> for maximum stability and instant responses without 503 errors.')}
                </p>
              </div>
            </div>

            <!-- Offline Policy Notice -->
            <div class="bg-[var(--bg-secondary)] border border-stone-300 dark:border-stone-700/60 rounded-xl p-3 text-xs space-y-1">
              <div class="font-bold text-[var(--text-primary)] flex items-center gap-1.5">
                ${icons.shield('w-3.5 h-3.5 text-amber-600')}
                <span>${t('settings.offlinePolicy', 'Offline Dialogue Policy:')}</span>
              </div>
              <p class="text-[10px] text-[var(--text-muted)] leading-relaxed">
                ${t('settings.offlineNotice')}
              </p>
            </div>
          </div>

          <!-- Backup & Restore Data (100% Offline) -->
          <div class="pt-4 border-t border-stone-200 dark:border-stone-800 space-y-3">
            <label class="block text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] font-sans">
              ${t('settings.backupTitle', 'Data Sovereignty • 100% Offline JSON Backup:')}
            </label>
            
            <div class="flex flex-col sm:flex-row items-center gap-2">
              <button id="btn-export-json" class="w-full sm:flex-1 py-2.5 px-3 rounded-xl border border-amber-600/40 bg-amber-600/10 hover:bg-amber-600/20 text-amber-600 text-xs font-bold flex items-center justify-center gap-2 transition cursor-pointer">
                ${icons.download('w-4 h-4')}
                <span>${t('settings.exportBackup', 'Export All Data (JSON Backup)')}</span>
              </button>

              <label class="w-full sm:flex-1 py-2.5 px-3 rounded-xl border border-stone-300 dark:border-stone-700 hover:border-amber-600 text-xs font-medium text-[var(--text-secondary)] flex items-center justify-center gap-2 transition cursor-pointer text-center">
                ${icons.plus('w-4 h-4')}
                <span>${t('settings.importBackup', 'Import Backup')}</span>
                <input type="file" id="input-import-json" accept=".json" class="hidden">
              </label>
            </div>
            <p class="text-[11px] text-stone-400 italic">
              ${t('settings.backupDesc', 'No data ever leaves your device. You can save notes, prayers, and chats to a JSON file to transfer between devices.')}
            </p>
          </div>

          <!-- Save Button -->
          <button id="btn-save-settings" class="w-full py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm shadow-md transition transform active:scale-95 cursor-pointer">
            ${t('settings.save', 'Save Settings')}
          </button>

        </div>
      </div>
    `;

    // Handlers
    container.querySelector('#btn-close-settings').addEventListener('click', onClose);

    // Toggle key visibility in settings
    let isKeyHidden = true;
    const keyInput = container.querySelector('#setting-gemini-key');
    const toggleKeyBtn = container.querySelector('#btn-toggle-setting-key-vis');
    if (toggleKeyBtn && keyInput) {
      toggleKeyBtn.addEventListener('click', () => {
        isKeyHidden = !isKeyHidden;
        keyInput.type = isKeyHidden ? 'password' : 'text';
        toggleKeyBtn.innerHTML = isKeyHidden ? icons.eye('w-4 h-4') : icons.eyeOff('w-4 h-4');
        toggleKeyBtn.title = isKeyHidden ? t('apiKeyModal.showKey', 'Show Key') : t('apiKeyModal.hideKey', 'Hide Key');
      });
    }

    // Clear key input in settings
    const clearKeyBtn = container.querySelector('#btn-clear-setting-key');
    if (clearKeyBtn && keyInput) {
      clearKeyBtn.addEventListener('click', () => {
        keyInput.value = '';
        keyInput.focus();
      });
    }

    // Test key in settings
    const testKeyBtn = container.querySelector('#btn-test-setting-key');
    const feedbackSpan = container.querySelector('#setting-key-feedback');
    if (testKeyBtn && keyInput && feedbackSpan) {
      testKeyBtn.addEventListener('click', async () => {
        const val = keyInput.value.trim().replace(/^["']|["']$/g, '');
        if (!val) {
          feedbackSpan.textContent = t('settings.pasteKeyFirst', 'Please paste a key first.');
          feedbackSpan.className = 'text-[11px] font-sans text-red-500 font-semibold';
          return;
        }
        testKeyBtn.disabled = true;
        feedbackSpan.textContent = t('settings.testingKey', 'Testing Gemini API Key...');
        feedbackSpan.className = 'text-[11px] font-sans text-amber-600';
        try {
          await testGeminiApiKey(val);
          feedbackSpan.textContent = t('settings.validKey', '✓ Valid API Key!');
          feedbackSpan.className = 'text-[11px] font-sans text-emerald-600 font-bold';
        } catch (err) {
          feedbackSpan.textContent = `✕ ${t('apiKeyModal.verificationFailed', 'Error')}: ${err.message}`;
          feedbackSpan.className = 'text-[11px] font-sans text-red-500 font-semibold';
        } finally {
          testKeyBtn.disabled = false;
        }
      });
    }

    container.querySelector('#btn-save-settings').addEventListener('click', async () => {
      const newLanguage = container.querySelector('#setting-language').value;
      const confession = container.querySelector('#setting-confession').value;
      const theme = container.querySelector('#setting-theme').value;
      const userName = container.querySelector('#setting-username').value.trim();
      const geminiKey = container.querySelector('#setting-gemini-key').value.trim();
      const geminiModel = container.querySelector('#setting-gemini-model').value;

      await setSetting('user_confession', confession);
      await setSetting('confession', confession);
      await setSetting('penance_tradition', confession);
      try {
        localStorage.setItem('aurasacra_user_confession', confession);
      } catch (e) {}
      await setSetting('user_name', userName);
      await setGeminiApiKey(geminiKey);
      setSelectedGeminiModel(geminiModel);
      await setLiturgicalThemeOverride(theme);

      if (newLanguage !== currentLanguage) {
        await setLanguage(newLanguage);
      }

      onClose();
      onRefresh();
    });

    container.querySelector('#btn-export-json').addEventListener('click', async () => {
      const dataStr = await exportAllData();
      const blob = new Blob([dataStr], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `AuraSacra_Backup_${new Date().toISOString().slice(0, 10)}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    });

    container.querySelector('#input-import-json').addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = async (event) => {
        try {
          await importAllData(event.target.result);
          alert(t('settings.backupRestored', 'Backup restored successfully!'));
          onClose();
          onRefresh();
        } catch (err) {
          alert(t('settings.invalidBackup', 'Invalid backup file format.'));
        }
      };
      reader.readAsText(file);
    });
  }

  render();
}
