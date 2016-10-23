/* BookReviewSite homeController.js */

var app = angular.module("BookReviewApp");

app.controller("HomeController", ["$scope", "BookReviewDataService", "HttpService", function ($scope, BookReviewDataService, HttpService) {

    BookReviewDataService.bookReviewArray = books;
    $scope.bookReviewArray = BookReviewDataService.bookReviewArray;

    $scope.passIndex = function (index) {

        BookReviewDataService.index = index;
        console.log(BookReviewDataService.index);
    };

    $scope.getBooks = function() {

    HttpService.getBooks()

        .then(function(books) {

            BookReviewDataService.bookReviewsArray = books;
            console.log( BookReviewDataService.bookReviewsArray);
            });
    }();
}]);