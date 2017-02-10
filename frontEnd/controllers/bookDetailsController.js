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
    $scope.isAuthenticated = UserService.isAuthenticated();
    $scope.hasReviewed = false;

    $scope.hasUserReviewedBook = function () {
        console.log('checking if user reviewed ', $scope.reviews)
        console.log('user name ', UserService.user._id)
        if ($scope.isAuthenticated) {
            var found = false;
            var i = 0;
            while (i < $scope.reviews.length && found === false) {
                found = $scope.reviews[i].user._id === UserService.user._id;
                i ++;
            }
            $scope.hasReviewed = found;
            console.log('has user reviewed? ', $scope.hasReviewed)
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
                            $scope.hasUserReviewedBook();
                        });
                
            } else {

                $scope.reviews = BookReviewDataService.bookDetailsAllReviews;
                $scope.hasUserReviewedBook();
            }
    }();


    $scope.showButtonsAndTextarea = function() {
        $scope.showAddAndCancelButtonsAndTextarea = true;
    };

    $scope.addReview = function () {
        $scope.showAddAndCancelButtonsAndTextarea = false;
        $scope.hasReviewed = true;
        $scope.newUserReview.book = $scope.bookDetail._id;
        HttpService.saveNewBookReview($scope.newUserReview)
        .then(function(response){
            // response includes the user id but not name so add the name back into the $scope
            response.user = { '_id': response.user, 'name': UserService.user.name };
            BookReviewDataService.bookDetailAllReviews.unshift(response);
            $scope.reviews = BookReviewDataService.bookDetailAllReviews;
            response.book = $scope.bookDetail;
            // BookReviewDataService.userBookReviewsArray.unshift(response);
            console.log(BookReviewDataService.userBookReviewsArray);
            
        });
    }


    $scope.cancelAddReview = function() {
console.log('cancel add review')
        $scope.showAddAndCancelButtonsAndTextarea = false;
    }

    
}]);
