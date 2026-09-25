// Sacred Penance, Fasting, and Abstinence Liturgical Engine for Aura Sacra
// Accurately computes penitential obligations, moveable fasts (via Computus),
// Ember Days, Vigils, and canonical dispensations across Christian traditions.

export const TRADITIONS = [
  {
    id: 'universal',
    name: 'Universal Roman Rite',
    subtitle: 'Current Canon Law (Can. 1249–1253 & Paenitemini)',
    description: 'Ash Wednesday, Good Friday, and every Friday of the year (with solemnity dispensations).'
  },
  {
    id: 'traditional',
    name: 'Traditional Latin (1962)',
    subtitle: 'Historic Missal & 1917 Canon Law',
    description: 'Includes Ember Days (Quattro Tempora), traditional Vigils, and full Lenten weekday fasting.'
  },
  {
    id: 'eastern',
    name: 'Eastern Christian / Byzantine',
    subtitle: 'Great Lent, Fasting Seasons & Weekly Fasts',
    description: 'Great Lent, Apostles Fast, Dormition Fast, Nativity Fast, and Wednesdays & Fridays.'
  }
];

// Western Easter Computus (Anonymous Gregorian algorithm / Meeus)
export function calculateEaster(year) {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(year, month - 1, day);
}

// Eastern / Orthodox Easter (Julian Computus converted to Gregorian)
export function calculateOrthodoxEaster(year) {
  const a = year % 4;
  const b = year % 7;
  const c = year % 19;
  const d = (19 * c + 15) % 30;
  const e = (2 * a + 4 * b - d + 34) % 7;
  const month = Math.floor((d + e + 114) / 31);
  const day = ((d + e + 114) % 31) + 1;
  const julian = new Date(year, month - 1, day);
  // Add 13 days Gregorian offset
  return new Date(julian.getTime() + 13 * 86400000);
}

function addDays(date, days) {
  const result = new Date(date.getTime());
  result.setDate(result.getDate() + days);
  return result;
}

function isSameDay(d1, d2) {
  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  );
}

// Fixed Solemnities that dispense from Friday abstinence in the Western Church
function isSolemnity(date) {
  const m = date.getMonth() + 1;
  const d = date.getDate();

  // Fixed date solemnities
  if (m === 1 && d === 1) return 'Solemnity of Mary, Mother of God';
  if (m === 1 && d === 6) return 'The Epiphany of the Lord';
  if (m === 3 && d === 19) return 'Solemnity of Saint Joseph';
  if (m === 3 && d === 25) return 'The Annunciation of the Lord';
  if (m === 6 && d === 24) return 'Nativity of Saint John the Baptist';
  if (m === 6 && d === 29) return 'Saints Peter and Paul, Apostles';
  if (m === 8 && d === 15) return 'The Assumption of the Blessed Virgin Mary';
  if (m === 11 && d === 1) return 'Solemnity of All Saints';
  if (m === 12 && d === 8) return 'The Immaculate Conception';
  if (m === 12 && d === 25) return 'The Nativity of the Lord (Christmas)';

  // Moveable solemnities based on Easter
  const easter = calculateEaster(date.getFullYear());
  const easterFriday = addDays(easter, 5); // Friday within Easter Octave (every day of the Octave is a Solemnity!)
  if (isSameDay(date, easterFriday)) return 'Friday within the Octave of Easter';

  const sacredHeart = addDays(easter, 68); // 19 days after Pentecost (Friday)
  if (isSameDay(date, sacredHeart)) return 'Solemnity of the Most Sacred Heart of Jesus';

  return null;
}

