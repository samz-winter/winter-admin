const discordjs = require('discord.js');

const test = require('./textblocks.js').testText;
// const help = require('./textblocks.js').help;

var embed = function(object){
  if(typeof object !== 'object'){
    object = {
      text: object,
      footer: ['', '']
    };
  }

  return new discordjs.RichEmbed()
    // .setTitle()
    // .setAuthor()
    .setColor(0x37a0dc)
    .setDescription(object.text || '')
    .setImage(object.img || '')
    .setFooter(object.footer || '');
}

exports.responses = {
  test: function(message){
    return embed(test(message));
  }
};
