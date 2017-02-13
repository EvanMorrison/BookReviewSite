

// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;

// var PublisherSchema = new Schema({
//     name: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     address: {
//         addrLine1: String,
//         addrLine2: String,
//         city: String,
//         state: String,
//         zip: String,
//         country: String,
//     }
    
// });

// PublisherSchema.virtual('books', {
//     ref: 'Book',
//     localField: '_id',
//     foreignField: 'publisher'
// });

// module.exports = mongoose.model('Publisher', PublisherSchema);