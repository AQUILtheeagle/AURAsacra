// Multilingual Localization Catalog for Penance, Fasting, Abstinence & Liturgical Traditions
// Supports: it (Italiano), en (English), ro (Română), fr (Français), es (Español), pt (Português), de (Deutsch), ru (Русский), la (Lingua Latina)

import { getLanguage } from '../i18n.js';
import { localizeScriptureRef } from './saints-i18n.js';

export const TRADITIONS_I18N = {
  catholic: {
    it: {
      name: 'Cattolico (Rito Romano)',
      subtitle: 'Codice di Diritto Canonico (Can. 1249–1253 & Paenitemini)',
      description: 'Mercoledì delle Ceneri, Venerdì Santo e tutti i venerdì dell\'anno (con dispense per le solennità).'
    },
    en: {
      name: 'Catholic (Roman Rite)',
      subtitle: 'Code of Canon Law (Can. 1249–1253 & Paenitemini)',
      description: 'Ash Wednesday, Good Friday, and all Fridays of the year (with solemnity dispensations).'
    },
    ro: {
      name: 'Catolic (Rit Roman)',
      subtitle: 'Codul de Drept Canonic (Can. 1249–1253 & Paenitemini)',
      description: 'Miercurea Cenușii, Vinerea Mare și toate vinerile din an (cu dezlegare la praznice).'
    },
    fr: {
      name: 'Catholique (Rite Romain)',
      subtitle: 'Code de Droit Canonique (Can. 1249–1253 & Paenitemini)',
      description: 'Mercredi des Cendres, Vendredi Saint et tous les vendredis de l\'année (avec dispenses).'
    },
    es: {
      name: 'Católico (Rito Romano)',
      subtitle: 'Código de Derecho Canónico (Can. 1249–1253 y Paenitemini)',
      description: 'Miércoles de Ceniza, Viernes Santo y todos los viernes del año (con dispensas en solemnidades).'
    },
    pt: {
      name: 'Católico (Rito Romano)',
      subtitle: 'Código de Direito Canônico (Cân. 1249–1253 e Paenitemini)',
      description: 'Quarta-feira de Cinzas, Sexta-feira Santa e todas as sextas-feiras do ano (com dispensas).'
    },
    de: {
      name: 'Katholisch (Römischer Ritus)',
      subtitle: 'Codex Iuris Canonici (Can. 1249–1253 & Paenitemini)',
      description: 'Aschermittwoch, Karfreitag und alle Freitage des Jahres (mit Hochfest-Dispensen).'
    },
    ru: {
      name: 'Католический (Римский обряд)',
      subtitle: 'Кодекс канонического права (Кан. 1249–1253 & Paenitemini)',
      description: 'Пепельная среда, Страстная пятница и все пятницы года (с освобождением в торжества).'
    },
    la: {
      name: 'Catholicus (Ritus Romanus)',
      subtitle: 'Codex Iuris Canonici (Can. 1249–1253 & Paenitemini)',
      description: 'Feria IV Cinerum, Feria VI in Parasceve et omnes feriae sextae anni (cum dispensationibus).'
    }
  },
  traditional: {
    it: {
      name: 'Tradizionale (1962)',
      subtitle: 'Messale Antico & Diritto Canonico del 1917',
      description: 'Include Quattro Tempora (Quatuor Tempora), vigilie tradizionali e digiuno quotidiano quaresimale.'
    },
    en: {
      name: 'Traditional Catholic (1962)',
      subtitle: 'Historic Missal & 1917 Canon Law',
      description: 'Includes Ember Days (Quatuor Tempora), traditional Vigils, and full Lenten daily fasts.'
    },
    ro: {
      name: 'Catolic Tradițional (1962)',
      subtitle: 'Liturghier Istoric & Dreptul Canonic din 1917',
      description: 'Cuprinde Quatuor Tempora, ajunurile tradiționale și postirea zilnică a Postului Mare.'
    },
    fr: {
      name: 'Traditionnel (1962)',
      subtitle: 'Missel Historique & Droit Canonique de 1917',
      description: 'Comprend les Quatre-Temps, les vigiles traditionnelles et le jeûne quotidien de Carême.'
    },
    es: {
      name: 'Tradicional (1962)',
      subtitle: 'Misal Histórico y Derecho Canónico de 1917',
      description: 'Incluye las Témporas (Quatuor Tempora), vigilias tradicionales y el ayuno diario de Cuaresma.'
    },
    pt: {
      name: 'Tradicional (1962)',
      subtitle: 'Missal Histórico e Direito Canônico de 1917',
      description: 'Inclui as Quatro Têmporas, vigílias tradicionais e o jejum diário da Quaresma.'
    },
    de: {
      name: 'Traditionell (1962)',
      subtitle: 'Historisches Messbuch & Kirchenrecht von 1917',
      description: 'Beinhaltet Quatembertage (Quatuor Tempora), traditionelle Vigilien und tägliches Fasten.'
    },
    ru: {
      name: 'Традиционный (1962)',
      subtitle: 'Исторический миссал и каноническое право 1917 года',
      description: 'Включает Quatuor Tempora, традиционные навечерия и ежедневный пост Святой Четыредесятницы.'
    },
    la: {
      name: 'Traditionalis (1962)',
      subtitle: 'Missale Antiquum & Codex Iuris Canonici 1917',
      description: 'Quatuor Tempora, antiquas vigilias ac quotidianum ieiunium quadragesimale complectitur.'
    }
  },
  orthodox: {
    it: {
      name: 'Ortodosso (Bizantino Orientale)',
      subtitle: 'Grande Quaresima, Digiuni Stagionali e Settimanali',
      description: 'Grande Quaresima, Digiuno degli Apostoli, della Dormizione, della Natività, mercoledì e venerdì.'
    },
    en: {
      name: 'Orthodox (Eastern Byzantine)',
      subtitle: 'Great Lent, Fasting Seasons & Weekly Fasts',
      description: 'Great Lent, Apostles Fast, Dormition Fast, Nativity Fast, and Wednesdays & Fridays.'
    },
    ro: {
      name: 'Ortodox (Bizantin Răsăritean)',
      subtitle: 'Postul Mare, Posturile de Peste An și Zilele Săptămânale',
      description: 'Postul Mare, Postul Apostolilor, Adormirii Maicii Domnului, Crăciunului, miercurile și vinerile.'
    },
    fr: {
      name: 'Orthodoxe (Byzantin Oriental)',
      subtitle: 'Grand Carême, Jeûnes Saisonniers et Hebdomadaires',
      description: 'Grand Carême, Jeûne des Apôtres, de la Dormition, de la Nativité, mercredis et vendredis.'
    },
    es: {
      name: 'Ortodoxo (Bizantino Oriental)',
      subtitle: 'Gran Cuaresma, Ayunos Estacionales y Semanales',
      description: 'Gran Cuaresma, Ayuno de los Apóstoles, de la Dormición, de la Natividad, miércoles y viernes.'
    },
    pt: {
      name: 'Ortodoxo (Bizantino Oriental)',
      subtitle: 'Grande Quaresma, Jejuns Sazonais e Semanais',
      description: 'Grande Quaresma, Jejum dos Apóstolos, da Dormição, do Natal, quartas e sextas-feiras.'
    },
    de: {
      name: 'Orthodox (Östlich-Byzantinisch)',
      subtitle: 'Große Fastenzeit, Jahreszeitliche und Wöchentliche Fasten',
      description: 'Große Fastenzeit, Apostelfasten, Marienfasten, Weihnachtsfasten, Mittwochs- und Freitagsfasten.'
    },
    ru: {
      name: 'Православный (Восточно-Византийский)',
      subtitle: 'Великий Пост, Многодневные и Однодневные Посты',
      description: 'Великий Пост, Апостольский, Успенский, Рождественский посты, среды и пятницы.'
    },
    la: {
      name: 'Orthodoxus (Byzantinus Orientalis)',
      subtitle: 'Magna Quadragesima, Ieiunia Statuta ac Hebdomadalia',
      description: 'Magna Quadragesima, Ieiunium Apostolorum, Dormitionis, Nativitatis, feria IV et VI.'
    }
  },
  protestant: {
    it: {
      name: 'Protestante / Evangelico',
      subtitle: 'Grazia Biblica & Devozione Volontaria',
      description: 'Solennità delle Ceneri e Venerdì Santo, digiuno di Daniele, disciplina spirituale libera e orante.'
    },
    en: {
      name: 'Protestant / Evangelical',
      subtitle: 'Biblical Grace & Voluntary Devotion',
      description: 'Ash Wednesday & Good Friday solemnity, Jesus & Daniel fasts, prayerful voluntary discipline.'
    },
    ro: {
      name: 'Protestant / Evanghelic',
      subtitle: 'Har Biblic & Râvnă Duhovnicească Devoie',
      description: 'Miercurea Cenușii și Vinerea Mare, postul lui Daniel, disciplină liberă de rugăciune.'
    },
    fr: {
      name: 'Protestant / Évangélique',
      subtitle: 'Grâce Biblique & Dévotion Volontaire',
      description: 'Mercredi des Cendres et Vendredi Saint, jeûne de Daniel, discipline personnelle et prière.'
    },
    es: {
      name: 'Protestante / Evangélico',
      subtitle: 'Gracia Bíblica y Devoción Voluntaria',
      description: 'Miércoles de Ceniza y Viernes Santo, ayuno de Daniel, disciplina espiritual voluntaria.'
    },
    pt: {
      name: 'Protestante / Evangélico',
      subtitle: 'Graça Bíblica e Devoção Voluntária',
      description: 'Quarta-feira de Cinzas e Sexta-feira Santa, jejum de Daniel, disciplina espiritual voluntária.'
    },
    de: {
      name: 'Protestantisch / Evangelisch',
      subtitle: 'Biblische Gnade & Freiwillige Hingabe',
      description: 'Aschermittwoch und Karfreitag, Daniel-Fasten, freie geistliche Übung im Gebet.'
    },
    ru: {
      name: 'Протестантский / Евангельский',
      subtitle: 'Библейская благодать и добровольное благочестие',
      description: 'Пепельная среда и Страстная пятница, пост Даниила, молитвенное добровольное делание.'
    },
    la: {
      name: 'Protestanticus / Evangelicus',
      subtitle: 'Gratia Biblica et Libera Devotio',
      description: 'Feria IV Cinerum et Feria VI in Parasceve, ieiunium Danielis ac pia orationis disciplina.'
    }
  },
  ecumenical: {
    it: {
      name: 'Ecumenico / Ricerca Spirituale',
      subtitle: 'Eredità Condivisa di Preghiera e Ascesi',
      description: 'Ascesi cristiana universale: digiuno dal male, silenzio davanti a Dio e carità verso i poveri.'
    },
    en: {
      name: 'Ecumenical / Spiritual Seeker',
      subtitle: 'Shared Heritage of Prayer & Fasting',
      description: 'Universal Christian asceticism: fasting from malice, silence before God, and charity to the poor.'
    },
    ro: {
      name: 'Ecumenic / Căutător Spiritual',
      subtitle: 'Moștenire Comună de Rugăciune și Înfrânare',
      description: 'Nevoință creștină universală: postire de la răutate, liniște înaintea Domnului și milă de săraci.'
    },
    fr: {
      name: 'Œcuménique / Quête Spirituelle',
      subtitle: 'Héritage Commun de Prière et de Jeûne',
      description: 'Ascèse chrétienne universelle : jeûne de toute malice, silence devant Dieu et charité pour les pauvres.'
    },
    es: {
      name: 'Ecuménico / Búsqueda Espiritual',
      subtitle: 'Patrimonio Compartido de Oración y Ayuno',
      description: 'Ascesis cristiana universal: ayuno de la malicia, silencio ante Dios y caridad con los pobres.'
    },
    pt: {
      name: 'Ecumênico / Busca Espiritual',
      subtitle: 'Patrimônio Compartilhado de Oração e Jejum',
      description: 'Ascese cristã universal: jejum da malícia, silêncio diante de Deus e caridade para com os pobres.'
    },
    de: {
      name: 'Ökumenisch / Geistliche Suche',
      subtitle: 'Gemeinsames Erbe von Gebet und Fasten',
      description: 'Allgemeine christliche Askese: Verzicht auf Bosheit, Stille vor Gott und Werke der Nächstenliebe.'
    },
    ru: {
      name: 'Экуменический / Духовный поиск',
      subtitle: 'Общее наследие молитвы и воздержания',
      description: 'Всехристианское воздержание: удаление от зла, безмолвие перед Богом и дела милосердия к бедным.'
    },
    la: {
      name: 'Oecumenicus / Scriptor Spiritualis',
      subtitle: 'Communis Hereditas Orationis ac Ieiunii',
      description: 'Universalis ascetismus christianus: ieiunium a malitia, silentium coram Deo et caritas erga pauperes.'
    }
  }
};

