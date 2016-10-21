var express = require('express');

var goodReadsRouter = express.Router();
var Reviews = require('../models/review')

goodReadsRouter.route('/')
.get(function(req, res) {
    Reviews.find({}, function(err, reviews){
        if(err) res.status(500).send(err);
        res.send(reviews);
    })
})

module.exports = goodReadsRouter;