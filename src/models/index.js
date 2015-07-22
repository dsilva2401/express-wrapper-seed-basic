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
		var Person = db.define('Person', {
			name: Sequelize.STRING,
			email: { type: Sequelize.STRING, unique: true }
		});

		var Credential = db.define('Credential', {
			password: Sequelize.STRING
		});

		var SessionKey = db.define('SessionKey', {
			key: Sequelize.STRING
		});

		var Item = db.define('Item', {
			name: Sequelize.STRING,
			value: Sequelize.STRING,
			description: Sequelize.TEXT
		});

		var ItemGroup = db.define('ItemGroup', {
			name: Sequelize.STRING,
			description: Sequelize.TEXT
		});

		Credential.belongsTo( Person );
		SessionKey.belongsTo( Person );
		Item.belongsTo( ItemGroup );

	// Sync database
		db.sync();

	return db;
}