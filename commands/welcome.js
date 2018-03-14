const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {
  //console.log("welcome");
  let welcomeText = '**Welcome to Winter!**  For nearly 20 years, Winter has existed as a community of friends brought together by a love of gaming across genre and platform. We currently support a variety of games on both PC and PlayStation, and maintain this Discord server for communication, planning and hanging out.\n\n'

+ '**Guidelines**\n'
+ 'We like a bit of good-natured ribbing, but we\'re not savages. You can find our full community guidelines posted in the ' + /* #guidelines */ message.guild.channels.get("413675044435394570") + ' channel, but the short version is "Don\'t be a dick."\n\n'

+ '**winter-bot**\n'
+ 'The Winter server uses a custom bot to manage user-joinable roles (game communities) and provide some comic relief now and then. You can find more information about how to use winter-bot in the ' + /* #bot_help */ message.guild.channels.get("420361525321138176") + ' channel, or you can DM ' + /* @winter-bot */ message.guild.members.get("420054493250584586") + ' with the command `help`\n\n'

+ '**Text Channels**\n'
+ 'Text channels are open to all users. Drop in and introduce yourself if you\'d like.\n'
+ '• ' + /* #winter_general */message.guild.channels.get("211141622694543360") + ' is our off-topic/hangout chat. Expect shenanigans... and probably lots of "dad jokes."\n'
+ '• All other text channels are labeled by topic. Please keep conversations in their appropriate channels (e.g. anything about Monster Hunter should be posted in ' + /* #monster_hunter */ message.guild.channels.get("407697254422413322") + '; anything about music should be posted in ' + /* #music */ message.guild.channels.get("414137151467421697") + ', etc).\n\n'

+ '**Voice Channels**\n'
+ 'Voice channels can be used as needed. Just don\'t hang out in there alone; people will think you\'re weird.\n\n'

+ '**Game Communities**\n'
+ 'Winter encourages members to organize into communities based on the games they play. Active games with a reasonable community size will usually have their own text channel, and each community has at least one Captain who acts as the advocate, recruiter and organizer.\n'
+ '• If you need to contact a community Captain, you can mention them by role (e.g. ' + message.guild.roles.find("name", "captain: rocket league") + ').\n'
+ '• See ' + /* #bot_help */ message.guild.channels.get("420361525321138176") + ' for instructions on how to add yourself to a game community.\n\n'

+ 'Visit Winter\'s website at [winterclan.net](https://www.winterclan.net) and use your Discord credentials to log in.\n'

  // BEGIN RICH EMBED
  let embed = new Discord.RichEmbed()
    // .setTitle()
    // .setAuthor()
    .setColor(0x37a0dc)
    .setDescription(welcomeText);
    message.channel.send({embed: embed});
}

module.exports.help = {
  name: "welcome"
}

/**/

/*

+ '• \n'

**Hey there. Welcome to Winter!**  For nearly 20 years, Winter has existed as a community of friends brought together by a love of gaming across genre and platform. We currently support a variety of games on both PC and PlayStation, and maintain this Discord server for communication, planning and hanging out.

**Guidelines**
We like a bit of good-natured ribbing, but we're not savages. You can find our full community guidelines posted in the #guidelines channel, but the short version is "Don't be a dick."

**winter-bot**
The Winter server uses a custom bot to manage user-joinable roles (game communities) and provide some comic relief now and then. You can find more information about how to use winter-bot in the #bot_help channel, or you can DM winter-bot with the command `help`

**Text Channels**
Text channels are open to all users. Drop in and introduce yourself if you'd like.
• #winter_general is our off-topic/hangout chat. Expect shenanigans... and probably lots of "dad jokes."
• All other text channels are labeled by topic. Please keep conversations in their appropriate channels (e.g. anything about Monster Hunter should be posted in #monster_hunter; anything about music should be posted in #music, etc).

**Voice Channels**
Voice channels can be used as needed. Just don't hang out in there alone; people will think you're weird.

**Game Communities**
Winter encourages members to organize into communities based on the games they play. Active games with a reasonable community size will usually have their own text channel, and each community has at least one Captain who acts as the advocate, recruiter and organizer.
• If you need to contact a community Captain, you can @ them by role (e.g. @captain: club penguin).
• See #bot_help for instructions on how to add yourself to a game community.

You can visit Winter's website at <https://www.winterclan.net> and use your Discord credentials to log in.

*/
