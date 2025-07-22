<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calendar Project</title>
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css' integrity='sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==' crossorigin='anonymous'/>
    <link rel="stylesheet" href="./css/style.css"/>
</head>
<body>
    <header>
        <h1><i class="fa-solid fa-calendar-days"></i>Course Calendar <br> My Calendar Project</h1>
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
        <label for="course-name">Course Title:</label>
        <input type="text" name="course_name" id="course-name" required>
        <label for="instructor-name">Instructor Name:</label>
        <input type="text" name="instructor_name" id="instructor-name" required>
        <label for="start-date">Start Date:</label>
        <input type="date" name="start_date" id="start-date" required>
        <label for="end-date">End Date:</label>
        <input type="date" name="end_date" id="end-date" required>
        <button type="submit">Salva<i class="fa-solid fa-floppy-disk"></i></button>

      </form>
</body>
</html>