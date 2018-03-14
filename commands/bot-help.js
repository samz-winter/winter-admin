const Discord = module.require('discord.js');



module.exports.run = async (bot, message, args) => {
  let botHelpText = 'The Winter server uses a custom bot to help community members with various tasks such as displaying upcoming events, joining/leaving game roles (game communities) and learning more about the Winter rank system. New features will be added as needed... and some are hidden, just waiting for unsuspecting users to stumble upon them.\n\n'
+ '**All commands should be submitted via *direct message* to** ' + /* @winter-bot */ message.guild.members.get("420054493250584586") + '.\n\n'
+ 'Current available commands are listed below:\n'
+ '```\n'
+ 'help\n'
+ 'games\n'
+ 'join {game}\n'
+ 'leave {game}\n'
+ 'events\n'
+ 'ranks\n'
+ '```\n'
+ 'We suggest starting with the `help` command.\n\n'
+ 'Commands for winter-bot do not require a command prefix. DM winter-bot with `help` *not* `!help`\n\n'

+ 'To request help from an actual human, please **DM** ' + /*freeseus*/ message.guild.members.get("213091147059429393") + ' or ' + /*samzgr8*/ message.guild.members.get("111980412296839168") + '.'

  // BEGIN RICH EMBED
  let embed = new Discord.RichEmbed()
    // .setTitle()
    // .setAuthor()
    .setColor(0x37a0dc)
    .setDescription(botHelpText);
    message.channel.send({embed: embed});
}

module.exports.help = {
  name: "help"
}

/*
The Winter server uses a custom bot to help community members with various tasks such as displaying upcoming events, joining/leaving game roles (game communities) and learning more about the Winter rank system. New features will be added as needed... and some are hidden, just waiting for an unsuspecting user to stumble upon them.

**All commands should be submitted via *direct message* to** @winter-bot.

Current available commands are listed below:
```
help
games
join {game}
leave {game}
events
ranks
```
Commands for winter-bot do not require a command prefix. DM winter-bot with `games` *not* `!games`

We suggest starting with the `help` command.

To request help from an actual human, please DM Freeseus or samzgr8

*/

/*
CONST RICH EMBED BLOCK:
module.exports.run = async (bot, message, args) => {
  let embed = new Discord.RichEmbed()
    // .setTitle()
    // .setAuthor()
    .setColor(0x37a0dc)
    .setDescription(guidelinesText);
    message.channel.send({embed: embed});
}

CONST RICH EMBED BLOCK:
module.exports.run = async (bot, message, args) => {
  let embed = new Discord.RichEmbed()
    // .setTitle()
    // .setAuthor()
    .setColor(0x37a0dc)
    .setDescription("text here");
    message.channel.send({embed: embed});
}

*/