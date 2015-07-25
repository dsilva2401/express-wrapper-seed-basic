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
		res.end('getAll');
	}

	r.getOne = function ( req, res ) {
		res.end('getOne');
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
		res.end('put');
	}

	r.delete = function ( req, res ) {
		res.end('delete');
	}


	return r;
}