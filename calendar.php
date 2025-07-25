<?php
// dobbiamo includere il file connection per connettersi con la bancadati
include "connection.php"

// creo tre variabili

$success_msg = '';
$error_msg = '';
// un array per contenere gli eventi raccolti
$events_from_db = [];