/* BookReviewSite httpService */
var app = angular.module("BookReviewApp");

app.service("HttpService", ["$http", function ($http) {

    this.getBooks = function () {

        return $http.get("/books")

            .then(function(response) {

                return response.data;
            },
            function (response) {
                alert("Error" + response.status + ":" + response.statusText);

            });
    };


// Save a new book review (requires authrentication)
    this.saveNewBookReview = function (newBookReview) {

        return $http.post("/api/userReviews", newBookReview)

        .then(function (response) {
                return response.data;
            },
            function (response) {
                alert("Error" + response.status + ":" + response.statusText);

            });
    };

    this.getUserReviews = function () {

        return $http.get("/api/userReviews")

            .then(function (response) {
                console.log(response.data);

                return response.data;
            },
            function (response) {
                alert("Error" + response.status + ":" + response.statusText);

            });
    };

    this.saveUpdatedUserReview = function (updatedUserReview) {

        return $http.put("api/userReviews", updatedUserReview)

        .then(function (response) {
                return response.data;
            },
            function (response) {
                alert("Error" + response.status + ":" + response.statusText);
            });
    };


    // Get all reviews for a specific books (no authentication required)
    this.getReviewsByBook = function(bookId){
        
        return $http.get('/reviews/' + bookId)

        .then(function(response){
            return response.data;

        }, function(error){
            console.log('Error in service getReviewsByBook ', error);
        })
    }
}]);