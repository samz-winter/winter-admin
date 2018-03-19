const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {
  let linkText = '★  https://discord.gg/ExUTWT4  ★\n'
+ '```diff\n'
+ '- Invite link updated MARCH.14.2018\n'
+ '- Please refresh all active recruiting posts.\n'
+ '```\n'
  
  let inviteText = 'Invite link updated MARCH.14.2018\n'
+ 'The previous link is no longer valid.\n\n'
+ '**Please refresh all active recruiting posts.**'
  
  let embed = new Discord.RichEmbed()
    .setColor(0x37a0dc)
    .setDescription(inviteText)
    // message.channel.send(linkText, {embed: embed});
    message.channel.send(linkText);
  }

module.exports.help = {
  name: "invite-short"
}
