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
        newReview.user = req.user;
        newReview.save(function (err, savedReview) {
            if (err) res.status(500).send(err);
            res.status(201).send(savedReview);
        })
    })

    // saves an updated review
    .put(function(req, res){
            var editedReview = req.body;
            editedReview.user = req.user._id;
    Review.findOneAndUpdate({'_id': req.body._id}, editedReview, {new:true}, function(err, updatedReview) {
        if (err) res.status(500).send(err);
        res.send(updatedReview);
    })
})

    // delete a review using its DB id no.
    .delete(function(req, res) {
        Review.findOneAndRemove({ _id: req.body._id}, function(err, deletedReview) {
                if(err) res.status(500).send(err);
                res.status(200).send(deletedReview)
            })
    })

// get a specific review
userReviewRouter.route('/reviews/:reviewID')
    .get(function(req, res) {
    Review.find({_id: req.params.reviewID}, function(err, result){
        if (err) res.status(500).send(err);
        res.status(200).send(result);
    })
})

// delete a specific review
userReviewRouter.route('/:id')
.delete(function(req, res){
    Review.findOneAndRemove({_id: req.params.id}, function(err, deletedReview) {
        if(err) res.status(500).send(err);
        res.status(200).send(deletedReview);
    })
})
// modify a review based on the review _id
.put(function(req, res){
    editedReview = req.body;
    Review.findOneAndUpdate({_id: req.body._id}, req.body, {new:true}, function(err, updatedReview){
        if (err) res.status(500).send(err);
        res.send(updatedReview);
    })
})


module.exports = userReviewRouter;