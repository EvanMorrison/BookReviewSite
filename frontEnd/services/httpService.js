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


    // Get all reviews for a specific books
    this.getReviewsByBook = function(bookId){
        return $http.get('/reviews/' + bookId)
        .then(function(response){
            console.log('Service getReviewsByBook ', response.data)
            return response.data;
        }, function(error){
            console.log('Error in service getReviewsByBook ', error);
        })
    }
}]);