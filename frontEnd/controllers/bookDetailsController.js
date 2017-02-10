/* BookReviewSite bookDetailsController.js */

app = angular.module("BookReviewApp"); 



app.controller("bookDetailsController", ["$scope", "$routeParams", "BookReviewDataService", "HttpService", "UserService", function($scope, $routeParams, BookReviewDataService, HttpService, UserService) {

    // display ratings as stars
    $scope.max = 5;
    $scope.isReadonly = true;

    $scope.bookID = $routeParams.bookID;
    $scope.bookDetail = {}
    $scope.reviews = BookReviewDataService.bookDetailAllReviews;
    $scope.newUserReview = "";
    $scope.newuserRating = 0;
    $scope.showAddAndCancelButtonsAndTextarea = false;
    $scope.showTextareaCursorAndRatingInput = false;
    
    $scope.checkIfLoggedIn = function () {
        var isAuthenticated = UserService.isAuthenticated();
        if (isAuthenticated) {
            $scope.showAddAndCancelButtonsAndTextarea = true;

        }
    }

    $scope.getBookDetail = function () {
        if ( BookReviewDataService.bookReviewsArray.length ) {
            
            $scope.bookDetail = BookReviewDataService.bookReviewsArray.filter(function(book) {
                return book._id === $scope.bookID
            })[0];
        } else {
            HttpService.getBookDetail($scope.bookID)
            .then(function(result) {
                $scope.bookDetail = result;
            }, function(err){
            })
        }
    }();

    $scope.getBookReviews = function() {

        var currentID = BookReviewDataService.bookDetail.ID || '';

            if ( currentID !== $scope.bookID) {
                
                    HttpService.getBookReviews($scope.bookID)

                        .then(function (reviews) {

                            BookReviewDataService.bookDetailsAllReviews = reviews;
                            $scope.reviews = BookReviewDataService.bookDetailsAllReviews;
                        });
                
            } else {

                $scope.reviews = BookReviewDataService.bookDetailsAllReviews;
            }
    }();


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