// Computes Ember Days for a given year (Wednesday, Friday, Saturday of four seasons)
function getEmberDays(year) {
  const easter = calculateEaster(year);
  const days = [];

  // 1. Spring (Lent): Wed, Fri, Sat after the First Sunday of Lent (Easter - 42 days)
  const firstSunLent = addDays(easter, -42);
  days.push({ date: addDays(firstSunLent, 3), name: 'Lenten Ember Wednesday' });
  days.push({ date: addDays(firstSunLent, 5), name: 'Lenten Ember Friday' });
  days.push({ date: addDays(firstSunLent, 6), name: 'Lenten Ember Saturday' });

  // 2. Summer (Whit/Pentecost): Wed, Fri, Sat after Pentecost (Easter + 49 days)
  const pentecost = addDays(easter, 49);
  days.push({ date: addDays(pentecost, 3), name: 'Pentecost Ember Wednesday' });
  days.push({ date: addDays(pentecost, 5), name: 'Pentecost Ember Friday' });
  days.push({ date: addDays(pentecost, 6), name: 'Pentecost Ember Saturday' });

  // 3. Autumn (September): Wed, Fri, Sat after Exaltation of the Holy Cross (Sep 14)
  const holyCross = new Date(year, 8, 14); // Sep 14
  const dayOfWeek = holyCross.getDay(); // 0 is Sun
  const nextSunday = addDays(holyCross, (7 - dayOfWeek) % 7 || 7);
  days.push({ date: addDays(nextSunday, 3), name: 'September Ember Wednesday' });
  days.push({ date: addDays(nextSunday, 5), name: 'September Ember Friday' });
  days.push({ date: addDays(nextSunday, 6), name: 'September Ember Saturday' });

  // 4. Winter (Advent): Wed, Fri, Sat after St. Lucy (Dec 13)
  const stLucy = new Date(year, 11, 13);
  const lucyDay = stLucy.getDay();
  const nextSunLucy = addDays(stLucy, (7 - lucyDay) % 7 || 7);
  days.push({ date: addDays(nextSunLucy, 3), name: 'Advent Ember Wednesday' });
  days.push({ date: addDays(nextSunLucy, 5), name: 'Advent Ember Friday' });
  days.push({ date: addDays(nextSunLucy, 6), name: 'Advent Ember Saturday' });

  return days;
}

