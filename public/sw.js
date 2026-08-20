// Service Worker for Corex Tek-Academy
// Caches static assets for offline capability and improved performance

const CACHE_NAME = 'corextekacademy-v1'
const STATIC_CACHE = 'corextekacademy-static-v1'
const RUNTIME_CACHE = 'corextekacademy-runtime-v1'

// Assets to cache on install
const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json'
]

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => cache.addAll(PRECACHE_ASSETS))
      .then(() => self.skipWaiting())
  )
})

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((cacheName) => cacheName !== STATIC_CACHE && cacheName !== RUNTIME_CACHE)
            .map((cacheName) => caches.delete(cacheName))
        )
      })
      .then(() => self.clients.claim())
  )
})

// Fetch event - serve from cache with network fallback
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') return

  // Skip API calls and external resources
  if (event.request.url.includes('api') || 
      event.request.url.includes('supabase') ||
      !event.request.url.startsWith(self.location.origin)) {
    return
  }

  // Skip navigation requests to let Vue Router handle HTML5 history mode
  if (event.request.mode === 'navigate') {
    return
  }

  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          // Serve from cache, but update in background
          fetchAndCache(event.request)
          return cachedResponse
        }

        // Not in cache, fetch from network
        return fetchAndCache(event.request)
      })
  )
})

// Fetch and cache response
function fetchAndCache(request) {
  return fetch(request)
    .then((response) => {
      // Don't cache non-successful responses
      if (!response || response.status !== 200 || response.type !== 'basic') {
        return response
      }

      // Clone response since it can only be consumed once
      const responseToCache = response.clone()

      caches.open(RUNTIME_CACHE)
        .then((cache) => {
          // Cache images, CSS, JS, fonts
          if (request.destination === 'image' ||
              request.destination === 'style' ||
              request.destination === 'script' ||
              request.destination === 'font') {
            cache.put(request, responseToCache)
          }
        })

      return response
    })
    .catch(() => {
      // Return cached version if network fails
      return caches.match(request)
    })
}

// Cache size management - limit runtime cache
self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING') {
    self.skipWaiting()
  }
})

// Clean up runtime cache periodically
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.open(RUNTIME_CACHE)
      .then((cache) => {
        // Keep only last 50 entries in runtime cache
        return cache.keys()
          .then((keys) => {
            if (keys.length > 50) {
              const keysToDelete = keys.slice(0, keys.length - 50)
              return Promise.all(keysToDelete.map(key => cache.delete(key)))
            }
          })
      })
  )
})