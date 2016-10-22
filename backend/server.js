var express = require('express');
var mongoose = require('mongoose');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');
var expressJwt = require('express-jwt');
var https = require('https')
// CONFIG ENVIRONMENT VARIABLES
var config = require('./config');
var port = process.env.PORT || 5000;

// SERVER 
var app = express();

// DATABASE
var database = path.join(config.db_host,config.db_name);
mongoose.connect('mongodb://' + config.db_user + ":" + config.db_pass +"@" + database, function(err){
    if(err) console.log('Error connecting to MongoDB: ', err.message)
    else console.log('Connected to MongoDB ' + database);
});

// MIDDLEWARE
app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// SERVE THE FRONTEND
app.use(express.static(path.join(__dirname, '..', '/frontend')));


// ROUTES REQUIRING AUTHENTICATION
// any route with '/api'' will use express-jwt authentication
app.use('/api', expressJwt({secret: config.db_secret}));
app.use('/api/userReviews', require('./routes/userReviewRoutes'));
// ROUTES WITHOUT AUTHENTICATION
app.use('/auth', require('./routes/authRoutes'));
app.use('/books', require('./routes/bookRoutes'));

// ROUTES FOR GOODREADS API
var url = "https://www.goodreads.com/search/index.xml?key=";
var key = "4PLWf3daVHpz78W7OJoAw"
app.get('/goodreads', (function(req, res){
        console.log('Goodreads Route',req.query);
    // https.get(url + key + "&" + "title=" + req.query.q, function(response){
        res.send({
            message: 'you reached the goodReads Route',
            success: true,
            data: response
        })
    // })
    
}))


app.listen(port, function() {
    console.log('Server is listening on port ', port);

})
