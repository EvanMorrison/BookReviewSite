var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema({
    title: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'Author'
    },
    isbn: String,
    numberOfPages: Number,
    publisher: {
        type: Schema.Types.ObjectId,
        ref: 'Publisher'
    },
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