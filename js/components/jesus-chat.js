// Dialogue with Jesus Spiritual Chat for Aura Sacra
// Powered by Google Gemini (Local On-Device or Cloud)
// Answers questions, doubts, and daily dilemmas with Gospel wisdom.
// Strictly unusable offline if local Gemini is not downloaded.
import { icons } from '../icons.js';
import { 
  sendMessageToJesus, 
  loadConversationHistory, 
  checkAiStatus, 
  downloadLocalGemini, 
  setGeminiApiKey,
  getSelectedGeminiModel,
  AVAILABLE_MODELS
} from '../ai-engine.js';
import { clearChatHistory, getSetting } from '../db.js';
import { renderApiKeyModal } from './api-key-modal.js';

// Format dialogue messages and shield Holy Scripture citations from browser translation
function formatChatMessage(text) {
  if (!text) return '';
  const lines = text.split('\n');
  return lines.map((line) => {
    const trimmed = line.trim();
    if (
      trimmed.includes('📖') ||
      trimmed.includes('Scripture Anchor') ||
      (trimmed.startsWith('•') && /\d+:\d+/.test(trimmed)) ||
      /^[1-3]?\s?[A-Za-z]+ \d+:\d+/.test(trimmed)
    ) {
      return `<div class="notranslate font-semibold text-amber-700 dark:text-amber-400 py-0.5" translate="no">${line}</div>`;
    }
    return `<div>${line || '&nbsp;'}</div>`;
  }).join('');
}

