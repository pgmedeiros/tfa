const fullscreenButton = document.getElementById('fullscreen');
		const frame            = document.getElementById('frame');
		fullscreenButton.addEventListener('click', () => {
			frame.requestFullscreen().catch(err => {
				console.log('erro ao tentar entrar em tela cheia');
			});
		});		
		  const create = async () => {
		  try {
			  const registration = await navigator.serviceWorker.register('sw.js')
			  console.log('Service Worker registrado.:', registration)
			  await cheerpjInit()
			  console.log('cheerpj iniciado com sucesso.')
			  cheerpjCreateDisplay(-1,-1, document.getElementById('frame'))
			  await cheerpjRunJar("/app/TFA.jar")
			  console.log('jar executado com sucesso.')
		  } catch(error) {
			  alert(error)
			}
	  	}
	  	create()

