const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {
  let samzgr8 = bot.users.get("111980412296839168")
  var argsResult = args.join(' ');
  
  message.author.id.setGame(argsResult);
}

module.exports.help = {
  name: "setgame"
}
