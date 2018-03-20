/*
Title: infoblock.js
Description: combined text block commands for static posts
Usage: !infoblock {chat_room}
Files: welcome.js
       guidelines.js
       bot-help.js
       invite.js
       captain.js
       under-review.js
       timeout.js
       poked.js
*/
const Discord = module.require('discord.js');
const prefix = '!';

module.exports.run = async (bot, message, args) => {
  let msg = message.content.toLowerCase();
  let user = message.mentions.users.first();
  let reason = args.slice(1).join(' ');
  let adminLog = message.guild.channels.get("423825546087235585"); // #admin_log
  let directMessage = message.guild.member(user);

  let winterBot = message.guild.members.get("420054493250584586") // @winter-bot
  let samzID = message.guild.members.get("111980412296839168") // @samzgr8
  let benzID = message.guild.members.get("213091147059429393") // @freeseus

  let welcomeChat =  message.guild.channels.get("413690580410040331") // #welcome
  let guidelinesChat = message.guild.channels.get("413675044435394570") // #guidelines
  let winterGeneralChat =  message.guild.channels.get("211141622694543360") // #winter_general


  let botHelpChat = message.guild.channels.get("420361525321138176") // #bot_help
  let monsterHunterChat = message.guild.channels.get("407697254422413322") // #Monster hunter
  let musicChat = message.guild.channels.get("414137151467421697") // #music

  // let captainRLRole = message.guild.roles.get("414098252569378816") @captain:RL

  let infoblockBotHelp = 'The Winter server uses a custom bot to help community members with various tasks such as displaying upcoming events, joining/leaving game roles (game communities) and learning more about the Winter rank system. New features will be added as needed... and some are hidden, just waiting for unsuspecting users to stumble upon them.\n\n'
+ `**All commands should be submitted via *direct message* to** ${winterBot}.\n\n`
+ 'Current available commands are listed below:\n'
+ '```\nhelp\ngames\njoin {game}\nleave {game}\nevents\nranks\n```\n'
+ 'We suggest starting with the `help` command.\n\n'
+ 'Commands for winter-bot do not require a command prefix.\n'
+ 'DM winter-bot with `help` *not* `!help`\n\n'
+ `To request help from an actual human, please **DM** ${benzID} or ${samzID}.`

  let infoblockCaptain = `**THIS IS A READ-ONLY CHANNEL. For issues, please send a DM to** ${samzID}.\n\n`
+ 'The winter-bot `quarantine` command allows any community captain to temporarily block a user\'s server privileges until an officer can decide if the user should be kicked/banned. **This command should *only* be used for situations where a user needs to be silenced immediately.**\n\n'
+ `If this command is used, please **send a DM with details** of the situation to ${samzID}.\n\n`
+ 'To use the winter-bot `quarantine` command, **send a DM to** ' + `${winterBot}` + ' with the following:\n\n'
+ '`quarantine {discordtag#0000}`\n\n'
+ 'e.g. `quarantine samzgr8#0513`\n\n'
+ '***WARNING:*** Anyone who uses this to troll or try to be funny *will* be banned from the server. Period.'

  let infoblockGuidelines = '**THE FOLLOWING COMMUNITY GUIDELINES WILL BE ENFORCED FOR ALL WINTER MEMBERS REGARDLESS OF RANK OR POSITION**\n\n'
+ '**(TL;DR - "DON\'T BE A DICK")**\n\n'
+ '**Constructive Discussion** - Please keep public comments and discussions constructive. If you feel like a conversation you\'re having might be inappropriate for public discussion, or if someone tells you it definitely is, please move it to your DMs.\n\n'
+ '**SFW Policy** - Many community members keep their Discord chats open at work or on family computers. Please keep general content SFW.\n\n'
+ '**Hate Speech** - Winter does not tolerate attacks on any person or group of people on the basis of gender, religion, race, ethnicity, or sexual orientation. *This includes the casual use of derogatory terms.*\n\n'
+ '**Harassment** - Do not engage in or post content encouraging the harassment of individuals or communities.\n\n'
+ '**Politics, Religion & Finances** - Do not post about these at all. Period.\n\n'
+ '**Advertising** -  Do not use the Winter server to promote or sell your product or service. Posts attempting to solicit anything will be removed.\n\n'
+ '**Voice Channels** - Voice channels are reserved for community members gaming *together* or participating in community social events. If you are not actively gaming *with someone else* please use one of the Lobby, LFG, or AFK channels.\n\n'
+ '***Violation of community guidelines may result in your removal from the Winter server and possible reporting to Discord.***\n\n'
+ `Guidelines are subject to change at the discretion of Winter community leadership. If you have any questions about the community guidelines, please **DM** ${samzID}.\n\n`
+ 'You can find the official Discord Community Guidelines here: <https://discordapp.com/guidelines>\n\n'

  let infoblockInviteLink = '★  https://discord.gg/ExUTWT4  ★\n'
+ '```diff\n- Invite link updated MARCH.14.2018\n```'

  let infoblockInviteText = `The above invite link may be shared as part of any recruiting you are doing, whether amongst friends or openly (Reddit, etc). This invite directs new members to our cool ${welcomeChat} channel which acts as a splash page for the clan and server. From there, they can click through to any other public channel.\n\n`
+ '**This is the only invite link for the server.** If you see anyone in the clan asking for an invite link, direct them here. This link will be refreshed every now and then for security. Check back before sharing.\n\n'
+ '***As a warning:*** *Using this link to re-invite someone who has been kicked/banned from the server will result in your removal as well.*'

  let infoblockShutupText = '**This is what happens when you annoy an officer.**'
  let infoblockShutupFooter = 'Your privileges will be restored shortly.'
  let infoblockShutupImg = 'https://www.reactiongifs.com/r/ksu.gif'

  let infoblockTimeout = '**You\'ve been placed in a temporary timeout because of something you did.**\n\n'
+ '**You probably know what it was, but an officer will be reaching out to you to discuss the situation.**\n\n'
+ `**Take this time to review the community** ${guidelinesChat}`

  let infoblockUnderReview = '**YOUR MEMBERSHIP STATUS IS UNDER REVIEW.**\n\n'
+ '**ALL SERVER PRIVILEGES HAVE BEEN TEMPORARILY REVOKED. YOU WILL BE NOTIFIED BY AN OFFICER WHEN YOUR REVIEW IS COMPLETE.**'

  let infoblockWelcome = '**Welcome to Winter!**  For nearly 20 years, Winter has existed as a community of friends brought together by a love of gaming across genre and platform. We currently support a variety of games on both PC and PlayStation, and maintain this Discord server for communication, planning and hanging out.\n\n'
+ `**Guidelines** - We like a bit of good-natured ribbing, but we\'re not savages. You can find our full community guidelines posted in the ${guidelinesChat} channel, but the short version is "Don\'t be a dick."\n\n`
+ `**winter-bot** - The Winter server uses a custom bot to manage user-joinable roles (game communities) and provide some comic relief now and then. You can find more information about how to use winter-bot in the ${botHelpChat} channel, or you can DM ${winterBot} with the word "help"\n\n`
+ '**Game Communities** - Winter encourages members to organize into communities based on the games they play. Active games with a reasonable community size will usually have their own text channel, and each community has at least one Captain who acts as the advocate, recruiter and organizer.\n'
+ '• All server users need to add themselves to at least one community role. This allows the community captains to @ mention the community as a whole for important updates.\n'
+ '• If you do not want game @ mentions at all (for any game community), please add yourself to the role @no_mentions. If you do not, an officer will be adding you to any community they see you active in.\n'
+ `• **For instructions on how to add yourself to a community, send a direct message to** ${winterBot} **with the word "games".**\n\n`
+ 'Visit Winter\'s website at [winterclan.net](https://www.winterclan.net) and use your Discord credentials to log in.\n'

/*
// infoblock #announcements invite embed
  let embed = new Discord.RichEmbed()
    .setColor(0x37a0dc)
    .setDescription(infoblockInviteText);
    message.channel.send(infoblockInviteLink, {embed: embed});

// infoblock #shutup embed
  let embed = new Discord.RichEmbed()
    .setColor(0x37a0dc)
    .setDescription(pokedText)
    .setImage("https://www.reactiongifs.com/r/ksu.gif")
    .setFooter(pokedFooter);
    message.channel.send({embed: embed});
*/
  
}

module.exports.help = {
  name: "infoblock"
}
