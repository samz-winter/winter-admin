// const assets = require('./assets.js').assets;

module.exports.testText = function (bot, message, args) {
  let samzID = bot.users.get('111980412296839168'); // @samzgr8
  return {
    text: `${samzID} was coding.\n`
    + `Banging head against the desk\nWill it ever work?`,
    // img: 'http://www.reactiongifs.com/r/magnum.gif',
    footer: [`-samzgr8, 2018`, '']
  }
};

module.exports.captainPost = function (bot, message, args) {
  let winterBot = message.guild.members.get("420054493250584586"); // @winter-bot
  let samzID = bot.users.get('111980412296839168'); // @samzgr8
  return {
    text: '**THIS IS A READ-ONLY CHANNEL. For issues, please  DM ** ' + `${samzID}` + '.\n\n'
    + 'The winter-bot `quarantine` command allows any community captain to temporarily block a user\'s server privileges until an officer can decide if the user should be kicked/banned. **This command should *only* be used for situations where a user needs to be silenced immediately.** Please **send a DM with details** of the situation to ' + `${samzID}` + ' if this command is used.\n\n'
    + 'To use the winter-bot `quarantine` command, **send a DM to** ' + `${winterBot}` + ' with the following:  `quarantine {discordtag#0000}`\n\n'
    + 'e.g. `quarantine samzgr8#0513`\n\n'
    + '***WARNING:*** Anyone who intentionally misuses this command *will* be banned from the server. Period.'
  }
};

module.exports.guidelinesPost = function (bot, message, args) {
  let samzID = bot.users.get('111980412296839168'); // @samzgr8
  return {
    text: '**THE FOLLOWING COMMUNITY GUIDELINES WILL BE ENFORCED FOR ALL WINTER MEMBERS REGARDLESS OF RANK OR POSITION**\n\n'
    + '**(TL;DR - "DON\'T BE A DICK")**\n\n'
    + '**Constructive Discussion** - Please keep public comments and discussions constructive. If you feel like a conversation you\'re having might be inappropriate for public discussion, or if someone tells you it definitely is, please move it to your DMs.\n\n'
    + '**SFW Policy** - Many community members keep their Discord chats open at work or on family computers. Please keep general content SFW.\n\n'
    + '**Hate Speech** - Winter does not tolerate attacks on any person or group of people on the basis of gender, religion, race, ethnicity, or sexual orientation. *This includes the casual use of derogatory terms.*\n\n'
    + '**Harassment** - Do not engage in or post content encouraging the harassment of individuals or communities.\n\n'
    + '**Politics, Religion & Finances** - Do not post about these at all. Period.\n\n'
    + '**Advertising** -  Do not use the Winter server to promote or sell your product or service. This includes unsolicited advertising of game streams. Posts attempting to solicit anything will be removed.\n\n'
    + '**Voice Channels** - Voice channels are reserved for community members gaming *together* or participating in community social events. If you are not actively gaming *with someone else* please use one of the Lobby, LFG, or AFK channels.\n\n'
    + '***Violation of community guidelines may result in your removal from the Winter server and possible reporting to Discord.***\n\n'
    + `Guidelines are subject to change at the discretion of Winter community leadership. If you have any questions about the community guidelines, please **DM** ${samzID}.\n\n`
    + 'You can find the official Discord Community Guidelines here: <https://discordapp.com/guidelines>\n\n'
  }
};

module.exports.inviteLink = function (bot, message, args) {
  return {
    text: ['★  https://discord.gg/Xsf6qTQ  ★\n'
    + '```diff\n- Invite link updated MARCH.26.2018\n```']
  }
};

module.exports.invitePost = function (bot, message, args) {
  return {
    text: `**This is the only invite link for the server.** If you see anyone in the community asking for an invite link, direct them here. This link will be refreshed every now and then for security. Check back before sharing.\n\n`
    + `***WARNING:*** *Using this link to re-invite someone who has been kicked/banned from the server will result in your removal as well.*`
  }
};

module.exports.shutupPost = function (bot, message, args) {
  return {
    text: '**This is what happens when you annoy an officer.**',
    img: 'https://www.reactiongifs.com/r/ksu.gif',
    footer: ['Your privileges will be restored shortly.', '']
  }
};

module.exports.timeoutPost = function (bot, message, args) {
  let guidelinesChat = message.guild.channels.get("413675044435394570"); // #guidelines
  return {
    text: '**You\'ve been placed in a temporary timeout because of something you did.**\n\n'
    + '**You probably know what it was, but an officer will be reaching out to you to discuss the situation.**\n\n'
    + `**Take this time to review the community** ${guidelinesChat}`
  }
};

module.exports.underReviewPost = function (bot, message, args) {
  return {
    text: '**YOUR MEMBERSHIP STATUS IS UNDER REVIEW.**\n\n'
    + '**ALL SERVER PRIVILEGES HAVE BEEN TEMPORARILY REVOKED. YOU WILL BE NOTIFIED BY AN OFFICER WHEN YOUR REVIEW IS COMPLETE.**'
  }
};

module.exports.welcomePost = function (bot, message, args) {
  let winterBot = message.guild.members.get("420054493250584586"); // @winter-bot
  let guidelinesChat = message.guild.channels.get("413675044435394570"); // #guidelines
  return {
    text: '**Welcome to Winter!**  For nearly 20 years, Winter has existed as a community of friends brought together by a love of gaming across genre and platform. We currently support a variety of games on both PC and PlayStation, and maintain this Discord server for communication, planning and hanging out.\n\n'
    + `**Guidelines** - We like a bit of good-natured ribbing, but we\'re not savages. You can find our full community guidelines posted in the ${guidelinesChat} channel, but the short version is "Don\'t be a dick."\n\n`
    + `**winter-bot** - The Winter server uses a custom bot to manage user-joinable roles (game communities) and provide some comic relief now and then. **You can find more information about how to use winter-bot by sending a direct message to ${winterBot} with the word "help"**\n\n`
    + '**Game Communities** - Winter encourages members to organize into communities based on the games they play. Active games with a reasonable community size will usually have their own text channel, and most communities have at least one Captain who acts as the advocate, recruiter and organizer.\n'
    + '  **• All server members are required to self-add themselves to at least one community role.** This allows the community captains and leadership to @ mention the community as a whole for important updates.\n'
    + '  **• If you do not want game @ mentions for any game community, please add yourself to the role @no_mentions.**\n'
    + `  **• For instructions on how to self-add yourself to a community (or @no_mentions), send a direct message to ${winterBot} with the word "games".**\n\n`
    + 'Visit Winter\'s website at [winterclan.net](https://www.winterclan.net) and use your Discord credentials to log in.'
  }
};
