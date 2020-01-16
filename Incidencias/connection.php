<?php 
	$conexion=mysqli_connect('localhost','jpc','test','tbl_incomingincidents');

	$nombre=$_POST['nombre'];
	$apellido=$_POST['apellido'];
	$usuario=$_POST['usuario'];
	$password=sha1($_POST['password']);

	$sql="INSERT into usuarios (nombre,apellido,usuario,password)
			values ('$nombre','$apellido','$usuario','$password')";
    echo mysqli_query($conexion,$sql);
    // intentar preparar un fichero php que sea capaz de gestionar todas las consultas en función de un
    // parámetro.
 ?>