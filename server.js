var express = require('express');
var mongoose = require('mongoose');
var logger = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');
var expressJwt = require('express-jwt');

// CONFIG ENVIRONMENT VARIABLES
var config = require('./backend/config');
var port = process.env.PORT || 8080;

// SERVER 
var app = express();

// DATABASE
var database = path.join(config.db_host,config.db_name);
mongoose.connect('mongodb://' + config.db_user + ":" + config.db_pass +"@" + database, function(err){
    if(err) console.log('Error connecting to MongoDB: ', err.message)
    else console.log('Connected to MongoDB ' + database);
});

// SERVE THE FRONTEND
app.use(express.static(__dirname + '/public'));

// MIDDLEWARE
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/test', function(req, res){
    
    res.send('Heroku is working!');
})

// ROUTES REQUIRING AUTHENTICATION
// any route with '/api'' will use express-jwt authentication
app.use('/api', expressJwt({secret: config.db_secret}));
app.use('/api/userReviews', require('./backend/routes/userReviewRoutes'));

// ROUTES WITHOUT AUTHENTICATION
app.use('/auth', require('./backend/routes/authRoutes'));
app.use('/books', require('./backend/routes/bookRoutes'));
app.use('/reviews', require('./backend/routes/reviewRoutes'))


app.listen(port, function() {
    console.log('Server is listening closely on port ', port);

})
