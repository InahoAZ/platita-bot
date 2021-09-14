const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

// Create a new bot instance
const bot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

// When the bot is ready, run this code (only once)
bot.once('ready', () => {
	console.log('Ready!');
});


//When a message is created in a channel ...
bot.on("messageCreate", message =>{
  console.log(message.content);
  if (message.content === 'a casa') {
    message.reply('platita');
  }

  //Connect to channel test
  if (message.content === 'conectate capo') {
    console.log('');
  }

})





// Login to Discord with your client's token
bot.login(token).catch(err => {
    console.error('');
    console.error(("Couldn't log into Discord. Wrong bot token?"));
    console.error('');
    console.error(err);
    process.exit();
  });


