<?php
// Check for empty fields
if(empty($_POST['name'])  		||
   empty($_POST['email']) 		||
   empty($_POST['message'])	||
   !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL))
   {
	echo "No arguments Provided!";
	return false;
   }
   
// Vars   
$name = $_POST['name'];
$email_address = $_POST['email'];
$message = $_POST['message'];
$empfaenger = "wolfgang@einundleipzig.de";
$betreff = "einundleipzig Kontaktformular: " . $name;

// Headers
$from = "From: einundleipzig Kontakt <kontakt@einundleipzig.de>\r\n";
$from .= "Reply-To: " . $email_address . "\r\n";
$from .= "Content-Type: text/plain; charset=UTF-8\r\n";
$from .= "Content-Transfer-Encoding: 8bit";

// The actual text
$text = "Neue Nachricht auf einundleipzig:\r\n";
$text .= "Name: " . $name . "\r\n";
$text .= "Email: " . $email_address . "\r\n\r\n";
$text .= "Nachricht:\r\n" . $message;

// Send the mail
mail($empfaenger, $betreff, $text, $from);
return true;	
?>