/* BookReviewSite httpService */
var app = angular.module("BookReviewApp");

app.service("HttpService", ["$http", "$httpParamSerializer", function ($http, $httpParamSerializer) {

    var self = this;
    this.getAllBooks = function () {

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
    }

    this.getUserReviews = function () {
        return $http.get('/api/userReviews')
            .then(function (response) {
                return response.data;
            }, function (error) {
                console.log('Error in UserService getting user reviews ', error)
            })
    };

}]);