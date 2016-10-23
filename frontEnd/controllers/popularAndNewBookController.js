/* BookReviewSite popularAndNewBookController.js */

app = angular.module("BookReviewApp");

app.controller("PopularAndNewBookController", ["$scope", "BookReviewDataService", "HttpService", function ($scope, BookReviewDataService, HttpService) {

    // display average rating as stars
    $scope.max = 5;
    $scope.isReadonly = true;

    


    //console.log($routeParams);
    $scope.bookReviewsArray = BookReviewDataService.bookReviewsArray;
    $scope.index = BookReviewDataService.index;
    console.log($scope.index);
    $scope.newUserReview = "";
    $scope.newuserRating = 0;
    $scope.showAddAndCancelButtonsAndTextarea = false;
    $scope.showTextareaCursorAndRatingInput = false;

    $scope.showButtonsAndTextarea = function () {

        $scope.showAddAndCancelButtonsAndTextarea = true;
    };

    $scope.addReview = function () {

        //add review to db
        $scope.showAddAndCancelButtonsAndTextArea = false;
    };

    $scope.cancelAddReview = function () {

        $scope.showAddAndCancelButtonsAndTextArea = false;
    }
}]);