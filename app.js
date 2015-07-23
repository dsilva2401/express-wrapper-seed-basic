
// Import modules
	var ExpressWrapper = require('express-wrapper');


// Create app
	var app = new ExpressWrapper();


// Setup app config
	app.config( require('./config') );


// Setup app
	app.init( require('./src/settings') );


// Setup methods
	app.run( require('./src/methods') );


// Setup database
	app.addDatabase('main', require('./src/models'));


// Setup routes
	app.run( require('./src/routes') );


// Start server
	app.up();