const Discord = module.require('discord.js');
// const responses = require('./textblocks/responses.js').responses;

module.exports.run = async (bot, message, args) => {
  let msg = message.content.toLowerCase();
  let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  let reason = args.slice(0).join(' ');
  let aRole = message.guild.roles.find('name', reason);
  let directMessage = message.guild.member(user);

  if(!user) return message.reply("User not found");
  if(!reason) return message.reply("Specifiy a role");
  if(!aRole) return message.reply("Could not find that role");
  console.log(reason);
  
  if(user.roles.has(aRole.id));
  await(user.addRole(aRole.id));
}

module.exports.help = {
  name: "force-add"
}
