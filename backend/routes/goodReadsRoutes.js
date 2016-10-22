var express = require('express');
var goodReadsRouter = express.Router();

var Book = require('../models/book');
var Review = require('../models/review');
var config = require('../config');
var apiKey = config.goodReads_apiKey;



    
module.exports = goodReadsRouter;