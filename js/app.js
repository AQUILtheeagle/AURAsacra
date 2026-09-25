// Aura Sacra Main Application Controller
import { initDB, getSetting } from './db.js';
import { initCircadianTheme, onThemeChange } from './circadian.js';
import { initSchedule, onScheduleChange } from './schedule.js';

// Components
import { renderNavbar } from './components/navbar.js';
import { renderSidebar } from './components/sidebar.js';
import { renderBottomNav } from './components/bottom-nav.js';
import { renderFloatingCandle } from './components/floating-candle.js';
import { renderBibleReader } from './components/bible-reader.js';
import { renderJesusChat } from './components/jesus-chat.js';
import { renderPrayerJournal } from './components/prayer-journal.js';
import { renderSaintsView } from './components/saints-view.js';
import { renderFocusMode } from './components/focus-mode.js';
import { renderPenanceCalendar } from './components/penance-calendar.js';

// Modals
import { renderOnboardingModal } from './components/onboarding-modal.js';
import { renderSOSTemptationModal } from './components/sos-temptation.js';
import { renderJarPromisesModal } from './components/jar-promises.js';
import { renderEveningExamModal } from './components/evening-exam.js';
import { renderFaithCompassModal } from './components/faith-compass.js';
import { renderShareCardModal } from './components/share-card.js';
import { renderScheduleModal } from './components/schedule-modal.js';
import { renderFeedbackModal } from './components/feedback-modal.js';
import { renderSettingsModal } from './components/settings-modal.js';
import { renderToolsModal } from './components/tools-modal.js';

let activeTab = 'bible';
let pendingPrayerForJesus = null;

async function bootstrap() {
  try { await initDB(); } catch (e) { console.warn('IndexedDB init:', e); }
  try { await initCircadianTheme(); } catch (e) { console.warn('Circadian init:', e); }
  try { await initSchedule(); } catch (e) { console.warn('Schedule init:', e); }

  const navbarContainer = document.getElementById('navbar-container');
  const sidebarContainer = document.getElementById('sidebar-container');
  const bottomNavContainer = document.getElementById('bottom-nav-container');
  const floatingCandleContainer = document.getElementById('floating-candle-container');
  const mainContent = document.getElementById('main-content');
  const modalsContainer = document.getElementById('modals-container');

  if (!navbarContainer || !mainContent) {
    console.error('DOM containers not ready yet');
    setTimeout(bootstrap, 50);
    return;
  }

  // Modal Open/Close Manager
  const openModal = (modalType, extraData = {}) => {
    modalsContainer.innerHTML = '';
    const close = () => { modalsContainer.innerHTML = ''; };

    switch (modalType) {
      case 'sos':
        renderSOSTemptationModal(modalsContainer, close);
        break;
      case 'promises':
        renderJarPromisesModal(modalsContainer, close, (quote, cit) => {
          openModal('share', { quote, citation: cit });
        });
        break;
      case 'evening':
        renderEveningExamModal(modalsContainer, close);
        break;
      case 'doubts':
        renderFaithCompassModal(modalsContainer, close, (questionText) => {
          pendingPrayerForJesus = questionText;
          navigate('chat');
        });
        break;
      case 'share':
        renderShareCardModal(modalsContainer, extraData.quote, extraData.citation, close);
        break;
      case 'schedule':
        renderScheduleModal(modalsContainer, close);
        break;
      case 'feedback':
        renderFeedbackModal(modalsContainer, close);
        break;
      case 'settings':
        renderSettingsModal(modalsContainer, close, () => {
          renderAllNavigation();
          renderActiveView();
        });
        break;
      case 'tools':
        renderToolsModal(modalsContainer, close, navigate, openModal);
        break;
      default:
        break;
    }
  };

  // Tab Navigation
  const navigate = (tabId) => {
    activeTab = tabId;
    renderAllNavigation();
    renderActiveView();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  function renderAllNavigation() {
    renderNavbar(navbarContainer, {}, navigate, openModal);
    renderSidebar(sidebarContainer, activeTab, navigate, openModal);
    renderBottomNav(bottomNavContainer, activeTab, navigate, openModal);
  }

  function renderActiveView() {
    mainContent.innerHTML = '';
    switch (activeTab) {
      case 'bible':
        renderBibleReader(mainContent, (quote, ref) => {
          openModal('share', { quote, citation: ref });
        });
        break;
      case 'chat':
        renderJesusChat(mainContent, pendingPrayerForJesus);
        pendingPrayerForJesus = null;
        break;
      case 'journal':
        renderPrayerJournal(mainContent, (prayerText) => {
          pendingPrayerForJesus = prayerText;
          navigate('chat');
        });
        break;
      case 'saints':
        renderSaintsView(mainContent, (quote, name) => {
          openModal('share', { quote, citation: name });
        });
        break;
      case 'focus':
        renderFocusMode(mainContent);
        break;
      case 'penance':
        renderPenanceCalendar(mainContent);
        break;
      default:
        renderBibleReader(mainContent, (quote, ref) => openModal('share', { quote, citation: ref }));
        break;
    }
  }

  // Reactive updates for liturgical theme and work/school schedule changes
  onThemeChange(() => {
    renderAllNavigation();
  });

  onScheduleChange(() => {
    renderAllNavigation();
  });

  // Render initial static components
  renderAllNavigation();
  renderActiveView();
  renderFloatingCandle(floatingCandleContainer);

  // Check Onboarding
  const onboardingCompleted = await getSetting('onboarding_completed', false);
  if (!onboardingCompleted) {
    renderOnboardingModal(modalsContainer, () => {
      modalsContainer.innerHTML = '';
      renderAllNavigation();
      renderActiveView();
    });
  }

  // Keyboard accessibility
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      modalsContainer.innerHTML = '';
    }
  });
}

// Launch safely across all browser lifecycle states
if (document.readyState === 'loading') {
  window.addEventListener('DOMContentLoaded', () => {
    bootstrap().catch(err => console.error('Bootstrap error:', err));
  });
} else {
  bootstrap().catch(err => console.error('Bootstrap error:', err));
}