export const PENANCE_STATUS_I18N = {
  ordinary: {
    it: {
      title: 'Giorno Ordinario',
      subtitle: 'Vivere nella Virtù Cristiana e Gratitudine',
      badgeLabel: 'Nessun Digiuno Richiesto',
      fasting: 'Nessuno prescritto dal diritto canonico.',
      abstinence: 'Tutti i cibi sono permessi con rendimento di grazie.',
      allowed: 'Pasti sani consumati con cuore grato.',
      avoid: 'Gola, eccessi e mancanza di gratitudine.',
      obligation: 'Giorno libero. Persevera nella preghiera quotidiana e nel lavoro («Ora et Labora»).',
      theology: 'Ogni giorno è creazione di Dio, da accogliere con rendimento di grazie e santificare mediante la preghiera, l\'onestà e l\'amore caritatevole.',
      prayer: 'Signore, benedici il cibo che mangiamo e l\'opera delle nostre mani. Tutto ciò che facciamo ridondi a Tua gloria e lode eterna. Amen.'
    },
    en: {
      title: 'Ordinary Day',
      subtitle: 'Living in Christian Virtue and Gratitude',
      badgeLabel: 'No Fast Required',
      fasting: 'None prescribed by canon law.',
      abstinence: 'All foods permitted in thanksgiving.',
      allowed: 'Enjoy wholesome meals with a grateful heart.',
      avoid: 'Gluttony and lack of gratitude.',
      obligation: 'Free day. Continue in daily prayer and work («Ora et Labora»).',
      theology: 'Every day is God\'s creation, to be received with thanksgiving and sanctified through prayer, honesty, and loving charity.',
      prayer: 'Lord, bless the food we eat and the work of our hands. May everything we do redound to Thy honor and eternal praise. Amen.'
    },
    ro: {
      title: 'Zi Obișnuită',
      subtitle: 'Trăire în Virtute Creștină și Recunoștință',
      badgeLabel: 'Fără Post Obligatoriu',
      fasting: 'Niciunul prescris de rânduială.',
      abstinence: 'Toate bucatele sunt îngăduite cu mulțumire.',
      allowed: 'Mese sănătoase primite cu inimă recunoscătoare.',
      avoid: 'Îmbuibare și lipsă de recunoștință.',
      obligation: 'Zi liberă. Stăruie în rugăciune zilnică și muncă («Ora et Labora»).',
      theology: 'Fiecare zi este creația lui Dumnezeu, primită cu mulțumire și sfințită prin rugăciune, curăție și dragoste jertfelnică.',
      prayer: 'Doamne, binecuvântează hrana pe care o primim și lucrul mâinilor noastre. Tot ce săvârșim să fie spre slava Ta cea veșnică. Amin.'
    },
    fr: {
      title: 'Jour Ordinaire',
      subtitle: 'Vivre dans la Vertu Chrétienne et la Gratitude',
      badgeLabel: 'Aucun Jeûne Requis',
      fasting: 'Aucun prescrit par le droit canonique.',
      abstinence: 'Tous aliments permis en action de grâce.',
      allowed: 'Repas sains pris avec un cœur reconnaissant.',
      avoid: 'Gourmandise, excès et ingratitude.',
      obligation: 'Jour libre. Persévérez dans la prière quotidienne et le travail («Ora et Labora»).',
      theology: 'Chaque jour est une création de Dieu, à recevoir avec gratitude et à sanctifier par la prière, l\'honnêteté et la charité.',
      prayer: 'Seigneur, bénis la nourriture que nous prenons et l\'ouvrage de nos mains. Que tout ce que nous faisons serve à Ta gloire éternelle. Amen.'
    },
    es: {
      title: 'Día Ordinario',
      subtitle: 'Vivir en Virtud Cristiana y Gratitud',
      badgeLabel: 'Sin Ayuno Requerido',
      fasting: 'Ninguno prescrito por el derecho canónico.',
      abstinence: 'Todos los alimentos permitidos en acción de gracias.',
      allowed: 'Comidas sanas disfrutadas con corazón agradecido.',
      avoid: 'Gula, excesos y falta de gratitud.',
      obligation: 'Día libre. Persevera en la oración diaria y el trabajo («Ora et Labora»).',
      theology: 'Cada día es creación de Dios, para ser recibido con gratitud y santificado mediante la oración, la honestidad y la caridad.',
      prayer: 'Señor, bendice los alimentos que tomamos y la obra de nuestras manos. Que cuanto hagamos sea para Tu gloria y alabanza eterna. Amén.'
    },
    pt: {
      title: 'Dia Ordinário',
      subtitle: 'Viver em Virtude Cristã e Gratidão',
      badgeLabel: 'Sem Jejum Obrigatório',
      fasting: 'Nenhum prescrito pelo direito canônico.',
      abstinence: 'Todos os alimentos permitidos em ação de graças.',
      allowed: 'Refeições saudáveis desfrutadas com coração grato.',
      avoid: 'Gula, excessos e falta de gratidão.',
      obligation: 'Dia livre. Persevera na oração diária e no trabalho («Ora et Labora»).',
      theology: 'Cada dia é criação de Deus, a ser recebido com gratidão e santificado mediante a oração, a honestidade e a caridade.',
      prayer: 'Senhor, abençoa o alimento que comemos e a obra das nossas mãos. Que tudo o que fizermos seja para a Tua honra e louvor eterno. Amém.'
    },
    de: {
      title: 'Gewöhnlicher Tag',
      subtitle: 'Leben in christlicher Tugend und Dankbarkeit',
      badgeLabel: 'Kein Fasten erforderlich',
      fasting: 'Keines nach kanonischem Recht vorgeschrieben.',
      abstinence: 'Alle Speisen in Danksagung erlaubt.',
      allowed: 'Gesunde Mahlzeiten mit dankbarem Herzen genießen.',
      avoid: 'Völlerei, Maßlosigkeit und Undankbarkeit.',
      obligation: 'Freier Tag. Verharre im täglichen Gebet und der Arbeit («Ora et Labora»).',
      theology: 'Jeder Tag ist Gottes Schöpfung, mit Danksagung zu empfangen und durch Gebet, Aufrichtigkeit und Nächstenliebe zu heiligen.',
      prayer: 'Herr, segne die Speise, die wir empfangen, und das Werk unserer Hände. Möge alles zu Deiner Ehre gereichen. Amen.'
    },
    ru: {
      title: 'Обычный День',
      subtitle: 'Жизнь в христианской добродетели и благодарности',
      badgeLabel: 'Пост не требуется',
      fasting: 'Не предписан церковным уставом.',
      abstinence: 'Вся пища разрешена с благодарением.',
      allowed: 'Здоровая пища с благодарным сердцем.',
      avoid: 'Чревоугодие, излишества и неблагодарность.',
      obligation: 'Свободный день. Пребывайте в ежедневной молитве и труде («Ora et Labora»).',
      theology: 'Каждый день есть творение Божие, принимаемое с благодарением и освящаемое молитвой, чистотой и делами любви.',
      prayer: 'Господи, благослови пищу нашу и дело рук наших. Да послужит всё к Твоей славе и вечному прославлению. Аминь.'
    },
    la: {
      title: 'Dies Ordinarius',
      subtitle: 'In Virtute Christiana et Gratiarum Actione',
      badgeLabel: 'Ieiunium non praescriptum',
      fasting: 'Nihil iure canonico praescriptum.',
      abstinence: 'Omnes cibi cum gratiarum actione permissi.',
      allowed: 'Salubres epulae corde grato sumptae.',
      avoid: 'Gula, immoderatio et ingratitudo.',
      obligation: 'Dies liber. Persevera in oratione quotidiana et labore («Ora et Labora»).',
      theology: 'Omnis dies est creatio Dei, cum gratiarum actione accipienda et per orationem, iustitiam et caritatem sanctificanda.',
      prayer: 'Domine, benedic cibum quem sumimus et opera manuum nostrarum. Omnia cedant in laudem et gloriam tuam sempiternam. Amen.'
    }
  },

  friday_penance: {
    it: {
      title: 'Venerdì di Penitenza',
      subtitle: 'Memoria Settimanale della Passione di Nostro Signore (Can. 1250)',
      badgeLabel: 'Astinenza dalle Carni',
      fasting: 'Non strettamente canonico; moderazione e sobrietà volontarie incoraggiate.',
      abstinence: 'Obbligatoria: Astinenza dalla carne di animali a sangue caldo (o atto approvato di carità/pietà).',
      allowed: 'Pesce, frutti di mare, cereali, legumi, verdure, frutta, uova, formaggi, olio d\'oliva.',
      avoid: 'Carni di mammiferi e pollame (manzo, pollo, maiale, agnello, tacchino).',
      obligation: 'Obbligatorio per tutti i fedeli dal compimento dei 14 anni in poi.',
      theology: 'Ogni venerdì è un piccolo Venerdì Santo nella tradizione cristiana, consacrato alla penitenza in memoria dell\'offerta della vita di Cristo sul Calvario.',
      prayer: 'Signore Gesù Cristo, crocifisso per la nostra salvezza, accogli il nostro umile sacrificio di astinenza come atto d\'amore, gratitudine e solidarietà con i poveri.'
    },
    en: {
      title: 'Friday of Penance',
      subtitle: 'Weekly Memorial of the Passion of our Lord (Can. 1250)',
      badgeLabel: 'Abstinence from Meat',
      fasting: 'Not strictly canonical; voluntary moderation encouraged.',
      abstinence: 'Required: Abstinence from meat of warm-blooded animals (or an approved episcopal act of charity/piety outside Lent).',
      allowed: 'Fish, seafood, grains, legumes, vegetables, fruits, eggs, cheese, olive oil.',
      avoid: 'Meat from mammals and poultry (beef, chicken, pork, lamb, turkey).',
      obligation: 'Obligatory for all faithful from age 14 onwards.',
      theology: 'Every Friday is a mini-Good Friday in the Christian tradition, consecrated to penance in commemoration of the Lord Jesus offering His life upon Mount Calvary.',
      prayer: 'Lord Jesus Christ, crucified for our salvation, accept our modest sacrifice of abstinence this day as an act of love, gratitude, and solidarity with the poor.'
    },
    ro: {
      title: 'Vineri de Pocăință',
      subtitle: 'Pomenirea Săptămânală a Patimilor Domnului (Can. 1250)',
      badgeLabel: 'Abstinență de la Carne',
      fasting: 'Nu este strict canonic; cumpătarea și postul de voie sunt îndemnate.',
      abstinence: 'Obligatorie: Înfrânare de la carnea viețuitoarelor cu sânge cald (sau fapte de milostenie/rugăciune).',
      allowed: 'Pește, fructe de mare, cereale, leguminoase, legume, fructe, ouă, brânzeturi, ulei de măsline.',
      avoid: 'Carne de mamifere și păsări (vită, pui, porc, miel, curcan).',
      obligation: 'Obligatoriu pentru toți credincioșii de la vârsta de 14 ani.',
      theology: 'Fiecare zi de vineri este o mică Vineri Mare în tradiția creștină, închinată pocăinței în amintirea jertfei Mântuitorului pe Golgota.',
      prayer: 'Doamne Iisuse Hristoase, Cel răstignit pentru mântuirea noastră, primește smerita noastră înfrânare ca semn de dragoste, mulțumire și milă față de cei lipsiți.'
    },
    fr: {
      title: 'Vendredi de Pénitence',
      subtitle: 'Mémorial Hebdomadaire de la Passion de Notre Seigneur (Can. 1250)',
      badgeLabel: 'Abstinence de Viande',
      fasting: 'Non strictement canonique ; modération volontaire encouragée.',
      abstinence: 'Requise : Abstinence de viande d\'animaux à sang chaud (ou acte de piété/charité approuvé).',
      allowed: 'Poisson, fruits de mer, céréales, légumineuses, légumes, fruits, œufs, fromage, huile d\'olive.',
      avoid: 'Viande de mammifères et volaille (bœuf, poulet, porc, agneau, dinde).',
      obligation: 'Obligatoire pour tous les fidèles à partir de l\'âge de 14 ans.',
      theology: 'Chaque vendredi est un petit Vendredi Saint dans la tradition chrétienne, consacré à la pénitence en mémoire de l\'offrande du Christ sur le Calvaire.',
      prayer: 'Seigneur Jésus-Christ, crucifié pour notre salut, accueille notre modeste sacrifice d\'abstinence comme un acte d\'amour, de gratitude et de solidarité envers les pauvres.'
    },
    es: {
      title: 'Viernes de Penitencia',
      subtitle: 'Memorial Semanal de la Pasión de Nuestro Señor (Can. 1250)',
      badgeLabel: 'Abstinencia de Carne',
      fasting: 'No estrictamente canónico; se alienta la moderación voluntaria.',
      abstinence: 'Obligatoria: Abstinencia de carne de animales de sangre caliente (o acto de caridad/piedad aprobado).',
      allowed: 'Pescado, mariscos, cereales, legumbres, verduras, frutas, huevos, queso, aceite de oliva.',
      avoid: 'Carne de mamíferos y aves (res, pollo, cerdo, cordero, pavo).',
      obligation: 'Obligatorio para todos los fieles a partir de los 14 años.',
      theology: 'Cada viernes es un pequeño Viernes Santo en la tradición cristiana, consagrado a la penitencia en memoria de la entrega de Cristo en el Calvario.',
      prayer: 'Señor Jesucristo, crucificado por nuestra salvación, acepta nuestro humilde sacrificio de abstinencia como acto de amor, gratitud y solidaridad con los pobres.'
    },
    pt: {
      title: 'Sexta-feira de Penitência',
      subtitle: 'Memória Semanal da Paixão de Nosso Senhor (Cân. 1250)',
      badgeLabel: 'Abstinência de Carne',
      fasting: 'Não estritamente canônico; moderação voluntária incentivada.',
      abstinence: 'Obrigatória: Abstinência de carne de animais de sangue quente (ou obra de caridade/piedade aprovada).',
      allowed: 'Peixe, frutos do mar, cereais, leguminosas, legumes, frutas, ovos, queijo, azeite.',
      avoid: 'Carne de mamíferos e aves (bovino, frango, suíno, cordeiro, peru).',
      obligation: 'Obrigatório para todos os fiéis a partir dos 14 anos.',
      theology: 'Cada sexta-feira é uma pequena Sexta-feira Santa na tradição cristã, consagrada à penitência em memória da entrega de Cristo no Calvário.',
      prayer: 'Senhor Jesus Cristo, crucificado pela nossa salvação, acolhe o nosso humilde sacrifício de abstinência como ato de amor, gratidão e solidariedade com os pobres.'
    },
    de: {
      title: 'Freitag der Buße',
      subtitle: 'Wöchentliches Gedächtnis des Leidens unseres Herrn (Can. 1250)',
      badgeLabel: 'Fleischabstinenz',
      fasting: 'Nicht streng kanonisch; freiwillige Mäßigung wird empfohlen.',
      abstinence: 'Vorgeschrieben: Verzicht auf Fleisch warmblütiger Tiere (oder bischöflich anerkannte Liebeswerke).',
      allowed: 'Fisch, Meeresfrüchte, Getreide, Hülsenfrüchte, Gemüse, Obst, Eier, Käse, Olivenöl.',
      avoid: 'Fleisch von Säugetieren und Geflügel (Rind, Huhn, Schwein, Lamm, Pute).',
      obligation: 'Verpflichtend für alle Gläubigen ab dem 14. Lebensjahr.',
      theology: 'Jeder Freitag ist in der christlichen Tradition ein kleiner Karfreitag, der Buße geweiht im Gedenken an das Opfer Christi auf Golgota.',
      prayer: 'Herr Jesus Christus, für unser Heil gekreuzigt, nimm unser bescheidenes Opfer der Enthaltsamkeit an als Zeichen der Liebe, Dankbarkeit und Solidarität mit den Armen.'
    },
    ru: {
      title: 'Пятница Покаяния',
      subtitle: 'Еженедельное воспоминание Страстей Господних (Кан. 1250)',
      badgeLabel: 'Воздержание от мяса',
      fasting: 'Канонически не обязательно; поощряется добровольное воздержание.',
      abstinence: 'Обязательно: Воздержание от мяса теплокровных животных (или дела милосердия).',
      allowed: 'Рыба, морепродукты, крупы, бобовые, овощи, фрукты, яйца, сыр, растительное масло.',
      avoid: 'Мясо млекопитающих и птицы (говядина, курица, свинина, баранина, индейка).',
      obligation: 'Обязательно для всех верующих старше 14 лет.',
      theology: 'Каждая пятница — малая Страстная Пятница в христианской традиции, посвящённая покаянию в память о крестной жертве Спасителя на Голгофе.',
      prayer: 'Господи Иисусе Христе, распятый ради спасения нашего, прими сие малое воздержание в знак любви, благодарения и сострадания к неимущим.'
    },
    la: {
      title: 'Feria Sexta Paenitentiae',
      subtitle: 'Memoria Hebdomadalis Passionis Domini Nostri (Can. 1250)',
      badgeLabel: 'Abstinentia a Carnibus',
      fasting: 'Non stricte canonicum; voluntaria moderatio valde commendatur.',
      abstinence: 'Praescripta: Abstinentia a carnibus animalium sanguinis calidi (vel opus caritatis).',
      allowed: 'Pisces, crustacea, fruges, legumina, holera, poma, ova, caseus, oleum olivarum.',
      avoid: 'Carnes mammalium et avium (bubula, pullina, porcina, agnina).',
      obligation: 'Obligatorium pro omnibus fidelibus a decimo quarto anno aetatis completis.',
      theology: 'Omnis feria sexta est quasi parva Feria Sexta in Parasceve, paenitentiae consecrata in memoriam sacrificii Christi in Calvariae monte.',
      prayer: 'Domine Iesu Christe, pro salute nostra crucifixe, accipe humile abstinentiae sacrificium in actum amoris, gratiarum actionis et caritatis erga pauperes.'
    }
  },

  lenten_friday: {
    it: {
      title: 'Venerdì di Quaresima',
      subtitle: 'Memoria della Passione e Cammino Verso la Pasqua (Can. 1250)',
      badgeLabel: 'Astinenza Quaresimale',
      fasting: 'Consigliata vivamente la disciplina quaresimale del digiuno volontario.',
      abstinence: 'Obbligatoria: Astinenza dalla carne di animali a sangue caldo.',
      allowed: 'Pesce, legumi, verdure, cereali, frutta, olio d\'oliva.',
      avoid: 'Carni di manzo, maiale, pollame, agnello e cibi sontuosi.',
      obligation: 'Obbligatorio per tutti i fedeli dai 14 anni in su.',
      theology: 'I venerdì di Quaresima uniscono i fedeli in modo speciale alle sofferenze di Cristo, purificando i sensi prima della Pasqua.',
      prayer: 'Signore Gesù, mite e umile di cuore, fortifica il nostro spirito in questo venerdì di Quaresima, affinché morendo a noi stessi possiamo risorgere con Te.'
    },
    en: {
      title: 'Lenten Friday of Penance',
      subtitle: 'Weekly Memorial of the Passion of our Lord (Can. 1250)',
      badgeLabel: 'Lenten Abstinence',
      fasting: 'Voluntary Lenten discipline recommended.',
      abstinence: 'Required: Abstinence from meat of warm-blooded animals.',
      allowed: 'Fish, seafood, grains, legumes, vegetables, fruits, eggs, cheese, olive oil.',
      avoid: 'Meat from mammals and poultry (beef, chicken, pork, lamb, turkey).',
      obligation: 'Obligatory for all faithful from age 14 onwards.',
      theology: 'Lenten Fridays unite the faithful in a special way to the sufferings of Christ, purifying the senses before Easter.',
      prayer: 'Lord Jesus Christ, meek and humble of heart, strengthen our spirit this Lenten Friday, that dying to ourselves we may rise with Thee.'
    },
    ro: {
      title: 'Vineri din Postul Mare',
      subtitle: 'Pomenirea Patimilor și Urcușul spre Înviere (Can. 1250)',
      badgeLabel: 'Abstinență din Post',
      fasting: 'Se recomandă stăruitor rânduiala postirii de voie.',
      abstinence: 'Obligatorie: Înfrânare de la carnea viețuitoarelor cu sânge cald.',
      allowed: 'Pește, leguminoase, legume, cereale, fructe, ulei de măsline.',
      avoid: 'Carne de vită, porc, pui, miel și ospețe îmbelșugate.',
      obligation: 'Obligatoriu pentru toți credincioșii de la 14 ani.',
      theology: 'Vinerile Postului Mare unesc credincioșii cu pătimirile lui Hristos, curățind simțirile înainte de slăvitul Praznic al Învierii.',
      prayer: 'Doamne Iisuse, blând și smerit cu inima, întărește duhul nostru în această vineri de post, ca murind păcatului să înviem întru Tine.'
    },
    fr: {
      title: 'Vendredi de Carême',
      subtitle: 'Mémorial de la Passion et Marche vers Pâques (Can. 1250)',
      badgeLabel: 'Abstinence de Carême',
      fasting: 'Discipline de jeûne volontaire vivement recommandée.',
      abstinence: 'Requise : Abstinence de viande d\'animaux à sang chaud.',
      allowed: 'Poisson, légumineuses, légumes, céréales, fruits, huile d\'olive.',
      avoid: 'Viande de bœuf, porc, volaille, agneau et festins profanes.',
      obligation: 'Obligatoire pour tous les fidèles dès 14 ans.',
      theology: 'Les vendredis de Carême unissent les fidèles aux souffrances du Christ, purifiant les sens avant la Résurrection.',
      prayer: 'Seigneur Jésus, doux et humble de cœur, fortifie notre esprit en ce vendredi de Carême, afin qu\'en mourant à nous-mêmes nous ressuscitions avec Toi.'
    },
    es: {
      title: 'Viernes de Cuaresma',
      subtitle: 'Memorial de la Pasión y Camino hacia la Pascua (Can. 1250)',
      badgeLabel: 'Abstinencia Cuaresmal',
      fasting: 'Se recomienda vivamente la disciplina cuaresmal del ayuno voluntario.',
      abstinence: 'Obligatoria: Abstinencia de carne de animales de sangre caliente.',
      allowed: 'Pescado, legumbres, verduras, cereales, frutas, aceite de oliva.',
      avoid: 'Carne de res, cerdo, aves, cordero y comidas suntuosas.',
      obligation: 'Obligatorio para todos los fieles a partir de los 14 años.',
      theology: 'Los viernes de Cuaresma unen a los fieles de modo especial a los sufrimientos de Cristo, purificando el alma para la Pascua.',
      prayer: 'Señor Jesús, manso y humilde de corazón, fortalece nuestro espíritu en este viernes de Cuaresma para que muriendo al pecado resucitemos Contigo.'
    },
    pt: {
      title: 'Sexta-feira da Quaresma',
      subtitle: 'Memória da Paixão e Caminho para a Páscoa (Cân. 1250)',
      badgeLabel: 'Abstinência Quaresmal',
      fasting: 'Recomenda-se vivamente a disciplina quaresmal do jejum voluntário.',
      abstinence: 'Obrigatória: Abstinência de carne de animais de sangue quente.',
      allowed: 'Peixe, leguminosas, legumes, cereais, frutas, azeite.',
      avoid: 'Carne bovina, suína, aves, cordeiro e banquetes lautos.',
      obligation: 'Obrigatório para todos os fiéis a partir dos 14 anos.',
      theology: 'As sextas-feiras da Quaresma unem os fiéis aos sofrimentos de Cristo, purificando os sentidos antes da Ressurreição.',
      prayer: 'Senhor Jesus, manso e humilde de coração, fortalece o nosso espírito nesta sexta-feira da Quaresma para que resuscitemos Contigo.'
    },
    de: {
      title: 'Freitag in der Fastenzeit',
      subtitle: 'Gedächtnis des Leidens und Weg zum Osterfest (Can. 1250)',
      badgeLabel: 'Fastenzeit-Abstinenz',
      fasting: 'Freiwillige Fastendisziplin wird wärmstens empfohlen.',
      abstinence: 'Vorgeschrieben: Verzicht auf Fleisch warmblütiger Tiere.',
      allowed: 'Fisch, Hülsenfrüchte, Gemüse, Getreide, Obst, Olivenöl.',
      avoid: 'Rind-, Schweine-, Lamm- und Geflügelfleisch sowie üppige Festmähler.',
      obligation: 'Verpflichtend für alle Gläubigen ab 14 Jahren.',
      theology: 'Die Freitage der Fastenzeit verbinden die Gläubigen auf besondere Weise mit dem Leiden Christi zur Vorbereitung auf Ostern.',
      prayer: 'Herr Jesus, sanftmütig und von Herzen demütig, stärke unseren Geist an diesem Fastenfreitag, damit wir mit Dir auferstehen.'
    },
    ru: {
      title: 'Пятница Великого Поста',
      subtitle: 'Память Страстей и путь к Пасхе (Кан. 1250)',
      badgeLabel: 'Великопостное воздержание',
      fasting: 'Настоятельно рекомендуется добровольный пост.',
      abstinence: 'Обязательно: Воздержание от мяса теплокровных животных.',
      allowed: 'Рыба, бобовые, овощи, крупы, фрукты, растительное масло.',
      avoid: 'Говядина, свинина, птица, баранина и пышные пиршества.',
      obligation: 'Обязательно для всех верующих старше 14 лет.',
      theology: 'Пятницы Святой Четыредесятницы сугубо соединяют верных со страданиями Христа, очищая чувства перед Пасхой.',
      prayer: 'Господи Иисусе, кроткий и смиренный сердцем, укрепи дух наш в сию пятницу поста, дабы умирая греху, совосстать с Тобою.'
    },
    la: {
      title: 'Feria Sexta Quadragesimae',
      subtitle: 'Memoria Passionis et Iter ad Pascha (Can. 1250)',
      badgeLabel: 'Abstinentia Quadragesimalis',
      fasting: 'Voluntarium ieiunium quadragesimale magnopere commendatur.',
      abstinence: 'Praescripta: Abstinentia a carnibus animalium sanguinis calidi.',
      allowed: 'Pisces, legumina, holera, fruges, poma, oleum olivarum.',
      avoid: 'Carnes bubulae, porcinae, pullinae et lautiores epulae.',
      obligation: 'Obligatorium pro omnibus fidelibus a 14 annis.',
      theology: 'Feriae sextae Quadragesimae fideles Christi passionibus arctius coniungunt, sensus ante Pascha purificantes.',
      prayer: 'Domine Iesu, mitis et humilis corde, confirma spiritum nostrum hac die Quadragesimae, ut tecum resurgere mereamur.'
    }
  },

  ash_wednesday: {
    it: {
      title: 'Mercoledì delle Ceneri',
      subtitle: 'Giorno Universale di Digiuno Stretto e Astinenza dalle Carni',
      badgeLabel: 'Digiuno Stretto & Astinenza',
      fasting: 'Obbligatorio: Un solo pasto completo al giorno, più due piccole refezioni che insieme non eguaglino un pasto. Nessun cibo fuori pasto.',
      abstinence: 'Obbligatoria: Totale astinenza dalla carne di animali terrestri a sangue caldo e pollame.',
      allowed: 'Pesce, frutti di mare, uova, latte, verdure, cereali, olio d\'oliva, acqua, tè, caffè.',
      avoid: 'Carni bovine, suine, pollame e brodi di carne.',
      obligation: 'Obbligo universale: digiuno dai 18 ai 59 anni; astinenza dai 14 anni in su.',
      theology: 'Segna la solenne soglia dei 40 giorni di Quaresima, richiamando il digiuno di Cristo nel deserto e la nostra mortalità: «Ricordati che sei polvere, e in polvere ritornerai».',
      prayer: 'Signore Dio, all\'inizio di questo sacro tempo di conversione, concedici la grazia di dominare gli appetiti terreni affinché i nostri cuori cerchino con ardore la Tua santa volontà. Amen.'
    },
    en: {
      title: 'Ash Wednesday',
      subtitle: 'Universal Day of Strict Fasting and Abstinence from Meat',
      badgeLabel: 'Strict Fast & Abstinence',
      fasting: 'Required: One full meal, plus two smaller collations not equalling a meal. No snacking.',
      abstinence: 'Required: Total abstinence from meat of warm-blooded land animals and poultry.',
      allowed: 'Fish, seafood, eggs, milk, vegetables, grains, olive oil, water, tea, coffee.',
      avoid: 'Beef, pork, poultry, and meat broths.',
      obligation: 'Universal obligation for all Christians aged 18 to 59 (fasting) and 14+ (abstinence).',
      theology: 'Marks the solemn threshold of the 40 days of Lent, recalling Christ\'s fast in the wilderness and our mortality: "Remember that you are dust, and to dust you shall return."',
      prayer: 'Lord God, as we begin this sacred season of repentance, grant us grace to master our earthly appetites that our hearts may hungrily seek Thy holy will. Amen.'
    },
    ro: {
      title: 'Miercurea Cenușii',
      subtitle: 'Zi Universală de Post Negru și Înfrânare de la Carne',
      badgeLabel: 'Post Aspru & Înfrânare',
      fasting: 'Obligatoriu: O singură masă completă pe zi, plus două gustări mici. Fără mâncare între mese.',
      abstinence: 'Obligatorie: Înfrânare totală de la carnea animalelor cu sânge cald și a păsărilor.',
      allowed: 'Pește, fructe de mare, ouă, lactate, legume, cereale, ulei de măsline, apă, ceai, cafea.',
      avoid: 'Carne de vită, porc, pui și ciorbe de carne.',
      obligation: 'Obligație universală: post între 18 și 59 de ani; înfrânare de la 14 ani.',
      theology: 'Marchează pragul solemn al celor 40 de zile ale Postului Mare, amintind postul Mântuitorului în pustie: «Adu-ți aminte că țărână ești și în țărână te vei întoarce».',
      prayer: 'Doamne Dumnezeul nostru, la începutul acestei sfinte vremi de pocăință, dăruiește-ne harul de a stăpâni poftele pământești, pentru ca inimile noastre să caute cu dor sfânta Ta voie. Amin.'
    },
    fr: {
      title: 'Mercredi des Cendres',
      subtitle: 'Jour Universel de Jeûne Strict et d\'Abstinence de Viande',
      badgeLabel: 'Jeûne Strict & Abstinence',
      fasting: 'Requis : Un seul repas complet par jour, et deux légères collations. Pas de grignotage.',
      abstinence: 'Requise : Abstinence totale de viande d\'animaux terrestres à sang chaud et volaille.',
      allowed: 'Poisson, fruits de mer, œufs, lait, légumes, céréales, huile d\'olive, eau, thé, café.',
      avoid: 'Bœuf, porc, volaille et bouillons de viande.',
      obligation: 'Obligation universelle : jeûne de 18 à 59 ans ; abstinence dès 14 ans.',
      theology: 'Ouvre le seuil solennel des 40 jours de Carême, rappelant le jeûne du Christ au désert et notre condition mortelle : « Souviens-toi que tu es poussière et que tu retourneras en poussière ».',
      prayer: 'Seigneur Dieu, à l\'aube de ce temps saint de pénitence, donne-nous la grâce de dominer nos appétits terrestres pour chercher avec ferveur Ta sainte volonté. Amen.'
    },
    es: {
      title: 'Miércoles de Ceniza',
      subtitle: 'Día Universal de Ayuno Estricto y Abstinencia de Carne',
      badgeLabel: 'Ayuno Estricto & Abstinencia',
      fasting: 'Obligatorio: Una sola comida fuerte al día, más dos pequeños refrigerios. Sin picar entre comidas.',
      abstinence: 'Obligatoria: Abstinencia total de carne de animales de tierra y aves de corral.',
      allowed: 'Pescado, mariscos, huevos, leche, verduras, cereales, aceite de oliva, agua, té, café.',
      avoid: 'Carne de res, cerdo, aves y caldos de carne.',
      obligation: 'Obligación universal: ayuno de 18 a 59 años; abstinencia desde los 14 años.',
      theology: 'Marca el umbral solemne de los 40 días de Cuaresma, recordando el ayuno de Cristo en el desierto: «Acuérdate de que eres polvo y al polvo volverás».',
      prayer: 'Señor Dios, al comenzar este tiempo sagrado de conversión, concédenos la gracia de dominar nuestros apetitos terrenos para que nuestros corazones busquen con fervor Tu santa voluntad. Amén.'
    },
    pt: {
      title: 'Quarta-feira de Cinzas',
      subtitle: 'Dia Universal de Jejum Estrito e Abstinência de Carne',
      badgeLabel: 'Jejum Estrito & Abstinência',
      fasting: 'Obrigatório: Uma única refeição completa por dia, mais duas pequenas refeições. Sem petiscos.',
      abstinence: 'Obrigatória: Abstinência total de carne de animais terrestres e aves.',
      allowed: 'Peixe, frutos do mar, ovos, leite, legumes, cereais, azeite, água, chá, café.',
      avoid: 'Carne bovina, suína, frango e caldos de carne.',
      obligation: 'Obrigação universal: jejum dos 18 aos 59 anos; abstinência a partir dos 14 anos.',
      theology: 'Marca o limiar solene dos 40 dias da Quaresma, recordando o jejum de Cristo no deserto: «Lembra-te de que és pó e ao pó hás de voltar».',
      prayer: 'Senhor Deus, ao iniciarmos este santo tempo de conversão, concede-nos a graça de dominar os apetites terrenos para que os nossos corações busquem com fervor a Tua santa vontade. Amém.'
    },
    de: {
      title: 'Aschermittwoch',
      subtitle: 'Universeller Tag des strengen Fastens und der Fleischabstinenz',
      badgeLabel: 'Strenges Fasten & Abstinenz',
      fasting: 'Vorgeschrieben: Eine volle Mahlzeit am Tag sowie zwei kleine Stärkungen. Keine Zwischenmahlzeiten.',
      abstinence: 'Vorgeschrieben: Vollständige Enthaltsamkeit von Fleisch und Geflügel.',
      allowed: 'Fisch, Meeresfrüchte, Eier, Milch, Gemüse, Getreide, Olivenöl, Wasser, Tee, Kaffee.',
      avoid: 'Rind, Schwein, Geflügel und Fleischbrühen.',
      obligation: 'Universelle Pflicht: Fasten von 18 bis 59 Jahren; Abstinenz ab 14 Jahren.',
      theology: 'Eröffnet die vierzig Tage der Fastenzeit und erinnert an Christi Fasten in der Wüste: «Bedenke, Mensch, dass du Staub bist und zum Staub zurückkehrst».',
      prayer: 'Herr unser Gott, am Beginn dieser heiligen Bußzeit schenke uns die Gnade, irdische Begierden zu zügeln, damit unsere Herzen hungrig nach Deinem heiligen Willen streben. Amen.'
    },
    ru: {
      title: 'Пепельная Среда',
      subtitle: 'Всеобщий день строгого поста и воздержания от мяса',
      badgeLabel: 'Строгий пост и воздержание',
      fasting: 'Обязательно: Одно полное вкушение пищи в день и два лёгких перекуса. Без перекусов между ними.',
      abstinence: 'Обязательно: Полное воздержание от мяса теплокровных животных и птицы.',
      allowed: 'Рыба, морепродукты, яйца, молоко, овощи, крупы, оливковое масло, вода, чай, кофе.',
      avoid: 'Говядина, свинина, птица и мясные бульоны.',
      obligation: 'Всеобщий долг: пост с 18 до 59 лет; воздержание с 14 лет.',
      theology: 'Знаменует начало Святой Четыредесятницы, напоминая о посте Спасителя в пустыне: «Помни, человек, что прах ты и в прах возвратишься».',
      prayer: 'Господи Боже, начиная сие святое поприще покаяния, даруй нам благодать обуздывать земные страсти, дабы сердца наши алкали святой воли Твоей. Аминь.'
    },
    la: {
      title: 'Feria Quarta Cinerum',
      subtitle: 'Dies Universalis Ieiunii Stricte et Abstinentiae a Carnibus',
      badgeLabel: 'Ieiunium Stricte & Abstinentia',
      fasting: 'Praescriptum: Una tantum solida refectio in die, duabus minoribus collationibus adiunctis.',
      abstinence: 'Praescripta: Totalis abstinentia a carnibus animalium terrestrium et volatilium.',
      allowed: 'Pisces, ova, lac, holera, fruges, oleum olivarum, aqua, thea, caffeum.',
      avoid: 'Bubula, porcina, pullina et carnis iuscula.',
      obligation: 'Universalis obligatio: ieiunium a 18 ad 59 annos; abstinentia a 14 annis.',
      theology: 'Solemnem introitum quadraginta dierum Quadragesimae aperit, ieiunium Christi in deserto et fragilitatem nostram revocans: «Memento, homo, quia pulvis es, et in pulverem reverteris».',
      prayer: 'Domine Deus, hoc sacrum paenitentiae tempus inchoantes, concede nobis terrena desideria edomare, ut corda nostra sanctam voluntatem tuam sitiant. Amen.'
    }
  },

  good_friday: {
    it: {
      title: 'Venerdì Santo',
      subtitle: 'La Crocifissione e Passione di Nostro Signore Gesù Cristo',
      badgeLabel: 'Digiuno Stretto & Astinenza',
      fasting: 'Obbligatorio: Un unico pasto frugale e due piccole refezioni. Acqua pura incoraggiata per tutta la giornata.',
      abstinence: 'Obbligatoria: Totale astinenza dalla carne in spirito di profondo lutto sacro.',
      allowed: 'Cibi quaresimali essenziali: pane, acqua, erbe amare, verdure semplici, legumi.',
      avoid: 'Carni, cibi ricercati, dolci, alcolici e pranzi festosi.',
      obligation: 'Obbligo universale: digiuno (18-59 anni) e astinenza (dai 14 anni).',
      theology: 'In questo giorno santissimo la Chiesa non celebra l\'Eucaristia, ma digiuna con santo cordoglio ai piedi della Croce, dove Cristo ha versato il Suo sangue per la redenzione del mondo.',
      prayer: 'O Salvatore del mondo, che per la Tua Croce e il Tuo prezioso Sangue ci hai redenti: salvaci e soccorrici, umilmente Te ne preghiamo, o Signore.'
    },
    en: {
      title: 'Good Friday',
      subtitle: 'The Crucifixion and Passion of our Lord Jesus Christ',
      badgeLabel: 'Strict Fast & Abstinence',
      fasting: 'Required: One full meal and two small snacks. Pure water encouraged throughout the day.',
      abstinence: 'Required: Complete abstinence from meat.',
      allowed: 'Simple fasting foods: bread, water, vegetables, fish, grains.',
      avoid: 'Meat, festive foods, alcohol, lavish preparations.',
      obligation: 'Universal obligation: age 18–59 (fasting) and 14+ (abstinence).',
      theology: 'On this most sacred day, the Church does not celebrate the Eucharist, but fasts with holy grief at the foot of the Cross where Christ shed His blood for our redemption.',
      prayer: 'O Saviour of the world, Who by Thy Cross and precious Blood hast redeemed us: save us and help us, we humbly beseech Thee, O Lord.'
    },
    ro: {
      title: 'Vinerea Mare',
      subtitle: 'Răstignirea și Patimile Domnului Nostru Iisus Hristos',
      badgeLabel: 'Post Aspru & Înfrânare',
      fasting: 'Obligatoriu: O singură masă simplă și două gustări modeste. Se recomandă doar apă.',
      abstinence: 'Obligatorie: Înfrânare totală de la carne în duh de tăcere și doliu sfânt.',
      allowed: 'Pâine, apă, verdețuri, legume simple, leguminoase.',
      avoid: 'Carne, mâncăruri alese, dulciuri, alcool și ospețe.',
      obligation: 'Obligație universală: post (18-59 ani) și înfrânare (de la 14 ani).',
      theology: 'În această preasfântă zi, Biserica nu săvârșește Sfânta Liturghie, ci postește cu adâncă străpungere la picioarele Crucii pe care Hristos Și-a vărsat sângele pentru mântuirea noastră.',
      prayer: 'Mântuitorul lumii, Cel ce prin Crucea și scump Sângele Tău ne-ai răscumpărat: mântuiește-ne și ne ajută, cu umilință Te rugăm, Doamne.'
    },
    fr: {
      title: 'Vendredi Saint',
      subtitle: 'La Crucifixion et la Passion de Notre Seigneur Jésus-Christ',
      badgeLabel: 'Jeûne Strict & Abstinence',
      fasting: 'Requis : Un seul repas frugal et deux légères collations. Eau pure encouragée tout au long du jour.',
      abstinence: 'Requise : Abstinence complète de viande dans un esprit de saint recueillement.',
      allowed: 'Aliments simples : pain, eau, légumes, légumineuses.',
      avoid: 'Viande, mets raffinés, alcool et douceurs.',
      obligation: 'Obligation universelle : 18-59 ans (jeûne) et 14 ans et plus (abstinence).',
      theology: 'En ce jour très saint, l\'Église ne célèbre point l\'Eucharistie, mais jeûne au pied de la Croix où le Christ a versé Son sang pour notre rédemption.',
      prayer: 'Sauveur du monde, qui par Ta Croix et Ton Sang précieux nous as rachetés : sauve-nous et viens à notre aide, nous T\'en supplions humblement.'
    },
    es: {
      title: 'Viernes Santo',
      subtitle: 'La Crucifixión y Pasión de Nuestro Señor Jesucristo',
      badgeLabel: 'Ayuno Estricto & Abstinencia',
      fasting: 'Obligatorio: Una sola comida frugal y dos pequeñas colaciones. Se alienta beber agua pura durante el día.',
      abstinence: 'Obligatoria: Abstinencia completa de carne en espíritu de duelo sagrado.',
      allowed: 'Alimentos simples de ayuno: pan, agua, verduras, legumbres.',
      avoid: 'Carne, platos festivos, dulces y alcohol.',
      obligation: 'Obligación universal: 18 a 59 años (ayuno) y 14+ años (abstinencia).',
      theology: 'En este día santísimo la Iglesia no celebra la Eucaristía, sino que ayuna al pie de la Cruz donde Cristo derramó Su sangre por nuestra redención.',
      prayer: '¡Oh Salvador del mundo!, que por Tu Cruz y preciosa Sangre nos redimiste: sálvanos y socórrenos, te lo pedimos humildemente, Señor.'
    },
    pt: {
      title: 'Sexta-feira Santa',
      subtitle: 'A Crucificação e Paixão de Nosso Senhor Jesus Cristo',
      badgeLabel: 'Jejum Estrito & Abstinência',
      fasting: 'Obrigatório: Uma única refeição frugal e duas pequenas colações. Água pura recomendada durante o dia.',
      abstinence: 'Obrigatória: Abstinência completa de carne em espírito de santo luto.',
      allowed: 'Alimentos simples de jejum: pão, água, legumes, verduras.',
      avoid: 'Carne, pratos festivos, doces e bebidas alcoólicas.',
      obligation: 'Obrigação universal: 18 a 59 anos (jejum) e 14+ anos (abstinência).',
      theology: 'Neste dia santíssimo a Igreja não celebra a Eucaristia, mas jejua aos pés da Cruz onde Cristo derramou o Seu sangue pela nossa redenção.',
      prayer: 'Ó Salvador do mundo, que pela Tua Cruz e precioso Sangue nos remiste: salva-nos e socorre-nos, humildemente Te suplicamos, ó Senhor.'
    },
    de: {
      title: 'Karfreitag',
      subtitle: 'Die Kreuzigung und das Leiden unseres Herrn Jesus Christus',
      badgeLabel: 'Strenges Fasten & Abstinenz',
      fasting: 'Vorgeschrieben: Eine einzige einfache Mahlzeit und zwei kleine Stärkungen. Reines Wasser über den Tag empfohlen.',
      abstinence: 'Vorgeschrieben: Vollständige Enthaltsamkeit von Fleisch in heiliger Trauer.',
      allowed: 'Einfache Fastenspeisen: Brot, Wasser, Gemüse, Hülsenfrüchte.',
      avoid: 'Fleisch, festliche Speisen, Alkohol und Süßigkeiten.',
      obligation: 'Universelle Pflicht: 18-59 Jahre (Fasten) und ab 14 Jahren (Abstinenz).',
      theology: 'An diesem heiligsten Tag feiert die Kirche keine Eucharistie, sondern fastet am Fuß des Kreuzes, an dem Christus Sein Blut für unsere Erlösung vergossen hat.',
      prayer: 'O Erlöser der Welt, der Du uns durch Dein Kreuz und Dein kostbares Blut erlöst hast: rette und hilf uns, wir bitten Dich demütig, o Herr.'
    },
    ru: {
      title: 'Страстная Пятница',
      subtitle: 'Распятие и Страсти Господа нашего Иисуса Христа',
      badgeLabel: 'Строгий пост и воздержание',
      fasting: 'Обязательно: Одна скромная трапеза и два малых вкушения. Рекомендуется чистая вода.',
      abstinence: 'Обязательно: Полное воздержание от мяса в духе священного сокрушения.',
      allowed: 'Простая постная пища: хлеб, вода, овощи, бобовые.',
      avoid: 'Мясо, праздничные блюда, сладости и алкоголь.',
      obligation: 'Всеобщий долг: 18-59 лет (пост) и от 14 лет (воздержание).',
      theology: 'В сей святейший день Церковь не совершает Божественной Литургии, но пребывает в строжайшем посте у подножия Креста, на коем Христос пролил Свою кровь за искупление мира.',
      prayer: 'Спасителю мира, Крестом Твоим и Честною Кровью нас искупивший: спаси нас и помози нам, смиренно молим Тя, Господи.'
    },
    la: {
      title: 'Feria Sexta in Parasceve',
      subtitle: 'Crucifixio et Passio Domini Nostri Iesu Christi',
      badgeLabel: 'Ieiunium Stricte & Abstinentia',
      fasting: 'Praescriptum: Una tantum simplex refectio et binae parvae collationes. Pura aqua commendatur.',
      abstinence: 'Praescripta: Totalis abstinentia a carnibus in luctu sacro.',
      allowed: 'Cibi ieiunii simplices: panis, aqua, holera, legumina.',
      avoid: 'Carnes, lautiores epulae, vinum et dulcia.',
      obligation: 'Universalis obligatio: a 18 ad 59 annos (ieiunium) et a 14 annis (abstinentia).',
      theology: 'Hac sanctissima die Ecclesia Eucharistiam non celebrat, sed ad pedes Crucis ieiunat, ubi Christus sanguinem suum pro mundi redemptione effudit.',
      prayer: 'Salvator mundi, qui per Crucem et pretiosum Sanguinem tuum nos redemisti: salva nos et adiuva nos, te humiliter deprecamur, Domine.'
    }
  },

  solemnity_dispensation: {
    it: {
      title: 'Venerdì: Solennità',
      subtitle: 'Astinenza Dispensata a Norma del Diritto (Can. 1251)',
      badgeLabel: 'Dispensa per Solennità',
      fasting: 'Non richiesto.',
      abstinence: 'Dispensata: La carne è lecitamente permessa in onore della Solennità.',
      allowed: 'Tutti i cibi sono permessi con gioioso rendimento di grazie.',
      avoid: 'Gola, ebbrezza ed eccessi mondani.',
      obligation: 'Nessuna penitenza richiesta. La gioia pasquale e il mistero celebrato hanno la precedenza.',
      theology: 'Il Canone 1251 stabilisce esplicitamente che quando una Solennità ricorre di venerdì, l\'obbligo dell\'astinenza decade in onore dell\'alto giorno festivo.',
      prayer: 'Signore, esultiamo nella grazia di questo giorno festivo, lodando la Tua immensa bontà e condividendo i Tuoi doni con cuore lieto.'
    },
    en: {
      title: 'Friday: Solemnity',
      subtitle: 'Abstinence Dispensed by Law (Can. 1251)',
      badgeLabel: 'Solemnity Dispensation',
      fasting: 'Not required.',
      abstinence: 'Dispensed: Meat is permitted in honor of the Solemnity.',
      allowed: 'All foods permitted in joyful thanksgiving.',
      avoid: 'Gluttony and excess.',
      obligation: 'No penance required. The joy of the Lord and the mystery celebrated takes precedence.',
      theology: 'Canon 1251 specifically dictates that whenever a Solemnity falls on a Friday, the penitential obligation is set aside in honor of the high feast.',
      prayer: 'O Lord, we rejoice in the mystery of this holy day, praising Thy goodness and sharing Thy gifts with gladness of heart.'
    },
    ro: {
      title: 'Vineri: Praznic Împărătesc',
      subtitle: 'Dezlegare la Carne conform Dreptului Canonic (Can. 1251)',
      badgeLabel: 'Dezlegare de Praznic',
      fasting: 'Nu este cerut.',
      abstinence: 'Dezlegare: Carnea este îngăduită în cinstea Praznicului.',
      allowed: 'Toate bucatele sunt îngăduite cu bucurie și mulțumire.',
      avoid: 'Îmbuibare și excese lumești.',
      obligation: 'Nicio rânduială de post. Bucuria Praznicului are întâietate.',
      theology: 'Canonul 1251 prevede limpede că atunci când un mare Praznic cade într-o zi de vineri, datoria postirii este ridicată în cinstea sărbătorii.',
      prayer: 'Doamne, ne bucurăm de taina acestei sfinte zile, lăudând bunătatea Ta și împărtășind darurile Tale cu inimă plină de bucurie.'
    },
    fr: {
      title: 'Vendredi : Solennité',
      subtitle: 'Abstinence Dispensée par le Droit (Can. 1251)',
      badgeLabel: 'Dispense de Solennité',
      fasting: 'Non requis.',
      abstinence: 'Dispensée : La viande est permise en l\'honneur de la Solennité.',
      allowed: 'Tous aliments permis dans une joyeuse action de grâce.',
      avoid: 'Gourmandise et excès profanes.',
      obligation: 'Aucune pénitence requise. La joie du Seigneur et le mystère célébré priment.',
      theology: 'Le Canon 1251 dispose expressément que lorsqu\'une Solennité tombe un vendredi, l\'obligation d\'abstinence est levée en l\'honneur de la fête.',
      prayer: 'Seigneur, nous nous réjouissons du mystère de ce jour saint, louant Ta bonté et partageant Tes dons dans l\'allégresse.'
    },
    es: {
      title: 'Viernes: Solemnidad',
      subtitle: 'Abstinencia Dispensada por Derecho (Can. 1251)',
      badgeLabel: 'Dispensa por Solemnidad',
      fasting: 'No requerido.',
      abstinence: 'Dispensada: Se permite carne en honor a la Solemnidad.',
      allowed: 'Todos los alimentos permitidos con gozosa gratitud.',
      avoid: 'Gula y excesos mundanos.',
      obligation: 'No se requiere penitencia. El gozo del misterio celebrado tiene primacía.',
      theology: 'El Canon 1251 estipula expresamente que cuando una Solemnidad coincide en viernes, la obligación de abstinencia queda suspendida.',
      prayer: 'Señor, nos alegramos en el misterio de este día santo, alabando Tu bondad y compartiendo Tus dones con corazón alegre.'
    },
    pt: {
      title: 'Sexta-feira: Solenidade',
      subtitle: 'Abstinência Dispensada por Direito (Cân. 1251)',
      badgeLabel: 'Dispensa por Solenidade',
      fasting: 'Não requerido.',
      abstinence: 'Dispensada: É permitido o consumo de carne em honra da Solenidade.',
      allowed: 'Todos os alimentos permitidos com alegre gratidão.',
      avoid: 'Gula e excessos mundanos.',
      obligation: 'Nenhuma penitência requerida. A alegria do mistério celebrado tem primazia.',
      theology: 'O Cânon 1251 determina expressamente que quando uma Solenidade coincide numa sexta-feira, a obrigação de abstinência é dispensada.',
      prayer: 'Senhor, alegramo-nos no mistério deste dia santo, louvando a Tua bondade e partilhando os Teus dons com coração alegre.'
    },
    de: {
      title: 'Freitag: Hochfest',
      subtitle: 'Abstinenz nach Kirchenrecht aufgehoben (Can. 1251)',
      badgeLabel: 'Hochfest-Dispens',
      fasting: 'Nicht erforderlich.',
      abstinence: 'Aufgehoben: Fleisch ist zu Ehren des Hochfestes erlaubt.',
      allowed: 'Alle Speisen in freudiger Danksagung erlaubt.',
      avoid: 'Völlerei und maßlose Übertreibung.',
      obligation: 'Keine Buße erforderlich. Die Osterfreude und das gefeierte Geheimnis haben Vorrang.',
      theology: 'Can. 1251 legt ausdrücklich fest, dass bei Zusammenfallen eines Hochfestes mit einem Freitag die Abstinenzpflicht entfällt.',
      prayer: 'O Herr, wir frohlocken über das Geheimnis dieses heiligen Tages, loben Deine Güte und teilen Deine Gaben mit frohem Herzen.'
    },
    ru: {
      title: 'Пятница: Торжество',
      subtitle: 'Освобождение от поста по уставу (Кан. 1251)',
      badgeLabel: 'Освобождение по случаю торжества',
      fasting: 'Не требуется.',
      abstinence: 'Разрешено: Мясо дозволено в честь великого торжества.',
      allowed: 'Вся пища разрешена с радостным благодарением.',
      avoid: 'Чревоугодие и мирские излишества.',
      obligation: 'Покаянные предписания отменяются. Радость Господня и празднуемое торжество имеют первенство.',
      theology: 'Канон 1251 постановляет, что если торжество выпадает на пятницу, покаянное воздержание отменяется ради праздника.',
      prayer: 'Господи, радуемся о тайне сего святого дня, прославляя благость Твою и разделяя дары Твои с веселием сердца.'
    },
    la: {
      title: 'Feria Sexta: Sollemnitas',
      subtitle: 'Abstinentia Iure Canonico Dispensata (Can. 1251)',
      badgeLabel: 'Dispensatio pro Sollemnitate',
      fasting: 'Non requiritur.',
      abstinence: 'Dispensata: Carnes in honorem Sollemnitatis permittuntur.',
      allowed: 'Omnes cibi cum laeta gratiarum actione permittuntur.',
      avoid: 'Gula et nimia immoderatio.',
      obligation: 'Nulla paenitentia requiritur. Gaudium Sollemnitatis et mysterium praecellit.',
      theology: 'Canon 1251 expresse statuit quod quotiescumque Sollemnitas in feriam sextam inciderit, obligatio abstinentiae cessat.',
      prayer: 'Domine, in huius sancti diei mysterio laetamur, bonitatem tuam laudantes et dona tua corde hilari participantes.'
    }
  },

  lenten_feria: {
    it: {
      title: 'Feria di Quaresima',
      subtitle: 'Disciplina Quotidiana di Preghiera, Digiuno ed Elemosina',
      badgeLabel: 'Tempo di Quaresima',
      fasting: 'Digiuno volontario o rinuncia calorosamente incoraggiati.',
      abstinence: 'Carne permessa, ma sobrietà e sacrifici personali raccomandati.',
      allowed: 'Pasti temperati e salutari; generosa elemosina per i bisognosi.',
      avoid: 'Stravaganze, pettegolezzi vani, orgoglio e pigrizia spirituale.',
      obligation: 'Atmosfera penitenziale generale dei 40 giorni di preparazione alla Pasqua.',
      theology: 'La Quaresima prepara la Chiesa a celebrare il Mistero Pasquale attraverso il rinnovamento interiore, la preghiera costante, la Parola di Dio e la rinuncia a se stessi.',
      prayer: 'Crea in me un cuore puro, o Dio, e rinnova in me uno spirito saldo. Rafforza il mio cammino nell\'umiltà in questo santo tempo quaresimale.'
    },
    en: {
      title: 'Lenten Season',
      subtitle: 'Daily Discipline of Prayer, Fasting, and Almsgiving',
      badgeLabel: 'Lenten Season',
      fasting: 'Voluntary fasting or restriction of indulgences warmly encouraged.',
      abstinence: 'Meat permitted, but moderation and voluntary sacrifice recommended.',
      allowed: 'Healthy, temperate meals; generous almsgiving to the needy.',
      avoid: 'Extravagance, idle gossip, pride, and spiritual lethargy.',
      obligation: 'General penitential atmosphere of the 40 days.',
      theology: 'Lent prepares the Church to celebrate the Paschal Mystery through interior renewal, prayer, Scripture contemplation, and self-denial.',
      prayer: 'Create in me a clean heart, O God, and renew a right spirit within me. Strengthen my resolve to walk humbly in Thy paths this Lent.'
    },
    ro: {
      title: 'Zi din Postul Mare',
      subtitle: 'Rânduiala Zilnică a Rugăciunii, Postului și Milosteniei',
      badgeLabel: 'Timpul Postului Mare',
      fasting: 'Postul de voie și înfrânarea de la plăceri sunt cald recomandate.',
      abstinence: 'Carnea este îngăduită canonic, dar se recomandă simplitate și jertfă.',
      allowed: 'Mese curate și cumpătate; milostenie darnică pentru cei sărmani.',
      avoid: 'Lux, vorbe deșarte, mândrie și lenevire duhovnicească.',
      obligation: 'Atmosferă duhovnicească generală a celor 40 de zile spre Înviere.',
      theology: 'Postul Mare gătește Biserica pentru Sfânta Înviere prin înnoire lăuntrică, rugăciune stăruitoare, cugetare la Scripturi și lepădare de sine.',
      prayer: 'Inimă curată zidește întru mine, Dumnezeule, și duh drept înnoiește întru cele dinlăuntru ale mele. Întărește-mă să umblu cu smerenie în acest Post.'
    },
    fr: {
      title: 'Férie de Carême',
      subtitle: 'Discipline Quotidienne de Prière, Jeûne et Aumône',
      badgeLabel: 'Temps du Carême',
      fasting: 'Jeûne volontaire ou renoncement chaleureusement encouragés.',
      abstinence: 'Viande permise, mais modération et pénitences recommandées.',
      allowed: 'Repas tempérés et sains ; aumônes généreuses aux nécessiteux.',
      avoid: 'Extravagance, commérages futiles, orgueil et tiédeur spirituelle.',
      obligation: 'Climat pénitentiel général des 40 jours de préparation pascale.',
      theology: 'Le Carême prépare l\'Église à célébrer le Mystère Pascal par le renouveau intérieur, la prière, la Parole et le renoncement.',
      prayer: 'Crée en moi un cœur pur, ô Dieu, et renouvelle en moi un esprit droit. Affermis ma résolution de marcher humblement ce Carême.'
    },
    es: {
      title: 'Feria de Cuaresma',
      subtitle: 'Disciplina Diaria de Oración, Ayuno y Limosna',
      badgeLabel: 'Tiempo de Cuaresma',
      fasting: 'Ayuno voluntario o renuncia vivamente recomendados.',
      abstinence: 'Carne permitida, pero se aconseja sobriedad y sacrificio voluntario.',
      allowed: 'Comidas templadas y sobrias; generosa limosna a los necesitados.',
      avoid: 'Extravagancias, chismes vanos, orgullo y tibieza espiritual.',
      obligation: 'Ambiente penitencial general de los 40 días hacia la Pascua.',
      theology: 'La Cuaresma prepara a la Iglesia para celebrar el Misterio Pascual mediante la renovación interior, la oración y la abnegación.',
      prayer: 'Crea en mí un corazón limpio, oh Dios, y renueva un espíritu recto dentro de mí. Fortalece mis pasos en este tiempo santo.'
    },
    pt: {
      title: 'Féria da Quaresma',
      subtitle: 'Disciplina Diária de Oração, Jejum e Esmola',
      badgeLabel: 'Tempo da Quaresma',
      fasting: 'Jejum voluntário ou renúncia calorosamente recomendados.',
      abstinence: 'Carne permitida, mas sobriedade e renúncia pessoal recomendadas.',
      allowed: 'Refeições moderadas e saudáveis; esmola generosa aos necessitados.',
      avoid: 'Extravagâncias, mexericos fúteis, soberba e apatia espiritual.',
      obligation: 'Ambiente penitencial geral dos 40 dias de preparação pascal.',
      theology: 'A Quaresma prepara a Igreja para celebrar o Mistério Pascal mediante a renovação interior, a oração e a abnegação.',
      prayer: 'Cria em mim um coração puro, ó Deus, e renova em mim um espírito reto. Fortalece o meu propósito de caminhar humildemente nesta Quaresma.'
    },
    de: {
      title: 'Werktag der Fastenzeit',
      subtitle: 'Tägliche Disziplin des Gebets, Fastens und Almosengebens',
      badgeLabel: 'Fastenzeit',
      fasting: 'Freiwilliges Fasten und Verzicht werden herzlich empfohlen.',
      abstinence: 'Fleisch erlaubt, aber Mäßigung und persönliche Opfer empfohlen.',
      allowed: 'Einfache, gesunde Speisen; großzügige Hilfe für Notleidende.',
      avoid: 'Prunksucht, unnützes Geschwätz, Hochmut und geistliche Trägheit.',
      obligation: 'Allgemeine Bußgesinnung der vierzig Tage vor Ostern.',
      theology: 'Die Fastenzeit bereitet die Kirche durch innere Erneuerung, Gebet, Schriftbetrachtung und Selbstverleugnung auf das Pascha-Mysterium vor.',
      prayer: 'Erschaffe in mir ein reines Herz, o Gott, und erneuere einen festen Geist in mir. Stärke meinen Willen, demütig Deinen Pfaden zu folgen.'
    },
    ru: {
      title: 'Седмичный день Великого Поста',
      subtitle: 'Ежедневное делание молитвы, поста и милостыни',
      badgeLabel: 'Время Великого Поста',
      fasting: 'Добровольный пост и воздержание от увеселений приветствуются.',
      abstinence: 'Мясо канонически разрешено, но советуются воздержание и жертвенность.',
      allowed: 'Умеренная здоровая пища; щедрая милостыня нуждающимся.',
      avoid: 'Роскошь, празднословие, гордость и духовная леность.',
      obligation: 'Общий покаянный дух сорока дней приготовления к Пасхе.',
      theology: 'Великий Пост готовит Церковь к Пасхальному Таинству через внутреннее обновление, молитву, чтение Писания и самоотвержение.',
      prayer: 'Сердце чисто созижди во мне, Боже, и дух прав обнови во утробе моей. Укрепи меня ходить смиренно в сей святой пост.'
    },
    la: {
      title: 'Feria Quadragesimae',
      subtitle: 'Disciplina Quotidiana Orationis, Ieiunii et Eleemosynae',
      badgeLabel: 'Tempus Quadragesimae',
      fasting: 'Voluntarium ieiunium vel temperantia magnopere fovetur.',
      abstinence: 'Carnes permissae, sed moderatio et privatum sacrificium commendantur.',
      allowed: 'Salubres ac simplices epulae; larga eleemosyna pauperibus.',
      avoid: 'Luxus, otiosa verba, superbia et torpor spiritualis.',
      obligation: 'Generale paenitentiae spatium quadraginta dierum ante Pascha.',
      theology: 'Quadragesima Ecclesiam ad Paschale Mysterium praeparat per interiorem renovationem, orationem et sui ipsius abnegationem.',
      prayer: 'Cor mundum crea in me, Deus, et spiritum rectum innova in visceribus meis. Confirma gressus meos in humilitate.'
    }
  },

  ember_day: {
    it: {
      title: 'Quattro Tempora (Quatuor Tempora)',
      subtitle: 'Digiuno Stagionale Tradizionale e Preghiera per le Vocazioni',
      badgeLabel: 'Digiuno Quattro Tempora',
      fasting: 'Obbligatorio: Un pasto completo e due piccole refezioni.',
      abstinence: 'Astinenza completa (il sabato astinenza parziale consentita una volta al pasto principale).',
      allowed: 'Cereali, radici, legumi, pesce, uova, latticini.',
      avoid: 'Carni e dolci ricercati.',
      obligation: 'Disciplina latina tradizionale osservata con devozione.',
      theology: 'Le Quattro Tempora santificano le quattro stagioni della natura, ringraziando Dio per i raccolti e pregando per i sacerdoti.',
      prayer: 'O Signore, benedici i frutti della terra e santifica i ministri della Tua Chiesa, affinché in ogni stagione Ti rendiamo lode.'
    },
    en: {
      title: 'Ember Day (Quatuor Tempora)',
      subtitle: 'Quattro Tempora: Traditional Seasonal Fast & Prayer',
      badgeLabel: 'Ember Day Fast',
      fasting: 'Required: One full meal and two collations.',
      abstinence: 'Complete abstinence from meat (partial abstinence on Saturday).',
      allowed: 'Grains, root vegetables, fish, eggs, dairy.',
      avoid: 'Meat (except partial on Saturday) and decadent sweets.',
      obligation: 'Traditional Latin discipline observed by the faithful worldwide.',
      theology: 'Ember Days (Quatuor Tempora) sanctify the four seasons of nature, thanking God for the harvest, praying for holy priests, and renewing spiritual discipline.',
      prayer: 'O Lord, bless the fruits of the earth and sanctify the clergy of Thy Church, that in all seasons Thy people may offer unceasing praise.'
    },
    ro: {
      title: 'Zilele de Post Sezonier (Quatuor Tempora)',
      subtitle: 'Post Tradițional și Rugăciune pentru Roadele Pământului și Cler',
      badgeLabel: 'Postul Quatember',
      fasting: 'Obligatoriu: O masă completă și două gustări.',
      abstinence: 'Înfrânare completă de la carne (sâmbăta parțială).',
      allowed: 'Cereale, legume rădăcinoase, pește, ouă, lactate.',
      avoid: 'Carne și dulciuri rafinate.',
      obligation: 'Rânduială apuseană tradițională de mare sfințenie.',
      theology: 'Sfințește cele patru anotimpuri, aducând mulțumire Domnului pentru roade și rugându-se pentru vrednici slujitori ai altarului.',
      prayer: 'Doamne, binecuvântează roadele pământului și sfințește slujitorii Bisericii Tale, ca în toate vremurile să-Ți aducem laudă.'
    },
    fr: {
      title: 'Quatre-Temps (Quatuor Tempora)',
      subtitle: 'Jeûne Traditionnel des Saisons et Prière pour les Vocations',
      badgeLabel: 'Jeûne des Quatre-Temps',
      fasting: 'Requis : Un repas complet et deux légères collations.',
      abstinence: 'Abstinence complète (partielle le samedi au repas principal).',
      allowed: 'Céréales, légumes racines, poisson, œufs, produits laitiers.',
      avoid: 'Viande et mets sucrés recherchés.',
      obligation: 'Discipline latine traditionnelle observée avec ferveur.',
      theology: 'Les Quatre-Temps sanctifient les saisons, rendant grâce pour les récoltes et implorant de saints prêtres.',
      prayer: 'Seigneur, bénis les fruits de la terre et sanctifie les ministres de Ton Église, afin qu\'en toute saison nous Te louions.'
    },
    es: {
      title: 'Témporas (Quatuor Tempora)',
      subtitle: 'Ayuno Tradicional Estacional y Oración por las Vocaciones',
      badgeLabel: 'Ayuno de Témporas',
      fasting: 'Obligatorio: Una comida completa y dos refrigerios.',
      abstinence: 'Abstinencia completa (el sábado parcial en la comida principal).',
      allowed: 'Cereales, tubérculos, pescado, huevos, lácteos.',
      avoid: 'Carne y dulces refinados.',
      obligation: 'Disciplina tradicional latina guardada por los fieles.',
      theology: 'Las Témporas santifican las estaciones del año, agradeciendo las cosechas y rogando por santos sacerdotes.',
      prayer: 'Oh Señor, bendice los frutos de la tierra y santifica al clero de Tu Iglesia, para que en todo tiempo te alabemos.'
    },
    pt: {
      title: 'Quatro Têmporas (Quatuor Tempora)',
      subtitle: 'Jejum Tradicional das Estações e Oração pelas Vocações',
      badgeLabel: 'Jejum das Têmporas',
      fasting: 'Obrigatório: Uma refeição completa e duas colações.',
      abstinence: 'Abstinência completa (no sábado parcial na refeição principal).',
      allowed: 'Cereais, raízes, peixe, ovos, laticínios.',
      avoid: 'Carne e sobremesas requintadas.',
      obligation: 'Disciplina tradicional latina vivida com fidelidade.',
      theology: 'As Quatro Têmporas santificam as estações, agradecendo a colheita e pedindo santos ministros para o altar.',
      prayer: 'Ó Senhor, abençoa os frutos da terra e santifica os ministros da Tua Igreja, para que sempre Te rendamos graças.'
    },
    de: {
      title: 'Quatembertag (Quatuor Tempora)',
      subtitle: 'Traditionelles jahreszeitliches Fasten und Gebet für Berufungen',
      badgeLabel: 'Quatemberfasten',
      fasting: 'Vorgeschrieben: Eine volle Mahlzeit und zwei Stärkungen.',
      abstinence: 'Vollständige Abstinenz (am Samstag teilweise beim Hauptgericht).',
      allowed: 'Getreide, Wurzelgemüse, Fisch, Eier, Milchprodukte.',
      avoid: 'Fleisch und feine Süßspeisen.',
      obligation: 'Traditionelle römische Disziplin der Gläubigen.',
      theology: 'Quatembertage heiligen die vier Jahreszeiten im Dank für die Ernte und im Gebet um heilige Priester.',
      prayer: 'O Herr, segne die Früchte der Erde und heilige die Diener Deiner Kirche, damit wir Dir allzeit lobsingen.'
    },
    ru: {
      title: 'Времена Года (Quatuor Tempora)',
      subtitle: 'Традиционный сезонный пост и молитва о плодах земли и священстве',
      badgeLabel: 'Сезонный пост',
      fasting: 'Обязательно: Одна полная трапеза и два перекуса.',
      abstinence: 'Полное воздержание (в субботу частичное разрешено в главную трапезу).',
      allowed: 'Крупы, корнеплоды, рыба, яйца, молочные продукты.',
      avoid: 'Мясо и изысканные сладости.',
      obligation: 'Традиционная латинская дисциплина, освящённая веками.',
      theology: 'Освящает времена года, благодаря Господа за земные плоды и испрашивая благодать для пастырей.',
      prayer: 'Господи, благослови плоды земли и освяти священнослужителей Церкви Твоей, да непрестанно славим Тя.'
    },
    la: {
      title: 'Quatuor Tempora',
      subtitle: 'Ieiunium Traditionale et Oratio pro Vocationibus ac Terrae Frugibus',
      badgeLabel: 'Ieiunium Quatuor Temporum',
      fasting: 'Praescriptum: Una solida refectio et binae collationes.',
      abstinence: 'Plena abstinentia (sabbato vero partialis ad principalem refectionem).',
      allowed: 'Fruges, radices, pisces, ova, lacticinia.',
      avoid: 'Carnes et lautiora cupedia.',
      obligation: 'Traditio Romana a saeculis sanctificata.',
      theology: 'Quatuor Tempora anni vices sanctificant, pro frugibus gratias agentes et sanctos sacerdotes implorantes.',
      prayer: 'Domine, terrae fruges benedic et Ecclesiae tuae ministros sanctifica, ut omni tempore te indefessa laude celebremus.'
    }
  },

  vigil: {
    it: {
      title: 'Vigilia Tradizionale',
      subtitle: 'Vigilia di Digiuno e Astinenza in Preparazione alla Festa',
      badgeLabel: 'Digiuno di Vigilia',
      fasting: 'Obbligatorio: Un solo pasto frugale e due piccole refezioni.',
      abstinence: 'Obbligatoria: Totale astinenza dalla carne.',
      allowed: 'Cibi di magro, pesce, verdure, legumi, pane, acqua.',
      avoid: 'Carne e banchetti anticipati fino al giungere del giorno festivo.',
      obligation: 'Pia osservanza tradizionale per disporre l\'anima alla gioia spirituale.',
      theology: 'Il digiuno alla vigilia di una grande solennità affina la purezza dell\'anima, facendo scaturire la gioia esteriore dalla santità interiore.',
      prayer: 'Prepara i nostri cuori, o Signore, ad accogliere lo splendore della festa imminente con coscienza monda e umile adorazione.'
    },
    en: {
      title: 'Traditional Vigil',
      subtitle: 'Traditional Vigil of Fasting and Abstinence',
      badgeLabel: 'Vigil Fast & Abstinence',
      fasting: 'Required: One full meal, two collations.',
      abstinence: 'Required: Abstinence from meat.',
      allowed: 'Fasting foods, fish, vegetables, fruits, bread.',
      avoid: 'Meat, festive meals until the feast arrives.',
      obligation: 'Traditional vigil observance preparing the soul for solemn joy.',
      theology: 'Fasting on the eve of a great feast sharpens the appetite of the soul, ensuring that our exterior joy on the feast day flows from interior purity.',
      prayer: 'Prepare our hearts, O Lord, to welcome the splendor of the upcoming feast with cleansed consciences and humble adoration.'
    },
    ro: {
      title: 'Ajun Tradițional',
      subtitle: 'Post și Înfrânare în Ajunul Marei Sărbători',
      badgeLabel: 'Post de Ajun',
      fasting: 'Obligatoriu: O masă completă și două gustări modeste.',
      abstinence: 'Obligatorie: Înfrânare totală de la carne.',
      allowed: 'Mâncăruri de post, pește, legume, fructe, pâine.',
      avoid: 'Carne și ospețe înainte de sosirea praznicului.',
      obligation: 'Pregătire sufletească prin rugăciune și asceză.',
      theology: 'Postul din ajun pregătește inima să primească harul și lumina marelui praznic.',
      prayer: 'Gătește inimile noastre, Doamne, să întâmpinăm slava sărbătorii ce vine cu suflet curat și smerită închinare.'
    },
    fr: {
      title: 'Vigile Traditionnelle',
      subtitle: 'Vigile de Jeûne et d\'Abstinence pour la Solennité',
      badgeLabel: 'Jeûne de Vigile',
      fasting: 'Requis : Un repas frugal et deux légères collations.',
      abstinence: 'Requise : Abstinence de viande.',
      allowed: 'Aliments maigres, poisson, légumes, pain, fruits.',
      avoid: 'Viande et repas festifs avant le jour de fête.',
      obligation: 'Observance traditionnelle disposant le cœur à la sainte joie.',
      theology: 'Le jeûne à la veille d\'une fête épure l\'âme pour que la joie découle d\'un cœur pur.',
      prayer: 'Prépare nos cœurs, Seigneur, à accueillir la clarté de la fête avec une conscience pure.'
    },
    es: {
      title: 'Vigilia Tradicional',
      subtitle: 'Vigilia de Ayuno y Abstinencia en Espera de la Fiesta',
      badgeLabel: 'Ayuno de Vigilia',
      fasting: 'Obligatorio: Una sola comida fuerte y dos refrigerios.',
      abstinence: 'Obligatoria: Abstinencia de carne.',
      allowed: 'Comidas de vigilia, pescado, verduras, frutas, pan.',
      avoid: 'Carne y festejos antes de la fiesta.',
      obligation: 'Disposición del alma mediante la pureza interior.',
      theology: 'El ayuno en la víspera afina el deseo del alma para gozar plenamente de la gracia festiva.',
      prayer: 'Prepara nuestros corazones, Señor, para recibir la fiesta santa con reverencia y amor.'
    },
    pt: {
      title: 'Vigília Tradicional',
      subtitle: 'Vigília de Jejum e Abstinência em Espera da Festa',
      badgeLabel: 'Jejum de Vigília',
      fasting: 'Obrigatório: Uma refeição principal e duas pequenas colações.',
      abstinence: 'Obrigatória: Abstinência de carne.',
      allowed: 'Alimentos simples, peixe, legumes, frutas, pão.',
      avoid: 'Carne e festejos prematuros.',
      obligation: 'Tradição venerável que prepara a alma para o júbilo.',
      theology: 'O jejum na véspera purifica os afetos para que a festa resplandeça em santidade.',
      prayer: 'Prepara os nossos corações, ó Senhor, para acolher a santa solenidade com alma lavada.'
    },
    de: {
      title: 'Traditionelle Vigil',
      subtitle: 'Fasten und Enthaltsamkeit am Vorabend des Hochfestes',
      badgeLabel: 'Vigilfasten',
      fasting: 'Vorgeschrieben: Eine Mahlzeit und zwei Stärkungen.',
      abstinence: 'Vorgeschrieben: Verzicht auf Fleisch.',
      allowed: 'Fastenspeisen, Fisch, Gemüse, Obst, Brot.',
      avoid: 'Fleisch und vorzeitige Festgelage.',
      obligation: 'Traditionelle Vorbereitung der Seele auf das Festgeheimnis.',
      theology: 'Das Fasten am Vorabend reinigt das Verlangen der Seele nach himmlischen Gütern.',
      prayer: 'Bereite unsere Herzen, o Herr, den Glanz des Festes in reiner Demut zu empfangen.'
    },
    ru: {
      title: 'Традиционный Навечерие',
      subtitle: 'Пост и воздержание в преддверии праздника',
      badgeLabel: 'Пост в навечерие',
      fasting: 'Обязательно: Одно вкушение пищи и малые перекусы.',
      abstinence: 'Обязательно: Полное воздержание от мяса.',
      allowed: 'Постная пища, рыба, овощи, хлеб, вода.',
      avoid: 'Мясо и празднование до наступления торжества.',
      obligation: 'Благоговейное приготовление души к радости торжества.',
      theology: 'Пост в навечерие утончает чувства, дабы праздничная радость проистекала из сердечной чистоты.',
      prayer: 'Уготовь сердца наши, Господи, встретить благодать праздника с чистой совестью.'
    },
    la: {
      title: 'Vigilia Traditionalis',
      subtitle: 'Ieiunium et Abstinentia in Pervigilio Festi',
      badgeLabel: 'Ieiunium Vigiliae',
      fasting: 'Praescriptum: Una refectio et binae collationes.',
      abstinence: 'Praescripta: Totalis abstinentia a carnibus.',
      allowed: 'Cibi ieiunales, pisces, holera, fruges, panis.',
      avoid: 'Carnes et praematura convivia.',
      obligation: 'Pia dispositio animarum ad spirituale gaudium.',
      theology: 'Ieiunium in pervigilio festi animam purgat, ut laetitia ex interna puritate effulgeat.',
      prayer: 'Praepara corda nostra, Domine, ad venturi festi splendorem munda conscientia recipiendum.'
    }
  },

  holy_saturday: {
    it: {
      title: 'Sabato Santo',
      subtitle: 'Grande Silenzio al Sepolcro fino alla Veglia Pasquale',
      badgeLabel: 'Digiuno Stretto & Silenzio',
      fasting: 'Un solo pasto frugale; silenzio contemplativo e raccoglimento dinanzi alla Tomba.',
      abstinence: 'Astinenza completa dalle carni.',
      allowed: 'Pane semplice, acqua, verdure crude o lesse, brodi vegetali.',
      avoid: 'Carni, distrazioni rumorose e mondanità.',
      obligation: 'Digiuno tradizionale osservato fino alla Veglia di Pasqua.',
      theology: 'Cristo riposa nel Sepolcro. L\'intera creazione tace nel dolore e nell\'attesa ardente della Risurrezione.',
      prayer: 'Signore Gesù, sepolto nella roccia, seppellisci con Te i nostri peccati e risvegliaci a vita nuova nella luce della Pasqua.'
    },
    en: {
      title: 'Holy Saturday',
      subtitle: 'Traditional Fast of the Great Silence until Easter Vigil',
      badgeLabel: 'Strict Fast & Great Silence',
      fasting: 'One full meal; profound silence and contemplation at the Tomb.',
      abstinence: 'Abstinence from meat.',
      allowed: 'Simple bread, water, broth, vegetables.',
      avoid: 'Meat and noisy entertainment.',
      obligation: 'Traditional fast observed until the Easter Vigil.',
      theology: 'Christ rests in the Sepulchre. The entire universe holds its breath in mourning, awaiting the resurrection.',
      prayer: 'Lord Jesus, as Thou didst lie buried in the rock, bury our sins with Thee, and raise us up into newness of life.'
    },
    ro: {
      title: 'Sâmbăta Mare',
      subtitle: 'Marea Tăcere la Mormânt până la Slujba Învierii',
      badgeLabel: 'Post Aspru & Mare Tăcere',
      fasting: 'O singură masă simplă; reculegere adâncă la Mormântul Domnului.',
      abstinence: 'Înfrânare desăvârșită de la carne.',
      allowed: 'Pâine curată, apă, legume fierte sau crude, compot.',
      avoid: 'Carne, vorbe deșarte și zgomote lumești.',
      obligation: 'Postire adâncă până la Noaptea de Înviere.',
      theology: 'Trupul lui Hristos odihnește în mormânt, iar sufletul Său s-a pogorât la iad spre a slobozi pe cei legați.',
      prayer: 'Doamne Iisuse, Cel ce Te-ai odihnit în mormânt, îngroapă păcatele noastre și ne înviază întru lumina Învierii Tale.'
    },
    fr: {
      title: 'Samedi Saint',
      subtitle: 'Le Grand Silence au Tombeau jusqu\'à la Veillée Pascale',
      badgeLabel: 'Jeûne Strict & Grand Silence',
      fasting: 'Un repas frugal ; profond recueillement et silence auprès du Sépulcre.',
      abstinence: 'Abstinence complète de viande.',
      allowed: 'Pain simple, eau, légumes, bouillons clairs.',
      avoid: 'Viande et distractions profanes.',
      obligation: 'Jeûne traditionnel gardé jusqu\'à la Veillée Pascale.',
      theology: 'Le Christ repose au Tombeau. L\'univers retient son souffle dans l\'attente de la Résurrection.',
      prayer: 'Seigneur Jésus, enseveli dans le roc, ensevelis nos péchés avec Toi et relève-nous dans la nouveauté de la vie.'
    },
    es: {
      title: 'Sábado Santo',
      subtitle: 'El Gran Silencio junto al Sepulcro hasta la Vigilia Pascual',
      badgeLabel: 'Ayuno Estricto & Silencio',
      fasting: 'Una sola comida frugal; silencio y contemplación ante el Sepulcro.',
      abstinence: 'Abstinencia completa de carne.',
      allowed: 'Pan simple, agua, caldos de verduras, hortalizas.',
      avoid: 'Carne y diversiones mundanas.',
      obligation: 'Ayuno tradicional hasta la Solemne Vigilia Pascual.',
      theology: 'Cristo descansa en el Sepulcro mientras la creación aguarda con fervor la victoria sobre la muerte.',
      prayer: 'Señor Jesús, que yaciste en el sepulcro, sepulta nuestras culpas y levántanos a vida nueva.'
    },
    pt: {
      title: 'Sábado Santo',
      subtitle: 'O Grande Silêncio junto ao Sepulcro até à Vigília Pascal',
      badgeLabel: 'Jejum Estrito & Silêncio',
      fasting: 'Uma refeição frugal; silêncio contemplativo junto ao Sepulcro.',
      abstinence: 'Abstinência completa de carne.',
      allowed: 'Pão simples, água, caldos de legumes, verduras.',
      avoid: 'Carne e distrações ruidosas.',
      obligation: 'Jejum tradicional guardado até à Vigília Pascal.',
      theology: 'Cristo descansa no Sepulcro enquanto a Igreja aguarda em recolhimento a aurora da Ressurreição.',
      prayer: 'Senhor Jesus, sepultado na rocha, sepulta os nossos pecados e ressuscita-nos para a vida eterna.'
    },
    de: {
      title: 'Karsamstag',
      subtitle: 'Die große Grabesruhe bis zur Feier der Osternacht',
      badgeLabel: 'Strenges Fasten & Grabesruhe',
      fasting: 'Eine einfache Mahlzeit; ehrfürchtige Stille und Betrachtung am Grab.',
      abstinence: 'Enthaltsamkeit von Fleisch.',
      allowed: 'Einfaches Brot, Wasser, Gemüsebrühe, Gemüse.',
      avoid: 'Fleisch und laute weltliche Vergnügungen.',
      obligation: 'Traditionelles Fasten bis zur Feier der Osternacht.',
      theology: 'Christus ruht im Grab. Die Schöpfung verharrt in Stille vor dem Aufstrahlen des Osterlichts.',
      prayer: 'Herr Jesus, im Felsen begraben, begrabe unsere Sünden mit Dir und erwecke uns zu neuem Leben.'
    },
    ru: {
      title: 'Великая Суббота',
      subtitle: 'Великое Молчание у Гроба Господня до Пасхальной Заутрени',
      badgeLabel: 'Строгий пост и священное молчание',
      fasting: 'Одно вкушение простой пищи; глубокое благоговение перед Плащаницей.',
      abstinence: 'Воздержание от мяса и скоромной пищи.',
      allowed: 'Простой хлеб, вода, овощи, соки.',
      avoid: 'Мясо, шумные развлечения и суета.',
      obligation: 'Священный пост до Пасхального богослужения.',
      theology: 'Да молчит всякая плоть человеча: Христос плотию почивает во гробе, сокрушая вереи адовы.',
      prayer: 'Господи Иисусе, сошедший во гроб, спогреби с Собою грехи наши и воскреси нас к вечной жизни.'
    },
    la: {
      title: 'Sabbatum Sanctum',
      subtitle: 'Magnum Silentium ad Sepulcrum usque ad Vigiliam Paschalem',
      badgeLabel: 'Ieiunium Stricte & Silentium',
      fasting: 'Una simplex refectio; altissimum silentium et contemplatio ad Sepulcrum.',
      abstinence: 'Abstinentia a carnibus.',
      allowed: 'Panis simplex, aqua, legumina, iuscula herbarum.',
      avoid: 'Carnes et strepitus saeculares.',
      obligation: 'Traditionale ieiunium usque ad Vigiliam Paschalem.',
      theology: 'Christus in Sepulcro quiescit. Universa creatura luget, resurrectionis auroram exspectans.',
      prayer: 'Domine Iesu, in petra sepulte, sepeli nobiscum peccata nostra, et ad novitatem vitae nos resuscita.'
    }
  },

  traditional_lenten_weekday: {
    it: {
      title: 'Feria di Quaresima (Digiuno Tradizionale)',
      subtitle: 'Digiuno Quotidiano Tradizionale del 1962',
      badgeLabel: 'Digiuno Quotidiano',
      fasting: 'Obbligatorio: Un pasto completo a mezzogiorno o la sera, più due piccole refezioni.',
      abstinence: 'Carne consentita una sola volta al pasto principale.',
      allowed: 'Cibi semplici, pesce, verdure, legumi, pane.',
      avoid: 'Spuntini fuori pasto e doppi pasti completi.',
      obligation: 'Regola tradizionale dei 40 giorni di Quaresima.',
      theology: 'I fedeli emulano il digiuno di Mosè, di Elia e di Cristo nel deserto, mortificando la carne per vivificare lo spirito.',
      prayer: 'O Dio, che purifichi la Tua Chiesa con l\'annuale osservanza della Quaresima, concedici di compiere con buone opere quanto domandiamo nel digiuno.'
    },
    en: {
      title: 'Lenten Weekday (Traditional Fast)',
      subtitle: '1962 Traditional Lenten Daily Fast',
      badgeLabel: 'Daily Lenten Fast',
      fasting: 'Required: One full meal at midday or evening, plus two small collations.',
      abstinence: 'Meat allowed once at the primary meal.',
      allowed: 'Simple foods, fish, vegetables, pulses, bread.',
      avoid: 'Snacking between meals, second full meals.',
      obligation: 'Traditional Latin canonical rule across the 40 days of Lent.',
      theology: 'The faithful emulate the desert fast of Moses, Elijah, and the Lord Jesus Christ, putting the flesh to death for the life of the spirit.',
      prayer: 'O God, who purifiest Thy Church by the yearly observance of Lent: grant unto Thy household that what they seek to obtain from Thee by fasting, they may follow up by good works.'
    },
    ro: {
      title: 'Zi Ferială din Post (Rânduială Tradițională)',
      subtitle: 'Postul Zilnic Tradițional din 1962',
      badgeLabel: 'Post Zilnic Tradițional',
      fasting: 'Obligatoriu: O masă completă la amiază sau seară și două gustări.',
      abstinence: 'Carnea este îngăduită o singură dată la masa principală.',
      allowed: 'Bucate simple, legume, leguminoase, pâine.',
      avoid: 'Mâncare între mese și ospețe îmbelșugate.',
      obligation: 'Rânduială apuseană istorică pentru toate zilele de rând.',
      theology: 'Urmând pilda proorocilor și a Mântuitorului, omorâm patimile trupului pentru înnoirea duhului.',
      prayer: 'Dumnezeule, Cel ce curățești Biserica Ta prin postul Quaresimei, dăruiește-ne să împlinim prin fapte bune ceea ce cerem prin post.'
    },
    fr: {
      title: 'Férie de Carême (Jeûne Traditionnel)',
      subtitle: 'Jeûne Quotidien Traditionnel de 1962',
      badgeLabel: 'Jeûne Quotidien',
      fasting: 'Requis : Un repas complet à midi ou le soir, et deux petites collations.',
      abstinence: 'Viande permise une seule fois au repas principal.',
      allowed: 'Mets simples, légumes, céréales, pain.',
      avoid: 'Grignotage entre les repas et seconds repas complets.',
      obligation: 'Règle canonique traditionnelle des 40 jours.',
      theology: 'Les fidèles imitent le jeûne de Moïse, d\'Élie et du Christ pour la sanctification de l\'âme.',
      prayer: 'Ô Dieu, qui purifies Ton Église par le Carême, accorde-nous d\'accomplir en bonnes œuvres ce que nous demandons dans le jeûne.'
    },
    es: {
      title: 'Feria de Cuaresma (Ayuno Tradicional)',
      subtitle: 'Ayuno Diario Tradicional de 1962',
      badgeLabel: 'Ayuno Diario Tradicional',
      fasting: 'Obligatorio: Una sola comida fuerte al mediodía o tarde, y dos refrigerios.',
      abstinence: 'Carne permitida una vez en la comida principal.',
      allowed: 'Comidas sencillas, verduras, legumbres, pan.',
      avoid: 'Comer entre horas y segundas comidas copiosas.',
      obligation: 'Regla canónica tradicional para los 40 días.',
      theology: 'Los fieles imitan los ayunos bíblicos en el desierto para elevar el espíritu hacia Dios.',
      prayer: 'Oh Dios, que purificas a Tu Iglesia con la Cuaresma, concédenos testimoniar con buenas obras los frutos de nuestro ayuno.'
    },
    pt: {
      title: 'Féria da Quaresma (Jejum Tradicional)',
      subtitle: 'Jejum Diário Tradicional de 1962',
      badgeLabel: 'Jejum Diário Tradicional',
      fasting: 'Obrigatório: Uma única refeição principal e duas pequenas colações.',
      abstinence: 'Carne permitida uma vez na refeição principal.',
      allowed: 'Comidas frugais, legumes, cereais, pão.',
      avoid: 'Comer fora das refeições e banquetes.',
      obligation: 'Disciplina clássica ao longo dos 40 dias.',
      theology: 'Os fiéis mortificam o corpo para que o espírito viva para Deus, a exemplo de Cristo no deserto.',
      prayer: 'Ó Deus, que purificas a Tua Igreja pela Quaresma, concede-nos praticar em obras santas o que buscamos pelo jejum.'
    },
    de: {
      title: 'Fastenwerktag (Traditionelles Fasten)',
      subtitle: 'Traditionelles tägliches Fasten von 1962',
      badgeLabel: 'Tägliches Fasten',
      fasting: 'Vorgeschrieben: Eine volle Mahlzeit mittags oder abends und zwei Stärkungen.',
      abstinence: 'Fleisch einmal bei der Hauptmahlzeit gestattet.',
      allowed: 'Einfache Speisen, Gemüse, Hülsenfrüchte, Brot.',
      avoid: 'Zwischenmahlzeiten und zweite volle Mahlzeiten.',
      obligation: 'Klassische römische Kanonregel der vierzig Tage.',
      theology: 'Die Gläubigen folgen dem Wüstenfasten Christi nach zur Läuterung von Geist und Leib.',
      prayer: 'O Gott, der Du Deine Kirche durch die Fastenzeit reinigst: gewähre uns, die Früchte des Fastens in guten Werken zu bezeugen.'
    },
    ru: {
      title: 'Будний день Четыредесятницы (Традиционный пост)',
      subtitle: 'Традиционный ежедневный пост 1962 года',
      badgeLabel: 'Ежедневный пост',
      fasting: 'Обязательно: Одно полное вкушение пищи в полдень или вечером и два малых вкушения.',
      abstinence: 'Мясо дозволено один раз в главную трапезу.',
      allowed: 'Простая пища, овощи, бобовые, хлеб.',
      avoid: 'Перекусы между трапезами и лишние обильные блюда.',
      obligation: 'Традиционное правило на все 40 дней поста.',
      theology: 'Верующие подражают сорокадневному посту Моисея, Илии и Самого Христа, побеждая страсти.',
      prayer: 'Боже, очищающий Церковь Твою постом, даруй нам усердием в добрых делах явить плоды воздержания.'
    },
    la: {
      title: 'Feria Quadragesimae (Ieiunium Traditionale)',
      subtitle: 'Ieiunium Quotidianum Traditionale Missalis 1962',
      badgeLabel: 'Ieiunium Quotidianum',
      fasting: 'Praescriptum: Una solida refectio meridie vel vespere, duabus minoribus collationibus.',
      abstinence: 'Carnes semel tantum ad principalem refectionem permissae.',
      allowed: 'Cibi simplices, legumina, fruges, holera, panis.',
      avoid: 'Cibi extra refectiones sumpti et iterata convivia.',
      obligation: 'Regula canonica traditionalis per quadraginta dies.',
      theology: 'Fideles Christi ieiunium in deserto aemulantur, carnem morti tradentes ut spiritus vivat.',
      prayer: 'Deus, qui Ecclesiam tuam annua Quadragesimali observatione purificas: praesta familiae tuae, ut quod a te obtinere abstinendo nititur, hoc bonis operibus exsequatur.'
    }
  },

  traditional_lenten_friday: {
    it: {
      title: 'Venerdì di Quaresima (Digiuno e Astinenza Tradizionale)',
      subtitle: 'Doppia Disciplina Penitenziale del 1962',
      badgeLabel: 'Digiuno & Astinenza Stretta',
      fasting: 'Obbligatorio: Un solo pasto completo al giorno e due piccole refezioni.',
      abstinence: 'Obbligatoria: Completa astinenza dalla carne.',
      allowed: 'Pesce, uova, formaggi, cereali, legumi, verdure, frutta.',
      avoid: 'Tutte le carni animali e dolciumi.',
      obligation: 'Disciplina universale classica per tutti i fedeli.',
      theology: 'Venerdì di Quaresima unisce la mortificazione della quantità a quella della qualità in onore della Croce di Cristo.',
      prayer: 'Ti adoriamo, o Cristo, e Ti benediciamo, perché con la Tua Santa Croce hai redento il mondo.'
    },
    en: {
      title: 'Lenten Friday (Traditional Fast & Abstinence)',
      subtitle: 'Dual Penitential Discipline of 1962',
      badgeLabel: 'Strict Fast & Abstinence',
      fasting: 'Required: One full meal at midday or evening, plus two small collations.',
      abstinence: 'Required: Complete abstinence from meat.',
      allowed: 'Fish, seafood, dairy, eggs, vegetables, legumes, fruits.',
      avoid: 'All meats from land animals and poultry.',
      obligation: 'Binding on all faithful age 14 and older.',
      theology: 'Combines bodily hunger with meat abstinence to honor the flesh of the Son of God offered for our redemption.',
      prayer: 'We adore Thee, O Christ, and we praise Thee, because by Thy Holy Cross Thou hast redeemed the world.'
    },
    ro: {
      title: 'Vineri din Post (Post și Înfrânare Tradițională)',
      subtitle: 'Dublă Rânduială din 1962',
      badgeLabel: 'Post Aspru & Înfrânare',
      fasting: 'Obligatoriu: O singură masă completă și două gustări.',
      abstinence: 'Obligatorie: Înfrânare deplină de la carne.',
      allowed: 'Pește, lactate, ouă, legume, leguminoase, fructe.',
      avoid: 'Toate tipurile de carne.',
      obligation: 'Rânduială clasică respectată cu sfințenie.',
      theology: 'Îmbină postul cantitativ cu oprirea de la carne în cinstea Răstignirii Domnului.',
      prayer: 'Ne închinăm Ție, Hristoase, și Te binecuvântăm, căci prin Sfânta Ta Cruce ai răscumpărat lumea.'
    },
    fr: {
      title: 'Vendredi de Carême (Jeûne et Abstinence Traditionnels)',
      subtitle: 'Double Discipline Pénitentielle de 1962',
      badgeLabel: 'Jeûne Strict & Abstinence',
      fasting: 'Requis : Un repas complet et deux légères collations.',
      abstinence: 'Requise : Abstinence totale de viande.',
      allowed: 'Poisson, produits laitiers, œufs, légumes, fruits.',
      avoid: 'Toute viande animale et volaille.',
      obligation: 'Obligation canonique classique dès 14 ans.',
      theology: 'Ce jour réunit le jeûne corporel et le refus de la viande en mémoire du Calvaire.',
      prayer: 'Nous T\'adorons, ô Christ, et nous Te bénissons, car par Ta Sainte Croix Tu as racheté le monde.'
    },
    es: {
      title: 'Viernes de Cuaresma (Ayuno y Abstinencia Tradicional)',
      subtitle: 'Doble Disciplina Penitencial de 1962',
      badgeLabel: 'Ayuno Estricto & Abstinencia',
      fasting: 'Obligatorio: Una sola comida completa y dos refrigerios.',
      abstinence: 'Obligatoria: Abstinencia completa de carne.',
      allowed: 'Pescado, lácteos, huevos, legumbres, verduras.',
      avoid: 'Toda clase de carnes y aves.',
      obligation: 'Obligatorio para los fieles a partir de los 14 años.',
      theology: 'Une el hambre voluntaria con la abstinencia para honrar el sacrificio redentor de Cristo.',
      prayer: 'Te adoramos, oh Cristo, y te bendecimos, que por tu Santa Cruz redimiste al mundo.'
    },
    pt: {
      title: 'Sexta-feira da Quaresma (Jejum e Abstinência Tradicional)',
      subtitle: 'Dupla Disciplina Penitencial de 1962',
      badgeLabel: 'Jejum Estrito & Abstinência',
      fasting: 'Obrigatório: Uma refeição principal e duas pequenas colações.',
      abstinence: 'Obrigatória: Abstinência completa de carne.',
      allowed: 'Peixe, laticínios, ovos, legumes, frutas.',
      avoid: 'Todas as carnes e aves.',
      obligation: 'Disciplina tradicional para todos os fiéis.',
      theology: 'Junta o jejum do estômago à abstenção de carne em honra da Paixão do Redentor.',
      prayer: 'Nós Vos adoramos, ó Cristo, e Vos bendizemos, porque pela Vossa Santa Cruz remistes o mundo.'
    },
    de: {
      title: 'Fastenfreitag (Traditionelles Fasten & Abstinenz)',
      subtitle: 'Zweifache Bußordnung von 1962',
      badgeLabel: 'Strenges Fasten & Abstinenz',
      fasting: 'Vorgeschrieben: Eine volle Mahlzeit und zwei Stärkungen.',
      abstinence: 'Vorgeschrieben: Vollständiger Verzicht auf Fleisch.',
      allowed: 'Fisch, Milchprodukte, Eier, Gemüse, Hülsenfrüchte.',
      avoid: 'Alles Fleisch von warmblütigen Tieren.',
      obligation: 'Verbindlich für alle Gläubigen ab 14 Jahren.',
      theology: 'Vereint leibliches Fasten und Fleischverzicht zur Ehre des Kreuzes Christi.',
      prayer: 'Wir beten Dich an, o Christus, und preisen Dich, denn durch Dein heiliges Kreuz hast Du die Welt erlöst.'
    },
    ru: {
      title: 'Пятница Четыредесятницы (Традиционный пост и воздержание)',
      subtitle: 'Двойная покаянная дисциплина 1962 года',
      badgeLabel: 'Строгий пост и воздержание',
      fasting: 'Обязательно: Одно полное вкушение пищи и два малых вкушения.',
      abstinence: 'Обязательно: Полное воздержание от мяса.',
      allowed: 'Рыба, молочные продукты, яйца, овощи, бобовые.',
      avoid: 'Все виды мяса и птицы.',
      obligation: 'Обязательно для всех верующих от 14 лет.',
      theology: 'Соединяет ограничение в пище с отказом от мяса в память о Голгофской Жертве.',
      prayer: 'Покланяемся Ти, Христе, и благословим Тя, яко Святым Крестом Твоим искупил еси мир.'
    },
    la: {
      title: 'Feria Sexta Quadragesimae (Ieiunium et Abstinentia)',
      subtitle: 'Duplex Disciplina Paenitentialis Missalis 1962',
      badgeLabel: 'Ieiunium Stricte & Abstinentia',
      fasting: 'Praescriptum: Una solida refectio et binae parvae collationes.',
      abstinence: 'Praescripta: Totalis abstinentia a carnibus.',
      allowed: 'Pisces, lacticinia, ova, legumina, fruges, poma.',
      avoid: 'Omnes carnes animalium terrestrium et volatilium.',
      obligation: 'Fideles a 14 annis tenentur.',
      theology: 'Ieiunium corporis et abstinentiam a carnibus coniungit in honorem Sanctae Crucis.',
      prayer: 'Adoramus te, Christe, et benedicimus tibi, quia per sanctam Crucem tuam redemisti mundum.'
    }
  },

  traditional_lenten_saturday: {
    it: {
      title: 'Sabato di Quaresima (Digiuno e Astinenza Tradizionale)',
      subtitle: 'Disciplina Quaresimale del Sabato (1962)',
      badgeLabel: 'Digiuno & Astinenza',
      fasting: 'Obbligatorio: Un solo pasto completo e due piccole refezioni.',
      abstinence: 'Obbligatoria: Completa astinenza dalla carne.',
      allowed: 'Pesce, legumi, verdure, cereali, uova, formaggi.',
      avoid: 'Tutte le carni animali.',
      obligation: 'Tradizione classica tridentina per tutti i sabati di Quaresima.',
      theology: 'Il sabato quaresimale prepara il cuore alla Domenica, Pasqua settimanale, mantenendo vivo il fuoco dell\'ascesi.',
      prayer: 'Signore Dio, concedi al Tuo popolo di vivere con santa vigilanza questo sabato, affinché possiamo contemplare con gioia il mistero del Giorno del Signore.'
    },
    en: {
      title: 'Lenten Saturday (Traditional Fast & Abstinence)',
      subtitle: '1962 Lenten Saturday Discipline',
      badgeLabel: 'Fast & Abstinence',
      fasting: 'Required: One full meal, plus two small collations.',
      abstinence: 'Required: Complete abstinence from meat.',
      allowed: 'Fish, seafood, dairy, eggs, vegetables, pulses.',
      avoid: 'Meat from mammals and poultry.',
      obligation: 'Traditional Latin rule for all Saturdays of Lent.',
      theology: 'Prepares the soul for the Sunday celebration of the Resurrection through continued self-denial.',
      prayer: 'Lord God, grant Thy people to spend this Saturday in holy vigilance, that we may enter into the joy of the Lord\'s Day.'
    },
    ro: {
      title: 'Sâmbătă din Post (Post și Înfrânare Tradițională)',
      subtitle: 'Rânduiala Sâmbetelor din Postul Mare (1962)',
      badgeLabel: 'Post & Înfrânare',
      fasting: 'Obligatoriu: O masă completă și două gustări.',
      abstinence: 'Obligatorie: Înfrânare completă de la carne.',
      allowed: 'Pește, legume, leguminoase, ouă, lactate.',
      avoid: 'Carne de orice fel.',
      obligation: 'Rânduială istorică a sâmbetelor din Quaresimă.',
      theology: 'Pregătește inima pentru bucuria Duminicii Învierii prin stăruință în rugăciune.',
      prayer: 'Doamne Dumnezeul nostru, dăruiește-ne să petrecem această sâmbătă cu trezvie duhovnicească, spre a primi harul Zilei Domnului.'
    },
    fr: {
      title: 'Samedi de Carême (Jeûne et Abstinence Traditionnels)',
      subtitle: 'Discipline des Samedis de Carême (1962)',
      badgeLabel: 'Jeûne & Abstinence',
      fasting: 'Requis : Un repas complet et deux légères collations.',
      abstinence: 'Requise : Abstinence complète de viande.',
      allowed: 'Poisson, légumes, céréales, œufs, produits laitiers.',
      avoid: 'Toute viande animale.',
      obligation: 'Règle traditionnelle des samedis de Carême.',
      theology: 'Prépare l\'âme au Dimanche, Pâque hebdomadaire, dans le recueillement.',
      prayer: 'Seigneur Dieu, accorde à Ton peuple de vivre ce samedi dans la sainte vigilance pour accueillir le Jour du Seigneur.'
    },
    es: {
      title: 'Sábado de Cuaresma (Ayuno y Abstinencia Tradicional)',
      subtitle: 'Disciplina de los Sábados de Cuaresma (1962)',
      badgeLabel: 'Ayuno & Abstinencia',
      fasting: 'Obligatorio: Una sola comida fuerte y dos refrigerios.',
      abstinence: 'Obligatoria: Abstinencia completa de carne.',
      allowed: 'Pescado, verduras, legumbres, huevos, lácteos.',
      avoid: 'Toda clase de carne.',
      obligation: 'Regla tradicional para los sábados cuaresmales.',
      theology: 'Dispone el alma para la celebración dominical de la Resurrección.',
      prayer: 'Señor Dios, concede a Tu pueblo vivir este sábado en santa vigilia para entrar en el gozo del Día del Señor.'
    },
    pt: {
      title: 'Sábado da Quaresma (Jejum e Abstinência Tradicional)',
      subtitle: 'Disciplina dos Sábados da Quaresma (1962)',
      badgeLabel: 'Jejum & Abstinência',
      fasting: 'Obrigatório: Uma refeição principal e duas pequenas colações.',
      abstinence: 'Obrigatória: Abstinência completa de carne.',
      allowed: 'Peixe, legumes, cereais, ovos, laticínios.',
      avoid: 'Todas as carnes.',
      obligation: 'Disciplina tradicional para os sábados da Quaresma.',
      theology: 'Prepara o espírito para o Domingo pascal mediante a perseverança ascética.',
      prayer: 'Senhor Deus, concede ao Teu povo viver este sábado em santa vigilância, acolhendo com alegria o Dia do Senhor.'
    },
    de: {
      title: 'Fastensamstag (Traditionelles Fasten & Abstinenz)',
      subtitle: 'Fastenordnung der Fastensamstage (1962)',
      badgeLabel: 'Fasten & Abstinenz',
      fasting: 'Vorgeschrieben: Eine volle Mahlzeit und zwei Stärkungen.',
      abstinence: 'Vorgeschrieben: Vollständiger Verzicht auf Fleisch.',
      allowed: 'Fisch, Gemüse, Hülsenfrüchte, Eier, Milchprodukte.',
      avoid: 'Alles Fleisch warmblütiger Tiere.',
      obligation: 'Traditionelle Regel für alle Fastensamstage.',
      theology: 'Bereitet die Seele auf den Sonntag, das wöchentliche Osterfest, vor.',
      prayer: 'Herr unser Gott, schenke Deinem Volk heilige Wachsamkeit an diesem Samstag zum Empfang des Tages des Herrn.'
    },
    ru: {
      title: 'Суббота Четыредесятницы (Традиционный пост и воздержание)',
      subtitle: 'Дисциплина великопостных суббот (1962)',
      badgeLabel: 'Пост и воздержание',
      fasting: 'Обязательно: Одно полное вкушение пищи и два малых вкушения.',
      abstinence: 'Обязательно: Полное воздержание от мяса.',
      allowed: 'Рыба, овощи, бобовые, яйца, сыр.',
      avoid: 'Все виды мяса.',
      obligation: 'Традиционное правило суббот Великого Поста.',
      theology: 'Приготовляет душу к воскресному дню Воскресения Христова через молитвенное бдение.',
      prayer: 'Господи Боже, сподоби верных Твоих в трезвении провести сей день, да с радостью встретим День Господень.'
    },
    la: {
      title: 'Sabbatum Quadragesimae (Ieiunium et Abstinentia)',
      subtitle: 'Disciplina Sabbatorum Quadragesimae Missalis 1962',
      badgeLabel: 'Ieiunium & Abstinentia',
      fasting: 'Praescriptum: Una solida refectio et binae parvae collationes.',
      abstinence: 'Praescripta: Totalis abstinentia a carnibus.',
      allowed: 'Pisces, legumina, holera, ova, lacticinia.',
      avoid: 'Omnes carnes animalium.',
      obligation: 'Traditio classica pro sabbatis Quadragesimae.',
      theology: 'Animam ad Dominicum diem Resurrectionis sancta continentia praeparat.',
      prayer: 'Domine Deus, tribue populo tuo hoc sabbatum sancta cum vigilantia agere, ut in gaudium Diei Domini intret.'
    }
  },

  traditional_friday: {
    it: {
      title: 'Venerdì di Astinenza Tradizionale',
      subtitle: 'Memoria Universale della Crocifissione',
      badgeLabel: 'Astinenza dalle Carni',
      fasting: 'Digiuno volontario raccomandabile e meritorio.',
      abstinence: 'Stretta astinenza dalla carne di animali terrestri.',
      allowed: 'Pesce, frutti di mare, latticini, uova, verdure, legumi, frutta.',
      avoid: 'Ogni tipo di carne di animali terrestri e pollame.',
      obligation: 'Vincolante per tutti i fedeli dai 14 anni in su.',
      theology: 'Pratica ininterrotta fin dall\'era apostolica: l\'astinenza del venerdì onora la carne del Figlio di Dio immolata per la redenzione.',
      prayer: 'Ti adoriamo, o Cristo, e Ti benediciamo, perché con la Tua Santa Croce hai redento il mondo.'
    },
    en: {
      title: 'Friday of Abstinence',
      subtitle: 'Universal Memorial of the Crucifixion',
      badgeLabel: 'Abstinence from Meat',
      fasting: 'Voluntary fasting commendable.',
      abstinence: 'Strict abstinence from flesh meat.',
      allowed: 'Fish, seafood, dairy, eggs, vegetables, legumes, fruits.',
      avoid: 'All meat from land animals and poultry.',
      obligation: 'Binding on all faithful age 14 and older.',
      theology: 'An uninterrupted Catholic practice originating in the apostolic age: Friday abstinence honors the flesh of the Son of God offered for our redemption.',
      prayer: 'We adore Thee, O Christ, and we praise Thee, because by Thy Holy Cross Thou hast redeemed the world.'
    },
    ro: {
      title: 'Vineri de Înfrânare Tradițională',
      subtitle: 'Pomenirea Universală a Răstignirii Domnului',
      badgeLabel: 'Abstinență de la Carne',
      fasting: 'Postul de voie este bineplăcut și meritoriu.',
      abstinence: 'Înfrânare canonică strictă de la carne.',
      allowed: 'Pește, lactate, ouă, legume, leguminoase, fructe.',
      avoid: 'Carne de animale terestre și păsări.',
      obligation: 'Datorie canonică pentru credincioși de la 14 ani.',
      theology: 'Practică apostolică neîntreruptă: cinstește Trupul Fiului lui Dumnezeu dat morții pentru mântuirea noastră.',
      prayer: 'Ne închinăm Ție, Hristoase, și Te binecuvântăm, căci prin Sfânta Ta Cruce ai răscumpărat lumea.'
    },
    fr: {
      title: 'Vendredi d\'Abstinence Traditionnelle',
      subtitle: 'Mémorial Universel de la Crucifixion',
      badgeLabel: 'Abstinence de Viande',
      fasting: 'Jeûne volontaire vivement louable.',
      abstinence: 'Abstinence stricte de chair animale.',
      allowed: 'Poisson, produits laitiers, œufs, légumes, fruits.',
      avoid: 'Toute viande d\'animaux terrestres et volaille.',
      obligation: 'Obligation pour tous les fidèles dès 14 ans.',
      theology: 'Pratique apostolique ininterrompue honorant la chair du Fils de Dieu offerte sur le Calvaire.',
      prayer: 'Nous T\'adorons, ô Christ, et nous Te bénissons, car par Ta Sainte Croix Tu as racheté le monde.'
    },
    es: {
      title: 'Viernes de Abstinencia Tradicional',
      subtitle: 'Memorial Universal de la Crucifixión',
      badgeLabel: 'Abstinencia de Carne',
      fasting: 'Ayuno voluntario loable y provechoso.',
      abstinence: 'Abstinencia estricta de carne.',
      allowed: 'Pescado, lácteos, huevos, verduras, legumbres, frutas.',
      avoid: 'Toda carne de animales terrestres y aves.',
      obligation: 'Obligatorio para todos los fieles desde los 14 años.',
      theology: 'Práctica católica ininterrumpida desde los apóstoles para honrar el sacrificio de Cristo.',
      prayer: 'Te adoramos, oh Cristo, y te bendecimos, que por tu Santa Cruz redimiste al mundo.'
    },
    pt: {
      title: 'Sexta-feira de Abstinência Tradicional',
      subtitle: 'Memória Universal da Crucificação',
      badgeLabel: 'Abstinência de Carne',
      fasting: 'Jejum voluntário meritório e salutar.',
      abstinence: 'Abstinência estrita de carne.',
      allowed: 'Peixe, laticínios, ovos, legumes, frutas.',
      avoid: 'Todas as carnes terrestres e aves.',
      obligation: 'Obrigatório para os fiéis a partir dos 14 anos.',
      theology: 'Prática apostólica ininterrupta em honra da Carne de Cristo entregue na Cruz.',
      prayer: 'Nós Vos adoramos, ó Cristo, e Vos bendizemos, porque pela Vossa Santa Cruz remistes o mundo.'
    },
    de: {
      title: 'Freitag der traditionellen Abstinenz',
      subtitle: 'Universelles Gedächtnis der Kreuzigung',
      badgeLabel: 'Fleischabstinenz',
      fasting: 'Freiwilliges Fasten lobenswert.',
      abstinence: 'Strikter Verzicht auf Fleisch.',
      allowed: 'Fisch, Milchprodukte, Eier, Gemüse, Obst.',
      avoid: 'Alles Fleisch von Landtieren und Geflügel.',
      obligation: 'Verpflichtend für Gläubige ab 14 Jahren.',
      theology: 'Ununterbrochene apostolische Praxis zu Ehren des für uns geopferten Leibes Christi.',
      prayer: 'Wir beten Dich an, o Christus, und preisen Dich, denn durch Dein heiliges Kreuz hast Du die Welt erlöst.'
    },
    ru: {
      title: 'Пятница традиционного воздержания',
      subtitle: 'Всеобщее воспоминание Распятия Господня',
      badgeLabel: 'Воздержание от мяса',
      fasting: 'Добровольный пост спасителен и похвален.',
      abstinence: 'Строгое воздержание от мяса.',
      allowed: 'Рыба, молочные продукты, яйца, овощи, фрукты.',
      avoid: 'Мясо теплокровных животных и птицы.',
      obligation: 'Обязательно для верующих от 14 лет.',
      theology: 'Непрерывная апостольская традиция в честь плоти Сына Божия, принесённой за нас на кресте.',
      prayer: 'Покланяемся Ти, Христе, и благословим Тя, яко Святым Крестом Твоим искупил еси мир.'
    },
    la: {
      title: 'Feria Sexta Abstinentiae Traditionalis',
      subtitle: 'Universalis Memoria Crucifixionis',
      badgeLabel: 'Abstinentia a Carnibus',
      fasting: 'Voluntarium ieiunium laudabile.',
      abstinence: 'Stricta abstinentia a carnibus.',
      allowed: 'Pisces, lacticinia, ova, holera, fruges, poma.',
      avoid: 'Omnes carnes animalium terrestrium et volatilium.',
      obligation: 'Obligatorium a 14 annis completis.',
      theology: 'Ininterrupta traditio apostolica carnem Filii Dei pro nobis immolatam venerans.',
      prayer: 'Adoramus te, Christe, et benedicimus tibi, quia per sanctam Crucem tuam redemisti mundum.'
    }
  },

  byzantine_strict_single: {
    it: {
      title: 'Digiuno Bizantino Stretto',
      subtitle: 'Giorno di Rigido Digiuno Orientale (Senza carne, pesce, latticini, vino né olio)',
      badgeLabel: 'Digiuno Bizantino Severo',
      fasting: 'Xerofagia stretta: alimenti vegetali semplici senza olio né vino.',
      abstinence: 'Totale astinenza da carni, pollame, latticini, uova, pesce, vino e olio.',
      allowed: 'Verdure crude o lesse in acqua, pane, frutta, noci, miele, legumi senza olio.',
      avoid: 'Carne, pesce, latticini, uova, alcolici, olio da cucina.',
      obligation: 'Antica riconsacrazione bizantina osservata con profonda venerazione.',
      theology: 'Commemora la santa ascesi e il sacro martirio nel rispetto dei misteri di Dio.',
      prayer: 'Per le preghiere del Tuo santo Precursore, o Cristo Dio nostro, purifica le nostre menti e dona pace alle anime nostre.'
    },
    en: {
      title: 'Strict Byzantine Fast Day',
      subtitle: 'Strict Eastern Fast Day (No meat, fish, dairy, wine, or oil)',
      badgeLabel: 'Strict Byzantine Fast',
      fasting: 'Strict xerophagy: simple plant food, no oil or wine.',
      abstinence: 'Total abstinence from meat, poultry, dairy, eggs, fish, wine, and olive oil.',
      allowed: 'Vegetables, bread, water, fruit, nuts, honey, pulses.',
      avoid: 'Meat, fish, dairy products, eggs, alcohol, cooking oil.',
      obligation: 'Traditional Byzantine rule observed by Eastern Christians.',
      theology: 'Commemorates holy asceticism and deep reverence for the sacred mysteries and martyrdom.',
      prayer: 'By the prayers of Thy holy Forerunner, O Christ our God, cleanse our minds and bestow peace upon our souls.'
    },
    ro: {
      title: 'Post Aspru Bizantin',
      subtitle: 'Zi de Ajunare Strictă Răsăriteană (Fără carne, pește, lactate, vin sau untdelemn)',
      badgeLabel: 'Post Aspru Răsăritean',
      fasting: 'Xerofagie: hrană uscată din plante, fără vin și fără untdelemn.',
      abstinence: 'Oprire deplină de la carne, pește, brânză, ouă, vin și ulei.',
      allowed: 'Legume nefierte sau fierte în apă, pâine, fructe, nuci, miere, semințe.',
      avoid: 'Carne, pește, lactate, ouă, băuturi alcoolice, ulei.',
      obligation: 'Rânduială bisericească respectată cu mare evlavie.',
      theology: 'Pomenirea marilor mucenici și cinstirea Crucii prin jertfă trupească și rugăciune curată.',
      prayer: 'Pentru rugăciunile Înaintemergătorului Tău, Hristoase Dumnezeule, curățește mințile noastre și dă pace sufletelor noastre.'
    },
    fr: {
      title: 'Jour de Jeûne Strict Byzantin',
      subtitle: 'Jeûne Strict Oriental (Sans viande, poisson, laitage, vin ni huile)',
      badgeLabel: 'Jeûne Byzantin Strict',
      fasting: 'Xérophagie : nourriture végétale simple, sans huile ni vin.',
      abstinence: 'Abstinence de viande, volaille, laitage, œufs, poisson, vin et huile.',
      allowed: 'Légumes à l\'eau, pain, eau, fruits secs, noix, miel.',
      avoid: 'Viande, poisson, lait, œufs, alcool, huile de cuisson.',
      obligation: 'Règle byzantine observée avec recueillement.',
      theology: 'Commémore l\'ascèse sainte et le martyre dans le respect des mystères divins.',
      prayer: 'Par les prières de Ton Précurseur, ô Christ notre Dieu, purifie nos âmes et donne-nous la paix.'
    },
    es: {
      title: 'Ayuno Bizantino Estricto',
      subtitle: 'Día Oriental de Ayuno Severo (Sin carne, pescado, lácteos, vino ni aceite)',
      badgeLabel: 'Ayuno Bizantino Severo',
      fasting: 'Xerofagia estricta: alimentos vegetales sin aceite ni vino.',
      abstinence: 'Abstinencia total de carne, pescado, lácteos, huevos, vino y aceite.',
      allowed: 'Verduras al agua, pan, fruta, frutos secos, miel, legumbres.',
      avoid: 'Carne, pescado, lácteos, huevos, alcohol, aceite.',
      obligation: 'Disciplina oriental guardada con fervor.',
      theology: 'Honra el martirio y la ascesis sagrada mediante el dominio del cuerpo.',
      prayer: 'Por las oraciones de Tu Precursor, oh Cristo Dios nuestro, purifica nuestras mentes y concede paz a nuestras almas.'
    },
    pt: {
      title: 'Jejum Bizantino Estrito',
      subtitle: 'Dia Oriental de Jejum Rigoroso (Sem carne, peixe, laticínios, vinho nem azeite)',
      badgeLabel: 'Jejum Bizantino Estrito',
      fasting: 'Xerofagia estrita: alimentos vegetais sem azeite nem vinho.',
      abstinence: 'Abstinência total de carne, peixe, laticínios, ovos, vinho e azeite.',
      allowed: 'Legumes cozidos em água, pão, fruta, frutos secos, mel.',
      avoid: 'Carne, peixe, leite, ovos, bebidas alcoólicas, óleo.',
      obligation: 'Disciplina venerável guardada no Oriente cristão.',
      theology: 'Comemora o santo martírio e a ascese na reverência dos sagrados mistérios.',
      prayer: 'Pelas orações do Teu Precursor, ó Cristo nosso Deus, purifica as nossas mentes e dá paz às nossas almas.'
    },
    de: {
      title: 'Strenger byzantinischer Fasttag',
      subtitle: 'Strenger Ostkirchlicher Fasttag (Ohne Fleisch, Fisch, Milch, Wein und Öl)',
      badgeLabel: 'Strenges byzantinisches Fasten',
      fasting: 'Strenge Xerophagie: einfache Pflanzennahrung ohne Öl und Wein.',
      abstinence: 'Vollständiger Verzicht auf Fleisch, Fisch, Milch, Eier, Wein und Speiseöl.',
      allowed: 'Wassergekochtes Gemüse, Brot, Obst, Nüsse, Honig, Hülsenfrüchte.',
      avoid: 'Fleisch, Fisch, Milchprodukte, Eier, Alkohol, Kochöl.',
      obligation: 'Altehrwürdige ostkirchliche Tradition der Gläubigen.',
      theology: 'Gedenkt heiliger Askese und des Märtyrertodes in Ehrfurcht vor den göttlichen Geheimnissen.',
      prayer: 'Auf die Fürsprache Deines heiligen Vorläufers, o Christus unser Gott, reinige unsere Sinne und schenke unseren Seelen Frieden.'
    },
    ru: {
      title: 'Строгий византийский пост',
      subtitle: 'День строгого восточного поста (Сухоядение: без мяса, рыбы, молочного, вина и елея)',
      badgeLabel: 'Строгий византийский пост',
      fasting: 'Сухоядение: простая растительная пища без масла и вина.',
      abstinence: 'Полное воздержание от мяса, рыбы, молока, яиц, вина и растительного масла.',
      allowed: 'Сырые или варёные на воде овощи, хлеб, фрукты, орехи, мёд.',
      avoid: 'Мясо, рыба, молочные продукты, яйца, алкоголь, елей.',
      obligation: 'Уставная восточно-христианская традиция высокой строгости.',
      theology: 'Воспоминание святого мученичества и аскетического подвига во славу Божию.',
      prayer: 'Молитвами святого Предтечи Твоего, Христе Боже наш, очисти помышления наша и даруй душам нашим мир.'
    },
    la: {
      title: 'Ieiunium Byzantinum Stricte',
      subtitle: 'Dies Orientalis Ieiunii Severi (Sine carne, piscibus, lacticiniis, vino ac oleo)',
      badgeLabel: 'Ieiunium Byzantinum Severum',
      fasting: 'Xerophagia stricta: simplices cibi vegetabiles sine oleo et vino.',
      abstinence: 'Plena abstinentia a carnibus, piscibus, lacticiniis, ovis, vino et oleo.',
      allowed: 'Holera in aqua cocta, panis, poma, nuces, mel, legumina.',
      avoid: 'Carnes, pisces, lacticinia, ova, vinum, oleum.',
      obligation: 'Venerabilis traditio orientalis.',
      theology: 'Sanctam ascesim et martyrium in reverentia mysteriorum recolit.',
      prayer: 'Praecursoris tui precibus, Christe Deus noster, mentes nostras purifica et animabus nostris pacem largire.'
    }
  },

  byzantine_great_lent: {
    it: {
      title: 'Grande Quaresima Bizantina (Tessaracoste)',
      subtitle: 'I Grandi Quaranta Giorni del Digiuno Ortodosso',
      badgeLabel: 'Digiuno di Grande Quaresima',
      fasting: 'Disciplina laica: astinenza da tutti i cibi animali e derivati. Moderazione nei pasti.',
      abstinence: 'Astenersi da carni, latticini, uova e pesce (pesce permesso per l\'Annunciazione e la Domenica delle Palme). Vino e olio concessi sabato e domenica.',
      allowed: 'Cereali, legumi, verdure, frutta, molluschi, frutta secca, pane.',
      avoid: 'Carni, pollame, latte, burro, formaggi, uova, pesce (nella maggior parte dei giorni).',
      obligation: 'Vissuto con ardente devozione in tutta la Cristianità orientale.',
      theology: 'La Grande Quaresima è un\'arena di combattimento spirituale (Podvig) per liberare l\'anima dalle passioni ed entrare nella luce increata della Risurrezione.',
      prayer: 'Signore e Sovrano della mia vita, allontana da me lo spirito di pigrizia, di sconforto, di brama di potere e di vaniloquio. Concedi invece al tuo servo uno spirito di castità, di umiltà, di pazienza e d\'amore.'
    },
    en: {
      title: 'Great Lent (Tessaracoste)',
      subtitle: 'The Great Forty Days of Orthodox Fasting',
      badgeLabel: 'Great Lent Fast',
      fasting: 'Monastic: xerophagy on weekdays. Lay discipline: abstinence from all animal products.',
      abstinence: 'Abstain from meat, dairy, eggs, and fish (fish permitted on Annunciation & Palm Sunday). Wine and oil permitted on Saturdays and Sundays.',
      allowed: 'Grains, legumes, vegetables, fruits, shellfish, nuts, bread.',
      avoid: 'Meat, poultry, milk, butter, cheese, eggs, fish (most days).',
      obligation: 'Observed with deep devotion across Eastern Christendom.',
      theology: 'Great Lent is an arena of spiritual warfare (Podvig) to free the soul from passions and enter into the uncreated light of the Resurrection.',
      prayer: 'O Lord and Master of my life, take from me the spirit of sloth, despair, lust of power, and idle talk. But give rather the spirit of chastity, humility, patience, and love to Thy servant. Amen.'
    },
    ro: {
      title: 'Postul Mare (Sfânta Patruzecime)',
      subtitle: 'Cele Patruzeci de Zile ale Marelui Post Ortodox',
      badgeLabel: 'Postul cel Mare',
      fasting: 'Înfrânare canonică de la toate produsele de origine animală. Cumpătare la masă.',
      abstinence: 'Oprire de la carne, lapte, brânză, ouă și pește (dezlegare la pește la Bunavestire și Florii). Vin și untdelemn sâmbăta și duminica.',
      allowed: 'Bucate de post: cereale, fasole, năut, legume, fructe, fructe de mare, nuci, pâine.',
      avoid: 'Carne, unsoare, lactate, brânzeturi, ouă, pește (în zilele oprite).',
      obligation: 'Urmat cu adâncă evlavie și pocăință în tot Răsăritul creștin.',
      theology: 'Postul Mare este vreme de nevoință (Podvig) pentru curățirea de patimi și întâmpinarea Luminii necreate a Învierii lui Hristos.',
      prayer: 'Doamne și Stăpânul vieții mele, duhul trândăviei, al grijii de multe, al iubirii de stăpânire și al grăirii în deșert nu mi-l da mie. Iar duhul curăției, al gândului smerit, al răbdării și al dragostei dăruiește-l mie, slugii Tale.'
    },
    fr: {
      title: 'Grand Carême Byzantin (Tessaracoste)',
      subtitle: 'Les Grands Quarante Jours du Jeûne Orthodoxe',
      badgeLabel: 'Jeûne du Grand Carême',
      fasting: 'Abstinence de tous produits animaux. Repas modérés et prière continue.',
      abstinence: 'S\'abstenir de viande, laitage, œufs et poisson (poisson permis à l\'Annonciation et aux Rameaux). Vin et huile permis les samedis et dimanches.',
      allowed: 'Céréales, légumineuses, légumes, fruits, fruits de mer, noix, pain.',
      avoid: 'Viande, lait, beurre, fromage, œufs, poisson.',
      obligation: 'Vécu avec ferveur dans toute la chrétienté orientale.',
      theology: 'Arène de combat spirituel (Podvig) pour libérer l\'âme des passions et contempler la Lumière pascale.',
      prayer: 'Seigneur et Maître de ma vie, éloigne de moi l\'esprit de paresse, de découragement, de domination et de vaines paroles. Mais accorde à ton serviteur l\'esprit de pureté, d\'humilité, de patience et d\'amour.'
    },
    es: {
      title: 'Gran Cuaresma Bizantina (Tessaracoste)',
      subtitle: 'Los Cuarenta Días del Gran Ayuno Ortodoxo',
      badgeLabel: 'Ayuno de Gran Cuaresma',
      fasting: 'Abstención de productos animales. Sobriedad y oración constante.',
      abstinence: 'Abstenerse de carne, lácteos, huevos y pescado (pescado permitido en la Anunciación y Ramos). Vino y aceite sábados y domingos.',
      allowed: 'Cereales, legumbres, hortalizas, frutas, mariscos, nueces, pan.',
      avoid: 'Carne, leche, mantequilla, quesos, huevos, pescado.',
      obligation: 'Vivido con ardiente devoción en el Oriente cristiano.',
      theology: 'La Gran Cuaresma es combate espiritual (Podvig) para liberar el alma y entrar en la Luz increada de la Resurrección.',
      prayer: 'Señor y Soberano de mi vida, quita de mí el espíritu de pereza, desánimo, ambición y vanas palabras. Concede a tu siervo el espíritu de castidad, humildad, paciencia y amor.'
    },
    pt: {
      title: 'Grande Quaresma Bizantina (Tessaracoste)',
      subtitle: 'Os Quarenta Dias do Jejum Ortodoxo',
      badgeLabel: 'Jejum da Grande Quaresma',
      fasting: 'Abstenção de produtos de origem animal e vigilância do coração.',
      abstinence: 'Abster-se de carne, laticínios, ovos e peixe (peixe permitido na Anunciação e Domingo de Ramos). Vinho e azeite aos sábados e domingos.',
      allowed: 'Cereais, leguminosas, legumes, frutos, mariscos, frutos secos, pão.',
      avoid: 'Carne, leite, queijo, manteiga, ovos, peixe.',
      obligation: 'Vivido com profunda piedade no Oriente cristão.',
      theology: 'Arena de combate espiritual (Podvig) para vencer as paixões e comungar da Luz increada da Ressurreição.',
      prayer: 'Senhor e Soberano da minha vida, afasta de mim o espírito de preguiça, desânimo, ambição e palavras vãs. Concede ao teu servo um espírito de pureza, humildade, paciência e amor.'
    },
    de: {
      title: 'Große byzantinische Fastenzeit',
      subtitle: 'Die großen vierzig Tage des orthodoxen Fastens',
      badgeLabel: 'Großes Fasten',
      fasting: 'Enthaltsamkeit von tierischen Produkten. Mäßige Speisen und Gebet.',
      abstinence: 'Verzicht auf Fleisch, Milch, Eier und Fisch (Fisch erlaubt an Mariä Verkündigung und Palmsonntag). Wein und Öl an Samstagen und Sonntagen.',
      allowed: 'Getreide, Hülsenfrüchte, Gemüse, Obst, Schalentiere, Nüsse, Brot.',
      avoid: 'Fleisch, Milch, Butter, Käse, Eier, Fisch.',
      obligation: 'Mit tiefer Hingabe in der gesamten östlichen Christenheit begangen.',
      theology: 'Die Große Fastenzeit ist geistlicher Kampf (Podvig) zur Läuterung der Seele vor dem unerschaffenen Osterlicht.',
      prayer: 'Herr und Gebieter meines Lebens, den Geist des Müßiggangs, der Verzagtheit, der Herrschsucht und des Geschwätzes gib mir nicht. Den Geist der Keuschheit, der Demut, der Geduld und der Liebe aber schenke Deinem Knecht.'
    },
    ru: {
      title: 'Великий Пост (Святая Четыредесятница)',
      subtitle: 'Великие Сорок Дней Православного Поста',
      badgeLabel: 'Великий Пост',
      fasting: 'Воздержание от скоромной пищи. Умеренность и непрестанная молитва.',
      abstinence: 'Воздержание от мяса, молока, яиц и рыбы (рыба дозволена на Благовещение и Вход Господень в Иерусалим). Вино и елей по субботам и воскресеньям.',
      allowed: 'Крупы, бобовые, овощи, фрукты, грибы, морепродукты, орехи, хлеб.',
      avoid: 'Мясо, птица, молоко, сыр, творог, сливочное масло, яйца, рыба.',
      obligation: 'Свято соблюдается всеми православными христианами.',
      theology: 'Великий Пост есть духовное поприще (Подвиг) для очищения от страстей и созерцания Фаворского Света Воскресения.',
      prayer: 'Господи и Владыко живота моего, дух праздности, уныния, любоначалия и празднословия не даждь ми. Дух же целомудрия, смиренномудрия, терпения и любве даруй ми, рабу Твоему.'
    },
    la: {
      title: 'Magna Quadragesima Byzantina (Tessaracoste)',
      subtitle: 'Magnum Spatium Quadraginta Dierum Ieiunii Orientalis',
      badgeLabel: 'Magnum Ieiunium',
      fasting: 'Continentia ab omnibus cibis animalibus. Moderatio et constans oratio.',
      abstinence: 'Abstinere a carnibus, lacticiniis, ovis ac piscibus (pisces in Annuntiatione et Die Palmarum conceduntur). Vinum et oleum sabbatis et dominicis.',
      allowed: 'Fruges, legumina, holera, poma, crustacea, nuces, panis.',
      avoid: 'Carnes, lac, butyrum, caseus, ova, pisces.',
      obligation: 'Magna cum pietate in Oriente christiano servata.',
      theology: 'Spiritualis certaminis (Podvig) campus ad animas a vitiis liberandas et in Paschatis lucem ingrediendas.',
      prayer: 'Domine et Magister vitae meae, spiritum desidiae, sollicitudinis, dominatus et vaniloquii ne des mihi. Spiritum vero castitatis, humilitatis, patientiae et caritatis largire mihi famulo tuo.'
    }
  },

  byzantine_seasonal: {
    it: {
      title: 'Digiuno Stagionale Bizantino',
      subtitle: 'Periodo Tradizionale di Digiuno della Chiesa d\'Oriente',
      badgeLabel: 'Digiuno Stagionale',
      fasting: 'Digiuno regolare con sobria moderazione.',
      abstinence: 'Astenersi da carne, latticini e uova. Pesce, vino e olio permessi nei giorni festivi e nei fine settimana.',
      allowed: 'Alimenti vegetali, legumi, pane, frutta, noci, frutti di mare.',
      avoid: 'Carni, grassi animali, latte e derivati.',
      obligation: 'Antica disciplina stagionale dell\'Oriente cristiano.',
      theology: 'Dispone i fedeli ad accogliere la Madre di Dio, i Santi Apostoli o il Signore Incarnato in purezza di cuore.',
      prayer: 'Santifica i nostri corpi e le nostre anime, o Signore, e guida i nostri passi nella luce dei Tuoi comandamenti.'
    },
    en: {
      title: 'Eastern Seasonal Fasting Period',
      subtitle: 'Eastern Seasonal Fasting Period',
      badgeLabel: 'Seasonal Fast',
      fasting: 'Regular fasting with moderation.',
      abstinence: 'Abstain from meat, dairy, and eggs. Fish, wine, and oil permitted on designated feast days and weekends.',
      allowed: 'Plant-based foods, legumes, bread, nuts, fruits, seafood.',
      avoid: 'Meat, animal fats, dairy products.',
      obligation: 'Traditional Eastern seasonal discipline.',
      theology: 'Prepares the faithful to receive the Mother of God, the Holy Apostles, or the Incarnate Lord in purity of spirit.',
      prayer: 'Sanctify our bodies and souls, O Lord, and guide our steps in the light of Thy commandments.'
    },
    ro: {
      title: 'Post Sezonier Răsăritean',
      subtitle: 'Rânduială de Post Multizile a Bisericii Răsăritului',
      badgeLabel: 'Post de Peste An',
      fasting: 'Postire statornică și cumpătare.',
      abstinence: 'Oprire de la carne, lapte și ouă. Pește, vin și untdelemn în zilele cu dezlegare și sâmbăta/duminica.',
      allowed: 'Mâncăruri pe bază de plante, leguminoase, pâine, nuci, fructe, fructe de mare.',
      avoid: 'Carne, grăsimi animale, produse lactate.',
      obligation: 'Tradiție statornică a Răsăritului creștin.',
      theology: 'Pregătește credincioșii să întâmpine marile praznice ale Domnului, Maicii Domnului și Apostolilor în curăție sufletească.',
      prayer: 'Sfințește trupurile și sufletele noastre, Doamne, și îndreptează pașii noștri în lumina poruncilor Tale.'
    },
    fr: {
      title: 'Temps de Jeûne Saisonnier Byzantin',
      subtitle: 'Période de Jeûne Traditionnel d\'Orient',
      badgeLabel: 'Jeûne Saisonnier',
      fasting: 'Jeûne régulier et modération.',
      abstinence: 'S\'abstenir de viande, laitage et œufs. Poisson, vin et huile permis les jours de fête et le week-end.',
      allowed: 'Aliments végétaux, légumineuses, pain, fruits, noix.',
      avoid: 'Viande, graisses animales, produits laitiers.',
      obligation: 'Discipline canonique des saints jeûnes orientaux.',
      theology: 'Prépare les fidèles à accueillir les grandes fêtes dans la ferveur.',
      prayer: 'Sanctifie nos corps et nos âmes, Seigneur, et guide nos pas vers la clarté de Tes commandements.'
    },
    es: {
      title: 'Tiempo de Ayuno Estacional Bizantino',
      subtitle: 'Período Tradicional de Ayuno en Oriente',
      badgeLabel: 'Ayuno Estacional',
      fasting: 'Ayuno regular con moderación cristiana.',
      abstinence: 'Abstenerse de carne, lácteos y huevos. Pescado, vino y aceite en días festivos y fines de semana.',
      allowed: 'Alimentos vegetales, legumbres, pan, frutas, frutos secos.',
      avoid: 'Carne, mantecas y derivados lácteos.',
      obligation: 'Tradición oriental reverenciada.',
      theology: 'Prepara el espíritu para recibir las festividades de Cristo y los Santos con pureza.',
      prayer: 'Santifica nuestros cuerpos y almas, Señor, y endereza nuestros pasos en la luz de Tus mandamientos.'
    },
    pt: {
      title: 'Tempo de Jejum Sazonal Bizantino',
      subtitle: 'Período Tradicional de Jejum no Oriente',
      badgeLabel: 'Jejum Sazonal',
      fasting: 'Jejum regular e moderação.',
      abstinence: 'Abster-se de carne, laticínios e ovos. Peixe, vinho e azeite em dias de festa e fins de semana.',
      allowed: 'Comidas vegetais, leguminosas, pão, frutos secos, fruta.',
      avoid: 'Carne, gorduras animais, laticínios.',
      obligation: 'Disciplina clássica das igrejas orientais.',
      theology: 'Prepara o coração para celebrar as grandes solenidades na pureza do Espírito.',
      prayer: 'Santifica os nossos corpos e almas, ó Senhor, e guia os nossos passos na luz dos Teus mandamentos.'
    },
    de: {
      title: 'Jahreszeitliches byzantinisches Fasten',
      subtitle: 'Traditionelle Fastenzeit der Ostkirche',
      badgeLabel: 'Saisonales Fasten',
      fasting: 'Regelmäßiges Fasten in christlicher Mäßigung.',
      abstinence: 'Verzicht auf Fleisch, Milch und Eier. Fisch, Wein und Öl an Festtagen und Wochenenden gestattet.',
      allowed: 'Pflanzliche Speisen, Hülsenfrüchte, Brot, Nüsse, Obst.',
      avoid: 'Fleisch, tierische Fette, Milchprodukte.',
      obligation: 'Ehrwürdige ostkirchliche Ordnung.',
      theology: 'Bereitet die Gläubigen darauf vor, den Herrn und Seine Heiligen in reiner Andacht zu empfangen.',
      prayer: 'Heilige unsere Leiber und Seelen, o Herr, und lenke unsere Schritte im Lichte Deiner Gebote.'
    },
    ru: {
      title: 'Многодневный пост (Успенский, Рождественский, Петров)',
      subtitle: 'Традиционный многодневный пост Восточной Церкви',
      badgeLabel: 'Многодневный пост',
      fasting: 'Умеренное постное воздержание.',
      abstinence: 'Воздержание от мяса, молока и яиц. Рыба, вино и елей разрешаются в праздничные дни и выходные.',
      allowed: 'Растительная пища, крупы, бобовые, грибы, овощи, фрукты, орехи.',
      avoid: 'Мясо, животные жиры, молочные продукты.',
      obligation: 'Уставное делание Восточной Церкви.',
      theology: 'Приуготовляет души к сретению Господних и Богородичных праздников в духовном трезвении.',
      prayer: 'Освяти тела и души наша, Господи, и исправи стопы наша в свете заповедей Твоих.'
    },
    la: {
      title: 'Tempus Ieiunii Statuti Byzantini',
      subtitle: 'Statutum Ieiunium Ecclesiae Orientalis',
      badgeLabel: 'Ieiunium Statutum',
      fasting: 'Ordinarium ieiunium cum temperantia.',
      abstinence: 'Abstinere a carnibus, lacticiniis ac ovis. Pisces, vinum et oleum festis diebus conceduntur.',
      allowed: 'Cibi vegetabiles, legumina, panis, nuces, fruges.',
      avoid: 'Carnes, adipes animalium, lacticinia.',
      obligation: 'Antiqua disciplina orientalis.',
      theology: 'Fideles ad sancta festa in cordis puritate suscipienda praeparat.',
      prayer: 'Sanctifica corpora et animas nostras, Domine, et dirige gressus nostros in lumine mandatorum tuorum.'
    }
  },

  byzantine_wed_fri: {
    it: {
      title: 'Digiuno Settimanale (Mercoledì e Venerdì)',
      subtitle: 'Digiuno Apostolico Settimanale (Didachè cap. 8)',
      badgeLabel: 'Digiuno Settimanale',
      fasting: 'Astenersi da carne, latticini, uova; nelle settimane severe anche da vino e olio.',
      abstinence: 'Pesce, vino e olio permessi solo in coincidenza di giorni festivi.',
      allowed: 'Cibi vegetariani di magro, cereali, legumi, verdure, pane.',
      avoid: 'Carni e latticini di derivazione animale.',
      obligation: 'Antichissima disciplina apostolica attestata fin dal I Secolo.',
      theology: 'Il mercoledì commemora il tradimento di Giuda; il venerdì ricorda la crocifissione di Cristo sulla Croce.',
      prayer: 'Signore Gesù Cristo, Figlio di Dio, abbi pietà di me peccatore.'
    },
    en: {
      title: 'Weekly Fast (Wednesday & Friday)',
      subtitle: 'Apostolic Weekly Fast (Didache Ch. 8)',
      badgeLabel: 'Weekly Fast',
      fasting: 'Abstain from meat, dairy, eggs, and on strict weeks wine and oil.',
      abstinence: 'Fish, wine, and oil permitted when a feast coincides.',
      allowed: 'Lenten vegetarian foods, grains, legumes, vegetables, bread.',
      avoid: 'Meat and animal dairy products.',
      obligation: 'Ancient apostolic discipline attested since the 1st Century.',
      theology: 'Wednesday recalls Judas Iscariot\'s betrayal; Friday commemorates Christ\'s death on the Cross.',
      prayer: 'Lord Jesus Christ, Son of God, have mercy on me, a sinner.'
    },
    ro: {
      title: 'Postul de Miercuri și Vineri',
      subtitle: 'Postirea Apostolică Săptămânală (Didahia cap. 8)',
      badgeLabel: 'Post Săptămânal',
      fasting: 'Înfrânare de la carne, ouă și lactate; în posturile aspre și de la untdelemn și vin.',
      abstinence: 'Dezlegare la pește, vin și untdelemn la sărbătorile însemnate.',
      allowed: 'Mâncăruri curate de post, cereale, leguminoase, legume, pâine.',
      avoid: 'Carne, unsoare și produse lactate.',
      obligation: 'Rânduială apostolică păstrată neîntrerupt din secolul I.',
      theology: 'Miercurea amintește vânzarea Domnului de către Iuda, iar vinerea Răstignirea pe Cruce.',
      prayer: 'Doamne Iisuse Hristoase, Fiul lui Dumnezeu, miluiește-mă pe mine, păcătosul.'
    },
    fr: {
      title: 'Jeûne Hebdomadaire (Mercredi et Vendredi)',
      subtitle: 'Jeûne Apostolique Hebdomadaire (Didachè Ch. 8)',
      badgeLabel: 'Jeûne Hebdomadaire',
      fasting: 'S\'abstenir de viande, laitage, œufs ; vin et huile restreints.',
      abstinence: 'Poisson, vin et huile permis si une fête coïncide.',
      allowed: 'Mets végétaux, céréales, légumes, pain.',
      avoid: 'Viande et produits laitiers.',
      obligation: 'Discipline apostolique attestée depuis le Ier siècle.',
      theology: 'Le mercredi rappelle la trahison de Judas ; le vendredi commémore la Croix de notre Seigneur.',
      prayer: 'Seigneur Jésus-Christ, Fils de Dieu, aie pitié de moi, pécheur.'
    },
    es: {
      title: 'Ayuno Semanal (Miércoles y Viernes)',
      subtitle: 'Ayuno Apostólico Semanal (Didaché Cap. 8)',
      badgeLabel: 'Ayuno Semanal',
      fasting: 'Abstención de carne, lácteos y huevos; vino y aceite según el día.',
      abstinence: 'Pescado, vino y aceite permitidos en fiestas litúrgicas.',
      allowed: 'Comidas sencillas de ayuno, cereales, legumbres, pan.',
      avoid: 'Carne y productos lácteos.',
      obligation: 'Antigua disciplina apostólica documentada desde el siglo I.',
      theology: 'El miércoles recuerda la traición de Judas; el viernes la Cruz salvadora de Cristo.',
      prayer: 'Señor Jesucristo, Hijo de Dios, ten piedad de mí, pecador.'
    },
    pt: {
      title: 'Jejum Semanal (Quarta e Sexta-feira)',
      subtitle: 'Jejum Apostólico Semanal (Didaqué Cap. 8)',
      badgeLabel: 'Jejum Semanal',
      fasting: 'Abstenção de carne, laticínios e ovos; vinho e azeite comedidos.',
      abstinence: 'Peixe, vinho e azeite permitidos em dias de festa.',
      allowed: 'Alimentos vegetais, cereais, legumes, pão.',
      avoid: 'Carne e laticínios de origem animal.',
      obligation: 'Regra apostólica observada desde o século I.',
      theology: 'A quarta-feira lembra a traição de Judas; a sexta-feira evoca a morte redentora de Cristo.',
      prayer: 'Senhor Jesus Cristo, Filho de Deus, tem piedade de mim, pecador.'
    },
    de: {
      title: 'Wöchentliches Fasten (Mittwoch und Freitag)',
      subtitle: 'Apostolisches Wochenfasten (Didache Kap. 8)',
      badgeLabel: 'Wochenfasten',
      fasting: 'Verzicht auf Fleisch, Milch, Eier sowie an strengen Tagen Wein und Öl.',
      abstinence: 'Fisch, Wein und Öl erlaubt, wenn ein Festtag zusammenfällt.',
      allowed: 'Fastenspeisen, Getreide, Hülsenfrüchte, Gemüse, Brot.',
      avoid: 'Fleisch und tierische Milchprodukte.',
      obligation: 'Uralte apostolische Disziplin seit dem 1. Jahrhundert.',
      theology: 'Der Mittwoch gedenkt des Verrats des Judas; der Freitag des Todes Christi am Kreuz.',
      prayer: 'Herr Jesus Christus, Sohn Gottes, erbarme Dich meiner, eines Sünders.'
    },
    ru: {
      title: 'Еженедельный пост (Среда и Пятница)',
      subtitle: 'Апостольский еженедельный пост (Дидахе гл. 8)',
      badgeLabel: 'Еженедельный пост',
      fasting: 'Воздержание от мяса, молока и яиц; в строгие недели — без вина и елея.',
      abstinence: 'Рыба, вино и елей разрешаются при совпадении с праздником.',
      allowed: 'Постная растительная пища, крупы, овощи, хлеб.',
      avoid: 'Мясо и молочные продукты.',
      obligation: 'Древнейшее апостольское установление I века.',
      theology: 'Среда напоминает о предательстве Иуды; пятница — о крестной смерти Спасителя.',
      prayer: 'Господи Иисусе Христе, Сыне Божий, помилуй мя грешнаго.'
    },
    la: {
      title: 'Ieiunium Hebdomadalis (Feria IV et VI)',
      subtitle: 'Ieiunium Apostolicum Hebdomadale (Didache Cap. 8)',
      badgeLabel: 'Ieiunium Hebdomadalis',
      fasting: 'Abstinere a carnibus, lacticiniis, ovis; stricto tempore etiam a vino et oleo.',
      abstinence: 'Pisces, vinum et oleum festis diebus permittuntur.',
      allowed: 'Cibi ieiunales simplices, legumina, fruges, panis.',
      avoid: 'Carnes et lacticinia animalium.',
      obligation: 'Apostolica traditio a primo saeculo testata.',
      theology: 'Feria IV Iudae proditionem; feria VI Christi mortem in Cruce commemorat.',
      prayer: 'Domine Iesu Christe, Fili Dei, miserere mei peccatoris.'
    }
  },

  protestant_ash_wednesday: {
    it: {
      title: 'Mercoledì delle Ceneri (Giorno Biblico di Ravvedimento)',
      subtitle: 'Giorno Storico di Umiltà e Ricerca del Signore',
      badgeLabel: 'Preghiera & Digiuno',
      fasting: 'Digiuno volontario: dedicare i momenti dei pasti alla preghiera e meditazione delle Scritture.',
      abstinence: 'Praticare la semplicità volontaria; evitare lussi e distrazioni mondane.',
      allowed: 'Cibi semplici e sani, frutta, cereali, acqua, tè.',
      avoid: 'Pasti sontuosi, intrattenimenti rumorosi e orgoglio spirituale.',
      obligation: 'Vissuto nella libertà evangelica (Col 2,16), con umiltà davanti al Padre nel segreto (Mt 6,17-18).',
      theology: 'Il digiuno non compra la salvezza, poiché siamo salvati per sola grazia mediante la fede (Ef 2,8-9). Esso umilia l\'anima ed esalta la fame di Dio.',
      prayer: 'Padre Celeste, umiliamo le nostre anime dinanzi a Te. Purifica i nostri cuori, ravviva il nostro spirito e fa\' che la Tua Parola sia il nostro pane quotidiano. Nel nome di Gesù, Amen.'
    },
    en: {
      title: 'Ash Wednesday (Biblical Day of Repentance)',
      subtitle: 'Historic Day of Humility & Seeking the Lord',
      badgeLabel: 'Prayer & Fasting',
      fasting: 'Voluntary fasting: dedicate meal times to prayer and Scripture meditation.',
      abstinence: 'Practice voluntary simplicity; avoid luxury and worldly distractions.',
      allowed: 'Simple wholesome foods, fruits, grains, water, tea.',
      avoid: 'Lavish meals, noisy entertainment, spiritual pride.',
      obligation: 'Observed in Gospel liberty (Col 2:16), in humility before the Father in secret (Mt 6:17-18).',
      theology: 'Fasting does not earn salvation, for we are justified by grace alone through faith in Jesus Christ (Eph 2:8-9). It humbles the soul (Ps 35:13) and sharpens spiritual hunger for God.',
      prayer: 'Heavenly Father, we humble our souls before Thee. Cleanse our hearts, revive our spirits, and let Thy Word be our daily bread. In Jesus\' name, Amen.'
    },
    ro: {
      title: 'Miercurea Cenușii (Zi Biblică de Pocăință)',
      subtitle: 'Zi Istorică de Smerenie și Căutare a Domnului',
      badgeLabel: 'Rugăciune & Post',
      fasting: 'Post de voie: închinarea orelor de masă rugăciunii și citirii Scripturii.',
      abstinence: 'Simplitate de bunăvoie; lepădare de lux și deșertăciuni.',
      allowed: 'Hrană simplă și curată, fructe, cereale, apă, ceai.',
      avoid: 'Mese îmbelșugate, zgomot lumesc și mândrie spirituală.',
      obligation: 'Trăit în libertatea Evangheliei (Col 2:16), în ascuns înaintea Tatălui (Mt 6:17-18).',
      theology: 'Postul nu cumpără mântuirea, căci suntem mântuiți prin har, prin credință (Efeseni 2:8-9). El smerește sufletul și aprinde dorul de Domnul.',
      prayer: 'Tată Ceresc, smerim sufletele noastre înaintea Ta. Curățește inimile noastre și fă ca Sfântul Tău Cuvânt să fie hrana noastră cea de toate zilele. În Numele lui Iisus, Amin.'
    },
    fr: {
      title: 'Mercredi des Cendres (Jour Biblique de Repentance)',
      subtitle: 'Journée d\'Humilité et de Quête du Seigneur',
      badgeLabel: 'Prière & Jeûne',
      fasting: 'Jeûne volontaire : consacrer le temps des repas à la prière et à la Parole.',
      abstinence: 'Simplicité de cœur ; s\'éloigner des distractions profanes.',
      allowed: 'Nourriture saine et simple, fruits, eau, tisanes.',
      avoid: 'Festins somptueux, orgueil spirituel et mondanités.',
      obligation: 'Vécu dans la liberté de l\'Évangile (Col 2:16), dans le secret devant le Père (Mt 6:17-18).',
      theology: 'Le jeûne ne marchande pas le salut, car nous sommes sauvés par grâce (Éph 2:8-9). Il abaisse l\'orgueil et aiguise la soif de Dieu.',
      prayer: 'Père Céleste, nous humilions nos âmes devant Toi. Purifie nos cœurs et que Ta Parole soit notre pain quotidien. Au nom de Jésus, Amen.'
    },
    es: {
      title: 'Miércoles de Ceniza (Día Bíblico de Arrepentimiento)',
      subtitle: 'Día Histórico de Humildad y Búsqueda del Señor',
      badgeLabel: 'Oración & Ayuno',
      fasting: 'Ayuno voluntario: dedicar el tiempo de comer a la oración y la Escritura.',
      abstinence: 'Practicar la sobriedad voluntaria y evitar vanidades.',
      allowed: 'Alimentos sencillos, frutas, cereales, agua, té.',
      avoid: 'Comidas ostentosas y soberbia espiritual.',
      obligation: 'Vivido en la libertad del Evangelio (Col 2:16), en lo secreto ante el Padre (Mt 6:17-18).',
      theology: 'El ayuno no compra la salvación, justificados por la fe y gracia de Cristo (Ef 2:8-9). Humilla el alma y aviva el hambre de Dios.',
      prayer: 'Padre Celestial, humillamos nuestras almas ante Ti. Limpia nuestros corazones y sea Tu Palabra nuestro pan de cada día. En el nombre de Jesús, Amén.'
    },
    pt: {
      title: 'Quarta-feira de Cinzas (Dia Bíblico de Arrependimento)',
      subtitle: 'Dia Histórico de Humildade e Busca do Senhor',
      badgeLabel: 'Oração & Jejum',
      fasting: 'Jejum voluntário: consagrar as refeições à oração e meditação bíblica.',
      abstinence: 'Simplicidade voluntária; evitar luxos e distrações.',
      allowed: 'Alimentos simples e saudáveis, frutas, água, chá.',
      avoid: 'Festas lautas e vanglória espiritual.',
      obligation: 'Praticado na liberdade do Evangelho (Col 2:16), em segredo diante do Pai (Mt 6:17-18).',
      theology: 'O jejum não compra a salvação, pois somos salvos somente pela graça mediante a fé (Ef 2:8-9). Ele humilha a alma e aguça a sede de Deus.',
      prayer: 'Pai Celeste, humilhamos as nossas almas perante Ti. Purifica os nossos corações e que a Tua Palavra seja o nosso pão diário. Em nome de Jesus, Amém.'
    },
    de: {
      title: 'Aschermittwoch (Biblischer Bußtag)',
      subtitle: 'Historischer Tag der Demut und Gottsuche',
      badgeLabel: 'Gebet & Fasten',
      fasting: 'Freiwilliges Fasten: Mahlzeitenzeit dem Gebet und der Schriftlesung widmen.',
      abstinence: 'Freiwillige Schlichtheit; Verzicht auf weltlichen Prunk.',
      allowed: 'Einfache Nahrung, Früchte, Wasser, Tee.',
      avoid: 'Üppige Gelage und geistlicher Hochmut.',
      obligation: 'In evangelischer Freiheit (Kol 2,16) im Verborgenen vor dem Vater gehalten (Mt 6,17-18).',
      theology: 'Fasten erwirkt kein Heil, denn wir sind allein aus Gnade durch Glauben gerettet (Eph 2,8-9). Es demütigt die Seele und schärft das Verlangen nach Gott.',
      prayer: 'Himmlischer Vater, wir demütigen uns vor Dir. Reinige unsere Herzen und lass Dein Wort unsere tägliche Speise sein. Im Namen Jesu, Amen.'
    },
    ru: {
      title: 'Пепельная Среда (Библейский день покаяния)',
      subtitle: 'Исторический день смирения и искания Господа',
      badgeLabel: 'Молитва и пост',
      fasting: 'Добровольный пост: посвящение времени трапез молитве и Слову Божию.',
      abstinence: 'Добровольная простота; удаление от суеты и роскоши.',
      allowed: 'Простая пища, фрукты, крупы, вода, чай.',
      avoid: 'Пышные трапезы и духовная гордость.',
      obligation: 'Соблюдается в евангельской свободе (Кол 2:16), втайне пред Отцом (Мф 6:17-18).',
      theology: 'Пост не заслуживает спасения, ибо мы спасены благодатью через веру (Еф 2:8-9). Он смиряет душу и утоляет духовный голод.',
      prayer: 'Отче Небесный, смиряем души наши пред Тобою. Очисти сердца наши и соделай Слово Твое хлебом нашим насущным. Во имя Иисуса, Аминь.'
    },
    la: {
      title: 'Feria Quarta Cinerum (Dies Biblicus Paenitentiae)',
      subtitle: 'Dies Historicus Humilitatis et Quaestionis Domini',
      badgeLabel: 'Oratio & Ieiunium',
      fasting: 'Ieiunium voluntarium: tempus ciborum orationi et lectioni Scripturarum dedicandum.',
      abstinence: 'Voluntaria simplicitas; mundanae vanitatis fuga.',
      allowed: 'Cibi salubres, fruges, poma, aqua, thea.',
      avoid: 'Convivia lauta et spiritualis superbia.',
      obligation: 'In libertate evangelica (Col 2,16), in abscondito coram Patre (Mt 6,17-18).',
      theology: 'Ieiunium salutem non emit, quia sola gratia per fidem iustificamur (Eph 2,8-9). Animam humiliat et desiderium Dei acuit.',
      prayer: 'Pater Caelestis, animas nostras coram te humil霸amus. Purifica corda nostra et Verbum tuum sit panis noster quotidianus. In nomine Iesu, Amen.'
    }
  },

  protestant_good_friday: {
    it: {
      title: 'Venerdì Santo (La Croce di Cristo)',
      subtitle: 'Memoria dell\'Opera Compiuta di Cristo sul Calvario',
      badgeLabel: 'Solenne Meditazione & Raccoglimento',
      fasting: 'Digiuno sincero e riverente silenzio durante le ore della Passione.',
      abstinence: 'Semplice pane e acqua o pasti frugali di meditazione.',
      allowed: 'Sostentamento sobrio assunto con grata preghiera.',
      avoid: 'Feste, celebrazioni mondane e distrazioni.',
      obligation: 'Celebrato con profonda gratitudine in tutte le comunità evangeliche mondiali.',
      theology: 'Contempliamo la Croce, dove l\'Agnello di Dio ha portato i nostri peccati nel Suo corpo sul legno (1 Pt 2,24).',
      prayer: 'Signore Gesù, degno è l\'Agnello immolato di ricevere potenza, ricchezza, sapienza, forza, onore, gloria e lode. Ti rendiamo grazie per il Tuo riscatto eterno.'
    },
    en: {
      title: 'Good Friday (The Cross of Christ)',
      subtitle: 'Remembering Christ\'s Finished Work at Calvary',
      badgeLabel: 'Solemn Fast & Meditation',
      fasting: 'Sincere fasting and reverent quietude throughout the hours of the Passion.',
      abstinence: 'Simple bread and water or modest fasting meals.',
      allowed: 'Simple sustenance taken with prayerful thanksgiving.',
      avoid: 'Feasting, festive events, self-centered distractions.',
      obligation: 'Observed with deep gratitude across Protestant and Evangelical churches worldwide.',
      theology: 'We stand in awe before the Cross, where the Lamb of God bore our sins in His own body on the tree (1 Peter 2:24).',
      prayer: 'Lord Jesus, worthy is the Lamb that was slain to receive power, riches, wisdom, strength, honor, glory, and blessing. We thank Thee for Thy redeeming sacrifice.'
    },
    ro: {
      title: 'Vinerea Mare (Crucea lui Hristos)',
      subtitle: 'Pomenirea Jertfei Mântuitoare de pe Golgota',
      badgeLabel: 'Post Solemn & Meditație',
      fasting: 'Postire sinceră și reculegere în ceasurile Patimilor.',
      abstinence: 'Pâine, apă și hrană modestă.',
      allowed: 'Hrană simplă primită cu rugăciune și mulțumire.',
      avoid: 'Petreceri, veselie lumească și risipă.',
      obligation: 'Trăit cu cutremur și recunoștință de creștinii din întreaga lume.',
      theology: 'Privim la Cruce, unde Mielul lui Dumnezeu a purtat păcatele noastre în trupul Său pe lemn (1 Petru 2:24).',
      prayer: 'Doamne Iisuse, vrednic este Mielul cel înjunghiat să primească puterea, bogăția, înțelepciunea, tăria, cinstea, slava și binecuvântarea. Îți mulțumim pentru jertfa Ta.'
    },
    fr: {
      title: 'Vendredi Saint (La Croix du Christ)',
      subtitle: 'Mémorial de l\'Œuvre Achevée au Calvaire',
      badgeLabel: 'Jeûne Solennel & Méditation',
      fasting: 'Jeûne recueilli pendant les heures de la Passion.',
      abstinence: 'Pain et eau ou repas très frugals.',
      allowed: 'Nourriture sobre reçue avec reconnaissance.',
      avoid: 'Fêtes, réjouissances et distractions futiles.',
      obligation: 'Célébré avec profonde gratitude dans les Églises évangéliques.',
      theology: 'Nous contemplons la Croix, où l\'Agneau de Dieu a porté nos péchés en Son corps sur le bois (1 Pierre 2:24).',
      prayer: 'Seigneur Jésus, digne est l\'Agneau qui a été immolé de recevoir puissance, richesse, sagesse, force, honneur, gloire et louange. Merci pour Ton sacrifice.'
    },
    es: {
      title: 'Viernes Santo (La Cruz de Cristo)',
      subtitle: 'Recordando la Obra Consumada en el Calvario',
      badgeLabel: 'Ayuno Solemne & Meditación',
      fasting: 'Ayuno sincero y quietud reverente durante las horas de la Pasión.',
      abstinence: 'Pan, agua o comidas muy sencillas.',
      allowed: 'Sustento austero tomado con oración y gratitud.',
      avoid: 'Fiestas profanas, diversiones y vanidad.',
      obligation: 'Guardado con reverencia y acción de gracias en el mundo protestante.',
      theology: 'Nos postramos ante la Cruz, donde el Cordero de Dios llevó nuestros pecados en el madero (1 Pedro 2:24).',
      prayer: 'Señor Jesús, digno es el Cordero que fue inmolado de recibir el poder, las riquezas, la sabiduría y la alabanza. Gracias por Tu redención.'
    },
    pt: {
      title: 'Sexta-feira Santa (A Cruz de Cristo)',
      subtitle: 'Memória da Obra Consumada no Calvário',
      badgeLabel: 'Jejum Solene & Meditação',
      fasting: 'Jejum sincero e silêncio reverente nas horas da Paixão.',
      abstinence: 'Pão, água e refeições modestas.',
      allowed: 'Sustento simples recebido com oração.',
      avoid: 'Festas e distrações egoístas.',
      obligation: 'Observado com gratidão nas igrejas evangélicas mundiais.',
      theology: 'Adoramos diante da Cruz, onde o Cordeiro de Deus levou os nossos pecados no Seu corpo sobre o madeiro (1 Pedro 2:24).',
      prayer: 'Senhor Jesus, digno é o Cordeiro que foi morto de receber poder, riqueza, sabedoria, força, honra, glória e louvor. Obrigado pela Tua salvação.'
    },
    de: {
      title: 'Karfreitag (Das Kreuz Christi)',
      subtitle: 'Im Gedenken an das vollbrachte Erlösungswerk auf Golgota',
      badgeLabel: 'Feierliches Fasten & Stille',
      fasting: 'Aufrichtiges Fasten und ehrfürchtige Stille während der Passionsstunden.',
      abstinence: 'Einfaches Brot, Wasser oder bescheidene Speisen.',
      allowed: 'Einfache Nahrung in dankbarem Gebet genossen.',
      avoid: 'Festlichkeiten, Zerstreuungen und Weltlichkeit.',
      obligation: 'In tiefer Dankbarkeit in den evangelischen Kirchen weltweit gefeiert.',
      theology: 'Wir stehen staunend vor dem Kreuz, wo das Lamm Gottes unsere Sünden an Seinem Leib ans Holz getragen hat (1. Petrus 2,24).',
      prayer: 'Herr Jesus, würdig ist das Lamm, das geschlachtet ist, zu empfangen Macht und Reichtum und Weisheit und Stärke und Ehre und Preis. Wir danken Dir für Dein Opfer.'
    },
    ru: {
      title: 'Страстная Пятница (Крест Христов)',
      subtitle: 'Воспоминание свершённого искупления на Голгофе',
      badgeLabel: 'Торжественный пост и созерцание',
      fasting: 'Искренний пост и благоговейная тишина в часы Страстей Господних.',
      abstinence: 'Хлеб, вода или скромная постная пища.',
      allowed: 'Простая пища, принимаемая с благодарной молитвой.',
      avoid: 'Пиры, празднества и рассеянность.',
      obligation: 'Чтится с глубокой признательностью во всём евангельском мире.',
      theology: 'Мы благоговеем пред Крестом, на котором Агнец Божий Сам вознёс грехи наши телом Своим на древо (1 Петра 2:24).',
      prayer: 'Господи Иисусе, достоин Агнец закланный принять силу, и богатство, и премудрость, и крепость, и честь, и славу, и благословение. Благодарим Тя за искупительную жертву.'
    },
    la: {
      title: 'Feria Sexta in Parasceve (Crux Christi)',
      subtitle: 'Consummati Operis Christi in Calvaria Memoria',
      badgeLabel: 'Ieiunium Solemne & Meditatio',
      fasting: 'Sincerum ieiunium et reverens silentium horis Passionis.',
      abstinence: 'Panis simplex et aqua vel modestae refectiones.',
      allowed: 'Frugale alimentum cum gratiarum actione sumptum.',
      avoid: 'Convivia, ludi saeculares et distractiones.',
      obligation: 'Summa cum gratitudine per mundum servata.',
      theology: 'Ante Crucem stupemus, ubi Agnus Dei peccata nostra in corpore suo super lignum pertulit (1 Petri 2,24).',
      prayer: 'Domine Iesu, dignus est Agnus qui occisus est accipere virtutem, et divinitatem, et sapientiam, et fortitudinem, et honorem, et gloriam, et benedictionem. Gratias agimus pro redemptione tua.'
    }
  },

  protestant_friday: {
    it: {
      title: 'Memoria della Croce del Venerdì',
      subtitle: 'Rinuncia Settimanale e Intercessione',
      badgeLabel: 'Rinuncia Volontaria',
      fasting: 'Digiuno personale (rinuncia a un pasto per dedicarsi alla preghiera).',
      abstinence: 'Autodisciplina devota; devolvere il risparmiato ai poveri.',
      allowed: 'Cibi sobri consumati con moderazione e cuore grato.',
      avoid: 'Eccessi e consumismo distratto.',
      obligation: 'Disciplina spirituale evangelica (raccomandata da John Wesley).',
      theology: 'Il venerdì ricorda che Cristo ha donato la Sua vita per noi. La rinuncia allena l\'anima a camminare nello Spirito.',
      prayer: 'Signore, insegnami a rinunciare a me stesso ogni giorno, a prendere la mia croce e a seguirTi con gioia.'
    },
    en: {
      title: 'Friday Cross Memorial',
      subtitle: 'Weekly Self-Denial and Intercession',
      badgeLabel: 'Voluntary Self-Denial',
      fasting: 'Voluntary fasting (skip a meal or fast until afternoon for personal prayer).',
      abstinence: 'Voluntary self-denial; save funds from avoided luxuries to give to the poor.',
      allowed: 'Modest foods eaten in gratitude and moderation.',
      avoid: 'Excess and unmindful consumption.',
      obligation: 'Personal spiritual discipline (practiced by reformers such as John Wesley).',
      theology: 'Friday is consecrated to remember that Christ gave His life on a Friday. Self-denial trains the soul to yield to the Holy Spirit.',
      prayer: 'Lord, teach me to deny myself daily, to take up my cross, and to follow Thee with a willing and joy-filled spirit.'
    },
    ro: {
      title: 'Pomenirea Crucii de Vineri',
      subtitle: 'Înfrânare de Voie și Rugăciune de Mijlocire',
      badgeLabel: 'Înfrânare de Voie',
      fasting: 'Post personal de voie pentru adâncirea în părtășie cu Domnul.',
      abstinence: 'Renunțare la plăceri de prisos și milostenie pentru cei nevoiași.',
      allowed: 'Hrană cumpătată mâncată cu mulțumire.',
      avoid: 'Îmbuibare și risipă.',
      obligation: 'Rânduială duhovnicească personală a uceniciei creștine.',
      theology: 'Vinerea amintește că Hristos Și-a dat viața pentru noi. Înfrânarea deprinde duhul să asculte de Duhul Sfânt.',
      prayer: 'Doamne, învață-mă să mă lepăd de mine însumi, să-mi iau crucea în fiecare zi și să-Ți urmez cu duh plin de bucurie.'
    },
    fr: {
      title: 'Mémorial de la Croix du Vendredi',
      subtitle: 'Renoncement Hebdomadaire et Intercession',
      badgeLabel: 'Renoncement Volontaire',
      fasting: 'Jeûne personnel pour la prière et la méditation.',
      abstinence: 'Simplicité de vie et don aux démunis.',
      allowed: 'Nourriture sobre partagée avec reconnaissance.',
      avoid: 'Consommation excessive et futilité.',
      obligation: 'Discipline spirituelle personnelle (pratiquée par Wesley).',
      theology: 'Le vendredi rappelle le don de la vie du Christ. Le renoncement fortifie la foi.',
      prayer: 'Seigneur, apprends-moi à renoncer à moi-même chaque jour, à porter ma croix et à Te suivre.'
    },
    es: {
      title: 'Memorial de la Cruz del Viernes',
      subtitle: 'Abnegación Semanal e Intercesión',
      badgeLabel: 'Abnegación Voluntaria',
      fasting: 'Ayuno personal para oración e intercesión.',
      abstinence: 'Austeridad y ofrenda generosa a los necesitados.',
      allowed: 'Alimentos moderados comidos con acción de gracias.',
      avoid: 'Excesos e insensibilidad ante el prójimo.',
      obligation: 'Disciplina formativa en la fe reformada y evangélica.',
      theology: 'El viernes consagra el recuerdo del Calvario. La abnegación ejercita al creyente en el fruto del Espíritu.',
      prayer: 'Señor, enséñame a negarme a mí mismo cada día, tomar mi cruz y seguirte con espíritu alegre.'
    },
    pt: {
      title: 'Memória da Cruz de Sexta-feira',
      subtitle: 'Abnegação Semanal e Intercessão',
      badgeLabel: 'Abnegação Voluntária',
      fasting: 'Jejum pessoal voluntário dedicado à oração.',
      abstinence: 'Vida simples e auxílio aos necessitados.',
      allowed: 'Comida frugal comida em moderação e ação de graças.',
      avoid: 'Consumo desenfreado e excessos.',
      obligation: 'Disciplina bíblica de crescimento espiritual.',
      theology: 'A sexta-feira comemora o preço da nossa redenção na Cruz.',
      prayer: 'Senhor, ensina-me a negar-me a mim mesmo diariamente, a tomar a minha cruz e a seguir-Te de coração alegre.'
    },
    de: {
      title: 'Freitags-Gedächtnis des Kreuzes',
      subtitle: 'Wöchentliche Selbstverleugnung und Fürbitte',
      badgeLabel: 'Freiwillige Selbstverleugnung',
      fasting: 'Persönliches Fasten zur Vertiefung im Gebet.',
      abstinence: 'Schlichtheit im Alltag und Hilfe für Bedürftige.',
      allowed: 'Mäßige Speisen in Dankbarkeit eingenommen.',
      avoid: 'Maßlosigkeit und oberflächliche Zerstreuung.',
      obligation: 'Geistliche Disziplin (gepflegt von Reformern wie Wesley).',
      theology: 'Der Freitag erinnert an das Lebensopfer Christi und schult das Leben im Geist.',
      prayer: 'Herr, lehre mich, mich selbst täglich zu verleugnen, mein Kreuz auf mich zu nehmen und Dir freudig zu folgen.'
    },
    ru: {
      title: 'Пятничное воспоминание Креста',
      subtitle: 'Еженедельное самоотвержение и ходатайство',
      badgeLabel: 'Добровольное самоотвержение',
      fasting: 'Личный пост для молитвенного общения с Богом.',
      abstinence: 'Воздержание от излишеств и благотворение ближним.',
      allowed: 'Умеренная пища, принимаемая с благодарением.',
      avoid: 'Чрезмерность и суета.',
      obligation: 'Духовное делание верующего во Христа.',
      theology: 'Пятница напоминает о крестной смерти Спасителя. Самоотвержение подчиняет плоть водительству Духа.',
      prayer: 'Господи, научи меня отвергаться себя, брать крест свой ежедневно и следовать за Тобою.'
    },
    la: {
      title: 'Memoria Crucis Feriae Sextae',
      subtitle: 'Hebdomadalis Abnegatio et Intercessio',
      badgeLabel: 'Voluntaria Abnegatio',
      fasting: 'Privatum ieiunium orationi destinatum.',
      abstinence: 'Frugalitas et eleemosyna pauperibus data.',
      allowed: 'Modici cibi cum gratiarum actione sumpti.',
      avoid: 'Nimius apparatus et luxus.',
      obligation: 'Spiritualis uitae exercitium in libertate evangelica.',
      theology: 'Feria sexta sacrificium Christi in memoriam revocat ad vitam in Spiritu exercendam.',
      prayer: 'Domine, doce me abnegare memetipsum quotidie, tollere crucem meam et te corde laeto sequi.'
    }
  },

  protestant_lenten: {
    it: {
      title: 'Tempo di Rinnovamento Spirituale',
      subtitle: '40 Giorni sulle Orme del Digiuno di Cristo nel Deserto',
      badgeLabel: 'Tempo del Deserto',
      fasting: 'Devozione personale: valutare un digiuno di Daniele (legumi e acqua) o digiuno digitale.',
      abstinence: 'Sobrietà nelle parole, nella dieta e nelle distrazioni multimediali.',
      allowed: 'Cibi sani e semplici; generosità verso chi soffre.',
      avoid: 'Passività e vanità che soffocano la Parola di Dio.',
      obligation: 'Tempo volontario di discepolato e comunione con Dio.',
      theology: 'Gesù vinse le tentazioni nel deserto con il digiuno e la Parola: «Non di solo pane vivrà l\'uomo, ma di ogni parola che esce dalla bocca di Dio» (Lc 4,4).',
      prayer: 'Signore, attirami a Te in questo tempo. Donami fame della Tua Parola e vittoria contro ogni tentazione.'
    },
    en: {
      title: 'Season of Spiritual Renewal',
      subtitle: '40 Days Following Christ\'s Wilderness Fast',
      badgeLabel: 'Wilderness Season',
      fasting: 'Personal devotion: consider a Daniel Fast (vegetables and water) or media fast.',
      abstinence: 'Disciplined moderation in speech, diet, and entertainment.',
      allowed: 'Clean, healthy foods; generous giving to those in distress.',
      avoid: 'Passivity and distractions that choke the Word of God.',
      obligation: 'Voluntary season of deepening personal prayer and discipleship.',
      theology: 'Jesus overcame the devil\'s temptations in the wilderness through fasting and the Word of God: "Man shall not live by bread alone, but by every word of God" (Luke 4:4).',
      prayer: 'Lord, draw me closer to Thyself during this season. Give me hunger for Thy Word and power against all temptation.'
    },
    ro: {
      title: 'Vreme de Înnoire Duhovnicească',
      subtitle: '40 de Zile pe Urmele Postului Domnului în Pustie',
      badgeLabel: 'Vremea Pustiei',
      fasting: 'Râvnă personală: cercetați postul lui Daniel (legume și apă) sau postul de ecrane.',
      abstinence: 'Cumpătare în vorbire, hrană și divertisment.',
      allowed: 'Hrană curată și simplă; milostenie pentru cei întristați.',
      avoid: 'Nepăsare și deșertăciuni care înăbușă Cuvântul lui Dumnezeu.',
      obligation: 'Timp liber de apropiere de Domnul prin ucenicie.',
      theology: 'Iisus a biruit ispitele diavolului prin post și Cuvântul Scripturii: «Nu numai cu pâine va trăi omul, ci cu orice cuvânt al lui Dumnezeu» (Luca 4:4).',
      prayer: 'Doamne, apropie-mă de Tine în această vreme. Dă-mi foame după Cuvântul Tău și biruință asupra oricărei ispite.'
    },
    fr: {
      title: 'Saison de Renouveau Spirituel',
      subtitle: '40 Jours à la Suite du Jeûne de Jésus au Désert',
      badgeLabel: 'Temps du Désert',
      fasting: 'Dévotion personnelle : jeûne de Daniel ou jeûne d\'écrans.',
      abstinence: 'Modération dans les paroles, la nourriture et les loisirs.',
      allowed: 'Aliments simples et sains ; secours aux affligés.',
      avoid: 'Distractions étouffant la semence de la Parole.',
      obligation: 'Temps libre d\'approfondissement de la vie chrétienne.',
      theology: 'Jésus a vaincu les tentations par le jeûne et l\'Écriture : « L\'homme ne vivra pas de pain seulement » (Luc 4:4).',
      prayer: 'Seigneur, attire-moi à Toi. Donne-moi faim de Ta Parole et la victoire sur toute tentation.'
    },
    es: {
      title: 'Tiempo de Renovación Espiritual',
      subtitle: '40 Días Siguiendo el Ayuno de Cristo en el Desierto',
      badgeLabel: 'Tiempo del Desierto',
      fasting: 'Devoción voluntaria: considerar el ayuno de Daniel o ayuno digital.',
      abstinence: 'Moderación en el hablar, el comer y el entretenimiento.',
      allowed: 'Comidas sanas; generosa ayuda a los afligidos.',
      avoid: 'Pasividad y ruidos que ahogan la Palabra de Dios.',
      obligation: 'Ocasión propicia para intensificar la oración y el discipulado.',
      theology: 'Jesús venció las tentaciones con el ayuno y la Palabra: «No sólo de pan vivirá el hombre» (Lucas 4:4).',
      prayer: 'Señor, acércame a Ti en este tiempo. Dame hambre de Tu Palabra y victoria sobre toda tentación.'
    },
    pt: {
      title: 'Tempo de Renovação Espiritual',
      subtitle: '40 Dias nos Passos do Jejum de Cristo no Deserto',
      badgeLabel: 'Tempo do Deserto',
      fasting: 'Devoção pessoal: considerar o jejum de Daniel ou jejum digital.',
      abstinence: 'Moderação no falar, na dieta e nos entretenimentos.',
      allowed: 'Alimentos limpos e saudáveis; caridade aos aflitos.',
      avoid: 'Distrações mundanas que sufocam a Palavra de Deus.',
      obligation: 'Período voluntário de crescimento e intimidade com Deus.',
      theology: 'Jesus venceu o tentador pelo jejum e pela Palavra: «Nem só de pão viverá o homem» (Lucas 4:4).',
      prayer: 'Senhor, atrai-me a Ti nesta época. Dá-me fome da Tua Palavra e vitória contra a tentação.'
    },
    de: {
      title: 'Zeit der geistlichen Erneuerung',
      subtitle: 'Vierzig Tage auf den Spuren des Wüstenfastens Jesu',
      badgeLabel: 'Wüstenzeit',
      fasting: 'Persönliche Hingabe: Daniel-Fasten oder Medienfasten erwägen.',
      abstinence: 'Besonnenheit in Worten, Speise und Unterhaltung.',
      allowed: 'Reine, gesunde Nahrung; Hilfe für Notleidende.',
      avoid: 'Trägheit und Ablenkungen, die das Wort ersticken.',
      obligation: 'Freiwillige Zeit vertiefter Nachfolge und des Gebets.',
      theology: 'Jesus überwand die Versuchungen durch Fasten und Gottes Wort: «Der Mensch lebt nicht vom Brot allein» (Lukas 4,4).',
      prayer: 'Herr, ziehe mich in dieser Zeit näher zu Dir. Schenke mir Hunger nach Deinem Wort und Kraft im Sieg über alle Versuchung.'
    },
    ru: {
      title: 'Время духовного обновления',
      subtitle: 'Сорок дней по примеру сорокадневного поста Христа в пустыне',
      badgeLabel: 'Пустынное поприще',
      fasting: 'Личное благочестие: пост Даниила (овощи и вода) или пост от экранов.',
      abstinence: 'Умеренность в речах, пище и мирских развлечениях.',
      allowed: 'Чистая здоровая пища; щедрая милостыня скорбящим.',
      avoid: 'Рассеянность и суета, заглушающие Слово Божие.',
      obligation: 'Благодатное время укрепления в молитве и вере.',
      theology: 'Иисус победил искусителя постом и Словом Божьим: «Не хлебом одним будет жить человек» (Луки 4:4).',
      prayer: 'Господи, приблизь меня к Себе. Даруй мне алкать Слова Твоего и силу побеждать искушения.'
    },
    la: {
      title: 'Tempus Spiritualis Renovationis',
      subtitle: 'Quadraginta Dies Vestigiis Ieiunii Christi in Deserto',
      badgeLabel: 'Tempus Deserti',
      fasting: 'Devotio personalis: ieiunium Danielis vel moderatio instrumentorum.',
      abstinence: 'Temperantia in verbis, victu et oblectamentis.',
      allowed: 'Cibi salubres; caritas erga afflictos.',
      avoid: 'Otium et strepitus qui Verbum Dei suffocant.',
      obligation: 'Spatium voluntarium ad orationem fovendam.',
      theology: 'Iesus tentationem ieiunio et Verbo vicit: «Non in solo pane vivit homo» (Luc 4,4).',
      prayer: 'Domine, ad te me attrahe. Da mihi Verbi tui famem et virtutem contra tentationes.'
    }
  },

  protestant_ordinary: {
    it: {
      title: 'Giorno di Libertà Cristiana e Gratitudine',
      subtitle: 'Camminare nella Libertà del Vangelo (Romani 14,5)',
      badgeLabel: 'Liberi nella Grazia',
      fasting: 'Nessuno prescritto; digiunare liberamente quando guidati dallo Spirito Santo.',
      abstinence: 'Ogni cibo è accolto con rendimento di grazie (1 Tm 4,4).',
      allowed: 'Godere dei pasti alla gloria di Dio (1 Cor 10,31).',
      avoid: 'Giudicare con durezza le scelte altrui.',
      obligation: 'Camminare nella grazia, nell\'amore e nella verità davanti a Dio.',
      theology: 'Chi mangia, mangia per il Signore, poiché rende grazie a Dio; e chi non mangia, non mangia per il Signore, e rende grazie a Dio.',
      prayer: 'Padre, Ti ringraziamo per la libertà che abbiamo in Cristo Gesù. Guida oggi i nostri passi nell\'amore, nella verità e nella giustizia. Amen.'
    },
    en: {
      title: 'Day of Christian Liberty & Gratitude',
      subtitle: 'Walking in the Freedom of the Gospel (Romans 14:5)',
      badgeLabel: 'Free in Grace',
      fasting: 'None prescribed; fast voluntarily whenever led by the Holy Spirit.',
      abstinence: 'All foods received with thanksgiving (1 Tim 4:4).',
      allowed: 'Enjoy meals to the glory of God (1 Cor 10:31).',
      avoid: 'Judgmentalism of others\' dietary choices.',
      obligation: 'Walk in grace, love, and honesty before God.',
      theology: 'One person esteems one day above another; another esteems every day alike. Let every person be fully convinced in their own mind, for he who eats, eats to the Lord and gives God thanks.',
      prayer: 'Father, we thank Thee for the freedom we possess in Christ Jesus. Guide our steps today in love, truth, and righteousness. Amen.'
    },
    ro: {
      title: 'Zi de Libertate Creștină și Mulțumire',
      subtitle: 'Umblare în Libertatea Evangheliei (Romani 14:5)',
      badgeLabel: 'Slobod în Har',
      fasting: 'Niciunul poruncit; postire de bunăvoie după călăuzirea Duhului.',
      abstinence: 'Toate bucatele sunt primite cu mulțumire (1 Timotei 4:4).',
      allowed: 'Mese primite spre slava lui Dumnezeu (1 Corinteni 10:31).',
      avoid: 'Judecarea aspră a fraților.',
      obligation: 'Umblare în har, dragoste și curăție înaintea Domnului.',
      theology: 'Cine mănâncă, pentru Domnul mănâncă, fiindcă mulțumește lui Dumnezeu; iar cine nu mănâncă, pentru Domnul nu mănâncă, și mulțumește lui Dumnezeu.',
      prayer: 'Tată, Îți mulțumim pentru libertatea pe care o avem în Hristos Iisus. Călăuzește pașii noștri în dragoste și neprihănire. Amin.'
    },
    fr: {
      title: 'Jour de Liberté Chrétienne et Gratitude',
      subtitle: 'Marcher dans la Liberté de l\'Évangile (Romains 14:5)',
      badgeLabel: 'Libre dans la Grâce',
      fasting: 'Aucun prescrit ; jeûner librement selon l\'Esprit.',
      abstinence: 'Tout aliment est reçu avec action de grâce (1 Tim 4:4).',
      allowed: 'Prendre les repas pour la gloire de Dieu (1 Cor 10:31).',
      avoid: 'Juger les choix de ses frères.',
      obligation: 'Marcher dans la grâce et l\'amour devant Dieu.',
      theology: 'Celui qui mange, c\'est pour le Seigneur qu\'il mange, car il rend grâces à Dieu.',
      prayer: 'Père, merci pour la liberté acquise en Jésus-Christ. Dirige nos pas dans la vérité et la justice. Amen.'
    },
    es: {
      title: 'Día de Libertad Cristiana y Gratitud',
      subtitle: 'Caminando en la Libertad del Evangelio (Romanos 14:5)',
      badgeLabel: 'Libre en Gracia',
      fasting: 'Ninguno prescrito; ayunar voluntariamente cuando guíe el Espíritu.',
      abstinence: 'Todo alimento recibido con acción de gracias (1 Timoteo 4:4).',
      allowed: 'Comer para la gloria de Dios (1 Corintios 10:31).',
      avoid: 'Juzgar a los hermanos en sus conciencias.',
      obligation: 'Caminar en gracia y rectitud delante de Dios.',
      theology: 'El que come, para el Señor come, porque da gracias a Dios.',
      prayer: 'Padre, te damos gracias por la libertad en Cristo Jesús. Guía hoy nuestros pasos en amor y santidad. Amén.'
    },
    pt: {
      title: 'Dia de Liberdade Cristã e Gratidão',
      subtitle: 'Andando na Liberdade do Evangelho (Romanos 14:5)',
      badgeLabel: 'Livre na Graça',
      fasting: 'Nenhum imposto; jejuar voluntariamente quando guiado pelo Espírito.',
      abstinence: 'Todo alimento recebido com gratidão (1 Timóteo 4:4).',
      allowed: 'Desfrutar das refeições para a glória de Deus (1 Coríntios 10:31).',
      avoid: 'Julgar a fé e escolhas do irmão.',
      obligation: 'Andar em graça, caridade e honestidade.',
      theology: 'Aquele que come, para o Senhor come, porque dá graças a Deus.',
      prayer: 'Pai, agradecemos a liberdade bendita em Cristo Jesus. Guia hoje os nossos passos no Teu amor e retidão. Amém.'
    },
    de: {
      title: 'Tag christlicher Freiheit und Dankbarkeit',
      subtitle: 'Wandeln in der Freiheit des Evangeliums (Römer 14,5)',
      badgeLabel: 'Frei in Gnade',
      fasting: 'Keines vorgeschrieben; freiwilliges Fasten nach Führung des Geistes.',
      abstinence: 'Alle Speise wird mit Danksagung empfangen (1. Timotheus 4,4).',
      allowed: 'Mahlzeiten zur Ehre Gottes genießen (1. Korinther 10,31).',
      avoid: 'Richten über die Gewissensentscheidungen des Bruders.',
      obligation: 'In Gnade und Liebe vor Gott wandeln.',
      theology: 'Wer isst, der isst dem Herrn, denn er dankt Gott; und wer nicht isst, der isst dem Herrn nicht und dankt Gott.',
      prayer: 'Vater, wir danken Dir für die Freiheit in Christus Jesus. Lenke unsere Schritte in Liebe, Wahrheit und Gerechtigkeit. Amen.'
    },
    ru: {
      title: 'День христианской свободы и благодарения',
      subtitle: 'Хождение в свободе Евангелия (Римлянам 14:5)',
      badgeLabel: 'Свободен во благодати',
      fasting: 'Не предписан; пост по ведению Святого Духа.',
      abstinence: 'Всякая пища принимается с благодарением (1 Тим 4:4).',
      allowed: 'Вкушать пищу во славу Божию (1 Кор 10:31).',
      avoid: 'Осуждение братьев в вопросах пищи.',
      obligation: 'Пребывание в благодати и любви пред Богом.',
      theology: 'Кто ест, для Господа ест, ибо благодарит Бога; и кто не ест, для Господа не ест, и благодарит Бога.',
      prayer: 'Отче, благодарим Тя за свободу во Христе Иисусе. Направи стези наши в любви, истине и правде. Аминь.'
    },
    la: {
      title: 'Dies Libertatis Christianae et Gratiarum Actionis',
      subtitle: 'In Libertate Evangelica Ambulantes (Rom 14,5)',
      badgeLabel: 'Liber in Gratia',
      fasting: 'Nullum praescriptum; voluntarie ieiunandum Spiritu ducente.',
      abstinence: 'Omnis creatura Dei bona est et cum gratiarum actione sumenda (1 Tim 4,4).',
      allowed: 'In gloriam Dei omnia facite (1 Cor 10,31).',
      avoid: 'Fratres in conscientia iudicare.',
      obligation: 'In gratia et caritate coram Deo ambulare.',
      theology: 'Qui manducat, Domino manducat, gratias enim agit Deo; et qui non manducat, Domino non manducat, et gratias agit Deo.',
      prayer: 'Pater, gratias agimus pro libertate quam habemus in Christo Iesu. Dirige gressus nostros in amore et veritate. Amen.'
    }
  },

  ecumenical_friday: {
    it: {
      title: 'Venerdì Universale di Contemplazione',
      subtitle: 'Memoria della Croce e Solidarietà con i Poveri',
      badgeLabel: 'Astinenza & Pace',
      fasting: 'Semplicità e moderazione in ogni cosa.',
      abstinence: 'Astinenza dalla carne; scegliere cibo a base vegetale in solidarietà col creato e con i bisognosi.',
      allowed: 'Cereali, legumi, frutta, verdure, pesce, acqua pura.',
      avoid: 'Eccessi, rancore e giudizi malevoli.',
      obligation: 'Antica disciplina cristiana condivisa fra Oriente e Occidente.',
      theology: 'Il digiuno è una medicina dell\'anima, che unisce tutti i discepoli di Cristo nell\'amore oblativo e nel servizio misericordioso.',
      prayer: 'O Dio di tutto il creato, unisci nella pace e nella carità tutti coloro che cercano il Tuo volto. La nostra rinuncia rechi sollievo a chi è nel bisogno.'
    },
    en: {
      title: 'Universal Friday of Contemplation',
      subtitle: 'Memorial of the Cross & Solidarity with the Hungry',
      badgeLabel: 'Friday Abstinence & Peace',
      fasting: 'Simplicity and moderation in all things.',
      abstinence: 'Abstinence from meat; choose plant-based foods in solidarity with creation and the poor.',
      allowed: 'Grains, legumes, fruits, vegetables, fish, water.',
      avoid: 'Excess, anger, and gossip.',
      obligation: 'Universal Christian discipline shared across East and West.',
      theology: 'Fasting is an ancient medicine for the soul, uniting Christians of every communion in self-emptying love and compassionate service.',
      prayer: 'O God of all creation, unite all who seek Thy face in peace and charity. May our self-denial bring comfort to those in need.'
    },
    ro: {
      title: 'Vineri Universală de Trecere Lăuntrică',
      subtitle: 'Pomenirea Crucii și Frăție cu cei Sărmani',
      badgeLabel: 'Înfrânare & Pace',
      fasting: 'Simplitate și cumpătare în toate.',
      abstinence: 'Oprire de la carne; hrană curată din plante în comuniune cu cei flămânzi.',
      allowed: 'Cereale, leguminoase, fructe, legume, pește, apă curată.',
      avoid: 'Excese, mânie și grăire de rău.',
      obligation: 'Moștenire creștină comună între Răsărit și Apus.',
      theology: 'Postul este leac al sufletului, unind pe toți cei ce cred în Hristos în dragoste jertfelnică.',
      prayer: 'Dumnezeule a toată făptura, unește în pace și dragoste pe toți cei ce caută Fața Ta. Înfrânarea noastră să aducă mângâiere celor lipsiți.'
    },
    fr: {
      title: 'Vendredi Universel de Contemplation',
      subtitle: 'Mémorial de la Croix et Solidarité avec les Démunis',
      badgeLabel: 'Abstinence & Paix',
      fasting: 'Simplicité et tempérance en toutes choses.',
      abstinence: 'Abstinence de viande ; mets végétaux en solidarité avec les pauvres.',
      allowed: 'Céréales, légumes, fruits, poisson, eau.',
      avoid: 'Excès, colère et médisance.',
      obligation: 'Discipline chrétienne partagée entre Orient et Occident.',
      theology: 'Le jeûne est un remède de l\'âme unissant tous les chrétiens dans le don de soi.',
      prayer: 'Ô Dieu de toute création, unis dans la paix tous ceux qui cherchent Ta Face. Que notre renoncement vienne en aide aux nécessiteux.'
    },
    es: {
      title: 'Viernes Universal de Contemplación',
      subtitle: 'Memorial de la Cruz y Solidaridad con los Pobres',
      badgeLabel: 'Abstinencia & Paz',
      fasting: 'Simplicidad y moderación en todo.',
      abstinence: 'Abstenerse de carne; elegir alimentos sencillos en solidaridad con los que padecen necesidad.',
      allowed: 'Granos, legumbres, frutas, verduras, pescado, agua.',
      avoid: 'Excesos, ira y murmuración.',
      obligation: 'Patrimonio espiritual compartido entre Oriente y Occidente.',
      theology: 'El ayuno es medicina del alma que une a los creyentes en caridad compasiva.',
      prayer: 'Dios de toda creación, une en paz a quienes buscan Tu rostro. Que nuestra renuncia alivie a los afligidos.'
    },
    pt: {
      title: 'Sexta-feira Universal de Contemplação',
      subtitle: 'Memória da Cruz e Solidariedade com os Pobres',
      badgeLabel: 'Abstinência & Paz',
      fasting: 'Simplicidade e moderação em tudo.',
      abstinence: 'Abstinência de carne; alimentos de origem vegetal em partilha fraterna.',
      allowed: 'Cereais, leguminosas, frutas, legumes, peixe, água.',
      avoid: 'Excessos, cólera e maledicência.',
      obligation: 'Prática cristã universal partilhada por Oriente e Ocidente.',
      theology: 'O jejum é remédio para a alma, unindo os crentes no amor que serve.',
      prayer: 'Ó Deus de toda a criação, une em paz todos os que buscam a Tua Face. Que a nossa renúncia leve consolo aos necessitados.'
    },
    de: {
      title: 'Universeller Freitag der Betrachtung',
      subtitle: 'Gedächtnis des Kreuzes und Verbundenheit mit den Bedürftigen',
      badgeLabel: 'Enthaltsamkeit & Friede',
      fasting: 'Schlichtheit und Mäßigung in allem.',
      abstinence: 'Fleischverzicht; einfache Kost in Solidarität mit den Notleidenden.',
      allowed: 'Getreide, Hülsenfrüchte, Obst, Gemüse, Fisch, Wasser.',
      avoid: 'Übermaß, Zorn und üble Nachrede.',
      obligation: 'Gemeinsames christliches Erbe von Ost und West.',
      theology: 'Fasten ist Arznei für die Seele, die Christen in barmherzigem Dienst eint.',
      prayer: 'O Gott der ganzen Schöpfung, einige im Frieden alle, die Dein Angesicht suchen. Unser Verzicht schenke den Notleidenden Trost.'
    },
    ru: {
      title: 'Всеобщая Пятница Созерцания',
      subtitle: 'Память Креста и сострадание к нуждающимся',
      badgeLabel: 'Воздержание и мир',
      fasting: 'Простота и умеренность во всём.',
      abstinence: 'Воздержание от мяса; растительная пища в знак сострадания к голодным.',
      allowed: 'Злаки, бобовые, фрукты, овощи, рыба, вода.',
      avoid: 'Излишества, гнев и осуждение.',
      obligation: 'Общехристианское наследие Востока и Запада.',
      theology: 'Пост есть врачевство души, соединяющее верных во взаимной любви и милосердии.',
      prayer: 'Боже всего творения, соедини в мире всех ищущих Лица Твоего. Да послужит наше воздержание к утешению скорбящих.'
    },
    la: {
      title: 'Feria Sexta Universalis Contemplationis',
      subtitle: 'Memoria Crucis et Solidaritas cum Inopibus',
      badgeLabel: 'Abstinentia & Pax',
      fasting: 'Simplicitas et moderatio in omnibus.',
      abstinence: 'Abstinentia a carnibus; vegetabilis victus in caritate pauperum.',
      allowed: 'Fruges, legumina, poma, holera, pisces, aqua.',
      avoid: 'Nimietas, ira et detractio.',
      obligation: 'Universalis disciplina christiana.',
      theology: 'Ieiunium est animae medicina, omnes in caritate et misericordia coniungens.',
      prayer: 'Deus universae creaturae, in pace coniunge omnes qui vultum tuum quaerunt. Nostra continentia egenis solacium ferat.'
    }
  }
};

