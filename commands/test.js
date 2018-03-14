const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {
  let samzUser = bot.users.get("111980412296839168");
  let emojiBlocked = message.guild.roles.get("421358575458451457");
  
  let testText = '::gives ' + `<@!` + message.author.id + `>` + ' the side-eye.::'
  let testText2 = `${samzUser} is cool.`
  // BEGIN RICH EMBED
  let embed = new Discord.RichEmbed()
    .setColor(0x37a0dc)
    .setDescription(testText2);
    // message.channel.send({embed: embed});
    message.channel.send(testText2);
}

module.exports.help = {
  name: "test"
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
