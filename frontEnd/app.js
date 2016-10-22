/* BookReviewSite app.js */
var app = angular.module("BookReviewApp", ["ngRoute", 'ngAnimate', 'ui.bootstrap', 'myApp.Auth']);

app.config(function($routeProvider) {

    $routeProvider

        .when("/", {
            templateUrl: "./templates/home.html",
            controller: "HomeController"
        })
        .when("/myReviews", {
            templateUrl: "./templates/myReviews.html",
            controller: "MyReviewsController"
        })
        .when("/newReleases", {
            template: "./templates/newReleases.html",
            controller: "NewReleasesController"
        })
        .when("/popularAndNewBook", {
            template: "./templates/popularAndNewBook",
            controller: "PopularAndNewBookController"
        })
        .when('/search', {
<<<<<<< Updated upstream
            templateUrl: './templates/googleAPISearch.html',
            controller: 'GoogleBooksSearchController'
        })
=======
            templateUrl: '/templates/goodReads.html',
            controller: 'GoodReadsController'
        })
       
>>>>>>> Stashed changes
});

app.controller("MainController", ["$scope", function($scope)
{


}])
