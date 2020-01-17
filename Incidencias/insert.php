<?php
require("connection.php");
// Campos de la tabla incomingIncidents
$codeT=1;
$desc=$_POST['descripcion'];
$userId=1;
//$assTeamId=sha1($_POST['password']);
//$tskDate=$_POST['nombre'];
//$assClassId=$_POST['apellido'];
//$solved=$_POST['usuario'];
//$current=$_POST['password'];
//$solDate=$_POST['password'];

//Insert
$sql="INSERT into usuarios (codeTask,description,idUser,idAssignedTeam,taskDate,assignDate,idAssociadedtClass,isSolved,isCurrent,solvedDate)
        values ('$codeT','$desc','$userId',NULL,NOW(),NULL,NULL,0,1,NULL,NULL)";
echo mysqli_query($conexion,$sql);
?>