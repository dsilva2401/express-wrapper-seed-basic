module.exports = function ($) {
	var r = {};
	var Response = $.methods.Response;
	var GeoZone = $.database.main.models.GeoZone;


	r.get = function (req, res, next) {
		var geozoneId = req.params.geozoneId;
		var findPromise = GeoZone.findAll();
		// Success
		findPromise.then(
			Response.success( req, res, next )
		);
		// Error
		findPromise.catch(
			Response.error( req, res, next )
		);
	}

	r.post = function (req, res, next) {
		next();
	}

	r.put = function (req, res, next) {
		next();
	}

	r.delete = function (req, res, next) {
		next();
	}
	
	
	return r;
}