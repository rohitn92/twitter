var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');

var mysql= require('mysql');

var router = require('./router');

var app = express();

	app.set('port', process.env.PORT || 3000);
	app.set('views', __dirname + '/views');
	app.set('view engine', 'jade');

	app.use(bodyParser());

	app.use(express.static(__dirname + '/public'));

app.use('development', function(){
	app.errorHandler({
		showStack: true,
		dumpExceptions: true
	});
});

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'twitter_db',
}); 


connection.connect(function(error){
	if (error) {
		console.log(error);
		process.exit(code=0);
	}
	console.log('CONNECTED to DB');
});

router(app, connection);

http.createServer(app).listen(app.get('port'), function(){
	console.log('express server listening on port ' + app.get('port'));
});