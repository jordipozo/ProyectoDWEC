function insertarRegistro() {
    var fecha = $("#fecha").val();
    var usuario = $("#username").val();
    var ubicacion = $("#classroomName").val();
    var descripcion = $("#troubleDesc").val();
    $("#respuesta").html("Por favor espera un momento");
    $.ajax({
        type: "POST",
        dataType: "text",
        url: "insert.php",
        data: "fecha=" + fecha + "&usuario=" + usuario + "&aula=" + ubicacion + "&desc=" + descripcion,
        success: function(resp) {
            $('#respuesta').html(resp);
            //Limpiar();
            //Cargar();
        }
    });
}