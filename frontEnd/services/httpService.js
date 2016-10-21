/* BookReviewSite httpService */
var app = angular.module("BookReviewApp");

app.service("HttpService", ["$http", "$httpParamSerializer", function($http, $httpParamSerializer) {

var self = this;
    this.getAllBooks = function() {
        return $http.get('/books')
        .then(function(response){
            return response.data;
        }, function(error){
            console.log('Service get bookList error ', error);
        })
    }

    this.getUserBooks = function() {

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
