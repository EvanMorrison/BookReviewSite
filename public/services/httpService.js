/* BookReviewSite httpService */
var app = angular.module("BookReviewApp");

app.service("HttpService", ["$http", function ($http) {
var self = this;

    // GOOGLEBOOKS API SERVICES - Search Page
    this.searchGoogle = function (searchTerms) {
        self.searchResults = [];
            // get the locally stored API key
        return $http.get('services/ignore/config.googleBooksAPI.ignore.js')
            .then(function (googleBooksAPIKey) {
                // send the get request to GoogleBooks
                return $http.get('https://www.googleapis.com/books/v1/volumes?q=' + searchTerms + '&key=' + googleBooksAPIKey.data.key)
                    .then(function (response) {
                        var searchResponse = response.data;
                        // due to inconsistency of GoogleBooks API return data, check for presence of
                        // various properties to ensure each is present and in the form needed.
                        if (searchResponse.items) {
                            searchResponse.items.forEach(function (item, index) {
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
                        }
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
                return response
            }, function (error) {
                console.log('service savebook error ', error)
                return error
            })
    }

    // END GOOGLEBOOKS API SERVICES


    // get all books in the collection
    this.getBooks = function () {

        return $http.get("/books")

            .then(function(response) {

                return response.data;
            },
            function (response) {
                console.log("Error" + response.status + ":" + response.statusText);
            });
    };

    // get details for a specific book (not including reviews)
    this.getBookDetail = function (bookID) {
        return $http.get('/books/bookDetail/' + bookID)
        .then(function(response){
            return response.data;
        }, function(err) {
            console.log('error getting book detail: ', err.status)
        })
    }

    // get all reviews for a specific book
    this.getBookReviews = function(bookID) {
        return $http.get("/reviews/book/" + bookID)
            .then(function (response) {
                return response.data;
            },
            function (err) {
                console.log("Error " + err.status + ":" + err.statusText);

            });
    };


//////////////
// Routes for User Reviews requiring Authentication
//////////////

    // get all reviews written by a single user
    this.getUserReviews = function () {

        return $http.get("/api/userReviews")

            .then(function (response) {
                return response.data;
            },
            function (response) {
                console.log("Error" + response.status + ":" + response.statusText);
            });
    };

    // Save a new book review (requires authentication)
    this.saveNewBookReview = function (newReview) {

        return $http.post("/api/userReviews/", newReview)

        .then(function (response) {
                return response.data;
            },
            function (response) {
                console.log("Error" + response.status + ":" + response.statusText);
            });
    };

    // Update an existing review
    this.saveUpdatedReview = function (updatedReview) {
        return $http.put("/api/userReviews/", updatedReview)
        .then(function (response) {
                return response.data;
            },
            function (response) {
                console.log("Error" + response.status + ":" + response.statusText);
            });
    };

    this.deleteReview = function(review) {
        return $http.delete("/api/userReviews/" + review._id)
        .then(function(response) {
            return response
        }, function(error) {
            console.log('Error deleting review. Error: ', error)
        })
    }
 
 ////////////////
 // End Authenticated Routes
 ////////////////

 

}]);
