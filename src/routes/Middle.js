module.exports = function ($) {
	var r = {};

	r.pre = function ( req, res, next ) {
		next();
	}

	r.post = function ( req, res, next ) {
		res.end();
	}

	return r;
}