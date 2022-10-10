const pool = require('./pool.js');

const createUserIfNotExists = async ({ userId }) => {
	await pool.query(
		'INSERT INTO users(id, funny_points) SELECT $1, 0 WHERE NOT EXISTS (SELECT 1 FROM users WHERE id=$2);',
		[userId, userId],
	);
};

const getPointsForUser = async ({ userId }) => {
	const result = await pool.query('SELECT funny_points FROM users WHERE id = $1', [userId]);

	return result.rows[0]?.['funny_points'] || 0;
};

const addPointForUser = async ({ userId }) => {
	await createUserIfNotExists({ userId });
	await pool.query('UPDATE users SET funny_points = funny_points + 1 WHERE id = $1', [userId]);
};

module.exports = {
	getPointsForUser,
	addPointForUser,
};