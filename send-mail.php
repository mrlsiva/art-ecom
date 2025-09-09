<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents("php://input"));

    $name = $data->name;
    $email = $data->email;
    $phone = $data->phone;
    $message = $data->message;

    $to = "pmrlsivas@gmail.com";
    $subject = "New Contact Form Submission";
    $body = "Name: $name\nEmail: $email\nPhone: $phone\nMessage:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(["message" => "Email sent successfully"]);
    } else {
        http_response_code(500);
        echo json_encode(["message" => "Failed to send email"]);
    }
} else {
    http_response_code(405);
    echo json_encode(["message" => "Method not allowed"]);
}
?>
