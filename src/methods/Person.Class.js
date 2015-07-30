module.exports = function ($) {
	var m = {};
	var $Error = $.global.Error;
	var Person = function () { return $.database.main.models.Person; }
	var Credential = function () { return $.database.main.models.Credential; }


	m.fullRegister = function ( personData ) {
		var deferred = $.q.defer();
		var credentials = {
			username: personData.username,
			password: personData.password
		};

		// Params validation
		if (!credentials.username || !credentials.password) {
			var missing = [];
			if (!credentials.username) missing.push( 'username' );
			if (!credentials.password) missing.push( 'password' );
			deferred.reject( new $Error().missingParameters(missing) );
		}

		Person().create({
			name: personData.name,
			email: personData.email,
			sex: personData.sex
		}).then(function ( person ) {
			Credential().cipherAndRegister( person, credentials ).then(function () {
				deferred.resolve( person );
			}).catch(function ( err ) {
				deferred.reject( err );
			});
		}).catch(function ( err ) {
			// Email already registered validation
			if ( err.name == 'SequelizeUniqueConstraintError' ) {
				deferred.reject( new $Error(err).emailAlreadyRegistered() );
			} else {
				deferred.reject( err );
			}
		});
		return deferred.promise;
	}


	m.basicRegister = function ( personData ) {
		var deferred = $.q.defer();
		Person().create({
			name: personData.name,
			email: personData.email,
			sex: personData.sex
		}).then(function ( personData ) {
			deferred.resolve(personData);
		}).catch(function ( err ) {
			deferred.reject(err);
		});
		return deferred.promise;
	}


	m.findByFilter = function ( reqQuery ) {
		var deferred = $.q.defer();
		Person().findAll().then(function (persons) {
			deferred.resolve(persons);
		}).catch(function (err) {
			deferred.reject(err);
		});
		return deferred.promise;
	}


	m.updateDataById = function ( id, pData ) {
		var deferred = $.q.defer();
		delete pData.email;
		Person().findById( id ).then(function (person) {
			Object.keys(pData).forEach(function (k) {
				person[k] = pData[k];
			});
			person.save().then(function (person) {
				deferred.resolve(person);
			}).catch(function (err) {
				deferred.reject(err);
			});
		}).catch(function (err) {
			deferred.reject(err);
		})
		return deferred.promise;
	}


	return m;
}