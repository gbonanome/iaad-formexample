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
				div.innerHTML = '<p class="no-result">Nessun risultato</p>'
			}
			else {
				// Cosa succede se c'è uno o più risultati

				// Utilizzo un ciclo per scorrere tutti i risultati.
				// Poichè resp è un array, ovvero una lista di oggetti,
				// possiamo scorrerli utilizzando un "indice" (i) che viene
				// incrementato automaticamente. Nel nostro caso
				// dentro a resp[0] ci sarà la stringa {"ID":"1","Nome":"Polisucco","Tempo":"4544","IDEffetto":"2"}
				// dentro a resp[1] ci sarà la stringa {"ID":"3","Nome":"Elisir","Tempo":"6","IDEffetto":"1"}
				// dentro a resp[2] ci sarà la stringa {"ID":"4","Nome":"Tonico di drago","Tempo":"56","IDEffetto":"1"}
				// ecc. ecc.
				const ul = document.createElement('ul');

				for (var i = 0; i < resp.length; i++) {
					// Creo un elemento <li> e uno <span>
					const li = document.createElement('li');
					const span = document.createElement('span');
					// Come testo inserisco la stringa
					// Nome, mentre Tempo la inserisco all'interno
					// dello span. "Nome" e "Tempo" sono le colonne della 
					// mia tabella Pozioni ovvero quello che mi è stato restituito 
					// sotto forma di JSON dalla query fatta da server.php
					span.textContent = resp[i].Tempo;
					li.textContent = resp[i].Nome;
					li.appendChild(span);
					// Costruisco la lista
					ul.appendChild(li);
				}
				// Stampo la lista all'interno del <div> risultati 
				div.appendChild(ul)
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