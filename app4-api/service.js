angular.module("apiApp").service("apiService", function($http){

//http://swapi.co/api/starships/

var baseUrl = "http://swapi.co/api/starships/"

this.getStarships = function(){

  var promise = $http({
    method: "GET",
    url: baseUrl,
  }).then(function(response){
    if(repsonse.status === 200){
      return response.data
    } else {
      return "Error getting data"
    }

  })
  return promise;
}





});
