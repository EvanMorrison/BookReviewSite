/* BookReviewSite myReviewsController.js */

var app = angular.module("BookReviewApp");

app.controller("MyReviewsController", ["$scope", "HttpService", "UserService", "BookReviewDataService", function($scope, HttpService, UserService, BookReviewDataService) {

    $scope.userBookReviewsArray = BookReviewDataService.userBookReviewsArray;
    $scope.bookDetail = {}
    $scope.upDatedUserReview = "";
    $scope.updatedRatingNumber = 0;
    $scope.showEditButtonAndRating = false;
    $scope.showTextareaCursorAndRatingInput = false;
    $scope.isAuthenticated = UserService.isAuthenticated();


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
    };

    $scope.getUserReviews = function() {

        if ($scope.isAuthenticated) {

            if (BookReviewDataService.userBookReviewsArray.length === 0) {
                $scope.getUserReviews = function () {

                    HttpService.getUserReviews()

                        .then(function (userReviews) {

                            BookReviewDataService.userBookReviewsArray = userReviews;
                            $scope.userBookReviewsArray = BookReviewDataService.userBookReviewsArray;
                        });
                }();
            } else {

                $scope.userBookReviewsArray = BookReviewDataService.userBookReviewsArray;
            }
        } else {
            // display message to login in or signup to add reviews
            $scope.isAuthenticated = false;

        }

    }();
}]);
