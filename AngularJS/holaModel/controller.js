var app=angular.module("MyFirstApp",[])
app.controller("FirstController",function($scope){
    $scope.nombre="Jordi";
    $scope.nuevoComentario={};
    $scope.comentarios=[
        {
            comentario:"Genial aporte",
            usuario:"jpozoc"
        },
        {
            comentario:"Gran post",
            usuario:"pepeperez"
        }
    ];
    $scope.agregarComentario=function(){
        $scope.comentarios.push($scope.nuevoComentario);
    }
});    
// Actualización de datos en ambos sentidos -Controller-View
// view-controller