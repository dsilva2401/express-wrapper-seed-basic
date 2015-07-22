module.exports = function ($) {
	var r = {};

	r.me = function ( req, res ) {
		res.end('me')
	}

	return r;
}