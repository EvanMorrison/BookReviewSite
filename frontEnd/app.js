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
        .when("/popularAndNewBook", {
            templateUrl: "./templates/popularAndNewBook.html",
            controller: "PopularAndNewBookController"
        })
        .when('/search', {
            templateUrl: '/templates/goodReads.html',
            controller: 'GoodReadsController'
        })
       
});

app.controller("MainController", ["$scope", "HttpService", "BookReviewDataService", function($scope, HttpService, BookReviewDataService)
{

    
}]);

