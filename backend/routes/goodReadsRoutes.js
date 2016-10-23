var express = require('express');
var goodReadsRouter = express.Router();
var https = require('https')

var Book = require('../models/book');
var Review = require('../models/review');
var config = require('../config');
var apiKey = config.goodReads_apiKey;


// ROUTES FOR GOODREADS API
var request = require('request');
var querystring = require('querystring')
var parseString = require('xml2js').parseString;
// var url = "https://www.goodreads.com/search/index.xml?key=";
var host = "https://www.goodreads.com";
var key = require('../config').goodReads_apiKey
var endpoint = "/search/index.xml?key=" + key + "&q=";

goodReadsRouter.route('/books')
    .get(function (req, res) {
        endpoint += req.query.q;
        request(host + endpoint, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    parseString(body, function (err, result) {
                        res.send(result);
                    });
                }
            })
    })

module.exports = goodReadsRouter;