angular.module("routingApp", ["ui.router"])
  .config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state("home", {
        url:"/",
        controller:"homeController",
        templateUrl:"home/home.html"

      })
      .state("signup", {
        url:"/signup",
        controller:"signupController",
        templateUrl:"signup/signup.html"

      })
      .state("details", {
        url:"/details/:url",
        controller:"detailsController",
        templateUrl:"details/details.html"

      })



      //change detail state so that it takes in ID and will use a service to get the details for that one person.


  })
