const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {
  let underReviewText = '**YOUR MEMBERSHIP STATUS IS UNDER REVIEW.**\n\n'
+ '**ALL SERVER PRIVILEGES HAVE BEEN TEMPORARILY REVOKED. YOU WILL BE NOTIFIED WHEN YOUR REVIEW IS COMPLETE.**'
  
  let embed = new Discord.RichEmbed()
    .setColor(0x37a0dc)
    .setDescription(underReviewText);
    message.channel.send({embed: embed});
  }

module.exports.help = {
  name: "under-review"
}
