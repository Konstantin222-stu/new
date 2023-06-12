<?php
$mess = $_POST['phone']." ".$_POST['name'];
$headers =	'From: no-reply@example.com' . "\r\n" .
			'Reply-To: webmaster@example.com' . "\r\n" .
			'X-Mailer: PHP/' . phpversion();
if (isset($_POST['name']) && isset($_POST['phone'])&& isset($_POST['text']))
	if (mail("xxx.gmail.com", $_POST['text'], $mess, $headers)) {
		header("Location: index.html");
	} else {
		header("Location: index.html");
	}
?>