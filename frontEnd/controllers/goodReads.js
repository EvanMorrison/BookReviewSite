var app = angular.module("BookReviewApp");

app.controller('GoodReadsController', ["$scope", "HttpService", function($scope, HttpService) {

    

    $scope.getUserBooks = function(){
        HttpService.getUserBooks()
        .then(function(response){
            console.log('controller getUserBooks ', response)
            $scope.resultsList = response;
        })
    }();

   
}])