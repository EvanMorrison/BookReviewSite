/* BookReviewSite popularAndNewBookController.js */

app = angular.module("BookReviewApp");

app.controller("PopularAndNewBookController", ["$scope", "BookReviewDataService", "HttpService", "UserService", function ($scope, BookReviewDataService, HttpService, UserService) {


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
    $scope.userService = UserService;

    $scope.showButtonsAndTextarea = function () {

        $scope.showAddAndCancelButtonsAndTextarea = true;


    };

    $scope.addReview = function () {
        $scope.newUserReview.book = $scope.book._id;
        HttpService.saveNewBookReview($scope.newUserReview)
        .then(function(response){
            console.log(response.data)
        });


        //add review to db
        $scope.showAddAndCancelButtonsAndTextarea = false;
        console.log($scope.newUserReview.body);
        console.log($scope.newUserReview.rating);
    };


    $scope.cancelAddReview = function () {

        $scope.showAddAndCancelButtonsAndTextarea = false;
        console.log('cancel button clicked')
    }


    // Get all reviews for the selected book
    $scope.book = $scope.bookReviewsArray[$scope.index]
    $scope.getReviews = function () {

        HttpService.getReviewsByBook($scope.book._id)
            .then(function (response) {
                $scope.reviewsList = response;
                
                // Check if the user has reviewed this book already. Only
                // display the 'add review' button if they have not
                for (var i = 0; i < $scope.reviewsList.length; i++) {
                    if (UserService.user._id === $scope.reviewsList[i].user._id) {
                        $scope.hasReviewed = true;
                        console.log('user has reviewed this book already')
                    }
                }
            });
    }();

}]);