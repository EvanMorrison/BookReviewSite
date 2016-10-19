/* BookReviewSite myReviewsController.js */

app = angular.module("BookReviewApp");

app.controller("MyReviewsController", ["$scope", "BookReviewDataService", "HttpService", function($scope, BookReviewDataService, HttpService) {

    $scope.bookReviewArray = BookReviewDataService.bookReviewArray;
    $scope.upDatedUserReview = "";
    $scope.updatedRatingNumber = 0;
    $scope.showEditButtonAndRating = false;
    $scope.showTextareaCursorAndRatingInput = false;


    $scope.editReview = function() {

        $scope.showTextareaCursorAndRatingInput = true;
        //show cursor
        //save User revised review
    };

    $scope.saveUpdatedReview = function() {

        $scope.showTextareaCursorAndRatingInput = false;
        //add user.book.review to database
        //addUpdatedRatingNumber to database
    };

    $scope.cancelEditReview = function() {

        $scope.showTextareaCursorAndRatingInput = false;
    }
}]);
