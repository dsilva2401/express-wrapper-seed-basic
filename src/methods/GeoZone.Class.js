module.exports = function ($) {
	var m = {};
	var $Error = $.global.Error;
	var GeoZone = function () { return $.database.main.models.GeoZone; }

	m.updateDataById = function ( id, gData ) {
		var deferred = $.q.defer();
		var findPromise = GeoZone().findById( id );
		// Success
		findPromise.then(function (geozone) {
			Object.keys(gData).forEach(function (k) {
				geozone[k] = gData[k];
			});
			var savePromise = geozone.save();
			// Success
			savePromise.then(function (geozone) {
				deferred.resolve(geozone);
			});
			// Error
			savePromise.catch(function (err) {
				deferred.reject(err);
			});
		});
		// Error
		findPromise.catch(function (err) {
			deferred.reject(err);
		})
		return deferred.promise;
	}


	return m;
}