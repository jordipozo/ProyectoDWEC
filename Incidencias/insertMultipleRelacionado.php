<?php
$host_database = 'mysql:dbname=tabla_db;host=localhost';
$username = "root";
$password = "";

try{ $pdo = new PDO($host_database,$username,$password); }
catch(PDOException $e){ echo 'Error: ' . $e->getMessage(); }

if ($_SERVER['REQUEST_METHOD'] == 'POST'){

$student_name = $_POST['student_name'];
$courses = $_POST['course_id']; //Recibimos los valores de los cursos seleccionados

$statment = $pdo->prepare( 'INSERT INTO students (student_id,student_name) VALUES (null, :student_name)' );
$statment->execute(array( ':student_name' => $student_name, )); 
//Después del insert consultamos el id insertado:
$statment = $pdo->prepare("SELECT @@identity AS id");
$statment->execute();
$resultado = $statment->fetchAll();
$id = 0;
foreach ($resultado as $row) {
        $id = $row["id"];
    }
//Ya tenemos el último id insertado, ahora hacemos el insert en la tabla students_courses

$statment = $pdo->prepare( 'INSERT INTO students_courses (course_id,student_id) VALUES (:course_id, :student_id)' );
$statment->bindParam(':course_id', $idCourse);
$statment->bindParam(':student_id', $id); //Variable del último id registrado en la tabla de students

//Insertamos dependiendo de los id's elegidos
foreach ($courses as $option_value)
{
   $idCourse = $option_value;
   $statment->execute();
}
}

?>