/* BookReviewSite apiServie
    for use in getting book information from Goodreads API
 */
var app = angular.module("BookReviewApp");

app.service("APIService", ["$http", "$httpParamSerializer", function ($http, $httpParamSerializer) {

    // ROUTES FOR CONNECTING TO GOODREADS API
    var self = this;

    this.searchGoodReads = function (searchStr) {
        console.log("searchTerms ", searchStr);
        return $http.get('/goodreads/books', {
            params: {
                q: searchStr
            }
        })

        .then(function (response) {
            // on success the backend converts the goodReads xml response to json
            // return an object with only the relevant data to the controller
            var searchResponse = response.data.GoodreadsResponse.search[0].results[0].work;
            self.searchResults = [];
            console.log('service goodreads search ', searchResponse)
            if (searchResponse.length) {
                searchResponse.forEach(function (item, index) {
                    self.searchResults.push({
                        title: item.best_book[0].title[0],
                        // publishedDate: item.original_publication_day[0]._ + '-' + item.original_publication_month[0]._ + '-' + item.original_publication_year[0]._,
                        author: item.best_book[0].author[0].name[0],
                        thumbnail: item.best_book[0].image_url[0].replace(/(\d)m(?=\/)/g, '$1l'),
                        ratingsCount: item.ratings_count[0]._,
                        reviewsCount: item.text_reviews_count[0]._,
                        averageRating: item.average_rating[0]
                    })
                })
            }
            return self.searchResults;
        }, function (error) {
            console.log('Error in service goodReads search ', error)
        })
    }

    this.saveBookRatingInfo = function(book) {
        return $http.put('goodreads/books', book)
        .then(function(response){
            console.log('Save book ratings service response ', response)
        }, function(error){
            console.log('Error saving book rating ', error)
        })
    }

}]);