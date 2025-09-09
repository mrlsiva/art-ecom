<?php
$to = "pmrlsivas@gmail.com";  // replace with your real email
$subject = "Test Email";
$message = "This is a test email from PHP.";
$headers = "From: no-reply@example.com";

if (mail($to, $subject, $message, $headers)) {
    echo "Mail sent successfully.";
} else {
    echo "Mail sending failed.";
}
?>
