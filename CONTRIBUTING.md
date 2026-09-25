# Come Contribuire ad Aura Sacra 🕊️

Grazie per il tuo interesse a contribuire ad **Aura Sacra**!  
Questo progetto è un'applicazione web progressiva (PWA) cristiana, ecumenica, contemplativa e orientata al funzionamento 100% offline e alla massima sovranità dei dati personali.

---

## 🌿 Principi Guida Fondamentali

Ogni contributo al codice e ai contenuti deve rispettare i seguenti principi:

### 1. Architettura Pura & Zero Strumenti di Build
- L'applicazione è sviluppata in **JavaScript moderno standard (ES Modules)**.
- Non vengono utilizzati bundler, transpiler o toolchain complesse (nessun bisogno di Node.js, npm, Webpack o Vite).
- Qualsiasi browser moderno può eseguire direttamente il progetto aprendo i file, garantendo la massima longevità nel tempo, trasparenza e indipendenza tecnologica.

### 2. Sovranità dei Dati & Privacy al 100%
- Nessun dato dell'utente (note personali, preghiere, evidenziazioni bibliche o riflessioni del diario) lascia mai il dispositivo.
- Lo stato viene archiviato unicamente sul browser dell'utente tramite **IndexedDB** (con fallback/mirror in `localStorage`).
- È sempre garantita la funzione di esportazione e importazione completa del proprio archivio in formato aperto JSON.

### 3. Rispetto Ecumenico & Fedeltà Evangelica
- Aura Sacra accoglie cristiani di ogni tradizione storica: cattolici, ortodossi, protestanti / evangelici e chiunque sia in cammino di ricerca spirituale.
- I contenuti biblici e le riflessioni devono preservare un tono accogliente, rispettoso dell'eredità canonica e saldamente radicato nel Vangelo.

### 4. Politica Trasparente sull'Intelligenza Artificiale
- L'assistente spirituale per il dialogo si interfaccia con la serie **Google Gemini 3** (tramite chiave API personale) oppure con il modello on-device integrato nel browser (Chrome Gemini Nano).
- Se il modello locale non è installato e l'utente è offline, la chat viene disattivata con chiarezza per prevenire risposte allucinate o finte risposte predefinite.

---

## 🛠️ Configurazione dell'Ambiente di Sviluppo

1. **Clona o scarica il repository**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/aura-sacra.git
   cd aura-sacra
   ```

2. **Avvia il server di sviluppo locale**:
   Qualsiasi server statico leggero è sufficiente. Nel progetto è incluso un comodo script Python senza dipendenze:
   ```bash
   python3 serve.py 8080
   ```
   Apri `http://localhost:8080` nel browser.

3. **Convenzioni di Codice**:
   - Utilizza i moduli JavaScript standard (`import` / `export`).
   - Mantieni l'interfaccia coerente utilizzando le classi utility di Tailwind CSS già configurate.
   - Per le icone grafiche, utilizza le funzioni SVG semantiche definite in `js/icons.js`.

---

## 🤝 Inviare un Contributo

1. Esegui il Fork del repository su GitHub.
2. Crea un branch dedicato alla tua modifica:
   ```bash
   git checkout -b feature/nome-funzionalita
   ```
3. Verifica con cura le modifiche:
   - Assicurati che l'interfaccia funzioni armoniosamente in tutti e 4 i temi liturgici (*Aurora, Mezzogiorno, Tramonto, Notte*).
   - Verifica il corretto funzionamento in modalità offline disattivando la rete nei DevTools del browser.
4. Esegui il commit con messaggi descrittivi e ordinati:
   ```bash
   git commit -m "Descrizione chiara del contributo"
   ```
5. Invia il branch al tuo fork e apri una **Pull Request**.

---

## 📜 Licenza

Contribuendo ad Aura Sacra, accetti che il tuo codice e i tuoi contributi siano rilasciati e distribuiti secondo i termini della licenza **GNU General Public License v3 (GNU GPL v3)**.  
Consulta il file [LICENSE](LICENSE) per tutti i termini e le condizioni legali.

*Aura Sacra • Soli Deo Gloria*
