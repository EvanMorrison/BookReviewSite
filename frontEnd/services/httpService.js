/* BookReviewSite httpService */
var app = angular.module("BookReviewApp");

app.service("HttpService", ["$http", "$httpParamSerializer", function ($http, $httpParamSerializer) {

    var self = this;
    self.searchResults = [];
    this.searchGoogle = function (searchTerms) {
        console.log("searchTerms ", searchTerms);
        return $http.get('/services/config.googleBooksAPI.ignore.js')
            .then(function (googleBooksAPIKey) {
                return $http.get('https://www.googleapis.com/books/v1/volumes?q=' + $httpParamSerializer(searchTerms), googleBooksAPIKey.data)
                    .then(function (response) {
                        console.log(response.data)
                        response.data.items.forEach(function (item, index) {
                            self.searchResults.push({
                                title: item.volumeInfo.title,
                                subtitle: item.volumeInfo.subtitle,
                                publishedDate: item.volumeInfo.publishedDate,
                                publisher: item.volumeInfo.publisher,
                                previewLink: item.volumeInfo.previewLink,
                                pageCount: item.volumeInfo.pageCount,
                                infoLink: item.volumeInfo.infoLink,
                                description: item.volumeInfo.description,
                                genres: item.volumeInfo.categories
                            });
                            if (item.volumeInfo.industryIdentifiers) {
                                self.searchResults[index].ISBN = item.volumeInfo.industryIdentifiers[0].identifier
                            }
                            if (item.volumeInfo.imageLinks) {
                                self.searchResults[index].thumbnail = item.volumeInfo.imageLinks.thumbnail;
                            }

                            if (item.volumeInfo.searchInfo) {
                                self.searchResults[index].textSnippet = item.volumeInfo.searchInfo.textSnippet || ''
                            }
                            if (item.volumeInfo.authors) {
                                self.searchResults[index].author = item.volumeInfo.authors[0]
                            }
                            if (item.saleInfo.listPrice) {
                                self.searchResults[index].listPrice = {
                                    amount: item.saleInfo.listPrice.amount,
                                    currencyCode: item.saleInfo.listPrice.currencyCode
                                }

                            }
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