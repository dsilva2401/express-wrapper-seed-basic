module.exports = function ($) {
	var r = {};

	r.login = function (req, res) {
		res.end('login')
	}

	r.register = function (req, res) {
		res.end('register')
	}

	return r;
}