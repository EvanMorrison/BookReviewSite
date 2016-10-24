// ROUTES FOR REVIEWS AVAILABLE TO ANYONE

var express = require('express');
var bookRouter = express.Router();

var Book = require('../models/book');

// get the collection of all books.  
bookRouter.route('/')
    .get(function (req, res) {
        Book.find({}, function (err, books) {
            if (err) req.status(500).send(err);
            res.send(books);
        })
    })

// DEV ONLY ROUTE: not currently available to users. This route takes a book object, checks the DB for matching title and
// author, and if no match is found it saves a new book entry in the books collection. If the book already exists the
// server returns the existing book object.
.post(function (req, res) {
    var book = req.body;
    Book.find({title: book.title, author: book.author}, (function(err, existingBook){
        if(err) res.status(500).send(err);
         else if (existingBook.length) { 
            res.send(existingBook[0])
        } else {
            book = new Book(req.body);
            book.save(book, function(err, newBook){
                if(err) res.status(500).send(err);
                res.send(newBook)
            })
        }
    }))
});




module.exports = bookRouter;