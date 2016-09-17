angular.module("routingApp").controller("homeController", function($scope, starWarsService){
  $scope.routeName = "Home!";


    // $scope.people = [];

    starWarsService.getPeople().then(function(data){
      $scope.people = data;


    })

    

})
