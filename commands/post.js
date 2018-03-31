/*
Title: infoblock.js
Description: combined text block commands for static posts
Usage: !infoblock {chat_room}
*/
const Discord = module.require('discord.js');
const responses = require('./textblocks/responses.js').responses;

module.exports.run = async (bot, message, args) => {
  let msg = message.content.toLowerCase();
  let user = message.mentions.users.first();
  let reason = args.slice(0).join(' ');
  let adminLog = message.guild.channels.get("423825546087235585"); // #admin_log
  let directMessage = message.guild.member(user);
  // let inviteLink = '★  https://discord.gg/C6y5wSM  ★\n```diff\n- Invite link updated MARCH.31.2018\n```'

  if(reason === "testing") {
    // directMessage.send(guidelinesPing);
    message.delete();
    message.channel.send(responses.test(bot, message, args))
    // adminLog.send(`${user} has been DM'd about community guidelines.`);
    return;
  }else if(reason === "captain") {
    message.delete();
    message.channel.send(responses.captainPost(bot, message, args))
    return;
  }else if(reason === "guidelines") {
    message.delete();
    message.channel.send(responses.guidelinesPost(bot, message, args))
    return;
  }else if(reason === "invite") {
    message.delete();
    message.channel.send(responses.invitePost(bot, message, args))
    return;
  }else if(reason === "invite link") {
    message.delete();
    message.channel.send('★  https://discord.gg/C6y5wSM  ★\n```diff\n- Invite link updated MAR.31.2018\n```')
    return;
  }else if(reason === "penalty box") {
    message.delete();
    message.channel.send(responses.penaltyBoxPost(bot, message, args))
    return;
  }else if(reason === "timeout") {
    message.delete();
    message.channel.send(responses.timeoutPost(bot, message, args))
    return;
  }else if(reason === "under review") {
    message.delete();
    message.channel.send(responses.underReviewPost(bot, message, args))
    return;
  }else if(reason === "welcome") {
    message.delete();
    message.channel.send(responses.welcomePost(bot, message, args))
    return;
  }
}

module.exports.help = {
  name: "post"
}

/*
captain.js      || captainPost
guidelines.js   || guidelinesPost
bot-help.js     || 
invite.js       || inviteLink / invitePost
poked.js        || shutupPost
timeout.js      || timeoutPost
under-review.js || underReviewPost
welcome.js      || welcomePost
*/

/*
// post #announcements invite embed
  let embed = new Discord.RichEmbed()
    .setColor(0x37a0dc)
    .setDescription(postInviteText);
    message.channel.send(postInviteLink, {embed: embed});

// post #shutup embed
  let embed = new Discord.RichEmbed()
    .setColor(0x37a0dc)
    .setDescription(pokedText)
    .setImage("https://www.reactiongifs.com/r/ksu.gif")
    .setFooter(pokedFooter);
    message.channel.send({embed: embed});
*/
