const Discord = module.require('discord.js');
const prefix = '!';

module.exports.run = async (bot, message, args) => {
  let msg = message.content.toLowerCase();
  let user = message.mentions.users.first();
  let reason = args.slice(1).join(' ');
  let adminLog = message.guild.channels.get("423825546087235585"); // #admin_log
  let directMessage = message.guild.member(user);

  if(message.mentions.users.size < 1) return message.reply('You must mention someone to mute.').catch(console.error);
  if(reason.length < 1) return message.reply('You must enter a reason.').catch(console.error);
  if(!adminLog) return message.reply('I cannot find an Admin Log channel.').catch(console.error);
  
  let voicePing = '**Winter Community Voice Channels** are reserved for community members gaming *together* or participating in community social events. In order to keep as many channels available as possible, we ask that members **do not hang out in Gaming channels alone.**\n\n'
+ 'Please move to one of the Lobby channels, one of the LFG channels, or the AFK channel.\n\n'
+ '**Repeated reminders may result in the loss of your Voice Channel privileges.**'
  
  if(msg.startsWith(prefix + "ping")) {
    if(reason === "voice") {
    directMessage.send(voicePing);
    adminLog.send(`<@!` + message.author.id + `>` + ` has pinged ${user} \nRe: Voice Channels`);
    return;
    }else if(reason === "text") {
      directMessage.send(`${user} should read the text channel guidelines.`);
      adminLog.send(`<@!` + message.author.id + `>` + ` has pinged ${user} \nRe: Text Channels`);
      return;
    }else {
      let embed = new Discord.RichEmbed()
        .setColor(0x37a0dc)
        .setDescription("The following reasons can be used to ping a user:\n```\nvoice\ntext\n```\nFull command example:\n```\n!ping @samzgr8#0513 voice\n```");
        // message.channel.send({embed: embed});
      message.author.send(embed);
    };
  }
}

module.exports.help = {
  name: "ping"
}
