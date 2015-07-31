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

		// Basic user data
		var Person = db.define('Person', {
			name: Sequelize.STRING,
			documentNumber: { type: Sequelize.INTEGER, unique: true },
			email: { type: Sequelize.STRING, unique: true },
			sex: Sequelize.CHAR
		},
			{
				classMethods: $methods.Person.Class,
				instanceMethods: $methods.Person.Instance
			}
		);

		// User credentials
		var Credential = db.define('Credential', {
			username: { type: Sequelize.STRING, unique: true },
			password: Sequelize.STRING,
			active: Sequelize.BOOLEAN
		},
			{
				classMethods: $methods.Credential.Class
			}
		);

		// User session key
		var SessionKey = db.define('SessionKey', {
			key: { type: Sequelize.STRING, unique: true },
		},
			{
				classMethods: $methods.SessionKey.Class
			}
		);

		// Any geographic zone: Country, City, District, etc..
		var GeoZone = db.define('GeoZone', {
			name: Sequelize.STRING
		},
			{
				classMethods: $methods.GeoZone.Class
			}
		);

		// Type of employee: Seller, Boss, Secretary, etc..
		var Role = db.define('Role', {
			name: Sequelize.STRING,
			description: Sequelize.STRING,
			featuresAccess: Sequelize.INTEGER
		});

		// App feature: Manage sellers, Create coins, Manage logs, etc..
		var Feature = db.define('Feature', {
			name: Sequelize.STRING,
			description: Sequelize.STRING,
			accessNumber: Sequelize.INTEGER
		});

		// Employee data
		var Employee = db.define('Employee', {
			active: Sequelize.BOOLEAN
		});

		// Institution: Business, 
		var Institution = db.define('Institution', {
			active: Sequelize.BOOLEAN
		});

		// Media data
		var Media = db.define('Media', {
			available: Sequelize.BOOLEAN,
			name: Sequelize.STRING,
			type: Sequelize.STRING,
			url: Sequelize.STRING
		});

		// Multiple options group
		var ItemGroup = db.define('ItemGroup', {
			name: Sequelize.STRING,
			description: Sequelize.STRING
		},
			{
				classMethods: $methods.ItemGroup.Class
			}
		);

		// Options
		var Item = db.define('Item', {
			name: Sequelize.STRING,
			value: Sequelize.STRING,
			description: Sequelize.STRING
		});


		Credential.belongsTo( Person );
		SessionKey.belongsTo( Person );
		GeoZone.belongsTo( GeoZone, { as: 'ParentGeoZone' } );
		Person.belongsTo( GeoZone, { as: 'District' } );
		Person.belongsTo( Item, { as: 'DocumentType' } );
		Role.belongsTo( Role, { as: 'ParentRole' } );
		Role.belongsTo( Institution );
		Employee.belongsTo( Person );
		Employee.belongsTo( Role );
		Employee.belongsTo( Institution );
		Item.belongsTo( ItemGroup );


	// Sync database
		db.sync();

	return db;
}