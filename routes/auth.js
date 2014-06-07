exports.post_login = function(database) {
	console.log('TESTING');

	return function (req, res) {

		console.log('TESTING 2');

		var email= req.body.email;
		var password = req.body.password;

		console.log('USER NAME N PASS OBAINTED');

		if (email && password) {
			database.query('select * from user where email=? and password=?', [email, password], function(error, result){
				if (error) {
					console.log(error);
					return res.redirect('/XYZ');
				}

				if (result.length == 1) {
					console.log('user ok');
				} else {
					console.log('user not found');
				}
			});
		} else {
			// fields empty
			console.log('PRoBLEM WITH USR N PSS');
			return res.redirect('/');
		}
	}
}
	