module.exports = {
	development: {
		client: 'sqlite3',
		useNullAsDefault: true,
		connection: {
			filename: './projects.db3'
		},
		migrations: {
			directory: './migrations'
		},
		seeds: {
			directory: './seeds'
		}
	}
};
