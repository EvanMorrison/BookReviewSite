angular.module("BookReviewApp")
.controller("GoogleBooksSearchController", ["$scope", "HttpService", function($scope, HttpService) {

    $scope.search = {};
    $scope.resultsList = [];
    $scope.searchParams = '';

    $scope.searchGoogle = function() {
        for(var key in $scope.search) {
            if($scope.search[key].length) {
                $scope.searchParams += '+' + key + ':' + $scope.search[key]
            }
        }
        console.log('scope.searchParams ', $scope.searchParams)
        HttpService.searchGoogle($scope.searchParams)
        .then(function(response){
            $scope.searchParams = '';
            console.log("Controller response ", response);
            if(Array.isArray(response)) $scope.resultsList = response;
            
        })
    }

$scope.saveBook = function(book) {
    console.log('saving book ', book)
    HttpService.saveBook(book)
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
 