// 'self' se refere ao próprio Service Worker
self.addEventListener('fetch', event => {
  // event.request contém todas as informações da requisição original
  console.log(`[Service Worker] Interceptando requisição para: ${event.request.url}`);
  console.log('Método:', event.request.method);

  if(event.request.url == "https://pgmedeiros.github.io/TFA.jar"){
    event.request.url = "https://pgmedeiros.github.io/tfa/TFA.jar"
    event.respondWith(fetch(event.request))
  }
});



