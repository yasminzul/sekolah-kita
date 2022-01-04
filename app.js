var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');

var indexBMRouter = require('./routes/index-bm');
var oaBMRouter = require('./routes/orang-asli-bm');
var indexENRouter = require('./routes/index-en');
var oaENRouter = require('./routes/orang-asli-en');

var c1Router = require('./routes/chapter1');
var c1Router = require('./routes/chapter2');
var c1Router = require('./routes/chapter3');
var c1Router = require('./routes/chapter4');
var c1Router = require('./routes/chapter5');
var actionRouter = require('./routes/take-action');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session(
  {
    secret: 'secret-key',
    resave: false,
    saveUninitialized: false,
  }
));

app.use('/', indexBMRouter);
app.use('/orang-asli', oaBMRouter);
app.use('/en', indexENRouter);
app.use('/en/orang-asli', oaENRouter);
app.use('/en/chapter1', c1Router);
app.use('/en/chapter2', c1Router);
app.use('/en/chapter3', c1Router);
app.use('/en/chapter4', c1Router);
app.use('/en/chapter5', c1Router);
app.use('/en/take-action', actionRouter);

app.get('/en/about', function (req, res) {
  res.render('credits-en')
})

app.get('/projek', function (req, res) {
  res.render('credits-bm')
})

app.get('/en/resources', function (req, res) {
  res.render('resources-en')
})

app.get('/pusat-sumber', function (req, res) {
  res.render('resources-bm')
})


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


module.exports = app;
