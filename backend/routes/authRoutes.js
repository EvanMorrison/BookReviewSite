// ROUTES FOR USER SIGNUP AND LOGIN AUTHENTICATION
var express = require('express');
var authRouter = express.Router();
var jwt = require('jsonwebtoken');
var config = require('../config');

var User = require('../models/user');

authRouter.post('/signup', function(req, res) {
    User.find({
        email: req.body.email
    }, (function(err, existingUser){
        if(err) res.status(500).send(err);
        if(existingUser.length) res.send({
            success: false,
            message: "That email is in use already."
        });
        else {
            var newUser = new User(req.body);
            newUser.save(function(err, userObj){
                if(err) res.status(500).send(err);
                res.send({
                    user: userObj.withoutPassword(),
                    message: "Successfully created new account.",
                    success: true
                });
            });
        }
    }));
})

authRouter.post('login', function(req, res){
    User.findOne({email: req.body.email}, function(err, user){
        if (err) res.status(500).send(err);

        // If user isn't in the database'
        if(!user) res.status(401).send({
            success: false,
            cause: 'username',
            message: "User with the provided email was not found"
        });

        // If user is found, check password and create token
        else if (user) {

            // Check password
            user.checkPassword(req.body.password, function(err, match){
                if(err) throw(err);
                if(!match) res.status(401).send({
                    success: false,
                    cause: 'password',
                    message: 'Incorrect password'
                });
                else {
                    var token = jwt.sign(user.toObject(), config.db_secret, { expiresIn: "24h"});
                    res.send({
                        user: user.withoutPassword(),
                        token: token,
                        success: true,
                        message: 'Here is your token'
                    })
                }
            })
        }
    })
})

module.exports = authRouter;