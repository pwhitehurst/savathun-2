const quotes = require('../data/quotes.js').quotes;
const triggers = require('../data/triggers.js').triggers;

var lastMessageTimeMap = new Object();
var timeout = 2

function handleSavathunQuotes(msg) {
  var lastMessageTime = 0
  if (msg.guildId in lastMessageTimeMap) {
    lastMessageTime = lastMessageTimeMap[msg.guildId]
  }
  var timeSinceLastSent = Date.now() - lastMessageTime;
  if (timeSinceLastSent > timeout * 60000) {
    for (const word of msg.content.split(" ")) {
      if (triggers.includes(word.toLowerCase())) {
        var num = Math.floor(Math.random() * quotes.length);
        console.log("using quote " + num);
        msg.reply(quotes[num].phrase)
          .then(a => {
            lastMessageTimeMap[msg.guildId] = Date.now();
          })
          .catch(error => {
            console.log("failed to reply to message");
            console.error(error);

          });
        break;
      }
    }
  } else {
    console.log("timeout not exceeded for guild " + msg.guildId + ", skipping\nlast sent " + timeSinceLastSent + " milliseconds");
  }
}

module.exports = {
  name: 'messageCreate',
  execute(client, msg) {
    if (msg.author.bot) return

    handleSavathunQuotes(msg);
  },
};