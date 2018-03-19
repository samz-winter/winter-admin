const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {
  let inviteLinkText = '★  https://discord.gg/ExUTWT4  ★\n'
+ '```diff\n'
+ '- Invite link updated MARCH.14.2018\n'
+ '- Please refresh all active recruiting posts.\n'
+ '```\n'
  
  let embed = new Discord.RichEmbed()
    .setColor(0x37a0dc)
    .setDescription(inviteLinkText)
    message.channel.send({embed: embed});
    //message.channel.send(linkText);
  }

module.exports.help = {
  name: "invite-short"
}
