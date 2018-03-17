const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {
  let samzUser = bot.users.get("111980412296839168");
  let emojiBlocked = message.guild.roles.get("421358575458451457");
  
  let testText1 = '::gives ' + `<@!` + message.author.id + `>` + ' the side-eye.::'
  let testText2 = `${samzUser} is cool.`
  let testText3 = '**Channel to be used for BOT log of member join/leave activity, promotions and kick/ban log.**'
  let testText4 = `You're not cool.`
  
  let testText = responses.testText;
  
  let burnoutText = `"Ya know there is lots of stuff to do in Paradise City. Outside all that Racing and Road Raging stuff. Go take out some Burnout Billboards, break some Road Rules, find some new shortcuts, or something big to jump off! Let's explore, people! Know your enemy, and know your battlefield! This is Atomika, on Crash FM!"`
  let burnoutFooter = '-DJ Atomika'
  // BEGIN RICH EMBED
  let embed = new Discord.RichEmbed()
    .setColor(0x37a0dc)
    .setDescription(burnoutText)
    .setFooter(burnoutFooter);
    // message.channel.send({embed: embed});
    message.channel.send(testText4);
}

module.exports.help = {
  name: "test"
//   description: "This is a test command... for testing."
}

/*
Members:
winter-bot = bot.users.get("420054493250584586")
samzgr8 = bot.users.get("111980412296839168")
freeseus = bot.users.get("213091147059429393")

Channels:
message.guild.channels.get("420361525321138176")

Roles:
message.server.roles.find("name", "captain: club penguin")
message.guild.roles.get("421358575458451457") // emoji-blocked
*/
