const discordjs = require('discord.js');
const textblocks = require('./textblocks.js');

var embed = function(object){
  if(typeof object !== 'object'){
    object = {
      text: object,
      fieldName: object,
      fieldValue: object,
      footer: ['', '']
    };
  }

  return new discordjs.RichEmbed()
    // .setTitle()
    // .setAuthor()
    .setColor(0x37a0dc)
    .setDescription(object.text || '')
    .addField(object.fieldName || '', object.fieldValue || '')
    .setImage(object.img || '')
    .setFooter(object.footer || '');
}

exports.responses = {
  test: function(bot, message, args){
    return embed(textblocks.testText(bot, message, args));
  },
  captainPost: function(bot, message, args){
    return embed(textblocks.captainPost(bot, message, args));
  },
  guidelinesPost: function(bot, message, args){
    return embed(textblocks.guidelinesPost(bot, message, args));
  },
  invitePost: function(bot, message, args){
    return embed(textblocks.invitePost(bot, message, args));
  },
  penaltyBoxPost: function(bot, message, args){
    return embed(textblocks.penaltyBoxPost(bot, message, args));
  },
  timeoutPost: function(bot, message, args){
    return embed(textblocks.timeoutPost(bot, message, args));
  },
  underReviewPost: function(bot, message, args){
    return embed(textblocks.underReviewPost(bot, message, args));
  },
  welcomePost: function(bot, message, args){
    return embed(textblocks.welcomePost(bot, message, args));
  }
};
