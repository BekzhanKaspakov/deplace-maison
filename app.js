var createError = require('http-errors');
var express = require('express');
var exphbs = require('express-handlebars');
var Handlebars = require('handlebars');
var favicon = require('serve-favicon');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');

var app = express();
app.use(favicon(path.join(__dirname, 'public', 'img', 'favicon.png')));
var hbs = exphbs.create({
  extname: 'hbs',
  defaultLayout: 'layout',
  layoutsDir: path.join(__dirname, 'views/layouts'),
  partialsDir: path.join(__dirname, 'views/partials'),
  handlebars: Handlebars,
  helpers: {
    concat: (string1, string2) => {
      return string1 + string2;
    },
    eq: (one, two) => {
      return one === two;
    },
    neq: (one, two) => {
      return one !== two;
    },
    greater: (one, two) => {
      return one > two;
    },
    leq: (one, two) => {
      return one <= two;
    }
  }
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

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
