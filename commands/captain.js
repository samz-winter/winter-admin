const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {
  let winterAdmin = bot.users.get("419686533038080003");
  let winterBot = bot.users.get("420054493250584586");
  let samzID = bot.users.get("111980412296839168");
  let benzID = bot.users.get("213091147059429393");

  let captainText = '**THIS IS A READ-ONLY CHANNEL** Please **DM** ' + `${samzID}` + ' if you have questions or issues.\n\n'
+ 'After careful consideration and planning, Winter leadership has added a `quarantine` command to winter-bot which will allow any community captain to temporarily block a user\'s server privileges until an officer can decide if the user should be kicked/banned.\n\n'
+ 'This command is *only* to be used for situations where a user needs to be silenced immediately.\n\n'
+ '***YOUR ONE WARNING:*** Anyone who uses this to troll or try to be funny *will* be banned from the server. Period.\n\n'
+ 'If this command is used, please **DM** details of the situation to ' + `${samzID}` + '.\n\n'
+ 'Instructions for the command have been added to the winter-bot help command for captains, but basically, **DM** ' + `${winterBot}` + ' with the following:\n\n'
+ '`quarantine {discordtag#0000}`\n'
+ 'e.g. `quarantine samzgr8#0513`\n'

  // BEGIN RICH EMBED
  let embed = new Discord.RichEmbed()
    .setColor(0x37a0dc)
    .setDescription(captainText);
    message.channel.send({embed: embed});
}

module.exports.help = {
  name: "captain"
}
