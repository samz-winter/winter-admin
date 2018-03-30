const Discord = module.require('discord.js');
// const responses = require('./textblocks/responses.js').responses;

module.exports.run = async (bot, message, args) => {
  let msg = message.content.toLowerCase();
  let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  let aRole = message.guild.roles.find('name', no_mentions);
  let directMessage = message.guild.member(user);
  
  console.log(`reason is ${reason} and user is ${user}`);

  if(!message.author.hasPermission("MANAGE_ROLES")) return message.reply("no permissions");
  if(!user) return message.reply("User not found");
  if(!aRole) return message.reply("Could not find that role");
  
  if(user.roles.has(aRole.id));
  await(user.addRole(aRole.id));
}

module.exports.help = {
  name: "no_mentions"
}
