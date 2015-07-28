module.exports = function ( $express, $app, $database ) {

	// Controllers dependencies
		var $ = {};
		$.database = $database;

	// Routes
		var viewsRouter = $express.Router();
		var authRouter = $express.Router();
		var apiRouter = $express.Router();

	// Controllers
		var middle = require('./middle')($);
		var auth = require('./auth')($);
		var views = require('./views')($);
		var person = require('./person')($);

	// Views
		viewsRouter.get('/login', views.login);
		viewsRouter.get('/register', views.register)

	// Auth
		authRouter.post('/login', auth.login);
		authRouter.post('/logout', auth.logout);

	// API
		// Middle
		apiRouter.all('/*', middle.all);
		// Person
		apiRouter.get('/me', person.meGet);
		apiRouter.put('/me', person.mePut);
		apiRouter.get('/person', person.getAll);
		apiRouter.get('/person/:personId', person.getOne);
		apiRouter.post('/person', person.post);
		apiRouter.put('/person/:personId', person.put);


	// Set routers
		$app.use( viewsRouter );
		$app.use( '/auth', authRouter );
		$app.use( '/api', apiRouter );

}