var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var genres = require('./genres');


var UserSchema = new Schema ({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    favBooks: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Book'
        }
    ],
    favAuthors: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Author'
        }
    ],
    favGenres: [
        {
            type: String,
            enum: genres
        }
    ],
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: 'Review'
    }]
})



module.exports = mongoose.model('User', UserSchema);