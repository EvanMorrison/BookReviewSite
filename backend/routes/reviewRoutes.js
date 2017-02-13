var express = require('express');
var ReviewsRouter = express.Router();
var Reviews = require('../models/review')

// Routes pertaining to Reviews, not requiring authentication

ReviewsRouter.route('/')
// get all reviews in the DB
.get(function(req, res) {
    Reviews.find({}, function(err, reviews){
        if(err) res.status(500).send(err);
        res.send(reviewList);
    });
})

// get all reviews for a specific book using its DB id.
ReviewsRouter.route('/book/:id')
.get(function(req, res) {
    Reviews.find({book: req.params.id})
    .lean().populate('user', 'name')
    .exec(function(err, reviews) {
        if (err) res.status(500).send(err);
        res.send(reviews);
    })
})


module.exports = ReviewsRouter;
