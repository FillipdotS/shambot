const { SlashCommandBuilder } = require('discord.js');
const { getPointsForUser } = require('../db/funny-points.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pingv2')
		.setDescription('Replies with Pong! again'),
	async execute(interaction) {
		const points = await getPointsForUser({ userId: '123' });
		await interaction.reply(`You got ${points} points`);
	},
};
