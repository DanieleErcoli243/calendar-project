<?php
// dobbiamo includere il file connection per connettersi con la bancadati
include "connection.php"

// creo tre variabili

$success_msg = '';
$error_msg = '';
// un array per contenere gli eventi raccolti
$events_from_db = [];

// gestire l'aggiunta di un appuntamento

if ($_SERVER("REQUEST_METHOD") === "POST" && ($_POST['action'] ?? '') === "add") {
    $course = trim($_POST["course_name"] ?? "");
    $instructor = trim($_POST["instructor_name"] ?? "");
    $start = $_POST["start_date"] ?? "";
    $end = $_POST["end_date"] ?? "";

    
}