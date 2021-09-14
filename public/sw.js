// Installing the serviceWorker
  const CACHE_NAME = "version-1";
  const urlToCache = ['index.html', 'offline.html']

  const self = this;
//Listening for the request
  self.addEventListener('install',(event)=>{
    event.waitUntill(
      caches.open(CACHE_NAME)
        .then((cache)=>{
          console.log("cache is open")
          return cache.addAll(urlToCache);
        })
    )
  })
//Activating the serviceWorker