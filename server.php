<?php
    
    // Rename auth.example.php in auth.php and change values accordingly your configuration
    include("auth.php");

    $db = new mysqli($host, $user, $password, $name, $port);

    if($db->connect_errno > 0){
      	die('Unable to connect to database [' . $db->connect_error . ']');
    }

    $nome = '';
    if ($_SERVER["REQUEST_METHOD"] == "POST") {	

        $nome =  $_POST['chiave'] ;

        $sql = <<<SQL
            SELECT *
            FROM `Pozioni`
            WHERE `Nome` LIKE '%$nome%' 
        SQL;

        if(!$result = $db->query($sql)){
           	 die('There was an error running the query [' . $db->error . ']');
        }

        $rows = array();
        while($row = $result->fetch_assoc()){
        	$rows[] = array('row'=>$row);
        }

        header('Content-type: application/json');
        echo json_encode(array('result'=>$rows));

        $result->free();
    }
?>
