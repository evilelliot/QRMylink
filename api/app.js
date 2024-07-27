var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var dotenv = require('dotenv');

var indexRouter = require('./routes/index');
var authRouter = require('./routes/auth');
var debugRouter = require('./routes/debugging');
var linksRouter = require('./routes/links');

var limiter = require('./helpers/rateLimiter');

var app = express();

dotenv.config();

app.use(limiter);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', indexRouter);
app.use('/api/auth/', authRouter);
app.use('/api/debug', debugRouter);
app.use('/api/links', linksRouter);

module.exports = app;
