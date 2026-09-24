// Ecumenical Saints, Church Fathers & Reformers Calendar for Aura Sacra (English)
export const SAINTS_DATA = {
  catholic: [
    {
      name: 'St. Francis of Assisi',
      title: 'Poverello of Assisi, Herald of Universal Peace',
      feast: 'October 4',
      quote: '«Lord, make me an instrument of your peace. Where there is hatred, let me sow love.»',
      quote_en: '«Lord, make me an instrument of your peace. Where there is hatred, let me sow love.»',
      bio: 'Renounced all worldly wealth to embrace radical Gospel poverty and kinship with all creation.',
      scriptureRef: 'Galatians 6:14'
    },
    {
      name: 'St. Thérèse of Lisieux',
      title: 'Doctor of the Church & Little Way of Spiritual Childhood',
      feast: 'October 1',
      quote: '«My vocation is love! In the heart of the Church, my Mother, I will be love.»',
      quote_en: '«My vocation is love! In the heart of the Church, my Mother, I will be love.»',
      bio: 'Taught that holiness is not performing grand deeds, but doing the smallest actions with infinite love.',
      scriptureRef: 'Matthew 18:3'
    },
    {
      name: 'St. Augustine of Hippo',
      title: 'Doctor of Grace & Western Church Father',
      feast: 'August 28',
      quote: '«You have made us for yourself, O Lord, and our heart is restless until it rests in you.»',
      quote_en: '«You have made us for yourself, O Lord, and our heart is restless until it rests in you.»',
      bio: 'From a wandering, restless youth to one of the most profound theologians in Christian history.',
      scriptureRef: 'Psalm 63:1'
    }
  ],
  orthodox: [
    {
      name: 'St. Seraphim of Sarov',
      title: 'Wonderworker of Sarov & Apostle of the Holy Spirit',
      feast: 'January 15',
      quote: '«Acquire a peaceful spirit, and around you thousands will be saved.»',
      quote_en: '«Acquire a peaceful spirit, and around you thousands will be saved.»',
      bio: 'Greeted every person in winter or summer with the joyful words: "My joy, Christ is risen!"',
      scriptureRef: 'John 20:19-21'
    },
    {
      name: 'St. John Chrysostom',
      title: 'Golden-Mouthed Patriarch of Constantinople',
      feast: 'September 13',
      quote: '«Prayer is the root, the fountain, the mother of countless blessings.»',
      quote_en: '«Prayer is the root, the fountain, the mother of countless blessings.»',
      bio: 'Courageous preacher of righteousness, defender of the poor, author of the Divine Liturgy.',
      scriptureRef: 'Ephesians 6:18'
    },
    {
      name: 'St. Basil the Great',
      title: 'Father of Eastern Monasticism & Defender of the Trinity',
      feast: 'January 1',
      quote: '«The bread which you hold back belongs to the hungry; the coat you preserve in your wardrobe belongs to the naked.»',
      quote_en: '«The bread which you hold back belongs to the hungry; the coat you preserve in your wardrobe belongs to the naked.»',
      bio: 'Architect of hospital complexes and caring communities for the sick and marginalized.',
      scriptureRef: 'Matthew 25:35-40'
    }
  ],
  protestant: [
    {
      name: 'Dietrich Bonhoeffer',
      title: 'Martyr of Faith & Preacher of Costly Grace',
      feast: 'April 9',
      quote: '«Cheap grace is grace without discipleship, grace without the cross, grace without Jesus Christ.»',
      quote_en: '«Cheap grace is grace without discipleship, grace without the cross, grace without Jesus Christ.»',
      bio: 'Lutheran pastor and theologian who stood fearlessly against tyranny and fascism in Germany, witnessing to Christ unto martyrdom.',
      scriptureRef: 'Luke 9:23'
    },
    {
      name: 'Martin Luther',
      title: 'Reformer & Translator of the Sacred Scriptures',
      feast: 'October 31',
      quote: '«My conscience is captive to the Word of God. Here I stand; I can do no other. God help me.»',
      quote_en: '«My conscience is captive to the Word of God. Here I stand; I can do no other. God help me.»',
      bio: 'Restored the proclamation of justification by faith alone and translated the Bible into the common tongue.',
      scriptureRef: 'Romans 1:17'
    },
    {
      name: 'C.S. Lewis',
      title: 'Defender of Mere Christianity & Voice of Hope',
      feast: 'November 22',
      quote: '«I believe in Christianity as I believe that the sun has risen: not only because I see it, but because by it I see everything else.»',
      quote_en: '«I believe in Christianity as I believe that the sun has risen: not only because I see it, but because by it I see everything else.»',
      bio: 'Scholar and writer whose apologetic works brought millions of modern intellectuals to faith in Christ.',
      scriptureRef: 'John 1:9'
    }
  ],
  ecumenical: [
    {
      name: 'The Apostles Peter & Paul',
      title: 'Pillars of the Early Church & Universal Witnesses',
      feast: 'June 29',
      quote: '«Lord, to whom shall we go? You have the words of eternal life.»',
      quote_en: '«Lord, to whom shall we go? You have the words of eternal life.»',
      bio: 'United in faith and martyrdom in Rome, proclaiming the Gospel across all nations.',
      scriptureRef: 'John 6:68'
    },
    {
      name: 'St. Mary, Mother of the Lord',
      title: 'The Handmaid of the Lord & Ark of the New Covenant',
      feast: 'August 15',
      quote: '«My soul magnifies the Lord, and my spirit rejoices in God my Savior.»',
      quote_en: '«My soul magnifies the Lord, and my spirit rejoices in God my Savior.»',
      bio: 'Her humble "Fiat" («Let it be done to me according to your word») brought salvation into human history.',
      scriptureRef: 'Luke 1:46-47'
    }
  ]
};

export function getSaintsForConfession(confession = 'ecumenical') {
  return SAINTS_DATA[confession] || SAINTS_DATA.ecumenical;
}
