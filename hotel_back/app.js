var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//ruta database
var database = require("./config/database");
var auth = require("./auth/main_auth");



var app = express();

var usuariosRouter = require('./routes/usuarios.router')
var habitacionesRouter =require('./routes/habitaciones.router')


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(auth); 

//Mongo Connection 
database.mongoConnect();


//ROUTER--------------------------------------------------------------------------------------------
app.use('/usuarios',usuariosRouter);
app.use('/habitaciones',habitacionesRouter);

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
