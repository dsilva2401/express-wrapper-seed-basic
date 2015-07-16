var Sequelize = require('sequelize');

module.exports = function ($config) {

	// Database configuration
	var dbConfig = $config.databases['main'][$config.env];

	// Create database
	var db = new Sequelize(
		dbConfig.database,
		dbConfig.username,
		dbConfig.password,
		dbConfig.options
	);

	// Setup models
	var Credential = db.define('Credential', {
		password: Sequelize.STRING
	});

	// Sync database
	db.sync();

	return db;
}