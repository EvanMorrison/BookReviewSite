/* BookReviewSite popularAndNewBookController.js */

app = angular.module("BookReviewApp");

app.controller("PopularAndNewBookController", ["$scope", "BookReviewDataService", "HttpService", function($scope, BookReviewDataService, HttpService) {

    // Display average rating as stars.
    $scope.max = 5;
    $scope.isReadonly = true;

    $scope.bookReviewsArray = BookReviewDataService.bookReviewsArray;
    $scope.index = BookReviewDataService.index;
    console.log($scope.index);
    $scope.newUserReview = "";
    $scope.newUserRating = 0;
    $scope.showAddAndCancelButtonsAndTextarea = false;
    $scope.showTextareaCursorAndRatingInput = false;

    $scope.showButtonsAndTextarea = function() {

        $scope.showAddAndCancelButtonsAndTextarea = true;

    };

    $scope.addReview = function() {

        //add review to db
        $scope.showAddAndCancelButtonsAndTextArea = false;
        console.log($scope.newUserReview);
        console.log($scope.newUserRating);
    };

    $scope.cancelAddReview = function() {

        $scope.showAddAndCancelButtonsAndTextArea = false;
    }
}]);