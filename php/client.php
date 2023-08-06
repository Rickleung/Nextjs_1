<?php
session_start();
header("Access-Control-Allow-Credentials: true");
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Accept, X-Access-Token, X-Application-Name, X-Request-Sent-Time');
date_default_timezone_set('Asia/Hong_Kong');
$servername = "localhost";
$username = "makerfac_0822";
$password = "Hangisfc12";
$dbname = "makerfac_DriverApp";
$clientname = $_POST["clientname"];
$phone = $_POST["phone"];
$email = $_POST["email"];
$fromLocation = $_POST["fromLocation"];
$toLocation = $_POST["toLocation"];
$content = $_POST["content"];



$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
    echo "連線失敗!請重試";
}
$sql = "INSERT INTO ClientTable (clientname, phone, email, fromLocation, toLocation, content )
VALUES ('".$clientname."', '".$phone."', '".$email."','".$fromLocation."','".$toLocation."','".$content."')";

if ($stmt->execute()) {
    echo "New record created successfully";
} else {
    echo "Error: " . $stmt->error;
}

$conn->close();

?>