
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
	const reply = await message.reply({ embeds: guide.main_embed, fetchReply: true, failIfNotExists: false });
	const filter = (reaction, user) => {
		return guide.emoji_used.includes(reaction.emoji.name) && user.id === originalUser.id;
	};
	message.delete()
	for (const e of guide.emoji_used) {
		reply.react(e)
			.catch(err => {
				console.log('failed to react to message', err);
			});
	}

	reply.awaitReactions({ filter, max: 1, time: 10000, errors: ['time'] })
		.then(collected => {
			encounter = collected.first();
			reply.reply({ embeds: guide.encounters[encounter.emoji.name], failIfNotExists: false })
			reply.delete();
		})
		.catch(collected => {
			reply.reply({ content: 'Please react with an appropriate emoji', failIfNotExists: false });
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
				message.reply({ content: 'You reacted with neither 🇻, nor 🇩.', failIfNotExists: false });
				message.delete();
			});
	}

};