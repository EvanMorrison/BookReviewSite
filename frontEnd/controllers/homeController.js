/* BookReviewSite homeController.js */

var app = angular.module("BookReviewApp");

app.controller("HomeController", ["$scope", "BookReviewDataService", "HttpService", function($scope, BookReviewDataService, HttpService) {

    $scope.bookReviewArray = BookReviewDataService.bookReviewArray;
}]);