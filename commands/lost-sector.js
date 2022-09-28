const fs = require('fs');
const { SlashCommandBuilder } = require('@discordjs/builders');

const lsFiles = fs.readdirSync('./data/lost-sectors').filter(file => file.endsWith('.js'));

lostsectors = {};
for (const file of lsFiles) {
	const lostsector = require(`../data/lost-sectors/${file}`);
	// Set a new item in the Collection
	// With the key as the command name and the value as the exported module
	lostsectors[lostsector.key] = lostsector.embed;
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('lost_sector')
		.setDescription('Replies with today\'s lost sector!'),
	async execute(interaction) {
        if (interaction.guildId === '728409870616887319' && (interaction.channel.parentId !== '784554762095558708' && interaction.channelId !== '778025332711620618')) {
			interaction.reply('`/lost_sector` is disabled in ' + interaction.channel.name);
			return;
		}
        const lost_sectors = [
            "Concealed Void",
            "Bunker E15",
            "Perdition",
            "The Conflux",
            "K1 Crew Quarters",
            "K1 Logistics",
            "K1 Communion",
            "Skydock IV",
            "Scavenger's Den",
            "The Quarry",
            "Excavation Site XII"
        ];
        const exotics = [
            "Chest",
            "Helmet",
            "Legs",
            "Arms"
        ]
        const start_date = new Date('2022-08-23T17:00:00.000Z');
        console.log("Start Date: " + start_date);
        let now = new Date('2022-08-25T15:00:00.000Z'); 
        now = Date.now();
        console.log("now: " + now);
        let difference = now - start_date;
        console.log("difference: " + difference);
        let numDays = Math.floor(difference / (1000 * 3600 * 24));
        console.log("Number of days: " + numDays)
        let lostSectorOffset = numDays % lost_sectors.length;
        console.log("Lost Sector Offset: " + lostSectorOffset)
        let exoticOffset = numDays % exotics.length;
        console.log("Exotics Offset: " + exoticOffset)
        let todaysExotic = exotics[exoticOffset];
        let todaysLS = lostsectors[lost_sectors[lostSectorOffset]];
        todaysLS[0].title += " - Exotic " + todaysExotic;
        console.log(todaysLS);
		await interaction.reply({ embeds: todaysLS });
	},
};