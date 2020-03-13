/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars');
var add = require('./routes/add');
var index = require('./routes/index');
var survey = require('./routes/survey');
var profile = require('./routes/profile');
var edit = require('./routes/edit');
var level = require('./routes/level');
var calendar = require('./routes/calendar')

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, '/public')));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);
app.get('/add', add.addUser);
app.get('/login', add.checkLogin);
app.get('/survey', survey.view);
app.get('/profile', profile.view);
app.get('/edit', edit.view);
app.get('/editUser', edit.editUser);
app.get('/calendar', calendar.view);
app.get('/level', level.calculateLevel);

app.get('/basic', function (req, res) {
	res.render('basicroutines');
});
app.get('/beginner', function (req, res) {
	res.render('beginner');
});

app.get('/cardio', function (req, res) {
	res.render('cardio');
});
app.get('/elliptical', function (req, res) {
	res.render('elliptical');
});
app.get('/bikes', function (req, res) {
	res.render('exercisebikes');
});
app.get('/home', function (req, res) {
	res.render('home');
});
app.get('/killer', function (req, res) {
	res.render('killer');
});
app.get('/leg', function (req, res) {
	res.render('leg');
});
app.get('/search', function (req, res) {
	res.render('search');
});
app.get('/treadmill', function (req, res) {
	res.render('treadmill');
});
app.get('/weightlift', function (req, res) {
	res.render('weightlift');
});
app.get('/abs', function (req, res) {
	res.render('abs');
});
app.get('/shoulder', function (req, res) {
	res.render('shoulder');
});
app.get('/back', function (req, res) {
	res.render('back');
});
app.get('/triceps', function (req, res) {
	res.render('triceps');
});
app.get('/chest', function (req, res) {
	res.render('chest');
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});