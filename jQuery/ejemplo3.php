<?php
    $ejemplo=array(
        "nombre"=>$_GET["nombre"],
        "metodo"=>$_GET["metodo"]
    );

    echo json_encode($ejemplo);
?>