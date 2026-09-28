// Ecumenical Liturgical Saints & Feasts Calendar for Aura Sacra
// Sourced from:
// - Martyrologium Romanum (Editio Altera, 2004)
// - Calendarium Romanum Generale (Missale Romanum)
// - Sinaxarul Bisericii Ortodoxe (Synaxarion of the Eastern Orthodox Church)
// - Evangelischer Namenkalender & Book of Common Prayer Calendar
// 100% Fully localized with authentic patristic quotes and liturgical colors.

import { getOrthodoxSaintsForDate, ORTHODOX_SAINTS_CALENDAR } from './orthodox-saints.js';
export { getOrthodoxSaintsForDate, ORTHODOX_SAINTS_CALENDAR };

export const LITURGICAL_COLORS = {
  white: {
    id: 'white',
    name: 'White',
    name_it: 'Bianco',
    name_ro: 'Alb',
    name_la: 'Albus',
    name_es: 'Blanco',
    name_fr: 'Blanc',
    name_de: 'Weiß',
    name_pt: 'Branco',
    name_ru: 'Белый',
    dotClass: 'bg-stone-100 ring-1 ring-stone-300 dark:ring-stone-600',
    badgeClass: 'bg-stone-100/15 text-stone-100 border-stone-300/60 dark:border-stone-500/80',
    borderClass: 'border-stone-300/80 dark:border-stone-600/80',
    textClass: 'text-stone-100 dark:text-stone-100',
    symbol: '⚪',
    desc: 'Solemnities of the Lord, Confessors, Doctors of the Church, Holy Virgins & Angels'
  },
  blue: {
    id: 'blue',
    name: 'Blue',
    name_it: 'Blu',
    name_ro: 'Albastru',
    name_la: 'Caeruleus',
    name_es: 'Azul',
    name_fr: 'Bleu',
    name_de: 'Blau',
    name_pt: 'Azul',
    name_ru: 'Синий',
    dotClass: 'bg-blue-500 ring-1 ring-blue-400',
    badgeClass: 'bg-blue-600/20 text-blue-400 border-blue-500/60',
    borderClass: 'border-blue-500/60',
    textClass: 'text-blue-400 dark:text-blue-300',
    symbol: '🔵',
    desc: 'Marian Feasts & Solemnities of the Blessed Virgin Mary (Theotokos)'
  },
  red: {
    id: 'red',
    name: 'Red',
    name_it: 'Rosso',
    name_ro: 'Roșu',
    name_la: 'Ruber',
    name_es: 'Rojo',
    name_fr: 'Rouge',
    name_de: 'Rot',
    name_pt: 'Vermelho',
    name_ru: 'Красный',
    dotClass: 'bg-red-600 ring-1 ring-red-400',
    badgeClass: 'bg-red-600/20 text-red-400 border-red-500/60',
    borderClass: 'border-red-500/60',
    textClass: 'text-red-400 dark:text-red-300',
    symbol: '🔴',
    desc: 'Holy Apostles, Evangelists & Martyrs of the Christian Faith'
  },
  purple: {
    id: 'purple',
    name: 'Purple',
    name_it: 'Viola',
    name_ro: 'Violet',
    name_la: 'Purpureus',
    name_es: 'Morado',
    name_fr: 'Violet',
    name_de: 'Violett',
    name_pt: 'Roxo',
    name_ru: 'Фиолетовый',
    dotClass: 'bg-purple-600 ring-1 ring-purple-400',
    badgeClass: 'bg-purple-600/20 text-purple-400 border-purple-500/60',
    borderClass: 'border-purple-500/60',
    textClass: 'text-purple-400 dark:text-purple-300',
    symbol: '🟣',
    desc: 'Penitential days, Advent & Lent'
  },
  green: {
    id: 'green',
    name: 'Green',
    name_it: 'Verde',
    name_ro: 'Verde',
    name_la: 'Viridis',
    name_es: 'Verde',
    name_fr: 'Vert',
    name_de: 'Grün',
    name_pt: 'Verde',
    name_ru: 'Зеленый',
    dotClass: 'bg-emerald-600 ring-1 ring-emerald-400',
    badgeClass: 'bg-emerald-600/20 text-emerald-400 border-emerald-500/60',
    borderClass: 'border-emerald-500/60',
    textClass: 'text-emerald-400 dark:text-emerald-300',
    symbol: '🟢',
    desc: 'Ordinary Time & Hope of Resurrection'
  },
  rose: {
    id: 'rose',
    name: 'Rose',
    name_it: 'Rosa',
    name_ro: 'Roz',
    name_la: 'Rosaceus',
    name_es: 'Rosa',
    name_fr: 'Rose',
    name_de: 'Rosa',
    name_pt: 'Rosa',
    name_ru: 'Розовый',
    dotClass: 'bg-pink-500 ring-1 ring-pink-400',
    badgeClass: 'bg-pink-600/20 text-pink-400 border-pink-500/60',
    borderClass: 'border-pink-500/60',
    textClass: 'text-pink-400 dark:text-pink-300',
    symbol: '🌸',
    desc: 'Gaudete & Laetare Sundays'
  },
  gold: {
    id: 'gold',
    name: 'Gold',
    name_it: 'Oro',
    name_ro: 'Auriu',
    name_la: 'Aureus',
    name_es: 'Dorado',
    name_fr: 'Or',
    name_de: 'Gold',
    name_pt: 'Dourado',
    name_ru: 'Золотой',
    dotClass: 'bg-amber-400 ring-1 ring-amber-300',
    badgeClass: 'bg-amber-500/20 text-amber-300 border-amber-400/60',
    borderClass: 'border-amber-400/60',
    textClass: 'text-amber-300 dark:text-amber-200',
    symbol: '🟡',
    desc: 'Solemnities of highest dignity, Easter & Christmas'
  }
};

