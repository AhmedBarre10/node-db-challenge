const server = require('./server');

const PORT = process.env.DB_ENV || 3000;

server.listen(PORT, () => {
	console.log(`=== Running on port ${PORT}  ===`);
});
