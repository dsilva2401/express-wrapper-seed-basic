module.exports = function ($) {
	var m = {};
	var Credential = function () { return $.database.main.models.Credential; }


	m.cipherAndRegister = function ( person, credentials ) {
		var deferred = $.q.defer();
		// TODO : Cipher password
		var createPromise = Credential().create({
			username: credentials.username,
			password: credentials.password
		});
		// Success
		createPromise.then(function (credential) {
			var setCredentialPromise = credential.setPerson( person );
			// Success
			setCredentialPromise.then(function () {
				deferred.resolve( person );
			})
			// Error
			setCredentialPromise.catch(function ( err ) {
				deferred.reject( err );
			});
		})
		// Error
		createPromise.catch(function ( err ) {
			deferred.reject( err );
		});
		return deferred.promise;
	}


	return m;
}