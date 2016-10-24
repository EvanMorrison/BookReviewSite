/* BookReviewSite myReviewsController.js */

var app = angular.module("BookReviewApp");

app.controller("MyReviewsController", ["$scope", "HttpService", "UserService", "BookReviewDataService", function($scope, HttpService, UserService, BookReviewDataService) {


    // Display average rating as stars.
    $scope.max = 5;
    $scope.isReadonly = true;

    $scope.userBookReviewsArray = [];
    $scope.updateUserRating = 0;
    $scope.showEditButtonAndRating = false;
    $scope.showTextareaCursorAndRatingInput = false;
    $scope.reviewBeingEdited = 0;

    $scope.editReview = function(index) {
 console.log("index ", index);

        $scope.showTextareaCursorAndRatingInput = true;
        $scope.reviewBeingEdited = index;
    };

    $scope.saveUpdatedReview = function(index) {
        $scope.showTextareaCursorAndRatingInput = false;

        HttpService.saveUpdatedUserReview($scope.userBookReviewsArray[index])
        .then(function(response){
            BookReviewDataService.userBookReviewsArray[index] = response;
        });

    };

    $scope.cancelEditReview = function(index) {

        $scope.showTextareaCursorAndRatingInput = false;
        $scope.userBookReviewsArray[index].body = BookReviewDataService.userBookReviewsArray[index].body;
        $scope.userBookReviewsArray[index].rating = BookReviewDataService.userBookReviewsArray[index].rating;
    };

    $scope.getUserReviews = function() {

        var isAuthenticated = UserService.isAuthenticated();

        if (isAuthenticated) {

            $scope.getUserReviews = function () {

                HttpService.getUserReviews()

                    .then(function (userReviews) {

                        BookReviewDataService.userBookReviewsArray = userReviews;
                        $scope.userBookReviewsArray = JSON.parse(JSON.stringify(BookReviewDataService.userBookReviewsArray))
                        console.log('BookReviewArray ', BookReviewDataService.userBookReviewsArray);
                    });
            }();
        }
    }();
}]);
