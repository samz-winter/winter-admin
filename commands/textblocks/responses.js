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
  test: function(bot, message, args){
    let samzUser = bot.users.get('111980412296839168'); // @samzgr8
    return embed(test(bot, message, args));
  }
};
