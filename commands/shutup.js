const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let adminLog = message.guild.channels.get("423825546087235585");
  let muteRole = message.guild.roles.get("420581883638972432");

  if(!adminLog) return message.reply('I cannot find an Admin Log channel.').catch(console.error);
  if(!muteRole) return message.reply('I cannot find a Mute role.').catch(console.error);
  // if(reason.length < 1) return message.reply('You must enter a reason.').catch(console.error);
  if(message.mentions.users.size < 1) return message.reply('You must mention someone to mute.').catch(console.error);

  message.guild.member(user).addRole(muteRole).then(() => {
    message.channel.send(`Now ${user} knows what happens when you annoy an officer.`);
    adminLog.send(`${user} has been told to shut-up by` + `<@!` + message.author.id + `>`);
  });
}

module.exports.help = {
  name: "shutup"
}
