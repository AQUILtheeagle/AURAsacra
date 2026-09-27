# Contributing to Aura Sacra 🕊️

Thank you for your interest in contributing to **Aura Sacra**!  
Aura Sacra is an ecumenical, contemplative, and 100% offline-first Christian Progressive Web App (PWA) dedicated to deep biblical study, liturgical penance and fasting discipline, prayer, and absolute personal data sovereignty.

---

## 🌿 Core Guiding Principles

Every code and content contribution should adhere to these core pillars:

### 1. Pure Web Standards & Zero Build Toolchains
- The entire codebase is implemented in standard, native **JavaScript (ES Modules)**, HTML5, and CSS3.
- No bundlers, transpilers, or build steps are permitted (no mandatory Webpack, Vite, Babel, or npm dependencies).
- Any modern web browser must be able to serve the application directly from static files, ensuring architectural simplicity, auditability, and long-term technological independence.

### 2. Complete Data Sovereignty & 100% Offline Privacy
- **Zero user data** (personal journal notes, prayers, Bible highlights, or chat reflections) ever leaves the user's device.
- State and archives are stored exclusively on the user's local machine via **IndexedDB** (with a fallback mirror in `localStorage`).
- Zero analytics, trackers, cookies, or remote logging are allowed.
- Export and import of user data via standard plain or encrypted JSON files must remain fully supported.

### 3. Ecumenical Respect & Canonical Integrity
- Aura Sacra welcomes Christians across historical traditions: Catholic, Eastern Orthodox, Protestant / Evangelical, and all sincere spiritual seekers.
- The platform hosts **9 complete historical Holy Bibles** (including the full Deuterocanonical / Apocryphal books).
- All liturgical computations, theological commentary, and scripture texts must maintain high scholarly rigor and reverent fidelity to the Christian faith.

### 4. Comprehensive Localization (9 Languages)
- All user-facing strings must be localized across the 9 supported languages:
  - English (`en`), Italian (`it`), Romanian (`ro`), French (`fr`), Spanish (`es`), Portuguese (`pt`), German (`de`), Russian (`ru`), and Latin (`la`).
- Main UI strings reside in `js/i18n.js`.
- Liturgical fasting rules, permissions, theology, and traditions reside in `js/data/penance-i18n.js`.

### 5. Transparent & Privacy-Preserving AI
- The spiritual dialogue assistant interfaces directly with **Google Gemini 3** (via user-supplied API key) or on-device local models (*Chrome Gemini Nano*).
- No proxy servers or third-party gateways are permitted.
- When offline or when no model is configured, the assistant gracefully informs the user without attempting to simulate or fabricate answers.

---

## 📁 Repository Structure

```
aura-sacra/
├── index.html                   # Main single-page application shell
├── candle-popup.html            # Standalone Picture-in-Picture candle player
├── manifest.json                # PWA manifest
├── sw.js                        # Cache-first offline service worker
├── css/
│   └── style.css                # Medieval manuscript styling & circadian themes
├── data/                        # 100% offline canonical Bibles (JSON)
│   ├── bible-kjv.json           # English (KJV + Deuterocanon)
│   ├── bible-cei.json           # Italian (CEI 2008)
│   ├── bible-sinodala.json      # Romanian (Sinodală)
│   ├── bible-segond.json        # French (Louis Segond 1910)
│   ├── bible-reina.json         # Spanish (Reina-Valera 1909)
│   ├── bible-almeida.json       # Portuguese (João Ferreira de Almeida)
│   ├── bible-luther.json        # German (Lutherbibel 1912)
│   ├── bible-synodal.json       # Russian (Синодальный перевод)
│   └── bible-vulgata.json       # Latin (Biblia Sacra Vulgata Clementina 1592)
├── js/
│   ├── app.js                   # Application coordinator & navigation
│   ├── i18n.js                  # Central localization dictionary (9 languages)
│   ├── db.js                    # Local IndexedDB storage engine
│   ├── circadian.js             # Circadian liturgical theme manager
│   ├── audio-engine.js          # Web Audio procedural rain synthesis
│   ├── ai-engine.js             # Google Gemini 3 & Gemini Nano interface
│   ├── card-generator.js        # Canvas manuscript card generator
│   ├── icons.js                 # Central SVG icon catalog
│   ├── data/
│   │   ├── penance.js           # Liturgical Computus & fasting engine
│   │   ├── penance-i18n.js      # Fasting & traditions multilingual catalog
│   │   ├── scriptures.js        # Bible loader & book catalog
│   │   ├── scripture-archives.js# Pre-loaded offline reference verses
│   │   ├── daily-saints.js      # Liturgical saints & color calendar
│   │   ├── saints.js            # Tradition-specific Church fathers
│   │   ├── promises.js          # Jar of Promises reflections & prayers
│   │   └── doubts.js            # Faith Compass questions & answers
│   └── components/              # Modular UI components
│       ├── bible-reader.js      # Scripture reader & highlight engine
│       ├── penance-calendar.js  # Liturgical calendar & Day Inspector
│       ├── jesus-chat.js        # Spiritual dialogue view
│       ├── prayer-journal.js    # Local prayer journal
│       ├── saints-view.js       # Saints & Church fathers view
│       ├── evening-exam.js      # Compline examination of conscience
│       ├── jar-promises.js      # Jar of Promises view
│       ├── sos-temptation.js    # SOS Peace & breathing shield
│       ├── faith-compass.js     # Existential faith Q&A
│       ├── floating-candle.js   # Picture-in-Picture candle controller
│       ├── focus-mode.js        # Timed contemplative timer
│       ├── share-card.js        # Illuminated card modal
│       ├── settings-modal.js    # Settings & data backup/restore
│       └── ...
└── icons/                       # PWA application icons
```

