const path = require('node:path');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord.js');
const fs = require('node:fs');

const registerCommands = async (token, clientId) => {
	try {
		console.log('Re-registering bot commands...');

		const rest = new REST({ version: '10' }).setToken(token);

		// Delete all existing commands
		await rest.put(Routes.applicationCommands(clientId), { body: [] });
		console.log('Deleted all existing commands');

		// Load commands and push them to Discord
		const commands = [];
		const commandsPath = path.join(__dirname, 'commands');
		const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

		for (const file of commandFiles) {
			const command = require(`./commands/${file}`);
			commands.push(command.data.toJSON());
		}

		const data = await rest.put(Routes.applicationCommands(clientId), { body: commands });
		console.log(`Successfully added ${data.length} application (/) commands.`);
	}
	catch (error) {
		console.error(error);
		process.exit(1);
	}
};

module.exports = registerCommands;