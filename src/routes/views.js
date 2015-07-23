module.exports = function ($) {
	var r = {};
	var db = $.database.main;
	var models = db.models;

	r.login = function (req, res) {
		res.end('login');
	}

	r.register = function (req, res) {
		res.end('register')
	}

	return r;
}