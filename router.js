var site = require('./routes/site');
var auth = require('./routes/auth');

 module.exports= function(app, database) {
 	app.get('/', site.index);
 	app.post('/login', auth.post_login(database));
 } 