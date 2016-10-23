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

goodReadsRouter.route('/books')
    .get(function (req, res) {
        var endpoint = "/search/index.xml?key=" + key + "&q=";
        endpoint += req.query.q;
        console.log('endpoint ', endpoint)
        request(host + endpoint, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    parseString(body, function (err, result) {
                        res.send(result);
                    });
                }
            })
    })

    .put(function(req, res){
        console.log('title & author ', req.body.title, req.body.author)
        Book.findOneAndUpdate({_id: req.body._id}, req.body, {new:true}, function(err, updatedBook){
            if (err) res.status(500).send(err);
            console.log('updated Book ', updatedBook)
            res.send(updatedBook);
        })
    })
module.exports = goodReadsRouter;