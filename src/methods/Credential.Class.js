module.exports = function ($) {
	var m = {};
	var Credential = function () { return $.database.main.models.Credential; }


	m.cipherAndRegister = function ( person, credentials ) {
		var deferred = $.q.defer();
		// TODO : Cipher password
		Credential().create({
			username: credentials.username,
			password: credentials.password
		}).then(function (credential) {
			credential.setPerson( person ).then(function () {
				deferred.resolve( person );
			}).catch(function ( err ) {
				deferred.reject( err );
			});
		}).catch(function ( err ) {
			deferred.reject( err );
		});
		return deferred.promise;
	}


	return m;
}