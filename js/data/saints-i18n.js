// Multilingual Localization Engine for Saints, Church Fathers & Liturgical Feasts
// Fully supports all 9 languages: it, en, ro, la, es, fr, de, pt, ru
// Sourced from Martyrologium Romanum, Calendarium Romanum, and historical Christian Synaxaria.

export const BIBLE_BOOKS_I18N = {
  // New Testament
  'Matthew': { it: 'Matteo', ro: 'Matei', la: 'Matthaeum', es: 'Mateo', fr: 'Matthieu', de: 'Matthäus', pt: 'Mateus', ru: 'Матфея' },
  'Mark': { it: 'Marco', ro: 'Marcu', la: 'Marcum', es: 'Marcos', fr: 'Marc', de: 'Markus', pt: 'Marcos', ru: 'Марка' },
  'Luke': { it: 'Luca', ro: 'Luca', la: 'Lucam', es: 'Lucas', fr: 'Luc', de: 'Lukas', pt: 'Lucas', ru: 'Луки' },
  'John': { it: 'Giovanni', ro: 'Ioan', la: 'Ioannem', es: 'Juan', fr: 'Jean', de: 'Johannes', pt: 'João', ru: 'Иоанна' },
  'Acts': { it: 'Atti degli Apostoli', ro: 'Faptele Apostolilor', la: 'Actus Apostolorum', es: 'Hechos', fr: 'Actes', de: 'Apostelgeschichte', pt: 'Atos', ru: 'Деяния' },
  'Romans': { it: 'Romani', ro: 'Romani', la: 'Romanos', es: 'Romanos', fr: 'Romains', de: 'Römer', pt: 'Romanos', ru: 'Римлянам' },
  '1 Corinthians': { it: '1 Corinzi', ro: '1 Corinteni', la: '1 Corinthios', es: '1 Corintios', fr: '1 Corinthiens', de: '1. Korinther', pt: '1 Coríntios', ru: '1 Коринфянам' },
  '2 Corinthians': { it: '2 Corinzi', ro: '2 Corinteni', la: '2 Corinthios', es: '2 Corintios', fr: '2 Corinthiens', de: '2. Korinther', pt: '2 Coríntios', ru: '2 Коринфянам' },
  'Galatians': { it: 'Galati', ro: 'Galateni', la: 'Galatas', es: 'Gálatas', fr: 'Galates', de: 'Galater', pt: 'Gálatas', ru: 'Галатам' },
  'Ephesians': { it: 'Efesini', ro: 'Efeseni', la: 'Ephesios', es: 'Efesios', fr: 'Éphésiens', de: 'Epheser', pt: 'Efésios', ru: 'Эфесянам' },
  'Philippians': { it: 'Filippesi', ro: 'Filipeni', la: 'Philippenses', es: 'Filipenses', fr: 'Philippiens', de: 'Philipper', pt: 'Filipenses', ru: 'Филиппийцам' },
  'Colossians': { it: 'Colossesi', ro: 'Coloseni', la: 'Colossenses', es: 'Colosenses', fr: 'Colossiens', de: 'Kolosser', pt: 'Colossenses', ru: 'Колоссянам' },
  '1 Thessalonians': { it: '1 Tessalonicesi', ro: '1 Tesaloniceni', la: '1 Thessalonicenses', es: '1 Tesalonicenses', fr: '1 Thessaloniciens', de: '1. Thessalonicher', pt: '1 Tessalonicenses', ru: '1 Фессалоникийцам' },
  '2 Thessalonians': { it: '2 Tessalonicesi', ro: '2 Tesaloniceni', la: '2 Thessalonicenses', es: '2 Tesalonicenses', fr: '2 Thessaloniciens', de: '2. Thessalonicher', pt: '2 Tessalonicenses', ru: '2 Фессалоникийцам' },
  '1 Timothy': { it: '1 Timoteo', ro: '1 Timotei', la: '1 Timotheum', es: '1 Timoteo', fr: '1 Timothée', de: '1. Timotheus', pt: '1 Timóteo', ru: '1 Тимофею' },
  '2 Timothy': { it: '2 Timoteo', ro: '2 Timotei', la: '2 Timotheum', es: '2 Timoteo', fr: '2 Timothée', de: '2. Timotheus', pt: '2 Timóteo', ru: '2 Тимофею' },
  'Titus': { it: 'Tito', ro: 'Tit', la: 'Titum', es: 'Tito', fr: 'Tite', de: 'Titus', pt: 'Tito', ru: 'Титу' },
  'Philemon': { it: 'Filemone', ro: 'Filimon', la: 'Philemonem', es: 'Filemón', fr: 'Philémon', de: 'Philemon', pt: 'Filemom', ru: 'Филимону' },
  'Hebrews': { it: 'Ebrei', ro: 'Evrei', la: 'Hebraeos', es: 'Hebreos', fr: 'Hébreux', de: 'Hebräer', pt: 'Hebreus', ru: 'Евреям' },
  'James': { it: 'Giacomo', ro: 'Iacov', la: 'Iacobum', es: 'Santiago', fr: 'Jacques', de: 'Jakobus', pt: 'Tiago', ru: 'Иакова' },
  '1 Peter': { it: '1 Pietro', ro: '1 Petru', la: '1 Petri', es: '1 Pedro', fr: '1 Pierre', de: '1. Petrus', pt: '1 Pedro', ru: '1 Петра' },
  '2 Peter': { it: '2 Pietro', ro: '2 Petru', la: '2 Petri', es: '2 Pedro', fr: '2 Pierre', de: '2. Petrus', pt: '2 Pedro', ru: '2 Петра' },
  '1 John': { it: '1 Giovanni', ro: '1 Ioan', la: '1 Ioannis', es: '1 Juan', fr: '1 Jean', de: '1. Johannes', pt: '1 João', ru: '1 Иоанна' },
  '2 John': { it: '2 Giovanni', ro: '2 Ioan', la: '2 Ioannis', es: '2 Juan', fr: '2 Jean', de: '2. Johannes', pt: '2 João', ru: '2 Иоанна' },
  '3 John': { it: '3 Giovanni', ro: '3 Ioan', la: '3 Ioannis', es: '3 Juan', fr: '3 Jean', de: '3. Johannes', pt: '3 João', ru: '3 Иоанна' },
  'Jude': { it: 'Giuda', ro: 'Iuda', la: 'Iudae', es: 'Judas', fr: 'Jude', de: 'Judas', pt: 'Judas', ru: 'Иуды' },
  'Revelation': { it: 'Apocalisse', ro: 'Apocalipsa', la: 'Apocalypsis', es: 'Apocalipsis', fr: 'Apocalypse', de: 'Offenbarung', pt: 'Apocalipse', ru: 'Откровение' },

  // Old Testament
  'Genesis': { it: 'Genesi', ro: 'Geneza', la: 'Genesis', es: 'Génesis', fr: 'Genèse', de: 'Genesis', pt: 'Gênesis', ru: 'Бытие' },
  'Exodus': { it: 'Esodo', ro: 'Exodul', la: 'Exodus', es: 'Éxodo', fr: 'Exode', de: 'Exodus', pt: 'Êxodo', ru: 'Исход' },
  'Leviticus': { it: 'Levitico', ro: 'Leviticul', la: 'Leviticus', es: 'Levítico', fr: 'Lévitique', de: 'Levitikus', pt: 'Levítico', ru: 'Левит' },
  'Numbers': { it: 'Numeri', ro: 'Numeri', la: 'Numeri', es: 'Números', fr: 'Nombres', de: 'Numeri', pt: 'Números', ru: 'Числа' },
  'Deuteronomy': { it: 'Deuteronomio', ro: 'Deuteronomul', la: 'Deuteronomium', es: 'Deuteronomio', fr: 'Deutéronome', de: 'Deuteronomium', pt: 'Deuteronômio', ru: 'Второзаконие' },
  'Joshua': { it: 'Giosuè', ro: 'Iosua', la: 'Iosue', es: 'Josué', fr: 'Josué', de: 'Josua', pt: 'Josué', ru: 'Иисуса Навина' },
  'Judges': { it: 'Giudici', ro: 'Judecători', la: 'Iudicum', es: 'Jueces', fr: 'Juges', de: 'Richter', pt: 'Juízes', ru: 'Судей' },
  'Ruth': { it: 'Rut', ro: 'Rut', la: 'Ruth', es: 'Rut', fr: 'Ruth', de: 'Rut', pt: 'Rute', ru: 'Руфь' },
  '1 Samuel': { it: '1 Samuele', ro: '1 Samuel', la: '1 Samuelis', es: '1 Samuel', fr: '1 Samuel', de: '1. Samuel', pt: '1 Samuel', ru: '1 Царств' },
  '2 Samuel': { it: '2 Samuele', ro: '2 Samuel', la: '2 Samuelis', es: '2 Samuel', fr: '2 Samuel', de: '2. Samuel', pt: '2 Samuel', ru: '2 Царств' },
  '1 Kings': { it: '1 Re', ro: '1 Regi', la: '1 Regum', es: '1 Reyes', fr: '1 Rois', de: '1. Könige', pt: '1 Reis', ru: '3 Царств' },
  '2 Kings': { it: '2 Re', ro: '2 Regi', la: '2 Regum', es: '2 Reyes', fr: '2 Rois', de: '2. Könige', pt: '2 Reis', ru: '4 Царств' },
  'Psalms': { it: 'Salmi', ro: 'Psalmii', la: 'Psalmi', es: 'Salmos', fr: 'Psaumes', de: 'Psalmen', pt: 'Salmos', ru: 'Псалтирь' },
  'Psalm': { it: 'Salmo', ro: 'Psalmul', la: 'Psalmus', es: 'Salmo', fr: 'Psaume', de: 'Psalm', pt: 'Salmo', ru: 'Псалом' },
  'Proverbs': { it: 'Proverbi', ro: 'Proverbe', la: 'Proverbia', es: 'Proverbios', fr: 'Proverbes', de: 'Sprüche', pt: 'Provérbios', ru: 'Притчи' },
  'Ecclesiastes': { it: 'Qohelet', ro: 'Eclesiastul', la: 'Ecclesiastes', es: 'Eclesiastés', fr: 'Ecclésiaste', de: 'Kohelet', pt: 'Eclesiastes', ru: 'Екклесиаст' },
  'Song of Songs': { it: 'Cantico dei Cantici', ro: 'Cântarea Cântărilor', la: 'Canticum Canticorum', es: 'Cantar de los Cantares', fr: 'Cantique des Cantiques', de: 'Hoheslied', pt: 'Cântico dos Cânticos', ru: 'Песнь песней' },
  'Isaiah': { it: 'Isaia', ro: 'Isaia', la: 'Isaias', es: 'Isaías', fr: 'Ésaïe', de: 'Jesaja', pt: 'Isaías', ru: 'Исаия' },
  'Jeremiah': { it: 'Geremia', ro: 'Ieremia', la: 'Ieremias', es: 'Jeremías', fr: 'Jérémie', de: 'Jeremia', pt: 'Jeremias', ru: 'Иеремия' },
  'Daniel': { it: 'Daniele', ro: 'Daniel', la: 'Daniel', es: 'Daniel', fr: 'Daniel', de: 'Daniel', pt: 'Daniel', ru: 'Даниил' },
  'Micah': { it: 'Michea', ro: 'Mica', la: 'Michaeas', es: 'Miqueas', fr: 'Michée', de: 'Micha', pt: 'Miquéias', ru: 'Михей' }
};

