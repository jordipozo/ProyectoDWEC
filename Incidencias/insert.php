<?php
require 'connection.php';
// Campos de la tabla incomingIncidents
$codeT=1;
$desc=$_POST['desc'];
$userId=1;
//$assTeamId=sha1($_POST['password']);
$tskDate=$_POST['fecha'];
//$assClassId=$_POST['apellido'];
//$solved=$_POST['usuario'];
//$current=$_POST['password'];
//$solDate=$_POST['password'];

//Insert
$sql="INSERT into tbl_incomingincidents (codeTask,description,idUser,idAssignedTeam,taskDate,assignDate,idAssociadedtClass,isSolved,isCurrent,solvedDate,closeDate)
        values ('$codeT','$desc','$userId',NULL,'$tskDate',NULL,NULL,0,1,NULL,NULL)";
echo $sql;
sleep (10); 
echo mysqli_query($con,$sql);
?>