export const SOLEMNITY_NAMES = {
  'Solemnity of Mary, Mother of God': {
    it: 'Maria Santissima Madre di Dio',
    en: 'Solemnity of Mary, Mother of God',
    ro: 'Sfânta Maria, Născătoarea de Dumnezeu',
    fr: 'Sainte Marie, Mère de Dieu',
    es: 'Santa María, Madre de Dios',
    pt: 'Santa Maria, Mãe de Deus',
    de: 'Hochfest der Gottesmutter Maria',
    ru: 'Пресвятая Богородица',
    la: 'Sancta Maria, Mater Dei'
  },
  'The Epiphany of the Lord': {
    it: 'Epifania del Signore',
    en: 'The Epiphany of the Lord',
    ro: 'Epifania / Boboteaza',
    fr: 'Épiphanie du Seigneur',
    es: 'Epifanía del Señor',
    pt: 'Epifania do Senhor',
    de: 'Erscheinung des Herrn',
    ru: 'Богоявление',
    la: 'In Epiphania Domini'
  },
  'Solemnity of Saint Joseph': {
    it: 'San Giuseppe, Sposo della B.V.M.',
    en: 'Solemnity of Saint Joseph',
    ro: 'Sfântul Iosif',
    fr: 'Saint Joseph',
    es: 'San José',
    pt: 'São José',
    de: 'Heiliger Josef',
    ru: 'Святой Иосиф',
    la: 'Sancti Ioseph'
  },
  'The Annunciation of the Lord': {
    it: 'Annunciazione del Signore',
    en: 'The Annunciation of the Lord',
    ro: 'Buna Vestire',
    fr: 'Annonciation du Seigneur',
    es: 'Anunciación del Señor',
    pt: 'Anunciação do Senhor',
    de: 'Verkündigung des Herrn',
    ru: 'Благовещение',
    la: 'In Annuntiatione Domini'
  },
  'Nativity of Saint John the Baptist': {
    it: 'Natività di San Giovanni Battista',
    en: 'Nativity of Saint John the Baptist',
    ro: 'Nașterea Sfântului Ioan Botezătorul',
    fr: 'Nativité de Saint Jean-Baptiste',
    es: 'Natividad de San Juan Bautista',
    pt: 'Natividade de São João Batista',
    de: 'Geburt des heiligen Johannes des Täufers',
    ru: 'Рождество Иоанна Предтечи',
    la: 'In Nativitate S. Ioannis Baptistae'
  },
  'Saints Peter and Paul, Apostles': {
    it: 'Santi Pietro e Paolo, Apostoli',
    en: 'Saints Peter and Paul, Apostles',
    ro: 'Sfinții Apostoli Petru și Pavel',
    fr: 'Saints Pierre et Paul, Apôtres',
    es: 'Santos Pedro y Pablo, Apóstoles',
    pt: 'Santos Pedro e Paulo, Apóstolos',
    de: 'Heilige Petrus und Paulus, Apostel',
    ru: 'Святые апостолы Петр и Павел',
    la: 'Sanctorum Petri et Pauli'
  },
  'The Assumption of the Blessed Virgin Mary': {
    it: 'Assunzione della B.V. Maria',
    en: 'The Assumption of the Blessed Virgin Mary',
    ro: 'Adormirea Maicii Domnului',
    fr: 'Assomption de la Bienheureuse Vierge Marie',
    es: 'Asunción de la Santísima Virgen María',
    pt: 'Assunção da Bem-aventurada Virgem Maria',
    de: 'Mariä Himmelfahrt',
    ru: 'Успение Пресвятой Богородицы',
    la: 'In Assumptione B.V.M.'
  },
  'Solemnity of All Saints': {
    it: 'Solennità di Tutti i Santi',
    en: 'Solemnity of All Saints',
    ro: 'Toți Sfinții',
    fr: 'Toussaint',
    es: 'Todos los Santos',
    pt: 'Todos os Santos',
    de: 'Allerheiligen',
    ru: 'Всех Святых',
    la: 'Omnium Sanctorum'
  },
  'The Immaculate Conception': {
    it: 'Immacolata Concezione della B.V.M.',
    en: 'The Immaculate Conception',
    ro: 'Neprihănita Zămislire',
    fr: 'Immaculée Conception',
    es: 'Inmaculada Concepción',
    pt: 'Imaculada Conceição',
    de: 'Unbefleckte Empfängnis',
    ru: 'Непорочное Зачатие',
    la: 'In Conceptione Immaculata B.V.M.'
  },
  'The Nativity of the Lord (Christmas)': {
    it: 'Natale del Signore',
    en: 'The Nativity of the Lord (Christmas)',
    ro: 'Nașterea Domnului (Crăciunul)',
    fr: 'Nativité du Seigneur (Noël)',
    es: 'Navidad del Señor',
    pt: 'Natal do Senhor',
    de: 'Geburt des Herrn (Weihnachten)',
    ru: 'Рождество Христово',
    la: 'In Nativitate Domini'
  },
  'Friday within the Octave of Easter': {
    it: 'Venerdì nell\'Ottava di Pasqua',
    en: 'Friday within the Octave of Easter',
    ro: 'Vinerea din Octava Paștelui',
    fr: 'Vendredi dans l\'Octave de Pâques',
    es: 'Viernes de la Octava de Pascua',
    pt: 'Sexta-feira da Oitava da Páscoa',
    de: 'Osteroktav-Freitag',
    ru: 'Пятница в Октаве Пасхи',
    la: 'Feria Sexta infra Octavam Paschae'
  },
  'Solemnity of the Most Sacred Heart of Jesus': {
    it: 'Sacratissimo Cuore di Gesù',
    en: 'Solemnity of the Most Sacred Heart of Jesus',
    ro: 'Preasfânta Inimă a lui Iisus',
    fr: 'Sacré-Cœur de Jésus',
    es: 'Sagrado Corazón de Jesús',
    pt: 'Sagrado Coração de Jesus',
    de: 'Herz-Jesu-Fest',
    ru: 'Пресвятое Сердце Иисуса',
    la: 'Sacratissimi Cordis Iesu'
  }
};

