<?php

// connect to local server by using MAMP

$conn = new mysqli("localhost", 'root', "", "course_calendar");
$conn->set_charset("utf8mb4");