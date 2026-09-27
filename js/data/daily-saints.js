// Comprehensive Liturgical Daily Saints & Feasts Calendar for Aura Sacra
// Correlates feasts with liturgical colors:
// - White (Bianco): Feasts of the Lord, Confessors, Doctors, Holy Virgins, Pastors
// - Blue (Blu): Marian Feasts & The Blessed Virgin Mary (Theotokos)
// - Red (Rosso): Apostles, Evangelists & Holy Martyrs of Faith

export const LITURGICAL_COLORS = {
  white: {
    id: 'white',
    name: 'White',
    name_it: 'Bianco',
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
    name_la: 'Ruber',
    dotClass: 'bg-red-600 ring-1 ring-red-400',
    badgeClass: 'bg-red-600/20 text-red-400 border-red-500/60',
    borderClass: 'border-red-500/60',
    textClass: 'text-red-400 dark:text-red-300',
    symbol: '🔴',
    desc: 'Holy Apostles, Evangelists & Martyrs of the Christian Faith'
  }
};

// Fixed liturgical feasts mapping by Month (1-12) and Day (1-31)
export const DAILY_SAINTS_CALENDAR = {
  // ==========================================
  // JANUARY (1)
  // ==========================================
  '1-1': [
    {
      name: 'Solemnity of Mary, Mother of God',
      name_it: 'Solennità di Maria Santissima, Madre di Dio',
      title: 'Theotokos & Ark of the New Covenant',
      color: 'blue',
      rank: 'solemnity',
      quote: '«My soul magnifies the Lord, and my spirit rejoices in God my Savior.»',
      bio: 'Honors the divine maternity of the Blessed Virgin Mary, through whose fiat the Incarnate Word entered human history.',
      scriptureRef: 'Luke 1:46-48'
    },
    {
      name: 'St. Basil the Great & St. Gregory Nazianzen',
      name_it: 'San Basilio Magno e San Gregorio Nazianzeno',
      title: 'Cappadocian Fathers & Universal Doctors of the Church',
      color: 'white',
      rank: 'feast',
      quote: '«The bread which you hold back belongs to the hungry; the coat in your wardrobe belongs to the naked.»',
      bio: 'Great architects of Eastern monasticism, champions of Orthodox Trinitarian theology, and founders of hospice care for the sick.',
      scriptureRef: 'Matthew 25:35-40'
    }
  ],
  '1-2': [
    {
      name: 'St. Macarius the Great of Egypt',
      name_it: 'San Macario il Grande d\'Egitto',
      title: 'Father of the Desert & Spiritual Guide',
      color: 'white',
      rank: 'memorial',
      quote: '«There is no need to speak much in prayer; it is enough to stretch out one\'s hands and say: Lord, as Thou wilt, have mercy.»',
      bio: 'Disciple of St. Anthony who fled worldly acclaim into the desert of Scetis to pray unceasingly for all humankind.',
      scriptureRef: '1 Thessalonians 5:17'
    }
  ],
  '1-6': [
    {
      name: 'The Epiphany of the Lord',
      name_it: 'Epifania del Signore',
      title: 'Manifestation of Christ to the Nations',
      color: 'white',
      rank: 'solemnity',
      quote: '«Arise, shine; for your light has come, and the glory of the Lord has risen upon you.»',
      bio: 'The adoration of the Christ child by the Magi from the East, revealing the Light of the World to all gentiles.',
      scriptureRef: 'Matthew 2:1-12'
    }
  ],
  '1-15': [
    {
      name: 'St. Seraphim of Sarov',
      name_it: 'San Serafino di Sarov',
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
      name: 'St. Anthony the Great',
      name_it: 'Sant\'Antonio Abate',
      title: 'Father of All Monks & Victor over Temptation',
      color: 'white',
      rank: 'memorial',
      quote: '«I saw the snares that the enemy spreads for all the world, and I said groaning, "Who can get through from among them?" Then I heard a voice: "Humility."»',
      bio: 'Heard the Gospel call "Sell what you possess and give to the poor" and retreated into the wilderness to pioneer Christian monastic contemplation.',
      scriptureRef: 'Matthew 19:21'
    }
  ],
  '1-21': [
    {
      name: 'St. Agnes of Rome',
      name_it: 'Sant\'Agnese di Roma',
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
      name: 'Conversion of St. Paul the Apostle',
      name_it: 'Conversione di San Paolo Apostolo',
      title: 'Vessel of Election & Teacher of the Gentiles',
      color: 'white',
      rank: 'feast',
      quote: '«I live, yet not I, but Christ liveth in me.»',
      bio: 'Blinded by the blazing light of the Risen Lord on the road to Damascus, transformed from persecutor into the Church\'s greatest missionary.',
      scriptureRef: 'Galatians 2:20'
    }
  ],
  '1-28': [
    {
      name: 'St. Thomas Aquinas',
      name_it: 'San Tommaso d\'Aquino',
      title: 'Angelic Doctor & Common Doctor of the Church',
      color: 'white',
      rank: 'memorial',
      quote: '«I have written what I could; compared to what has been revealed to me, all my writings seem like straw.»',
      bio: 'Dominican theologian whose Summa Theologiae unified Christian faith with philosophical reason in holy reverence.',
      scriptureRef: '1 Corinthians 13:12'
    }
  ],

  // ==========================================
  // FEBRUARY (2)
  // ==========================================
  '2-2': [
    {
      name: 'Presentation of the Lord (Candlemas)',
      name_it: 'Presentazione del Signore (Candelora)',
      title: 'Encounter of the Lord & Light of the Gentiles',
      color: 'white',
      rank: 'feast',
      quote: '«Lord, now lettest thou thy servant depart in peace: for mine eyes have seen thy salvation, a light to lighten the Gentiles.»',
      bio: 'Christ is brought into the temple forty days after birth, greeted by aged Simeon and Anna as the long-awaited Redeemer.',
      scriptureRef: 'Luke 2:29-32'
    }
  ],
  '2-11': [
    {
      name: 'Our Lady of Lourdes',
      name_it: 'Beata Vergine Maria di Lourdes',
      title: 'Health of the Sick & Immaculate Conception',
      color: 'blue',
      rank: 'memorial',
      quote: '«I do not promise to make you happy in this world, but in the other. Pray for sinners.»',
      bio: 'Appeared eighteen times to the humble shepherdess St. Bernadette Soubirous at Massabielle, revealing herself as the Immaculate Conception.',
      scriptureRef: 'Luke 1:28'
    }
  ],
  '2-14': [
    {
      name: 'Sts. Cyril and Methodius',
      name_it: 'Santi Cirillo e Metodio',
      title: 'Apostles to the Slavs & Patrons of Europe',
      color: 'white',
      rank: 'feast',
      quote: '«Since the sun shines on all alike, every nation has the right to praise God in its own mother tongue.»',
      bio: 'Holy brothers from Thessalonica who translated the Holy Scriptures and the Byzantine Divine Liturgy into Old Church Slavonic.',
      scriptureRef: 'Psalm 117:1'
    }
  ],
  '2-22': [
    {
      name: 'Chair of St. Peter the Apostle',
      name_it: 'Cattedra di San Pietro Apostolo',
      title: 'Sign of Apostolic Unity & Pastoral Shepherd',
      color: 'white',
      rank: 'feast',
      quote: '«Thou art the Christ, the Son of the living God. And I say also unto thee, That thou art Peter, and upon this rock I will build my church.»',
      bio: 'Celebrates the pastoral ministry and petrine authority instituted by Christ to strengthen the brethren in apostolic faith.',
      scriptureRef: 'Matthew 16:16-18'
    }
  ],

  // ==========================================
  // MARCH (3)
  // ==========================================
  '3-17': [
    {
      name: 'St. Patrick of Ireland',
      name_it: 'San Patrizio d\'Irlanda',
      title: 'Apostle of Ireland & Humble Missionary Bishop',
      color: 'white',
      rank: 'feast',
      quote: '«Christ with me, Christ before me, Christ behind me, Christ in me, Christ beneath me, Christ above me.»',
      bio: 'Enslaved as a youth, returned to Ireland with holy burning zeal to baptize thousands and plant the monastic faith across the Emerald Isle.',
      scriptureRef: 'Colossians 3:11'
    }
  ],
  '3-19': [
    {
      name: 'Solemnity of St. Joseph, Spouse of the B.V.M.',
      name_it: 'Solennità di San Giuseppe, Sposo della B.V.M.',
      title: 'Patron of the Universal Church & Silent Guardian',
      color: 'white',
      rank: 'solemnity',
      quote: '«A just man who spoke no words recorded in Scripture, yet obeyed God in every silence of the night.»',
      bio: 'Chaste guardian of the Holy Family, righteous workman of Nazareth who protected the Infant Savior from Herod\'s fury.',
      scriptureRef: 'Matthew 1:19-24'
    }
  ],
  '3-21': [
    {
      name: 'St. Benedict of Nursia',
      name_it: 'San Benedetto da Norcia',
      title: 'Father of Western Monasticism & Patron of Europe',
      color: 'white',
      rank: 'feast',
      quote: '«Listen, O my son, to the precepts of the master, and incline the ear of your heart. Prefer nothing to the love of Christ.»',
      bio: 'Author of the Holy Rule of peace and moderation: "Ora et Labora" (Pray and Work), which laid the bedrock of Christian civilization.',
      scriptureRef: '1 Peter 5:5-7'
    }
  ],
  '3-25': [
    {
      name: 'The Annunciation of the Lord',
      name_it: 'Annunciazione del Signore',
      title: 'The Incarnation of the Word & Marian Fiat',
      color: 'blue',
      rank: 'solemnity',
      quote: '«Behold the handmaid of the Lord; be it unto me according to thy word.»',
      bio: 'The Archangel Gabriel announces the Conception of the Son of God in Mary\'s womb through the overshadowing power of the Holy Spirit.',
      scriptureRef: 'Luke 1:26-38'
    }
  ],

  // ==========================================
  // APRIL (4)
  // ==========================================
  '4-9': [
    {
      name: 'Dietrich Bonhoeffer',
      name_it: 'Dietrich Bonhoeffer',
      title: 'Martyr of Faith & Preacher of Costly Grace',
      color: 'red',
      rank: 'memorial',
      quote: '«Costly grace is the gospel which must be sought again and again, the gift which must be asked for, the door at which a man must knock.»',
      bio: 'Lutheran pastor who opposed Nazi tyranny and totalitarian idolatry unto martyrdom, hanged in Flossenbürg on April 9, 1945.',
      scriptureRef: 'Luke 9:23'
    }
  ],
  '4-23': [
    {
      name: 'St. George the Great-Martyr',
      name_it: 'San Giorgio Megalomartire',
      title: 'Trophy-Bearer & Defender of Faith',
      color: 'red',
      rank: 'memorial',
      quote: '«My Lord Jesus Christ is my strength; neither fire nor sword can separate me from His holy love.»',
      bio: 'Roman military officer martyred under Diocletian for fearlessly proclaiming Christ and tearing down imperial pagan edicts.',
      scriptureRef: 'Romans 8:35-39'
    }
  ],
  '4-25': [
    {
      name: 'St. Mark the Evangelist',
      name_it: 'San Marco Evangelista',
      title: 'Disciple of Peter & Author of the Second Gospel',
      color: 'red',
      rank: 'feast',
      quote: '«The beginning of the gospel of Jesus Christ, the Son of God.»',
      bio: 'Recorded St. Peter\'s apostolic preaching and founded the ancient Apostolic Church of Alexandria.',
      scriptureRef: 'Mark 1:1'
    }
  ],
  '4-29': [
    {
      name: 'St. Catherine of Siena',
      name_it: 'Santa Caterina da Siena',
      title: 'Virgin, Doctor of the Church & Patroness of Europe',
      color: 'white',
      rank: 'feast',
      quote: '«Be who God meant you to be and you will set the whole world on fire.»',
      bio: 'Dominican tertiary mystic whose Dialogues and courageous letters brought the Pope back from Avignon to Rome.',
      scriptureRef: 'Romans 12:1-2'
    }
  ],

  // ==========================================
  // MAY (5)
  // ==========================================
  '5-1': [
    {
      name: 'St. Joseph the Worker',
      name_it: 'San Giuseppe Lavoratore',
      title: 'Exemplar of Dignity of Labor',
      color: 'white',
      rank: 'memorial',
      quote: '«Whatever you do, work heartily, as for the Lord and not for men.»',
      bio: 'Carpenter of Nazareth whose daily labor sanctified human work as a sacred participation in God\'s creative providence.',
      scriptureRef: 'Colossians 3:23-24'
    }
  ],
  '5-2': [
    {
      name: 'St. Athanasius of Alexandria',
      name_it: 'Sant\'Atanasio di Alessandria',
      title: 'Champion of Nicea & Pillar of Orthodoxy',
      color: 'white',
      rank: 'memorial',
      quote: '«The Son of God became man that we might become divine by grace.»',
      bio: 'Defended the consubstantial divinity of Jesus Christ against the Arian heresy through five harsh exiles.',
      scriptureRef: 'John 1:1-14'
    }
  ],
  '5-13': [
    {
      name: 'Our Lady of Fatima',
      name_it: 'Beata Vergine Maria di Fatima',
      title: 'Queen of the Rosary & Refuge of Sinners',
      color: 'blue',
      rank: 'memorial',
      quote: '«Pray the Rosary every day to obtain peace for the world and the conversion of hearts.»',
      bio: 'Appeared in 1917 to three shepherd children—Lucia, Francisco, and Jacinta—calling the world to prayer, penance, and consecration.',
      scriptureRef: '1 Thessalonians 5:16-18'
    }
  ],
  '5-14': [
    {
      name: 'St. Matthias the Apostle',
      name_it: 'San Mattia Apostolo',
      title: 'Chosen Witness of the Resurrection',
      color: 'red',
      rank: 'feast',
      quote: '«Chosen by prayer and the lot of the Apostles to complete the Twelve after the fall of Judas.»',
      bio: 'Follower of Jesus from the baptism of John until the Ascension; martyred while proclaiming the Gospel in Ethiopia and Judea.',
      scriptureRef: 'Acts 1:21-26'
    }
  ],
  '5-26': [
    {
      name: 'St. Philip Neri',
      name_it: 'San Filippo Neri',
      title: 'Apostle of Rome & Prophet of Spiritual Joy',
      color: 'white',
      rank: 'memorial',
      quote: '«A joyful heart is more easily made perfect than a downcast one. Cheerfulness strengthens the heart and makes us persevere.»',
      bio: 'Founder of the Oratory, re-evangelized Renaissance Rome with divine love, gentle humor, and tireless confession.',
      scriptureRef: 'Philippians 4:4'
    }
  ],
  '5-31': [
    {
      name: 'The Visitation of the Blessed Virgin Mary',
      name_it: 'Visitazione della Beata Vergine Maria',
      title: 'Ark of the Covenant visiting Elizabeth',
      color: 'blue',
      rank: 'feast',
      quote: '«Blessed art thou among women, and blessed is the fruit of thy womb. And whence is this to me, that the mother of my Lord should come to me?»',
      bio: 'Mary hastens to the hill country of Judah to serve her aged cousin Elizabeth, prompting John the Baptist to leap in the womb.',
      scriptureRef: 'Luke 1:39-56'
    }
  ],

  // ==========================================
  // JUNE (6)
  // ==========================================
  '6-1': [
    {
      name: 'St. Justin Martyr',
      name_it: 'San Giustino Martire',
      title: 'Philosopher, Apologist & Martyr',
      color: 'red',
      rank: 'memorial',
      quote: '«We desire nothing else than to suffer for the sake of our Lord Jesus Christ, for this will give us salvation and confidence before the awesome tribunal.»',
      bio: 'One of the earliest Christian philosophers and apologists, beheaded in Rome in 165 AD for refusing to offer pagan sacrifice.',
      scriptureRef: '1 Peter 3:15'
    }
  ],
  '6-11': [
    {
      name: 'St. Barnabas the Apostle',
      name_it: 'San Barnaba Apostolo',
      title: 'Son of Encouragement & Missionary Companion',
      color: 'red',
      rank: 'feast',
      quote: '«A good man, full of the Holy Spirit and of faith: and much people was added unto the Lord.»',
      bio: 'Levite from Cyprus who sold his estate to lay the proceeds at the Apostles\' feet; introduced Paul to the Church and died a martyr in Salamis.',
      scriptureRef: 'Acts 11:24'
    }
  ],
  '6-13': [
    {
      name: 'St. Anthony of Padua',
      name_it: 'Sant\'Antonio di Padova',
      title: 'Evangelical Doctor & Wonderworker of the Poor',
      color: 'white',
      rank: 'feast',
      quote: '«Actions speak louder than words; let your words teach and your actions speak.»',
      bio: 'Franciscan preacher whose sermons converted countless souls and whose miraculous care for the poor remains legendary.',
      scriptureRef: 'James 1:22'
    }
  ],
  '6-24': [
    {
      name: 'The Nativity of St. John the Baptist',
      name_it: 'Natività di San Giovanni Battista',
      title: 'Forerunner of the Lord & Voice in the Wilderness',
      color: 'white',
      rank: 'solemnity',
      quote: '«He must increase, but I must decrease.»',
      bio: 'The greatest born of women, who sanctified by Christ while yet in Elizabeth\'s womb, prepared the way for the Lamb of God.',
      scriptureRef: 'John 3:30'
    }
  ],
  '6-29': [
    {
      name: 'Saints Peter and Paul, Apostles',
      name_it: 'Santi Pietro e Paolo, Apostoli',
      title: 'Princes of the Apostles & Pillars of the Church',
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
  '7-3': [
    {
      name: 'St. Thomas the Apostle',
      name_it: 'San Tommaso Apostolo',
      title: 'Witness of the Wounds & Apostle of India',
      color: 'red',
      rank: 'feast',
      quote: '«My Lord and my God!»',
      bio: 'Touched the glorious wounds of the Risen Christ, then traveled as missionary to Persia and India, dying pierced with spears.',
      scriptureRef: 'John 20:28'
    }
  ],
  '7-11': [
    {
      name: 'St. Benedict of Nursia (Solemn Feast)',
      name_it: 'San Benedetto Abate',
      title: 'Patron of Europe & Patriarch of Monasticism',
      color: 'white',
      rank: 'feast',
      quote: '«Idleness is the enemy of the soul. Therefore, let the brethren be occupied at specified times in manual labor, and at other fixed hours in holy reading.»',
      bio: 'Sanctified the West through monastic prayer, scripture copying, and spiritual fatherhood.',
      scriptureRef: '1 Thessalonians 4:11-12'
    }
  ],
  '7-16': [
    {
      name: 'Our Lady of Mount Carmel',
      name_it: 'Beata Vergine Maria del Monte Carmelo',
      title: 'Mother and Splendor of Carmel & Brown Scapular',
      color: 'blue',
      rank: 'memorial',
      quote: '«Receive, my beloved son, this Scapular of your Order: whoever dies clothed in this garment shall not suffer eternal fire.»',
      bio: 'Patroness of the Carmelite contemplative order, symbol of Marian protection and continuous interior prayer.',
      scriptureRef: 'Isaiah 35:2'
    }
  ],
  '7-22': [
    {
      name: 'St. Mary Magdalene',
      name_it: 'Santa Maria Maddalena',
      title: 'Apostle to the Apostles & Herald of the Resurrection',
      color: 'white',
      rank: 'feast',
      quote: '«I have seen the Lord!»',
      bio: 'Delivered by Christ from seven demons, stood courageously at the foot of the Cross, and was the first to announce the Resurrection.',
      scriptureRef: 'John 20:18'
    }
  ],
  '7-25': [
    {
      name: 'St. James the Greater, Apostle',
      name_it: 'San Giacomo il Maggiore, Apostolo',
      title: 'First Apostle to Suffer Martyrdom & Patron of Pilgrims',
      color: 'red',
      rank: 'feast',
      quote: '«Drank the chalice of the Lord and was slain with the sword by King Herod Agrippa.»',
      bio: 'Son of Zebedee, witness of the Transfiguration and the Agony in Gethsemane; his tomb in Santiago de Compostela inspires millions.',
      scriptureRef: 'Acts 12:1-2'
    }
  ],
  '7-26': [
    {
      name: 'Sts. Joachim and Anne',
      name_it: 'Santi Gioacchino e Anna',
      title: 'Parents of the Blessed Virgin Mary & Grandparents of Jesus',
      color: 'white',
      rank: 'memorial',
      quote: '«Blessed is the womb that bore her who bore the Savior of mankind.»',
      bio: 'Pious, faithful couple of the lineage of David whose patient prayer and trust in God bore fruit in the birth of the Virgin Mary.',
      scriptureRef: 'Psalm 128:1-4'
    }
  ],
  '7-31': [
    {
      name: 'St. Ignatius of Loyola',
      name_it: 'Sant\'Ignazio di Loyola',
      title: 'Founder of the Society of Jesus & Spiritual Exercises',
      color: 'white',
      rank: 'memorial',
      quote: '«Ad Majorem Dei Gloriam — For the greater glory of God.»',
      bio: 'Spanish knight who converted while convalescing, author of the Spiritual Exercises and founder of the Jesuits.',
      scriptureRef: '1 Corinthians 10:31'
    }
  ],

  // ==========================================
  // AUGUST (8)
  // ==========================================
  '8-6': [
    {
      name: 'The Transfiguration of the Lord',
      name_it: 'Trasfigurazione del Signore',
      title: 'The Uncreated Light of Mount Tabor',
      color: 'white',
      rank: 'feast',
      quote: '«This is my beloved Son, in whom I am well pleased; hear ye him.»',
      bio: 'Jesus reveals His uncreated divine glory on Mount Tabor to Peter, James, and John, with Moses and Elijah conversing with Him.',
      scriptureRef: 'Matthew 17:1-9'
    }
  ],
  '8-8': [
    {
      name: 'St. Dominic de Guzmán',
      name_it: 'San Domenico di Guzmán',
      title: 'Founder of the Order of Preachers (Dominicans)',
      color: 'white',
      rank: 'memorial',
      quote: '«Contemplare et contemplata aliis tradere — To contemplate and to share the fruits of contemplation with others.»',
      bio: 'Spanish priest whose love for truth and holy preaching conquered heresy and fostered evangelical poverty and study.',
      scriptureRef: '2 Timothy 4:2'
    }
  ],
  '8-10': [
    {
      name: 'St. Lawrence, Deacon and Martyr',
      name_it: 'San Lorenzo, Diacono e Martire',
      title: 'Keeper of Church Treasures & Hero of Roman Charity',
      color: 'red',
      rank: 'feast',
      quote: '«Behold the treasures of the Church: the poor, the crippled, the blind, and the sick in whom Christ lives.»',
      bio: 'Deacon of Rome under Pope Sixtus II, roasted upon an iron gridiron during the Valerian persecution with serene joy and humor.',
      scriptureRef: '2 Corinthians 9:6-9'
    }
  ],
  '8-14': [
    {
      name: 'St. Maximilian Maria Kolbe',
      name_it: 'San Massimiliano Maria Kolbe',
      title: 'Knight of the Immaculata & Martyr of Auschwitz',
      color: 'red',
      rank: 'memorial',
      quote: '«Greater love hath no man than this, that a man lay down his life for his friends.»',
      bio: 'Franciscan priest who volunteered to die in the starvation bunker of Auschwitz in place of a stranger with a wife and children.',
      scriptureRef: 'John 15:13'
    }
  ],
  '8-15': [
    {
      name: 'The Assumption / Dormition of the B.V.M.',
      name_it: 'Assunzione della Beata Vergine Maria',
      title: 'Queen Assumed into Heaven & Ark of Immortality',
      color: 'blue',
      rank: 'solemnity',
      quote: '«And there appeared a great wonder in heaven; a woman clothed with the sun, and the moon under her feet, and upon her head a crown of twelve stars.»',
      bio: 'Having completed the course of her earthly life, the Mother of God was assumed body and soul into heavenly glory.',
      scriptureRef: 'Revelation 12:1'
    }
  ],
  '8-20': [
    {
      name: 'St. Bernard of Clairvaux',
      name_it: 'San Bernardo di Chiaravalle',
      title: 'Mellifluous Doctor & Cistercian Reformer',
      color: 'white',
      rank: 'memorial',
      quote: '«The measure of loving God is to love Him without measure.»',
      bio: 'Reformer of monastic life, mystic of divine love, and ardent champion of devotion to the Mother of God.',
      scriptureRef: 'Ephesians 3:17-19'
    }
  ],
  '8-24': [
    {
      name: 'St. Bartholomew the Apostle (Nathanael)',
      name_it: 'San Bartolomeo Apostolo',
      title: 'Israelite without Guile & Missionary Martyr',
      color: 'red',
      rank: 'feast',
      quote: '«Behold an Israelite indeed, in whom is no guile! Rabbi, thou art the Son of God; thou art the King of Israel.»',
      bio: 'Preached the Gospel in India, Mesopotamia, and Armenia, where he suffered martyrdom by being flayed alive for Christ.',
      scriptureRef: 'John 1:47-49'
    }
  ],
  '8-27': [
    {
      name: 'St. Monica of Tagaste',
      name_it: 'Santa Monica',
      title: 'Exemplar of Christian Mothers & Patient Prayer',
      color: 'white',
      rank: 'memorial',
      quote: '«It is impossible that the son of so many tears should perish.»',
      bio: 'Mother of St. Augustine whose thirty years of tearful, persevering prayer won the conversion of both her pagan husband and wayward son.',
      scriptureRef: 'Luke 18:1-8'
    }
  ],
  '8-28': [
    {
      name: 'St. Augustine of Hippo',
      name_it: 'Sant\'Agostino d\'Ippona',
      title: 'Doctor of Grace & Western Church Father',
      color: 'white',
      rank: 'feast',
      quote: '«You have made us for yourself, O Lord, and our heart is restless until it rests in you. Late have I loved you, O Beauty ever ancient, ever new!»',
      bio: 'Bishop of Hippo, philosophical theologian whose Confessions and City of God shaped the theological architecture of Western Christendom.',
      scriptureRef: 'Psalm 63:1'
    }
  ],
  '8-29': [
    {
      name: 'The Martyrdom of St. John the Baptist',
      name_it: 'Martirio di San Giovanni Battista (Decollazione)',
      title: 'Hero of Moral Truth & Righteous Prophet',
      color: 'red',
      rank: 'memorial',
      quote: '«It is not lawful for thee to have thy brother\'s wife.»',
      bio: 'Beheaded in Machaerus dungeon by order of Herod Antipas for defending the sanctity of God\'s moral commandments without fear.',
      scriptureRef: 'Mark 6:17-29'
    }
  ],

  // ==========================================
  // SEPTEMBER (9)
  // ==========================================
  '9-3': [
    {
      name: 'St. Gregory the Great, Pope and Doctor',
      name_it: 'San Gregorio Magno, Papa e Dottore',
      title: 'Servant of the Servants of God (Servus Servorum Dei)',
      color: 'white',
      rank: 'feast',
      quote: '«The proof of love is in the works. Where love exists, it works great things. But when it ceases to act, it ceases to exist.»',
      bio: 'Benedictine monk who became Pope, reformed the sacred liturgy, sent St. Augustine to evangelize England, and authored the Dialogues.',
      scriptureRef: '1 John 3:18'
    }
  ],
  '9-8': [
    {
      name: 'The Nativity of the Blessed Virgin Mary',
      name_it: 'Natività della Beata Vergine Maria',
      title: 'Morning Star announcing the Sun of Justice',
      color: 'blue',
      rank: 'feast',
      quote: '«Thy Nativity, O Virgin Mother of God, has proclaimed joy to all the universe, for from thee arose the Sun of Justice, Christ our God.»',
      bio: 'The dawn of human redemption begins with the holy birth of Mary, chosen from eternity to be the Mother of the Redeemer.',
      scriptureRef: 'Micah 5:2'
    }
  ],
  '9-13': [
    {
      name: 'St. John Chrysostom',
      name_it: 'San Giovanni Crisostomo',
      title: 'Golden-Mouthed Patriarch of Constantinople',
      color: 'white',
      rank: 'feast',
      quote: '«Prayer is the root, the fountain, the mother of countless blessings. If you cannot find Christ in the beggar at the church door, you will not find Him in the chalice.»',
      bio: 'Courageous preacher of righteousness, defender of the poor against imperial corruption, author of the Byzantine Divine Liturgy.',
      scriptureRef: 'Ephesians 6:18'
    }
  ],
  '9-14': [
    {
      name: 'The Exaltation of the Holy Cross',
      name_it: 'Esaltazione della Santa Croce',
      title: 'Trophy of Victory & Tree of Life',
      color: 'red',
      rank: 'feast',
      quote: '«We adore Thee, O Christ, and we bless Thee, because by Thy Holy Cross Thou hast redeemed the world.»',
      bio: 'Celebrates the recovery and exaltation of the True Cross of Christ, the divine sign of triumph over sin, death, and hell.',
      scriptureRef: 'Galatians 6:14'
    }
  ],
  '9-15': [
    {
      name: 'Our Lady of Sorrows (Mater Dolorosa)',
      name_it: 'Beata Vergine Maria Addolorata',
      title: 'Queen of Martyrs & Mother standing by the Cross',
      color: 'blue',
      rank: 'memorial',
      quote: '«Yea, a sword shall pierce through thy own soul also, that the thoughts of many hearts may be revealed.»',
      bio: 'Commemorates the Seven Sorrows of Mary, who shared intimately in the Passion of her Divine Son at Calvary with boundless faith.',
      scriptureRef: 'John 19:25-27'
    }
  ],
  '9-21': [
    {
      name: 'St. Matthew, Apostle and Evangelist',
      name_it: 'San Matteo, Apostolo ed Evangelista',
      title: 'Tax Collector Called by Grace & Gospel Writer',
      color: 'red',
      rank: 'feast',
      quote: '«Jesus saw a man named Matthew sitting at the receipt of custom: and he saith unto him, Follow me. And he arose, and followed him.»',
      bio: 'Left his wealth and toll collector\'s desk instantly at the Master\'s call; wrote the Gospel for the Jewish people and died a martyr.',
      scriptureRef: 'Matthew 9:9-13'
    }
  ],
  '9-23': [
    {
      name: 'St. Pio of Pietrelcina (Padre Pio)',
      name_it: 'San Pio da Pietrelcina',
      title: 'Capuchin Stigmatist & Apostle of Confession',
      color: 'white',
      rank: 'memorial',
      quote: '«Pray, hope, and don\'t worry. Worry is useless. God is merciful and will hear your prayer.»',
      bio: 'Franciscan friar who bore the wounds of Christ (stigmata) for fifty years, spending up to eighteen hours a day reconciling sinners in confession.',
      scriptureRef: 'Galatians 6:17'
    }
  ],
  '9-27': [
    {
      name: 'St. Vincent de Paul',
      name_it: 'San Vincenzo de\' Paoli',
      title: 'Apostle of Charity & Father of the Poor',
      color: 'white',
      rank: 'memorial',
      quote: '«Charity is the cement which binds communities to God and persons to one another... You will find out that charity is a heavy burden, but Christ makes it sweet.»',
      bio: 'French priest who devoted his life to serving galley slaves, orphans, and peasants, founding the Congregation of the Mission (Vincentians) and Daughters of Charity.',
      scriptureRef: 'James 2:14-17'
    }
  ],
  '9-28': [
    {
      name: 'St. Wenceslaus & St. Lawrence Ruiz and Companions',
      name_it: 'San Venceslao e San Lorenzo Ruiz e Compagni',
      title: 'Good King of Bohemia & First Filipino Martyr',
      color: 'red',
      rank: 'memorial',
      quote: '«If I had a thousand lives, I would offer all of them to God.»',
      bio: 'St. Wenceslaus ruled in peace and charity before being murdered by his brother; St. Lawrence Ruiz was martyred in Nagasaki, refusing to recant his Catholic faith.',
      scriptureRef: 'Matthew 10:32-33'
    }
  ],
  '9-29': [
    {
      name: 'Saints Michael, Gabriel, and Raphael, Archangels',
      name_it: 'Santi Michele, Gabriele e Raffaele, Arcangeli',
      title: 'Captains of the Heavenly Host & Messengers of God',
      color: 'white',
      rank: 'feast',
      quote: '«Quis ut Deus? — Who is like unto God! St. Michael defend us in battle; be our safeguard against the wickedness and snares of the devil.»',
      bio: 'Michael vanquished Lucifer; Gabriel brought the tidings of the Incarnation; Raphael brings healing and guidance to the faithful.',
      scriptureRef: 'Revelation 12:7-9'
    }
  ],
  '9-30': [
    {
      name: 'St. Jerome, Priest and Doctor of the Church',
      name_it: 'San Girolamo, Sacerdote e Dottore',
      title: 'Translator of the Holy Scriptures (Vulgate)',
      color: 'white',
      rank: 'memorial',
      quote: '«Ignorance of Scripture is ignorance of Christ.»',
      bio: 'Hermit in the caves of Bethlehem who dedicated three decades to translating the Hebrew and Greek Scriptures into Latin (the Vulgate).',
      scriptureRef: '2 Timothy 3:16-17'
    }
  ],

  // ==========================================
  // OCTOBER (10)
  // ==========================================
  '10-1': [
    {
      name: 'St. Thérèse of the Child Jesus',
      name_it: 'Santa Teresa di Gesù Bambino (di Lisieux)',
      title: 'The Little Flower & Doctor of Spiritual Childhood',
      color: 'white',
      rank: 'memorial',
      quote: '«My vocation is love! In the heart of the Church, my Mother, I will be love.»',
      bio: 'Carmelite nun who showed that sanctity is achieved not by grand exploits, but by doing the smallest actions with infinite love.',
      scriptureRef: 'Matthew 18:3'
    }
  ],
  '10-2': [
    {
      name: 'The Holy Guardian Angels',
      name_it: 'Santi Angeli Custodi',
      title: 'Protectors and Companions of Human Souls',
      color: 'white',
      rank: 'memorial',
      quote: '«Angel of God, my guardian dear, to whom God\'s love commits me here, ever this day be at my side, to light and guard, to rule and guide.»',
      bio: 'Honors the loving providence of God who assigns to each human soul an angelic protector to lead us safely to eternal life.',
      scriptureRef: 'Psalm 91:11-12'
    }
  ],
  '10-4': [
    {
      name: 'St. Francis of Assisi',
      name_it: 'San Francesco d\'Assisi',
      title: 'Poverello of Assisi & Herald of Universal Peace',
      color: 'white',
      rank: 'feast',
      quote: '«Lord, make me an instrument of your peace: where there is hatred, let me sow love; where there is injury, pardon.»',
      bio: 'Renounced his family fortune to marry "Lady Poverty", received the sacred stigmata on Mount La Verna, and renewed the universal Church.',
      scriptureRef: 'Galatians 6:14'
    }
  ],
  '10-7': [
    {
      name: 'Our Lady of the Holy Rosary',
      name_it: 'Beata Vergine Maria del Rosario',
      title: 'Victress of Lepanto & Queen of Peace',
      color: 'blue',
      rank: 'memorial',
      quote: '«Contemplate the face of Christ with Mary through the mysteries of the Holy Rosary.»',
      bio: 'Instituted in thanksgiving for the historic deliverance of Christendom at the Battle of Lepanto (1571) through the recitation of the Rosary.',
      scriptureRef: 'Luke 2:19'
    }
  ],
  '10-15': [
    {
      name: 'St. Teresa of Jesus (of Avila)',
      name_it: 'Santa Teresa d\'Avila',
      title: 'Reformer of Carmel & Doctor of Interior Prayer',
      color: 'white',
      rank: 'memorial',
      quote: '«Let nothing disturb you, let nothing frighten you. All things pass; God never changes. Patience obtains all things. Whoever has God lacks nothing: God alone suffices.»',
      bio: 'Mystic and reformer of the Discalced Carmelites, author of The Interior Castle and The Way of Perfection.',
      scriptureRef: 'Psalm 46:10'
    }
  ],
  '10-18': [
    {
      name: 'St. Luke the Evangelist',
      name_it: 'San Luca Evangelista',
      title: 'Physician, Companion of Paul & Scribe of Mercy',
      color: 'red',
      rank: 'feast',
      quote: '«For the Son of man is come to seek and to save that which was lost.»',
      bio: 'Greek physician who authored the Third Gospel and the Acts of the Apostles, emphasizing Christ\'s compassion for outcasts and sinners.',
      scriptureRef: 'Luke 19:10'
    }
  ],
  '10-22': [
    {
      name: 'St. John Paul II, Pope',
      name_it: 'San Giovanni Paolo II, Papa',
      title: 'Apostle of Divine Mercy & Youth',
      color: 'white',
      rank: 'memorial',
      quote: '«Do not be afraid! Open wide the doors for Christ! Be not afraid of what is true, good and holy.»',
      bio: 'Polish pope who defended human dignity, brought down totalitarian communism in Europe, and proclaimed the message of Divine Mercy.',
      scriptureRef: 'John 14:27'
    }
  ],
  '10-28': [
    {
      name: 'Saints Simon and Jude, Apostles',
      name_it: 'Santi Simone e Giuda, Apostoli',
      title: 'Zealot for God & Patron of Desperate Cases',
      color: 'red',
      rank: 'feast',
      quote: '«Beloved, building up yourselves on your most holy faith, praying in the Holy Ghost, keep yourselves in the love of God.»',
      bio: 'Preached the Gospel in Persia and Mesopotamia, where they suffered martyrdom together for confessing Christ.',
      scriptureRef: 'Jude 1:20-21'
    }
  ],
  '10-31': [
    {
      name: 'Martin Luther & Eve of All Saints',
      name_it: 'Martin Lutero e Vigilia di Tutti i Santi',
      title: 'Reformer & Translator of the Sacred Scriptures',
      color: 'white',
      rank: 'memorial',
      quote: '«My conscience is captive to the Word of God. Here I stand; I can do no other. God help me. The righteous shall live by faith.»',
      bio: 'Restored the proclamation of justification by grace through faith alone; translated the Holy Bible into the vernacular German.',
      scriptureRef: 'Romans 1:17'
    }
  ],

  // ==========================================
  // NOVEMBER (11)
  // ==========================================
  '11-1': [
    {
      name: 'Solemnity of All Saints',
      name_it: 'Solennità di Tutti i Santi',
      title: 'The Triumphant Heavenly Multitude',
      color: 'white',
      rank: 'solemnity',
      quote: '«After this I beheld, and, lo, a great multitude, which no man could number, of all nations, and kindreds, and people, and tongues, stood before the throne, and before the Lamb.»',
      bio: 'Celebrates all the holy men and women who dwell in the radiant glory of God, known and unknown, our heavenly intercessors.',
      scriptureRef: 'Revelation 7:9-10'
    }
  ],
  '11-2': [
    {
      name: 'The Commemoration of All the Faithful Departed (All Souls)',
      name_it: 'Commemorazione di Tutti i Fedeli Defunti',
      title: 'Suffrages and Prayers for Holy Souls',
      color: 'white',
      rank: 'memorial',
      quote: '«It is therefore a holy and wholesome thought to pray for the dead, that they may be loosed from sins.»',
      bio: 'The Church Militant offers prayers, masses, and alms for the purification of souls awaiting the full vision of God in heaven.',
      scriptureRef: '2 Maccabees 12:46'
    }
  ],
  '11-4': [
    {
      name: 'St. Charles Borromeo',
      name_it: 'San Carlo Borromeo',
      title: 'Archbishop of Milan & Champion of Trent',
      color: 'white',
      rank: 'memorial',
      quote: '«Be sure that you first preach by the way you live. If you do not, people will notice that you say one thing, but do another.»',
      bio: 'Cardinall-archbishop of Milan who implemented the reforms of the Council of Trent and tirelessly nursed the sick during the plague.',
      scriptureRef: 'Titus 2:7-8'
    }
  ],
  '11-10': [
    {
      name: 'St. Leo the Great, Pope and Doctor',
      name_it: 'San Leone Magno, Papa e Dottore',
      title: 'Defender of the Two Natures of Christ',
      color: 'white',
      rank: 'memorial',
      quote: '«Christian, recognize your dignity! You share in God\'s divine nature; do not return to your former degraded condition.»',
      bio: 'Authored the Tome of Leo at the Council of Chalcedon; persuaded Attila the Hun to spare the city of Rome.',
      scriptureRef: '2 Peter 1:4'
    }
  ],
  '11-11': [
    {
      name: 'St. Martin of Tours',
      name_it: 'San Martino di Tours',
      title: 'Soldier of Christ & Bishop of Compassion',
      color: 'white',
      rank: 'memorial',
      quote: '«Martin, yet a catechumen, has clothed Me with this cloak.»',
      bio: 'Roman cavalry officer who cut his warm military cloak in two to share with a freezing beggar, seeing Christ in him.',
      scriptureRef: 'Matthew 25:40'
    }
  ],
  '11-17': [
    {
      name: 'St. Elizabeth of Hungary',
      name_it: 'Sant\'Elisabetta d\'Ungheria',
      title: 'Princess of Charity & Patroness of Catholic Charities',
      color: 'white',
      rank: 'memorial',
      quote: '«We must make people happy, not sad. To serve the poor is to touch the wounds of Christ.»',
      bio: 'Royal princess who built hospitals, cared for lepers with her own hands, and embraced Franciscan poverty after her husband\'s death.',
      scriptureRef: 'Proverbs 31:20'
    }
  ],
  '11-21': [
    {
      name: 'The Presentation of the Blessed Virgin Mary',
      name_it: 'Presentazione della Beata Vergine Maria',
      title: 'Consecration of the Ark of God in the Temple',
      color: 'blue',
      rank: 'memorial',
      quote: '«Consecrated wholly to the Lord from childhood, a pure and spotless sanctuary for the Divine Son.»',
      bio: 'According to holy tradition, Mary was dedicated by Joachim and Anne in the Jerusalem Temple to live solely in contemplation of God.',
      scriptureRef: 'Psalm 45:10-11'
    }
  ],
  '11-22': [
    {
      name: 'St. Cecilia, Virgin and Martyr',
      name_it: 'Santa Cecilia, Vergine e Martire',
      title: 'Patroness of Musicians & Heavenly Melodies',
      color: 'red',
      rank: 'memorial',
      quote: '«While instruments played at her wedding, Cecilia sang in her heart unto God alone: Keep my heart and body spotless, that I be not put to shame.»',
      bio: 'Roman noblewoman who converted her husband Valerian and surrendered her life under persecution, singing praise with her dying breath.',
      scriptureRef: 'Colossians 3:16'
    },
    {
      name: 'C.S. Lewis',
      name_it: 'C.S. Lewis',
      title: 'Defender of Mere Christianity & Voice of Hope',
      color: 'white',
      rank: 'memorial',
      quote: '«I believe in Christianity as I believe that the sun has risen: not only because I see it, but because by it I see everything else.»',
      bio: 'Oxford scholar whose Mere Christianity and Screwtape Letters brought millions of modern intellectuals to faith in Christ.',
      scriptureRef: 'John 1:9'
    }
  ],
  '11-30': [
    {
      name: 'St. Andrew the Apostle',
      name_it: 'Sant\'Andrea Apostolo',
      title: 'The First-Called (Protokletos) & Patron of the East',
      color: 'red',
      rank: 'feast',
      quote: '«We have found the Messiah! O good cross, so long desired, receive the disciple of Him Who hung upon thee.»',
      bio: 'Brother of Simon Peter, first disciple to follow Jesus; preached in Greece and was crucified on an X-shaped cross at Patras.',
      scriptureRef: 'John 1:40-42'
    }
  ],

  // ==========================================
  // DECEMBER (12)
  // ==========================================
  '12-3': [
    {
      name: 'St. Francis Xavier',
      name_it: 'San Francesco Saverio',
      title: 'Apostle of the Indies and Japan & Patron of Missions',
      color: 'white',
      rank: 'memorial',
      quote: '«What does it profit a man if he gain the whole world and lose his own soul?»',
      bio: 'Jesuit missionary who baptized hundreds of thousands across India, the Moluccas, and Japan, dying within sight of China.',
      scriptureRef: 'Mark 16:15'
    }
  ],
  '12-6': [
    {
      name: 'St. Nicholas of Myra',
      name_it: 'San Nicola di Myra (di Bari)',
      title: 'Wonderworker of Myra & Defender of the Needy',
      color: 'white',
      rank: 'memorial',
      quote: '«The best way to store up wealth is to give it to the hands of the poor for the love of Christ.»',
      bio: 'Bishop of Myra who secretly gifted dowries to save poor maidens, defended the Trinity at Nicea, and rescued innocent condemned men.',
      scriptureRef: 'Luke 6:38'
    }
  ],
  '12-7': [
    {
      name: 'St. Ambrose, Bishop and Doctor',
      name_it: 'Sant\'Ambrogio, Vescovo e Dottore',
      title: 'Father of Milan & Baptizer of St. Augustine',
      color: 'white',
      rank: 'memorial',
      quote: '«The Emperor is within the Church, not above the Church. Where Peter is, there is the Church; where the Church is, there is no death.»',
      bio: 'Acclaimed bishop while still a catechumen, courageous shepherd who held the Roman Emperor accountable to Christian penance.',
      scriptureRef: 'Acts 4:19-20'
    }
  ],
  '12-8': [
    {
      name: 'The Immaculate Conception of the B.V.M.',
      name_it: 'Immacolata Concezione della Beata Vergine Maria',
      title: 'Preserved from All Stain of Original Sin',
      color: 'blue',
      rank: 'solemnity',
      quote: '«Hail, full of grace, the Lord is with thee: blessed art thou among women.»',
      bio: 'By a singular grace and privilege of Almighty God, Mary was preserved free from all stain of original sin from the moment of her conception.',
      scriptureRef: 'Luke 1:28'
    }
  ],
  '12-12': [
    {
      name: 'Our Lady of Guadalupe',
      name_it: 'Nostra Signora di Guadalupe',
      title: 'Empress of the Americas & Patroness of the Unborn',
      color: 'blue',
      rank: 'feast',
      quote: '«Am I not here, who am your Mother? Are you not under my shadow and protection? Let nothing grieve nor disturb you.»',
      bio: 'Appeared in 1531 on Tepeyac Hill to St. Juan Diego, leaving her miraculous image imprinted upon his cactus-fiber tilma.',
      scriptureRef: 'Revelation 12:1'
    }
  ],
  '12-13': [
    {
      name: 'St. Lucy of Syracuse, Virgin and Martyr',
      name_it: 'Santa Lucia da Siracusa, Vergine e Martire',
      title: 'Bringer of Light & Victor over Darkness',
      color: 'red',
      rank: 'memorial',
      quote: '«Those who live chaste lives are the temples of the Holy Ghost. My soul is anchored in Christ.»',
      bio: 'Sicilian maiden martyred under Diocletian for dedicating her virginity and goods to Christ and the poor.',
      scriptureRef: 'John 8:12'
    }
  ],
  '12-14': [
    {
      name: 'St. John of the Cross, Priest and Doctor',
      name_it: 'San Giovanni della Croce',
      title: 'Mystical Doctor & Singer of the Dark Night',
      color: 'white',
      rank: 'memorial',
      quote: '«In the evening of life, we will be judged on love alone. Where there is no love, put love, and you will draw out love.»',
      bio: 'Carmelite friar and reformer who endured harsh imprisonment and penned sublime mystical poetry on the soul\'s union with God.',
      scriptureRef: 'Song of Solomon 2:16'
    }
  ],
  '12-25': [
    {
      name: 'The Nativity of our Lord Jesus Christ (Christmas)',
      name_it: 'Natale del Signore nostro Gesù Cristo',
      title: 'The Incarnation of the Word & Light of the World',
      color: 'white',
      rank: 'solemnity',
      quote: '«For unto you is born this day in the city of David a Saviour, which is Christ the Lord. Glory to God in the highest, and on earth peace, good will toward men.»',
      bio: 'The Eternal Word of the Father takes upon Himself our mortal human flesh in Bethlehem, born of the Virgin Mary in a humble manger.',
      scriptureRef: 'Luke 2:10-14'
    }
  ],
  '12-26': [
    {
      name: 'St. Stephen, The Protomartyr',
      name_it: 'Santo Stefano, Protomartire',
      title: 'First Christian Martyr & Deacon of Jerusalem',
      color: 'red',
      rank: 'feast',
      quote: '«Lord, lay not this sin to their charge. Lord Jesus, receive my spirit!»',
      bio: 'Full of grace and fortitude, saw the heavens opened and the Son of Man standing at the right hand of God before being stoned outside Jerusalem.',
      scriptureRef: 'Acts 7:55-60'
    }
  ],
  '12-27': [
    {
      name: 'St. John, Apostle and Evangelist',
      name_it: 'San Giovanni, Apostolo ed Evangelista',
      title: 'The Beloved Disciple & Theologian of Divine Love',
      color: 'white',
      rank: 'feast',
      quote: '«In the beginning was the Word, and the Word was with God, and the Word was God... God is love; and he that dwelleth in love dwelleth in God, and God in him.»',
      bio: 'Rested upon Jesus\' breast at the Last Supper, stood at the foot of the Cross, and was exiled to Patmos where he wrote the Apocalypse.',
      scriptureRef: '1 John 4:16'
    }
  ],
  '12-28': [
    {
      name: 'The Holy Innocents, Martyrs',
      name_it: 'Santi Innocenti Martiri',
      title: 'The First Flowers of the Church\'s Martyrs',
      color: 'red',
      rank: 'feast',
      quote: '«Not by words, but by the shedding of their blood, they proclaimed the glory of Christ the Newborn King.»',
      bio: 'The male infant babes of Bethlehem slaughtered by King Herod in his desperate, futile attempt to extinguish the life of the newborn King of kings.',
      scriptureRef: 'Matthew 2:16-18'
    }
  ]
};

// Fallback spiritual commemorations for any day not explicitly listed in fixed feasts
const MONTHLY_ORDINARY_PATRONS = [
  { name: 'St. Ephrem the Syrian', title: 'Harp of the Holy Spirit & Deacon', color: 'white', rank: 'memorial', quote: '«Virtue is preserved by prayer and silence.»', scriptureRef: 'Psalm 141:3' },
  { name: 'St. Polycarp of Smyrna', title: 'Disciple of John & Bishop-Martyr', color: 'red', rank: 'memorial', quote: '«Eighty and six years have I served Him, and He never once wronged me; how then can I blaspheme my King and Savior?»', scriptureRef: 'Revelation 2:10' },
  { name: 'St. Irenaeus of Lyons', title: 'Doctor of Unity & Apostolic Witness', color: 'red', rank: 'memorial', quote: '«The glory of God is a living man, and the life of man is the vision of God.»', scriptureRef: 'John 17:3' },
  { name: 'St. Anthony the Great', title: 'Abbot of the Desert & Master of Prayer', color: 'white', rank: 'memorial', quote: '«Do not trust in your own righteousness, do not sorrow over what is past, and restrain your tongue and belly.»', scriptureRef: 'Matthew 6:33' },
  { name: 'St. Silouan the Athonite', title: 'Mount Athos Elder & Singer of Divine Love', color: 'white', rank: 'memorial', quote: '«Keep thy mind in hell, and despair not.»', scriptureRef: 'Psalm 139:8' },
  { name: 'St. Bridget of Sweden', title: 'Mystic & Patroness of Europe', color: 'white', rank: 'memorial', quote: '«Lord, show me the way and make me ready to walk in it.»', scriptureRef: 'Psalm 25:4' },
  { name: 'St. Columba of Iona', title: 'Apostle of Scotland & Abbot', color: 'white', rank: 'memorial', quote: '«Alone with none but Thee, my God, I journey on my way.»', scriptureRef: 'Genesis 28:15' }
];

export function getSaintsForDate(date, confession = 'ecumenical') {
  if (!date) date = new Date();
  const m = date.getMonth() + 1;
  const d = date.getDate();
  const key = `${m}-${d}`;

  const feast = DAILY_SAINTS_CALENDAR[key];
  if (feast && feast.length > 0) {
    return feast.map(s => ({
      ...s,
      dateStr: `${m}/${d}`,
      colorMeta: LITURGICAL_COLORS[s.color] || LITURGICAL_COLORS.white
    }));
  }

  // Provide an authentic monastic/patristic commemoration for ordinary days
  const fallbackIndex = (m * 31 + d) % MONTHLY_ORDINARY_PATRONS.length;
  const patron = MONTHLY_ORDINARY_PATRONS[fallbackIndex];
  return [
    {
      ...patron,
      dateStr: `${m}/${d}`,
      bio: 'Commemoration of holy monastic fathers and desert hermits who dedicated their lives to constant unceasing prayer in Christ.',
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
