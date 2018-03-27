const Discord = module.require('discord.js');
// const ms = module.require('ms');

module.exports.run = async (bot, message, args) => {
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let adminLog = message.guild.channels.get("423825546087235585"); // #penalty_box
  let muteRole = message.guild.roles.get("420581883638972432"); // @shutup

  if(!adminLog) return message.reply('I cannot find an Admin Log channel.').catch(console.error);
  if(!muteRole) return message.reply('I cannot find a `@shutup` role.').catch(console.error);
  if(message.mentions.users.size < 1) return message.reply('You must mention someone to shutup.').catch(console.error);

  message.delete().then(() => {
    message.guild.member(user).addRole(muteRole).then(() => {
      message.channel.send(`2 minutes in the #penalty_box.`);
      // adminLog.send(`${user} has been told to shut-up by ` + `<@!` + message.author.id + `>`);
    });
  });

  setTimeout(function() {
    message.guild.member(user).removeRole(muteRole);
    message.channel.send(`Now ${user} knows what happens when you annoy an officer.`);
  }, 10000);
}

module.exports.help = {
  name: "shutup"
}