export const EMBER_NAMES = {
  'Lenten Ember Wednesday': { it: 'Quattro Tempora di Quaresima (Mercoledì)', en: 'Lenten Ember Wednesday', ro: 'Miercurea Quatember din Post', fr: 'Quatre-Temps de Carême (Mercredi)', es: 'Témporas de Cuaresma (Miércoles)', pt: 'Quatro Têmporas da Quaresma (Quarta)', de: 'Fasten-Quatember (Mittwoch)', ru: 'Среда Четырёх Времён Поста', la: 'Feria IV Quatuor Temporum Quadragesimae' },
  'Lenten Ember Friday': { it: 'Quattro Tempora di Quaresima (Venerdì)', en: 'Lenten Ember Friday', ro: 'Vinerea Quatember din Post', fr: 'Quatre-Temps de Carême (Vendredi)', es: 'Témporas de Cuaresma (Viernes)', pt: 'Quatro Têmporas da Quaresma (Sexta)', de: 'Fasten-Quatember (Freitag)', ru: 'Пятница Четырёх Времён Поста', la: 'Feria VI Quatuor Temporum Quadragesimae' },
  'Lenten Ember Saturday': { it: 'Quattro Tempora di Quaresima (Sabato)', en: 'Lenten Ember Saturday', ro: 'Sâmbăta Quatember din Post', fr: 'Quatre-Temps de Carême (Samedi)', es: 'Témporas de Cuaresma (Sábado)', pt: 'Quatro Têmporas da Quaresma (Sábado)', de: 'Fasten-Quatember (Samstag)', ru: 'Суббота Четырёх Времён Поста', la: 'Sabbatum Quatuor Temporum Quadragesimae' },
  'Pentecost Ember Wednesday': { it: 'Quattro Tempora di Pentecoste (Mercoledì)', en: 'Pentecost Ember Wednesday', ro: 'Miercurea Quatember de Rusalii', fr: 'Quatre-Temps de Pentecôte (Mercredi)', es: 'Témporas de Pentecostés (Miércoles)', pt: 'Quatro Têmporas de Pentecostes (Quarta)', de: 'Pfingst-Quatember (Mittwoch)', ru: 'Среда Четырёх Времён Пятидесятницы', la: 'Feria IV Quatuor Temporum Pentecostes' },
  'Pentecost Ember Friday': { it: 'Quattro Tempora di Pentecoste (Venerdì)', en: 'Pentecost Ember Friday', ro: 'Vinerea Quatember de Rusalii', fr: 'Quatre-Temps de Pentecôte (Vendredi)', es: 'Témporas de Pentecostés (Viernes)', pt: 'Quatro Têmporas de Pentecostes (Sexta)', de: 'Pfingst-Quatember (Freitag)', ru: 'Пятница Четырёх Времён Пятидесятницы', la: 'Feria VI Quatuor Temporum Pentecostes' },
  'Pentecost Ember Saturday': { it: 'Quattro Tempora di Pentecoste (Sabato)', en: 'Pentecost Ember Saturday', ro: 'Sâmbăta Quatember de Rusalii', fr: 'Quatre-Temps de Pentecôte (Samedi)', es: 'Témporas de Pentecostés (Sábado)', pt: 'Quatro Têmporas de Pentecostes (Sábado)', de: 'Pfingst-Quatember (Samstag)', ru: 'Суббота Четырёх Времён Пятидесятницы', la: 'Sabbatum Quatuor Temporum Pentecostes' },
  'September Ember Wednesday': { it: 'Quattro Tempora d\'Autunno (Mercoledì)', en: 'September Ember Wednesday', ro: 'Miercurea Quatember de Toamnă', fr: 'Quatre-Temps d\'Automne (Mercredi)', es: 'Témporas de Otoño (Miércoles)', pt: 'Quatro Têmporas de Outono (Quarta)', de: 'Herbst-Quatember (Mittwoch)', ru: 'Среда Четырёх Времён Сентября', la: 'Feria IV Quatuor Temporum Septembris' },
  'September Ember Friday': { it: 'Quattro Tempora d\'Autunno (Venerdì)', en: 'September Ember Friday', ro: 'Vinerea Quatember de Toamnă', fr: 'Quatre-Temps d\'Automne (Vendredi)', es: 'Témporas de Otoño (Viernes)', pt: 'Quatro Têmporas de Outono (Sexta)', de: 'Herbst-Quatember (Freitag)', ru: 'Пятница Четырёх Времён Сентября', la: 'Feria VI Quatuor Temporum Septembris' },
  'September Ember Saturday': { it: 'Quattro Tempora d\'Autunno (Sabato)', en: 'September Ember Saturday', ro: 'Sâmbăta Quatember de Toamnă', fr: 'Quatre-Temps d\'Automne (Samedi)', es: 'Témporas de Otoño (Sábado)', pt: 'Quatro Têmporas de Outono (Sábado)', de: 'Herbst-Quatember (Samstag)', ru: 'Суббота Четырёх Времён Сентября', la: 'Sabbatum Quatuor Temporum Septembris' },
  'Advent Ember Wednesday': { it: 'Quattro Tempora d\'Avvento (Mercoledì)', en: 'Advent Ember Wednesday', ro: 'Miercurea Quatember din Advent', fr: 'Quatre-Temps de l\'Avent (Mercredi)', es: 'Témporas de Adviento (Miércoles)', pt: 'Quatro Têmporas do Advento (Quarta)', de: 'Advents-Quatember (Mittwoch)', ru: 'Среда Четырёх Времён Адвента', la: 'Feria IV Quatuor Temporum Adventus' },
  'Advent Ember Friday': { it: 'Quattro Tempora d\'Avvento (Venerdì)', en: 'Advent Ember Friday', ro: 'Vinerea Quatember din Advent', fr: 'Quatre-Temps de l\'Avent (Vendredi)', es: 'Témporas de Adviento (Viernes)', pt: 'Quatro Têmporas do Advento (Sexta)', de: 'Advents-Quatember (Freitag)', ru: 'Пятница Четырёх Времён Адвента', la: 'Feria VI Quatuor Temporum Adventus' },
  'Advent Ember Saturday': { it: 'Quattro Tempora d\'Avvento (Sabato)', en: 'Advent Ember Saturday', ro: 'Sâmbăta Quatember din Advent', fr: 'Quatre-Temps de l\'Avent (Samedi)', es: 'Témporas de Adviento (Sábado)', pt: 'Quatro Têmporas do Advento (Sábado)', de: 'Advents-Quatember (Samstag)', ru: 'Суббота Четырёх Времён Адвента', la: 'Sabbatum Quatuor Temporum Adventus' }
};

