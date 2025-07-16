// 'self' se refere ao próprio Service Worker
self.addEventListener('fetch', event => {
  // event.request contém todas as informações da requisição original
  console.log(`[Service Worker] Interceptando requisição para: ${event.request.url}`);
  console.log('Método:', event.request.method);

  // Para deixar a requisição continuar normalmente, usamos event.respondWith
  // e passamos a requisição original para a função fetch.
  event.respondWith(fetch(event.request));

  // --- AQUI VOCÊ PODE MANIPULAR DE VERDADE ---
  // Ex: Você poderia retornar uma resposta customizada do cache
  // event.respondWith(
  //   caches.match(event.request)
  //     .then(response => {
  //       // Retorna do cache se encontrar, senão, faz a requisição de rede
  //       return response || fetch(event.request);
  //     })
  // );
});
