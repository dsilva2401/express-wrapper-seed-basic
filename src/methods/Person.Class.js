module.exports = function ($) {
	var m = {};
	var Person = function () { return $.database.main.models.Person; }


	m.fullRegister = function ( personData ) {
		// Person.create()
	}


	m.basicRegister = function ( personData ) {
		var deferred = $.q.defer();
		Person().create({
			name: personData.name,
			email: personData.email,
			sex: personData.sex
		}).then(function (personData) {
			deferred.resolve(personData);
		}).catch(function (err) {
			deferred.reject(new Error(err));
		});
		return deferred.promise;
	}


	return m;
}