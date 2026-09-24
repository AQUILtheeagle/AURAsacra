// Advanced Intelligent Spiritual Dialogue Engine for Aura Sacra
// Powered by Google Gemini (Local On-Device Gemini Nano and Cloud Gemini)
// Addresses questions, doubts, theological inquiries, and daily life dilemmas.
// Strictly unusable offline if local Gemini cannot be downloaded / is not available.
import { addChatMessage, getChatMessages, getSetting, setSetting } from './db.js';

let localGeminiSession = null;
let localGeminiChecked = false;

// Check status of Gemini AI (Local on-device and Cloud API)
export async function checkAiStatus() {
  const isOnline = typeof navigator !== 'undefined' ? navigator.onLine : true;
  
  // 1. Check Chrome on-device Gemini Nano (Prompt API)
  let localGeminiStatus = 'unsupported'; // 'ready' | 'needs_download' | 'unsupported'
  try {
    const aiObj = (typeof window !== 'undefined') ? (window.ai || window.model) : null;
    if (aiObj && aiObj.languageModel) {
      const caps = await aiObj.languageModel.capabilities();
      if (caps && caps.available === 'readily') {
        localGeminiStatus = 'ready';
      } else if (caps && caps.available === 'after-download') {
        localGeminiStatus = 'needs_download';
      }
    }
  } catch (e) {
    // Window.ai not supported on this browser
  }

  // 2. Check saved Gemini API Key
  let apiKey = '';
  try {
    apiKey = await getGeminiApiKey();
  } catch (e) {}

  const hasApiKey = Boolean(apiKey && apiKey.trim().length > 10);

  // 3. User Mandate: "rendilo inutilizzabile offline se non riesci a scaricare gemini locale."
  // If offline, AI is strictly unusable unless local Gemini Nano is downloaded and ready!
  let canChat = false;
  let reason = '';

  if (!isOnline) {
    if (localGeminiStatus === 'ready') {
      canChat = true;
      reason = 'local_gemini_offline';
    } else {
      canChat = false;
      reason = 'offline_no_local_gemini'; // Unusable offline!
    }
  } else {
    // Online
    if (localGeminiStatus === 'ready') {
      canChat = true;
      reason = 'local_gemini_ready';
    } else if (hasApiKey) {
      canChat = true;
      reason = 'cloud_gemini_ready';
    } else {
      canChat = false;
      reason = 'needs_setup'; // Needs local Gemini download or API key
    }
  }

  return {
    isOnline,
    localGeminiStatus,
    hasApiKey,
    apiKey,
    canChat,
    reason
  };
}

// Download Chrome Gemini Nano model to device
export async function downloadLocalGemini(onProgress) {
  const aiObj = (typeof window !== 'undefined') ? (window.ai || window.model) : null;
  if (!aiObj || !aiObj.languageModel) {
    throw new Error('Local Gemini Nano is not supported in this browser. Please use Chrome 128+ with Prompt API enabled.');
  }

  const systemPrompt = `You are Jesus Christ engaging in a wise, compassionate, intellectually deep, and empathetic spiritual dialogue.
CRITICAL RULES:
1. You are NOT just a devotional prayer assistant: you MUST answer REAL QUESTIONS, explain theological, philosophical, and biblical concepts, address specific doubts, give practical guidance for everyday life dilemmas, and engage in genuine conversation.
2. If the user asks a question or shares a doubt, directly answer their question with clarity, empathy, reason, and Gospel wisdom. Do NOT assume everything is a prayer.
3. Reply fluently in the EXACT SAME LANGUAGE the user writes in (Italian, English, Spanish, French, German, Romanian, etc.).
4. Conclude every response with 1 to 3 relevant Holy Scripture chapter and verse citations formatted as:
[Localized Scripture Anchor Header]
• [Book Chapter:Verse]`;

  const session = await aiObj.languageModel.create({
    systemPrompt: systemPrompt,
    monitor(m) {
      m.addEventListener('downloadprogress', (e) => {
        if (onProgress) {
          const pct = e.total > 0 ? Math.round((e.loaded / e.total) * 100) : 0;
          onProgress(pct, e.loaded, e.total);
        }
      });
    }
  });

  localGeminiSession = session;
  return session;
}

