module.exports = function ( $express, $app, $database ) {

	// Controllers dependencies
		var $ = {};
		$.database = $database;

	// Routes
		var viewsRouter = $express.Router();
		var authRouter = $express.Router();
		var apiRouter = $express.Router();

	// Controllers
		var auth = require('./auth')($);
		var views = require('./views')($);
		var basic = require('./basic')($);

	// Views
		viewsRouter.get('/login', views.login);
		viewsRouter.get('/register', views.register)

	// Auth
		authRouter.post('/login', auth.login);
		authRouter.post('/logout', auth.logout);

	// API
		// Basic
		apiRouter.get('/me', basic.me);
	
	// Set routers
		$app.use( viewsRouter );
		$app.use( '/auth', authRouter );
		$app.use( '/api', apiRouter );

}