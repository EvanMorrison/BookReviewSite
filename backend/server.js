var express = require('express');
var mongoose = require('mongoose');
var logger = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');

// SERVER 
var port = process.argv[2] || 5000;
var app = express();

// DATABASE
var config = require('./config');
mongoose.connect(config.database, function(){
    console.log('Connected to MongoDB');
})

// MIDDLEWARE
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// SERVE THE FRONTEND
app.use(express.static(path.join(__dirname, '..', '/frontend')));

// ROUTES
app.use('/auth', require('./routes/authRoutes'));
app.use('/reviews', require('./routes/genBookRoutes'));
// ROUTES REQUIRING AUTHENTICATION
app.use('/api', expressJwt({secret: config.secret}))
app.use('/api/user', require('./routes/userRoutes'));


app.listen(port, function() {
    console.log('Server is listening on port ' + port);
})