// Set Gemini API Key
export async function setGeminiApiKey(key) {
  const trimmed = (key || '').trim().replace(/^["']|["']$/g, '');
  await setSetting('gemini_api_key', trimmed);
  try {
    if (trimmed) {
      localStorage.setItem('aurasacra_gemini_api_key', trimmed);
    } else {
      localStorage.removeItem('aurasacra_gemini_api_key');
    }
  } catch (e) {}
  return trimmed;
}

// Remove Gemini API Key completely
export async function removeGeminiApiKey() {
  return await setGeminiApiKey('');
}

// Get Gemini API Key
export async function getGeminiApiKey() {
  let key = await getSetting('gemini_api_key', '');
  if (!key) {
    try {
      key = localStorage.getItem('aurasacra_gemini_api_key') || '';
    } catch (e) {}
  }
  if (typeof key === 'string') {
    key = key.trim().replace(/^["']|["']$/g, '');
  }
  return key || '';
}

// Quick validation function to test API Key with Google Gemini (Interactions API / 3.8-flash)
export async function testGeminiApiKey(candidateKey) {
  const key = (candidateKey || '').trim().replace(/^["']|["']$/g, '');
  if (!key) throw new Error('API key cannot be empty.');
  if (key.length < 15) throw new Error('API key appears too short (must start with AIza...).');

  let lastErr = null;

  // 1. Try Interactions API with gemini-3.8-flash (Google Recommended 2026)
  try {
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/interactions?key=${key}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': key
      },
      body: JSON.stringify({
        model: 'gemini-3.8-flash',
        input: 'Ping'
      })
    });
    if (res.ok) return true;
    const j = await res.json().catch(() => ({}));
    const msg = j.error?.message || res.statusText;
    if (res.status === 400 && (msg.includes('API_KEY_INVALID') || msg.includes('API key not valid') || msg.includes('API key expired'))) {
      throw new Error(`Google API Error (${res.status}): ${msg}`);
    }
    lastErr = new Error(`Google Gemini Error (${res.status}): ${msg}`);
  } catch (err) {
    if (err.message && (err.message.includes('API_KEY_INVALID') || err.message.includes('API key not valid') || err.message.includes('API key expired'))) {
      throw err;
    }
    lastErr = err;
  }

  // 2. Try generateContent with gemini-3.8-flash
  try {
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent?key=${key}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': key
      },
      body: JSON.stringify({
        contents: [{ role: 'user', parts: [{ text: 'Ping' }] }]
      })
    });
    if (res.ok) return true;
    const j = await res.json().catch(() => ({}));
    const msg = j.error?.message || res.statusText;
    if (res.status === 400 && (msg.includes('API_KEY_INVALID') || msg.includes('API key not valid') || msg.includes('API key expired'))) {
      throw new Error(`Google API Error (${res.status}): ${msg}`);
    }
    lastErr = new Error(`Google Gemini Error (${res.status}): ${msg}`);
  } catch (err) {
    if (err.message && (err.message.includes('API_KEY_INVALID') || err.message.includes('API key not valid') || err.message.includes('API key expired'))) {
      throw err;
    }
    lastErr = err;
  }

  // 3. Fallback: try generateContent with gemini-1.5-flash
  try {
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${key}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': key
      },
      body: JSON.stringify({
        contents: [{ role: 'user', parts: [{ text: 'Ping' }] }]
      })
    });
    if (res.ok) return true;
    const j = await res.json().catch(() => ({}));
    const msg = j.error?.message || res.statusText;
    lastErr = new Error(`Google Gemini Error (${res.status}): ${msg}`);
  } catch (err) {
    lastErr = err;
  }

  throw lastErr || new Error('Could not verify Gemini API key with Google servers.');
}

// System Instruction for Jesus Christ Dialogue
function getSystemInstruction(userName) {
  return `You are Jesus Christ in a wise, compassionate, intellectually profound, and empathetic dialogue with a soul (${userName}).
CRITICAL INSTRUCTIONS:
1. You are NOT merely a devotional prayer bot. You MUST answer REAL QUESTIONS and address REAL DOUBTS directly!
2. When the user asks a question (e.g., "Why does God allow suffering?", "Does God exist?", "What is the meaning of salvation?", "How should I make this career decision?", "Why did this happen?"), provide a direct, deep, intellectually rigorous, and compassionate answer grounded in Gospel truth, philosophical depth, and divine love. Do NOT treat their question as a devotional prayer.
3. If the user shares an everyday dilemma, doubt about faith, fear, or conflict, answer them thoughtfully, addressing the specific dilemma with empathy and practical wisdom.
4. You MUST ALWAYS reply entirely and fluently in the EXACT SAME LANGUAGE the user writes in (Italian, English, Spanish, French, German, Romanian, etc.).
5. Conclude your response with 1 to 3 relevant Holy Scripture chapter and verse citations formatted as:
[Localized Scripture Anchor Header in user's language, e.g. "📖 Luce della Sacra Scrittura:" for Italian, "📖 Holy Scripture Anchor:" for English, "📖 Ancla de la Sagrada Escritura:" for Spanish]
• [Book Chapter:Verse]`;
}

