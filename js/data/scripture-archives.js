// Authentic Historic Holy Scripture Archives for Aura Sacra
// Direct Ecclesiastical Texts: Never machine-translated. Sourced from authentic historical editions.
import { getChapterFromBible } from './scriptures.js';

export const SUPPORTED_BIBLES = [
  { id: 'kjv', name: 'King James Version (1611)', lang: 'en', code: 'EN', flag: '🇬🇧', label: 'KJV' },
  { id: 'cei', name: 'Bibbia Italiana (Conferenza Episcopale / Riveduta)', lang: 'it', code: 'IT', flag: '🇮🇹', label: 'CEI' },
  { id: 'sinodala', name: 'Biblia Română (Sinodală / Cornilescu)', lang: 'ro', code: 'RO', flag: '🇷🇴', label: 'BOR' },
  { id: 'vulgata', name: 'Biblia Sacra Vulgata Clementina', lang: 'la', code: 'LA', flag: '🇻🇦', label: 'VUL' },
  { id: 'reina', name: 'Reina-Valera (1960)', lang: 'es', code: 'ES', flag: '🇪🇸', label: 'RVR' },
  { id: 'segond', name: 'Louis Segond (1910)', lang: 'fr', code: 'FR', flag: '🇫🇷', label: 'LSG' },
  { id: 'luther', name: 'Deutsche Bibel (Schlachter 1951)', lang: 'de', code: 'DE', flag: '🇩🇪', label: 'DE' },
  { id: 'almeida', name: 'Almeida Revista e Corrigida', lang: 'pt', code: 'PT', flag: '🇵🇹', label: 'ARC' },
  { id: 'synodal', name: 'Синодальный перевод (1876)', lang: 'ru', code: 'RU', flag: '🇷🇺', label: 'SYN' }
];

export function getDefaultBibleForLanguage(lang) {
  const map = {
    it: 'cei',
    ro: 'sinodala',
    la: 'vulgata',
    es: 'reina',
    fr: 'segond',
    de: 'luther',
    pt: 'almeida',
    ru: 'synodal',
    en: 'kjv'
  };
  return map[lang] || 'kjv';
}

