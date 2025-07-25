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
    // se ci sono, salvo i dati nelle variabili 
    $course = trim($_POST["course_name"] ?? "");
    $instructor = trim($_POST["instructor_name"] ?? "");
    $start = $_POST["start_date"] ?? "";
    $end = $_POST["end_date"] ?? "";
    
    // scrivo una stringa sql

    if ($course && $instructor && $instructor && $end) {
        $stmt = $conn->prepare(
            "INSERT INTO appointments (course_name, instructor_name, start_date, end_date) VALUES (?, ?, ?, ?)"
        ); 
    }

    $stmt->bind_param("ssss", $course, $instructor, $start, $end);

    $stmt->execute();
    $stmt->close();

    header("Location: " . $_SERVER["PHP_SELF"] . "?success=1");
    exit;
} else {
    header("Location: " . $_SERVER["PHP_SELF"] . "?error=1");
    exit;
}

// gestire la modifica di un appuntamento 1:40:07