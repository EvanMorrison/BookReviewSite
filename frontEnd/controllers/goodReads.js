var app = angular.module("BookReviewApp");

app.controller('GoodReadsController', ["$scope", "HttpService", function($scope, HttpService) {

    $scope.getKey = function(){
        HttpService.getAPIKey()
        .then(function(response){
            $scope.key = response;
        })
    }();

    $scope.getUserBooks = function(){
        HttpService.getUserBooks()
        .then(function(response){
            $scope.resultsList = response;
        })
    }();

   
}])