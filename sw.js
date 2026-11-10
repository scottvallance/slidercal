// Cache first per version; a new version installs alongside and takes over only when the user taps Update.
const CACHE = "slidecal-20261110-0800";
const SHELL = ["./", "index.html", "manifest.webmanifest", "icon-192.png", "icon-512.png", "apple-touch-icon.png"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL.map(u => new Request(u, {cache: "reload"}))))); });
self.addEventListener("message", e => { if (e.data === "skip") self.skipWaiting(); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  // Serve this version's saved copy so nothing changes under you; new versions arrive as a new worker.
  e.respondWith(caches.open(CACHE).then(async c => (await c.match(e.request, {ignoreSearch: true})) ||
    fetch(e.request).then(r => { if (r && (r.ok || r.type === "opaque")) c.put(e.request, r.clone()); return r; })
      .catch(() => e.request.mode === "navigate" ? c.match("index.html") : Response.error())));
});
