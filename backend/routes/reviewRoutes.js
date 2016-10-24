var express = require('express');
var reviewsRouter = express.Router();
var Reviews = require('../models/review')


// Get all reviews for a specific book, given a book _id number as the route parameter.
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
})



module.exports = reviewsRouter;