export const SAINTS_I18N_CATALOG = {
  "St. Vincent de Paul": {
    "it": {
      "name": "San Vincenzo de' Paoli",
      "title": "Apostolo della Carità e Padre dei Poveri",
      "quote": "«La carità è il cemento che unisce le comunità a Dio e le persone le une alle altre.»",
      "bio": "Consacrò la sua vita ai galeotti, agli orfani e ai contadini poveri, fondando i Lazzaristi e le Figlie della Carità con Santa Luisa de Marillac."
    },
    "es": {
      "name": "San Vicente de Paúl",
      "title": "Apóstol de la Caridad y Padre de los Pobres",
      "quote": "«La caridad es el cemento que une las comunidades a Dios y a las personas entre sí.»",
      "bio": "Consagró su vida a los galeotes, huérfanos y campesinos pobres, fundando los Paúles y las Hijas de la Caridad con Santa Luisa de Marillac."
    },
    "fr": {
      "name": "Saint Vincent de Paul",
      "title": "Apôtre de la Charité et Père des Pauvres",
      "quote": "«La charité est le ciment qui lie les communautés à Dieu et les personnes les unes aux autres.»",
      "bio": "Consacra sa vie aux galériens, orphelins et paysans pauvres, fondant la Congrégation de la Mission et les Filles de la Charité avec Sainte Louise de Marillac."
    },
    "de": {
      "name": "Hl. Vinzenz von Paul",
      "title": "Apostel der Nächstenliebe und Vater der Armen",
      "quote": "«Die Liebe ist der Zement, der Gemeinschaften mit Gott und die Menschen untereinander verbindet.»",
      "bio": "Widmete sein Leben den Galeerensklaven, Waisen und Armen und gründete die Lazaristen und Barmherzigen Schwestern mit der hl. Luise von Marillac."
    },
    "pt": {
      "name": "São Vicente de Paulo",
      "title": "Apóstolo da Caridade e Pai dos Pobres",
      "quote": "«A caridade é o cimento que une as comunidades a Deus e as pessoas umas às outras.»",
      "bio": "Consagrou sua vida aos encarcerados, órfãos e camponeses pobres, fundando os Lazaristas e as Filhas da Caridade com Santa Luísa de Marillac."
    },
    "ro": {
      "name": "Sfântul Vincențiu de Paul",
      "title": "Apostolul Carității și Părintele Săracilor",
      "quote": "«Iubirea milostivă este cimentul care unește comunitățile cu Dumnezeu și oamenii între ei.»",
      "bio": "Și-a închinat viața slujirii celor mai săraci, orfanilor și deținuților, întemeind Fiicele Carității și Lazariștii cu Sfânta Luiza de Marillac."
    },
    "la": {
      "name": "Sanctus Vincentius a Paulo",
      "title": "Apostolus Caritatis et Pater Pauperum",
      "quote": "«Caritas est vinculum quod communitates Deo et homines inter se coniungit.»",
      "bio": "Vitam suam pauperibus, captivis et orphanis devovit, Congregationem Missionis et Puellas Caritatis fundans."
    },
    "ru": {
      "name": "Св. Викентий де Поль",
      "title": "Апостол милосердия и отец бедных",
      "quote": "«Любовь к ближнему — это цемент, связывающий общины с Богом и людей друг с другом.»",
      "bio": "Посвятил жизнь служению каторжникам, сиротам и бедным, основав конгрегацию лазаристов и Дочерей милосердия со св. Луизой де Марийяк."
    },
    "en": {
      "name": "St. Vincent de Paul",
      "title": "Apostle of Charity & Father of the Poor",
      "quote": "«Charity is the cement which binds communities to God and persons to one another.»",
      "bio": "Devoted his life to galley slaves, orphans, and peasants, founding the Congregation of the Mission (Lazarists) and Daughters of Charity."
    }
  },
  "St. Callistratus and His Companions, Martyrs": {
    "it": {
      "name": "San Callistrato e Compagni Martiri",
      "title": "Coraggiosi Martiri di Roma sotto Diocleziano",
      "quote": "«Apparteniamo a Cristo nostro Signore e Re, e mai offriremo sacrifici agli idoli.»",
      "bio": "Soldato romano la cui miracolosa fortezza condusse 49 compagni d'armi a confessare Cristo e a ricevere la corona del martirio."
    },
    "es": {
      "name": "San Calístrato y Compañeros Mártires",
      "title": "Valientes Mártires de Roma bajo Diocleciano",
      "quote": "«Pertenecemos a Cristo nuestro Señor y Rey, y jamás ofreceremos sacrificios a los ídolos.»",
      "bio": "Soldado romano cuya milagrosa fortaleza condujo a 49 compañeros a confesar a Cristo y recibir la corona del martirio."
    },
    "fr": {
      "name": "Saint Callistrate et ses Compagnons Martyrs",
      "title": "Courageux Martyrs de Rome sous Dioclétien",
      "quote": "«Nous appartenons au Christ notre Seigneur et Roi, et jamais nous n'offrirons de sacrifice aux idoles.»",
      "bio": "Soldat romain dont la constance miraculeuse amena 49 soldats à confesser le Christ et recevoir la couronne du martyre."
    },
    "de": {
      "name": "Hl. Kallistratus und Gefährten, Märtyrer",
      "title": "Mutige Märtyrer von Rom unter Diokletian",
      "quote": "«Wir gehören Christus, unserem Herrn und König, und werden niemals den Götzen opfern.»",
      "bio": "Römischer Soldat, dessen wundersame Standhaftigkeit 49 Gefährten zum Bekenntnis zu Christus und zum Martyrium führte."
    },
    "pt": {
      "name": "São Calístrato e Companheiros Mártires",
      "title": "Corajosos Mártires de Roma sob Diocleciano",
      "quote": "«Pertencemos a Cristo, nosso Senhor e Rei, e jamais ofereceremos sacrifícios aos ídolos.»",
      "bio": "Soldado romano cuja milagrosa fortaleza levou 49 companheiros a confessar Cristo e receber a coroa do martírio."
    },
    "ro": {
      "name": "Sfântul Mucenic Calistrat și cei 49 de Mucenici",
      "title": "Viteji Mucenici din Roma sub Dioclețian",
      "quote": "«Noi aparținem lui Hristos, Domnul și Împăratul nostru, și niciodată nu vom aduce jertfă idolilor.»",
      "bio": "Ostaș roman a cărui minunată răbdare a călăuzit 49 de ostași să mărturisească pe Hristos și să primească cununa muceniciei."
    },
    "la": {
      "name": "Sanctus Callistratus et Socii Martyres",
      "title": "Fortissimi Martyres Romani sub Diocletiano",
      "quote": "«Christi Domini et Regis nostri sumus, et idolis numquam sacrificabimus.»",
      "bio": "Miles Romanus cuius admirabilis patientia 49 commilitones ad Christum confitendum et martyrii coronam accipiendam adduxit."
    },
    "ru": {
      "name": "Св. мученик Каллистрат и 49 дружинников",
      "title": "Мужественные мученики Рима при Диоклетиане",
      "quote": "«Мы принадлежим Христу, нашему Господу и Царю, и никогда не принесем жертвы идолам.»",
      "bio": "Римский воин, чья чудесная стойкость привела 49 сослуживцев ко Христу и мученическому венцу."
    },
    "en": {
      "name": "St. Callistratus and His Companions, Martyrs",
      "title": "Courageous Martyrs of Rome",
      "quote": "«We belong to Christ our Lord and King, and we will never offer sacrifice to idols.»",
      "bio": "Roman soldier whose miraculous endurance led 49 fellow soldiers to confess Christ and receive the crown of martyrdom."
    }
  },
  "George Whitefield (Commemoration of Gospel Preaching)": {
    "it": {
      "name": "George Whitefield (Apostolo del Grande Risveglio)",
      "title": "Voce del Grande Risveglio e Predicatore Evangelico",
      "quote": "«Sono felice di essere dimenticato, purché Cristo sia ricordato! Perisca pure il nome di Whitefield, purché Cristo sia esaltato.»",
      "bio": "Predicò l'Evangelo a milioni di persone nelle piazze e nei campi di Gran Bretagna e America, richiamando tutti alla nuova nascita in Cristo."
    },
    "es": {
      "name": "George Whitefield (Apóstol del Gran Despertar)",
      "title": "Voz del Gran Despertar y Predicador Evangélico",
      "quote": "«¡Me alegro de ser olvidado, con tal de que Cristo sea recordado! Que perezca el nombre de Whitefield, mientras Cristo sea exaltado.»",
      "bio": "Predicó el Evangelio a millones en plazas y campos de Gran Bretaña y América, proclamando el nuevo nacimiento en Cristo."
    },
    "fr": {
      "name": "George Whitefield (Apôtre du Grand Réveil)",
      "title": "Voix du Grand Réveil et Prédicateur Évangélique",
      "quote": "«Je suis heureux d'être oublié, pourvu que le Christ soit remémoré ! Que le nom de Whitefield périsse, pourvu que le Christ soit exalté.»",
      "bio": "Prêcha l'Évangile à des millions de personnes en plein air en Grande-Bretagne et en Amérique, appelant à la nouvelle naissance en Christ."
    },
    "de": {
      "name": "George Whitefield (Apostel der Großen Erweckung)",
      "title": "Stimme der Großen Erweckung und Prediger",
      "quote": "«Ich bin zufrieden damit, vergessen zu werden, solange Christus erinnert wird! Möge der Name Whitefield vergehen, solange Christus erhöht wird.»",
      "bio": "Predigte das Evangelium vor Millionen Menschen in Großbritannien und Amerika und rief zur Neugeburt in Christus auf."
    },
    "pt": {
      "name": "George Whitefield (Apóstolo do Grande Despertar)",
      "title": "Voz do Grande Despertar e Pregador Evangélico",
      "quote": "«Fico feliz em ser esquecido, contanto que Cristo seja lembrado! Pereça o nome de Whitefield, contanto que Cristo seja exaltado.»",
      "bio": "Pregou o Evangelho a milhões ao ar livre na Grã-Bretanha e América, chamando todos ao novo nascimento em Cristo."
    },
    "ro": {
      "name": "George Whitefield (Apostolul Marii Treziri)",
      "title": "Glasul Marii Treziri Spirituale",
      "quote": "«Mă bucur să fiu dat uitării, numai Hristos să fie ținut minte! Piară numele lui Whitefield, atâta timp cât Hristos este înălțat.»",
      "bio": "A vestit Evanghelia la milioane de oameni în aer liber în Marea Britanie și America, chemând la nașterea din nou în Hristos."
    },
    "la": {
      "name": "Georgius Whitefield",
      "title": "Vox Magnae Excitationis et Praedicator Evangelicus",
      "quote": "«Oblivioni traditus gaudeo, dummodo Christus in memoria habeatur! Pereat nomen Whitefield, dummodo Christus exaltetur.»",
      "bio": "Evangelium multis milibus hominum in Britannia et America praedicavit, ad novam vitam in Christo omnes vocans."
    },
    "ru": {
      "name": "Джордж Уайтфилд (Апостол пробуждения)",
      "title": "Голос Великого пробуждения и проповедник",
      "quote": "«Я рад быть забытым, лишь бы Христа помнили! Пусть погибнет имя Уайтфилда, лишь бы возвеличился Христос.»",
      "bio": "Проповедовал Евангелие миллионам людей в Британии и Америке, призывая к рождению свыше во Христе."
    },
    "en": {
      "name": "George Whitefield (Commemoration of Gospel Preaching)",
      "title": "Voice of the Great Awakening & Open-Air Preacher",
      "quote": "«I am content to be forgotten, if Christ be remembered! Let the name of Whitefield perish, so long as Christ is exalted.»",
      "bio": "Preached the Gospel to over ten million people in Great Britain and America, pointing all to the necessity of the new birth in Christ."
    }
  },
  "St. Philip Neri": {
    "it": {
      "name": "San Filippo Neri",
      "title": "Apostolo di Roma e della Gioia Spirituale",
      "quote": "«La gioia cristiana fortifica il cuore e ci fa perseverare nella via buona.»",
      "bio": "Fondatore dell'Oratorio, rinnovò Roma con la carità verso i giovani e la cura dei poveri."
    },
    "es": {
      "name": "San Felipe Neri",
      "title": "Apóstol de Roma y de la Alegría Espiritual",
      "quote": "«La alegría cristiana fortalece el corazón y nos hace perseverar en el bien.»",
      "bio": "Fundador del Oratorio, renovó Roma con su caridad hacia los jóvenes y los pobres."
    },
    "fr": {
      "name": "Saint Philippe Néri",
      "title": "Apôtre de Rome et de la Joie Spirituelle",
      "quote": "«La joie chrétienne fortifie le cœur et nous fait persévérer dans le bien.»",
      "bio": "Fondateur de l'Oratoire, il renouvela Rome par sa charité envers les jeunes et les pauvres."
    },
    "de": {
      "name": "Hl. Philipp Neri",
      "title": "Apostel von Rom und der geistlichen Freude",
      "quote": "«Christliche Freude stärkt das Herz und lässt uns im Guten verharren.»",
      "bio": "Gründer des Oratoriums, erneuerte Rom durch Liebe zu den Jugendlichen und Armen."
    },
    "pt": {
      "name": "São Filipe Néri",
      "title": "Apóstolo de Roma e da Alegria Espiritual",
      "quote": "«A alegria cristã fortalece o coração e nos faz perseverar no bem.»",
      "bio": "Fundador do Oratório, renovou Roma pela caridade para com os jovens e os pobres."
    },
    "ro": {
      "name": "Sfântul Filip Neri",
      "title": "Apostolul Romei și al Bucuriei Duhovnicești",
      "quote": "«Bucuria creștină întărește inima și ne face să stăruim în bine.»",
      "bio": "Întemeietorul Oratoriului, a luminat Roma prin iubire de tineri și îngrijirea săracilor."
    },
    "la": {
      "name": "Sanctus Philippus Nerius",
      "title": "Apostolus Romae et Gaudii Spiritualis",
      "quote": "«Laetitia christiana cor roborat et in bono perseverare facit.»",
      "bio": "Congregationis Oratorii fundator, caritate in pauperes et iuvenes Romam renovavit."
    },
    "ru": {
      "name": "Св. Филипп Нери",
      "title": "Апостол Рима и духовной радости",
      "quote": "«Христианская радость укрепляет сердце и помогает пребывать в добре.»",
      "bio": "Основатель Оратория, обновил Рим любовью к молодежи и служением бедным."
    },
    "en": {
      "name": "St. Philip Neri",
      "title": "Apostle of Rome & Spiritual Joy",
      "quote": "«Cheerfulness strengthens the heart and makes us persevere in a good life.»",
      "bio": "Founded the Oratory in Rome, sanctifying the city through joyful love, friendship, and care for the needy."
    }
  },
  "St. Francis of Assisi": {
    "it": {
      "name": "San Francesco d'Assisi",
      "title": "Il Poverello d'Assisi, Araldo di Pace Universale",
      "quote": "«Signore, fa' di me uno strumento della tua pace: dove è odio, ch'io porti l'amore.»",
      "bio": "Rinunciò a ogni ricchezza mondana per abbracciare la radicale povertà evangelica e la comunione con il Creato."
    },
    "es": {
      "name": "San Francisco de Asís",
      "title": "El Poverello de Asís, Heraldo de Paz Universal",
      "quote": "«Señor, hazme un instrumento de tu paz: donde haya odio, siembre yo amor.»",
      "bio": "Renunció a toda riqueza mundana para abrazar la pobreza evangélica y la fraternidad universal."
    },
    "fr": {
      "name": "Saint François d'Assise",
      "title": "Le Poverello d'Assise, Héraut de Paix Universelle",
      "quote": "«Seigneur, fais de moi un instrument de ta paix : là où est la haine, que je mette l'amour.»",
      "bio": "Renonça aux richesses du monde pour embrasser la pauvreté évangélique et l'amour de la Création."
    },
    "de": {
      "name": "Hl. Franz von Assisi",
      "title": "Der Poverello von Assisi, Bote des Friedens",
      "quote": "«Herr, mache mich zu einem Werkzeug deines Friedens: wo Hass herrscht, lass mich Liebe säen.»",
      "bio": "Entsagte allem Reichtum, um die radikale Armut des Evangeliums und die Liebe zur Schöpfung zu leben."
    },
    "pt": {
      "name": "São Francisco de Assis",
      "title": "O Poverello de Assis, Arauto da Paz Universal",
      "quote": "«Senhor, fazei-me um instrumento da vossa paz: onde houver ódio, que eu leve o amor.»",
      "bio": "Renunciou a todas as riquezas para abraçar a pobreza evangélica e a comunhão com a Criação."
    },
    "ro": {
      "name": "Sfântul Francisc de Assisi",
      "title": "Sărăcuțul din Assisi, Vestitor al Păcii",
      "quote": "«Doamne, fă din mine un instrument al păcii Tale: unde este ură, să aduc iubire.»",
      "bio": "A renunțat la averi pământești pentru a trăi desăvârșita sărăcie evanghelică și dragostea de făptură."
    },
    "la": {
      "name": "Sanctus Franciscus Asisiensis",
      "title": "Pauperculus Asisiensis et Pacis Praeco",
      "quote": "«Domine, fac me instrumentum pacis tuae: ubi est odium, ibi ponam amorem.»",
      "bio": "Mundanis divitiis relictis, evangelicam paupertatem et amorem erga omnem creaturam amplexus est."
    },
    "ru": {
      "name": "Св. Франциск Ассизский",
      "title": "Беднячок из Ассизи, глашатай всеобщего мира",
      "quote": "«Господи, сделай меня орудием Твоего мира: туда, где ненависть, дай мне принести любовь.»",
      "bio": "Отрекся от мирских богатств ради евангельской нищеты и любви ко всякому творению."
    },
    "en": {
      "name": "St. Francis of Assisi",
      "title": "Poverello of Assisi, Herald of Universal Peace",
      "quote": "«Lord, make me an instrument of your peace. Where there is hatred, let me sow love.»",
      "bio": "Renounced all worldly wealth to embrace radical Gospel poverty and kinship with all creation."
    }
  },
  "St. Thérèse of Lisieux": {
    "it": {
      "name": "Santa Teresa di Gesù Bambino",
      "title": "Dottore della Chiesa e Maestra della Piccola Via",
      "quote": "«La mia vocazione è l'amore! Nel cuore della Chiesa, mia Madre, io sarò l'amore.»",
      "bio": "Insegnò che la santità consiste nel fare le più piccole azioni quotidiane con amore infinito per Cristo."
    },
    "es": {
      "name": "Santa Teresita del Niño Jesús",
      "title": "Doctora de la Iglesia y Maestra del Caminito",
      "quote": "«¡Mi vocación es el amor! En el corazón de la Iglesia, mi Madre, yo seré el amor.»",
      "bio": "Enseñó que la santidad consiste en realizar las acciones más pequeñas con infinito amor a Dios."
    },
    "fr": {
      "name": "Sainte Thérèse de l'Enfant-Jésus",
      "title": "Docteur de l'Église et Maîtresse de la Petite Voie",
      "quote": "«Ma vocation, c'est l'Amour ! Dans le cœur de l'Église, ma Mère, je serai l'Amour.»",
      "bio": "Enseigna que la sainteté consiste à poser les moindres actes du quotidien avec un amour infini pour le Christ."
    },
    "de": {
      "name": "Hl. Theresia vom Kinde Jesu",
      "title": "Kirchenlehrerin und Meisterin des kleinen Weges",
      "quote": "«Meine Berufung ist die Liebe! Im Herzen der Kirche, meiner Mutter, will ich die Liebe sein.»",
      "bio": "Lehrte, dass Heiligkeit darin besteht, die kleinsten täglichen Dinge mit unendlicher Liebe zu tun."
    },
    "pt": {
      "name": "Santa Teresinha do Menino Jesus",
      "title": "Doutora da Igreja e Mestra da Pequena Via",
      "quote": "«Minha vocação é o amor! No coração da Igreja, minha Mãe, eu serei o amor.»",
      "bio": "Ensinou que a santidade consiste em realizar as menores ações com infinito amor por Cristo."
    },
    "ro": {
      "name": "Sfânta Tereza a Pruncului Isus",
      "title": "Doctor al Bisericii și Învățătoare a Căii Mici",
      "quote": "«Vocația mea este iubirea! În inima Bisericii, Mama mea, eu voi fi iubirea.»",
      "bio": "A arătat că sfințenia constă în a săvârși cele mai mărunte fapte zilnice cu iubire nemărginită."
    },
    "la": {
      "name": "Sancta Teresia a Iesu Infante",
      "title": "Doctor Ecclesiae et Magistra Viae Parvae",
      "quote": "«Vocatio mea amor est! In corde Ecclesiae, Matris meae, amor ero.»",
      "bio": "Docuit sanctitatem in minimis actibus cum infinito amore erga Christum consistere."
    },
    "ru": {
      "name": "Св. Тереза из Лизьё",
      "title": "Учитель Церкви и наставница Малого пути",
      "quote": "«Мое призвание — Любовь! В сердце Церкви, моей Матери, я буду Любовью.»",
      "bio": "Учила, что святость заключается в совершении малейших дел с бесконечной любовью ко Христу."
    },
    "en": {
      "name": "St. Thérèse of Lisieux",
      "title": "Doctor of the Church & Little Way of Spiritual Childhood",
      "quote": "«My vocation is love! In the heart of the Church, my Mother, I will be love.»",
      "bio": "Taught that holiness is not performing grand deeds, but doing the smallest actions with infinite love."
    }
  },
  "St. Augustine of Hippo": {
    "it": {
      "name": "Sant'Agostino d'Ippona",
      "title": "Vescovo e Dottore della Grazia",
      "quote": "«Ci hai fatti per te, o Signore, e il nostro cuore è inquieto finché non riposa in te.»",
      "bio": "Dalla giovinezza inquieta alla conversione, divenne uno dei teologi più profondi della Chiesa."
    },
    "es": {
      "name": "San Agustín de Hipona",
      "title": "Obispo y Doctor de la Gracia",
      "quote": "«Nos hiciste, Señor, para ti, y nuestro corazón está inquieto hasta que descanse en ti.»",
      "bio": "De la juventud inquieta a la conversión, fue uno de los teólogos más profundos de la cristiandad."
    },
    "fr": {
      "name": "Saint Augustin d'Hippone",
      "title": "Évêque et Docteur de la Grâce",
      "quote": "«Tu nous as faits pour toi, Seigneur, et notre cœur est sans repos tant qu'il ne repose en toi.»",
      "bio": "D'une jeunesse tourmentée à la conversion, il devint l'un des plus grands théologiens de l'Église."
    },
    "de": {
      "name": "Hl. Augustinus von Hippo",
      "title": "Bischof und Lehrer der Gnade",
      "quote": "«Du hast uns auf dich hin geschaffen, o Herr, und unruhig ist unser Herz, bis es ruht in dir.»",
      "bio": "Von unruhiger Jugend zur Bekehrung, wurde er einer der tiefsten Denker der Kirchengeschichte."
    },
    "pt": {
      "name": "Santo Agostinho de Hipona",
      "title": "Bispo e Doutor da Graça",
      "quote": "«Fizeste-nos para ti, Senhor, e o nosso coração está inquieto enquanto não descansar em ti.»",
      "bio": "Da juventude inquieta à conversão radical, tornou-se um dos maiores teólogos da história cristã."
    },
    "ro": {
      "name": "Sfântul Augustin de Hipona",
      "title": "Episcop și Doctor al Harului",
      "quote": "«Ne-ai făcut pentru Tine, Doamne, și neliniștită este inima noastră până nu se odihnește în Tine.»",
      "bio": "De la căutările tinereții la convertire, a devenit unul dintre cei mai profunzi teologi ai Bisericii."
    },
    "la": {
      "name": "Sanctus Augustinus Hipponensis",
      "title": "Episcopus et Doctor Gratiae",
      "quote": "«Fecisti nos ad te, Domine, et inquietum est cor nostrum donec requiescat in te.»",
      "bio": "Ex errante iuventute ad fidem conversus, profundissimus Ecclesiae doctor et theologus evasit."
    },
    "ru": {
      "name": "Св. Августин Иппонийский",
      "title": "Епископ и Учитель благодати",
      "quote": "«Ты создал нас для Себя, Господи, и не знает покоя сердце наше, пока не успокоится в Тебе.»",
      "bio": "От мятежной юности обратился ко Христу и стал одним из глубочайших богословов Церкви."
    },
    "en": {
      "name": "St. Augustine of Hippo",
      "title": "Doctor of Grace & Western Church Father",
      "quote": "«You have made us for yourself, O Lord, and our heart is restless until it rests in you.»",
      "bio": "From a wandering, restless youth to one of the most profound theologians in Christian history."
    }
  },
  "The Apostles Peter & Paul": {
    "it": {
      "name": "Santi Apostoli Pietro e Paolo",
      "title": "Colonne della Chiesa e Martiri a Roma",
      "quote": "«Signore, da chi andremo? Tu solo hai parole di vita eterna.»",
      "bio": "Uniti nella fede e nel martirio a Roma sotto Nerone, annunciarono l'Evangelo a tutte le genti."
    },
    "es": {
      "name": "Santos Apóstoles Pedro y Pablo",
      "title": "Columnas de la Iglesia y Mártires en Roma",
      "quote": "«Señor, ¿a quién iremos? Tú tienes palabras de vida eterna.»",
      "bio": "Unidos en la fe y el martirio en Roma bajo Nerón, proclamaron el Evangelio a todas las naciones."
    },
    "fr": {
      "name": "Saints Apôtres Pierre et Paul",
      "title": "Colonnes de l'Église et Martyrs à Rome",
      "quote": "«Seigneur, à qui irions-nous ? Tu as les paroles de la vie éternelle.»",
      "bio": "Unis dans la foi et le martyre à Rome sous Néron, ils proclamèrent l'Évangile à toutes les nations."
    },
    "de": {
      "name": "Hll. Apostel Petrus und Paulus",
      "title": "Säulen der Kirche und Märtyrer in Rom",
      "quote": "«Herr, zu wem sollen wir gehen? Du hast Worte des ewigen Lebens.»",
      "bio": "Vereint in Glaube und Martyrium in Rom unter Nero, verkündeten sie das Evangelium allen Völkern."
    },
    "pt": {
      "name": "Santos Apóstolos Pedro e Paulo",
      "title": "Colunas da Igreja e Mártires em Roma",
      "quote": "«Senhor, para quem iremos nós? Tu tens as palavras da vida eterna.»",
      "bio": "Unidos na fé e no martírio em Roma sob Nero, proclamaram o Evangelho a todas as nações."
    },
    "ro": {
      "name": "Sfinții Apostoli Petru și Pavel",
      "title": "Stâlpii Bisericii și Mucenici la Roma",
      "quote": "«Doamne, la cine ne vom duce? Tu ai cuvintele vieții veșnice.»",
      "bio": "Uniți în credință și mucenicie la Roma sub Nero, au vestit Evanghelia la toate neamurile."
    },
    "la": {
      "name": "Sancti Apostoli Petrus et Paulus",
      "title": "Columnae Ecclesiae et Martyres Romae",
      "quote": "«Domine, ad quem ibimus? Verba vitae aeternae habes.»",
      "bio": "In fide et martyrio Romae sub Nerone coniuncti, Evangelium omnibus gentibus nuntiaverunt."
    },
    "ru": {
      "name": "Свв. первоверховные апостолы Петр и Павел",
      "title": "Столпы Церкви и мученики Рима",
      "quote": "«Господи! к кому нам идти? Ты имеешь глаголы вечной жизни.»",
      "bio": "Соединенные в вере и мученичестве в Риме при Нероне, возвестили Евангелие всем народам."
    },
    "en": {
      "name": "The Apostles Peter & Paul",
      "title": "Pillars of the Early Church & Universal Witnesses",
      "quote": "«Lord, to whom shall we go? You have the words of eternal life.»",
      "bio": "United in faith and martyrdom in Rome, proclaiming the Gospel across all nations."
    }
  },
  "St. Mary, Mother of the Lord": {
    "it": {
      "name": "Santa Maria, Madre del Signore",
      "title": "L'Ancella del Signore e Arca della Nuova Alleanza",
      "quote": "«L'anima mia magnifica il Signore e il mio spirito esulta in Dio mio Salvatore.»",
      "bio": "Con il suo umile \"Sì\", l'Eterno Verbo si è fatto carne nel suo grembo verginale per la salvezza del mondo."
    },
    "es": {
      "name": "Santa María, Madre del Señor",
      "title": "La Esclava del Señor y Arca de la Nueva Alianza",
      "quote": "«Proclama mi alma la grandeza del Señor, y se alegra mi espíritu en Dios, mi Salvador.»",
      "bio": "Con su humilde \"Sí\", el Verbo eterno se encarnó en su seno virginal para salvación del mundo."
    },
    "fr": {
      "name": "Sainte Marie, Mère du Seigneur",
      "title": "La Servante du Seigneur et Arche de la Nouvelle Alliance",
      "quote": "«Mon âme exalte le Seigneur, et mon esprit se réjouit en Dieu mon Sauveur.»",
      "bio": "Par son humble « Oui », le Verbe éternel s'est fait chair en son sein virginal pour le salut du monde."
    },
    "de": {
      "name": "Hl. Maria, Mutter des Herrn",
      "title": "Die Magd des Herrn und Bundeslade des Neuen Bundes",
      "quote": "«Meine Seele preist die Größe des Herrn, und mein Geist jubelt über Gott, meinen Retter.»",
      "bio": "Durch ihr demütiges Ja wurde das ewige Wort in ihrem jungfräulichen Schoß Mensch zur Rettung der Welt."
    },
    "pt": {
      "name": "Santa Maria, Mãe do Senhor",
      "title": "A Serva do Senhor e Arca da Nova Aliança",
      "quote": "«A minha alma engrandece o Senhor, e o meu espírito se alegra em Deus, meu Salvador.»",
      "bio": "Com o seu humilde \"Sim\", o Verbo eterno se fez carne em seu ventre virginal para a salvação do mundo."
    },
    "ro": {
      "name": "Sfânta Maria, Maica Domnului",
      "title": "Raba Domnului și Chivotul Noului Legământ",
      "quote": "«Mărește, sufletul meu, pe Domnul și s-a bucurat duhul meu de Dumnezeu, Mântuitorul meu.»",
      "bio": "Prin smeritul ei „Fie mie”, Cuvântul veșnic s-a întrupat în pântecele ei feciorelnic pentru mântuirea lumii."
    },
    "la": {
      "name": "Sancta Maria, Mater Domini",
      "title": "Ancilla Domini et Arca Novi Foederis",
      "quote": "«Magnificat anima mea Dominum, et exsultavit spiritus meus in Deo salvatore meo.»",
      "bio": "Humili suo \"Fiat\", Verbum aeternum in sinu eius virginali caro factum est pro salute mundi."
    },
    "ru": {
      "name": "Пресвятая Богородица, Матерь Господа",
      "title": "Раба Господня и Ковчег Нового Завета",
      "quote": "«Величит душа Моя Господа, и возрадовался дух Мой о Боге, Спасителе Моем.»",
      "bio": "Своим смиренным согласием приняла воплощение Предвечного Слова в девственной утробе ради спасения мира."
    },
    "en": {
      "name": "St. Mary, Mother of the Lord",
      "title": "The Handmaid of the Lord & Ark of the New Covenant",
      "quote": "«My soul magnifies the Lord, and my spirit rejoices in God my Savior.»",
      "bio": "Her humble \"Fiat\" brought salvation into human history."
    }
  },
  "Dietrich Bonhoeffer": {
    "it": {
      "name": "Dietrich Bonhoeffer",
      "title": "Martire della Fede e Testimone della Grazia a Caro Prezzo",
      "quote": "«La grazia a buon mercato è la grazia senza discepolato, la grazia senza la croce, la grazia senza Gesù Cristo.»",
      "bio": "Pastore luterano e teologo che si oppose intrepidamente al nazismo, testimoniando la fedeltà a Cristo fino al patibolo."
    },
    "es": {
      "name": "Dietrich Bonhoeffer",
      "title": "Mártir de la Fe y Testigo de la Gracia Cara",
      "quote": "«La gracia barata es la gracia sin discipulado, la gracia sin cruz, la gracia sin Jesucristo.»",
      "bio": "Pastor luterano y teólogo que resistió con valentía al nazismo, dando testimonio de Cristo hasta el martirio."
    },
    "fr": {
      "name": "Dietrich Bonhoeffer",
      "title": "Martyr de la Foi et Témoin de la Grâce qui Coûte",
      "quote": "«La grâce à bon marché, c'est la grâce sans discipulat, la grâce sans la croix, la grâce sans Jésus-Christ.»",
      "bio": "Pasteur luthérien et théologien qui s'opposa courageusement au nazisme, témoignant de sa foi jusqu'au martyre."
    },
    "de": {
      "name": "Dietrich Bonhoeffer",
      "title": "Märtyrer des Glaubens und Zeuge der teuren Gnade",
      "quote": "«Billige Gnade ist Gnade ohne Nachfolge, Gnade ohne Kreuz, Gnade ohne Jesus Christus.»",
      "bio": "Lutherischer Pfarrer und Theologe, der mutig dem Naziregime widerstand und seinen Glauben mit dem Leben bezeugte."
    },
    "pt": {
      "name": "Dietrich Bonhoeffer",
      "title": "Mártir da Fé e Testemunha da Graça Preciosa",
      "quote": "«A graça barata é a graça sem discipulado, a graça sem cruz, a graça sem Jesus Cristo.»",
      "bio": "Pastor luterano e teólogo que resistiu corajosamente ao nazismo, testemunhando a fidelidade a Cristo até o martírio."
    },
    "ro": {
      "name": "Dietrich Bonhoeffer",
      "title": "Martir al Credinței și Martor al Harului Scump",
      "quote": "«Harul ieftin este harul fără ucenicie, harul fără cruce, harul fără Isus Hristos.»",
      "bio": "Pastor luteran și teolog care s-a împotrivit tiraniei naziste, mărturisindu-L pe Hristos până la moarte."
    },
    "la": {
      "name": "Theodoricus Bonhoeffer",
      "title": "Fidei Martyr et Gratiae Pretiosae Testis",
      "quote": "«Gratia vilis est gratia sine discipulatu, sine cruce, sine Iesu Christo.»",
      "bio": "Pastor lutheranus et theologus qui tyrannidi fortiter restitit, usque ad mortem Christum confitens."
    },
    "ru": {
      "name": "Дитрих Бонхёффер",
      "title": "Мученик веры и свидетель дорогой благодати",
      "quote": "«Дешевая благодать — это благодать без следования за Христом, благодать без креста, без Иисуса Христа.»",
      "bio": "Лютеранский пастор и богослов, мужественно противостоявший нацизму и отдавший жизнь за Христа."
    },
    "en": {
      "name": "Dietrich Bonhoeffer",
      "title": "Martyr of Faith & Preacher of Costly Grace",
      "quote": "«Cheap grace is grace without discipleship, grace without the cross, grace without Jesus Christ.»",
      "bio": "Lutheran pastor and theologian who stood fearlessly against tyranny, witnessing to Christ unto martyrdom."
    }
  },
  "Martin Luther": {
    "it": {
      "name": "Martin Lutero",
      "title": "Riformatore e Traduttore delle Sacre Scritture",
      "quote": "«La mia coscienza è prigioniera della Parola di Dio. Qui sto, non posso fare altrimenti. Dio mi aiuti.»",
      "bio": "Restaurò la proclamazione della giustificazione per sola fede e tradusse la Bibbia nella lingua del popolo."
    },
    "es": {
      "name": "Martín Lutero",
      "title": "Reformador y Traductor de las Sagradas Escrituras",
      "quote": "«Mi conciencia está cautiva de la Palabra de Dios. Aquí permanezco; no puedo hacer otra cosa. Que Dios me ayude.»",
      "bio": "Restauró la proclamación de la justificación por la sola fe y tradujo la Biblia al idioma del pueblo."
    },
    "fr": {
      "name": "Martin Luther",
      "title": "Réformateur et Traducteur des Saintes Écritures",
      "quote": "«Ma conscience est captive de la Parole de Dieu. Je m'y tiens, je ne puis autrement. Que Dieu me vienne en aide.»",
      "bio": "Restaura la proclamation de la justification par la foi seule et traduisit la Bible dans la langue du peuple."
    },
    "de": {
      "name": "Martin Luther",
      "title": "Reformator und Übersetzer der Heiligen Schrift",
      "quote": "«Mein Gewissen ist in den Worten Gottes gefangen. Hier stehe ich, ich kann nicht anders. Gott helfe mir.»",
      "bio": "Erneuerte die Verkündigung der Rechtfertigung allein aus Glauben und übersetzte die Bibel ins Deutsche."
    },
    "pt": {
      "name": "Martinho Lutero",
      "title": "Reformador e Tradutor das Sagradas Escrituras",
      "quote": "«Minha consciência está cativa da Palavra de Deus. Aqui permaneço; não posso fazer de outro modo. Deus me ajude.»",
      "bio": "Restaurou a proclamação da justificação somente pela fé e traduziu a Bíblia para a língua do povo."
    },
    "ro": {
      "name": "Martin Luther",
      "title": "Reformator și Traducător al Sfintelor Scripturi",
      "quote": "«Cugetul meu este legat de Cuvântul lui Dumnezeu. Aici stau și nu pot altfel. Dumnezeu să-mi ajute.»",
      "bio": "A readus în lumină îndreptățirea doar prin credință și a tradus Biblia în limba poporului."
    },
    "la": {
      "name": "Martinus Lutherus",
      "title": "Reformationis Doctor et Sacrae Scripturae Interpres",
      "quote": "«Conscientia mea capta est verbis Dei. Hic sto, aliter non possum. Deus me adiuvet.»",
      "bio": "Iustificationem sola fide praedicavit et Sacras Scripturas in linguam vernaculam transtulit."
    },
    "ru": {
      "name": "Мартин Лютер",
      "title": "Реформатор и переводчик Священного Писания",
      "quote": "«Совесть моя пленена Словом Божьим. На сем стою и не могу иначе. Да поможет мне Бог.»",
      "bio": "Возвестил оправдание только верой и перевел Библию на понятный народу язык."
    },
    "en": {
      "name": "Martin Luther",
      "title": "Reformer & Translator of the Sacred Scriptures",
      "quote": "«My conscience is captive to the Word of God. Here I stand; I can do no other. God help me.»",
      "bio": "Restored the proclamation of justification by faith alone and translated the Bible into the common tongue."
    }
  },
  "C.S. Lewis": {
    "it": {
      "name": "C.S. Lewis",
      "title": "Apologeta Cristiano e Voce della Speranza",
      "quote": "«Credo nel Cristianesimo come credo che il sole è sorto: non solo perché lo vedo, ma perché attraverso di esso vedo ogni altra cosa.»",
      "bio": "Docente a Oxford e Cambridge, i cui scritti apologetici e narrativi hanno condotto milioni di persone alla fede in Cristo."
    },
    "es": {
      "name": "C.S. Lewis",
      "title": "Apologista Cristiano y Voz de la Esperanza",
      "quote": "«Creo en el cristianismo como creo que el sol ha salido: no solo porque lo veo, sino porque por él veo todo lo demás.»",
      "bio": "Profesor de Oxford y Cambridge cuyos escritos han llevado a millones a la fe viva en Cristo."
    },
    "fr": {
      "name": "C.S. Lewis",
      "title": "Apologète Chrétien et Voix de l'Espérance",
      "quote": "«Je crois au christianisme comme je crois que le soleil s'est levé : non seulement parce que je le vois, mais parce que par lui je vois tout le reste.»",
      "bio": "Professeur à Oxford et Cambridge dont les écrits ont amené des millions de personnes à la foi en Christ."
    },
    "de": {
      "name": "C.S. Lewis",
      "title": "Christlicher Apologet und Stimme der Hoffnung",
      "quote": "«Ich glaube an das Christentum so wie ich glaube, dass die Sonne aufgegangen ist: nicht nur, weil ich sie sehe, sondern weil ich durch sie alles andere sehe.»",
      "bio": "Professor in Oxford und Cambridge, dessen Bücher Millionen Menschen den christlichen Glauben erschlossen haben."
    },
    "pt": {
      "name": "C.S. Lewis",
      "title": "Apologista Cristão e Voz da Esperança",
      "quote": "«Creio no cristianismo assim como creio que o sol nasceu: não apenas porque o vejo, mas porque através dele vejo todas as outras coisas.»",
      "bio": "Professor em Oxford e Cambridge cujos livros conduziram milhões à fé viva em Cristo."
    },
    "ro": {
      "name": "C.S. Lewis",
      "title": "Apologet Creștin și Glas al Speranței",
      "quote": "«Cred în creștinism așa cum cred că a răsărit soarele: nu doar pentru că îl văd, ci pentru că prin el văd toate celelalte.»",
      "bio": "Profesor la Oxford și Cambridge ale cărui scrieri au călăuzit milioane de oameni spre credința în Hristos."
    },
    "la": {
      "name": "Clive Staples Lewis",
      "title": "Apologeta Christianus et Spei Praeco",
      "quote": "«In Christianam fidem credo sicut solem ortum esse credo: non solum quia eum video, sed quia per eum omnia alia video.»",
      "bio": "Professor Oxoniensis et Cantabrigiensis, cuius scripta mirabilia multos ad Christi fidem perduxerunt."
    },
    "ru": {
      "name": "К.С. Льюис",
      "title": "Христианский апологет и голос надежды",
      "quote": "«Я верю в христианство так же, как верю в восход солнца: не только потому, что вижу его, но и потому, что при его свете вижу все остальное.»",
      "bio": "Профессор Оксфорда и Кембриджа, чьи книги открыли миллионам людей истину веры во Христа."
    },
    "en": {
      "name": "C.S. Lewis",
      "title": "Defender of Mere Christianity & Voice of Hope",
      "quote": "«I believe in Christianity as I believe that the sun has risen: not only because I see it, but because by it I see everything else.»",
      "bio": "Scholar and writer whose apologetic works brought millions of modern intellectuals to faith in Christ."
    }
  },
  "St. Francis de Sales": {
    "it": {
      "name": "San Francesco di Sales",
      "title": "Vescovo di Ginevra e Dottore del Divino Amore",
      "quote": "«Si prendono più mosche con una goccia di miele che con un barile d'aceto.»",
      "bio": "Autore della Filotea e del Trattato dell'amore di Dio, maestro sublime di dolcezza e santità per ogni stato di vita."
    },
    "es": {
      "name": "San Francisco de Sales",
      "title": "Obispo de Ginebra y Doctor del Amor Divino",
      "quote": "«Se cazan más moscas con una gota de miel que con un barril de vinagre.»",
      "bio": "Autor de la Introducción a la vida devota, maestro de dulzura espiritual y santidad cotidiana."
    },
    "fr": {
      "name": "Saint François de Sales",
      "title": "Évêque de Genève et Docteur de l'Amour Divin",
      "quote": "«On prend plus de mouches avec une goutte de miel qu'avec un tonneau de vinaigre.»",
      "bio": "Auteur de l'Introduction à la vie dévote, maître incomparable de douceur et de paix intérieure."
    },
    "de": {
      "name": "Hl. Franz von Sales",
      "title": "Bischof von Genf und Kirchenlehrer der göttlichen Liebe",
      "quote": "«Mit einem Tropfen Honig fängt man mehr Fliegen als mit einem Fass Essig.»",
      "bio": "Verfasser der Philothea, Meister der Sanftmut und geistlicher Begleiter für alle Stände."
    },
    "pt": {
      "name": "São Francisco de Sales",
      "title": "Bispo de Genebra e Doutor do Amor Divino",
      "quote": "«Apanham-se mais moscas com uma gota de mel do que com um barril de vinagre.»",
      "bio": "Autor da Filoteia e mestre da mansidão espiritual, ensinando que a santidade é acessível a todos."
    },
    "ro": {
      "name": "Sfântul Francisc de Sales",
      "title": "Episcop de Geneva și Învățător al Iubirii Divine",
      "quote": "«Se prind mai multe muște cu o picătură de miere decât cu un butoi de oțet.»",
      "bio": "Autorul Filoteei, învățător al blândeții creștine și al sfințeniei în viața de zi cu zi."
    },
    "la": {
      "name": "Sanctus Franciscus Salesius",
      "title": "Episcopus Genevensis et Doctor Amoris Divini",
      "quote": "«Plures muscae una mellis gutta quam aceti cado capiuntur.»",
      "bio": "Philotheae et Tractatus de Amore Dei auctor, mansuetudinis ac caritatis magister eximius."
    },
    "ru": {
      "name": "Св. Франциск Сальский",
      "title": "Епископ Женевский и Учитель Божественной Любви",
      "quote": "«Каплей мёда можно поймать больше мух, чем бочкой уксуса.»",
      "bio": "Автор книги «Введение в благочестивую жизнь», великий наставник христианской кротости и мира."
    },
    "en": {
      "name": "St. Francis de Sales",
      "title": "Doctor of Divine Love & Bishop of Geneva",
      "quote": "«A spoonful of honey attracts more flies than a barrel of vinegar.»",
      "bio": "Author of Introduction to the Devout Life, master of spiritual gentleness and universal holiness."
    }
  },
  "St. Teresa of Avila": {
    "it": {
      "name": "Santa Teresa d'Avila",
      "title": "Vergine e Dottore della Chiesa, Riformatrice del Carmelo",
      "quote": "«Niente ti turbi, niente ti spaventi. Tutto passa, Dio non cambia. La pazienza ottiene tutto. Solo Dio basta.»",
      "bio": "Grande mistica spagnola e riformatrice dei Carmelitani Scalzi, maestra incomparabile dell'orazione contemplativa nel Castello Interiore."
    },
    "es": {
      "name": "Santa Teresa de Jesús (de Ávila)",
      "title": "Virgen y Doctora de la Iglesia, Reformadora del Carmelo",
      "quote": "«Nada te turbe, nada te espante, todo se pasa, Dios no se muda; la paciencia todo lo alcanza. Solo Dios basta.»",
      "bio": "Mística cumbre del Siglo de Oro español, reformadora del Carmelo Descalzo y doctora de la oración contemplativa."
    },
    "fr": {
      "name": "Sainte Thérèse d'Avila",
      "title": "Vierge et Docteur de l'Église, Réformatrice du Carmel",
      "quote": "«Que rien ne te trouble, que rien ne t'effraie. Tout passe, Dieu ne change pas. La patience obtient tout. Dieu seul suffit.»",
      "bio": "Grande mystique espagnole, réformatrice du Carmel et guide admirable de la prière contemplative dans le Château Intérieur."
    },
    "de": {
      "name": "Hl. Teresa von Ávila",
      "title": "Jungfrau und Kirchenlehrerin, Reformerin des Karmel",
      "quote": "«Nichts soll dich verstören, nichts dich erschrecken. Alles vergeht, Gott bleibt derselbe. Gott allein genügt.»",
      "bio": "Große spanische Mystikerin und Erneuerin des Karmelordens, Lehrerin des inneren Gebets in der Seelenburg."
    },
    "pt": {
      "name": "Santa Teresa de Ávila",
      "title": "Virgem e Doutora da Igreja, Reformadora do Carmelo",
      "quote": "«Nada te perturbe, nada te espante. Tudo passa, Deus não muda. A paciência tudo alcança. Só Deus basta.»",
      "bio": "Doutora da oração contemplativa e reformadora do Carmelo, guiando as almas pela Morada Interior até Deus."
    },
    "ro": {
      "name": "Sfânta Tereza de Avila",
      "title": "Fecioară și Învățătoare a Bisericii, Reformatoarea Carmelului",
      "quote": "«Nimic să nu te tulbure, nimic să nu te înspăimânte. Totul trece, Dumnezeu rămâne. Răbdarea dobândește totul. Doar Dumnezeu ajunge.»",
      "bio": "Mistică de adâncă rugăciune și învățătoare a Castelului Interior, arătând calea unirii mistice cu Dumnezeu."
    },
    "la": {
      "name": "Sancta Teresia Abulensis",
      "title": "Virgo et Ecclesiae Doctor, Ordinis Carmelitarum Reformatrix",
      "quote": "«Nihil te perturbet, nihil te perterreat; omnia transeunt, Deus non mutatur. Patientia omnia assequitur. Solus Deus sufficit.»",
      "bio": "Castelli Interioris magistra, orationis mysticae peritissima et Carmelitarum Discalceatorum mater."
    },
    "ru": {
      "name": "Св. Тереза Авильская",
      "title": "Дева и Учитель Церкви, Реформатор Кармеля",
      "quote": "«Пусть ничто тебя не смущает, пусть ничто не страшит. Всё проходит, Бог не меняется. Терпение достигает всего. Одного Бога довольно.»",
      "bio": "Великая христианская мистичка, реформатор кармелитов и наставница непрестанной молитвы во «Внутреннем замке»."
    },
    "en": {
      "name": "St. Teresa of Avila",
      "title": "Doctor of Interior Prayer & Carmelite Reformer",
      "quote": "«Let nothing disturb you; all things are passing; God alone suffices.»",
      "bio": "Great Carmelite reformer and mystic who guided souls into the Interior Castle of unceasing prayer."
    }
  },
  "St. Gregory the Great": {
    "it": {
      "name": "San Gregorio Magno",
      "title": "Papa, Monaco e Dottore della Chiesa",
      "quote": "«La prova dell'amore è nelle opere. Dove l'amore esiste, esso compie grandi cose; se rifiuta di operare, non è amore.»",
      "bio": "Pastore sapiente e monaco benedettino, riformatore della liturgia e del canto gregoriano, 'servo dei servi di Dio'."
    },
    "es": {
      "name": "San Gregorio Magno",
      "title": "Papa, Monje y Doctor de la Iglesia",
      "quote": "«La prueba del amor está en las obras. Donde existe el amor, hace grandes cosas; si rehúsa obrar, no es amor.»",
      "bio": "Papa sabio y padre de la Iglesia latina, reformador de la liturgia romana y siervo de los siervos de Dios."
    },
    "fr": {
      "name": "Saint Grégoire le Grand",
      "title": "Pape, Moine et Docteur de l'Église",
      "quote": "«La preuve de l'amour, ce sont les œuvres. Là où l'amour existe, il accomplit de grandes choses.»",
      "bio": "Moine au trône de Pierre, réformateur liturgique et père des pauvres, serviteur des serviteurs de Dieu."
    },
    "de": {
      "name": "Hl. Gregor der Große",
      "title": "Papst, Mönch und Kirchenvater",
      "quote": "«Der Beweis der Liebe liegt im Handeln. Wo die Liebe ist, vollbringt sie Großes; weigert sie sich zu wirken, ist sie keine Liebe.»",
      "bio": "Mönch auf dem Stuhl Petri, Begründer des Gregorianischen Chorals und treuer Hirt in Zeiten der Not."
    },
    "pt": {
      "name": "São Gregório Magno",
      "title": "Papa, Monge e Doutor da Igreja",
      "quote": "«A prova do amor está nas obras. Onde o amor existe, realiza grandes coisas; se recusa operar, não é amor.»",
      "bio": "Defensor do povo de Deus, organizador do canto litúrgico e primeiro a intitular-se 'servo dos servos de Deus'."
    },
    "ro": {
      "name": "Sfântul Grigorie cel Mare (Dialogul)",
      "title": "Papă al Romei și Învățător al Bisericii",
      "quote": "«Dovada iubirii stă în fapte. Unde este iubire, ea lucrează mari lucruri; dacă refuză să lucreze, nu este iubire.»",
      "bio": "Păstor smerit și mare liturghisitor, alcătuitorul Liturghiei Darurilor mai înainte sfințite și slujitor al săracilor."
    },
    "la": {
      "name": "Sanctus Gregorius Magnus Papa",
      "title": "Papa, Monachus et Ecclesiae Doctor",
      "quote": "«Probatio dilectionis exhibitio est operis. Ubi amor est, magna operatur; si desinit operari, amor non est.»",
      "bio": "Servus servorum Dei, sacrae liturgiae et cantus gregoriani instaurator, pastor vigilans et verus monachus."
    },
    "ru": {
      "name": "Св. Григорий Великий (Двоеслов)",
      "title": "Папа Римский, Монах и Учитель Церкви",
      "quote": "«Доказательство любви — в делах. Где любовь, там совершаются великие дела; если дел нет — нет и любви.»",
      "bio": "Святитель Римский, составитель Литургии Преждеосвященных Даров и ревностный пастырь бедных."
    },
    "en": {
      "name": "St. Gregory the Great",
      "title": "Pope, Monk & Latin Doctor of the Church",
      "quote": "«The proof of love is in the works. Where love exists, it works great things.»",
      "bio": "Reformed the sacred liturgy, guided the Church through famine, and preserved classical Christian culture."
    }
  },
  "St. Charles Borromeo": {
    "it": {
      "name": "San Carlo Borromeo",
      "title": "Arcivescovo di Milano e Riformatore Tridentino",
      "quote": "«Sii certo di predicare anzitutto con la testimonianza della tua vita.»",
      "bio": "Guida instancabile durante la peste di Milano, donò tutti i suoi beni per soccorrere gli appestati e rinnovare la Chiesa."
    },
    "es": {
      "name": "San Carlos Borromeo",
      "title": "Arzobispo de Milán y Reformador Tridentino",
      "quote": "«Asegúrate de predicar ante todo con el testimonio de tu propia vida.»",
      "bio": "Pastor abnegado durante la peste milanesa, dio su hacienda y su vida por los enfermos y la disciplina eclesial."
    },
    "fr": {
      "name": "Saint Charles Borromée",
      "title": "Archevêque de Milan et Réformateur Tridentin",
      "quote": "«Sois certain de prêcher d'abord par l'exemple de ta vie.»",
      "bio": "Pasteur héroïque soignant les pestiférés de Milan de ses propres mains et pilier du renouveau chrétien."
    },
    "de": {
      "name": "Hl. Karl Borromäus",
      "title": "Erzbischof von Mailand und Reformer",
      "quote": "«Sei gewiss, dass du zuerst durch dein eigenes Leben predigen musst.»",
      "bio": "Unermüdlicher Seelsorger während der Pestepidemie in Mailand, Förderer der Priesterbildung und Nächstenliebe."
    },
    "pt": {
      "name": "São Carlos Borromeu",
      "title": "Arcebispo de Milão e Reformador de Trento",
      "quote": "«Tem a certeza de pregar, antes de tudo, através da tua vida.»",
      "bio": "Pastor heroico durante a peste de Milão, distribuiu os seus bens pelos necessitados e renovou a vida eclesial."
    },
    "ro": {
      "name": "Sfântul Carol Borromeu",
      "title": "Arhiepiscop de Milano și Reformator",
      "quote": "«Ai grijă să propovăduiești mai întâi prin însăși pilda vieții tale.»",
      "bio": "Păstor neobosit în vremea ciumei din Milano, slujind el însuși bolnavii și reînnoind viața pastorală a Bisericii."
    },
    "la": {
      "name": "Sanctus Carolus Borromaeus",
      "title": "Archiepiscopus Mediolanensis et Ecclesiae Reformatrix",
      "quote": "«Fac ut vita tua praedicet antequam lingua clamet.»",
      "bio": "Pastor zelatissimus tempore pestis Mediolani, pauperum pater et disciplinae ecclesiasticae instaurator."
    },
    "ru": {
      "name": "Св. Карл Борромей",
      "title": "Архиепископ Миланский и Церковный Реформатор",
      "quote": "«Прежде всего проповедуй свидетельством собственной жизни.»",
      "bio": "Самоотверженный пастырь во время чумы в Милане, отдавший имущество ради спасения больных и обновления клира."
    },
    "en": {
      "name": "St. Charles Borromeo",
      "title": "Archbishop of Milan & Reformer of Trent",
      "quote": "«Be sure that you first preach by the way you live.»",
      "bio": "Shepherd who ministered with his own hands to the sick during the plague of Milan in 1576."
    }
  },
  "St. Isaac the Syrian": {
    "it": {
      "name": "Sant'Isacco il Siro",
      "title": "Maestro del Silenzio e del Cuore Misericordioso",
      "quote": "«Che cos'è un cuore misericordioso? È un cuore che arde di compassione per l'intera creazione, per gli uomini, per gli uccelli, per gli animali e per i nemici.»",
      "bio": "Eremita e mistico della Chiesa d'Oriente, i cui scritti sulla misericordia infinita di Dio hanno nutrito generazioni di oranti."
    },
    "es": {
      "name": "San Isaac de Nínive (el Sirio)",
      "title": "Maestro del Silencio y del Corazón Misericordioso",
      "quote": "«¿Qué es un corazón misericordioso? Es un corazón encendido de amor por toda la creación, por los hombres, por los pájaros y hasta por los enemigos.»",
      "bio": "Místico oriental de infinita profundidad, cuyos tratados sobre el silencio interior y la gracia divina son perlas ascéticas."
    },
    "fr": {
      "name": "Saint Isaac le Syrien (de Ninive)",
      "title": "Maître du Silence et du Cœur Miséricordieux",
      "quote": "«Qu'est-ce qu'un cœur miséricordieux ? C'est un cœur qui brûle de compassion pour toute la création, pour les hommes, les bêtes et même pour les ennemis.»",
      "bio": "Mystique incomparable de l'Orient chrétien, docteur de la componction et de l'indicible miséricorde divine."
    },
    "de": {
      "name": "Hl. Isaak der Syrer (von Ninive)",
      "title": "Lehrer des Schweigens und des barmherzigen Herzens",
      "quote": "«Was ist ein barmherziges Herz? Es ist ein Herz, das brennt vor Mitleid für die ganze Schöpfung, für die Menschen, die Vögel und für alle Geschöpfe.»",
      "bio": "Großer ostkirchlicher Mystiker und Eremit, dessen Lehren über Gottes unendliche Barmherzigkeit die Seelen erleuchten."
    },
    "pt": {
      "name": "Santo Isaac da Síria (de Nínive)",
      "title": "Mestre do Silêncio e do Coração Misericordioso",
      "quote": "«O que é um coração compassivo? É um coração que arde de amor por toda a criação, pelos homens, pelas aves e pelos inimigos.»",
      "bio": "Eremita e místico do Oriente, cujos escritos sobre o recolhimento e a misericórdia alimentam os buscadores de Deus."
    },
    "ro": {
      "name": "Sfântul Isaac Sirul",
      "title": "Dascălul Tăcerii și al Inimii Milostive",
      "quote": "«Ce este o inimă milostivă? Este arderea inimii pentru toată zidirea, pentru oameni, pentru păsări, pentru dobitoace și pentru vrăjmași.»",
      "bio": "Pustnic și adânc trăitor al isihiei, autor al capetelor duhovnicești despre lacrimile pocăinței și mila dumnezeiască."
    },
    "la": {
      "name": "Sanctus Isaac Syrus",
      "title": "Magister Silentii et Cordis Misericordis",
      "quote": "«Quid est cor misericors? Est cor ardens pro universa creatura, pro hominibus, avibus et ipsis inimicis.»",
      "bio": "Eremita et mysticus orientalis cuius scripta de divina misericordia et oratione pura animas sanctificant."
    },
    "ru": {
      "name": "Св. Исаак Сирин (Ниневийский)",
      "title": "Учитель Безмолвия и Милующего Сердца",
      "quote": "«Что такое сердце милующее? Это возгорение сердца у человека о всем творении: о людях, о птицах, о животных и о врагах истины.»",
      "bio": "Великий отец-пустынник и созерцатель, оставивший бессмертные поучения о покаянии, любви и благодати Святого Духа."
    },
    "en": {
      "name": "St. Isaac the Syrian",
      "title": "Teacher of Silence & Merciful Heart",
      "quote": "«What is a merciful heart? It is a heart on fire for the whole of creation, for humanity, for birds and beasts, and even for enemies.»",
      "bio": "Mystic and hermit of the Eastern Church whose treatises on divine mercy have nourished monks for centuries."
    }
  },
  "St. John Climacus": {
    "it": {
      "name": "San Giovanni Climaco",
      "title": "Abate del Sinai e Autore della Scala del Paradiso",
      "quote": "«La penitenza è il rinnovamento del battesimo, un patto con Dio per una vita nuova.»",
      "bio": "Monaco del Monte Sinai le cui trenta gradazioni spirituali descrivono la salita dell'anima verso la divina luce."
    },
    "es": {
      "name": "San Juan Clímaco",
      "title": "Abad del Sinaí y Autor de la Escala Santa",
      "quote": "«El arrepentimiento es la renovación del bautismo, un pacto con Dios para una vida nueva.»",
      "bio": "Abad en el monasterio de Santa Catalina en el Sinaí, maestro de la ascensión del alma hacia el amor perfecto."
    },
    "fr": {
      "name": "Saint Jean Climaque",
      "title": "Abbé du Sinaï et Auteur de l'Échelle Sainte",
      "quote": "«Le repentir est le renouvellement du baptême, un pacte conclu avec Dieu pour une vie nouvelle.»",
      "bio": "Abbé du Sinaï dont les trente degrés de l'Échelle céleste guident le disciple vers l'union bienheureuse avec le Seigneur."
    },
    "de": {
      "name": "Hl. Johannes Klimakos",
      "title": "Abt vom Sinai und Verfasser der Himmelsleiter",
      "quote": "«Die Buße ist die Erneuerung der Taufe, ein Bund mit Gott für ein neues Leben.»",
      "bio": "Mönchsvater auf dem Berg Sinai, der mit seinen dreißig Stufen der geistlichen Leiter den Aufstieg zu Gott lehrte."
    },
    "pt": {
      "name": "São João Clímaco",
      "title": "Abade do Sinai e Autor da Escada do Paraíso",
      "quote": "«O arrependimento é a renovação do batismo, uma aliança com Deus para uma vida nova.»",
      "bio": "Monge e abade do Sinai, cujos trinta degraus da Escada Santa conduzem a alma à contemplação divina."
    },
    "ro": {
      "name": "Sfântul Ioan Scărarul",
      "title": "Egumenul Sinaiului și Autorul Scării Raiului",
      "quote": "«Pocăința este înnoirea botezului, legământ cu Dumnezeu pentru o viață nouă.»",
      "bio": "Monah sfânt din Muntele Sinai, a cărui 'Scară a dumnezeiescului urcuș' călăuzește sufletele spre desăvârșire."
    },
    "la": {
      "name": "Sanctus Ioannes Climacus",
      "title": "Abbas Sinaiticus et Auctor Scalae Paradisi",
      "quote": "«Paenitentia est baptismi renovatio, pactum cum Deo pro vita nova.»",
      "bio": "Monachus in Monte Sinai cuius triginta gradus spirituales animam ad Deum contemplandum elevant."
    },
    "ru": {
      "name": "Св. Иоанн Лествичник",
      "title": "Игумен Синайский и Автор Лествицы Райской",
      "quote": "«Покаяние есть возобновление крещения, завет с Богом о новой жизни.»",
      "bio": "Синайский подвижник, описавший в 30 ступенях «Лествицы» духовный путь преодоления страстей и восхождения к Богу."
    },
    "en": {
      "name": "St. John Climacus",
      "title": "Abbot of Sinai & Author of the Ladder of Divine Ascent",
      "quote": "«Repentance is the renewal of baptism, a contract with God for a second life.»",
      "bio": "Sinai abbot whose spiritual ladder of thirty rungs leads souls into the contemplation of divine love."
    }
  },
  "John Bunyan": {
    "it": {
      "name": "John Bunyan",
      "title": "Predicatore Evangelico e Autore de Il Pellegrinaggio del Cristiano",
      "quote": "«Non hai vissuto veramente oggi finché non hai fatto qualcosa per qualcuno che non potrà mai ripagarti.»",
      "bio": "Scrittore e predicatore puritano inglese, incarcerato per 12 anni a causa della sua fedeltà all'Evangelo."
    },
    "es": {
      "name": "John Bunyan",
      "title": "Predicador Evangélico y Autor de El Progreso del Peregrino",
      "quote": "«No has vivido hoy hasta que hayas hecho algo por alguien que nunca te lo podrá pagar.»",
      "bio": "Predicador cristiano inglés que pasó doce años preso por su fe, autor de la célebre alegoría del peregrino."
    },
    "fr": {
      "name": "John Bunyan",
      "title": "Prédicateur Évangélique et Auteur du Voyage du Pèlerin",
      "quote": "«Tu n'as pas vraiment vécu aujourd'hui tant que tu n'as rien fait pour quelqu'un qui ne pourra jamais te récompenser.»",
      "bio": "Prédicateur anglais emprisonné douze ans pour l'Évangile, auteur du chef-d'œuvre Le Voyage du pèlerin."
    },
    "de": {
      "name": "John Bunyan",
      "title": "Evangelischer Prediger und Autor der Pilgerreise",
      "quote": "«Du hast heute erst wirklich gelebt, wenn du etwas für jemanden getan hast, der es dir niemals vergelten kann.»",
      "bio": "Englischer Prediger, der wegen seines treuen Zeugnisses zwölf Jahre im Kerker saß und die Pilgerreise verfasste."
    },
    "pt": {
      "name": "John Bunyan",
      "title": "Pregador Evangélico e Autor de O Peregrino",
      "quote": "«Não viveste verdadeiramente hoje até teres feito algo por alguém que nunca te poderá retribuir.»",
      "bio": "Pregador cristão inglês aprisionado durante doze anos por proclamar a Palavra de Deus."
    },
    "ro": {
      "name": "John Bunyan",
      "title": "Predicator Evanghelic și Autorul Călătoriei Creștinului",
      "quote": "«Nu ai trăit cu adevărat astăzi până nu ai făcut ceva pentru cineva care nu-ți va putea răsplăti niciodată.»",
      "bio": "Predicator englez întemnițat doisprezece ani pentru credință, vestind biruința harului lui Hristos."
    },
    "la": {
      "name": "Ioannes Bunyan",
      "title": "Evangelii Praeco et Auctor Itineris Peregrini",
      "quote": "«Vere non vixisti hodie nisi aliquid fecisti illi qui nunquam tibi rependere potest.»",
      "bio": "Praedicator anglicus qui duodecim annos in carcere propter fidem clausus 'Iter Peregrini' conscripsit."
    },
    "ru": {
      "name": "Джон Беньян (Буньян)",
      "title": "Проповедник Евангелия и Автор Путешествия Пилигрима",
      "quote": "«Ты не жил по-настоящему сегодня, если не сделал добра тому, кто никогда не сможет тебе отплатить.»",
      "bio": "Английский проповедник, проведший 12 лет в заключении за веру во Христа и написавший бессмертную христианскую книгу."
    },
    "en": {
      "name": "John Bunyan",
      "title": "Author of Pilgrim's Progress & Preacher of the Gospel",
      "quote": "«You have not lived today until you have done something for someone who can never repay you.»",
      "bio": "English preacher who spent twelve years imprisoned for the Gospel, writing Pilgrim's Progress."
    }
  },
  "George Müller": {
    "it": {
      "name": "George Müller",
      "title": "Uomo d'Orazione e Apostolo della Fede Vivente",
      "quote": "«La fede non opera nel regno del possibile. Non vi è gloria per Dio in ciò che è umanamente raggiungibile.»",
      "bio": "Fondò a Bristol orfanotrofi per oltre 10.000 bambini, confidando unicamente nella preghiera senza mai chiedere fondi agli uomini."
    },
    "es": {
      "name": "George Müller",
      "title": "Hombre de Oración y Apóstol de la Fe Viva",
      "quote": "«La fe no opera en el reino de lo posible. No hay gloria para Dios en lo que es humanamente posible.»",
      "bio": "Cuidó de diez mil huérfanos en Bristol confiando únicamente en la oración secreta a Dios."
    },
    "fr": {
      "name": "George Müller",
      "title": "Homme de Prière et Apôtre de la Foi Vivante",
      "quote": "«La foi n'opère pas dans le domaine du possible. Il n'y a point de gloire pour Dieu dans ce qui est humainement atteignable.»",
      "bio": "Père de dix mille orphelins à Bristol, subvenant à tous leurs besoins par la seule prière instante."
    },
    "de": {
      "name": "George Müller",
      "title": "Mann des Gebets und Zeuge des lebendigen Glaubens",
      "quote": "«Der Glaube wirkt nicht im Bereich des Möglichen. Gott wird nicht verherrlicht durch das, was menschlich machbar ist.»",
      "bio": "Gründete in Bristol Waisenhäuser für über 10.000 Kinder und vertraute allein auf die Fürsorge Gottes im Gebet."
    },
    "pt": {
      "name": "George Müller",
      "title": "Homem de Oração e Apóstolo da Fé Viva",
      "quote": "«A fé não opera no reino do possível. Não há glória para Deus naquilo que é humanamente alcançável.»",
      "bio": "Acolheu mais de dez mil órfãos em Bristol unicamente confiado na providência divina pela oração."
    },
    "ro": {
      "name": "George Müller",
      "title": "Omul Rugăciunii și Mărturisitorul Credinței Vii",
      "quote": "«Credința nu lucrează în tărâmul posibilului. Nu este nicio slavă pentru Dumnezeu în ceea ce este omenește cu putință.»",
      "bio": "A îngrijit peste 10.000 de orfani în Bristol bizuindu-se doar pe rugăciune și providența cerească."
    },
    "la": {
      "name": "Georgius Müller",
      "title": "Vir Orationis et Fidei Vivae Testis",
      "quote": "«Fides in regno possibilis non operatur. Nulla est laus Deo in eo quod humana ope fieri potest.»",
      "bio": "Orphanorum decem milium pater Bristoliae, qui solam orationem ad Deum adiutricem habuit."
    },
    "ru": {
      "name": "Джордж Мюллер",
      "title": "Муж Молитвы и Апостол Живой Веры",
      "quote": "«Вера действует не в области возможного. Богу нет славы в том, что доступно человеческим силам.»",
      "bio": "Служитель в Бристоле, воспитавший более 10 000 сирот исключительно упованием на Бога в молитве."
    },
    "en": {
      "name": "George Müller",
      "title": "Man of Prayer & Apostle of Living Faith",
      "quote": "«Faith does not operate in the realm of the possible. There is no glory for God in that which is humanly possible.»",
      "bio": "Cared for ten thousand orphans in Bristol solely by relying upon prayer to God without asking donations from man."
    }
  },
  "St. Ignatius of Antioch": {
    "it": {
      "name": "Sant'Ignazio di Antiochia",
      "title": "Padre Apostolico, Vescovo e Martire",
      "quote": "«Sono frumento di Dio e sarò macinato dai denti delle fiere affinché sia trovato puro pane di Cristo.»",
      "bio": "Discepolo dell'Apostolo Giovanni e terzo vescovo di Antiochia, martirizzato nel Colosseo a Roma."
    },
    "es": {
      "name": "San Ignacio de Antioquía",
      "title": "Padre Apostólico, Obispo y Mártir",
      "quote": "«Soy trigo de Dios y he de ser molido por los dientes de las fieras para ser hallado pan puro de Cristo.»",
      "bio": "Discípulo del apóstol Juan y obispo de Antioquía, entregó su vida en el martirio romano por amor a Jesús."
    },
    "fr": {
      "name": "Saint Ignace d'Antioche",
      "title": "Père Apostolique, Évêque et Martyr",
      "quote": "«Je suis le froment de Dieu, et je serai broyé sous les dents des bêtes pour devenir le pain pur du Christ.»",
      "bio": "Évêque d'Antioche et père apostolique, témoin intrépide de l'unité de l'Église jusqu'au martyre à Rome."
    },
    "de": {
      "name": "Hl. Ignatius von Antiochien",
      "title": "Apostolischer Vater, Bischof und Märtyrer",
      "quote": "«Ich bin Gottes Weizenkorn; ich werde durch die Zähne der wilden Tiere gemahlen, damit ich als reines Brot Christi erfunden werde.»",
      "bio": "Schüler des Apostels Johannes und Bischof von Antiochien, der unter Kaiser Trajan in Rom das Martyrium erlitt."
    },
    "pt": {
      "name": "Santo Inácio de Antioquia",
      "title": "Padre Apostólico, Bispo e Mártir",
      "quote": "«Sou trigo de Deus e serei moído pelos dentes das feras para ser transformado em pão puro de Cristo.»",
      "bio": "Bispo de Antioquia e discípulo de São João, exortou as comunidades cristãs à comunhão e à fidelidade no martírio."
    },
    "ro": {
      "name": "Sfântul Ignatie Teoforul",
      "title": "Părinte Apostolic, Episcopul Antiohiei și Mucenic",
      "quote": "«Sunt grâul lui Dumnezeu și mă voi măcina prin dinții fiarelor, ca să mă arăt pâine curată a lui Hristos.»",
      "bio": "Ucenic al Sfântului Apostol Ioan și episcop al Antiohiei, mucenicit la Roma pentru mărturisirea lui Hristos."
    },
    "la": {
      "name": "Sanctus Ignatius Antiochenus",
      "title": "Pater Apostolicus, Episcopus et Martyr",
      "quote": "«Frumentum Dei sum et dentibus bestiarum molar ut purus panis Christi inveniar.»",
      "bio": "Ioannis apostoli discipulus et Antiochenus antistes, qui Romae sub Traiano pro fide martyrium subiit."
    },
    "ru": {
      "name": "Св. Игнатий Богоносец (Антиохийский)",
      "title": "Муж Апостольский, Епископ и Священномученик",
      "quote": "«Я пшеница Божия: пусть сотрется зубами зверей, чтобы стать мне чистым хлебом Христовым.»",
      "bio": "Епископ Антиохийский, ученик апостолов, принявший мученическую смерть на арене Рима ради Христа."
    },
    "en": {
      "name": "St. Ignatius of Antioch",
      "title": "Disciple of John & Apostolic Martyr",
      "quote": "«I am God's wheat, and I shall be ground by the teeth of wild beasts that I may be found pure bread of Christ.»",
      "bio": "Apostolic Father martyred in Rome under Trajan, pleading with the faithful to maintain unity in Christ."
    }
  },
  "St. Polycarp of Smyrna": {
    "it": {
      "name": "San Policarpo di Smirne",
      "title": "Vescovo di Smirne e Martire Apostolico",
      "quote": "«Da ottantasei anni servo Cristo, e non mi ha fatto alcun male; come potrei bestemmiare il mio Re e Salvatore?»",
      "bio": "Discepolo di San Giovanni evangelista, testimoniò fedelmente a Cristo affrontando serenamente il rogo a Smirne."
    },
    "es": {
      "name": "San Policarpo de Esmirna",
      "title": "Obispo de Esmirna y Mártir Apostólico",
      "quote": "«Ochenta y seis años le he servido y ningún mal me ha hecho; ¿cómo podría blasfemar contra mi Rey y Salvador?»",
      "bio": "Discípulo del apóstol Juan, modelo de constancia y fidelidad cristiana en medio de la hoguera."
    },
    "fr": {
      "name": "Saint Polycarpe de Smyrne",
      "title": "Évêque de Smyrne et Martyr Apostolique",
      "quote": "«Voici quatre-vingt-six ans que je le sers et il ne m'a fait aucun mal ; comment pourrais-je outrager mon Roi et mon Sauveur ?»",
      "bio": "Disciple de l'apôtre Jean et évêque vénérable, il rendit témoignage au Christ avec une sérénité invincible sur le bûcher."
    },
    "de": {
      "name": "Hl. Polykarp von Smyrna",
      "title": "Bischof von Smyrna und Märtyrer",
      "quote": "«Sechsundachtzig Jahre diene ich Christus, und Er hat mir nie Unrecht getan; wie könnte ich meinen König und Erlöser lästern?»",
      "bio": "Schüler des Evangelisten Johannes, der im hohen Alter furchtlos auf dem Scheiterhaufen seinen Herrn pries."
    },
    "pt": {
      "name": "São Policarpo de Esmirna",
      "title": "Bispo de Esmirna e Mártir Apostólico",
      "quote": "«Há oitenta e seis anos sirvo a Cristo, e Ele nunca me fez mal; como poderia eu blasfemar contra o meu Rei e Salvador?»",
      "bio": "Discípulo direto do apóstolo São João, enfrentou o martírio em Esmirna com cânticos de louvor à Trindade."
    },
    "ro": {
      "name": "Sfântul Policarp al Smirnei",
      "title": "Episcopul Smirnei și Mucenic Apostolic",
      "quote": "«De optzeci și șase de ani Îi slujesc lui Hristos și nu mi-a făcut niciun rău; cum aș putea huli pe Împăratul și Mântuitorul meu?»",
      "bio": "Ucenic al Sfântului Evanghelist Ioan, mărturisitor neclintit pe rugul aprins în cetatea Smirnei."
    },
    "la": {
      "name": "Sanctus Polycarpus",
      "title": "Episcopus Smyrnaeus et Martyr",
      "quote": "«Octoginta et sex annos Ei servio, et nihil mali mihi fecit; quomodo Regem et Salvatorem meum blasphemare possim?»",
      "bio": "Ioannis theologi auditor et Smyrnaeorum antistes, qui flammis traditus Deum Patrem et Filium glorificavit."
    },
    "ru": {
      "name": "Св. Поликарп Смирнский",
      "title": "Епископ Смирнский и Священномученик",
      "quote": "«Восемьдесят шесть лет я служу Христу, и Он не причинил мне зла; как же могу хулить Царя и Спасителя моего?»",
      "bio": "Ученик апостола Иоанна Богослова, стойко принявший мученический венец на костре в Смирне."
    },
    "en": {
      "name": "St. Polycarp of Smyrna",
      "title": "Bishop & Apostolic Martyr",
      "quote": "«Eighty and six years have I served Him, and He never did me wrong; how then can I blaspheme my King and Savior?»",
      "bio": "Disciple of St. John who stood steadfast on the pyre in Smyrna, giving praise to the Father, Son, and Holy Spirit."
    }
  },
  "St. Seraphim of Sarov": {
    "it": {
      "name": "San Serafino di Sarov",
      "title": "Taumaturgo di Sarov e Apostolo dello Spirito Santo",
      "quote": "«Acquisisci lo spirito di pace, e intorno a te migliaia troveranno la salvezza.»",
      "bio": "Santo monaco russo che accoglieva tutti con il saluto pasquale 'Gioia mia, Cristo è risorto!' e rivelò la luce dello Spirito."
    },
    "es": {
      "name": "San Serafín de Sarov",
      "title": "Taumaturgo de Sarov y Apóstol del Espíritu Santo",
      "quote": "«Adquiere el espíritu de paz, y a tu alrededor miles se salvarán.»",
      "bio": "Monje ruso que recibía a cada peregrino diciendo '¡Mi gozo, Cristo ha resucitado!', irradiando la luz divina."
    },
    "fr": {
      "name": "Saint Séraphin de Sarov",
      "title": "Thaumaturge de Sarov et Témoin de la Lumière Pascale",
      "quote": "«Acquiers l'esprit de paix, et des milliers autour de toi trouveront le salut.»",
      "bio": "Moine ermite russe accueillant chacun avec les mots 'Ma joie, le Christ est ressuscité !', transfiguré par l'Esprit Saint."
    },
    "de": {
      "name": "Hl. Seraphim von Sarow",
      "title": "Wundertäter von Sarow und Träger des Heiligen Geistes",
      "quote": "«Erwirb den Geist des Friedens, und Tausende um dich herum werden gerettet werden.»",
      "bio": "Russischer Wüstenmönch, der jeden Menschen mit den Osterworten 'Meine Freude, Christus ist auferstanden!' begrüßte."
    },
    "pt": {
      "name": "São Serafim de Sarov",
      "title": "Taumaturgo de Sarov e Apóstolo do Espírito Santo",
      "quote": "«Adquire o espírito de paz, e milhares à tua volta encontrarão a salvação.»",
      "bio": "Monge e místico russo que acolhia os homens saudando-os com o anúncio 'Minha alegria, Cristo ressuscitou!'."
    },
    "ro": {
      "name": "Sfântul Serafim de Sarov",
      "title": "Făcătorul de Minuni din Sarov și Purtătorul Duhului Sfânt",
      "quote": "«Dobândește duhul păcii și mii de oameni se vor mântui în jurul tău.»",
      "bio": "Marele cuvios rus care întâmpina orice pelerin cu bucuria pascală: 'Bucuria mea, Hristos a înviat!'."
    },
    "la": {
      "name": "Sanctus Seraphim Saroviensis",
      "title": "Thaumaturgus Saroviensis et Spiritus Sancti Testis",
      "quote": "«Pacis spiritum acquire, et millia circa te salutem invenient.»",
      "bio": "Monachus russus qui omnes paschali gaudio 'Gaudium meum, Christus resurrexit' salutabat."
    },
    "ru": {
      "name": "Св. Серафим Саровский",
      "title": "Преподобный и Чудотворец Саровский",
      "quote": "«Стяжи дух мирен, и тысячи вокруг тебя спасутся.»",
      "bio": "Великий старец Саровской пустыни, встречавший каждого словами «Радость моя, Христос воскресе!»."
    },
    "en": {
      "name": "St. Seraphim of Sarov",
      "title": "Wonderworker of Sarov & Apostle of the Holy Spirit",
      "quote": "«Acquire a peaceful spirit, and around you thousands will be saved.»",
      "bio": "Greeted every person in winter or summer with the joyful words: 'My joy, Christ is risen!'."
    }
  },
  "St. John Chrysostom": {
    "it": {
      "name": "San Giovanni Crisostomo",
      "title": "Patriarca di Costantinopoli, Bocca d'Oro e Dottore della Chiesa",
      "quote": "«La preghiera è la radice, la sorgente, la madre di innumerevoli benedizioni.»",
      "bio": "Predicatore insigne soprannominato 'Bocca d'Oro', difensore dei diritti dei poveri ed esiliato per la giustizia; autore della Divina Liturgia."
    },
    "es": {
      "name": "San Juan Crisóstomo",
      "title": "Patriarca de Constantinopla, Boca de Oro y Doctor de la Iglesia",
      "quote": "«La oración es la raíz, la fuente y la madre de innumerables bendiciones.»",
      "bio": "Gran orador sagrado llamado 'Boca de Oro', protector incansable de los desvalidos y autor de la Divina Liturgia bizantina."
    },
    "fr": {
      "name": "Saint Jean Chrysostome",
      "title": "Patriarche de Constantinople, Bouche d'Or et Docteur de l'Église",
      "quote": "«La prière est la racine, la source et la mère d'innombrables bénédictions.»",
      "bio": "Archevêque de Constantinople surnommé 'Bouche d'or', défenseur intrépide de la vérité et père de la sainte liturgie."
    },
    "de": {
      "name": "Hl. Johannes Chrysostomus",
      "title": "Patriarch von Konstantinopel, Goldmund und Kirchenvater",
      "quote": "«Das Gebet ist die Wurzel, die Quelle und die Mutter unzähliger Segnungen.»",
      "bio": "Bedeutender Prediger ('Goldmund'), Vorkämpfer für die Armen und Schöpfer der byzantinischen Liturgie."
    },
    "pt": {
      "name": "São João Crisóstomo",
      "title": "Patriarca de Constantinopla, Boca de Ouro e Doutor da Igreja",
      "quote": "«A oração é a raiz, a fonte e a mãe de inúmeras bênçãos.»",
      "bio": "Insigne orador cristão e patrono dos pregadores, protetor dos necessitados e autor da Divina Liturgia."
    },
    "ro": {
      "name": "Sfântul Ioan Gură de Aur",
      "title": "Patriarhul Constantinopolului și Dascăl al Lumii",
      "quote": "«Rugăciunea este rădăcina, izvorul și maica a nenumărate binecuvântări.»",
      "bio": "Marele orator numit 'Gură de Aur', apărător neînfricat al orfanilor și săracilor, alcătuitorul Sfintei Liturghii."
    },
    "la": {
      "name": "Sanctus Ioannes Chrysostomus",
      "title": "Patriarcha Constantinopolitanus et Ecclesiae Doctor",
      "quote": "«Oratio radix est, fons et mater innumerabilium bonorum.»",
      "bio": "Aurei oris praedicator, pauperum defensor et divinae liturgiae auctor, pro iustitia exsulum tolerans."
    },
    "ru": {
      "name": "Св. Иоанн Златоуст",
      "title": "Архиепископ Константинопольский, Вселенский Учитель",
      "quote": "«Молитва — это корень, источник и мать бесчисленных благословений.»",
      "bio": "Великий святитель и непревзойденный проповедник слова Божия, защитник обездоленных, составитель Божественной литургии."
    },
    "en": {
      "name": "St. John Chrysostom",
      "title": "Golden-Mouthed Patriarch of Constantinople & Doctor",
      "quote": "«Prayer is the root, the fountain, the mother of countless blessings.»",
      "bio": "Courageous preacher of righteousness, defender of the poor, author of the Divine Liturgy."
    }
  },
  "St. Basil the Great": {
    "it": {
      "name": "San Basilio Magno",
      "title": "Padre del Monachesimo Orientale e Vescovo di Cesarea",
      "quote": "«Il pane che trattieni appartiene all'affamato; il mantello che conservi nel guardaroba appartiene all'ignudo.»",
      "bio": "Fondatore della Basiliade (il primo grande ospedale per i poveri) e difensore della fede nicena nella Trinità."
    },
    "es": {
      "name": "San Basilio Magno",
      "title": "Padre del Monacato Oriental y Obispo de Cesarea",
      "quote": "«El pan que guardas pertenece al hambriento; el manto que guardas en tu armario pertenece al desnudo.»",
      "bio": "Fundador de la Basiliada, la mayor ciudad de acogida para enfermos y pobres, y columna de la fe trinitaria."
    },
    "fr": {
      "name": "Saint Basile le Grand",
      "title": "Père du Monachisme Oriental et Évêque de Césarée",
      "quote": "«Le pain que tu gardes appartient à l'affamé ; le manteau dans ton armoire appartient à celui qui est nu.»",
      "bio": "Fondateur de la Basiliade pour les malades et les exclus, grand législateur monastique et théologien de la Trinité."
    },
    "de": {
      "name": "Hl. Basilius der Große",
      "title": "Vater des östlichen Mönchtums und Bischof von Cäsarea",
      "quote": "«Das Brot, das du zurückhältst, gehört dem Hungrigen; das Gewand in deinem Schrank gehört dem Nackten.»",
      "bio": "Gründer der Basilias (Krankenhäuser für Arme), Ordensvater des Ostens und Verteidiger des Bekenntnisses von Nicäa."
    },
    "pt": {
      "name": "São Basílio Magno",
      "title": "Pai do Monaquismo Oriental e Bispo de Cesareia",
      "quote": "«O pão que guardas pertence ao faminto; a túnica que guardas no armário pertence àquele que está nu.»",
      "bio": "Criador da Basiliada, acolhendo doentes e desamparados, e coluna inabalável da fé na Santíssima Trindade."
    },
    "ro": {
      "name": "Sfântul Vasile cel Mare",
      "title": "Arhiepiscopul Cezareei Capadociei și Dascăl al Lumii",
      "quote": "«Pâinea pe care o ții ascunsă este a celui flămând; haina pe care o păstrezi în dulap este a celui dezbrăcat.»",
      "bio": "Întemeietorul Vasiliadei (așezământ de caritate pentru bolnavi și săraci) și apărător luminat al credinței ortodoxe."
    },
    "la": {
      "name": "Sanctus Basilius Magnus",
      "title": "Monachismi Orientalis Pater et Caesariensis Episcopus",
      "quote": "«Panis quem retines esurientis est; vestimentum quod in armario servas nudi est.»",
      "bio": "Basiliadis pro pauperibus et infirmis conditor, regulae monasticae auctor et Trinitatis assertor strenuus."
    },
    "ru": {
      "name": "Св. Василий Великий",
      "title": "Архиепископ Кесарии Каппадокийской, Вселенский Учитель",
      "quote": "«Хлеб, который ты удерживаешь, принадлежит голодному; одежда, висящая в шкафу, принадлежит нагому.»",
      "bio": "Создатель знаменитой Василиады для странников и больных, законодатель монашества и великий богослов Троицы."
    },
    "en": {
      "name": "St. Basil the Great",
      "title": "Father of Eastern Monasticism & Defender of the Trinity",
      "quote": "«The bread which you hold back belongs to the hungry; the coat you preserve in your wardrobe belongs to the naked.»",
      "bio": "Architect of hospital complexes and caring communities for the sick and marginalized."
    }
  },
  "Solemnity of Mary, Mother of God": {
    "it": {
      "name": "Maria Santissima Madre di Dio",
      "title": "Madre di Dio e Regina della Pace",
      "quote": "«Maria custodiva tutte queste cose, meditandole nel suo cuore.»",
      "bio": "Celebra la divina maternità della Vergine Maria che ha donato al mondo il Salvatore e Principe della Pace."
    },
    "es": {
      "name": "Santa María, Madre de Dios",
      "title": "Madre de Dios y Reina de la Paz",
      "quote": "«María guardaba todas estas cosas, meditándolas en su corazón.»",
      "bio": "Celebra la divina maternidad de la Santísima Virgen María, que engendró al Salvador y Príncipe de la Paz."
    },
    "fr": {
      "name": "Sainte Marie, Mère de Dieu",
      "title": "Mère de Dieu et Reine de la Paix",
      "quote": "«Marie retenait tous ces événements et les méditait dans son cœur.»",
      "bio": "Célèbre la divine maternité de la Vierge Marie, offrant au monde le Prince de la Paix et Sauveur de tous."
    },
    "de": {
      "name": "Hochfest der Gottesmutter Maria",
      "title": "Gottesmutter und Königin des Friedens",
      "quote": "«Maria aber bewahrte alle diese Worte und erwog sie in ihrem Herzen.»",
      "bio": "Feier der göttlichen Mutterschaft der seligen Jungfrau Maria, die den Friedensfürsten in die Welt brachte."
    },
    "pt": {
      "name": "Santa Maria, Mãe de Deus",
      "title": "Mãe de Deus e Rainha da Paz",
      "quote": "«Maria guardava todas estas coisas, meditando-as no seu coração.»",
      "bio": "Celebração da divina maternidade da Virgem Maria, que gerou para o mundo o Príncipe da Paz."
    },
    "ro": {
      "name": "Sfânta Maria, Născătoarea de Dumnezeu",
      "title": "Maica Domnului și Împărăteasa Păcii",
      "quote": "«Iar Maria păstra toate aceste cuvinte, punându-le în inima sa.»",
      "bio": "Prăznuirea dumnezeieștii maternități a Preacuratei Fecioare Maria, Maica Mântuitorului lumii."
    },
    "la": {
      "name": "Sancta Maria Mater Dei",
      "title": "Theotokos et Regina Pacis",
      "quote": "«Maria autem conservabat omnia verba haec, conferens in corde suo.»",
      "bio": "Divinae maternitatis Beatae Mariae Virginis sollemnitas, quae Principem Pacis mundo peperit."
    },
    "ru": {
      "name": "Пресвятая Богородица, Матерь Божия",
      "title": "Богородица и Царица Мира",
      "quote": "«А Мария сохраняла все слова сии, слагая в сердце Своем.»",
      "bio": "Празднование божественного материнства Пресвятой Девы Марии, родившей миру Князя Мира и Спасителя."
    },
    "en": {
      "name": "Solemnity of Mary, Mother of God",
      "title": "Theotokos & Queen of Peace",
      "quote": "«Mary treasured up all these things and pondered them in her heart.»",
      "bio": "Honoring the divine maternity of the Blessed Virgin Mary who brought the Prince of Peace into human history."
    }
  },
  "St. Anthony the Great": {
    "it": {
      "name": "Sant'Antonio Abate",
      "title": "Padre del Monachesimo nel Deserto",
      "quote": "«Io non temo più Dio, ma lo amo; perché l'amore perfetto scaccia ogni timore.»",
      "bio": "Padre dei monaci solitari nel deserto d'Egitto, maestro spirituale di discernimento e preghiera vittoriosa."
    },
    "es": {
      "name": "San Antonio Abad (el Grande)",
      "title": "Padre del Monaquismo en el Desierto",
      "quote": "«Ya no temo a Dios, sino que lo amo, porque el amor perfecto echa fuera el temor.»",
      "bio": "Iniciador del monacato eremítico en el desierto de Egipto, modelo insigne de austeridad y comunión con Dios."
    },
    "fr": {
      "name": "Saint Antoine le Grand",
      "title": "Père des Moines du Désert",
      "quote": "«Je ne crains plus Dieu, mais je l'aime, car le parfait amour chasse toute crainte.»",
      "bio": "Père du désert égyptien ayant renoncé au monde pour lutter et prier victorieusement dans la solitude."
    },
    "de": {
      "name": "Hl. Antonius der Große",
      "title": "Vater des Mönchtums in der Wüste",
      "quote": "«Ich fürchte Gott nicht mehr, sondern ich liebe Ihn, denn die vollkommene Liebe vertreibt die Furcht.»",
      "bio": "Vater der Einsiedler in der ägyptischen Wüste und Wegweiser des geistlichen Kampfes und Gebets."
    },
    "pt": {
      "name": "Santo Antão o Grande",
      "title": "Pai dos Monges no Deserto",
      "quote": "«Já não temo a Deus, mas amo-O, porque o amor perfeito afasta o temor.»",
      "bio": "Patriarca dos eremitas do deserto egípcio, mestre de oração contínua e perseverança espiritual."
    },
    "ro": {
      "name": "Sfântul Antonie cel Mare",
      "title": "Părintele Monahilor din Pustie",
      "quote": "«Eu nu mă mai tem de Dumnezeu, ci Îl iubesc pe El; căci dragostea cea desăvârșită alungă frica.»",
      "bio": "Începătorul vieții pustnicești din Egipt, dascălul neobosit al trezviei și al rugăciunii neîncetate."
    },
    "la": {
      "name": "Sanctus Antonius Abbas",
      "title": "Monachorum in Eremo Pater",
      "quote": "«Non iam Deum timeo, sed diligo; perfecta enim caritas foras mittit timorem.»",
      "bio": "Pater eremitarum in deserto Aegypti, orationis purae et discretionis spirituum magister clarissimus."
    },
    "ru": {
      "name": "Св. Антоний Великий",
      "title": "Преподобный, Отец Монашества",
      "quote": "«Я уже не боюсь Бога, но люблю Его, ибо совершенная любовь изгоняет страх.»",
      "bio": "Основоположник отшельнического монашества в египетской пустыне, наставник непрестанной молитвы и победы над духами тьмы."
    },
    "en": {
      "name": "St. Anthony the Great",
      "title": "Father of Desert Monasticism",
      "quote": "«I no longer fear God, but I love Him, for perfect love casts out fear.»",
      "bio": "Father of desert hermits in Egypt, master of spiritual warfare and unceasing contemplative prayer."
    }
  },
  "St. Thomas Aquinas": {
    "it": {
      "name": "San Tommaso d'Aquino",
      "title": "Dottore Angelico della Chiesa e Maestro della Fede",
      "quote": "«La fede suppone la ragione come la grazia suppone la natura e la perfeziona.»",
      "bio": "Frate domenicano e gigante della teologia cristiana, autore della Somma Teologica e degli inni eucaristici."
    },
    "es": {
      "name": "Santo Tomás de Aquino",
      "title": "Doctor Angélico y Príncipe de los Teólogos",
      "quote": "«La fe presupone la razón como la gracia presupone la naturaleza y la perfecciona.»",
      "bio": "Fraile dominico y cumbre de la teología escolástica, armonizador de la fe y la razón en la alabanza a Cristo."
    },
    "fr": {
      "name": "Saint Thomas d'Aquin",
      "title": "Docteur Angélique et Prince des Théologiens",
      "quote": "«La foi présuppose la raison comme la grâce présuppose la nature et la perfectionne.»",
      "bio": "Frère dominicain et sommet de la théologie chrétienne, auteur de la Somme Théologique et des hymnes du Saint-Sacrement."
    },
    "de": {
      "name": "Hl. Thomas von Aquin",
      "title": "Kirchenlehrer (Doctor Angelicus)",
      "quote": "«Der Glaube setzt die Vernunft voraus, wie die Gnade die Natur voraussetzt und sie vollendet.»",
      "bio": "Dominikaner und herausragender Theologe, Verfasser der Summa Theologiae und tiefsinniger eucharistischer Hymnen."
    },
    "pt": {
      "name": "São Tomás de Aquino",
      "title": "Doutor Angélico e Mestre da Teologia",
      "quote": "«A fé supõe a razão assim como a graça supõe a natureza e a aperfeiçoa.»",
      "bio": "Frade dominicano e luminar do pensamento cristão, autor da Suma Teológica e fervoroso adorador da Eucaristia."
    },
    "ro": {
      "name": "Sfântul Toma de Aquino",
      "title": "Învățătorul Angelic al Bisericii",
      "quote": "«Credința presupune rațiunea, precum harul presupune firea și o desăvârșește.»",
      "bio": "Teolog profund al armoniei dintre credință și rațiune, autor al Summei Theologiae și al imnurilor euharistice."
    },
    "la": {
      "name": "Sanctus Thomas Aquinas",
      "title": "Doctor Angelicus et Princeps Theologorum",
      "quote": "«Fides praesupponit rationem sicut gratia praesupponit naturam et perficit eam.»",
      "bio": "Ordinis Praedicatorum decus, Summae Theologiae auctor ac mysterii eucharistici cantor praecipuus."
    },
    "ru": {
      "name": "Св. Фома Аквинский",
      "title": "Учитель Церкви (Doctor Angelicus)",
      "quote": "«Вера предполагает разум, как благодать предполагает природу и совершенствует её.»",
      "bio": "Монах-доминиканец, величайший богослов средневекового христианства, автор «Суммы теологии»."
    },
    "en": {
      "name": "St. Thomas Aquinas",
      "title": "Angelic Doctor of the Church",
      "quote": "«Faith presupposes reason as grace presupposes nature and perfects it.»",
      "bio": "Dominican friar and universal teacher of Christian wisdom, author of the Summa Theologiae."
    }
  },
  "St. Patrick of Ireland": {
    "it": {
      "name": "San Patrizio",
      "title": "Apostolo dell'Irlanda e Vescovo",
      "quote": "«Cristo con me, Cristo davanti a me, Cristo dietro di me, Cristo dentro di me, Cristo sotto di me, Cristo sopra di me.»",
      "bio": "Da schiavo a pastore d'Irlanda, convertì l'isola alla fede cristiana con fede viva e ardente carità."
    },
    "es": {
      "name": "San Patricio de Irlanda",
      "title": "Apóstol de Irlanda y Obispo",
      "quote": "«Cristo conmigo, Cristo delante de mí, Cristo detrás de mí, Cristo en mí, Cristo sobre mí.»",
      "bio": "Evangelizador incansable de Irlanda que llevó la luz del Evangelio a toda la nación celta."
    },
    "fr": {
      "name": "Saint Patrick d'Irlande",
      "title": "Apôtre de l'Irlande et Évêque",
      "quote": "«Le Christ avec moi, le Christ devant moi, le Christ derrière moi, le Christ en moi, le Christ au-dessus de moi.»",
      "bio": "Évêque missionnaire et apôtre de l'Irlande, auteur de la célèbre cuirasse de saint Patrick."
    },
    "de": {
      "name": "Hl. Patrick von Irland",
      "title": "Apostel Irlands und Bischof",
      "quote": "«Christus mit mir, Christus vor mir, Christus hinter mir, Christus in mir, Christus über mir.»",
      "bio": "Verkündete den Iren das Evangelium von der heiligen Dreifaltigkeit und erneuerte die grüne Insel im Glauben."
    },
    "pt": {
      "name": "São Patrício da Irlanda",
      "title": "Apóstolo da Irlanda e Bispo",
      "quote": "«Cristo comigo, Cristo diante de mim, Cristo atrás de mim, Cristo em mim, Cristo sobre mim.»",
      "bio": "Evangelizador de toda a Irlanda, ensinando o mistério da Santíssima Trindade com o trevo verde."
    },
    "ro": {
      "name": "Sfântul Patrick (Patriciu), Luminătorul Irlandei",
      "title": "Apostolul Irlandei și Episcop",
      "quote": "«Hristos cu mine, Hristos înaintea mea, Hristos înapoia mea, Hristos înlăuntrul meu, Hristos deasupra mea.»",
      "bio": "Episcop și luminător al poporului irlandez, propovăduind Sfânta Treime și credința mântuitoare."
    },
    "la": {
      "name": "Sanctus Patricius",
      "title": "Apostolus Hiberniae et Episcopus",
      "quote": "«Christus mecum, Christus ante me, Christus retro me, Christus in me, Christus super me.»",
      "bio": "Hibernorum apostolus ac pastor praeclarus, qui insulam ad Sanctissimae Trinitatis fidem perduxit."
    },
    "ru": {
      "name": "Св. Патрик (Патрикий), Просветитель Ирландии",
      "title": "Апостол Ирландии и Епископ",
      "quote": "«Христос со мной, Христос передо мной, Христос позади меня, Христос во мне, Христос надо мной.»",
      "bio": "Святитель и просветитель Ирландии, обративший кельтские народы ко Христу и утвердивший веру в Святую Троицу."
    },
    "en": {
      "name": "St. Patrick of Ireland",
      "title": "Apostle of Ireland & Bishop",
      "quote": "«Christ with me, Christ before me, Christ behind me, Christ in me, Christ above me.»",
      "bio": "Apostle of the Irish nation who proclaimed the Trinity across the island and founded churches."
    }
  },
  "St. Joseph, Spouse of the Blessed Virgin Mary": {
    "it": {
      "name": "San Giuseppe, Sposo della Beata Vergine Maria",
      "title": "Custode del Redentore e Patrono della Chiesa Universale",
      "quote": "«Uomo giusto che custodì nel silenzio il mistero della salvezza e vegliò sul Figlio di Dio.»",
      "bio": "Sposo fedele di Maria Vergine e padre putativo di Gesù, modello di umiltà, lavoro e preghiera obbediente."
    },
    "es": {
      "name": "San José, Esposo de la Santísima Virgen María",
      "title": "Custodio del Redentor y Patrono de la Iglesia Universal",
      "quote": "«Varón justo que en silencio acogió el misterio del Verbo hecho carne.»",
      "bio": "Esposo fidelísimo de la Virgen María y padre adoptivo de Jesús, protector del hogar de Nazaret."
    },
    "fr": {
      "name": "Saint Joseph, Époux de la Bienheureuse Vierge Marie",
      "title": "Gardien du Rédempteur et Patron de l'Église Universelle",
      "quote": "«Homme juste qui accueillit en silence le mystère du Verbe incarné.»",
      "bio": "Époux de la Vierge Marie et père nourricier du Christ, exemple de foi humble et de travail sanctifié."
    },
    "de": {
      "name": "Hl. Josef, Bräutigam der seligen Jungfrau Maria",
      "title": "Hüter des Erlösers und Patron der Gesamtkirche",
      "quote": "«Ein gerechter Mann, der im Schweigen das Geheimnis der Erlösung behütete.»",
      "bio": "Bräutigam der Gottesmutter und Nährvater Jesu, Vorbild des stillen Gehorsams und des treuen Dienstes."
    },
    "pt": {
      "name": "São José, Esposo da Bem-Aventurada Virgem Maria",
      "title": "Custódio do Redentor e Padroeiro da Igreja Universal",
      "quote": "«Homem justo que no silêncio guardou o mistério da salvação.»",
      "bio": "Esposo vigilante de Maria Santíssima e pai nutrício do Salvador, mestre da obediência da fé."
    },
    "ro": {
      "name": "Sfântul Iosif, Logodnicul Preasfintei Fecioare Maria",
      "title": "Ocrotitorul Mântuitorului și al Bisericii",
      "quote": "«Bărbat drept care a slujit cu tăcere și sfințenie tainei întrupării Fiului lui Dumnezeu.»",
      "bio": "Logodnicul Preacuratei Fecioare Maria și ocrotitorul Pruncului Iisus în cetatea Nazaretului."
    },
    "la": {
      "name": "Sanctus Ioseph, Sponsus Beatae Mariae Virginis",
      "title": "Custos Redemptoris et Ecclesiae Universalis Patronus",
      "quote": "«Vir iustus qui silentio et obedientia mysterium Verbi Incarnati custodivit.»",
      "bio": "Deiparae sponsus fidelis et Iesu Christi nutritor, humilitatis et laboris sanctificati exemplar."
    },
    "ru": {
      "name": "Св. Иосиф Обручник, Муж Пресвятой Девы Марии",
      "title": "Хранитель Спасителя и Праведник",
      "quote": "«Муж праведный, в смиренном молчании сохранивший тайну Боговоплощения.»",
      "bio": "Обручник Пресвятой Богородицы и заботливый хранитель Младенца Иисуса в Назарете."
    },
    "en": {
      "name": "St. Joseph, Spouse of the Blessed Virgin Mary",
      "title": "Guardian of the Redeemer & Patron of the Universal Church",
      "quote": "«A just man who faithfully guarded the mysteries of salvation in holy silence.»",
      "bio": "Spouse of the Blessed Virgin Mary and earthly guardian of our Lord Jesus Christ."
    }
  },
  "The Annunciation of the Lord": {
    "it": {
      "name": "Annunciazione del Signore",
      "title": "Incarnazione del Verbo e «Fiat» di Maria",
      "quote": "«Ecco l'ancella del Signore: avvenga per me secondo la tua parola.»",
      "bio": "L'arcangelo Gabriele annuncia alla Vergine Maria la nascita del Salvatore: il Verbo si fa carne nel suo grembo."
    },
    "es": {
      "name": "La Anunciación del Señor",
      "title": "Encarnación del Verbo y «Fiat» de María",
      "quote": "«He aquí la esclava del Señor; hágase en mí según tu palabra.»",
      "bio": "El ángel Gabriel anuncia a la Virgen la concepción del Hijo de Dios por obra del Espíritu Santo."
    },
    "fr": {
      "name": "L'Annonciation du Seigneur",
      "title": "Incarnation du Verbe et « Fiat » de Marie",
      "quote": "«Voici la servante du Seigneur ; que tout m'advienne selon ta parole.»",
      "bio": "L'archange Gabriel annonce à la Vierge Marie qu'elle enfantera le Sauveur du monde."
    },
    "de": {
      "name": "Verkündigung des Herrn",
      "title": "Menschwerdung des Wortes und Marias Ja-Wort",
      "quote": "«Siehe, ich bin die Magd des Herrn; mir geschehe, wie du gesagt hast.»",
      "bio": "Der Erzengel Gabriel verkündet der Jungfrau Maria die Empfängnis des Erlösers der Welt."
    },
    "pt": {
      "name": "A Anunciação do Senhor",
      "title": "Encarnação do Verbo e «Fiat» de Maria",
      "quote": "«Eis a serva do Senhor; faça-se em mim segundo a tua palavra.»",
      "bio": "O anjo Gabriel anuncia a Maria que ela conceberá do Espírito Santo o Filho do Altíssimo."
    },
    "ro": {
      "name": "Buna Vestire (Blagoveștenia)",
      "title": "Întruparea Cuvântului și Răspunsul Preacuratei Fecioare",
      "quote": "«Iată roaba Domnului. Fie mie după cuvântul tău!»",
      "bio": "Arhanghelul Gavriil vestește Fecioarei Maria zămislirea de la Duhul Sfânt a Mântuitorului lumii."
    },
    "la": {
      "name": "Annuntiatio Domini",
      "title": "Incarnatio Verbi et «Fiat» Beatae Mariae Virginis",
      "quote": "«Ecce ancilla Domini; fiat mihi secundum verbum tuum.»",
      "bio": "Gabriel angelus Mariae nuntiat Filium Altissimi per Spiritum Sanctum in carne nasciturum."
    },
    "ru": {
      "name": "Благовещение Пресвятой Богородицы",
      "title": "Бог Слово становится плотью",
      "quote": "«Се, Раба Господня; да будет Мне по слову твоему.»",
      "bio": "Архангел Гавриил благовествует Деве Марии тайну зачатия Сына Божия от Духа Святого."
    },
    "en": {
      "name": "The Annunciation of the Lord",
      "title": "Incarnation of the Word & Mary's Fiat",
      "quote": "«Behold the handmaid of the Lord; let it be done to me according to your word.»",
      "bio": "The Archangel Gabriel announces to Mary that she will bear the Son of God, the Savior."
    }
  },
  "St. George, Great-Martyr": {
    "it": {
      "name": "San Giorgio Martire",
      "title": "Megalomartire e Testimone Intrepido di Cristo",
      "quote": "«Cristo è la mia forza e la mia salvezza; nulla mi separerà dal suo amore.»",
      "bio": "Soldato romano che confessò coraggiosamente la fede davanti all'imperatore, vincitore del male spirituale."
    },
    "es": {
      "name": "San Jorge Mártir",
      "title": "Megalomártir y Defensor de la Fe",
      "quote": "«Cristo es mi fortaleza y mi escudo; nada me apartará de su amor.»",
      "bio": "Mártir glorioso de Capadocia que entregó su vida antes que ofrecer incienso a los ídolos paganos."
    },
    "fr": {
      "name": "Saint Georges, Mégalomartyr",
      "title": "Martyr et Vaillant Témoin du Christ",
      "quote": "«Le Christ est ma force et mon salut ; rien ne me séparera de son amour.»",
      "bio": "Chevalier de la foi chrétienne triomphant du mal et confessant le Seigneur avec intrépidité."
    },
    "de": {
      "name": "Hl. Georg, Großmärtyrer",
      "title": "Ritter Christi und Schutzpatron",
      "quote": "«Christus ist meine Stärke und mein Heil; nichts kann mich von Seiner Liebe scheiden.»",
      "bio": "Römischer Offizier, der für seinen unerschütterlichen Christusglauben den Martertod starb."
    },
    "pt": {
      "name": "São Jorge Mártir",
      "title": "Megalomártir e Guerreiro de Cristo",
      "quote": "«Cristo é a minha força e a minha salvação; nada me afastará do seu amor.»",
      "bio": "Soldado valente que proclamou a fé cristã diante dos perseguidores e venceu o dragão do pecado."
    },
    "ro": {
      "name": "Sfântul Mare Mucenic Gheorghe, Purtătorul de Biruință",
      "title": "Marele Mucenic și Biruitorul fiarelor",
      "quote": "«Hristos este tăria mea și mântuirea mea; nimic nu mă va despărți de dragostea Lui.»",
      "bio": "Ostaș viteaz al lui Hristos care a mărturisit credința neclintită în fața tiranilor persecutori."
    },
    "la": {
      "name": "Sanctus Georgius Martyr",
      "title": "Megalomartyr et Christi Miles Fidelis",
      "quote": "«Christus fortitudo mea et salus mea; nihil me separabit a caritate Dei.»",
      "bio": "Miles christianus qui sub Diocletiano imperatore idolatriam vicit et sanguinem pro fide fudit."
    },
    "ru": {
      "name": "Св. Великомученик Георгий Победоносец",
      "title": "Победоносец и Мученик Христов",
      "quote": "«Христос — моя сила и мое упование; ничто не отлучит меня от Его любви.»",
      "bio": "Славный воин Христов, претерпевший тяжкие страдания за веру и победивший зло силой крестной."
    },
    "en": {
      "name": "St. George, Great-Martyr",
      "title": "Trophy-Bearer & Holy Martyr",
      "quote": "«Christ is my strength and my salvation; nothing can separate me from His love.»",
      "bio": "Roman soldier who bravely confessed Christ before the persecutors, vanquishing spiritual darkness."
    }
  },
  "St. Catherine of Siena": {
    "it": {
      "name": "Santa Caterina da Siena",
      "title": "Vergine e Dottore della Chiesa, Compatrona d'Europa",
      "quote": "«Se sarete quello che dovete essere, metterete fuoco a tutta la terra!»",
      "bio": "Terziaria domenicana, mistica e pacificatrice, richiamò il Papa da Avignone a Roma per il bene della Chiesa."
    },
    "es": {
      "name": "Santa Catalina de Siena",
      "title": "Virgen y Doctora de la Iglesia, Copatrona de Europa",
      "quote": "«¡Si sois lo que debéis ser, prenderéis fuego al mundo entero!»",
      "bio": "Mística terciaria dominica, reconciliadora de ciudades y firme defensora de la comunión eclesial."
    },
    "fr": {
      "name": "Sainte Catherine de Sienne",
      "title": "Vierge et Docteur de l'Église, Co-patronne de l'Europe",
      "quote": "«Si vous êtes ce que vous devez être, vous mettrez le feu au monde entier !»",
      "bio": "Mystique dominicaine brûlante d'amour pour le Christ et l'Église, ouvrière de réconciliation et de paix."
    },
    "de": {
      "name": "Hl. Katharina von Siena",
      "title": "Jungfrau und Kirchenlehrerin, Mitpatronin Europas",
      "quote": "«Wenn ihr seid, was ihr sein sollt, werdet ihr die ganze Welt in Brand setzen!»",
      "bio": "Dominikanische Mystikerin und Ratgeberin der Päpste, Botschafterin des Friedens und der Einheit."
    },
    "pt": {
      "name": "Santa Catarina de Sena",
      "title": "Virgem e Doutora da Igreja, Copadroeira da Europa",
      "quote": "«Se fordes o que deveis ser, deitareis fogo ao mundo inteiro!»",
      "bio": "Mística dominicana e pacificadora incansável, unida a Cristo pelos estigmas do Seu amor."
    },
    "ro": {
      "name": "Sfânta Ecaterina de Siena",
      "title": "Fecioară și Învățătoare a Bisericii",
      "quote": "«Dacă veți fi ceea ce trebuie să fiți, veți aprinde cu focul dragostei întreaga lume!»",
      "bio": "Mistică dominicană a sângelui lui Hristos și a unirii sufletului cu Dumnezeu prin iubire jertfelnică."
    },
    "la": {
      "name": "Sancta Catharina Senensis",
      "title": "Virgo et Ecclesiae Doctor, Europae Compatrona",
      "quote": "«Si eritis quod esse debetis, ignem in universum orbem mittetis!»",
      "bio": "Tertii Ordinis Sancti Dominici virgo, Dialogi conscriptrix et pacis conciliatrix admirabilis."
    },
    "ru": {
      "name": "Св. Екатерина Сиенская",
      "title": "Дева и Учитель Церкви, Покровительница Европы",
      "quote": "«Если вы будете теми, кем должны быть, вы зажжете всю землю огнем любви!»",
      "bio": "Христианская мистичка и миротворица, неустанно радевшая о чистоте веры и единстве Церкви."
    },
    "en": {
      "name": "St. Catherine of Siena",
      "title": "Doctor of the Church & Co-Patron of Europe",
      "quote": "«If you are what you should be, you will set whole world ablaze with fire!»",
      "bio": "Dominican tertiary and mystic who sought the renewal of the Church and peace among peoples."
    }
  },
  "St. Benedict of Nursia": {
    "it": {
      "name": "San Benedetto da Norcia",
      "title": "Padre del Monachesimo Occidentale e Patrono d'Europa",
      "quote": "«Non anteporre nulla all'amore di Cristo. Ora et labora.»",
      "bio": "Fondatore di Montecassino e padre spirituale dell'Europa cristiana attraverso la sua saggia Regola."
    },
    "es": {
      "name": "San Benito de Nursia",
      "title": "Padre del Monaquismo Occidental y Patrono de Europa",
      "quote": "«Nada anteponer al amor de Cristo. Ora y trabaja.»",
      "bio": "Fundador de la abadía de Montecasino, legislador de la vida monástica centrada en la oración y el trabajo."
    },
    "fr": {
      "name": "Saint Benoît de Nursie",
      "title": "Père du Monachisme Occidental et Patron de l'Europe",
      "quote": "«Ne rien préférer à l'amour du Christ. Prie et travaille.»",
      "bio": "Fondateur du monastère du Mont-Cassin et patriarche des moines d'Occident par sa sainte Règle."
    },
    "de": {
      "name": "Hl. Benedikt von Nursia",
      "title": "Vater des abendländischen Mönchtums und Patron Europas",
      "quote": "«Der Liebe zu Christus soll man nichts vorziehen. Bete und arbeite.»",
      "bio": "Gründer der Abtei Montecassino, dessen Regel das geistliche und kulturelle Fundament Europas prägte."
    },
    "pt": {
      "name": "São Bento de Núrsia",
      "title": "Pai do Monaquismo Ocidental e Padroeiro da Europa",
      "quote": "«Nada antepor ao amor de Cristo. Ora e trabalha.»",
      "bio": "Patriarca dos monges do Ocidente, ensinando o caminho da paz e da consagração a Deus."
    },
    "ro": {
      "name": "Sfântul Benedict de Nursia",
      "title": "Părintele Monahismului Apusean și Ocrotitorul Europei",
      "quote": "«Nimic să nu puneți înaintea iubirii lui Hristos. Roagă-te și lucrează.»",
      "bio": "Întemeietorul mănăstirii de la Monte Cassino, autorul rânduielii monahale a rugăciunii și muncii smerite."
    },
    "la": {
      "name": "Sanctus Benedictus de Nursia",
      "title": "Monachorum Occidentalium Pater et Europae Patronus",
      "quote": "«Nihil amori Christi praeponere. Ora et labora.»",
      "bio": "Casinensis coenobii fundator et sanctae Regulae monasticae legislator praeclarissimus."
    },
    "ru": {
      "name": "Св. Бенедикт Нурсийский",
      "title": "Преподобный, Отец Западного Монашества",
      "quote": "«Ничего не предпочитай любви Христовой. Молись и трудись.»",
      "bio": "Основатель монастыря Монтекассино и автор Устава, заложившего духовные основы христианской Европы."
    },
    "en": {
      "name": "St. Benedict of Nursia",
      "title": "Father of Western Monasticism & Patron of Europe",
      "quote": "«Prefer nothing whatever to the love of Christ. Ora et labora.»",
      "bio": "Abbot of Monte Cassino whose balanced Rule established monastic prayer across Europe."
    }
  },
  "Holy Archangels Michael, Gabriel, and Raphael": {
    "it": {
      "name": "Santi Arcangeli Michele, Gabriele e Raffaele",
      "title": "Gloriosi Angeli di Dio, Messaggeri e Difensori",
      "quote": "«Chi è come Dio? Il Signore manda i suoi angeli a custodirci in tutte le nostre vie.»",
      "bio": "Michele vince le potenze delle tenebre; Gabriele annuncia il Verbo; Raffaele è medicina e guida dei pellegrini."
    },
    "es": {
      "name": "Santos Arcángeles Miguel, Gabriel y Rafael",
      "title": "Príncipes de la Milicia Celestial y Mensajeros Divinos",
      "quote": "«¿Quién como Dios? El Señor envía a sus santos ángeles para guardarnos en todo camino.»",
      "bio": "Miguel combate las fuerzas del mal; Gabriel proclama los designios de salvación; Rafael sana las almas y cuerpos."
    },
    "fr": {
      "name": "Saints Archanges Michel, Gabriel et Raphaël",
      "title": "Messagers et Défenseurs Célestes",
      "quote": "«Qui est comme Dieu ? Il donne mission à ses anges de te garder sur tous tes chemins.»",
      "bio": "Michel terrasse l'antique serpent ; Gabriel apporte la bonne nouvelle ; Raphaël est le remède de Dieu."
    },
    "de": {
      "name": "Hll. Erzengel Michael, Gabriel und Raphael",
      "title": "Boten Gottes und himmlische Beschützer",
      "quote": "«Wer ist wie Gott? Er befiehlt seinen Engeln, dich zu behüten auf all deinen Wegen.»",
      "bio": "Michael besiegt die Finsternis; Gabriel verkündet das Heil; Raphael heilt und leitet die Pilger."
    },
    "pt": {
      "name": "Santos Arcanjos Miguel, Gabriel e Rafael",
      "title": "Mensageiros Divinos e Defensores Celestes",
      "quote": "«Quem como Deus? O Senhor manda os seus anjos para nos guardar em todos os caminhos.»",
      "bio": "Miguel defende-nos no combate; Gabriel anuncia o Verbo; Rafael é guia seguro e remédio divino."
    },
    "ro": {
      "name": "Sfinții Arhangheli Mihail, Gavriil și Rafail",
      "title": "Mai-marii Voievozilor Oștilor Cerești",
      "quote": "«Cine este ca Dumnezeu? Îngerilor Săi va porunci pentru tine, ca să te păzească în toate căile tale.»",
      "bio": "Mihail biruiește puterile întunericului; Gavriil binevestește mântuirea; Rafail tămăduiește neputințele."
    },
    "la": {
      "name": "Sancti Archangeli Michael, Gabriel et Raphael",
      "title": "Militiae Caelestis Principes et Nuntii Salutis",
      "quote": "«Quis ut Deus? Angelis suis mandavit de te, ut custodiant te in omnibus viis tuis.»",
      "bio": "Michael draconem debellat; Gabriel Verbi Incarnationem nuntiat; Raphael medicina Dei hominibus adest."
    },
    "ru": {
      "name": "Свв. Архангелы Михаил, Гавриил и Рафаил",
      "title": "Архистратиги Небесных Сил Бесплотных",
      "quote": "«Кто как Бог? Ибо Ангелам Своим заповедает о тебе — охранять тебя на всех путях твоих.»",
      "bio": "Михаил низвергает духа зла; Гавриил возвещает тайны спасения; Рафаил врачует душевные и телесные недуги."
    },
    "en": {
      "name": "Holy Archangels Michael, Gabriel, and Raphael",
      "title": "Messengers of God & Guardians of Souls",
      "quote": "«Who is like God? The Lord commands His angels to guard you in all your ways.»",
      "bio": "Michael conquers spiritual darkness; Gabriel announces the Word; Raphael brings healing and guidance."
    }
  },
  "Our Lady of Fatima": {
    "it": {
      "name": "Beata Vergine Maria di Fatima",
      "title": "Regina del Rosario e Rifugio dei Peccatori",
      "quote": "«Il mio Cuore Immacolato sarà il tuo rifugio e il cammino che ti condurrà a Dio.»",
      "bio": "Apparve a Cova da Iria ai tre pastorelli Francesco, Giacinta e Lucia, richiamando il mondo alla preghiera e alla penitenza."
    },
    "es": {
      "name": "Nuestra Señora de Fátima",
      "title": "Reina del Santo Rosario y Refugio de Pecadores",
      "quote": "«Mi Inmaculado Corazón será tu refugio y el camino que te conducirá hasta Dios.»",
      "bio": "Aparición de la Virgen María en Cova da Iria a los tres pastorcitos, llamando a la oración del Rosario y la conversión."
    },
    "fr": {
      "name": "Notre-Dame de Fatima",
      "title": "Reine du Saint-Rosaire et Refuge des Pécheurs",
      "quote": "«Mon Cœur Immaculé sera ton refuge et le chemin qui te conduira jusqu'à Dieu.»",
      "bio": "Apparue aux trois petits bergers à Fatima, invitant le monde entier à la prière du chapelet et à la paix."
    },
    "de": {
      "name": "Unsere Liebe Frau von Fatima",
      "title": "Königin des Rosenkranzes und Zuflucht der Sünder",
      "quote": "«Mein Unbeflecktes Herz wird deine Zuflucht sein und der Weg, der dich zu Gott führt.»",
      "bio": "Erscheinung der Gottesmutter vor den drei Hirtenkindern mit dem Ruf zu Umkehr, Gebet und Frieden für die Welt."
    },
    "pt": {
      "name": "Nossa Senhora de Fátima",
      "title": "Rainha do Santíssimo Rosário e Refúgio dos Pecadores",
      "quote": "«O meu Imaculado Coração será o teu refúgio e o caminho que te conduzirá até Deus.»",
      "bio": "Aparição da Virgem Santíssima na Cova da Iria aos pastorinhos Francisco, Jacinta e Lúcia, pedindo a oração pela paz."
    },
    "ro": {
      "name": "Sfânta Fecioară Maria de la Fatima",
      "title": "Regina Rozariului și Scăparea Păcătoșilor",
      "quote": "«Inima mea neprihănită va fi adăpostul tău și calea care te va duce la Dumnezeu.»",
      "bio": "Arătarea Preacuratei Fecioare Maria celor trei păstorași, chemând întreaga omenire la rugăciune și pocăință."
    },
    "la": {
      "name": "Beata Maria Virgo de Fatima",
      "title": "Regina Sacratissimi Rosarii et Refugium Peccatorum",
      "quote": "«Cor meum Immaculatum erit refugium tuum et via quae te perducet ad Deum.»",
      "bio": "Apparitio Deiparae Virginis tribus pastoribus in Cova da Iria data, pacem et orationem orbi nuntians."
    },
    "ru": {
      "name": "Фатимская икона Божией Матери (Явление в Фатиме)",
      "title": "Царица Святого Розария и Прибежище грешников",
      "quote": "«Мое Непорочное Сердце будет твоим прибежищем и путем, ведущим к Богу.»",
      "bio": "Явление Пресвятой Богородицы троим детям в Фатиме с призывом к покаянию, молитве о мире и обращению сердец."
    },
    "en": {
      "name": "Our Lady of Fatima",
      "title": "Queen of the Rosary & Mother of Mercy",
      "quote": "«My Immaculate Heart will be your refuge and the way that will lead you to God.»",
      "bio": "Appeared in Fatima calling the world to repentance, prayer of the Rosary, and peace among nations."
    }
  },
  "Our Lady of Lourdes": {
    "it": {
      "name": "Beata Vergine Maria di Lourdes",
      "title": "Immacolata Concezione e Salute degli Infermi",
      "quote": "«Io sono l'Immacolata Concezione. Pregate per i peccatori.»",
      "bio": "Apparve a Santa Bernadetta Soubirous nella grotta di Massabielle, rivelando una sorgente di grazia e guarigione."
    },
    "es": {
      "name": "Nuestra Señora de Lourdes",
      "title": "Inmaculada Concepción y Salud de los Enfermos",
      "quote": "«Yo soy la Inmaculada Concepción. Rogad por los pecadores.»",
      "bio": "Aparición de la Virgen a Santa Bernardita en la gruta de Massabielle, fuente de misericordia y consuelo."
    },
    "fr": {
      "name": "Notre-Dame de Lourdes",
      "title": "Immaculée Conception et Salut des Malades",
      "quote": "«Je suis l'Immaculée Conception. Priez pour les pécheurs.»",
      "bio": "Apparition à sainte Bernadette à la grotte de Massabielle, jaillissement d'espérance et de guérison pour les souffrants."
    },
    "de": {
      "name": "Unsere Liebe Frau in Lourdes",
      "title": "Unbefleckte Empfängnis und Heil der Kranken",
      "quote": "«Ich bin die Unbefleckte Empfängnis. Betet für die Sünder.»",
      "bio": "Erscheinung der Gottesmutter vor der hl. Bernadette in der Grotte von Massabielle als Quelle des Trostes."
    },
    "pt": {
      "name": "Nossa Senhora de Lourdes",
      "title": "Imaculada Conceição e Saúde dos Enfermos",
      "quote": "«Eu sou a Imaculada Conceição. Orai pelos pecadores.»",
      "bio": "Aparição à humilde Santa Bernadete na gruta de Massabielle, conforto inesgotável para os doentes."
    },
    "ro": {
      "name": "Sfânta Fecioară Maria de la Lourdes",
      "title": "Neprihănita Zămislire și Tămăduirea Bolnavilor",
      "quote": "«Eu sunt Neprihănita Zămislire. Rugați-vă pentru păcătoși.»",
      "bio": "Arătarea Preacuratei Fecioare Sfintei Bernadeta la grota Massabielle, izvor de vindecare trupească și sufletească."
    },
    "la": {
      "name": "Beata Maria Virgo de Lourdes",
      "title": "Immaculata Conceptio et Salus Infirmorum",
      "quote": "«Ego sum Immaculata Conceptio. Orate pro peccatoribus.»",
      "bio": "Beatae Mariae Virginis apparitio Sanctae Bernardae Soubirous Massabiellae facta, infirmorum solacium."
    },
    "ru": {
      "name": "Лурдская Богоматерь",
      "title": "Непорочное Зачатие и Исцеление Болящих",
      "quote": "«Я есмь Непорочное Зачатие. Молитесь за грешников.»",
      "bio": "Явление Пресвятой Богородицы святой Бернадетте в гроте Массабьель, явление источника исцеления и милости."
    },
    "en": {
      "name": "Our Lady of Lourdes",
      "title": "The Immaculate Conception & Health of the Sick",
      "quote": "«I am the Immaculate Conception. Pray for the conversion of sinners.»",
      "bio": "Appeared to St. Bernadette at the grotto of Massabielle, opening a fountain of healing and peace."
    }
  },
  "Our Lady of Guadalupe": {
    "it": {
      "name": "Nostra Signora di Guadalupe",
      "title": "Patrona delle Americhe e Stella dell'Evangelizzazione",
      "quote": "«Non sono forse qui io, che sono tua Madre? Non temere alcuna afflizione.»",
      "bio": "Apparve sulla collina del Tepeyac a San Juan Diego, lasciando la sua sacra immagine impressa sulla tilma."
    },
    "es": {
      "name": "Nuestra Señora de Guadalupe",
      "title": "Patrona de América y Estrella de la Evangelización",
      "quote": "«¿No estoy yo aquí, que soy tu Madre? ¿No estás bajo mi sombra y resguardo?»",
      "bio": "Aparición celestial al indio San Juan Diego en el Tepeyac, dejando su sagrada imagen milagrosa en la tilma."
    },
    "fr": {
      "name": "Notre-Dame de Guadalupe",
      "title": "Patronne des Amériques et Étoile de l'Évangélisation",
      "quote": "«Ne suis-je pas là, moi qui suis ta Mère ? Ne crains rien.»",
      "bio": "Apparue à saint Juan Diego au Mexique, laissant son image miraculeuse sur le manteau de fibre végétale."
    },
    "de": {
      "name": "Unsere Liebe Frau von Guadalupe",
      "title": "Patronin Amerikas und Stern der Evangelisierung",
      "quote": "«Bin ich denn nicht hier, deine Mutter? Fürchte nichts.»",
      "bio": "Erscheinung vor dem hl. Juan Diego in Mexiko, deren Gnadenbild auf dem Tilma-Mantel erhalten blieb."
    },
    "pt": {
      "name": "Nossa Senhora de Guadalupe",
      "title": "Padroeira das Américas e Estrela da Evangelização",
      "quote": "«Não estou eu aqui, que sou tua Mãe? Não temas aflição alguma.»",
      "bio": "Aparição a São Juan Diego no México, deixando impressa na sua veste a imagem milagrosa da Mãe de Deus."
    },
    "ro": {
      "name": "Sfânta Fecioară Maria de la Guadalupe",
      "title": "Ocrotitoarea Americilor și Steaua Evanghelizării",
      "quote": "«Oare nu sunt eu aici, care sunt Maica ta? Nu te teme de nicio suferință.»",
      "bio": "Arătarea minunată a Maicii Domnului Sfântului Juan Diego în Mexic, întipărind chipul său pe mantia de pânză."
    },
    "la": {
      "name": "Beata Maria Virgo de Guadalupe",
      "title": "Patrona Americae et Stella Evangelizationis",
      "quote": "«Nonne hic sum ego, quae Mater tua sum? Nihil timeas.»",
      "bio": "Sancto Ioanni Didaco in colle Tepeyacac apparuit, cuius imago in mantello mirabiliter impressa mansit."
    },
    "ru": {
      "name": "Гваделупская икона Божией Матери",
      "title": "Покровительница Америки и Звезда благовестия",
      "quote": "«Разве не здесь Я, твоя Матерь? Не бойся никакой печали.»",
      "bio": "Чудесное явление Пресвятой Богородицы святому Хуану Диего в Мексике с запечатлением Ее нерукотворного образа."
    },
    "en": {
      "name": "Our Lady of Guadalupe",
      "title": "Patroness of the Americas & Star of Evangelization",
      "quote": "«Am I not here, who am your Mother? Do not let anything grieve or disturb you.»",
      "bio": "Appeared to St. Juan Diego in Mexico, leaving her miraculous image imprinted upon his cactus-fiber cloak."
    }
  },
  "The Epiphany of the Lord (Theophany)": {
    "it": {
      "name": "Epifania del Signore (Teofania)",
      "title": "Manifestazione di Cristo alle Genti",
      "quote": "«Abbiamo visto sorgere la sua stella e siamo venuti con doni ad adorare il Re dei re.»",
      "bio": "I Magi d'Oriente guidati dalla stella offrono oro, incenso e mirra al Bambino Gesù, Salvatore di tutti i popoli."
    },
    "es": {
      "name": "La Epifanía del Señor (Teofanía)",
      "title": "Manifestación de Cristo a las Naciones",
      "quote": "«Vimos su estrella en el oriente y venimos a adorar al Rey de reyes.»",
      "bio": "Los sabios de Oriente guiados por la estrella adoran al Niño Jesús y le ofrecen oro, incienso y mirra."
    },
    "fr": {
      "name": "L'Épiphanie du Seigneur (Théophanie)",
      "title": "Manifestation du Christ aux Nations",
      "quote": "«Nous avons vu son étoile à l'orient, et nous sommes venus nous prosterner devant Lui.»",
      "bio": "Les Mages d'Orient offrent l'or, l'encens et la myrrhe à l'Enfant Sauveur, lumière des nations."
    },
    "de": {
      "name": "Erscheinung des Herrn (Epiphanie / Dreikönigstag)",
      "title": "Offenbarung Christi vor den Völkern",
      "quote": "«Wir haben seinen Stern aufgehen sehen und sind gekommen, um Ihn anzubeten.»",
      "bio": "Die Weisen aus dem Morgenland bringen Gold, Weihrauch und Myrrhe dar vor dem neugeborenen König der Welt."
    },
    "pt": {
      "name": "A Epifania do Senhor (Teofania)",
      "title": "Manifestação de Cristo aos Povos",
      "quote": "«Vimos a sua estrela no Oriente e viemos com dons adorar o Senhor.»",
      "bio": "Os Magos do Oriente reconhecem e adoram no Menino Jesus a luz e salvação de todas as nações."
    },
    "ro": {
      "name": "Botezul Domnului (Dumnezeiasca Arătare / Boboteaza)",
      "title": "Arătarea Sfintei Treimi la Iordan",
      "quote": "«În Iordan botezându-Te Tu, Doamne, închinarea Treimii s-a arătat.»",
      "bio": "Mântuitorul primește botezul pocăinței de la Ioan în Iordan, iar glasul Tatălui și Duhul Sfânt mărturisesc dumnezeirea Sa."
    },
    "la": {
      "name": "Epiphania Domini (Theophania)",
      "title": "Manifestatio Christi Gentibus",
      "quote": "«Vidimus stellam eius in oriente, et venimus cum muneribus adorare Dominum.»",
      "bio": "Magi ab oriente stellam sequentes aurum, thus et myrrham Christo Regi devoti offerunt."
    },
    "ru": {
      "name": "Богоявление Господне (Крещение Господа Бога и Спаса нашего Иисуса Христа)",
      "title": "Явление Святой Троицы на Иордане",
      "quote": "«Во Иордане крещающуся Тебе, Господи, Троическое явися поклонение.»",
      "bio": "Крещение Господа Иисуса Христа от Предтечи Иоанна в реке Иордан и явление Пресвятой Троицы миру."
    },
    "en": {
      "name": "The Epiphany of the Lord (Theophany)",
      "title": "Manifestation of Christ to the Gentiles",
      "quote": "«We observed His star at its rising, and have come to pay Him homage.»",
      "bio": "The Magi from the East worship the Christ child, offering royal gifts of gold, frankincense, and myrrh."
    }
  },
  "The Presentation of the Lord (Candlemas / Meeting of the Lord)": {
    "it": {
      "name": "Presentazione del Signore al Tempio (Candelora)",
      "title": "Luce per illuminare le genti e gloria d'Israele",
      "quote": "«Ora lascia, o Signore, che il tuo servo vada in pace, secondo la tua parola, perché i miei occhi hanno visto la tua salvezza.»",
      "bio": "Gesù Bambino è portato al Tempio di Gerusalemme e accolto con gioia dal santo vecchio Simeone e dalla profetessa Anna."
    },
    "es": {
      "name": "La Presentación del Señor (Candelaria)",
      "title": "Luz para alumbrar a las naciones",
      "quote": "«Ahora, Señor, según tu promesa, puedes dejar a tu siervo irse en paz, porque mis ojos han visto a tu Salvador.»",
      "bio": "Jesús es presentado en el Templo por María y José, y reconocido por Simeón como luz de las naciones."
    },
    "fr": {
      "name": "La Présentation du Seigneur au Temple (Chandeleur)",
      "title": "Lumière pour éclairer les nations païennes",
      "quote": "«Maintenant, ô Maître souverain, tu peux laisser ton serviteur s'en aller en paix, car mes yeux ont vu ton salut.»",
      "bio": "L'Enfant Jésus est offert au Temple selon la Loi et salué par le vieillard Siméon comme la Lumière du monde."
    },
    "de": {
      "name": "Darstellung des Herrn (Lichtmess)",
      "title": "Licht zur Erleuchtung der Heiden",
      "quote": "«Nun lässt du, Herr, deinen Knecht in Frieden scheiden, denn meine Augen haben das Heil geschaut.»",
      "bio": "Maria und Josef bringen das Jesuskind in den Tempel, wo der greise Simeon den Heiland der Welt preist."
    },
    "pt": {
      "name": "A Apresentação do Senhor no Templo (Candelária)",
      "title": "Luz para iluminar as nações",
      "quote": "«Agora, Senhor, podes deixar o teu servo partir em paz, porque os meus olhos viram a tua salvação.»",
      "bio": "O Menino Jesus é apresentado no Templo de Jerusalém e aclamado pelo ancião Simeão como Salvador universal."
    },
    "ro": {
      "name": "Întâmpinarea Domnului",
      "title": "Lumină spre luminarea neamurilor și slava lui Israel",
      "quote": "«Acum slobozește pe robul Tău, Stăpâne, după cuvântul Tău, în pace, că văzură ochii mei mântuirea Ta.»",
      "bio": "Pruncul Iisus este adus la Templu la 40 de zile de la Naștere și primit în brațe de Dreptul Simeon și Prorocița Ana."
    },
    "la": {
      "name": "Praesentatio Domini in Templo",
      "title": "Lumen ad revelationem gentium",
      "quote": "«Nunc dimittis servum tuum, Domine, secundum verbum tuum in pace: quia viderunt oculi mei salutare tuum.»",
      "bio": "Iesus puer in templo praesentatur et a Simeone iusto gaudio suscipitur ut salus omnium populorum."
    },
    "ru": {
      "name": "Сретение Господа Бога и Спаса нашего Иисуса Христа",
      "title": "Свет к просвещению язычников",
      "quote": "«Ныне отпущаеши раба Твоего, Владыко, по глаголу Твоему, с миром; яко видеста очи мои спасение Твое.»",
      "bio": "Принесение Богомладенца Иисуса в Иерусалимский храм на сороковой день и встреча со святым праведным Симеоном Богоприимцем."
    },
    "en": {
      "name": "The Presentation of the Lord (Candlemas / Meeting of the Lord)",
      "title": "Light of Revelation to the Gentiles",
      "quote": "«Master, now you are dismissing your servant in peace, for my eyes have seen your salvation.»",
      "bio": "The infant Jesus is presented in the Temple, where the aged Simeon and prophetess Anna acclaim Him as the Savior."
    }
  },
  "The Assumption of the Blessed Virgin Mary / Dormition of the Theotokos": {
    "it": {
      "name": "Assunzione della Beata Vergine Maria (Dormizione)",
      "title": "Arca della Nuova Alleanza Assunta in Cielo",
      "quote": "«Grandi cose ha fatto in me l'Onnipotente e Santo è il suo nome.»",
      "bio": "La Madre di Dio, terminato il corso della vita terrena, è assunta in corpo e anima alla gloria celeste."
    },
    "es": {
      "name": "La Asunción de la Santísima Virgen María (Dormición)",
      "title": "Arca de la Nueva Alianza Asunta al Cielo",
      "quote": "«Grandes cosas ha hecho en mí el Poderoso, y Santo es su Nombre.»",
      "bio": "La Madre de Dios, concluido el curso de su vida terrena, fue elevada en cuerpo y alma a la gloria del cielo."
    },
    "fr": {
      "name": "L'Assomption de la Bienheureuse Vierge Marie (Dormition)",
      "title": "Arche de la Nouvelle Alliance Élevée au Ciel",
      "quote": "«Le Puissant fit pour moi des merveilles ; Saint est son nom !»",
      "bio": "La Mère du Seigneur entre dans la gloire céleste en son corps et en son âme auprès de son divin Fils."
    },
    "de": {
      "name": "Mariä Aufnahme in den Himmel (Entschlafung der Gottesmutter)",
      "title": "Bundeslade der Gnade im ewigen Licht",
      "quote": "«Der Mächtige hat Großes an mir getan, und sein Name ist heilig.»",
      "bio": "Die unbefleckte Gottesmutter wird mit Leib und Seele in die himmlische Herrlichkeit aufgenommen."
    },
    "pt": {
      "name": "A Assunção da Bem-Aventurada Virgem Maria (Dormição)",
      "title": "Arca da Nova Aliança Elevada ao Céu",
      "quote": "«O Poderoso fez em mim grandes coisas; Santo é o seu nome.»",
      "bio": "A Mãe de Deus é acolhida na glória celestial em corpo e alma, modelo de salvação e esperança."
    },
    "ro": {
      "name": "Adormirea Maicii Domnului (Sfânta Maria Mare)",
      "title": "Mutarea la viață a Maicii Vieții",
      "quote": "«Întru naștere fecioria ai păzit, întru adormire lumea nu ai părăsit, de Dumnezeu Născătoare.»",
      "bio": "Preasfânta Născătoare de Dumnezeu se mută din cele pământești la cereștile locașuri, mijlocind neîncetat pentru lume."
    },
    "la": {
      "name": "Assumptio Beatae Mariae Virginis (Dormitio)",
      "title": "Arca Foederis Novae in Caelum Recepta",
      "quote": "«Fecit mihi magna qui potens est, et sanctum nomen eius.»",
      "bio": "Maria Virgo, terreno vitae cursu peracto, corpore et anima ad caelestem gloriam assumpta est."
    },
    "ru": {
      "name": "Успение Пресвятой Владычицы нашей Богородицы и Приснодевы Марии",
      "title": "Преставление к жизни Матери Истинной Жизни",
      "quote": "«В рождестве девство сохранила еси, во успении мира не оставила еси, Богородице.»",
      "bio": "Блаженная кончина Пресвятой Девы Марии, Ее телесное вознесение на небо и непрестанное предстательство пред Сыном за весь мир."
    },
    "en": {
      "name": "The Assumption of the Blessed Virgin Mary / Dormition of the Theotokos",
      "title": "Ark of the New Covenant Assumed into Heaven",
      "quote": "«The Mighty One has done great things for me, and holy is His name.»",
      "bio": "The Mother of God, having completed her earthly life, is taken up body and soul into heavenly glory."
    }
  },
  "The Nativity of our Lord Jesus Christ (Christmas)": {
    "it": {
      "name": "Natale del Signore (Natività di Gesù Cristo)",
      "title": "Il Verbo si è fatto carne e venne ad abitare in mezzo a noi",
      "quote": "«Gloria a Dio nel più alto dei cieli e sulla terra pace agli uomini che egli ama.»",
      "bio": "Nella mangiatoia di Betlemme nasce Gesù Cristo, Salvatore del mondo e Luce che vince ogni tenebra."
    },
    "es": {
      "name": "Natividad de Nuestro Señor Jesucristo (Navidad)",
      "title": "El Verbo se hizo carne y habitó entre nosotros",
      "quote": "«¡Gloria a Dios en las alturas, y en la tierra paz a los hombres de buena voluntad!»",
      "bio": "En el pesebre de Belén nace Jesucristo, Emmanuel (Dios con nosotros) y Luz del mundo."
    },
    "fr": {
      "name": "La Nativité de notre Seigneur Jésus-Christ (Noël)",
      "title": "Le Verbe s'est fait chair et Il a habité parmi nous",
      "quote": "«Gloire à Dieu au plus haut des cieux, et paix sur la terre aux hommes qu'Il aime.»",
      "bio": "À Bethléem naît Jésus le Sauveur, enveloppé de langes dans une crèche pour racheter l'humanité."
    },
    "de": {
      "name": "Geburt unseres Herrn Jesus Christus (Weihnachten)",
      "title": "Das Wort ist Fleisch geworden und hat unter uns gewohnt",
      "quote": "«Ehre sei Gott in der Höhe und Friede auf Erden den Menschen seines Wohlgefallens.»",
      "bio": "In der Krippe von Betlehem wird der Erlöser geboren, wahrer Gott und wahrer Mensch."
    },
    "pt": {
      "name": "O Santo Natal do Senhor (Natividade de Jesus Cristo)",
      "title": "O Verbo fez-Se carne e habitou entre nós",
      "quote": "«Glória a Deus nas alturas e paz na terra aos homens por Ele amados.»",
      "bio": "Na manjedoura de Belém nasce o Príncipe da Paz, trazendo ao mundo a luz da salvação eterna."
    },
    "ro": {
      "name": "Nașterea Domnului Dumnezeului și Mântuitorului nostru Iisus Hristos (Crăciunul)",
      "title": "Cuvântul S-a făcut trup și S-a sălășluit între noi",
      "quote": "«Slavă întru cei de sus lui Dumnezeu și pe pământ pace, între oameni bunăvoire!»",
      "bio": "În peștera Betleemului se naște din Fecioara Maria Hristos Mântuitorul, Răsăritul cel de Sus și Lumina lumii."
    },
    "la": {
      "name": "Nativitas Domini Nostri Iesu Christi",
      "title": "Verbum Caro Factum Est et Habitavit in Nobis",
      "quote": "«Gloria in altissimis Deo, et in terra pax in hominibus bonae voluntatis.»",
      "bio": "In praesepio Bethlemitico nascitur Christus Salvator, lux vera quae illuminat omnem hominem."
    },
    "ru": {
      "name": "Рождество Господа Бога и Спаса нашего Иисуса Христа",
      "title": "Слово стало плотью и обитало с нами",
      "quote": "«Слава в вышних Богу, и на земли мир, в человецех благоволение!»",
      "bio": "В Вифлеемских яслях рождается Спаситель мира, воссиявший миру свет разума и дарующий спасение."
    },
    "en": {
      "name": "The Nativity of our Lord Jesus Christ (Christmas)",
      "title": "The Word Made Flesh & Light of the World",
      "quote": "«Glory to God in the highest heaven, and on earth peace among those whom He favors!»",
      "bio": "In the humble manger of Bethlehem, Christ our Savior is born to bring light and redemption to all nations."
    }
  }
};

