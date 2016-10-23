// ROUTES LIMITED TO AUTHENTICATED USER

var express = require('express');
var userReviewRouter = express.Router();

var Review = require('../models/review');

// these routes are for a logged in user to create, retrieve, edit, and
// save book reviews specific to that user's account.'


userReviewRouter.route('/')
// gets all reviews belonging to the currently logged in user
// and populates the book field with the full book profile
    .get(function (req, res) {
        Review.find({
            user: req.user._id
        })
            .populate('book')
            .exec(function (err, userReviews) {
                if (err) res.status(500).send(err);
                res.send(userReviews)
            });
    })

    // saves a new book review with the user's id to the database
    .post(function (req, res) {
        review = new Review(req.body);
        review.user = req.user;
        review.save(function (err, newReview) {
            if (err) res.status(500).send(err);
            res.status(201).send(newReview);
        })
    })

module.exports = userReviewRouter;