export const VIGIL_NAMES = {
  christmas: { it: 'Vigilia di Natale (Vigilia Nativitatis)', en: 'Vigil of Christmas (Eve of the Nativity)', ro: 'Ajunul Crăciunului', fr: 'Vigile de la Nativité', es: 'Vigilia de Navidad', pt: 'Vigília do Natal', de: 'Vigil von Weihnachten (Heiligabend)', ru: 'Навечерие Рождества Христова', la: 'Vigilia Nativitatis Domini' },
  assumption: { it: 'Vigilia dell\'Assunzione', en: 'Vigil of the Assumption', ro: 'Ajunul Adormirii Maicii Domnului', fr: 'Vigile de l\'Assomption', es: 'Vigilia de la Asunción', pt: 'Vigília da Assunção', de: 'Vigil von Mariä Himmelfahrt', ru: 'Навечерие Успения Пресвятой Богородицы', la: 'Vigilia Assumptionis B.V.M.' },
  all_saints: { it: 'Vigilia di Tutti i Santi', en: 'Vigil of All Saints', ro: 'Ajunul Tuturor Sfinților', fr: 'Vigile de la Toussaint', es: 'Vigilia de Todos los Santos', pt: 'Vigília de Todos os Santos', de: 'Vigil von Allerheiligen', ru: 'Навечерие Всех Святых', la: 'Vigilia Omnium Sanctorum' },
  pentecost: { it: 'Vigilia di Pentecoste', en: 'Vigil of Pentecost', ro: 'Ajunul Rusaliilor', fr: 'Vigile de la Pentecôte', es: 'Vigilia de Pentecostés', pt: 'Vigília de Pentecostes', de: 'Pfingstvigil', ru: 'Навечерие Пятидесятницы', la: 'Vigilia Pentecostes' }
};

