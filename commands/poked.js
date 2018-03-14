const Discord = module.require('discord.js');

const pokedText = '**YOU HAVE POKED THE BEAR**\n'
const pokedFooter2 = '**THE BEAR HAS POKED BACK**'

const pokedFooter = 'Disclaimer: You\'re not in trouble ...you\'ve just been trolled by an officer. Remember who\'s really in charge here.\n'

module.exports.run = async (bot, message, args) => {
  // console.log("The 'test' command works!!");
  let embed = new Discord.RichEmbed()
    // .setTitle("YOU HAVE POKED THE BEAR")
    // .setAuthor()
    .setColor(0x37a0dc)
    .setImage("https://78.media.tumblr.com/226579e43254866dad8de897c22f4dfd/tumblr_inline_o9rafdoghX1te58zi_320.gif")
    .setFooter(pokedFooter);
    message.channel.send({embed: embed});
}

module.exports.help = {
  name: "poked"
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