// Aura Sacra Service Worker - 100% Offline & Airplane Mode Resilient
const CACHE_NAME = 'aura-sacra-v1.2.7';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './candle-popup.html',
  './manifest.json',
  './css/style.css',
  './js/app.js',
  './js/i18n.js',
  './js/db.js',
  './js/circadian.js',
  './js/schedule.js',
  './js/audio-engine.js',
  './js/ai-engine.js',
  './js/card-generator.js',
  './js/github-feedback.js',
  './js/icons.js',
  './data/bible-kjv.json',
  './data/bible-cei.json',
  './data/bible-sinodala.json',
  './data/bible-vulgata.json',
  './data/bible-reina.json',
  './data/bible-segond.json',
  './data/bible-luther.json',
  './data/bible-almeida.json',
  './data/bible-synodal.json',
  './js/data/scriptures.js',
  './js/data/scripture-archives.js',
  './js/data/penance.js',
  './js/data/penance-i18n.js',
  './js/data/promises.js',
  './js/data/doubts.js',
  './js/data/saints.js',
  './js/data/saints-i18n.js',
  './js/data/daily-saints.js',
  './js/components/navbar.js',
  './js/components/sidebar.js',
  './js/components/bottom-nav.js',
  './js/components/penance-calendar.js',
  './js/components/tools-modal.js',
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
  './icons/icon-512.png',
  'https://cdn.tailwindcss.com'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // Safe individual caching ensures that one failed asset never breaks entire offline install
      return Promise.all(
        ASSETS_TO_CACHE.map((url) => {
          return cache.add(url).catch((err) => {
            console.warn('Asset pre-cache deferred / offline:', url, err);
          });
        })
      );
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

  // Never intercept Google Gemini generative language API (live model inference)
  if (url.hostname.includes('generativelanguage.googleapis.com')) {
    return;
  }

  // Cache-First with Background Stale-While-Revalidate: Instant 0ms launch in Airplane Mode!
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // Revalidate in background when online
      const fetchPromise = fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const cloned = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, cloned);
            });
          }
          return networkResponse;
        })
        .catch(() => null); // Silent offline fallback

      // Return cached copy immediately (ideal for Airplane Mode)
      if (cachedResponse) {
        return cachedResponse;
      }

      // If not in cache, wait for network or return offline page
      return fetchPromise.then((networkResponse) => {
        if (networkResponse) return networkResponse;

        if (event.request.mode === 'navigate') {
          return caches.match('./index.html').then((navResponse) => {
            return navResponse || caches.match('./');
          });
        }

        return new Response('Offline Resource Unavailable', {
          status: 503,
          statusText: 'Service Unavailable'
        });
      });
    })
  );
});
