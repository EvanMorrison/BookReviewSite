angular.module("BookReviewApp")
.controller("GoodReadsController", ["$scope", "APIService", function($scope, APIService) {

    $scope.search = {};
    $scope.resultsList = [];
// search for a book on the goodreads.com api
    $scope.searchGoodReads = function() {
        var searchStr = ''
        // contatenat the user input into a query string
        searchStr += ($scope.search.title) ? $scope.search.title : '';
        searchStr += ($scope.search.author) ? '&' + $scope.search.title : '';
        searchStr += ($scope.search.isbn) ? '&' + $scope.search.isbn : '';
        // call the applicable Service, send it the query string
        APIService.searchGoodReads(searchStr)
        .then(function(response){
            searchStr = '';
            console.log("Controller response ", response);
            if(Array.isArray(response)) $scope.resultsList = response;
        })
    }

$scope.saveBook = function(book) {
    console.log('saving book ', book)
    APIService.saveBook(book)
    .then(function(response){
        console.log('controller response ', response)
    })
}


$scope.clearSearch = function(){
    $scope.search = {};
    $scope.searchParams = '';
    $scope.resultsList = [];
}

}])
 
 