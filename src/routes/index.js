module.exports = function ( $express, $app, $database, $methods ) {

	// Controllers dependencies
		var $ = {};
		$.database = $database;
		$.methods = $methods;

	// Routes
		var viewsRouter = $express.Router();
		var authRouter = $express.Router();
		var apiRouter = $express.Router();

	// Controllers
		var Middle = require('./Middle')($);
		var Auth = require('./Auth')($);
		var Views = require('./Views')($);
		var Person = require('./Person')($);

	// Views
		viewsRouter.get('/login', Views.login);
		viewsRouter.get('/register', Views.register)

	// Auth
		authRouter.post('/login', Auth.login);
		authRouter.post('/logout', Auth.logout);

	// API
		// Middle pre
		apiRouter.all('/*', Middle.pre);
		// Person
		apiRouter.get('/me', Person.meGet);
		apiRouter.put('/me', Person.mePut);
		apiRouter.get('/person', Person.getAll);
		apiRouter.get('/person/:personId', Person.getOne);
		apiRouter.post('/person', Person.post);
		apiRouter.put('/person/:personId', Person.put);
		// Middle post
		apiRouter.all('/*', Middle.post);


	// Set routers
		$app.use( viewsRouter );
		$app.use( '/auth', authRouter );
		$app.use( '/api', apiRouter );

}