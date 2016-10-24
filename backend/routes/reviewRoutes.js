var express = require('express');
var reviewsRouter = express.Router();
var Reviews = require('../models/review')

// Route for retrieving all reviews for a specific book by book _id number.
// Does not require user authentication
reviewsRouter.route('/:bookId')
.get(function(req, res){
    var bookId = req.params.bookId
    Reviews.find({book: bookId})
    .populate('user')
    .exec(function(err, reviewList){
        if(err) res.status(500).send(err);
        res.send(reviewList);
    });
});

module.exports = reviewsRouter;