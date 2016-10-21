/* BookReviewSite myReviewsController.js */

app = angular.module("BookReviewApp");

app.controller("MyReviewsController", ["$scope", "HttpService", "BookReviewDataService", function($scope, HttpService, UserService, BookReviewDataService) {

    /*$scope.bookReviewArray = BookReviewDataService.bookReviewArray;*/
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
    };

    $scope.getUserReviews = function() {

        var isAuthenticated = UserService.isAuthenticated();

        if (isAuthenticated) {

            $scope.getUserReviews = function () {

                HttpService.getUserReviews()

                    .then(function (userReviews) {

                        BookReviewDataService.userBookReviewsArray = userReviews;
                    });
            };
        }
    }();
}]);
