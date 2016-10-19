/* BookReviewSite popularAndNewBookController.js */

app = angular.module("BookReviewApp");

app.controller("PopularAndNewBookController", ["$scope", "BookReviewDataService", "HttpService", function($scope, BookReviewDataService, HttpService) {

    $scope.newUserReview = "";
    $scope.newuserRating = 0;
    $scope.showAddAndCancelButtonsAndTextarea = false;

    $scope.showButtonsAndTextarea = function() {

        $scope.showAddAndCancelButtonsAndTextarea = true;
    };

    $scope.addReview = function() {

        //add review to db
        $scope.showAddAndCancelButtonsAndTextArea = false;
    };

    $scope.cancelAddReview = function() {

        $scope.showAddAndCancelButtonsAndTextArea = false;
    }
}]);