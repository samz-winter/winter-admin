const Discord = module.require('discord.js');
const prefix = '!';

module.exports.run = async (bot, message, args) => {
  let msg = message.content.toLowerCase();
  let user = message.mentions.users.first();
  let reason = args.slice(1).join(' ');
  let adminLog = message.guild.channels.get("423825546087235585"); // #admin_log
  let directMessage = message.guild.member(user);
  
  let monsterHunterChat = message.guild.channels.get("407697254422413322"); // #monster_hunter
  let musicChat = message.guild.channels.get("414137151467421697"); // #music
  let textPing = '• **Winter Community Text Channels** are titled by topic.  Please keep conversations in their appropriate channels (e.g. anything about Monster Hunter should be posted in ' + `${monsterHunterChat}` + '; anything about music should be posted in ' + `${musicChat}` + ', etc).'

  if(msg.startsWith(prefix + "ping text")) {
    message.channel.send(textPing);
    return;
  };
  
  let botHelpChat = message.guild.channels.get("420361525321138176") // #bot-help
  let winterBot = message.guild.members.get("420054493250584586") // @winter-bot
  let helpText = '• The Winter server uses a custom bot to help community members with various tasks such as displaying upcoming events, joining/leaving game roles (game communities) and learning more about the Winter rank system. New features will be added as needed... and some are hidden, just waiting for unsuspecting users to stumble upon them.\n\n'
+ '**For help, send a direct message to** ' + `${winterBot}` + ' with the word "help".\n\n'

  if(msg.startsWith(prefix + "ping help")) {
    message.channel.send(textPing);
    return;
  };

  if(message.mentions.users.size < 1) return message.reply('You must mention someone to ping.').catch(console.error);
  if(reason.length < 1) return message.reply('You must enter a reason.').catch(console.error);
  if(!adminLog) return message.reply('I cannot find an Admin Log channel.').catch(console.error);

  let communitiesPing = '• **Winter Game Communities**'
  let guidelinesPing = '• **Winter Community Guidelines**'
  let voicePing = '• **Winter Community Voice Channels** are reserved for community members gaming *together* or participating in community social events. In order to keep as many channels available as possible, we ask that members **do not hang out in Gaming channels alone.**\n\n'
+ 'Please move to one of the Lobby channels, one of the LFG channels, or the AFK channel.\n\n'
+ '**Repeated reminders may result in the loss of your Voice Channel privileges.**'
  
  
  if(msg.startsWith(prefix + "ping")) {
    if(reason === "voice") {
      directMessage.send(voicePing);
      adminLog.send(`<@!` + message.author.id + `>` + ` has pinged ${user} \nRe: Voice Channels`);
    return;
    }else if(reason === "guidelines") {
      directMessage.send(guidelinesPing);
      adminLog.send(`<@!` + message.author.id + `>` + ` has pinged ${user} \nRe: Guidelines`);
      return;
    }else if(reason === "communities") {
      directMessage.send(communitiesPing);
      adminLog.send(`<@!` + message.author.id + `>` + ` has pinged ${user} \nRe: Joining Communities`);
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
