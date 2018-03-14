const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {
  let pokedFooter = 'Disclaimer: This is not an *official* timeout \n...but you probably pissed off an officer. \nYour privileges will be restored shortly.'
  let embed = new Discord.RichEmbed()
    .setColor(0x37a0dc)
    // .setImage("https://78.media.tumblr.com/226579e43254866dad8de897c22f4dfd/tumblr_inline_o9rafdoghX1te58zi_320.gif")
    .setImage("https://www.reactiongifs.com/r/ksu.gif")
    .setDescription(pokedFooter);
    // .setFooter(pokedFooter);
    message.channel.send({embed: embed});
  }

module.exports.help = {
  name: "poked"
}
