window.addEventListener( "load", function () {
	function sendData(method, action) {
		const XHR = new XMLHttpRequest();

		// Bind the FormData object and the form element
		const FD = new FormData( form );

		// Define what happens on successful data submission
		XHR.addEventListener( "load", function(event) {
			// Log the response to help debug
			console.log(event.target.responseText);

			const div = document.querySelector('#result');
			// Clear previous results if present
			while (div.firstChild) {
			  div.removeChild(div.firstChild);
			}

			const resp = JSON.parse(event.target.responseText);

			if (resp.result.length === 0) {
				// What to do if we do NOT have any result
				div.innerHTML = "<p>Nessun risultato</p>"
			}
			else {
				// What to do if we HAVE have some results

				for (var i = 0; i < resp.result.length; i++) {
					// Create a paragraph under #result div
					const para = document.createElement('p');
					// Insert a string with name and time
					para.textContent = resp.result[i].row.Nome + " " + resp.result[i].row.Tempo;
					// Print <p> tags under #result div
					div.appendChild(para);
				}
			}

		} );

		// Define what happens in case of error
		XHR.addEventListener( "error", function( event ) {
			console.log( 'Oops! Something went wrong.' );
		} );

		// Set up our request
		XHR.open( method, action );

		// The data sent is what the user provided in the form
		XHR.send( FD );
	}

	// Access the form element...
	let form = document.getElementById( "searchForm" );

	// ...and take over its submit event.
	form.addEventListener( "submit", function ( event ) {
		event.preventDefault();

		sendData(form.method, form.action);
	} );
} );