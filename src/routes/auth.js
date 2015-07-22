module.exports = function ($) {
	var r = {};

	r.login = function (req, res) {
		res.end('login');
	}

	r.logout = function (req, res) {
		res.end('logout');
	}

	return r;
}