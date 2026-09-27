// SOS Peace & Temptation Shield Modal (Emergency grounding against temptation and spiritual distress)
import { icons } from '../icons.js';
import { t, getLanguage } from '../i18n.js';

const SOS_SCRIPTURE_ARCHIVES = {
  en: {
    ref: '1 Corinthians 10:13',
    version: 'King James Version (KJV 1611)',
    text: 'God is faithful, and he will not let you be tempted beyond what you can bear; but when you are tempted, he will also provide a way out so that you can endure it.'
  },
  it: {
    ref: '1 Corinzi 10:13',
    version: 'Conferenza Episcopale Italiana (CEI 2008)',
    text: 'Dio è fedele e non permetterà che siate tentati oltre le vostre forze, ma insieme con la tentazione vi darà anche il modo di uscirne per poterla sostenere.'
  },
  ro: {
    ref: '1 Corinteni 10:13',
    version: 'Biblia Sinodală Ortodoxă Română (1982)',
    text: 'Credincios este Dumnezeu; El nu va îngădui ca să fiţi ispitiţi peste puterile voastre, ci odată cu ispita va aduce şi scăparea din ea, ca să puteţi răbda.'
  },
  la: {
    ref: '1 ad Corinthios 10:13',
    version: 'Biblia Sacra Vulgata (Clementina 1592)',
    text: 'Fidelis autem Deus est, qui non patietur vos tentari supra id quod potestis, sed faciet etiam cum tentatione proventum ut possitis sustinere.'
  },
  es: {
    ref: '1 Corintios 10:13',
    version: 'Biblia Reina-Valera (1909)',
    text: 'Fiel es Dios, que no os dejará ser tentados más de lo que podéis llevar; antes dará también juntamente con la tentación la salida, para que podáis aguantar.'
  },
  fr: {
    ref: '1 Corinthiens 10:13',
    version: 'Bible Louis Segond (1910)',
    text: 'Dieu, qui est fidèle, ne permettra pas que vous soyez tentés au-delà de vos forces; mais avec la tentation il préparera aussi le moyen d\'en sortir, afin que vous puissiez la supporter.'
  },
  de: {
    ref: '1. Korinther 10:13',
    version: 'Lutherbibel (1912)',
    text: 'Gott ist getreu, der euch nicht lässt versuchen über euer Vermögen, sondern macht, dass die Versuchung so ein Ende gewinnt, dass ihr\'s könnet ertragen.'
  },
  pt: {
    ref: '1 Coríntios 10:13',
    version: 'Bíblia João Ferreira de Almeida (ARC)',
    text: 'Fiel é Deus, que não vos deixará tentar acima do que podeis, antes com a tentação dará também o escape, para que a possais suportar.'
  },
  ru: {
    ref: '1 Коринфянам 10:13',
    version: 'Синодальный перевод (1876)',
    text: 'Верен Бог, Который не попустит вам быть искушаемыми сверх сил, но при искушении даст и облегчение, так чтобы вы могли перенести.'
  }
};

const SOS_HEART_PRAYERS = {
  en: '«Lord Jesus Christ, Son of the Living God, have mercy on me. Break this chain of temptation, guard my eyes, my mind, and my hands. Grant me Your holy victory and peace. Amen!»',
  it: '«Signore Gesù Cristo, Figlio del Dio vivente, abbi pietà di me. Spezza questa catena di tentazione, custodisci i miei occhi, la mia mente e le mie mani. Donami la Tua santa vittoria e la Tua pace. Amen!»',
  ro: '«Doamne Iisuse Hristoase, Fiul lui Dumnezeu, miluiește-mă pe mine păcătosul. Sfărâmă acest lanț al ispitei, păzește-mi ochii, mintea și mâinile mele. Dăruiește-mi biruința și pacea Ta cea sfântă. Amin!»',
  la: '«Domine Jesu Christe, Fili Dei vivi, miserere mei. Disrumpe vincula tentationis, custodi oculos meos, mentem meam et manus meas. Dona mihi victoriam et pacem tuam sanctam. Amen.»',
  es: '«¡Señor Jesucristo, Hijo del Dios vivo, ten misericordia de mí! Rompe esta cadena de tentación, guarda mis ojos, mi mente y mis manos. Concédeme Tu santa victoria y Tu paz. ¡Amén!»',
  fr: '«Seigneur Jésus-Christ, Fils du Dieu vivant, aie pitié de moi. Brise cette chaîne de tentation, garde mes yeux, mon esprit et mes mains. Accorde-moi Ta sainte victoire et Ta paix. Amen!»',
  de: '«Herr Jesus Christus, Sohn des lebendigen Gottes, erbarme dich meiner. Zerbrich die Kette der Versuchung, behüte meine Augen, meine Gedanken und meine Hände. Schenke mir deinen heiligen Sieg und Frieden. Amen!»',
  pt: '«Senhor Jesus Cristo, Filho do Deus vivo, tem misericórdia de mim. Quebra esta corrente de tentação, guarda os meus olhos, a minha mente e as minhas mãos. Concede-me a Tua santa vitória e paz. Amém!»',
  ru: '«Господи Иисусе Христе, Сыне Божий, помилуй мя. Сокруши эти узы искушения, сохрани очи мои, ум мой и руки мои. Даруй мне святую победу и мир Твой. Аминь!»'
};

