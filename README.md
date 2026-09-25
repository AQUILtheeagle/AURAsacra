# 🕊️ Aura Sacra — Universal Christian Platform

[![License: MIT](https://img.shields.io/badge/License-MIT-amber.svg)](LICENSE)
[![PWA Ready](https://img.shields.io/badge/PWA-100%25_Offline-emerald.svg)](sw.js)
[![Architecture](https://img.shields.io/badge/Architecture-Vanilla_ES_Modules-blue.svg)](index.html)
[![AI Engine](https://img.shields.io/badge/AI-Google_Gemini-orange.svg)](js/ai-engine.js)

> **«In lumine tuo videbimus lumen»** • *In your light we see light.*

**Aura Sacra** is an open-source, ecumenical, and 100% offline-first Christian Progressive Web App (PWA) designed to accompany students, workers, and families in their spiritual journey. Crafted with an illuminated sacred manuscript aesthetic, an automatic circadian liturgical theme, and client-side data sovereignty.

---

## 🌟 Key Features

### 1. 📖 Canonical Holy Scriptures Reader
- **19 Canonical Books & 40 Complete Chapters** (1,083 full verses in King James Version English).
- Grouped into 6 biblical testaments: *Old Testament, Wisdom & Poetry, Prophets, Gospels, Apostolic & Epistles, Apocalypse*.
- **5-Color Spiritual Highlighting Palette** (Gold, Blue, Red, Green, Purple) persisted in IndexedDB.
- **Click-to-Select Scripture Card**: Click any `[Book Chapter:Verse]` badge to immediately open the shareable manuscript card with zero typing needed.

### 2. 🕊️ Dialogue with Jesus (Powered by Google Gemini)
- Dedicated dialogue interface for questions, spiritual doubts, biblical inquiries, and everyday life dilemmas.
- **Not a generic prayer bot**: It directly and thoughtfully answers questions, clarifies theological doubts, explains parables, and offers compassionate Gospel wisdom.
- **Multilingual Understanding**: Reads and replies fluently in the user's language (Italian, English, Spanish, French, German, Romanian).
- **Strict Offline Policy**: Powered by on-device **Chrome Gemini Nano** (Prompt API) for 100% offline reasoning, or **Cloud Gemini 2.0 Flash** when online with an API key. If local Gemini is not downloaded in the browser, offline dialogue is strictly disabled to prevent inaccurate or canned responses.

### 3. 📜 Shareable Parchment Scripture Cards
- HTML5 Canvas engine rendering illuminated medieval manuscript cards.
- Interactive multi-verse selection chips (`5:1`, `5:2`, `5:3`...) inside the modal.
- Native sharing via Web Share API to **WhatsApp, Telegram, iMessage, Instagram Stories**, or direct PNG download.
- Dynamic auto-scaling font algorithm for long multi-verse quotations.

### 4. 🕯️ Focus with God, Candle & Rain
- Spiritual Pomodoro timer (15m, 25m, 45m, 60m).
- Procedural gentle rainfall synthesized live via the **Web Audio API** (zero audio file downloads).
- Standalone floating candle popup window (`candle-popup.html`) that hovers while working.

### 5. 🏺 The Jar of Promises
- Filter by emotional state (*Anxiety, Fear, Loneliness, Grief, Guilt & Forgiveness, Difficult Decisions, Exhaustion, Gratitude*).
- Draws biblical promises with personal reflection and a 30-second micro-prayer.

### 6. 📔 Prayer Journal
- Personal spiritual journal stored locally in IndexedDB.
- 1-click **"Bring to Jesus"** button on each prayer entry to transition directly into dialogue in the chat.

### 7. 🛡️ SOS Temptation & Peace Shield
- Emergency tool with 30-second guided breathing circle, scripture shield (1 Cor 10:13), and protection prayer.

### 8. 🧭 Faith Compass & Evening Examen
- Rational and scriptural answers to existential dilemmas (problem of evil, science and faith).
- Compline examination of conscience with the **Night Protection of Christ** invocation against insomnia and anxiety.

### 9. 🔒 100% Privacy & Data Sovereignty
- No accounts, no cloud database, zero telemetry.
- All notes, prayers, and highlights stay on your device in **IndexedDB**.
- One-click JSON backup export and import.

---

## 🎨 Circadian Liturgical Theme

Aura Sacra shifts its atmosphere based on your device clock:
- 🌅 **06:00 – 11:59 (Dawn / Lauds)**: Golden sunrise tones and illuminated parchment.
- ☀️ **12:00 – 17:59 (Midday / Scriptorium)**: Warm classic vellum and vermilion accents.
- 🌇 **18:00 – 21:59 (Sunset / Vespers)**: Amber candlelight peace.
- 🕯️ **22:00 – 05:59 (Night / Compline)**: Deep cathedral slate and warm candlelight.

---


## 🌐 Deploy to GitHub Pages (Free Hosting)

1. Push this repository to GitHub.
2. In your repository on GitHub, navigate to **Settings** > **Pages**.
3. Under **Build and deployment**, select **Source: Deploy from a branch**.
4. Choose the `main` branch and `/ (root)` folder, then click **Save**.
5. Your PWA is live globally with automated HTTPS and Service Worker caching!

---

## 📱 PWA Installation

- **iOS (Safari)**: Tap the Share button > **Add to Home Screen**.
- **Android (Chrome)**: Tap the three-dot menu > **Install app** or **Add to Home screen**.
- **Desktop (Chrome/Edge)**: Click the Install icon in the address bar.

---

## 🤝 Contributing

Contributions from all Christian traditions and developers are welcome. Please read our [CONTRIBUTING.md](CONTRIBUTING.md) guide before submitting pull requests.

---

## 📜 License

This project is open-source software licensed under the [MIT License](LICENSE).

*Aura Sacra • Soli Deo Gloria*
