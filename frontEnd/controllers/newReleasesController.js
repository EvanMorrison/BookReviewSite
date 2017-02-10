/* BookReviewSite newReleases.js */

var app = angular.module("BookReviewApp");

app.controller("NewReleasesController", ["$scope", "BookReviewDataService", "HttpService", function($scope, BookReviewDataService, HttpService) {

    $scope.bookReviewsArray = BookReviewDataService.bookReviewsArray;

    $scope.passIndex = function(index) {
        BookReviewDataService.index = index;
    };
}]);