module.exports = function ( $express, $app, $database, $methods, $config ) {

	// Controllers dependencies
		var $ = {};
		$.database = $database;
		$.methods = $methods;
		$.config = $config;

	// Routes
		var viewsRouter = $express.Router();
		var authRouter = $express.Router();
		var apiRouter = $express.Router();

	// Controllers
		var Middle = require('./Middle')($);
		var Auth = require('./Auth')($);
		var Views = require('./Views')($);
		var Person = require('./Person')($);
		var GeoZone = require('./GeoZone')($);
		var ItemGroup = require('./ItemGroup')($);

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
		// GeoZone
		apiRouter.get('/geozone', GeoZone.get);
		apiRouter.get('/geozone/:geozoneId', GeoZone.get);
		apiRouter.put('/geozone/:geozoneId', GeoZone.put);
		apiRouter.post('/geozone', GeoZone.post);
		apiRouter.post('/geozone/:geozoneId', GeoZone.post);
		apiRouter.delete('/geozone/:geozoneId', GeoZone.delete);
		// Item groups
		apiRouter.get('/item-group', ItemGroup.getAll);
		apiRouter.get('/item-group/:itemgroupId', ItemGroup.getOne);
		apiRouter.put('/item-group/:itemgroupId', ItemGroup.put);
		apiRouter.post('/item-group', ItemGroup.post);
		apiRouter.delete('/item-group/:itemgroupId', ItemGroup.delete);
		// Middle post
		apiRouter.all('/*', Middle.post);


	// Set routers
		$app.use( viewsRouter );
		$app.use( '/auth', authRouter );
		$app.use( '/api', apiRouter );

}