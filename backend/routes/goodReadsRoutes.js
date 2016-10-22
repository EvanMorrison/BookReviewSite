var express = require('express');
var goodReadsRouter = express.Router();

var Book = require('../models/book');
var Review = require('../models/review');
var config = require('../config');
var apiKey = config.goodReads_apiKey;

var url = "https://www.goodreads.com/search/index.xml?key=";

goodReadsRouter.route('/')
    .get(function (req, res) {
        console.log('Goodreads Route',req.body)
        res.send({
            message: 'you reached the goodReads Route',
            success: true
        })
    })

module.exports = goodReadsRouter;