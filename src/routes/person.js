module.exports = function ($) {
	var r = {};
	var Person = $.database.main.models.Person;

	r.meGet = function ( req, res ) {
		res.end('meGet');
	}

	r.mePut = function ( req, res ) {
		res.end('mePut');
	}

	r.getAll = function ( req, res ) {
		Person.findByFilter( req.query ).then(function (persons) {
			res.json( persons );
		}).catch(function (err) {
			console.error( err );
			res.end();
		});
	}

	r.getOne = function ( req, res ) {
		var personId = req.params.personId;
		Person.findById(personId).then(function (person) {
			res.json( person );
		}).catch(function (err) {
			console.error( err );
			res.end();
		});
	}

	r.post = function ( req, res ) {
		var personData = req.body;
		var registerMethod = ( 
			req.query.full ?
			Person.fullRegister :
			Person.basicRegister
		);
		registerMethod(personData).then(function (pData) {
			res.json( pData );
		}).catch(function (err) {
			console.error( err );
			res.end();
		});
	}

	r.put = function ( req, res ) {
		var persondata = req.body;
		var personId = req.params.personId;
		Person.updateDataById( personId, persondata ).then(function (person) {
			res.json( person );
		}).catch(function (err) {
			console.log( err );
			res.end();
		})
	}

	return r;
}