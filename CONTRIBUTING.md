# How to Contribute to Aura Sacra 🕊️

Thank you for your interest in contributing to **Aura Sacra**!  
Aura Sacra is an ecumenical, contemplative, 100% offline-first Christian Progressive Web App (PWA) built for deep spiritual reflection, prayer, Bible study, and absolute personal data sovereignty.

---

## 🌿 Core Guiding Principles

Every code and content contribution should adhere to these core principles:

### 1. Pure Web Architecture & Zero Build Toolchains
- The entire application is built using standard, modern **JavaScript (ES Modules)**, HTML5, and CSS3.
- No bundlers, transpilers, or complex build toolchains are required (no mandatory Node.js, Webpack, Vite, or Babel).
- Any modern web browser can execute the application directly by serving the static files, ensuring maximum transparency, longevity, and technological independence.

### 2. Complete Data Sovereignty & 100% Offline Privacy
- No user data (personal journal entries, prayers, Bible highlights, or reflections) ever leaves the user's device.
- State and archives are stored exclusively on the user's local device using **IndexedDB** (with a mirror in `localStorage`).
- Full backup and restore capability via standard, open JSON files is guaranteed at all times.

### 3. Ecumenical Respect & Canonical Faithfulness
- Aura Sacra embraces Christians across historical traditions: Catholic, Orthodox, Protestant / Evangelical, and all sincere spiritual seekers.
- The platform includes the full **80-Book Canonical & Deuterocanonical library** (including Sirach / Ecclesiasticus, Wisdom of Solomon, Tobit, Judith, Baruch, and Maccabees).
- All Biblical content, liturgical calendars, and spiritual reflections must preserve a welcoming, reverent tone faithful to the Holy Scriptures and the Gospel of Jesus Christ.

### 4. Transparent AI Architecture
- The spiritual dialogue assistant interfaces with **Google Gemini 3** (via personal API key) or on-device local models (such as Chrome Gemini Nano).
- When offline or when no model is available, the AI assistant gracefully disables itself with clear feedback, preventing fabricated or unvetted responses.

---

## 🛠️ Development Environment Setup

1. **Clone or download the repository**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/aura-sacra.git
   cd aura-sacra
   ```

2. **Serve the application locally**:
   Any lightweight static web server can serve Aura Sacra with proper MIME types. You can use any static server of your preference, for example:
   ```bash
   # Using npx (Node.js)
   npx serve . -p 8080

   # Or using VS Code Live Server extension
   # Right-click index.html -> "Open with Live Server"
   ```
   Open `http://localhost:8080` in your web browser.

3. **Code Conventions**:
   - Use standard ES Modules (`import` / `export`).
   - Maintain UI consistency using the pre-configured Tailwind CSS utility classes and semantic variables (`var(--accent-vermilion)`, `var(--bg-parchment)`).
   - Use the centralized, accessible SVG icons defined in `js/icons.js`.

---

## 🤝 Submitting a Contribution

1. **Fork** the repository on GitHub.
2. Create a dedicated branch for your feature or bug fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Test your changes thoroughly:
   - Ensure the user interface renders seamlessly across all 4 circadian liturgical themes (*Dawn / Lauds, Midday / Scriptorium, Sunset / Vespers, Night / Compline*).
   - Test offline functionality by toggling "Offline" mode in your browser DevTools.
   - Verify that the 80-book Bible reader and the Penance Calendar function smoothly.
4. Commit your changes with clear, descriptive commit messages:
   ```bash
   git commit -m "Add descriptive summary of changes"
   ```
5. Push the branch to your fork and submit a **Pull Request**.

---

## 📜 License

By contributing to Aura Sacra, you agree that your contributions will be licensed and distributed under the terms of the **GNU General Public License v3 (GNU GPL v3)**.  
See the [LICENSE](LICENSE) file for the full legal text and conditions.

*Aura Sacra • Soli Deo Gloria*
