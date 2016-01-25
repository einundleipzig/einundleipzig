<?php
/**
 * Simple contact Form.
 *
 * @author Wolfgang Amann
 */

// Check for empty fields
if(empty($_POST['name']) ||
   empty($_POST['email']) ||
   empty($_POST['message']) ||
   !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
		echo "No arguments Provided!";
		return false;
}
   
// Vars   
$name = $_POST['name'];
$emailAddress = $_POST['email'];
$message = $_POST['message'];
$to = "kontakt@einundleipzig.de";
$subject = "einundleipzig Kontaktformular: " . $name;

// Headers
$from = "From: einundleipzig Kontakt <kontakt@einundleipzig.de>\r\n";
$from .= "Reply-To: " . $emailAddress . "\r\n";
$from .= "Content-Type: text/plain; charset=UTF-8\r\n";
$from .= "Content-Transfer-Encoding: 8bit";

// The actual text
$text = "Neue Nachricht auf einundleipzig:\r\n";
$text .= "Name: " . $name . "\r\n";
$text .= "Email: " . $emailAddress . "\r\n\r\n";
$text .= "Nachricht:\r\n" . $message;

// Send the mail
mail($to, $subject, $text, $from);
return true;	
?>