export const SAINT_NAMES_I18N = {
  "St. Anthony": {
    "it": "Sant'Antonio",
    "es": "San Antonio",
    "fr": "Saint Antoine",
    "de": "Hl. Antonius",
    "pt": "Santo António",
    "ro": "Sfântul Antonie",
    "la": "Sanctus Antonius",
    "ru": "Св. Антоний"
  },
  "St. Athanasius": {
    "it": "Sant'Atanasio",
    "es": "San Atanasio",
    "fr": "Saint Athanase",
    "de": "Hl. Athanasius",
    "pt": "Santo Atanásio",
    "ro": "Sfântul Atanasie",
    "la": "Sanctus Athanasius",
    "ru": "Св. Афанасий"
  },
  "St. Augustine": {
    "it": "Sant'Agostino",
    "es": "San Agustín",
    "fr": "Saint Augustin",
    "de": "Hl. Augustinus",
    "pt": "Santo Agostinho",
    "ro": "Sfântul Augustin",
    "la": "Sanctus Augustinus",
    "ru": "Св. Августин"
  },
  "St. Basil": {
    "it": "San Basilio",
    "es": "San Basilio",
    "fr": "Saint Basile",
    "de": "Hl. Basilius",
    "pt": "São Basílio",
    "ro": "Sfântul Vasile",
    "la": "Sanctus Basilius",
    "ru": "Св. Василий"
  },
  "St. Benedict": {
    "it": "San Benedetto",
    "es": "San Benito",
    "fr": "Saint Benoît",
    "de": "Hl. Benedikt",
    "pt": "São Bento",
    "ro": "Sfântul Benedict",
    "la": "Sanctus Benedictus",
    "ru": "Св. Бенедикт"
  },
  "St. Bernard": {
    "it": "San Bernardo",
    "es": "San Bernardo",
    "fr": "Saint Bernard",
    "de": "Hl. Bernhard",
    "pt": "São Bernardo",
    "ro": "Sfântul Bernard",
    "la": "Sanctus Bernardus",
    "ru": "Св. Бернард"
  },
  "St. Bonaventure": {
    "it": "San Bonaventura",
    "es": "San Buenaventura",
    "fr": "Saint Bonaventure",
    "de": "Hl. Bonaventura",
    "pt": "São Boaventura",
    "ro": "Sfântul Bonaventura",
    "la": "Sanctus Bonaventura",
    "ru": "Св. Бонавентура"
  },
  "St. Catherine": {
    "it": "Santa Caterina",
    "es": "Santa Catalina",
    "fr": "Sainte Catherine",
    "de": "Hl. Katharina",
    "pt": "Santa Catarina",
    "ro": "Sfânta Ecaterina",
    "la": "Sancta Catharina",
    "ru": "Св. Екатерина"
  },
  "St. Cecilia": {
    "it": "Santa Cecilia",
    "es": "Santa Cecilia",
    "fr": "Sainte Cécile",
    "de": "Hl. Cäcilia",
    "pt": "Santa Cecília",
    "ro": "Sfânta Cecilia",
    "la": "Sancta Caecilia",
    "ru": "Св. Цецилия"
  },
  "St. Charles": {
    "it": "San Carlo",
    "es": "San Carlos",
    "fr": "Saint Charles",
    "de": "Hl. Karl",
    "pt": "São Carlos",
    "ro": "Sfântul Carol",
    "la": "Sanctus Carolus",
    "ru": "Св. Карл"
  },
  "St. Clare": {
    "it": "Santa Chiara",
    "es": "Santa Clara",
    "fr": "Sainte Claire",
    "de": "Hl. Klara",
    "pt": "Santa Clara",
    "ro": "Sfânta Clara",
    "la": "Sancta Clara",
    "ru": "Св. Клара"
  },
  "St. Dominic": {
    "it": "San Domenico",
    "es": "Santo Domingo",
    "fr": "Saint Dominique",
    "de": "Hl. Dominikus",
    "pt": "São Domingos",
    "ro": "Sfântul Dominic",
    "la": "Sanctus Dominicus",
    "ru": "Св. Доминик"
  },
  "St. Francis": {
    "it": "San Francesco",
    "es": "San Francisco",
    "fr": "Saint François",
    "de": "Hl. Franziskus",
    "pt": "São Francisco",
    "ro": "Sfântul Francisc",
    "la": "Sanctus Franciscus",
    "ru": "Св. Франциск"
  },
  "St. George": {
    "it": "San Giorgio",
    "es": "San Jorge",
    "fr": "Saint Georges",
    "de": "Hl. Georg",
    "pt": "São Jorge",
    "ro": "Sfântul Gheorghe",
    "la": "Sanctus Georgius",
    "ru": "Св. Георгий"
  },
  "St. Gregory": {
    "it": "San Gregorio",
    "es": "San Gregorio",
    "fr": "Saint Grégoire",
    "de": "Hl. Gregor",
    "pt": "São Gregório",
    "ro": "Sfântul Grigorie",
    "la": "Sanctus Gregorius",
    "ru": "Св. Григорий"
  },
  "St. Ignatius": {
    "it": "Sant'Ignazio",
    "es": "San Ignacio",
    "fr": "Saint Ignace",
    "de": "Hl. Ignatius",
    "pt": "Santo Inácio",
    "ro": "Sfântul Ignatie",
    "la": "Sanctus Ignatius",
    "ru": "Св. Игнатий"
  },
  "St. Irenaeus": {
    "it": "Sant'Ireneo",
    "es": "San Ireneo",
    "fr": "Saint Irénée",
    "de": "Hl. Irenäus",
    "pt": "Santo Irineu",
    "ro": "Sfântul Irineu",
    "la": "Sanctus Irenaeus",
    "ru": "Св. Ириней"
  },
  "St. James": {
    "it": "San Giacomo",
    "es": "Santiago",
    "fr": "Saint Jacques",
    "de": "Hl. Jakobus",
    "pt": "São Tiago",
    "ro": "Sfântul Iacov",
    "la": "Sanctus Iacobus",
    "ru": "Св. Иаков"
  },
  "St. Jerome": {
    "it": "San Girolamo",
    "es": "San Jerónimo",
    "fr": "Saint Jérôme",
    "de": "Hl. Hieronymus",
    "pt": "São Jerónimo",
    "ro": "Sfântul Ieronim",
    "la": "Sanctus Hieronymus",
    "ru": "Св. Иероним"
  },
  "St. John": {
    "it": "San Giovanni",
    "es": "San Juan",
    "fr": "Saint Jean",
    "de": "Hl. Johannes",
    "pt": "São João",
    "ro": "Sfântul Ioan",
    "la": "Sanctus Ioannes",
    "ru": "Св. Иоанн"
  },
  "St. Joseph": {
    "it": "San Giuseppe",
    "es": "San José",
    "fr": "Saint Joseph",
    "de": "Hl. Josef",
    "pt": "São José",
    "ro": "Sfântul Iosif",
    "la": "Sanctus Ioseph",
    "ru": "Св. Иосиф"
  },
  "St. Jude": {
    "it": "San Giuda",
    "es": "San Judas",
    "fr": "Saint Jude",
    "de": "Hl. Judas",
    "pt": "São Judas",
    "ro": "Sfântul Iuda",
    "la": "Sanctus Iudas",
    "ru": "Св. Иуда"
  },
  "St. Lawrence": {
    "it": "San Lorenzo",
    "es": "San Lorenzo",
    "fr": "Saint Laurent",
    "de": "Hl. Laurentius",
    "pt": "São Lourenço",
    "ro": "Sfântul Laurențiu",
    "la": "Sanctus Laurentius",
    "ru": "Св. Лаврентий"
  },
  "St. Luke": {
    "it": "San Luca",
    "es": "San Lucas",
    "fr": "Saint Luc",
    "de": "Hl. Lukas",
    "pt": "São Lucas",
    "ro": "Sfântul Luca",
    "la": "Sanctus Lucas",
    "ru": "Св. Лука"
  },
  "St. Mark": {
    "it": "San Marco",
    "es": "San Marcos",
    "fr": "Saint Marc",
    "de": "Hl. Markus",
    "pt": "São Marcos",
    "ro": "Sfântul Marcu",
    "la": "Sanctus Marcus",
    "ru": "Св. Марк"
  },
  "St. Martin": {
    "it": "San Martino",
    "es": "San Martín",
    "fr": "Saint Martin",
    "de": "Hl. Martin",
    "pt": "São Martinho",
    "ro": "Sfântul Martin",
    "la": "Sanctus Martinus",
    "ru": "Св. Мартин"
  },
  "St. Mary": {
    "it": "Santa Maria",
    "es": "Santa María",
    "fr": "Sainte Marie",
    "de": "Hl. Maria",
    "pt": "Santa Maria",
    "ro": "Sfânta Maria",
    "la": "Sancta Maria",
    "ru": "Св. Мария"
  },
  "St. Matthew": {
    "it": "San Matteo",
    "es": "San Mateo",
    "fr": "Saint Matthieu",
    "de": "Hl. Matthäus",
    "pt": "São Mateus",
    "ro": "Sfântul Matei",
    "la": "Sanctus Matthaeus",
    "ru": "Св. Матфей"
  },
  "St. Matthias": {
    "it": "San Mattia",
    "es": "San Matías",
    "fr": "Saint Matthias",
    "de": "Hl. Matthias",
    "pt": "São Matias",
    "ro": "Sfântul Matia",
    "la": "Sanctus Matthias",
    "ru": "Св. Матфий"
  },
  "St. Maximilian": {
    "it": "San Massimiliano",
    "es": "San Maximiliano",
    "fr": "Saint Maximilien",
    "de": "Hl. Maximilian",
    "pt": "São Maximiliano",
    "ro": "Sfântul Maximilian",
    "la": "Sanctus Maximilianus",
    "ru": "Св. Максимилиан"
  },
  "St. Nicholas": {
    "it": "San Nicola",
    "es": "San Nicolás",
    "fr": "Saint Nicolas",
    "de": "Hl. Nikolaus",
    "pt": "São Nicolau",
    "ro": "Sfântul Nicolae",
    "la": "Sanctus Nicolaus",
    "ru": "Св. Николай"
  },
  "St. Patrick": {
    "it": "San Patrizio",
    "es": "San Patricio",
    "fr": "Saint Patrick",
    "de": "Hl. Patrick",
    "pt": "São Patrício",
    "ro": "Sfântul Patrick",
    "la": "Sanctus Patricius",
    "ru": "Св. Патрик"
  },
  "St. Paul": {
    "it": "San Paolo",
    "es": "San Pablo",
    "fr": "Saint Paul",
    "de": "Hl. Paulus",
    "pt": "São Paulo",
    "ro": "Sfântul Pavel",
    "la": "Sanctus Paulus",
    "ru": "Св. Павел"
  },
  "St. Peter": {
    "it": "San Pietro",
    "es": "San Pedro",
    "fr": "Saint Pierre",
    "de": "Hl. Petrus",
    "pt": "São Pedro",
    "ro": "Sfântul Petru",
    "la": "Sanctus Petrus",
    "ru": "Св. Петр"
  },
  "St. Philip": {
    "it": "San Filippo",
    "es": "San Felipe",
    "fr": "Saint Philippe",
    "de": "Hl. Philipp",
    "pt": "São Filipe",
    "ro": "Sfântul Filip",
    "la": "Sanctus Philippus",
    "ru": "Св. Филипп"
  },
  "St. Polycarp": {
    "it": "San Policarpo",
    "es": "San Policarpo",
    "fr": "Saint Polycarpe",
    "de": "Hl. Polykarp",
    "pt": "São Policarpo",
    "ro": "Sfântul Policarp",
    "la": "Sanctus Polycarpus",
    "ru": "Св. Поликарп"
  },
  "St. Sebastian": {
    "it": "San Sebastiano",
    "es": "San Sebastián",
    "fr": "Saint Sébastien",
    "de": "Hl. Sebastian",
    "pt": "São Sebastião",
    "ro": "Sfântul Sebastian",
    "la": "Sanctus Sebastianus",
    "ru": "Св. Севастиан"
  },
  "St. Stephen": {
    "it": "Santo Stefano",
    "es": "San Esteban",
    "fr": "Saint Étienne",
    "de": "Hl. Stephanus",
    "pt": "Santo Estêvão",
    "ro": "Sfântul Ștefan",
    "la": "Sanctus Stephanus",
    "ru": "Св. Стефан"
  },
  "St. Teresa": {
    "it": "Santa Teresa",
    "es": "Santa Teresa",
    "fr": "Sainte Thérèse",
    "de": "Hl. Teresa",
    "pt": "Santa Teresa",
    "ro": "Sfânta Tereza",
    "la": "Sancta Teresia",
    "ru": "Св. Тереза"
  },
  "St. Thomas": {
    "it": "San Tommaso",
    "es": "Santo Tomás",
    "fr": "Saint Thomas",
    "de": "Hl. Thomas",
    "pt": "São Tomé",
    "ro": "Sfântul Toma",
    "la": "Sanctus Thomas",
    "ru": "Св. Фома"
  },
  "St. Vincent": {
    "it": "San Vincenzo",
    "es": "San Vicente",
    "fr": "Saint Vincent",
    "de": "Hl. Vinzenz",
    "pt": "São Vicente",
    "ro": "Sfântul Vincențiu",
    "la": "Sanctus Vincentius",
    "ru": "Св. Викентий"
  }
};