export function renderSOSTemptationModal(container, onClose) {
  let breathState = 'inhale'; // inhale, hold, exhale
  let countdown = 30;
  let timerInterval = null;

  function render() {
    const lang = getLanguage();
    const scriptureData = SOS_SCRIPTURE_ARCHIVES[lang] || SOS_SCRIPTURE_ARCHIVES.en;
    const heartPrayer = SOS_HEART_PRAYERS[lang] || SOS_HEART_PRAYERS.en;

    container.innerHTML = `
      <div class="fixed inset-0 z-50 overflow-y-auto overscroll-contain bg-black/75 backdrop-blur-md p-3 sm:p-6 flex min-h-full items-center justify-center animate-fade-in">
        <div class="bg-[var(--bg-card)] border-2 border-red-600 rounded-2xl sm:rounded-3xl max-w-md w-full max-h-[92dvh] sm:max-h-[88vh] overflow-y-auto overscroll-contain p-5 sm:p-6 text-center shadow-2xl relative space-y-5 sm:space-y-6 my-auto custom-scrollbar">
          
          <!-- Close Button -->
          <button id="btn-close-sos" class="absolute top-4 right-4 text-stone-400 hover:text-white p-1 cursor-pointer">
            ${icons.close('w-5 h-5')}
          </button>

          <!-- Header -->
          <div class="flex flex-col items-center">
            <div class="w-14 h-14 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg mb-2 sos-breathing">
              ${icons.shield('w-7 h-7')}
            </div>
            <h2 class="text-2xl font-bold font-display text-red-600">
              ${t('sos.title', 'SOS Peace & Temptation Shield')}
            </h2>
            <p class="text-xs text-[var(--text-muted)] italic font-serif">
              ${t('sos.sub', 'Pause for a moment. Do not yield to temptation or anxiety. Christ is right here with you.')}
            </p>
          </div>

          <!-- 30-Second Guided Calming Heart Breathing -->
          <div class="py-4">
            <div class="w-32 h-32 rounded-full border-4 border-red-500/40 bg-red-950/20 flex flex-col items-center justify-center mx-auto shadow-inner transition-all duration-1000 ${
              breathState === 'inhale' ? 'scale-110 border-red-500' : 'scale-90 border-amber-500'
            }">
              <span class="text-3xl font-mono font-bold text-red-500">${countdown}s</span>
              <span id="breath-label" class="text-xs font-bold uppercase tracking-wider text-amber-500 mt-1">
                ${breathState === 'inhale' ? t('sos.inhale', 'Inhale Grace') : breathState === 'hold' ? t('sos.hold', "Hold in God's Peace") : t('sos.exhale', 'Exhale Temptation')}
              </span>
            </div>
          </div>

          <!-- Scripture Shield of Victory (Authentic Archive Text) -->
          <div class="bg-[var(--bg-secondary)] border border-stone-300 dark:border-stone-800 rounded-xl p-4 text-left space-y-2 notranslate" translate="no">
            <div class="flex items-center justify-between text-xs font-bold text-red-500 uppercase tracking-wider notranslate" translate="no">
              <span class="flex items-center gap-1.5 notranslate" translate="no">
                ${icons.cross('w-4 h-4')}
                <span class="notranslate" translate="no">${scriptureData.ref}</span>
              </span>
              <span class="text-[10px] font-mono text-[var(--text-muted)] opacity-80 notranslate" translate="no">📖 ${scriptureData.version.split('(')[0].trim()}</span>
            </div>
            <p class="text-sm font-serif italic text-[var(--text-primary)] leading-relaxed notranslate" translate="no">
              «${scriptureData.text}»
            </p>
          </div>

          <!-- Instant Prayer of Victory (Localized Non-Biblical Prayer) -->
          <div class="border-l-4 border-red-600 bg-red-500/10 rounded-r-xl p-3 text-left text-xs sm:text-sm font-serif italic text-[var(--text-primary)]">
            <span class="font-bold not-italic text-red-600 block mb-1">${t('sos.prayerTitle', 'Instant Heart Prayer:')}</span>
            ${heartPrayer}
          </div>

          <!-- Finished Button -->
          <button id="btn-finish-sos" class="w-full py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm shadow-md transition transform active:scale-95 cursor-pointer">
            ${t('sos.finish', 'I Have Found Peace • Close Shield')}
          </button>

        </div>
      </div>
    `;

    // Listeners
    container.querySelector('#btn-close-sos').addEventListener('click', () => {
      clearInterval(timerInterval);
      onClose();
    });

    container.querySelector('#btn-finish-sos').addEventListener('click', () => {
      clearInterval(timerInterval);
      onClose();
    });
  }

  render();

  // Run the 30-second breathing cycle
  timerInterval = setInterval(() => {
    countdown--;
    if (countdown % 8 >= 4) {
      breathState = 'exhale';
    } else {
      breathState = 'inhale';
    }

    const label = container.querySelector('#breath-label');
    const cdEl = container.querySelector('.font-mono');
    if (cdEl) cdEl.textContent = `${countdown}s`;
    if (label) {
      label.textContent = breathState === 'inhale' ? t('sos.inhale', 'Inhale Grace') : t('sos.exhale', 'Exhale Temptation');
    }

    if (countdown <= 0) {
      clearInterval(timerInterval);
      countdown = 0;
      if (label) label.textContent = t('sos.hold', "Hold in God's Peace");
    }
  }, 1000);
}