// Evaluates penitential status of any given day
export function getDayPenanceStatus(dateInput, tradition = 'universal') {
  const date = new Date(dateInput.getFullYear(), dateInput.getMonth(), dateInput.getDate());
  const year = date.getFullYear();
  const dayOfWeek = date.getDay(); // 0 = Sun, 5 = Fri, 3 = Wed
  const month = date.getMonth() + 1;
  const dayOfMonth = date.getDate();

  const easter = calculateEaster(year);
  const ashWednesday = addDays(easter, -46);
  const palmSunday = addDays(easter, -7);
  const holyThursday = addDays(easter, -3);
  const goodFriday = addDays(easter, -2);
  const holySaturday = addDays(easter, -1);

  // Check if date is within Lent
  const isLent = date >= ashWednesday && date <= holySaturday;
  const isGoodFriday = isSameDay(date, goodFriday);
  const isAshWednesday = isSameDay(date, ashWednesday);
  const isHolySaturday = isSameDay(date, holySaturday);

  // Check solemnity
  const solemnityName = isSolemnity(date);

  // -------------------------------------------------------------
  // 1. UNIVERSAL ROMAN RITE (Current Canon Law: Can. 1249-1253)
  // -------------------------------------------------------------
  if (tradition === 'universal') {
    if (isAshWednesday) {
      return {
        isPenitential: true,
        type: 'strict_fast',
        title: 'Ash Wednesday (Mercoledì delle Ceneri)',
        subtitle: 'Universal Day of Strict Fasting and Abstinence from Meat',
        badge: { label: 'Strict Fast & Abstinence', color: 'vermilion', icon: 'bread' },
        rules: {
          fasting: 'Required: One full meal, plus two smaller collations not equalling a meal. No snacking.',
          abstinence: 'Required: Total abstinence from meat of warm-blooded land animals and poultry.',
          allowed: 'Fish, seafood, eggs, milk, vegetables, grains, olive oil, water, tea, coffee.',
          avoid: 'Beef, pork, poultry, and meat broths.'
        },
        obligation: 'Universal obligation for all Christians aged 18 to 59 (fasting) and 14+ (abstinence).',
        theology: 'Marks the solemn threshold of the 40 days of Lent, recalling Christ\'s fast in the wilderness and our mortality: "Remember that you are dust, and to dust you shall return."',
        scripture: {
          ref: 'Joel 2:12-13',
          text: 'Turn ye even to me with all your heart, and with fasting, and with weeping, and with mourning: and rend your heart, and not your garments, and turn unto the Lord your God.'
        },
        prayer: 'Lord God, as we begin this sacred season of repentance, grant us grace to master our earthly appetites that our hearts may hungrily seek Thy holy will. Amen.'
      };
    }

    if (isGoodFriday) {
      return {
        isPenitential: true,
        type: 'strict_fast',
        title: 'Good Friday (Venerdì Santo)',
        subtitle: 'The Crucifixion and Passion of our Lord Jesus Christ',
        badge: { label: 'Strict Fast & Abstinence', color: 'vermilion', icon: 'bread' },
        rules: {
          fasting: 'Required: One full meal and two small snacks. Pure water encouraged throughout the day.',
          abstinence: 'Required: Complete abstinence from meat.',
          allowed: 'Simple fasting foods: bread, water, vegetables, fish, grains.',
          avoid: 'Meat, festive foods, alcohol, lavish preparations.'
        },
        obligation: 'Universal obligation: age 18–59 (fasting) and 14+ (abstinence).',
        theology: 'On this most sacred day, the Church does not celebrate the Eucharist, but fasts with holy grief at the foot of the Cross where Christ shed His blood for our redemption.',
        scripture: {
          ref: 'Isaiah 53:5',
          text: 'He was wounded for our transgressions, he was bruised for our iniquities: the chastisement of our peace was upon him; and with his stripes we are healed.'
        },
        prayer: 'O Saviour of the world, Who by Thy Cross and precious Blood hast redeemed us: save us and help us, we humbly beseech Thee, O Lord.'
      };
    }

    // Friday with a Solemnity -> Fasting & Abstinence Dispensed!
    if (dayOfWeek === 5 && solemnityName) {
      return {
        isPenitential: false,
        type: 'solemnity_dispensation',
        title: `Friday: ${solemnityName}`,
        subtitle: 'Abstinence Dispensed by Law (Can. 1251)',
        badge: { label: 'Solemnity Dispensation', color: 'gold', icon: 'sparkles' },
        rules: {
          fasting: 'Not required.',
          abstinence: 'Dispensed: Meat is permitted in honor of the Solemnity.',
          allowed: 'All foods permitted in joyful thanksgiving.',
          avoid: 'Gluttony and excess.'
        },
        obligation: 'No penance required. The joy of the Lord and the mystery celebrated takes precedence.',
        theology: 'Canon 1251 specifically dictates that whenever a Solemnity falls on a Friday, the penitential obligation is set aside in honor of the high feast.',
        scripture: {
          ref: 'Matthew 9:15',
          text: 'Can the children of the bridechamber mourn, as long as the bridegroom is with them? but the days will come, when the bridegroom shall be taken from them, and then shall they fast.'
        },
        prayer: 'O Lord, we rejoice in the mystery of this holy day, praising Thy goodness and sharing Thy gifts with gladness of heart.'
      };
    }

    // Every other Friday of the whole year
    if (dayOfWeek === 5) {
      return {
        isPenitential: true,
        type: 'abstinence',
        title: isLent ? 'Lenten Friday of Penance' : 'Friday of Penance (Venerdì di Penitenza)',
        subtitle: 'Weekly Memorial of the Passion of our Lord (Can. 1250)',
        badge: { label: 'Abstinence from Meat', color: 'purple', icon: 'fish' },
        rules: {
          fasting: isLent ? 'Voluntary Lenten discipline recommended.' : 'Not strictly canonical; voluntary moderation encouraged.',
          abstinence: 'Required: Abstinence from meat of warm-blooded animals (or an approved episcopal act of charity/piety outside Lent).',
          allowed: 'Fish, seafood, grains, legumes, vegetables, fruits, eggs, cheese, olive oil.',
          avoid: 'Meat from mammals and poultry (beef, chicken, pork, lamb, turkey).'
        },
        obligation: 'Obligatory for all faithful from age 14 onwards.',
        theology: 'Every Friday is a mini-Good Friday in the Christian tradition, consecrated to penance in commemoration of the Lord Jesus offering His life upon Mount Calvary.',
        scripture: {
          ref: 'Luke 9:23',
          text: 'If any man will come after me, let him deny himself, and take up his cross daily, and follow me.'
        },
        prayer: 'Lord Jesus Christ, crucified for our salvation, accept our modest sacrifice of abstinence this day as an act of love, gratitude, and solidarity with the poor.'
      };
    }

    // Lenten Weekday (non-Friday)
    if (isLent && dayOfWeek !== 0) {
      return {
        isPenitential: true,
        type: 'lenten_feria',
        title: 'Lenten Season (Tempo di Quaresima)',
        subtitle: 'Daily Discipline of Prayer, Fasting, and Almsgiving',
        badge: { label: 'Lenten Season', color: 'purple', icon: 'flame' },
        rules: {
          fasting: 'Voluntary fasting or restriction of indulgences warmly encouraged.',
          abstinence: 'Meat permitted, but moderation and voluntary sacrifice recommended.',
          allowed: 'Healthy, temperate meals; generous almsgiving to the needy.',
          avoid: 'Extravagance, idle gossip, pride, and spiritual lethargy.'
        },
        obligation: 'General penitential atmosphere of the 40 days.',
        theology: 'Lent prepares the Church to celebrate the Paschal Mystery through interior renewal, prayer, Scripture contemplation, and self-denial.',
        scripture: {
          ref: 'Matthew 6:16',
          text: 'Moreover when ye fast, be not, as the hypocrites, of a sad countenance... but thou, when thou fastest, anoint thine head, and wash thy face.'
        },
        prayer: 'Create in me a clean heart, O God, and renew a right spirit within me. Strengthen my resolve to walk humbly in Thy paths this Lent.'
      };
    }

    // Ordinary Day
    return {
      isPenitential: false,
      type: 'ordinary',
      title: 'Ordinary Day (Giorno Ordinario)',
      subtitle: 'Living in Christian Virtue and Gratitude',
      badge: { label: 'No Fast Required', color: 'stone', icon: 'sun' },
      rules: {
        fasting: 'None prescribed by canon law.',
        abstinence: 'All foods permitted in thanksgiving.',
        allowed: 'Enjoy wholesome meals with a grateful heart.',
        avoid: 'Gluttony and lack of gratitude.'
      },
      obligation: 'Free day. Continue in daily prayer and work («Ora et Labora»).',
      theology: 'Every day is God\'s creation, to be received with thanksgiving and sanctified through prayer, honesty, and loving charity.',
      scripture: {
        ref: '1 Corinthians 10:31',
        text: 'Whether therefore ye eat, or drink, or whatsoever ye do, do all to the glory of God.'
      },
      prayer: 'Lord, bless the food we eat and the work of our hands. May everything we do redound to Thy honor and eternal praise. Amen.'
    };
  }

  // -------------------------------------------------------------
  // 2. TRADITIONAL LATIN RITE (1962 / 1917 Code of Canon Law)
  // -------------------------------------------------------------
  if (tradition === 'traditional') {
    // Ember Days Check
    const emberDays = getEmberDays(year);
    const matchedEmber = emberDays.find((ed) => isSameDay(date, ed.date));
    if (matchedEmber) {
      const isEmberSat = date.getDay() === 6;
      return {
        isPenitential: true,
        type: 'ember_day',
        title: matchedEmber.name,
        subtitle: 'Quattro Tempora: Traditional Seasonal Fast & Prayer',
        badge: { label: 'Ember Day Fast', color: 'amber', icon: 'bread' },
        rules: {
          fasting: 'Required: One full meal and two collations.',
          abstinence: isEmberSat
            ? 'Partial abstinence (meat allowed once at the main meal).'
            : 'Complete abstinence from meat.',
          allowed: 'Grains, root vegetables, fish, eggs, dairy.',
          avoid: 'Meat (except partial on Saturday) and decadent sweets.'
        },
        obligation: 'Traditional Latin discipline observed by the faithful worldwide.',
        theology: 'Ember Days (Quattro Tempora) sanctify the four seasons of nature, thanking God for the harvest, praying for holy priests, and renewing spiritual discipline.',
        scripture: {
          ref: 'Acts 13:3',
          text: 'And when they had fasted and prayed, and laid their hands on them, they sent them away.'
        },
        prayer: 'O Lord, bless the fruits of the earth and sanctify the clergy of Thy Church, that in all seasons Thy people may offer unceasing praise.'
      };
    }

    // Traditional Vigils (Vigil of Christmas Dec 24, Vigil of Assumption Aug 14, Vigil of All Saints Oct 31, Vigil of Pentecost)
    const isVigilChristmas = month === 12 && dayOfMonth === 24;
    const isVigilAssumption = month === 8 && dayOfMonth === 14;
    const isVigilAllSaints = month === 10 && dayOfMonth === 31;
    const isVigilPentecost = isSameDay(date, addDays(easter, 48));

    if (isVigilChristmas || isVigilAssumption || isVigilAllSaints || isVigilPentecost) {
      const vigilName = isVigilChristmas
        ? 'Vigil of Christmas (Eve of the Nativity)'
        : isVigilAssumption
        ? 'Vigil of the Assumption'
        : isVigilAllSaints
        ? 'Vigil of All Saints'
        : 'Vigil of Pentecost';

      return {
        isPenitential: true,
        type: 'strict_fast',
        title: vigilName,
        subtitle: 'Traditional Vigil of Fasting and Abstinence',
        badge: { label: 'Vigil Fast & Abstinence', color: 'vermilion', icon: 'bread' },
        rules: {
          fasting: 'Required: One full meal, two collations.',
          abstinence: 'Required: Abstinence from meat.',
          allowed: 'Fasting foods, fish, vegetables, fruits, bread.',
          avoid: 'Meat, festive meals until the feast arrives.'
        },
        obligation: 'Traditional vigil observance preparing the soul for solemn joy.',
        theology: 'Fasting on the eve of a great feast sharpens the appetite of the soul, ensuring that our exterior joy on the feast day flows from interior purity.',
        scripture: {
          ref: 'Matthew 25:6',
          text: 'And at midnight there was a cry made, Behold, the bridegroom cometh; go ye out to meet him.'
        },
        prayer: 'Prepare our hearts, O Lord, to welcome the splendor of the upcoming feast with cleansed consciences and humble adoration.'
      };
    }

    // Ash Wednesday & Good Friday
    if (isAshWednesday || isGoodFriday) {
      return getDayPenanceStatus(dateInput, 'universal');
    }

    // Holy Saturday
    if (isHolySaturday) {
      return {
        isPenitential: true,
        type: 'strict_fast',
        title: 'Holy Saturday (Sabato Santo)',
        subtitle: 'Traditional Fast of the Great Silence until Easter Vigil',
        badge: { label: 'Strict Fast & Abstinence', color: 'vermilion', icon: 'bread' },
        rules: {
          fasting: 'One full meal; profound silence and contemplation at the Tomb.',
          abstinence: 'Abstinence from meat.',
          allowed: 'Simple bread, water, broth, vegetables.',
          avoid: 'Meat and noisy entertainment.'
        },
        obligation: 'Traditional fast observed until the Easter Vigil.',
        theology: 'Christ rests in the Sepulchre. The entire universe holds its breath in mourning, awaiting the resurrection.',
        scripture: {
          ref: 'Romans 6:4',
          text: 'Therefore we are buried with him by baptism into death: that like as Christ was raised up from the dead by the glory of the Father, even so we also should walk in newness of life.'
        },
        prayer: 'Lord Jesus, as Thou didst lie buried in the rock, bury our sins with Thee, and raise us up into newness of life.'
      };
    }

    // Traditional Lenten Weekdays (All weekdays of Lent are fasting days in 1917/1962)
    if (isLent && dayOfWeek !== 0) {
      const isFriSat = dayOfWeek === 5 || dayOfWeek === 6;
      return {
        isPenitential: true,
        type: isFriSat ? 'fast_and_abstinence' : 'fast',
        title: `Lenten Weekday (${dayOfWeek === 5 ? 'Friday Abstinence' : dayOfWeek === 6 ? 'Saturday Abstinence' : 'Fasting Day'})`,
        subtitle: '1962 Traditional Lenten Daily Fast',
        badge: {
          label: isFriSat ? 'Fast & Abstinence' : 'Daily Lenten Fast',
          color: isFriSat ? 'purple' : 'amber',
          icon: isFriSat ? 'fish' : 'bread'
        },
        rules: {
          fasting: 'Required: One full meal at midday or evening, plus two small collations.',
          abstinence: isFriSat
            ? 'Complete abstinence from meat.'
            : 'Meat allowed once at the primary meal.',
          allowed: 'Simple foods, fish, vegetables, pulses, bread.',
          avoid: 'Snacking between meals, second full meals.'
        },
        obligation: 'Traditional Latin canonical rule across the 40 days of Lent.',
        theology: 'The faithful emulate the desert fast of Moses, Elijah, and the Lord Jesus Christ, putting the flesh to death for the life of the spirit.',
        scripture: {
          ref: 'Psalm 35:13',
          text: 'I humbled my soul with fasting; and my prayer returned into mine own bosom.'
        },
        prayer: 'O God, who purifiest Thy Church by the yearly observance of Lent: grant unto Thy household that what they seek to obtain from Thee by fasting, they may follow up by good works.'
      };
    }

    // Traditional Friday throughout the year
    if (dayOfWeek === 5) {
      if (solemnityName) {
        return getDayPenanceStatus(dateInput, 'universal');
      }
      return {
        isPenitential: true,
        type: 'abstinence',
        title: 'Friday of Abstinence (Venerdì di Astinenza)',
        subtitle: 'Universal Memorial of the Crucifixion',
        badge: { label: 'Abstinence from Meat', color: 'purple', icon: 'fish' },
        rules: {
          fasting: 'Voluntary fasting commendable.',
          abstinence: 'Strict abstinence from flesh meat.',
          allowed: 'Fish, seafood, dairy, eggs, vegetables, legumes, fruits.',
          avoid: 'All meat from land animals and poultry.'
        },
        obligation: 'Binding on all faithful age 14 and older.',
        theology: 'An uninterrupted Catholic practice originating in the apostolic age: Friday abstinence honors the flesh of the Son of God offered for our redemption.',
        scripture: {
          ref: 'Galatians 2:20',
          text: 'I am crucified with Christ: nevertheless I live; yet not I, but Christ liveth in me.'
        },
        prayer: 'We adore Thee, O Christ, and we praise Thee, because by Thy Holy Cross Thou hast redeemed the world.'
      };
    }

    return getDayPenanceStatus(dateInput, 'universal');
  }

  // -------------------------------------------------------------
  // 3. EASTERN CHRISTIAN / BYZANTINE TRADITION
  // -------------------------------------------------------------
  if (tradition === 'eastern') {
    const orthodoxEaster = calculateOrthodoxEaster(year);
    const cleanMonday = addDays(orthodoxEaster, -48);
    const lazarusSaturday = addDays(orthodoxEaster, -8);
    const holyWeekEnd = addDays(orthodoxEaster, -1);

    const isGreatLent = date >= cleanMonday && date <= holyWeekEnd;

    // Nativity Fast (Nov 15 - Dec 24)
    const isNativityFast =
      (month === 11 && dayOfMonth >= 15) || (month === 12 && dayOfMonth <= 24);

    // Dormition Fast (Aug 1 - Aug 14)
    const isDormitionFast = month === 8 && dayOfMonth >= 1 && dayOfMonth <= 14;

    // Apostles Fast (Second Monday after Pentecost to June 28)
    const pentecostOrth = addDays(orthodoxEaster, 49);
    const apostlesStart = addDays(pentecostOrth, 8);
    const apostlesEnd = new Date(year, 5, 28);
    const isApostlesFast = date >= apostlesStart && date <= apostlesEnd;

    // Strict Eastern Single-Day Fasts
    const isTheophanyEve = month === 1 && dayOfMonth === 5;
    const isBeheadingJohn = month === 8 && dayOfMonth === 29;
    const isCrossElevation = month === 9 && dayOfMonth === 14;

    if (isTheophanyEve || isBeheadingJohn || isCrossElevation) {
      const title = isTheophanyEve
        ? 'Eve of Theophany (Paramon)'
        : isBeheadingJohn
        ? 'Beheading of Saint John the Baptist'
        : 'Universal Elevation of the Precious Cross';
      return {
        isPenitential: true,
        type: 'byzantine_strict',
        title,
        subtitle: 'Strict Eastern Fast Day (No meat, fish, dairy, wine, or oil)',
        badge: { label: 'Strict Byzantine Fast', color: 'vermilion', icon: 'bread' },
        rules: {
          fasting: 'Strict xerophagy: simple plant food, no oil or wine.',
          abstinence: 'Total abstinence from meat, poultry, dairy, eggs, fish, wine, and olive oil.',
          allowed: 'Vegetables, bread, water, fruit, nuts, honey, pulses.',
          avoid: 'Meat, fish, dairy products, eggs, alcohol, cooking oil.'
        },
        obligation: 'Traditional Byzantine rule observed by Eastern Christians.',
        theology: 'Commemorates holy asceticism and deep reverence for the sacred mysteries and martyrdom.',
        scripture: {
          ref: 'Matthew 3:4',
          text: 'And the same John had his raiment of camel\'s hair, and a leathern girdle about his loins; and his meat was locusts and wild honey.'
        },
        prayer: 'By the prayers of Thy holy Forerunner, O Christ our God, cleanse our minds and bestow peace upon our souls.'
      };
    }

    if (isGreatLent) {
      const isHolyWeek = date >= addDays(orthodoxEaster, -7);
      return {
        isPenitential: true,
        type: 'byzantine_fast',
        title: isHolyWeek ? 'Great and Holy Week' : 'Great Lent (Tessaracoste)',
        subtitle: isHolyWeek
          ? 'Strict Fast of the Passion of the Lord'
          : 'The Great Forty Days of Orthodox Fasting',
        badge: { label: isHolyWeek ? 'Strict Holy Week Fast' : 'Great Lent Fast', color: 'purple', icon: 'fish' },
        rules: {
          fasting: 'Monastic: xerophagy on weekdays. Lay discipline: abstinence from all animal products.',
          abstinence: 'Abstain from meat, dairy, eggs, and fish (fish permitted on Annunciation & Palm Sunday). Wine and oil permitted on Saturdays and Sundays.',
          allowed: 'Grains, legumes, vegetables, fruits, shellfish, nuts, bread.',
          avoid: 'Meat, poultry, milk, butter, cheese, eggs, fish (most days).'
        },
        obligation: 'Observed with deep devotion across Eastern Christendom.',
        theology: 'Great Lent is an arena of spiritual warfare (Podvig) to free the soul from passions and enter into the uncreated light of the Resurrection.',
        scripture: {
          ref: 'Prayer of St. Ephrem',
          text: 'O Lord and Master of my life, take from me the spirit of sloth, despair, lust of power, and idle talk. But give rather the spirit of chastity, humility, patience, and love to Thy servant.'
        },
        prayer: 'Yea, O Lord and King, grant me to see my own transgressions, and not to judge my brother, for blessed art Thou unto ages of ages. Amen.'
      };
    }

    if (isDormitionFast || isNativityFast || isApostlesFast) {
      const seasonName = isDormitionFast
        ? 'Dormition Fast (Uspensky)'
        : isNativityFast
        ? 'Nativity Fast (St. Philip\'s Fast)'
        : 'Apostles\' Fast';

      return {
        isPenitential: true,
        type: 'byzantine_fast',
        title: seasonName,
        subtitle: 'Eastern Seasonal Fasting Period',
        badge: { label: 'Seasonal Fast', color: 'purple', icon: 'bread' },
        rules: {
          fasting: 'Regular fasting with moderation.',
          abstinence: 'Abstain from meat, dairy, and eggs. Fish, wine, and oil permitted on designated feast days and weekends.',
          allowed: 'Plant-based foods, legumes, bread, nuts, fruits, seafood.',
          avoid: 'Meat, animal fats, dairy products.'
        },
        obligation: 'Traditional Eastern seasonal discipline.',
        theology: 'Prepares the faithful to receive the Mother of God, the Holy Apostles, or the Incarnate Lord in purity of spirit.',
        scripture: {
          ref: 'Philippians 4:8',
          text: 'Finally, brethren, whatsoever things are true, honest, just, pure, lovely, of good report; think on these things.'
        },
        prayer: 'Sanctify our bodies and souls, O Lord, and guide our steps in the light of Thy commandments.'
      };
    }

    // Weekly Eastern Wednesday & Friday Fast
    if (dayOfWeek === 3 || dayOfWeek === 5) {
      return {
        isPenitential: true,
        type: 'byzantine_fast',
        title: dayOfWeek === 3 ? 'Wednesday Fast (The Betrayal)' : 'Friday Fast (The Crucifixion)',
        subtitle: 'Apostolic Weekly Fast (Didache Ch. 8)',
        badge: { label: dayOfWeek === 3 ? 'Wednesday Fast' : 'Friday Fast', color: 'purple', icon: 'fish' },
        rules: {
          fasting: 'Abstain from meat, dairy, eggs, and on strict weeks wine and oil.',
          abstinence: 'Fish, wine, and oil permitted when a feast coincides.',
          allowed: 'Lenten vegetarian foods, grains, legumes, vegetables, bread.',
          avoid: 'Meat and animal dairy products.'
        },
        obligation: 'Ancient apostolic discipline attested since the 1st Century.',
        theology: 'Wednesday recalls Judas Iscariot\'s betrayal; Friday commemorates Christ\'s death on the Cross.',
        scripture: {
          ref: 'Didache 8:1',
          text: 'Let not your fasts be with the hypocrites, for they fast on Mondays and Thursdays, but you shall fast on Wednesdays and Fridays.'
        },
        prayer: 'Lord Jesus Christ, Son of God, have mercy on me, a sinner.'
      };
    }

    return getDayPenanceStatus(dateInput, 'universal');
  }

  return getDayPenanceStatus(dateInput, 'universal');
}

