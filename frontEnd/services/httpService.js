/* BookReviewSite httpService */
var app = angular.module("BookReviewApp");

app.service("HttpService", ["$http", "$httpParamSerializer", function($http, $httpParamSerializer) {

var self = this;
    this.getBooks = function() {
        return $http.get('/books')
        .then(function(response){
            self.bookList = response.data;
        }, function(error){
            console.log('Service get bookList error ', error);
        })
    }

    this.saveBook = function(book) {
        return $http.post('/books', book)
        .then(function(response){
            console.log('service response ', response)
        }, function(error){
            console.log('service savebook error ', error)
        })
    }

}]);
