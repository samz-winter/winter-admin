const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {
  let member = message.mentions.members.first();
  let aRole = message.guild.roles.find('name', 'no_mentions');

  if(!member) return message.reply("User not found");
  if(!aRole) return message.reply("Could not find that role");

  member.addRole(aRole.id);
}

module.exports.help = {
  name: "no_mentions"
}
