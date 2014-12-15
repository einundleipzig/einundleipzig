<?php
// Check for empty fields
if(empty($_POST['name'])  		||
   empty($_POST['email']) 		||
   empty($_POST['message'])	||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "No arguments Provided!";
	return false;
   }
	
$name = $_POST['name'];
$email_address = $_POST['email'];
$message = $_POST['message'];

$empfaenger = "wolfgang@einundleipzig.de";
$betreff = "einundleipzig Kontaktformular: " . $name;
$from = "From: einundleipzig Kontakt <kontakt@einundleipzig.de>\n";
$from .= "Reply-To: " . $email_address . "\n";
$from .= "Content-Type: text/html\n";
$text = "Neue Nachricht auf einundleipzig.\n\n" . "Details:\n\nName: " . $name . "\n\nEmail: " . $email_address . "\n\nNachricht:\n " . $message;

mail($empfaenger, $betreff, $text, $from);
return true;			
?>