<?php
    
    // Rinomina auth.example.php in auth.php e cambi i valori a seconda della tua configurazione locale
    include("auth.php");

    // Crea una connessione al DB
    $db = new mysqli($host, $user, $password, $name, $port);

    // Se ci sono problemi interrompe lo script e restituisce un errore
    if($db->connect_errno > 0){
      	die('Unable to connect to database [' . $db->connect_error . ']');
    }

    // Crea una variabile per usare la chiave di ricerca dal form
    $nomePozione = '';

    // Esegue le operazion di ricerca solo se il metodo utilizzato è POST
    if ($_SERVER["REQUEST_METHOD"] == "POST") {	

        // Inserisce il valore della chiave di ricerca nella variabile $nome
        $nomePozione =  $_POST['chiave'] ;

        // La query SQL di ricerca
        $sql = <<<SQL
            SELECT *
            FROM `Pozioni`
            WHERE `Nome` LIKE '%$nomePozione%' 
        SQL;

        // Esegue la query e mette i risultati nella variabile $result
        $result = $db->query($sql);

        // Se ci sono problemi interrompe lo script e restituisce un errore
        if(!$result){
           	 die('There was an error running the query [' . $db->error . ']');
        }

        // Crea un array chiamato $rows in cui mettere tutti i risultati.
        $rows = array();
        while($row = $result->fetch_assoc()){
        	$rows[] = $row;
        }

        // Imposta gli header della risposta HTTP
        header('Content-type: application/json');

        // Inserisce nella risposta HTTP i risultati sotto forma di JSON
        // Poichè la query seleziona tutte le colonne della tabella (SELECT *)
        // il JSON avrà una struttura del tipo "nome colonna":"valore"
        // Per la tabella Pozioni ad esempio avremo un file con
        // {"ID":"1","Nome":"Polisucco","Tempo":"4544","IDEffetto":"2"},{"ID":"3","Nome":"Elisir","Tempo":"6","IDEffetto":"1"}, ...
        echo json_encode($rows);

        // Libera la memoria e chiude la connessione con il DB
        $result->free();
        $db->close();
    }
?>
