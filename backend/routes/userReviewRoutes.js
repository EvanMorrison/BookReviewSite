// ROUTES LIMITED TO AUTHENTICATED USER

var express = require('express');
var mongoose = require('mongoose');
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
        var newReview = new Review(req.body);
        console.log('new Review ', newReview)
        console.log('posting new review - req.body ', req.body)
        newReview.user = req.user;
        newReview.save(function (err, savedReview) {
            if (err) res.status(500).send(err);
            res.status(201).send(savedReview);
        })
    })
    // delete a review using its DB id no.
    .delete(function(req, res) {
        console.log('req.body ', req.body)
        Review.findOneAndRemove({ _id: req.body.reviewId}, function(err, deletedReview) {
                if(err) res.status(500).send(err);
                res.status(200).send(deletedReview)
            })
    })


userReviewRouter.route('/deleteReview/:reviewID')

.delete(function(req, res) {
    Review.findOneAndRemove({ _id: req.params.reviewID }, function(err, result) {
        if (err) res.status(500).send(err);
        res.status(200).send(result)
    })
})

userReviewRouter.route('/getReview/:reviewID')
.get(function(req, res) {
    Review.find({_id: req.params.reviewID}, function(err, result){
        if (err) res.status(500).send(err);
        res.status(200).send(result);
    })
})

userReviewRouter.route('/updateReview')
.post(function(req, res){
            console.log('req.body ', req.body)
    var updateReview = new Review(req.body);
    updateReview.user = req.user;
    Review.findOneAndUpdate({'_id': req.params.reviewID}, req.body, {new:true}, function(err, updatedReview) {
        if (err) res.status(500).send(err);
        res.send(updatedReview);
    })
    
})

module.exports = userReviewRouter;