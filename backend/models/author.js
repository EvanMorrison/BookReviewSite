var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AuthorSchema = new Schema ({
    name: String,
    dob: Date,
    birthplace: String,
    website: String,
    twitter: String,
    bio: String,
    address: {
        addrLine1: String,
        addrLine2: String,
        city: String,
        state: String,
        zip: String,
        country: String
    },
    books: [{
        type: Schema.Types.ObjectId,
        ref: 'Book'
    }]
})



module.exports = mongoose.model('Author', AuthorSchema);

