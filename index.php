<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calendar Project</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet">
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css' integrity='sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==' crossorigin='anonymous'/>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <header>
        <h1><i class="fa-solid fa-calendar-days"></i> Course Calendar <br> My Calendar Project</h1>
    </header>
    <!-- orologio -->
    <div class="clock-container">
        <div id="clock">

        </div>
    </div>
    <!-- sezione del calendario -->
    <div class="calendar">
        <div class="nav-btn-container">
            <button class="nav-btn"><i class="fa-solid fa-arrow-left"></i></button>
            <h2 id="month-year"></h2>
            <button class="nav-btn"><i class="fa-solid fa-arrow-right"></i></button>
        </div>
        <div class="calendar-grid" id="calendar"></div>
    </div>

    <!-- modale per aggiungere/modificare/cancellare un appuntamento -->
     <div class="modal" id="event-modal">
        <div class="modal-content">

            <div id="event-selector-wrapper">
               <label for="event-selector"><strong>Select Event</strong></label>
               <select name="" id="event-selector">
                   <option value="" disabled selected>Choose event...</option>
               </select>
            </div>
            <!-- modulo principale -->
             <form action="" method="POST" id="event-form">
               <input type="hidden" name="action" value="add" id="form-action">
               <input type="hidden" name="event-id" id="event-id">
               <label for="course-name">Titolo del corso:</label>
               <input type="text" name="course_name" id="course-name" required>
               <label for="instructor-name">Nome dell'istruttore:</label>
               <input type="text" name="instructor_name" id="instructor-name" required>
               <label for="start-date">Data d'inizio:</label>
               <input type="date" name="start_date" id="start-date" required>
               <label for="end-date">Data di fine:</label>
               <input type="date" name="end_date" id="end-date" required>
               <button type="submit">Salva<i class="fa-solid fa-floppy-disk"></i></button>
       
             </form>
       
             <!-- modulo per la cancellazione -->
              <form action="" method="POST" onsubmit="return confirm('Are you sure you want to delete this appointement?')">
              <input type="hidden" name="action" value="delete">
              <input type="hidden" name="event_id" id="delete-event-id">
              <button type="submit" class="submit-btn"><i class="fa-solid fa-trash-can"></i> Elimina</button>
       
              </form>
              <!-- cancellare -->
               <button type="button" class="submit-btn">Cancella</button>
        </div>
     </div>
        <script src="js/script.js"></script>
</body>
</html>