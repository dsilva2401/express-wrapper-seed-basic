var Sequelize = require('sequelize');

module.exports = function ($config, $methods) {

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
		},
			{
				classMethods: $methods.Person.Class,
				instanceMethods: $methods.Person.Instance
			}
		);

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

		var Role = db.define('Role', {
			name: Sequelize.STRING,
			description: Sequelize.TEXT
		});

		var PersonRole = db.define('PersonRole', {});

		Credential.belongsTo( Person );
		SessionKey.belongsTo( Person );
		Item.belongsTo( ItemGroup );
		PersonRole.belongsTo( Person );
		PersonRole.belongsTo( Role );

	// Sync database
		db.sync();

	return db;
}