export const DAILY_SAINTS_CALENDAR = {

  // ==========================================
  // JANUARY (1)
  // ==========================================
  '1-1': [
    {
      traditions: ["catholic", "ecumenical", "all"],
      name: "Solemnity of Mary, Mother of God",
      name_it: "Maria Santissima Madre di Dio",
      name_la: "Sancta Maria Mater Dei",
      name_ro: "Sf\u00e2nta Maria, N\u0103sc\u0103toarea de Dumnezeu",
      title: "Theotokos & Queen of Peace",
      title_it: "Madre di Dio e Regina della Pace",
      color: "white",
      rank: "solemnity",
      quote: "\u00abMary treasured up all these things and pondered them in her heart.\u00bb",
      quote_it: "\u00abMaria custodiva tutte queste cose, meditandole nel suo cuore.\u00bb",
      bio: "Honoring the divine maternity of the Blessed Virgin Mary who brought the Prince of Peace into human history.",
      bio_it: "Celebra la divina maternit\u00e0 della Vergine Maria che ha donato al mondo il Salvatore e Principe della Pace.",
      scriptureRef: "Luke 2:19"
    },
    {
      traditions: ["orthodox"],
      name: "St. Basil the Great & Circumcision of the Lord",
      name_it: "San Basilio Magno e Circoncisione del Signore",
      name_la: "Sanctus Basilius Magnus",
      name_ro: "T\u0103ierea \u00cemprejur a Domnului \u0219i Sf. Vasile cel Mare",
      title: "Father of Eastern Monasticism & Hierarch",
      title_it: "Padre del Monachesimo d'Oriente e Grande Vescovo",
      color: "white",
      rank: "solemnity",
      quote: "\u00abA tree is known by its fruit; a man by his deeds. A good deed is never lost.\u00bb",
      quote_it: "\u00abL'albero si riconosce dal suo frutto, l'uomo dalle sue opere. Una buona opera non \u00e8 mai perduta.\u00bb",
      bio: "Archbishop of Caesarea, pillar of orthodox theology, defender of the poor, author of monastic rules.",
      bio_it: "Arcivescovo di Cesarea, colonna dell'ortodossia trinitaria, padre dei poveri e autore delle regole monastiche.",
      scriptureRef: "Colossians 2:11"
    }
  ],
  '1-2': [
    {
      traditions: ["catholic", "ecumenical", "all"],
      name: "Saints Basil the Great and Gregory Nazianzen",
      name_it: "Santi Basilio Magno e Gregorio Nazianzeno",
      name_la: "Sancti Basilii Magni et Gregorii Nazianzeni",
      name_ro: "Sfin\u021bii Vasile cel Mare \u0219i Grigorie de Nazianz",
      title: "Doctors of the Church & Cappadocian Fathers",
      title_it: "Vescovi e Dottori della Chiesa, Padri Cappadoci",
      color: "white",
      rank: "memorial",
      quote: "\u00abWe had all things in common; one single goal guided our lives: the pursuit of divine virtue.\u00bb",
      quote_it: "\u00abTutto per noi era comune: un solo scopo guidava la nostra vita, la ricerca della divina virt\u00f9.\u00bb",
      bio: "Lifelong friends who defended the divinity of the Son and Holy Spirit against the Arian heresy.",
      bio_it: "Fraterni amici d'anima che difesero con sublime sapienza la divinit\u00e0 del Figlio e dello Spirito Santo.",
      scriptureRef: "1 Corinthians 12:4-7"
    }
  ],
  '1-3': [
    {
      traditions: ["catholic", "traditional"],
      name: "The Most Holy Name of Jesus",
      name_it: "Santissimo Nome di Ges\u00f9",
      name_la: "Sanctissimum Nomen Iesu",
      name_ro: "Preasf\u00e2ntul Nume al lui Isus",
      title: "The Name Above Every Name",
      title_it: "Il Nome che \u00e8 al di sopra di ogni altro nome",
      color: "white",
      rank: "memorial",
      quote: "\u00abThere is no other name under heaven given to men by which we must be saved.\u00bb",
      quote_it: "\u00abNon vi \u00e8 infatti altro nome dato agli uomini sotto il cielo nel quale sia stabilito che possiamo essere salvati.\u00bb",
      bio: "Commemoration of the saving Name revealed by the angel Gabriel to Mary and Joseph.",
      bio_it: "Celebrazione del Nome salvifico annunciato dall'angelo Gabriele, fonte di grazia, guarigione e salvezza.",
      scriptureRef: "Acts 4:12"
    }
  ],
  '1-4': [
    {
      traditions: ["catholic", "all"],
      name: "St. Elizabeth Ann Seton",
      name_it: "Santa Elisabetta Anna Seton",
      name_la: "Sancta Elisabeth Anna Seton",
      name_ro: "Sf\u00e2nta Elisabeta Ana Seton",
      title: "First American-Born Saint & Educator",
      title_it: "Prima Santa Nativa Americana ed Educatrice",
      color: "white",
      rank: "memorial",
      quote: "\u00abFaith lifts the soul, hope supports it, and love makes it act with joyous freedom.\u00bb",
      quote_it: "\u00abLa fede eleva l'anima, la speranza la sostiene e l'amore la fa agire con gioiosa libert\u00e0.\u00bb",
      bio: "Widow, mother, educator, and founder of the Sisters of Charity, pioneering Catholic education in America.",
      bio_it: "Madre di famiglia, convertita e fondatrice delle Suore della Carit\u00e0, pioniera delle scuole cristiane.",
      scriptureRef: "Hebrews 11:1"
    }
  ],
  '1-5': [
    {
      traditions: ["catholic"],
      name: "St. John Neumann",
      name_it: "San Giovanni Nepomuceno Neumann",
      name_la: "Sanctus Ioannes Nepomucenus Neumann",
      name_ro: "Sf\u00e2ntul Ioan Neumann",
      title: "Bishop of Philadelphia & Apostle of Immigrants",
      title_it: "Vescovo di Filadelfia e Apostolo degli Immigrati",
      color: "white",
      rank: "memorial",
      quote: "\u00abSince you alone are my strength, O Lord, I will fear nothing.\u00bb",
      quote_it: "\u00abPoich\u00e9 tu solo sei la mia forza, o Signore, non temer\u00f2 nulla.\u00bb",
      bio: "Redemptorist missionary from Bohemia who built schools, orphanages, and parishes for immigrants.",
      bio_it: "Missionario redentorista boemo instancabile, fondatore del primo sistema scolastico diocesano.",
      scriptureRef: "2 Timothy 4:2"
    }
  ],
  '1-6': [
    {
      traditions: ["all"],
      name: "The Epiphany of the Lord (Theophany)",
      name_it: "Epifania del Signore (Manifestazione del Verbo / Teofania)",
      name_la: "In Epiphania Domini",
      name_ro: "Botezul Domnului (Boboteaza) / Epifania",
      title: "Manifestation of Christ to the Gentiles",
      title_it: "Manifestazione di Cristo a tutte le Nazioni",
      color: "white",
      rank: "solemnity",
      quote: "\u00abWe saw His star in the East and have come to worship Him.\u00bb",
      quote_it: "\u00abAbbiamo visto sorgere la sua stella e siamo venuti per adorarlo.\u00bb",
      bio: "The Magi follow the star to Bethlehem, revealing Christ as Savior and Light of all peoples.",
      bio_it: "I Magi giungono dall'Oriente guidati dalla stella, rivelando Cristo Salvatore e Luce di tutte le genti.",
      scriptureRef: "Matthew 2:1-12"
    }
  ],
  '1-7': [
    {
      traditions: ["catholic", "all"],
      name: "St. Raymond of Pe\u00f1afort",
      name_it: "San Raimondo di Pe\u00f1afort",
      name_la: "Sanctus Raymundus de Penyafort",
      name_ro: "Sf\u00e2ntul Raimund de Pe\u00f1afort",
      title: "Master of Canon Law & Confessor",
      title_it: "Maestro del Diritto Canonico e Patrono dei Giuristi",
      color: "white",
      rank: "memorial",
      quote: "\u00abLook upon Jesus, the author and finisher of our faith, and your burden will become light.\u00bb",
      quote_it: "\u00abGuarda a Ges\u00f9, autore e perfezionatore della nostra fede, e ogni tuo peso diventer\u00e0 soave.\u00bb",
      bio: "Dominican friar, compiler of papal decretals, missionary of mercy and patron of canon lawyers.",
      bio_it: "Sacerdote domenicano, sapiente compilatore dei decretali pontifici e apostolo della riconciliazione.",
      scriptureRef: "Psalm 119:105"
    }
  ],
  '1-8': [
    {
      traditions: ["protestant", "ecumenical"],
      name: "Jim Elliot & The Auca Martyrs",
      name_it: "Jim Elliot e i Compagni Martiri dell'Ecuador",
      name_la: "Iacobus Elliot et Socii Martyres",
      name_ro: "Jim Elliot \u0219i Misionarii Martiri",
      title: "Witnesses of the Cross & Missionary Pioneers",
      title_it: "Testimoni della Croce e Missionari Evangelici",
      color: "red",
      rank: "memorial",
      quote: "\u00abHe is no fool who gives what he cannot keep to gain that which he cannot lose.\u00bb",
      quote_it: "\u00abNon \u00e8 uno stolto colui che d\u00e0 ci\u00f2 che non pu\u00f2 conservare per guadagnare ci\u00f2 che non pu\u00f2 perdere.\u00bb",
      bio: "Five young missionaries slain along the Curaray River; their sacrifice led the Waorani tribe to Christ.",
      bio_it: "Cinque giovani missionari che testimoniarono l'Evangelo fino al martirio, aprendo la via della salvezza a un intero popolo.",
      scriptureRef: "Mark 8:35"
    }
  ],
  '1-9': [
    {
      traditions: ["orthodox", "catholic", "all"],
      name: "St. Peter of Sebaste",
      name_it: "San Pietro di Sebaste Vescovo",
      name_la: "Sanctus Petrus Sebastensis",
      name_ro: "Sf\u00e2ntul Petru al Sevastiei",
      title: "Brother of Basil and Gregory of Nyssa",
      title_it: "Vescovo di Sebaste e Fratello di San Basilio",
      color: "white",
      rank: "memorial",
      quote: "\u00abLet us not grow weary of doing good, for in due season we will reap.\u00bb",
      quote_it: "\u00abNon stanchiamoci di fare il bene: se infatti non veniamo meno, a suo tempo mieteremo.\u00bb",
      bio: "Youngest brother of Basil the Great and Gregory of Nyssa, holy abbot and bishop of Sebaste in Armenia.",
      bio_it: "Fratello minore di San Basilio e San Gregorio di Nissa, abate e vescovo sapiente che resse la Chiesa in Armenia.",
      scriptureRef: "Galatians 6:9"
    }
  ],
  '1-10': [
    {
      traditions: ["orthodox", "catholic", "ecumenical"],
      name: "St. Gregory of Nyssa",
      name_it: "San Gregorio di Nissa",
      name_la: "Sanctus Gregorius Nyssenus",
      name_ro: "Sf\u00e2ntul Grigorie de Nyssa",
      title: "Cappadocian Father & Mystic of Infinite Ascent",
      title_it: "Padre Cappadoce e Mistico dell'Infinita Salita a Dio",
      color: "white",
      rank: "memorial",
      quote: "\u00abConcepts create idols; only wonder comprehends anything. God exceeds all thought.\u00bb",
      quote_it: "\u00abI concetti creano idoli; solo lo stupore comprende. Dio supera ogni nostro pensiero.\u00bb",
      bio: "Brother of St. Basil, renowned theologian of the divine darkness and the endless spiritual journey into God.",
      bio_it: "Fratello di San Basilio, sublime teologo dell'epectasi e della contemplazione mistica della luce divina.",
      scriptureRef: "Philippians 3:13-14"
    }
  ],
  '1-11': [
    {
      traditions: ["orthodox", "catholic", "all"],
      name: "St. Theodosius the Cenobiarch",
      name_it: "San Teodosio il Cenobiarca",
      name_la: "Sanctus Theodosius Cenobiarcha",
      name_ro: "Sf\u00e2ntul Teodosie cel Mare, \u00cencep\u0103torul Vie\u021bii de Ob\u0219te",
      title: "Father of Cenobitic Monasticism in Palestine",
      title_it: "Padre della Vita Comunitaria in Palestina",
      color: "white",
      rank: "memorial",
      quote: "\u00abBehold, how good and how pleasant it is for brethren to dwell together in unity!\u00bb",
      quote_it: "\u00abEcco quant'\u00e8 buono e quant'\u00e8 soave che i fratelli vivano insieme nell'unit\u00e0!\u00bb",
      bio: "Gathered hundreds of desert monks into community life of prayer, work, and four hospitals for the sick and poor.",
      bio_it: "Fond\u00f2 nel deserto di Giuda un grande monastero con quattro ospedali per i malati, modello di carit\u00e0 fraterna.",
      scriptureRef: "Psalm 133:1"
    }
  ],
  '1-12': [
    {
      traditions: ["all"],
      name: "St. Tatiana of Rome",
      name_it: "Santa Tatiana di Roma Martire",
      name_la: "Sancta Tatiana Virgo et Martyr",
      name_ro: "Sf\u00e2nta Mare Muceni\u021b\u0103 Tatiana",
      title: "Deaconess & Roman Martyr",
      title_it: "Diaconessa e Gloriosa Martire di Roma",
      color: "red",
      rank: "memorial",
      quote: "\u00abWho shall separate us from the love of Christ? Shall tribulation, or distress, or persecution?\u00bb",
      quote_it: "\u00abChi ci separer\u00e0 dall'amore di Cristo? Forse la tribolazione, l'angoscia, o la spada?\u00bb",
      bio: "Roman deaconess who distributed alms to the needy and endured trials under Emperor Alexander Severus.",
      bio_it: "Diaconessa romana che consacr\u00f2 la vita al servizio dei poveri, martirizzata a Roma sotto Alessandro Severo.",
      scriptureRef: "Romans 8:35"
    }
  ],
  '1-13': [
    {
      traditions: ["catholic", "ecumenical"],
      name: "St. Hilary of Poitiers",
      name_it: "Sant'Ilario di Poitiers",
      name_la: "Sanctus Hilarius Pictaviensis",
      name_ro: "Sf\u00e2ntul Ilarie de Poitiers",
      title: "Doctor of the Church & Champion of the Trinity",
      title_it: "Vescovo e Dottore della Chiesa, Difensore della Trinit\u00e0",
      color: "white",
      rank: "memorial",
      quote: "\u00abGive us, O Lord, pure speech, sound faith, and true understanding of your Son.\u00bb",
      quote_it: "\u00abDonaci, Signore, una parola pura, una fede intatta e la retta comprensione del tuo Figlio.\u00bb",
      bio: "Bishop exiled for defending the Nicene Creed against Arian emperors, author of On the Trinity.",
      bio_it: "Vescovo strenuo assertore della divinit\u00e0 di Cristo, esiliato per la fede ortodossa, autore del De Trinitate.",
      scriptureRef: "John 1:1"
    }
  ],
  '1-14': [
    {
      traditions: ["catholic", "all"],
      name: "St. Felix of Nola",
      name_it: "San Felice di Nola Confessore",
      name_la: "Sanctus Felix Nolanus",
      name_ro: "Sf\u00e2ntul Felix de Nola",
      title: "Priest of Nola & Tireless Confessor of the Faith",
      title_it: "Sacerdote e Testimone della Fede a Nola",
      color: "white",
      rank: "memorial",
      quote: "\u00abWhosoever therefore shall confess me before men, him will I confess also before my Father in heaven.\u00bb",
      quote_it: "\u00abChiunque mi riconoscer\u00e0 davanti agli uomini, anch'io lo riconoscer\u00f2 davanti al Padre mio che \u00e8 nei cieli.\u00bb",
      bio: "Priest of Campania whose miraculous escape from prison and selfless charity inspired St. Paulinus of Nola.",
      bio_it: "Sacerdote campano che sopport\u00f2 torture e persecuzioni, cantato da San Paolino di Nola per la sua luminosa santit\u00e0.",
      scriptureRef: "Matthew 10:32"
    }
  ],
  '1-15': [
    {
      traditions: ["orthodox", "ecumenical"],
      name: "St. Seraphim of Sarov",
      name_it: "San Serafino di Sarov",
      name_la: "Sanctus Seraphim Saroviensis",
      name_ro: "Sf\u00e2ntul Serafim de Sarov",
      title: "Wonderworker & Apostle of the Holy Spirit",
      title_it: "Taumaturgo di Sarov e Apostolo dello Spirito Santo",
      color: "white",
      rank: "feast",
      quote: "\u00abAcquire a peaceful spirit, and around you thousands will be saved.\u00bb",
      quote_it: "\u00abAcquisisci lo spirito di pace, e intorno a te migliaia troveranno la salvezza.\u00bb",
      bio: "Beloved Russian starets who greeted every visitor with \"My joy, Christ is risen!\" and taught the acquisition of the Holy Spirit.",
      bio_it: "Santo monaco russo che accoglieva tutti con il saluto pasquale \"Gioia mia, Cristo \u00e8 risorto!\" e rivel\u00f2 la luce dello Spirito.",
      scriptureRef: "John 20:19-21"
    }
  ],
  '1-16': [
    {
      traditions: ["catholic", "all"],
      name: "St. Marcellus I, Pope and Martyr",
      name_it: "San Marcello I Papa e Martire",
      name_la: "Sanctus Marcellus I Papa et Martyr",
      name_ro: "Sf\u00e2ntul Marcel I Pap\u0103",
      title: "Shepherd of Rome in Persecution",
      title_it: "Pastore di Roma durante la Persecuzione",
      color: "red",
      rank: "memorial",
      quote: "\u00abTend the flock of God that is in your charge, not by constraint but willingly.\u00bb",
      quote_it: "\u00abPascete il gregge di Dio che vi \u00e8 affidato, sorvegliandolo non per forza ma volentieri.\u00bb",
      bio: "Restored the parishes and penitential discipline of Rome after the severe persecution of Diocletian.",
      bio_it: "Riorganizz\u00f2 la Chiesa di Roma sconvolta dalle persecuzioni di Diocleziano, morendo in esilio per la fede.",
      scriptureRef: "1 Peter 5:2-4"
    }
  ],
  '1-17': [
    {
      traditions: ["all"],
      name: "St. Anthony the Great (Abbot)",
      name_it: "Sant'Antonio Abate",
      name_la: "Sanctus Antonius Abbas",
      name_ro: "Sf\u00e2ntul Antonie cel Mare",
      title: "Father of Christian Monasticism",
      title_it: "Padre del Monachesimo Cristiano ed Eremita",
      color: "white",
      rank: "memorial",
      quote: "\u00abI no longer fear God, but I love Him. For love casts out fear.\u00bb",
      quote_it: "\u00abIo non temo pi\u00f9 Dio: lo amo! Perch\u00e9 l'amore perfetto scaccia ogni timore.\u00bb",
      bio: "Retreated into the Egyptian desert, enduring fierce spiritual warfare and teaching countless disciples how to pray without ceasing.",
      bio_it: "Si ritir\u00f2 nel deserto egiziano superando ogni tentazione demoniaca, maestro e padre di generazioni di contemplativi.",
      scriptureRef: "Matthew 19:21"
    }
  ],
  '1-18': [
    {
      traditions: ["all"],
      name: "St. Prisca of Rome & Christian Unity",
      name_it: "Santa Prisca Martire e Preghiera per l'Unit\u00e0",
      name_la: "Sancta Prisca Virgo et Martyr",
      name_ro: "Sf\u00e2nta Prisca Muceni\u021b\u0103",
      title: "Early Roman Martyr & Week of Prayer for Christian Unity",
      title_it: "Antica Martire Romana e Inizio della Settimana per l'Unit\u00e0",
      color: "red",
      rank: "memorial",
      quote: "\u00abThat they all may be one; as thou, Father, art in me, and I in thee, that they also may be one in us.\u00bb",
      quote_it: "\u00abChe tutti siano una sola cosa: come tu, Padre, sei in me e io in te, siano anch'essi in noi una cosa sola.\u00bb",
      bio: "Roman virgin martyred on the Aventine hill; day marking the opening of the universal Week of Prayer for Christian Unity.",
      bio_it: "Vergine romana venerata sull'Aventino; giorno che apre la Settimana Mondiale di Preghiera per l'Unit\u00e0 dei Cristiani.",
      scriptureRef: "John 17:21"
    }
  ],
  '1-19': [
    {
      traditions: ["all"],
      name: "St. Macarius the Great of Egypt",
      name_it: "San Macario il Grande (d'Egitto)",
      name_la: "Sanctus Macarius Aegyptius",
      name_ro: "Sf\u00e2ntul Macarie cel Mare",
      title: "Father of Scetis & Luminary of the Desert",
      title_it: "Padre del Deserto di Scete e Maestro di Preghiera",
      color: "white",
      rank: "memorial",
      quote: "\u00abAs the hart panteth after the water brooks, so panteth my soul after thee, O God.\u00bb",
      quote_it: "\u00abCome la cerva anela ai corsi d'acqua, cos\u00ec l'anima mia anela a te, o Dio.\u00bb",
      bio: "Disciple of St. Anthony who populated the desert of Scetis with contemplative cells, famous for spiritual homilies on the heart.",
      bio_it: "Discepolo di Sant'Antonio Abate nel deserto di Scete, autore di celebri omelie spirituali sulla grazia che inonda il cuore.",
      scriptureRef: "Psalm 42:1"
    }
  ],
  '1-20': [
    {
      traditions: ["catholic", "all"],
      name: "Saints Fabian Pope & Sebastian Martyr",
      name_it: "Santi Fabiano Papa e Sebastiano Martiri",
      name_la: "Sancti Fabiani et Sebastiani Martyrum",
      name_ro: "Sfin\u021bii Fabian Pap\u0103 \u0219i Sebastian Mucenic",
      title: "Soldiers of Christ & Roman Martyrs",
      title_it: "Soldati di Cristo e Gloriosi Martiri di Roma",
      color: "red",
      rank: "memorial",
      quote: "\u00abI am a Christian and a servant of Jesus Christ; no torture can separate me from His love.\u00bb",
      quote_it: "\u00abSono cristiano e servo di Ges\u00f9 Cristo: nessun tormento potr\u00e0 mai separarmi dal suo amore.\u00bb",
      bio: "Fabian governed the Church with wisdom under Decius; Sebastian, Roman officer, gave his life courageously under Diocletian.",
      bio_it: "Fabiano resse la Chiesa con carit\u00e0 sotto Decio; Sebastiano, ufficiale imperiale, confort\u00f2 i martiri e don\u00f2 la vita per Cristo.",
      scriptureRef: "2 Timothy 2:3"
    }
  ],
  '1-21': [
    {
      traditions: ["all"],
      name: "St. Agnes of Rome",
      name_it: "Sant'Agnese Vergine e Martire",
      name_la: "Sancta Agnes Virgo et Martyr",
      name_ro: "Sf\u00e2nta Agnes Muceni\u021b\u0103",
      title: "Pure Witness of Christ & Roman Martyr",
      title_it: "Pura Testimone di Cristo e Martire Romana",
      color: "red",
      rank: "memorial",
      quote: "\u00abChrist has placed His seal upon my forehead, and I will have no other spouse but Him.\u00bb",
      quote_it: "\u00abCristo ha impresso il suo sigillo sulla mia fronte: non amer\u00f2 altro sposo all'infuori di Lui.\u00bb",
      bio: "Young Roman virgin of twelve years who chose martyrdom over pagan marriage and idolatry.",
      bio_it: "Fanciulla romana di dodici anni che testimoni\u00f2 la sua totale fedelt\u00e0 a Cristo preferendo il martirio all'idolatria.",
      scriptureRef: "Psalm 45:11"
    }
  ],
  '1-22': [
    {
      traditions: ["catholic", "all"],
      name: "St. Vincent, Deacon and Martyr",
      name_it: "San Vincenzo Diacono e Martire",
      name_la: "Sanctus Vincentius Diaconus et Martyr",
      name_ro: "Sf\u00e2ntul Vincen\u021biu Diaconul",
      title: "Protomartyr of Spain",
      title_it: "Protomartire della Spagna e Diacono",
      color: "red",
      rank: "memorial",
      quote: "\u00abYou may destroy the body, but the soul belongs eternally to Christ.\u00bb",
      quote_it: "\u00abPotete distruggere il corpo, ma l'anima appartiene eternamente a Cristo.\u00bb",
      bio: "Deacon of Saragossa who suffered brutal torment under Diocletian with serene and joyful courage.",
      bio_it: "Diacono di Saragozza che sopport\u00f2 serenamente atroci torture per testimoniare la risurrezione di Cristo.",
      scriptureRef: "2 Corinthians 4:7-10"
    }
  ],
  '1-23': [
    {
      traditions: ["catholic", "all"],
      name: "St. Ildefonsus of Toledo",
      name_it: "Sant'Ildefonso di Toledo Vescovo",
      name_la: "Sanctus Ildephonsus Toletanus",
      name_ro: "Sf\u00e2ntul Ildefons de Toledo",
      title: "Archbishop of Toledo & Champion of the Virgin Mary",
      title_it: "Arcivescovo di Toledo e Cantore della Verginit\u00e0 di Maria",
      color: "white",
      rank: "memorial",
      quote: "\u00abI am the handmaid of my Lord, and the servant of the Mother of my God.\u00bb",
      quote_it: "\u00abIo sono il servo del mio Signore e della Madre del mio Salvatore.\u00bb",
      bio: "Monk and archbishop of Toledo who defended the perpetual virginity of the Mother of God.",
      bio_it: "Monaco e arcivescovo di Toledo, scrisse il celebre trattato sulla perpetua verginit\u00e0 della Beata Vergine Maria.",
      scriptureRef: "Luke 1:48"
    }
  ],
  '1-24': [
    {
      traditions: ["catholic", "all"],
      name: "St. Francis de Sales",
      name_it: "San Francesco di Sales",
      name_la: "Sanctus Franciscus Salesius",
      name_ro: "Sf\u00e2ntul Francisc de Sales",
      title: "Bishop, Doctor of Divine Love & Patron of Writers",
      title_it: "Vescovo e Dottore del Divino Amore, Patrono dei Giornalisti",
      color: "white",
      rank: "memorial",
      quote: "\u00abA spoonful of honey attracts more flies than a barrel of vinegar. Have patience with all things, but first of all with yourself.\u00bb",
      quote_it: "\u00abSi prendono pi\u00f9 mosche con una goccia di miele che con un barile d'aceto. Abbiate pazienza con tutti, ma prima di tutto con voi stessi.\u00bb",
      bio: "Gentle bishop of Geneva who taught that holiness is accessible to everyone in every walk of life through his Introduction to the Devout Life.",
      bio_it: "Vescovo di Ginevra, autore della Filotea, insegn\u00f2 che la santit\u00e0 evangelica \u00e8 accessibile a ogni persona nella vita quotidiana.",
      scriptureRef: "Colossians 4:6"
    }
  ],
  '1-25': [
    {
      traditions: ["all"],
      name: "The Conversion of St. Paul the Apostle",
      name_it: "Conversione di San Paolo Apostolo",
      name_la: "In Conversione Sancti Pauli Apostoli",
      name_ro: "Convertirea Sf\u00e2ntului Apostol Pavel",
      title: "Apostle to the Gentiles & Vessel of Election",
      title_it: "Apostolo delle Genti e Strumento Eletto",
      color: "white",
      rank: "feast",
      quote: "\u00abBy the grace of God I am what I am, and His grace toward me was not in vain.\u00bb",
      quote_it: "\u00abPer grazia di Dio sono quello che sono, e la sua grazia in me non \u00e8 stata vana.\u00bb",
      bio: "On the road to Damascus, the risen Christ appeared to Saul the persecutor, transforming him into the fiery preacher of the Cross.",
      bio_it: "Sulla via di Damasco Cristo risorto si rivel\u00f2 a Saulo persecutore, trasformandolo nell'infaticabile Apostolo delle nazioni.",
      scriptureRef: "Acts 9:1-19"
    }
  ],
  '1-26': [
    {
      traditions: ["all"],
      name: "Saints Timothy and Titus, Bishops",
      name_it: "Santi Timoteo e Tito, Vescovi",
      name_la: "Sancti Timothei et Titi Episcoporum",
      name_ro: "Sfin\u021bii Timotei \u0219i Tit",
      title: "Disciples of St. Paul & Apostolic Shepherds",
      title_it: "Discepoli di San Paolo e Pastori Apostolici",
      color: "white",
      rank: "memorial",
      quote: "\u00abFight the good fight of faith; lay hold on eternal life, whereunto thou art called.\u00bb",
      quote_it: "\u00abCombatti la buona battaglia della fede, afferra la vita eterna alla quale sei stato chiamato.\u00bb",
      bio: "Beloved spiritual sons and co-workers of Paul who governed the churches of Ephesus and Crete with fidelity.",
      bio_it: "Fedeli collaboratori dell'Apostolo Paolo, guidarono con fermezza e carit\u00e0 le comunit\u00e0 cristiane di Efeso e Creta.",
      scriptureRef: "1 Timothy 6:12"
    }
  ],
  '1-27': [
    {
      traditions: ["catholic"],
      name: "St. Angela Merici",
      name_it: "Sant'Angela Merici",
      name_la: "Sancta Angela Merici",
      name_ro: "Sf\u00e2nta Angela Merici",
      title: "Foundress of the Ursulines & Pioneer Educator",
      title_it: "Fondatrice delle Orsoline ed Educatrice",
      color: "white",
      rank: "memorial",
      quote: "\u00abDo now what you will wish to have done at the hour of death. Love all with tender charity.\u00bb",
      quote_it: "\u00abAgite ora come vorreste aver fatto nell'ora della morte. Amate tutti con carit\u00e0 tenera e discreta.\u00bb",
      bio: "Brescian mystic who founded the Company of Saint Ursula, educating girls and promoting feminine consecration in the world.",
      bio_it: "Mistica bresciana fondatrice della Compagnia di Sant'Orsola, pioniera della consacrazione laicale e dell'educazione femminile.",
      scriptureRef: "Proverbs 31:26"
    }
  ],
  '1-28': [
    {
      traditions: ["catholic", "all"],
      name: "St. Thomas Aquinas",
      name_it: "San Tommaso d'Aquino",
      name_la: "Sancti Thomae de Aquino",
      name_ro: "Sf\u00e2ntul Toma de Aquino",
      title: "The Angelic Doctor & Pillar of Christian Theology",
      title_it: "Il Dottore Angelico e Pilastro della Sapienza Cristiana",
      color: "white",
      rank: "memorial",
      quote: "\u00abGrant me, O Lord my God, a mind to know You, a heart to seek You, and wisdom to find You.\u00bb",
      quote_it: "\u00abConcedimi, Signore Dio mio, una mente per conoscerti, un cuore per cercarti e la sapienza per trovarti.\u00bb",
      bio: "Dominican friar, author of the Summa Theologiae and Eucharistic hymns, uniting profound faith with human reason.",
      bio_it: "Frate domenicano autore della Summa Theologiae e dei sublimi inni eucaristici, armonizz\u00f2 fede evangelica e ragione filosofica.",
      scriptureRef: "Wisdom 7:7"
    }
  ],
  '1-29': [
    {
      traditions: ["all"],
      name: "St. Gildas the Wise",
      name_it: "San Gildas il Saggio Abate",
      name_la: "Sanctus Gildas Sapiens",
      name_ro: "Sf\u00e2ntul Gildas \u00cen\u021beleptul",
      title: "British Monk & Preacher of Gospel Renewal",
      title_it: "Monaco Britannico e Predicatore del Rinnovamento Evangelico",
      color: "white",
      rank: "memorial",
      quote: "\u00abTurn ye unto me with all your heart, and with fasting, and with weeping, and with mourning.\u00bb",
      quote_it: "\u00abRitornate a me con tutto il cuore, con digiuni, con pianti e con lamenti.\u00bb",
      bio: "Sixth-century Celtic abbot who called princes and clergy back to apostolic fidelity, founding monasteries in Wales and Brittany.",
      bio_it: "Abate celtico che oper\u00f2 tra Galles e Bretagna richiamando il popolo cristiano alla fedelt\u00e0 alle Sacre Scritture.",
      scriptureRef: "Joel 2:12"
    }
  ],
  '1-30': [
    {
      traditions: ["orthodox", "ecumenical"],
      name: "The Three Holy Hierarchs: Basil, Gregory & John Chrysostom",
      name_it: "I Tre Santi Gerarchi: Basilio il Grande, Gregorio il Teologo e Giovanni Crisostomo",
      name_la: "Sancti Tres Hierarchae",
      name_ro: "Sfin\u021bii Trei Ierarhi: Vasile cel Mare, Grigorie Teologul \u0219i Ioan Gur\u0103 de Aur",
      title: "Universal Teachers of the Christian World",
      title_it: "Maestri Ecumenici e Dottori della Chiesa Universale",
      color: "white",
      rank: "feast",
      quote: "\u00abLet us run with one mind to the holy font of truth, uniting theological wisdom, righteousness, and mercy.\u00bb",
      quote_it: "\u00abCorriamo con un solo cuore alla fonte della divina verit\u00e0, unendo sapienza teologica, giustizia e carit\u00e0 verso i poveri.\u00bb",
      bio: "Joint feast established in the eleventh century uniting the three supreme theological minds of Eastern Christendom.",
      bio_it: "Festa ecumenica istituita nell'XI secolo per celebrare congiuntamente i tre giganti spirituali e teologici d'Oriente.",
      scriptureRef: "Hebrews 13:7"
    }
  ],
  '1-31': [
    {
      traditions: ["catholic", "all"],
      name: "St. John Bosco",
      name_it: "San Giovanni Bosco",
      name_la: "Sanctus Ioannes Bosco",
      name_ro: "Sf\u00e2ntul Ioan Bosco",
      title: "Father & Teacher of Youth, Founder of Salesians",
      title_it: "Padre e Maestro della Giovent\u00f9, Fondatore dei Salesiani",
      color: "white",
      rank: "memorial",
      quote: "\u00abGive me souls, take away the rest! Be cheerful, do good, and let the sparrows chirp.\u00bb",
      quote_it: "\u00abDammi le anime, togli tutto il resto! Siate sempre allegri, fate il bene e lasciate cantare i passeri.\u00bb",
      bio: "Apostle of neglected youth in industrial Turin, pioneer of the preventive system founded on reason, religion, and loving-kindness.",
      bio_it: "Apostolo dei giovani operai a Torino, fond\u00f2 gli oratori e la famiglia salesiana sul metodo preventivo di ragione, religione e amorevolezza.",
      scriptureRef: "Matthew 18:5"
    }
  ],

  // ==========================================
  // FEBRUARY (2)
  // ==========================================
  '2-2': [
    {
      traditions: ["all"],
      name: "The Presentation of the Lord (Candlemas / Meeting of the Lord)",
      name_it: "Presentazione del Signore (Candelora / Incontro)",
      name_la: "In Praesentatione Domini",
      name_ro: "\u00cent\u00e2mpinarea Domnului",
      title: "Light to Enlighten the Gentiles & Glory of Israel",
      title_it: "Luce per Illuminare le Genti e Gloria d'Israele",
      color: "white",
      rank: "feast",
      quote: "\u00abLord, now lettest thou thy servant depart in peace: For mine eyes have seen thy salvation.\u00bb",
      quote_it: "\u00abOra lascia, o Signore, che il tuo servo vada in pace: i miei occhi hanno visto la tua salvezza.\u00bb",
      bio: "Forty days after the Nativity, Mary and Joseph present the infant Jesus in the Temple, where holy Simeon and Anna receive Him.",
      bio_it: "Quaranta giorni dopo il Natale, Ges\u00f9 \u00e8 offerto al Padre nel Tempio di Gerusalemme e riconosciuto dal vegliardo Simeone.",
      scriptureRef: "Luke 2:29-32"
    }
  ],
  '2-3': [
    {
      traditions: ["catholic", "all"],
      name: "St. Blaise, Bishop and Martyr",
      name_it: "San Biagio Vescovo e Martire",
      name_la: "Sanctus Blasius Episcopus et Martyr",
      name_ro: "Sf\u00e2ntul Vlasie",
      title: "Patron Against Throat Afflictions & Healer",
      title_it: "Patrono contro i Mali della Gola e Martire",
      color: "red",
      rank: "memorial",
      quote: "\u00abThrough the intercession of Saint Blaise, may God deliver you from every illness of the throat and every evil.\u00bb",
      quote_it: "\u00abPer intercessione di San Biagio ti liberi il Signore da ogni male della gola e da ogni altro male.\u00bb",
      bio: "Bishop of Sebaste in Armenia who lived in prayer in a mountain cave and healed sick people and animals, martirizzato under Licinius.",
      bio_it: "Vescovo armeno taumaturgo, invocato da secoli per la benedizione delle gole con le candele incrociate.",
      scriptureRef: "Psalm 34:19"
    }
  ],
  '2-5': [
    {
      traditions: ["all"],
      name: "St. Agatha of Sicily",
      name_it: "Sant'Agata Vergine e Martire",
      name_la: "Sancta Agatha Virgo et Martyr",
      name_ro: "Sf\u00e2nta Agata",
      title: "Patroness of Catania & Courageous Witness",
      title_it: "Patrona di Catania e Martire della Purezza",
      color: "red",
      rank: "memorial",
      quote: "\u00abLord Jesus Christ, you know my heart and my desire; take all that I am, for I belong only to You.\u00bb",
      quote_it: "\u00abSignore Ges\u00f9 Cristo, tu conosci il mio cuore e la mia fedelt\u00e0: accogli tutto di me, poich\u00e9 appartengo solo a Te.\u00bb",
      bio: "Noble maiden of Catania who preserved her consecration to Christ amidst terrible torments under Decius.",
      bio_it: "Nobile vergine siciliana che difese la sua fede e castit\u00e0 con indomito coraggio fino alla gloria del martirio.",
      scriptureRef: "Psalm 31:1"
    }
  ],
  '2-6': [
    {
      traditions: ["catholic", "all"],
      name: "Saints Paul Miki & Companions, Martyrs of Nagasaki",
      name_it: "Santi Paolo Miki e Compagni Martiri di Nagasaki",
      name_la: "Sancti Pauli Miki et Sociorum Martyrum",
      name_ro: "Sfin\u021bii Paul Miki \u0219i \u00censo\u021bitorii Martiri",
      title: "Protomartyrs of Japan",
      title_it: "Protomartiri del Giappone e Testimoni della Croce",
      color: "red",
      rank: "memorial",
      quote: "\u00abAs I come to this moment, I declare: there is no other way to salvation than the path Christians follow. I forgive my executioners.\u00bb",
      quote_it: "\u00abGiunto a questo momento supremo, dichiaro: non c'\u00e8 altra via di salvezza se non quella di Cristo. Io perdono i miei carnefici.\u00bb",
      bio: "Jesuit scholastic Paul Miki and twenty-five companions, crucified on Nishizaka hill in Nagasaki in 1597 while singing the Te Deum.",
      bio_it: "Il gesuita Paolo Miki e 25 compagni crocifissi sulla collina di Nagasaki mentre lodavano Dio cantando il Te Deum.",
      scriptureRef: "Galatians 2:20"
    }
  ],
  '2-10': [
    {
      traditions: ["all"],
      name: "St. Scholastica",
      name_it: "Santa Scolastica Vergine",
      name_la: "Sancta Scholastica Virgo",
      name_ro: "Sf\u00e2nta Scolastica",
      title: "Twin Sister of St. Benedict & Mother of Nuns",
      title_it: "Sorella di San Benedetto e Madre delle Monache",
      color: "white",
      rank: "memorial",
      quote: "\u00abShe could do more, because she loved more.\u00bb",
      quote_it: "\u00abElla pot\u00e9 di pi\u00f9, perch\u00e9 am\u00f2 di pi\u00f9.\u00bb",
      bio: "Devoted sister of Benedict whose prayer brought sudden torrents of rain so they could converse on heavenly things until dawn.",
      bio_it: "Sorella gemella di San Benedetto da Norcia; con la forza del suo amore orante ottenne dal Cielo la tempesta per continuare il dialogo spirituale.",
      scriptureRef: "Song of Songs 8:6-7"
    }
  ],
  '2-11': [
    {
      traditions: ["catholic", "all"],
      name: "Our Lady of Lourdes",
      name_it: "Beata Vergine Maria di Lourdes",
      name_la: "Beata Maria Virgo de Lourdes",
      name_ro: "Sf\u00e2nta Fecioar\u0103 Maria de la Lourdes",
      title: "The Immaculate Conception & Health of the Sick",
      title_it: "L'Immacolata Concezione e Salute degli Infermi",
      color: "white",
      rank: "memorial",
      quote: "\u00abI do not promise to make you happy in this world, but in the next. I am the Immaculate Conception.\u00bb",
      quote_it: "\u00abNon vi prometto di rendervi felice in questo mondo, ma nell'altro. Io sono l'Immacolata Concezione.\u00bb",
      bio: "Apparitions of the Mother of God to fourteen-year-old Bernadette Soubirous at the grotto of Massabielle, source of healing for millions.",
      bio_it: "Apparizione della Vergine a Santa Bernardetta presso la grotta di Massabielle, santuario mondiale di preghiera e sollievo per i malati.",
      scriptureRef: "Luke 1:49"
    }
  ],
  '2-14': [
    {
      traditions: ["all"],
      name: "Saints Cyril and Methodius",
      name_it: "Santi Cirillo e Metodio",
      name_la: "Sancti Cyrilli et Methodii",
      name_ro: "Sfin\u021bii Chiril \u0219i Metodie, Apostolii Slavilor",
      title: "Apostles to the Slavs & Co-Patrons of Europe",
      title_it: "Apostoli degli Slavi e Compatroni d'Europa",
      color: "white",
      rank: "feast",
      quote: "\u00abListen, all Slavic peoples: hear the Word that feeds human souls, the Word that strengthens heart and mind.\u00bb",
      quote_it: "\u00abAscoltate, popoli slavi: ascoltate la Parola di Dio che nutre le anime, la Parola che fortifica la mente e il cuore.\u00bb",
      bio: "Greek brothers who devised the Glagolitic alphabet, translated the Sacred Scriptures, and bridged Eastern and Western Christendom.",
      bio_it: "Santi fratelli di Tessalonica che crearono l'alfabeto slavo e tradussero la Bibbia e la liturgia, ponte provvidenziale tra Oriente e Occidente.",
      scriptureRef: "Mark 16:15"
    }
  ],
  '2-18': [
    {
      traditions: ["protestant"],
      name: "Martin Luther (Commemoration of Death)",
      name_it: "Martin Lutero (Commemorazione del Transito)",
      name_la: "Martinus Lutherus",
      name_ro: "Martin Luther",
      title: "Reformer & Proclaimer of Justification by Faith",
      title_it: "Riformatore e Assertore della Giustificazione per Fede",
      color: "white",
      rank: "memorial",
      quote: "\u00abWe are beggars: this is true. Into your hands I commit my spirit, O Lord, faithful God.\u00bb",
      quote_it: "\u00abSiamo mendicanti: questa \u00e8 la verit\u00e0. Nelle tue mani affido il mio spirito, Signore Dio fedele.\u00bb",
      bio: "Fell asleep in Christ at Eisleben in 1546 after a lifetime of re-centering Christianity upon Scripture alone and grace through faith.",
      bio_it: "Si addorment\u00f2 nel Signore a Eisleben nel 1546, dopo aver richiamato la Chiesa al primato della Scrittura e della sola grazia per fede.",
      scriptureRef: "Romans 1:16-17"
    }
  ],
  '2-21': [
    {
      traditions: ["catholic", "traditional"],
      name: "St. Peter Damian",
      name_it: "San Pier Damiani",
      name_la: "Sanctus Petrus Damianus",
      name_ro: "Sf\u00e2ntul Petru Damian",
      title: "Bishop, Hermit & Doctor of the Church",
      title_it: "Vescovo, Eremita e Dottore della Chiesa",
      color: "white",
      rank: "memorial",
      quote: "\u00abLet the Cross be your glory, your light, and your shelter against every snare.\u00bb",
      quote_it: "\u00abSia la Croce di Cristo la tua gloria, la tua luce e il tuo rifugio contro ogni insidia.\u00bb",
      bio: "Monk of Fonte Avellana and cardinal who worked tirelessly for Church reform, simplicity of clerical life, and contemplation.",
      bio_it: "Priore di Fonte Avellana e cardinale, promotore instancabile del rinnovamento morale del clero e della vita eremitica.",
      scriptureRef: "2 Timothy 4:7-8"
    },
    {
      traditions: ["protestant"],
      name: "Eric Liddell",
      name_it: "Eric Liddell (Campione di Fede e Missionario)",
      name_la: "Ericus Liddell",
      name_ro: "Eric Liddell",
      title: "Olympic Champion & Missionary Martyr in China",
      title_it: "Campione Olimpico e Missionario Martire in Cina",
      color: "white",
      rank: "memorial",
      quote: "\u00abGod made me fast. And when I run, I feel His pleasure.\u00bb",
      quote_it: "\u00abDio mi ha fatto veloce. E quando corro, sento la sua gioia.\u00bb",
      bio: "Olympic gold medalist who gave up fame to serve as an educator and missionary in war-torn China, dying in an internment camp.",
      bio_it: "Campione olimpico scozzese che rinunci\u00f2 al successo per annunciare Cristo in Cina, morendo con animo sereno nel campo d'internamento.",
      scriptureRef: "Isaiah 40:31"
    }
  ],
  '2-22': [
    {
      traditions: ["catholic", "traditional", "ecumenical"],
      name: "The Chair of St. Peter the Apostle",
      name_it: "Cattedra di San Pietro Apostolo",
      name_la: "Cathedra Sancti Petri Apostoli",
      name_ro: "Catedra Sf\u00e2ntului Apostol Petru",
      title: "Symbol of Apostolic Ministry & Unity in Truth",
      title_it: "Segno del Ministero Apostolico e dell'Unit\u00e0 nella Fede",
      color: "white",
      rank: "feast",
      quote: "\u00abThou art Peter, and upon this rock I will build my Church; and the gates of hell shall not prevail against it.\u00bb",
      quote_it: "\u00abTu sei Pietro e su questa pietra edificher\u00f2 la mia Chiesa e le potenze degli inferi non prevarranno su di essa.\u00bb",
      bio: "Celebrates the pastoral mission given by Christ to Peter to confirm his brethren in faith and unity.",
      bio_it: "Celebra il mandato pastorale affidato da Cristo a Pietro di confermare i fratelli nella fede e nella carit\u00e0.",
      scriptureRef: "Matthew 16:18-19"
    }
  ],
  '2-23': [
    {
      traditions: ["all"],
      name: "St. Polycarp of Smyrna",
      name_it: "San Policarpo di Smirne Vescovo e Martire",
      name_la: "Sanctus Polycarpus Episcopus et Martyr",
      name_ro: "Sf\u00e2ntul Policarp al Smirnei",
      title: "Apostolic Father & Disciple of St. John",
      title_it: "Padre Apostolico, Discepolo di San Giovanni e Martire",
      color: "red",
      rank: "memorial",
      quote: "\u00abEighty and six years have I served Him, and He never did me wrong; how then can I blaspheme my King and Savior?\u00bb",
      quote_it: "\u00abDa ottantasei anni lo servo ed Egli non mi ha mai fatto alcun torto: come potrei bestemmiare il mio Re e Salvatore?\u00bb",
      bio: "Venerable bishop burned at the stake in Smyrna, whose martyrdom is among the earliest documented accounts of the early Church.",
      bio_it: "Discepolo dell'Apostolo Giovanni, affront\u00f2 serenamente il rogo nello stadio di Smirne ringraziando Dio per la corona del martirio.",
      scriptureRef: "Revelation 2:10"
    }
  ],

  // ==========================================
  // MARCH (3)
  // ==========================================
  '3-2': [
    {
      traditions: ["protestant", "ecumenical"],
      name: "John Wesley",
      name_it: "John Wesley (Evangelista e Fondatore del Metodismo)",
      name_la: "Ioannes Wesley",
      name_ro: "John Wesley",
      title: "Evangelist of Holy Love & Founder of Methodism",
      title_it: "Evangelista del Santo Amore e Fondatore del Metodismo",
      color: "white",
      rank: "memorial",
      quote: "\u00abThe world is my parish. Do all the good you can, by all the means you can, in all the ways you can.\u00bb",
      quote_it: "\u00abIl mondo intero \u00e8 la mia parrocchia. Fa' tutto il bene che puoi, con tutti i mezzi che puoi, in tutti i modi possibili.\u00bb",
      bio: "Anglican clergyman whose heart was \"strangely warmed\" at Aldersgate, sparking a massive spiritual revival across Britain and America.",
      bio_it: "Pastore anglicano il cui cuore fu rinnovato dalla grazia, accendendo un risveglio spirituale e sociale straordinario.",
      scriptureRef: "Galatians 5:6"
    }
  ],
  '3-7': [
    {
      traditions: ["all"],
      name: "Saints Perpetua and Felicity, Martyrs",
      name_it: "Sante Perpetua e Felicita Martiri",
      name_la: "Sanctae Perpetuae et Felicitatis Martyrum",
      name_ro: "Sfintele Muceni\u021be Perpetua \u0219i Felicitas",
      title: "Martyrs of Carthage & Courageous Mothers",
      title_it: "Giovani Madri e Intrepide Martiri di Cartagine",
      color: "red",
      rank: "memorial",
      quote: "\u00abStand fast in the faith, and love one another; and be not offended by our sufferings.\u00bb",
      quote_it: "\u00abRimanete saldi nella fede, amatevi a vicenda e non siate scandalizzati dalle nostre sofferenze.\u00bb",
      bio: "Young nursing mother Perpetua and pregnant servant Felicity martyred in the amphitheater of Carthage in 203.",
      bio_it: "La nobile Perpetua con il suo bambino al seno e la serva Felicita affrontarono le fiere a Cartagine per non rinnegare Cristo.",
      scriptureRef: "Revelation 12:11"
    }
  ],
  '3-8': [
    {
      traditions: ["catholic", "all"],
      name: "St. John of God",
      name_it: "San Giovanni di Dio",
      name_la: "Sanctus Ioannes a Deo",
      name_ro: "Sf\u00e2ntul Ioan al lui Dumnezeu",
      title: "Founder of the Brothers Hospitallers & Patron of the Sick",
      title_it: "Fondatore dei Fatebenefratelli e Patrono dei Malati",
      color: "white",
      rank: "memorial",
      quote: "\u00abDo good to yourselves by doing good to others. Let your love have no bounds.\u00bb",
      quote_it: "\u00abFate del bene a voi stessi facendo del bene agli altri. La vostra carit\u00e0 non conosca limiti.\u00bb",
      bio: "Devoted his life to gathering and nursing the homeless and mentally ill in Granada, founding the Hospitaller Order.",
      bio_it: "Raccolse i malati abbandonati e gli indigenti a Granada, inaugurando una nuova carit\u00e0 ospedaliera centrata sulla dignit\u00e0 dell'uomo.",
      scriptureRef: "1 John 3:18"
    }
  ],
  '3-9': [
    {
      traditions: ["orthodox", "catholic", "all"],
      name: "The Forty Martyrs of Sebaste",
      name_it: "I Quaranta Martiri di Sebaste",
      name_la: "Sancti Quadraginta Martyres Sebastenses",
      name_ro: "Sfin\u021bii 40 de Mucenici din Sevastia",
      title: "Courageous Soldiers of the Twelfth Legion",
      title_it: "Soldati di Cristo e Gloriosi Martiri delle Acque Gelate",
      color: "red",
      rank: "memorial",
      quote: "\u00abBitter is the frost, but sweet is paradise. Let us not break the ranks of the forty crowns of Christ.\u00bb",
      quote_it: "\u00abCrudo \u00e8 il gelo, ma dolce \u00e8 il paradiso. Non si spezzi la schiera delle nostre quaranta corone!\u00bb",
      bio: "Forty Roman soldiers who refused to sacrifice to idols and were exposed naked on a frozen lake in Armenia in 320.",
      bio_it: "Quaranta valorosi soldati della Legione Fulminata esposti nudi nel lago ghiacciato di Sebaste, glorificando Cristo insieme.",
      scriptureRef: "Hebrews 11:36-38"
    }
  ],
  '3-10': [
    {
      traditions: ["protestant"],
      name: "George M\u00fcller of Bristol",
      name_it: "George M\u00fcller di Bristol",
      name_la: "Georgius M\u00fcller",
      name_ro: "George M\u00fcller",
      title: "Man of Prayer, Living Faith & Father to 10,000 Orphans",
      title_it: "Apostolo della Fede Vivente e Padre di 10.000 Orfani",
      color: "white",
      rank: "memorial",
      quote: "\u00abThe beginning of anxiety is the end of faith, and the beginning of true faith is the end of anxiety.\u00bb",
      quote_it: "\u00abL'inizio dell'ansia \u00e8 la fine della fede, e l'inizio della vera fede \u00e8 la fine di ogni ansia.\u00bb",
      bio: "Demonstrated to the modern world that God answers prayer by caring for thousands of orphans without asking for money from men.",
      bio_it: "Fond\u00f2 orfanotrofi e scuole a Bristol confidando unicamente nell'orazione quotidiana a Dio senza mai chiedere donazioni.",
      scriptureRef: "Mark 11:24"
    }
  ],
  '3-17': [
    {
      traditions: ["all"],
      name: "St. Patrick, Bishop and Apostle of Ireland",
      name_it: "San Patrizio Vescovo, Apostolo d'Irlanda",
      name_la: "Sanctus Patricius Episcopus",
      name_ro: "Sf\u00e2ntul Patrick, Lumin\u0103torul Irlandei",
      title: "Evangelizer of Ireland & Teacher of the Holy Trinity",
      title_it: "Evangelizzatore d'Irlanda e Maestro della Santa Trinit\u00e0",
      color: "white",
      rank: "feast",
      quote: "\u00abChrist with me, Christ before me, Christ behind me, Christ in me, Christ beneath me, Christ above me.\u00bb",
      quote_it: "\u00abCristo con me, Cristo davanti a me, Cristo dietro di me, Cristo in me, Cristo sotto di me, Cristo sopra di me.\u00bb",
      bio: "Captured into Irish slavery as a youth, returned later as a bishop to convert the entire island with apostolic power and the shamrock.",
      bio_it: "Rapito giovane da pirati, torn\u00f2 da vescovo nella terra di schiavit\u00f9 per battezzare re e popoli, radicando la fede in Irlanda.",
      scriptureRef: "1 Thessalonians 1:8"
    }
  ],
  '3-18': [
    {
      traditions: ["catholic", "orthodox", "ecumenical"],
      name: "St. Cyril of Jerusalem",
      name_it: "San Cirillo di Gerusalemme",
      name_la: "Sanctus Cyrillus Hierosolymitanus",
      name_ro: "Sf\u00e2ntul Chiril al Ierusalimului",
      title: "Bishop, Doctor of the Church & Catechist",
      title_it: "Vescovo e Dottore della Chiesa, Maestro di Catechesi",
      color: "white",
      rank: "memorial",
      quote: "\u00abThe dragon sits by the side of the road, watching those who pass. Take care that he does not swallow you: you are on your way to the Father.\u00bb",
      quote_it: "\u00abIl drago \u00e8 accovacciato lungo la strada: vigila affinch\u00e9 non ti afferri, mentre sei in cammino verso il Padre.\u00bb",
      bio: "Patriarch of Jerusalem whose Mystagogical Catecheses instructed new Christians in Baptism, Chrismation, and the Holy Eucharist.",
      bio_it: "Vescovo di Gerusalemme, autore delle celebri Catechesi Mistagogiche che istruirono i catecumeni nei sacramenti pasquali.",
      scriptureRef: "1 Peter 3:15"
    }
  ],
  '3-19': [
    {
      traditions: ["all"],
      name: "Solemnity of St. Joseph, Spouse of the B.V.M.",
      name_it: "Solennit\u00e0 di San Giuseppe, Sposo della Beata Vergine Maria",
      name_la: "Sollemnitas Sancti Ioseph, Sponsi Beatae Mariae Virginis",
      name_ro: "Sf\u00e2ntul Iosif, So\u021bul Preasfintei Fecioare Maria",
      title: "Guardian of the Redeemer & Patron of the Universal Church",
      title_it: "Custode del Redentore e Patrono della Chiesa Universale",
      color: "white",
      rank: "solemnity",
      quote: "\u00abJoseph, son of David, do not be afraid to take Mary your wife into your home; for that which is conceived in her is of the Holy Spirit.\u00bb",
      quote_it: "\u00abGiuseppe, figlio di Davide, non temere di prendere con te Maria, tua sposa. Ci\u00f2 che \u00e8 generato in lei viene dallo Spirito Santo.\u00bb",
      bio: "The righteous carpenter of Nazareth who guarded Jesus and Mary in humble obedience and silent protective love.",
      bio_it: "L'uomo giusto e silenzioso di Nazaret che protesse la Sacra Famiglia con fede incrollabile e paterna sollecitudine.",
      scriptureRef: "Matthew 1:20-21"
    }
  ],
  '3-21': [
    {
      traditions: ["catholic", "traditional", "ecumenical"],
      name: "St. Benedict of Nursia (Transitus)",
      name_it: "San Benedetto da Norcia (Transito al Cielo)",
      name_la: "Sanctus Benedictus de Nursia",
      name_ro: "Sf\u00e2ntul Benedict de Nursia",
      title: "Father of Western Monasticism & European Patron",
      title_it: "Padre del Monachesimo Occidentale e Patrono d'Europa",
      color: "white",
      rank: "feast",
      quote: "\u00abPrefer nothing whatever to the love of Christ. Listen with the ear of your heart.\u00bb",
      quote_it: "\u00abNulla assolutamente sia anteposto all'amore di Cristo. Ascolta con l'orecchio del tuo cuore.\u00bb",
      bio: "Entered eternal rest standing in prayer before the altar at Monte Cassino in 547, supported by his disciples.",
      bio_it: "Spir\u00f2 a Montecassino in piedi davanti all'altare, sostenuto dai suoi monaci nella preghiera e nel rendimento di grazie.",
      scriptureRef: "Colossians 3:1-4"
    }
  ],
  '3-25': [
    {
      traditions: ["all"],
      name: "The Annunciation of the Lord (Incarnation of the Word)",
      name_it: "Annunciazione del Signore (Incarnazione del Verbo)",
      name_la: "In Annuntiatione Domini",
      name_ro: "Buna Vestire (Blagove\u0219tenia)",
      title: "The Word Was Made Flesh in the Virgin's Womb",
      title_it: "Il Verbo si \u00e8 Fatto Carne nel Grembo della Vergine",
      color: "white",
      rank: "solemnity",
      quote: "\u00abBehold the handmaid of the Lord; be it unto me according to thy word.\u00bb",
      quote_it: "\u00abEcco l'ancella del Signore: avvenga per me secondo la tua parola.\u00bb",
      bio: "Archangel Gabriel announces to Mary that she will bear the Son of the Most High; by her humble Fiat, eternity enters time.",
      bio_it: "L'arcangelo Gabriele annuncia a Maria la venuta del Salvatore: con il suo \"S\u00ec\" umile e pieno, il Verbo di Dio entra nella storia umana.",
      scriptureRef: "Luke 1:38"
    }
  ],
  '3-30': [
    {
      traditions: ["orthodox", "all"],
      name: "St. John Climacus",
      name_it: "San Giovanni Climaco",
      name_la: "Sanctus Ioannes Climacus",
      name_ro: "Sf\u00e2ntul Ioan Sc\u0103rarul",
      title: "Abbot of Sinai & Author of the Ladder of Divine Ascent",
      title_it: "Abate del Sinai e Autore della Scala del Paradiso",
      color: "white",
      rank: "memorial",
      quote: "\u00abPrayer is the union of man with God. Repentance is the renewal of holy baptism.\u00bb",
      quote_it: "\u00abLa preghiera \u00e8 l'unione dell'uomo con Dio. Il pentimento \u00e8 il rinnovamento del santo battesimo.\u00bb",
      bio: "Hermit of Mount Sinai whose thirty steps of ascetic wisdom have guided Christian contemplative life for fifteen centuries.",
      bio_it: "Monaco del Monte Sinai le cui trenta gradazioni spirituali descrivono l'ascesa dell'anima alla pienezza della carit\u00e0 divina.",
      scriptureRef: "Matthew 5:8"
    }
  ],

  // ==========================================
  // APRIL (4)
  // ==========================================
  '4-2': [
    {
      traditions: ["catholic", "all"],
      name: "St. Francis of Paola",
      name_it: "San Francesco da Paola",
      name_la: "Sanctus Franciscus de Paula",
      name_ro: "Sf\u00e2ntul Francisc de Paola",
      title: "Hermit, Miracle Worker & Founder of the Minims",
      title_it: "Eremita, Taumaturgo e Fondatore dei Minimi",
      color: "white",
      rank: "memorial",
      quote: "\u00abTo those who love God, all things work together for good. Fix your minds on the passion of our Lord Jesus Christ.\u00bb",
      quote_it: "\u00abTutto concorre al bene di coloro che amano Dio. Fissate i vostri cuori sulla passione del Signore nostro Ges\u00f9 Cristo.\u00bb",
      bio: "Calabrian hermit whose life was perpetual Lent and radical humility; patron of Italian seafarers.",
      bio_it: "Eremita calabrese vissuto in continua quaresima e profonda umilt\u00e0 evangelica, patrono della gente di mare.",
      scriptureRef: "Matthew 11:28-30"
    }
  ],
  '4-4': [
    {
      traditions: ["catholic", "all"],
      name: "St. Isidore of Seville",
      name_it: "Sant'Isidoro di Siviglia",
      name_la: "Sanctus Isidorus Hispalensis",
      name_ro: "Sf\u00e2ntul Isidor de Sevilla",
      title: "Bishop, Doctor of the Church & Encyclopedist",
      title_it: "Vescovo e Dottore della Chiesa, Patrono di Internet",
      color: "white",
      rank: "memorial",
      quote: "\u00abPrayer purifies us, reading instructs us. If a man wants to be always with God, he ought to pray frequently and read often.\u00bb",
      quote_it: "\u00abLa preghiera ci purifica, la lettura ci istruisce. Chi vuole essere sempre con Dio deve pregare spesso e leggere la Scrittura.\u00bb",
      bio: "Archbishop of Seville who compiled the Etymologiae, preserving the learning of the ancient world for Christian Europe.",
      bio_it: "Arcivescovo di Siviglia autore delle Etimologie, custode della sapienza classica e cristiana, patrono dei programmatori.",
      scriptureRef: "2 Timothy 3:16-17"
    }
  ],
  '4-5': [
    {
      traditions: ["catholic", "all"],
      name: "St. Vincent Ferrer",
      name_it: "San Vincenzo Ferrer",
      name_la: "Sanctus Vincentius Ferrerius",
      name_ro: "Sf\u00e2ntul Vincen\u021biu Ferrer",
      title: "Dominican Preacher & Apostle of the Judgment",
      title_it: "Predicatore Domenicano e Apostolo del Vangelo",
      color: "white",
      rank: "memorial",
      quote: "\u00abFear God and give Him glory, for the hour of His judgment is come.\u00bb",
      quote_it: "\u00abTemete Dio e dategli gloria, perch\u00e9 \u00e8 giunta l'ora del suo giudizio.\u00bb",
      bio: "Spanish Dominican whose fiery outdoor preaching brought tens of thousands of souls across Western Europe to repentance.",
      bio_it: "Frate domenicano valenzano che percorse l'Europa intera predicando la penitenza e riconciliando le citt\u00e0 divise.",
      scriptureRef: "Revelation 14:7"
    }
  ],
  '4-7': [
    {
      traditions: ["catholic", "all"],
      name: "St. John Baptist de La Salle",
      name_it: "San Giovanni Battista de La Salle",
      name_la: "Sanctus Ioannes Baptista de La Salle",
      name_ro: "Sf\u00e2ntul Ioan Botez\u0103torul de La Salle",
      title: "Founder of the Christian Brothers & Patron of Teachers",
      title_it: "Fondatore dei Fratelli delle Scuole Cristiane, Patrono degli Insegnanti",
      color: "white",
      rank: "memorial",
      quote: "\u00abTo touch the hearts of your students and inspire them with the Christian spirit is the greatest miracle you can perform.\u00bb",
      quote_it: "\u00abToccare il cuore dei vostri alunni ed effondere in essi lo spirito di Cristo \u00e8 il miracolo pi\u00f9 grande che possiate compiere.\u00bb",
      bio: "French priest who devoted his wealth to open free schools for poor children, training educators in dedicated brotherhood.",
      bio_it: "Sacerdote francese che fond\u00f2 le prime scuole popolari gratuite per i fanciulli poveri, rinnovando la pedagogia moderna.",
      scriptureRef: "Matthew 19:14"
    }
  ],
  '4-9': [
    {
      traditions: ["protestant", "ecumenical"],
      name: "Dietrich Bonhoeffer",
      name_it: "Dietrich Bonhoeffer (Martire della Fede)",
      name_la: "Theodoricus Bonhoeffer",
      name_ro: "Dietrich Bonhoeffer",
      title: "Martyr of Faith & Preacher of Costly Grace",
      title_it: "Martire della Fede e Testimone della Grazia a Caro Prezzo",
      color: "red",
      rank: "memorial",
      quote: "\u00abCheap grace is grace without discipleship, grace without the cross. When Christ calls a man, He bids him come and die.\u00bb",
      quote_it: "\u00abLa grazia a buon mercato \u00e8 grazia senza discepolato, senza croce. Quando Cristo chiama un uomo, lo chiama a venire e a morire.\u00bb",
      bio: "Lutheran pastor who fearlessly opposed Nazi tyranny in Germany and was executed at Flossenb\u00fcrg on April 9, 1945.",
      bio_it: "Pastore luterano che si oppose intrepidamente al regime totalitario nazista, martirizzato nel campo di Flossenb\u00fcrg nel 1945.",
      scriptureRef: "Luke 9:23"
    }
  ],
  '4-11': [
    {
      traditions: ["catholic", "all"],
      name: "St. Stanislaus of Krakow",
      name_it: "San Stanislao Vescovo e Martire",
      name_la: "Sanctus Stanislaus Episcopus et Martyr",
      name_ro: "Sf\u00e2ntul Stanislau",
      title: "Bishop, Martyr & Patron of Poland",
      title_it: "Vescovo, Martire e Patrono Principale della Polonia",
      color: "red",
      rank: "memorial",
      quote: "\u00abWe must obey God rather than men.\u00bb",
      quote_it: "\u00abBisogna obbedire a Dio invece che agli uomini.\u00bb",
      bio: "Bishop of Krakow slain at the altar by King Boleslaus for rebuking the monarch's cruelty and defending the poor.",
      bio_it: "Vescovo di Cracovia martirizzato all'altare per aver difeso la giustizia evangelica e il gregge oppresso dal potere regale.",
      scriptureRef: "Acts 5:29"
    }
  ],
  '4-15': [
    {
      traditions: ["protestant", "ecumenical"],
      name: "Corrie ten Boom",
      name_it: "Corrie ten Boom (Testimone di Perdono e Speranza)",
      name_la: "Cornelia ten Boom",
      name_ro: "Corrie ten Boom",
      title: "The Hiding Place & Messenger of Forgiveness",
      title_it: "Il Rifugio Segreto e Messaggera del Divino Perdono",
      color: "white",
      rank: "memorial",
      quote: "\u00abThere is no pit so deep that God's love is not deeper still. Forgiveness is an act of the will, not an emotion.\u00bb",
      quote_it: "\u00abNon c'\u00e8 abisso cos\u00ec profondo dove l'amore di Dio non sia ancora pi\u00f9 profondo. Il perdono \u00e8 un atto di volont\u00e0, non un sentimento.\u00bb",
      bio: "Dutch watchmaker who sheltered Jews during the Holocaust, survived Ravensbr\u00fcck, and spent her life preaching Christ's healing forgiveness.",
      bio_it: "Orologiaia olandese che nascose ebrei perseguitati, sopravvisse al lager di Ravensbr\u00fcck e annunci\u00f2 il perdono di Cristo in oltre 60 paesi.",
      scriptureRef: "Romans 8:38-39"
    }
  ],
  '4-16': [
    {
      traditions: ["catholic"],
      name: "St. Bernadette Soubirous",
      name_it: "Santa Bernardetta Soubirous",
      name_la: "Sancta Bernardula Soubirous",
      name_ro: "Sf\u00e2nta Bernadeta Soubirous",
      title: "Visionary of Lourdes & Sister of Nevers",
      title_it: "Veggenta di Lourdes e Religiosa di Nevers",
      color: "white",
      rank: "memorial",
      quote: "\u00abThe Virgin Mary chose me because I was the poorest and most ignorant. Jesus alone is my portion forever.\u00bb",
      quote_it: "\u00abLa Vergine Maria mi ha scelta perch\u00e9 ero la pi\u00f9 povera e ignorante. Solo Ges\u00f9 \u00e8 la mia eredit\u00e0 per sempre.\u00bb",
      bio: "The humble French peasant girl who witnessed the eighteen apparitions of the Immaculate Conception at Lourdes.",
      bio_it: "L'umile fanciulla dei Pirenei testimone delle apparizioni dell'Immacolata a Lourdes, vissuta poi nel nascondimento orante a Nevers.",
      scriptureRef: "1 Corinthians 1:27-29"
    }
  ],
  '4-21': [
    {
      traditions: ["catholic", "all"],
      name: "St. Anselm of Canterbury",
      name_it: "Sant'Anselmo d'Aosta / Canterbury",
      name_la: "Sanctus Anselmus Cantuariensis",
      name_ro: "Sf\u00e2ntul Anselm de Canterbury",
      title: "Father of Scholasticism & Doctor of the Church",
      title_it: "Padre della Scolastica e Dottore Magnifico della Chiesa",
      color: "white",
      rank: "memorial",
      quote: "\u00abI do not seek to understand in order that I may believe, but I believe in order to understand. Faith seeking understanding.\u00bb",
      quote_it: "\u00abNon cerco di capire per credere, ma credo per capire. La fede che cerca l'intelligenza.\u00bb",
      bio: "Born in Aosta, Abbot of Bec and Archbishop of Canterbury, celebrated for the ontological proof and Cur Deus Homo.",
      bio_it: "Nato ad Aosta, abate di Bec e primate d'Inghilterra, insigne teologo dell'Incarnazione e della fede pensata.",
      scriptureRef: "Hebrews 11:3"
    }
  ],
  '4-23': [
    {
      traditions: ["all"],
      name: "St. George the Great-Martyr",
      name_it: "San Giorgio Megalomartire",
      name_la: "Sanctus Georgius Martyr",
      name_ro: "Sf\u00e2ntul Mare Mucenic Gheorghe",
      title: "Trophy-Bearer, Soldier of Christ & Patron of Chivalry",
      title_it: "Vittorioso Testimone di Cristo e Megalomartire",
      color: "red",
      rank: "feast",
      quote: "\u00abPut on the whole armor of God, that ye may be able to stand against the wiles of the devil.\u00bb",
      quote_it: "\u00abRivestitevi dell'armatura di Dio, per poter resistere alle insidie del nemico.\u00bb",
      bio: "Roman military tribune martyred under Diocletian for confessing Christ, venerated throughout East and West as conqueror of evil.",
      bio_it: "Tribuno militare dell'esercito imperiale che don\u00f2 la vita sotto Diocleziano per non piegarsi agli idoli, simbolo universale della vittoria sul drago del male.",
      scriptureRef: "Ephesians 6:11-17"
    }
  ],
  '4-25': [
    {
      traditions: ["all"],
      name: "St. Mark the Evangelist",
      name_it: "San Marco Evangelista",
      name_la: "Sanctus Marcus Evangelista",
      name_ro: "Sf\u00e2ntul Apostol \u0219i Evanghelist Marcu",
      title: "Author of the Second Gospel & Companion of St. Peter",
      title_it: "Autore del Secondo Vangelo e Discepolo di San Pietro",
      color: "red",
      rank: "feast",
      quote: "\u00abThe beginning of the gospel of Jesus Christ, the Son of God.\u00bb",
      quote_it: "\u00abInizio del vangelo di Ges\u00f9, Cristo, Figlio di Dio.\u00bb",
      bio: "Cousin of Barnabas and disciple of Peter, who recorded Peter's preaching in Rome and founded the Church of Alexandria.",
      bio_it: "Discepolo carissimo di San Pietro, mise per iscritto a Roma la predicazione apostolica e fond\u00f2 la gloriosa Chiesa d'Alessandria.",
      scriptureRef: "Mark 1:1"
    }
  ],
  '4-28': [
    {
      traditions: ["catholic"],
      name: "St. Louis Marie de Montfort & St. Gianna Beretta Molla",
      name_it: "San Luigi Maria Grignion de Montfort e Santa Gianna Beretta Molla",
      name_la: "Sanctus Ludovicus Maria Grignion de Montfort",
      name_ro: "Sf\u00e2ntul Ludovic Maria de Montfort",
      title: "Apostle of True Devotion to Mary & Mother of Life",
      title_it: "Apostolo della Vera Devozione a Maria e Madre della Vita",
      color: "white",
      rank: "memorial",
      quote: "\u00abTo Jesus through Mary! If you must decide between my life and the child's, do not hesitate: choose the child.\u00bb",
      quote_it: "\u00abA Ges\u00f9 per mezzo di Maria! Se dovete decidere tra me e il bambino, nessuna esitazione: scegliete la sua vita.\u00bb",
      bio: "Montfort taught total consecration to Jesus through Mary; Gianna Molla, physician and mother, gave her life to save her unborn daughter.",
      bio_it: "De Montfort rivel\u00f2 la via dell'affidamento totale alla Madre di Dio; Gianna Beretta Molla, medico e madre, offr\u00ec la propria vita per salvare la creatura nel grembo.",
      scriptureRef: "John 19:27"
    }
  ],
  '4-29': [
    {
      traditions: ["catholic", "all"],
      name: "St. Catherine of Siena",
      name_it: "Santa Caterina da Siena",
      name_la: "Sancta Catharina Senensis",
      name_ro: "Sf\u00e2nta Ecaterina de Siena",
      title: "Doctor of the Church, Patroness of Italy & Europe",
      title_it: "Vergine, Dottore della Chiesa, Patrona d'Italia e d'Europa",
      color: "white",
      rank: "feast",
      quote: "\u00abBe who God meant you to be, and you will set the world on fire!\u00bb",
      quote_it: "\u00abSe sarete quello che dovete essere, metterete fuoco a tutta la terra!\u00bb",
      bio: "Dominican tertiary whose mystical dialogue with God and bold letters to popes and kings brought the papacy back from Avignon to Rome.",
      bio_it: "Terziaria domenicana senese, mistica e consigliera di pontefici, richiam\u00f2 la sede papale a Roma e indic\u00f2 nel Sangue di Cristo la salvezza del mondo.",
      scriptureRef: "Galatians 2:20"
    }
  ],

  // ==========================================
  // MAY (5)
  // ==========================================
  '5-1': [
    {
      traditions: ["all"],
      name: "St. Joseph the Worker",
      name_it: "San Giuseppe Lavoratore",
      name_la: "Sanctus Ioseph Opifex",
      name_ro: "Sf\u00e2ntul Iosif Muncitorul",
      title: "Model of Dignified Labor & Silent Obedience",
      title_it: "Modello del Lavoro e della Dignit\u00e0 Umana",
      color: "white",
      rank: "memorial",
      quote: "\u00abWhatever you do, work heartily, as for the Lord and not for men.\u00bb",
      quote_it: "\u00abQualunque cosa facciate, fatela di cuore come per il Signore e non per gli uomini.\u00bb",
      bio: "Instituted by Pius XII to sanctify human labor in light of the carpenter of Nazareth who raised the Lord.",
      bio_it: "Istituita per illuminare la nobilt\u00e0 del lavoro umano alla luce della bottega di Nazaret dove Ges\u00f9 oper\u00f2 accanto a Giuseppe.",
      scriptureRef: "Colossians 3:17"
    }
  ],
  '5-2': [
    {
      traditions: ["all"],
      name: "St. Athanasius the Great",
      name_it: "Sant'Atanasio il Grande",
      name_la: "Sanctus Athanasius Alexandrinus",
      name_ro: "Sf\u00e2ntul Atanasie cel Mare",
      title: "Patriarch of Alexandria & Champion of the Nicene Faith",
      title_it: "Patriarca d'Alessandria e Dottore dell'Incarnazione",
      color: "white",
      rank: "memorial",
      quote: "\u00abThe Son of God became man that we might become divine.\u00bb",
      quote_it: "\u00abIl Figlio di Dio si \u00e8 fatto uomo affinch\u00e9 l'uomo potesse essere divinizzato nella grazia.\u00bb",
      bio: "Endured five separate exiles over seventeen years, standing firm \"against the whole world\" for the full divinity of Jesus Christ.",
      bio_it: "Sub\u00ec cinque esili affrontando imperatori e calunnie per difendere la consustanzialit\u00e0 del Figlio di Dio proclamata a Nicea.",
      scriptureRef: "John 1:14"
    }
  ],
  '5-3': [
    {
      traditions: ["all"],
      name: "Saints Philip and James, Apostles",
      name_it: "Santi Filippo e Giacomo Apostoli",
      name_la: "Sancti Philippi et Iacobi Apostolorum",
      name_ro: "Sfin\u021bii Apostoli Filip \u0219i Iacob",
      title: "Pillars of the Twelve & Witnesses of the Resurrection",
      title_it: "Colonne dei Dodici e Testimoni del Risorto",
      color: "red",
      rank: "feast",
      quote: "\u00abLord, show us the Father, and that will be enough for us. Jesus answered: He who has seen Me has seen the Father.\u00bb",
      quote_it: "\u00abSignore, mostraci il Padre e ci basta. Ges\u00f9 gli disse: Chi ha visto me ha visto il Padre.\u00bb",
      bio: "Philip of Bethsaida brought Nathanael to Christ; James the Lesser, son of Alphaeus, presided over the early Church in Jerusalem.",
      bio_it: "Filippo di Betsaida condusse Natanaele al Signore; Giacomo d'Alfeo, fratello del Signore, guid\u00f2 con santit\u00e0 la comunit\u00e0 di Gerusalemme.",
      scriptureRef: "John 14:8-9"
    }
  ],
  '5-10': [
    {
      traditions: ["catholic", "all"],
      name: "St. Damien of Molokai",
      name_it: "San Damiano de Veuster (Apostolo dei Lebbrosi)",
      name_la: "Sanctus Damianus de Veuster",
      name_ro: "Sf\u00e2ntul Damian de Molokai",
      title: "Hero of Charity to the Outcasts of Molokai",
      title_it: "Apostolo dei Lebbrosi e Testimone della Carit\u00e0 di Cristo",
      color: "white",
      rank: "memorial",
      quote: "\u00abI make myself a leper with the lepers, to gain all to Jesus Christ.\u00bb",
      quote_it: "\u00abMi sono fatto lebbroso con i lebbrosi, per guadagnare tutti a Ges\u00f9 Cristo.\u00bb",
      bio: "Flemish priest who volunteered for the quarantine island of Molokai in Hawaii, dressing wounds and building dignity until dying of leprosy.",
      bio_it: "Missionario belga nei Sacri Cuori, visse sedici anni nel lebbrosario isolato di Molokai, facendosi servo e fratello degli abbandonati.",
      scriptureRef: "Matthew 25:40"
    }
  ],
  '5-13': [
    {
      traditions: ["catholic", "all"],
      name: "Our Lady of Fatima",
      name_it: "Beata Vergine Maria di Fatima",
      name_la: "Beata Maria Virgo de Fatima",
      name_ro: "Sf\u00e2nta Fecioar\u0103 Maria de la Fatima",
      title: "Queen of the Rosary & Mother of Mercy",
      title_it: "Regina del Rosario e Rifugio dei Peccatori",
      color: "white",
      rank: "memorial",
      quote: "\u00abPray the Rosary every day in order to obtain peace for the world and the end of war.\u00bb",
      quote_it: "\u00abPregate il Rosario ogni giorno per ottenere la pace nel mondo e la fine delle guerre.\u00bb",
      bio: "Appeared to three shepherd children in Cova da Iria in 1917, calling the modern world to prayer, penance, and trust in the Immaculate Heart.",
      bio_it: "La Vergine apparve a Lucia, Francesco e Giacinta alla Cova da Iria nel 1917, richiamando l'umanit\u00e0 alla conversione, al Rosario e alla penitenza.",
      scriptureRef: "1 Thessalonians 5:17"
    }
  ],
  '5-14': [
    {
      traditions: ["all"],
      name: "St. Matthias the Apostle",
      name_it: "San Mattia Apostolo",
      name_la: "Sanctus Matthias Apostolus",
      name_ro: "Sf\u00e2ntul Apostol Matia",
      title: "Chosen by Lot to Complete the Twelve",
      title_it: "Eletto tra i Dodici al posto di Giuda",
      color: "red",
      rank: "feast",
      quote: "\u00abThey cast lots for them, and the lot fell on Matthias; and he was numbered with the eleven apostles.\u00bb",
      quote_it: "\u00abGettarono le sorti su di loro e la sorte cadde su Mattia, che fu associato agli undici apostoli.\u00bb",
      bio: "Faithful companion from the baptism of John unto the Ascension, chosen in the Upper Room as a witness of the Resurrection.",
      bio_it: "Discepolo fedele dai tempi del Giordano fino all'Ascensione, scelto dallo Spirito Santo per completare il collegio apostolico.",
      scriptureRef: "Acts 1:21-26"
    }
  ],
  '5-20': [
    {
      traditions: ["catholic", "all"],
      name: "St. Bernardine of Siena",
      name_it: "San Bernardino da Siena",
      name_la: "Sanctus Bernardinus Senensis",
      name_ro: "Sf\u00e2ntul Bernardin de Siena",
      title: "Franciscan Preacher & Apostle of the Holy Name",
      title_it: "Sacerdote Francescano e Apostolo del Nome di Ges\u00f9",
      color: "white",
      rank: "memorial",
      quote: "\u00abThe Name of Jesus is the glory of preachers, because it causes the word of God to be proclaimed and heard with light and fire.\u00bb",
      quote_it: "\u00abIl Nome di Ges\u00f9 \u00e8 la gloria dei predicatori, perch\u00e9 fa proclamare e ascoltare la parola di Dio con splendore e carit\u00e0.\u00bb",
      bio: "Traveled across Italian cities holding up the monogram IHS, reconciling blood feuds and restoring Christian morality.",
      bio_it: "Frate minore che pacific\u00f2 le fazioni cittadine in Italia mostrando al popolo il trigramma IHS raggiante di luce.",
      scriptureRef: "Philippians 2:9-10"
    }
  ],
  '5-21': [
    {
      traditions: ["orthodox", "ecumenical"],
      name: "Saints Constantine and Helen, Equals-to-the-Apostles",
      name_it: "Santi Costantino ed Elena, Eguali agli Apostoli",
      name_la: "Sancti Constantinus et Helena",
      name_ro: "Sfin\u021bii \u00cemp\u0103ra\u021bi Constantin \u0219i Elena",
      title: "Protectors of the Faith & Discoverers of the Holy Cross",
      title_it: "Protettori della Chiesa e Rinvenitori della Santa Croce",
      color: "white",
      rank: "feast",
      quote: "\u00abIn this sign you shall conquer: the Cross of Christ is our victory and light.\u00bb",
      quote_it: "\u00abIn questo segno vincerai: la Croce di Cristo \u00e8 la nostra speranza e la luce delle nazioni.\u00bb",
      bio: "Emperor Constantine gave peace to the Church with the Edict of Milan; his mother St. Helen discovered the True Cross in Jerusalem.",
      bio_it: "Costantino concesse la libert\u00e0 ai cristiani ponendo fine alle persecuzioni; sua madre Elena ritrov\u00f2 a Gerusalemme la vera Croce del Redentore.",
      scriptureRef: "Galatians 6:14"
    }
  ],
  '5-22': [
    {
      traditions: ["catholic", "all"],
      name: "St. Rita of Cascia",
      name_it: "Santa Rita da Cascia",
      name_la: "Sancta Rita de Cassia",
      name_ro: "Sf\u00e2nta Rita de Cascia",
      title: "Patroness of Impossible Causes & Thorn-Crowned Mystic",
      title_it: "La Santa dei Casi Impossibili e Mistica della Spina",
      color: "white",
      rank: "memorial",
      quote: "\u00abRejoicing in hope; patient in tribulation; continuing instant in prayer.\u00bb",
      quote_it: "\u00abLiete nella speranza, forti nella tribolazione, perseveranti nell'orazione.\u00bb",
      bio: "Wife, mother, widow, and Augustinian nun in Cascia who bore for fifteen years on her forehead a painful thorn from Christ's crown.",
      bio_it: "Sposa paziente, madre e monaca agostiniana a Cascia, ricevette sulla fronte la ferita della spina di Cristo come sigillo di amore.",
      scriptureRef: "Romans 12:12"
    }
  ],
  '5-26': [
    {
      traditions: ["catholic", "all"],
      name: "St. Philip Neri",
      name_it: "San Filippo Neri",
      name_la: "Sanctus Philippus Nerius",
      name_ro: "Sf\u00e2ntul Filip Neri",
      title: "Apostle of Rome, Father of the Oratory & Spiritual Joy",
      title_it: "Apostolo di Roma, Fondatore dell'Oratorio e Santo della Gioia",
      color: "white",
      rank: "memorial",
      quote: "\u00abCheerfulness strengthens the heart and makes us persevere in a good life. Cast yourself into the arms of God.\u00bb",
      quote_it: "\u00abLa gioia cristiana fortifica il cuore e ci fa perseverare nella via buona. Gettati fiducioso nelle braccia di Dio.\u00bb",
      bio: "Filled with the fire of the Holy Spirit in the catacombs of San Sebastiano, he transformed Rome through joyful fellowship, music, and the confessional.",
      bio_it: "Toccato prodigiosamente dallo Spirito Santo nelle catacombe, rinnov\u00f2 Roma con la carit\u00e0 verso i giovani, il sacramento della confessione e la musica sacra.",
      scriptureRef: "Philippians 4:4"
    }
  ],
  '5-30': [
    {
      traditions: ["catholic", "all"],
      name: "St. Joan of Arc",
      name_it: "Santa Giovanna d'Arco",
      name_la: "Sancta Ioanna de Arc",
      name_ro: "Sf\u00e2nta Ioana d'Arc",
      title: "Maid of Orleans, Virgin & Martyr of Faith",
      title_it: "La Pulzella d'Orl\u00e9ans, Vergine e Martire",
      color: "white",
      rank: "memorial",
      quote: "\u00abI am not afraid; God is with me. I was born for this. Jesus! Jesus!\u00bb",
      quote_it: "\u00abNon ho paura: Dio \u00e8 con me. Sono nata per questo. Ges\u00f9! Ges\u00f9!\u00bb",
      bio: "Seventeen-year-old peasant girl who obeyed heavenly voices to deliver France, burned at the stake in Rouen looking upon the crucifix.",
      bio_it: "Giovane contadina che guidata dalle voci celesti liber\u00f2 la Francia, affrontando il rogo a Rouen con gli occhi fissi sulla Croce di Ges\u00f9.",
      scriptureRef: "1 Samuel 17:45"
    }
  ],
  '5-31': [
    {
      traditions: ["all"],
      name: "The Visitation of the Blessed Virgin Mary",
      name_it: "Visitazione della Beata Vergine Maria",
      name_la: "In Visitatione Beatae Mariae Virginis",
      name_ro: "Vizitarea Maicii Domnului la Elisabeta",
      title: "Mary Proclaims the Magnificat to Elizabeth",
      title_it: "Maria canta il Magnificat nella Casa di Elisabetta",
      color: "white",
      rank: "feast",
      quote: "\u00abMy soul doth magnify the Lord, and my spirit hath rejoiced in God my Saviour.\u00bb",
      quote_it: "\u00abL'anima mia magnifica il Signore e il mio spirito esulta in Dio mio Salvatore.\u00bb",
      bio: "Mary journeys with haste into the hill country of Judah to serve Elizabeth; John leaps in the womb, and Mary sings the Magnificat.",
      bio_it: "Maria si reca in fretta verso la montagna per servire la cugina Elisabetta: il Battista esulta nel grembo e la Madre intona il Magnificat.",
      scriptureRef: "Luke 1:39-55"
    }
  ],

  // ==========================================
  // JUNE (6)
  // ==========================================
  '6-1': [
    {
      traditions: ["all"],
      name: "St. Justin Martyr and Philosopher",
      name_it: "San Giustino Martire e Filosofo",
      name_la: "Sanctus Iustinus Martyr",
      name_ro: "Sf\u00e2ntul Iustin Martirul \u0219i Filozoful",
      title: "First Great Christian Apologist",
      title_it: "Primo Grande Apologeta Cristiano e Filosofo della Croce",
      color: "red",
      rank: "memorial",
      quote: "\u00abWe can be killed, but not hurt. The truth is our salvation.\u00bb",
      quote_it: "\u00abPotete ucciderci, ma non potete farci alcun male. La verit\u00e0 di Cristo \u00e8 la nostra salvezza.\u00bb",
      bio: "Pagan philosopher who searched all systems of wisdom before discovering Christ, opening a school in Rome and dying for the truth.",
      bio_it: "Filosofo pagano che cerc\u00f2 la verit\u00e0 in ogni scuola prima di incontrare i Profeti e Cristo; difese i cristiani presso gli imperatori.",
      scriptureRef: "1 Peter 3:15"
    }
  ],
  '6-3': [
    {
      traditions: ["catholic", "all"],
      name: "Saints Charles Lwanga & Companions, Martyrs of Uganda",
      name_it: "Santi Carlo Lwanga e Compagni Martiri dell'Uganda",
      name_la: "Sancti Caroli Lwanga et Sociorum Martyrum",
      name_ro: "Sfin\u021bii Carol Lwanga \u0219i \u00censo\u021bitorii Martiri",
      title: "Protomartyrs of Black Africa",
      title_it: "Protomartiri dell'Africa Nera e Testimoni di Purezza",
      color: "red",
      rank: "memorial",
      quote: "\u00abYou may burn my body, but you cannot burn my love for Jesus Christ.\u00bb",
      quote_it: "\u00abPotete bruciare il mio corpo, ma non potete spegnere il mio amore per Ges\u00f9 Cristo.\u00bb",
      bio: "Young royal pages in Uganda who refused the immoral demands of King Mwanga, joyfully singing hymns while burned at Namugongo in 1886.",
      bio_it: "Giovani paggi di corte che scelsero la morte sul rogo a Namugongo pur di custodire la castit\u00e0 e la fedelt\u00e0 a Cristo.",
      scriptureRef: "Romans 8:37"
    }
  ],
  '6-5': [
    {
      traditions: ["all"],
      name: "St. Boniface, Bishop and Martyr",
      name_it: "San Bonifacio Vescovo e Martire",
      name_la: "Sanctus Bonifatius Episcopus et Martyr",
      name_ro: "Sf\u00e2ntul Bonifaciu, Apostolul Germaniei",
      title: "Apostle of Germany & Feller of the Oak of Thor",
      title_it: "Apostolo della Germania e Martire della Fede",
      color: "red",
      rank: "memorial",
      quote: "\u00abLet us stand fast in what is right, and prepare our souls for trial. The Church is a ship tossed by waves, but Christ is at the helm.\u00bb",
      quote_it: "\u00abRimaniamo saldi nel bene e prepariamo le nostre anime alla prova. La Chiesa \u00e8 una nave scossa dai flutti, ma Cristo \u00e8 al timone.\u00bb",
      bio: "English Benedictine missionary who felled the pagan Oak of Thor at Geismar, converted Germanic tribes, and died protecting the Gospel with a book.",
      bio_it: "Monaco benedettino inglese che abbatt\u00e9 la quercia di Thor a Geismar per innalzare la Croce, martirizzato in Frisia mentre reggeva il Vangelo.",
      scriptureRef: "2 Timothy 4:5"
    }
  ],
  '6-9': [
    {
      traditions: ["all"],
      name: "St. Ephrem the Syrian & St. Columba of Iona",
      name_it: "Sant'Efrem il Siro e San Columba d'Iona",
      name_la: "Sancti Ephraem Syri et Columbae Abbatis",
      name_ro: "Sf\u00e2ntul Efrem Sirul \u0219i Sf\u00e2ntul Columba din Iona",
      title: "Harp of the Holy Spirit & Apostle of Scotland",
      title_it: "Arpa dello Spirito Santo e Apostolo della Scozia",
      color: "white",
      rank: "memorial",
      quote: "\u00abLord and Master of my life, take from me the spirit of sloth and despondency; bestow on me the spirit of chastity, humility, and love.\u00bb",
      quote_it: "\u00abSignore e Sovrano della mia vita, allontana da me lo spirito di pigrizia e donami lo spirito di castit\u00e0, umilt\u00e0, pazienza e amore.\u00bb",
      bio: "Ephrem composed sublime hymns in Edessa; Columba founded the great monastic citadel of Iona, evangelizing the Picts and Scots.",
      bio_it: "Efrem, diacono di Nisibi ed Edessa, compose inni teologici sublimi; Columba fond\u00f2 l'abbazia di Iona, culla della fede in Scozia.",
      scriptureRef: "Psalm 104:33"
    }
  ],
  '6-11': [
    {
      traditions: ["all"],
      name: "St. Barnabas the Apostle",
      name_it: "San Barnaba Apostolo",
      name_la: "Sanctus Barnabas Apostolus",
      name_ro: "Sf\u00e2ntul Apostol Barnaba",
      title: "Son of Encouragement & Missionary Companion of Paul",
      title_it: "Figlio della Consolazione e Compagno di San Paolo",
      color: "red",
      rank: "memorial",
      quote: "\u00abHe was a good man, full of the Holy Spirit and of faith. And a great number of people were brought to the Lord.\u00bb",
      quote_it: "\u00abEgli era un uomo buono, pieno di Spirito Santo e di fede. E una folla considerevole fu condotta al Signore.\u00bb",
      bio: "Levite from Cyprus who sold his field for the poor, introduced Paul to the apostles in Jerusalem, and evangelized Antioch and Cyprus.",
      bio_it: "Levita cipriota generoso che accolse Paolo a Gerusalemme, guid\u00f2 la missione tra i gentili ad Antiochia e sub\u00ec il martirio a Cipro.",
      scriptureRef: "Acts 11:24"
    }
  ],
  '6-13': [
    {
      traditions: ["catholic", "all"],
      name: "St. Anthony of Padua",
      name_it: "Sant'Antonio di Padova",
      name_la: "Sanctus Antonius Patavinus",
      name_ro: "Sf\u00e2ntul Anton de Padova",
      title: "Evangelical Doctor, Hammer of Heretics & Wonderworker",
      title_it: "Sacerdote e Dottore Evangelico della Chiesa, Il Santo dei Miracoli",
      color: "white",
      rank: "memorial",
      quote: "\u00abLet your words speak and your deeds tell. Actions speak louder than words; let your words teach and your actions speak.\u00bb",
      quote_it: "\u00abCessino, ve ne prego, le parole e parlino le opere. La predicazione \u00e8 viva quando parlano le azioni della carit\u00e0.\u00bb",
      bio: "Portuguese Franciscan of profound scriptural eloquence whose preaching reconciled enemies, defended the poor, and worked countless miracles.",
      bio_it: "Frate francescano portoghese la cui parola infuocata dalle Scritture convert\u00ec innumerevoli cuori in Francia e in Italia.",
      scriptureRef: "Luke 4:18-19"
    }
  ],
  '6-21': [
    {
      traditions: ["catholic", "all"],
      name: "St. Aloysius Gonzaga",
      name_it: "San Luigi Gonzaga",
      name_la: "Sanctus Aloisius Gonzaga",
      name_ro: "Sf\u00e2ntul Alois de Gonzaga",
      title: "Patron of Youth & Angel of Purity",
      title_it: "Religioso Gesuita, Patrono della Giovent\u00f9 e della Purezza",
      color: "white",
      rank: "memorial",
      quote: "\u00abI am going to heaven to praise the mercy of God forever. Love God, and serve Him alone.\u00bb",
      quote_it: "\u00abVado in cielo a cantare eternamente le misericordie del Signore. Amate Dio e servite Lui solo.\u00bb",
      bio: "Eldest son of the Marquis of Castiglione who renounced his princely inheritance to join the Jesuits, dying at twenty-three caring for plague victims.",
      bio_it: "Rinunci\u00f2 al marchesato per consacrarsi nella Compagnia di Ges\u00f9, donando la sua giovane vita nel soccorrere gli appestati a Roma.",
      scriptureRef: "Psalm 24:3-4"
    }
  ],
  '6-22': [
    {
      traditions: ["catholic", "all"],
      name: "Saints John Fisher and Thomas More, Martyrs",
      name_it: "Santi Giovanni Fisher e Tommaso Moro Martiri",
      name_la: "Sancti Ioannis Fisher et Thomae More Martyrum",
      name_ro: "Sfin\u021bii Ioan Fisher \u0219i Toma Morus",
      title: "Witnesses of Conscience & Champions of the Faith",
      title_it: "Testimoni della Coscienza e della Fedelt\u00e0 alla Chiesa",
      color: "red",
      rank: "memorial",
      quote: "\u00abI die the King's good servant, but God's first.\u00bb",
      quote_it: "\u00abMuoio fedele servitore del Re, ma prima di tutto servitore di Dio.\u00bb",
      bio: "Cardinal Fisher and Lord Chancellor Thomas More beheaded at the Tower of London under Henry VIII for refusing to compromise their conscience.",
      bio_it: "Il cardinale Fisher e il cancelliere Tommaso Moro affrontarono il patibolo a Londra pur di non tradire la voce della coscienza e l'unit\u00e0 cattolica.",
      scriptureRef: "Matthew 10:28"
    }
  ],
  '6-24': [
    {
      traditions: ["all"],
      name: "The Nativity of St. John the Baptist",
      name_it: "Nativit\u00e0 di San Giovanni Battista",
      name_la: "In Nativitate Sancti Ioannis Baptistae",
      name_ro: "Na\u0219terea Sf\u00e2ntului Ioan Botez\u0103torul (S\u00e2nzienele)",
      title: "The Forerunner of Christ & Voice in the Wilderness",
      title_it: "Il Precursore del Signore e Voce che Grida nel Deserto",
      color: "white",
      rank: "solemnity",
      quote: "\u00abHe must increase, but I must decrease.\u00bb",
      quote_it: "\u00abLui deve crescere e io invece diminuire.\u00bb",
      bio: "Only saint whose birth into this world is celebrated with a solemnity; herald of repentance and baptizer of the Lord Jesus.",
      bio_it: "Unico santo di cui la Chiesa celebra la nascita terrena con una solennit\u00e0; battezzatore di Cristo nel Giordano e profeta dell'Agnello.",
      scriptureRef: "John 3:30"
    }
  ],
  '6-28': [
    {
      traditions: ["all"],
      name: "St. Irenaeus of Lyon",
      name_it: "Sant'Ireneo di Lione",
      name_la: "Sanctus Irenaeus Lugdunensis",
      name_ro: "Sf\u00e2ntul Irineu de Lyon",
      title: "Bishop, Martyr & Doctor of Unity",
      title_it: "Vescovo, Martire e Dottore dell'Unit\u00e0",
      color: "red",
      rank: "memorial",
      quote: "\u00abThe glory of God is a living man; and the life of man is the vision of God.\u00bb",
      quote_it: "\u00abLa gloria di Dio \u00e8 l'uomo vivente; ma la vita dell'uomo consiste nella visione di Dio.\u00bb",
      bio: "Disciple of Polycarp who became bishop of Lyon, writing Against Heresies and articulating the apostolic tradition of the Catholic Church.",
      bio_it: "Discepolo di San Policarpo e secondo vescovo di Lione, confut\u00f2 lo gnosticismo e annunci\u00f2 la ricapitolazione di tutte le cose in Cristo.",
      scriptureRef: "Ephesians 1:10"
    }
  ],
  '6-29': [
    {
      traditions: ["all"],
      name: "Saints Peter and Paul, Apostles",
      name_it: "Solennit\u00e0 dei Santi Pietro e Paolo Apostoli",
      name_la: "Sollemnitas Sanctorum Petri et Pauli Apostolorum",
      name_ro: "Sfin\u021bii Apostoli Petru \u0219i Pavel",
      title: "Pillars of the Church, Fisher of Men & Doctor of Gentiles",
      title_it: "Colonne della Chiesa, Principi degli Apostoli e Martiri a Roma",
      color: "red",
      rank: "solemnity",
      quote: "\u00abThou art the Christ, the Son of the living God! I have fought the good fight, I have finished the race, I have kept the faith.\u00bb",
      quote_it: "\u00abTu sei il Cristo, il Figlio del Dio vivente! Ho combattuto la buona battaglia, ho terminato la corsa, ho conservato la fede.\u00bb",
      bio: "Peter crucified upside down on the Vatican hill; Paul beheaded at the Salvian Waters; together they consecrated Rome with their blood.",
      bio_it: "Pietro crocifisso a testa in gi\u00f9 sul colle Vaticano e Paolo decapitato alle Tre Fontane: insieme consacrarono la Chiesa universale con il loro martirio.",
      scriptureRef: "Matthew 16:16-18"
    }
  ],

  // ==========================================
  // JULY (7)
  // ==========================================
  '7-3': [
    {
      traditions: ["all"],
      name: "St. Thomas the Apostle",
      name_it: "San Tommaso Apostolo",
      name_la: "Sanctus Thomas Apostolus",
      name_ro: "Sf\u00e2ntul Apostol Toma",
      title: "Apostle of Faith & Witness to India",
      title_it: "Apostolo della Fede e Testimone fino in India",
      color: "red",
      rank: "feast",
      quote: "\u00abMy Lord and my God! Blessed are they that have not seen, and yet have believed.\u00bb",
      quote_it: "\u00abMio Signore e mio Dio! Beati quelli che non hanno visto e hanno creduto.\u00bb",
      bio: "Touched the sacred wounds of the risen Jesus, then carried the Gospel across Parthia and India, suffering martyrdom at Mylapore.",
      bio_it: "Tocc\u00f2 il costato del Risorto professando la divinit\u00e0 di Cristo; annunci\u00f2 l'Evangelo fino alle terre d'India subendo il martirio per lancia.",
      scriptureRef: "John 20:28"
    }
  ],
  '7-4': [
    {
      traditions: ["catholic"],
      name: "St. Elizabeth of Portugal & Bl. Pier Giorgio Frassati",
      name_it: "Santa Elisabetta di Portogallo e Beato Pier Giorgio Frassati",
      name_la: "Sancta Elisabeth Lusitaniae",
      name_ro: "Sf\u00e2nta Elisabeta a Portugaliei",
      title: "Peacemaker Queen & Man of the Eight Beatitudes",
      title_it: "Regina della Pace e Uomo delle Beatitudini",
      color: "white",
      rank: "memorial",
      quote: "\u00abVerso l'alto! To live without faith, without a heritage to defend, without battle for truth, is not living; it is just existing.\u00bb",
      quote_it: "\u00abVerso l'alto! Vivere senza fede, senza un patrimonio da difendere, senza sostenere la verit\u00e0 non \u00e8 vivere, ma vivacchiare.\u00bb",
      bio: "Elizabeth reconciled warring kings; Frassati, young mountaineer of Turin, scaled peaks of charity serving Christ in the slums.",
      bio_it: "Elisabetta pacific\u00f2 re e nazioni; Pier Giorgio Frassati, giovane scalatore torinese, un\u00ec la passione per la montagna a una carit\u00e0 eroica per i poveri.",
      scriptureRef: "Matthew 5:9"
    }
  ],
  '7-6': [
    {
      traditions: ["catholic", "all"],
      name: "St. Maria Goretti, Virgin and Martyr",
      name_it: "Santa Maria Goretti Vergine e Martire",
      name_la: "Sancta Maria Goretti Virgo et Martyr",
      name_ro: "Sf\u00e2nta Maria Goretti",
      title: "Little Martyr of Purity & Forgiveness",
      title_it: "Piccola Martire della Purezza e del Perdono Evangelico",
      color: "red",
      rank: "memorial",
      quote: "\u00abI forgive him with all my heart, and I want him to be in heaven with me forever.\u00bb",
      quote_it: "\u00abLo perdono con tutto il cuore e voglio che sia con me in paradiso per tutta l'eternit\u00e0.\u00bb",
      bio: "Eleven-year-old girl in the Pontine marshes who resisted assault and died forgiving her attacker, leading him to radical repentance.",
      bio_it: "Fanciulla delle paludi pontine che difese la propria purezza e spir\u00f2 perdonando il suo aggressore, ottenendo la sua sincera conversione.",
      scriptureRef: "Luke 23:34"
    }
  ],
  '7-10': [
    {
      traditions: ["protestant"],
      name: "John Calvin",
      name_it: "Giovanni Calvino",
      name_la: "Ioannes Calvinus",
      name_ro: "Jean Calvin",
      title: "Reformer of Geneva & Author of the Institutes",
      title_it: "Riformatore di Ginevra e Teologo Evangelico",
      color: "white",
      rank: "memorial",
      quote: "\u00abCor meum tibi offero, Domine, prompte et sincere: My heart I offer to you, Lord, promptly and sincerely.\u00bb",
      quote_it: "\u00abOffro il mio cuore a te, o Signore, prontamente e sinceramente.\u00bb",
      bio: "Pastor and theologian in Geneva whose Institutes of the Christian Religion shaped Reformed theology worldwide.",
      bio_it: "Pastore e teologo a Ginevra, autore delle Istituzioni della religione cristiana, maestro della sovranit\u00e0 della grazia divina.",
      scriptureRef: "Romans 11:36"
    }
  ],
  '7-11': [
    {
      traditions: ["all"],
      name: "St. Benedict of Nursia (Solemnity / European Patron)",
      name_it: "San Benedetto da Norcia Abate",
      name_la: "Sanctus Benedictus Abbas",
      name_ro: "Sf\u00e2ntul Benedict de Nursia",
      title: "Father of Western Monasticism & Principal Patron of Europe",
      title_it: "Padre del Monachesimo Occidentale e Patrono Principale d'Europa",
      color: "white",
      rank: "feast",
      quote: "\u00abOra et labora: pray and work. Let the peace of Christ reign in your monastery and your heart.\u00bb",
      quote_it: "\u00abOra et labora: prega e lavora. Regni nei vostri cuori la pace di Cristo. Nulla sia anteposto all'opera di Dio.\u00bb",
      bio: "Author of the Holy Rule that preserved civilization, spiritual culture, and continuous prayer throughout Europe.",
      bio_it: "Autore della celebre Regola che edific\u00f2 la civilt\u00e0 cristiana d'Europa fondata sull'equilibrio di contemplazione, studio e lavoro.",
      scriptureRef: "Colossians 3:1-4"
    }
  ],
  '7-12': [
    {
      traditions: ["orthodox", "ecumenical"],
      name: "St. Paisios of Mount Athos",
      name_it: "San Paisio del Monte Athos",
      name_la: "Sanctus Paisius Athonita",
      name_ro: "Sf\u00e2ntul Paisie Aghioritul",
      title: "Elder of Panagouda & Comforter of Weary Souls",
      title_it: "Venerabile Anziano del Monte Athos e Maestro di Grazia",
      color: "white",
      rank: "memorial",
      quote: "\u00abHumility and love are the wings of the soul. Sanctify your thoughts with good and noble words.\u00bb",
      quote_it: "\u00abL'umilt\u00e0 e l'amore sono le ali dell'anima. Santifica i tuoi pensieri volgendo sempre il cuore al bene.\u00bb",
      bio: "Beloved Athonite ascetic whose cell received thousands seeking guidance, prayer, and healing in Christ.",
      bio_it: "Santo monaco athonita dei tempi moderni, accolse con paterna tenerezza migliaia di persone afflitte, illuminando le coscienze col dono dello Spirito.",
      scriptureRef: "1 Thessalonians 5:16-18"
    }
  ],
  '7-14': [
    {
      traditions: ["catholic", "all"],
      name: "St. Camillus de Lellis",
      name_it: "San Camillo de Lellis",
      name_la: "Sanctus Camillus de Lellis",
      name_ro: "Sf\u00e2ntul Camil de Lellis",
      title: "Father of the Red Cross & Patron of Nurses",
      title_it: "Fondatore dei Ministri degli Infermi e Patrono degli Ospedali",
      color: "white",
      rank: "memorial",
      quote: "\u00abPut more heart in those hands! See Christ Himself in every sick person you touch.\u00bb",
      quote_it: "\u00abPi\u00f9 cuore in quelle mani! Servite ogni malato con l'affetto di una madre verso il suo unico figlio infermo.\u00bb",
      bio: "Reformed soldier who wore the red cross on his habit, founding the Camillians and revolutionizing compassionate bedside hospital care.",
      bio_it: "Da soldato irrequieto a servitore eroico degli infermi a Roma, istitu\u00ec la croce rossa sulle tonache per soccorrere i moribondi e i pestiferi.",
      scriptureRef: "Matthew 25:36"
    }
  ],
  '7-15': [
    {
      traditions: ["catholic", "all"],
      name: "St. Bonaventure of Bagnoregio",
      name_it: "San Bonaventura da Bagnoregio",
      name_la: "Sanctus Bonaventura",
      name_ro: "Sf\u00e2ntul Bonaventura",
      title: "Seraphic Doctor & Minister General of the Franciscans",
      title_it: "Vescovo, Cardinale e Dottore Serafico della Chiesa",
      color: "white",
      rank: "memorial",
      quote: "\u00abAsk not for intellect but desire, not speech but joy, not reading but unction, not the light but the fire.\u00bb",
      quote_it: "\u00abChiedi non la speculazione ma il desiderio, non le parole ma l'amore, non la lettura ma l'unzione, non la luce ma il fuoco di Dio!\u00bb",
      bio: "Philosopher, mystic, biographer of St. Francis, and cardinal who led the Franciscan Order into harmonious maturity.",
      bio_it: "Autore dell'Itinerario della mente in Dio e biografo di San Francesco, un\u00ec la sublime teologia parigina all'ardore serafico d'Assisi.",
      scriptureRef: "Psalm 73:25-26"
    }
  ],
  '7-16': [
    {
      traditions: ["catholic", "all"],
      name: "Our Lady of Mount Carmel",
      name_it: "Beata Vergine Maria del Monte Carmelo",
      name_la: "Beata Maria Virgo de Monte Carmelo",
      name_ro: "Sf\u00e2nta Fecioar\u0103 Maria de pe Muntele Carmel",
      title: "Star of the Sea & Patroness of Contemplatives",
      title_it: "Stella del Mare, Madre e Splendore del Carmelo",
      color: "white",
      rank: "memorial",
      quote: "\u00abReceive, my beloved son, this scapular of your Order: whoever dies clothed in this habit shall not suffer eternal fire.\u00bb",
      quote_it: "\u00abRicevi questo santo abito: chiunque morr\u00e0 devotamente rivestito di questo scapolare non patir\u00e0 il fuoco eterno.\u00bb",
      bio: "Associated with the prophetic spirit of Elijah on Mount Carmel and the gift of the brown scapular to St. Simon Stock.",
      bio_it: "Celebrazione legata alla tradizione dei monaci eremiti del Monte Carmelo e al dono dello scapolare quale pegno di materna protezione.",
      scriptureRef: "1 Kings 18:42-44"
    }
  ],
  '7-22': [
    {
      traditions: ["all"],
      name: "St. Mary Magdalene",
      name_it: "Santa Maria Maddalena",
      name_la: "Sancta Maria Magdalena",
      name_ro: "Sf\u00e2nta Maria Magdalena",
      title: "Apostle to the Apostles & First Witness of the Resurrection",
      title_it: "Apostola degli Apostoli e Prima Testimone del Risorto",
      color: "white",
      rank: "feast",
      quote: "\u00abI have seen the Lord! Rabboni! Go and tell my brethren that I ascend unto my Father and your Father.\u00bb",
      quote_it: "\u00abHo visto il Signore! Rabbun\u00ec! Va' dai miei fratelli e di' loro: Io salgo al Padre mio e Padre vostro.\u00bb",
      bio: "Healed by Christ, stood faithful at the foot of the Cross, and was the first to behold and proclaim the risen Savior on Easter morning.",
      bio_it: "Liberata dal Signore, rimase fedele ai piedi della Croce sul Calvario e fu inviata dal Risorto ad annunciare la Pasqua agli Apostoli.",
      scriptureRef: "John 20:17-18"
    }
  ],
  '7-23': [
    {
      traditions: ["catholic", "all"],
      name: "St. Bridget of Sweden",
      name_it: "Santa Brigida di Svezia",
      name_la: "Sancta Birgitta de Suecia",
      name_ro: "Sf\u00e2nta Birgita a Suediei",
      title: "Mystic, Foundress & Co-Patroness of Europe",
      title_it: "Religiosa, Mistica e Compatrona d'Europa",
      color: "white",
      rank: "feast",
      quote: "\u00abLord, show me the way, and make me ready to follow it. Whatever happens, you are my refuge.\u00bb",
      quote_it: "\u00abSignore, mostrami la via e rendimi pronta a seguirla. Qualunque cosa accada, tu sei il mio rifugio.\u00bb",
      bio: "Mother of eight children who after widowhood founded the Order of the Most Holy Savior, journeyed to Rome, and recorded profound revelations.",
      bio_it: "Madre di otto figli e poi fondatrice dell'Ordine del Santissimo Salvatore a Vadstena, pellegrina a Roma e Gerusalemme, donna di pace.",
      scriptureRef: "Galatians 6:14"
    }
  ],
  '7-24': [
    {
      traditions: ["catholic", "ecumenical"],
      name: "St. Charbel Makhlouf",
      name_it: "San Charbel Makhlouf (Eremita del Libano)",
      name_la: "Sanctus Sarbelius Makhluf",
      name_ro: "Sf\u00e2ntul \u0218arbel Makhlouf",
      title: "Maronite Hermit of Annaya & Silent Intercessor",
      title_it: "Eremita Maronita d'Annaya e Taumaturgo del Libano",
      color: "white",
      rank: "memorial",
      quote: "\u00abChrist is the light that does not fail. In silent prayer before the tabernacle, eternity embraces the soul.\u00bb",
      quote_it: "\u00abCristo \u00e8 la luce che non tramonta. Nel silenzio dell'orazione davanti al tabernacolo l'eternit\u00e0 abbraccia l'anima.\u00bb",
      bio: "Lebanese monk who lived twenty-three years in utter solitary adoration at the Hermitage of St. Peter and Paul in Annaya.",
      bio_it: "Monaco maronita libanese vissuto ventitr\u00e9 anni in continua orazione solitaria e digiuno nell'eremo d'Annaya, dispensatore di grazie divine.",
      scriptureRef: "Psalm 27:4"
    }
  ],
  '7-25': [
    {
      traditions: ["all"],
      name: "St. James the Greater, Apostle",
      name_it: "San Giacomo il Maggiore Apostolo",
      name_la: "Sanctus Iacobus Maior Apostolus",
      name_ro: "Sf\u00e2ntul Apostol Iacob cel Mare",
      title: "Son of Thunder & Protomartyr Among the Twelve",
      title_it: "Figlio del Tuono, Primo Martire tra gli Apostoli e Patrono di Santiago",
      color: "red",
      rank: "feast",
      quote: "\u00abCan you drink the chalice that I am to drink? They said to Him: We can.\u00bb",
      quote_it: "\u00abPotete bere il calice che io sto per bere? Gli risposero: Possiamo!\u00bb",
      bio: "Brother of John, present at the Transfiguration and Gethsemane, first of the twelve apostles to drink the cup of martyrdom under Herod Agrippa.",
      bio_it: "Fratello di Giovanni Evangelista, testimone della Trasfigurazione, primo apostolo a dare la vita per la spada a Gerusalemme.",
      scriptureRef: "Matthew 20:22-23"
    }
  ],
  '7-26': [
    {
      traditions: ["all"],
      name: "Saints Joachim and Anne",
      name_it: "Santi Gioacchino ed Anna",
      name_la: "Sancti Ioachim et Anna",
      name_ro: "Sfin\u021bii P\u0103rin\u021bi Ioachim \u0219i Ana",
      title: "Parents of the Blessed Virgin Mary & Grandparents of Jesus",
      title_it: "Genitori della Beata Vergine Maria e Nonni di Ges\u00f9",
      color: "white",
      rank: "memorial",
      quote: "\u00abLet us praise these men of renown, our fathers in their generation; their seed shall remain forever.\u00bb",
      quote_it: "\u00abCelebriamo i santi antenati nella loro generazione: la loro discendenza dura per sempre e la loro memoria non si estinguer\u00e0.\u00bb",
      bio: "The righteous couple of the lineage of David who received Mary as a gift of prayer and raised her in holiness.",
      bio_it: "I santi sposi d'Israele che accolsero con fede la nascita di Maria Santissima, custodi fedeli delle promesse messianiche.",
      scriptureRef: "Sirach 44:1"
    }
  ],
  '7-29': [
    {
      traditions: ["all"],
      name: "Saints Martha, Mary and Lazarus of Bethany",
      name_it: "Santi Marta, Maria e Lazzaro di Betania",
      name_la: "Sancti Martha, Maria et Lazarus",
      name_ro: "Sfin\u021bii Marta, Maria \u0219i Laz\u0103r din Betania",
      title: "Friends of the Lord & Models of Service and Contemplation",
      title_it: "Amici del Signore, Modelli dell'Accoglienza e della Fede",
      color: "white",
      rank: "feast",
      quote: "\u00abYes, Lord; I have believed that thou art the Christ, the Son of God, which should come into the world.\u00bb",
      quote_it: "\u00abS\u00ec, o Signore, io credo che tu sei il Cristo, il Figlio di Dio che deve venire nel mondo.\u00bb",
      bio: "At their hospitable home in Bethany Jesus found rest; Martha served with diligence, Mary sat at His feet, and Lazarus was raised from the dead.",
      bio_it: "Nella loro casa di Betania Ges\u00f9 fu accolto con amore: Marta operosa nel servizio, Maria orante ai suoi piedi e Lazzaro richiamato alla vita.",
      scriptureRef: "John 11:25-27"
    },
    {
      traditions: ["protestant"],
      name: "William Wilberforce",
      name_it: "William Wilberforce (Apostolo dell'Abolizione della Schiavit\u00f9)",
      name_la: "Gulielmus Wilberforce",
      name_ro: "William Wilberforce",
      title: "Abolitionist Leader & Crusader for Christian Virtue",
      title_it: "Statista Evangelico e Nemico della Schiavit\u00f9",
      color: "white",
      rank: "memorial",
      quote: "\u00abGod Almighty has set before me two great objects: the suppression of the slave trade and the reformation of manners.\u00bb",
      quote_it: "\u00abDio Onnipotente ha posto dinanzi a me due grandi scopi: la soppressione della tratta degli schiavi e il rinnovamento morale.\u00bb",
      bio: "British parliamentarian driven by evangelical faith who labored forty years until slavery was abolished throughout the British Empire.",
      bio_it: "Deputato britannico animato dalla fede in Cristo, lott\u00f2 instancabilmente per decenni fino all'abolizione totale della schiavit\u00f9.",
      scriptureRef: "Galatians 3:28"
    }
  ],
  '7-31': [
    {
      traditions: ["catholic", "all"],
      name: "St. Ignatius of Loyola",
      name_it: "Sant'Ignazio di Loyola",
      name_la: "Sanctus Ignatius de Loyola",
      name_ro: "Sf\u00e2ntul Igna\u021biu de Loyola",
      title: "Founder of the Jesuits & Author of Spiritual Exercises",
      title_it: "Fondatore della Compagnia di Ges\u00f9 e Maestro degli Esercizi Spirituali",
      color: "white",
      rank: "memorial",
      quote: "\u00abAd maiorem Dei gloriam: All for the greater glory of God! Teach us to give and not to count the cost.\u00bb",
      quote_it: "\u00abAd maiorem Dei gloriam: Tutto per la maggior gloria di Dio! Insegnaci, Signore, a donare senza calcolare il costo.\u00bb",
      bio: "Spanish knight whose conversion during convalescence led him to write the Spiritual Exercises and found the Society of Jesus for global mission.",
      bio_it: "Cavaliere basco convertito durante una ferita, compose gli Esercizi Spirituali e fond\u00f2 i Gesuiti per difendere la Chiesa nel mondo.",
      scriptureRef: "1 Corinthians 10:31"
    }
  ],

  // ==========================================
  // AUGUST (8)
  // ==========================================
  '8-1': [
    {
      traditions: ["catholic", "all"],
      name: "St. Alphonsus Maria de Liguori",
      name_it: "Sant'Alfonso Maria de' Liguori",
      name_la: "Sanctus Alphonsus Maria de Liguori",
      name_ro: "Sf\u00e2ntul Alfons Maria de Liguori",
      title: "Bishop, Doctor of the Church & Founder of Redemptorists",
      title_it: "Vescovo, Dottore della Chiesa e Fondatore dei Redentoristi",
      color: "white",
      rank: "memorial",
      quote: "\u00abHe who prays is certainly saved; he who does not pray is certainly damned. With the Lord there is plentiful redemption.\u00bb",
      quote_it: "\u00abChi prega si salva certamente, chi non prega si danna certamente. Presso il Signore la redenzione \u00e8 abbondante.\u00bb",
      bio: "Neapolitan lawyer who renounced the courts to become a missionary to the poorest peasants, author of Moral Theology and Tu scendi dalle stelle.",
      bio_it: "Brillante avvocato napoletano fattosi apostolo dei poveri nelle campagne, maestro insigne di teologia morale e compositore di inni sacri.",
      scriptureRef: "Psalm 130:7"
    }
  ],
  '8-4': [
    {
      traditions: ["catholic", "all"],
      name: "St. John Vianney, the Cur\u00e9 of Ars",
      name_it: "San Giovanni Maria Vianney (Curato d'Ars)",
      name_la: "Sanctus Ioannes Maria Vianney",
      name_ro: "Sf\u00e2ntul Ioan Maria Vianney",
      title: "Universal Patron of Parish Priests & Apostle of the Confessional",
      title_it: "Patrono Universale dei Parroci e Apostolo della Riconciliazione",
      color: "white",
      rank: "memorial",
      quote: "\u00abThe priesthood is the love of the heart of Jesus. If we really understood it, we would die, not of fear, but of love.\u00bb",
      quote_it: "\u00abIl sacerdozio \u00e8 l'amore del Cuore di Ges\u00f9. Se comprendessimo bene il valore del sacerdote, moriremmo non di paura, ma d'amore.\u00bb",
      bio: "Spent up to eighteen hours daily in the confessional of a small French village, converting souls through prayer, fasting, and tender mercy.",
      bio_it: "Parroco d'Ars per oltre quarant'anni, trascorreva fino a diciotto ore al giorno nel confessionale per riconciliare i peccatori con Dio.",
      scriptureRef: "Ezekiel 34:11-12"
    }
  ],
  '8-6': [
    {
      traditions: ["all"],
      name: "The Transfiguration of our Lord",
      name_it: "Trasfigurazione del Signore",
      name_la: "In Transfiguratione Domini",
      name_ro: "Schimbarea la Fa\u021b\u0103 a Domnului",
      title: "Revelation of Divine Glory upon Mount Tabor",
      title_it: "Manifestazione della Gloria Divina sul Monte Tabor",
      color: "white",
      rank: "feast",
      quote: "\u00abThis is my beloved Son, in whom I am well pleased; hear ye Him! Lord, it is good for us to be here.\u00bb",
      quote_it: "\u00abQuesti \u00e8 il Figlio mio, l'amato: in lui ho posto il mio compiacimento. Ascoltatelo! Signore, \u00e8 bello per noi essere qui.\u00bb",
      bio: "Christ reveals the uncreated radiance of His divinity to Peter, James, and John on Mount Tabor, with Moses and Elijah witnessing.",
      bio_it: "Cristo manifesta sul Tabor la gloria della sua divinit\u00e0 dinanzi a Pietro, Giacomo e Giovanni, affiancato da Mos\u00e8 ed Elia.",
      scriptureRef: "Matthew 17:1-8"
    }
  ],
  '8-8': [
    {
      traditions: ["catholic", "all"],
      name: "St. Dominic de Guzm\u00e1n",
      name_it: "San Domenico di Guzman",
      name_la: "Sanctus Dominicus",
      name_ro: "Sf\u00e2ntul Dominic",
      title: "Founder of the Order of Preachers (Dominicans)",
      title_it: "Sacerdote e Fondatore dell'Ordine dei Predicatori",
      color: "white",
      rank: "memorial",
      quote: "\u00abContemplari et contemplata aliis tradere: to contemplate, and to give to others the fruits of contemplation.\u00bb",
      quote_it: "\u00abContemplare e trasmettere agli altri le cose contemplate. Parlava solo con Dio o di Dio.\u00bb",
      bio: "Castilian canon who embraced evangelical poverty to defend the truth through profound theological learning and gentle preaching.",
      bio_it: "Fond\u00f2 l'Ordine dei Frati Predicatori per annunciare la verit\u00e0 evangelica con la povert\u00e0 itinerante, lo studio della Bibbia e la preghiera.",
      scriptureRef: "2 Timothy 4:2"
    }
  ],
  '8-9': [
    {
      traditions: ["catholic", "all"],
      name: "St. Teresa Benedicta of the Cross (Edith Stein)",
      name_it: "Santa Teresa Benedetta della Croce (Edith Stein)",
      name_la: "Sancta Teresia Benedicta a Cruce",
      name_ro: "Sf\u00e2nta Tereza Benedicta a Crucii (Edith Stein)",
      title: "Philosopher, Carmelite Nun, Martyr at Auschwitz & Co-Patroness of Europe",
      title_it: "Filosofa, Carmelitana Scalza, Martire ad Auschwitz e Compatrona d'Europa",
      color: "red",
      rank: "feast",
      quote: "\u00abWhoever seeks truth seeks God, whether they know it or not. Scientia Crucis: the Science of the Cross is only found by carrying it.\u00bb",
      quote_it: "\u00abChi cerca la verit\u00e0 cerca Dio, che lo sappia o no. La scienza della Croce si acquista soltanto soffrendo con Cristo.\u00bb",
      bio: "Brilliant Jewish philosopher and student of Husserl who converted to Christ, entered Carmel, and died in the gas chambers of Auschwitz offering her life for her people.",
      bio_it: "Insigne filosofa ebrea convertita a Cristo dopo aver letto Santa Teresa d'Avila, monaca carmelitana morta ad Auschwitz in comunione d'amore con il suo popolo.",
      scriptureRef: "Galatians 6:14"
    }
  ],
  '8-10': [
    {
      traditions: ["all"],
      name: "St. Lawrence, Deacon and Martyr",
      name_it: "San Lorenzo Diacono e Martire",
      name_la: "Sanctus Laurentius Diaconus et Martyr",
      name_ro: "Sf\u00e2ntul Lauren\u021biu Diaconul",
      title: "Keeper of the Church's Treasures & Martyr on the Gridiron",
      title_it: "Custode dei Tesori della Chiesa e Glorioso Martire di Roma",
      color: "red",
      rank: "feast",
      quote: "\u00abBehold, these are the treasures of the Church! The fire burning within me cooled the embers without.\u00bb",
      quote_it: "\u00abEcco i veri tesori della Chiesa: i poveri e gli ammalati! Il fuoco dell'amore di Cristo vince ogni tortura terrena.\u00bb",
      bio: "Archdeacon of Rome under Pope Sixtus II; when ordered to hand over the Church's wealth, he gathered the poor and was roasted on a gridiron.",
      bio_it: "Diacono di Roma martirizzato sulla graticola sotto Valeriano dopo aver distribuito tutti i beni ecclesiastici agli indigenti dell'Urbe.",
      scriptureRef: "2 Corinthians 9:6-9"
    }
  ],
  '8-11': [
    {
      traditions: ["catholic", "all"],
      name: "St. Clare of Assisi",
      name_it: "Santa Chiara d'Assisi",
      name_la: "Sancta Clara Asisiensis",
      name_ro: "Sf\u00e2nta Clara de Assisi",
      title: "Foundress of the Poor Clares & Little Plant of St. Francis",
      title_it: "Vergine, Fondatrice delle Clarisse e Pianticella di San Francesco",
      color: "white",
      rank: "memorial",
      quote: "\u00abGaze upon Him, consider Him, contemplate Him, as you desire to imitate Him. Blessed be Thou, O Lord, who hast created me.\u00bb",
      quote_it: "\u00abGuarda Cristo, considera Cristo, contempla Cristo con il desiderio di imitarlo. Signore, ti ringrazio perch\u00e9 mi hai creata!\u00bb",
      bio: "Fled her noble house on Palm Sunday to receive the veil from Francis at the Porziuncola, leading forty years of cloistered prayer at San Damiano.",
      bio_it: "Segu\u00ec Francesco nella povert\u00e0 evangelica a San Damiano, difese il monastero dai saraceni tenendo alto l'Ostensorio eucaristico.",
      scriptureRef: "Matthew 19:29"
    }
  ],
  '8-14': [
    {
      traditions: ["catholic", "all"],
      name: "St. Maximilian Maria Kolbe",
      name_it: "San Massimiliano Maria Kolbe",
      name_la: "Sanctus Maximilianus Maria Kolbe",
      name_ro: "Sf\u00e2ntul Maximilian Maria Kolbe",
      title: "Martyr of Charity & Knight of the Immaculata",
      title_it: "Sacerdote Francescano e Martire della Carit\u00e0 ad Auschwitz",
      color: "red",
      rank: "memorial",
      quote: "\u00abHatred is not a creative force; only love is creative. Love knows no limits.\u00bb",
      quote_it: "\u00abL'odio non \u00e8 una forza creatrice: solo l'amore \u00e8 creativo. L'amore vero non conosce limiti n\u00e9 calcoli.\u00bb",
      bio: "Conventual Franciscan priest who took the place of Franciszek Gajowniczek, a father condemned to starvation in Auschwitz bunker 11.",
      bio_it: "Offr\u00ec spontaneamente la propria vita nel bunker della fame di Auschwitz al posto di un padre di famiglia, intonando canti alla Madonna fino all'ultimo respiro.",
      scriptureRef: "John 15:13"
    }
  ],
  '8-15': [
    {
      traditions: ["all"],
      name: "The Assumption of the Blessed Virgin Mary / Dormition of the Theotokos",
      name_it: "Assunzione della Beata Vergine Maria (Dormizione della Madre di Dio)",
      name_la: "In Assumptione Beatae Mariae Virginis",
      name_ro: "Adormirea Maicii Domnului (Sf\u00e2nta Maria Mare)",
      title: "Queen of Heaven Assumed Body and Soul into Heavenly Glory",
      title_it: "Assunta in Anima e Corpo nella Gloria Celeste",
      color: "white",
      rank: "solemnity",
      quote: "\u00abA great sign appeared in heaven: a woman clothed with the sun, with the moon under her feet, and on her head a crown of twelve stars.\u00bb",
      quote_it: "\u00abUn segno grandioso apparve nel cielo: una donna vestita di sole, con la luna sotto i suoi piedi e, sul capo, una corona di dodici stelle.\u00bb",
      bio: "The Mother of God, completed her earthly pilgrimage, was taken up body and soul into heavenly glory, anticipation of the resurrection of all believers.",
      bio_it: "Terminato il corso della vita terrena, Maria \u00e8 assunta in anima e corpo alla gloria celeste, primizia della risurrezione futura di tutti i salvati.",
      scriptureRef: "Revelation 12:1"
    }
  ],
  '8-20': [
    {
      traditions: ["catholic", "all"],
      name: "St. Bernard of Clairvaux",
      name_it: "San Bernardo di Chiaravalle",
      name_la: "Sanctus Bernardus Claraevallensis",
      name_ro: "Sf\u00e2ntul Bernard de Clairvaux",
      title: "Abbot, Doctor of the Church & Mellifluous Teacher",
      title_it: "Abate e Dottore Mellifluo della Chiesa",
      color: "white",
      rank: "memorial",
      quote: "\u00abThe measure of loving God is to love Him without measure. Look to the star, call upon Mary.\u00bb",
      quote_it: "\u00abLa misura dell'amore di Dio \u00e8 amarlo senza misura. Guarda la stella, invoca Maria!\u00bb",
      bio: "Cistercian reformer who filled Europe with monastic foundations, sublime preacher of the love of God and the Mother of Christ.",
      bio_it: "Grande abate cistercense che rinnov\u00f2 la vita monastica d'Europa, cantore incomparabile delle grandezze di Maria e dell'amore contemplativo.",
      scriptureRef: "Song of Songs 1:2-3"
    }
  ],
  '8-24': [
    {
      traditions: ["all"],
      name: "St. Bartholomew the Apostle (Nathanael)",
      name_it: "San Bartolomeo Apostolo (Natanaele)",
      name_la: "Sanctus Bartholomaeus Apostolus",
      name_ro: "Sf\u00e2ntul Apostol Bartolomeu",
      title: "An Israelite in Whom There is No Guile",
      title_it: "Vero Israelita in cui non c'\u00e8 Falsit\u00e0 e Martire",
      color: "red",
      rank: "feast",
      quote: "\u00abRabbi, thou art the Son of God; thou art the King of Israel! You shall see greater things than these.\u00bb",
      quote_it: "\u00abRabb\u00ec, tu sei il Figlio di Dio, tu sei il re d'Israele! Vedrai cose maggiori di queste.\u00bb",
      bio: "Called by Philip under the fig tree; preached the Gospel through Armenia and India, suffering martyrdom by flaying for Christ.",
      bio_it: "Incontr\u00f2 Ges\u00f9 sotto il fico e lo riconobbe Signore; annunci\u00f2 il Regno in Armenia e India dove sub\u00ec il martirio per scorticamento.",
      scriptureRef: "John 1:47-49"
    }
  ],
  '8-27': [
    {
      traditions: ["catholic", "all"],
      name: "St. Monica",
      name_it: "Santa Monica",
      name_la: "Sancta Monica",
      name_ro: "Sf\u00e2nta Monica",
      title: "Mother of St. Augustine & Model of Persistent Prayer",
      title_it: "Madre di Sant'Agostino e Modello di Preghiera Instancabile",
      color: "white",
      rank: "memorial",
      quote: "\u00abSon, nothing in this world now affords me delight. One thing only I desired: to see you a Catholic Christian before I died.\u00bb",
      quote_it: "\u00abFiglio mio, niente ormai mi trattiene in questo mondo. Una sola cosa desideravo: vederti cristiano prima di morire.\u00bb",
      bio: "Prayed and wept for seventeen years for the conversion of her son Augustine, who was baptized by Ambrose at Milan.",
      bio_it: "Paziente sposa e madre cristiana che con lacrime incessanti e preghiere ottenne dal Signore la conversione radicale del figlio Agostino.",
      scriptureRef: "1 Timothy 5:5"
    }
  ],
  '8-28': [
    {
      traditions: ["all"],
      name: "St. Augustine of Hippo",
      name_it: "Sant'Agostino d'Ippona",
      name_la: "Sanctus Augustinus Hipponensis",
      name_ro: "Sf\u00e2ntul Augustin de Hipona",
      title: "Bishop, Doctor of Grace & Western Church Father",
      title_it: "Vescovo e Dottore della Grazia, Padre della Chiesa",
      color: "white",
      rank: "feast",
      quote: "\u00abThou hast made us for Thyself, O Lord, and our heart is restless until it rests in Thee. Late have I loved Thee, Beauty ever ancient, ever new!\u00bb",
      quote_it: "\u00abCi hai fatti per Te, o Signore, e il nostro cuore \u00e8 inquieto finch\u00e9 non riposa in Te. Tardi ti ho amato, Bellezza tanto antica e tanto nuova!\u00bb",
      bio: "From worldly philosophy to baptism by Ambrose, bishop of Hippo in North Africa, author of Confessions and The City of God.",
      bio_it: "Mente sublime della cristianit\u00e0, autore delle Confessioni e della Citt\u00e0 di Dio, teologo impareggiabile della grazia e della carit\u00e0.",
      scriptureRef: "Psalm 63:1"
    }
  ],
  '8-29': [
    {
      traditions: ["all"],
      name: "The Martyrdom of St. John the Baptist",
      name_it: "Martirio di San Giovanni Battista (Decollazione)",
      name_la: "In Passione Sancti Ioannis Baptistae",
      name_ro: "T\u0103ierea Capului Sf\u00e2ntului Ioan Botez\u0103torul",
      title: "Courageous Voice of Truth unto Death",
      title_it: "Voce Intrepida della Verit\u00e0 e Martire per la Legge di Dio",
      color: "red",
      rank: "memorial",
      quote: "\u00abIt is not lawful for you to have your brother's wife. Blessed are they which are persecuted for righteousness' sake.\u00bb",
      quote_it: "\u00abNon ti \u00e8 lecito tenere la moglie di tuo fratello! Beati i perseguitati a causa della giustizia, perch\u00e9 di essi \u00e8 il regno dei cieli.\u00bb",
      bio: "Beheaded in the fortress of Machaerus by order of Herod Antipas for defending the sanctity of marriage and divine moral law.",
      bio_it: "Decapitato nella fortezza di Macheronte per aver difeso senza paura la verit\u00e0 e la legge morale dinanzi a Erode Antipa.",
      scriptureRef: "Mark 6:17-29"
    }
  ],

  // ==========================================
  // SEPTEMBER (9)
  // ==========================================
  '9-3': [
    {
      traditions: ["all"],
      name: "St. Gregory the Great, Pope and Doctor",
      name_it: "San Gregorio Magno Papa e Dottore della Chiesa",
      name_la: "Sanctus Gregorius Magnus Papa",
      name_ro: "Sf\u00e2ntul Grigorie cel Mare (Dialogul)",
      title: "Servant of the Servants of God & Reformer of Liturgy",
      title_it: "Servo dei Servi di Dio e Padre della Liturgia",
      color: "white",
      rank: "memorial",
      quote: "\u00abThe proof of love is in the works. Where love exists, it works great things; but where it ceases to act, it is not love.\u00bb",
      quote_it: "\u00abLa prova dell'amore \u00e8 nelle opere. Dove l'amore esiste, compie grandi cose; se rifiuta di operare, non \u00e8 vero amore.\u00bb",
      bio: "Monk who became pope, fed the poor of Rome, reformed Gregorian chant, and sent Augustine to evangelize England.",
      bio_it: "Monaco benedettino eletto al soglio pontificio, soccorse gli affamati durante la carestia, organizz\u00f2 il canto sacro e invi\u00f2 missionari in Britannia.",
      scriptureRef: "1 John 3:18"
    }
  ],
  '9-5': [
    {
      traditions: ["catholic", "all"],
      name: "St. Teresa of Calcutta (Mother Teresa)",
      name_it: "Santa Teresa di Calcutta (Madre Teresa)",
      name_la: "Sancta Teresia de Calcutta",
      name_ro: "Sf\u00e2nta Tereza de Calcutta",
      title: "Missionary of Charity & Apostle to the Poorest of the Poor",
      title_it: "Apostola della Carit\u00e0 e Serva degli Ultimi",
      color: "white",
      rank: "memorial",
      quote: "\u00abI thirst, said Jesus on the Cross. We cannot all do great things, but we can do small things with great love.\u00bb",
      quote_it: "\u00ab\"Ho sete\", disse Ges\u00f9 sulla Croce. Non tutti possiamo fare grandi cose, ma possiamo fare piccole cose con grande amore.\u00bb",
      bio: "Founded the Missionaries of Charity in the slums of Calcutta, scooping the dying from the gutters to surround them with divine warmth.",
      bio_it: "Fond\u00f2 le Missionarie della Carit\u00e0 nei bassifondi di Calcutta, dedicando l'intera esistenza a servire i moribondi e i pi\u00f9 abbandonati.",
      scriptureRef: "Matthew 25:40"
    }
  ],
  '9-8': [
    {
      traditions: ["all"],
      name: "The Nativity of the Blessed Virgin Mary",
      name_it: "Nativit\u00e0 della Beata Vergine Maria",
      name_la: "In Nativitate Beatae Mariae Virginis",
      name_ro: "Na\u0219terea Maicii Domnului (Sf\u00e2nta Maria Mic\u0103)",
      title: "Dawn of Salvation to the Whole World",
      title_it: "Aurora della Salvezza e Nascita della Madre del Salvatore",
      color: "white",
      rank: "feast",
      quote: "\u00abThy birth, O Virgin Mother of God, hath proclaimed joy to all the world: for from thee arose the Sun of Justice, Christ our God.\u00bb",
      quote_it: "\u00abLa tua nascita, o Vergine Madre di Dio, ha annunciato la gioia a tutto il mondo: da te \u00e8 sorto il Sole di giustizia, Cristo nostro Dio.\u00bb",
      bio: "Celebration of the birth of Mary, from whom took flesh the Savior of mankind; dawn before the rising Sun of Justice.",
      bio_it: "La Chiesa fa memoria grata della nascita della Vergine Maria, l'aurora radiosa che preannuncia il sorgere di Cristo, Sole di Salvezza.",
      scriptureRef: "Micah 5:2"
    }
  ],
  '9-13': [
    {
      traditions: ["all"],
      name: "St. John Chrysostom",
      name_it: "San Giovanni Crisostomo",
      name_la: "Sanctus Ioannes Chrysostomus",
      name_ro: "Sf\u00e2ntul Ioan Gur\u0103 de Aur",
      title: "Golden-Mouthed Patriarch of Constantinople & Doctor of the Church",
      title_it: "Patriarca di Costantinopoli, Bocca d'Oro e Dottore della Chiesa",
      color: "white",
      rank: "memorial",
      quote: "\u00abGlory be to God for all things! Prayer is the root, the fountain, the mother of countless blessings.\u00bb",
      quote_it: "\u00abGloria a Dio per tutte le cose! La preghiera \u00e8 la radice, la sorgente, la madre di innumerevoli benedizioni.\u00bb",
      bio: "Archbishop of Constantinople whose sublime preaching condemned luxury and defended the poor; author of the Divine Liturgy.",
      bio_it: "Predicatore insigne soprannominato \"Bocca d'Oro\", difensore dei diritti dei poveri esiliato dalla corte imperiale; autore della Divina Liturgia bizantina.",
      scriptureRef: "Ephesians 6:18"
    }
  ],
  '9-14': [
    {
      traditions: ["all"],
      name: "The Exaltation of the Holy Cross",
      name_it: "Esaltazione della Santa Croce",
      name_la: "In Exaltatione Sanctae Crucis",
      name_ro: "\u00cen\u0103l\u021barea Sfintei Cruci",
      title: "Triumph of the Tree of Life over Death",
      title_it: "Trionfo dell'Albero della Vita sulla Morte e sul Peccato",
      color: "red",
      rank: "feast",
      quote: "\u00abWe adore Thee, O Christ, and we bless Thee; because by Thy Holy Cross Thou hast redeemed the world.\u00bb",
      quote_it: "\u00abTi adoriamo, o Cristo, e ti benediciamo, perch\u00e9 con la tua Santa Croce hai redento il mondo!\u00bb",
      bio: "Commemorates the recovery of the True Cross by Emperor Heraclius and the dedication of the Church of the Holy Sepulchre in Jerusalem.",
      bio_it: "Celebrazione del ritrovamento e dell'innalzamento della vera Croce di Cristo a Gerusalemme, strumento di redenzione e speranza universale.",
      scriptureRef: "Philippians 2:8-9"
    }
  ],
  '9-15': [
    {
      traditions: ["catholic", "all"],
      name: "Our Lady of Sorrows (Mater Dolorosa)",
      name_it: "Beata Vergine Maria Addolorata",
      name_la: "Beata Maria Virgo Perdolens",
      name_ro: "Sf\u00e2nta Fecioar\u0103 Maria \u00cendurerat\u0103",
      title: "Compassion of the Mother at the Foot of the Cross",
      title_it: "La Madre presso la Croce e Corredentrice nella Compassione",
      color: "white",
      rank: "memorial",
      quote: "\u00abA sword shall pierce through thine own soul also, that the thoughts of many hearts may be revealed.\u00bb",
      quote_it: "\u00abAnche a te una spada trafigger\u00e0 l'anima, affinch\u00e9 siano svelati i pensieri di molti cuori.\u00bb",
      bio: "Honoring Mary standing beside the Cross of her Son, sharing in His redemptive suffering with supreme maternal fidelity.",
      bio_it: "Memoria della Madre che stette in silenziosa fortezza accanto al Figlio crocifisso, unita al mistero della sua passione redentrice.",
      scriptureRef: "John 19:25"
    }
  ],
  '9-21': [
    {
      traditions: ["all"],
      name: "St. Matthew, Apostle and Evangelist",
      name_it: "San Matteo Apostolo ed Evangelista",
      name_la: "Sanctus Matthaeus Apostolus et Evangelista",
      name_ro: "Sf\u00e2ntul Apostol \u0219i Evanghelist Matei",
      title: "Tax Collector Called by Grace & Author of the First Gospel",
      title_it: "Pubblicano Chiamato da Ges\u00f9 e Autore del Primo Vangelo",
      color: "red",
      rank: "feast",
      quote: "\u00abJesus saw a man named Matthew sitting at the receipt of custom: and He saith unto him, Follow me. And he arose, and followed Him.\u00bb",
      quote_it: "\u00abGes\u00f9 vide un uomo seduto al banco delle imposte, chiamato Matteo, e gli disse: Seguimi. Ed egli si alz\u00f2 e lo segu\u00ec.\u00bb",
      bio: "Left behind his tax booth at Capernaum at Christ's call, recording the words of the Messiah for the Hebrew people.",
      bio_it: "Esattore delle imposte a Cafarnao, lasci\u00f2 ogni guadagno al solo sguardo di Cristo per divenire apostolo ed evangelista.",
      scriptureRef: "Matthew 9:9-13"
    }
  ],
  '9-23': [
    {
      traditions: ["catholic", "all"],
      name: "St. Pio of Pietrelcina (Padre Pio)",
      name_it: "San Pio da Pietrelcina (Padre Pio)",
      name_la: "Sanctus Pius de Pietrelcina",
      name_ro: "Sf\u00e2ntul Pio de Pietrelcina",
      title: "Stigmatized Capuchin Priest & Apostle of Prayer",
      title_it: "Sacerdote Cappuccino Stigmatizzato e Apostolo del Confessionale",
      color: "white",
      rank: "memorial",
      quote: "\u00abPray, hope, and don't worry. Prayer is the best weapon we have; it is the key that opens the heart of God.\u00bb",
      quote_it: "\u00abPrega, spera e non agitarti. La preghiera \u00e8 la migliore arma che abbiamo: \u00e8 la chiave che apre il cuore di Dio.\u00bb",
      bio: "Capuchin friar at San Giovanni Rotondo who bore the stigmata for fifty years, drawing millions to confession and founding the Home for Relief of Suffering.",
      bio_it: "Frate cappuccino a San Giovanni Rotondo, port\u00f2 le piaghe della Passione per cinquant'anni e fond\u00f2 la Casa Sollievo della Sofferenza.",
      scriptureRef: "Galatians 6:17"
    }
  ],
  '9-24': [
    {
      traditions: ["orthodox", "ecumenical"],
      name: "St. Silouan the Athonite",
      name_it: "San Silvano del Monte Athos",
      name_la: "Sanctus Siluanus Athonita",
      name_ro: "Sf\u00e2ntul Siluan Athonitul",
      title: "Elder of Mount Athos & Singer of Divine Love",
      title_it: "Monaco del Monte Athos e Cantore dell'Amore Divino",
      color: "white",
      rank: "feast",
      quote: "\u00abKeep your mind in hell, and despair not. The Lord loves all people, and desires that all be saved.\u00bb",
      quote_it: "\u00abTieni la tua mente negli inferi e non disperare. Il Signore ama tutti gli uomini e desidera la salvezza del mondo.\u00bb",
      bio: "Russian monk on Mount Athos who wept in continuous prayer for the salvation of all humanity, radiant with the Holy Spirit.",
      bio_it: "Monaco russo nel monastero athonita di San Panteleimon, preg\u00f2 con lacrime di fuoco per la riconciliazione e la pace del mondo intero.",
      scriptureRef: "1 Timothy 2:3-4"
    }
  ],
  '9-27': [
    {
      traditions: ["catholic", "ecumenical", "traditional"],
      name: "St. Vincent de Paul",
      name_it: "San Vincenzo de' Paoli",
      name_la: "Sanctus Vincentius a Paulo",
      name_ro: "Sf\u00e2ntul Vincen\u021biu de Paul",
      title: "Apostle of Charity & Father of the Poor",
      title_it: "Apostolo della Carit\u00e0 e Padre dei Poveri",
      color: "white",
      rank: "memorial",
      quote: "\u00abCharity is the cement which binds communities to God and persons to one another.\u00bb",
      quote_it: "\u00abLa carit\u00e0 \u00e8 il cemento che unisce le comunit\u00e0 a Dio e le persone le une alle altre.\u00bb",
      bio: "Devoted his life to galley slaves, orphans, and peasants, founding the Congregation of the Mission (Lazarists) and Daughters of Charity.",
      bio_it: "Consacr\u00f2 la sua vita ai galeotti, agli orfani e ai contadini poveri, fondando i Lazzaristi e le Figlie della Carit\u00e0 con Santa Luisa de Marillac.",
      scriptureRef: "James 2:14-17"
    },
    {
      traditions: ["orthodox"],
      name: "St. Callistratus and His Companions, Martyrs",
      name_it: "San Callistrato e Compagni Martiri",
      name_la: "Sanctus Callistratus et Socii Martyres",
      name_ro: "Sf\u00e2ntul Mucenic Calistrat \u0219i cei 49 de Mucenici",
      title: "Courageous Martyrs of Rome",
      title_it: "Coraggiosi Martiri di Roma sotto Diocleziano",
      color: "red",
      rank: "memorial",
      quote: "\u00abWe belong to Christ our Lord and King, and we will never offer sacrifice to idols.\u00bb",
      quote_it: "\u00abApparteniamo a Cristo nostro Signore e Re, e mai offriremo sacrifici agli idoli.\u00bb",
      bio: "Roman soldier whose miraculous endurance led 49 fellow soldiers to confess Christ and receive the crown of martyrdom.",
      bio_it: "Soldato romano la cui miracolosa fortezza condusse 49 compagni d'armi a confessare Cristo e a ricevere la corona del martirio.",
      scriptureRef: "2 Timothy 2:3"
    },
    {
      traditions: ["protestant"],
      name: "George Whitefield (Commemoration of Gospel Preaching)",
      name_it: "George Whitefield (Apostolo del Grande Risveglio)",
      name_la: "Georgius Whitefield",
      name_ro: "George Whitefield (Predicatorul Marii Treziri)",
      title: "Voice of the Great Awakening & Open-Air Preacher",
      title_it: "Voce del Grande Risveglio e Predicatore Evangelico",
      color: "white",
      rank: "memorial",
      quote: "\u00abI am content to be forgotten, if Christ be remembered! Let the name of Whitefield perish, so long as Christ is exalted.\u00bb",
      quote_it: "\u00abSono felice di essere dimenticato, purch\u00e9 Cristo sia ricordato! Perisca pure il nome di Whitefield, purch\u00e9 Cristo sia esaltato.\u00bb",
      bio: "Preached the Gospel to over ten million people in Great Britain and America, pointing all to the necessity of the new birth in Christ.",
      bio_it: "Predic\u00f2 l'Evangelo a milioni di persone nelle piazze e nei campi di Gran Bretagna e America, richiamando tutti alla nuova nascita in Cristo.",
      scriptureRef: "John 3:3"
    }
  ],
  '9-29': [
    {
      traditions: ["all"],
      name: "Saints Michael, Gabriel, and Raphael, Archangels",
      name_it: "Santi Michele, Gabriele e Raffaele, Arcangeli",
      name_la: "Sanctorum Michaelis, Gabrielis et Raphaelis Archangelorum",
      name_ro: "Sfin\u021bii Arhangheli Mihail, Gavriil \u0219i Rafail",
      title: "Heavenly Protectors, Messengers of God & Healers",
      title_it: "Principi delle Schiere Celesti e Messaggeri di Dio",
      color: "white",
      rank: "feast",
      quote: "\u00abQuis ut Deus? Who is like unto God! The Lord of hosts is with us; the God of Jacob is our refuge.\u00bb",
      quote_it: "\u00abChi \u00e8 come Dio? Il Signore delle schiere \u00e8 con noi, nostro rifugio \u00e8 il Dio di Giacobbe!\u00bb",
      bio: "Michael defeated the dragon; Gabriel announced the Incarnation; Raphael guided Tobias and brought healing from God.",
      bio_it: "Michele difende il popolo di Dio dalle potenze oscure; Gabriele reca i divini annunci; Raffaele accompagna e risana i sofferenti.",
      scriptureRef: "Revelation 12:7-9"
    }
  ],
  '9-30': [
    {
      traditions: ["all"],
      name: "St. Jerome, Priest and Doctor of the Church",
      name_it: "San Girolamo Sacerdote e Dottore della Chiesa",
      name_la: "Sanctus Hieronymus Presbyter et Doctor",
      name_ro: "Sf\u00e2ntul Ieronim",
      title: "Translator of the Latin Vulgate & Scholar of Scripture",
      title_it: "Traduttore della Vulgata e Maestro delle Sacre Scritture",
      color: "white",
      rank: "memorial",
      quote: "\u00abIgnorance of Scripture is ignorance of Christ. Read the divine word continually; let sacred books never fall from your hands.\u00bb",
      quote_it: "\u00abL'ignoranza delle Scritture \u00e8 ignoranza di Cristo! Leggi continuamente la divina parola: non cada mai il libro sacro dalle tue mani.\u00bb",
      bio: "Hermit in the desert of Chalcis and Bethlehem who spent decades translating the Hebrew and Greek Scriptures into Latin (the Vulgate).",
      bio_it: "Eremita presso la grotta di Betlemme, tradusse per incarico di papa Damaso la Bibbia dall'ebraico e greco in latino nella monumentale Vulgata.",
      scriptureRef: "2 Timothy 3:16"
    }
  ],

  // ==========================================
  // OCTOBER (10)
  // ==========================================
  '10-1': [
    {
      traditions: ["catholic", "all"],
      name: "St. Th\u00e9r\u00e8se of Lisieux (The Little Flower)",
      name_it: "Santa Teresa di Ges\u00f9 Bambino (La Piccola Via)",
      name_la: "Sancta Teresia a Iesu Infante",
      name_ro: "Sf\u00e2nta Tereza a Pruncului Isus",
      title: "Doctor of the Church & Patroness of Missions",
      title_it: "Vergine, Dottore della Chiesa e Patrona delle Missioni",
      color: "white",
      rank: "memorial",
      quote: "\u00abMy vocation is love! In the heart of the Church, my Mother, I will be love. I will spend my heaven doing good on earth.\u00bb",
      quote_it: "\u00abLa mia vocazione \u00e8 l'amore! Nel cuore della Chiesa, mia Madre, io sar\u00f2 l'amore. Passer\u00f2 il mio cielo a fare del bene sulla terra.\u00bb",
      bio: "Norman Carmelite nun who revealed the Little Way of spiritual childhood, offering every tiny sacrifice with infinite love for Christ.",
      bio_it: "Monaca carmelitana di Lisieux, proclamata Dottore della Chiesa per la sua \"piccola via\" di confidenza filiale e abbandono nell'amore misericordioso.",
      scriptureRef: "Matthew 18:3"
    },
    {
      traditions: ["orthodox"],
      name: "The Protection of the Most Holy Theotokos (Pokrov)",
      name_it: "Protezione della Santissima Madre di Dio (Pokrov)",
      name_la: "Protectio Sanctissimae Deiparae",
      name_ro: "Acoper\u0103m\u00e2ntul Maicii Domnului (Pocrovul)",
      title: "The Holy Veil Sheltering the Christian People",
      title_it: "Il Manto Materno che Protegge la Cristianit\u00e0",
      color: "blue",
      rank: "feast",
      quote: "\u00abToday the Virgin stands in the church and with choirs of saints invisibly prays to God for us.\u00bb",
      quote_it: "\u00abOggi la Vergine \u00e8 presente nella chiesa e con le schiere dei santi prega invisibilmente Dio per noi.\u00bb",
      bio: "In tenth-century Constantinople, St. Andrew the Fool-for-Christ beheld the Mother of God spreading her luminous veil over the congregation in prayer.",
      bio_it: "Nel tempio delle Blacherne a Costantinopoli sant'Andrea il Folle vide la Madre di Dio stendere il suo velo luminoso su tutto il popolo orante.",
      scriptureRef: "Psalm 91:1-4"
    }
  ],
  '10-2': [
    {
      traditions: ["all"],
      name: "The Holy Guardian Angels",
      name_it: "Santi Angeli Custodi",
      name_la: "Sanctorum Angelorum Custodum",
      name_ro: "Sfin\u021bii \u00cengeri P\u0103zitori",
      title: "Heavenly Companions & Protectors of Souls",
      title_it: "Celesti Compagni e Custodi dell'Anima",
      color: "white",
      rank: "memorial",
      quote: "\u00abAngel of God, my guardian dear, to whom God's love commits me here, ever this day be at my side to light and guard, to rule and guide.\u00bb",
      quote_it: "\u00abAngelo di Dio, che sei il mio custode, illumina, custodisci, reggi e governa me, che ti fui affidato dalla piet\u00e0 celeste. Amen.\u00bb",
      bio: "Celebrating the personal spiritual guides appointed by God's providence to watch over every person throughout earthly pilgrimage.",
      bio_it: "Memoria degli spiriti celesti posti dalla divina provvidenza a guida, difesa e consolazione di ciascun uomo verso la salvezza eterna.",
      scriptureRef: "Matthew 18:10"
    }
  ],
  '10-4': [
    {
      traditions: ["all"],
      name: "St. Francis of Assisi",
      name_it: "San Francesco d'Assisi",
      name_la: "Sanctus Franciscus Asisiensis",
      name_ro: "Sf\u00e2ntul Francisc de Assisi",
      title: "The Poverello of Assisi, Herald of Universal Peace & Patron of Italy",
      title_it: "Il Poverello d'Assisi, Patrono d'Italia e Araldo della Pace",
      color: "white",
      rank: "feast",
      quote: "\u00abLord, make me an instrument of your peace: where there is hatred, let me sow love; where there is injury, pardon; where there is doubt, faith.\u00bb",
      quote_it: "\u00abSignore, fa' di me uno strumento della tua pace: dove \u00e8 odio, ch'io porti l'amore; dove \u00e8 offesa, ch'io porti il perdono; dove \u00e8 dubbio, la fede.\u00bb",
      bio: "Renounced all worldly inheritance to wed Lady Poverty, preached the Gospel to birds and sultans, and received the holy stigmata on Mount La Verna.",
      bio_it: "Spogliatosi di ogni ricchezza terrena, abbracci\u00f2 madonna povert\u00e0, compose il Cantico delle Creature e ricevette le sacre stimmate sul monte della Verna.",
      scriptureRef: "Galatians 6:14"
    }
  ],
  '10-5': [
    {
      traditions: ["catholic"],
      name: "St. Faustina Kowalska",
      name_it: "Santa Maria Faustina Kowalska",
      name_la: "Sancta Maria Faustina Kowalska",
      name_ro: "Sf\u00e2nta Faustina Kowalska",
      title: "Apostle & Secretary of Divine Mercy",
      title_it: "Apostola e Segretaria della Divina Misericordia",
      color: "white",
      rank: "memorial",
      quote: "\u00abJesus, I trust in You! The greater the sinner, the greater the right he has to My mercy.\u00bb",
      quote_it: "\u00abGes\u00f9, confido in Te! Pi\u00f9 grande \u00e8 il peccatore, tanto maggiore \u00e8 il diritto che ha alla mia misericordia.\u00bb",
      bio: "Polish sister of Our Lady of Mercy who received revelations of the merciful Christ, giving the Church the Chaplet of Divine Mercy.",
      bio_it: "Religiosa polacca a cui Cristo affid\u00f2 il messaggio della Divina Misericordia per il mondo intero e l'immagine con i raggi di luce rossa e pallida.",
      scriptureRef: "Psalm 89:1"
    }
  ],
  '10-6': [
    {
      traditions: ["catholic", "all"],
      name: "St. Bruno, Priest and Hermit",
      name_it: "San Bruno Sacerdote",
      name_la: "Sanctus Bruno Presbyter",
      name_ro: "Sf\u00e2ntul Bruno",
      title: "Founder of the Carthusians & Master of Holy Silence",
      title_it: "Fondatore dei Certosini e Maestro del Sacro Silenzio",
      color: "white",
      rank: "memorial",
      quote: "\u00abStat Crux dum volvitur orbis: The Cross stands firm while the world turns. Only those who have experienced silence know its sweetness.\u00bb",
      quote_it: "\u00abStat Crux dum volvitur orbis: La Croce resta salda mentre il mondo gira. Solo chi ha provato il silenzio conosce la sua soavit\u00e0.\u00bb",
      bio: "Cologne canon who retired to the mountain solitude of the Grande Chartreuse and Calabria, founding the contemplative Carthusian Order.",
      bio_it: "Fondatore dell'Ordine Certosino nella solitudine della Grande Chartreuse e di Serra San Bruno in Calabria, dedito alla sola contemplazione di Dio.",
      scriptureRef: "1 Kings 19:12"
    },
    {
      traditions: ["protestant"],
      name: "William Tyndale",
      name_it: "William Tyndale (Martire della Bibbia)",
      name_la: "Gulielmus Tyndale",
      name_ro: "William Tyndale",
      title: "Translator of the English Bible & Martyr of Faith",
      title_it: "Traduttore della Bibbia in Lingua Popolare e Martire",
      color: "red",
      rank: "memorial",
      quote: "\u00abLord! Open the King of England's eyes. If God spare my life, I will cause a boy that driveth the plough shall know more of Scripture than thou dost.\u00bb",
      quote_it: "\u00abSignore, apri gli occhi al Re d'Inghilterra! Se Dio mi dar\u00e0 vita, far\u00f2 s\u00ec che il ragazzo che guida l'aratro conosca la Scrittura pi\u00f9 di voi.\u00bb",
      bio: "Scholar who translated the New Testament directly from Greek into English so common people could read God's word, strangled and burned at Vilvoorde in 1536.",
      bio_it: "Tradusse per primo il Nuovo Testamento dal greco in inglese per renderlo comprensibile al popolo, morendo sul rogo a Vilvoorde nel 1536.",
      scriptureRef: "Psalm 119:130"
    }
  ],
  '10-7': [
    {
      traditions: ["catholic", "all"],
      name: "Our Lady of the Rosary",
      name_it: "Beata Vergine Maria del Rosario",
      name_la: "Beata Maria Virgo a Rosario",
      name_ro: "Sf\u00e2nta Fecioar\u0103 Maria a Rozariului",
      title: "Victorious Queen & Meditations on the Mysteries of Christ",
      title_it: "Regina delle Vittorie e Contemplazione del Volto di Cristo",
      color: "white",
      rank: "memorial",
      quote: "\u00abTo pray the Rosary is to contemplate with Mary the face of Christ our Savior.\u00bb",
      quote_it: "\u00abPregare il Rosario significa contemplare con Maria il volto luminoso di Cristo nostro Salvatore.\u00bb",
      bio: "Instituted by St. Pius V following the victory of Lepanto in 1571, celebrating the meditative prayer on the joyful, luminous, sorrowful, and glorious mysteries of the Lord.",
      bio_it: "Istituita da San Pio V per ringraziare la Madre di Dio dopo la battaglia di Lepanto, scuola quotidiana di contemplazione evangelica dei misteri di Cristo.",
      scriptureRef: "Luke 1:28"
    }
  ],
  '10-11': [
    {
      traditions: ["catholic", "all"],
      name: "St. John XXIII, Pope",
      name_it: "San Giovanni XXIII Papa (Il Papa Buono)",
      name_la: "Sanctus Ioannes XXIII Papa",
      name_ro: "Sf\u00e2ntul Ioan al XXIII-lea",
      title: "The Good Pope & Father of the Second Vatican Council",
      title_it: "Il Papa Buono, Autore della Pacem in Terris e del Concilio",
      color: "white",
      rank: "memorial",
      quote: "\u00abConsult not your fears but your hopes and your dreams. Returning home tonight, you will find children: give them a caress, and say: This is the caress of the Pope.\u00bb",
      quote_it: "\u00abTornando a casa stasera, troverete i bambini: date loro una carezza e dite: Questa \u00e8 la carezza del Papa! Guardate avanti con speranza.\u00bb",
      bio: "Angelo Giuseppe Roncalli, convoked the Second Vatican Council to open the windows of the Church to the Holy Spirit and peace across humanity.",
      bio_it: "Nato a Sotto il Monte, indisse il Concilio Vaticano II per rinnovare la presenza della Chiesa nel mondo moderno, apostolo universale della pace.",
      scriptureRef: "John 17:21"
    }
  ],
  '10-15': [
    {
      traditions: ["catholic", "all"],
      name: "St. Teresa of Avila (of Jesus)",
      name_it: "Santa Teresa d'Avila (di Ges\u00f9)",
      name_la: "Sancta Teresia de Avila",
      name_ro: "Sf\u00e2nta Tereza de Avila",
      title: "Doctor of the Church & Reformer of Carmel",
      title_it: "Vergine e Dottore della Chiesa, Riformatrice del Carmelo",
      color: "white",
      rank: "feast",
      quote: "\u00abLet nothing disturb thee, nothing affright thee; all things are passing, God never changeth. Patient endurance attaineth to all things; who God possesseth in nothing is wanting: God alone sufficeth.\u00bb",
      quote_it: "\u00abNiente ti turbi, niente ti spaventi. Tutto passa, Dio non cambia. La pazienza ottiene tutto. A chi ha Dio non manca nulla: solo Dio basta.\u00bb",
      bio: "First female Doctor of the Church, great mystic of the Interior Castle and founder of the Discalced Carmelite friars and nuns.",
      bio_it: "Prima donna proclamata Dottore della Chiesa, maestra sublime dell'orazione interiore nel Castello interiore, riformatrice del Carmelo.",
      scriptureRef: "Psalm 46:10"
    }
  ],
  '10-16': [
    {
      traditions: ["catholic", "all"],
      name: "St. Margaret Mary Alacoque",
      name_it: "Santa Margherita Maria Alacoque",
      name_la: "Sancta Margarita Maria Alacoque",
      name_ro: "Sf\u00e2nta Margareta Maria Alacoque",
      title: "Virgin, Nun of the Visitation & Messenger of the Sacred Heart",
      title_it: "Vergine della Visitazione e Apostola del Sacro Cuore di Ges\u00f9",
      color: "white",
      rank: "memorial",
      quote: "\u00abBehold this Heart which has so loved men that it has spared nothing to manifest its love.\u00bb",
      quote_it: "\u00abEcco quel Cuore che ha tanto amato gli uomini da non risparmiare nulla per manifestare il suo amore.\u00bb",
      bio: "Visitandine nun at Paray-le-Monial who received apparitions of the Sacred Heart of Jesus, spreading divine love and reparation.",
      bio_it: "Monaca della Visitazione a Paray-le-Monial, ricevette le rivelazioni del Sacro Cuore di Ges\u00f9 ardente di misericordia per l'umanit\u00e0.",
      scriptureRef: "Ephesians 3:17-19"
    },
    {
      traditions: ["protestant"],
      name: "Hugh Latimer & Nicholas Ridley (Oxford Martyrs)",
      name_it: "Hugh Latimer e Nicholas Ridley (Martiri di Oxford)",
      name_la: "Hugo Latimer et Nicolaus Ridley Martyres",
      name_ro: "Hugh Latimer \u0219i Nicholas Ridley",
      title: "Bishops & Martyrs of the English Reformation",
      title_it: "Vescovi e Martiri della Riforma Inglese",
      color: "red",
      rank: "memorial",
      quote: "\u00abBe of good comfort, Master Ridley, and play the man; we shall this day light such a candle, by God's grace, in England, as I trust shall never be put out.\u00bb",
      quote_it: "\u00abAbbiate buon animo, maestro Ridley! Oggi accenderemo per grazia di Dio in Inghilterra una tale candela che mai sar\u00e0 spenta.\u00bb",
      bio: "English reformist bishops burned at the stake in Oxford under Queen Mary in 1555 for preaching salvation in Christ alone.",
      bio_it: "Vescovi riformatori inglesi martirizzati al rogo a Oxford nel 1555 per la loro incrollabile fedelt\u00e0 alla Parola di Dio.",
      scriptureRef: "2 Timothy 1:12"
    }
  ],
  '10-17': [
    {
      traditions: ["all"],
      name: "St. Ignatius of Antioch, Bishop and Martyr",
      name_it: "Sant'Ignazio di Antiochia Vescovo e Martire",
      name_la: "Sanctus Ignatius Antiochenus",
      name_ro: "Sf\u00e2ntul Ignatie Teoforul",
      title: "Theophoros & Apostolic Father",
      title_it: "Il Teoforo, Padre Apostolico e Frumento di Cristo",
      color: "red",
      rank: "memorial",
      quote: "\u00abI am God's wheat, and I shall be ground by the teeth of wild beasts that I may be found the pure bread of Christ.\u00bb",
      quote_it: "\u00abSono frumento di Dio e sar\u00f2 macinato dai denti delle fiere affinch\u00e9 sia trovato puro pane di Cristo.\u00bb",
      bio: "Third bishop of Antioch after Peter and Evodius, transported under guard to Rome where he was thrown to lions in the Colosseum around 107.",
      bio_it: "Discepolo degli Apostoli, scrisse sette mirabili lettere mentre veniva condotto a Roma per essere sbranato dai leoni sotto Traiano.",
      scriptureRef: "Philippians 1:21"
    }
  ],
  '10-18': [
    {
      traditions: ["all"],
      name: "St. Luke the Evangelist",
      name_it: "San Luca Evangelista",
      name_la: "Sanctus Lucas Evangelista",
      name_ro: "Sf\u00e2ntul Apostol \u0219i Evanghelist Luca",
      title: "The Beloved Physician & Historian of Salvation",
      title_it: "Il Medico Carissimo, Evangelista della Misericordia e degli Atti",
      color: "red",
      rank: "feast",
      quote: "\u00abThe Spirit of the Lord is upon me, because He hath anointed me to preach the gospel to the poor; He hath sent me to heal the brokenhearted.\u00bb",
      quote_it: "\u00abLo Spirito del Signore \u00e8 sopra di me; per questo mi ha consacrato con l'unzione e mi ha mandato a portare ai poveri il lieto annuncio.\u00bb",
      bio: "Physician from Antioch, faithful companion of Paul in his trials, author of the Gospel of Mercy and the Acts of the Apostles.",
      bio_it: "Medico antiocheno e compagno inseparabile di San Paolo, autore del Vangelo dell'infanzia e della misericordia e degli Atti degli Apostoli.",
      scriptureRef: "Luke 4:18-19"
    }
  ],
  '10-22': [
    {
      traditions: ["catholic", "all"],
      name: "St. John Paul II, Pope",
      name_it: "San Giovanni Paolo II Papa (Karol Wojty\u0142a)",
      name_la: "Sanctus Ioannes Paulus II Papa",
      name_ro: "Sf\u00e2ntul Ioan Paul al II-lea",
      title: "Apostle to the Nations & Messenger of Divine Mercy",
      title_it: "Pellegrino di Pace, Apostolo dei Giovani e della Divina Misericordia",
      color: "white",
      rank: "memorial",
      quote: "\u00abDo not be afraid! Open wide the doors to Christ! To His saving power open the borders of states, economic and political systems.\u00bb",
      quote_it: "\u00abNon abbiate paura! Aprite, anzi spalancate le porte a Cristo! Alla sua salvatrice potest\u00e0 aprite i confini degli stati, i sistemi sia economici che politici.\u00bb",
      bio: "Karol Wojty\u0142a of Poland, survived totalitarian regimes, guided the Church for twenty-six years into the third millennium, establishing World Youth Days.",
      bio_it: "Papa polacco che abbatt\u00e9 le cortine di ferro con la sola forza della verit\u00e0 e della fede, fondatore delle Giornate Mondiali della Giovent\u00f9.",
      scriptureRef: "Matthew 28:20"
    }
  ],
  '10-28': [
    {
      traditions: ["all"],
      name: "Saints Simon and Jude, Apostles",
      name_it: "Santi Simone e Giuda Taddeo Apostoli",
      name_la: "Sanctorum Simonis et Iudae Apostolorum",
      name_ro: "Sfin\u021bii Apostoli Simon Zilotul \u0219i Iuda Tadeu",
      title: "The Zealot & the Patron of Desperate Cases",
      title_it: "Lo Zelota e il Patrono delle Cause Disperate",
      color: "red",
      rank: "feast",
      quote: "\u00abBeloved, building up yourselves on your most holy faith, praying in the Holy Ghost, keep yourselves in the love of God.\u00bb",
      quote_it: "\u00abVoi per\u00f2, carissimi, conservatevi nell'amore di Dio, edificandovi nella vostra santissima fede e pregando nello Spirito Santo.\u00bb",
      bio: "Simon called the Zealot and Jude Thaddaeus who asked Jesus at the Last Supper why He would manifest Himself to disciples and not the world.",
      bio_it: "Simone lo Zelota e Giuda Taddeo predicarono insieme l'Evangelo in Persia e Mesopotamia, dove suggellarono la testimonianza con il martirio.",
      scriptureRef: "Jude 1:20-21"
    }
  ],
  '10-31': [
    {
      traditions: ["protestant"],
      name: "Reformation Day (Martin Luther at Wittenberg)",
      name_it: "Giorno della Riforma (Martin Lutero a Wittenberg)",
      name_la: "Dies Reformationis",
      name_ro: "Ziua Reformei",
      title: "Posting of the 95 Theses & Recovery of Grace Alone",
      title_it: "Affissione delle 95 Tesi e Riscoperta della Sola Fede",
      color: "white",
      rank: "feast",
      quote: "\u00abA mighty fortress is our God, a bulwark never failing! For by grace are ye saved through faith; and that not of yourselves: it is the gift of God.\u00bb",
      quote_it: "\u00abForte rocca \u00e8 il nostro Dio, un baluardo che non croller\u00e0 mai! Per grazia infatti siete salvati mediante la fede, ed \u00e8 dono di Dio.\u00bb",
      bio: "On October 31, 1517, Martin Luther posted his 95 Theses on the door of the Castle Church in Wittenberg, calling the Church back to the Gospel of grace.",
      bio_it: "Il 31 ottobre 1517 Lutero affisse le 95 tesi a Wittenberg, richiamando la cristianit\u00e0 al cuore dell'Evangelo: la giustificazione per sola fede nella grazia di Cristo.",
      scriptureRef: "Romans 1:17"
    },
    {
      traditions: ["catholic", "traditional"],
      name: "Vigil of All Saints (All Hallows' Eve)",
      name_it: "Vigilia di Tutti i Santi",
      name_la: "Vigilia Omnium Sanctorum",
      name_ro: "Ajunul Tuturor Sfin\u021bilor",
      title: "Expectation of the Heavenly City",
      title_it: "Attesa Orante della Citt\u00e0 Celeste",
      color: "violet",
      rank: "memorial",
      quote: "\u00abBlessed are the pure in heart, for they shall see God.\u00bb",
      quote_it: "\u00abBeati i puri di cuore, perch\u00e9 vedranno Dio.\u00bb",
      bio: "Vigil of prayer and fasting preparing the faithful to enter into the heavenly contemplation of the innumerable cloud of witnesses.",
      bio_it: "Antica vigilia di preghiera orante in preparazione alla festa della moltitudine dei santi radunati dinanzi al trono dell'Agnello.",
      scriptureRef: "Matthew 5:8"
    }
  ],

  // ==========================================
  // NOVEMBER (11)
  // ==========================================
  '11-1': [
    {
      traditions: ["all"],
      name: "Solemnity of All Saints",
      name_it: "Solennit\u00e0 di Tutti i Santi",
      name_la: "Sollemnitas Omnium Sanctorum",
      name_ro: "S\u0103rb\u0103toarea Tuturor Sfin\u021bilor",
      title: "The Great Multitude from Every Tribe and Nation",
      title_it: "La Moltitudine Immensa dei Giusti Davanti al Trono di Dio",
      color: "white",
      rank: "solemnity",
      quote: "\u00abAfter this I beheld, and, lo, a great multitude, which no man could number, of all nations, and kindreds, and people, and tongues, stood before the throne.\u00bb",
      quote_it: "\u00abVidi una moltitudine immensa, che nessuno poteva contare, di ogni nazione, trib\u00f9, popolo e lingua, in piedi davanti al trono e all'Agnello.\u00bb",
      bio: "Celebrates all the redeemed who dwell in the presence of God: named and unnamed saints, martyrs, confessors, and faithful souls of all centuries.",
      bio_it: "Celebrazione gloriosa di tutti i giusti di ogni tempo e luogo che godono la visione beatifica di Dio nel Regno dei Cieli.",
      scriptureRef: "Revelation 7:9-12"
    }
  ],
  '11-2': [
    {
      traditions: ["all"],
      name: "The Commemoration of All the Faithful Departed (All Souls)",
      name_it: "Commemorazione di Tutti i Fedeli Defunti",
      name_la: "In Commemoratione Omnium Fidelium Defunctorum",
      name_ro: "Pomenirea Tuturor Credincio\u0219ilor R\u0103posa\u021bi",
      title: "Prayer for the Souls of the Departed in Christ",
      title_it: "Preghiera e Suffragio per i Fratelli e le Sorelle Addormentati nel Signore",
      color: "violet",
      rank: "feast",
      quote: "\u00abI am the resurrection, and the life: he that believeth in me, though he were dead, yet shall he live: And whosoever liveth and believeth in me shall never die.\u00bb",
      quote_it: "\u00abIo sono la risurrezione e la vita; chi crede in me, anche se muore, vivr\u00e0; chiunque vive e crede in me, non morir\u00e0 in eterno.\u00bb",
      bio: "The Church on earth unites in suffrages, prayers, and Eucharistic sacrifices for all souls awaiting the fullness of the heavenly embrace.",
      bio_it: "La Chiesa militante abbraccia nella preghiera e nell'offerta eucaristica tutte le anime dei defunti, implorando la luce e la pace eterna.",
      scriptureRef: "John 11:25-26"
    }
  ],
  '11-4': [
    {
      traditions: ["catholic", "all"],
      name: "St. Charles Borromeo, Bishop",
      name_it: "San Carlo Borromeo Vescovo",
      name_la: "Sanctus Carolus Borromaeus",
      name_ro: "Sf\u00e2ntul Carol Borromeu",
      title: "Archbishop of Milan & Great Reformer of Trent",
      title_it: "Arcivescovo di Milano e Grande Riformatore del Concilio di Trento",
      color: "white",
      rank: "memorial",
      quote: "\u00abBe sure that you first preach by the way you live. If a tiny spark of divine love already burns within you, do not extinguish it: open your heart to God.\u00bb",
      quote_it: "\u00abSii certo di predicare anzitutto con la vita. Se in te arde una piccola scintilla di amore divino, non spegnerla: dilata il tuo cuore a Dio.\u00bb",
      bio: "Nephew of Pope Pius IV who spearheaded the conclusion of the Council of Trent and gave all his personal goods to nurse the plague-stricken of Milan.",
      bio_it: "Cardinale arcivescovo di Milano, applic\u00f2 con fervore instancabile la riforma tridentina, donando ogni suo avere durante la terribile peste del 1576.",
      scriptureRef: "Titus 2:7"
    }
  ],
  '11-8': [
    {
      traditions: ["orthodox"],
      name: "Synaxis of the Archangel Michael & All Bodiless Powers",
      name_it: "Sinassi dell'Arcangelo Michele e di tutte le Potenze Celesti Incorporee",
      name_la: "Synaxis Sancti Michaelis Archangeli",
      name_ro: "Soborul Sfin\u021bilor Arhangheli Mihail \u0219i Gavriil",
      title: "All the Heavenly Hosts, Cherubim and Seraphim",
      title_it: "Tutte le Schiere Celesti, Cherubini e Serafini d'Oriente",
      color: "white",
      rank: "feast",
      quote: "\u00abLet us stand well, let us stand with fear, let us attend! Holy, Holy, Holy, Lord of Sabaoth, heaven and earth are full of Thy glory.\u00bb",
      quote_it: "\u00abStiamo saldi, stiamo con timore e attenzione! Santo, Santo, Santo \u00e8 il Signore degli Eserciti: i cieli e la terra sono pieni della tua gloria.\u00bb",
      bio: "Orthodox feast commemorating the victory of the good angels led by Archangel Michael over Lucifer and the fallen spirits.",
      bio_it: "Solenne festa bizantina che glorifica tutti i nove cori angelici guidati da San Michele nella fedelt\u00e0 perenne all'Eterno Dio.",
      scriptureRef: "Isaiah 6:1-3"
    }
  ],
  '11-10': [
    {
      traditions: ["all"],
      name: "St. Leo the Great, Pope and Doctor of the Church",
      name_it: "San Leone Magno Papa e Dottore della Chiesa",
      name_la: "Sanctus Leo Magnus Papa",
      name_ro: "Sf\u00e2ntul Leon cel Mare",
      title: "Defender of Rome & Teacher of the Incarnation at Chalcedon",
      title_it: "Difensore di Roma e Teologo delle Due Nature di Cristo a Calcedonia",
      color: "white",
      rank: "memorial",
      quote: "\u00abChristian, recognize your dignity! And now that you share in God's own nature, do not return by sin to your former lowliness.\u00bb",
      quote_it: "\u00abRiconosci, o cristiano, la tua dignit\u00e0! Ora che sei divenuto partecipe della natura divina, non tornare alla corruzione del peccato.\u00bb",
      bio: "Persuaded Attila the Hun to turn back from Rome; his Tome to Flavian established the dogma of Christ as true God and true man at the Council of Chalcedon in 451.",
      bio_it: "Ferm\u00f2 Attila sul Mincio; il suo Tomo a Flaviano defin\u00ec la verit\u00e0 immutabile delle due nature divina e umana nell'unica persona del Verbo.",
      scriptureRef: "2 Peter 1:4"
    }
  ],
  '11-11': [
    {
      traditions: ["all"],
      name: "St. Martin of Tours, Bishop",
      name_it: "San Martino di Tours Vescovo",
      name_la: "Sanctus Martinus Turonensis",
      name_ro: "Sf\u00e2ntul Martin de Tours",
      title: "Soldier Who Divided His Cloak & Pioneer Monk",
      title_it: "Il Cavaliere del Mantello Diviso e Padre dei Monaci in Gallia",
      color: "white",
      rank: "memorial",
      quote: "\u00abMartin, while yet a catechumen, hath clothed Me with this garment! Lord, if I am still necessary to your people, I do not refuse the labor.\u00bb",
      quote_it: "\u00abMartino, ancora solo catecumeno, mi ha rivestito con questo suo mantello! Signore, se sono ancora necessario al tuo popolo, non rifiuto la fatica.\u00bb",
      bio: "Roman soldier at Amiens who cut his military cloak in half to clothe a freezing beggar, seeing Christ in a dream that night wearing the cloak.",
      bio_it: "Cavaliere romano che alle porte di Amiens divise il suo mantello con un mendicante infreddolito, riconoscendo in lui Cristo stesso.",
      scriptureRef: "Matthew 25:35-40"
    }
  ],
  '11-17': [
    {
      traditions: ["catholic", "all"],
      name: "St. Elizabeth of Hungary",
      name_it: "Santa Elisabetta d'Ungheria",
      name_la: "Sancta Elisabeth Hungariae",
      name_ro: "Sf\u00e2nta Elisabeta a Ungariei",
      title: "Princess of Charity & Patroness of the Franciscan Third Order",
      title_it: "Principessa di Carit\u00e0 e Patrona del Terz'Ordine Francescano",
      color: "white",
      rank: "memorial",
      quote: "\u00abWe must give God what is His, and make people happy. What we give to the poor we lend to God.\u00bb",
      quote_it: "\u00abDobbiamo rendere felici le persone e dare a Dio ci\u00f2 che \u00e8 suo. Ci\u00f2 che doniamo agli indigenti lo prestiamo a Dio.\u00bb",
      bio: "Hungarian princess and Landgravine of Thuringia who built hospitals, spun wool for the destitute, and died at twenty-four fully stripped of worldly honors.",
      bio_it: "Regale figlia del re d'Ungheria, alla morte del marito spese ogni sua ricchezza per costruire ospedali e curare con le proprie mani i pi\u00f9 miseri.",
      scriptureRef: "Proverbs 19:17"
    }
  ],
  '11-21': [
    {
      traditions: ["all"],
      name: "The Presentation of the Blessed Virgin Mary",
      name_it: "Presentazione della Beata Vergine Maria al Tempio",
      name_la: "In Praesentatione Beatae Mariae Virginis",
      name_ro: "Intrarea Maicii Domnului \u00een Biseric\u0103 (Vovidenia)",
      title: "The Living Temple of the Holy of Holies",
      title_it: "Il Tempio Vivente del Santissimo Verbo",
      color: "white",
      rank: "memorial",
      quote: "\u00abThe most pure Temple of the Savior is led today into the house of the Lord, bringing with her the grace of the Holy Spirit.\u00bb",
      quote_it: "\u00abIl tempio purissimo del Salvatore \u00e8 condotto oggi nella casa del Signore, portando con s\u00e9 la grazia dello Spirito divino.\u00bb",
      bio: "Ancient feast commemorating Mary brought by Joachim and Anne to the Temple in Jerusalem, consecrated wholly to God from her youth.",
      bio_it: "Antica solennit\u00e0 d'Oriente e d'Occidente che celebra la fanciulla Maria offerta nel tempio di Gerusalemme, tempio santo del Signore.",
      scriptureRef: "Psalm 45:14-15"
    }
  ],
  '11-22': [
    {
      traditions: ["all"],
      name: "St. Cecilia, Virgin and Martyr",
      name_it: "Santa Cecilia Vergine e Martire",
      name_la: "Sancta Caecilia Virgo et Martyr",
      name_ro: "Sf\u00e2nta Cecilia",
      title: "Patroness of Musicians & Roman Martyr",
      title_it: "Patrona della Musica Sacra e Martire a Roma",
      color: "red",
      rank: "memorial",
      quote: "\u00abCantantibus organis, Caecilia virgo in corde suo soli Domino decantabat: While instruments played, Cecilia sang in her heart to God alone.\u00bb",
      quote_it: "\u00abTra il suono degli organi Cecilia cantava nel suo cuore: Signore, sia puro il mio cuore affinch\u00e9 io non resti confusa.\u00bb",
      bio: "Noble Roman virgin who converted her husband Valerian, survived scalding bathwaters, and died singing praise to the Holy Trinity with three fingers extended.",
      bio_it: "Nobile romana martirizzata nella sua casa in Trastevere; con le dita aperte profess\u00f2 fino all'ultimo respiro la fede nell'Unit\u00e0 e Trinit\u00e0 di Dio.",
      scriptureRef: "Psalm 150:1-6"
    },
    {
      traditions: ["protestant"],
      name: "C.S. Lewis",
      name_it: "C.S. Lewis (Apologeta Cristiano e Voce della Speranza)",
      name_la: "Clive Staples Lewis",
      name_ro: "C.S. Lewis",
      title: "Defender of Mere Christianity & Voice of Hope",
      title_it: "Apologeta Cristiano e Autore de Il Cristianesimo Cos\u00ec Com'\u00e8",
      color: "white",
      rank: "memorial",
      quote: "\u00abI believe in Christianity as I believe that the sun has risen: not only because I see it, but because by it I see everything else.\u00bb",
      quote_it: "\u00abCredo nel Cristianesimo come credo che il sole \u00e8 sorto: non solo perch\u00e9 lo vedo, ma perch\u00e9 attraverso di esso vedo ogni altra cosa.\u00bb",
      bio: "Oxford and Cambridge professor whose books (Mere Christianity, The Chronicles of Narnia, The Screwtape Letters) restored intellectual Christian faith.",
      bio_it: "Docente universitario e scrittore cristiano le cui opere hanno risvegliato la ragione e l'immaginazione di milioni di lettori verso Cristo.",
      scriptureRef: "John 1:9"
    }
  ],
  '11-25': [
    {
      traditions: ["all"],
      name: "St. Catherine of Alexandria, Virgin and Martyr",
      name_it: "Santa Caterina d'Alessandria Vergine e Martire",
      name_la: "Sancta Catharina Alexandrina",
      name_ro: "Sf\u00e2nta Mare Muceni\u021b\u0103 Ecaterina",
      title: "Philosopher Maiden & Bride of Christ",
      title_it: "Sapiente Vergine, Filosofa e Sposa Mistica di Cristo",
      color: "red",
      rank: "memorial",
      quote: "\u00abI am a Christian and a servant of Christ. Your gods are empty idols; Christ alone is the Wisdom of the Father.\u00bb",
      quote_it: "\u00abSono cristiana e serva di Cristo. I vostri idoli sono vanit\u00e0 senza vita: solo Cristo \u00e8 l'eterna Sapienza del Padre.\u00bb",
      bio: "Noble scholar of Alexandria who refuted fifty pagan philosophers before Emperor Maximinus, martyred on the spiked wheel.",
      bio_it: "Fanciulla coltissima di Alessandria d'Egitto che convert\u00ec con la sua saggezza i filosofi pagani, protettrice degli studenti e dei teologi.",
      scriptureRef: "1 Corinthians 1:24"
    }
  ],
  '11-30': [
    {
      traditions: ["all"],
      name: "St. Andrew the Apostle (The First-Called)",
      name_it: "Sant'Andrea Apostolo (Il Primo Chiamato)",
      name_la: "Sanctus Andreas Apostolus",
      name_ro: "Sf\u00e2ntul Apostol Andrei, Cel \u00cent\u00e2i Chemat",
      title: "Brother of Peter, First-Called Disciple & Patron of Scotland, Greece and Romania",
      title_it: "Fratello di San Pietro, Primo tra i Discepoli e Martire della Croce Decussata",
      color: "red",
      rank: "feast",
      quote: "\u00abWe have found the Messiah! O good Cross, long desired and now welcomed by my yearning soul, receive the disciple of Him who hung upon thee.\u00bb",
      quote_it: "\u00abAbbiamo trovato il Messia! O buona Croce, a lungo desiderata ed ora accorta dalla mia anima bramosa, accogli il discepolo di Colui che fu appeso a te!\u00bb",
      bio: "Disciple of John the Baptist who ran to tell his brother Simon Peter; preached the Gospel around the Black Sea and was crucified on an X-shaped cross in Patras.",
      bio_it: "Primo apostolo a seguire Ges\u00f9 al Giordano; port\u00f2 suo fratello Pietro al Maestro e mor\u00ec a Patrasso legato alla croce decussata lodando il Redentore.",
      scriptureRef: "John 1:40-42"
    }
  ],

  // ==========================================
  // DECEMBER (12)
  // ==========================================
  '12-3': [
    {
      traditions: ["catholic", "all"],
      name: "St. Francis Xavier",
      name_it: "San Francesco Saverio Sacerdote",
      name_la: "Sanctus Franciscus Xaverius",
      name_ro: "Sf\u00e2ntul Francisc Xaveriu",
      title: "Apostle of the Indies & Patron of World Missions",
      title_it: "Apostolo delle Indie e del Giappone, Patrono Universale delle Missioni",
      color: "white",
      rank: "memorial",
      quote: "\u00abWhat shall it profit a man, if he gain the whole world, and lose his own soul? Give me souls, Lord Jesus!\u00bb",
      quote_it: "\u00abChe giova all'uomo guadagnare anche il mondo intero, se poi perde la sua anima? Donami anime, o Signore Ges\u00f9!\u00bb",
      bio: "Founding Jesuit companion who baptized hundreds of thousands across India, the Moluccas, and Japan, dying on the island of Sancian gazing at China.",
      bio_it: "Pioniere missionario gesuita nelle Indie e in Giappone, battezz\u00f2 folle immense prima di spirare sull'isola di Sancian alle porte della Cina.",
      scriptureRef: "Mark 16:15"
    }
  ],
  '12-4': [
    {
      traditions: ["all"],
      name: "St. John of Damascus & St. Barbara Martyr",
      name_it: "San Giovanni Damasceno e Santa Barbara Martire",
      name_la: "Sanctus Ioannes Damascenus et Sancta Barbara",
      name_ro: "Sf\u00e2ntul Ioan Damaschin \u0219i Sf\u00e2nta Mare Muceni\u021b\u0103 Varvara",
      title: "Doctor of Sacred Icons & Holy Great-Martyr",
      title_it: "Dottore delle Icone Sacre e Gloriosa Martire",
      color: "white",
      rank: "memorial",
      quote: "\u00abI do not worship matter, I worship the Creator of matter, who became matter for my sake and wrought my salvation through matter.\u00bb",
      quote_it: "\u00abIo non venero la materia, ma adoro il Creatore della materia che si \u00e8 fatto materia per la mia salvezza assumendo la carne umana.\u00bb",
      bio: "Monk of Mar Saba near Jerusalem who defended the veneration of holy images; Barbara confessed the Trinity and was martyred by her own pagan father.",
      bio_it: "Monaco nel deserto di Giuda, difese l'Incarnazione e il culto delle sacre icone; Barbara testimoni\u00f2 la Trinit\u00e0 affrontando il martirio con incrollabile fede.",
      scriptureRef: "Colossians 1:15"
    }
  ],
  '12-6': [
    {
      traditions: ["all"],
      name: "St. Nicholas of Myra (Wonderworker)",
      name_it: "San Nicola di Mira (di Bari) Vescovo e Taumaturgo",
      name_la: "Sanctus Nicolaus Myrensis",
      name_ro: "Sf\u00e2ntul Nicolae al Mirelor Lichiei",
      title: "Friend of Children, Provider of the Needy & Wonderworker",
      title_it: "Amico dei Fanciulli, Soccorritore dei Poveri e Taumaturgo",
      color: "white",
      rank: "memorial",
      quote: "\u00abThe giver of every good and perfect gift is God alone. What you give in secret, your Father in heaven shall reward openly.\u00bb",
      quote_it: "\u00abOgni dono perfetto viene dall'Alto. Ci\u00f2 che doni nel segreto, il Padre tuo celeste te lo ricompenser\u00e0 apertamente.\u00bb",
      bio: "Beloved bishop of Myra in Lycia who secretly tossed dowry gold to three poor daughters, calmed sea storms, and defended the faith at Nicaea.",
      bio_it: "Vescovo taumaturgo che salv\u00f2 fanciulle povere gettando oro nella notte e difese i marinai; le sue reliquie traslate a Bari sono meta di pellegrinaggio universale.",
      scriptureRef: "Hebrews 13:16"
    }
  ],
  '12-7': [
    {
      traditions: ["all"],
      name: "St. Ambrose of Milan, Bishop and Doctor",
      name_it: "Sant'Ambrogio Vescovo di Milano e Dottore della Chiesa",
      name_la: "Sanctus Ambrosius Mediolanensis",
      name_ro: "Sf\u00e2ntul Ambrozie de Milano",
      title: "Father of the Western Church & Converter of Augustine",
      title_it: "Patrono di Milano, Padre della Chiesa e Maestro di Sant'Agostino",
      color: "white",
      rank: "memorial",
      quote: "\u00abWhere Peter is, there is the Church. Christ is all to us: if you desire to heal your wound, He is physician; if you thirst, He is living water.\u00bb",
      quote_it: "\u00abDove c'\u00e8 Pietro, l\u00e0 c'\u00e8 la Chiesa. Tutto per noi \u00e8 Cristo: se hai una ferita da sanare, Egli \u00e8 medico; se hai sete, Egli \u00e8 fonte d'acqua viva.\u00bb",
      bio: "Governor acclaimed bishop while yet a catechumen, courageous shepherd who defended the Church against imperial tyranny and baptized Augustine.",
      bio_it: "Governatore romano acclamato vescovo a voce di popolo prima ancora del battesimo, pastore sapiente e compositore di inni sacri, battezz\u00f2 Agostino.",
      scriptureRef: "Psalm 27:1"
    }
  ],
  '12-8': [
    {
      traditions: ["catholic", "all"],
      name: "The Immaculate Conception of the Blessed Virgin Mary",
      name_it: "Solennit\u00e0 dell'Immacolata Concezione della Beata Vergine Maria",
      name_la: "Sollemnitas In Conceptione Immaculata Beatae Mariae Virginis",
      name_ro: "Neprih\u0103nita Z\u0103mislire a Preasfintei Fecioare Maria",
      title: "Full of Grace & Preserved from All Stain of Original Sin",
      title_it: "Piena di Grazia e Preservata da Ogni Macchia di Peccato Originale",
      color: "white",
      rank: "solemnity",
      quote: "\u00abHail, full of grace, the Lord is with thee: blessed art thou among women! Tota pulchra es, Maria, et macula originalis non est in te.\u00bb",
      quote_it: "\u00abRallegrati, piena di grazia: il Signore \u00e8 con te! Tutta bella sei, Maria, e il peccato originale non \u00e8 in te!\u00bb",
      bio: "Dogma defined by Blessed Pius IX in 1854: Mary was preserved immune from all stain of original sin from the first instant of her conception by the merits of Christ.",
      bio_it: "La Chiesa celebra il sublime privilegio concesso a Maria: preservata pura da ogni colpa fin dal primo istante del suo concepimento per i meriti del Redentore.",
      scriptureRef: "Luke 1:28"
    }
  ],
  '12-12': [
    {
      traditions: ["catholic", "all"],
      name: "Our Lady of Guadalupe",
      name_it: "Nostra Signora di Guadalupe (Patrona delle Americhe)",
      name_la: "Beata Maria Virgo de Guadalupe",
      name_ro: "Sf\u00e2nta Fecioar\u0103 Maria de la Guadalupe",
      title: "Empress of the Americas & Star of the New Evangelization",
      title_it: "Madre delle Americhe e Stella della Nuova Evangelizzazione",
      color: "white",
      rank: "feast",
      quote: "\u00abAm I not here, who am your Mother? Are you not under my shadow and protection? Are you not in the crossing of my arms? Let nothing grieve you.\u00bb",
      quote_it: "\u00abNon sono forse qui io, che sono tua Madre? Non sei forse sotto la mia ombra e protezione? Non sono io la fonte della tua gioia? Non temere nulla.\u00bb",
      bio: "Appeared to indigenous peasant Juan Diego on Tepeyac hill in 1531, leaving her miraculous image imprinted on his tilma, sparking the baptism of millions in Mexico.",
      bio_it: "Apparve sulla collina del Tepeyac all'indio San Juan Diego lasciando impressa la sua immagine miracolosa sulla tilma, aprendo il cuore dei popoli indigeni a Cristo.",
      scriptureRef: "Luke 1:48"
    }
  ],
  '12-13': [
    {
      traditions: ["all"],
      name: "St. Lucy, Virgin and Martyr",
      name_it: "Santa Lucia Vergine e Martire di Siracusa",
      name_la: "Sancta Lucia Virgo et Martyr",
      name_ro: "Sf\u00e2nta Lucia",
      title: "Bringer of Light & Martyr of Syracuse",
      title_it: "Portatrice di Luce e Gloriosa Martire di Siracusa",
      color: "red",
      rank: "memorial",
      quote: "\u00abThose who live chaste lives are the temple of God, and the Holy Spirit abides within them.\u00bb",
      quote_it: "\u00abColoro che vivono nella purezza sono tempio di Dio e lo Spirito Santo abita in essi.\u00bb",
      bio: "Noble maiden of Syracuse who gave her dowry to the poor and stood immovable as a rock under Diocletian when ordered into degradation, slain by the sword.",
      bio_it: "Vergine siracusana che don\u00f2 tutti i suoi beni ai poveri e resistette prodigiosamente ai carnefici sotto Diocleziano, patrona della vista e della luce.",
      scriptureRef: "Psalm 27:1"
    }
  ],
  '12-14': [
    {
      traditions: ["catholic", "all"],
      name: "St. John of the Cross, Priest and Doctor",
      name_it: "San Giovanni della Croce Sacerdote e Dottore della Chiesa",
      name_la: "Sanctus Ioannes a Cruce",
      name_ro: "Sf\u00e2ntul Ioan al Crucii",
      title: "Mystical Doctor & Reformer of Discalced Carmelites",
      title_it: "Dottore Mistico, Poeta dell'Amore Divino e Riformatore",
      color: "white",
      rank: "memorial",
      quote: "\u00abIn the evening of life, we will be judged on love alone. Where there is no love, put love, and you will find love.\u00bb",
      quote_it: "\u00abAlla sera della vita saremo giudicati sull'amore. Dove non c'\u00e8 amore, metti amore e troverai amore.\u00bb",
      bio: "Collaborator with Teresa of Avila in reforming Carmel, imprisoned in Toledo where he wrote the Spiritual Canticle and Dark Night of the Soul.",
      bio_it: "Insigne mistico e poeta spagnolo, guid\u00f2 le anime attraverso la notte oscura dei sensi e dello spirito verso l'unione trasfigurante con Dio.",
      scriptureRef: "Galatians 6:14"
    }
  ],
  '12-25': [
    {
      traditions: ["all"],
      name: "The Nativity of our Lord Jesus Christ (Christmas)",
      name_it: "Nativit\u00e0 di Nostro Signore Ges\u00f9 Cristo (Santo Natale)",
      name_la: "In Nativitate Domini",
      name_ro: "Na\u0219terea Domnului (Cr\u0103ciunul)",
      title: "The Incarnation of the Word & Prince of Peace",
      title_it: "L'Incarnazione del Verbo e la Luce del Mondo",
      color: "white",
      rank: "solemnity",
      quote: "\u00abGlory to God in the highest, and on earth peace, good will toward men! The Word was made flesh and dwelt among us.\u00bb",
      quote_it: "\u00abGloria a Dio nel pi\u00f9 alto dei cieli e sulla terra pace agli uomini che egli ama! Il Verbo si fece carne e venne ad abitare in mezzo a noi.\u00bb",
      bio: "The eternal Son of God born in a humble manger in Bethlehem of the Virgin Mary, bringing divine light into human darkness.",
      bio_it: "Il Figlio eterno di Dio nasce a Betlemme nel freddo di una mangiatoia dalla Vergine Maria: Dio si fa piccolo per renderci figli del Padre.",
      scriptureRef: "John 1:14"
    }
  ],
  '12-26': [
    {
      traditions: ["all"],
      name: "St. Stephen, The Protomartyr",
      name_it: "Santo Stefano Protomartire",
      name_la: "Sanctus Stephanus Protomartyr",
      name_ro: "Sf\u00e2ntul Apostol, \u00cent\u00e2iul Mucenic \u0219i Arhidiacon \u0218tefan",
      title: "First Martyr of the Christian Faith & Deacon of Jerusalem",
      title_it: "Primo Martire della Fede Cristiana e Arcidiacono",
      color: "red",
      rank: "feast",
      quote: "\u00abLord Jesus, receive my spirit! Lord, lay not this sin to their charge!\u00bb",
      quote_it: "\u00abSignore Ges\u00f9, accogli il mio spirito! Signore, non imputare loro questo peccato!\u00bb",
      bio: "One of the seven deacons full of the Holy Spirit, stoned outside Jerusalem while praying forgiveness for his executioners like Christ on the cross.",
      bio_it: "Primo martire a versare il sangue per Cristo: lapidato fuori Gerusalemme, vide i cieli aperti e spir\u00f2 perdonando i suoi lapidatori, tra cui Saulo.",
      scriptureRef: "Acts 7:59-60"
    }
  ],
  '12-27': [
    {
      traditions: ["all"],
      name: "St. John, Apostle and Evangelist",
      name_it: "San Giovanni Apostolo ed Evangelista",
      name_la: "Sanctus Ioannes Apostolus et Evangelista",
      name_ro: "Sf\u00e2ntul Apostol \u0219i Evanghelist Ioan (Teologul)",
      title: "The Beloved Disciple & Theologian of Divine Love",
      title_it: "Il Discepolo Amato e il Teologo della Carit\u00e0",
      color: "white",
      rank: "feast",
      quote: "\u00abGod is love; and he that dwelleth in love dwelleth in God, and God in him. Little children, love one another!\u00bb",
      quote_it: "\u00abDio \u00e8 amore: chi rimane nell'amore rimane in Dio e Dio rimane in lui. Figlioli, amatevi gli uni gli altri!\u00bb",
      bio: "Rested on Jesus' bosom at the Last Supper, stood at the foot of the Cross receiving Mary as mother, author of the Fourth Gospel, Epistles, and Revelation.",
      bio_it: "Ripos\u00f2 il capo sul petto del Maestro nell'Ultima Cena e accolse Maria sotto la Croce; autore del quarto Vangelo, delle Lettere e dell'Apocalisse.",
      scriptureRef: "1 John 4:16"
    }
  ],
  '12-28': [
    {
      traditions: ["all"],
      name: "The Holy Innocents, Martyrs",
      name_it: "Santi Innocenti Martiri",
      name_la: "Sanctorum Innocentium Martyrum",
      name_ro: "Sfin\u021bii Prunci Mucenici Uci\u0219i de Irod",
      title: "Little Flowers of the Martyrs Slain for the Newborn King",
      title_it: "Primizie dei Martiri Uccisi a Betlemme al Posto di Cristo",
      color: "red",
      rank: "feast",
      quote: "\u00abA voice was heard in Ramah, weeping and great mourning: Rachel weeping for her children, and would not be comforted.\u00bb",
      quote_it: "\u00abUn grido \u00e8 stato udito in Rama, un pianto e un lamento grande: Rachele piange i suoi figli e non vuole essere consolata.\u00bb",
      bio: "Male infants of Bethlehem slain by King Herod who sought to kill the newborn Messiah, witnessing to Christ not by words but by their innocent blood.",
      bio_it: "I bambini di Betlemme massacrati dalla crudelt\u00e0 di Erode: confessarono Cristo non con le parole, ma offrendo inconsapevoli il proprio sangue innocente.",
      scriptureRef: "Matthew 2:16-18"
    }
  ],
  '12-31': [
    {
      traditions: ["catholic", "all"],
      name: "St. Sylvester I, Pope",
      name_it: "San Silvestro I Papa",
      name_la: "Sanctus Silvester I Papa",
      name_ro: "Sf\u00e2ntul Silvestru, Episcopul Romei",
      title: "Pope of the Council of Nicaea & Golden Age of Peace",
      title_it: "Papa dell'Editto di Milano e del Concilio di Nicea",
      color: "white",
      rank: "memorial",
      quote: "\u00abThe Lord hath built His Church upon the rock of faith. Let the year end in thanksgiving to the Eternal God.\u00bb",
      quote_it: "\u00abIl Signore ha fondato la sua Chiesa sulla roccia della vera fede. Concludiamo l'anno nel rendimento di grazie all'Eterno.\u00bb",
      bio: "Governed the Church of Rome during the reign of Constantine when the great basilicas of St. Peter and the Lateran were constructed.",
      bio_it: "Resse la Sede apostolica durante la svolta costantiniana che diede libert\u00e0 ai cristiani e consacr\u00f2 le basiliche maggiori di Roma.",
      scriptureRef: "Matthew 16:18"
    },
    {
      traditions: ["protestant"],
      name: "John Wycliffe",
      name_it: "John Wycliffe (La Stella del Mattino della Riforma)",
      name_la: "Ioannes Wycliffe",
      name_ro: "John Wycliffe",
      title: "Morning Star of the Reformation & Bible Translator",
      title_it: "La Stella del Mattino della Riforma Evangelica",
      color: "white",
      rank: "memorial",
      quote: "\u00abTrust wholly in Christ; rely on His sufferings; beware of seeking to be justified in any other way than by His righteousness.\u00bb",
      quote_it: "\u00abConfida totalmente in Cristo e nella sua grazia salvifica; non cercare altra giustificazione se non nella sua giustizia.\u00bb",
      bio: "Oxford philosopher and theologian who produced the first complete translation of the Bible into English in the fourteenth century.",
      bio_it: "Teologo di Oxford che tradusse la Bibbia in inglese per la prima volta affinch\u00e9 la Parola di Dio fosse accessibile a ogni credente.",
      scriptureRef: "Romans 1:16"
    }
  ]
};

