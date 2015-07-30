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
			console.log( $.config );
			if ( $.config.env == 'dev' ) {
				res.json( err );
				console.error( err );
			}
			callback( err );
			res.status( 500 );
			next();
		}
	}

	return m;
}