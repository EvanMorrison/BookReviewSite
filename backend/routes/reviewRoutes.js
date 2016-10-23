var express = require('express');
var reviewsByBookRouter = express.Router();
var Reviews = require('../models/review')

reviewsByBookRouter.route('/')
.get(function(req, res) {
    Reviews.find({_id: req.body._id})
    .populate('book')
    .populate('user')
    .exec(function(err, reviews){
        if(err) res.status(500).send(err);
        res.send(reviews);
    })
})

module.exports = reviewsByBookRouter;