const Discord = module.require('discord.js');
// const ms = module.require('ms');

module.exports.run = async (bot, message, args) => {
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let adminLog = message.guild.channels.get("423825546087235585"); // #admin_log
  let penaltyBox = message.guild.channels.get("420584129160151041"); // #penalty_box
  let muteRole = message.guild.roles.get("420581883638972432"); // @shutup

  if(!adminLog) return message.reply('I cannot find an Admin Log channel.').catch(console.error);
  if(!muteRole) return message.reply('I cannot find a `@shutup` role.').catch(console.error);
  if(message.mentions.users.size < 1) return message.reply('You must mention someone to shutup.').catch(console.error);

  function addShutup() {
    message.guild.member(user).addRole(muteRole)
  }
  
  function removeShutup() {
    message.guild.member(user).addRole(muteRole)
  }
  
  message.delete().then(() => {
    message.channel.send(`2 minutes in the ${penaltyBox}.`).then(() => {
      setTimeout(addShutup, 10 * 1000);
    });
  });
  
  /*
  message.delete().then(() => {
    message.guild.member(user).addRole(muteRole).then(() => {
      message.channel.send(`2 minutes in the ${penaltyBox}.`);
    });
  });  */

  setTimeout(function() {
    message.guild.member(user).removeRole(muteRole);
    message.channel.send(`Now ${user} knows what happens when you annoy an officer.`);
  }, 120000);
}

module.exports.help = {
  name: "shutup"
}
