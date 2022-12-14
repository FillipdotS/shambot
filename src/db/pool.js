const { Pool } = require('pg');

const pool = new Pool({
	user: process.env.SHAMBOT_PG_USER,
	password: process.env.SHAMBOT_PG_PASS,
	host: process.env.SHAMBOT_PG_HOST,
	database: 'shambot-db',
	port: 5432,
});

module.exports = pool;