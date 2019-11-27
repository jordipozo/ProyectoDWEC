var firstApp=angular.module('firstApp',[]);
firstApp.controller('FirstController', function ($scope) {
    $scope.first='Pepe';
    $scope.last='Pérez';
    $scope.heading='Mensaje ';
    $scope.updateMessage=function () {
        $scope.message="Hola " + $scope.first+" "+$scope.last+"!";
    };
});