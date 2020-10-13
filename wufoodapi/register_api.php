

<?php

// Importing DBConfig.php file.
include 'DB_Config.php';

// Creating connection.
$con = mysqli_connect($HostName, $HostUser, $HostPass, $DatabaseName);

// Getting the received JSON into $json variable.
$json = file_get_contents('php://input');

// decoding the received JSON and store into $obj variable.
$obj = json_decode($json, true);


$username =  $obj['username'];
$password =  $obj['password'];
$name =  $obj['name'];
$age =  $obj['age'];
$email =  $obj['email'];
$address =  $obj['address'];
$phone =  $obj['phone'];

//Checking Email is already exist or not using SQL query.
$CheckSQL = "SELECT * FROM user WHERE username='$username'";

// Executing SQL Query.
$check = mysqli_fetch_array(mysqli_query($con, $CheckSQL));


if (isset($check)) {
	$EmailExistMSG = 'Email Already Exist, Please Try Again !!!';
	// Converting the message into JSON format.
	$EmailExistJson = json_encode($EmailExistMSG);
	// Echo the message.
	echo $EmailExistJson;
} else {

	// Creating SQL query and insert the record into MySQL database table.
	$Sql_Query = "INSERT INTO user(userID,user_name, user_age, user_address, user_email, username, password, phone) values ('','$name','$age','$address','$email','$username','$password','$phone')";

	// $Sql_Query = "insert into UserRegistrationTable (name,email,password) values ('$name','$email','$password')";


	if (mysqli_query($con, $Sql_Query)) {
		// If the record inserted successfully then show the message.
		$MSG = 'User Registered Successfully';
		// Converting the message into JSON format.
		$json = json_encode($MSG);
		// Echo the message.
		echo 'success';
	} else {
		echo 'Try Again';
	}
}
mysqli_close($con);
?>