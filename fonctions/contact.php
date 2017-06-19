<?php
$TO = "cv@bustin-jeremy.fr";

$h  = "From: " . $TO;

$message = "";
/*envoie boucle avec les clés et valeurs des inputs*/
while (list($key, $val) = each($_POST)) {
  $message .= "$key : $val\n";
}

mail($TO, $subject, $message, $h);

Header("Location: ../valid.html");


?>