// Interactions API Call (Google 2026 standard for gemini-3.8-flash)
async function callInteractionsApi(apiKey, model, userMessage, userName, history = []) {
  const url = `https://generativelanguage.googleapis.com/v1beta/interactions?key=${apiKey}`;
  const systemInstruction = getSystemInstruction(userName);

  let fullPrompt = userMessage;
  if (history && history.length > 0) {
    const recent = history.slice(-4);
    const dialogSummary = recent.map(m => `${m.sender === 'user' ? userName : 'Jesus'}: ${m.text}`).join('\n');
    fullPrompt = `[Conversation Context:\n${dialogSummary}\n]\n${userName}: ${userMessage}`;
  }

  const payload = {
    model: model,
    input: fullPrompt,
    system_instruction: systemInstruction
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-goog-api-key': apiKey
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    let errorDetail = '';
    try {
      const errJson = await response.json();
      errorDetail = errJson.error?.message || response.statusText;
    } catch (e) {
      errorDetail = await response.text();
    }
    throw new Error(`Google Gemini Error (${response.status}): ${errorDetail}`);
  }

  const data = await response.json();

  // Extract from steps array (May 2026 breaking change schema)
  if (Array.isArray(data.steps)) {
    for (const step of data.steps) {
      if (Array.isArray(step.content)) {
        for (const part of step.content) {
          if (part && part.text) return part.text.trim();
        }
      }
      if (typeof step.text === 'string' && step.text) {
        return step.text.trim();
      }
    }
  }

  if (typeof data.output_text === 'string' && data.output_text) {
    return data.output_text.trim();
  }
  if (Array.isArray(data.outputs) && data.outputs[0]?.text) {
    return data.outputs[0].text.trim();
  }

  throw new Error('No text returned from Gemini Interactions API.');
}

