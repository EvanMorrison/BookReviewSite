/* BookReviewSite app.js */

var app = angular.module("BookReviewApp", ["ngRoute"]);

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
        });
});

app.controller("MainController", ["$scope", function($scope)
{

    $scope.bookReviewArray = [
        {
            image: "./images/an-irish-country-love-story-thumbnail.jpg",
            title: "",
            author: "",
            rating: 0,
            pages: 0,
            publisher: "",
            summary: "",
            reviews: [
                {
                    userName: "",
                    userRating: 0,
                    userReview: ""
                }
            ]
        },
        {
            image: "./images/crosstalk-thumbnail.jpg",
            title: "",
            author: "",
            rating: 0,
            pages: 0,
            publisher: "",
            summary: "",
            reviews: [
                {
                    userName: "",
                    userRating: 0,
                    userReview: ""
                }
            ]
        },
        {
            image: "./images/hag-seed-thumbnail.jpg",
            title: "",
            author: "",
            rating: 0,
            pages: 0,
            publisher: "",
            summary: "",
            reviews: [
                {
                    userName: "",
                    userRating: 0,
                    userReview: ""
                }
            ]
        },
        {
            image: "./images/head-lopper-thumbnail.jpg",
            title: "",
            author: "",
            rating: 0,
            pages: 0,
            publisher: "",
            summary: "",
            reviews: [
                {
                    userName: "",
                    userRating: 0,
                    userReview: ""
                }
            ]
        },
        {
            image: "./images/news-of-the-world-thumbnail.jpg",
            title: "",
            author: "",
            rating: 0,
            pages: 0,
            publisher: "",
            summary: "",
            reviews: [
                {
                    userName: "",
                    userRating: 0,
                    userReview: ""
                }
            ]
        },
        {
            image: "./images/small-great-things-thumbnail.jpg",
            title: "",
            author: "",
            rating: 0,
            pages: 0,
            publisher: "",
            summary: "",
            reviews: [
                {
                    userName: "",
                    userRating: 0,
                    userReview: ""
                }
            ]
        },
        {
            image: "./images/the-mothers-thumbnail.jpg",
            title: "",
            author: "",
            rating: 0,
            pages: 0,
            publisher: "",
            summary: "",
            reviews: [
                {
                    userName: "",
                    userRating: 0,
                    userReview: ""
                }
            ]
        },
        {
            image: "./images/today-will-be-different-thumbnail.jpg",
            title: "",
            author: "",
            rating: 0,
            pages: 0,
            publisher: "",
            summary: "",
            reviews: [
                {
                    userName: "",
                    userRating: 0,
                    userReview: ""
                }
            ]
        },
        {
            image: "./images/two-by-two-thumbnail.jpg",
            title: "",
            author: "",
            rating: 0,
            pages: 0,
            publisher: "",
            summary: "",
            reviews: [
                {
                    userName: "",
                    userRating: 0,
                    userReview: ""
                }
            ]
        },
        {
            image: "./images/wangs-vs-the-world-thumbnail.jpg",
            title: "",
            author: "",
            rating: 0,
            pages: 0,
            publisher: "",
            summary: "",
            reviews: [
                {
                    userName: "",
                    userRating: 0,
                    userReview: ""
                }
            ]
        }];
}]);