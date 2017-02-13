/* BookReviewSite newReleases.js */

var app = angular.module("BookReviewApp");

app.controller("NewReleasesController", ["$scope", "BookReviewDataService", "HttpService", function($scope, BookReviewDataService, HttpService) {

    // load books into the scope, either from app's DataService or http request
    $scope.getBooks = function() {

        if (BookReviewDataService.bookReviewsArray.length === 0) {

            HttpService.getBooks()
                .then(function(books) {
                    BookReviewDataService.bookReviewsArray = books;
                    $scope.bookReviewsArray = BookReviewDataService.bookReviewsArray;
                });

        } else {
            $scope.bookReviewsArray = BookReviewDataService.bookReviewsArray;
        }
    }();
}]);