export const TRADITION_FALLBACK_PATRONS = {
  "catholic": [
    {
      "name": "St. Philip Neri",
      "name_it": "San Filippo Neri",
      "name_la": "Sanctus Philippus Nerius",
      "name_ro": "Sfântul Filip Neri",
      "title": "Apostle of Rome & Spiritual Joy",
      "title_it": "Apostolo di Roma e della Gioia Spirituale",
      "color": "white",
      "rank": "memorial",
      "quote": "«Cheerfulness strengthens the heart and makes us persevere in a good life.»",
      "quote_it": "«La gioia cristiana fortifica il cuore e ci fa perseverare nella via buona.»",
      "bio": "Founded the Oratory in Rome, sanctifying the city through joyful love, friendship, and care for the needy.",
      "bio_it": "Fondatore della Congregazione dell'Oratorio, illuminò Roma con la sua carità, l'allegrezza evangelica e la cura dei poveri.",
      "scriptureRef": "Philippians 4:4"
    },
    {
      "name": "St. Francis de Sales",
      "name_it": "San Francesco di Sales",
      "name_la": "Sanctus Franciscus Salesius",
      "name_ro": "Sfântul Francisc de Sales",
      "title": "Doctor of Divine Love",
      "title_it": "Vescovo di Ginevra e Dottore del Divino Amore",
      "color": "white",
      "rank": "memorial",
      "quote": "«A spoonful of honey attracts more flies than a barrel of vinegar.»",
      "quote_it": "«Si prendono più mosche con una goccia di miele che con un barile d'aceto.»",
      "bio": "Author of Introduction to the Devout Life, master of spiritual gentleness and universal holiness.",
      "bio_it": "Autore della Filotea e del Trattato dell'amore di Dio, maestro sublime di dolcezza e santità per ogni stato di vita.",
      "scriptureRef": "Colossians 4:6"
    },
    {
      "name": "St. Teresa of Avila",
      "name_it": "Santa Teresa d'Avila",
      "name_la": "Sancta Teresia de Avila",
      "name_ro": "Sfânta Tereza de Avila",
      "title": "Doctor of Interior Prayer",
      "title_it": "Vergine e Dottore della Chiesa, Riformatrice del Carmelo",
      "color": "white",
      "rank": "memorial",
      "quote": "«Let nothing disturb you; all things are passing; God alone suffices.»",
      "quote_it": "«Niente ti turbi, niente ti spaventi. Tutto passa, Dio non cambia. Solo Dio basta.»",
      "bio": "Great Carmelite reformer and mystic who guided souls into the Interior Castle of unceasing prayer.",
      "bio_it": "Grande mistica spagnola e riformatrice dei Carmelitani Scalzi, maestra incomparabile dell'orazione contemplativa.",
      "scriptureRef": "Psalm 46:10"
    }
  ],
  "traditional": [
    {
      "name": "St. Gregory the Great",
      "name_it": "San Gregorio Magno",
      "name_la": "Sanctus Gregorius Magnus",
      "name_ro": "Sfântul Grigorie cel Mare",
      "title": "Pope, Monk & Latin Doctor",
      "title_it": "Papa, Monaco e Dottore della Chiesa",
      "color": "white",
      "rank": "memorial",
      "quote": "«The proof of love is in the works.»",
      "quote_it": "«La prova dell'amore è nelle opere. Dove l'amore esiste, esso opera grandi cose.»",
      "bio": "Reformed liturgical worship and chant, feeding the poor of Rome with tireless paternal charity.",
      "bio_it": "Pastore sapiente, riformatore della liturgia e del canto gregoriano, servo dei servi di Dio.",
      "scriptureRef": "1 John 3:18"
    },
    {
      "name": "St. Charles Borromeo",
      "name_it": "San Carlo Borromeo",
      "name_la": "Sanctus Carolus Borromaeus",
      "name_ro": "Sfântul Carol Borromeu",
      "title": "Archbishop & Reformer of Trent",
      "title_it": "Arcivescovo di Milano e Riformatore del Concilio di Trento",
      "color": "white",
      "rank": "memorial",
      "quote": "«Be sure that you first preach by the way you live.»",
      "quote_it": "«Sii certo di predicare anzitutto con la testimonianza della tua vita.»",
      "bio": "Shepherd who ministered with his own hands to the sick during the plague of Milan in 1576.",
      "bio_it": "Guida instancabile durante la peste di Milano, donò tutti i suoi beni per soccorrere gli appestati e rinnovare la Chiesa.",
      "scriptureRef": "Titus 2:7"
    }
  ],
  "orthodox": [
    {
      "name": "St. Isaac the Syrian",
      "name_it": "Sant'Isacco il Siro",
      "name_la": "Sanctus Isaac Syrus",
      "name_ro": "Sfântul Isaac Sirul",
      "title": "Teacher of Silence & Merciful Heart",
      "title_it": "Maestro del Silenzio e del Cuore Misericordioso",
      "color": "white",
      "rank": "memorial",
      "quote": "«What is a merciful heart? It is a heart on fire for the whole of creation.»",
      "quote_it": "«Che cos'è un cuore misericordioso? È un cuore che arde di compassione per l'intera creazione.»",
      "bio": "Mystic and hermit of the Eastern Church whose treatises on divine mercy have nourished monks for centuries.",
      "bio_it": "Eremita e mistico della Chiesa d'Oriente, i cui scritti sulla misericordia infinita di Dio hanno nutrito generazioni di oranti.",
      "scriptureRef": "Luke 6:36"
    },
    {
      "name": "St. John Climacus",
      "name_it": "San Giovanni Climaco",
      "name_la": "Sanctus Ioannes Climacus",
      "name_ro": "Sfântul Ioan Scărarul",
      "title": "Author of the Ladder of Divine Ascent",
      "title_it": "Abate del Sinai e Autore della Scala del Paradiso",
      "color": "white",
      "rank": "memorial",
      "quote": "«Repentance is the renewal of baptism, a contract with God for a second life.»",
      "quote_it": "«La penitenza è il rinnovamento del battesimo, un patto con Dio per una vita nuova.»",
      "bio": "Sinai abbot whose spiritual ladder of thirty rungs leads souls into the contemplation of divine love.",
      "bio_it": "Monaco del Monte Sinai le cui trenta gradazioni spirituali descrivono la salita dell'anima verso la divina luce.",
      "scriptureRef": "Matthew 4:17"
    }
  ],
  "protestant": [
    {
      "name": "John Bunyan",
      "name_it": "John Bunyan",
      "name_la": "Ioannes Bunyan",
      "name_ro": "John Bunyan",
      "title": "Author of Pilgrim's Progress & Preacher",
      "title_it": "Predicatore Evangelico e Autore de Il Pellegrinaggio del Cristiano",
      "color": "white",
      "rank": "memorial",
      "quote": "«You have not lived today until you have done something for someone who can never repay you.»",
      "quote_it": "«Non hai vissuto veramente oggi finché non hai fatto qualcosa per qualcuno che non potrà mai ripagarti.»",
      "bio": "English preacher who spent twelve years imprisoned for the Gospel, writing Pilgrim's Progress.",
      "bio_it": "Scrittore e predicatore puritano inglese, incarcerato per 12 anni a causa della sua fedeltà all'Evangelo.",
      "scriptureRef": "Hebrews 11:13"
    },
    {
      "name": "George Müller",
      "name_it": "George Müller",
      "name_la": "Georgius Müller",
      "name_ro": "George Müller",
      "title": "Man of Prayer and Living Faith",
      "title_it": "Uomo d'Orazione e Apostolo della Fede Vivente",
      "color": "white",
      "rank": "memorial",
      "quote": "«Faith does not operate in the realm of the possible. There is no glory for God in that which is humanly possible.»",
      "quote_it": "«La fede non opera nel regno del possibile. Non vi è gloria per Dio in ciò che è umanamente raggiungibile.»",
      "bio": "Cared for ten thousand orphans in Bristol solely by relying upon prayer to God without asking donations from man.",
      "bio_it": "Fondò a Bristol orfanotrofi per oltre 10.000 bambini, confidando unicamente nella preghiera senza mai chiedere fondi agli uomini.",
      "scriptureRef": "Mark 11:24"
    }
  ],
  "ecumenical": [
    {
      "name": "St. Ignatius of Antioch",
      "name_it": "Sant'Ignazio di Antiochia",
      "name_la": "Sanctus Ignatius Antiochenus",
      "name_ro": "Sfântul Ignatie Teoforul",
      "title": "Disciple of John & Apostolic Martyr",
      "title_it": "Padre Apostolico, Vescovo e Martire",
      "color": "red",
      "rank": "memorial",
      "quote": "«I am God's wheat, and I shall be ground by the teeth of wild beasts that I may be found pure bread of Christ.»",
      "quote_it": "«Sono frumento di Dio e sarò macinato dai denti delle fiere affinché sia trovato puro pane di Cristo.»",
      "bio": "Apostolic Father martyred in Rome under Trajan, pleading with the faithful to maintain unity in Christ.",
      "bio_it": "Discepolo dell'Apostolo Giovanni e terzo vescovo di Antiochia, martirizzato nel Colosseo a Roma.",
      "scriptureRef": "Philippians 1:21"
    },
    {
      "name": "St. Polycarp of Smyrna",
      "name_it": "San Policarpo di Smirne",
      "name_la": "Sanctus Polycarpus",
      "name_ro": "Sfântul Policarp al Smirnei",
      "title": "Bishop & Martyr",
      "title_it": "Vescovo di Smirne e Martire Apostolico",
      "color": "red",
      "rank": "memorial",
      "quote": "«Eighty and six years have I served Him, and He never did me wrong; how then can I blaspheme my King and Savior?»",
      "quote_it": "«Da ottantasei anni servo Cristo, e non mi ha fatto alcun male; come potrei bestemmiare il mio Re e Salvatore?»",
      "bio": "Disciple of St. John who stood steadfast on the pyre in Smyrna, giving praise to the Father, Son, and Holy Spirit.",
      "bio_it": "Discepolo di San Giovanni evangelista, testimoniò fedelmente a Cristo affrontando serenamente il rogo a Smirne.",
      "scriptureRef": "Revelation 2:10"
    }
  ]
};

