const Discord = module.require('discord.js');

const changelogText = '**Officers: feel free to use this channel to log any *major* changes to the server** (such as adding/deleting a role or channel.\n\n'
+ 'Mostly this is for Ben and Sam to log changes to the bots.'


module.exports.run = async (bot, message, args) => {
  // console.log("The 'test' command works!!");
  let embed = new Discord.RichEmbed()
    // .setTitle()
    // .setAuthor()
    .setColor(0x37a0dc)
    .setDescription(changelogText);
    message.channel.send({embed: embed});
}

module.exports.help = {
  name: "test"
}


/*
CHANGE LOG

MARCH.05.2018
• winter-admin bot added to Winter server
  • current function is manual command to add rich embed text
• #welcome text updated and posted by winter-admin
• #guidlines text posted by winter-admin (no updates)
• #bot-help text written and posted by winter-admin

*/

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

*/