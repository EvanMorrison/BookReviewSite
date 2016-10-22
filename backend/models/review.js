var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ReviewSchema = new Schema ({
    short: {
        type: String,
        maxlength: 150
    },
    body: String,
    book: {
        type: Schema.Types.ObjectId,
        ref: 'Book'
    },
    rating:{
        type: Number,
        min: 0,
        max: 5
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
},
    {
    timestamps: true
})


module.exports = mongoose.model('Review', ReviewSchema);