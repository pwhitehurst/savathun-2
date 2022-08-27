
const fs = require('fs');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

const guideFiles = fs.readdirSync('./data/guides').filter(file => file.endsWith('.js'));

guides = {};
base_fields = [];
base_emoji = [];
for (const file of guideFiles) {
	const guide = require(`../data/guides/${file}`);
	// Set a new item in the Collection
	// With the key as the command name and the value as the exported module
	guides[guide.activity.activity_emoji] = guide.activity;
	base_fields.push(guide.activity.main_field);
	base_emoji.push(guide.activity.activity_emoji);
}


async function handleGuide(message, originalUser, guide) {
	message.reactions.removeAll()
		.catch(error => console.error('Failed to clear reactions:', error));
	await message.edit({ embeds: guide.main_embed });
	const filter = (reaction, user) => {
		return guide.emoji_used.includes(reaction.emoji.name) && user.id === originalUser.id;
	};
	for (const e of guide.emoji_used) {
		message.react(e)
			.catch(err => {
				console.log('failed to react to message', err);
			});
	}

	message.awaitReactions({ filter, max: 1, time: 10000, errors: ['time'] })
		.then(collected => {
			encounter = collected.first();
			message.reactions.removeAll()
				.catch(error => console.error('Failed to clear reactions:', error));
			message.edit({ embeds: guide.encounters[encounter.emoji.name], failIfNotExists: false })
		})
		.catch(collected => {
			message.edit({ content: 'Please react with an appropriate emoji', failIfNotExists: false });
		});
}

const guideEmbed = new MessageEmbed()
	.setTitle('Destiny Activity Guides')
	.setDescription('React with the guide you would like:')
	.addFields(base_fields);

module.exports = {
	data: new SlashCommandBuilder()
		.setName('guide')
		.setDescription('Get visual guides for raids')
	,
	async execute(interaction) {
		if (interaction.guildId === '728409870616887319' && (interaction.channel.parentId !== '784554762095558708' && interaction.channelId !== '778025332711620618')) {
			interaction.reply('`/guide` is disabled in ' + interaction.channel.name);
			return;
		}
			
		message = await interaction.reply({ embeds: [guideEmbed], fetchReply: true, failIfNotExists: false });

		for (const e of base_emoji) {
			message.react(e)
				.catch(err => {
					console.log('failed to react to message', err);
				});
		}

		const filter = (reaction, user) => {
			return base_emoji.includes(reaction.emoji.name) && user.id === interaction.user.id;
		};

		message.awaitReactions({ filter, max: 1, time: 10000, errors: ['time'] })
			.then(collected => {
				const reaction = collected.first();
				const guide = guides[reaction.emoji.name];
				if (guide != undefined) {
					handleGuide(message, interaction.user, guide);
				}
			})
			.catch(collected => {
				message.edit({ content: 'You reacted with neither 🇻, nor 🇩.', failIfNotExists: false })
					.catch(err => console.log('failed to edit message', err));
			});
	}

};