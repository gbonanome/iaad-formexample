// Tutto il codice all'interno di questa funzione viene 
// eseguito quando la pagina ha terminato il caricamento
window.addEventListener( "load", function () {

	// La funzione che invia i dati al webserver
	function sendData(method, action) {

		// Creiamo la richiesta HTTP
		const XHR = new XMLHttpRequest();

		// Costruiamo un oggetto FormData che contiene il nostro form
		const FD = new FormData( form );

		// Qui dentro c'è tutto quello che succede quando 
		// l'invio di dati avviene con successo
		XHR.addEventListener( "load", function(event) {
			
			// Stampo nella console la risposta dal server 
			// per un eventuale debug. La risposta potrebbe essere
			// corretta ma potrei avere errori di altro tipo dal DB
			console.log(event.target.responseText);

			// Seleziono il div dove stampare i risultati
			const div = document.querySelector('#result');
			
			// Rimuovo tutto il contenuto del div con id result,
			// nel caso in cui stessi facendo una nuova ricerca
			while (div.firstChild) {
			  div.removeChild(div.firstChild);
			}

			// Creo un oggetto che contiene la risposta JSON del webserver
			const resp = JSON.parse(event.target.responseText);

			if (resp.length === 0) {
				// Cosa succede se ho 0 risultati
				div.innerHTML = "<p>Nessun risultato</p>"
			}
			else {
				// Cosa succede se c'è uno o più risultati

				// Utilizzo un ciclo per scorrere tutti i risultati
				for (var i = 0; i < resp.length; i++) {
					// Creo un elemento paragrafo
					const para = document.createElement('p');
					// Come testo del paragrafo concateno 
					// le stringhe Nome e Tempo
					para.textContent = resp[i].Nome + " " + resp[i].Tempo;
					// Inserisco nel div dei risultati
					// il paragrafo appena creato
					div.appendChild(para);
				}
			}

		} );

		// Cosa succede quando l'invio dei dati non va a buon fine
		XHR.addEventListener( "error", function( event ) {
			console.log( 'Oops! Something went wrong.' );
		} );

		// Viene impostata la connessione
		XHR.open( method, action );

		// Vengono inviati i dati contenuti nel form 
		XHR.send( FD );
	}

	// Selezioniamo l'elemento con id searchForm
	let form = document.getElementById( "searchForm" );

	// e associamo un evento all'invio del modulo
	// ovvero quando viene premuto il tasto submit
	form.addEventListener( "submit", function ( event ) {
		event.preventDefault();

		// l'evento sarà la nostra funzione sendData (vedi sopra)
		sendData(form.method, form.action);
	} );
} );