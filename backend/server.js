var express = require('express');
var mongoose = require('mongoose');
var logger = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');
var expressJwt = require('express-jwt');

// CONFIG ENVIRONMENT VARIABLES
var config = require('./config');
var port = process.env.PORT || 5000;

// SERVER 
var app = express();

// DATABASE
var database = path.join(config.db_host,config.db_name);
mongoose.connect('mongodb://' + config.db_user + ":" + config.db_pass +"@" + database, function(){
    console.log('Connected to MongoDB ' + database);
});

// MIDDLEWARE
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// SERVE THE FRONTEND
app.use(express.static(path.join(__dirname, '..', '/frontend')));


// ROUTES REQUIRING AUTHENTICATION
// any route with '/api'' will use express-jwt authentication
app.use('/api', expressJwt({secret: config.db_secret}));
app.use('api/userBooks', require('./routes/userBookRoutes'));
// ROUTES WITHOUT AUTHENTICATION
app.use('/auth', require('./routes/authRoutes'));



app.listen(port, function() {
    console.log('Server is listening on port ', port);
})
