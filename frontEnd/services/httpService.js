/* BookReviewSite httpService */
var app = angular.module("BookReviewApp");

  // ROUTES FOR CONNECTING TO GOODREADS API
    var self = this;
    
    this.searchGoodReads = function (searchTerms) {
        return $http.get('/goodreads', {
            params: {
                q: searchTerms.title
            }
            })
            
            
            // {
            //     method: 'GET`',
            //     url: '/goodreads',
            //     data: searchTerms,
            //     transformResponse: function (data) {
            //         if (data) {
            //             var x2js = new X2JS();
            //             var data = x2js.xml2json(data)
            //         }
            //             return data
            //     }
            // })
            .success(function (response) {
                console.log('service goodreads search ', response)
                return response
            })
            .error(function (error) {
                console.log('Error in service goodReads search ', error)
            })
    }

app.service("HttpService", ["$http", function ($http) {

    this.getBooks = function () {

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
    };
}]);