export const BYZANTINE_SINGLE_NAMES = {
  theophany: { it: 'Vigilia della Teofania (Paramon)', en: 'Eve of Theophany (Paramon)', ro: 'Ajunul Bobotezei (Paramon)', fr: 'Veille de la Théophanie (Paramon)', es: 'Víspera de la Teofanía (Paramon)', pt: 'Véspera da Teofania (Paramon)', de: 'Vorabend der Theophanie (Paramon)', ru: 'Навечерие Богоявления (Крещенский сочельник)', la: 'Vigilia Theophaniae (Paramon)' },
  beheading: { it: 'Decollazione di San Giovanni Battista', en: 'Beheading of Saint John the Baptist', ro: 'Tăierea Capului Sf. Ioan Botezătorul', fr: 'Décollation de Saint Jean-Baptiste', es: 'Degollación de San Juan Bautista', pt: 'Degolação de São João Batista', de: 'Enthauptung des hl. Johannes des Täufers', ru: 'Усекновение главы Иоанна Предтечи', la: 'Decollatio S. Ioannis Baptistae' },
  cross: { it: 'Esaltazione Universale della Santa Croce', en: 'Universal Elevation of the Precious Cross', ro: 'Înălțarea Sfintei Cruci', fr: 'Élévation de la Précieuse Croix', es: 'Exaltación de la Santa Cruz', pt: 'Exaltação da Santa Cruz', de: 'Kreuzerhöhung', ru: 'Воздвижение Честного и Животворящего Креста Господня', la: 'Exaltatio Sanctae Crucis' }
};

