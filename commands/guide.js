const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

const emojiC = '🇨';
const emoji1 = '1️⃣';
const emoji2 = '2️⃣';
const emoji3 = '3️⃣';
const emoji4 = '4️⃣';

const vowEmbed = new MessageEmbed()
	.setTitle('Vow of the Disciple Guide')
	.setDescription('React with the guide you would like:')
	.addFields(
		{ name: 'Callouts', value: 'React with ' + emojiC },
		{ name: 'Acquisition', value: 'React with ' + emoji1, inline: true },
		{ name: 'Caretaker', value: 'React with ' + emoji2, inline: true },
		{ name: 'Exhibition', value: 'React with ' + emoji3, inline: true },
		{ name: 'Rhulk', value: 'React with ' + emoji4, inline: true }
	)

const vowCalloutEmbed = new MessageEmbed()
	.setTitle('Vow of the Disciple - Caydes Shadow Callouts')
	.setImage('https://cdn.discordapp.com/attachments/950979003492212786/950979078943539250/Caydes_Shadow_Callouts.png')

const vow1Embed = new MessageEmbed()
	.setTitle("Vow of the Disciple - Acquisition")
	.setImage('https://i.postimg.cc/43Ygk2Z6/Vot-D-Encounter-1-V6.png');

const vow2Embed1 = {
	title: 'Vow of the Disciple - Caretaker Floor 1',
	image: {
		url: 'https://cdn.discordapp.com/attachments/950979003492212786/951558023615230082/MH2gzYr.png',
	}
}

const vow2Embed2 = {
	title: 'Vow of the Disciple - Caretaker Floor 2',
	image: {
		url: 'https://cdn.discordapp.com/attachments/950979003492212786/951558069836480532/vSWekf9.png',
	}
}

const vow2Embed3 = {
	title: 'Vow of the Disciple - Caretaker Floor 3',
	image: {
		url: 'https://cdn.discordapp.com/attachments/950979003492212786/951558119308296222/0S3GhDa.png',
	}
}

const vow3Embed = new MessageEmbed()
	.setTitle("Vow of the Disciple - Exhibition")
	.setImage('https://i.postimg.cc/NFf6w3vV/Vot-D-Encounter-3-V6.jpg')

const vow4Embed = new MessageEmbed()
	.setTitle("Vow of the Disciple - Rhulk")
	.setImage('https://i.postimg.cc/sXb7VRx6/Vot-D-Encounter-4-v2.png')


async function handleVow(message, originalUser) {
	const reply = await message.reply({ embeds: [vowEmbed], fetchReply: true });
	const filter = (reaction, user) => {
		return [emojiC, emoji1, emoji2, emoji3, emoji4].includes(reaction.emoji.name) && user.id === originalUser.id;
	};
	message.delete()
	reply.react(emojiC)
		.then(() => reply.react(emoji1))
		.then(() => reply.react(emoji2))
		.then(() => reply.react(emoji3))
		.then(() => reply.react(emoji4));

	reply.awaitReactions({ filter, max: 1, time: 10000, errors: ['time'] })
		.then(collected => {
			encounter = collected.first();
			var embedArray;
			if (encounter.emoji.name === emojiC) {
				embedArray = [vowCalloutEmbed];
			} else if (encounter.emoji.name === emoji1) {
				embedArray = [vow1Embed];
			} else if (encounter.emoji.name === emoji2) {
				embedArray = [vow2Embed1, vow2Embed2, vow2Embed3];
			} else if (encounter.emoji.name === emoji3) {
				embedArray = [vow3Embed];
			} else if (encounter.emoji.name === 4) {
				embedArray = [vow4Embed];
			}
			reply.reply({ embeds: embedArray, failIfNotExists: false })
			reply.delete();
		})
		.catch(collected => {
			reply.reply('Please react with an appropriate emoji');
		});
}

const emojiV = '🇻';
const emojiD = '🇩';

const guideEmbed = new MessageEmbed()
.setTitle('Destiny Activity Guides')
.setDescription('React with the guide you would like:')
.addFields(
	{ name: 'Vow of the Disciple', value: 'React with ' + emojiV, inline: true},
	{ name: 'Deep Stone Crypt', value: 'React with ' + emojiD, inline: true },
);

module.exports = {
	data: new SlashCommandBuilder()
		.setName('guide')
		.setDescription('Get visual guides for raids')
	,
	async execute(interaction) {
		message = await interaction.reply({ embeds: [guideEmbed], fetchReply: true });

		message.react(emojiV).then(() => message.react(emojiD));

		const filter = (reaction, user) => {
			return [emojiV, emojiD].includes(reaction.emoji.name) && user.id === interaction.user.id;
		};

		message.awaitReactions({ filter, max: 1, time: 10000, errors: ['time'] })
			.then(collected => {
				const reaction = collected.first();
				if (reaction.emoji.name === emojiV) {
					return handleVow(message, interaction.user);
				}
				else if (reaction.emoji.name === emojiD) {
					return message.reply('Deep Stone Crypt coming soon!');
				} else {
					return message.reply('unknown emoji')
				}
			})
			.catch(collected => {
				message.reply('You reacted with neither 🇻, nor 🇩.');
				message.delete();
			});
	}

};