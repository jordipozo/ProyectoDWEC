angular.module("MyFirstApp",[])
.controller("FirstController",function($scope, $http){
    $scope.posts=[];
    $http.get("http://jsonplaceholder.typicode.com/posts")
        .then(function(response){
            console.log(response.data);
            $scope.posts=response.data;
          
        })
        .catch(function(err){
            console.log(err);

        });
});    