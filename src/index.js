const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, GatewayIntentBits } = require('discord.js');
const registerCommands = require('./register-commands.js');

const token = process.env.SHAMBOT_TOKEN;
const clientId = process.env.SHAMBOT_CLIENTID;

registerCommands(token, clientId);

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);

	client.commands.set(command.data.name, command);
}

client.once('ready', () => {
	console.log('------- ShamBot ready -------');
});

client.on('interactionCreate', async interaction => {
	if (interaction.isChatInputCommand()) {
		console.log(`${interaction.user.tag} used command ${interaction.commandName}`);

		const command = client.commands.get(interaction.commandName);

		if (command) {
			try {
				await command.execute(interaction);
			}
			catch (error) {
				console.error(error);
				await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
			}
		}
	}
});

client.login(token);
