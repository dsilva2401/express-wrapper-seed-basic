module.exports = {
	env: 'dev',
	server: {
		host: 'localhost',
		port: 3000
	},
	publicDir: 'public',
	databases: {
		main: {
			dev: {
				database: 'dbName',
				username: 'username',
				password: 'pwd',
				options: {
					host: 'localhost',
					dialect: 'sqlite',
					storage: 'data/database.sqlite'
				}
			}
		}
	}
}