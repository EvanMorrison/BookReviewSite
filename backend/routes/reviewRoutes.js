var express = require('express');

var ReviewsRouter = express.Router();
var Reviews = require('../models/review')

ReviewsRouter.route('/')
.get(function(req, res) {
    Reviews.find({}, function(err, reviews){
        if(err) res.status(500).send(err);
        res.send(reviews);
    })
})

ReviewsRouter.route('/:id')
.get(function(req, res) {
    Reviews.find({book: req.params.id})
    .lean().populate('user', 'name')
    .exec(function(err, reviews) {
        if (err) res.status(500).send(err);
        res.send(reviews);
    })
})

module.exports = ReviewsRouter;