<?php
// Creating connection
include("connection.php");

// Getting POST inputs
$name = $_POST["name"];
$email = $_POST["email"];
$phone = $_POST["phone"];
$message = $_POST["message"];

// SQL query to insert inputs to my database table
$query = $mysqli->prepare("INSERT INTO users(full_name, email, phone_number, message) VALUES (?, ?, ?,?)");
$query->bind_param("ssis", $name, $email, $phone, $message);
// Excuting my SQL query

$query->execute();

$response = [];
$response["success"] = true;
// Encoding results
echo json_encode($response);
 ?>
