const Discord = module.require('discord.js');

const testText = 'test text ya\'ll'

const testText2 = 'test text twice as good'

/*module.exports.run = async (bot, message, args) => {
  // console.log("The 'test' command works!!");
  let embed = new Discord.RichEmbed()
    // .setTitle()
    // .setAuthor()
    .setColor(0x37a0dc)
    .setDescription(testText);
    message.channel.send({embed: embed});
}*/

module.exports.run = async (bot, message, args) => {
  let embed = new Discord.RichEmbed()

    let embed1 = new Discord.RichEmbed()
      .setColor(0x37a0dc)
      .setDescription(testText);

    let embed2 = new Discord.RichEmbed()
      .setColor(0x37a0dc)
      .setDescription(testText2);

  message.channel.send(embed);
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

*/