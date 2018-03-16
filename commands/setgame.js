const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {
  var = argsResult = args.join(' ');
  
  bot.user.setGame(argsResult);
}

module.exports.help = {
  name: "setgame"
}
