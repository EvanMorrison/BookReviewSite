angular.module("BookReviewApp")
.controller("GoogleBooksSearchController", ["$scope", "HttpService", function($scope, HttpService) {

    $scope.search = {}

    $scope.searchGoogle = function() {
        HttpService.searchGoogle($scope.search)
        .then(function(response){
            console.log("Controller response ", response);
            if(Array.isArray(response)) $scope.resultsList = response;
            $scope.search = {};
        })
    }

$scope.saveBook = function(book) {
    console.log('saving book ', book)
    HttpService.saveBook(book)
    .then(function(response){
        console.log('controller response ', response)
    })
}


}])
 