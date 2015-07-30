module.exports = function ($) {
	var r = {};
	var Credential = $.database.main.models.Credential;
	var Person = $.database.main.models.Person;
	var SessionKey = $.database.main.models.SessionKey;
	var Response = $.methods.Response;

	r.login = function (req, res) {
		var username = req.body.username;
		var password = req.body.password;
		var findPromise = Credential.verifyCredentials(username, password);
		// Success
		findPromise.then(function (uData) {
			var personPromise = Person.findById(uData.PersonId);
			// Success
			personPromise.then(function (person) {
				var sessionPromise = SessionKey.createSession( res, person );
				// Success
				sessionPromise.then(
					Response.success( req, res )
				);
				// Error
				sessionPromise.catch(
					Response.error( req, res )
				);
			});
			// Error
			personPromise.catch(
				Response.error( req, res )
			);
		});
		// Error
		findPromise.catch(
			Response.error( req, res )
		);
	}

	r.logout = function (req, res) {
		res.end('logout');
	}

	return r;
}