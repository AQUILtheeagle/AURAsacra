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
      motto: '«Ora et Labora» • All tools run 100% offline with zero cloud tracking.'
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
      motto: '«Ora et Labora» • Tutti gli strumenti operano al 100% offline senza tracciamento.'
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
      motto: '«Ora et Labora» • Toate uneltele funcționează 100% offline, fără urmărire.'
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
      title: 'Outils Sacrés & Contemplation',
      subtitle: 'Instruments pour la prière, le jeûne, la paix et la croissance intérieure',
      spiritualDisciplines: 'Disciplines Spirituelles & Rythme Quotidien',
      wisdomArmor: 'Sagesse & Armure Spirituelle',
      utilities: 'Utilitaires Sacrés & Perfectionnement',
      motto: '«Ora et Labora» • Tous les outils fonctionnent 100% hors-ligne sans suivi.'
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
      motto: '«Ora et Labora» • Todas las herramientas funcionan 100% fuera de línea sin rastreo.'
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
      title: 'Ferramentas Sagradas e Contemplação',
      subtitle: 'Instrumentos para oração, jejum, serenidade e vida com Deus',
      spiritualDisciplines: 'Disciplinas Espirituais e Ritmo Diário',
      wisdomArmor: 'Sabedoria e Armadura Espiritual',
      utilities: 'Utilitários Sagrados e Crescimento',
      motto: '«Ora et Labora» • Todas as ferramentas funcionam 100% offline sem rastreamento.'
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
      title: 'Heilige Werkzeuge & Kontemplation',
      subtitle: 'Hilfsmittel für Gebet, Fasten, Seelenfrieden und geistliche Reifung',
      spiritualDisciplines: 'Geistliche Disziplinen & Tagesrhythmus',
      wisdomArmor: 'Weisheit & Geistliche Rüstung',
      utilities: 'Heilige Hilfen & Persönliches Wachstum',
      motto: '«Ora et Labora» • Alle Werkzeuge laufen 100% offline ohne Tracking.'
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
      spiritualDisciplines: 'Духовные Делания и Суточный Чин',
      wisdomArmor: 'Мудрость и Духовное Оружие',
      utilities: 'Священные Пособия и Внутреннее Устроение',
      motto: '«Ora et Labora» • Все орудия действуют на 100% офлайн без слежения.'
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
      subtitle: 'Organa ad orandum, ieiunandum, pacem et vitae perfectionem',
      spiritualDisciplines: 'Exercitia Spiritualia et Cursus Diurnus',
      wisdomArmor: 'Sapientia et Arma Dei',
      utilities: 'Adiumenta Sacra et Vitae Cursus',
      motto: '«Ora et Labora» • Omnia instrumenta 100% offline operantur.'
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
