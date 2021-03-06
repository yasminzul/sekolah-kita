var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');
const mongoose = require('mongoose');
var MongoStore = require('connect-mongo');

var indexBMRouter = require('./routes/index-bm');
var oaBMRouter = require('./routes/orang-asli-bm');
var indexENRouter = require('./routes/index-en');
var oaENRouter = require('./routes/orang-asli-en');

var c1Router = require('./routes/chapter1');
var c2Router = require('./routes/chapter2');
var c3Router = require('./routes/chapter3');
var c4Router = require('./routes/chapter4');
var c5Router = require('./routes/chapter5');
var actionRouter = require('./routes/take-action');
var resourcesRouter = require('./routes/resources');
var aboutRouter = require('./routes/about');

var b1Router = require('./routes/chapter1-bm');
var b2Router = require('./routes/chapter2-bm');
var b3Router = require('./routes/chapter3-bm');
var b4Router = require('./routes/chapter4-bm');
var b5Router = require('./routes/chapter5-bm');
var actionBMRouter = require('./routes/take-action-bm');
var resourcesBMRouter = require('./routes/resources-bm');
var aboutBMRouter = require('./routes/about-bm');

var app = express();

//database
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://sekolah-kita:sekolahkitaIDEAS1234567890@skcluster.3ah7z.mongodb.net/cookieTracker?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

mongoose.connect(uri);


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(session(
  {
    secret: 'secret-key',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: uri }) ,
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 30 * 12 }
  }
));


//session
app.use(function(req, res, next) {
  res.locals.session = req.session;
  next();
});

app.use('/', indexBMRouter);
app.use('/orang-asli', oaBMRouter);
app.use('/bab1', b1Router);
app.use('/bab2', b2Router);
app.use('/bab3', b3Router);
app.use('/bab4', b4Router);
app.use('/bab5', b5Router);
app.use('/ambil-tindakan', actionBMRouter);
app.use('/pusat-sumber', resourcesBMRouter);
app.use('/projek', aboutBMRouter);

app.use('/en', indexENRouter);
app.use('/en/orang-asli', oaENRouter);
app.use('/en/chapter1', c1Router);
app.use('/en/chapter2', c2Router);
app.use('/en/chapter3', c3Router);
app.use('/en/chapter4', c4Router);
app.use('/en/chapter5', c5Router);
app.use('/en/take-action', actionRouter);
app.use('/en/resources', resourcesRouter);
app.use('/en/about', aboutRouter);

app.get('/en/hero-teachers', function (req, res) {
  res.render('hero-teachers', { title: 'Meet Our Hero Teachers'});
})

app.get('/guru-wira', function (req, res) {
  res.render('hero-teachers-bm', { title: 'Kenali Guru-Guru Wira Kita'});
})


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
