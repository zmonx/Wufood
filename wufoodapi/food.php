<?php
include 'config_file.php';
$message ='';

$conn =new mysqli($host_name,$host_user,$host_password,$database_name);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


$sql = "SELECT * FROM food"; 
$result = $conn ->query($sql);

if ($result->num_rows>0) {
	while ($row[]=$result->fetch_assoc()) {
		$item = $row;
		$json = json_encode($test);
		$test = array("food"=>$item);
		
	}
	}else{
		echo "No result";
}
print_r($test);
$conn->close();

