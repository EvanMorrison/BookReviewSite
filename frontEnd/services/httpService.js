/* BookReviewSite httpService */
var app = angular.module("BookReviewApp");

app.service("HttpService", ["$http", "$httpParamSerializer", function($http, $httpParamSerializer) {

var self = this;
    
    this.searchGoodReads = function(searchTerms) {
        return $http.get('/services/goodReads.config.js')
        .then(function(response){
            var key = response.data.goodReads_key;
        return $http.get('https://www.goodreads.com/search/index.xml?q='+ $httpParamSerializer(searchTerms), {key:"AIzaSyCwksoIDtAlB4Z5ERWcuJViup8dzJRY6ao"})
        .then(function(response){
            console.log('search results ', response.data)
            self.searchResults = response.data
            return self.searchResults;
        }, function(error){
            console.log(error);
            return(error);
        })
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
