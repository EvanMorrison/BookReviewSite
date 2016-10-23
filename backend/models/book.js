var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema({
    title: String,
    author: String,
    isbn: String,
    numberOfPages: Number,
    publisher: String,
    edition: String,
    datePublished: Date,
    coverUrl: String,
    synopsis: String,
    illustrator: String

})

BookSchema.virtual('reviews', {
    ref: 'Review',
    localField: '_id',
    foreignField: 'book'
})

module.exports = mongoose.model('Book', BookSchema);
