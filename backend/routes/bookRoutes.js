// ROUTES FOR REVIEWS AVAILABLE TO ANYONE

var express = require('express');
var bookRouter = express.Router();

var Book = require('../models/book');

bookRouter.route('/')
    // get all books
    .get(function (req, res) {
        Book.find({}, function (err, books) {
            if (err) req.status(500).send(err);
            res.send(books);
        })
    })
    // post a new book, but check to make sure it is not already in the DB
    .post(function (req, res) {
        var book = req.body;
        Book.find({title: book.title, author: book.author}, (function(err, existingBook){
            if(err) res.status(500).send(err);
            else if (existingBook.length) { 
                res.status(304).send({
                message: 'The book is already in the database. Please use update instead of save new.',
                success: false,
                data: existingBook[0]
                });
            } else {
                book = new Book(req.body);
                book.save(book, function(err, newBook){
                    if(err) res.status(500).send(err);
                    res.send(newBook)
                })
            }
        }))
    })
    // update a book's information
    .put(function(req,res){
        var book = req.body;
        Book.findOneAndUpdate({title: book.title, author: book.author}, book, {new:true, upsert: true}, function(err, updatedBook){
            if(err)res.status(500).send(err);
            res.send(updatedBook)
        })
    })


bookRouter.route('/bookDetail/:bookID')
    // get a book based on its id in the DB
    .get(function (req, res) {
        Book.findOne({ 
            _id: req.params.bookID
        }, function(err, book) {
            if (err) res.status(500).send(err);
            res.send(book);
        })
    })

//get a book based on its ISBN
bookRouter.route('/isbn/:isbn')
    .get(function (req, res) {
        Book.findOne({
            ISBN: req.ISBN
        }, function (err, book) {
            if (err) res.status(500).send(err);
            res.send(book)
        })
    })

    .put(function (req, res) {
        Book.findOneAndUpdate({
            ISBN: req.ISBN
        }, req.body, {
            new: true
        }, function (err, editedBook) {
            if (err) res.status(500).send(err);
            res.send(editedBook)
        })
    })

    .delete(function (req, res) {
        Book.findOneAndRemove({
            ISBN: req.ISBN
        }, function (err, deletedBook) {
            if (err) res.status(500).send(err)
            res.send(deletedBook)
        })
    })

bookRouter.route('/publisher')
    .post(function (req, res) {
        var publisher = new Publisher(req.body);
        publisher.save(function (err, savedPublisher) {
            if (err) res.status(500).send(err);
            res.send(savedPublisher);
        })
    })
    .get(function (req, res) {
        Publisher.find({}, function (err, publisher) {
            if (err) res.status(500).send(err);
            res.send(publisher);
        })
    })

module.exports = bookRouter;