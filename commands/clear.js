const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {
  if(!args[0]) return message.channel.send("Enter number of messages to clear.");
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`Cleared ${args[0]} messages.`).then(msg => msg.delete(5000));
  });
}

module.exports.help = {
  name: "clear"
}
