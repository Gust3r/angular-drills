angular.module("arrayApp").controller("arrayController", function($scope, arrayService){



    $scope.test = "Word"
    $scope.people = arrayService.data;




});