export async function renderJesusChat(container, initialQuestion = null) {
  let messages = await loadConversationHistory();
  const userName = (await getSetting('user_name', '')) || 'Child of God';
  let aiStatus = await checkAiStatus();
  let isSubmitting = false;
  let downloadProgress = null;

  async function refreshStatus() {
    aiStatus = await checkAiStatus();
  }

  function openKeyModal() {
    const modalRoot = document.getElementById('modals-container') || document.body;
    renderApiKeyModal(
      modalRoot,
      async (newKey) => {
        await refreshStatus();
        renderView();
      },
      () => {
        modalRoot.innerHTML = '';
      }
    );
  }

  // Listen to browser online/offline events
  window.addEventListener('online', async () => {
    await refreshStatus();
    renderView();
  });
  window.addEventListener('offline', async () => {
    await refreshStatus();
    renderView();
  });

  function renderView() {
    // Determine AI status badge
    let statusBadge = '';
    if (!aiStatus.isOnline) {
      if (aiStatus.localGeminiStatus === 'ready') {
        statusBadge = `
          <button type="button" class="btn-open-api-modal inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-sans font-semibold bg-emerald-500/10 text-emerald-600 border border-emerald-500/30 hover:bg-emerald-500/20 transition cursor-pointer">
            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Gemini Nano (Offline On-Device)</span>
          </button>
        `;
      } else {
        statusBadge = `
          <button type="button" class="btn-open-api-modal inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-sans font-semibold bg-red-500/10 text-red-600 border border-red-500/30 hover:bg-red-500/20 transition cursor-pointer" title="Offline AI disabled. Click for options">
            ${icons.lock('w-3.5 h-3.5')}
            <span>Offline • Local Gemini Required</span>
          </button>
        `;
      }
    } else {
      // Online
      if (aiStatus.localGeminiStatus === 'ready') {
        statusBadge = `
          <button type="button" class="btn-open-api-modal inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-sans font-semibold bg-emerald-500/10 text-emerald-600 border border-emerald-500/30 hover:bg-emerald-500/20 transition cursor-pointer">
            <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Gemini Nano (On-Device)</span>
          </button>
        `;
      } else if (aiStatus.hasApiKey) {
        const curModelId = getSelectedGeminiModel();
        const curModel = AVAILABLE_MODELS.find(m => m.id === curModelId) || AVAILABLE_MODELS[0];
        statusBadge = `
          <button type="button" class="btn-open-api-modal inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-sans font-semibold bg-amber-500/10 text-amber-600 border border-amber-500/30 hover:bg-amber-500/20 transition cursor-pointer" title="Click to view or change Gemini API Key & Model">
            ${icons.sparkles('w-3.5 h-3.5')}
            <span>${curModel.name} Active</span>
            <span class="text-[9px] opacity-75 underline ml-0.5">change</span>
          </button>
        `;
      } else {
        statusBadge = `
          <button type="button" class="btn-open-api-modal inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-sans font-semibold bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/40 hover:bg-amber-500/25 transition cursor-pointer animate-pulse" title="Click to connect Gemini API Key">
            ${icons.key('w-3.5 h-3.5')}
            <span>Connect API Key</span>
          </button>
        `;
      }
    }

    container.innerHTML = `
      <div class="bg-[var(--bg-card)] border border-stone-300 dark:border-stone-800 rounded-2xl shadow-lg flex flex-col h-[78vh] overflow-hidden">
        
        <!-- Header -->
        <div class="px-5 py-3.5 border-b border-stone-200 dark:border-stone-800 bg-[var(--bg-secondary)] flex flex-wrap items-center justify-between gap-3">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full border border-amber-500/40 bg-[var(--bg-card)] flex items-center justify-center text-amber-500 shadow-sm flex-shrink-0">
              ${icons.cross('w-5 h-5')}
            </div>
            <div>
              <div class="flex items-center gap-2">
                <h2 class="text-base sm:text-lg font-bold font-display text-[var(--accent-vermilion)]">
                  Dialogue with Jesus
                </h2>
                <div class="hidden sm:inline-block">${statusBadge}</div>
              </div>
              <p class="text-xs text-[var(--text-muted)] italic font-serif">
                Answers questions, theological doubts, and life dilemmas with Gospel wisdom
              </p>
            </div>
          </div>

          <div class="flex items-center gap-2">
            <div class="sm:hidden">${statusBadge}</div>

            <!-- API Key Button (always visible so user can change/verify anytime) -->
            <button id="btn-chat-api-key" class="text-xs px-2.5 py-1.5 rounded-xl border border-amber-600/40 bg-amber-600/10 hover:bg-amber-600/20 text-amber-600 dark:text-amber-400 font-semibold transition flex items-center gap-1.5 shadow-sm cursor-pointer" title="Configure or Change Google Gemini API Key">
              ${icons.key('w-3.5 h-3.5')}
              <span class="font-sans">${aiStatus.hasApiKey ? 'Change Key' : 'API Key'}</span>
            </button>

            <!-- Clear History Button -->
            <button id="btn-clear-chat" class="text-xs text-stone-400 hover:text-red-500 p-1.5 rounded-lg border border-stone-300/40 dark:border-stone-700/40 hover:border-red-500/40 transition flex items-center gap-1" title="Clear Chat History">
              ${icons.trash('w-3.5 h-3.5')}
              <span class="hidden sm:inline">Reset</span>
            </button>
          </div>
        </div>

        <!-- Banner for Offline Unusable State (Strict Mandate) -->
        ${!aiStatus.isOnline && aiStatus.localGeminiStatus !== 'ready' ? `
          <div class="p-4 mx-4 mt-4 rounded-2xl bg-red-500/10 border-2 border-red-500/40 text-red-800 dark:text-red-200 flex items-start gap-3 shadow-sm animate-fade-in">
            <div class="p-2 rounded-xl bg-red-500/20 text-red-600 flex-shrink-0">
              ${icons.lock('w-5 h-5')}
            </div>
            <div class="space-y-1 text-xs sm:text-sm">
              <div class="font-bold font-display text-base text-red-600 dark:text-red-400">
                Offline AI Disabled • Local Gemini Model Required
              </div>
              <p class="leading-relaxed">
                The local Gemini Nano model is not downloaded on this device. To answer open questions, theological doubts, and life dilemmas without internet, the local Gemini Nano model must be downloaded in Chrome.
              </p>
              <p class="text-xs opacity-80 italic">
                Without local Gemini, offline answers are strictly disabled to prevent inaccurate or canned responses. Connect to the internet to download Gemini Nano or use online Gemini AI.
              </p>
            </div>
          </div>
        ` : ''}

        <!-- Banner for Online Setup Needed (Neither Local Gemini nor API Key) -->
        ${aiStatus.isOnline && !aiStatus.canChat ? `
          <div class="p-4 mx-4 mt-4 rounded-2xl bg-[var(--bg-secondary)] border-2 border-amber-600/40 shadow-sm space-y-3 animate-fade-in">
            <div class="flex items-start gap-3">
              <div class="p-2 rounded-xl bg-amber-500/20 text-amber-600 flex-shrink-0">
                ${icons.sparkles('w-5 h-5')}
              </div>
              <div class="space-y-0.5 flex-1">
                <div class="font-bold font-display text-sm sm:text-base text-[var(--accent-vermilion)]">
                  Enable Gemini AI for Questions & Doubts
                </div>
                <p class="text-xs text-[var(--text-muted)] leading-relaxed">
                  To provide deep, articulate, and intelligent answers to your doubts and inquiries in any language, Aura Sacra connects to Google Gemini.
                </p>
              </div>
            </div>

            <!-- Download Local Gemini if supported -->
            ${aiStatus.localGeminiStatus === 'needs_download' ? `
              <div class="bg-[var(--bg-card)] border border-amber-600/30 rounded-xl p-3 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div class="text-xs">
                  <div class="font-bold text-[var(--text-primary)]">Chrome Built-in Gemini Nano Detected</div>
                  <div class="text-[var(--text-muted)]">Download model (~1.5 GB) into your browser for 100% offline reasoning.</div>
                </div>
                <button id="btn-download-gemini" class="w-full sm:w-auto px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-sm flex items-center justify-center gap-1.5 transition">
                  ${icons.download('w-4 h-4')}
                  <span>Download Local Gemini</span>
                </button>
              </div>
            ` : ''}

            <!-- Download Progress Bar if downloading -->
            ${downloadProgress !== null ? `
              <div class="bg-[var(--bg-card)] border border-amber-600/40 rounded-xl p-3 space-y-1.5">
                <div class="flex items-center justify-between text-xs font-semibold text-amber-600">
                  <span>Downloading Gemini Nano on device...</span>
                  <span>${downloadProgress}%</span>
                </div>
                <div class="w-full bg-stone-200 dark:bg-stone-700 rounded-full h-2 overflow-hidden">
                  <div class="bg-amber-600 h-2 rounded-full transition-all duration-300" style="width: ${downloadProgress}%"></div>
                </div>
              </div>
            ` : ''}

            <!-- Quick Action to Connect API Key -->
            <div class="bg-[var(--bg-card)] border border-stone-300 dark:border-stone-700 rounded-xl p-3 space-y-2">
              <div class="flex items-center justify-between text-xs">
                <span class="font-bold text-[var(--text-primary)]">Connect Google Gemini API Key:</span>
                <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener noreferrer" class="text-amber-600 hover:underline flex items-center gap-0.5">
                  Get Free Key at Google AI Studio ↗
                </a>
              </div>
              <button 
                type="button" 
                id="btn-open-key-modal-banner" 
                class="w-full py-2.5 px-4 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold shadow-sm transition flex items-center justify-center gap-2 cursor-pointer"
              >
                ${icons.key('w-4 h-4')}
                <span>Configure & Verify Gemini API Key</span>
              </button>
            </div>

          </div>
        ` : ''}

        <!-- Chat Messages Scroll Area -->
        <div id="chat-messages-container" class="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          ${messages.length === 0 ? `
            <div class="text-center py-6 px-4 max-w-lg mx-auto space-y-3">
              <div class="w-12 h-12 rounded-full bg-amber-500/10 text-amber-600 flex items-center justify-center mx-auto">
                ${icons.sparkles('w-6 h-6')}
              </div>
              <h3 class="text-base sm:text-lg font-bold font-display text-[var(--accent-vermilion)]">
                Ask Questions, Clarify Doubts & Seek Gospel Wisdom
              </h3>
              <p class="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed font-serif italic">
                Ask deep theological questions, explore personal doubts, discuss moral dilemmas, or share your daily life struggles. Powered by Gemini with direct scripture citations.
              </p>

              <!-- Quick Questions & Doubts Prompt Chips (English Only) -->
              <div class="flex flex-wrap justify-center gap-2 pt-3">
                <button type="button" class="chat-prompt-chip text-xs bg-[var(--bg-secondary)] hover:bg-amber-600/20 text-[var(--text-secondary)] hover:text-amber-600 border border-stone-300 dark:border-stone-700 px-3 py-1.5 rounded-full transition cursor-pointer text-left">
                  Why does God allow suffering and pain in the world?
                </button>
                <button type="button" class="chat-prompt-chip text-xs bg-[var(--bg-secondary)] hover:bg-amber-600/20 text-[var(--text-secondary)] hover:text-amber-600 border border-stone-300 dark:border-stone-700 px-3 py-1.5 rounded-full transition cursor-pointer text-left">
                  I have been struggling with doubts about my faith lately
                </button>
                <button type="button" class="chat-prompt-chip text-xs bg-[var(--bg-secondary)] hover:bg-amber-600/20 text-[var(--text-secondary)] hover:text-amber-600 border border-stone-300 dark:border-stone-700 px-3 py-1.5 rounded-full transition cursor-pointer text-left">
                  How can I discern God's will for my life decisions?
                </button>
                <button type="button" class="chat-prompt-chip text-xs bg-[var(--bg-secondary)] hover:bg-amber-600/20 text-[var(--text-secondary)] hover:text-amber-600 border border-stone-300 dark:border-stone-700 px-3 py-1.5 rounded-full transition cursor-pointer text-left">
                  How can I truly forgive someone who hurt me deeply?
                </button>
                <button type="button" class="chat-prompt-chip text-xs bg-[var(--bg-secondary)] hover:bg-amber-600/20 text-[var(--text-secondary)] hover:text-amber-600 border border-stone-300 dark:border-stone-700 px-3 py-1.5 rounded-full transition cursor-pointer text-left">
                  How can I find inner peace and overcome anxiety?
                </button>
                <button type="button" class="chat-prompt-chip text-xs bg-[var(--bg-secondary)] hover:bg-amber-600/20 text-[var(--text-secondary)] hover:text-amber-600 border border-stone-300 dark:border-stone-700 px-3 py-1.5 rounded-full transition cursor-pointer text-left">
                  How do I pray when God seems completely silent?
                </button>
              </div>
            </div>
          ` : messages.map((m) => {
            const isUser = m.sender === 'user';
            const isErrorMessage = !isUser && (
              m.text.includes('Google Gemini Error') || 
              m.text.includes('API key') || 
              m.text.includes('GEMINI_SETUP_REQUIRED') ||
              m.text.includes('OFFLINE_GEMINI_REQUIRED') ||
              m.text.includes('404') ||
              m.text.includes('400')
            );
            return `
              <div class="flex flex-col ${isUser ? 'items-end' : 'items-start'} animate-fade-in">
                <div class="max-w-[85%] sm:max-w-[75%] rounded-2xl p-4 shadow-sm text-sm sm:text-base leading-relaxed ${
                  isUser 
                    ? 'bg-amber-700 text-white rounded-tr-none' 
                    : isErrorMessage
                      ? 'bg-red-500/10 border-2 border-red-500/30 text-red-900 dark:text-red-200 rounded-tl-none font-sans'
                      : 'bg-[var(--bg-secondary)] border border-stone-300 dark:border-stone-800 text-[var(--text-primary)] rounded-tl-none font-serif'
                }">
                  <div class="space-y-1">${formatChatMessage(m.text)}</div>
                  ${isErrorMessage ? `
                    <div class="pt-3 border-t border-red-500/20 mt-3 flex items-center gap-2">
                      <button type="button" class="btn-bubble-change-key text-xs font-semibold px-3 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white shadow-sm flex items-center gap-1.5 transition cursor-pointer">
                        ${icons.key('w-3.5 h-3.5')}
                        <span>Change / Verify API Key</span>
                      </button>
                    </div>
                  ` : ''}
                </div>
                <span class="text-[10px] text-stone-400 mt-1 px-1 font-sans">
                  ${isUser ? (userName || 'You') : 'Jesus Christ'} • ${new Date(m.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            `;
          }).join('')}

          ${isSubmitting ? `
            <div class="flex flex-col items-start animate-fade-in">
              <div class="bg-[var(--bg-secondary)] border border-stone-300 dark:border-stone-800 text-[var(--text-primary)] rounded-2xl rounded-tl-none p-4 font-serif text-sm flex items-center gap-2.5">
                <span class="w-2 h-2 rounded-full bg-amber-600 animate-ping"></span>
                <span class="italic text-[var(--text-muted)]">Jesus is reflecting on your question...</span>
              </div>
            </div>
          ` : ''}
        </div>

        <!-- Chat Input Form -->
        <div class="p-3 sm:p-4 border-t border-stone-200 dark:border-stone-800 bg-[var(--bg-secondary)]">
          <form id="chat-form" class="flex items-center gap-2">
            <input 
              type="text" 
              id="chat-input" 
              placeholder="${
                !aiStatus.canChat
                  ? (!aiStatus.isOnline 
                      ? 'Offline AI Disabled: Local Gemini model required...' 
                      : 'Please connect Gemini AI above to ask questions...')
                  : 'Ask a question, share a doubt, or speak to Jesus...'
              }"
              class="flex-1 bg-[var(--bg-card)] border border-stone-300 dark:border-stone-700 rounded-xl px-4 py-2.5 text-sm sm:text-base text-[var(--text-primary)] focus:outline-none focus:border-amber-600 disabled:opacity-50 disabled:cursor-not-allowed"
              autocomplete="off"
              ${!aiStatus.canChat || isSubmitting ? 'disabled' : ''}
            />
            <button 
              type="submit" 
              id="chat-submit-btn"
              class="p-2.5 sm:px-4 rounded-xl bg-[var(--accent-vermilion)] hover:bg-red-800 text-white font-medium shadow-md transition transform active:scale-95 flex items-center gap-1.5 disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none"
              ${!aiStatus.canChat || isSubmitting ? 'disabled' : ''}
            >
              ${icons.send('w-4 h-4')}
              <span class="hidden sm:inline text-xs font-sans uppercase tracking-wider font-bold">Ask</span>
            </button>
          </form>
        </div>

      </div>
    `;

    // Auto-scroll to bottom
    const scrollArea = container.querySelector('#chat-messages-container');
    if (scrollArea) {
      scrollArea.scrollTop = scrollArea.scrollHeight;
    }

    // Handlers
    const form = container.querySelector('#chat-form');
    const input = container.querySelector('#chat-input');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const text = input.value.trim();
      if (!text || isSubmitting) return;

      if (!aiStatus.canChat) {
        if (!aiStatus.isOnline) {
          alert('Offline AI is disabled because the local Gemini model is not downloaded on this device. Please connect to the internet to download Gemini Nano or use online Gemini.');
        } else {
          openKeyModal();
        }
        return;
      }

      input.value = '';
      isSubmitting = true;
      renderView();

      try {
        await sendMessageToJesus(text, userName);
        messages = await loadConversationHistory();
      } catch (err) {
        alert(err.message || 'Error communicating with Gemini AI.');
        if (err.message && (err.message.includes('Google Gemini Error') || err.message.includes('API key') || err.message.includes('GEMINI_SETUP_REQUIRED') || err.message.includes('404') || err.message.includes('400'))) {
          openKeyModal();
        }
      } finally {
        isSubmitting = false;
        renderView();
      }
    });

    // Quick chips handler
    container.querySelectorAll('.chat-prompt-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const text = chip.textContent.trim();
        if (!text) return;
        input.value = text;
        form.dispatchEvent(new Event('submit'));
      });
    });

    // API Key Modal open triggers
    container.querySelectorAll('.btn-open-api-modal, .btn-bubble-change-key, #btn-chat-api-key, #btn-open-key-modal-banner').forEach(btn => {
      btn.addEventListener('click', openKeyModal);
    });

    // Clear history handler
    container.querySelector('#btn-clear-chat').addEventListener('click', async () => {
      if (confirm('Clear the entire conversation history with Jesus?')) {
        await clearChatHistory();
        messages = [];
        renderView();
      }
    });

    // Download Local Gemini button (if present)
    const downloadBtn = container.querySelector('#btn-download-gemini');
    if (downloadBtn) {
      downloadBtn.addEventListener('click', async () => {
        downloadBtn.disabled = true;
        downloadProgress = 0;
        renderView();
        try {
          await downloadLocalGemini((pct) => {
            downloadProgress = pct;
            renderView();
          });
          alert('Gemini Nano downloaded successfully! Offline dialogue is now active.');
          downloadProgress = null;
          await refreshStatus();
          renderView();
        } catch (err) {
          alert(`Download failed: ${err.message}`);
          downloadProgress = null;
          renderView();
        }
      });
    }

    // Save Quick API key button (if present)
    const saveKeyBtn = container.querySelector('#btn-save-quick-api-key');
    if (saveKeyBtn) {
      saveKeyBtn.addEventListener('click', async () => {
        const keyInput = container.querySelector('#chat-quick-api-key');
        const key = keyInput.value.trim();
        if (!key || key.length < 10) {
          alert('Please enter a valid Google Gemini API Key (starts with AIza...).');
          return;
        }
        await setGeminiApiKey(key);
        alert('Gemini API Key connected successfully!');
        await refreshStatus();
        renderView();
      });
    }
  }

  renderView();

  // If passed an initial question/thought, auto-submit if AI is ready
  if (initialQuestion && aiStatus.canChat) {
    setTimeout(async () => {
      isSubmitting = true;
      renderView();
      try {
        await sendMessageToJesus(initialQuestion, userName);
        messages = await loadConversationHistory();
      } catch (err) {
        console.warn('Initial prompt error:', err);
      } finally {
        isSubmitting = false;
        renderView();
      }
    }, 400);
  }
}
