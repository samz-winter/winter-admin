const Discord = module.require('discord.js');

// const testText = '::gives ' + `<@!` + message.author.id + `>`  + ' the side-eye.::'

module.exports.run = async (bot, message, args) => {
  let samzUser = bot.users.get("111980412296839168");
  let testText = '::gives ' + `<@!` + message.author.id + `>` + ' the side-eye.::'
  let testText2 = 'For free cookies, visit ' + message.guild.channels.find("name", "setec_astronomy") + ' now, or contact ' + message.guild.members.get("111980412296839168") + ' as soon as he logs in.'
  let testText3 = '**Game Communities**\n'
+ 'Winter encourages members to organize into communities based on the games they play. Active games with a reasonable community size will usually have their own text channel, and each community has at least one Captain who acts as the advocate, recruiter and organizer.\n'
+ '• If you need to contact a community Captain, you can mention them by role (e.g. ' + message.guild.roles.find("name", "captain: rocket league") + ').\n'
+ '• See ' + message.guild.channels.get("408999214433959937") + ' for instructions on how to add yourself to a game community.\n\n'
+ 'Then tell ' + message.guild.members.get("213091147059429393") + ' to suck it!!'
  let testText4 = `${samzUser} is cool.`
  // BEGIN RICH EMBED
  let embed = new Discord.RichEmbed()
    // .setTitle()
    // .setAuthor()
    .setColor(0x37a0dc)
    .setDescription(testText4);
    message.channel.send({embed: embed});
    // message.channel.send("★  https://discord.gg/jwXhjSN  ★", {embed: embed});
}

module.exports.help = {
  name: "test"
}

/*

CONST RICH EMBED BLOCK:
module.exports.run = async (bot, message, args) => {
  //console.log("guidelines");
  let embed = new Discord.RichEmbed()
    // .setTitle()
    // .setAuthor()
    .setColor(0x37a0dc)
    .setDescription(guidelinesText);
    message.channel.send({embed: embed});
}

CONST RICH EMBED BLOCK:
module.exports.run = async (bot, message, args) => {
  let embed = new Discord.RichEmbed()
    // .setTitle()
    // .setAuthor()
    .setColor(0x37a0dc)
    .setDescription("text here");
    message.channel.send({embed: embed});
}


Members:
winter-bot = message.guild.members.get("420054493250584586")
samzgr8 = message.guild.members.get("111980412296839168")
freeseus = message.guild.members.get("213091147059429393")

Channels:
message.guild.channels.get("420361525321138176")

Roles:
message.server.roles.find("name", "captain: club penguin")
*/
