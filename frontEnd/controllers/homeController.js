/* BookReviewSite homeController.js */

var app = angular.module("BookReviewApp");

app.controller("HomeController", ["$scope", "BookReviewDataService", "HttpService", function($scope, BookReviewDataService, HttpService) {

    $scope.bookReviewsArray = BookReviewDataService.bookReviewsArray;

    $scope.passIndex = function(index) {

        BookReviewDataService.index = index;
        console.log(BookReviewDataService.index);
    };
}]);