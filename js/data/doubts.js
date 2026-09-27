// Faith Compass Multilingual Theological Database for Aura Sacra
// Scriptural and rational wisdom for life's profound existential dilemmas

const DOUBTS_DATA = {
  it: [
    {
      id: 'suffering',
      title: 'Perché Dio permette la sofferenza?',
      summary: 'Il mistero del dolore, la libertà umana e il Cristo crocifisso al nostro fianco.',
      content: `La sofferenza è uno dei misteri più profondi della condizione umana. Le Scritture insegnano che Dio non ha creato la morte né il male; essi sono entrati nel mondo attraverso la ferita del peccato e la rottura dell'alleanza originaria.
      Il cristianesimo non presenta un Dio impassibile che osserva dall'alto con freddezza: in Gesù Cristo, Dio si è immerso direttamente nel dolore umano più lacerante. Sulla Croce, Egli ha bevuto il calice dell'agonia fino all'ultima goccia.
      Nel disegno divino, il dolore unito al Salvatore non è sprecato: esso si trasforma in redenzione, pazienza, purificazione interiore e gloria eterna della risurrezione.`,
      quote: '«Dio sussurra nei nostri piaceri, parla nella nostra coscienza, ma grida nelle nostre sofferenze: esse sono il Suo megafono per scuotere un mondo sordo.» — C.S. Lewis',
      verses: ['Gv 16,33', 'Rm 8,18', '2Cor 1,3-4', 'Ap 21,4']
    },
    {
      id: 'science-faith',
      title: 'Scienza e Fede possono coesistere?',
      summary: 'La scienza indaga il «come» dei meccanismi materiali; la Fede rivela il «perché» e il destino dell\'uomo.',
      content: `La ragione scientifica e la fede cristiana sono due ali dello spirito umano che contemplano la verità. La Sacra Scrittura non è un manuale di cosmologia o astrofisica moderna, ma la rivelazione dell'amore di Dio, della storia della salvezza e della dignità spirituale dell'uomo.
      I fondatori della scienza moderna erano pensatori profondamente credenti (Copernico, Galileo, Newton, Keplero, Mendel, Padre Georges Lemaître inventore della teoria del Big Bang), convinti che un Creatore intelligente avesse ordinato il cosmo secondo leggi logiche e intelligibili.`,
      quote: '«Il primo sorso dal bicchiere delle scienze naturali vi trasformerà in atei, ma sul fondo del bicchiere Dio vi sta aspettando.» — Werner Heisenberg',
      verses: ['Sal 19,2', 'Col 1,16-17', 'Eb 11,3']
    },
    {
      id: 'forgiveness',
      title: 'Come perdonare quando la ferita brucia?',
      summary: 'Perdonare non significa giustificare il male subito, ma liberare il cuore rimettendo la giustizia a Dio.',
      content: `Il perdono cristiano non richiede di fingere che il male subito sia stato cosa da nulla, né impone una riconciliazione ingenua o incauta con chi persevera nel danno.
      Il perdono è un atto coraggioso della volontà: scegliere di deporre il desiderio di vendetta, non lasciare che il veleno dell'amarezza corrompa la propria anima e affidare ogni giudizio alla perfetta giustizia del Padre. Come Cristo pregò sul Calvario: «Padre, perdona loro perché non sanno quello che fanno», così noi riceviamo giorno dopo giorno la grazia di perdonare.`,
      quote: '«Essere cristiani significa perdonare l\'imperdonabile, perché Dio ha perdonato l\'imperdonabile in te.» — C.S. Lewis',
      verses: ['Col 3,13', 'Mt 6,14-15', 'Lc 23,34']
    },
    {
      id: 'unanswered-prayer',
      title: 'Dio ascolta davvero quando prego?',
      summary: 'Dio risponde sempre: con un "Sì", con un "Non ancora", o con "Ho per te qualcosa di più grande".',
      content: `Il silenzio del Cielo non è assenza o lontananza. Nel Getsemani, anche il Signore Gesù conobbe l'angoscia estrema, supplicando che il calice passasse, ma coronò la preghiera con: «Non la mia, ma la Tua volontà sia fatta».
      Un padre terreno non dà un serpente al figlio che chiede del pane, ma non gli darà nemmeno una lama tagliente se il bimbo la richiede piangendo. Dio osserva l'intero arazzo della nostra esistenza immortale, mentre i nostri occhi vedono soltanto un filo sfilacciato.`,
      quote: '«Dio non lascia mai le nostre mani vuote. Se ci chiede di deporre qualcosa, è solo per permetterci di accogliere qualcosa di immensamente più alto.»',
      verses: ['Ger 29,12-13', '1Gv 5,14', 'Mt 7,7-11']
    }
  ],

  ro: [
    {
      id: 'suffering',
      title: 'De ce îngăduie Dumnezeu suferința?',
      summary: 'Taina durerii, libertatea omului și Hristos răstignit alături de noi pe Cruce.',
      content: `Suferința este una dintre cele mai profunde taine ale existenței omenești. Scriptura ne învață că Dumnezeu nu a creat moartea și nici boala; ele au intrat în lume prin căderea omului și stricăciunea păcatului.
      Credința creștină nu ne prezintă un Dumnezeu nepăsător care privește de departe: în Iisus Hristos, Dumnezeu a coborât El Însuși în inima durerii noastre. Pe Cruce, Mântuitorul a băut potirul suferinței până la ultima picătură.
      Unită cu Crucea lui Hristos, durerea nu este pierdută: ea se preschimbă în răbdare mântuitoare, compasiune jertfelnică și arvună a slavei Învierii.`,
      quote: '«Dumnezeu ne șoptește în plăceri, ne vorbește în conștiință, dar ne strigă în dureri: ele sunt megafonul Lui spre a trezi o lume surdă.» — C.S. Lewis',
      verses: ['Ioan 16:33', 'Romani 8:18', '2 Corinteni 1:3-4', 'Apocalipsa 21:4']
    },
    {
      id: 'science-faith',
      title: 'Pot coexista știința și credința?',
      summary: 'Știința descrie «cum» funcționează cosmosul creat; Credința revelează «de ce» și «pentru Cine» a fost zidit.',
      content: `Cercetarea științifică și credința creștină sunt două aripi ale duhului omenesc spre cunoașterea Adevărului. Sfânta Scriptură nu este un manual de cosmologie sau astrofizică, ci o scrisoare dumnezeiască de dragoste care descoperă mântuirea și chipul lui Dumnezeu în om.
      Părinții științei moderne au fost credincioși fervenți (Copernic, Galilei, Newton, Kepler, Mendel, preotul Georges Lemaître — cel care a formulat teoria Big Bang-ului), încredințați că un Făcător rațional a întemeiat o lume plină de rânduială și legi armonioase.`,
      quote: '«Cea dintâi înghițitură din paharul științelor naturii te face ateu, dar la fundul paharului Dumnezeu te așteaptă.» — Werner Heisenberg',
      verses: ['Psalmul 18:1', 'Coloseni 1:16-17', 'Evrei 11:3']
    },
    {
      id: 'forgiveness',
      title: 'Cum pot să iert când rana mă doare adânc?',
      summary: 'A ierta nu înseamnă a îndreptăți răul, ci a elibera sufletul lăsând dreptatea în mâinile lui Dumnezeu.',
      content: `Iertarea nu înseamnă să te prefaci că răul a fost bun, și nici nu presupune o apropiere nesăbuită de cel care continuă să vatăme.
      Iertarea creștinească este o hotărâre curajoasă a voinței: alegerea de a nu te răzbuna, refuzul de a lăsa otrava urii să-ți întineze sufletul și încredințarea judecății în mâinile atotdreptului Dumnezeu. Așa cum Domnul S-a rugat pe Cruce: «Părinte, iartă-le lor, că nu știu ce fac», tot așa primim și noi putere să iertăm zi de zi.`,
      quote: '«A fi creștin înseamnă a ierta ceea ce pare de neiertat, fiindcă Dumnezeu a iertat ceea ce era de neiertat întru tine.» — C.S. Lewis',
      verses: ['Coloseni 3:13', 'Matei 6:14-15', 'Luca 23:34']
    },
    {
      id: 'unanswered-prayer',
      title: 'Ascultă oare Dumnezeu când mă rog?',
      summary: 'Dumnezeu răspunde întotdeauna: prin "Da", prin "Nu încă", sau prin "Am pregătit ceva nespus mai mare".',
      content: `Tăcerea Cerului nu este nepăsare sau uitare. În Ghetsimani, Însuși Hristos a trăit fiorul durerii, rugându-Se ca potirul să treacă, dar încheind cu: «Nu voia Mea, ci voia Ta să se facă».
      Un părinte iubitor nu dă copilului o piatră când cere pâine, dar nu-i va da nici o lamă ascuțită dacă pruncul o cere plângând. Dumnezeu cuprinde întreg veșmântul veșniciei noastre, pe când noi deslușim doar o clipă trecătoare.`,
      quote: '«Dumnezeu nu ne lasă niciodată cu mâinile goale. Dacă ne cere să lăsăm ceva jos, este numai ca să putem primi ceva nespus mai mare.»',
      verses: ['Ieremia 29:12-13', '1 Ioan 5:14', 'Matei 7:7-11']
    }
  ],

  en: [
    {
      id: 'suffering',
      title: 'Why Does God Allow Suffering?',
      summary: 'The mystery of pain, human free will, and Christ suffering alongside us on the Cross.',
      content: `Suffering is one of the deepest mysteries of the human condition. Scripture teaches that God did not create death or disease; they entered through human separation from God and brokenness in creation.
      Crucially, Christianity does not present an indifferent God looking down from above: in Jesus Christ, God entered directly into human agonizing pain. On the Cross, He drank the chalice of suffering to its very dregs.
      United with Christ, pain is never wasted: God transforms suffering into endurance, compassion, and ultimate resurrection glory.`,
      quote: '«God whispers to us in our pleasures, speaks in our conscience, but shouts in our pains: it is His megaphone to rouse a deaf world.» — C.S. Lewis',
      verses: ['John 16:33', 'Romans 8:18', '2 Corinthians 1:3-4', 'Revelation 21:4']
    },
    {
      id: 'science-faith',
      title: 'Can Science and Faith Coexist?',
      summary: 'Science explains "how" the physical universe works; Faith reveals "why" and "for Whom" it was made.',
      content: `Science and Christian theology are two wings of human contemplation, not enemies. The Bible was written not as a modern astrophysics textbook, but as a theological love letter revealing God’s character, salvation history, and moral purpose.
      Historically, modern empirical science was birthed by devout Christian thinkers (Copernicus, Galileo, Newton, Kepler, Mendel, Le Maître who formulated the Big Bang) who believed that a rational Creator made an orderly, intelligible universe.`,
      quote: '«The first gulp from the glass of natural sciences will turn you into an atheist, but at the bottom of the glass God is waiting for you.» — Werner Heisenberg',
      verses: ['Psalm 19:1', 'Colossians 1:16-17', 'Hebrews 11:3']
    },
    {
      id: 'forgiveness',
      title: 'How Can I Forgive When It Hurts Deeply?',
      summary: 'Forgiveness is not excusing evil or feeling warm emotions; it is releasing the debt to God’s justice.',
      content: `Forgiving does not mean pretending that what was done was okay, nor does it necessarily mean instant trust or reconciliation with an abusive person.
      Biblical forgiveness is a courageous act of the will: choosing not to retaliate, refusing to let bitterness poison your own soul, and handing the justice of the offense over to God. As Christ prayed on the Cross, «Father, forgive them, for they know not what they do», He invites us to ask for the grace to forgive day by day.`,
      quote: '«To be a Christian means to forgive the inexcusable, because God has forgiven the inexcusable in you.» — C.S. Lewis',
      verses: ['Colossians 3:13', 'Matthew 6:14-15', 'Luke 23:34']
    },
    {
      id: 'unanswered-prayer',
      title: 'Does God Really Hear When I Pray?',
      summary: 'God answers prayers in three ways: "Yes", "Not yet", or "I have something better".',
      content: `Silence from Heaven is not absence. When Jesus prayed in Gethsemane, He experienced the deepest anguish, praying that the cup might pass from Him, but crowning it with «Not my will, but Yours be done».
      God sees the whole tapestry of our life while we only see a single frayed thread. A loving father does not give his child a scorpion when they ask for bread, nor does he grant a knife even if the child cries for it.`,
      quote: '«God never leaves us with empty hands. If He asks us to put down something, it is only so that we may pick up something greater.»',
      verses: ['Jeremiah 29:12-13', '1 John 5:14', 'Matthew 7:7-11']
    }
  ],

  la: [
    {
      id: 'suffering',
      title: 'Cur Deus sinit nos pati?',
      summary: 'Mysterium doloris, libertas humana et Christus crucifixus ad latus nostrum.',
      content: `Dolor unum ex intimis conditionis humanae mysteriis manet. Scriptura docet Deum nec mortem nec malum creavisse, sed per peccatum et ruinam creaturae illa advenisse.
      Fides christiana Deum non tamquam distantem spectatorem exhibet: in Jesu Christo, Deus Ipse in profundissimum dolorem descendit. In Cruce, calicem passionis usque ad faecem exhausit.
      Dolor cum Christo coniunctus nunquam perditur: in redemptionem, patientiam et gloria resurrectionis transformatur.`,
      quote: '«Deus in gaudiis nostris susurrat, in conscientia loquitur, sed in doloribus clamat: megafonum Eius est ut mundum surdum excitet.» — C.S. Lewis',
      verses: ['Io 16,33', 'Rom 8,18', '2Cor 1,3-4', 'Apoc 21,4']
    },
    {
      id: 'science-faith',
      title: 'Possuntne scientia et fides coexistere?',
      summary: 'Scientia modum explicat quo universum operatur; Fides finem et Auctorem revelat.',
      content: `Ratiocinatio scientifica et fides christiana duae alae sunt quibus spiritus ad veritatem contemplandam assurgit. Sacra Pagina non est liber astrophysicae, sed declaratio amoris divini et dignitatis humanae.
      Fundatores scientiae modernae christiani fideles erant (Copernicus, Galileus, Newtonus, Keplerus, Mendel, Georgius Lemaître presbyter), certum habentes Creatorem rationabilem mundum ordinatum instituisse.`,
      quote: '«Primus haustus e vitro scientiarum te atheum faciet, sed in fundo vitri Deus te exspectat.» — Werner Heisenberg',
      verses: ['Ps 18,2', 'Col 1,16-17', 'Hebr 11,3']
    },
    {
      id: 'forgiveness',
      title: 'Quomodo veniam dare cum vulnus dolet?',
      summary: 'Venia non significat malum approbare, sed animum liberare iustitiam Deo committendo.',
      content: `Venia christiana non est malum negare aut falsa reconciliatio. Est fortis voluntatis actus: vindictam abicere, venenum rancoris e corde pellere et iudicium Deo iusto relinquere.
      Sicut Christus oravit in Cruce: «Pater, dimitte illis, non enim sciunt quid faciunt», ita nos cotidie gratiam dimittendi petimus.`,
      quote: '«Christianum esse significat inexcusabile dimittere, quia Deus inexcusabile in te dimisit.» — C.S. Lewis',
      verses: ['Col 3,13', 'Mt 6,14-15', 'Lc 23,34']
    },
    {
      id: 'unanswered-prayer',
      title: 'Auditne Deus orationes meas?',
      summary: 'Deus semper respondet: "Etiam", "Nondum", vel "Maiora tibi reservavi".',
      content: `Silentium Caeli non est absentia. In Gethsemani Christus Ipse amaritudinem gustavit, sed orationem complevit: «Non mea voluntas, sed Tua fiat».
      Pater filio petenti panem non dabit lapidem, nec cultrum dabit si infans flendo requirit. Deus totam telam aeternitatis videt dum nos tantum filum fractum aspicimus.`,
      quote: '«Deus nunquam manus nostras vacuas relinquit. Si quid deponere iubet, hoc facit ut maiora recipiamus.»',
      verses: ['Ier 29,12-13', '1Io 5,14', 'Mt 7,7-11']
    }
  ],

  es: [
    {
      id: 'suffering',
      title: '¿Por qué Dios permite el sufrimiento?',
      summary: 'El misterio del dolor, la libertad humana y Cristo crucificado a nuestro lado.',
      content: `El sufrimiento es uno de los misterios más hondos de la existencia humana. La Escritura enseña que Dios no creó la muerte ni la enfermedad; entraron por la ruptura del pecado en la creación.
      El cristianismo no presenta a un Dios distante e insensible: en Jesucristo, Dios descendió al corazón mismo de nuestro dolor. En la Cruz, bebió el cáliz del sufrimiento hasta la última gota.
      Unido a la Cruz, el dolor no se pierde: Dios lo transforma en fortaleza, compasión redentora y gloria de resurrección.`,
      quote: '«Dios nos susurra en nuestros placeres, nos habla en nuestra conciencia, pero nos grita en nuestros dolores: es su megáfono para despertar a un mundo sordo.» — C.S. Lewis',
      verses: ['Juan 16:33', 'Romanos 8:18', '2 Corintios 1:3-4', 'Apocalipsis 21:4']
    },
    {
      id: 'science-faith',
      title: '¿Pueden coexistir la ciencia y la fe?',
      summary: 'La ciencia explica «cómo» funciona el universo; la Fe revela «por qué» y «para Quién» fue creado.',
      content: `La ciencia y la teología cristiana son dos alas del espíritu humano en busca de la verdad. La Biblia no es un manual de astrofísica, sino una revelación del amor divino, de la historia de la salvación y del sentido de la vida.
      Históricamente, los pioneros de la ciencia empírica moderna fueron creyentes devotos (Copérnico, Galileo, Newton, Kepler, Mendel, el sacerdote Georges Lemaître creador de la teoría del Big Bang), convencidos de que un Creador racional creó un cosmos armónico y cognoscible.`,
      quote: '«El primer trago de la copa de las ciencias naturales te convertirá en ateo, pero en el fondo de la copa Dios te está esperando.» — Werner Heisenberg',
      verses: ['Salmo 19:1', 'Colosenses 1:16-17', 'Hebreos 11:3']
    },
    {
      id: 'forgiveness',
      title: '¿Cómo perdonar cuando la herida duele tanto?',
      summary: 'Perdonar no es justificar la ofensa, sino liberar el corazón entregando la justicia a Dios.',
      content: `Perdonar no significa decir que lo ocurrido no importó, ni obliga a una reconciliación ingenua con quien persiste en dañar.
      El perdón evangélico es un acto valiente de la voluntad: decidir no vengarse, no permitir que la amargura envenene el alma y poner la justicia en manos de Dios. Como Cristo oró en la Cruz: «Padre, perdónalos, porque no saben lo que hacen», Él nos concede la gracia para perdonar día a día.`,
      quote: '«Ser cristiano significa perdonar lo inexcusable, porque Dios ha perdonado lo inexcusable en ti.» — C.S. Lewis',
      verses: ['Colosenses 3:13', 'Mateo 6:14-15', 'Lucas 23:34']
    },
    {
      id: 'unanswered-prayer',
      title: '¿Realmente escucha Dios cuando oro?',
      summary: 'Dios responde de tres maneras: "Sí", "Aún no", o "Tengo algo mucho mejor para ti".',
      content: `El silencio del Cielo no es ausencia ni olvido. En Getsemaní, Jesús experimentó la más viva angustia, rogando que pasara el cáliz, pero culminando con: «No se haga mi voluntad, sino la tuya».
      Un padre amoroso no da una serpiente a su hijo que pide pan, pero tampoco le dará un cuchillo aunque el niño lo pida llorando. Dios contempla el tapiz entero de nuestra eternidad, mientras nosotros solo vemos un hilo desgastado.`,
      quote: '«Dios nunca nos deja con las manos vacías. Si nos pide que soltemos algo, es para que podamos recibir algo infinitamente más grande.»',
      verses: ['Jeremías 29:12-13', '1 Juan 5:14', 'Mateo 7:7-11']
    }
  ],

  fr: [
    {
      id: 'suffering',
      title: 'Pourquoi Dieu permet-Il la souffrance?',
      summary: 'Le mystère de la douleur, la liberté humaine et le Christ souffrant à nos côtés sur la Croix.',
      content: `La souffrance est l'un des mystères les plus profonds de la condition humaine. L'Écriture enseigne que Dieu n'a créé ni la mort ni le mal; ils sont entrés par la rupture du péché dans la création.
      Le christianisme ne présente pas un Dieu insensible observant d'en haut: en Jésus-Christ, Dieu est descendu directement dans notre douleur la plus aiguë. Sur la Croix, Il a bu la coupe jusqu'à la dernière goutte.
      Unie au Christ, la souffrance n'est pas vaine: elle est transformée en patience, en amour rédempteur et en gloire éternelle de résurrection.`,
      quote: '«Dieu nous chuchote dans nos plaisirs, nous parle dans notre conscience, mais Il crie dans nos douleurs: c\'est Son mégaphone pour réveiller un monde sourd.» — C.S. Lewis',
      verses: ['Jean 16:33', 'Romains 8:18', '2 Corinthiens 1:3-4', 'Apocalypse 21:4']
    },
    {
      id: 'science-faith',
      title: 'La science et la foi peuvent-elles coexister?',
      summary: 'La science explique «comment» fonctionne le monde; la Foi révèle «pourquoi» et «pour Qui» il a été créé.',
      content: `La raison scientifique et la foi chrétienne sont deux ailes de l'esprit humain pour contempler la vérité. La Bible n'est pas un manuel d'astrophysique, mais la révélation de l'amour de Dieu et de la destinée éternelle de l'homme.
      Les pères de la science moderne étaient de fervents croyants (Copernic, Galilée, Newton, Kepler, Mendel, le prêtre Georges Lemaître qui formula le Big Bang), certains qu'un Créateur ordonné avait conçu un univers intelligible.`,
      quote: '«La première gorgée du verre des sciences naturelles vous rendra athée, mais au fond du verre, Dieu vous attend.» — Werner Heisenberg',
      verses: ['Psaume 19:1', 'Colossiens 1:16-17', 'Hébreux 11:3']
    },
    {
      id: 'forgiveness',
      title: 'Comment pardonner quand la douleur est vive?',
      summary: 'Pardonner n\'est pas excuser le mal, mais libérer son âme en remettant la justice à Dieu.',
      content: `Pardonner ne signifie pas prétendre que l'offense était sans importance, ni forcer une réconciliation imprudente.
      Le pardon chrétien est un acte de volonté courageux: refuser la vengeance, rejeter le poison de l'amertume et confier le jugement à Dieu. Comme le Christ a prié sur la Croix: «Père, pardonne-leur, car ils ne savent ce qu\'ils font», Il nous donne la grâce de pardonner jour après jour.`,
      quote: '«Être chrétien signifie pardonner l\'inexcusable, parce que Dieu a pardonné l\'inexcusable en toi.» — C.S. Lewis',
      verses: ['Colossiens 3:13', 'Matthieu 6:14-15', 'Luc 23:34']
    },
    {
      id: 'unanswered-prayer',
      title: 'Dieu écoute-t-Il vraiment mes prières?',
      summary: 'Dieu répond toujours: par un "Oui", un "Pas encore", ou "J\'ai quelque chose de meilleur".',
      content: `Le silence du Ciel n'est ni absence ni oubli. À Gethsémani, Jésus connut l'angoisse extrême, priant pour que la coupe s'éloigne, mais couronnant Sa prière par: «Non pas ma volonté, mais la Tienne».
      Un père aimant ne donne pas un serpent à son enfant qui demande du pain, mais il ne lui donnera pas non plus un couteau même si l'enfant le réclame en pleurant. Dieu embrasse toute la fresque de notre éternité, tandis que nous ne voyons qu'un fil fragile.`,
      quote: '«Dieu ne nous laisse jamais les mains vides. S\'Il nous demande de déposer une chose, c\'est afin de nous donner quelque chose de bien plus grand.»',
      verses: ['Jérémie 29:12-13', '1 Jean 5:14', 'Matthieu 7:7-11']
    }
  ],

  de: [
    {
      id: 'suffering',
      title: 'Warum lässt Gott das Leiden zu?',
      summary: 'Das Geheimnis des Schmerzes, die menschliche Freiheit und Christus am Kreuz an unserer Seite.',
      content: `Das Leiden ist eines der tiefsten Geheimnisse des menschlichen Daseins. Die Schrift lehrt, dass Gott weder Tod noch Verderben geschaffen hat; sie traten durch den Sündenfall in die Schöpfung ein.
      Das Christentum verkündet keinen unnahbaren Gott: In Jesus Christus stieg Gott selbst in das tiefste menschliche Leid hinab. Am Kreuz trank Er den Kelch der Schmerzen bis zur Neige.
      Vereint mit Christus ist Schmerz niemals vergeblich: Er verwandelt sich in Geduld, erbarmende Liebe und Auferstehungsherrlichkeit.`,
      quote: '«Gott flüstert in unseren Freuden, spricht in unserem Gewissen, aber Er schreit in unseren Schmerzen: Sie sind Sein Megaphon, eine taube Welt aufzuwecken.» — C.S. Lewis',
      verses: ['Johannes 16:33', 'Römer 8:18', '2. Korinther 1:3-4', 'Offenbarung 21:4']
    },
    {
      id: 'science-faith',
      title: 'Können Wissenschaft und Glaube koexistieren?',
      summary: 'Die Wissenschaft erforscht das «Wie» des Universums; der Glaube offenbart das «Warum» und den Schöpfer.',
      content: `Wissenschaftliche Erkenntnis und christlicher Glaube sind zwei Flügel des menschlichen Geistes. Die Bibel ist kein Lehrbuch der Astrophysik, sondern das Zeugnis der göttlichen Liebe und der Bestimmung des Menschen.
      Die Väter der modernen Naturwissenschaften waren gläubige Christen (Kopernikus, Galilei, Newton, Kepler, Mendel, der Priester Georges Lemaître, der den Urknall formulierte), überzeugt davon, dass ein vernünftiger Schöpfer ein geordnetes Universum geschaffen hat.`,
      quote: '«Der erste Trunk aus dem Becher der Naturwissenschaft macht atheistisch, aber auf dem Grund des Bechers wartet Gott.» — Werner Heisenberg',
      verses: ['Psalm 19:2', 'Kolosser 1:16-17', 'Hebräer 11:3']
    },
    {
      id: 'forgiveness',
      title: 'Wie kann ich vergeben, wenn es so weh tut?',
      summary: 'Vergebung rechtfertigt das Böse nicht, sondern befreit das Herz und übergibt das Gericht Gott.',
      content: `Vergebung bedeutet nicht, Unrecht gutzuheißen, noch erfordert sie blinde Versöhnung mit jemandem, der weiterhin schadet.
      Christliche Vergebung ist ein willentlicher Akt: auf Rache zu verzichten, die Bitterkeit aus dem Herzen zu verbannen und das Urteil Gott zu überlassen. Wie Christus am Kreuz betete: «Vater, vergib ihnen, denn sie wissen nicht, was sie tun», so schenkt Er uns täglich die Kraft zur Vergebung.`,
      quote: '«Ein Christ zu sein bedeutet, das Unverzeihliche zu vergeben, weil Gott das Unverzeihliche in dir vergeben hat.» — C.S. Lewis',
      verses: ['Kolosser 3:13', 'Matthäus 6:14-15', 'Lukas 23:34']
    },
    {
      id: 'unanswered-prayer',
      title: 'Erhört Gott wirklich mein Gebet?',
      summary: 'Gott antwortet immer: mit "Ja", mit "Noch nicht", oder mit "Ich habe etwas Besseres für dich".',
      content: `Das Schweigen des Himmels ist weder Abwesenheit noch Gleichgültigkeit. In Gethsemane erlebte Jesus tiefste Not, betete, der Kelch möge vorübergehen, schloss aber mit: «Nicht mein, sondern Dein Wille geschehe».
      Ein liebender Vater gibt seinem Kind keinen Skorpion, wenn es um Brot bittet, aber er gibt ihm auch kein Messer, selbst wenn das Kind weint. Gott überblickt den gesamten Teppich unseres Lebens, während wir nur einen einzigen Faden sehen.`,
      quote: '«Gott lässt unsere Hände nie leer. Wenn Er uns bittet, etwas loszulassen, dann nur, um uns etwas Größeres zu schenken.»',
      verses: ['Jeremia 29:12-13', '1. Johannes 5:14', 'Matthäus 7:7-11']
    }
  ],

  pt: [
    {
      id: 'suffering',
      title: 'Por que Deus permite o sofrimento?',
      summary: 'O mistério da dor, o livre-arbítrio e Cristo crucificado ao nosso lado.',
      content: `O sofrimento é um dos mistérios mais profundos da vida humana. A Escritura ensina que Deus não criou a morte nem a doença; elas entraram no mundo através da ruptura do pecado.
      O cristianismo não apresenta um Deus distante e insensível: em Jesus Cristo, Deus desceu ao coração da nossa dor. Na Cruz, bebeu o cálice do sofrimento até à última gota.
      Unida à Cruz de Cristo, a dor nunca é perdida: Deus a transforma em perseverança, compaixão e glória da ressurreição.`,
      quote: '«Deus sussurra em nossos prazeres, fala em nossa consciência, mas clama em nossas dores: é o Seu megafone para despertar um mundo surdo.» — C.S. Lewis',
      verses: ['João 16:33', 'Romanos 8:18', '2 Coríntios 1:3-4', 'Apocalipse 21:4']
    },
    {
      id: 'science-faith',
      title: 'A ciência e a fé podem coexistir?',
      summary: 'A ciência explica «como» funciona o cosmos; a Fé revela «por que» e «para Quem» foi criado.',
      content: `A ciência e a teologia cristã são duas asas pelas quais a mente humana contempla a verdade. A Bíblia não é um tratado de astrofísica, mas a revelação do amor de Deus e do destino eterno do ser humano.
      Os pioneiros da ciência moderna eram cristãos devotos (Copérnico, Galileu, Newton, Kepler, Mendel, o sacerdote Georges Lemaître, que formulou o Big Bang), certos de que um Criador racional ordenou o universo de modo harmônico.`,
      quote: '«O primeiro gole do copo das ciências naturais vos tornará ateus, mas no fundo do copo Deus está à vossa espera.» — Werner Heisenberg',
      verses: ['Salmo 19:1', 'Colossenses 1:16-17', 'Hebreus 11:3']
    },
    {
      id: 'forgiveness',
      title: 'Como perdoar quando a dor é profunda?',
      summary: 'Perdoar não é justificar o erro, mas libertar a alma entregando a justiça a Deus.',
      content: `Perdoar não significa fingir que o mal foi irrelevante, nem obriga a uma reconciliação ingênua com quem continua a ferir.
      O perdão evangélico é uma decisão da vontade: não buscar vingança, rejeitar o veneno da amargura e confiar a justiça soberana a Deus. Como Cristo orou na Cruz: «Pai, perdoa-lhes, porque não sabem o que fazem», Ele nos capacita a perdoar dia a dia.`,
      quote: '«Ser cristão significa perdoar o indesculpável, porque Deus perdoou o indesculpável em ti.» — C.S. Lewis',
      verses: ['Colossenses 3:13', 'Mateus 6:14-15', 'Lucas 23:34']
    },
    {
      id: 'unanswered-prayer',
      title: 'Deus ouve verdadeiramente as minhas orações?',
      summary: 'Deus responde sempre: com "Sim", "Ainda não", ou "Preparei algo muito melhor".',
      content: `O silêncio do Céu não é ausência ou esquecimento. No Getsêmani, Jesus experimentou extrema angústia, orando para que o cálice passasse, mas concluindo com: «Não se faça a minha vontade, mas a Tua».
      Um pai amoroso não dá uma serpente ao filho que pede pão, mas também não lhe dará uma faca afiada se o menino pedir chorando. Deus contempla toda a tapeçaria da eternidade, enquanto nós enxergamos apenas um fio desfiado.`,
      quote: '«Deus nunca nos deixa de mãos vazias. Se Ele nos pede para largar algo, é unicamente para que possamos acolher algo infinitamente maior.»',
      verses: ['Jeremias 29:12-13', '1 João 5:14', 'Mateus 7:7-11']
    }
  ],

  ru: [
    {
      id: 'suffering',
      title: 'Почему Бог допускает страдание?',
      summary: 'Тайна скорби, человеческая свобода и Христос, распятый рядом с нами.',
      content: `Страдание — одна из глубочайших тайн человеческого бытия. Священное Писание учит, что Бог не сотворил ни смерти, ни болезней; они вошли в мир через грехопадение человека.
      Христианство возвещает не далекого и равнодушного Бога: во Христе Иисусе Бог Сам сошел в самую бездну нашей боли. На Кресте Он испил чашу страдания до самого дна.
      Соединенная со Христом скорбь никогда не напрасна: она претворяется в терпение, жертвенную любовь и грядущую славу Воскресения.`,
      quote: '«Бог шепчет нам в наших удовольствиях, говорит в нашей совести, но кричит в наших скорбях: это Его мегафон, чтобы разбудить оглохший мир.» — К.С. Льюис',
      verses: ['Ин 16:33', 'Рим 8:18', '2 Кор 1:3-4', 'Откр 21:4']
    },
    {
      id: 'science-faith',
      title: 'Могут ли наука и вера сосуществовать?',
      summary: 'Наука объясняет «как» устроен мир; Вера открывает «зачем» и «для Кого» он сотворен.',
      content: `Научное познание и христианская вера — это два крыла человеческого духа на пути к созерцанию Истины. Библия — это не учебник астрофизики, а откровение божественной любви и вечного призвания человека.
      Отцы современной науки были глубоко верующими людьми (Коперник, Галилей, Ньютон, Кеплер, Мендель, священник Жорж Леметр, создавший теорию Большого взрыва), убежденными в том, что разумный Творец устроил вселенную по гармоничным законам.`,
      quote: '«Первый глоток из сосуда естественных наук делает атеистом, но на дне сосуда нас ожидает Бог.» — Вернер Гейзенберг',
      verses: ['Пс 18:2', 'Кол 1:16-17', 'Евр 11:3']
    },
    {
      id: 'forgiveness',
      title: 'Как простить, когда боль слишком глубока?',
      summary: 'Простить — не значит оправдать зло, но освободить сердце, доверив суд Богу.',
      content: `Христианское прощение не требует закрывать глаза на зло или наивно доверять тому, кто продолжает причинять вред.
      Прощение — это мужественный акт воли: отказ от мести, нежелание отравлять душу горечью и передача праведного суда в руки Божии. Как Христос молился на Голгофе: «Отче! прости им, ибо не знают, что делают», так и нам подается благодать прощать день за днем.`,
      quote: '«Быть христианином означает прощать то, что кажется непростительным, ибо Бог простил непростительное в тебе.» — К.С. Льюис',
      verses: ['Кол 3:13', 'Мф 6:14-15', 'Лк 23:34']
    },
    {
      id: 'unanswered-prayer',
      title: 'Слышит ли Бог мои молитвы?',
      summary: 'Бог отвечает всегда: либо "Да", либо "Еще не время", либо "У Меня есть для тебя нечто большее".',
      content: `Молчание Неба — это не оставленность. В Гефсиманском саду Христос пережил предельную скорбь, молясь о чаше, но увенчав молитву словами: «Не Моя воля, но Твоя да будет».
      Любящий отец не подаст сыну змею вместо хлеба, но не даст и острого ножа, если дитя требует его со слезами. Бог видит все полотно нашей вечности, тогда как мы различаем лишь одну оборванную нить.`,
      quote: '«Бог никогда не оставляет наши руки пустыми. Если Он просит нас что-то отпустить, то лишь для того, чтобы вложить в них нечто несравненно большее.»',
      verses: ['Иер 29:12-13', '1 Ин 5:14', 'Мф 7:7-11']
    }
  ]
};

export function getFaithDoubts(lang = 'it') {
  return DOUBTS_DATA[lang] || DOUBTS_DATA.en || DOUBTS_DATA.it;
}

export const FAITH_DOUBTS = DOUBTS_DATA.en;
