<?php

$fullname = $_POST['fullname'];
$visitor_email = $_POST['email'];
$subject = $_POST['topic'];
$message = $_POST['message'];

$to = "micales@hotmail.se"

mail($to, $subject, $message, "Från: " . $fullname);

?>