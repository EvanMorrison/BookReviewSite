/* BookReviewSite httpService */
var app = angular.module("BookReviewApp");

app.service("HttpService", ["$http", "$httpParamSerializer", function ($http, $httpParamSerializer) {

    var self = this;
    self.searchResults = [];
    this.searchGoogle = function (searchTerms) {
        console.log("searchTerms ", searchTerms);
        return $http.get('/services/config.googleBooksAPI.ignore.js')
        .then(function (googleBooksAPIKey) {
            return $http.get('https://www.googleapis.com/books/v1/volumes?q=' + $httpParamSerializer(searchTerms), googleBooksAPIKey.data )
                .then(function (response) {
                    console.log(response.data)
                    response.data.items.forEach(function (item, index) {
                        self.searchResults.push({
                            title: item.volumeInfo.title,
                            subtitle: item.volumeInfo.subtitle,
                            author: item.volumeInfo.authors[0],
                            publishedDate: item.volumeInfo.publishedDate,
                            publisher: item.volumeInfo.publisher,
                            previewLink: item.volumeInfo.previewLink,
                            pageCount: item.volumeInfo.pageCount,
                            infoLink: item.volumeInfo.infoLink,
                            ISBN: item.volumeInfo.industryIdentifiers[0].identifier,
                            thumbnail: item.volumeInfo.imageLinks.thumbnail,
                            description: item.volumeInfo.description,
                            textSnippet: item.searchInfo.textSnippet,
                            // listPrice: {
                            //     amount: item.saleInfo.listPrice.amount || 0,
                            //     currencyCode: item.saleInfo.listPrice.currencyCode ||''}
                        });
                        // genres: item.volumeInfo.categories,
                    });
                    return self.searchResults;
                }, function (error) {
                    console.log(error);
                    return (error);
                })
        })
    }

    this.saveBook = function (book) {
        return $http.post('/books', book)
            .then(function (response) {
                console.log('service response ', response)
            }, function (error) {
                console.log('service savebook error ', error)
            })
    }

}]);