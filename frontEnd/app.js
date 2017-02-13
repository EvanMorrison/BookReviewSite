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
            templateUrl: "./templates/newReleases.html",
            controller: "NewReleasesController"
        })
        .when("/bookDetails", {
            templateUrl: "./templates/bookDetails.html",
            controller: "bookDetailsController"
        })
        .when("/bookDetails/:bookID", {
            templateUrl: "./templates/bookDetails.html",
            controller: "bookDetailsController"
        })
        .when('/search', {
            templateUrl: './templates/googleAPISearch.html',
            controller: 'GoogleBooksSearchController'
        })
});

