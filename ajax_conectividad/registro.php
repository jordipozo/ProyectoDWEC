<?php
require("conexion.php");
        
//evitar inserccion de cualquier caracter que no sea letra o numero
function HayHack($string)
{  
    if (ereg("[^A-Za-z0-9]+",$string))
    {
        $hack = true;
    }
    else
    {
        $hack = false;
    }
    return $hack;
}  

if(HayHack($_POST['cedula']) || HayHack($_POST['nombre']) ||HayHack($_POST['fecha']) ||HayHack($_POST['cargo']))
{
    echo "Hay algo que pasó y no lo hicé yo, serás tu?.";
}
else
{
    //variables POST
    $cedu = $_POST['idLike'];
    $nom = $_POST['name'];
    $fech = $_POST['numLikes'];
    $cargo = $_POST['date'];
    //consulta mysql para insertar los datos del empleados
    $consulta = "INSERT INTO tbl_Likes VALUES ('" .$cedu. "','" .$nom. "','" .$fech. "','" .$cargo. "')";
    mysqli_query($con, $consulta);
    if($consulta)
    {            
        echo "Registro Guardado Correctamente";
    }
    else
    {
        echo "No se pudieron guardar los datos";
    }
}
?>