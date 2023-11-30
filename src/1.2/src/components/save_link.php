<?php

require 'db_connection.php';
session_start();

$email = $_SESSION['email'];

$longLink = $_POST['longLink'];
$shortLink = $_POST['shortLink'];

$sql = "SELECT `userId` FROM `users` WHERE  `email` = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $userId = $row['userId']; 
} else {
        echo "Нет результатов";
    }

$stmt->close();
$conn->close();

require 'db_connection.php';   
$sql = "SELECT id FROM link ORDER BY id DESC LIMIT 1";


$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $lastId = $row['id'];
    $currentId = $lastId +1;
} else {
    echo "Нет результатов";
}



$stmt = $conn->prepare("INSERT INTO `link` (id, userId, longUrl, shortUrl) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $currentId, $userId, $longLink, $shortLink);
$stmt->execute();

$stmt->close();
$conn->close();

// Возвращаем успешный HTTP-ответ
http_response_code(200);
?>