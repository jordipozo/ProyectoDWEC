var primeraApp=angular.module("primeraApp",[]);
primeraApp.controller("primerController", function ($scope) {
    $scope.first="Juan";
    $scope.last="Nadie";
    $scope.heading='Mensaje: ';
    $scope.updateMessage=function () {
        $scope.message="Hola " + $scope.first+" "+$scope.last+"!";
    };
});