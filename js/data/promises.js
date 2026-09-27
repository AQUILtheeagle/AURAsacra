// Authentic Canonical Scripture Promises from Historic Ecclesiastical Archives
// Never machine-translated: Scripture sourced directly from KJV, CEI, Sinodală, Vulgata, Reina-Valera, Segond, Luther, Almeida, and Synodal Archives.
// Common non-biblical reflections, prayers, and category phrases fully localized across all 9 supported languages.

export const PROMISE_CATEGORIES = [
  {
    id: 'anxiety',
    icon: 'heart',
    label: {
      en: 'Anxiety & Overwhelm',
      it: 'Ansia e Affanno',
      ro: 'Anxietate și Îngrijorare',
      la: 'Sollicitudo et Angustia',
      es: 'Ansiedad y Agobio',
      fr: 'Anxiété et Accablement',
      de: 'Sorge und Überlastung',
      pt: 'Ansiedade e Sobrecarga',
      ru: 'Тревога и Сокрушение'
    },
    description: {
      en: 'When exams, work, or daily worries burden your chest.',
      it: 'Quando esami, lavoro o preoccupazioni quotidiane opprimono il cuore.',
      ro: 'Când examenele, munca sau grijile zilnice îți apasă sufletul.',
      la: 'Quando examina, labor vel curae cotidianae cor gravant.',
      es: 'Cuando los exámenes, el trabajo o las dudas diarias pesan en tu pecho.',
      fr: 'Lorsque les examens, le travail ou les soucis du quotidien pèsent sur votre cœur.',
      de: 'Wenn Prüfungen, Arbeit oder Alltagssorgen das Herz belasten.',
      pt: 'Quando exames, trabalho ou preocupações diárias pesam no peito.',
      ru: 'Когда экзамены, работа или житейские заботы тяготят сердце.'
    }
  },
  {
    id: 'fear',
    icon: 'shield',
    label: {
      en: 'Fear of the Future',
      it: 'Paura del Futuro',
      ro: 'Frica de Viitor',
      la: 'Timor Futuri',
      es: 'Miedo al Futuro',
      fr: 'Peur de l\'Avenir',
      de: 'Angst vor der Zukunft',
      pt: 'Medo do Futuro',
      ru: 'Страх перед Будущим'
    },
    description: {
      en: 'When facing unexpected trials, illness, or uncertainty.',
      it: 'Di fronte a prove inattese, malattia o incertezza.',
      ro: 'În fața încercărilor neașteptate, a bolii sau a incertitudinii.',
      la: 'In adversitatibus improvisis, infirmitate vel dubio.',
      es: 'Al enfrentar pruebas inesperadas, enfermedad o incertidumbre.',
      fr: 'Face aux épreuves imprévues, à la maladie ou à l\'incertitude.',
      de: 'Bei unerwarteten Prüfungen, Krankheit oder Ungewissheit.',
      pt: 'Diante de provações inesperadas, doença ou incerteza.',
      ru: 'Перед лицом неожиданных испытаний, болезни или неизвестности.'
    }
  },
  {
    id: 'loneliness',
    icon: 'moon',
    label: {
      en: 'Loneliness & Hurt',
      it: 'Solitudine e Ferite',
      ro: 'Singurătate și Răni',
      la: 'Solitudo et Dolor',
      es: 'Soledad y Heridas',
      fr: 'Solitude et Blessures',
      de: 'Einsamkeit und Schmerz',
      pt: 'Solidão e Feridas',
      ru: 'Одиночество и Боль'
    },
    description: {
      en: 'When nobody seems to understand what you are going through.',
      it: 'Quando nessuno sembra comprendere ciò che stai vivendo.',
      ro: 'Când nimeni nu pare să înțeleagă prin ce treci.',
      la: 'Quando nemo videtur intellegere quod pateris.',
      es: 'Cuando nadie parece entender lo que estás pasando.',
      fr: 'Quand personne ne semble comprendre ce que vous traversez.',
      de: 'Wenn niemand zu verstehen scheint, was du durchmachst.',
      pt: 'Quando ninguém parece entender o que você está passando.',
      ru: 'Когда кажется, что никто не понимает твоих переживаний.'
    }
  },
  {
    id: 'grief',
    icon: 'rain',
    label: {
      en: 'Grief & Tears',
      it: 'Dolore e Lacrime',
      ro: 'Durere și Lacrimi',
      la: 'Luctus et Lacrimae',
      es: 'Duelo y Lágrimas',
      fr: 'Deuil et Larmes',
      de: 'Trauer und Tränen',
      pt: 'Luto e Lágrimas',
      ru: 'Скорбь и Слезы'
    },
    description: {
      en: 'When a loss or heartbreak makes the world feel heavy.',
      it: 'Quando una perdita o una sofferenza rende tutto pesante.',
      ro: 'Când o pierdere sau o durere face viața apăsătoare.',
      la: 'Quando amissio vel dolor mundum gravem reddit.',
      es: 'Cuando una pérdida o quebranto hace que el mundo se sienta pesado.',
      fr: 'Quand une perte ou une peine brise le cœur et alourdit le monde.',
      de: 'Wenn ein Verlust oder Herzschmerz die Welt schwer macht.',
      pt: 'Quando uma perda ou desgosto torna o mundo pesado.',
      ru: 'Когда утрата или сердечная боль делают мир невыносимо тяжелым.'
    }
  },
  {
    id: 'forgiveness',
    icon: 'cross',
    label: {
      en: 'Guilt & Forgiveness',
      it: 'Senso di Colpa e Perdono',
      ro: 'Vinovăție și Iertare',
      la: 'Culpa et Venia',
      es: 'Culpa y Perdón',
      fr: 'Culpabilité et Pardon',
      de: 'Schuld und Vergebung',
      pt: 'Culpa e Perdão',
      ru: 'Вина и Прощение'
    },
    description: {
      en: 'When you fell into temptation and desire Christ’s clean slate.',
      it: 'Quando sei caduto in tentazione e desideri la grazia di Cristo.',
      ro: 'Când ai căzut în ispită și dorești curățirea lui Hristos.',
      la: 'Quando in tentationem cecidisti et Christi gratiam expetis.',
      es: 'Cuando caíste en tentación y anhelas el perdón puro de Cristo.',
      fr: 'Quand vous avez succombé à la tentation et désirez la grâce du Christ.',
      de: 'Wenn du der Versuchung erlegen bist und Christi Gnade suchst.',
      pt: 'Quando você caiu em tentação e anseia pelo perdão de Cristo.',
      ru: 'Когда ты пал в искушении и жаждешь очищающей благодати Христа.'
    }
  },
  {
    id: 'decisions',
    icon: 'compass',
    label: {
      en: 'Difficult Decisions',
      it: 'Decisioni Difficili',
      ro: 'Decizii Dificile',
      la: 'Consilia Difficilia',
      es: 'Decisiones Difíciles',
      fr: 'Décisions Difficiles',
      de: 'Schwierige Entscheidungen',
      pt: 'Decisões Difíceis',
      ru: 'Трудные Решения'
    },
    description: {
      en: 'When you need God’s clear light to discern your next step.',
      it: 'Quando hai bisogno della luce di Dio per discernere il tuo cammino.',
      ro: 'Când ai nevoie de lumina lui Dumnezeu pentru pasul următor.',
      la: 'Quando Dei luce eges ad viam discernendam.',
      es: 'Cuando necesitas la luz de Dios para discernir tu próximo paso.',
      fr: 'Quand vous avez besoin de la lumière de Dieu pour discerner votre voie.',
      de: 'Wenn du Gottes Licht brauchst, um den nächsten Schritt zu erkennen.',
      pt: 'Quando você precisa da luz de Deus para discernir o próximo passo.',
      ru: 'Когда тебе нужен ясный свет Божий, чтобы различить верный шаг.'
    }
  },
  {
    id: 'exhaustion',
    icon: 'flame',
    label: {
      en: 'Weariness & Burnout',
      it: 'Stanchezza e Burnout',
      ro: 'Epuizare și Oboseală',
      la: 'Lassitudo et Defatigatio',
      es: 'Cansancio y Agotamiento',
      fr: 'Fatigue et Épuisement',
      de: 'Müdigkeit und Erschöpfung',
      pt: 'Cansaço e Esgotamento',
      ru: 'Усталость и Истощение'
    },
    description: {
      en: 'When school, work, or routine have depleted your strength.',
      it: 'Quando studio, lavoro o routine hanno esaurito le tue energie.',
      ro: 'Când școala, munca sau rutina ți-au secătuit puterile.',
      la: 'Quando studium, labor vel cotidiana consuetudo vires exhauserunt.',
      es: 'Cuando el estudio, el trabajo o la rutina han agotado tus fuerzas.',
      fr: 'Quand les études, le travail ou la routine ont épuisé vos forces.',
      de: 'Wenn Schule, Arbeit oder Alltag deine Kräfte aufgezehrt haben.',
      pt: 'Quando os estudos, o trabalho ou a rotina esgotaram as suas forças.',
      ru: 'Когда учеба, работа или рутина истощили твои душевные и телесные силы.'
    }
  },
  {
    id: 'gratitude',
    icon: 'sun',
    label: {
      en: 'Joy & Thanksgiving',
      it: 'Gioia e Ringraziamento',
      ro: 'Bucurie și Mulțumire',
      la: 'Gaudium et Gratiarum Actio',
      es: 'Gozo y Gratitud',
      fr: 'Joie et Action de Grâces',
      de: 'Freude und Danksagung',
      pt: 'Alegria e Ação de Graças',
      ru: 'Радость и Благодарение'
    },
    description: {
      en: 'When God’s goodness fills your heart and you want to praise Him.',
      it: 'Quando la bontà di Dio riempie il tuo cuore e vuoi lodarlo.',
      ro: 'Când bunătatea lui Dumnezeu îți umple inima și vrei să-L lauzi.',
      la: 'Quando bonitas Dei cor tuum implet et Eum laudare cupis.',
      es: 'Cuando la bondad de Dios llena tu corazón y deseas alabarle.',
      fr: 'Quand la bonté de Dieu remplit votre cœur et que vous désirez Le louer.',
      de: 'Wenn Gottes Güte dein Herz erfüllt und du Ihn loben möchtest.',
      pt: 'Quando a bondade de Deus enche o seu coração e você deseja louvá-Lo.',
      ru: 'Когда благость Божия наполняет сердце и ты желаешь восхвалить Его.'
    }
  }
];

