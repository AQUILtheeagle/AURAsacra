// Comprehensive Liturgical Daily Saints & Feasts Calendar for Aura Sacra
// Correlates feasts with liturgical colors and Christian traditions:
// - White (Bianco): Feasts of the Lord, Confessors, Doctors, Holy Virgins, Reformers & Pastors
// - Blue (Blu): Marian Feasts & The Blessed Virgin Mary (Theotokos)
// - Red (Rosso): Apostles, Evangelists, Biblical Witnesses & Holy Martyrs of Faith
//
// Accurately differentiates commemorations across:
// - catholic: General Roman Calendar & Martyrology
// - traditional: 1962 Roman Missal & Tridentine Calendar
// - orthodox: Byzantine Eastern Synaxarion & Church Fathers
// - protestant: Cloud of Faithful Witnesses, Reformers, Bible Translators & Christian Martyrs
// - ecumenical: Undivided Church Heritage & Shared Christian Saints

export const LITURGICAL_COLORS = {
  white: {
    id: 'white',
    name: 'White',
    name_it: 'Bianco',
    name_ro: 'Alb',
    name_la: 'Albus',
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
    dotClass: 'bg-red-600 ring-1 ring-red-400',
    badgeClass: 'bg-red-600/20 text-red-400 border-red-500/60',
    borderClass: 'border-red-500/60',
    textClass: 'text-red-400 dark:text-red-300',
    symbol: '🔴',
    desc: 'Holy Apostles, Evangelists & Martyrs of the Christian Faith'
  }
};

