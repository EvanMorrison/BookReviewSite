/* BookReviewSite homeController.js */

var app = angular.module("BookReviewApp");

app.controller("HomeController", ["$scope", "BookReviewDataService", "HttpService", function ($scope, BookReviewDataService, HttpService) {

   
    $scope.getBooks = function () {


        HttpService.getAllBooks()

        .then(function (books) {

     BookReviewDataService.bookReviewArray = books;
     $scope.bookReviewArray = BookReviewDataService.bookReviewArray;

        });
    }();

    $scope.passIndex = function (index) {

        BookReviewDataService.index = index;
        console.log(BookReviewDataService.index);
    };
}]);