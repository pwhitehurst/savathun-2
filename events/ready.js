const messages = require('../data/scheduledMessages.js').messages;
const schedule = require('node-schedule');
const Promise = require("bluebird");

module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		Promise.map(messages, scheduledMessage => {
			let scheduledChannel = client.channels.resolve(scheduledMessage.channel)
			schedule.scheduleJob(
				scheduledMessage.date,
				() => {
					console.log('sending messag')
					scheduledChannel.send(scheduledMessage.message);
				}
			);
		});
		console.log(`Ready! Logged in as ${client.user.tag}`);
	},
};