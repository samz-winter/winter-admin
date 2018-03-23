const discordjs = require('discord.js');
const test = require('./textblocks.js');

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
  test: function(bot, message, args){
    return embed(test.testText(bot, message, args));
  },
  inviteLink: function(bot, message, args){
    return embed(test.inviteLink(bot, message, args));
  }
};