export const BYZANTINE_SEASON_NAMES = {
  dormition: { it: 'Digiuno della Dormizione (Uspensky)', en: 'Dormition Fast (Uspensky)', ro: 'Postul Adormirii Maicii Domnului (Sântămăria)', fr: 'Jeûne de la Dormition (Ouspensky)', es: 'Ayuno de la Dormición (Uspensky)', pt: 'Jejum da Dormição (Uspensky)', de: 'Marienfasten (Uspenski)', ru: 'Успенский пост', la: 'Ieiunium Dormitionis Deiparae' },
  nativity: { it: 'Digiuno della Natività (Avvento di San Filippo)', en: 'Nativity Fast (St. Philip\'s Fast)', ro: 'Postul Crăciunului (al Sfântului Filip)', fr: 'Jeûne de la Nativité (Saint-Philippe)', es: 'Ayuno de Navidad (San Felipe)', pt: 'Jejum do Natal (São Filipe)', de: 'Weihnachtsfasten (Philippus-Fasten)', ru: 'Рождественский пост (Филиппов пост)', la: 'Ieiunium Nativitatis (S. Philippi)' },
  apostles: { it: 'Digiuno dei Santi Apostoli (Pietro e Paolo)', en: 'Apostles\' Fast', ro: 'Postul Sfinților Apostoli Petru și Pavel', fr: 'Jeûne des Saints Apôtres', es: 'Ayuno de los Santos Apóstoles', pt: 'Jejum dos Santos Apóstolos', de: 'Apostelfasten (Petri und Pauli)', ru: 'Апостольский пост (Петров пост)', la: 'Ieiunium Sanctorum Apostolorum' }
};

const FRIDAY_PREFIX_I18N = {
  it: 'Venerdì: ',
  en: 'Friday: ',
  ro: 'Vineri: ',
  fr: 'Vendredi : ',
  es: 'Viernes: ',
  pt: 'Sexta-feira: ',
  de: 'Freitag: ',
  ru: 'Пятница: ',
  la: 'Feria Sexta: '
};

