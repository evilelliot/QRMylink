var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var dotenv = require('dotenv');
// var cors = require('cors');

var indexRouter = require('./routes/index');
var authRouter = require('./routes/auth');
var debugRouter = require('./routes/debugging');
var linksRouter = require('./routes/links');
var userRouter = require('./routes/user');

var limiter = require('./helpers/rateLimiter');

var app = express();

dotenv.config();


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); 
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
/*
app.use(cors({
    origin: 'http://localhost:5173/',
    methods: 'GET,POST,PUT,DELETE', 
    allowedHeaders: ['Content-Type', 'Authorization'], 
    credentials: true 
}));
*/
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
app.use('/api/user', userRouter);

module.exports = app;