---

## 🛠️ Local Development & Testing

1. **Clone the repository**:
   ```bash
   git clone https://github.com/AQUILtheeagle/AURAsacra.git
   cd AURAsacra
   ```

2. **Serve with any static HTTP server**:
   Because Aura Sacra requires no build tools, any static web server is sufficient:
   ```bash
   # Using Python:
   python3 -m http.server 8080

   # Or using npx:
   npx serve . -p 8080
   ```
   Open `http://localhost:8080` in your web browser.

3. **Verify JavaScript Syntax**:
   On macOS, you can test ES Module import syntax using the JavaScriptCore CLI:
   ```bash
   /System/Library/Frameworks/JavaScriptCore.framework/Versions/Current/Helpers/jsc -e "import('./js/app.js').then(() => print('OK')).catch(print)"
   ```

4. **Service Worker Cache Updates**:
   When adding or renaming cached assets:
   - Add the path to `ASSETS_TO_CACHE` in `sw.js`.
   - Increment `CACHE_NAME` in `sw.js` (e.g., from `aura-sacra-v1.2.2` to `aura-sacra-v1.2.3`).

---

## 🎨 UI Guidelines & Code Standards

- **Semantic CSS Variables**: Use the circadian CSS custom properties defined in `css/style.css` (`var(--bg-primary)`, `var(--bg-card)`, `var(--text-primary)`, `var(--accent-vermilion)`, `var(--bg-parchment)`).
- **Icons**: Always reuse or add icons to `js/icons.js`. Do not embed unstyled or duplicate inline SVGs in components.
- **Notranslate Attributes**: Preserve the `notranslate` class and `translate="no"` attribute on sacred Latin text, Bible verses, and saint quotations to prevent browser auto-translators from altering canonical texts.
- **Defensive Error Handling**: Always handle offline scenarios gracefully without throwing uncaught exceptions.

---

## 🚀 Submitting Contributions

1. **Fork** the repository and create your feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
2. Test your changes:
   - Verify UI rendering across all 4 circadian themes (*Dawn, Midday, Sunset, Night*).
   - Test offline support by enabling "Offline" in DevTools Network tab.
   - Verify language switching across all 9 supported languages.
3. Commit with concise, descriptive commit messages:
   ```bash
   git commit -m "feat(penance): add multilingual support for Ember Day descriptions"
   ```
4. Push your branch to GitHub and open a **Pull Request**.

---

## 📜 License

By contributing to Aura Sacra, you agree that your contributions will be licensed under the **GNU General Public License v3.0 (GNU GPL v3)**.  
See the [LICENSE](LICENSE) file for the complete terms.

*Aura Sacra • Soli Deo Gloria*
