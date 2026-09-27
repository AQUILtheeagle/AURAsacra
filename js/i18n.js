// Native Multilingual Localization Engine (i18n) for Aura Sacra
// Supports: English (en), Italiano (it), Română (ro), Français (fr),
// Español (es), Português (pt), Deutsch (de), Русский (ru), Lingua Latina (la).

import { getSetting, setSetting } from './db.js';

export const SUPPORTED_LANGUAGES = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧' },
  { code: 'it', name: 'Italian', nativeName: 'Italiano', flag: '🇮🇹' },
  { code: 'ro', name: 'Romanian', nativeName: 'Română', flag: '🇷🇴' },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português', flag: '🇵🇹' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪' },
  { code: 'ru', name: 'Russian', nativeName: 'Русский', flag: '🇷🇺' },
  { code: 'la', name: 'Latin', nativeName: 'Lingua Latina', flag: '🇻🇦' }
];

let currentLanguage = 'it'; // Default preferred by user
const languageChangeListeners = [];

export const TRANSLATIONS = {
  // ==========================================
  // ENGLISH (EN)
  // ==========================================
  en: {
    nav: {
      brandSub: 'Universal Christian Platform • 100% Offline',
      scripture: 'Scripture',
      penance: 'Penance & Fasting',
      jesus: 'Dialogue with Jesus',
      journal: 'Prayer Journal',
      saints: 'Saints & Fathers',
      focus: 'Focus Meditation',
      tools: 'Sacred Tools',
      sos: 'SOS Peace',
      promises: 'Jar of Promises',
      settings: 'Settings',
      schedule: 'Monastic Schedule',
      spiritualLife: 'Spiritual Life',
      monasticMotto: '«Ora et Labora» • Pray and work in the holy presence of God.'
    },
    circadian: {
      dawn: 'Dawn / Lauds',
      midday: 'Midday / Sext',
      sunset: 'Sunset / Vespers',
      night: 'Night / Compline'
    },
    colors: {
      white: 'White',
      blue: 'Blue',
      red: 'Red',
      whiteDesc: 'Solemnities of the Lord, Confessors, Doctors, Holy Virgins & Angels',
      blueDesc: 'Marian Feasts & Blessed Virgin Mary',
      redDesc: 'Apostles, Evangelists & Holy Martyrs of Faith'
    },
    ranks: {
      solemnity: 'Solemnity',
      feast: 'Feast',
      memorial: 'Memorial',
      commemoration: 'Commemoration'
    },
    penance: {
      badge: 'Sacred Liturgical Discipline',
      title: 'Penance, Fasting & Abstinence',
      subtitle: 'Know when to fast, abstain from meat, and sanctify your days in union with the Cross of Christ.',
      activeRite: 'Active Rite:',
      today: 'Today',
      todayCommemoration: "Today's Saint / Feast:",
      inspection: 'Inspection of Selected Date',
      strictFast: 'Strict Fast & Abstinence',
      abstinence: 'Meat Abstinence',
      emberDay: 'Ember Day (Fast & Abstinence)',
      dispensation: 'Solemnity Dispensation',
      ordinary: 'Ordinary Day',
      viewDayGuide: 'View Full Day Guide & Prayer',
      jumpToday: 'Jump to Today',
      fastingDiscipline: 'Fasting Discipline (Quantity of Meals)',
      abstinenceDiscipline: 'Abstinence Discipline (Quality of Food)',
      allowedTable: '✓ Permitted Table',
      avoidTable: '✗ Prohibited or Restricted',
      theologicalMeaning: 'Theological & Biblical Meaning',
      prayerOfDay: 'Penitential Prayer of the Day',
      saintsOnThisDay: 'Saints & Feasts Commemorated on this Day',
      noSaintsOnDay: 'Ordinary liturgical day of prayer, vigilance and devotion.',
      pillarsTitle: 'The Three Pillars of Gospel Penance',
      pillarsSubtitle: '«When you give alms... when you pray... when you fast» (Matthew 6)',
      prayerPillarTitle: '1. Interior Prayer',
      prayerPillarDesc: 'Elevating heart and mind to God through psalms, silence, and petition.',
      fastingPillarTitle: '2. Bodily Fasting',
      fastingPillarDesc: 'Subduing carnality and worldly addictions to hunger for the Word of God.',
      almsPillarTitle: '3. Generous Almsgiving',
      almsPillarDesc: 'Sharing food and resources with the poor, seeing Jesus in those who suffer.'
    },
    saints: {
      title: 'Saints & Church Fathers',
      subtitle: 'Cloud of Witnesses across Church history',
      todaySaintsTitle: "Today's Saints & Feasts",
      calendarTitle: 'Liturgical Calendar of Saints',
      filterAll: 'All Commemorations',
      filterToday: 'Today Only',
      liturgicalColor: 'Liturgical Color:',
      importanceRank: 'Liturgical Rank:',
      shareQuote: 'Share Quote',
      meditation: 'Patristic Meditation',
      scripture: 'Scripture Reference'
    },
    settings: {
      title: 'Settings & Sacred Preferences',
      subtitle: 'Customize faith tradition, language, circadian theme, and offline data backup',
      language: 'Interface Language:',
      confession: 'Christian Faith Tradition:',
      name: 'Your Name or Form of Address:',
      namePlaceholder: 'e.g., John, Mary, or leave blank...',
      theme: 'Circadian Liturgical Theme:',
      themeAuto: 'Automatic (adapts to actual local time)',
      themeDawn: 'Dawn / Lauds (06:00 – 11:59) [Golden light]',
      themeMidday: 'Midday / Scriptorium (12:00 – 17:59) [Parchment]',
      themeSunset: 'Sunset / Vespers (18:00 – 21:59) [Warm amber]',
      themeNight: 'Night / Compline (22:00 – 05:59) [Candlelight]',
      aiTitle: 'Google Gemini AI (Questions & Doubts):',
      aiKey: 'Google Gemini API Key:',
      aiKeyLink: 'Get Free Key at Google AI Studio ↗',
      aiModel: 'Gemini AI Model / Version:',
      offlineNotice: 'Offline Dialogue Policy: If the local Gemini Nano model is not downloaded on this device, offline AI dialogue is disabled to prevent inaccurate or canned responses.',
      backupTitle: 'Data Sovereignty • 100% Offline JSON Backup:',
      exportBackup: 'Export All Data (JSON Backup)',
      importBackup: 'Import Backup',
      backupDesc: 'No data ever leaves your device. You can save notes, prayers, and chats to a JSON file to transfer between devices.',
      save: 'Save Settings',
      testKey: 'Test Connection'
    },
    tools: {
      title: 'Sacred Tools & Contemplation',
      subtitle: 'Instruments for prayer, fasting, peace, and spiritual growth',
      spiritualDisciplines: 'Spiritual Disciplines & Daily Rhythm',
      wisdomArmor: 'Wisdom & Spiritual Armor',
      utilities: 'Sacred Utilities & Personal Growth',
      motto: '«Ora et Labora» • All tools run 100% offline with zero cloud tracking.',
      penanceDesc: 'Daily fasts, meat abstinence, and liturgical rules with saints commemorations',
      promisesDesc: 'Biblical promises for anxiety, sorrow, decisions & gratitude',
      eveningTitle: 'Night Examination & Protection',
      eveningDesc: 'Compline examen of conscience and peaceful sleep prayer',
      focusDesc: 'Living flame meditation and procedural soothing rain',
      sosDesc: '30-second rhythmic breathing and 1 Cor 10:13 shield verse',
      compassTitle: 'Faith Compass',
      compassDesc: 'Guidance on profound existential and theological questions',
      saintsDesc: 'Treasury of wisdom with liturgical colors and ranks',
      shareTitle: 'Parchment Card Maker',
      shareDesc: 'Design and share illuminated Scripture cards to social apps',
      scheduleDesc: 'Harmonize your study and labor with the monastic hours',
      settingsDesc: 'Language selector, API key, backup & restore, circadian themes',
      feedbackTitle: 'Anonymous Community Feedback',
      feedbackDesc: 'Send anonymous suggestions directly via GitHub Issues'
    },
    reader: {
      testamentOld: 'Old Testament',
      testamentDeut: 'Deuterocanon & Apocrypha',
      testamentWisdom: 'Wisdom & Poetry',
      testamentProphets: 'Prophets',
      testamentGospels: 'Gospels',
      testamentEpistles: 'Apostolic & Epistles',
      testamentApocalypse: 'Apocalypse',
      chapter: 'Chapter',
      psalm: 'Psalm',
      selectChapter: 'Select Chapter',
      deselectAll: 'Deselect All',
      prevChapter: 'Previous Chapter',
      nextChapter: 'Next Chapter',
      shareCard: 'Share Card',
      shareSelection: 'Share Range Card',
      highlight: 'Highlight:',
      highlightAll: 'Highlight all:',
      remove: 'Remove',
      clear: 'Clear',
      canonicalArchive: 'Canonical Archive',
      verse: 'Verse',
      verses: 'Verses'
    },
    sos: {
      title: 'SOS Peace & Temptation Shield',
      sub: 'Pause for a moment. Do not yield to temptation or anxiety. Christ is right here with you.',
      inhaleGrace: 'Inhale Grace',
      holdPeace: 'Rest in His Peace',
      exhaleTemptation: 'Exhale Temptation',
      imFeelingBetter: 'I Feel Peace Now • Return'
    },
    common: {
      close: 'Close',
      save: 'Save',
      cancel: 'Cancel',
      delete: 'Delete',
      share: 'Share',
      today: 'Today',
      allowed: 'Allowed',
      avoid: 'Avoid',
      friPenance: 'Fri (Penance)',
      sun: 'Sun', mon: 'Mon', tue: 'Tue', wed: 'Wed', thu: 'Thu', fri: 'Fri', sat: 'Sat',
      january: 'January', february: 'February', march: 'March', april: 'April',
      may: 'May', june: 'June', july: 'July', august: 'August',
      september: 'September', october: 'October', november: 'November', december: 'December'
    }
  },

  // ==========================================
  // ITALIANO (IT)
  // ==========================================
  it: {
    nav: {
      brandSub: 'Piattaforma Cristiana Universale • 100% Offline',
      scripture: 'Scrittura',
      penance: 'Penitenza e Digiuno',
      jesus: 'Dialogo con Gesù',
      journal: 'Diario di Preghiera',
      saints: 'Santi e Padri',
      focus: 'Meditazione Focus',
      tools: 'Strumenti Sacri',
      sos: 'SOS Pace',
      promises: 'Vaso delle Promesse',
      settings: 'Impostazioni',
      schedule: 'Orario Monastico',
      spiritualLife: 'Vita Spirituale',
      monasticMotto: '«Ora et Labora» • Prega e lavora nella santa presenza di Dio.'
    },
    circadian: {
      dawn: 'Alba / Lodi',
      midday: 'Meriggio / Sesta',
      sunset: 'Tramonto / Vespri',
      night: 'Notte / Compieta'
    },
    colors: {
      white: 'Bianco',
      blue: 'Blu',
      red: 'Rosso',
      whiteDesc: 'Solennità del Signore, Confessori, Dottori della Chiesa, Vergini e Angeli',
      blueDesc: 'Festività Mariane e Beata Vergine Maria',
      redDesc: 'Apostoli, Evangelisti e Santi Martiri della Fede'
    },
    ranks: {
      solemnity: 'Solennità',
      feast: 'Festa',
      memorial: 'Memoria',
      commemoration: 'Commemorazione'
    },
    penance: {
      badge: 'Disciplina Liturgica Sacra',
      title: 'Penitenza, Digiuno e Astinenza',
      subtitle: 'Scopri quando digiunare, astenerti dalle carni e santificare i tuoi giorni in unione con la Croce di Cristo.',
      activeRite: 'Rito Attivo:',
      today: 'Oggi',
      todayCommemoration: "Santo / Festa di Oggi:",
      inspection: 'Ispezione del Giorno Selezionato',
      strictFast: 'Digiuno Stretto e Astinenza',
      abstinence: 'Astinenza dalle Carni',
      emberDay: 'Quattro Tempora (Digiuno e Astinenza)',
      dispensation: 'Dispensa per Solennità',
      ordinary: 'Giorno Ordinario',
      viewDayGuide: 'Vedi Guida Completa e Preghiera',
      jumpToday: 'Vai a Oggi',
      fastingDiscipline: 'Disciplina del Digiuno (Quantità dei Pasti)',
      abstinenceDiscipline: 'Disciplina dell\'Astinenza (Qualità del Cibo)',
      allowedTable: '✓ Tavola Permessa',
      avoidTable: '✗ Proibito o Ristretto',
      theologicalMeaning: 'Significato Teologico e Biblico',
      prayerOfDay: 'Preghiera Penitenziale del Giorno',
      saintsOnThisDay: 'Santi e Festività Commemorati Oggi',
      noSaintsOnDay: 'Giorno liturgico ordinario di preghiera, vigilanza e devozione.',
      pillarsTitle: 'I Tre Pilastri della Penitenza Evangelica',
      pillarsSubtitle: '«Quando fai l\'elemosina... quando preghi... quando digiuni» (Matteo 6)',
      prayerPillarTitle: '1. Preghiera Interiore',
      prayerPillarDesc: 'Elevare la mente e il cuore a Dio con i salmi, il silenzio e la supplica.',
      fastingPillarTitle: '2. Digiuno Corporeo',
      fastingPillarDesc: 'Dominare i desideri carnali e le dipendenze per nutrire l\'anima con la Parola di Dio.',
      almsPillarTitle: '3. Elemosina Generosa',
      almsPillarDesc: 'Condividere cibo e risorse con i bisognosi, vedendo Cristo in coloro che soffrono.'
    },
    saints: {
      title: 'Santi e Padri della Chiesa',
      subtitle: 'La schiera dei testimoni lungo la storia della Chiesa',
      todaySaintsTitle: 'Santi e Festività di Oggi',
      calendarTitle: 'Calendario Liturgico dei Santi',
      filterAll: 'Tutte le Commemorazioni',
      filterToday: 'Solo Oggi',
      liturgicalColor: 'Colore Liturgico:',
      importanceRank: 'Grado Liturgico:',
      shareQuote: 'Condividi Citazione',
      meditation: 'Meditazione Patristica',
      scripture: 'Riferimento Biblico'
    },
    settings: {
      title: 'Impostazioni e Preferenze Sacre',
      subtitle: 'Personalizza tradizione di fede, lingua, tema circadiano e backup 100% offline',
      language: 'Lingua dell\'Interfaccia:',
      confession: 'Tradizione di Fede Cristiana:',
      name: 'Tuo Nome o Modo di Rivolgerti:',
      namePlaceholder: 'es. Giovanni, Maria, o lascia vuoto...',
      theme: 'Tema Liturgico Circadiano:',
      themeAuto: 'Automatico (si adatta all\'ora reale locale)',
      themeDawn: 'Alba / Lodi (06:00 – 11:59) [Luce aurea]',
      themeMidday: 'Meriggio / Scriptorium (12:00 – 17:59) [Pergamena]',
      themeSunset: 'Tramonto / Vespri (18:00 – 21:59) [Ambra calda]',
      themeNight: 'Notte / Compieta (22:00 – 05:59) [Lume di candela]',
      aiTitle: 'Google Gemini AI (Domande e Dubbi di Fede):',
      aiKey: 'Chiave API Google Gemini:',
      aiKeyLink: 'Ottieni Chiave Gratuita su Google AI Studio ↗',
      aiModel: 'Modello / Versione Gemini AI:',
      offlineNotice: 'Regola di Dialogo Offline: Se il modello locale Gemini Nano non è presente, il dialogo AI offline è disattivato per evitare risposte errate o inventate.',
      backupTitle: 'Sovranità dei Dati • Backup JSON 100% Offline:',
      exportBackup: 'Esporta Tutti i Dati (Backup JSON)',
      importBackup: 'Importa Backup',
      backupDesc: 'Nessun dato lascia mai il tuo dispositivo. Puoi salvare note, preghiere e chat per trasferirle tra dispositivi.',
      save: 'Salva Impostazioni',
      testKey: 'Verifica Connessione'
    },
    tools: {
      title: 'Strumenti Sacri e Contemplazione',
      subtitle: 'Strumenti per preghiera, digiuno, pace e crescita spirituale',
      spiritualDisciplines: 'Discipline Spirituali e Ritmo Quotidiano',
      wisdomArmor: 'Sapienza e Armatura Spirituale',
      utilities: 'Utilità Sacre e Crescita Personale',
      motto: '«Ora et Labora» • Tutti gli strumenti operano al 100% offline senza tracciamento.',
      penanceDesc: 'Digiuni quotidiani, astinenza dalle carni e regole liturgiche con commemorazioni dei santi',
      promisesDesc: 'Promesse bibliche autentiche per ansia, dolore, decisioni e gratitudine',
      eveningTitle: 'Esame della Sera e Protezione',
      eveningDesc: 'Esame di coscienza di Compieta e preghiera per il santo riposo',
      focusDesc: 'Meditazione con fiamma viva e pioggia procedurale rilassante',
      sosDesc: 'Respiro ritmico di 30 secondi e versetto scudo di 1 Corinzi 10:13',
      compassTitle: 'Bussola della Fede',
      compassDesc: 'Sapienza sui grandi dilemmi esistenziali e teologici',
      saintsDesc: 'Tesoro di sapienza con colori liturgici e gradi di importanza',
      shareTitle: 'Creatore di Card in Pergamena',
      shareDesc: 'Crea e condividi card illuminate delle Scritture sui social',
      scheduleDesc: 'Armonizza studio e lavoro con le ore monastiche',
      settingsDesc: 'Scelta lingua, chiave API, backup e ripristino, temi circadiani',
      feedbackTitle: 'Feedback Anonimo della Comunità',
      feedbackDesc: 'Invia suggerimenti e segnalazioni anonime direttamente tramite GitHub Issues'
    },
    reader: {
      testamentOld: 'Antico Testamento',
      testamentDeut: 'Deuterocanonici e Apocrifi',
      testamentWisdom: 'Sapienza e Poesia',
      testamentProphets: 'Profeti',
      testamentGospels: 'Vangeli',
      testamentEpistles: 'Atti ed Epistole',
      testamentApocalypse: 'Apocalisse',
      chapter: 'Capitolo',
      psalm: 'Salmo',
      selectChapter: 'Seleziona Capitolo',
      deselectAll: 'Deseleziona Tutto',
      prevChapter: 'Capitolo Precedente',
      nextChapter: 'Capitolo Successivo',
      shareCard: 'Crea Card',
      shareSelection: 'Crea Card Brano',
      highlight: 'Evidenzia:',
      highlightAll: 'Evidenzia tutti:',
      remove: 'Rimuovi',
      clear: 'Azzera',
      canonicalArchive: 'Archivio Canonico',
      verse: 'Versetto',
      verses: 'Versetti'
    },
    sos: {
      title: 'SOS Pace e Scudo contro la Tentazione',
      sub: 'Fermati un istante. Non cedere alla tentazione o all\'ansia. Cristo è qui con te.',
      inhaleGrace: 'Inspira Grazia',
      holdPeace: 'Resta nella Sua Pace',
      exhaleTemptation: 'Espira la Tentazione',
      imFeelingBetter: 'Ho ritrovato la Pace • Torna'
    },
    common: {
      close: 'Chiudi',
      save: 'Salva',
      cancel: 'Annulla',
      delete: 'Elimina',
      share: 'Condividi',
      today: 'Oggi',
      allowed: 'Permesso',
      avoid: 'Evitare',
      friPenance: 'Ven (Penitenza)',
      sun: 'Dom', mon: 'Lun', tue: 'Mar', wed: 'Mer', thu: 'Gio', fri: 'Ven', sat: 'Sab',
      january: 'Gennaio', february: 'Febbraio', march: 'Marzo', april: 'Aprile',
      may: 'Maggio', june: 'Giugno', july: 'Luglio', august: 'Agosto',
      september: 'Settembre', october: 'Ottobre', november: 'Novembre', december: 'Dicembre'
    }
  },

  // ==========================================
  // ROMÂNĂ (RO)
  // ==========================================
  ro: {
    nav: {
      brandSub: 'Platformă Creștină Universală • 100% Offline',
      scripture: 'Scriptură',
      penance: 'Post și Pocăință',
      jesus: 'Dialog cu Iisus',
      journal: 'Jurnal de Rugăciune',
      saints: 'Sfinți și Părinți',
      focus: 'Rugăciune Focus',
      tools: 'Instrumente Sfinte',
      sos: 'SOS Pace',
      promises: 'Vasul Făgăduințelor',
      settings: 'Setări',
      schedule: 'Program Monahal',
      spiritualLife: 'Viață Duhovnicească',
      monasticMotto: '«Ora et Labora» • Roagă-te și lucrează în prezența sfântă a lui Dumnezeu.'
    },
    circadian: {
      dawn: 'Zori / Laude',
      midday: 'Amiază / Ceasul VI',
      sunset: 'Apus / Vecernie',
      night: 'Noapte / Pavecerniță'
    },
    colors: {
      white: 'Alb',
      blue: 'Albastru',
      red: 'Roșu',
      whiteDesc: 'Praznice Împărătești, Cuvioși, Ierarhi, Drepți, Fecioare și Îngeri',
      blueDesc: 'Sărbători ale Maicii Domnului (Născătoarea de Dumnezeu)',
      redDesc: 'Sfinții Apostoli, Evangheliști și Mucenici ai Credinței'
    },
    ranks: {
      solemnity: 'Praznic Mare (Solennitate)',
      feast: 'Sărbătoare',
      memorial: 'Pomenire / Memorie',
      commemoration: 'Comemorare'
    },
    penance: {
      badge: 'Rânduială Liturgică Sfântă',
      title: 'Pocăință, Post și Înfrânare',
      subtitle: 'Află când să postești, să te oprești de la carne și să-ți sfințești zilele în unire cu Crucea lui Hristos.',
      activeRite: 'Rânduială Activă:',
      today: 'Astăzi',
      todayCommemoration: 'Sfântul / Praznicul de Astăzi:',
      inspection: 'Cercetarea Zilei Selectate',
      strictFast: 'Post Negru / Aspru și Înfrânare',
      abstinence: 'Oprire de la Carne',
      emberDay: 'Zile de Cvartet (Post & Înfrânare)',
      dispensation: 'Dezlegare pentru Praznic Mare',
      ordinary: 'Zi de Rând',
      viewDayGuide: 'Vezi Rânduiala și Rugăciunea Zilei',
      jumpToday: 'Mergi la Astăzi',
      fastingDiscipline: 'Rânduiala Postului (Măsura Bucatelor)',
      abstinenceDiscipline: 'Rânduiala Înfrânării (Calitatea Bucatelor)',
      allowedTable: '✓ Masă Îngăduită',
      avoidTable: '✗ De Evitat sau Oprit',
      theologicalMeaning: 'Înțeles Teologic și Duhovnicesc',
      prayerOfDay: 'Rugăciunea de Pocăință a Zilei',
      saintsOnThisDay: 'Sfinții Pomeniți în Această Zi',
      noSaintsOnDay: 'Zi de rând pentru rugăciune, trezvie și viață curată.',
      pillarsTitle: 'Cei Trei Stâlpi ai Pocăinței Evanghelice',
      pillarsSubtitle: '«Când faci milostenie... când vă rugați... când postiți» (Matei 6)',
      prayerPillarTitle: '1. Rugăciunea Lăuntrică',
      prayerPillarDesc: 'Înălțarea minții și a inimii către Dumnezeu prin psalmi și tăcere.',
      fastingPillarTitle: '2. Postul Trupesc',
      fastingPillarDesc: 'Stăpânirea poftelor trupești pentru ca sufletul să se hrănească cu Cuvântul lui Dumnezeu.',
      almsPillarTitle: '3. Milostenia Curată',
      almsPillarDesc: 'Împărțirea bunurilor cu cei lipsiți, slujind lui Hristos în aproapele nostru.'
    },
    saints: {
      title: 'Sfinți și Părinți ai Bisericii',
      subtitle: 'Norul de mărturii din istoria Bisericii',
      todaySaintsTitle: 'Sfinții Pomeniți Astăzi',
      calendarTitle: 'Sinaxarul Liturgic',
      filterAll: 'Toate Pomenirile',
      filterToday: 'Numai Astăzi',
      liturgicalColor: 'Culoare Liturgică:',
      importanceRank: 'Treaptă Liturgică:',
      shareQuote: 'Trimite Citat',
      meditation: 'Cuvânt Patristic',
      scripture: 'Temei Scripturistic'
    },
    settings: {
      title: 'Setări și Rânduieli Sfinte',
      subtitle: 'Personalizează tradiția duhovnicească, limba, tema de lumină și backup-ul offline',
      language: 'Limba Interfeței:',
      confession: 'Tradiție Creștină:',
      name: 'Numele sau Formularea de Adresare:',
      namePlaceholder: 'ex: Ioan, Maria, sau lasă liber...',
      theme: 'Tema Liturgică a Zilei:',
      themeAuto: 'Automat (după timpul local)',
      themeDawn: 'Zori / Laude (06:00 – 11:59) [Lumină aurie]',
      themeMidday: 'Amiază / Scriptorium (12:00 – 17:59) [Pergament]',
      themeSunset: 'Apus / Vecernie (18:00 – 21:59) [Chihlimbar]',
      themeNight: 'Noapte / Pavecerniță (22:00 – 05:59) [Lumină de candelă]',
      aiTitle: 'Google Gemini AI (Întrebări și Îndoieli de Credință):',
      aiKey: 'Cheie API Google Gemini:',
      aiKeyLink: 'Obține Cheie Gratuită la Google AI Studio ↗',
      aiModel: 'Model / Versiune Gemini AI:',
      offlineNotice: 'Politica de Dialog Offline: Fără modelul local Gemini Nano, dialogul AI offline este oprit pentru a păstra rânduiala exactă a credinței.',
      backupTitle: 'Păstrarea Datelor • Salvare JSON 100% Offline:',
      exportBackup: 'Exportă Toate Datele (Backup JSON)',
      importBackup: 'Restaurează din Fișier',
      backupDesc: 'Nicio dată nu părăsește dispozitivul. Poți salva notițele și rugăciunile în siguranță deplină.',
      save: 'Salvează Setările',
      testKey: 'Verifică Conexiunea'
    },
    tools: {
      title: 'Instrumente Sfinte și Trecere în Tăcere',
      subtitle: 'Lucrări pentru rugăciune, post, pace sufletească și creștere duhovnicească',
      spiritualDisciplines: 'Rânduieli Duhovnicești și Ritm Zilnic',
      wisdomArmor: 'Înțelepciune și Armură Duhovnicească',
      utilities: 'Instrumente Sfinte și Lucrare de Sine',
      motto: '«Ora et Labora» • Toate uneltele funcționează 100% offline, fără urmărire.',
      penanceDesc: 'Posturi zilnice, oprirea de la carne și rânduieli liturgice cu pomenirea sfinților',
      promisesDesc: 'Făgăduințe biblice autentice pentru neliniște, întristare, cumpene și mulțumire',
      eveningTitle: 'Cercetarea de Seară și Paza de Noapte',
      eveningDesc: 'Rânduiala Pavecerniței, cercetarea conștiinței și rugăciune pentru somn cu pace',
      focusDesc: 'Meditație cu lumânare vie și sunet odihnitor de ploaie',
      sosDesc: 'Respirație liniștitoare de 30 de secunde și stihul-scut din 1 Corinteni 10:13',
      compassTitle: 'Busola Credinței',
      compassDesc: 'Lămuriri duhovnicești pentru marile dileme și îndoieli ale vieții',
      saintsDesc: 'Tezaur de înțelepciune cu culori liturgice și trepte de prăznuire',
      shareTitle: 'Creator de Carduri Pergament',
      shareDesc: 'Plăsmuiește și trimite carduri luminoase din Scriptură celor apropiați',
      scheduleDesc: 'Împletește învățătura și munca cu ceasurile de rugăciune',
      settingsDesc: 'Alegere limbă, cheie API, salvare date locale, teme de lumină',
      feedbackTitle: 'Păreri Anonime din Comunitate',
      feedbackDesc: 'Trimite propuneri sau semnalări anonime direct pe GitHub Issues'
    },
    reader: {
      testamentOld: 'Vechiul Testament',
      testamentDeut: 'Deuterocanonice și Cărți Neincluse',
      testamentWisdom: 'Înțelepciune și Poezie',
      testamentProphets: 'Profeți',
      testamentGospels: 'Evanghelii',
      testamentEpistles: 'Faptele Apostolilor și Epistole',
      testamentApocalypse: 'Apocalipsa',
      chapter: 'Capitolul',
      psalm: 'Psalmul',
      selectChapter: 'Selectează Capitolul',
      deselectAll: 'Deselectează Tot',
      prevChapter: 'Capitolul Anterior',
      nextChapter: 'Capitolul Următor',
      shareCard: 'Card Pasaj',
      shareSelection: 'Card Pasaj Selectat',
      highlight: 'Evidențiere:',
      highlightAll: 'Evidențiază toate:',
      remove: 'Elimină',
      clear: 'Curăță',
      canonicalArchive: 'Arhivă Canonică',
      verse: 'Verset',
      verses: 'Versete'
    },
    sos: {
      title: 'SOS Pace și Scut împotriva Ispitei',
      sub: 'Oprește-te o clipă. Nu ceda ispitei sau fricii. Hristos este chiar lângă tine.',
      inhaleGrace: 'Inspiră Har',
      holdPeace: 'Odihnește-te în Pacea Sa',
      exhaleTemptation: 'Expiră Ispita',
      imFeelingBetter: 'Am dobândit Pace • Încheie'
    },
    common: {
      close: 'Închide',
      save: 'Salvează',
      cancel: 'Anulează',
      delete: 'Șterge',
      share: 'Distribuie',
      today: 'Astăzi',
      allowed: 'Îngăduit',
      avoid: 'De Evitat',
      friPenance: 'Vin (Post)',
      sun: 'Dum', mon: 'Lun', tue: 'Mar', wed: 'Mie', thu: 'Joi', fri: 'Vin', sat: 'Sâm',
      january: 'Ianuarie', february: 'Februarie', march: 'Martie', april: 'Aprilie',
      may: 'Mai', june: 'Iunie', july: 'Iulie', august: 'August',
      september: 'Septembrie', october: 'Octombrie', november: 'Noiembrie', december: 'Decembrie'
    }
  },

  // ==========================================
  // FRANÇAIS (FR)
  // ==========================================
  fr: {
    nav: {
      brandSub: 'Plateforme Chrétienne Universelle • 100% Hors-ligne',
      scripture: 'Écritures',
      penance: 'Pénitence & Jeûne',
      jesus: 'Dialogue avec Jésus',
      journal: 'Journal de Prière',
      saints: 'Saints & Pères',
      focus: 'Méditation Focus',
      tools: 'Outils Sacrés',
      sos: 'SOS Paix',
      promises: 'Vase des Promesses',
      settings: 'Paramètres',
      schedule: 'Horaire Monastique',
      spiritualLife: 'Vie Spirituelle',
      monasticMotto: '«Ora et Labora» • Prie et travaille dans la sainte présence de Dieu.'
    },
    circadian: {
      dawn: 'Aurore / Laudes',
      midday: 'Midi / Sexte',
      sunset: 'Crépuscule / Vêpres',
      night: 'Nuit / Complies'
    },
    colors: {
      white: 'Blanc',
      blue: 'Bleu',
      red: 'Rouge',
      whiteDesc: 'Solennités du Seigneur, Confesseurs, Docteurs de l\'Église, Vierges et Anges',
      blueDesc: 'Fêtes Mariales & Bienheureuse Vierge Marie',
      redDesc: 'Apôtres, Évangélistes & Saints Martyrs de la Foi'
    },
    ranks: {
      solemnity: 'Solennité',
      feast: 'Fête',
      memorial: 'Mémoire',
      commemoration: 'Commémoration'
    },
    penance: {
      badge: 'Discipline Liturgique Sacrée',
      title: 'Pénitence, Jeûne & Abstinence',
      subtitle: 'Sachez quand jeûner, vous abstenir de viande et sanctifier vos jours en union avec la Croix du Christ.',
      activeRite: 'Rite Actif:',
      today: 'Aujourd\'hui',
      todayCommemoration: 'Saint / Fête d\'Aujourd\'hui:',
      inspection: 'Inspection de la Date Sélectionnée',
      strictFast: 'Jeûne Strict & Abstinence',
      abstinence: 'Abstinence de Viande',
      emberDay: 'Quatre-Temps (Jeûne & Abstinence)',
      dispensation: 'Dispense de Solennité',
      ordinary: 'Jour Ordinaire',
      viewDayGuide: 'Voir Guide du Jour & Prière',
      jumpToday: 'Aller à Aujourd\'hui',
      fastingDiscipline: 'Discipline du Jeûne (Quantité des Repas)',
      abstinenceDiscipline: 'Discipline de l\'Abstinence (Qualité des Aliments)',
      allowedTable: '✓ Table Autorisée',
      avoidTable: '✗ Interdit ou Restreint',
      theologicalMeaning: 'Sens Théologique & Biblique',
      prayerOfDay: 'Prière Pénitentielle du Jour',
      saintsOnThisDay: 'Saints Commémorés en ce Jour',
      noSaintsOnDay: 'Jour liturgique ordinaire de prière, vigilance et fidélité.',
      pillarsTitle: 'Les Trois Piliers de la Pénitence Évangélique',
      pillarsSubtitle: '«Quand tu fais l\'aumône... quand vous priez... quand vous jeûnez» (Matthieu 6)',
      prayerPillarTitle: '1. Prière Intérieure',
      prayerPillarDesc: 'Élever l\'âme et le cœur vers Dieu par les psaumes et le silence.',
      fastingPillarTitle: '2. Jeûne Corporel',
      fastingPillarDesc: 'Maîtriser les passions charnelles pour se nourrir de la Parole divine.',
      almsPillarTitle: '3. Aumône Généreuse',
      almsPillarDesc: 'Partager ses biens avec les pauvres, en reconnaissant le Christ dans ceux qui souffrent.'
    },
    saints: {
      title: 'Saints & Pères de l\'Église',
      subtitle: 'La nuée des témoins à travers l\'histoire chrétienne',
      todaySaintsTitle: 'Saints & Fêtes du Jour',
      calendarTitle: 'Calendrier Liturgique des Saints',
      filterAll: 'Toutes les Commémorations',
      filterToday: 'Aujourd\'hui Seulement',
      liturgicalColor: 'Couleur Liturgique:',
      importanceRank: 'Rang Liturgique:',
      shareQuote: 'Partager la Citation',
      meditation: 'Méditation Patristique',
      scripture: 'Référence Biblique'
    },
    settings: {
      title: 'Paramètres & Préférences Sacrées',
      subtitle: 'Personnalisez la tradition de foi, la langue, le thème circadien et les sauvegardes',
      language: 'Langue de l\'Interface:',
      confession: 'Tradition Chrétienne:',
      name: 'Votre Nom ou Titre:',
      namePlaceholder: 'ex: Jean, Marie, ou laisser vide...',
      theme: 'Thème Circadien:',
      themeAuto: 'Automatique (selon l\'heure locale)',
      themeDawn: 'Aurore / Laudes (06:00 – 11:59) [Lumière dorée]',
      themeMidday: 'Midi / Scriptorium (12:00 – 17:59) [Parchemin]',
      themeSunset: 'Crépuscule / Vêpres (18:00 – 21:59) [Ambre chaud]',
      themeNight: 'Nuit / Complies (22:00 – 05:59) [Lueur de bougie]',
      aiTitle: 'Google Gemini AI (Questions & Doutes):',
      aiKey: 'Clé API Google Gemini:',
      aiKeyLink: 'Obtenir une clé gratuite sur Google AI Studio ↗',
      aiModel: 'Modèle / Version Gemini AI:',
      offlineNotice: 'Politique Hors-Ligne: Sans le modèle local Gemini Nano, le dialogue IA hors-ligne est désactivé afin d\'éviter toute déformation théologique.',
      backupTitle: 'Souveraineté des Données • Sauvegarde JSON 100% Hors-Ligne:',
      exportBackup: 'Exporter Toutes les Données (JSON)',
      importBackup: 'Importer une Sauvegarde',
      backupDesc: 'Aucune donnée ne quitte jamais votre appareil. Vos prières et notes restent privées.',
      save: 'Enregistrer les Paramètres',
      testKey: 'Tester la Connexion'
    },
    tools: {
      title: 'Outils Sacrés et Contemplation',
      subtitle: 'Instruments pour la prière, le jeûne, la paix et la croissance intérieure',
      spiritualDisciplines: 'Disciplines Spirituelles et Rythme Quotidien',
      wisdomArmor: 'Sagesse et Armure Spirituelle',
      utilities: 'Utilités Sacrées et Perfectionnement',
      motto: '«Ora et Labora» • Tous les outils fonctionnent 100% hors-ligne sans suivi.',
      penanceDesc: 'Jeûnes quotidiens, abstinence de viande et règles liturgiques avec mémoires des saints',
      promisesDesc: 'Promesses bibliques authentiques pour l\'angoisse, la tristesse, les choix et l\'action de grâce',
      eveningTitle: 'Examen du Soir et Protection',
      eveningDesc: 'Examen de conscience des Complies et prière pour un repos paisible',
      focusDesc: 'Méditation à la lueur de la flamme et pluie apaisante procédurale',
      sosDesc: 'Respiration rythmée de 30 secondes et verset-bouclier de 1 Corinthiens 10:13',
      compassTitle: 'Boussole de la Foi',
      compassDesc: 'Éclairages spirituels sur les dilemmes et questions profondes',
      saintsDesc: 'Trésor de sagesse patristique avec couleurs et rangs liturgiques',
      shareTitle: 'Créateur de Cartes Parchemin',
      shareDesc: 'Composez et partagez des cartes enluminées des Écritures',
      scheduleDesc: 'Harmonisez études et travail avec les heures monastiques',
      settingsDesc: 'Choix de la langue, clé API, sauvegarde et restauration, thèmes circadiens',
      feedbackTitle: 'Retours Anonymes de la Communauté',
      feedbackDesc: 'Envoyez vos suggestions et signalements directement via GitHub Issues'
    },
    reader: {
      testamentOld: 'Ancien Testament',
      testamentDeut: 'Deutérocanoniques et Apocryphes',
      testamentWisdom: 'Sagesse et Poésie',
      testamentProphets: 'Prophètes',
      testamentGospels: 'Évangiles',
      testamentEpistles: 'Actes et Épîtres',
      testamentApocalypse: 'Apocalypse',
      chapter: 'Chapitre',
      psalm: 'Psaume',
      selectChapter: 'Sélectionner le Chapitre',
      deselectAll: 'Tout Désélectionner',
      prevChapter: 'Chapitre Précédent',
      nextChapter: 'Chapitre Suivant',
      shareCard: 'Créer Carte',
      shareSelection: 'Carte Passage',
      highlight: 'Surligner:',
      highlightAll: 'Surligner tout:',
      remove: 'Supprimer',
      clear: 'Effacer',
      canonicalArchive: 'Archive Canonique',
      verse: 'Verset',
      verses: 'Versets'
    },
    sos: {
      title: 'SOS Paix et Bouclier contre la Tentation',
      sub: 'Arrêtez-vous un instant. Ne cédez ni à la tentation ni à l\'angoisse. Le Christ est tout près de vous.',
      inhaleGrace: 'Inspirez la Grâce',
      holdPeace: 'Demeurez dans Sa Paix',
      exhaleTemptation: 'Expirez la Tentation',
      imFeelingBetter: 'J\'ai retrouvé la Paix • Retour'
    },
    common: {
      close: 'Fermer',
      save: 'Enregistrer',
      cancel: 'Annuler',
      delete: 'Supprimer',
      share: 'Partager',
      today: 'Aujourd\'hui',
      allowed: 'Autorisé',
      avoid: 'À éviter',
      friPenance: 'Ven (Pénitence)',
      sun: 'Dim', mon: 'Lun', tue: 'Mar', wed: 'Mer', thu: 'Jeu', fri: 'Ven', sat: 'Sam',
      january: 'Janvier', february: 'Février', march: 'Mars', april: 'Avril',
      may: 'Mai', june: 'Juin', july: 'Juillet', august: 'Août',
      september: 'Septembre', october: 'Octobre', november: 'Novembre', december: 'Décembre'
    }
  },

  // ==========================================
  // ESPAÑOL (ES)
  // ==========================================
  es: {
    nav: {
      brandSub: 'Plataforma Cristiana Universal • 100% Fuera de Línea',
      scripture: 'Escritura',
      penance: 'Penitencia y Ayuno',
      jesus: 'Diálogo con Jesús',
      journal: 'Diario de Oración',
      saints: 'Santos y Padres',
      focus: 'Meditación Focus',
      tools: 'Herramientas Sagradas',
      sos: 'SOS Paz',
      promises: 'Vasija de Promesas',
      settings: 'Ajustes',
      schedule: 'Horario Monástico',
      spiritualLife: 'Vida Espiritual',
      monasticMotto: '«Ora et Labora» • Ora y trabaja en la santa presencia de Dios.'
    },
    circadian: {
      dawn: 'Amanecer / Laudes',
      midday: 'Mediodía / Sexta',
      sunset: 'Atardecer / Vísperas',
      night: 'Noche / Completas'
    },
    colors: {
      white: 'Blanco',
      blue: 'Azul',
      red: 'Rojo',
      whiteDesc: 'Solemnidades del Señor, Confesores, Doctores de la Iglesia, Vírgenes y Ángeles',
      blueDesc: 'Fiestas Marianas y Santísima Virgen María',
      redDesc: 'Apóstoles, Evangelistas y Santos Mártires de la Fe'
    },
    ranks: {
      solemnity: 'Solemnidad',
      feast: 'Fiesta',
      memorial: 'Memoria',
      commemoration: 'Conmemoración'
    },
    penance: {
      badge: 'Disciplina Litúrgica Sagrada',
      title: 'Penitencia, Ayuno y Abstinencia',
      subtitle: 'Conoce cuándo ayunar, abstenerte de carne y santificar tus días en unión con la Cruz de Cristo.',
      activeRite: 'Rito Activo:',
      today: 'Hoy',
      todayCommemoration: 'Santo / Fiesta de Hoy:',
      inspection: 'Inspección de la Fecha Seleccionada',
      strictFast: 'Ayuno Estricto y Abstinencia',
      abstinence: 'Abstinencia de Carne',
      emberDay: 'Témporas (Ayuno y Abstinencia)',
      dispensation: 'Dispensación por Solemnidad',
      ordinary: 'Día Ordinario',
      viewDayGuide: 'Ver Guía Completa y Oración',
      jumpToday: 'Ir a Hoy',
      fastingDiscipline: 'Disciplina del Ayuno (Cantidad de Comidas)',
      abstinenceDiscipline: 'Disciplina de la Abstinencia (Calidad de Alimentos)',
      allowedTable: '✓ Mesa Permitida',
      avoidTable: '✗ Prohibido o Restringido',
      theologicalMeaning: 'Sentido Teológico y Bíblico',
      prayerOfDay: 'Oración Penitencial del Día',
      saintsOnThisDay: 'Santos Conmemorados en Este Día',
      noSaintsOnDay: 'Día litúrgico ordinario de oración, vigilancia y fidelidad.',
      pillarsTitle: 'Los Tres Pilares de la Penitencia Evangélica',
      pillarsSubtitle: '«Cuando des limosna... cuando oréis... cuando ayunéis» (Mateo 6)',
      prayerPillarTitle: '1. Oración Interior',
      prayerPillarDesc: 'Elevar el corazón y la mente a Dios mediante los salmos y el recogimiento.',
      fastingPillarTitle: '2. Ayuno Corporal',
      fastingPillarDesc: 'Dominar las apetencias terrenales para alimentarse de la Palabra de Dios.',
      almsPillarTitle: '3. Limosna Generosa',
      almsPillarDesc: 'Compartir bienes con los pobres, reconociendo a Cristo en el que sufre.'
    },
    saints: {
      title: 'Santos y Padres de la Iglesia',
      subtitle: 'La nube de testigos en la historia de la Iglesia',
      todaySaintsTitle: 'Santos y Fiestas de Hoy',
      calendarTitle: 'Santoral Litúrgico',
      filterAll: 'Todas las Conmemoraciones',
      filterToday: 'Solo Hoy',
      liturgicalColor: 'Color Litúrgico:',
      importanceRank: 'Grado Litúrgico:',
      shareQuote: 'Compartir Cita',
      meditation: 'Meditación Patrística',
      scripture: 'Referencia Bíblica'
    },
    settings: {
      title: 'Ajustes y Preferencias Sagradas',
      subtitle: 'Configura tradición de fe, idioma, tema circadiano y copia de seguridad offline',
      language: 'Idioma de la Interfaz:',
      confession: 'Tradición Cristiana:',
      name: 'Tu Nombre o Tratamiento:',
      namePlaceholder: 'ej. Juan, María, o dejar vacío...',
      theme: 'Tema Circadiano:',
      themeAuto: 'Automático (según hora local real)',
      themeDawn: 'Amanecer / Laudes (06:00 – 11:59) [Luz dorada]',
      themeMidday: 'Mediodía / Scriptorium (12:00 – 17:59) [Pergamino]',
      themeSunset: 'Atardecer / Vísperas (18:00 – 21:59) [Ámbar cálido]',
      themeNight: 'Noche / Completas (22:00 – 05:59) [Luz de vela]',
      aiTitle: 'Google Gemini AI (Preguntas y Dudas de Fe):',
      aiKey: 'Clave API Google Gemini:',
      aiKeyLink: 'Obtén clave gratuita en Google AI Studio ↗',
      aiModel: 'Modelo / Versión Gemini AI:',
      offlineNotice: 'Política Sin Conexión: Sin el modelo local Gemini Nano, el diálogo AI sin conexión se desactiva para mantener pura la doctrina.',
      backupTitle: 'Soberanía de Datos • Copia JSON 100% Offline:',
      exportBackup: 'Exportar Todos los Datos (JSON)',
      importBackup: 'Importar Copia de Seguridad',
      backupDesc: 'Ningún dato sale de tu dispositivo. Tus oraciones y notas permanecen totalmente privadas.',
      save: 'Guardar Ajustes',
      testKey: 'Probar Conexión'
    },
    tools: {
      title: 'Herramientas Sagradas y Contemplación',
      subtitle: 'Instrumentos para la oración, ayuno, paz y crecimiento espiritual',
      spiritualDisciplines: 'Disciplinas Espirituales y Ritmo Diario',
      wisdomArmor: 'Sabiduría y Armadura Espiritual',
      utilities: 'Utilidades Sagradas y Progreso Interior',
      motto: '«Ora et Labora» • Todas las herramientas funcionan 100% fuera de línea sin rastreo.',
      penanceDesc: 'Ayunos diarios, abstinencia de carne y reglas litúrgicas con santos del día',
      promisesDesc: 'Promesas bíblicas auténticas para la ansiedad, el dolor, las decisiones y la gratitud',
      eveningTitle: 'Examen Nocturno y Protección',
      eveningDesc: 'Examen de conciencia de Completas y oración de reposo santo',
      focusDesc: 'Meditación con llama viva y lluvia procedural relajante',
      sosDesc: 'Respiración rítmica de 30 segundos y versículo escudo de 1 Corintios 10:13',
      compassTitle: 'Brújula de la Fe',
      compassDesc: 'Sabiduría escritural y racional para los dilemas más profundos',
      saintsDesc: 'Tesoro patrístico con colores litúrgicos y rangos de importancia',
      shareTitle: 'Creador de Tarjetas Pergamino',
      shareDesc: 'Diseña y comparte citas iluminadas de la Escritura en redes',
      scheduleDesc: 'Armoniza estudio y trabajo con las horas canónicas monásticas',
      settingsDesc: 'Selector de idioma, clave API, copia de seguridad y temas circadianos',
      feedbackTitle: 'Comentarios Anonymos de la Comunidad',
      feedbackDesc: 'Envía sugerencias o incidencias directamente mediante GitHub Issues'
    },
    reader: {
      testamentOld: 'Antiguo Testamento',
      testamentDeut: 'Deuterocanónicos y Apócrifos',
      testamentWisdom: 'Sabiduría y Poesía',
      testamentProphets: 'Profetas',
      testamentGospels: 'Evangelios',
      testamentEpistles: 'Hechos y Epístolas',
      testamentApocalypse: 'Apocalipsis',
      chapter: 'Capítulo',
      psalm: 'Salmo',
      selectChapter: 'Seleccionar Capítulo',
      deselectAll: 'Deseleccionar Todo',
      prevChapter: 'Capítulo Anterior',
      nextChapter: 'Capítulo Siguiente',
      shareCard: 'Crear Tarjeta',
      shareSelection: 'Tarjeta de Selección',
      highlight: 'Resaltar:',
      highlightAll: 'Resaltar todos:',
      remove: 'Quitar',
      clear: 'Borrar',
      canonicalArchive: 'Archivo Canónico',
      verse: 'Versículo',
      verses: 'Versículos'
    },
    sos: {
      title: 'SOS Paz y Escudo contra la Tentación',
      sub: 'Detente un momento. No cedas a la tentación ni a la angustia. Cristo está junto a ti.',
      inhaleGrace: 'Inhala Gracia',
      holdPeace: 'Permanece en Su Paz',
      exhaleTemptation: 'Exhala la Tentación',
      imFeelingBetter: 'He hallado Paz • Regresar'
    },
    common: {
      close: 'Cerrar',
      save: 'Guardar',
      cancel: 'Cancelar',
      delete: 'Eliminar',
      share: 'Compartir',
      today: 'Hoy',
      allowed: 'Permitido',
      avoid: 'Evitar',
      friPenance: 'Vie (Penitencia)',
      sun: 'Dom', mon: 'Lun', tue: 'Mar', wed: 'Mié', thu: 'Jue', fri: 'Vie', sat: 'Sáb',
      january: 'Enero', february: 'Febrero', march: 'Marzo', april: 'Abril',
      may: 'Mayo', june: 'Junio', july: 'Julio', august: 'Agosto',
      september: 'Septiembre', october: 'Octubre', november: 'Noviembre', december: 'Diciembre'
    }
  },

  // ==========================================
  // PORTUGUÊS (PT)
  // ==========================================
  pt: {
    nav: {
      brandSub: 'Plataforma Cristã Universal • 100% Offline',
      scripture: 'Escritura',
      penance: 'Penitência e Jejum',
      jesus: 'Diálogo com Jesus',
      journal: 'Diário de Oração',
      saints: 'Santos e Padres',
      focus: 'Meditação Focus',
      tools: 'Ferramentas Sagradas',
      sos: 'SOS Paz',
      promises: 'Vaso das Promessas',
      settings: 'Definições',
      schedule: 'Horário Monástico',
      spiritualLife: 'Vida Espiritual',
      monasticMotto: '«Ora et Labora» • Ora e trabalha na santa presença de Deus.'
    },
    circadian: {
      dawn: 'Alvorada / Laudes',
      midday: 'Meio-dia / Sexta',
      sunset: 'Entardecer / Vésperas',
      night: 'Noite / Completas'
    },
    colors: {
      white: 'Branco',
      blue: 'Azul',
      red: 'Vermelho',
      whiteDesc: 'Solenidades do Senhor, Confessores, Doutores da Igreja, Virgens e Anjos',
      blueDesc: 'Festas Marianas e Santíssima Virgem Maria',
      redDesc: 'Apóstolos, Evangelistas e Santos Mártires da Fé'
    },
    ranks: {
      solemnity: 'Solenidade',
      feast: 'Festa',
      memorial: 'Memória',
      commemoration: 'Comemoração'
    },
    penance: {
      badge: 'Disciplina Litúrgica Sagrada',
      title: 'Penitência, Jejum e Abstinência',
      subtitle: 'Saiba quando jejuar, abster-se de carne e santificar os seus dias em união com a Cruz de Cristo.',
      activeRite: 'Rito Ativo:',
      today: 'Hoje',
      todayCommemoration: 'Santo / Festa de Hoje:',
      inspection: 'Inspeção do Dia Selecionado',
      strictFast: 'Jejum Estrito e Abstinência',
      abstinence: 'Abstinência de Carne',
      emberDay: 'Quatro Têmporas (Jejum & Abstinência)',
      dispensation: 'Dispensa por Solenidade',
      ordinary: 'Dia Ordinário',
      viewDayGuide: 'Ver Guia Completo e Oração',
      jumpToday: 'Ir para Hoje',
      fastingDiscipline: 'Disciplina do Jejum (Quantidade de Refeições)',
      abstinenceDiscipline: 'Disciplina da Abstinência (Qualidade do Alimento)',
      allowedTable: '✓ Mesa Permitida',
      avoidTable: '✗ Proibido ou Restrito',
      theologicalMeaning: 'Sentido Teológico e Bíblico',
      prayerOfDay: 'Oração Penitencial do Dia',
      saintsOnThisDay: 'Santos Comemorados Neste Dia',
      noSaintsOnDay: 'Dia litúrgico ordinário de oração, vigilância e pureza.',
      pillarsTitle: 'Os Três Pilares da Penitência Evangélica',
      pillarsSubtitle: '«Quando deres esmola... quando orardes... quando jejuardes» (Mateus 6)',
      prayerPillarTitle: '1. Oração Interior',
      prayerPillarDesc: 'Elevação da alma e do coração a Deus pelos salmos e silêncio.',
      fastingPillarTitle: '2. Jejum Corporal',
      fastingPillarDesc: 'Dominar os apetites carnais para que a alma se alimente da Palavra de Deus.',
      almsPillarTitle: '3. Esmola Generosa',
      almsPillarDesc: 'Partilhar bens com os necessitados, vendo Cristo naquele que sofre.'
    },
    saints: {
      title: 'Santos e Padres da Igreja',
      subtitle: 'A nuvem de testemunhas na história da Igreja',
      todaySaintsTitle: 'Santos e Festas de Hoje',
      calendarTitle: 'Santoral Litúrgico',
      filterAll: 'Todas as Comemorações',
      filterToday: 'Apenas Hoje',
      liturgicalColor: 'Cor Litúrgica:',
      importanceRank: 'Grau Litúrgico:',
      shareQuote: 'Partilhar Citação',
      meditation: 'Meditação Patrística',
      scripture: 'Referência Bíblica'
    },
    settings: {
      title: 'Definições e Preferências Sagradas',
      subtitle: 'Personalize tradição de fé, idioma, tema circadiano e cópias de segurança',
      language: 'Idioma da Interface:',
      confession: 'Tradição Cristã:',
      name: 'Seu Nome ou Forma de Tratamento:',
      namePlaceholder: 'ex: João, Maria, ou deixe em branco...',
      theme: 'Tema Circadiano:',
      themeAuto: 'Automático (conforme a hora local)',
      themeDawn: 'Alvorada / Laudes (06:00 – 11:59) [Luz dourada]',
      themeMidday: 'Meio-dia / Scriptorium (12:00 – 17:59) [Pergaminho]',
      themeSunset: 'Entardecer / Vésperas (18:00 – 21:59) [Âmbar quente]',
      themeNight: 'Noite / Completas (22:00 – 05:59) [Luz de vela]',
      aiTitle: 'Google Gemini AI (Perguntas e Dúvidas):',
      aiKey: 'Chave API Google Gemini:',
      aiKeyLink: 'Obter Chave Gratuita no Google AI Studio ↗',
      aiModel: 'Modelo / Versão Gemini AI:',
      offlineNotice: 'Política Offline: Sem o modelo local Gemini Nano, o diálogo AI offline fica desativado para garantir a fidelidade doutrinária.',
      backupTitle: 'Soberania de Dados • Backup JSON 100% Offline:',
      exportBackup: 'Exportar Todos os Dados (JSON)',
      importBackup: 'Importar Backup',
      backupDesc: 'Nenhum dado sai do seu dispositivo. As suas orações e notas permanecem invioláveis.',
      save: 'Guardar Definições',
      testKey: 'Testar Conexão'
    },
    tools: {
      title: 'Instrumentos Sagrados e Contemplação',
      subtitle: 'Meios para oração, jejum, paz interior e crescimento espiritual',
      spiritualDisciplines: 'Disciplinas Espirituais e Ritmo Cotidiano',
      wisdomArmor: 'Sabedoria e Armadura Espiritual',
      utilities: 'Utilidades Sagradas e Maturação Pessoal',
      motto: '«Ora et Labora» • Todas as ferramentas operam 100% offline sem rastreamento.',
      penanceDesc: 'Jejuns diários, abstinência de carne e cânones litúrgicos com comemorações dos santos',
      promisesDesc: 'Promessas bíblicas autênticas para ansiedade, tristeza, decisões e louvor',
      eveningTitle: 'Exame Noturno e Proteção',
      eveningDesc: 'Exame de consciência de Completas e oração de repouso em Cristo',
      focusDesc: 'Meditação com vela viva e som de chuva procedural calmante',
      sosDesc: 'Respiração rítmica de 30 segundos e versículo-escudo de 1 Coríntios 10:13',
      compassTitle: 'Bússola da Fé',
      compassDesc: 'Respostas profundas para as grandes dúvidas e dilemas espirituais',
      saintsDesc: 'Tesouro de sabedoria patrística com cores e graus litúrgicos',
      shareTitle: 'Criador de Cartões em Pergaminho',
      shareDesc: 'Crie e partilhe cartões iluminados das Escrituras Sagradas',
      scheduleDesc: 'Harmonize seus estudos e trabalho com as horas monásticas',
      settingsDesc: 'Seletor de idioma, chave API, backup local e temas circadianos',
      feedbackTitle: 'Comentários Anônimos da Comunidade',
      feedbackDesc: 'Envie sugestões ou reporte falhas diretamente via GitHub Issues'
    },
    reader: {
      testamentOld: 'Antigo Testamento',
      testamentDeut: 'Deuterocanônicos e Apócrifos',
      testamentWisdom: 'Sabedoria e Poesia',
      testamentProphets: 'Profetas',
      testamentGospels: 'Evangelhos',
      testamentEpistles: 'Atos e Epístolas',
      testamentApocalypse: 'Apocalipse',
      chapter: 'Capítulo',
      psalm: 'Salmo',
      selectChapter: 'Selecionar Capítulo',
      deselectAll: 'Desmarcar Todos',
      prevChapter: 'Capítulo Anterior',
      nextChapter: 'Capítulo Seguinte',
      shareCard: 'Criar Cartão',
      shareSelection: 'Cartão de Seleção',
      highlight: 'Destacar:',
      highlightAll: 'Destacar todos:',
      remove: 'Remover',
      clear: 'Limpar',
      canonicalArchive: 'Arquivo Canônico',
      verse: 'Versículo',
      verses: 'Versículos'
    },
    sos: {
      title: 'SOS Paz e Escudo contra a Tentação',
      sub: 'Pára por um instante. Não cedas à tentação nem à ansiedade. Cristo está aqui contigo.',
      inhaleGrace: 'Inspira Graça',
      holdPeace: 'Descansa na Sua Paz',
      exhaleTemptation: 'Expira a Tentação',
      imFeelingBetter: 'Encontrei a Paz • Voltar'
    },
    common: {
      close: 'Fechar',
      save: 'Guardar',
      cancel: 'Cancelar',
      delete: 'Eliminar',
      share: 'Partilhar',
      today: 'Hoje',
      allowed: 'Permitido',
      avoid: 'Evitar',
      friPenance: 'Sex (Penitência)',
      sun: 'Dom', mon: 'Seg', tue: 'Ter', wed: 'Qua', thu: 'Qui', fri: 'Sex', sat: 'Sáb',
      january: 'Janeiro', february: 'Fevereiro', march: 'Março', april: 'Abril',
      may: 'Maio', june: 'Junho', july: 'Julho', august: 'Agosto',
      september: 'Setembro', october: 'Outubro', november: 'Novembro', december: 'Dezembro'
    }
  },

  // ==========================================
  // DEUTSCH (DE)
  // ==========================================
  de: {
    nav: {
      brandSub: 'Universelle Christliche Plattform • 100% Offline',
      scripture: 'Schrift',
      penance: 'Buße & Fasten',
      jesus: 'Dialog mit Jesus',
      journal: 'Gebetstagebuch',
      saints: 'Heilige & Väter',
      focus: 'Fokus-Meditation',
      tools: 'Heilige Werkzeuge',
      sos: 'SOS Frieden',
      promises: 'Gefäß der Verheißungen',
      settings: 'Einstellungen',
      schedule: 'Klösterlicher Tagesplan',
      spiritualLife: 'Geistliches Leben',
      monasticMotto: '«Ora et Labora» • Bete und arbeite in der heiligen Gegenwart Gottes.'
    },
    circadian: {
      dawn: 'Morgenfrühe / Laudes',
      midday: 'Mittag / Sext',
      sunset: 'Abend / Vesper',
      night: 'Nacht / Komplet'
    },
    colors: {
      white: 'Weiß',
      blue: 'Blau',
      red: 'Rot',
      whiteDesc: 'Herrenfeste, Bekenner, Kirchenlehrer, Jungfrauen und Engel',
      blueDesc: 'Marienfeste & Selige Jungfrau Maria',
      redDesc: 'Apostel, Evangelisten & Heilige Märtyrer des Glaubens'
    },
    ranks: {
      solemnity: 'Hochfest',
      feast: 'Fest',
      memorial: 'Gedenktag',
      commemoration: 'Kommemoration'
    },
    penance: {
      badge: 'Heilige Liturgische Ordnung',
      title: 'Buße, Fasten & Enthaltsamkeit',
      subtitle: 'Erfahren Sie, wann Sie fasten, auf Fleisch verzichten und Ihre Tage in Vereinigung mit dem Kreuz Christi heiligen.',
      activeRite: 'Aktiver Ritus:',
      today: 'Heute',
      todayCommemoration: 'Heiliger / Fest des Tages:',
      inspection: 'Inspektion des Ausgewählten Tages',
      strictFast: 'Strenges Fasten & Abstinenz',
      abstinence: 'Fleischabstinenz',
      emberDay: 'Quatembertage (Fasten & Abstinenz)',
      dispensation: 'Hochfest-Dispens',
      ordinary: 'Gewöhnlicher Tag',
      viewDayGuide: 'Vollständigen Tagesleitfaden & Gebet anzeigen',
      jumpToday: 'Zu Heute springen',
      fastingDiscipline: 'Fastendisziplin (Mahlzeitenmenge)',
      abstinenceDiscipline: 'Abstinenzdisziplin (Speisenqualität)',
      allowedTable: '✓ Erlaubte Speisen',
      avoidTable: '✗ Verboten oder Eingeschränkt',
      theologicalMeaning: 'Theologische & Biblische Bedeutung',
      prayerOfDay: 'Bußgebet des Tages',
      saintsOnThisDay: 'An Diesem Tag Gedachte Heilige',
      noSaintsOnDay: 'Gewöhnlicher liturgischer Tag des Gebets, der Wachsamkeit und Treue.',
      pillarsTitle: 'Die Drei Säulen Evangelischer Buße',
      pillarsSubtitle: '«Wenn du Almosen gibst... wenn ihr betet... wenn ihr fastet» (Matthäus 6)',
      prayerPillarTitle: '1. Inneres Gebet',
      prayerPillarDesc: 'Erhebung des Herzens zu Gott durch Psalmen und andächtige Stille.',
      fastingPillarTitle: '2. Leibliches Fasten',
      fastingPillarDesc: 'Zügelung irdischer Begierden, damit sich der Geist am Worte Gottes nähre.',
      almsPillarTitle: '3. Großherziges Almosen',
      almsPillarDesc: 'Teilen der Gaben mit den Armen und Dienen Christi im leidenden Nächsten.'
    },
    saints: {
      title: 'Heilige & Kirchenväter',
      subtitle: 'Die Wolke der Zeugen durch die Kirchengeschichte',
      todaySaintsTitle: 'Heilige & Feste von Heute',
      calendarTitle: 'Liturgisches Heiligenkalendarium',
      filterAll: 'Alle Gedenktage',
      filterToday: 'Nur Heute',
      liturgicalColor: 'Liturgische Farbe:',
      importanceRank: 'Liturgischer Rang:',
      shareQuote: 'Zitat Teilen',
      meditation: 'Patristische Meditation',
      scripture: 'Schriftnachweis'
    },
    settings: {
      title: 'Einstellungen & Heilige Vorlieben',
      subtitle: 'Glaubenstradition, Sprache, zirkadianes Farbschema und Offline-Sicherung anpassen',
      language: 'Sprache der Benutzeroberfläche:',
      confession: 'Christliche Glaubenstradition:',
      name: 'Ihr Name oder Anrede:',
      namePlaceholder: 'z.B. Johannes, Maria, oder leer lassen...',
      theme: 'Liturgisches Tagesschema:',
      themeAuto: 'Automatisch (nach realer Ortszeit)',
      themeDawn: 'Morgen / Laudes (06:00 – 11:59) [Goldenes Licht]',
      themeMidday: 'Mittag / Scriptorium (12:00 – 17:59) [Pergament]',
      themeSunset: 'Abend / Vesper (18:00 – 21:59) [Warmes Bernstein]',
      themeNight: 'Nacht / Komplet (22:00 – 05:59) [Kerzenschein]',
      aiTitle: 'Google Gemini AI (Fragen & Glaubenszweifel):',
      aiKey: 'Google Gemini API-Schlüssel:',
      aiKeyLink: 'Kostenlosen Schlüssel bei Google AI Studio anfordern ↗',
      aiModel: 'Gemini AI Modell / Version:',
      offlineNotice: 'Offline-Regel: Ohne das lokale Gemini Nano Modell wird der Offline-KI-Dialog deaktiviert, um rein menschliche Spekulationen zu vermeiden.',
      backupTitle: 'Datensouveränität • 100% Offline JSON-Sicherung:',
      exportBackup: 'Alle Daten exportieren (JSON)',
      importBackup: 'Sicherung importieren',
      backupDesc: 'Keine Daten verlassen je Ihr Gerät. Ihre Gebete und Notizen bleiben vollkommen geschützt.',
      save: 'Einstellungen Speichern',
      testKey: 'Verbindung Testen'
    },
    tools: {
      title: 'Geistliche Werkzeuge und Kontemplation',
      subtitle: 'Hilfen für Gebet, Fasten, Frieden und geistliches Wachstum',
      spiritualDisciplines: 'Geistliche Disziplin und Tagesrhythmus',
      wisdomArmor: 'Weisheit und Geistliche Rüstung',
      utilities: 'Heilige Hilfsmittel und Persönliches Wachstum',
      motto: '«Ora et Labora» • Alle Werkzeuge laufen 100% offline ohne Datenerfassung.',
      penanceDesc: 'Tägliches Fasten, Fleischabstinenz und liturgische Regeln mit Gedenken der Heiligen',
      promisesDesc: 'Authentische biblische Verheißungen bei Angst, Trauer, Entscheidungen und Dank',
      eveningTitle: 'Abendliche Erforschung und Schutz',
      eveningDesc: 'Gewissenserforschung zur Komplet und Gebet für gesegneten Schlaf',
      focusDesc: 'Meditation mit lebendiger Kerze und beruhigendem Regenklang',
      sosDesc: '30-Sekunden-Atemübung und Schild-Vers aus 1. Korinther 10,13',
      compassTitle: 'Kompass des Glaubens',
      compassDesc: 'Orientierung in tiefen existenziellen und theologischen Lebensfragen',
      saintsDesc: 'Schatz patristischer Weisheit mit liturgischen Farben und Rängen',
      shareTitle: 'Pergamentkarten-Generator',
      shareDesc: 'Gestalte und teile illuminierte Schriftkarten für soziale Netzwerke',
      scheduleDesc: 'Harmonisiere Lernen und Arbeit mit den klösterlichen Gebetszeiten',
      settingsDesc: 'Sprachauswahl, API-Schlüssel, Datensicherung und zirkadiane Lichtthemen',
      feedbackTitle: 'Anonymes Feedback der Gemeinschaft',
      feedbackDesc: 'Sende Vorschläge oder Fehlerberichte direkt über GitHub Issues'
    },
    reader: {
      testamentOld: 'Altes Testament',
      testamentDeut: 'Spätschriften und Apokryphen',
      testamentWisdom: 'Weisheit und Dichtung',
      testamentProphets: 'Propheten',
      testamentGospels: 'Evangelien',
      testamentEpistles: 'Apostelgeschichte und Briefe',
      testamentApocalypse: 'Offenbarung',
      chapter: 'Kapitel',
      psalm: 'Psalm',
      selectChapter: 'Kapitel Wählen',
      deselectAll: 'Auswahl Aufheben',
      prevChapter: 'Vorheriges Kapitel',
      nextChapter: 'Nächstes Kapitel',
      shareCard: 'Karte Erstellen',
      shareSelection: 'Auswahl als Karte',
      highlight: 'Markieren:',
      highlightAll: 'Alle markieren:',
      remove: 'Entfernen',
      clear: 'Löschen',
      canonicalArchive: 'Kanonisches Archiv',
      verse: 'Vers',
      verses: 'Verse'
    },
    sos: {
      title: 'SOS Frieden und Schild gegen Versuchung',
      sub: 'Halte einen Moment inne. Weiche der Versuchung und der Angst nicht. Christus ist bei dir.',
      inhaleGrace: 'Atme Gnade ein',
      holdPeace: 'Raste in Seinem Frieden',
      exhaleTemptation: 'Atme Versuchung aus',
      imFeelingBetter: 'Ich habe Frieden • Zurück'
    },
    common: {
      close: 'Schließen',
      save: 'Speichern',
      cancel: 'Abbrechen',
      delete: 'Löschen',
      share: 'Teilen',
      today: 'Heute',
      allowed: 'Erlaubt',
      avoid: 'Zu meiden',
      friPenance: 'Fr (Bußtag)',
      sun: 'So', mon: 'Mo', tue: 'Di', wed: 'Mi', thu: 'Do', fri: 'Fr', sat: 'Sa',
      january: 'Januar', february: 'Februar', march: 'März', april: 'April',
      may: 'Mai', june: 'Juni', july: 'Juli', august: 'August',
      september: 'September', october: 'Oktober', november: 'November', december: 'Dezember'
    }
  },

  // ==========================================
  // РУССКИЙ (RU)
  // ==========================================
  ru: {
    nav: {
      brandSub: 'Вселенская Христианская Платформа • 100% Офлайн',
      scripture: 'Писание',
      penance: 'Пост и Покаяние',
      jesus: 'Беседа со Спасителем',
      journal: 'Молитвенный Дневник',
      saints: 'Святые и Отцы',
      focus: 'Молитвенное Безмолвие',
      tools: 'Священные Орудия',
      sos: 'SOS Мир Души',
      promises: 'Сосуд Обетований',
      settings: 'Настройки',
      schedule: 'Монастырский Чин',
      spiritualLife: 'Духовная Жизнь',
      monasticMotto: '«Ora et Labora» • Молись и трудись в святом присутствии Божием.'
    },
    circadian: {
      dawn: 'Заря / Утреня',
      midday: 'Полдень / Шестой Час',
      sunset: 'Закат / Вечерня',
      night: 'Ночь / Повечерие'
    },
    colors: {
      white: 'Белый',
      blue: 'Синий',
      red: 'Красный',
      whiteDesc: 'Господские Праздники, Преподобные, Святители, Праведные и Ангелы',
      blueDesc: 'Богородичные Праздники и Пресвятая Богородица',
      redDesc: 'Святые Апостолы, Евангелисты и Священномученики'
    },
    ranks: {
      solemnity: 'Великий Праздник (Торжество)',
      feast: 'Праздник (Бдение)',
      memorial: 'Память Святого',
      commemoration: 'Поминовение'
    },
    penance: {
      badge: 'Священный Литургический Устав',
      title: 'Покаяние, Пост и Воздержание',
      subtitle: 'Знайте, когда поститься, воздерживаться от мяса и освящать свои дни в соединении с Крестом Христовым.',
      activeRite: 'Действующий Чин:',
      today: 'Сегодня',
      todayCommemoration: 'Святой / Праздник Сегодня:',
      inspection: 'Обозрение Выбранного Дня',
      strictFast: 'Строгий Пост и Воздержание',
      abstinence: 'Воздержание от Мяса',
      emberDay: 'Дни Четверовремения (Пост)',
      dispensation: 'Разрешение ради Великого Праздника',
      ordinary: 'Обычный День',
      viewDayGuide: 'Посмотреть Чин и Молитву Дня',
      jumpToday: 'К Сегодняшнему Дню',
      fastingDiscipline: 'Чин Поста (Мера Трапезы)',
      abstinenceDiscipline: 'Чин Воздержания (Качество Пищи)',
      allowedTable: '✓ Разрешённая Трапеза',
      avoidTable: '✗ Запрещённое или Ограниченное',
      theologicalMeaning: 'Богословский и Библейский Смысл',
      prayerOfDay: 'Покаянная Молитва Дня',
      saintsOnThisDay: 'Святые, Поминаемые в Этот День',
      noSaintsOnDay: 'Обычный день молитвы, трезвения и духовного делания.',
      pillarsTitle: 'Три Столпа Евангельского Покаяния',
      pillarsSubtitle: '«Когда творишь милостыню... когда молитесь... когда поститесь» (Матфея 6)',
      prayerPillarTitle: '1. Сердечная Молитва',
      prayerPillarDesc: 'Возношение ума и сердца к Богу псалмами и благоговейным молчанием.',
      fastingPillarTitle: '2. Телесное Пощение',
      fastingPillarDesc: 'Укрощение страстей и плоти, дабы душа насыщалась Словом Божиим.',
      almsPillarTitle: '3. Чистая Милостыня',
      almsPillarDesc: 'Разделение хлеба с неимущими, служа Самому Христу в страждущих.',
    },
    saints: {
      title: 'Святые и Отцы Церкви',
      subtitle: 'Облако свидетелей сквозь века церковной истории',
      todaySaintsTitle: 'Святые и Праздники Сегодня',
      calendarTitle: 'Церковный Месяцеслов',
      filterAll: 'Все Памяти',
      filterToday: 'Только Сегодня',
      liturgicalColor: 'Литургический Цвет:',
      importanceRank: 'Литургический Чин:',
      shareQuote: 'Поделиться Цитатой',
      meditation: 'Отеческое Наставление',
      scripture: 'Основание в Писании'
    },
    settings: {
      title: 'Настройки и Священные Правила',
      subtitle: 'Традиция веры, язык, суточный свет и сохранение данных 100% офлайн',
      language: 'Язык Интерфейса:',
      confession: 'Христианская Традиция:',
      name: 'Ваше Имя или Обращение:',
      namePlaceholder: 'напр. Иоанн, Мария, или оставьте пустым...',
      theme: 'Литургический Суточный Свет:',
      themeAuto: 'Автоматически (по местному времени)',
      themeDawn: 'Заря / Утреня (06:00 – 11:59) [Золотой свет]',
      themeMidday: 'Полдень / Скрипторий (12:00 – 17:59) [Пергамент]',
      themeSunset: 'Закат / Вечерня (18:00 – 21:59) [Тёплый янтарь]',
      themeNight: 'Ночь / Повечерие (22:00 – 05:59) [Свет лампады]',
      aiTitle: 'Google Gemini AI (Вопросы и Сомнения Веры):',
      aiKey: 'Ключ API Google Gemini:',
      aiKeyLink: 'Получить бесплатный ключ на Google AI Studio ↗',
      aiModel: 'Версия / Модель Gemini AI:',
      offlineNotice: 'Правило Офлайн-Режима: Без локальной модели Gemini Nano офлайн-беседа с ИИ отключена, дабы сохранить чистоту вероучения.',
      backupTitle: 'Суверенитет Данных • Резервная копия JSON 100% Офлайн:',
      exportBackup: 'Экспорт Всех Данных (JSON)',
      importBackup: 'Восстановить из Файла',
      backupDesc: 'Никакие данные не покидают ваше устройство. Ваши молитвы и размышления остаются сокровенными.',
      save: 'Сохранить Настройки',
      testKey: 'Проверить Ключ'
    },
    tools: {
      title: 'Священные Орудия и Созерцание',
      subtitle: 'Средства для молитвы, поста, душевного мира и духовного возрастания',
      spiritualDisciplines: 'Духовное Делание и Дневной Чин',
      wisdomArmor: 'Мудрость и Духовное Всеоружие',
      utilities: 'Священные Пособия и Внутреннее Устроение',
      motto: '«Ora et Labora» • Все средства работают 100% автономно без сбора данных.',
      penanceDesc: 'Дни поста, воздержание от скоромного и богослужебный устав с памятью святых',
      promisesDesc: 'Истинные обетования Писания в скорби, тревоге, сомнении и благодарении',
      eveningTitle: 'Вечернее Испытание и Покров',
      eveningDesc: 'Чин повечерия, испытание совести и молитва о мирном упокоении',
      focusDesc: 'Молитвенное предстояние пред свечой и шум благодатного дождя',
      sosDesc: '30-секундное сердечное дыхание и стих-щит из 1 Коринфянам 10:13',
      compassTitle: 'Компас Веры',
      compassDesc: 'Духовное осмысление трудных и глубоких вопросов бытия',
      saintsDesc: 'Сокровищница отеческой мудрости с богослужебными цветами и чинами',
      shareTitle: 'Создатель Пергаментных Карточек',
      shareDesc: 'Создавайте и делитесь украшенными карточками со словами Писания',
      scheduleDesc: 'Соедините учение и труд с монастырскими молитвенными часами',
      settingsDesc: 'Выбор языка, ключ API, сохранение данных и суточные темы света',
      feedbackTitle: 'Анонимный Отзыв Сообщества',
      feedbackDesc: 'Направляйте предложения и замечания прямо через GitHub Issues'
    },
    reader: {
      testamentOld: 'Ветхий Завет',
      testamentDeut: 'Второканонические Книги',
      testamentWisdom: 'Учительные Книги и Псалтирь',
      testamentProphets: 'Пророки',
      testamentGospels: 'Евангелие',
      testamentEpistles: 'Деяния и Послания',
      testamentApocalypse: 'Апокалипсис',
      chapter: 'Глава',
      psalm: 'Псалом',
      selectChapter: 'Выбрать Главу',
      deselectAll: 'Снять Выделение',
      prevChapter: 'Предыдущая Глава',
      nextChapter: 'Следующая Глава',
      shareCard: 'Карточка',
      shareSelection: 'Карточка Отрывка',
      highlight: 'Выделить:',
      highlightAll: 'Выделить все:',
      remove: 'Удалить',
      clear: 'Сбросить',
      canonicalArchive: 'Канонический Архив',
      verse: 'Стих',
      verses: 'Стихи'
    },
    sos: {
      title: 'SOS Мир и Щит против Искушения',
      sub: 'Остановись на мгновение. Не поддавайся искушению или унынию. Христос рядом с тобой.',
      inhaleGrace: 'Вдохни Благодать',
      holdPeace: 'Пребудь в Его Мире',
      exhaleTemptation: 'Выдохни Искушение',
      imFeelingBetter: 'Обрел Мир • Вернуться'
    },
    common: {
      close: 'Закрыть',
      save: 'Сохранить',
      cancel: 'Отмена',
      delete: 'Удалить',
      share: 'Поделиться',
      today: 'Сегодня',
      allowed: 'Разрешено',
      avoid: 'Воздерживаться',
      friPenance: 'Пят (Пост)',
      sun: 'Вск', mon: 'Пнд', tue: 'Втр', wed: 'Срд', thu: 'Чтв', fri: 'Птн', sat: 'Суб',
      january: 'Январь', february: 'Февраль', march: 'Март', april: 'Апрель',
      may: 'Май', june: 'Июнь', july: 'Июль', august: 'Август',
      september: 'Сентябрь', october: 'Октябрь', november: 'Ноябрь', december: 'Декабрь'
    }
  },

  // ==========================================
  // LINGUA LATINA (LA)
  // ==========================================
  la: {
    nav: {
      brandSub: 'Suggestus Christianus Universalis • 100% Sine Filo',
      scripture: 'Scriptura Sacra',
      penance: 'Paenitentia et Ieiunium',
      jesus: 'Colloquium cum Iesu',
      journal: 'Diarium Orationis',
      saints: 'Sancti et Patres',
      focus: 'Meditatio Focus',
      tools: 'Instrumenta Sacra',
      sos: 'SOS Pax Animae',
      promises: 'Vas Promissionum',
      settings: 'Optiones',
      schedule: 'Ordo Monasticus',
      spiritualLife: 'Vita Spiritualis',
      monasticMotto: '«Ora et Labora» • Ora et labora coram sanctissima Dei praesentia.'
    },
    circadian: {
      dawn: 'Aurora / Laudes',
      midday: 'Meridies / Sexta',
      sunset: 'Occasus / Vesperae',
      night: 'Nox / Completorium'
    },
    colors: {
      white: 'Albus',
      blue: 'Caeruleus',
      red: 'Ruber',
      whiteDesc: 'Sollemnitates Domini, Confessores, Doctores, Virgines et Angeli',
      blueDesc: 'Festa Mariana et Beata Maria Virgo',
      redDesc: 'Apostoli, Evangelistae et Sancti Martyres'
    },
    ranks: {
      solemnity: 'Sollemnitas',
      feast: 'Festum',
      memorial: 'Memoria',
      commemoration: 'Commemoratio'
    },
    penance: {
      badge: 'Disciplina Liturgica Sacra',
      title: 'Paenitentia, Ieiunium et Abstinentia',
      subtitle: 'Nosce quando ieiunandum sit, a carnibus abstinendum, et dies cum Cruce Christi sanctificandi.',
      activeRite: 'Ritus Actus:',
      today: 'Hodie',
      todayCommemoration: 'Sanctus / Festum Hodiernum:',
      inspection: 'Inspectio Diei Electi',
      strictFast: 'Ieiunium Rigorosum et Abstinentia',
      abstinence: 'Abstinentia a Carnibus',
      emberDay: 'Quatuor Tempora (Ieiunium)',
      dispensation: 'Dispensatio propter Sollemnitatem',
      ordinary: 'Dies Ferialis',
      viewDayGuide: 'Regulam Diei et Orationem Inspice',
      jumpToday: 'Ad Hodiernum Diem',
      fastingDiscipline: 'Ieiunii Disciplina (Mensura Ciborum)',
      abstinenceDiscipline: 'Abstinentiae Disciplina (Qualitas Ciborum)',
      allowedTable: '✓ Mensa Permissa',
      avoidTable: '✗ Prohibitum seu Restrictum',
      theologicalMeaning: 'Sensus Theologicus et Biblicus',
      prayerOfDay: 'Oratio Paenitentialis Hodierna',
      saintsOnThisDay: 'Sancti Hoc Die Commemorati',
      noSaintsOnDay: 'Dies ferialis orationis, custodiae cordis et pietatis.',
      pillarsTitle: 'Tria Fundamenta Paenitentiae Evangelicae',
      pillarsSubtitle: '«Cum facis eleemosynam... cum oratis... cum ieiunatis» (Matthaei 6)',
      prayerPillarTitle: '1. Oratio Interior',
      prayerPillarDesc: 'Elevatio mentis ad Deum in psalmis, gemitibus et sancto silentio.',
      fastingPillarTitle: '2. Ieiunium Corporis',
      fastingPillarDesc: 'Domare carnis concupiscentias ut anima solo Verbo Dei pascatur.',
      almsPillarTitle: '3. Eleemosyna Largissima',
      almsPillarDesc: 'Distribuere panem egentibus, Christum ipsum in pauperibus venerando.'
    },
    saints: {
      title: 'Sancti et Patres Ecclesiae',
      subtitle: 'Nubes testium per saecula historiae sacrae',
      todaySaintsTitle: 'Sancti et Festa Hodierna',
      calendarTitle: 'Calendarium Sanctorum',
      filterAll: 'Omnes Commemorationes',
      filterToday: 'Hodie Tantum',
      liturgicalColor: 'Color Liturgicus:',
      importanceRank: 'Gradus Liturgicus:',
      shareQuote: 'Verbum Transmitte',
      meditation: 'Meditatio Patristica',
      scripture: 'Locus Scripturae'
    },
    settings: {
      title: 'Optiones et Praecepta Sacra',
      subtitle: 'Configura traditionem, linguam, thema diurnum et tabulas offline',
      language: 'Lingua Paginae:',
      confession: 'Traditio Fidei Christianae:',
      name: 'Nomen Tuum vel Titulus:',
      namePlaceholder: 'ex: Ioannes, Maria, vel vacuum relinque...',
      theme: 'Thema Liturgicum Circadianum:',
      themeAuto: 'Automate (secundum verum tempus locale)',
      themeDawn: 'Aurora / Laudes (06:00 – 11:59) [Lumen aureum]',
      themeMidday: 'Meridies / Scriptorium (12:00 – 17:59) [Pergamenum]',
      themeSunset: 'Occasus / Vesperae (18:00 – 21:59) [Electrum]',
      themeNight: 'Nox / Completorium (22:00 – 05:59) [Lumen candelae]',
      aiTitle: 'Google Gemini AI (Quaestiones et Dubia Fidei):',
      aiKey: 'Clavis API Google Gemini:',
      aiKeyLink: 'Clavem gratuitam apud Google AI Studio pete ↗',
      aiModel: 'Gemini AI Modulus / Versio:',
      offlineNotice: 'Lex Sine Filo: Nisi modulus Gemini Nano localis praesens sit, responsum AI offline cohibetur ad doctrinam incorruptam servandam.',
      backupTitle: 'Principatus Datorum • Copia JSON 100% Sine Filo:',
      exportBackup: 'Omnia Data Exportare (JSON)',
      importBackup: 'Copiam Importare',
      backupDesc: 'Nulla data e tuo apparatu effluunt. Orationes et notae tuae sacrosanctae manent.',
      save: 'Optiones Servare',
      testKey: 'Connexionem Experire'
    },
    tools: {
      title: 'Instrumenta Sacra et Contemplatio',
      subtitle: 'Subsidia ad orationem, ieiunium, pacem et vitae spiritualis profectum',
      spiritualDisciplines: 'Disciplina Spiritualis et Ordo Diurnus',
      wisdomArmor: 'Sapientia et Arma Lucis',
      utilities: 'Subsidia Sacra et Progressus Animae',
      motto: '«Ora et Labora» • Omnia instrumenta 100% offline sine indagatione funguntur.',
      penanceDesc: 'Ieiunia diurna, abstinentia a carnibus et regulae liturgicae cum memoria sanctorum',
      promisesDesc: 'Promissa biblica authentica in angustia, dolore, iudicio et gratiarum actione',
      eveningTitle: 'Examen Vespertinum et Tutela',
      eveningDesc: 'Completorii examen conscientiae et oratio ad quietem nocturnam',
      focusDesc: 'Meditatio coram flamma viva et sonus pluviae recreantis',
      sosDesc: 'Respiratio tranquilla 30 secundorum et versus-scutum 1 ad Corinthios 10:13',
      compassTitle: 'Fidei Pyxis',
      compassDesc: 'Sapientia scripturistica et rationalis ad altissima vitae dilemmata',
      saintsDesc: 'Thesaurus patristicus cum coloribus et gradibus liturgicis',
      shareTitle: 'Creator Chartularum Membranacearum',
      shareDesc: 'Forma et communica chartulas illuminatas Sacrae Scripturae',
      scheduleDesc: 'Harmoniza studium et laborem cum horis canonicis monasticis',
      settingsDesc: 'Electio linguae, clavis API, servatio datorum et themata circadiana',
      feedbackTitle: 'Communitatis Opinio Anonyma',
      feedbackDesc: 'Mitte consilia aut relationes directe per GitHub Issues'
    },
    reader: {
      testamentOld: 'Vetus Testamentum',
      testamentDeut: 'Libri Deuterocanonici',
      testamentWisdom: 'Sapientia et Poesis',
      testamentProphets: 'Prophetae',
      testamentGospels: 'Evangelia',
      testamentEpistles: 'Actus et Epistolae',
      testamentApocalypse: 'Apocalypsis',
      chapter: 'Caput',
      psalm: 'Psalmus',
      selectChapter: 'Elige Caput',
      deselectAll: 'Omnia Deselecta',
      prevChapter: 'Caput Praecedens',
      nextChapter: 'Caput Sequens',
      shareCard: 'Creare Chartulam',
      shareSelection: 'Chartula Textus',
      highlight: 'Illustrare:',
      highlightAll: 'Omnia illustra:',
      remove: 'Removere',
      clear: 'Delere',
      canonicalArchive: 'Archivum Canonicum',
      verse: 'Versus',
      verses: 'Versus'
    },
    sos: {
      title: 'SOS Pax et Scutum contra Tentationem',
      sub: 'Subsiste paulisper. Ne cesseris tentationi vel timori. Christus tecum adest.',
      inhaleGrace: 'Trahe Gratiam',
      holdPeace: 'Mane in Pace Eius',
      exhaleTemptation: 'Effla Tentationem',
      imFeelingBetter: 'Pacem recepi • Revertere'
    },
    common: {
      close: 'Claudere',
      save: 'Servare',
      cancel: 'Abnuere',
      delete: 'Delere',
      share: 'Communicare',
      today: 'Hodie',
      allowed: 'Permissum',
      avoid: 'Cavendum',
      friPenance: 'Fer. VI (Paenit.)',
      sun: 'Dom', mon: 'Fer. II', tue: 'Fer. III', wed: 'Fer. IV', thu: 'Fer. V', fri: 'Fer. VI', sat: 'Sabb',
      january: 'Ianuarius', february: 'Februarius', march: 'Martius', april: 'Aprilis',
      may: 'Maius', june: 'Iunius', july: 'Iulius', august: 'Augustus',
      september: 'September', october: 'October', november: 'November', december: 'December'
    }
  }
};

