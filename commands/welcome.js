const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {
  let guidelinesChat = message.guild.channels.get("413675044435394570")
  let botHelpChat = message.guild.channels.get("420361525321138176")
  let winterGeneralChat = message.guild.channels.get("211141622694543360")
  let monsterHunterChat = message.guild.channels.get("407697254422413322")
  let musicChat = message.guild.channels.get("414137151467421697")
  let winterBot = message.guild.members.get("420054493250584586")
  let captainRLRole = message.guild.roles.get("414098252569378816")

  let welcomeText = '**Welcome to Winter!**  For nearly 20 years, Winter has existed as a community of friends brought together by a love of gaming across genre and platform. We currently support a variety of games on both PC and PlayStation, and maintain this Discord server for communication, planning and hanging out.\n\n'
+ `**Guidelines** - We like a bit of good-natured ribbing, but we\'re not savages. You can find our full community guidelines posted in the ${guidelinesChat} channel, but the short version is "Don\'t be a dick."\n\n`
+ `**winter-bot** - The Winter server uses a custom bot to manage user-joinable roles (game communities) and provide some comic relief now and then. **You can find more information about how to use winter-bot by sending a direct message to ${winterBot} with the word "help"**\n\n`
+ '**Game Communities** - Winter encourages members to organize into communities based on the games they play. Active games with a reasonable community size will usually have their own text channel, and each community has at least one Captain who acts as the advocate, recruiter and organizer.\n'
+ '  • All server users need to add themselves to at least one community role. This allows the community captains to @ mention the community as a whole for important updates.\n'
+ '  • If you do not want game @ mentions at all (for any game community), please add yourself to the role @no_mentions. If you do not, an officer will be adding you to any community they see you active in.\n'
+ `  • **For instructions on how to add yourself to a community, send a direct message to** ${winterBot} **with the word "games".**\n\n`
+ 'Visit Winter\'s website at [winterclan.net](https://www.winterclan.net) and use your Discord credentials to log in.\n'

  // BEGIN RICH EMBED
  let embed = new Discord.RichEmbed()
    .setColor(0x37a0dc)
    .setDescription(welcomeText);
    message.delete();
    message.channel.send({embed: embed});
}

module.exports.help = {
  name: "welcome"
}
