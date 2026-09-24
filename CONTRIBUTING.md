# Contributing to Aura Sacra 🕊️

Thank you for your interest in contributing to **Aura Sacra**! This project is an ecumenical, universal, and 100% offline-first Christian Progressive Web App (PWA).

## 🌿 Core Guiding Principles

1. **Zero Build Steps & Pure Vanilla Architecture**:
   - The application is written in standard modern JavaScript (ES Modules).
   - There are **no Node.js/npm build tools, bundlers, or transpilers** required.
   - Any browser can run the app directly, ensuring extreme longevity, transparency, and independence from complex toolchains.

2. **100% Data Sovereignty & User Privacy**:
   - No user data, notes, prayers, highlights, or journal entries ever leave the device.
   - All state is stored locally in client-side **IndexedDB** with localStorage fallback mirroring.
   - Full JSON import/export is provided for users to own their data.

3. **Ecumenical & Universal Respect**:
   - Aura Sacra embraces Christians across traditions: Catholic, Eastern Orthodox, Protestant / Evangelical, and seekers of faith.
   - Biblical and theological content should remain ecumenical, respectful of canonical heritage, and deeply grounded in the Gospel.

4. **Honest & Safe AI Policy**:
   - The dialogue assistant connects to Google Gemini (either via Chrome's on-device Gemini Nano Prompt API or online Gemini API).
   - If the local Gemini model is not downloaded on device and the user is offline, offline dialogue is strictly disabled to prevent misleading or canned responses.

---

## 🛠️ Development Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/aura-sacra.git
   cd aura-sacra
   ```

2. **Run the local development server**:
   Any lightweight static server will do. We include a zero-dependency Python script:
   ```bash
   python3 serve.py 8080
   ```
   Open `http://localhost:8080` in any modern browser.

3. **Code Style**:
   - Use standard ES Modules (`import` / `export`).
   - Style with Tailwind CSS utility classes.
   - Use semantic SVG icons located in `js/icons.js`.

---

## 🤝 Submitting Contributions

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/my-new-feature`.
3. Test your changes thoroughly across themes (Dawn, Midday, Sunset, Night) and in offline mode.
4. Commit with clear, descriptive messages: `git commit -m "Add feature X"`.
5. Push to your fork and submit a Pull Request.

---

## 📜 License

By contributing to Aura Sacra, you agree that your contributions will be licensed under the project's [MIT License](LICENSE).