export const PROMISES_DATABASE = {
  anxiety: [
    {
      ref: '1 Peter 5:7',
      verse: 'Casting all your care upon him; for he careth for you.',
      archives: {
        en: { text: 'Casting all your care upon him; for he careth for you.', version: 'King James Version (KJV 1611)' },
        it: { text: 'Gettate in lui ogni vostra preoccupazione, perché egli ha cura di voi.', version: 'Conferenza Episcopale Italiana (CEI 2008)' },
        ro: { text: 'Lăsaţi-I Lui toată grija voastră, căci El are grijă de voi.', version: 'Biblia Sinodală Ortodoxă Română (1982)' },
        la: { text: 'Omnem sollicitudinem vestram projicientes in eum, quoniam ipsi cura est de vobis.', version: 'Biblia Sacra Vulgata (Clementina 1592)' },
        es: { text: 'Echando toda vuestra solicitud en él, porque él tiene cuidado de vosotros.', version: 'Biblia Reina-Valera (1909)' },
        fr: { text: 'Déchargez-vous sur lui de tous vos soucis, car lui-même prend soin de vous.', version: 'Bible Louis Segond (1910)' },
        de: { text: 'Alle eure Sorge werfet auf ihn; denn er sorget für euch.', version: 'Lutherbibel (1912)' },
        pt: { text: 'Lançando sobre ele toda a vossa ansiedade, porque ele tem cuidado de vós.', version: 'Bíblia João Ferreira de Almeida (ARC)' },
        ru: { text: 'Все заботы ваши возложите на Него, ибо Он печется о вас.', version: 'Синодальный перевод (1876)' }
      },
      reflection: {
        en: 'God does not ask you to carry the weight of tomorrow alone. Hand over the tight knot in your chest to His capable hands right now.',
        it: 'Dio non ti chiede di portare da solo il peso del domani. Consegna ora il nodo che hai nel petto alle Sue mani premurose.',
        ro: 'Dumnezeu nu-ți cere să porți singur povara zilei de mâine. Încredințează acum strângerea de inimă mâinilor Sale părintești.',
        la: 'Deus te non rogat ut solus crastinum onus portes. Committe nunc sollicitudinem cordis tui manibus Eius.',
        es: 'Dios no te pide que cargues solo el peso del mañana. Entrega ahora ese nudo en tu pecho en Sus manos amorosas.',
        fr: 'Dieu ne vous demande pas de porter seul le fardeau du lendemain. Remettez dès maintenant votre angoisse entre Ses mains bienveillantes.',
        de: 'Gott verlangt nicht von dir, die Last von morgen allein zu tragen. Übergib die Unruhe deines Herzens jetzt Seinen Händen.',
        pt: 'Deus não pede que você carregue sozinho o peso do amanhã. Entregue agora o nó no seu peito nas mãos d’Ele.',
        ru: 'Бог не требует от тебя нести бремя завтрашнего дня в одиночку. Доверь тревогу своего сердца Его заботливым рукам прямо сейчас.'
      },
      prayer: {
        en: 'Lord Jesus, I surrender this anxiety to You. Take away my frantic racing thoughts, quiet my heart, and replace my worry with Your perfect supernatural peace. Amen.',
        it: 'Signore Gesù, consegno a Te questa ansia. Placa i miei pensieri affannosi, calma il mio cuore e dona la Tua pace soprannaturale. Amen.',
        ro: 'Doamne Iisuse, Îți predau această îngrijorare. Liniștește gândurile mele, mângâie inima mea și revarsă pacea Ta cea sfântă. Amin.',
        la: 'Domine Jesu, hanc sollicitudinem Tibi trado. Seda turbatos cogitatus meos, pacifica cor meum et dona pacem tuam. Amen.',
        es: 'Señor Jesús, rindo esta ansiedad a Ti. Calma mis pensamientos apresurados, aquieta mi corazón y llena mi alma de Tu paz perfecta. Amén.',
        fr: 'Seigneur Jésus, je Te remets cette angoisse. Calme mes pensées tumultueuses, apaise mon cœur et remplis-moi de Ta paix parfaite. Amen.',
        de: 'Herr Jesus, ich übergebe Dir diese Sorge. Beruhige meine Gedanken, stille mein Herz und schenke mir Deinen übernatürlichen Frieden. Amen.',
        pt: 'Senhor Jesus, entrego esta ansiedade a Ti. Acalma os meus pensamentos, aquieta o meu coração e substitui a minha aflição pela Tua perfeita paz. Amém.',
        ru: 'Господи Иисусе, предаю Тебе эту тревогу. Утиши мятущиеся мысли, успокой сердце мое и даруй Твой совершенный мир. Аминь.'
      }
    },
    {
      ref: 'Philippians 4:6-7',
      verse: 'Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God. And the peace of God, which passeth all understanding, shall keep your hearts and minds through Christ Jesus.',
      archives: {
        en: { text: 'Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God. And the peace of God, which passeth all understanding, shall keep your hearts and minds through Christ Jesus.', version: 'King James Version (KJV 1611)' },
        it: { text: 'Non angustiatevi per nulla, ma in ogni circostanza fate presenti a Dio le vostre richieste con preghiere, suppliche e ringraziamenti. E la pace di Dio, che supera ogni intelligenza, custodirà i vostri cuori e le vostre menti in Cristo Gesù.', version: 'Conferenza Episcopale Italiana (CEI 2008)' },
        ro: { text: 'Nu vă împovăraţi cu nicio grijă, ci întru toate, prin rugăciune şi prin cerere cu mulţumire, să se arate cererile voastre înaintea lui Dumnezeu. Şi pacea lui Dumnezeu, care covârşeşte orice minte, să vă păzească inimile şi cugetele voastre, întru Hristos Iisus.', version: 'Biblia Sinodală Ortodoxă Română (1982)' },
        la: { text: 'Nihil solliciti sitis: sed in omni oratione, et obsecratione, cum gratiarum actione petitiones vestræ innotescant apud Deum. Et pax Dei, quæ exsuperat omnem sensum, custodiat corda vestra, et intelligentias vestras in Christo Jesu.', version: 'Biblia Sacra Vulgata (Clementina 1592)' },
        es: { text: 'Por nada estéis afanosos; sino sean notorias vuestras peticiones delante de Dios en toda oración y ruego, con hacimiento de gracias. Y la paz de Dios, que sobrepuja todo entendimiento, guardará vuestros corazones y vuestros entendimientos en Cristo Jesús.', version: 'Biblia Reina-Valera (1909)' },
        fr: { text: 'Ne vous inquiétez de rien; mais en toute chose faites connaître vos besoins à Dieu par des prières et des supplications, avec des actions de grâces. Et la paix de Dieu, qui surpasse toute intelligence, gardera vos cœurs et vos pensées en Jésus-Christ.', version: 'Bible Louis Segond (1910)' },
        de: { text: 'Sorget nichts! sondern in allen Dingen lasset eure Bitten im Gebet und Flehen mit Danksagung vor Gott kund werden! Und der Friede Gottes, welcher höher ist denn alle Vernunft, bewahre eure Herzen und Sinne in Christo Jesu!', version: 'Lutherbibel (1912)' },
        pt: { text: 'Não estejais inquietos por coisa alguma; antes as vossas petições sejam em tudo conhecidas diante de Deus pela oração e súplica, com acção de graças. E a paz de Deus, que excede todo o entendimento, guardará os vossos corações e os vossos sentimentos em Cristo Jesus.', version: 'Bíblia João Ferreira de Almeida (ARC)' },
        ru: { text: 'Не заботьтесь ни о чем, но всегда в молитве и прошении с благодарением открывайте свои желания пред Богом, и мир Божий, который превыше всякого ума, соблюдет сердца ваши и помышления ваши во Христе Иисусе.', version: 'Синодальный перевод (1876)' }
      },
      reflection: {
        en: 'Peace is not the absence of trouble; it is the presence of Christ holding you steadfast in the middle of the storm.',
        it: 'La pace non è assenza di difficoltà, ma la presenza viva di Cristo che ti sostiene saldamente nella tempesta.',
        ro: 'Pacea nu este absența încercărilor, ci prezența lui Hristos care te ține neclintit în mijlocul furtunii.',
        la: 'Pax non est absentia tribulationis, sed Christi praesentia te in procella confirmans.',
        es: 'La paz no es la ausencia de problemas; es la presencia de Cristo sosteniéndote firme en medio de la tormenta.',
        fr: 'La paix n\'est pas l\'absence d\'épreuves, mais la présence du Christ qui vous garde inébranlable au cœur de la tempête.',
        de: 'Friede ist nicht die Abwesenheit von Not, sondern die Gegenwart Christi, die dich mitten im Sturm hält.',
        pt: 'A paz não é a ausência de problemas; é a presença de Cristo sustentando você no meio da tempestade.',
        ru: 'Мир — это не отсутствие трудностей, но живое присутствие Христа, хранящее тебя посреди бури.'
      },
      prayer: {
        en: 'Father, breathe Your peace into my lungs. Guard my thoughts and emotions today. You are greater than any challenge I face. Amen.',
        it: 'Padre, infondi la Tua pace nel mio respiro. Custodisci oggi i miei pensieri e le mie emozioni. Tu sei più grande di ogni mia prova. Amen.',
        ro: 'Tată ceresc, revarsă pacea Ta în sufletul meu. Păzește-mi gândurile și inima. Tu ești mai mare decât orice încercare. Amin.',
        la: 'Pater, pacem tuam in me infunde. Custodi cogitationes et affectus meos hodie. Tu es omni tribulatione maior. Amen.',
        es: 'Padre, sopla Tu paz en mi ser. Guarda mis pensamientos y emociones hoy. Eres más grande que cualquier desafío que enfrento. Amén.',
        fr: 'Père, insuffle Ta paix en mon âme. Garde mes pensées et mes sentiments aujourd\'hui. Tu es plus grand que toute épreuve. Amen.',
        de: 'Vater, schenke mir Deinen Frieden. Bewahre meine Gedanken und Gefühle am heutigen Tag. Du bist größer als jede Herausforderung. Amen.',
        pt: 'Pai, sopra a Tua paz no meu ser. Guarda os meus pensamentos e emoções hoje. Tu és maior do que qualquer desafio. Amém.',
        ru: 'Отче, вдохни Твой мир в сердце мое. Сохрани мои мысли и чувства. Ты превыше всякого испытания. Аминь.'
      }
    }
  ],
  fear: [
    {
      ref: 'Isaiah 41:10',
      verse: 'Fear thou not; for I am with thee: be not dismayed; for I am thy God: I will strengthen thee; yea, I will help thee; yea, I will uphold thee with the right hand of my righteousness.',
      archives: {
        en: { text: 'Fear thou not; for I am with thee: be not dismayed; for I am thy God: I will strengthen thee; yea, I will help thee; yea, I will uphold thee with the right hand of my righteousness.', version: 'King James Version (KJV 1611)' },
        it: { text: 'Non temere, perché io sono con te; non smarrirti, perché io sono il tuo Dio. Ti rendo forte e anche ti vengo in aiuto e ti sostengo con la destra della mia giustizia.', version: 'Conferenza Episcopale Italiana (CEI 2008)' },
        ro: { text: 'Nu te teme, căci Eu sunt cu tine; nu privi cu îngrijorare, căci Eu sunt Dumnezeul tău; Eu te întăresc şi te ajut şi te sprijin cu dreapta dreptăţii Mele.', version: 'Biblia Sinodală Ortodoxă Română (1982)' },
        la: { text: 'Ne timeas, quia ego tecum sum; ne declines, quia ego Deus tuus: confortavi te, et auxiliatus sum tibi, et suscepit te dextera justi mei.', version: 'Biblia Sacra Vulgata (Clementina 1592)' },
        es: { text: 'No temas, que yo soy contigo; no desmayes, que yo soy tu Dios que te esfuerzo: siempre te ayudaré, siempre te sustentaré con la diestra de mi justicia.', version: 'Biblia Reina-Valera (1909)' },
        fr: { text: 'Ne crains rien, car je suis avec toi; Ne promène pas des regards inquiets, car je suis ton Dieu; Je te fortifie, je viens à ton secours, Je te soutiens de ma droite triomphante.', version: 'Bible Louis Segond (1910)' },
        de: { text: 'Fürchte dich nicht, ich bin mit dir; weiche nicht, denn ich bin dein Gott; ich stärke dich, ich helfe dir auch, ich erhalte dich durch die rechte Hand meiner Gerechtigkeit.', version: 'Lutherbibel (1912)' },
        pt: { text: 'Não temas, porque eu sou contigo; não te assombres, porque eu sou teu Deus: eu te esforço, e te ajudo, e te sustento com a destra da minha justiça.', version: 'Bíblia João Ferreira de Almeida (ARC)' },
        ru: { text: 'Не бойся, ибо Я с тобою; не смущайся, ибо Я Бог твой; Я укреплю тебя, и помогу тебе, и поддержу тебя десницею правды Моей.', version: 'Синодальный перевод (1876)' }
      },
      reflection: {
        en: 'You are held by the same right hand that set the stars in motion. Fear is real, but God’s covenant is eternal.',
        it: 'Sei custodito dalla stessa destra che ha acceso le stelle. La paura è reale, ma l\'alleanza di Dio è eterna.',
        ro: 'Ești ținut de aceeași mână care a pus stelele pe cer. Frica este reală, dar făgăduința lui Dumnezeu este veșnică.',
        la: 'Eadem dextera teneris quae astra condidit. Timor est verus, sed foedus Dei aeternum.',
        es: 'Estás sostenido por la misma diestra que puso en marcha las estrellas. El temor es real, pero el pacto de Dios es eterno.',
        fr: 'Vous êtes soutenu par la même main droite qui a ordonné les étoiles. La peur est réelle, mais l\'alliance de Dieu est éternelle.',
        de: 'Du wirst von derselben rechten Hand gehalten, die die Sterne schuf. Furcht ist real, aber Gottes Bund währt ewig.',
        pt: 'Você é sustentado pela mesma destra que colocou as estrelas no céu. O medo é real, mas a aliança de Deus é eterna.',
        ru: 'Тебя держит та самая десница, что зажгла звезды на небесах. Страх реален, но завет Божий вечен.'
      },
      prayer: {
        en: 'Jesus, hold my trembling hand. Drive away every spirit of fear and fear of failure. I stand confident because You are by my side. Amen.',
        it: 'Gesù, stringi la mia mano tremante. Allontana ogni spirito di paura e di fallimento. Cammino fiducioso perché Tu sei accanto a me. Amen.',
        ro: 'Iisuse, ține mâna mea tremurândă. Alungă orice duh de frică și teamă de eșec. Pășesc cu încredere pentru că Tu ești cu mine. Amin.',
        la: 'Jesu, manum meam trepidantem tene. Repelle omnem timoris spiritum. Confidens sto quia mecum es. Amen.',
        es: 'Jesús, toma mi mano temblorosa. Aleja todo espíritu de temor y miedo al fracaso. Estoy confiado porque estás a mi lado. Amén.',
        fr: 'Jésus, tiens ma main tremblante. Chasse tout esprit de peur et d\'échec. J\'avance en confiance car Tu es à mes côtés. Amen.',
        de: 'Jesus, halte meine zitternde Hand. Vertreibe alle Furcht und Versagensangst. Ich gehe getrost, denn Du bist bei mir. Amen.',
        pt: 'Jesus, segura a minha mão trêmula. Afasta todo espírito de medo e fracasso. Caminho confiante porque estás ao meu lado. Amém.',
        ru: 'Иисусе, удержи колеблющуюся руку мою. Прогони всякий страх и уныние. Я стою твердо, ибо Ты со мною. Аминь.'
      }
    },
    {
      ref: 'Joshua 1:9',
      verse: 'Have not I commanded thee? Be strong and of a good courage; be not afraid, neither be thou dismayed: for the Lord thy God is with thee whithersoever thou goest.',
      archives: {
        en: { text: 'Have not I commanded thee? Be strong and of a good courage; be not afraid, neither be thou dismayed: for the Lord thy God is with thee whithersoever thou goest.', version: 'King James Version (KJV 1611)' },
        it: { text: 'Non ti ho forse comandato: sii forte e coraggioso? Non temere e non spaventarti, perché il Signore, tuo Dio, è con te dovunque tu vada.', version: 'Conferenza Episcopale Italiana (CEI 2008)' },
        ro: { text: 'Oare nu ţi-am poruncit Eu: Fii tare şi curajos! Nu te teme şi nu te înspăimânta, căci Domnul Dumnezeul tău este cu tine pretutindeni pe unde vei merge!', version: 'Biblia Sinodală Ortodoxă Română (1982)' },
        la: { text: 'Ecce præcipio tibi: confortare, et esto robustus. Noli metuere, et noli timere: quoniam tecum est Dominus Deus tuus in omnibus ad quæcunque perrexeris.', version: 'Biblia Sacra Vulgata (Clementina 1592)' },
        es: { text: 'Mira que te mando que te esfuerces y seas valiente: no temas ni desmayes, porque Jehová tu Dios será contigo en donde quiera que fueres.', version: 'Biblia Reina-Valera (1909)' },
        fr: { text: 'Ne t\'ai-je pas donné cet ordre: Fortifie-toi et prends courage? Ne t\'effraie point et ne t\'épouvante point, car l\'Éternel, ton Dieu, est avec toi dans tout ce que tu entreprendras.', version: 'Bible Louis Segond (1910)' },
        de: { text: 'Siehe, ich habe dir geboten, dass du getrost und freudig seist. Lass dir nicht grauen und entsetze dich nicht; denn der HERR, dein Gott, ist mit dir in allem, was du tun wirst.', version: 'Lutherbibel (1912)' },
        pt: { text: 'Não to mandei eu? Esforça-te, e tem bom ânimo; não pasmes, nem te espantes; porque o Senhor teu Deus é contigo, por onde quer que andares.', version: 'Bíblia João Ferreira de Almeida (ARC)' },
        ru: { text: 'Вот Я повелеваю тебе: будь тверд и мужествен, не страшись и не ужасайся; ибо с тобою Господь Бог твой везде, куда ни пойдешь.', version: 'Синодальный перевод (1876)' }
      },
      reflection: {
        en: 'Courage is not feeling fearless; courage is taking the next step knowing God has already walked ahead of you.',
        it: 'Il coraggio non è assenza di paura; è fare il passo successivo sapendo che Dio ha già aperto la via davanti a te.',
        ro: 'Curajul nu înseamnă lipsa fricii, ci a face pasul următor știind că Dumnezeu a mers deja înaintea ta.',
        la: 'Fortitudo non est timoris absentia, sed gressum facere sciens Deum praecedere.',
        es: 'El valor no es la ausencia de miedo; es dar el siguiente paso sabiendo que Dios ya ha caminado delante de ti.',
        fr: 'Le courage n\'est pas l\'absence de peur; c\'est avancer d\'un pas en sachant que Dieu a déjà tracé la voie devant vous.',
        de: 'Mut bedeutet nicht, keine Furcht zu empfinden; Mut bedeutet, den nächsten Schritt zu tun im Vertrauen, dass Gott vor dir hergeht.',
        pt: 'A coragem não é a ausência de medo; é dar o próximo passo sabendo que Deus já foi à sua frente.',
        ru: 'Мужество — это не отсутствие страха; это шаг вперед в твердой вере, что Господь уже идет пред тобою.'
      },
      prayer: {
        en: 'Lord, give me holy courage. Wherever my feet tread today, let me feel Your living presence walking before me. Amen.',
        it: 'Signore, donami santo coraggio. Ovunque si posino i miei passi oggi, fammi sentire la Tua presenza che cammina davanti a me. Amen.',
        ro: 'Doamne, dăruiește-mi curaj sfânt. Oriunde vor păși picioarele mele astăzi, lasă-mă să simt că Tu mergi înaintea mea. Amin.',
        la: 'Domine, tribue mihi sanctam fortitudinem. Ubicumque gressus mei posuerint, sentiam te praeeuntem. Amen.',
        es: 'Señor, dame santo valor. Dondequiera que pisen mis pies hoy, hazme sentir Tu santa presencia caminando delante de mí. Amén.',
        fr: 'Seigneur, donne-moi un saint courage. Partout où mes pas me mèneront aujourd\'hui, fais-moi sentir Ta présence devant moi. Amen.',
        de: 'Herr, schenke mir heiligen Mut. Wohin auch immer meine Füße mich heute tragen, lass mich Deine Gegenwart spüren. Amen.',
        pt: 'Senhor, dá-me santa coragem. Onde quer que meus pés pisem hoje, faz-me sentir a Tua presença à minha frente. Amém.',
        ru: 'Господи, даруй мне святое мужество. Где бы ни ступали стопы мои, дай ощутить, что Ты шествуешь впереди меня. Аминь.'
      }
    }
  ],
  loneliness: [
    {
      ref: 'Matthew 28:20',
      verse: 'Teaching them to observe all things whatsoever I have commanded you: and, lo, I am with you alway, even unto the end of the world. Amen.',
      archives: {
        en: { text: 'Teaching them to observe all things whatsoever I have commanded you: and, lo, I am with you alway, even unto the end of the world. Amen.', version: 'King James Version (KJV 1611)' },
        it: { text: 'Insegnando loro a osservare tutto ciò che vi ho comandato. Ed ecco, io sono con voi tutti i giorni, fino alla fine del mondo.', version: 'Conferenza Episcopale Italiana (CEI 2008)' },
        ro: { text: 'Şi iată, Eu cu voi sunt în toate zilele, până la sfârşitul veacului. Amin.', version: 'Biblia Sinodală Ortodoxă Română (1982)' },
        la: { text: 'Docentes eos servare omnia quæcumque mandavi vobis: et ecce ego vobiscum sum omnibus diebus, usque ad consummationem sæculi.', version: 'Biblia Sacra Vulgata (Clementina 1592)' },
        es: { text: 'Enseñándoles que guarden todas las cosas que os he mandado: y he aquí, yo estoy con vosotros todos los días, hasta el fin del mundo. Amén.', version: 'Biblia Reina-Valera (1909)' },
        fr: { text: 'Et enseignez-leur à observer tout ce que je vous ai prescrit. Et voici, je suis avec vous tous les jours, jusqu\'à la fin du monde.', version: 'Bible Louis Segond (1910)' },
        de: { text: 'Und lehret sie halten alles, was ich euch befohlen habe. Und siehe, ich bin bei euch alle Tage bis an der Welt Ende.', version: 'Lutherbibel (1912)' },
        pt: { text: 'Ensinando-os a guardar todas as coisas que eu vos tenho mandado; e eis que eu estou convosco todos os dias, até à consumação dos séculos. Ámen.', version: 'Bíblia João Ferreira de Almeida (ARC)' },
        ru: { text: 'Уча их соблюдать все, что Я повелел вам; и се, Я с вами во все дни до скончания века. Аминь.', version: 'Синодальный перевод (1876)' }
      },
      reflection: {
        en: 'Even when friends drift away, family misunderstands you, or silence echoes in your room, Christ sits beside you.',
        it: 'Anche quando gli amici si allontanano, la famiglia non capisce o il silenzio pesa nella stanza, Cristo è seduto accanto a te.',
        ro: 'Chiar dacă prietenii se depărtează, familia nu te înțelege sau liniștea camerei apasă greu, Hristos șade lângă tine.',
        la: 'Etsi amici recedunt et familia non intellegit, Christus tecum sedet in silentio.',
        es: 'Incluso cuando los amigos se alejan, la familia no comprende o reina el silencio, Cristo está sentado a tu lado.',
        fr: 'Même quand les amis s\'éloignent, que la famille ne comprend pas ou que le silence règne, le Christ est assis à vos côtés.',
        de: 'Selbst wenn Freunde sich entfernen, Familie dich missversteht oder Stille im Raum herrscht: Christus sitzt neben dir.',
        pt: 'Mesmo quando amigos se afastam ou a família não compreende, Cristo está sentado ao seu lado.',
        ru: 'Даже когда друзья отдаляются, а в комнате стоит глухая тишина, Сам Христос пребывает рядом с тобою.'
      },
      prayer: {
        en: 'Lord Jesus, warm the cold spaces of my heart. Remind me that I am never truly alone, for Your Spirit is closer to me than my very breath. Amen.',
        it: 'Signore Gesù, riscalda le parti fredde del mio cuore. Ricordami che non sono mai solo, perché il Tuo Spirito è più vicino a me del mio respiro. Amen.',
        ro: 'Doamne Iisuse, încălzește inima mea. Adu-mi aminte că nu sunt niciodată singur, căci Duhul Tău îmi este mai aproape decât propria răsuflare. Amin.',
        la: 'Domine Jesu, fove frigida cordis mei. Doce me numquam solum esse, nam Spiritus tuus spiritu meo propior est. Amen.',
        es: 'Señor Jesús, calienta los espacios fríos de mi corazón. Recuérdame que nunca estoy solo, pues Tu Espíritu está más cerca que mi aliento. Amén.',
        fr: 'Seigneur Jésus, réchauffe la solitude de mon cœur. Rappelle-moi que je ne suis jamais seul, car Ton Esprit est plus près de moi que mon souffle. Amen.',
        de: 'Herr Jesus, erwärme mein einsames Herz. Erinnere mich daran, dass ich niemals allein bin, denn Dein Geist ist mir näher als mein Atem. Amen.',
        pt: 'Senhor Jesus, aquece os cantos frios do meu coração. Lembra-me de que nunca estou só, pois Teu Espírito está mais perto que minha própria respiração. Amém.',
        ru: 'Господи Иисусе, согрей холодные уголки моего сердца. Напомни мне, что я никогда не одинок, ибо Твой Дух ближе ко мне, чем дыхание мое. Аминь.'
      }
    }
  ],
  grief: [
    {
      ref: 'Psalm 34:18',
      verse: 'The Lord is nigh unto them that are of a broken heart; and saveth such as be of a contrite spirit.',
      archives: {
        en: { text: 'The Lord is nigh unto them that are of a broken heart; and saveth such as be of a contrite spirit.', version: 'King James Version (KJV 1611)' },
        it: { text: 'Il Signore è vicino a chi ha il cuore spezzato, egli salva gli spiriti affranti.', version: 'Conferenza Episcopale Italiana (CEI 2008)' },
        ro: { text: 'Aproape este Domnul de cei umiliţi la inimă, şi pe cei zdrobiţi cu duhul îi va mântui.', version: 'Biblia Sinodală Ortodoxă Română (1982)' },
        la: { text: 'Juxta est Dominus iis qui tribulato sunt corde: et humiles spiritu salvabit.', version: 'Biblia Sacra Vulgata (Clementina 1592)' },
        es: { text: 'Cercano está Jehová á los quebrantados de corazón; y salvará á los contritos de espíritu.', version: 'Biblia Reina-Valera (1909)' },
        fr: { text: 'L\'Éternel est près de ceux qui ont le cœur brisé, et il sauve ceux qui ont l\'esprit dans l\'abattement.', version: 'Bible Louis Segond (1910)' },
        de: { text: 'Der HERR ist nahe bei denen, die zerbrochenen Herzens sind, und hilft denen, die ein zerschlagenes Gemüt haben.', version: 'Lutherbibel (1912)' },
        pt: { text: 'Perto está o Senhor dos que têm o coração quebrantado, e salva os contritos de espírito.', version: 'Bíblia João Ferreira de Almeida (ARC)' },
        ru: { text: 'Близок Господь к сокрушенным сердцем и смиренных духом спасет.', version: 'Синодальный перевод (1876)' }
      },
      reflection: {
        en: 'Tears are prayers that words cannot formulate. God counts every drop and draws near with infinite gentleness.',
        it: 'Le lacrime sono preghiere che le parole non sanno formulare. Dio ne conta ogni goccia e si avvicina con infinita tenerezza.',
        ro: 'Lacrimile sunt rugăciuni pe care vorbele nu le pot rosti. Dumnezeu numără fiecare strop și se apropie cu nesfârșită blândețe.',
        la: 'Lacrimae sunt orationes quas verba non explicant. Deus omnem guttam numerat et infinita clementia appropinquat.',
        es: 'Las lágrimas son oraciones que las palabras no pueden formular. Dios cuenta cada gota y se acerca con infinita ternura.',
        fr: 'Les larmes sont des prières que les mots ne peuvent formuler. Dieu compte chaque goutte et s\'approche avec une infinie tendresse.',
        de: 'Tränen sind Gebete, die Worte nicht fassen können. Gott zählt jeden Tropfen und neigt sich dir in unendlicher Sanftmut zu.',
        pt: 'As lágrimas são orações que as palavras não conseguem expressar. Deus conta cada gota e se aproxima com infinita ternura.',
        ru: 'Слезы — это молитвы, которые не выразить словами. Господь считает каждую каплю и приближается с неизреченной нежностью.'
      },
      prayer: {
        en: 'Lord of mercy, bind up my wounded heart. Pour the soothing oil of Your Holy Spirit on my pain, and give me hope for tomorrow. Amen.',
        it: 'Signore di misericordia, fascia il mio cuore ferito. Versa l\'olio consolatore del Tuo Santo Spirito sul mio dolore e donami speranza per il domani. Amen.',
        ro: 'Doamne al milei, vindecă inima mea rănită. Toarnă untdelemnul mângâietor al Duhului Sfânt peste durerea mea și dă-mi nădejde pentru ziua de mâine. Amin.',
        la: 'Domine misericordiae, sana cor meum vulneratum. Infunde oleum Spiritus tui Sancti in dolorem meum et spem tribue. Amen.',
        es: 'Señor de misericordia, venda mi corazón herido. Derrama el aceite consolador de Tu Santo Espíritu en mi dolor y dame esperanza para el mañana. Amén.',
        fr: 'Seigneur de miséricorde, panse mon cœur blessé. Verse l\'huile consolatrice de Ton Saint-Esprit sur ma peine et donne-moi l\'espérance pour demain. Amen.',
        de: 'Herr der Barmherzigkeit, verbinde mein verwundetes Herz. Gieße das tröstende Öl Deines Heiligen Geistes auf meinen Schmerz und schenke mir Hoffnung für morgen. Amen.',
        pt: 'Senhor de misericórdia, cura o meu coração ferido. Derrama o óleo consolador do Teu Santo Espírito sobre a minha dor e dá-me esperança para o amanhã. Amém.',
        ru: 'Господи милосердный, уврачуй раненое сердце мое. Излей утешающий елей Духа Твоего Святого на скорбь мою и даруй надежду. Аминь.'
      }
    }
  ],
  forgiveness: [
    {
      ref: '1 John 1:9',
      verse: 'If we confess our sins, he is faithful and just to forgive us our sins, and to cleanse us from all unrighteousness.',
      archives: {
        en: { text: 'If we confess our sins, he is faithful and just to forgive us our sins, and to cleanse us from all unrighteousness.', version: 'King James Version (KJV 1611)' },
        it: { text: 'Se confessiamo i nostri peccati, egli è fedele e giusto tanto da perdonarci i peccati e purificarci da ogni iniquità.', version: 'Conferenza Episcopale Italiana (CEI 2008)' },
        ro: { text: 'Dacă mărturisim păcatele noastre, El este credincios şi drept ca să ne ierte păcatele şi să ne curăţească pe noi de toată nedreptatea.', version: 'Biblia Sinodală Ortodoxă Română (1982)' },
        la: { text: 'Si confiteamur peccata nostra: fidelis est, et justus, ut remittat nobis peccata nostra, et emundet nos ab omni iniquitate.', version: 'Biblia Sacra Vulgata (Clementina 1592)' },
        es: { text: 'Si confesamos nuestros pecados, él es fiel y justo para que nos perdone nuestros pecados, y nos limpie de toda maldad.', version: 'Biblia Reina-Valera (1909)' },
        fr: { text: 'Si nous confessons nos péchés, il est fidèle et juste pour nous les pardonner, et pour nous purifier de toute iniquité.', version: 'Bible Louis Segond (1910)' },
        de: { text: 'So wir aber unsre Sünden bekennen, so ist er treu und gerecht, dass er uns die Sünden vergibt und reinigt uns von aller Untugend.', version: 'Lutherbibel (1912)' },
        pt: { text: 'Se confessarmos os nossos pecados, ele é fiel e justo, para nos perdoar os pecados, e nos purificar de toda a injustiça.', version: 'Bíblia João Ferreira de Almeida (ARC)' },
        ru: { text: 'Если исповедуем грехи наши, то Он, будучи верен и праведен, простит нам грехи наши и очистит нас от всякой неправды.', version: 'Синодальный перевод (1876)' }
      },
      reflection: {
        en: 'The cross of Christ is infinitely wider and deeper than any mistake you have made. You are not defined by your fall, but by His grace.',
        it: 'La croce di Cristo è infinitamente più grande di qualsiasi tuo sbaglio. Non sei definito dalla tua caduta, ma dalla Sua grazia redentrice.',
        ro: 'Crucea lui Hristos este nesfârșit mai adâncă decât orice greșeală a ta. Nu ești definit de căderea ta, ci de harul Lui iertător.',
        la: 'Crux Christi omni peccato tuo altior est. Non lapsu tuo, sed Eius gratia redimeris.',
        es: 'La cruz de Cristo es infinitamente más ancha y profunda que cualquier error. No estás definido por tu caída, sino por Su gracia.',
        fr: 'La croix du Christ est infiniment plus profonde que n\'importe laquelle de vos fautes. Vous n\'êtes pas défini par votre chute, mais par Sa grâce.',
        de: 'Das Kreuz Christi ist unendlich größer als jeder deiner Fehler. Du wirst nicht durch deinen Fall bestimmt, sondern durch Seine Gnade.',
        pt: 'A cruz de Cristo é infinitamente maior do que qualquer erro seu. Você não é definido pela sua queda, mas pela graça d’Ele.',
        ru: 'Крест Христов неизмеримо глубже любого твоего падения. Ты определяешься не своим согрешением, но Его искупительной благодатью.'
      },
      prayer: {
        en: 'Lord Jesus, Lamb of God who takes away the sin of the world, forgive my fault. Cleanse my conscience, wash me in Your mercy, and let me rise anew. Amen.',
        it: 'Signore Gesù, Agnello di Dio che togli i peccati del mondo, perdona le mie colpe. Purifica la mia coscienza, lavami nella Tua misericordia e fammi risorgere. Amen.',
        ro: 'Doamne Iisuse, Mielul lui Dumnezeu care ridici păcatele lumii, iartă greșelile mele. Curățește cugetul meu și ridică-mă din nou prin mila Ta. Amin.',
        la: 'Domine Jesu, Agnus Dei qui tollis peccata mundi, miserere mei. Emunda conscientiam meam et me resuscita. Amen.',
        es: 'Señor Jesús, Cordero de Dios que quitas el pecado del mundo, perdona mi falta. Limpia mi conciencia y levántame con Tu misericordia. Amén.',
        fr: 'Seigneur Jésus, Agneau de Dieu qui ôtes le péché du monde, pardonne mes fautes. Purifie ma conscience et relève-moi dans Ta miséricorde. Amen.',
        de: 'Herr Jesus, Lamm Gottes, das die Sünde der Welt hinwegnimmt, vergib mir meine Schuld. Reinige mein Gewissen und richte mich auf. Amen.',
        pt: 'Senhor Jesus, Cordeiro de Deus que tira o pecado do mundo, perdoa as minhas faltas. Purifica a minha consciência e renova a minha vida. Amém.',
        ru: 'Господи Иисусе Христе, Агнче Божий, вземляй грех мира, прости прегрешения мои. Очисти совесть мою и восстави мя Своею милостию. Аминь.'
      }
    }
  ],
  decisions: [
    {
      ref: 'Proverbs 3:5-6',
      verse: 'Trust in the Lord with all thine heart; and lean not unto thine own understanding. In all thy ways acknowledge him, and he shall direct thy paths.',
      archives: {
        en: { text: 'Trust in the Lord with all thine heart; and lean not unto thine own understanding. In all thy ways acknowledge him, and he shall direct thy paths.', version: 'King James Version (KJV 1611)' },
        it: { text: 'Confida nel Signore con tutto il cuore e non appoggiarti sul tuo discernimento; in tutti i tuoi passi riconoscilo ed egli spianerà i tuoi sentieri.', version: 'Conferenza Episcopale Italiana (CEI 2008)' },
        ro: { text: 'Încrede-te în Domnul din toată inima ta şi nu te bizui pe priceperea ta. În toate căile tale gândeşte la Dânsul şi El îţi va netezi cărările tale.', version: 'Biblia Sinodală Ortodoxă Română (1982)' },
        la: { text: 'Habe fiduciam in Domino ex toto corde tuo, et ne innitaris prudentiæ tuæ. In omnibus viis tuis cogita illum, et ipse diriget gressus tuos.', version: 'Biblia Sacra Vulgata (Clementina 1592)' },
        es: { text: 'Fíate de Jehová de todo tu corazón, y no te apoyes en tu prudencia. Reconócelo en todos tus caminos, y él enderezará tus veredas.', version: 'Biblia Reina-Valera (1909)' },
        fr: { text: 'Confie-toi en l\'Éternel de tout ton cœur, et ne t\'appuie pas sur ta sagesse; Reconnais-le dans toutes tes voies, et il aplanira tes sentiers.', version: 'Bible Louis Segond (1910)' },
        de: { text: 'Verlass dich auf den HERRN von ganzem Herzen, und verlass dich nicht auf deinen Verstand; sondern gedenke an ihn in allen deinen Wegen, so wird er dich recht führen.', version: 'Lutherbibel (1912)' },
        pt: { text: 'Confia no Senhor de todo o teu coração, e não te estribes no teu próprio entendimento. Reconhece-o em todos os teus caminhos, e ele endireitará as tuas veredas.', version: 'Bíblia João Ferreira de Almeida (ARC)' },
        ru: { text: 'Надейся на Господа всем сердцем твоим, и не полагайся на разум твой. Во всех путях твоих познавай Его, и Он направит стези твои.', version: 'Синодальный перевод (1876)' }
      },
      reflection: {
        en: 'You do not need to see the entire staircase; you only need God’s light for the next step.',
        it: 'Non serve vedere tutta la scalinata; hai solo bisogno della luce di Dio per il prossimo passo.',
        ro: 'Nu trebuie să vezi întreaga scară; ai nevoie doar de lumina lui Dumnezeu pentru pasul următor.',
        la: 'Non oportet universam scalam videre; sola Dei luce proximo gressui eges.',
        es: 'No necesitas ver toda la escalera; solo necesitas la luz de Dios para dar el siguiente paso.',
        fr: 'Vous n\'avez pas besoin de voir tout l\'escalier; la lumière de Dieu vous suffit pour le prochain pas.',
        de: 'Du musst nicht die ganze Treppe sehen; du brauchst nur Gottes Licht für den nächsten Schritt.',
        pt: 'Você não precisa ver toda a escadaria; só precisa da luz de Deus para o próximo passo.',
        ru: 'Тебе не обязательно видеть всю лестницу; нужен лишь Божий светильник для следующего шага.'
      },
      prayer: {
        en: 'Holy Spirit, Spirit of Wisdom and Counsel, guide my mind. Close every wrong door and open wide the path of Your will for my life. Amen.',
        it: 'Spirito Santo, Spirito di Sapienza e Consiglio, guida la mia mente. Chiudi ogni porta sbagliata e apri la via della Tua volontà. Amen.',
        ro: 'Duhule Sfinte, Duh de Înțelepciune și Sfat, călăuzește mintea mea. Închide ușile rătăcirii și deschide calea voii Tale sfinte. Amin.',
        la: 'Spiritus Sancte, Spiritus Sapientiae et Consilii, dirige mentem meam. Claude portas noxias et viam voluntatis tuae aperi. Amen.',
        es: 'Espíritu Santo, Espíritu de Sabiduría y Consejo, guía mi mente. Cierra toda puerta equivocada y abre la senda de Tu santa voluntad. Amén.',
        fr: 'Esprit Saint, Esprit de Sagesse et de Conseil, guide mon esprit. Ferme les portes trompeuses et ouvre la voie de Ta sainte volonté. Amen.',
        de: 'Heiliger Geist, Geist der Weisheit und des Rates, leite meinen Sinn. Schließe falsche Türen und öffne den Weg Deines Willens. Amen.',
        pt: 'Espírito Santo, Espírito de Sabedoria e Conselho, guia a minha mente. Fecha as portas erradas e abre o caminho da Tua vontade. Amém.',
        ru: 'Душе Святый, Душе Премудрости и Разума, настави ум мой. Затвори двери заблуждения и отверзи стезю святой воли Твоей. Аминь.'
      }
    }
  ],
  exhaustion: [
    {
      ref: 'Matthew 11:28',
      verse: 'Come unto me, all ye that labour and are heavy laden, and I will give you rest.',
      archives: {
        en: { text: 'Come unto me, all ye that labour and are heavy laden, and I will give you rest.', version: 'King James Version (KJV 1611)' },
        it: { text: 'Venite a me, voi tutti che siete affaticati e oppressi, e io vi darò ristoro.', version: 'Conferenza Episcopale Italiana (CEI 2008)' },
        ro: { text: 'Veniţi la Mine toţi cei osteniţi şi împovăraţi şi Eu vă voi odihni pe voi.', version: 'Biblia Sinodală Ortodoxă Română (1982)' },
        la: { text: 'Venite ad me omnes qui laboratis, et onerati estis, et ego reficiam vos.', version: 'Biblia Sacra Vulgata (Clementina 1592)' },
        es: { text: 'Venid á mí todos los que estáis trabajados y cargados, que yo os haré descansar.', version: 'Biblia Reina-Valera (1909)' },
        fr: { text: 'Venez à moi, vous tous qui êtes fatigués et chargés, et je vous donnerai du repos.', version: 'Bible Louis Segond (1910)' },
        de: { text: 'Kommet her zu mir alle, die ihr mühselig und beladen seid; ich will euch erquicken.', version: 'Lutherbibel (1912)' },
        pt: { text: 'Vinde a mim, todos os que estais cansados e oprimidos, e eu vos aliviarei.', version: 'Bíblia João Ferreira de Almeida (ARC)' },
        ru: { text: 'Придите ко Мне все труждающиеся и обремененные, и Я успокою вас.', version: 'Синодальный перевод (1876)' }
      },
      reflection: {
        en: 'You do not have to perform, pretend, or push past your limits. Lay down your tools and sit in His rest.',
        it: 'Non devi fingere né oltrepassare i tuoi limiti con ansia. Deponi le tue fatiche e trova riposo nel Suo abbraccio.',
        ro: 'Nu trebuie să te prefaci sau să-ți forțezi puterile peste măsură. Pune jos grijile și odihnește-te în pacea Lui.',
        la: 'Non oportet ultra vires contendere. Depone labores tuos et in Eius quiete requiesce.',
        es: 'No tienes que fingir ni forzar tus límites. Depón tus cargas y descansa en Su santa presencia.',
        fr: 'Vous n\'avez pas à faire semblant ni à forcer vos limites. Déposez vos fardeaux et reposez-vous auprès de Lui.',
        de: 'Du musst dich nicht verstellen oder deine Grenzen überfordern. Lege deine Lasten ab und finde Ruhe bei Ihm.',
        pt: 'Você não precisa fingir nem ultrapassar os seus limites. Deixe as suas ferramentas e descanse na presença d’Ele.',
        ru: 'Тебе не нужно притворяться или изнемогать сверх сил. Сложи свои бремена и почий в Его благодатном покое.'
      },
      prayer: {
        en: 'Jesus, my mind and body are weary. Renew my strength like the eagle’s. Let me rest in Your tender presence tonight. Amen.',
        it: 'Gesù, il mio corpo e la mia mente sono stanchi. Rinnova le mie forze come quelle dell\'aquila e fammi riposare nella Tua presenza. Amen.',
        ro: 'Iisuse, trupul și sufletul meu sunt ostenite. Înnoiește puterile mele ca ale vulturului și lasă-mă să mă odihnesc în pacea Ta. Amin.',
        la: 'Jesu, mens et corpus meum deficiunt. Renova virtutem meam sicut aquilae et da mihi requiem in te. Amen.',
        es: 'Jesús, mi cuerpo y mente están cansados. Renueva mis fuerzas como las del águila y déjame descansar en Tu paz esta noche. Amén.',
        fr: 'Jésus, mon corps et mon esprit sont épuisés. Renouvelle mes forces comme celles de l\'aigle et accorde-moi le repos en Toi. Amen.',
        de: 'Jesus, mein Leib und Geist sind müde. Erneuere meine Kraft wie die des Adlers und lass mich heute Nacht in Deiner Gegenwart ruhen. Amen.',
        pt: 'Jesus, minha mente e meu corpo estão cansados. Renova as minhas forças como as da águia e concede-me descanso em Ti. Amém.',
        ru: 'Иисусе, плоть и дух мой изнемогли. Обнови силы мои, яко орля, и даруй покой в Твоем присутствии. Аминь.'
      }
    }
  ],
  gratitude: [
    {
      ref: 'Psalm 103:1-2',
      verse: 'Bless the Lord, O my soul: and all that is within me, bless his holy name. Bless the Lord, O my soul, and forget not all his benefits.',
      archives: {
        en: { text: 'Bless the Lord, O my soul: and all that is within me, bless his holy name. Bless the Lord, O my soul, and forget not all his benefits.', version: 'King James Version (KJV 1611)' },
        it: { text: 'Benedici il Signore, anima mia, quanto è in me benedica il suo santo nome. Benedici il Signore, anima mia, non dimenticare tanti suoi benefici.', version: 'Conferenza Episcopale Italiana (CEI 2008)' },
        ro: { text: 'Binecuvântează, suflete al meu, pe Domnul, şi toate cele dinlăuntrul meu, numele cel sfânt al Lui! Binecuvântează, suflete al meu, pe Domnul, şi nu uita toate binefacerile Lui!', version: 'Biblia Sinodală Ortodoxă Română (1982)' },
        la: { text: 'Benedic anima mea Domino: et omnia quæ intra me sunt, nomini sancto ejus. Benedic anima mea Domino: et noli oblivisci omnes retributiones ejus.', version: 'Biblia Sacra Vulgata (Clementina 1592)' },
        es: { text: 'Bendice, alma mía, á Jehová; y bendigan todas mis entrañas su santo nombre. Bendice, alma mía, á Jehová, y no olvides ninguno de sus beneficios.', version: 'Biblia Reina-Valera (1909)' },
        fr: { text: 'Mon âme, bénis l\'Éternel! Que tout ce qui est en moi bénisse son saint nom! Mon âme, bénis l\'Éternel, et n\'oublie aucun de ses bienfaits!', version: 'Bible Louis Segond (1910)' },
        de: { text: 'Lobe den HERRN, meine Seele, und was in mir ist, seinen heiligen Namen! Lobe den HERRN, meine Seele, und vergiss nicht, was er dir Gutes getan hat.', version: 'Lutherbibel (1912)' },
        pt: { text: 'Bendize, ó minha alma, ao Senhor, e tudo o que há em mim bendiga o seu santo nome. Bendize, ó minha alma, ao Senhor, e não te esqueças de nenhum de seus benefícios.', version: 'Bíblia João Ferreira de Almeida (ARC)' },
        ru: { text: 'Благослови, душа моя, Господа, и вся внутренность моя — святое имя Его. Благослови, душа моя, Господа и не забывай всех благодеяний Его.', version: 'Синодальный перевод (1876)' }
      },
      reflection: {
        en: 'Gratitude turns what we have into enough, and opens the floodgates of heaven in our daily life.',
        it: 'La gratitudine trasforma ciò che abbiamo in pienezza, e apre le porte del cielo nella nostra vita quotidiana.',
        ro: 'Mulțumirea transformă puținul în belșug și deschide izvoarele harului ceresc în viața de zi cu zi.',
        la: 'Gratiarum actio id quod habemus in plenitudinem vertit et caeli ianuas aperit.',
        es: 'La gratitud convierte lo que tenemos en suficiente, y abre las ventanas del cielo en nuestra vida.',
        fr: 'La gratitude transforme le peu en abondance et ouvre les fenêtres des cieux dans notre vie.',
        de: 'Dankbarkeit verwandelt das, was wir haben, in Genüge und öffnet die Schleusen des Himmels in unserem Alltag.',
        pt: 'A gratidão transforma o que temos em plenitude e abre as comportas do céu na nossa vida.',
        ru: 'Благодарение превращает малое в изобилие и отверзает небесные врата в нашей повседневной жизни.'
      },
      prayer: {
        en: 'Father, for the breath in my lungs, the bread on my table, and the love You lavish on me without end: thank You! Be praised forever! Amen.',
        it: 'Padre, per il respiro nei miei polmoni, il pane sulla tavola e l\'amore immenso che doni: grazie! Sii lodato in eterno! Amen.',
        ro: 'Tată ceresc, pentru suflarea de viață, pentru pâinea de pe masă și dragostea Ta nesfârșită: Îți mulțumesc! Fii slăvit în veci! Amin.',
        la: 'Pater, pro spiritu vitae, pro pane cotidiano et immensa caritate tua: gratias ago! Sit nomen tuum benedictum in saecula! Amen.',
        es: 'Padre, por el aire que respiro, el pan en mi mesa y Tu amor inagotable: ¡gracias! ¡Bendito seas por siempre! Amén.',
        fr: 'Père, pour le souffle de vie, le pain sur la table et Ton amour infini: merci! Sois loué à jamais! Amen.',
        de: 'Vater, für den Atem in meinen Lungen, das Brot auf meinem Tisch und Deine unendliche Liebe: danke! Sei ewig gepriesen! Amen.',
        pt: 'Pai, pelo ar que respiro, pelo alimento e pelo Teu amor sem fim: muito obrigado! Louvado sejas para sempre! Amém.',
        ru: 'Отче, за дыхание жизни, за хлеб насущный и за любовь Твою неизреченную: благодарю Тя! Буди имя Твое благословенно вовеки! Аминь.'
      }
    }
  ]
};

// Helper functions resolving localized text with English fallback
export function getCategoryLabel(cat, lang = 'en') {
  if (!cat || !cat.label) return '';
  if (typeof cat.label === 'string') return cat.label;
  return cat.label[lang] || cat.label.en || Object.values(cat.label)[0] || '';
}

export function getCategoryDescription(cat, lang = 'en') {
  if (!cat || !cat.description) return '';
  if (typeof cat.description === 'string') return cat.description;
  return cat.description[lang] || cat.description.en || Object.values(cat.description)[0] || '';
}

export function getPromiseReflection(promise, lang = 'en') {
  if (!promise || !promise.reflection) return '';
  if (typeof promise.reflection === 'string') return promise.reflection;
  return promise.reflection[lang] || promise.reflection.en || Object.values(promise.reflection)[0] || '';
}

export function getPromisePrayer(promise, lang = 'en') {
  if (!promise || !promise.prayer) return '';
  if (typeof promise.prayer === 'string') return promise.prayer;
  return promise.prayer[lang] || promise.prayer.en || Object.values(promise.prayer)[0] || '';
}
