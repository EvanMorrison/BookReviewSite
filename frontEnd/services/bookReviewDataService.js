/* BookReviewSite bookDataService.js */

var app = angular.module("BookReviewApp");

app.service("BookReviewDataService", function() {

    this.index = 0;

    this.bookReviewsArray = [];

    this.userBookReviewsArray = [];

    this.bookReviewNewReleasesImagesArray = [
        // {
        //     image: "./images-new-releases/head-lopper-thumbnail.jpg"
        // },
        // {
        //     image: "./images-new-releases/news-of-the-world-thumbnail.jpg"
        // },
        // {
        //     image: "./images-new-releases/today-will-be-different-thumbnail.jpg"
        // },
        // {
        //     image: "./images-new-releases/an-irish-country-love-story-thumbnail.jpg"
        // },
        // {
        //     image: "./images-new-releases/hag-seed-thumbnail.jpg"
        // },
        // {
        //     image: "./images-new-releases/the-mothers-thumbnail.jpg"
        // },
        // {
        //     image: "./images-new-releases/crosstalk-thumbnail.jpg"
        // },
        // {
        //     image: "./images-new-releases/two-by-two-thumbnail.jpg"
        // },
        // {
        //     image: "./images-new-releases/wangs-vs-the-world-thumbnail.jpg"
        // }
    ];

    this.bookReviewPopularBooksImagesArray = [
        // {
        //     image: "./images-new-releases/small-great-things-thumbnail.jpg"
        // },
        // {
        //     image: "./images-popular-books/blood-mirror-thumbnail.jpg"
        // },
        // {
        //     image: "./images-popular-books/gemima-thumbnail.jpg"
        // },
        // {
        //     image: "./images-popular-books/go-set-a-watchman-thumbnail.jpg"
        // },
        // {
        //     image: "./images-popular-books/holding-up-the-universe-thumbnail.jpg"
        // },
        // {
        //     image: "./images-popular-books/magnus-chase-thumbnail.jpg"
        // },
        // {
        //     image: "./images-popular-books/midnight-star-thumbnail.jpg"
        // },
        // {
        //     image: "./images-popular-books/punk-57-thumbnail.jpg"
        // },
        // {
        //     image: "./images-popular-books/replica-thumbnail.jpg"
        // },
        // {
        //     image: "./images-popular-books/royally-screwed-thumbnail.jpg"
        // },
        // {
        //     image: "./images-popular-books/trespasser-thumbnail.jpg"
        // }
    ];
});

