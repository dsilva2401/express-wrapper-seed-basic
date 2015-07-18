
// Import modules
	var ExpressWrapper = require('express-wrapper');


// Create app
	var app = new ExpressWrapper();


// Setup app config
	app.config( require('./config') );


// Setup app
	app.init( require('./src/settings') );

// Setup database
	app.addDatabase('main', require('./src/models'));


// Setup routes
	require('./src/routes')(app);


// Start server
	app.up();