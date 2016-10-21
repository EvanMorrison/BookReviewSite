// ROUTES LIMITED TO AUTHENTICATED USER

var express = require('express');
var userRouter = express.Router();

var User = require('../models/user');
var Reviews = require('../models/review');

userRouter.route('/reviews')
.get(function(req, res){
    User.findOne({_id: req.body._id})
    .populate('reviews')
    .exec(function(err, user) {
        if(err) res.status(500).send(err);
        res.send(user.reviews)
    });
})
.post(function(req, res) {
    review = new Review(req.body);
    review.user = req.user;
    review.save(function(err, newReview){
        if(err) res.status(500).send(err);
        res.status(201).send(newReview);
    })
})

module.exports = userRouter;
