const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {
  let inviteText = 'The above invite link may be shared as part of any recruiting you are doing, whether amongst friends or openly (Reddit, etc). This invite directs new members to our cool ' + /* #welcome */ message.guild.channels.get("413690580410040331") + ' channel which acts as a splash page for the clan and server. From there, they can click through to ' + /* #winter_general */ message.guild.channels.get("211141622694543360") + ' or any other public channel.\n\n'

+ '**This is the only invite link for the server.** If you see anyone in the clan asking for an invite link, direct them here. This link will be refreshed every now and then for security. Check back regularly.\n\n'

+ '***As a warning:*** *Using this link to re-invite someone who has been kicked/banned from the server will result in your removal as well.*'

  // BEGIN RICH EMBED
  let embed = new Discord.RichEmbed()
    // .setTitle()
    // .setAuthor()
    .setColor(0x37a0dc)
    .setDescription(inviteText)
    message.channel.send("★  https://discord.gg/jwXhjSN  ★", {embed: embed});
    // message.channel.send(testText2);

}

module.exports.help = {
  name: "invite"
}

/*

CONST RICH EMBED BLOCK:
module.exports.run = async (bot, message, args) => {
  //console.log("guidelines");
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

Channels:
welcome = message.guild.channels.get("413690580410040331")
413690580410040331
*/
