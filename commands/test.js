const Discord = module.require('discord.js');
// const prefix = '!';

module.exports.run = async (bot, message, args) => {
  let msg = message.content.toLowerCase();
  let user = message.mentions.users.first();
  let reason = args.slice(0).join(' ');
  let adminLog = message.guild.channels.get("423825546087235585"); // #admin_log
  let directMessage = message.guild.member(user);

  let samzID = message.guild.members.get("111980412296839168") // @samzgr8

  if(reason === "testing") {
    // directMessage.send(guidelinesPing);
    message.channel.send(responses.test(message))
    // adminLog.send(`${user} has been DM'd about community guidelines.`);
    return;
  }
  
}

module.exports.help = {
  name: "test"
}