export const SCRIPTURE_ARCHIVES = {
  // ==========================================
  // ITALIANO: Conferenza Episcopale Italiana
  // ==========================================
  cei: {
    ps: {
      23: {
        title: "Il Signore è il mio Pastore",
        verses: [
          { v: 1, text: "Il Signore è il mio pastore: non manco di nulla." },
          { v: 2, text: "Su pascoli erbosi mi fa riposare, ad acque tranquille mi conduce." },
          { v: 3, text: "Rinfranca l'anima mia, mi guida per il giusto cammino a motivo del suo nome." },
          { v: 4, text: "Anche se vado per una valle oscura, non temo alcun male, perché tu sei con me. Il tuo bastone e il tuo vincastro mi danno sicurezza." },
          { v: 5, text: "Davanti a me tu prepari una mensa sotto gli occhi dei miei nemici. Ungi di olio il mio capo; il mio calice trabocca." },
          { v: 6, text: "Sì, bontà e fedeltà mi saranno compagne tutti i giorni della mia vita, e abiterò ancora nella casa del Signore per lunghi giorni." }
        ]
      },
      91: {
        title: "Al Riparo dell'Altissimo",
        verses: [
          { v: 1, text: "Tu che abiti al riparo dell'Altissimo e dimori all'ombra dell'Onnipotente," },
          { v: 2, text: "di' al Signore: «Mio rifugio e mia fortezza, mio Dio in cui confido»." },
          { v: 3, text: "Egli ti libererà dal laccio del cacciatore, dalla peste che distrugge." },
          { v: 4, text: "Ti coprirà con le sue penne, sotto le sue ali troverai rifugio; la sua fedeltà ti sarà scudo e corazza." },
          { v: 5, text: "Non temerai il terrore della notte né la freccia che vola di giorno," },
          { v: 6, text: "la peste che vaga nelle tenebre, lo sterminio che devasta a mezzogiorno." },
          { v: 7, text: "Mille cadranno al tuo fianco e diecimila alla tua destra, ma a te non si accosterà." },
          { v: 8, text: "Basterà che tu apra gli occhi e vedrai la ricompensa dei malvagi!" },
          { v: 9, text: "«Sì, mio rifugio sei tu, o Signore!». Tu hai fatto dell'Altissimo la tua dimora:" },
          { v: 10, text: "non ti potrà colpire la sventura, nessun colpo cadrà sulla tua tenda." },
          { v: 11, text: "Egli per te darà ordine ai suoi angeli di custodirti in tutte le tue vie." },
          { v: 12, text: "Sulle mani essi ti porteranno, perché il tuo piede non inciampi nella pietra." },
          { v: 13, text: "Calpesterai leoni e vipere, schiaccerai leoncelli e draghi." },
          { v: 14, text: "«Lo libererò, perché a me si è legato, lo proteggerò, perché ha conosciuto il mio nome." },
          { v: 15, text: "Mi invocherà e io gli darò risposta; nell'angoscia io sarò con lui, lo salverò e lo renderò glorioso." },
          { v: 16, text: "Lo sazierò di lunghi giorni e gli farò vedere la mia salvezza»." }
        ]
      }
    },
    '1cor': {
      13: {
        title: "L'Inno alla Carità",
        verses: [
          { v: 1, text: "Se parlassi le lingue degli uomini e degli angeli, ma non avessi la carità, sarei come bronzo che rimbomba o come cimbalo che strepita." },
          { v: 2, text: "E se avessi il dono della profezia, se conoscessi tutti i misteri e avessi tutta la conoscenza, se possedessi tanta fede da trasportare le montagne, ma non avessi la carità, non sarei nulla." },
          { v: 3, text: "E se anche dessi in cibo tutti i miei beni e consegnassi il mio corpo per averne vanto, ma non avessi la carità, a nulla mi servirebbe." },
          { v: 4, text: "La carità è magnanima, benevola è la carità; non è invidiosa, non si vanta, non si gonfia d'orgoglio," },
          { v: 5, text: "non manca di rispetto, non cerca il proprio interesse, non si adira, non tiene conto del male ricevuto," },
          { v: 6, text: "non gode dell'ingiustizia ma si rallegra della verità." },
          { v: 7, text: "Tutto scusa, tutto crede, tutto spera, tutto sopporta." },
          { v: 8, text: "La carità non avrà mai fine. Le profezie scompariranno, il dono delle lingue cesserà e la conoscenza svanirà." },
          { v: 9, text: "Infatti, in modo imperfetto noi conosciamo e in modo imperfetto profetizziamo." },
          { v: 10, text: "Ma quando verrà ciò che è perfetto, quello che è imperfetto scomparirà." },
          { v: 11, text: "Quand'ero bambino, parlavo da bambino, pensavo da bambino, ragionavo da bambino. Da quando sono diventato uomo, ho smesso ciò che era da bambino." },
          { v: 12, text: "Ora vediamo come in uno specchio, in maniera confusa; ma allora vedremo a faccia a faccia. Ora conosco in modo imperfetto, ma allora conoscerò perfettamente, come anch'io sono conosciuto." },
          { v: 13, text: "Ora dunque rimangono queste tre cose: la fede, la speranza e la carità. Ma la più grande di tutte è la carità!" }
        ]
      }
    },
    john: {
      1: {
        title: "Il Prologo: Il Verbo si Fece Carne",
        verses: [
          { v: 1, text: "In principio era il Verbo, e il Verbo era presso Dio e il Verbo era Dio." },
          { v: 2, text: "Egli era, in principio, presso Dio:" },
          { v: 3, text: "tutto è stato fatto per mezzo di lui e senza di lui nulla è stato fatto di ciò che esiste." },
          { v: 4, text: "In lui era la vita e la vita era la luce degli uomini;" },
          { v: 5, text: "la luce splende nelle tenebre e le tenebre non l'hanno vinta." },
          { v: 14, text: "E il Verbo si fece carne e venne ad abitare in mezzo a noi; e noi abbiamo contemplato la sua gloria, gloria come del Figlio unigenito che viene dal Padre, pieno di grazia e di verità." }
        ]
      },
      14: {
        title: "La Via, la Verità e la Vita",
        verses: [
          { v: 1, text: "Non sia turbato il vostro cuore. Abbiate fede in Dio e abbiate fede anche in me." },
          { v: 2, text: "Nella casa del Padre mio vi sono molte dimore. Se no, vi avrei mai detto: «Vado a prepararvi un posto»?" },
          { v: 6, text: "Gli disse Gesù: «Io sono la via, la verità e la vita. Nessuno viene al Padre se non per mezzo di me»." },
          { v: 27, text: "Vi lascio la pace, vi do la mia pace. Non come la dà il mondo, io la do a voi. Non sia turbato il vostro cuore e non abbia timore." }
        ]
      }
    },
    matt: {
      6: {
        title: "Il Padre Nostro e la Provvidenza Divina",
        verses: [
          { v: 9, text: "Voi dunque pregate così: Padre nostro che sei nei cieli, sia santificato il tuo nome," },
          { v: 10, text: "venga il tuo regno, sia fatta la tua volontà, come in cielo così in terra." },
          { v: 11, text: "Dacci oggi il nostro pane quotidiano," },
          { v: 12, text: "e rimetti a noi i nostri debiti come anche noi li rimettiamo ai nostri debitori," },
          { v: 13, text: "e non abbandonarci alla tentazione, ma liberaci dal male." },
          { v: 33, text: "Cercate invece, anzitutto, il regno di Dio e la sua giustizia, e tutte queste cose vi saranno date in aggiunta." }
        ]
      }
    }
  },

  // ==========================================
  // ROMÂNĂ: Biblia Sinodală Ortodoxă Română
  // ==========================================
  sinodala: {
    ps: {
      23: {
        title: "Domnul mă paşte şi nimic nu-mi va lipsi",
        verses: [
          { v: 1, text: "Domnul mă paşte şi nimic nu-mi va lipsi." },
          { v: 2, text: "La loc de păşune, acolo m-a sălăşluit; la apa odihnei m-a hrănit." },
          { v: 3, text: "Sufletul meu l-a întors, povăţuitu-m-a pe căile dreptăţii, pentru numele Lui." },
          { v: 4, text: "Că de voi şi umbla în mijlocul morţii, nu mă voi teme de rele; că Tu cu mine eşti. Toiagul Tău şi varga Ta, acestea m-au mângâiat." },
          { v: 5, text: "Gătit-ai masă înaintea mea, împotriva celor ce mă necăjesc; uns-ai cu untdelemn capul meu şi paharul Tău este adăpându-mă ca un puternic." },
          { v: 6, text: "Şi mila Ta mă va urma în toate zilele vieţii mele, şi voi locui în casa Domnului, întru lungime de zile." }
        ]
      },
      91: {
        title: "Cel ce locuieşte în ajutorul Celui Preaînalt",
        verses: [
          { v: 1, text: "Cel ce locuieşte în ajutorul Celui Preaînalt, întru acoperământul Dumnezeului cerului se va sălăşlui." },
          { v: 2, text: "Va zice Domnului: «Sprijinitorul meu eşti şi scăparea mea; Dumnezeul meu, în El voi nădăjdui»." },
          { v: 3, text: "Că El te va izbăvi din cursa vânătorilor şi de cuvântul tulburător." },
          { v: 4, text: "Cu spatele te va umbri pe tine şi sub aripile Lui vei nădăjdui; ca o armă te va înconjura adevărul Lui." },
          { v: 5, text: "Nu te vei teme de frica de noapte, de săgeata ce zboară ziua," },
          { v: 6, text: "De lucrul ce umblă în întuneric, de molima ce bântuie întru amiază." },
          { v: 7, text: "Cădea-vor dinspre latura ta o mie şi zece mii de-a dreapta ta, dar de tine nu se vor apropia." },
          { v: 8, text: "Însă cu ochii tăi vei privi şi răsplătirea păcătoşilor vei vedea." },
          { v: 9, text: "Pentru că Tu, Doamne, eşti nădejdea mea! Pe Cel Preaînalt L-ai pus scăpare ţie." },
          { v: 10, text: "Nu vor veni către tine rele şi bătaia nu se va apropia de locaşul tău." },
          { v: 11, text: "Că îngerilor Săi va porunci pentru tine, ca să te păzească în toate căile tale." },
          { v: 12, text: "Pe mâini te vor ridica, ca nu cumva să împiedici de piatră piciorul tău." },
          { v: 13, text: "Peste aspidă şi vasilisc vei călca şi vei călca în picioare pe leu şi pe balaur." },
          { v: 14, text: "«Că spre Mine a nădăjduit şi-l voi izbăvi pe el; îl voi acoperi pe el, că a cunoscut numele Meu." },
          { v: 15, text: "Striga-va către Mine şi-l voi auzi pe el; cu dânsul sunt în necaz şi-l voi scoate pe el şi-l voi slăvi." },
          { v: 16, text: "Cu lungime de zile îl voi umple pe el şi-i voi arăta lui mântuirea Mea»." }
        ]
      }
    },
    '1cor': {
      13: {
        title: "Imnul Dragostei Creştine",
        verses: [
          { v: 1, text: "De aş grăi în limbile oamenilor şi ale îngerilor, iar dragoste nu am, făcutu-m-am aramă sunătoare şi chimval răsunător." },
          { v: 2, text: "Şi de aş avea darul proorociei şi tainele toate le-aş cunoaşte şi toată ştiinţa, şi de aş avea atâta credinţă încât să mut şi munţii, iar dragoste nu am, nimic nu sunt." },
          { v: 3, text: "Şi de aş împărţi toată avuţia mea şi de aş da trupul meu să fie ars, iar dragoste nu am, nimic nu-mi foloseşte." },
          { v: 4, text: "Dragostea îndelung rabdă; dragostea este binevoitoare, dragostea nu pizmuieşte, nu se laudă, nu se trufeşte." },
          { v: 5, text: "Dragostea nu se poartă cu necuviinţă, nu caută ale sale, nu se întărâtă, nu gândeşte răul." },
          { v: 6, text: "Nu se bucură de nedreptate, ci se bucură de adevăr." },
          { v: 7, text: "Toate le suferă, toate le crede, toate le nădăjduieşte, toate le rabdă." },
          { v: 8, text: "Dragostea nu cade niciodată. Cât despre proorocii - se vor desfiinţa; darul limbilor va înceta; ştiinţa se va sfârşi." },
          { v: 9, text: "Pentru că în parte cunoaştem şi în parte proorocim." },
          { v: 10, text: "Dar când va veni ceea ce e desăvârşit, atunci ceea ce este în parte se va desfiinţa." },
          { v: 11, text: "Când eram copil, vorbeam ca un copil, simţeam ca un copil, gândeam ca un copil; dar când m-am făcut bărbat, am lepădat cele ale copilului." },
          { v: 12, text: "Căci vedem acum ca prin oglindă, în ghicitură, iar atunci, faţă către faţă; acum cunosc în parte, dar atunci voi cunoaşte pe deplin, precum am fost şi eu cunoscut." },
          { v: 13, text: "Şi acum rămân acestea trei: credinţa, nădejdea, dragostea. Iar mai mare dintre acestea este dragostea." }
        ]
      }
    },
    john: {
      1: {
        title: "La început era Cuvântul",
        verses: [
          { v: 1, text: "La început era Cuvântul şi Cuvântul era la Dumnezeu şi Dumnezeu era Cuvântul." },
          { v: 2, text: "Acesta era întru început la Dumnezeu." },
          { v: 3, text: "Toate prin El s-au făcut; şi fără El nimic nu s-a făcut din ce s-a făcut." },
          { v: 4, text: "Întru El era viaţă şi viaţa era lumina oamenilor." },
          { v: 5, text: "Şi lumina luminează în întuneric şi întunericul nu a cuprins-o." },
          { v: 14, text: "Şi Cuvântul S-a făcut trup şi S-a sălăşluit între noi şi am văzut slava Lui, slavă ca a Unuia-Născut din Tatăl, plin de har şi de adevăr." }
        ]
      },
      14: {
        title: "Calea, Adevărul şi Viaţa",
        verses: [
          { v: 1, text: "Să nu se tulbure inima voastră; credeţi în Dumnezeu, credeţi şi în Mine." },
          { v: 2, text: "În casa Tatălui Meu multe locaşuri sunt. Iar de nu, v-aş fi spus. Mă duc să vă gătesc loc." },
          { v: 6, text: "Iisus i-a zis: «Eu sunt Calea, Adevărul şi Viaţa. Nimeni nu vine la Tatăl decât prin Mine»." },
          { v: 27, text: "Pace vă las vouă, pacea Mea o dau vouă, nu precum dă lumea vă dau Eu. Să nu se tulbure inima voastră, nici să se înfricoşeze." }
        ]
      }
    },
    matt: {
      6: {
        title: "Rugăciunea Domnească «Tatăl Nostru»",
        verses: [
          { v: 9, text: "Deci voi aşa să vă rugaţi: Tatăl nostru Care eşti în ceruri, sfinţească-se numele Tău;" },
          { v: 10, text: "Vie împărăţia Ta; facă-se voia Ta, precum în cer aşa şi pe pământ." },
          { v: 11, text: "Pâinea noastră cea spre fiinţă dă-ne-o nouă astăzi;" },
          { v: 12, text: "Şi ne iartă nouă greşelile noastre, precum şi noi iertăm greşiţilor noştri;" },
          { v: 13, text: "Şi nu ne duce pe noi în ispită, ci ne izbăveşte de cel rău. Că a Ta este împărăţia şi puterea şi slava în veci. Amin." },
          { v: 33, text: "Căutaţi mai întâi împărăţia lui Dumnezeu şi dreptatea Lui şi toate acestea se vor adăuga vouă." }
        ]
      }
    }
  },

  // ==========================================
  // LATINA: Biblia Sacra Vulgata Clementina
  // ==========================================
  vulgata: {
    ps: {
      23: {
        title: "Dominus Regit Me",
        verses: [
          { v: 1, text: "Dominus regit me, et nihil mihi deerit:" },
          { v: 2, text: "in loco pascuæ ibi me collocavit. Super aquam refectionis educavit me:" },
          { v: 3, text: "animam meam convertit. Deduxit me super semitas justitiæ, propter nomen suum." },
          { v: 4, text: "Nam, etsi ambulavero in medio umbræ mortis, non timebo mala: quoniam tu mecum es. Virga tua, et baculus tuus, ipsa me consolata sunt." },
          { v: 5, text: "Parasti in conspectu meo mensam, adversus eos qui tribulant me. Impinguasti in oleo caput meum: et calix meus inebrians quam præclarus est!" },
          { v: 6, text: "Et misericordia tua subsequetur me omnibus diebus vitæ meæ: et ut inhabitem in domo Domini, in longitudinem dierum." }
        ]
      },
      91: {
        title: "Qui Habitat in Adjutorio Altissimi",
        verses: [
          { v: 1, text: "Qui habitat in adjutorio Altissimi, in protectione Dei cæli commorabitur." },
          { v: 2, text: "Dicet Domino: «Susceptor meus es tu, et refugium meum: Deus meus, sperabo in eum»." },
          { v: 3, text: "Quoniam ipse liberavit me de laqueo venantium, et a verbo aspero." },
          { v: 4, text: "Scapulis suis obumbrabit tibi, et sub pennis ejus sperabis." },
          { v: 5, text: "Scuto circumdabit te veritas ejus: non timebis a timore nocturno," },
          { v: 6, text: "a sagitta volante in die, a negotio perambulante in tenebris: ab incursu, et dæmonio meridiano." },
          { v: 7, text: "Cadent a latere tuo mille, et decem millia a dextris tuis: ad te autem non appropinquabit." },
          { v: 8, text: "Verumtamen oculis tuis considerabis: et retributionem peccatorum videbis." },
          { v: 9, text: "Quoniam tu es, Domine, spes mea: Altissimum posuisti refugium tuum." },
          { v: 10, text: "Non accedet ad te malum: et flagellum non appropinquabit tabernaculo tuo." },
          { v: 11, text: "Quoniam angelis suis mandavit de te, ut custodiant te in omnibus viis tuis." },
          { v: 12, text: "In manibus portabunt te, ne forte offendas ad lapidem pedem tuum." },
          { v: 13, text: "Super aspidem et basiliscum ambulabis, et conculcabis leonem et draconem." },
          { v: 14, text: "«Quoniam in me speravit, liberabo eum: protegam eum, quoniam cognovit nomen meum." },
          { v: 15, text: "Clamabit ad me, et ego exaudiam eum: cum ipso sum in tribulatione: eripiam eum et glorificabo eum." },
          { v: 16, text: "Longitudine dierum replebo eum: et ostendam illi salutare meum»." }
        ]
      }
    },
    '1cor': {
      13: {
        title: "De Charitate Divina",
        verses: [
          { v: 1, text: "Si linguis hominum loquar, et angelorum, charitatem autem non habeam, factus sum velut æs sonans, aut cymbalum tinniens." },
          { v: 2, text: "Et si habuero prophetiam, et noverim mysteria omnia, et omnem scientiam: et si habuero omnem fidem ita ut montes transferam, charitatem autem non habuero, nihil sum." },
          { v: 3, text: "Et si distribuero in cibos pauperum omnes facultates meas, et si tradidero corpus meum ita ut ardeam, charitatem autem non habuero, nihil mihi prodest." },
          { v: 4, text: "Charitas patiens est, benigna est: charitas non æmulatur, non agit perperam, non inflatur," },
          { v: 5, text: "non est ambitiosa, non quærit quæ sua sunt, non irritatur, non cogitat malum," },
          { v: 6, text: "non gaudet super iniquitate, congaudet autem veritati:" },
          { v: 7, text: "omnia suffert, omnia credit, omnia sperat, omnia sustinet." },
          { v: 8, text: "Charitas numquam excidit: sive prophetiæ evacuabuntur, sive linguæ cessabunt, sive scientia destruetur." },
          { v: 9, text: "Ex parte enim cognoscimus, et ex parte prophetamus." },
          { v: 10, text: "Cum autem venerit quod perfectum est, evacuabitur quod ex parte est." },
          { v: 11, text: "Cum essem parvulus, loquebar ut parvulus, sapiebam ut parvulus, cogitabam ut parvulus. Quando autem factus sum vir, evacuavi quæ erant parvuli." },
          { v: 12, text: "Videmus nunc per speculum in ænigmate: tunc autem facie ad faciem. Nunc cognosco ex parte: tunc autem cognoscam sicut et cognitus sum." },
          { v: 13, text: "Nunc autem manent, fides, spes, charitas, tria hæc: major autem horum est charitas." }
        ]
      }
    },
    john: {
      1: {
        title: "In Principio Erat Verbum",
        verses: [
          { v: 1, text: "In principio erat Verbum, et Verbum erat apud Deum, et Deus erat Verbum." },
          { v: 2, text: "Hoc erat in principio apud Deum." },
          { v: 3, text: "Omnia per ipsum facta sunt: et sine ipso factum est nihil, quod factum est." },
          { v: 4, text: "In ipso vita erat, et vita erat lux hominum:" },
          { v: 5, text: "et lux in tenebris lucet, et tenebræ eam non comprehenderunt." },
          { v: 14, text: "Et Verbum caro factum est, et habitavit in nobis: et vidimus gloriam ejus, gloriam quasi unigeniti a Patre plenum gratiæ et veritatis." }
        ]
      }
    },
    matt: {
      6: {
        title: "Oratio Dominica: Pater Noster",
        verses: [
          { v: 9, text: "Sic ergo vos orabitis: Pater noster, qui es in cælis, sanctificetur nomen tuum." },
          { v: 10, text: "Adveniat regnum tuum. Fiat voluntas tua, sicut in cælo et in terra." },
          { v: 11, text: "Panem nostrum supersubstantialem da nobis hodie." },
          { v: 12, text: "Et dimitte nobis debita nostra, sicut et nos dimittimus debitoribus nostris." },
          { v: 13, text: "Et ne nos inducas in tentationem, sed libera nos a malo. Amen." },
          { v: 33, text: "Quærite ergo primum regnum Dei, et justitiam ejus: et hæc omnia adjicientur vobis." }
        ]
      }
    }
  },

  // ==========================================
  // ESPAÑOL: Reina-Valera (1909)
  // ==========================================
  reina: {
    ps: {
      23: {
        title: "Jehová es mi Pastor",
        verses: [
          { v: 1, text: "Jehová es mi pastor; nada me faltará." },
          { v: 2, text: "En lugares de delicados pastos me hará yacer: junto á aguas de reposo me pastoreará." },
          { v: 3, text: "Confortará mi alma; guiaráme por sendas de justicia por amor de su nombre." },
          { v: 4, text: "Aunque ande en valle de sombra de muerte, no temeré mal alguno; porque tú estarás conmigo: tu vara y tu cayado me infundirán aliento." },
          { v: 5, text: "Aderezarás mesa delante de mí, en presencia de mis angustiadores: ungiste mi cabeza con aceite; mi copa está rebosando." },
          { v: 6, text: "Ciertamente el bien y la misericordia me seguirán todos los días de mi vida: y en la casa de Jehová moraré por largos días." }
        ]
      }
    },
    '1cor': {
      13: {
        title: "El Amor Nunca Deja de Ser",
        verses: [
          { v: 1, text: "Si yo hablase lenguas humanas y angélicas, y no tengo caridad, vengo á ser como metal que resuena, ó címbalo que retiñe." },
          { v: 4, text: "La caridad es sufrida, es benigna; la caridad no tiene envidia, la caridad no hace sinrazón, no se ensorbebece;" },
          { v: 7, text: "Todo lo sufre, todo lo cree, todo lo espera, todo lo soporta." },
          { v: 8, text: "La caridad nunca deja de ser: mas las profecías se han de acabar, y cesarán las lenguas, y la ciencia ha de ser quitada." },
          { v: 13, text: "Y ahora permanecen la fe, la esperanza, y la caridad, estas tres: empero la mayor de ellas es la caridad." }
        ]
      }
    }
  },

  // ==========================================
  // FRANÇAIS: Louis Segond (1910)
  // ==========================================
  segond: {
    ps: {
      23: {
        title: "L'Éternel est mon Berger",
        verses: [
          { v: 1, text: "L'Éternel est mon berger: je ne manquerai de rien." },
          { v: 2, text: "Il me fait reposer dans de verts pâturages, Il me dirige près des eaux paisibles." },
          { v: 3, text: "Il restaure mon âme, Il me conduit dans les sentiers de la justice, À cause de son nom." },
          { v: 4, text: "Quand je marche dans la vallée de l'ombre de la mort, Je ne crains aucun mal, car tu es avec moi: Ta houlette et ton bâton me rassurent." },
          { v: 5, text: "Tu dresses devant moi une table, en face de mes adversaires; Tu oins d'huile ma tête, et ma coupe déborde." },
          { v: 6, text: "Oui, le bonheur et la grâce m'accompagneront tous les jours de ma vie, Et j'habiterai dans la maison de l'Éternel jusqu'à la fin de mes jours." }
        ]
      }
    },
    '1cor': {
      13: {
        title: "L'Hymne à l'Amour",
        verses: [
          { v: 1, text: "Quand je parlerais les langues des hommes et des anges, si je n'ai pas la charité, je suis un airain qui résonne, ou une cymbale qui retentit." },
          { v: 4, text: "La charité est patiente, elle est pleine de bonté; la charité n'est point envieused; la charité ne se vante point, elle ne s'enfle point d'orgueil," },
          { v: 7, text: "Elle excuse tout, elle croit tout, elle espère tout, elle supporte tout." },
          { v: 8, text: "La charité ne périt jamais. Les prophéties prendront fin, les langues cesseront, la connaissance disparaîtra." },
          { v: 13, text: "Maintenant donc ces trois choses demeurent: la foi, l'espérance, la charité; mais la plus grande de ces choses, c'est la charité." }
        ]
      }
    }
  },

  // ==========================================
  // DEUTSCH: Lutherbibel (1912)
  // ==========================================
  luther: {
    ps: {
      23: {
        title: "Der HERR ist mein Hirte",
        verses: [
          { v: 1, text: "Der HERR ist mein Hirte, mir wird nichts mangeln." },
          { v: 2, text: "Er weidet mich auf einer grünen Aue und führet mich zum frischen Wasser." },
          { v: 3, text: "Er erquicket meine Seele; er führet mich auf rechter Straße um seines Namens willen." },
          { v: 4, text: "Und ob ich schon wanderte im finstern Tal, fürchte ich kein Unglück; denn du bist bei mir, dein Stecken und Stab trösten mich." },
          { v: 5, text: "Du bereitest vor mir einen Tisch im Angesicht meiner Feinde. Du salbest mein Haupt mit Öl und schenkest mir voll ein." },
          { v: 6, text: "Gutes und Barmherzigkeit werden mir folgen mein Leben lang, und ich werde bleiben im Hause des HERRN immerdar." }
        ]
      }
    },
    '1cor': {
      13: {
        title: "Das Hohelied der Liebe",
        verses: [
          { v: 1, text: "Wenn ich mit Menschen- und mit Engelzungen redete, und hätte der Liebe nicht, so wäre ich ein tönend Erz oder eine klingende Schelle." },
          { v: 4, text: "Die Liebe ist langmütig und freundlich, die Liebe eifert nicht, die Liebe treibt nicht Mutwillen, sie blähet sich nicht," },
          { v: 7, text: "Sie verträgt alles, sie glaubet alles, sie hoffet alles, sie duldet alles." },
          { v: 8, text: "Die Liebe höret nimmer auf, so doch die Weissagungen aufhören werden und das Zungenreden aufhören wird und die Erkenntnis aufhören wird." },
          { v: 13, text: "Nun aber bleibt Glaube, Hoffnung, Liebe, diese drei; aber die Liebe ist die größte unter ihnen." }
        ]
      }
    }
  },

  // ==========================================
  // PORTUGUÊS: Almeida Revista e Corrigida
  // ==========================================
  almeida: {
    ps: {
      23: {
        title: "O Senhor é o meu Pastor",
        verses: [
          { v: 1, text: "O Senhor é o meu pastor, nada me faltará." },
          { v: 2, text: "Deitar-me faz em verdes pastos, guia-me mansamente a águas tranqüilas." },
          { v: 3, text: "Refrigera a minha alma; guia-me pelas veredas da justiça, por amor do seu nome." },
          { v: 4, text: "Ainda que eu andasse pelo vale da sombra da morte, não temeria mal algum, porque tu estás comigo; a tua vara e o teu cajado me consolam." },
          { v: 5, text: "Preparas uma mesa perante mim na presença dos meus inimigos, unges a minha cabeça com óleo, o meu cálice transborda." },
          { v: 6, text: "Certamente que a bondade e a misericórdia me seguirão todos os dias da minha vida; e habitarei na casa do Senhor por longos dias." }
        ]
      }
    },
    '1cor': {
      13: {
        title: "O Hino ao Amor Divino",
        verses: [
          { v: 1, text: "Ainda que eu falasse as línguas dos homens e dos anjos, e não tivesse amor, seria como o metal que soa ou como o sino que tine." },
          { v: 4, text: "O amor é sofredor, é benigno; o amor não é invejoso; o amor não trata com leviandade, não se ensoberbece." },
          { v: 7, text: "Tudo sofre, tudo crê, tudo espera, tudo suporta." },
          { v: 8, text: "O amor nunca falha; mas havendo profecias, serão aniquiladas; havendo línguas, cessarão; havendo ciência, desaparecerá." },
          { v: 13, text: "Agora, pois, permanecem a fé, a esperança e o amor, estes três, mas o maior destes é o amor." }
        ]
      }
    }
  },

  // ==========================================
  // РУССКИЙ: Синодальный перевод (1876)
  // ==========================================
  synodal: {
    ps: {
      23: {
        title: "Господь — Пастырь мой",
        verses: [
          { v: 1, text: "Господь — Пастырь мой; я ни в чем не буду нуждаться:" },
          { v: 2, text: "Он покоит меня на злачных пажитях и водит меня к водам тихим," },
          { v: 3, text: "подкрепляет душу мою, направляет меня на стези правды ради имени Своего." },
          { v: 4, text: "Если я пойду и долиною смертной тени, не убоюсь зла, потому что Ты со мной; Твой жезл и Твой посох — они успокаивают меня." },
          { v: 5, text: "Ты приготовил предо мною траpeзу в виду врагов моих; умастил елеем голову мою; чаша моя преисполнена." },
          { v: 6, text: "Так, благость и милость да сопровождают меня во все дни жизни моей, и я пребуду в доме Господнем многие дни." }
        ]
      }
    },
    '1cor': {
      13: {
        title: "Гимн Христианской Любви",
        verses: [
          { v: 1, text: "Если я говорю языками человеческими и ангельскими, а любви не имею, то я — медь звенящая или кимвал звучащий." },
          { v: 4, text: "Любовь долготерпит, милосердствует, любовь не завидует, любовь не превозносится, не гордится," },
          { v: 7, text: "Все покрывает, всему верит, всего надеется, все переносит." },
          { v: 8, text: "Любовь никогда не перестает, хотя и пророчества прекратятся, и языки умолкнут, и знание упразднится." },
          { v: 13, text: "А теперь пребывают сии три: вера, надежда, любовь; но любовь из них больше." }
        ]
      }
    }
  }
};

export function getArchivalChapter(versionId, bookId, chapterNum) {
  if (!versionId || versionId === 'kjv') return null;
  // 1. High-fidelity liturgical passage override (e.g. CEI, BOR liturgical wording)
  if (SCRIPTURE_ARCHIVES[versionId]?.[bookId]?.[chapterNum]) {
    return SCRIPTURE_ARCHIVES[versionId][bookId][chapterNum];
  }
  // 2. Full official historic canonical archive from data/bible-${versionId}.json
  return getChapterFromBible(versionId, bookId, chapterNum);
}
