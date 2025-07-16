self.addEventListener('fetch', function(event) {
  const originalRequest = event.request;

  // Não modifique requisições que não sejam para a sua API,
  // por exemplo, para evitar enviar seu token para o Google.
  if (!originalRequest.url.startsWith('https://pgmedeiros.github.io/')) {
    event.respondWith(fetch(originalRequest));
    return; // Encerra a execução para esta requisição
  }

  const newHeaders = new Headers(originalRequest.headers);

  const modifiedRequest = new Request(originalRequest, {
	  url: "https://pgmedeiros.github.io/tfa/TFA.jar",
  });

  event.respondWith(fetch(modifiedRequest));
});

self.addEventListener('activate', event => {
  event.waitUntil(clients.claim());
});
