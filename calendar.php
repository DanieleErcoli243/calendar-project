<?php
// dobbiamo includere il file connection per connettersi con la bancadati
include "connection.php";

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
    $start_time = $_POST["start_time"] ?? "";
    $end_time = $_POST["end_time"] ?? "";
    // scrivo una stringa sql

    if ($course && $instructor && $instructor && $start && $end) {
        $stmt = $conn->prepare(
            "INSERT INTO appointments (course_name, instructor_name, start_date, end_date, start_time, end_time) VALUES (?, ?, ?, ?, ?, ?)"
        ); 
    }

    $stmt->bind_param("ssssss", $course, $instructor, $start, $end, $start_time, $end_time);

    $stmt->execute();
    $stmt->close();

    header("Location: " . $_SERVER["PHP_SELF"] . "?success=1");
    exit;
} else {
    header("Location: " . $_SERVER["PHP_SELF"] . "?error=1");
    exit;
}

// gestire la modifica di un appuntamento

if($_SERVER["REQUEST_METHOD"] === "POST" && ($_POST["action"]) === 'edit') {
    $id = $POST["event_id"] ?? null;
    $course = trim($_POST["course_name"] ?? "");
    $instructor = trim($_POST["instructor_name"] ?? "");
    $start = $_POST["start_date"] ?? "";
    $end = $_POST["end_date"] ?? "";
    $start_time = $_POST["start_time"] ?? "";
    $end_time = $_POST["end_time"] ?? "";

    if ($course && $instructor && $instructor && $start && $end) {
        $stmt = $conn->prepare(
            "UPDATE appointments SET course_name = ?, instructor_name = ?, start_date = ?, end_date = ?, start_time = ?, end_time = ? WHERE id = ?"
        ); 

        $stmt = bind_param("ssssssi", $course, $instructor, $start, $end, $start_time, $end_time, $id);
        $stmt->execute();
        $stmt->close();
          header("Location: " . $_SERVER["PHP_SELF"] . "?success=2");
    exit;
    } else {
    header("Location: " . $_SERVER["PHP_SELF"] . "?error=2");
    exit;
}
}

// gestire la cancellazione dell'appuntamento

if($_SERVER["REQUEST_METHOD"] === "POST" && ($_POST["action"]) === 'delete') {
    $id = $POST["event_id"] ?? null;
   
    if ($id) {
        $stmt = $conn->prepare(
            "DELETE FROM appointments WHERE id = ?"
        ); 

        $stmt = bind_param("i", $id);
        $stmt->execute();
        $stmt->close();
          header("Location: " . $_SERVER["PHP_SELF"] . "?success=3");
    exit;
    } 
}


// messaggi di successo e di errore

if(isset($_GET["success"])) {
    $success_msg = match($_GET["success"]) {
        "1" => "Appointment added successfully",
        "2" => "Appointment updated successfully",
        "3" => "Appointment deleted successfully",
        default => ''
    };
}

if (isset($_GET["error"])) {
    $error_msg = 'Error occurred. Please, check your input';
}

// raccogliere tuttli gli appuntamenti e distribuirli

$result = $conn->query("SELECT * aapointments");

if ($result && $result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $start = new DateTime($row["start_date"]);
        $end = new DateTime($row["end_date"]);

        while($start < $end) {
            $events_from_db[] = [
                "id" => $row['id'],
                "title" => "{$row['course_name']} - {$row['instructor_name']}",
                "date" => $start->format('d, m, Y'),
                "start" => $row['start_date'],
                "end" => $row['end_date'],
                "start_time" => $row['start_time'],
                "end_time" => $row['end_time'],
            ];

            $start->modify('+1 day');
        }
    }
}

$conn->close()

?>