const Discord = module.require('discord.js');

const underReviewText = 
'**YOUR MEMBERSHIP STATUS IS UNDER REVIEW.**\n\n'
+ '**ALL SERVER PRIVILEGES HAVE BEEN TEMPORARILY REVOKED. YOU WILL BE NOTIFIED WHEN YOUR REVIEW IS COMPLETE.**'

module.exports.run = async (bot, message, args) => {
  // console.log("The 'kickPrep' command works!!");
  let embed = new Discord.RichEmbed()
    // .setTitle()
    // .setAuthor()
    .setColor(0x37a0dc)
    .setDescription(underReviewText);
    message.channel.send({embed: embed});
}

module.exports.help = {
  name: "under-review"
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

*/