// Generates an array of day statuses for an entire month
export function getMonthPenanceDays(year, monthIndex, tradition = 'universal') {
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  const days = [];

  for (let d = 1; d <= daysInMonth; d++) {
    const curDate = new Date(year, monthIndex, d);
    const status = getDayPenanceStatus(curDate, tradition);
    days.push({
      day: d,
      date: curDate,
      ...status
    });
  }

  return days;
}

// Comprehensive Spiritual & Canonical Reference
export const PENANCE_GUIDE = {
  pillars: [
    {
      title: 'Prayer (Preghiera)',
      icon: 'heart',
      desc: 'Opens our interior dwelling to God\'s transforming grace. Fasting without prayer is mere diet; with prayer, it is spiritual elevation.'
    },
    {
      title: 'Fasting (Digiuno)',
      icon: 'bread',
      desc: 'Mastery over bodily appetites. Re-orders our desires toward heavenly nourishment and purifies the spiritual eye.'
    },
    {
      title: 'Almsgiving (Elemosina)',
      icon: 'share',
      desc: 'Shares the fruits of our sacrifice with the hungry and afflicted. What we withhold from ourselves belongs by justice to the poor.'
    }
  ],
  definitions: [
    {
      term: 'Fasting (Digiuno)',
      summary: 'Quantity of Food • Limit to One Full Meal',
      details: 'Prescribes eating only one full meal a day, with two smaller collations that together do not equal another full meal. Snacking between meals is prohibited. Pure liquids (water, coffee, tea) are permitted at all times. Obligatory for healthy Catholics from age 18 to 59 on Ash Wednesday and Good Friday.'
    },
    {
      term: 'Abstinence (Astinenza)',
      summary: 'Quality of Food • Refraining from Meat',
      details: 'Requires refraining from eating the flesh meat of warm-blooded land animals and birds (beef, chicken, pork, lamb). Fish, shellfish, amphibians, eggs, dairy products, and seasonings made from animal fat are permitted. Obligatory for all Catholics from age 14 onwards on Ash Wednesday, Good Friday, and all Fridays of the year (unless a Solemnity falls on that Friday).'
    },
    {
      term: 'Strict Fast (Digiuno Stretto)',
      summary: 'Fasting & Abstinence Combined',
      details: 'Both rules apply simultaneously: only one full meal and two small snacks, with total abstinence from all meat. Prescribed canonically on Ash Wednesday and Good Friday, and traditionally on sacred Vigils.'
    },
    {
      term: 'Interior & Digital Fasting',
      summary: 'Fasting from Sin, Anger, and Screens',
      details: 'As St. John Chrysostom taught, real fasting means keeping the tongue from slander, the mind from impure malice, and the eyes from vanity. In our digital era, fasting from social media, relentless notifications, and screen distractions opens sacred space for silence and contemplation.'
    }
  ],
  exemptions: [
    'The physically sick, chronically ill, or convalescing (e.g., diabetics, cardiac patients, undergoing medical therapy).',
    'Pregnant women and nursing mothers.',
    'Children under the age of 14 (abstinence) and youth under 18 (fasting).',
    'The elderly aged 60 and over (for fasting; abstinence remains recommended as health permits).',
    'Heavy manual laborers, construction workers, and soldiers whose daily duties require strenuous physical exertion.',
    'Travelers facing extreme travel constraints or where no compliant food is obtainable.'
  ],
  patristicQuotes: [
    {
      author: 'St. John Chrysostom',
      quote: 'Do you fast? Give me proof of it by your works! If you see a poor man, take pity on him; if an enemy, be reconciled with him; if your friend is doing well, do not be envious.'
    },
    {
      author: 'St. Basil the Great',
      quote: 'Fasting gives birth to prophets and strengthens the mighty; fasting makes lawgivers wise. Fasting is a good safeguard for the soul, a steadfast companion for the body, a weapon for the valiant, a gymnasium for athletes.'
    },
    {
      author: 'St. Augustine of Hippo',
      quote: 'Fasting cleanses the soul, raises the mind, subjects one\'s flesh to the spirit, renders the heart contrite and humble, scatters the clouds of concupiscence, puts out the fire of lust, and kindles the true light of chastity.'
    },
    {
      author: 'Pope St. Leo the Great',
      quote: 'What we spend on our table in ordinary times, let us spend in feeding the poor during this sacred fast.'
    }
  ]
};
