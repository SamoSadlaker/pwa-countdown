self.addEventListener("install", event => {
  console.log("Service worker installed");
  event.waitUntil(() => {
    caches.open('static').then(cache => {
      cache.addAll(['./', './style.css', './icons/icon-144.png'])
    });
  })

});
self.addEventListener("activate", event => {
  console.log("Service worker activated");
});

caches.open("pwa-assets")
  .then(cache => {
    cache.add("styles.css"); // it stores only one resource
  });