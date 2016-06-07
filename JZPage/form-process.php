<?php

header("Refresh:3; url=http://jacintozaitzewsky.se/");

$fullname = $_POST['fullname'];
$visitor_email = $_POST['email'];
$subject = "Nytt meddelande från din hemsida!";
$message = $_POST['message'];

$to = "micales@jacintozaitzewsky.se";

mail($to, $subject, $message, "Från: " . $fullname . "\n E-post: " . $visitor_email);

echo '<link rel="stylesheet" href="css/custom.css">';
echo '<body style="background-color: #474747;"></body>';
echo '<h4 align="center" style="font-size: 5em; margin-top: 200px; font-family: sans-serif; color: #fff"> Tack för ditt mejl! </h4>';

exit();
?>