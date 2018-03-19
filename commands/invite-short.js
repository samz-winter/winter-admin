const Discord = module.require('discord.js');
const textblocks = require('./textblocks/textblocks.js');

module.exports.run = async (bot, message, args) => {
  let embed = new Discord.RichEmbed()
    .setColor(0x37a0dc)
    .setDescription(textblocks.linkText)
    message.channel.send(linkText, {embed: embed});
  }

module.exports.help = {
  name: "invite-short"
}