export const PREFIXES_I18N = {
  "St.": {
    "it": "San",
    "es": "San",
    "fr": "Saint",
    "de": "Hl.",
    "pt": "São",
    "ro": "Sfântul",
    "la": "Sanctus",
    "ru": "Св.",
    "en": "St."
  },
  "Saints": {
    "it": "Santi",
    "es": "Santos",
    "fr": "Saints",
    "de": "Hll.",
    "pt": "Santos",
    "ro": "Sfinții",
    "la": "Sancti",
    "ru": "Свв.",
    "en": "Saints"
  },
  "Holy": {
    "it": "Santo",
    "es": "Santo",
    "fr": "Saint",
    "de": "Heiliger",
    "pt": "Santo",
    "ro": "Sfântul",
    "la": "Sanctus",
    "ru": "Святой",
    "en": "Holy"
  }
};

export const PLACE_SUFFIXES_I18N = {
  "of Assisi": {
    "it": "d'Assisi",
    "es": "de Asís",
    "fr": "d'Assise",
    "de": "von Assisi",
    "pt": "de Assis",
    "ro": "de Assisi",
    "la": "Asisiensis",
    "ru": "Ассизский"
  },
  "of Hippo": {
    "it": "d'Ippona",
    "es": "de Hipona",
    "fr": "d'Hippone",
    "de": "von Hippo",
    "pt": "de Hipona",
    "ro": "de Hipona",
    "la": "Hipponensis",
    "ru": "Иппонийский"
  },
  "of Alexandria": {
    "it": "d'Alessandria",
    "es": "de Alejandría",
    "fr": "d'Alexandrie",
    "de": "von Alexandrien",
    "pt": "de Alexandria",
    "ro": "din Alexandria",
    "la": "Alexandrinus",
    "ru": "Александрийский"
  },
  "of Antioch": {
    "it": "di Antiochia",
    "es": "de Antioquía",
    "fr": "d'Antioche",
    "de": "von Antiochien",
    "pt": "de Antioquia",
    "ro": "al Antiohiei",
    "la": "Antiochenus",
    "ru": "Антиохийский"
  },
  "of Avila": {
    "it": "d'Avila",
    "es": "de Ávila",
    "fr": "d'Avila",
    "de": "von Ávila",
    "pt": "de Ávila",
    "ro": "de Avila",
    "la": "Abulensis",
    "ru": "Авильская"
  },
  "of Nursia": {
    "it": "da Norcia",
    "es": "de Nursia",
    "fr": "de Nursie",
    "de": "von Nursia",
    "pt": "de Núrsia",
    "ro": "de Nursia",
    "la": "de Nursia",
    "ru": "Нурсийский"
  },
  "of Padua": {
    "it": "di Padova",
    "es": "de Padua",
    "fr": "de Padoue",
    "de": "von Padua",
    "pt": "de Pádua",
    "ro": "de Padova",
    "la": "Patavinus",
    "ru": "Падуанский"
  },
  "of Siena": {
    "it": "da Siena",
    "es": "de Siena",
    "fr": "de Sienne",
    "de": "von Siena",
    "pt": "de Sena",
    "ro": "de Siena",
    "la": "Senensis",
    "ru": "Сиенская"
  },
  "of Smyrna": {
    "it": "di Smirne",
    "es": "de Esmirna",
    "fr": "de Smyrne",
    "de": "von Smyrna",
    "pt": "de Esmirna",
    "ro": "al Smirnei",
    "la": "Smyrnaeus",
    "ru": "Смирнский"
  },
  "of Sarov": {
    "it": "di Sarov",
    "es": "de Sarov",
    "fr": "de Sarov",
    "de": "von Sarow",
    "pt": "de Sarov",
    "ro": "de Sarov",
    "la": "Saroviensis",
    "ru": "Саровский"
  },
  "of the Cross": {
    "it": "della Croce",
    "es": "de la Cruz",
    "fr": "de la Croix",
    "de": "vom Kreuz",
    "pt": "da Cruz",
    "ro": "al Crucii",
    "la": "a Cruce",
    "ru": "Креста"
  }
};

