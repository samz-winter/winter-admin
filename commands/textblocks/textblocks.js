exports.testText = function(bot, message, args){
  // const discordjs = require('discord.js');
  // let samzUser = bot.users.get("111980412296839168"); // @samzgr8
  return {
    text: `${message.author.username} was coding.\nBanging head against the desk\nWill it ever work?`,
    // text: 'This is a test\n' + `Sam is cool.`,
    // img: 'http://www.reactiongifs.com/r/magnum.gif',
    footer: [`-samzgr8, 2018`, '']
  }
};
