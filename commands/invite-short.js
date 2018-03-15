const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {
  let inviteText = 'Invite link updated MARCH.14.2018\n'
+ 'The previous link has been expired.\n\n'
+ '**Please refresh all active recruiting posts.**'
  let embed = new Discord.RichEmbed()
    .setColor(0x37a0dc)
    .setDescription(inviteText)
    message.channel.send("★  https://discord.gg/ExUTWT4  ★", {embed: embed});
  }

module.exports.help = {
  name: "invite-short"
}
