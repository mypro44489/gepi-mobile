<?php
	$host="localhost";
	$uname="root";
	$pwd="";
	$dbase="gestecole";
	$conn=mysqli_connect($host,$uname,$pwd,$dbase);
	if(!$conn){
		die();
	}else{
		header('Access-Control-Allow-Origin: *');
	}
?>
