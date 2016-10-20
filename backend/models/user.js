var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var genreList = require('./genreList');
var bcrypt = require('bcrypt');


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
    name: String,
    favBooks: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Book'
        }
    ],
    // favAuthors: [
    //     {
    //         type: Schema.Types.ObjectId,
    //         ref: 'Author'
    //     }
    // ],
    favGenres: [
        {
            type: String,
            enum: genreList.genres
        }
    ],
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: 'Review'
    }]
});

UserSchema.pre("save", function(next){
    var user = this;
    if(!user.isModified('password')) return next();
    bcrypt.hash(user.password, 10, function(err, hash){
        if(err) return next(err);
        user.password = hash;
        next();
    })
})

UserSchema.methods.checkPassword = function(passwordAttempt, callback){
    bcrypt.compare(passwordAttempt, this.password, function(err, isMatch){
        if(err) return callback(err);
        callback(null, isMatch);
    });
}

UserSchema.methods.withoutPassword = function(){
    var user = this.toObject();
    delete user.password;
    return user;
}


module.exports = mongoose.model('User', UserSchema);