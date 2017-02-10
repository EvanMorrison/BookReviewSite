/* BookReviewSite myReviewsController.js */

var app = angular.module("BookReviewApp");

app.controller("MyReviewsController", ["$scope", "HttpService", "UserService", "BookReviewDataService", function($scope, HttpService, UserService, BookReviewDataService) {

    
    // Display average rating as stars.
    $scope.max = 5;
    $scope.isReadonly = true;
    
    $scope.userBookReviewsArray = BookReviewDataService.userBookReviewsArray;
    $scope.bookDetail = {}
    $scope.updateUserRating = 0;
    $scope.showEditButtonAndRating = false;
    $scope.showTextareaCursorAndRatingInput = false;
    $scope.isAuthenticated = UserService.isAuthenticated();



    $scope.editReview = function(index) {

        $scope.showTextareaCursorAndRatingInput = true;
        $scope.reviewBeingEdited = index;
    };

    $scope.saveUpdatedReview = function(index) {

        $scope.showTextareaCursorAndRatingInput = false;

        //add user.book.review to database
        HttpService.saveUpdatedUserReview($scope.userBookReviewsArray[index])
        .then(function(response){
            BookReviewDataService.userBookReviewsArray[index] = response;
            $scope.getUserReviews();
        });
    };

    $scope.cancelEditReview = function(index) {

        $scope.showTextareaCursorAndRatingInput = false;
        // revert the values on the $scope to those previously saved in the Service
        $scope.userBookReviewsArray[index].body = BookReviewDataService.userBookReviewsArray[index].body;
        $scope.userBookReviewsArray[index].rating = BookReviewDataService.userBookReviewsArray[index].rating;
    };

    $scope.deleteReview = function(index) {
        HttpService.deleteReview($scope.userBookReviewsArray[index]._id)

        .then(function(response) {
            $scope.userBookReviewsArray.splice(index,1);
            BookReviewDataService.userBookReviewsArray.splice(index,1);
            // $scope.getUserReviews();
            
        }, function(err) {
            console.log('error deleting review ', err);
        })
    }
    // get all the users reviews when the view is loaded
    $scope.getUserReviews = function() {

        if ($scope.isAuthenticated) {

            if (BookReviewDataService.userBookReviewsArray.length === 0) {

                    HttpService.getUserReviews()

                        .then(function (userReviews) {

                            BookReviewDataService.userBookReviewsArray = userReviews;
                            $scope.userBookReviewsArray = BookReviewDataService.userBookReviewsArray;
                        });

            } else {

                $scope.userBookReviewsArray = BookReviewDataService.userBookReviewsArray;
            }
        } else {
            // display message to login in or signup to add reviews
            $scope.isAuthenticated = false;

        }

    }
    $scope.getUserReviews();
}]);
