/* BookReviewSite httpService */
var app = angular.module("BookReviewApp");

app.service("HttpService", ["$http", "$httpParamSerializer", function ($http, $httpParamSerializer) {

    var self = this;
    this.getAllBooks = function () {
        return $http.get('/books')
            .then(function (response) {
                return response.data;
            }, function (error) {
                console.log('Service get bookList error ', error);
            })
    }

    this.getUserBooks = function () {

        return $http.get("/api/userReviews")

        .then(function (response) {
                console.log(response);
                return response.data;
            },
            function (response) {
                console.log("Error in get userBooks ctrl" + response.status + ":" + response.statusText);
            });
    };

    this.saveNewBookReview = function (newBookReview) {

        return $http.put("api/books", newBookReview)

        .then(function (response) {
                return response.data;
            },
            function (response) {
                console.log("Error is saveNewBookReview " + response.status + ":" + response.statusText);
            });
    };

    this.getUserReviews = function () {

        return $http.get("/api/userReviews")

        .then(function (response) {
                console.log(response);
                return response.data;
            },
            function (response) {
                console.log("Error" + response.status + ":" + response.statusText);
            });
    };

    this.saveUpdatedUserReview = function (updatedUserReview) {

            return $http.put("api/userReviews", updatedUserReview)

            .then(function (response) {
                    return response.data;
                },
                function (response) {
                    console.log("Error" + response.status + ":" + response.statusText);
                });

        }
// ROUTES FOR CONNECTING TO GOODREADS API

    this.searchGoodReads = function(searchTerms){
        $http.get('/services/config.goodReads.ignore.js')
        .then(function(goodReadsAPIKey){
            // console.log(goodReadsAPIKey.data)
            return $http.get('https://www.goodreads.com/search/index.xml?key=' + goodReadsAPIKey.data.key + '&q=' + $httpParamSerializer(searchTerms))
            .then(function(response){
                console.log('service goodreads search ', response.data);
                return response.data
            }, function(error){
                console.log('Error in service goodReads search ', error)
            })
        })
    }

}]);