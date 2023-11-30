<?php
require 'db_connection.php';

$data = json_decode(file_get_contents("php://input"));
$email_db = $data->email;
$password_input = $data->password;

$sql = "SELECT * FROM `users` WHERE `email` = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $email_db);
$stmt->execute();

$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $hash_db = $row['password'];

    if (password_verify($password_input, $hash_db)) {
        session_start();
        $_SESSION['email'] = $email_db;
        $stmt->close();
        $conn->close();
        echo json_encode(['status' => 'correct']);
        exit();
    }
}

// Если не удалось авторизоваться
$stmt->close();
$conn->close();
echo json_encode(['status' => 'wrong' ]);
exit();
?>