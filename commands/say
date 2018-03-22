const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {
  let text = args.slice(1).join(" ");
  message.delete();
  message.channel.send(text);
}

module.exports.help = {
  name: "say"
}
