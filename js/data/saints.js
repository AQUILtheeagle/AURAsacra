// Ecumenical Saints, Church Fathers & Reformers Calendar for Aura Sacra
// Re-exports daily liturgical saints, tradition-specific fathers, and localization helpers
export {
  LITURGICAL_COLORS,
  DAILY_SAINTS_CALENDAR,
  TRADITION_FALLBACK_PATRONS,
  getSaintsForDate,
  getTodaySaints,
  getLiturgicalColorMeta
} from './daily-saints.js';

export {
  BIBLE_BOOKS_I18N,
  localizeScriptureRef,
  getLocalizedSaint
} from './saints-i18n.js';

export const SAINTS_DATA = {
  catholic: [
    {
      name: 'St. Francis of Assisi',
      name_it: 'San Francesco d\'Assisi',
      name_la: 'Sanctus Franciscus Asisiensis',
      name_ro: 'Sfântul Francisc de Assisi',
      title: 'Poverello of Assisi, Herald of Universal Peace',
      title_it: 'Il Poverello d\'Assisi, Araldo di Pace Universale',
      feast: 'October 4',
      color: 'white',
      rank: 'feast',
      quote: '«Lord, make me an instrument of your peace. Where there is hatred, let me sow love.»',
      quote_it: '«Signore, fa\' di me uno strumento della tua pace: dove è odio, ch\'io porti l\'amore.»',
      bio: 'Renounced all worldly wealth to embrace radical Gospel poverty and kinship with all creation.',
      bio_it: 'Rinunciò a ogni ricchezza mondana per abbracciare la radicale povertà evangelica e la comunione con il Creato.',
      scriptureRef: 'Galatians 6:14'
    },
    {
      name: 'St. Thérèse of Lisieux',
      name_it: 'Santa Teresa di Gesù Bambino',
      name_la: 'Sancta Teresia a Iesu Infante',
      name_ro: 'Sfânta Tereza a Pruncului Isus',
      title: 'Doctor of the Church & Little Way of Spiritual Childhood',
      title_it: 'Vergine, Dottore della Chiesa e Maestra della Piccola Via',
      feast: 'October 1',
      color: 'white',
      rank: 'memorial',
      quote: '«My vocation is love! In the heart of the Church, my Mother, I will be love.»',
      quote_it: '«La mia vocazione è l\'amore! Nel cuore della Chiesa, mia Madre, io sarò l\'amore.»',
      bio: 'Taught that holiness is not performing grand deeds, but doing the smallest actions with infinite love.',
      bio_it: 'Insegnò che la santità non consiste nel fare cose straordinarie, ma nel fare le più piccole con amore infinito.',
      scriptureRef: 'Matthew 18:3'
    },
    {
      name: 'St. Augustine of Hippo',
      name_it: 'Sant\'Agostino d\'Ippona',
      name_la: 'Sanctus Augustinus Hipponensis',
      name_ro: 'Sfântul Augustin de Hipona',
      title: 'Doctor of Grace & Western Church Father',
      title_it: 'Vescovo e Dottore della Grazia, Padre della Chiesa',
      feast: 'August 28',
      color: 'white',
      rank: 'feast',
      quote: '«You have made us for yourself, O Lord, and our heart is restless until it rests in you.»',
      quote_it: '«Ci hai fatti per te, o Signore, e il nostro cuore è inquieto finché non riposa in te.»',
      bio: 'From a wandering, restless youth to one of the most profound theologians in Christian history.',
      bio_it: 'Dalla giovinezza inquieta alla conversione radicale, divenne uno dei teologi più profondi della storia della Chiesa.',
      scriptureRef: 'Psalm 63:1'
    }
  ],
  traditional: [
    {
      name: 'St. Gregory the Great',
      name_it: 'San Gregorio Magno',
      name_la: 'Sanctus Gregorius Magnus Papa',
      name_ro: 'Sfântul Grigorie cel Mare',
      title: 'Pope, Monk & Latin Doctor',
      title_it: 'Papa, Monaco e Dottore della Chiesa',
      feast: 'September 3',
      color: 'white',
      rank: 'memorial',
      quote: '«The proof of love is in the works. Where love exists, it works great things.»',
      quote_it: '«La prova dell\'amore è nelle opere. Dove l\'amore esiste, esso compie grandi cose.»',
      bio: 'Reformed the sacred liturgy, guided the Church through famine, and preserved classical Christian culture.',
      bio_it: 'Pastore sapiente, riformatore della liturgia e del canto gregoriano, servo dei servi di Dio.',
      scriptureRef: '1 John 3:18'
    },
    {
      name: 'St. Charles Borromeo',
      name_it: 'San Carlo Borromeo',
      name_la: 'Sanctus Carolus Borromaeus',
      name_ro: 'Sfântul Carol Borromeu',
      title: 'Archbishop & Reformer of Trent',
      title_it: 'Arcivescovo di Milano e Riformatore del Concilio di Trento',
      feast: 'November 4',
      color: 'white',
      rank: 'memorial',
      quote: '«Be sure that you first preach by the way you live.»',
      quote_it: '«Sii certo di predicare anzitutto con la testimonianza della tua vita.»',
      bio: 'Champion of Catholic renewal, dedicated his wealth and life to ministering to victims during the great plague.',
      bio_it: 'Guida instancabile durante la peste di Milano, donò tutti i suoi beni per soccorrere gli appestati e rinnovare la Chiesa.',
      scriptureRef: 'Titus 2:7'
    }
  ],
  orthodox: [
    {
      name: 'St. Seraphim of Sarov',
      name_it: 'San Serafino di Sarov',
      name_la: 'Sanctus Seraphim Saroviensis',
      name_ro: 'Sfântul Serafim de Sarov',
      title: 'Wonderworker of Sarov & Apostle of the Holy Spirit',
      title_it: 'Taumaturgo di Sarov e Apostolo dello Spirito Santo',
      feast: 'January 15',
      color: 'white',
      rank: 'feast',
      quote: '«Acquire a peaceful spirit, and around you thousands will be saved.»',
      quote_it: '«Acquisisci lo spirito di pace, e intorno a te migliaia troveranno la salvezza.»',
      bio: 'Greeted every person in winter or summer with the joyful words: "My joy, Christ is risen!"',
      bio_it: 'Santo monaco russo che accoglieva tutti con il saluto pasquale "Gioia mia, Cristo è risorto!" e rivelò la luce dello Spirito.',
      scriptureRef: 'John 20:19-21'
    },
    {
      name: 'St. John Chrysostom',
      name_it: 'San Giovanni Crisostomo',
      name_la: 'Sanctus Ioannes Chrysostomus',
      name_ro: 'Sfântul Ioan Gură de Aur',
      title: 'Golden-Mouthed Patriarch of Constantinople',
      title_it: 'Patriarca di Costantinopoli, Bocca d\'Oro e Dottore della Chiesa',
      feast: 'September 13',
      color: 'white',
      rank: 'feast',
      quote: '«Prayer is the root, the fountain, the mother of countless blessings.»',
      quote_it: '«La preghiera è la radice, la sorgente, la madre di innumerevoli benedizioni.»',
      bio: 'Courageous preacher of righteousness, defender of the poor, author of the Divine Liturgy.',
      bio_it: 'Predicatore insigne soprannominato "Bocca d\'Oro", difensore dei diritti dei poveri esiliato dalla corte imperiale; autore della Divina Liturgia.',
      scriptureRef: 'Ephesians 6:18'
    },
    {
      name: 'St. Basil the Great',
      name_it: 'San Basilio Magno',
      name_la: 'Sanctus Basilius Magnus',
      name_ro: 'Sfântul Vasile cel Mare',
      title: 'Father of Eastern Monasticism & Defender of the Trinity',
      title_it: 'Padre del Monachesimo Orientale e Vescovo di Cesarea',
      feast: 'January 1',
      color: 'white',
      rank: 'feast',
      quote: '«The bread which you hold back belongs to the hungry; the coat you preserve in your wardrobe belongs to the naked.»',
      quote_it: '«Il pane che trattieni appartiene all\'affamato; il mantello che conservi nel guardaroba appartiene all\'ignudo.»',
      bio: 'Architect of hospital complexes and caring communities for the sick and marginalized.',
      bio_it: 'Fondatore della Basiliade (il primo grande ospedale per i poveri) e difensore della fede nicena nella Trinità.',
      scriptureRef: 'Matthew 25:35-40'
    }
  ],
  protestant: [
    {
      name: 'Dietrich Bonhoeffer',
      name_it: 'Dietrich Bonhoeffer',
      name_la: 'Theodoricus Bonhoeffer',
      name_ro: 'Dietrich Bonhoeffer',
      title: 'Martyr of Faith & Preacher of Costly Grace',
      title_it: 'Martire della Fede e Testimone della Grazia a Caro Prezzo',
      feast: 'April 9',
      color: 'red',
      rank: 'memorial',
      quote: '«Cheap grace is grace without discipleship, grace without the cross, grace without Jesus Christ.»',
      quote_it: '«La grazia a buon mercato è la grazia senza discepolato, la grazia senza la croce, la grazia senza Gesù Cristo.»',
      bio: 'Lutheran pastor and theologian who stood fearlessly against tyranny, witnessing to Christ unto martyrdom.',
      bio_it: 'Pastore luterano e teologo che si oppose intrepidamente al nazismo, testimoniando la fedeltà a Cristo fino al patibolo.',
      scriptureRef: 'Luke 9:23'
    },
    {
      name: 'Martin Luther',
      name_it: 'Martin Lutero',
      name_la: 'Martinus Lutherus',
      name_ro: 'Martin Luther',
      title: 'Reformer & Translator of the Sacred Scriptures',
      title_it: 'Riformatore e Traduttore delle Sacre Scritture',
      feast: 'October 31',
      color: 'white',
      rank: 'memorial',
      quote: '«My conscience is captive to the Word of God. Here I stand; I can do no other. God help me.»',
      quote_it: '«La mia coscienza è prigioniera della Parola di Dio. Qui sto, non posso fare altrimenti. Dio mi aiuti.»',
      bio: 'Restored the proclamation of justification by faith alone and translated the Bible into the common tongue.',
      bio_it: 'Restaurò la proclamazione della giustificazione per sola fede e tradusse la Bibbia nella lingua del popolo.',
      scriptureRef: 'Romans 1:17'
    },
    {
      name: 'C.S. Lewis',
      name_it: 'C.S. Lewis',
      name_la: 'Clive Staples Lewis',
      name_ro: 'C.S. Lewis',
      title: 'Defender of Mere Christianity & Voice of Hope',
      title_it: 'Apologeta Cristiano e Voce della Speranza',
      feast: 'November 22',
      color: 'white',
      rank: 'memorial',
      quote: '«I believe in Christianity as I believe that the sun has risen: not only because I see it, but because by it I see everything else.»',
      quote_it: '«Credo nel Cristianesimo come credo che il sole è sorto: non solo perché lo vedo, ma perché attraverso di esso vedo ogni altra cosa.»',
      bio: 'Scholar and writer whose apologetic works brought millions of modern intellectuals to faith in Christ.',
      bio_it: 'Docente a Oxford e Cambridge, i cui scritti apologetici e narrativi hanno condotto milioni di persone alla fede in Cristo.',
      scriptureRef: 'John 1:9'
    }
  ],
  ecumenical: [
    {
      name: 'The Apostles Peter & Paul',
      name_it: 'Santi Apostoli Pietro e Paolo',
      name_la: 'Sancti Apostoli Petrus et Paulus',
      name_ro: 'Sfinții Apostoli Petru și Pavel',
      title: 'Pillars of the Early Church & Universal Witnesses',
      title_it: 'Colonne della Chiesa e Testimoni Universali',
      feast: 'June 29',
      color: 'red',
      rank: 'solemnity',
      quote: '«Lord, to whom shall we go? You have the words of eternal life.»',
      quote_it: '«Signore, da chi andremo? Tu solo hai parole di vita eterna.»',
      bio: 'United in faith and martyrdom in Rome, proclaiming the Gospel across all nations.',
      bio_it: 'Uniti nella fede e nel martirio a Roma sotto Nerone, annunciarono l\'Evangelo della salvezza a tutte le genti.',
      scriptureRef: 'John 6:68'
    },
    {
      name: 'St. Mary, Mother of the Lord',
      name_it: 'Santa Maria, Madre del Signore',
      name_la: 'Sancta Maria, Mater Domini',
      name_ro: 'Sfânta Maria, Maica Domnului',
      title: 'The Handmaid of the Lord & Ark of the New Covenant',
      title_it: 'L\'Ancella del Signore e Arca della Nuova Alleanza',
      feast: 'August 15',
      color: 'blue',
      rank: 'solemnity',
      quote: '«My soul magnifies the Lord, and my spirit rejoices in God my Savior.»',
      quote_it: '«L\'anima mia magnifica il Signore e il mio spirito esulta in Dio mio Salvatore.»',
      bio: 'Her humble "Fiat" («Let it be done to me according to your word») brought salvation into human history.',
      bio_it: 'Con il suo umile e totale "Sì" all\'annuncio dell\'Angelo, l\'Eterno Verbo si è fatto carne nel suo grembo verginale.',
      scriptureRef: 'Luke 1:46-47'
    }
  ]
};

export function getSaintsForConfession(confession = 'ecumenical') {
  return SAINTS_DATA[confession] || SAINTS_DATA.ecumenical;
}
