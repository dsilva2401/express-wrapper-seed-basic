module.exports = function ($) {
	var r = {};

	r.all = function ( req, res, next ) {
		next();
	}

	return r;
}