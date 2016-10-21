/* BookReviewSite newReleases.js */

var app = angular.module("BookReviewApp");

app.controller("NewReleasesController", ["$scope", "BookReviewDataService", "HttpService", function($scope, BookReviewDataService, HttpService) {

    $scope.bookReviewArray = BookReviewDataService.bookReviewArray;
}]);