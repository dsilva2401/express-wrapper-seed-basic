module.exports = function ($) {
	var m = {};

	m.success = function (req, res, next, options) {
		options = options || {};
		var callback = options.callback || function () {}
		return function (data) {
			callback( data );
			res.json( data );
			next();
		}
	}

	m.error = function (req, res, next, options) {
		options = options || {};
		var callback = options.callback || function () {}
		return function ( err ) {
			callback( err );
			console.error( err );
			res.status( 500 );
			next();
		}
	}

	return m;
}