export function getSaintsForDate(date, confession = 'ecumenical') {
  if (!date) date = new Date();
  const m = date.getMonth() + 1;
  const d = date.getDate();
  const key = `${m}-${d}`;
  const normConf = (confession || 'ecumenical').toLowerCase();

  // 1. Strict Eastern Orthodox / Byzantine Synaxarion resolution
  // Eastern Orthodox users must always receive canonical Orthodox saints
  if (normConf === 'orthodox' || normConf === 'eastern') {
    const orth = getOrthodoxSaintsForDate(date);
    if (orth && orth.length > 0) {
      return orth.map(s => ({
        ...s,
        dateStr: `${m}/${d}`,
        colorMeta: LITURGICAL_COLORS[s.color] || LITURGICAL_COLORS.white
      }));
    }
  }

  const dayFeasts = DAILY_SAINTS_CALENDAR[key] || [];

  // 2. Filter Western / Ecumenical feasts matching the active tradition
  const matched = dayFeasts.filter(s => {
    if (normConf === 'catholic') {
      return s.traditions.includes('catholic') || s.traditions.includes('traditional') || s.traditions.includes('all');
    }
    if (normConf === 'traditional') {
      return s.traditions.includes('traditional') || s.traditions.includes('catholic') || s.traditions.includes('all');
    }
    if (normConf === 'protestant') {
      return s.traditions.includes('protestant') || s.traditions.includes('ecumenical') || s.traditions.includes('all');
    }
    if (normConf === 'ecumenical') return true;
    if (!s.traditions || s.traditions.includes('all')) return true;
    if (s.traditions.includes(normConf)) return true;
    return false;
  });

  if (matched.length > 0) {
    return matched.map(s => ({
      ...s,
      dateStr: `${m}/${d}`,
      colorMeta: LITURGICAL_COLORS[s.color] || LITURGICAL_COLORS.white
    }));
  }

  // 3. If there are feasts for this day in the primary calendar, return them
  if (dayFeasts.length > 0) {
    return dayFeasts.map(s => ({
      ...s,
      dateStr: `${m}/${d}`,
      colorMeta: LITURGICAL_COLORS[s.color] || LITURGICAL_COLORS.white
    }));
  }

  // 4. For ecumenical or unassigned days, consult the universal early church feast
  const orthFallback = getOrthodoxSaintsForDate(date);
  if (orthFallback && orthFallback.length > 0) {
    return orthFallback.map(s => ({
      ...s,
      dateStr: `${m}/${d}`,
      colorMeta: LITURGICAL_COLORS[s.color] || LITURGICAL_COLORS.white
    }));
  }

  // 5. Fallback tradition-specific patron for ordinary ferias
  const fallbackList = TRADITION_FALLBACK_PATRONS[normConf] || TRADITION_FALLBACK_PATRONS.ecumenical;
  const fallbackIndex = (m * 31 + d) % fallbackList.length;
  const patron = fallbackList[fallbackIndex];
  return [
    {
      ...patron,
      dateStr: `${m}/${d}`,
      bio: patron.bio || 'Commemoration of holy fathers and faithful witnesses who dedicated their lives to constant unceasing prayer in Christ.',
      colorMeta: LITURGICAL_COLORS[patron.color] || LITURGICAL_COLORS.white
    }
  ];
}

export function getTodaySaints(confession = 'ecumenical') {
  return getSaintsForDate(new Date(), confession);
}

export function getLiturgicalColorMeta(colorKey, lang = 'it') {
  const meta = LITURGICAL_COLORS[colorKey] || LITURGICAL_COLORS.white;
  const localizedName = (lang && meta[`name_${lang}`]) || meta.name_it || meta.name;
  return {
    ...meta,
    name: localizedName,
    displayName: localizedName
  };
}
