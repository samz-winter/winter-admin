const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {
  let guidelines = message.guild.channels.get("413675044435394570")

  let timeoutText = '**You\'ve been placed in a temporary timeout because of something you did.**\n\n'
+ '**You probably know what it was, but an officer will be reaching out to you to discuss the situation.**\n\n'
+ '**Take this time to review the community** '
// + /* #guidelines */ message.guild.channels.get("413675044435394570")
+ `${guidelines}`
  
  // BEGIN RICH EMBED
  let embed = new Discord.RichEmbed()
    // .setTitle()
    // .setAuthor()
    .setColor(0x37a0dc)
    .setDescription(timeoutText);
    message.channel.send({embed: embed});
    // message.channel.send("★  https://youtu.be/ksBE53CIT8E");

    // message.channel.send("https://youtu.be/ksBE53CIT8E");
}

module.exports.help = {
  name: "timeout"
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

let guidelines = message.guild.channels.get("413675044435394570");
bot.sendMessage(message, `${adminRoleObject} are on the way!`);

let message.guild.channels.get("413675044435394570")

!timeout

*/