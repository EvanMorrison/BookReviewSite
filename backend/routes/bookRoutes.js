// ROUTES FOR REVIEWS AVAILABLE TO ANYONE

var express = require('express');
var bookRouter = express.Router();

var Book = require('../models/book');
var Publisher = require('../models/publisher')

bookRouter.route('/')
    .get(function (req, res) {
        Book.find({}, function (err, books) {
            if (err) req.status(500).send(err);
            res.send(books);
        })
    })

.post(function (req, res) {
    var book = new Book(req.body);
    var publisher = new Publisher({name: req.body.publisher});
    Publisher.findOneAndUpdate({name: publisher.name}, publisher, {new: true, upsert:true}, function(err, returnPublisher){
        if(err) res.status(500).send(err);
     else {   
         book.publisher = returnPublisher._id;
        Book.findOneAndUpdate({title: book.title}, book, {new: true, upsert: true}, function(err, returnBook){
            if(err) res.status(500).send(err);
            res.send(returnBook);
        });
    }
    });
});

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