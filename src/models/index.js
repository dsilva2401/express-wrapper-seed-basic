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
			username: Sequelize.STRING,
			password: Sequelize.STRING,
			active: Sequelize.BOOLEAN
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

		var DocumentType = db.define('DocumentType', {
			name: Sequelize.STRING,
			description: Sequelize.STRING
		});

		var PersonDocument = db.define('PersonDocument', {
			number: Sequelize.INTEGER
		});

		var GeoZone = db.define('GeoZone', {
			name: Sequelize.STRING
		});

		Credential.belongsTo( Person );
		SessionKey.belongsTo( Person );
		Item.belongsTo( ItemGroup );
		PersonDocument.belongsTo( Person );
		PersonDocument.belongsTo( DocumentType );
		GeoZone.belongsTo( GeoZone, { as: 'ParentGeoZone' } );
		Person.belongsTo( GeoZone, { as: 'District' } )


	// Sync database
		db.sync();

	return db;
}