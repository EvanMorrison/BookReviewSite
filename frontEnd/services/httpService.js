/* BookReviewSite httpService */
var app = angular.module("BookReviewApp");

 app.service("HttpService", ["$http", function ($http) {


    this.getBooks = function () {

        return $http.get("/books")

            .then(function(response) {
                console.log(response.data);

                return response.data;
            },
            function (response) {
                alert("Error" + response.status + ":" + response.statusText);

            });
    };

    this.saveNewBookReview = function (newBookReview) {

        return $http.put("/books", newBookReview)

    // get all reviews for a specific book
    this.getBookReviews = function(bookID) {
        return $http.get("/reviews/book/" + bookID)
            .then(function (response) {
                return response.data;
            },
            function (err) {
                console.log("Error " + err.status + ":" + err.statusText);

            });
    };


//////////////
// Routes for User Reviews requiring Authentication
//////////////

    // get all reviews written by a single user
    this.getUserReviews = function () {

        return $http.get("/api/userReviews")

            .then(function (response) {
                return response.data;
            },
            function (response) {
                alert("Error" + response.status + ":" + response.statusText);

            });
    };

    // Save a new book review (requires authentication)
    this.saveNewBookReview = function (newReview) {

        return $http.post("/api/userReviews/", newReview)

        .then(function (response) {
                return response.data;
            },
            function (response) {
                console.log("Error" + response.status + ":" + response.statusText);
            });
    };

    // Update an existing review
    this.saveUpdatedReview = function (updatedReview) {
        return $http.put("/api/userReviews/", updatedReview)
        .then(function (response) {
                return response.data;
            },
            function (response) {
                console.log("Error" + response.status + ":" + response.statusText);
            });
    };

    this.deleteReview = function(review) {
        return $http.delete("/api/userReviews/" + review._id)
        .then(function(response) {
            return response
        }, function(error) {
            console.log('Error deleting review. Error: ', error)
        })
    }
 
 ////////////////
 // End Authenticated Routes
 ////////////////

 

}]);