export const PENANCE_SCRIPTURES_I18N = {
  ash_wednesday: {
    it: { ref: 'Gioele 2:12-13', text: '«Ritornate a me con tutto il cuore, con digiuni, con pianti e con lamenti». Laceratevi il cuore e non le vesti, ritornate al Signore, vostro Dio.' },
    en: { ref: 'Joel 2:12-13', text: 'Turn ye even to me with all your heart, and with fasting, and with weeping, and with mourning: and rend your heart, and not your garments, and turn unto the Lord your God.' },
    la: { ref: 'Ioel 2:12-13', text: 'Convertimini ad me in toto corde vestro, in ieiunio, et in fletu, et in planctu. Et scindite corda vestra, et non vestimenta vestra, et convertimini ad Dominum Deum vestrum.' },
    ro: { ref: 'Ioel 2:12-13', text: '„Întoarceţi-vă la Mine din toată inima voastră, cu post, cu plâns şi cu tânguire!” Sfâşiaţi-vă inimile, nu hainele, şi întoarceţi-vă la Domnul Dumnezeul vostru.' },
    fr: { ref: 'Joël 2:12-13', text: '«Revenez à moi de tout votre cœur, avec des jeûnes, avec des pleurs et des lamentations!» Déchirez vos cœurs et non vos vêtements, et revenez à l\'Éternel, votre Dieu.' },
    es: { ref: 'Joel 2:12-13', text: '«Convertíos a mí con todo vuestro corazón, con ayuno y lloro y lamento». Rasgad vuestro corazón, y no vuestros vestidos, y convertíos a Jehová vuestro Dios.' },
    pt: { ref: 'Joel 2:12-13', text: '«Convertei-vos a mim de todo o vosso coração; e isso com jejuns, e com choro, e com pranto». E rasgai o vosso coração, e não as vossas vestes, e convertei-vos ao Senhor vosso Deus.' },
    de: { ref: 'Joel 2:12-13', text: '«Bekehrt euch zu mir von ganzem Herzen mit Fasten, mit Weinen, mit Klagen!» Zerreißet eure Herzen und nicht eure Kleider und bekehrt euch zu dem HERRN, eurem Gott.' },
    ru: { ref: 'Иоиль 2:12-13', text: '«Обратитесь ко Мне всем сердцем своим в посте, плаче и рыдании». Раздирайте сердца ваши, а не одежды ваши, и обратитесь к Господу Богу вашему.' }
  },
  good_friday: {
    it: { ref: '1 Pietro 2:24', text: 'Egli portò i nostri peccati nel suo corpo sul legno della croce, perché, non vivendo più per il peccato, vivessimo per la giustizia; dalle sue piaghe siete stati guariti.' },
    en: { ref: '1 Peter 2:24', text: 'Who his own self bare our sins in his own body on the tree, that we, being dead to sins, should live unto righteousness: by whose stripes ye were healed.' },
    la: { ref: '1 Petri 2:24', text: 'Qui peccata nostra ipse pertulit in corpore suo super lignum: ut peccatis mortui, iustitiae vivamus: cuius livore sanati estis.' },
    ro: { ref: '1 Petru 2:24', text: 'El a purtat păcatele noastre în trupul Său pe lemn, pentru ca noi, murind faţă de păcate, să trăim pentru neprihănire; prin rănile Lui aţi fost vindecaţi.' },
    fr: { ref: '1 Pierre 2:24', text: 'Lui qui a porté lui-même nos péchés en son corps sur le bois, afin que morts aux péchés nous vivions pour la justice; lui par les meurtrissures duquel vous avez été guéris.' },
    es: { ref: '1 Pedro 2:24', text: 'Quien llevó él mismo nuestros pecados en su cuerpo sobre el madero, para que nosotros, estando muertos a los pecados, vivamos a la justicia; y por cuya herida fuisteis sanados.' },
    pt: { ref: '1 Pedro 2:24', text: 'Levando ele mesmo em seu corpo os nossos pecados sobre o madeiro, para que, mortos para os pecados, pudéssemos viver para a justiça; e pelas suas feridas fostes sarados.' },
    de: { ref: '1. Petrus 2:24', text: 'Der unsre Sünden selbst hinaufgetragen hat an seinem Leibe auf das Holz, damit wir, den Sünden abgestorben, der Gerechtigkeit leben. Durch seine Wunden seid ihr heil geworden.' },
    ru: { ref: '1 Петра 2:24', text: 'Он грехи наши Сам вознес телом Своим на древо, дабы мы, избавившись от грехов, жили для правды: ранами Его вы исцелились.' }
  },
  solemnity_dispensation: {
    it: { ref: 'Luca 9:23', text: 'Se qualcuno vuole venire dietro a me, rinneghi se stesso, prenda la sua croce ogni giorno e mi segua.' },
    en: { ref: 'Luke 9:23', text: 'If any man will come after me, let him deny himself, and take up his cross daily, and follow me.' },
    la: { ref: 'Lucas 9:23', text: 'Si quis vult post me venire, abneget semetipsum, et tollat crucem suam quotidie, et sequatur me.' },
    ro: { ref: 'Luca 9:23', text: 'Dacă voieşte cineva să vină după Mine, să se lepede de sine, să-şi ia crucea în fiecare zi şi să Mă urmeze.' },
    fr: { ref: 'Luc 9:23', text: 'Si quelqu\'un veut venir après moi, qu\'il renonce à lui-même, qu\'il se charge chaque jour de sa croix, et qu\'il me suive.' },
    es: { ref: 'Lucas 9:23', text: 'Si alguno quiere venir en pos de mí, niéguese a sí mismo, tome su cruz cada día, y sígame.' },
    pt: { ref: 'Lucas 9:23', text: 'Se alguém quer vir após mim, negue-se a si mesmo, e tome cada dia a sua cruz, e siga-me.' },
    de: { ref: 'Lukas 9:23', text: 'Wer mir nachfolgen will, der verleugne sich selbst und nehme sein Kreuz auf sich täglich und folge mir nach.' },
    ru: { ref: 'Луки 9:23', text: 'Если кто хочет идти за Мною, отвергнись себя, и возьми крест свой, и следуй за Мною.' }
  },
  friday_penance: {
    it: { ref: 'Galati 2:20', text: 'Sono stato crocifisso con Cristo: non sono più io che vivo, ma Cristo vive in me.' },
    en: { ref: 'Galatians 2:20', text: 'I am crucified with Christ: nevertheless I live; yet not I, but Christ liveth in me.' },
    la: { ref: 'Ad Galatas 2:20', text: 'Christo confixus sum cruci. Vivo autem, iam non ego: vivit vero in me Christus.' },
    ro: { ref: 'Galateni 2:20', text: 'Am fost răstignit împreună cu Hristos şi trăiesc... dar nu mai trăiesc eu, ci Hristos trăieşte în mine.' },
    fr: { ref: 'Galates 2:20', text: 'J\'ai été crucifié avec Christ; et si je vis, ce n\'est plus moi qui vis, c\'est Christ qui vit en moi.' },
    es: { ref: 'Gálatas 2:20', text: 'Con Cristo estoy juntamente crucificado, y ya no vivo yo, mas vive Cristo en mí.' },
    pt: { ref: 'Gálatas 2:20', text: 'Já estou crucificado com Cristo; e vivo, não mais eu, mas Cristo vive em mim.' },
    de: { ref: 'Galater 2:20', text: 'Ich bin mit Christus gekreuzigt. Ich lebe, doch nun nicht ich, sondern Christus lebt in mir.' },
    ru: { ref: 'Галатам 2:20', text: 'И уже не я живу, но живет во мне Христос. А что ныне живу во плоти, то живу верою в Сына Божия.' }
  },
  lenten_friday: {
    it: { ref: 'Matteo 6:16', text: 'E quando digiunate, non assumete un\'aria malinconica come gli ipocriti... tu invece, quando digiuni, profumati la testa e lavati il volto.' },
    en: { ref: 'Matthew 6:16', text: 'Moreover when ye fast, be not, as the hypocrites, of a sad countenance... but thou, when thou fastest, anoint thine head, and wash thy face.' },
    la: { ref: 'Matthaeus 6:16', text: 'Cum autem ieiunatis, nolite fieri sicut hypocritae, tristes... Tu autem cum ieiunas, unge caput tuum, et faciem tuam lava.' },
    ro: { ref: 'Matei 6:16', text: 'Când postiţi, nu fiţi trişti ca făţarnicii... Ci tu, când posteşti, unge-ţi capul şi spală-ţi faţa.' },
    fr: { ref: 'Matthieu 6:16', text: 'Lorsque vous jeûnez, ne prenez pas un air triste, comme les hypocrites... Mais quand tu jeûnes, parfume ta tête et lave ton visage.' },
    es: { ref: 'Mateo 6:16', text: 'Cuando ayunéis, no seáis austeros, como los hipócritas... pero tú, cuando ayunes, unge tu cabeza y lava tu rostro.' },
    pt: { ref: 'Mateus 6:16', text: 'E, quando jejuardes, não vos mostreis contristados como os hipócritas... Tu, porém, quando jejuares, unge a tua cabeça, e lava o teu rosto.' },
    de: { ref: 'Matthäus 6:16', text: 'Wenn ihr fastet, sollt ihr nicht sauer sehen wie die Heuchler... Wenn du aber fastest, so salbe dein Haupt und wasche dein Angesicht.' },
    ru: { ref: 'Матфея 6:16', text: 'Также, когда поститесь, не будьте унылы, как лицемеры... А ты, когда постишься, помажь голову твою и умой лице твое.' }
  },
  lenten_feria: {
    it: { ref: 'Luca 9:23', text: 'Se qualcuno vuole venire dietro a me, rinneghi se stesso, prenda la sua croce ogni giorno e mi segua.' },
    en: { ref: 'Luke 9:23', text: 'If any man will come after me, let him deny himself, and take up his cross daily, and follow me.' },
    la: { ref: 'Lucas 9:23', text: 'Si quis vult post me venire, abneget semetipsum, et tollat crucem suam quotidie, et sequatur me.' },
    ro: { ref: 'Luca 9:23', text: 'Dacă voieşte cineva să vină după Mine, să se lepede de sine, să-şi ia crucea în fiecare zi şi să Mă urmeze.' },
    fr: { ref: 'Luc 9:23', text: 'Si quelqu\'un veut venir après moi, qu\'il renonce à lui-même, qu\'il se charge chaque jour de sa croix, et qu\'il me suive.' },
    es: { ref: 'Lucas 9:23', text: 'Si alguno quiere venir en pos de mí, niéguese a sí mismo, tome su cruz cada día, y sígame.' },
    pt: { ref: 'Lucas 9:23', text: 'Se alguém quer vir após mim, negue-se a si mesmo, e tome cada dia a sua cruz, e siga-me.' },
    de: { ref: 'Lukas 9:23', text: 'Wer mir nachfolgen will, der verleugne sich selbst und nehme sein Kreuz auf sich täglich und folge mir nach.' },
    ru: { ref: 'Луки 9:23', text: 'Если кто хочет идти за Мною, отвергнись себя, и возьми крест свой, и следуй за Мною.' }
  },
  ordinary: {
    it: { ref: '1 Corinzi 10:31', text: 'Sia dunque che mangiate, sia che beviate, sia che facciate alcun\'altra cosa, fate tutto alla gloria di Dio.' },
    en: { ref: '1 Corinthians 10:31', text: 'Whether therefore ye eat, or drink, or whatsoever ye do, do all to the glory of God.' },
    la: { ref: '1 ad Corinthios 10:31', text: 'Sive ergo manducatis, sive bibitis, sive aliud quid facitis: omnia in gloriam Dei facite.' },
    ro: { ref: '1 Corinteni 10:31', text: 'Deci, fie că mâncaţi, fie că beţi, fie că altceva faceţi, toate spre slava lui Dumnezeu să le faceţi.' },
    fr: { ref: '1 Corinthiens 10:31', text: 'Soit donc que vous mangiez, soit que vous buviez, soit que vous fassiez quelque autre chose, faites tout pour la gloire de Dieu.' },
    es: { ref: '1 Corintios 10:31', text: 'Si pues coméis, o bebéis, o hacéis otra cosa, hacedlo todo para la gloria de Dios.' },
    pt: { ref: '1 Coríntios 10:31', text: 'Portanto, quer comais quer bebais, ou façais outra qualquer coisa, fazei tudo para glória de Deus.' },
    de: { ref: '1. Korinther 10:31', text: 'Ob ihr nun esst oder trinkt oder was ihr auch tut, das tut alles zu Gottes Ehre.' },
    ru: { ref: '1 Коринфянам 10:31', text: 'Итак, едите ли, пьете ли, или иное что делаете, все делайте в славу Божию.' }
  },
  ember_day: {
    it: { ref: 'Atti 13:3', text: 'Allora, dopo aver digiunato e pregato, imposero loro le mani e li congedarono.' },
    en: { ref: 'Acts 13:3', text: 'And when they had fasted and prayed, and laid their hands on them, they sent them away.' },
    la: { ref: 'Actus 13:3', text: 'Tunc ieiunantes, et orantes, imponentesque eis manus, dimiserunt illos.' },
    ro: { ref: 'Faptele Apostolilor 13:3', text: 'Atunci, după ce au postit şi s-au rugat, şi-au pus mâinile peste ei şi i-au lăsat să plece.' },
    fr: { ref: 'Actes 13:3', text: 'Alors, après avoir jeûné et prié, ils leur imposèrent les mains, et les laissèrent partir.' },
    es: { ref: 'Hechos 13:3', text: 'Entonces, habiendo ayunado y orado, les impusieron las manos y los despidieron.' },
    pt: { ref: 'Atos 13:3', text: 'Então, jejuando e orando, e pondo sobre eles as mãos, os despediram.' },
    de: { ref: 'Apostelgeschichte 13:3', text: 'Da fasteten sie und beteten und legten die Hände auf sie und ließen sie ziehen.' },
    ru: { ref: 'Деяния 13:3', text: 'Тогда они, совершив пост и молитву и возложив на них руки, отпустили их.' }
  },
  vigil: {
    it: { ref: 'Matteo 25:6', text: 'A mezzanotte si alzò un grido: «Ecco lo sposo! Andategli incontro!». ' },
    en: { ref: 'Matthew 25:6', text: 'And at midnight there was a cry made, Behold, the bridegroom cometh; go ye out to meet him.' },
    la: { ref: 'Matthaeus 25:6', text: 'Media autem nocte clamor factus est: Ecce sponsus venit, exite obviam ei.' },
    ro: { ref: 'Matei 25:6', text: 'La miezul nopţii s-a auzit o strigare: „Iată mirele, ieşiţi-i în întâmpinare!”' },
    fr: { ref: 'Matthieu 25:6', text: 'Au milieu de la nuit, on cria: Voici l\'époux, allez à sa rencontre!' },
    es: { ref: 'Mateo 25:6', text: 'Y a la medianoche se oyó un clamor: ¡Aquí viene el esposo; salid a recibirle!' },
    pt: { ref: 'Mateus 25:6', text: 'Mas à meia-noite ouviu-se um clamor: Aí vem o esposo, saí-lhe ao encontro.' },
    de: { ref: 'Matthäus 25:6', text: 'Um Mitternacht aber erhob sich lautes Rufen: Siehe, der Bräutigam kommt! Geht hinaus, ihm entgegen!' },
    ru: { ref: 'Матфея 25:6', text: 'Но в полночь раздался крик: «вот, жених идет, выходите навстречу ему».' }
  },
  holy_saturday: {
    it: { ref: 'Romani 6:4', text: 'Per mezzo del battesimo siamo dunque stati sepolti insieme a lui nella morte affinché, come Cristo fu risuscitato dai morti per mezzo della gloria del Padre, così anche noi camminassimo in una vita nuova.' },
    en: { ref: 'Romans 6:4', text: 'Therefore we are buried with him by baptism into death: that like as Christ was raised up from the dead by the glory of the Father, even so we also should walk in newness of life.' },
    la: { ref: 'Ad Romanos 6:4', text: 'Consepulti enim sumus cum illo per baptismum in mortem: ut quomodo Christus surrexit a mortuis per gloriam Patris, ita et nos in novitate vitae ambulemus.' },
    ro: { ref: 'Romani 6:4', text: 'Noi deci, prin botezul în moartea Lui, am fost îngropaţi împreună cu El, pentru ca, după cum Hristos a înviat din morţi prin slava Tatălui, tot aşa şi noi să trăim o viaţă nouă.' },
    fr: { ref: 'Romains 6:4', text: 'Nous avons donc été ensevelis avec lui par le baptême en sa mort, afin que, comme Christ est ressuscité des morts par la gloire du Père, de même nous aussi nous marchions en nouveauté de vie.' },
    es: { ref: 'Romanos 6:4', text: 'Porque somos sepultados juntamente con él para muerte por el bautismo, a fin de que como Cristo resucitó de los muertos por la gloria del Padre, así también nosotros andemos en vida nueva.' },
    pt: { ref: 'Romanos 6:4', text: 'De sorte que fomos sepultados com ele pelo batismo na morte; para que, como Cristo foi ressuscitado dentre os mortos, pela glória do Pai, assim andemos nós também em novidade de vida.' },
    de: { ref: 'Römer 6:4', text: 'So sind wir ja mit ihm begraben durch die Taufe in den Tod, damit, wie Christus auferweckt ist von den Toten durch die Herrlichkeit des Vaters, so auch wir in einem neuen Leben wandeln.' },
    ru: { ref: 'Римлянам 6:4', text: 'Итак мы погреблись с Ним крещением в смерть, дабы, как Христос воскрес из мертвых славою Отца, так и нам ходить в обновленной жизни.' }
  },
  traditional_lenten_weekday: {
    it: { ref: 'Salmo 35:13', text: 'Io, quand\'erano malati, vestivo di sacco, mi mortificavo col digiuno, e la mia preghiera tornava nel mio seno.' },
    en: { ref: 'Psalm 35:13', text: 'I humbled my soul with fasting; and my prayer returned into mine own bosom.' },
    la: { ref: 'Psalmus 35:13', text: 'Ego autem, cum infirmi essent, induebar cilicio; humiliabam in ieiunio animam meam, et oratio mea in sinu meo convertebatur.' },
    ro: { ref: 'Psalmul 35:13', text: 'Şi eu, când erau ei bolnavi, mă îmbrăcam cu sac, îmi smeream sufletul cu post şi mă rugam cu capul plecat la sân.' },
    fr: { ref: 'Psaume 35:13', text: 'Et moi, quand ils étaient malades, je revêtais un sac, j\'humiliais mon âme par le jeûne, et je priais, la tête penchée sur mon sein.' },
    es: { ref: 'Salmo 35:13', text: 'Pero yo, cuando ellos enfermaron, me vestí de cilicio; afligí con ayuno mi alma, y mi oración se volvía a mi seno.' },
    pt: { ref: 'Salmo 35:13', text: 'Mas, quanto a mim, quando estavam enfermos, as minhas vestes eram o cilício; humilhava a minha alma com o jejum, e a minha oração voltava para o meu seio.' },
    de: { ref: 'Psalm 35:13', text: 'Ich aber, da sie krank waren, zog einen Sack an, kasteite meine Seele mit Fasten und betete von ganzem Herzen.' },
    ru: { ref: 'Псалтирь 34:13', text: 'Я во время болезни их одевался во вретище, изнурял постом душу мою, и молитва моя возвращалась в недро мое.' }
  },
  traditional_lenten_friday: {
    it: { ref: 'Salmo 35:13', text: 'Io, quand\'erano malati, vestivo di sacco, mi mortificavo col digiuno, e la mia preghiera tornava nel mio seno.' },
    en: { ref: 'Psalm 35:13', text: 'I humbled my soul with fasting; and my prayer returned into mine own bosom.' },
    la: { ref: 'Psalmus 35:13', text: 'Ego autem, cum infirmi essent, induebar cilicio; humiliabam in ieiunio animam meam, et oratio mea in sinu meo convertebatur.' },
    ro: { ref: 'Psalmul 35:13', text: 'Şi eu, când erau ei bolnavi, mă îmbrăcam cu sac, îmi smeream sufletul cu post şi mă rugam cu capul plecat la sân.' },
    fr: { ref: 'Psaume 35:13', text: 'Et moi, quand ils étaient malades, je revêtais un sac, j\'humiliais mon âme par le jeûne, et je priais, la tête penchée sur mon sein.' },
    es: { ref: 'Salmo 35:13', text: 'Pero yo, cuando ellos enfermaron, me vestí de cilicio; afligí con ayuno mi alma, y mi oración se volvía a mi seno.' },
    pt: { ref: 'Salmo 35:13', text: 'Mas, quanto a mim, quando estavam enfermos, as minhas vestes eram o cilício; humilhava a minha alma com o jejum, e a minha oração voltava para o meu seio.' },
    de: { ref: 'Psalm 35:13', text: 'Ich aber, da sie krank waren, zog einen Sack an, kasteite meine Seele mit Fasten und betete von ganzem Herzen.' },
    ru: { ref: 'Псалтирь 34:13', text: 'Я во время болезни их одевался во вретище, изнурял постом душу мою, и молитва моя возвращалась в недро мое.' }
  },
  traditional_lenten_saturday: {
    it: { ref: 'Salmo 35:13', text: 'Io, quand\'erano malati, vestivo di sacco, mi mortificavo col digiuno, e la mia preghiera tornava nel mio seno.' },
    en: { ref: 'Psalm 35:13', text: 'I humbled my soul with fasting; and my prayer returned into mine own bosom.' },
    la: { ref: 'Psalmus 35:13', text: 'Ego autem, cum infirmi essent, induebar cilicio; humiliabam in ieiunio animam meam, et oratio mea in sinu meo convertebatur.' },
    ro: { ref: 'Psalmul 35:13', text: 'Şi eu, când erau ei bolnavi, mă îmbrăcam cu sac, îmi smeream sufletul cu post şi mă rugam cu capul plecat la sân.' },
    fr: { ref: 'Psaume 35:13', text: 'Et moi, quand ils étaient malades, je revêtais un sac, j\'humiliais mon âme par le jeûne, et je priais, la tête penchée sur mon sein.' },
    es: { ref: 'Salmo 35:13', text: 'Pero yo, cuando ellos enfermaron, me vestí de cilicio; afligí con ayuno mi alma, y mi oración se volvía a mi seno.' },
    pt: { ref: 'Salmo 35:13', text: 'Mas, quanto a mim, quando estavam enfermos, as minhas vestes eram o cilício; humilhava a minha alma com o jejum, e a minha oração voltava para o meu seio.' },
    de: { ref: 'Psalm 35:13', text: 'Ich aber, da sie krank waren, zog einen Sack an, kasteite meine Seele mit Fasten und betete von ganzem Herzen.' },
    ru: { ref: 'Псалтирь 34:13', text: 'Я во время болезни их одевался во вретище, изнурял постом душу мою, и молитва моя возвращалась в недро мое.' }
  },
  traditional_friday: {
    it: { ref: 'Galati 2:20', text: 'Sono stato crocifisso con Cristo: non sono più io che vivo, ma Cristo vive in me.' },
    en: { ref: 'Galatians 2:20', text: 'I am crucified with Christ: nevertheless I live; yet not I, but Christ liveth in me.' },
    la: { ref: 'Ad Galatas 2:20', text: 'Christo confixus sum cruci. Vivo autem, iam non ego: vivit vero in me Christus.' },
    ro: { ref: 'Galateni 2:20', text: 'Am fost răstignit împreună cu Hristos şi trăiesc... dar nu mai trăiesc eu, ci Hristos trăieşte în mine.' },
    fr: { ref: 'Galates 2:20', text: 'J\'ai été crucifié avec Christ; et si je vis, ce n\'est plus moi qui vis, c\'est Christ qui vit en moi.' },
    es: { ref: 'Gálatas 2:20', text: 'Con Cristo estoy juntamente crucificado, y ya no vivo yo, mas vive Cristo en mí.' },
    pt: { ref: 'Gálatas 2:20', text: 'Já estou crucificado com Cristo; e vivo, não mais eu, mas Cristo vive em mim.' },
    de: { ref: 'Galater 2:20', text: 'Ich bin mit Christus gekreuzigt. Ich lebe, doch nun nicht ich, sondern Christus lebt in mir.' },
    ru: { ref: 'Галатам 2:20', text: 'И уже не я живу, но живет во мне Христос. А что ныне живу во плоти, то живу верою в Сына Божия.' }
  },
  byzantine_strict_single: {
    it: { ref: 'Matteo 3:4', text: 'Giovanni portava un vestito di peli di cammello e una cintura di cuoio attorno ai fianchi; il suo cibo erano locuste e miele selvatico.' },
    en: { ref: 'Matthew 3:4', text: 'And the same John had his raiment of camel\'s hair, and a leathern girdle about his loins; and his meat was locusts and wild honey.' },
    la: { ref: 'Matthaeus 3:4', text: 'Ipse autem Ioannes habebat vestimentum de pilis camelorum, et zonam pelliceam circa lumbos suos: esca autem eius erat locustae, et mel silvestre.' },
    ro: { ref: 'Matei 3:4', text: 'Ioan purta o haină de păr de cămilă şi la mijloc era încins cu o cingătoare de piele; şi hrana lui erau lăcuste şi miere sălbatică.' },
    fr: { ref: 'Matthieu 3:4', text: 'Jean avait un vêtement de poils de chameau, et une ceinture de cuir autour des reins; il se nourrissait de sauterelles et de miel sauvage.' },
    es: { ref: 'Mateo 3:4', text: 'Y Juan estaba vestido de pelo de camello, y tenía un cinto de cuero alrededor de sus lomos; y su comida era langostas y miel silvestre.' },
    pt: { ref: 'Mateus 3:4', text: 'E este João tinha as suas vestes de pelos de camelo, e um cinto de couro em torno de seus lombos; e alimentava-se de gafanhotos e de mel silvestre.' },
    de: { ref: 'Matthäus 3:4', text: 'Er aber, Johannes, hatte ein Gewand aus Kamelhaaren und einen ledernen Gürtel um seine Lenden; seine Speise aber waren Heuschrecken und wilder Honig.' },
    ru: { ref: 'Матфея 3:4', text: 'Сам же Иоанн имел одежду из верблюжьего волоса и пояс кожаный на чреслах своих, а пищею его были акриды и дикий мед.' }
  },
  byzantine_elevation_cross: {
    it: { ref: '1 Corinzi 1:18', text: 'La parola della croce infatti è stoltezza per quelli che si perdono, ma per quelli che si salvano, ossia per noi, è potenza di Dio.' },
    en: { ref: '1 Corinthians 1:18', text: 'For the preaching of the cross is to them that perish foolishness; but unto us which are saved it is the power of God.' },
    la: { ref: '1 ad Corinthios 1:18', text: 'Verbum enim crucis pereuntibus quidem stultitia est: iis autem qui salvi fiunt, id est nobis, virtus Dei est.' },
    ro: { ref: '1 Corinteni 1:18', text: 'Căci propovăduirea crucii este o nebunie pentru cei ce sunt pe calea pierzării; dar pentru noi, care suntem pe calea mântuirii, este puterea lui Dumnezeu.' },
    fr: { ref: '1 Corinthiens 1:18', text: 'Car la prédication de la croix est une folie pour ceux qui périssent; mais pour nous qui sommes sauvés, elle est une puissance de Dieu.' },
    es: { ref: '1 Corintios 1:18', text: 'Porque la palabra de la cruz es locura a los que se pierden; pero a los que se salvan, esto es, a nosotros, es poder de Dios.' },
    pt: { ref: '1 Coríntios 1:18', text: 'Porque a palavra da cruz é loucura para os que perecem; mas para nós, que somos salvos, é o poder de Deus.' },
    de: { ref: '1. Korinther 1:18', text: 'Denn das Wort vom Kreuz ist eine Torheit denen, die verloren werden; uns aber, die wir selig werden, ist\'s eine Gotteskraft.' },
    ru: { ref: '1 Коринфянам 1:18', text: 'Ибо слово о кресте для погибающих юродство есть, а для нас, спасаемых, — сила Божия.' }
  },
  byzantine_great_lent: {
    it: { ref: 'Preghiera di Sant\'Efrem', text: '«Signore e Sovrano della mia vita, allontana da me lo spirito di pigrizia, di sconforto, di brama di potere e di vaniloquio. Concedi invece al tuo servo uno spirito di castità, di umiltà, di pazienza e di amore».' },
    en: { ref: 'Prayer of St. Ephrem', text: 'O Lord and Master of my life, take from me the spirit of sloth, despair, lust of power, and idle talk. But give rather the spirit of chastity, humility, patience, and love to Thy servant.' },
    la: { ref: 'Oratio Sancti Ephrem', text: 'Domine et Magister vitae meae, spiritum otii, curiositatis, dominationis et vaniloquii ne mihi des. Spiritum vero castitatis, humilitatis, patientiae et caritatis largire mihi servo tuo.' },
    ro: { ref: 'Rugăciunea Sfântului Efrem Sirul', text: '„Doamne şi Stăpânul vieţii mele, duhul trândăviei, al grijii de multe, al iubirii de stăpânire şi al grăirii în deşert nu mi-l da mie. Iar duhul curăţiei, al gândului smerit, al răbdării şi al dragostei dăruieşte-l mie, slugii Tale.”' },
    fr: { ref: 'Prière de Saint Éphrem', text: '«Seigneur et Maître de ma vie, éloigne de moi l\'esprit de paresse, de découragement, de domination et de vaines paroles. Mais accorde à ton serviteur l\'esprit de chasteté, d\'humilité, de patience et d\'amour».' },
    es: { ref: 'Oración de San Efrén', text: '«¡Señor y Soberano de mi vida! Aleja de mí el espíritu de pereza, desaliento, ambición de poder y vanilocuencia. Mas concede a tu siervo el espíritu de castidad, humildad, paciencia y amor».' },
    pt: { ref: 'Oração de Santo Efrém', text: '«Senhor e Soberano da minha vida, afasta de mim o espírito de preguiça, desânimo, ambição de poder e palavras vãs. Mas concede ao teu servo o espírito de castidade, humildade, paciência e amor».' },
    de: { ref: 'Gebet des hl. Ephräm', text: '«Herr und Meister meines Lebens, den Geist des Müßiggangs, der Verzagtheit, der Herrschsucht und des Geschwätzes gib mir nicht! Den Geist der Keuschheit, der Demut, der Geduld und der Liebe aber schenke Deinem Diener!»' },
    ru: { ref: 'Молитва св. Ефрема Сирина', text: '«Господи и Владыко живота моего, дух праздности, уныния, любоначалия и празднословия не даждь ми. Дух же целомудрия, смиренномудрия, терпения и любве даруй ми, рабу Твоему».' }
  },
  byzantine_seasonal: {
    it: { ref: 'Filippesi 4:8', text: 'Tutto quello che è vero, nobile, giusto, puro, amabile, onorato, quello che è virtù e merita lode, tutto questo sia oggetto dei vostri pensieri.' },
    en: { ref: 'Philippians 4:8', text: 'Finally, brethren, whatsoever things are true, honest, just, pure, lovely, of good report; think on these things.' },
    la: { ref: 'Ad Philippenses 4:8', text: 'De cetero, fratres, quaecumque sunt vera, quaecumque pudica, quaecumque iusta, quaecumque sancta, quaecumque amabilia, quaecumque bonae famae: haec cogitate.' },
    ro: { ref: 'Filipeni 4:8', text: 'Încolo, fraţii mei, tot ce este adevărat, tot ce este vrednic de cinste, tot ce este drept, tot ce este curat, tot ce este vrednic de iubit: la acestea să vă gândiţi.' },
    fr: { ref: 'Philippiens 4:8', text: 'Au reste, frères, que tout ce qui est vrai, tout ce qui est honorable, tout ce qui est juste, tout ce qui est pur, tout ce qui est aimable... soit l\'objet de vos pensées.' },
    es: { ref: 'Filipenses 4:8', text: 'Por lo demás, hermanos, todo lo que es verdadero, todo lo honesto, todo lo justo, todo lo puro, todo lo amable... en esto pensad.' },
    pt: { ref: 'Filipenses 4:8', text: 'Quanto ao mais, irmãos, tudo o que é verdadeiro, tudo o que é honesto, tudo o que é justo, tudo o que é puro, tudo o que é amável... nisso pensai.' },
    de: { ref: 'Philipper 4:8', text: 'Weiter, liebe Brüder: Was wahrhaftig ist, was ehrbar, was gerecht, was rein, was liebenswert, was einen guten Ruf hat... darüber denkt nach!' },
    ru: { ref: 'Филиппийцам 4:8', text: 'Наконец, братия мои, что только истинно, что честно, что справедливо, что чисто, что любезно, что достославно: о том помышляйте.' }
  },
  byzantine_wed_fri: {
    it: { ref: 'Didachè 8:1', text: 'I vostri digiuni non siano con gli ipocriti; voi invece digiunate il quarto giorno (mercoledì) e il giorno della preparazione (venerdì).' },
    en: { ref: 'Didache 8:1', text: 'Let not your fasts be with the hypocrites; but you shall fast on Wednesdays and Fridays.' },
    la: { ref: 'Didache 8:1', text: 'Ieiunia autem vestra ne sint cum hypocritis; vos vero ieiunate quarta et parasceve.' },
    ro: { ref: 'Didahia 8:1', text: 'Posturile voastre să nu fie ca ale făţarnicilor; voi însă postiţi miercurea şi vinerea.' },
    fr: { ref: 'Didaché 8:1', text: 'Que vos jeûnes ne soient pas avec les hypocrites; vous, jeûnez le mercredi et le vendredi.' },
    es: { ref: 'Didaché 8:1', text: 'No hagáis vuestros ayunos con los hipócritas; vosotros ayunad miércoles y viernes.' },
    pt: { ref: 'Didaquê 8:1', text: 'Não façais os vossos jejuns com os hipócritas; vós, porém, jejuai às quartas e sextas-feiras.' },
    de: { ref: 'Didache 8:1', text: 'Eure Fasten aber seien nicht zusammen mit den Heuchlern; ihr aber sollt mittwochs und freitags fasten.' },
    ru: { ref: 'Дидахе 8:1', text: 'Посты же ваши да не будут с лицемерами; вы же поститесь в среду и пятницу.' }
  },
  protestant_ash_wednesday: {
    it: { ref: 'Matteo 6:17-18', text: 'Tu invece, quando digiuni, profumati la testa e lavati il volto, perché la gente non veda che tu digiuni, ma solo il Padre tuo, che è nel segreto.' },
    en: { ref: 'Matthew 6:17-18', text: 'But thou, when thou fastest, anoint thine head, and wash thy face; that thou appear not unto men to fast, but unto thy Father which is in secret.' },
    la: { ref: 'Matthaeus 6:17-18', text: 'Tu autem cum ieiunas, unge caput tuum, et faciem tuam lava, ne videaris hominibus ieiunans, sed Patri tuo, qui est in abscondito.' },
    ro: { ref: 'Matei 6:17-18', text: 'Ci tu, când posteşti, unge-ţi capul şi spală-ţi faţa, ca să nu te arăţi oamenilor că posteşti, ci Tatălui tău, care este în ascuns.' },
    fr: { ref: 'Matthieu 6:17-18', text: 'Mais quand tu jeûnes, parfume ta tête et lave ton visage, afin de ne pas montrer aux hommes que tu jeûnes, mais à ton Père qui est là dans le lieu secret.' },
    es: { ref: 'Mateo 6:17-18', text: 'Pero tú, cuando ayunes, unge tu cabeza y lava tu rostro, para no mostrar a los hombres que ayunas, sino a tu Padre que está en secreto.' },
    pt: { ref: 'Mateus 6:17-18', text: 'Tu, porém, quando jejuares, unge a tua cabeça, e lava o teu rosto, para não pareceres aos homens que jejuas, mas a teu Pai, que está em secreto.' },
    de: { ref: 'Matthäus 6:17-18', text: 'Wenn du aber fastest, so salbe dein Haupt und wasche dein Angesicht, damit du nicht vor den Leuten fastest, sondern vor deinem Vater, der im Verborgenen ist.' },
    ru: { ref: 'Матфея 6:17-18', text: 'А ты, когда постишься, помажь голову твою и умой лице твое, чтобы явиться постящимся не пред людьми, но пред Отцом твоим, Который втайне.' }
  },
  protestant_good_friday: {
    it: { ref: 'Galati 6:14', text: 'Quanto a me invece non ci sia altro vanto che nella croce del Signore nostro Gesù Cristo, per mezzo della quale il mondo per me è stato crocifisso, come io per il mondo.' },
    en: { ref: 'Galatians 6:14', text: 'God forbid that I should glory, save in the cross of our Lord Jesus Christ, by whom the world is crucified unto me, and I unto the world.' },
    la: { ref: 'Ad Galatas 6:14', text: 'Mihi autem absit gloriari, nisi in cruce Domini nostri Iesu Christi: per quem mihi mundus crucifixus est, et ego mundo.' },
    ro: { ref: 'Galateni 6:14', text: 'În ce mă priveşte, departe de mine gândul să mă laud cu altceva decât cu crucea Domnului nostru Iisus Hristos, prin care lumea este răstignită faţă de mine şi eu faţă de lume!' },
    fr: { ref: 'Galates 6:14', text: 'Pour ce qui me concerne, loin de moi la pensée de me glorifier d\'autre chose que de la croix de notre Seigneur Jésus-Christ, par qui le monde est crucifié pour moi, comme je le suis pour le monde!' },
    es: { ref: 'Gálatas 6:14', text: 'Pero lejos esté de mí gloriarme, sino en la cruz de nuestro Señor Jesucristo, por quien el mundo me es crucificado a mí, y yo al mundo.' },
    pt: { ref: 'Gálatas 6:14', text: 'Mas longe esteja de mim gloriar-me, a não ser na cruz de nosso Senhor Jesus Cristo, pela qual o mundo está crucificado para mim e eu para o mundo.' },
    de: { ref: 'Galater 6:14', text: 'Es sei aber fern von mir, mich zu rühmen als allein des Kreuzes unseres Herrn Jesus Christus, durch den mir die Welt gekreuzigt ist und ich der Welt.' },
    ru: { ref: 'Галатам 6:14', text: 'А я не желаю хвалиться, разве только крестом Господа нашего Иисуса Христа, которым для меня мир распят, и я для мира.' }
  },
  protestant_friday: {
    it: { ref: 'Romani 12:1', text: 'Vi esorto dunque, fratelli, per la misericordia di Dio, a offrire i vostri corpi come sacrificio vivente, santo e gradito a Dio; è questo il vostro culto spirituale.' },
    en: { ref: 'Romans 12:1', text: 'I beseech you therefore, brethren, by the mercies of God, that ye present your bodies a living sacrifice, holy, acceptable unto God, which is your reasonable service.' },
    la: { ref: 'Ad Romanos 12:1', text: 'Obsecro itaque vos fratres per misericordiam Dei, ut exhibeatis corpora vestra hostiam viventem, sanctam, Deo placentem, rationabile obsequium vestrum.' },
    ro: { ref: 'Romani 12:1', text: 'Vă îndemn dar, fraţilor, pentru îndurările lui Dumnezeu, să aduceţi trupurile voastre ca o jertfă vie, sfântă, plăcută lui Dumnezeu: aceasta va fi din partea voastră o slujbă duhovnicească.' },
    fr: { ref: 'Romains 12:1', text: 'Je vous exhorte donc, frères, par les compassions de Dieu, à offrir vos corps comme un sacrifice vivant, saint, agréable à Dieu, ce qui sera de votre part un culte raisonnable.' },
    es: { ref: 'Romanos 12:1', text: 'Así que, hermanos, os ruego por las misericordias de Dios, que presentéis vuestros cuerpos en sacrificio vivo, santo, agradable a Dios, que es vuestro culto racional.' },
    pt: { ref: 'Romanos 12:1', text: 'Rogo-vos, pois, irmãos, pela compaixão de Deus, que apresenteis os vossos corpos em sacrifício vivo, santo e agradável a Deus, que é o vosso culto racional.' },
    de: { ref: 'Römer 12:1', text: 'Ich ermahne euch nun, liebe Brüder, durch die Barmherzigkeit Gottes, dass ihr eure Leiber hingebt als ein Opfer, das lebendig, heilig und Gott wohlgefällig ist. Das sei euer vernünftiger Gottesdienst.' },
    ru: { ref: 'Римлянам 12:1', text: 'Итак умоляю вас, братия, милосердием Божиим, представьте тела ваши в жертву живую, святую, благоугодную Богу, для разумного служения вашего.' }
  },
  protestant_lenten: {
    it: { ref: 'Daniele 10:3', text: 'Non mangiai alcun cibo prelibato, né carne né vino entrarono nella mia bocca e non mi unsi d\'olio, finché non furono compiute tre settimane intere.' },
    en: { ref: 'Daniel 10:3', text: 'I ate no pleasant bread, neither came flesh nor wine in my mouth, till three whole weeks were fulfilled.' },
    la: { ref: 'Daniel 10:3', text: 'Panem desiderabilem non comedi, et caro et vinum non introierunt in os meum, sed neque unguento unctus sum, donec complerentur trium hebdomadarum dies.' },
    ro: { ref: 'Daniel 10:3', text: 'N-am mâncat deloc bucate alese, nu mi-a intrat în gură nici carne, nici vin şi nici nu m-am uns deloc, până s-au împlinit cele trei săptămâni.' },
    fr: { ref: 'Daniel 10:3', text: 'Je ne mangeai aucun mets délicat, il n\'entra ni viande ni vin dans ma bouche, et je ne m\'oignis point jusqu\'à ce que les trois semaines fussent accomplies.' },
    es: { ref: 'Daniel 10:3', text: 'No comí manjar delicado, ni entró en mi boca carne ni vino, ni me ungí con ungüento, hasta que se cumplieron las tres semanas.' },
    pt: { ref: 'Daniel 10:3', text: 'Manjar desejável não comi, nem carne nem vinho entraram na minha boca, nem me ungi com unguento, até que se cumpriram as três semanas.' },
    de: { ref: 'Daniel 10:3', text: 'Ich aß keine leckere Speise, Fleisch und Wein kam nicht in meinen Mund; ich salbte mich auch nicht, bis die drei Wochen um waren.' },
    ru: { ref: 'Даниил 10:3', text: 'Вкусного хлеба я не ел; мясо и вино не входило в уста мои, и мастями я не умащал себя до исполнения трех седмиц дней.' }
  },
  protestant_ordinary: {
    it: { ref: 'Romani 14:6', text: 'Chi bada al giorno, vi bada per il Signore; chi mangia, mangia per il Signore, poiché rende grazie a Dio; e chi non mangia, non mangia per il Signore e rende grazie a Dio.' },
    en: { ref: 'Romans 14:6', text: 'He that regardeth the day, regardeth it unto the Lord; and he that regardeth not the day, to the Lord he doth not regard it. He that eateth, eateth to the Lord, for he giveth God thanks.' },
    la: { ref: 'Ad Romanos 14:6', text: 'Qui sapit diem, Domino sapit; et qui manducat, Domino manducat, gratias enim agit Deo; et qui non manducat, Domino non manducat et gratias agit Deo.' },
    ro: { ref: 'Romani 14:6', text: 'Cel ce ţine ziua, o ţine pentru Domnul; şi cel ce mănâncă, pentru Domnul mănâncă, căci mulţumeşte lui Dumnezeu; şi cel ce nu mănâncă, pentru Domnul nu mănâncă şi mulţumeşte lui Dumnezeu.' },
    fr: { ref: 'Romains 14:6', text: 'Celui qui distingue entre les jours agit ainsi pour le Seigneur. Celui qui mange, c\'est pour le Seigneur qu\'il mange, car il rend grâces à Dieu; celui qui ne mange pas, c\'est pour le Seigneur qu\'il ne mange pas, et il rend grâces à Dieu.' },
    es: { ref: 'Romanos 14:6', text: 'El que hace caso del día, lo hace para el Señor; y el que come, para el Señor come, porque da gracias a Dios; y el que no come, para el Señor no come, y da gracias a Dios.' },
    pt: { ref: 'Romanos 14:6', text: 'Aquele que faz caso do dia, para o Senhor o faz; e o que come, para o Senhor come, porque dá graças a Deus; e o que não come, para o Senhor não come, e dá graças a Deus.' },
    de: { ref: 'Römer 14:6', text: 'Wer auf den Tag achtet, der tut\'s im Blick auf den Herrn; und wer isst, der isst im Blick auf den Herrn, denn er dankt Gott; und wer nicht isst, der isst im Blick auf den Herrn nicht und dankt Gott auch.' },
    ru: { ref: 'Римлянам 14:6', text: 'Кто различает дни, для Господа различает; и кто не различает дней, для Господа не различает. Кто ест, для Господа ест, ибо благодарит Бога; и кто не ест, для Господа не ест, и благодарит Бога.' }
  },
  ecumenical_friday: {
    it: { ref: 'Isaia 58:6-7', text: 'Non è questo il digiuno che io voglio: sciogliere le catene inique, togliere i legami del giogo, rimandare liberi gli oppressi e spezzare ogni giogo? Non consiste forse nel dividere il pane con l\'affamato?' },
    en: { ref: 'Isaiah 58:6-7', text: 'Is not this the fast that I have chosen? to loose the bands of wickedness, to undo the heavy burdens, and to let the oppressed go free... to deal thy bread to the hungry?' },
    la: { ref: 'Isaias 58:6-7', text: 'Nonne hoc est magis ieiunium quod elegi? Dissolve colligationes impietatis, solve fasciculos deprimentes, dimitte eos qui confracti sunt liberos... Frange esurienti panem tuum.' },
    ro: { ref: 'Isaia 58:6-7', text: 'Nu este oare acesta postul pe care l-am ales: desfaceţi lanţurile răutăţii, dezlegaţi legăturile jugului, lăsaţi liberi pe cei asupriţi... Împarte pâinea ta cu cel flămând?' },
    fr: { ref: 'Ésaïe 58:6-7', text: 'Voici le jeûne auquel je prends plaisir: Détache les chaînes de la méchanceté, dénoue les liens de la servitude, renvoie libres les opprimés... Partage ton pain avec celui qui a faim.' },
    es: { ref: 'Isaías 58:6-7', text: '¿No es más bien el ayuno que yo escogí, desatar las ligaduras de impiedad, soltar las cargas de opresión, y dejar ir libres a los quebrantados... partir tu pan con el hambriento?' },
    pt: { ref: 'Isaías 58:6-7', text: 'Porventura não é este o jejum que escolhi, que soltes as ligaduras da impiedade, que desfaças as ataduras do jugo e que deixes livres os oprimidos... repartir o teu pão com o faminto?' },
    de: { ref: 'Jesaja 58:6-7', text: 'Ist nicht das ein Fasten, an dem ich Gefallen habe: Lass los, die du mit Unrecht gebunden hast, lass ledig, auf die du das Joch gelegt hast! Gib frei, die du bedrückst... Brich dem Hungrigen dein Brot!' },
    ru: { ref: 'Исаия 58:6-7', text: 'Вот пост, который Я избрал: разреши оковы неправды, развяжи узы ярма, и угнетенных отпусти на свободу... раздели с голодным хлеб твой?' }
  }
};

/**
 * Returns localized metadata for a Christian tradition.
 */
export function getTraditionMeta(tradId, lang = null) {
  const currentLang = (lang || getLanguage() || 'it').toLowerCase();
  const trad = TRADITIONS_I18N[tradId] || TRADITIONS_I18N.catholic;
  return trad[currentLang] || trad.it || trad.en;
}

/**
 * Localizes a status object returned by getDayPenanceStatus.
 */
export function localizePenanceStatus(statusObj, lang = null) {
  if (!statusObj) return statusObj;
  const currentLang = (lang || getLanguage() || 'it').toLowerCase();
  const key = statusObj.statusKey || statusObj.type;
  
  const catalog = PENANCE_STATUS_I18N[key];
  const loc = catalog ? (catalog[currentLang] || catalog.it || catalog.en) : null;

  let computedTitle = loc?.title || statusObj.title;

  // Custom title adjustments for dynamic events
  if (statusObj.solemnityKey) {
    const sNameObj = SOLEMNITY_NAMES[statusObj.solemnityKey];
    const sName = sNameObj ? (sNameObj[currentLang] || sNameObj.it || statusObj.solemnityKey) : statusObj.solemnityKey;
    const prefix = FRIDAY_PREFIX_I18N[currentLang] || FRIDAY_PREFIX_I18N.it;
    computedTitle = `${prefix}${sName}`;
  } else if (statusObj.emberKey) {
    const eNameObj = EMBER_NAMES[statusObj.emberKey];
    if (eNameObj) computedTitle = eNameObj[currentLang] || eNameObj.it || eNameObj.en;
  } else if (statusObj.vigilKey) {
    const vNameObj = VIGIL_NAMES[statusObj.vigilKey];
    if (vNameObj) computedTitle = vNameObj[currentLang] || vNameObj.it || vNameObj.en;
  } else if (statusObj.byzantineSingleKey) {
    const bNameObj = BYZANTINE_SINGLE_NAMES[statusObj.byzantineSingleKey];
    if (bNameObj) computedTitle = bNameObj[currentLang] || bNameObj.it || bNameObj.en;
  } else if (statusObj.byzantineSeasonKey) {
    const bsNameObj = BYZANTINE_SEASON_NAMES[statusObj.byzantineSeasonKey];
    if (bsNameObj) computedTitle = bsNameObj[currentLang] || bsNameObj.it || bsNameObj.en;
  }

  // Localize scripture reference and quote text
  let locScripture = statusObj.scripture;
  const scriptI18n = PENANCE_SCRIPTURES_I18N[key] || PENANCE_SCRIPTURES_I18N[statusObj.type] || PENANCE_SCRIPTURES_I18N.ordinary;
  if (scriptI18n) {
    const langScript = scriptI18n[currentLang] || scriptI18n.it || scriptI18n.en;
    if (langScript) {
      locScripture = {
        ref: langScript.ref,
        text: langScript.text
      };
    }
  } else if (statusObj.scripture) {
    const rawRef = statusObj.scripture.ref || '';
    const localizedRef = localizeScriptureRef(rawRef, currentLang);
    const locText = (statusObj.scripture.archives && statusObj.scripture.archives[currentLang]) || statusObj.scripture.text;
    locScripture = {
      ...statusObj.scripture,
      ref: localizedRef,
      text: locText
    };
  }

  return {
    ...statusObj,
    title: computedTitle,
    subtitle: loc?.subtitle || statusObj.subtitle,
    badge: {
      ...(statusObj.badge || {}),
      label: loc?.badgeLabel || statusObj.badge?.label
    },
    rules: {
      ...(statusObj.rules || {}),
      fasting: loc?.fasting || statusObj.rules?.fasting,
      abstinence: loc?.abstinence || statusObj.rules?.abstinence,
      allowed: loc?.allowed || statusObj.rules?.allowed,
      avoid: loc?.avoid || statusObj.rules?.avoid
    },
    obligation: loc?.obligation || statusObj.obligation,
    theology: loc?.theology || statusObj.theology,
    scripture: locScripture,
    prayer: loc?.prayer || statusObj.prayer
  };
}
