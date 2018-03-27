const Discord = require('discord.js');
const fs = require('fs');

const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const prefix = require('./config.json').prefix;
const allowedUsers = require('./config.json').allowedUsers;
const responses = require('./commands/textblocks/responses.js').responses;

fs.readdir("./commands/", (err, files) => {
  if(err) console.error(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0) {
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});

bot.login(process.env.BOT_TOKEN);

bot.on('ready', () => {
  bot.user.setPresence({ game: { name: `Moderator` }, type: 0 });
  console.log(`${bot.user.username} Bot Online!`);
});

bot.on('message', async message => {
  let msg = message.content.toUpperCase();
  let args = message.content.slice(prefix.length).trim().split(/ +/g);
  let cmd = args.shift().toLowerCase();

  if(!msg.startsWith(prefix)) return;
  if(message.author.bot) return;
  if(msg.startsWith(prefix) && !allowedUsers.includes(message.author.id)) return; // prefix and not allowed user IDs

  try {
    let commandFile = require(`./commands/${cmd}.js`);
    commandFile.run(bot, message, args);
  } catch (e) {
    console.log(e.message);
  } finally {
    console.log(`${message.author.tag} ran the command !${cmd}`);
  }
});
