/* BookReviewSite newReleases.js */

var app = angular.module("BookReviewApp");

app.controller("NewReleasesController", ["$scope", "BookReviewDataService", "HttpService", function($scope, BookReviewDataService, HttpService) {


    $scope.passIndex = function(index) {

        BookReviewDataService.index = index;
        console.log(BookReviewDataService.index);
    };

    $scope.getBooks = function() {

    HttpService.getBooks()

        .then(function(books) {

            BookReviewDataService.bookReviewsArray = books;
            $scope.bookReviewsArray = BookReviewDataService.bookReviewsArray;
            console.log( BookReviewDataService.bookReviewsArray);
            });
    }();
}]);