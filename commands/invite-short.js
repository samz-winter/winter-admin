const Discord = module.require('discord.js');


module.exports.run = async (bot, message, args) => {
  const textblocks = require('./textblocks/textblocks.js');
  let embed = new Discord.RichEmbed()
    .setColor(0x37a0dc)
    .setDescription(textblocks.captainText)
    message.channel.send({embed: embed});
  }

module.exports.help = {
  name: "invite-short"
}