export const COLORS_I18N = {
  "white": {
    "en": "White",
    "it": "Bianco",
    "ro": "Alb",
    "la": "Albus",
    "es": "Blanco",
    "fr": "Blanc",
    "de": "Weiß",
    "pt": "Branco",
    "ru": "Белый"
  },
  "blue": {
    "en": "Blue",
    "it": "Blu",
    "ro": "Albastru",
    "la": "Caeruleus",
    "es": "Azul",
    "fr": "Bleu",
    "de": "Blau",
    "pt": "Azul",
    "ru": "Синий"
  },
  "red": {
    "en": "Red",
    "it": "Rosso",
    "ro": "Roșu",
    "la": "Ruber",
    "es": "Rojo",
    "fr": "Rouge",
    "de": "Rot",
    "pt": "Vermelho",
    "ru": "Красный"
  },
  "purple": {
    "en": "Purple",
    "it": "Viola",
    "ro": "Violet",
    "la": "Purpureus",
    "es": "Morado",
    "fr": "Violet",
    "de": "Violett",
    "pt": "Roxo",
    "ru": "Фиолетовый"
  },
  "green": {
    "en": "Green",
    "it": "Verde",
    "ro": "Verde",
    "la": "Viridis",
    "es": "Verde",
    "fr": "Vert",
    "de": "Grün",
    "pt": "Verde",
    "ru": "Зеленый"
  },
  "rose": {
    "en": "Rose",
    "it": "Rosa",
    "ro": "Roz",
    "la": "Rosaceus",
    "es": "Rosa",
    "fr": "Rose",
    "de": "Rosa",
    "pt": "Rosa",
    "ru": "Розовый"
  },
  "gold": {
    "en": "Gold",
    "it": "Oro",
    "ro": "Auriu",
    "la": "Aureus",
    "es": "Dorado",
    "fr": "Or",
    "de": "Gold",
    "pt": "Dourado",
    "ru": "Золотой"
  }
};

