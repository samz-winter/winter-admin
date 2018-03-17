const Discord = module.require('discord.js');
const prefix = '!';

module.exports.run = async (bot, message, args) => {
  let msg = message.content.toLowerCase();
  let user = message.mentions.users.first();
  let reason = args.slice(1).join(' ');
  let adminLog = message.guild.channels.get("423825546087235585"); // #poked_the_bear
  let directMessage = message.guild.member(user);

  if(message.mentions.users.size < 1) return message.reply('You must mention someone to mute.').catch(console.error);
  if(reason.length < 1) return message.reply('You must enter a reason.').catch(console.error);
  if(!adminLog) return message.reply('I cannot find an Admin Log channel.').catch(console.error);
  if(reason !== "voice" || "text") {
    message.author.send("The following reasons can be used for pinging a user:\n```\nvoice\ntext\n```");
  };

  if(msg.startsWith(prefix + "ping") && reason === "voice") {
    directMessage.send(`${user} should read the voice channel guidelines.`);
    adminLog.send(`${user} has been pinged via DM Re: Voice Channels by ` + `<@!` + message.author.id + `>`);
    // message.author.send(errorText);
    // message.channel.send(errorText);
    return;
  };

  if(msg.startsWith(prefix + "ping") && reason === "text") {
    directMessage.send(`${user} should read the text channel guidelines.`);
    adminLog.send(`${user} has been pinged via DM Re: Text Channels by ` + `<@!` + message.author.id + `>`);
    // message.author.send(errorText);
    // message.channel.send(errorText);
    return;
  };
}

module.exports.help = {
  name: "ping"
}
