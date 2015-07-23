module.exports = function ($) {
	var r = {};

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
		res.end('post');
	}

	r.put = function ( req, res ) {
		res.end('put');
	}

	r.delete = function ( req, res ) {
		res.end('delete');
	}


	return r;
}