export const DAILY_SAINTS_CALENDAR = {
  // ==========================================
  // JANUARY (1)
  // ==========================================
  '1-1': [
    {
      traditions: ['catholic', 'traditional', 'ecumenical'],
      name: 'Solemnity of Mary, Mother of God',
      name_it: 'Solennità di Maria Santissima, Madre di Dio',
      name_ro: 'Tăierea Împrejur & Sfântul Vasile cel Mare',
      title: 'Theotokos & Ark of the New Covenant',
      color: 'blue',
      rank: 'solemnity',
      quote: '«My soul magnifies the Lord, and my spirit rejoices in God my Savior.»',
      bio: 'Honors the divine maternity of the Blessed Virgin Mary, through whose fiat the Incarnate Word entered human history.',
      scriptureRef: 'Luke 1:46-48'
    },
    {
      traditions: ['orthodox'],
      name: 'St. Basil the Great & Circumcision of the Lord',
      name_it: 'San Basilio Magno e Circoncisione del Signore',
      name_ro: 'Praznicul Tăierii Împrejur & Sf. Vasile cel Mare',
      title: 'Universal Teacher & Father of Eastern Monasticism',
      color: 'white',
      rank: 'solemnity',
      quote: '«The bread which you hold back belongs to the hungry; the coat in your wardrobe belongs to the naked.»',
      bio: 'Pillar of the Council of Nicaea, author of the Divine Liturgy of St. Basil, defender of the divinity of the Holy Spirit.',
      scriptureRef: 'Matthew 25:35-40'
    },
    {
      traditions: ['protestant'],
      name: 'Holy Name of Jesus & Circumcision',
      name_it: 'Santissimo Nome di Gesù',
      name_ro: 'Numele Preasfânt al lui Iisus',
      title: 'Celebration of the Saving Name of Christ',
      color: 'white',
      rank: 'feast',
      quote: '«Thou shalt call his name JESUS: for he shall save his people from their sins.»',
      bio: 'Eight days after His birth in Bethlehem, the Savior was given the name Jesus, signifying that God is our salvation.',
      scriptureRef: 'Matthew 1:21'
    }
  ],
  '1-2': [
    {
      traditions: ['catholic', 'traditional', 'orthodox', 'ecumenical'],
      name: 'St. Basil the Great & St. Gregory Nazianzen',
      name_it: 'Santi Basilio Magno e Gregorio Nazianzeno',
      name_ro: 'Sf. Vasile cel Mare și Grigorie Teologul',
      title: 'Cappadocian Fathers & Doctors of the Church',
      color: 'white',
      rank: 'memorial',
      quote: '«God became man so that man might become divine by grace.»',
      bio: 'Close friends who defended Orthodox Trinitarian theology against Arianism and shaped Christian hymnody.',
      scriptureRef: 'John 1:14'
    }
  ],
  '1-6': [
    {
      traditions: ['all'],
      name: 'The Epiphany of the Lord (Theophany)',
      name_it: 'Epifania del Signore (Teofania)',
      name_ro: 'Botezul Domnului (Boboteaza - Dumnezeiasca Arătare)',
      title: 'Manifestation of Christ to the Nations & Baptism in the Jordan',
      color: 'white',
      rank: 'solemnity',
      quote: '«This is my beloved Son, in whom I am well pleased. Arise, shine; for thy light is come!»',
      bio: 'In the West, commemorates the adoration of the Christ child by the Magi; in the East, celebrates the Baptism of Christ in the Jordan revealing the Holy Trinity.',
      scriptureRef: 'Matthew 2:1-12'
    }
  ],
  '1-8': [
    {
      traditions: ['protestant'],
      name: 'Jim Elliot & The Auca Martyrs',
      name_it: 'Jim Elliot e i Martiri dell\'Ecuador',
      name_ro: 'Jim Elliot și Misionarii Martiri',
      title: 'Missionary Martyrs in Ecuador',
      color: 'red',
      rank: 'memorial',
      quote: '«He is no fool who gives what he cannot keep to gain what he cannot lose.»',
      bio: 'Evangelical missionary who, with four companions, surrendered his life in the Amazon rainforest in 1956 to bring the Gospel to the unreached Waodani people.',
      scriptureRef: 'Mark 8:35'
    }
  ],
  '1-15': [
    {
      traditions: ['orthodox', 'ecumenical'],
      name: 'St. Seraphim of Sarov',
      name_it: 'San Serafino di Sarov',
      name_ro: 'Sfântul Serafim de Sarov, Făcătorul de Minuni',
      title: 'Wonderworker of Sarov & Apostle of the Holy Spirit',
      color: 'white',
      rank: 'feast',
      quote: '«Acquire a peaceful spirit, and around you thousands will be saved.»',
      bio: 'Russian elder who lived in silent prayer and greeted every person throughout the year with: "My joy, Christ is risen!"',
      scriptureRef: 'John 20:19-21'
    }
  ],
  '1-17': [
    {
      traditions: ['catholic', 'traditional', 'orthodox', 'ecumenical'],
      name: 'St. Anthony the Great',
      name_it: 'Sant\'Antonio Abate',
      name_ro: 'Sfântul Antonie cel Mare',
      title: 'Father of All Monks & Desert Anchorite',
      color: 'white',
      rank: 'memorial',
      quote: '«I saw the snares that the enemy spreads for all the world, and I said: "Who can get through them?" Then I heard a voice: "Humility."»',
      bio: 'Heard the Gospel call "Sell what you possess and give to the poor" and retreated into the Egyptian wilderness to pioneer Christian monastic prayer.',
      scriptureRef: 'Matthew 19:21'
    }
  ],
  '1-21': [
    {
      traditions: ['catholic', 'traditional', 'ecumenical'],
      name: 'St. Agnes of Rome',
      name_it: 'Sant\'Agnese di Roma',
      name_ro: 'Sfânta Muceniță Agnes',
      title: 'Virgin & Martyr of Roman Persecution',
      color: 'red',
      rank: 'memorial',
      quote: '«Christ has made my soul radiant with virtue, and crowned me with precious gems of purity.»',
      bio: 'At age twelve, stood fearless before the Roman magistrate and gave her life rather than renounce her betrothal to Jesus Christ.',
      scriptureRef: 'Revelation 12:11'
    }
  ],
  '1-25': [
    {
      traditions: ['all'],
      name: 'Conversion of St. Paul the Apostle',
      name_it: 'Conversione di San Paolo Apostolo',
      name_ro: 'Întoarcerea Sfântului Apostol Pavel',
      title: 'Vessel of Election & Teacher of the Gentiles',
      color: 'white',
      rank: 'feast',
      quote: '«I live, yet not I, but Christ liveth in me: and the life which I now live in the flesh I live by the faith of the Son of God.»',
      bio: 'Blinded by the blazing light of the Risen Lord on the road to Damascus, transformed from persecutor into the Church\'s greatest missionary.',
      scriptureRef: 'Galatians 2:20'
    }
  ],
  '1-28': [
    {
      traditions: ['catholic', 'ecumenical'],
      name: 'St. Thomas Aquinas',
      name_it: 'San Tommaso d\'Aquino',
      name_ro: 'Sfântul Toma de Aquino',
      title: 'Angelic Doctor & Common Doctor of the Church',
      color: 'white',
      rank: 'memorial',
      quote: '«I have written what I could; compared to what has been revealed to me, all my writings seem like straw.»',
      bio: 'Dominican theologian whose Summa Theologiae unified Christian faith with philosophical reason in holy reverence.',
      scriptureRef: '1 Corinthians 13:12'
    }
  ],
  '1-30': [
    {
      traditions: ['orthodox'],
      name: 'The Three Holy Hierarchs: Basil, Gregory & John Chrysostom',
      name_it: 'I Tre Santi Gerarchi: Basilio, Gregorio e Crisostomo',
      name_ro: 'Sfinții Trei Ierarhi: Vasile cel Mare, Grigorie Teologul și Ioan Gură de Aur',
      title: 'Universal Teachers and Pillars of the Orthodox Faith',
      color: 'white',
      rank: 'solemnity',
      quote: '«Let us praise the three great luminaries of the three-sunned Divinity who illumined the whole world with the rays of divine doctrines.»',
      bio: 'Unified feast instituted in Constantinople to celebrate the harmonious balance of theological eloquence, monastic discipline, and pastoral charity.',
      scriptureRef: 'Hebrews 13:7'
    }
  ],

  // ==========================================
  // FEBRUARY (2)
  // ==========================================
  '2-2': [
    {
      traditions: ['all'],
      name: 'The Presentation of the Lord (Candlemas / Meeting of the Lord)',
      name_it: 'Presentazione del Signore (Candelora)',
      name_ro: 'Întâmpinarea Domnului',
      title: 'Meeting of the Messiah with Simeon & Light of the Gentiles',
      color: 'white',
      rank: 'feast',
      quote: '«Lord, now lettest thou thy servant depart in peace: for mine eyes have seen thy salvation, a light to lighten the Gentiles.»',
      bio: 'Christ is brought into the Temple forty days after birth, greeted by aged Simeon and prophetess Anna as the long-awaited Redeemer.',
      scriptureRef: 'Luke 2:29-32'
    }
  ],
  '2-11': [
    {
      traditions: ['catholic', 'traditional'],
      name: 'Our Lady of Lourdes',
      name_it: 'Beata Vergine Maria di Lourdes',
      name_ro: 'Fecioara Maria de la Lourdes',
      title: 'Health of the Sick & Immaculate Conception',
      color: 'blue',
      rank: 'memorial',
      quote: '«I do not promise to make you happy in this world, but in the other. Pray for sinners.»',
      bio: 'Appeared eighteen times to the humble shepherdess St. Bernadette Soubirous at Massabielle, revealing herself as the Immaculate Conception.',
      scriptureRef: 'Luke 1:28'
    }
  ],
  '2-18': [
    {
      traditions: ['protestant'],
      name: 'Martin Luther (Commemoration of Death)',
      name_it: 'Martin Lutero (Commemorazione della Morte)',
      name_ro: 'Martin Luther (Trecerea la Domnul)',
      title: 'Reformer & Translator of the Scriptures',
      color: 'white',
      rank: 'memorial',
      quote: '«We are beggars: this is true. The righteous shall live by faith.»',
      bio: 'Passed into eternal rest in Eisleben on February 18, 1546, steadfast in the conviction that salvation is received by grace through faith alone in Jesus Christ.',
      scriptureRef: 'Romans 1:17'
    }
  ],
  '2-21': [
    {
      traditions: ['protestant'],
      name: 'Eric Liddell',
      name_it: 'Eric Liddell (Campione e Misionario)',
      name_ro: 'Eric Liddell (Misionar în China)',
      title: 'Olympic Champion & Missionary in China',
      color: 'white',
      rank: 'memorial',
      quote: '«God made me fast, and when I run I feel His pleasure. But to give up everything for Christ is my true calling.»',
      bio: 'Olympic gold medalist who refused to run on the Lord\'s Day, devoted his life as a teacher-missionary in war-torn China, and died in an internment camp in 1945.',
      scriptureRef: 'Isaiah 40:31'
    }
  ],
  '2-22': [
    {
      traditions: ['catholic', 'traditional'],
      name: 'Chair of St. Peter the Apostle',
      name_it: 'Cattedra di San Pietro Apostolo',
      name_ro: 'Catedra Sfântului Petru',
      title: 'Sign of Petrine Pastoral Care & Apostolic Unity',
      color: 'white',
      rank: 'feast',
      quote: '«Thou art Peter, and upon this rock I will build my church; and the gates of hell shall not prevail against it.»',
      bio: 'Celebrates the pastoral ministry instituted by Christ in St. Peter to shepherd the flock and strengthen his brethren.',
      scriptureRef: 'Matthew 16:16-18'
    }
  ],

  // ==========================================
  // MARCH (3)
  // ==========================================
  '3-2': [
    {
      traditions: ['protestant'],
      name: 'John Wesley',
      name_it: 'John Wesley',
      name_ro: 'John Wesley (Tatăl Metodismului)',
      title: 'Evangelist, Preacher & Father of Methodism',
      color: 'white',
      rank: 'memorial',
      quote: '«The best of all is, God is with us! Do all the good you can, by all the means you can, in all the ways you can.»',
      bio: 'English clergyman whose open-air preaching, hymns, and societies of holy living sparked spiritual renewal throughout Great Britain and America.',
      scriptureRef: '2 Corinthians 5:14'
    }
  ],
  '3-7': [
    {
      traditions: ['traditional'],
      name: 'St. Thomas Aquinas (Historic Feast)',
      name_it: 'San Tommaso d\'Aquino (Festa Tradizionale)',
      name_ro: 'Sfântul Toma de Aquino',
      title: 'Angelic Doctor & Confessor',
      color: 'white',
      rank: 'feast',
      quote: '«Grant me, O Lord my God, a mind to know You, a heart to seek You, and wisdom to find You.»',
      bio: 'Celebrated on his dies natalis (March 7, 1274) according to the 1962 Roman Missal.',
      scriptureRef: 'Colossians 2:2-3'
    }
  ],
  '3-10': [
    {
      traditions: ['protestant'],
      name: 'George Müller of Bristol',
      name_it: 'George Müller di Bristol',
      name_ro: 'George Müller (Omul Rugăciunii)',
      title: 'Champion of Orphanages & Man of Pure Faith',
      color: 'white',
      rank: 'memorial',
      quote: '«The beginning of anxiety is the end of faith, and the beginning of true faith is the end of anxiety.»',
      bio: 'Christian evangelist who cared for over 10,000 orphans without ever asking for money from human beings, relying exclusively on secret prayer to God.',
      scriptureRef: 'Philippians 4:6'
    }
  ],
  '3-19': [
    {
      traditions: ['catholic', 'traditional', 'ecumenical'],
      name: 'Solemnity of St. Joseph, Spouse of the B.V.M.',
      name_it: 'Solennità di San Giuseppe, Sposo della B.V.M.',
      name_ro: 'Sfântul Iosif, Ocrotitorul Sfintei Familii',
      title: 'Patron of the Universal Church & Silent Guardian',
      color: 'white',
      rank: 'solemnity',
      quote: '«A just man who spoke no recorded words in Scripture, yet obeyed God in every silence of the night.»',
      bio: 'Chaste guardian of the Holy Family, righteous workman of Nazareth who protected the Infant Savior from Herod\'s fury.',
      scriptureRef: 'Matthew 1:19-24'
    }
  ],
  '3-21': [
    {
      traditions: ['catholic', 'traditional', 'orthodox', 'ecumenical'],
      name: 'St. Benedict of Nursia',
      name_it: 'San Benedetto da Norcia',
      name_ro: 'Sfântul Benedict de Nursia',
      title: 'Father of Western Monasticism & Patriarch of Monks',
      color: 'white',
      rank: 'feast',
      quote: '«Listen, O my son, to the precepts of the master. Prefer nothing whatsoever to the love of Christ.»',
      bio: 'Author of the Holy Rule: "Ora et Labora" (Pray and Work), establishing peaceful monastic communities across Europe.',
      scriptureRef: '1 Peter 5:5-7'
    }
  ],
  '3-25': [
    {
      traditions: ['all'],
      name: 'The Annunciation of the Lord (Incarnation of the Word)',
      name_it: 'Annunciazione del Signore (Incarnazione)',
      name_ro: 'Buna Vestire (Blagoveștenia)',
      title: 'The Incarnation of the Word & Marian Fiat',
      color: 'blue',
      rank: 'solemnity',
      quote: '«Behold the handmaid of the Lord; be it unto me according to thy word.»',
      bio: 'The Archangel Gabriel announces to the Virgin Mary in Nazareth that she will bear the Son of the Most High by the power of the Holy Spirit.',
      scriptureRef: 'Luke 1:26-38'
    }
  ],

  // ==========================================
  // APRIL (4)
  // ==========================================
  '4-9': [
    {
      traditions: ['protestant', 'ecumenical'],
      name: 'Dietrich Bonhoeffer',
      name_it: 'Dietrich Bonhoeffer',
      name_ro: 'Dietrich Bonhoeffer (Martir al Harului Costisitor)',
      title: 'Martyr of Faith & Preacher of Costly Grace',
      color: 'red',
      rank: 'memorial',
      quote: '«Costly grace is the gospel which must be sought again and again, the gift which must be asked for, the door at which a man must knock.»',
      bio: 'Lutheran pastor who opposed Nazi totalitarian idolatry and racism unto martyrdom, hanged in Flossenbürg on April 9, 1945.',
      scriptureRef: 'Luke 9:23'
    }
  ],
  '4-15': [
    {
      traditions: ['protestant'],
      name: 'Corrie ten Boom',
      name_it: 'Corrie ten Boom',
      name_ro: 'Corrie ten Boom (Mărturia Iertării)',
      title: 'Righteous Rescuer & Witness of Divine Forgiveness',
      color: 'white',
      rank: 'memorial',
      quote: '«There is no pit so deep that God\'s love is not deeper still. Forgiveness is an act of the will, and the will can function regardless of the temperature of the heart.»',
      bio: 'Dutch Christian who hid hundreds of Jewish people from the Gestapo; survived the horrors of Ravensbrück concentration camp and preached Christ\'s forgiveness worldwide.',
      scriptureRef: 'Romans 8:38-39'
    }
  ],
  '4-23': [
    {
      traditions: ['catholic', 'traditional', 'orthodox', 'ecumenical'],
      name: 'St. George the Great-Martyr',
      name_it: 'San Giorgio Megalomartire',
      name_ro: 'Sfântul Mare Mucenic Gheorghe, Purtătorul de Biruință',
      title: 'Trophy-Bearer & Champion of the Crucified King',
      color: 'red',
      rank: 'feast',
      quote: '«My Lord Jesus Christ is my strength; neither fire nor sword can separate me from His holy love.»',
      bio: 'Roman military officer martyred under Diocletian for fearlessly confessing Christ before the Emperor.',
      scriptureRef: 'Romans 8:35-39'
    }
  ],
  '4-25': [
    {
      traditions: ['all'],
      name: 'St. Mark the Evangelist',
      name_it: 'San Marco Evangelista',
      name_ro: 'Sfântul Apostol și Evanghelist Marcu',
      title: 'Disciple of Peter & Author of the Second Gospel',
      color: 'red',
      rank: 'feast',
      quote: '«The beginning of the gospel of Jesus Christ, the Son of God.»',
      bio: 'Recorded St. Peter\'s preaching in Rome and founded the ancient Apostolic Church of Alexandria.',
      scriptureRef: 'Mark 1:1'
    }
  ],
  '4-29': [
    {
      traditions: ['catholic', 'ecumenical'],
      name: 'St. Catherine of Siena',
      name_it: 'Santa Caterina da Siena',
      name_ro: 'Sfânta Ecaterina de Siena',
      title: 'Virgin, Doctor of the Church & Patroness of Europe',
      color: 'white',
      rank: 'feast',
      quote: '«Be who God meant you to be and you will set the whole world on fire.»',
      bio: 'Dominican mystic whose letters and holiness brought the papacy back to Rome from Avignon.',
      scriptureRef: 'Romans 12:1-2'
    },
    {
      traditions: ['traditional'],
      name: 'St. Peter of Verona (Peter Martyr)',
      name_it: 'San Pietro Martire da Verona',
      name_ro: 'Sfântul Petru Martirul din Verona',
      title: 'Dominican Preacher & Martyr of the Faith',
      color: 'red',
      rank: 'feast',
      quote: '«Credo in Deum — I believe in God (written on the ground with his own blood as he was struck down).»',
      bio: 'Dominican inquisitor and preacher martyred near Milan in 1252, writing the Creed with his dying breath.',
      scriptureRef: 'Acts 7:59-60'
    }
  ],

  // ==========================================
  // MAY (5)
  // ==========================================
  '5-2': [
    {
      traditions: ['catholic', 'traditional', 'orthodox', 'ecumenical'],
      name: 'St. Athanasius the Great',
      name_it: 'Sant\'Atanasio il Grande',
      name_ro: 'Sfântul Atanasie cel Mare, Patriarhul Alexandriei',
      title: 'Pillar of Orthodoxy & Champion of Nicea',
      color: 'white',
      rank: 'memorial',
      quote: '«The Son of God became man that we might become divine by grace.»',
      bio: 'Defended the consubstantial divinity of Jesus Christ against Arianism through five harsh exiles.',
      scriptureRef: 'John 1:1-14'
    }
  ],
  '5-14': [
    {
      traditions: ['all'],
      name: 'St. Matthias the Apostle',
      name_it: 'San Mattia Apostolo',
      name_ro: 'Sfântul Apostol Matia',
      title: 'Chosen Witness of the Resurrection',
      color: 'red',
      rank: 'feast',
      quote: '«Chosen by prayer and the lot of the Apostles to complete the Twelve after the fall of Judas.»',
      bio: 'Witness of Christ from the baptism of John unto the Ascension; died a martyr proclaiming the Gospel.',
      scriptureRef: 'Acts 1:21-26'
    }
  ],
  '5-21': [
    {
      traditions: ['orthodox'],
      name: 'Saints Constantine and Helen, Equals-to-the-Apostles',
      name_it: 'Santi Costantino ed Elena, Uguali agli Apostoli',
      name_ro: 'Sfinții Împărați Constantin și Elena, cei Întocmai cu Apostolii',
      title: 'Protectors of the Christian Faith & Discoverers of the Cross',
      color: 'white',
      rank: 'feast',
      quote: '«In this sign, conquer! Saint Helen found the precious Tree of the Cross on Golgotha.»',
      bio: 'Emperor Constantine ended the persecutions with the Edict of Milan (313 AD); Empress Helen journeyed to Jerusalem and recovered the True Cross.',
      scriptureRef: 'Galatians 6:14'
    }
  ],

  // ==========================================
  // JUNE (6)
  // ==========================================
  '6-1': [
    {
      traditions: ['catholic', 'traditional', 'orthodox', 'ecumenical'],
      name: 'St. Justin Martyr',
      name_it: 'San Giustino Martire',
      name_ro: 'Sfântul Iustin Martirul și Filosoful',
      title: 'Philosopher, Apologist & Martyr',
      color: 'red',
      rank: 'memorial',
      quote: '«We desire nothing else than to suffer for our Lord Jesus Christ, for this will give us confidence before His awesome tribunal.»',
      bio: 'Earliest Christian philosopher and apologist, beheaded in Rome in 165 AD for refusing pagan sacrifice.',
      scriptureRef: '1 Peter 3:15'
    }
  ],
  '6-13': [
    {
      traditions: ['catholic', 'traditional'],
      name: 'St. Anthony of Padua',
      name_it: 'Sant\'Antonio di Padova',
      name_ro: 'Sfântul Anton de Padova',
      title: 'Evangelical Doctor & Wonderworker of the Poor',
      color: 'white',
      rank: 'feast',
      quote: '«Actions speak louder than words; let your words teach and your actions speak.»',
      bio: 'Franciscan friar whose preaching converted thousands and whose miraculous charity for the poor remains world-renowned.',
      scriptureRef: 'James 1:22'
    }
  ],
  '6-24': [
    {
      traditions: ['all'],
      name: 'The Nativity of St. John the Baptist',
      name_it: 'Natività di San Giovanni Battista',
      name_ro: 'Nașterea Sfântului Ioan Botezătorul (Sânzienele)',
      title: 'Forerunner of the Lord & Voice in the Wilderness',
      color: 'white',
      rank: 'solemnity',
      quote: '«He must increase, but I must decrease.»',
      bio: 'The greatest born of women, sanctified in Elizabeth\'s womb, who prepared the way for the Lamb of God.',
      scriptureRef: 'John 3:30'
    }
  ],
  '6-29': [
    {
      traditions: ['all'],
      name: 'Saints Peter and Paul, Apostles',
      name_it: 'Santi Pietro e Paolo, Apostoli',
      name_ro: 'Sfinții Apostoli Petru și Pavel',
      title: 'Chief Apostles & Pillars of the Early Church',
      color: 'red',
      rank: 'solemnity',
      quote: '«Thou art Peter, and upon this rock I will build my Church... I have fought the good fight, I have finished my course, I have kept the faith.»',
      bio: 'United in faith and martyrdom in Rome under Nero: Peter crucified upside down on Vatican hill, Paul beheaded along the Ostian Way.',
      scriptureRef: '2 Timothy 4:7-8'
    }
  ],

  // ==========================================
  // JULY (7)
  // ==========================================
  '7-10': [
    {
      traditions: ['protestant'],
      name: 'John Calvin',
      name_it: 'Giovanni Calvino',
      name_ro: 'Jean Calvin (Pastorul Genevei)',
      title: 'Reformer & Author of Institutes of the Christian Religion',
      color: 'white',
      rank: 'memorial',
      quote: '«Cor meum tibi offero, Domine, prompte et sincere — My heart I offer to Thee, O Lord, promptly and sincerely.»',
      bio: 'French theologian and pastor of Geneva who systematized Reformed theology and emphasized the absolute sovereignty of God\'s grace.',
      scriptureRef: 'Romans 11:36'
    }
  ],
  '7-11': [
    {
      traditions: ['catholic', 'traditional', 'ecumenical'],
      name: 'St. Benedict of Nursia (Solemnity)',
      name_it: 'San Benedetto Abate (Solennità)',
      name_ro: 'Sfântul Benedict de Nursia',
      title: 'Patron of Europe & Patriarch of Western Monks',
      color: 'white',
      rank: 'feast',
      quote: '«Idleness is the enemy of the soul. Therefore, let the brethren pray and labor faithfully.»',
      bio: 'Sanctified the West through monastic community, liturgical prayer, and preserving sacred learning.',
      scriptureRef: '1 Thessalonians 4:11'
    }
  ],
  '7-12': [
    {
      traditions: ['orthodox'],
      name: 'St. Paisios of Mount Athos',
      name_it: 'San Paisio del Monte Athos',
      name_ro: 'Sfântul Paisie Aghioritul de la Muntele Athos',
      title: 'Holy Elder of Mount Athos & Vessel of Compassion',
      color: 'white',
      rank: 'feast',
      quote: '«Love is above all else. When love is present, the heart burns with prayer for all creation.»',
      bio: 'Athonite monastic elder who consoled hundreds of thousands of souls through spiritual discernment and unceasing prayer.',
      scriptureRef: '1 Corinthians 13:8'
    }
  ],
  '7-22': [
    {
      traditions: ['all'],
      name: 'St. Mary Magdalene',
      name_it: 'Santa Maria Maddalena',
      name_ro: 'Sfânta Maria Magdalena, cea Întocmai cu Apostolii',
      title: 'Apostle to the Apostles & Witness of the Resurrection',
      color: 'white',
      rank: 'feast',
      quote: '«I have seen the Lord!»',
      bio: 'Delivered by Christ from seven demons, stood courageously at the foot of the Cross, and was the first to announce the Resurrection.',
      scriptureRef: 'John 20:18'
    }
  ],
  '7-29': [
    {
      traditions: ['protestant'],
      name: 'William Wilberforce',
      name_it: 'William Wilberforce',
      name_ro: 'William Wilberforce (Aboliționistul Creștin)',
      title: 'Statesman, Abolitionist & Reformer of Society',
      color: 'white',
      rank: 'memorial',
      quote: '«God Almighty has set before me two great objects: the suppression of the slave trade and the reformation of manners.»',
      bio: 'British evangelical parliamentarian whose Christian conviction led to the abolition of the transatlantic slave trade across the British Empire.',
      scriptureRef: 'Galatians 3:28'
    }
  ],

  // ==========================================
  // AUGUST (8)
  // ==========================================
  '8-6': [
    {
      traditions: ['all'],
      name: 'The Holy Transfiguration of our Lord',
      name_it: 'Trasfigurazione del Signore',
      name_ro: 'Schimbarea la Față a Domnului (Oprejania)',
      title: 'The Uncreated Glory of Christ on Mount Tabor',
      color: 'white',
      rank: 'solemnity',
      quote: '«This is my beloved Son, in whom I am well pleased; hear ye him!»',
      bio: 'Jesus reveals His uncreated divine glory on Mount Tabor to Peter, James, and John, foreshadowing the glory of His Resurrection.',
      scriptureRef: 'Matthew 17:1-9'
    }
  ],
  '8-10': [
    {
      traditions: ['catholic', 'traditional', 'orthodox', 'ecumenical'],
      name: 'St. Lawrence, Deacon and Martyr',
      name_it: 'San Lorenzo, Diacono e Martire',
      name_ro: 'Sfântul Mare Mucenic Laurențiu Arhidiaconul',
      title: 'Keeper of Church Treasures & Hero of Roman Charity',
      color: 'red',
      rank: 'feast',
      quote: '«Behold the true treasures of the Church: the poor and the suffering in whom Christ lives.»',
      bio: 'Deacon of Rome roasted upon an iron gridiron under Valerian with heroic fortitude and serene joy.',
      scriptureRef: '2 Corinthians 9:6-9'
    }
  ],
  '8-14': [
    {
      traditions: ['catholic', 'ecumenical'],
      name: 'St. Maximilian Maria Kolbe',
      name_it: 'San Massimiliano Maria Kolbe',
      name_ro: 'Sfântul Maximilian Kolbe',
      title: 'Knight of the Immaculata & Martyr of Auschwitz',
      color: 'red',
      rank: 'memorial',
      quote: '«Greater love hath no man than this, that a man lay down his life for his friends.»',
      bio: 'Franciscan priest who stepped forward in Auschwitz to die in the starvation bunker in place of a married father.',
      scriptureRef: 'John 15:13'
    }
  ],
  '8-15': [
    {
      traditions: ['catholic', 'traditional'],
      name: 'The Assumption of the Blessed Virgin Mary',
      name_it: 'Assunzione della Beata Vergine Maria',
      name_ro: 'Adormirea Maicii Domnului (Sfânta Maria Mare)',
      title: 'Queen Assumed into Heavenly Glory',
      color: 'blue',
      rank: 'solemnity',
      quote: '«And there appeared a great wonder in heaven; a woman clothed with the sun, and the moon under her feet.»',
      bio: 'The Mother of God, having completed her earthly life, was assumed body and soul into heavenly glory.',
      scriptureRef: 'Revelation 12:1'
    },
    {
      traditions: ['orthodox'],
      name: 'The Dormition of the Most Holy Theotokos',
      name_it: 'Dormizione della Tutta Santa Madre di Dio',
      name_ro: 'Adormirea Maicii Domnului (Uspenia)',
      title: 'Summer Pascha & Falling Asleep of the Mother of God',
      color: 'blue',
      rank: 'solemnity',
      quote: '«In giving birth you preserved your virginity; in falling asleep you did not forsake the world, O Theotokos!»',
      bio: 'Surrounded by the Apostles, the Mother of God falls asleep in peace and is translated by her Divine Son into eternal life.',
      scriptureRef: 'Psalm 45:9-11'
    },
    {
      traditions: ['protestant'],
      name: 'Mary, Mother of our Lord',
      name_it: 'Maria, Madre del nostro Signore',
      name_ro: 'Sfânta Maria, Maica Domnului nostru',
      title: 'Blessed Handmaid of the Lord & Ark of the Incarnation',
      color: 'white',
      rank: 'feast',
      quote: '«My soul doth magnify the Lord, and my spirit hath rejoiced in God my Saviour.»',
      bio: 'Celebrates the humble virgin of Nazareth chosen by God to bear the Savior of the world in divine humility.',
      scriptureRef: 'Luke 1:46-55'
    }
  ],
  '8-28': [
    {
      traditions: ['catholic', 'traditional', 'ecumenical'],
      name: 'St. Augustine of Hippo',
      name_it: 'Sant\'Agostino d\'Ippona',
      name_ro: 'Fericitul Augustin, Episcopul Hiponei',
      title: 'Doctor of Grace & Western Church Father',
      color: 'white',
      rank: 'feast',
      quote: '«You have made us for yourself, O Lord, and our heart is restless until it rests in you.»',
      bio: 'Bishop of Hippo whose Confessions and theology of grace shaped Christian intellectual history.',
      scriptureRef: 'Psalm 63:1'
    }
  ],
  '8-29': [
    {
      traditions: ['all'],
      name: 'The Martyrdom of St. John the Baptist',
      name_it: 'Martirio di San Giovanni Battista (Decollazione)',
      name_ro: 'Tăierea Capului Sfântului Ioan Botezătorul',
      title: 'Defender of Divine Moral Law & Righteous Prophet',
      color: 'red',
      rank: 'memorial',
      quote: '«It is not lawful for thee to have thy brother\'s wife.»',
      bio: 'Beheaded by Herod Antipas for fearlessly defending the moral commandments of God without compromise.',
      scriptureRef: 'Mark 6:17-29'
    }
  ],

  // ==========================================
  // SEPTEMBER (9)
  // ==========================================
  '9-8': [
    {
      traditions: ['all'],
      name: 'The Nativity of the Blessed Virgin Mary',
      name_it: 'Natività della Beata Vergine Maria',
      name_ro: 'Nașterea Maicii Domnului (Sfânta Maria Mică)',
      title: 'Dawn of Redemption & Ark of the New Covenant',
      color: 'blue',
      rank: 'feast',
      quote: '«Thy Nativity, O Virgin Mother of God, has proclaimed joy to all the universe, for from thee arose the Sun of Justice!»',
      bio: 'The birth of Mary heralds the coming of the Savior into human history.',
      scriptureRef: 'Micah 5:2'
    }
  ],
  '9-13': [
    {
      traditions: ['all'],
      name: 'St. John Chrysostom',
      name_it: 'San Giovanni Crisostomo',
      name_ro: 'Sfântul Ioan Gură de Aur, Arhiepiscopul Constantinopolului',
      title: 'Golden-Mouthed Patriarch & Doctor of the Church',
      color: 'white',
      rank: 'feast',
      quote: '«Prayer is the root, the fountain, the mother of countless blessings. If you cannot find Christ in the beggar at the church door, you will not find Him in the chalice.»',
      bio: 'Courageous preacher of righteousness, author of the Divine Liturgy, defender of the poor against corrupt power.',
      scriptureRef: 'Ephesians 6:18'
    }
  ],
  '9-14': [
    {
      traditions: ['all'],
      name: 'The Exaltation of the Holy Cross',
      name_it: 'Esaltazione della Santa Croce',
      name_ro: 'Înălțarea Sfintei Cruci',
      title: 'Universal Sign of Redemption & Tree of Life',
      color: 'red',
      rank: 'feast',
      quote: '«God forbid that I should glory, save in the cross of our Lord Jesus Christ, by whom the world is crucified unto me, and I unto the world.»',
      bio: 'Celebrates the True Cross of Christ as the supreme trophy of victory over sin and death.',
      scriptureRef: 'Galatians 6:14'
    }
  ],
  '9-21': [
    {
      traditions: ['all'],
      name: 'St. Matthew, Apostle and Evangelist',
      name_it: 'San Matteo, Apostolo ed Evangelista',
      name_ro: 'Sfântul Apostol și Evanghelist Matei',
      title: 'Tax Collector Called by Grace & Gospel Writer',
      color: 'red',
      rank: 'feast',
      quote: '«Jesus said unto him: Follow me. And he arose and followed him.»',
      bio: 'Left his toll office immediately at Christ\'s call; recorded the Gospel and died a martyr.',
      scriptureRef: 'Matthew 9:9'
    }
  ],
  '9-23': [
    {
      traditions: ['catholic', 'traditional'],
      name: 'St. Pio of Pietrelcina (Padre Pio)',
      name_it: 'San Pio da Pietrelcina',
      name_ro: 'Sfântul Padre Pio de Pietrelcina',
      title: 'Capuchin Stigmatist & Apostle of the Confessional',
      color: 'white',
      rank: 'memorial',
      quote: '«Pray, hope, and don\'t worry. Worry is useless. God is merciful and will hear your prayer.»',
      bio: 'Franciscan friar who bore the wounds of Christ for fifty years and reconciled countless sinners.',
      scriptureRef: 'Galatians 6:17'
    }
  ],
  '9-24': [
    {
      traditions: ['orthodox'],
      name: 'St. Silouan the Athonite',
      name_it: 'San Silvano del Monte Athos',
      name_ro: 'Sfântul Siluan Athonitul',
      title: 'Elder of Mount Athos & Singer of Divine Love',
      color: 'white',
      rank: 'feast',
      quote: '«Keep thy mind in hell, and despair not. The Lord loves all people, and desires that all be saved.»',
      bio: 'Russian monk on Mount Athos who wept in prayer for the salvation of all humanity.',
      scriptureRef: '1 Timothy 2:3-4'
    }
  ],
  '9-27': [
    {
      traditions: ['catholic', 'ecumenical'],
      name: 'St. Vincent de Paul',
      name_it: 'San Vincenzo de\' Paoli',
      name_ro: 'Sfântul Vincențiu de Paul',
      title: 'Apostle of Charity & Father of the Poor',
      color: 'white',
      rank: 'memorial',
      quote: '«Charity is the cement which binds communities to God and persons to one another.»',
      bio: 'Devoted his life to galley slaves, orphans, and peasants, founding the Daughters of Charity.',
      scriptureRef: 'James 2:14-17'
    },
    {
      traditions: ['orthodox'],
      name: 'St. Callistratus and His Companions, Martyrs',
      name_it: 'San Callistrato e Compagni Martiri',
      name_ro: 'Sfântul Mucenic Calistrat și cei 49 de Mucenici',
      title: 'Courageous Martyrs of Rome',
      color: 'red',
      rank: 'memorial',
      quote: '«We belong to Christ our Lord and King, and we will never offer sacrifice to idols.»',
      bio: 'Roman soldier whose miraculous endurance led 49 fellow soldiers to confess Christ and receive the crown of martyrdom.',
      scriptureRef: '2 Timothy 2:3'
    },
    {
      traditions: ['protestant'],
      name: 'George Whitefield (Commemoration of Gospel Preaching)',
      name_it: 'George Whitefield (Apostolo del Risveglio)',
      name_ro: 'George Whitefield (Predicatorul Marii Treziri)',
      title: 'Voice of the Great Awakening & Open-Air Preacher',
      color: 'white',
      rank: 'memorial',
      quote: '«I am content to be forgotten, if Christ be remembered! Let the name of Whitefield perish, so long as Christ is exalted.»',
      bio: 'Preached the Gospel to over ten million people in Great Britain and America, pointing all to the necessity of the new birth in Christ.',
      scriptureRef: 'John 3:3'
    }
  ],
  '9-29': [
    {
      traditions: ['all'],
      name: 'Saints Michael, Gabriel, and Raphael, Archangels',
      name_it: 'Santi Michele, Gabriele e Raffaele, Arcangeli',
      name_ro: 'Sfinții Arhangheli (Soborul Puterilor Cerești)',
      title: 'Captains of the Heavenly Host & Messengers of God',
      color: 'white',
      rank: 'feast',
      quote: '«Quis ut Deus? Who is like unto God! Michael defeated the dragon and his angels.»',
      bio: 'Michael vanquished Lucifer; Gabriel brought the tidings of the Incarnation; Raphael brings healing to the faithful.',
      scriptureRef: 'Revelation 12:7-9'
    }
  ],
  '9-30': [
    {
      traditions: ['all'],
      name: 'St. Jerome, Priest and Doctor',
      name_it: 'San Girolamo, Dottore della Chiesa',
      name_ro: 'Fericitul Ieronim, Tălmăcitorul Sfintelor Scripturi',
      title: 'Translator of the Sacred Scriptures (Vulgate)',
      color: 'white',
      rank: 'memorial',
      quote: '«Ignorance of Scripture is ignorance of Christ.»',
      bio: 'Dedicated decades in the cave of Bethlehem translating the Hebrew and Greek Scriptures into Latin.',
      scriptureRef: '2 Timothy 3:16'
    }
  ],

  // ==========================================
  // OCTOBER (10)
  // ==========================================
  '10-1': [
    {
      traditions: ['catholic', 'traditional'],
      name: 'St. Thérèse of Lisieux',
      name_it: 'Santa Teresa di Gesù Bambino (di Lisieux)',
      name_ro: 'Sfânta Tereza a Pruncului Isus',
      title: 'Doctor of the Church & Little Way of Love',
      color: 'white',
      rank: 'memorial',
      quote: '«My vocation is love! In the heart of the Church, my Mother, I will be love.»',
      bio: 'Carmelite nun who taught that sanctity is doing the smallest actions with infinite love.',
      scriptureRef: 'Matthew 18:3'
    },
    {
      traditions: ['orthodox'],
      name: 'The Protection of the Most Holy Theotokos (Pokrov)',
      name_it: 'La Protezione della Madre di Dio (Pokrov)',
      name_ro: 'Acoperământul Maicii Domnului (Pocrovul)',
      title: 'Maternal Protection over the Christian People',
      color: 'blue',
      rank: 'feast',
      quote: '«Today the Virgin stands in the church and with choirs of saints invisibly prays to God for us!»',
      bio: 'Vision seen in the Blachernae church of Constantinople by St. Andrew the Fool-for-Christ, showing Mary spreading her veil of protection over all believers.',
      scriptureRef: 'Psalm 91:4'
    }
  ],
  '10-4': [
    {
      traditions: ['catholic', 'traditional', 'ecumenical'],
      name: 'St. Francis of Assisi',
      name_it: 'San Francesco d\'Assisi',
      name_ro: 'Sfântul Francisc de Assisi',
      title: 'Poverello of Assisi & Herald of Gospel Peace',
      color: 'white',
      rank: 'feast',
      quote: '«Lord, make me an instrument of your peace: where there is hatred, let me sow love.»',
      bio: 'Embraced Gospel poverty, received the stigmata on Mount La Verna, and renewed the Church.',
      scriptureRef: 'Galatians 6:14'
    }
  ],
  '10-6': [
    {
      traditions: ['protestant'],
      name: 'William Tyndale',
      name_it: 'William Tyndale (Martire e Traduttore)',
      name_ro: 'William Tyndale (Traducătorul Bibliei)',
      title: 'Martyr of the English Bible & Biblical Scholar',
      color: 'red',
      rank: 'memorial',
      quote: '«Lord! Open the King of England\'s eyes! If God spare my life, I will cause a boy that driveth the plough shall know more of the Scripture than thou dost.»',
      bio: 'Pioneered the translation of the Bible from original Greek and Hebrew into English; betrayed and burned at the stake in Vilvoorde in 1536.',
      scriptureRef: 'Psalm 119:105'
    }
  ],
  '10-16': [
    {
      traditions: ['protestant'],
      name: 'Hugh Latimer & Nicholas Ridley (Oxford Martyrs)',
      name_it: 'Hugh Latimer e Nicholas Ridley (Martiri di Oxford)',
      name_ro: 'Hugh Latimer și Nicholas Ridley',
      title: 'Martyrs of the English Reformation',
      color: 'red',
      rank: 'memorial',
      quote: '«Be of good comfort, Master Ridley, and play the man; we shall this day light such a candle by God\'s grace in England as I trust shall never be put out.»',
      bio: 'Burned at the stake together in Oxford in 1555, sealing their witness to the Gospel with heroic fortitude.',
      scriptureRef: '2 Timothy 4:7'
    }
  ],
  '10-18': [
    {
      traditions: ['all'],
      name: 'St. Luke the Evangelist',
      name_it: 'San Luca Evangelista',
      name_ro: 'Sfântul Apostol și Evanghelist Luca',
      title: 'Physician, Companion of Paul & Scribe of Mercy',
      color: 'red',
      rank: 'feast',
      quote: '«For the Son of man is come to seek and to save that which was lost.»',
      bio: 'Author of the Third Gospel and the Acts of the Apostles, emphasizing Christ\'s compassion for the lost and the work of the Holy Spirit.',
      scriptureRef: 'Luke 19:10'
    }
  ],
  '10-31': [
    {
      traditions: ['protestant'],
      name: 'Reformation Day (Martin Luther at Wittenberg)',
      name_it: 'Giorno della Riforma (Martin Lutero)',
      name_ro: 'Ziua Reformei (Postarea celor 95 de Teze)',
      title: 'Proclamation of Grace, Faith & Scripture Alone',
      color: 'white',
      rank: 'solemnity',
      quote: '«A Mighty Fortress is our God, a bulwark never failing! The just shall live by faith.»',
      bio: 'On October 31, 1517, Martin Luther posted the 95 Theses at Wittenberg, igniting the recovery of biblical salvation by grace through faith in Christ alone.',
      scriptureRef: 'Ephesians 2:8-9'
    },
    {
      traditions: ['catholic', 'traditional', 'ecumenical'],
      name: 'Vigil of All Saints',
      name_it: 'Vigilia di Tutti i Santi',
      name_ro: 'Ajunul Sărbătorii Tuturor Sfinților',
      title: 'Preparation for the Heavenly Host',
      color: 'white',
      rank: 'memorial',
      quote: '«Blessed are the pure in heart, for they shall see God.»',
      bio: 'Evening of prayer and vigilance honoring the countless souls crowned in glory before God.',
      scriptureRef: 'Matthew 5:8'
    }
  ],

  // ==========================================
  // NOVEMBER (11)
  // ==========================================
  '11-1': [
    {
      traditions: ['catholic', 'traditional', 'ecumenical'],
      name: 'Solemnity of All Saints',
      name_it: 'Solennità di Tutti i Santi',
      name_ro: 'Sărbătoarea Tuturor Sfinților',
      title: 'The Triumphant Cloud of Witnesses in Heaven',
      color: 'white',
      rank: 'solemnity',
      quote: '«A great multitude, which no man could number, of all nations, and kindreds, and people, and tongues, stood before the throne.»',
      bio: 'Celebrates all holy souls who dwell in the radiant light of God, our intercessors and heavenly companions.',
      scriptureRef: 'Revelation 7:9'
    }
  ],
  '11-8': [
    {
      traditions: ['orthodox'],
      name: 'Synaxis of the Archangel Michael & All Bodiless Powers',
      name_it: 'Sinassi dell\'Arcangelo Michele e di Tutte le Schiere Celesti',
      name_ro: 'Soborul Sfinților Arhangheli Mihail și Gavriil',
      title: 'Leaders of the Heavenly Armies of God',
      color: 'white',
      rank: 'solemnity',
      quote: '«Commanders of the heavenly hosts, we entreat you: protect us under the shelter of your wings of immaterial glory!»',
      bio: 'Major Eastern feast commemorating the holy angels who guard the faithful and ceaselessly praise the Holy Trinity.',
      scriptureRef: 'Revelation 12:7'
    }
  ],
  '11-22': [
    {
      traditions: ['catholic', 'traditional', 'ecumenical'],
      name: 'St. Cecilia, Virgin and Martyr',
      name_it: 'Santa Cecilia, Vergine e Martire',
      name_ro: 'Sfânta Mare Muceniță Cecilia',
      title: 'Patroness of Sacred Musicians & Song of Faith',
      color: 'red',
      rank: 'memorial',
      quote: '«While the organ played, Cecilia sang in her heart unto God alone: Keep my heart and body spotless, that I be not confounded.»',
      bio: 'Noble Roman maiden martyred for Christ, praising God with her dying breath.',
      scriptureRef: 'Colossians 3:16'
    },
    {
      traditions: ['protestant'],
      name: 'C.S. Lewis',
      name_it: 'C.S. Lewis',
      name_ro: 'C.S. Lewis (Marele Apologet Creștin)',
      title: 'Defender of Mere Christianity & Voice of Hope',
      color: 'white',
      rank: 'memorial',
      quote: '«I believe in Christianity as I believe that the sun has risen: not only because I see it, but because by it I see everything else.»',
      bio: 'Oxford scholar whose Mere Christianity and Screwtape Letters brought millions of modern intellectuals to saving faith in Jesus Christ.',
      scriptureRef: 'John 1:9'
    }
  ],
  '11-25': [
    {
      traditions: ['orthodox', 'catholic', 'traditional'],
      name: 'St. Catherine of Alexandria',
      name_it: 'Santa Caterina d\'Alessandria',
      name_ro: 'Sfânta Mare Muceniță Ecaterina din Alexandria',
      title: 'Great-Martyr & Victor over Pagan Philosophy',
      color: 'red',
      rank: 'feast',
      quote: '«I have given myself as a bride to my Savior; neither promises of royalty nor threats of torture can tear me from Him.»',
      bio: 'Brilliant maiden of Alexandria whose defense of Christ converted fifty imperial philosophers before her martyrdom.',
      scriptureRef: '1 Corinthians 1:20-25'
    }
  ],
  '11-30': [
    {
      traditions: ['all'],
      name: 'St. Andrew the Apostle (The First-Called)',
      name_it: 'Sant\'Andrea Apostolo (Il Primo Chiamato)',
      name_ro: 'Sfântul Apostol Andrei, cel Întâi Chemat, Ocrotitorul României',
      title: 'The First-Called Disciple & Apostle of the Nations',
      color: 'red',
      rank: 'feast',
      quote: '«We have found the Messiah! O good Cross, long desired and now ready for my longing soul, receive the disciple of Him Who hung upon thee.»',
      bio: 'Brother of Simon Peter, first disciple to follow Jesus; evangelized Greece and Romania (Scythia) and was crucified on an X-shaped cross.',
      scriptureRef: 'John 1:40-42'
    }
  ],

  // ==========================================
  // DECEMBER (12)
  // ==========================================
  '12-6': [
    {
      traditions: ['all'],
      name: 'St. Nicholas of Myra (Wonderworker)',
      name_it: 'San Nicola di Myra (di Bari)',
      name_ro: 'Sfântul Ierarh Nicolae, Făcătorul de Minuni',
      title: 'Father of the Poor & Defender of the Trinity',
      color: 'white',
      rank: 'feast',
      quote: '«The best way to store up treasure in heaven is to distribute it into the hands of the poor for the love of Christ.»',
      bio: 'Bishop of Myra who secretly delivered dowries to save poor maidens, defended Christ\'s divinity at Nicea, and rescued the innocent.',
      scriptureRef: 'Luke 6:38'
    }
  ],
  '12-8': [
    {
      traditions: ['catholic', 'traditional'],
      name: 'The Immaculate Conception of the B.V.M.',
      name_it: 'Immacolata Concezione della Beata Vergine Maria',
      name_ro: 'Zămislirea Sfintei Fecioare Maria',
      title: 'Preserved Free from All Stain of Sin',
      color: 'blue',
      rank: 'solemnity',
      quote: '«Hail, full of grace, the Lord is with thee: blessed art thou among women.»',
      bio: 'Mary was preserved free from original sin from the moment of her conception by the merits of Christ.',
      scriptureRef: 'Luke 1:28'
    }
  ],
  '12-25': [
    {
      traditions: ['all'],
      name: 'The Nativity of our Lord Jesus Christ (Christmas)',
      name_it: 'Natale del Signore nostro Gesù Cristo',
      name_ro: 'Nașterea Domnului nostru Iisus Hristos (Crăciunul)',
      title: 'The Incarnation of the Word & Light of the World',
      color: 'white',
      rank: 'solemnity',
      quote: '«For unto you is born this day in the city of David a Saviour, which is Christ the Lord. Glory to God in the highest, and on earth peace, good will toward men!»',
      bio: 'The Eternal Word of the Father assumes mortal flesh in Bethlehem, born of the Virgin Mary in a humble manger.',
      scriptureRef: 'Luke 2:10-14'
    }
  ],
  '12-26': [
    {
      traditions: ['all'],
      name: 'St. Stephen, The Protomartyr',
      name_it: 'Santo Stefano, Protomartire',
      name_ro: 'Sfântul Apostol, Întâiul Mucenic și Arhidiacon Ștefan',
      title: 'First Christian Martyr & Deacon of Jerusalem',
      color: 'red',
      rank: 'feast',
      quote: '«Lord, lay not this sin to their charge! Lord Jesus, receive my spirit!»',
      bio: 'Full of grace and fortitude, saw the heavens opened and the Son of Man standing at the right hand of God before being stoned.',
      scriptureRef: 'Acts 7:55-60'
    }
  ],
  '12-27': [
    {
      traditions: ['all'],
      name: 'St. John, Apostle and Evangelist',
      name_it: 'San Giovanni, Apostolo ed Evangelista',
      name_ro: 'Sfântul Apostol și Evanghelist Ioan Teologul',
      title: 'The Beloved Disciple & Theologian of Divine Love',
      color: 'white',
      rank: 'feast',
      quote: '«In the beginning was the Word... God is love; and he that dwelleth in love dwelleth in God, and God in him.»',
      bio: 'Rested upon Jesus\' breast at the Last Supper, stood at the foot of the Cross, author of the Fourth Gospel and Revelation.',
      scriptureRef: '1 John 4:16'
    }
  ],
  '12-31': [
    {
      traditions: ['protestant'],
      name: 'John Wycliffe',
      name_it: 'John Wycliffe (La Stella del Mattino)',
      name_ro: 'John Wycliffe (Luceafărul Reformei)',
      title: 'Morning Star of the Reformation & First English Bible Translator',
      color: 'white',
      rank: 'memorial',
      quote: '«Trust wholly in Christ; rely on his sufferings; beware of seeking to be justified in any other way than by his righteousness.»',
      bio: 'Oxford theologian who first translated the entire Bible into English in the 14th century, insisting that all believers should possess the Word of God.',
      scriptureRef: '2 Timothy 3:16'
    }
  ]
};

