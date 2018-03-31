const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {
  let winterAdmin = bot.users.get("419686533038080003");
  let winterBot = bot.users.get("420054493250584586");
  let samzID = bot.users.get("111980412296839168");
  let benzID = bot.users.get("213091147059429393");

let inviteLinkText = '★  https://discord.gg/C6y5wSM  ★\n'
+ '```diff\n'
+ '- Invite link updated MARCH.31.2018\n'
+ '```'

let captainText = '**THIS IS A READ-ONLY CHANNEL. For issues, please  DM ** ' + `${samzID}` + '.\n\n'
+ 'The winter-bot `quarantine` command allows any community captain to temporarily block a user\'s server privileges until an officer can decide if the user should be kicked/banned. **This command should *only* be used for situations where a user needs to be silenced immediately.** Please **send a DM with details** of the situation to ' + `${samzID}` + ' if this command is used.\n\n'
+ 'To use the winter-bot `quarantine` command, **send a DM to** ' + `${winterBot}` + ' with the following:  `quarantine {discordtag#0000}`\n\n'
+ 'e.g. `quarantine samzgr8#0513`\n\n'
+ '***WARNING:*** Anyone who intentionally misuses this command *will* be banned from the server. Period.'

  let embed = new Discord.RichEmbed()
    .setColor(0x37a0dc)
    .setDescription(captainText);
    message.delete();
    message.channel.send(inviteLinkText, {embed: embed});
}

module.exports.help = {
  name: "captain"
}