export const RANKS_I18N = {
  "solemnity": {
    "en": "Solemnity",
    "it": "Solennità",
    "ro": "Praznic Mare",
    "la": "Sollemnitas",
    "es": "Solemnidad",
    "fr": "Solennité",
    "de": "Hochfest",
    "pt": "Solenidade",
    "ru": "Торжество"
  },
  "feast": {
    "en": "Feast",
    "it": "Festa",
    "ro": "Sărbătoare",
    "la": "Festum",
    "es": "Fiesta",
    "fr": "Fête",
    "de": "Fest",
    "pt": "Festa",
    "ru": "Праздник"
  },
  "memorial": {
    "en": "Memorial",
    "it": "Memoria",
    "ro": "Pomenire",
    "la": "Memoria",
    "es": "Memoria",
    "fr": "Mémoire",
    "de": "Gedenktag",
    "pt": "Memória",
    "ru": "Память"
  },
  "commemoration": {
    "en": "Commemoration",
    "it": "Commemorazione",
    "ro": "Comemorare",
    "la": "Commemoratio",
    "es": "Conmemoración",
    "fr": "Commémoration",
    "de": "Kommemoration",
    "pt": "Comemoração",
    "ru": "Поминовение"
  }
};

export const BIO_FALLBACKS = {
  "it": "Celebrazione e memoria liturgica di questo santo testimone di Cristo, che con la preghiera e le opere ha reso testimonianza all'Evangelo.",
  "es": "Celebración y memoria litúrgica de este santo testigo de Cristo, que con la oración y las buenas obras dio testimonio del Evangelio.",
  "fr": "Célébration et mémoire liturgique de ce saint témoin du Christ, qui par la prière et la charité a rendu témoignage à l'Évangile.",
  "de": "Liturgisches Gedächtnis dieses heiligen Zeugen Christi, der durch Gebet und christliches Wirken das Evangelium bezeugte.",
  "pt": "Celebração e memória litúrgica deste santo testemunho de Cristo, que pela oração e caridade testemunhou o Evangelho.",
  "ro": "Pomenirea liturgică a acestui sfânt mărturisitor al lui Hristos, care prin rugăciune și viață sfântă a mărturisit Evanghelia.",
  "la": "Memoria liturgica huius sancti testis Christi, qui oratione et virtutibus Evangelium vitae proclamavit.",
  "ru": "Литургическая память этого святого свидетеля Христова, прославившего Господа непрестанной молитвой и делами веры.",
  "en": "Liturgical commemoration of this holy witness of Christ, who proclaimed the Gospel through prayer and faithful service."
};

