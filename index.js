const Discord = require('discord.js');
const fs = require('fs');

const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const prefix = '!';
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
  bot.user.setPresence({ game: { name: `winter-admin, created by samzgr8` }, type: 0 });
  console.log(`${bot.user.username} Bot Online!`);
});

bot.on('message', async message => {
  let msg = message.content.toUpperCase();
  let args = message.content.slice(prefix.length).trim().split(/ +/g);
  let cmd = args.shift().toLowerCase();

  let winterAdmin = bot.users.get("419686533038080003");
  let winterBot = bot.users.get("420054493250584586");

  let samzID = '111980412296839168';
  let benzID = '213091147059429393';
  // let officerRole = message.guild.roles.get("211143245445464064");
  let samzUser = bot.users.get("111980412296839168");
  
  let errorText = `<@!` + message.author.id + `>` + ` Please DM ${winterBot} if you need help.`

  if(!msg.startsWith(prefix)) return;
  if(message.author.bot) return;
  // if message contains command prefix and author not winterOfficer
  // if(msg.startsWith(prefix) && !message.member.roles.has("211143245445464064")) return; // prefix and not winterOfficer
  // if(msg.startsWith(prefix) && !bot.users.get("111980412296839168")) return; // prefix and not samzgr8
  if(msg.startsWith(prefix) && !allowedUsers.includes(message.author.id)) return; // prefix and not allowed user IDs

/* NOT WORKING
  // if message mentions winter-admin and author not samzgr8
  if(msg.startsWith.user.id === '419686533038080003') {
    // if(message.author.id !== benzID) {
    if(message.author.id !== samzID) {
      // message.author.send({embed: embed});
      // message.channel.send(`<@!` + message.author.id + `>` + ` **You have encountered an H2IK error! Check your DMs**`);
      message.channel.send(errorText);
      return;
    }
  }
*/

  try {
    let commandFile = require(`./commands/${cmd}.js`);
    commandFile.run(bot, message, args);
  } catch (e) {
    console.log(e.message);
  } finally {
    console.log(`${message.author.tag} ran the command !${cmd}`);
  }
});
