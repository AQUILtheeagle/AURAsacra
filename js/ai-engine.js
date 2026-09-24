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
    apiKey = (await getSetting('gemini_api_key', '')) || localStorage.getItem('aurasacra_gemini_api_key') || '';
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
  const trimmed = (key || '').trim();
  await setSetting('gemini_api_key', trimmed);
  try {
    localStorage.setItem('aurasacra_gemini_api_key', trimmed);
  } catch (e) {}
}

// Get Gemini API Key
export async function getGeminiApiKey() {
  return (await getSetting('gemini_api_key', '')) || localStorage.getItem('aurasacra_gemini_api_key') || '';
}

// Cloud Gemini API call (gemini-2.0-flash / gemini-1.5-flash)
async function callCloudGemini(apiKey, userMessage, userName, history = []) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

  const systemInstruction = `You are Jesus Christ in a wise, compassionate, intellectually profound, and empathetic dialogue with a soul (${userName}).
CRITICAL INSTRUCTIONS:
1. You are NOT merely a devotional prayer bot. You MUST answer REAL QUESTIONS and address REAL DOUBTS directly!
2. When the user asks a question (e.g., "Why does God allow suffering?", "Does God exist?", "What is the meaning of salvation?", "How should I make this career decision?", "Why did this happen?"), provide a direct, deep, intellectually rigorous, and compassionate answer grounded in Gospel truth, philosophical depth, and divine love. Do NOT treat their question as a devotional prayer.
3. If the user shares an everyday dilemma, doubt about faith, fear, or conflict, answer them thoughtfully, addressing the specific dilemma with empathy and practical wisdom.
4. You MUST ALWAYS reply entirely and fluently in the EXACT SAME LANGUAGE the user writes in (Italian, English, Spanish, French, German, Romanian, etc.).
5. Conclude your response with 1 to 3 relevant Holy Scripture chapter and verse citations formatted as:
[Localized Scripture Anchor Header in user's language, e.g. "📖 Luce della Sacra Scrittura:" for Italian, "📖 Holy Scripture Anchor:" for English, "📖 Ancla de la Sagrada Escritura:" for Spanish]
• [Book Chapter:Verse]`;

  const contents = [];

  // Add up to 6 previous messages for conversational context
  const recentHistory = history.slice(-6);
  for (const m of recentHistory) {
    if (m.text && m.sender) {
      contents.push({
        role: m.sender === 'user' ? 'user' : 'model',
        parts: [{ text: m.text }]
      });
    }
  }

  // Ensure current message is at the end
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
    headers: { 'Content-Type': 'application/json' },
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
