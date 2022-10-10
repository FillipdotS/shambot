const { SlashCommandBuilder } = require('discord.js');
const { addPointForUser } = require('../db/funny-points');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('fp-give')
		.setDescription('Give someone a funny point')
		.addUserOption(option =>
			option
				.setName('user')
				.setDescription('Who to give points to')
				.setRequired(true)),
	async execute(interaction) {
		const givingTo = interaction.options.getUser('user');

		if (givingTo.id === interaction.user.id) {
			await interaction.reply('Can\'t give yourself points!');
			return;
		}

		await addPointForUser({ userId: givingTo.id });
		await interaction.reply(`${interaction.user} gave ${givingTo} a point!`);
	},
};