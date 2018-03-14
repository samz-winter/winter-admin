const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {
  let guidelines = message.guild.channels.get("413675044435394570")

  let timeoutText = '**You\'ve been placed in a temporary timeout because of something you did.**\n\n'
+ '**You probably know what it was, but an officer will be reaching out to you to discuss the situation.**\n\n'
+ '**Take this time to review the community** '
// + /* #guidelines */ message.guild.channels.get("413675044435394570")
+ `${guidelines}`
  
  let embed = new Discord.RichEmbed()
    .setColor(0x37a0dc)
    .setDescription(timeoutText);
    message.channel.send({embed: embed});
  }

module.exports.help = {
  name: "timeout"
}