export function localizeScriptureRef(scriptureRef, lang = 'it') {
  if (!scriptureRef) return lang === 'it' ? 'Evangelo di Cristo' : (lang === 'la' ? 'Evangelium Christi' : 'Gospel of Christ');
  if (lang === 'en') return scriptureRef;

  let localized = scriptureRef;
  for (const [bookEn, trans] of Object.entries(BIBLE_BOOKS_I18N)) {
    if (localized.includes(bookEn)) {
      const replacement = trans[lang] || trans.it || bookEn;
      localized = localized.replace(bookEn, replacement);
      break;
    }
  }
  return localized;
}

export function getLocalizedColorName(colorKey, lang = 'it') {
  const col = COLORS_I18N[colorKey] || COLORS_I18N.white;
  return col[lang] || col.it || col.en;
}

export function getLocalizedRankName(rankKey, lang = 'it') {
  const rnk = RANKS_I18N[rankKey] || RANKS_I18N.memorial;
  return rnk[lang] || rnk.it || rnk.en;
}

export function translateSaintName(rawName, lang = 'it', fallbackName = '') {
  if (!rawName) return '';
  if (lang === 'en') return rawName;

  // Check exact catalog or mapping
  if (SAINTS_I18N_CATALOG[rawName] && SAINTS_I18N_CATALOG[rawName][lang] && SAINTS_I18N_CATALOG[rawName][lang].name) {
    return SAINTS_I18N_CATALOG[rawName][lang].name;
  }

  // Match known saint names
  for (const [key, mapping] of Object.entries(SAINT_NAMES_I18N)) {
    if (rawName.startsWith(key)) {
      let suffix = rawName.slice(key.length);
      // Translate known place suffix
      for (const [pKey, pMap] of Object.entries(PLACE_SUFFIXES_I18N)) {
        if (suffix.includes(pKey)) {
          suffix = suffix.replace(pKey, pMap[lang] || pMap.it || pKey);
        }
      }
      return mapping[lang] ? mapping[lang] + suffix : rawName;
    }
  }

  if (fallbackName && (lang === 'it' || lang === 'la' || lang === 'ro')) {
    return fallbackName;
  }

  // Prefix replacement
  let res = rawName;
  if (res.startsWith('St. ')) {
    const pref = PREFIXES_I18N['St.'][lang] || 'San';
    res = pref + ' ' + res.slice(4);
  } else if (res.startsWith('Saints ')) {
    const pref = PREFIXES_I18N['Saints'][lang] || 'Santi';
    res = pref + ' ' + res.slice(7);
  }

  return res;
}

