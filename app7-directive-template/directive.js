angular.module("directiveApp").directive("dmHeader",function(){

  function getColor(){
    var colors = ["red", "green", "blue", "purple","yellow". "orange"]
    var index = Math.floor(Math.random() * colors.length);
    return colors[index];
  }

  return {
    restrict: "AE",
    scope: {},
    link: function(scope, element, attributes){
      element.on("click", function(event){
        var newColor = getColor();
        var targetElement = element.find(".header")
      })
    },
    template: "dmHeader.html",
    controller: function($scope){
      $scope.test = "Clicked!";
    }


  }




})
