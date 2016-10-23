/* BookReviewSite apiServie
    for use in getting book information from Goodreads API
 */
var app = angular.module("BookReviewApp");

app.service("APIService", ["$http", "$httpParamSerializer", function ($http, $httpParamSerializer) {

    // ROUTES FOR CONNECTING TO GOODREADS API
    var self = this;

    this.searchGoodReads = function (searchTerms) {
        console.log("searchTerms ", searchTerms);
        return $http.get('/goodreads/books', {
            params: {
                q: searchTerms
            }
        })

        .then(function (response) {
            console.log('service goodreads search ', response)
            return response.data.GoodreadsResponse.search[0].results[0].work;
        }, function (error) {
            console.log('Error in service goodReads search ', error)
        })

    }

}]);

