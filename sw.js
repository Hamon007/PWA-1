// ═══════════════════════════════════════════════════════
// REBORN IN SHADOW — SERVICE WORKER
// Stale-while-revalidate + Update-Banner
// ═══════════════════════════════════════════════════════

const CACHE_NAME = 'reborn-v3.7';

const CACHE_FILES = [
  './',
  './index.html',
  './manifest.json',
  './src/engine.js',
  './src/data/prolog.js',
  './src/data/akt1.js',
  './src/data/akt2.js',
  './src/data/akt3.js',
  './src/data/akt4.js',
  './src/data/akt5.js',
  './src/data/akt6.js',
];

// Installation: alle Dateien cachen, sofort aktivieren
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(CACHE_FILES))
    // kein skipWaiting hier — wir warten bis der User bestätigt
  );
});

// Aktivierung: alten Cache löschen, Clients übernehmen
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
    )).then(() => self.clients.claim())
  );
});

// Fetch: Stale-while-revalidate
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.match(event.request).then((cached) => {
        const networkFetch = fetch(event.request).then((response) => {
          if (response && response.status === 200 && response.type === 'basic') {
            cache.put(event.request, response.clone());
          }
          return response;
        }).catch(() => null);

        return cached || networkFetch;
      });
    })
  );
});

// Update-Nachricht an alle Clients senden wenn neue Version wartet
self.addEventListener('message', (event) => {
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
  }
});