// Tradition-specific fallback patrons for days without fixed entries
const TRADITION_FALLBACK_PATRONS = {
  catholic: [
    { name: 'St. Philip Neri', name_it: 'San Filippo Neri', title: 'Apostle of Rome & Spiritual Joy', color: 'white', rank: 'memorial', quote: '«Cheerfulness strengthens the heart and makes us persevere.»', scriptureRef: 'Philippians 4:4' },
    { name: 'St. Francis de Sales', name_it: 'San Francesco di Sales', title: 'Doctor of Divine Love', color: 'white', rank: 'memorial', quote: '«A spoonful of honey attracts more flies than a barrel of vinegar.»', scriptureRef: 'Colossians 4:6' },
    { name: 'St. Teresa of Avila', name_it: 'Santa Teresa d\'Avila', title: 'Doctor of Interior Prayer', color: 'white', rank: 'memorial', quote: '«God alone suffices.»', scriptureRef: 'Psalm 46:10' }
  ],
  traditional: [
    { name: 'St. Gregory the Great', name_it: 'San Gregorio Magno', title: 'Pope, Monk & Latin Doctor', color: 'white', rank: 'memorial', quote: '«The proof of love is in the works.»', scriptureRef: '1 John 3:18' },
    { name: 'St. Charles Borromeo', name_it: 'San Carlo Borromeo', title: 'Archbishop & Reformer of Trent', color: 'white', rank: 'memorial', quote: '«Be sure that you first preach by the way you live.»', scriptureRef: 'Titus 2:7' }
  ],
  orthodox: [
    { name: 'St. Isaac the Syrian', name_it: 'Sant\'Isacco il Siro', name_ro: 'Sfântul Isaac Sirul', title: 'Teacher of Silence & Merciful Heart', color: 'white', rank: 'memorial', quote: '«What is a merciful heart? It is a heart on fire for the whole of creation.»', scriptureRef: 'Luke 6:36' },
    { name: 'St. John Climacus', name_it: 'San Giovanni Climaco', name_ro: 'Sfântul Ioan Scărarul', title: 'Author of the Ladder of Divine Ascent', color: 'white', rank: 'memorial', quote: '«Repentance is the renewal of baptism, a contract with God for a second life.»', scriptureRef: 'Matthew 4:17' }
  ],
  protestant: [
    { name: 'John Bunyan', name_it: 'John Bunyan', name_ro: 'John Bunyan', title: 'Author of Pilgrim\'s Progress & Preacher', color: 'white', rank: 'memorial', quote: '«You have not lived today until you have done something for someone who can never repay you.»', scriptureRef: 'Hebrews 11:13' },
    { name: 'George Müller', name_it: 'George Müller', name_ro: 'George Müller', title: 'Man of Prayer and Living Faith', color: 'white', rank: 'memorial', quote: '«Faith does not operate in the realm of the possible. There is no glory for God in that which is humanly possible.»', scriptureRef: 'Mark 11:24' }
  ],
  ecumenical: [
    { name: 'St. Ignatius of Antioch', name_it: 'Sant\'Ignazio di Antiochia', name_ro: 'Sfântul Ignatie Teoforul', title: 'Disciple of John & Apostolic Martyr', color: 'red', rank: 'memorial', quote: '«I am God\'s wheat, and I shall be ground by the teeth of beasts that I may be found pure bread of Christ.»', scriptureRef: 'Philippians 1:21' },
    { name: 'St. Polycarp of Smyrna', name_it: 'San Policarpo di Smirne', name_ro: 'Sfântul Policarp al Smirnei', title: 'Bishop & Martyr', color: 'red', rank: 'memorial', quote: '«Eighty and six years have I served Him, and He never did me wrong; how then can I blaspheme my King and Savior?»', scriptureRef: 'Revelation 2:10' }
  ]
};

export function getSaintsForDate(date, confession = 'ecumenical') {
  if (!date) date = new Date();
  const m = date.getMonth() + 1;
  const d = date.getDate();
  const key = `${m}-${d}`;
  const normConf = (confession || 'ecumenical').toLowerCase();

  const dayFeasts = DAILY_SAINTS_CALENDAR[key] || [];

  // Filter feasts matching the active tradition
  const matched = dayFeasts.filter(s => {
    if (!s.traditions || s.traditions.includes('all')) return true;
    return s.traditions.includes(normConf);
  });

  if (matched.length > 0) {
    return matched.map(s => ({
      ...s,
      dateStr: `${m}/${d}`,
      colorMeta: LITURGICAL_COLORS[s.color] || LITURGICAL_COLORS.white
    }));
  }

  // Fallback tradition-specific patron for ordinary days
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

export function getLiturgicalColorMeta(colorKey) {
  return LITURGICAL_COLORS[colorKey] || LITURGICAL_COLORS.white;
}