// Initialize language preference from storage or browser detection
export async function initI18n() {
  try {
    let savedLang = null;
    try {
      savedLang = localStorage.getItem('aurasacra_language');
    } catch (e) {}

    if (!savedLang) {
      savedLang = await getSetting('user_language', null);
    }

    if (!savedLang) {
      // Auto-detect browser language
      const navLang = (navigator.language || navigator.userLanguage || '').slice(0, 2).toLowerCase();
      if (TRANSLATIONS[navLang]) {
        savedLang = navLang;
      } else {
        savedLang = 'it'; // Default preferred by user
      }
    }

    currentLanguage = TRANSLATIONS[savedLang] ? savedLang : 'en';
    document.documentElement.lang = currentLanguage;
  } catch (err) {
    console.warn('initI18n error:', err);
    currentLanguage = 'it';
  }
  return currentLanguage;
}

export function getLanguage() {
  return currentLanguage;
}

export async function setLanguage(langCode) {
  if (!TRANSLATIONS[langCode]) {
    console.warn(`Unsupported language code: ${langCode}, fallback to en`);
    langCode = 'en';
  }
  currentLanguage = langCode;
  document.documentElement.lang = langCode;

  try {
    localStorage.setItem('aurasacra_language', langCode);
  } catch (e) {}

  try {
    await setSetting('user_language', langCode);
  } catch (e) {}

  // Trigger all registered listeners
  languageChangeListeners.forEach((fn) => {
    try {
      fn(currentLanguage);
    } catch (err) {
      console.error('Error in language listener:', err);
    }
  });
}

export function onLanguageChange(fn) {
  if (typeof fn === 'function') {
    languageChangeListeners.push(fn);
  }
}

// Deep key lookup with fallback to English, then default key string
export function t(keyPath, defaultText = '') {
  if (!keyPath) return defaultText;

  const getFromDict = (dict, path) => {
    const parts = path.split('.');
    let cur = dict;
    for (const part of parts) {
      if (!cur || typeof cur !== 'object') return null;
      cur = cur[part];
    }
    return cur !== undefined && cur !== null ? cur : null;
  };

  // Try current language
  const curDict = TRANSLATIONS[currentLanguage];
  if (curDict) {
    const val = getFromDict(curDict, keyPath);
    if (val !== null) return val;
  }

  // Try English fallback
  const enDict = TRANSLATIONS.en;
  if (enDict) {
    const enVal = getFromDict(enDict, keyPath);
    if (enVal !== null) return enVal;
  }

  return defaultText || keyPath;
}