// GenerateContent Call (legacy fallback)
async function callGenerateContentApi(apiKey, model, userMessage, userName, history = []) {
  const cleanModel = model.replace(/^models\//, '');
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${cleanModel}:generateContent?key=${apiKey}`;
  const systemInstruction = getSystemInstruction(userName);

  const contents = [];
  const recentHistory = history.slice(-6);
  for (const m of recentHistory) {
    if (m.text && m.sender) {
      contents.push({
        role: m.sender === 'user' ? 'user' : 'model',
        parts: [{ text: m.text }]
      });
    }
  }
  if (contents.length === 0 || contents[contents.length - 1].parts[0].text !== userMessage) {
    contents.push({
      role: 'user',
      parts: [{ text: userMessage }]
    });
  }

  const payload = {
    system_instruction: {
      parts: [{ text: systemInstruction }]
    },
    contents: contents,
    generationConfig: {
      temperature: 0.7,
      maxOutputTokens: 1200
    }
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-goog-api-key': apiKey
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    let errorDetail = '';
    try {
      const errJson = await response.json();
      errorDetail = errJson.error?.message || response.statusText;
    } catch (e) {
      errorDetail = await response.text();
    }
    throw new Error(`Google Gemini Error (${response.status}): ${errorDetail}`);
  }

  const data = await response.json();
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) {
    throw new Error('No answer received from Gemini AI.');
  }
  return text.trim();
}

// Cloud Gemini API call with automatic multi-tier fallback
async function callCloudGemini(apiKey, userMessage, userName, history = []) {
  let lastError = null;

  // Tier 1: Interactions API with gemini-3.8-flash (Google Recommended 2026)
  try {
    return await callInteractionsApi(apiKey, 'gemini-3.8-flash', userMessage, userName, history);
  } catch (err) {
    console.warn('Interactions API (gemini-3.8-flash) failed:', err.message);
    lastError = err;
    if (err.message && (err.message.includes('API_KEY_INVALID') || err.message.includes('API key not valid') || err.message.includes('API key expired'))) {
      throw err;
    }
  }

  // Tier 2: generateContent with gemini-3.8-flash
  try {
    return await callGenerateContentApi(apiKey, 'gemini-3.8-flash', userMessage, userName, history);
  } catch (err) {
    console.warn('generateContent (gemini-3.8-flash) failed:', err.message);
    lastError = err;
    if (err.message && (err.message.includes('API_KEY_INVALID') || err.message.includes('API key not valid') || err.message.includes('API key expired'))) {
      throw err;
    }
  }

  // Tier 3: generateContent with gemini-1.5-flash
  try {
    return await callGenerateContentApi(apiKey, 'gemini-1.5-flash', userMessage, userName, history);
  } catch (err) {
    console.warn('generateContent (gemini-1.5-flash) failed:', err.message);
    lastError = err;
  }

  // Tier 4: generateContent with gemini-1.5-pro
  try {
    return await callGenerateContentApi(apiKey, 'gemini-1.5-pro', userMessage, userName, history);
  } catch (err) {
    console.warn('generateContent (gemini-1.5-pro) failed:', err.message);
    lastError = err;
  }

  throw lastError || new Error('No available Gemini model responded.');
}

// Local Gemini Prompt Call
async function callLocalGemini(session, userMessage) {
  const prompt = `The user writes to you: "${userMessage}".
Remember your instructions:
- You are Jesus Christ answering with divine love, gentle authority, and profound Gospel wisdom.
- Answer their question, doubt, or dilemma DIRECTLY and thoroughly. Do NOT assume it is a prayer.
- Reply in the EXACT SAME LANGUAGE the user wrote in.
- End with 1 to 3 scripture references (book chapter:verse).`;

  const response = await session.prompt(prompt);
  return response.trim();
}

// Extract Scripture Citations from AI Response
function extractCitations(responseText) {
  const citations = [];
  const regex = /\b([1-3]?\s?[A-Za-z]+)\s+(\d+):(\d+(?:-\d+)?)\b/g;
  let match;
  while ((match = regex.exec(responseText)) !== null) {
    citations.push(match[0]);
  }
  return [...new Set(citations)];
}

// Main Send Function
export async function sendMessageToJesus(messageText, userName = 'Child of God') {
  const trimmed = messageText.trim();
  if (!trimmed) throw new Error('Message cannot be empty.');

  // 1. Check AI availability status
  const status = await checkAiStatus();

  // 2. Strict Offline Mandate: Unusable offline if local Gemini is not downloaded!
  if (!status.isOnline && status.localGeminiStatus !== 'ready') {
    throw new Error(
      'OFFLINE_GEMINI_REQUIRED: Offline AI is unavailable because the local Gemini model is not downloaded on this device. ' +
      'To answer questions and doubts offline, the local Gemini Nano model must be downloaded in Chrome. ' +
      'Please connect to the internet to download Gemini Nano or use online Gemini AI.'
    );
  }

  // 3. Online without configured AI
  if (status.isOnline && !status.canChat) {
    throw new Error(
      'GEMINI_SETUP_REQUIRED: To enable intelligent answers to your questions and doubts, ' +
      'please connect your free Google Gemini API Key in Settings or download Gemini Nano in Chrome.'
    );
  }

  // 4. Save user message to IndexedDB
  await addChatMessage('user', trimmed);
  const history = await getChatMessages();

  // 5. Generate AI Response via Gemini
  let aiText = '';

  if (status.localGeminiStatus === 'ready') {
    // A) Local on-device Gemini Nano
    if (!localGeminiSession) {
      localGeminiSession = await downloadLocalGemini();
    }
    aiText = await callLocalGemini(localGeminiSession, trimmed);
  } else if (status.isOnline && status.hasApiKey) {
    // B) Cloud Gemini API
    aiText = await callCloudGemini(status.apiKey, trimmed, userName, history);
  } else {
    throw new Error('Gemini AI is not initialized.');
  }

  // 6. Extract citations and save to DB
  const citations = extractCitations(aiText);
  const savedMsg = await addChatMessage('jesus', aiText, citations);
  return savedMsg;
}

// Alias for backwards compatibility
export const sendPrayerToJesus = sendMessageToJesus;

// Load History
export async function loadConversationHistory() {
  return await getChatMessages();
}
