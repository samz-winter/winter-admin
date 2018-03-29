const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {
  let guidelinesText = '**THE FOLLOWING COMMUNITY GUIDELINES WILL BE ENFORCED FOR ALL WINTER MEMBERS REGARDLESS OF RANK OR POSITION**\n\n'
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

  // BEGIN RICH EMBED
  let embed = new Discord.RichEmbed()
    // .setTitle()
    // .setAuthor()
    .setColor(0x37a0dc)
    .setDescription(guidelinesText);
    message.delete();
    message.channel.send({embed: embed});
}

module.exports.help = {
  name: "guidelines"
}
