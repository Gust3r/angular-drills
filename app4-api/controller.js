angular.module("apiApp").controller("apiController", function($scope, apiService){



 $scope.test = "yeah";

 $scope.retrieveStarships = function(){
   var cPromise = apiService.getStarships()

   cPromise.then(function(starships){
     $scope.starships = starships;

   })
 }

 $scope.retrieveStarships();






})
