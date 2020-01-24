function insertarRegistro() {

    var elemento = $("#fecha").val().split("/");
    console.log('elemento: ' + elemento);
    var fecha = elemento[2] + '/' + elemento[1] + '/' + elemento[0];
    //var fecha = $("#fecha").val();
    alert(fecha);
    var usuario = $("#username").val();
    var ubicacion = $("#classroomName").val();
    var descripcion = $("#troubleDescr").val();
    console.log(descripcion);
    $("#respuesta").html("Por favor espera un momento");
    $.ajax({
        type: "POST",
        dataType: "html",
        url: "insert.php",
        data: "fecha=" + fecha + "&usuario=" + usuario + "&aula=" + ubicacion + "&desc=" + descripcion,
        success: function(resp) {
            $('#respuesta').html(resp);

            //Limpiar();
            //Cargar();
        }
    });
}