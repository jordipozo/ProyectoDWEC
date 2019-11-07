<?php
require("conexion.php");
$consulta = mysqli_query($con, "SELECT * FROM tbl_Likes");
if (mysqli_num_rows($consulta) > 0)
{
    echo "
<p>"; 
while($row = mysqli_fetch_array($consulta, MYSQL_ASSOC)) 
    { 
        echo "<tr>"; 
        echo "<<td>".$row['identLike']."</td>"; 
        echo "<td>".$row['nombre']."</td>"; 
        echo "<td>".$row['num_Likes']."</td>"; 
        echo "<td>".$row['fechaUltLike']."</td>"; 
        echo "</tr>"; 
    } 
echo " <table> <thead> <tr> <th>Id. Like</th> <th>Nombre</th> <th>Número Likes</th> <th>Fecha Ult Like</th> </tr> </thead> </table> ";
} else { 
echo  " <p> Aun no hay registros en la base de datos</p>";
}
?>