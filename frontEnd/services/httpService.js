/* BookReviewSite httpService */
var app = angular.module("BookReviewApp");

app.service("HttpService", ["$http", function($http) {

    this.getBooks = function() {

        return $http.get("/api/books")

            .then(function(response) {
                console.log(response);
                return response.data;
            },
            function(response) {
                alert("Error" + response.status + ":" + response.statusText);
            });
    };

    this.saveNewBookReview = function(newBookReview) {

        return $http.put("api/books", newBookReview)

            .then(function(response) {
                return response.data;
            },
            function(response) {
                alert("Error" + response.status + ":" + response.statusText);
            });
    };

    this.getUserReviews = function() {

        return $http.get("/api/userBooks")

            .then(function (response) {
                console.log(response);
                return response.data;
            },
             function (response) {
                alert("Error" + response.status + ":" + response.statusText);
             });
    };

    this.saveUpdatedUserReview = function(updatedUserReview) {

        return $http.put("api/userBooks", updatedUserReview)

            .then(function (response) {
                return response.data;
            },
            function (response) {
                alert("Error" + response.status + ":" + response.statusText);
            });
    }
}]);
