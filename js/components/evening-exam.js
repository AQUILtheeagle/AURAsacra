// Evening Examination of Conscience with Night Protection of Christ Modal for Aura Sacra
import { icons } from '../icons.js';
import { t, getLanguage } from '../i18n.js';

const EVENING_EXAM_LOCALIZATIONS = {
  it: {
    title: 'Compieta • Esame della Sera e Protezione',
    sub: (s) => `Passo ${s} di 4 • Meditazione serale prima del santo riposo`,
    step1Title: '1. Memoria dei Doni (Gratitudine)',
    step1Text: 'Entra nel silenzio. Ripercorri le ore di questa giornata e ringrazia Dio per <strong>tre grazie specifiche</strong> (un incontro, un pasto, un aiuto nello studio o nel lavoro, la salute).',
    step1Quote: '«Ti rendo grazie, Signore, con tutto il cuore; non dimentico nessuno dei tuoi benefici.»',
    step2Title: '2. Riconciliazione e Perdono',
    step2Text: 'Riconosci con umiltà le parole aspre, i pensieri impuri, la pigrizia o le mancanze di oggi. Chiedi perdono a Dio e perdona di cuore chiunque ti abbia ferito.',
    step2Quote: '«Crea in me un cuore puro, o Dio, rinnova in me uno spirito saldo. Nel Tuo perdono trovo la pace.»',
    step3Title: '3. Invocazione della Protezione Notturna di Cristo',
    step3Text: 'Prega per la custodia contro incubi, angosce notturne e ogni insidia spirituale:',
    step3Prayer1: '«Signore Gesù Cristo, stendi la Tua mano protettrice sulla mia casa e su questo letto. La Tua presenza sia il mio scudo contro ogni paura, incubo o pensiero tenebroso della notte.»',
    step3Prayer2: '«Manda i Tuoi santi angeli a custodire il mio sonno e tutte le persone che amo. Visita questa dimora e tieni lontano da essa ogni insidia del nemico.»',
    step3Ps: '📖 Salmo 4:9 • «In pace mi corico e subito mi addormento: tu solo, Signore, al sicuro mi fai riposare.»',
    step4Title: '4. Abbandono del Riposo a Dio',
    step4Text: 'Lascia andare ogni ansia per il domani. Il domani appartiene alla provvidenza amorosa del Padre. Chiudi gli occhi nella Sua pace.',
    step4Quote: '«Nelle tue mani, Signore, raccomando il mio spirito.»',
    prev: '← Precedente',
    next: 'Avanti →',
    complete: 'Buona notte nel Signore • Concludi'
  },
  ro: {
    title: 'Pavecernița • Cercetarea de Seară și Ocrotirea',
    sub: (s) => `Pasul ${s} din 4 • Meditație de seară înainte de odihna sfântă`,
    step1Title: '1. Amintirea Darurilor (Mulțumire)',
    step1Text: 'Intră în tăcere. Privește peste orele acestei zile și mulțumește-I lui Dumnezeu pentru <strong>trei daruri anume</strong> (o întâlnire, o masă, ajutor la învățătură sau muncă, sănătate).',
    step1Quote: '«Binecuvântează, suflete al meu, pe Domnul, şi nu uita toate binefacerile Lui!»',
    step2Title: '2. Împăcare și Iertare',
    step2Text: 'Mărturisește cu smerenie cuvintele aspre, gândurile necurate sau nepăsarea de astăzi. Cere iertare de la Dumnezeu și iartă din inimă pe oricine te-a supărat.',
    step2Quote: '«Inimă curată zideşte întru mine, Dumnezeule, şi duh drept înnoieşte întru cele dinlăuntru ale mele.»',
    step3Title: '3. Chemarea Ocrotirii de Noapte a lui Hristos',
    step3Text: 'Rostește rugăciunea pentru izbăvire de coșmaruri, frici de noapte și toată vătămarea duhovnicească:',
    step3Prayer1: '«Doamne Iisuse Hristoase, întinde mâna Ta ocrotitoare peste casa mea și peste acest așternut. Prezența Ta să fie scut împotriva oricărei frici, coșmar sau gând întunecat al nopții.»',
    step3Prayer2: '«Trimite pe sfinții Tăi îngeri să păzească somnul meu și al celor dragi mie. Cercetează acest sălaș și alungă de la el toate cursele vrăjmașului.»',
    step3Ps: '📖 Psalmul 4:8 • «Cu pace mă voi culca şi voi adormi, că Tu, Doamne, îndeosebi întru nădejde m-ai aşezat.»',
    step4Title: '4. Încredințarea Odihnei în Mâinile Domnului',
    step4Text: 'Lasă deoparte orice grijă pentru ziua de mâine. Mâine este în purtarea de grijă a Tatălui ceresc. Închide ochii întru pacea Sa.',
    step4Quote: '«În mâinile Tale, Doamne, încredințez duhul meu.»',
    prev: '← Înapoi',
    next: 'Înainte →',
    complete: 'Noapte bună întru Domnul • Încheie'
  },
  la: {
    title: 'Completorium • Examen Vespertinum et Tutela',
    sub: (s) => `Gradus ${s} ex 4 • Meditatio vespertina ante sanctam quietem`,
    step1Title: '1. Memoria Donorum (Gratiarum Actio)',
    step1Text: 'In silentium intra. Respice horas huius diei et gratias age Deo pro tribus gratiis praecipuis.',
    step1Quote: '«Benedic anima mea Domino, et noli oblivisci omnes retributiones ejus.»',
    step2Title: '2. Reconciliatio et Venia',
    step2Text: 'Humiliter agnosce defectus, verba dura vel cogitationes vanas. Pete veniam a Deo et remitte omnibus qui te laeserunt.',
    step2Quote: '«Cor mundum crea in me, Deus: et spiritum rectum innova in visceribus meis.»',
    step3Title: '3. Invocatio Tutelae Nocturnae Christi',
    step3Text: 'Ora pro tutela contra pavores nocturnos et omnem spiritum noxium:',
    step3Prayer1: '«Domine Jesu Christe, extende manum tuam super domum meam et stratum meum. Praesentia tua sit scutum meum contra omnem timorem noctis.»',
    step3Prayer2: '«Mitte sanctos angelos tuos ut custodiant somnum meum. Visita habitationem istam et omnes insidias inimici longe ab ea repelle.»',
    step3Ps: '📖 Psalmus 4:9 • «In pace in idipsum dormiam, et requiescam: quoniam tu, Domine, singulariter in spe constituisti me.»',
    step4Title: '4. Commendatio Quietis in Deo',
    step4Text: 'Dimitte omnem sollicitudinem crastini diei. Crastinum in divina providentia manet. Claude oculos in pace Eius.',
    step4Quote: '«In manus tuas, Domine, commendo spiritum meum.»',
    prev: '← Praecedens',
    next: 'Deinde →',
    complete: 'Sancta nox in Domino • Finis'
  },
  en: {
    title: 'Compline • Evening Examination & Protection',
    sub: (s) => `Step ${s} of 4 • Evening meditation before holy rest`,
    step1Title: '1. Memory of Gifts (Gratitude)',
    step1Text: 'Enter into stillness. Look back over the hours of this day and thank God for <strong>three specific graces</strong> (an encounter, a meal, guidance in study or work, health).',
    step1Quote: '«I give thanks to you, Lord, with all my heart; I forget none of your benefits.»',
    step2Title: '2. Reconciliation & Forgiveness',
    step2Text: 'Humbly acknowledge any harsh words, impure thoughts, procrastination, or failings today. Ask God for mercy and forgive anyone who hurt you.',
    step2Quote: '«Create in me a pure heart, O God, and renew a steadfast spirit within me. In Your forgiveness I find rest.»',
    step3Title: '3. Invocation of Christ\'s Night Protection',
    step3Text: 'Pray for deliverance and guarding against nightmares, night anxiety, and all spiritual harm:',
    step3Prayer1: '«Lord Jesus Christ, extend Your protecting hand over my home and upon this bed. May Your precious presence be my shield against all fear, nightmares, or dark thoughts of the night.»',
    step3Prayer2: '«Send Your holy angels to watch over my sleep and all those I love. Visit this dwelling and drive far from it all snares of the enemy.»',
    step3Ps: '📖 Psalm 4:8 • «I will both lay me down in peace, and sleep: for thou, Lord, only makest me dwell in safety.»',
    step4Title: '4. Surrendering Your Rest to God',
    step4Text: 'Let go of all anxiety about tomorrow. Tomorrow belongs to the Father\'s loving providence. Close your eyes in His peace.',
    step4Quote: '«Into Your hands, Lord, I commend my spirit.»',
    prev: '← Previous',
    next: 'Next →',
    complete: 'Good Night in the Lord • Complete'
  },
  es: {
    title: 'Completas • Examen Vespertino y Protección',
    sub: (s) => `Paso ${s} de 4 • Meditación vespertina antes del descanso santo`,
    step1Title: '1. Memoria de los Dones (Gratitud)',
    step1Text: 'Entra en silencio. Repasa las horas de este día y agradece a Dios por <strong>tres gracias específicas</strong> (un encuentro, una comida, ayuda en el estudio o trabajo, la salud).',
    step1Quote: '«Bendice, alma mía, a Jehová, y no olvides ninguno de sus beneficios.»',
    step2Title: '2. Reconciliación y Perdón',
    step2Text: 'Reconoce con humildad las palabras ásperas, pensamientos impuros o faltas de hoy. Pide perdón a Dios y perdona de corazón a quien te haya ofendido.',
    step2Quote: '«Crea en mí, oh Dios, un corazón limpio, y renueva un espíritu recto dentro de mí.»',
    step3Title: '3. Invocación de la Protección Nocturna de Cristo',
    step3Text: 'Ora por la protección contra pesadillas, angustias nocturnas y todo mal espiritual:',
    step3Prayer1: '«Señor Jesucristo, extiende Tu mano protectora sobre mi hogar y este lecho. Tu santa presencia sea mi escudo contra todo temor, pesadilla o pensamiento oscuro de la noche.»',
    step3Prayer2: '«Envía a Tus santos ángeles a custodiar mi sueño y a mis seres queridos. Visita esta morada y aleja de ella todas las insidias del enemigo.»',
    step3Ps: '📖 Salmo 4:8 • «En paz me acostaré, y asimismo dormiré; porque solo tú, Jehová, me haces vivir confiado.»',
    step4Title: '4. Abandono del Descanso en Dios',
    step4Text: 'Deja ir toda ansiedad por el mañana. El mañana pertenece a la amorosa providencia del Padre. Cierra los ojos en Su paz.',
    step4Quote: '«En tus manos, Señor, encomiendo mi espíritu.»',
    prev: '← Anterior',
    next: 'Siguiente →',
    complete: 'Buenas noches en el Señor • Concluir'
  },
  fr: {
    title: 'Complies • Examen du Soir et Protection',
    sub: (s) => `Étape ${s} sur 4 • Méditation du soir avant le saint repos`,
    step1Title: '1. Mémoire des Dons (Gratitude)',
    step1Text: 'Entrez dans le silence. Repassez les heures de cette journée et remerciez Dieu pour <strong>trois grâces précises</strong> (une rencontre, un repas, une aide dans le travail, la santé).',
    step1Quote: '«Mon âme, bénis l\'Éternel, et n\'oublie aucun de ses bienfaits!»',
    step2Title: '2. Réconciliation et Pardon',
    step2Text: 'Reconnaissez avec humilité les paroles dures, les pensées impures ou les manquements d\'aujourd\'hui. Demandez pardon à Dieu et pardonnez de tout cœur à qui vous a blessé.',
    step2Quote: '«Ô Dieu! crée en moi un cœur pur, renouvelle en moi un esprit bien disposé.»',
    step3Title: '3. Invocation de la Protection Nocturne du Christ',
    step3Text: 'Priez pour être préservé des cauchemars, des angoisses nocturnes et de tout mal spirituel:',
    step3Prayer1: '«Seigneur Jésus-Christ, étends Ta main protectrice sur ma maison et sur ce lit. Que Ta sainte présence soit mon bouclier contre toute peur et toute pensée sombre de la nuit.»',
    step3Prayer2: '«Envoie Tes saints anges garder mon sommeil et ceux que j\'aime. Visite cette demeure et éloigne d\'elle tous les pièges de l\'ennemi.»',
    step3Ps: '📖 Psaume 4:8 • «Je me couche et je m\'endors en paix, car toi seul, ô Éternel! tu me fais habiter en sécurité.»',
    step4Title: '4. Remise du Repos à Dieu',
    step4Text: 'Laissez toute inquiétude pour demain. Le lendemain appartient à la tendre providence du Père. Fermez les yeux dans Sa paix.',
    step4Quote: '«Entre tes mains, Seigneur, je remets mon esprit.»',
    prev: '← Précédent',
    next: 'Suivant →',
    complete: 'Bonne nuit dans le Seigneur • Terminer'
  },
  de: {
    title: 'Komplet • Abendliche Gewissenserforschung und Schutz',
    sub: (s) => `Schritt ${s} von 4 • Abendmeditation vor der heiligen Ruhe`,
    step1Title: '1. Erinnerung an die Gaben (Dankbarkeit)',
    step1Text: 'Gehe in die Stille. Schau auf die Stunden dieses Tages zurück und danke Gott für <strong>drei besondere Gnaden</strong> (eine Begegnung, ein Mahl, Hilfe bei der Arbeit, Gesundheit).',
    step1Quote: '«Lobe den HERRN, meine Seele, und vergiss nicht, was er dir Gutes getan hat.»',
    step2Title: '2. Versöhnung und Vergebung',
    step2Text: 'Erkenne in Demut harte Worte, unreine Gedanken oder Versäumnisse des heutigen Tages. Bitte Gott um Vergebung und vergib von Herzen jedem, der dich verletzt hat.',
    step2Quote: '«Schaffe in mir, Gott, ein reines Herz, und gib mir einen neuen, beständigen Geist.»',
    step3Title: '3. Anrufung des nächtlichen Schutzes Christi',
    step3Text: 'Bete um Schutz vor Alpträumen, nächtlichen Ängsten und allem geistlichen Schaden:',
    step3Prayer1: '«Herr Jesus Christus, breite Deine schützende Hand über mein Heim und diese Ruhestätte aus. Deine heilige Gegenwart sei mein Schild gegen alle Furcht der Nacht.»',
    step3Prayer2: '«Sende Deine heiligen Engel, um meinen Schlaf und meine Lieben zu behüten. Besuche diese Wohnstatt und wende alle Nachstellungen des Feindes fern von ihr ab.»',
    step3Ps: '📖 Psalm 4:9 • «Ich liege und schlafe ganz mit Frieden; denn allein du, HERR, hilfst mir, dass ich sicher wohne.»',
    step4Title: '4. Hingabe der Ruhe an Gott',
    step4Text: 'Lass alle Sorge für das Morgen los. Das Morgen ruht in der väterlichen Vorsehung Gottes. Schließe die Augen in Seinem Frieden.',
    step4Quote: '«In Deine Hände, Herr, befehle ich meinen Geist.»',
    prev: '← Zurück',
    next: 'Weiter →',
    complete: 'Gesegnete Nacht im Herrn • Abschließen'
  },
  pt: {
    title: 'Completas • Exame da Noite e Proteção',
    sub: (s) => `Passo ${s} de 4 • Meditação noturna antes do santo descanso`,
    step1Title: '1. Memória dos Dons (Gratidão)',
    step1Text: 'Entra no silêncio. Recorda as horas deste dia e agradece a Deus por <strong>três graças específicas</strong> (um encontro, uma refeição, auxílio nos estudos ou trabalho, saúde).',
    step1Quote: '«Bendize, ó minha alma, ao Senhor, e não te esqueças de nenhum de seus benefícios.»',
    step2Title: '2. Reconciliação e Perdão',
    step2Text: 'Reconhece com humildade palavras ásperas, pensamentos impuros ou faltas de hoje. Pede perdão a Deus e perdoa de coração a quem te ofendeu.',
    step2Quote: '«Cria em mim, ó Deus, um coração puro, e renova em mim um espírito reto.»',
    step3Title: '3. Invocação da Proteção Noturna de Cristo',
    step3Text: 'Ora pelo auxílio contra pesadelos, angústias noturnas e ciladas espirituais:',
    step3Prayer1: '«Senhor Jesus Cristo, estende a Tua mão protetora sobre a minha casa e sobre este leito. A Tua santa presença seja o meu escudo contra todo o medo da noite.»',
    step3Prayer2: '«Envia os Teus santos anjos para guardarem o meu sono e as pessoas que amo. Visita esta morada e afasta dela todas as ciladas do inimigo.»',
    step3Ps: '📖 Salmo 4:8 • «Em paz também me deitarei e dormirei, porque só tu, Senhor, me fazes habitar em segurança.»',
    step4Title: '4. Entrega do Descanso a Deus',
    step4Text: 'Deixa partir toda a ansiedade pelo amanhã. O amanhã pertence à amorosa providência do Pai. Fecha os olhos na Sua santa paz.',
    step4Quote: '«Nas tuas mãos, Senhor, entrego o meu espírito.»',
    prev: '← Anterior',
    next: 'Seguinte →',
    complete: 'Boa noite no Senhor • Concluir'
  },
  ru: {
    title: 'Повечерие • Вечернее испытание совести и покров',
    sub: (s) => `Шаг ${s} из 4 • Вечернее созерцание перед святым покоем`,
    step1Title: '1. Память о благодеяниях (Благодарение)',
    step1Text: 'Пребудь в безмолвии. Вспомни часы прошедшего дня и возблагодари Бога за <strong>три особые милости</strong> (встречу, трапезу, помощь в труде или учении, здравие).' ,
    step1Quote: '«Благослови, душа моя, Господа и не забывай всех благодеяний Его.»',
    step2Title: '2. Примирение и Прощение',
    step2Text: 'Смиренно осознай резкие слова, нечистые помыслы или нерадение сегодняшнего дня. Исповедуй грех пред Богом и прости от сердца всякого, кто обидел тебя.',
    step2Quote: '«Сердце чистое созижди во мне, Боже, и дух правый обнови внутри меня.»',
    step3Title: '3. Призывание ночного покрова Христова',
    step3Text: 'Помолись о защите от ночных кошмаров, тревог и всякого духовного вреда:',
    step3Prayer1: '«Господи Иисусе Христе, простри десницу Твою на дом сей и на одр сей. Присутствие Твое да будет щитом от всякого ночного страха и темного помысла.»',
    step3Prayer2: '«Посли святых Твоих ангелов хранить сон мой и близких моих. Посети обитель сию и удали от нее все козни лукавого.»',
    step3Ps: '📖 Псалом 4:9 • «Спокойно ложусь я и сплю, ибо Ты, Господи, един даешь мне жить в безопасности.»',
    step4Title: '4. Предание покоя в руки Божии',
    step4Text: 'Оставь всякую тревогу о завтрашнем дне. Завтрашний день — в любящем промысле Отца. Закрой очи в Его мире.',
    step4Quote: '«В руки Твои, Господи, предаю дух мой.»',
    prev: '← Назад',
    next: 'Далее →',
    complete: 'Доброй ночи о Господе • Завершить'
  }
};

