const discordjs = require('discord.js');
const textblocks = require('./textblocks.js');

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
    return embed(textblocks.testText(bot, message, args));
  },
  captainPost: function(bot, message, args){
    return embed(textblocks.captainPost(bot, message, args));
  },
  guidelinesPost: function(bot, message, args){
    return embed(textblocks.guidelinesPost(bot, message, args));
  },
  inviteLink: function(bot, message, args){
    return embed(textblocks.inviteLink(bot, message, args));
  },
  invitePost: function(bot, message, args){
    return embed(textblocks.invitePost(bot, message, args));
  },
  shutupPost: function(bot, message, args){
    return embed(textblocks.shutupPost(bot, message, args));
  },
  timeoutPost: function(bot, message, args){
    return embed(textblocks.timeoutPost(bot, message, args));
  },
  underReviewPost: function(bot, message, args){
    return embed(textblocks.underReviewPost(bot, message, args));
  },
  welcomePost: function(bot, message, args){
    return embed(textblocks.welcomePost(bot, message, args));
  },
  captainLinkAndPost: function(bot, message, args){
    return embed(textblocks.inviteLink(bot, message, args), textblocks.captainPost(bot, message, args));
  }
};