export function translateSaintTitle(rawTitle, lang = 'it', fallbackTitle = '') {
  if (!rawTitle) return '';
  if (lang === 'en') return rawTitle;
  if (lang === 'it' && fallbackTitle) return fallbackTitle;

  let trans = rawTitle;
  const tokens = [
    ['Apostle and Evangelist', { it: 'Apostolo ed Evangelista', es: 'Apóstol y Evangelista', fr: 'Apôtre et Évangéliste', de: 'Apostel und Evangelist', pt: 'Apóstolo e Evangelista', ro: 'Apostol și Evanghelist', la: 'Apostolus et Evangelista', ru: 'Апостол и Евангелист' }],
    ['Doctor of the Church', { it: 'Dottore della Chiesa', es: 'Doctor de la Iglesia', fr: "Docteur de l'Église", de: 'Kirchenlehrer', pt: 'Doutor da Igreja', ro: 'Învățător al Bisericii', la: 'Ecclesiae Doctor', ru: 'Учитель Церкви' }],
    ['Bishop and Martyr', { it: 'Vescovo e Martire', es: 'Obispo y Mártir', fr: 'Évêque et Martyr', de: 'Bischof und Märtyrer', pt: 'Bispo e Mártir', ro: 'Episcop și Mucenic', la: 'Episcopus et Martyr', ru: 'Епископ и Священномученик' }],
    ['Bishop & Martyr', { it: 'Vescovo e Martire', es: 'Obispo y Mártir', fr: 'Évêque et Martyr', de: 'Bischof und Märtyrer', pt: 'Bispo e Mártir', ro: 'Episcop și Mucenic', la: 'Episcopus et Martyr', ru: 'Епископ и Священномученик' }],
    ['Virgin and Martyr', { it: 'Vergine e Martire', es: 'Virgen y Mártir', fr: 'Vierge et Martyre', de: 'Jungfrau und Märtyrerin', pt: 'Virgem e Mártir', ro: 'Fecioară și Muceniță', la: 'Virgo et Martyr', ru: 'Дева и Мученица' }],
    ['Virgin & Martyr', { it: 'Vergine e Martire', es: 'Virgen y Mártir', fr: 'Vierge et Martyre', de: 'Jungfrau und Märtyrerin', pt: 'Virgem e Mártir', ro: 'Fecioară și Muceniță', la: 'Virgo et Martyr', ru: 'Дева и Мученица' }],
    ['Pope and Martyr', { it: 'Papa e Martire', es: 'Papa y Mártir', fr: 'Pape et Martyr', de: 'Papst und Märtyrer', pt: 'Papa e Mártir', ro: 'Papă și Mucenic', la: 'Papa et Martyr', ru: 'Папа и Священномученик' }],
    ['Deacon and Martyr', { it: 'Diacono e Martire', es: 'Diácono y Mártir', fr: 'Diacre et Martyr', de: 'Diakon und Märtyrer', pt: 'Diácono e Mártir', ro: 'Diacon și Mucenic', la: 'Diaconus et Martyr', ru: 'Диакон и Мученик' }],
    ['Father of the Church', { it: 'Padre della Chiesa', es: 'Padre de la Iglesia', fr: "Père de l'Église", de: 'Kirchenvater', pt: 'Padre da Igreja', ro: 'Părinte al Bisericii', la: 'Pater Ecclesiae', ru: 'Отец Церкви' }],
    ['Apostle to the Nations', { it: 'Apostolo delle Genti', es: 'Apóstol de las Gentes', fr: 'Apôtre des Nations', de: 'Apostel der Völker', pt: 'Apóstolo das Nações', ro: 'Apostolul Neamurilor', la: 'Apostolus Gentium', ru: 'Апостол Язычников' }],
    ['Apostle', { it: 'Apostolo', es: 'Apóstol', fr: 'Apôtre', de: 'Apostel', pt: 'Apóstolo', ro: 'Apostol', la: 'Apostolus', ru: 'Апостол' }],
    ['Martyr', { it: 'Martire', es: 'Mártir', fr: 'Martyr', de: 'Märtyrer', pt: 'Mártir', ro: 'Mucenic', la: 'Martyr', ru: 'Мученик' }],
    ['Martyrs', { it: 'Martiri', es: 'Mártires', fr: 'Martyrs', de: 'Märtyrer', pt: 'Mártires', ro: 'Mucenici', la: 'Martyres', ru: 'Мученики' }],
    ['Bishop', { it: 'Vescovo', es: 'Obispo', fr: 'Évêque', de: 'Bischof', pt: 'Bispo', ro: 'Episcop', la: 'Episcopus', ru: 'Епископ' }],
    ['Pope', { it: 'Papa', es: 'Papa', fr: 'Pape', de: 'Papst', pt: 'Papa', ro: 'Papă', la: 'Papa', ru: 'Папа' }],
    ['Abbot', { it: 'Abate', es: 'Abad', fr: 'Abbé', de: 'Abt', pt: 'Abade', ro: 'Egumen', la: 'Abbas', ru: 'Игумен' }],
    ['Priest', { it: 'Sacerdote', es: 'Sacerdote', fr: 'Prêtre', de: 'Priester', pt: 'Sacerdote', ro: 'Preot', la: 'Presbyter', ru: 'Священник' }],
    ['Virgin', { it: 'Vergine', es: 'Virgen', fr: 'Vierge', de: 'Jungfrau', pt: 'Virgem', ro: 'Fecioară', la: 'Virgo', ru: 'Дева' }]
  ];

  for (const [eng, dict] of tokens) {
    if (trans.includes(eng)) {
      const repl = dict[lang] || dict.it || eng;
      trans = trans.replace(eng, repl);
    }
  }

  return trans;
}

export function getLiturgicalBioFallback(name, title, lang = 'it') {
  return BIO_FALLBACKS[lang] || BIO_FALLBACKS.it || BIO_FALLBACKS.en;
}

export function getLocalizedSaint(saint, lang = 'it') {
  if (!saint) return null;

  // 1. Look up in catalog
  const catalogEntry = SAINTS_I18N_CATALOG[saint.name] ||
                       (saint.name_it && SAINTS_I18N_CATALOG[saint.name_it]) ||
                       (saint.displayName && SAINTS_I18N_CATALOG[saint.displayName]);

  let name = '';
  let title = '';
  let quote = '';
  let bio = '';

  if (catalogEntry && catalogEntry[lang]) {
    const entry = catalogEntry[lang];
    name = entry.name || '';
    title = entry.title || '';
    quote = entry.quote || '';
    bio = entry.bio || '';
  }

  // 2. Name resolution
  if (!name) {
    if (lang === 'it' && saint.name_it) name = saint.name_it;
    else if (lang === 'la' && saint.name_la) name = saint.name_la;
    else if (lang === 'ro' && saint.name_ro) name = saint.name_ro;
    else if (saint[`name_${lang}`]) name = saint[`name_${lang}`];
    else if (lang === 'en') name = saint.name;
    else {
      name = translateSaintName(saint.name || '', lang, saint.name_it || saint.name_la || '');
    }
  }

  // 3. Title resolution
  if (!title) {
    if (lang === 'it' && saint.title_it) title = saint.title_it;
    else if (lang === 'la' && saint.title_la) title = saint.title_la;
    else if (lang === 'ro' && saint.title_ro) title = saint.title_ro;
    else if (saint[`title_${lang}`]) title = saint[`title_${lang}`];
    else if (lang === 'en') title = saint.title || '';
    else {
      title = translateSaintTitle(saint.title || '', lang, saint.title_it || '');
    }
  }

  // 4. Quote resolution
  if (!quote) {
    if (lang === 'it' && saint.quote_it) quote = saint.quote_it;
    else if (lang === 'la' && saint.quote_la) quote = saint.quote_la;
    else if (lang === 'ro' && saint.quote_ro) quote = saint.quote_ro;
    else if (saint[`quote_${lang}`]) quote = saint[`quote_${lang}`];
    else if (lang === 'en') quote = saint.quote || saint.quote_en || '';
    else if ((lang === 'la' || lang === 'it') && saint.quote_it) quote = saint.quote_it;
    else quote = saint.quote || saint.quote_it || '';
  }

  // 5. Bio resolution
  if (!bio) {
    if (lang === 'it' && saint.bio_it) bio = saint.bio_it;
    else if (lang === 'la' && saint.bio_la) bio = saint.bio_la;
    else if (lang === 'ro' && saint.bio_ro) bio = saint.bio_ro;
    else if (saint[`bio_${lang}`]) bio = saint[`bio_${lang}`];
    else if (lang === 'en') bio = saint.bio || '';
    else {
      bio = getLiturgicalBioFallback(name, title, lang);
    }
  }

  // 6. Scripture reference
  const scriptureRef = localizeScriptureRef(saint.scriptureRef, lang);

  // 7. Liturgical color and rank localization
  const colorName = getLocalizedColorName(saint.color || 'white', lang);
  const rankName = getLocalizedRankName(saint.rank || 'memorial', lang);

  return {
    ...saint,
    displayName: name,
    displayTitle: title,
    displayQuote: quote,
    displayBio: bio,
    displayScriptureRef: scriptureRef,
    colorName,
    rankName,
    // Convenience aliases
    name,
    title,
    quote,
    bio,
    scriptureRef
  };
}
