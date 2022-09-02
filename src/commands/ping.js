const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pingv2')
		.setDescription('Replies with Pong! again'),
	async execute(interaction) {
		await interaction.reply('Pong! (but different)');
	},
};