export function renderEveningExamModal(container, onClose) {
  let step = 1;

  function render() {
    const lang = getLanguage();
    const loc = EVENING_EXAM_LOCALIZATIONS[lang] || EVENING_EXAM_LOCALIZATIONS.en;

    container.innerHTML = `
      <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
        <div class="bg-[var(--bg-card)] border-2 border-amber-600/40 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative space-y-6 parchment-border">
          
          <!-- Close Button -->
          <button id="btn-close-exam" class="absolute top-4 right-4 text-stone-400 hover:text-white p-1 cursor-pointer">
            ${icons.close('w-5 h-5')}
          </button>

          <!-- Header -->
          <div class="text-center">
            <div class="w-12 h-12 rounded-full border border-amber-500/40 bg-[var(--bg-secondary)] flex items-center justify-center mx-auto text-amber-500 mb-2">
              ${icons.moon('w-6 h-6')}
            </div>
            <h2 class="text-2xl font-bold font-display text-[var(--accent-vermilion)]">
              ${loc.title}
            </h2>
            <p class="text-xs text-[var(--text-muted)] italic font-serif">
              ${loc.sub(step)}
            </p>
          </div>

          <!-- Step Content -->
          <div class="min-h-[220px] flex flex-col justify-center">
            ${step === 1 ? `
              <div class="space-y-3 animate-fade-in text-left">
                <span class="text-xs font-bold uppercase tracking-wider text-amber-600 font-sans">${loc.step1Title}</span>
                <p class="text-sm font-serif leading-relaxed text-[var(--text-primary)]">
                  ${loc.step1Text}
                </p>
                <div class="p-3 bg-[var(--bg-secondary)] rounded-xl border border-stone-300 dark:border-stone-800 text-xs italic text-[var(--text-secondary)] notranslate" translate="no">
                  ${loc.step1Quote}
                </div>
              </div>
            ` : step === 2 ? `
              <div class="space-y-3 animate-fade-in text-left">
                <span class="text-xs font-bold uppercase tracking-wider text-amber-600 font-sans">${loc.step2Title}</span>
                <p class="text-sm font-serif leading-relaxed text-[var(--text-primary)]">
                  ${loc.step2Text}
                </p>
                <div class="p-3 bg-red-950/20 border border-red-500/30 rounded-xl text-xs sm:text-sm font-serif italic text-[var(--text-primary)] notranslate" translate="no">
                  ${loc.step2Quote}
                </div>
              </div>
            ` : step === 3 ? `
              <div class="space-y-3 animate-fade-in text-left">
                <span class="text-xs font-bold uppercase tracking-wider text-red-500 font-sans flex items-center gap-1.5">
                  ${icons.shield('w-4 h-4')}
                  <span>${loc.step3Title}</span>
                </span>
                <p class="text-xs text-[var(--text-muted)] italic">
                  ${loc.step3Text}
                </p>
                <div class="p-4 bg-[var(--bg-secondary)] border-2 border-red-600/40 rounded-xl space-y-2 text-xs sm:text-sm font-serif text-[var(--text-primary)] leading-relaxed notranslate" translate="no">
                  <p class="italic font-bold text-[var(--accent-vermilion)] notranslate" translate="no">
                    ${loc.step3Prayer1}
                  </p>
                  <p class="italic text-[var(--text-secondary)] notranslate" translate="no">
                    ${loc.step3Prayer2}
                  </p>
                  <p class="font-sans font-bold text-amber-600 text-xs text-right notranslate" translate="no">
                    ${loc.step3Ps}
                  </p>
                </div>
              </div>
            ` : `
              <div class="space-y-3 animate-fade-in text-center">
                <span class="text-xs font-bold uppercase tracking-wider text-emerald-500 font-sans">${loc.step4Title}</span>
                <p class="text-base font-serif italic text-[var(--text-primary)] leading-relaxed">
                  ${loc.step4Text}
                </p>
                <div class="candle-wrapper py-2 scale-110">
                  <div class="candle-flame"></div>
                  <div class="candle-wick"></div>
                  <div class="candle-body"></div>
                </div>
                <p class="text-xs text-[var(--text-muted)] notranslate" translate="no">
                  ${loc.step4Quote}
                </p>
              </div>
            `}
          </div>

          <!-- Navigation Footer -->
          <div class="flex items-center justify-between pt-2 border-t border-stone-200 dark:border-stone-800">
            ${step > 1 ? `
              <button id="btn-prev-step" class="px-4 py-2 rounded-xl border border-stone-300 dark:border-stone-700 text-xs font-medium text-[var(--text-secondary)] hover:border-amber-600 cursor-pointer">
                ${loc.prev}
              </button>
            ` : '<div></div>'}

            ${step < 4 ? `
              <button id="btn-next-step" class="px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-md transition cursor-pointer">
                ${loc.next}
              </button>
            ` : `
              <button id="btn-complete-exam" class="px-6 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs shadow-md transition cursor-pointer">
                ${loc.complete}
              </button>
            `}
          </div>

        </div>
      </div>
    `;

    // Listeners
    container.querySelector('#btn-close-exam').addEventListener('click', onClose);

    const prevBtn = container.querySelector('#btn-prev-step');
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        if (step > 1) {
          step--;
          render();
        }
      });
    }

    const nextBtn = container.querySelector('#btn-next-step');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (step < 4) {
          step++;
          render();
        }
      });
    }

    const completeBtn = container.querySelector('#btn-complete-exam');
    if (completeBtn) {
      completeBtn.addEventListener('click', onClose);
    }
  }

  render();
}
