/* BookReviewSite bookDetailsController.js */

app = angular.module("BookReviewApp"); //, ["ngRoute"]

/*app.config(function($routeProvider) {

    $routeProvider

        .when("/bookDetails", {
            templateUrl: "../templates/bookDetails.html",
            controller: "bookDetailsController"
        });
});*/

app.controller("bookDetailsController", ["$scope", "BookReviewDataService", "HttpService", function($scope, BookReviewDataService, HttpService) {

    //console.log($routeParams);
    $scope.bookReviewArray = BookReviewDataService.bookReviewArray;
    $scope.index = BookReviewDataService.index;
    console.log($scope.index);
    $scope.newUserReview = "";
    $scope.newuserRating = 0;
    $scope.showAddAndCancelButtonsAndTextarea = false;
    $scope.showTextareaCursorAndRatingInput = false;

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