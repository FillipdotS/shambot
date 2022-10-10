const { SlashCommandBuilder } = require('discord.js');
const { getPointsForUser } = require('../db/funny-points.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('fp-get')
		.setDescription('Test')
		.addUserOption(option =>
			option
				.setName('user')
				.setDescription('Whose points to get')
				.setRequired(false)),
	async execute(interaction) {
		const optionsUser = interaction.options.getUser('user');
		if (optionsUser) {
			const points = await getPointsForUser({ userId: interaction.options.getUser('user').id });
			await interaction.reply(`${optionsUser} has ${points} points`, { allowedMentions: { users: [] } });
		}
		else {
			const points = await getPointsForUser({ userId: interaction.user.id });
			await interaction.reply(`You got ${points} points`);
		}
	},
};