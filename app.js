let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
let indexRouter = require('./routes/index');
let moviesRouter = require('./routes/movies');
let commentsRouter = require('./routes/comments');
let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/', moviesRouter);
app.use('/', commentsRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
//let mongoDB = 'mongodb://marta:marta1@ds147390.mlab.com:47390/movies_mj_db';
let mongoDB = 'mongodb://' + process.env.DB_USER + ':' + process.env.DB_PASS + '@' + process.env.DB_HOST;
mongoose.connect(mongoDB);
let db = mongoose.connection;

mongoose.Promise = global.Promise;


module.exports = app;
