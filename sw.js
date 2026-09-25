// Aura Sacra Service Worker - 100% Offline Caching
const CACHE_NAME = 'aura-sacra-v1.0.0';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './candle-popup.html',
  './manifest.json',
  './css/style.css',
  './js/app.js',
  './js/db.js',
  './js/circadian.js',
  './js/schedule.js',
  './js/audio-engine.js',
  './js/ai-engine.js',
  './js/card-generator.js',
  './js/github-feedback.js',
  './js/icons.js',
  './data/bible-kjv.json',
  './js/data/scriptures.js',
  './js/data/promises.js',
  './js/data/doubts.js',
  './js/data/saints.js',
  './js/components/navbar.js',
  './js/components/sidebar.js',
  './js/components/bottom-nav.js',
  './js/components/bible-reader.js',
  './js/components/jesus-chat.js',
  './js/components/prayer-journal.js',
  './js/components/saints-view.js',
  './js/components/focus-mode.js',
  './js/components/floating-candle.js',
  './js/components/share-card.js',
  './js/components/settings-modal.js',
  './js/components/api-key-modal.js',
  './js/components/schedule-modal.js',
  './js/components/feedback-modal.js',
  './js/components/sos-temptation.js',
  './js/components/jar-promises.js',
  './js/components/evening-exam.js',
  './js/components/faith-compass.js',
  './js/components/onboarding-modal.js',
  './icons/favicon.png',
  './icons/logo.png',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).catch(() => {
        // Offline fallback for navigation requests
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      });
    })
  );
});
