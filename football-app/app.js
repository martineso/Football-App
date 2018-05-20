var createError = require('http-errors');
var express = require('express');
var compression = require('compression');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var competitionsRouter = require('./api/competitions');
var fixturesRouter = require('./api/fixtures');
var teamsRouter = require('./api/teams');

var app = express();

app.use(logger('dev'));
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/scripts', express.static(__dirname + '/node_modules/'));
app.use('/stylesheets', express.static(__dirname + '/node_modules/'));

// Routes
app.use('/', indexRouter);
app.use('/competitions', competitionsRouter);
app.use('/fixtures', fixturesRouter);
app.use('/teams', teamsRouter);

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
});

module.exports = app;
