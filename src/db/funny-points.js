const pool = require('./pool.js');

const getPointsForUser = async ({ userId }) => {
	const result = await pool.query('SELECT funny_points FROM users WHERE id = $1', [userId]);

	return result.rows[0]['funny_points'] || 0;
};

module.exports = {
	getPointsForUser,
};