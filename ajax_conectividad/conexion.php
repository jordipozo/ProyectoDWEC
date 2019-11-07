<?php

$bd_host = "localhost:8889"; 
$bd_usuario = "root"; 
$bd_password = ""; 
$bd_base = "bd_jpc"; 

$con = mysql_connect($bd_host, $bd_usuario, $bd_password); 
mysql_select_db($bd_base, $con); 

//$con = new mysqli("localhost:8889", "jpc", "lamara1608", "bd_jpc");
if ($con->connect_errno)
{
    echo "Fallo al conectar a MySQL: (" . $con->connect_errno . ") " . $con->connect_error;
    exit();
}
@mysqli_query($con, "SET NAMES 'utf8'");
?>
