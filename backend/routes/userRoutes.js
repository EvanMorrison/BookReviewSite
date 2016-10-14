// ROUTES LIMITED TO AUTHENTICATED USER

var express = require('express');
var userRouter = express.Router();

var User = require('../models/user')
