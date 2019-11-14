<?php
 if(isset($_POST['codigo'])){ 
    //Guarda el codigo que llego vía ajax. en una varibale.
    $codigo = $_POST['codigo'];
    //Lista de empleados.
    $empleados = array(
       array('codigo' => '10001', 'nombre' => 'Cosme', 'apellido' => 'Fulanito', 'departamento' => 'Estadisticas'),
       array('codigo' => '10002', 'nombre' => 'Lola', 'apellido' => 'Landa', 'departamento' => 'Recursos humanos'),
       array('codigo' => '10003', 'nombre' => 'Cornelio', 'apellido' => 'Del Rancho', 'departamento' => 'Sistemas')
    );
    //Variable que guardará los datos del empleado a buscar. Por defecto guardará null.
    $empleado = null;
    foreach($empleados as $item){
       //Verifica si el codigo es uno de los que está en la lista.
       if($item['codigo'] == $codigo){
          //Guarda los datos del empleado que fue encontrado y finaliza el ciclo del foreach.
          $empleado = $item;
          break;
       }
    }
    if($empleado){
       $empleado = json_encode($empleado);//Convierte nuestro array en un string con aspecto de json
    } 
    echo $empleado; 
 }else{
    echo ':(';
 } 
?>