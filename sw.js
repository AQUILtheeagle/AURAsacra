// Aura Sacra Service Worker - 100% Offline Caching with Instant Network Updates
const CACHE_NAME = 'aura-sacra-v1.0.4';
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
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('Purging old service worker cache:', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // Never intercept external APIs (e.g. Google Gemini Generative Language API)
  if (!url.origin.includes(self.location.origin)) {
    return;
  }

  // Network-First with Cache Fallback: guarantees users always get the newest code on reload
  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const cloned = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, cloned);
          });
        }
        return networkResponse;
      })
      .catch(() => {
        return caches.match(event.request).then((cachedResponse) => {
          if (cachedResponse) return cachedResponse;
          if (event.request.mode === 'navigate') {
            return caches.match('./index.html');
          }
        });
      })
  );
});
