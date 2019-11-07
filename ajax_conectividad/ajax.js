window.onload = function () {
    Cargar();    
}
function Registrar()
{
    var cedu = $("#idLike").val();
    var nom = $("#name").val();
    var fech = $("#numLikes").val();
    var carg = $("#date").val();
    $("#respuesta").html("Por favor espera un momento");
    $.ajax({
        type: "POST",
        dataType: 'html',
        url: "registro.php",
        data: "identLike="+cedu+"&nombre="+nom+"&num_Likes="+fech+"&fechaUltLike="+carg,
        success: function(resp){
            $('#respuesta').html(resp);
            Limpiar();
            Cargar();
        }
    });
}   
function Cargar()
{
    $('#datagrid').load('consulta.php');    
}
function Limpiar()
{
    $("#idLike").val("");
    $("#name").val("");
    $("#numLikes").val("");
    $("#date").val("");
}