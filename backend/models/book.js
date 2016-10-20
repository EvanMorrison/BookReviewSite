var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema({
    title: String,
    subtitle: String,
    authors:[ {
        type: Schema.Types.ObjectId,
        ref: 'author'
    }],
    datePublished: Date,
    publisher: {
        type: Schema.Types.ObjectId,
        ref: 'publisher'
    },
    ISBN: Number,
    thumbnail: String,
    previewLink: String,
    infoLink: String,
    textSnippet: String,
    description: String,
    pageCount: Number,
    genres: [
       { type: String}
    ],
    listPrice: {
        amount: Number,
        currencyCode: String
    }
})

BookSchema.virtual('reviews', {
    ref: 'review',
    localField: '_id',
    foreignField: 'book'
})

module.exports = mongoose.model('Book', BookSchema);