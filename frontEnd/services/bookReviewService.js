/* BookReviewSite bookReviewService */
var app = angular.module("BookReviewApp");

app.service("BookReviewService", ["$http", function($http) {


}]);

app.service("BookDataService", function() {

    this.chunk = function(array, chunkSize) {

        var newArray = [];

        for (var i = 0; i < array.length; i += chunkSize) {

            newArray = array.push(array.slice(i, i + chunkSize));
        }
        return newArray;
    };
});
