<?php
$to = 'paschasin1234@gmail.com';
$subject = 'Nuevo mensaje de Matamoros H';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $body = "
    <h2>Nuevo mensaje de contacto</h2>
    <p><strong>Nombre:</strong> $name</p>
    <p><strong>Email:</strong> $email</p>
    <p><strong>Mensaje:</strong></p>
    <p>$message</p>
    ";

    $headers = [
        'MIME-Version: 1.0',
        'Content-type: text/html; charset=UTF-8',
        'From: ' . $name . ' <' . $email . '>',
        'Reply-To: ' . $email
    ];

    if (mail($to, $subject, $body, implode("\r\n", $headers))) {
        header('Location: contacto_gracias.html');
    } else {
        header('Location: contacto.html?error=1');
    }
    exit;
} else {
    header('Location: contacto.html');
    exit;
}
?>