const Discord = module.require('discord.js');

module.exports = {
  inviteLinkText: '★  https://discord.gg/ExUTWT4  ★\n'
+ '```diff\n'
+ '- Invite link updated MARCH.14.2018\n'
+ '- Please refresh all active recruiting posts.\n'
+ '```\n'
};

module.exports.run = async (bot, message, args) => {
  const winterBot = message.guild.members.get("420054493250584586"); // @winter-bot
  const samzID = message.guild.members.get("111980412296839168"); // @samzgr8
  
  captainText: '**THIS IS A READ-ONLY CHANNEL. For issues, please send a DM to** ' + `${samzID}` + '.\n\n'
+ 'The winter-bot `quarantine` command allows any community captain to temporarily block a user\'s server privileges until an officer can decide if the user should be kicked/banned. **This command should *only* be used for situations where a user needs to be silenced immediately.**\n\n'
+ 'If this command is used, please **send a DM with details** of the situation to ' + `${samzID}` + '.\n\n'
+ 'To use the winter-bot `quarantine` command, **send a DM to** ' + `${winterBot}` + ' with the following:\n\n'
+ '`quarantine {discordtag#0000}`\n\n'
+ 'e.g. `quarantine samzgr8#0513`\n\n'
+ '***WARNING:*** Anyone who uses this to troll or try to be funny *will* be banned from the server. Period.'
};