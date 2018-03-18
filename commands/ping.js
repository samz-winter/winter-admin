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
  let botHelpChat = message.guild.channels.get("420361525321138176") // #bot-help
  let winterBot = message.guild.members.get("420054493250584586") // @winter-bot
  let samzID = message.guild.members.get("111980412296839168") // @samzgr8
  
  let textPing = '• **Winter Community Text Channels** are titled by topic.  Please keep conversations in their appropriate channels (e.g. anything about Monster Hunter should be posted in ' + `${monsterHunterChat}` + '; anything about music should be posted in ' + `${musicChat}` + ', etc).'
  let helpPing = '• The Winter server uses a custom bot to help community members with various tasks such as displaying upcoming events, joining/leaving game roles (game communities) and learning more about the Winter rank system. New features will be added as needed... and some are hidden, just waiting for unsuspecting users to stumble upon them.\n\n'
+ '**For help, send a direct message to** ' + `${winterBot}` + ' **with the word "help".**\n\n'
  let communitiesPing = '• Winter encourages members to organize into communities based on the games they play. Active games with a reasonable community size will usually have their own text channel, and each community has at least one Captain who acts as the advocate, recruiter and organizer.\n\n'
+ 'All active members need to add themselves to at least one community role.\n\n'
+ 'For game community roles, this allows the community captains to @ mention the community as a whole for important community updates.\n\n'
+ 'If you do not want game @ mentions at all (for any game community), please add yourself to the role @no_mentions. If you do not, and officer will be adding you to any community we see you active in.\n\n'
+ '**For instructions on how to add yourself to a community, send a direct message to** ' + `${winterBot}` + ' **with the word "games".**'
  let guidelinesPing = '• **THE FOLLOWING COMMUNITY GUIDELINES WILL BE ENFORCED FOR ALL WINTER MEMBERS REGARDLESS OF RANK OR POSITION**\n\n'
+ '**(TL;DR - "DON\'T BE A DICK")**\n\n'
+ '**Constructive Discussion** - Please keep public comments and discussions constructive. If you feel like a conversation you\'re having might be inappropriate for public discussion, or if someone tells you it definitely is, please move it to your DMs.\n\n'
+ '**SFW Policy** - Many community members keep their Discord chats open at work or on family computers. Please keep general content SFW.\n\n'
+ '**Hate Speech** - Winter does not tolerate attacks on any person or group of people on the basis of gender, religion, race, ethnicity, or sexual orientation. *This includes the casual use of derogatory terms.*\n\n'
+ '**Harassment** - Do not engage in or post content encouraging the harassment of individuals or communities.\n\n'
+ '**Politics, Religion & Finances** - Do not post about these at all. Period.\n\n'
+ '**Advertising** -  Do not use the Winter server to promote or sell your product or service. Posts attempting to solicit anything will be removed.\n\n'
+ '**Voice Channels** - Voice channels are reserved for community members gaming together or participating in community social events. Keep in mind that Discord offers direct voice and video calls for personal use.\n\n'
+ '***Violation of community guidelines may result in your removal from the Winter server and possible reporting to Discord.***\n\n'
+ 'Guidelines are subject to change at the discretion of Winter community leadership. If you have any questions about the community guidelines, please **DM** ' + `${samzID}` + '.\n\n'
+ 'You can find the official Discord Community Guidelines here: <https://discordapp.com/guidelines>\n\n'
  let voicePing = '• **Winter Community Voice Channels** are reserved for community members gaming *together* or participating in community social events. In order to keep as many channels available as possible, we ask that members **do not hang out in Gaming channels alone.**\n\n'
+ 'Please move to one of the Lobby channels, one of the LFG channels, or the AFK channel.\n\n'
+ '**Repeated reminders may result in the loss of your Voice Channel privileges.**'
  
  if(msg.startsWith(prefix + "ping text")) {
    message.channel.send(textPing);
    return;
  };

  if(msg.startsWith(prefix + "ping help")) {
    message.channel.send(helpPing);
    return;
  };

  if(message.mentions.users.size < 1) return message.reply('You must mention someone to ping.').catch(console.error);
  if(reason.length < 1) return message.reply('You must enter a reason.').catch(console.error);
  if(!adminLog) return message.reply('I cannot find an Admin Log channel.').catch(console.error);
  
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
