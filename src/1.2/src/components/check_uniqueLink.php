<?php
require 'db_connection.php';

$checkShortLink = $_POST["shortLink"];

$stmt = $conn->prepare("SELECT shortUrl FROM link WHERE shortUrl = ?");
$stmt->bind_param("s", $checkShortLink);
$stmt->execute();
$stmt->bind_result($result); 

if ($stmt->fetch()) { 
    echo 'not_unique';
} else {
    echo 'unique';
}

$stmt->close();
$conn->close();
?>