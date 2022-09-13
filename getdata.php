<?php
// Creating connection
include("connection.php");

// SQL query to get all records in my database table
$query = $mysqli->prepare("SELECT full_name, email, phone_number, message FROM users");
// Excuting my SQL query
$query->execute();
$array = $query->get_result();

$response = [];

// Storing the results
while($a = $array->fetch_assoc()){
    $response[] = $a;
}

// Encoding results
$json = json_encode($response);
echo $json;

 ?>
