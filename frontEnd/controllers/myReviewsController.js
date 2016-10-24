/* BookReviewSite myReviewsController.js */

var app = angular.module("BookReviewApp");

app.controller("MyReviewsController", ["$scope", "HttpService", "UserService", "BookReviewDataService", function($scope, HttpService, UserService, BookReviewDataService) {


    // Display average rating as stars.
    $scope.max = 5;
    $scope.isReadonly = true;

    
    $scope.userBookReviewsArray = BookReviewDataService.userBookReviewsArray;
    $scope.index = BookReviewDataService.index;
    console.log($scope.index);
    //$scope.upDateUserReview = "";
    $scope.updateUserRating = 0;
    $scope.showEditButtonAndRating = false;
    $scope.showTextareaCursorAndRatingInput = false;
    $scope.reviewBeingEdited = 0;


    $scope.editReview = function(index) {

        $scope.showTextareaCursorAndRatingInput = true;
        $scope.reviewBeingEdited = index;
    };

    $scope.saveUpdatedReview = function() {

        $scope.showTextareaCursorAndRatingInput = false;
        $scope.userBookReviewsArray[$scope.index].rating = $scope.updateUserRating;
        HttpService.saveUpdatedUserReview(userBookReviewsArray[$scope.index]);
        console.log($scope.userBookReviewsArray[$scope.index].body);
        console.log($scope.updateUserRating);

    };

    $scope.cancelEditReview = function() {

        $scope.showTextareaCursorAndRatingInput = false;
    };

    $scope.getUserReviews = function() {

        var isAuthenticated = UserService.isAuthenticated();

        if (isAuthenticated) {

            $scope.getUserReviews = function () {

                HttpService.getUserReviews()

                    .then(function (userReviews) {

                        BookReviewDataService.userBookReviewsArray = userReviews;
                        $scope.userBookReviewsArray = userReviews;
                        console.log(BookReviewDataService.userBookReviewsArray);
                    });
            }();
        }
    }();
}]);
