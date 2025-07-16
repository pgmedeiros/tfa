self.addEventListener('fetch', function(event) {
  const originalRequest = event.request;

  if (!originalRequest.url.startsWith('https://pgmedeiros.github.io/TFA.jar')) {
    event.respondWith(fetch(originalRequest));
    return;
  }

  const modifiedRequest = new Request('https://pgmedeiros.github.io/tfa/TFA.jar', {
	  headers: originalRequest.headers, 
	  body: originalRequest.body,
	  method: originalRequest.method, 
	  redirect: 'follow'
  });

  event.respondWith(fetch(modifiedRequest));
});

self.addEventListener('activate', event => {
  event.waitUntil(clients.claim());
});
