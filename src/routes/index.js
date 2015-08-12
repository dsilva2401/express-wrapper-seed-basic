module.exports = function ( $express, $app, $database, $methods, $config ) {

	// Controllers dependencies
		var $ = {};
		$.database = $database;
		$.methods = $methods;
		$.config = $config;

	// Routes
		var apiRouter = $express.Router();

	// Controllers
		var Middle = require('./Middle')($);

	// API
		// Middle pre
		apiRouter.all('/*', Middle.pre);
		// Middle post
		apiRouter.all('/*', Middle.post);

	// Set routers
		$app.use( '/api', apiRouter );

}