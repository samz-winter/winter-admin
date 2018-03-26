const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {
  let welcomeChat = message.guild.channels.get("413690580410040331")
  
  let inviteLinkText = '★  https://discord.gg/Xsf6qTQ  ★\n'
+ '```diff\n- Invite link updated MARCH.26.2018\n```'
  
  let inviteText = `The above invite link may be shared as part of any recruiting you are doing, whether amongst friends or openly (Reddit, etc). This invite directs new members to our cool ${welcomeChat} channel which acts as a splash page for the clan and server. From there, they can click through to any other public channel.\n\n`
+ '**This is the only invite link for the server.** *If you see anyone in the clan asking for an invite link, direct them here.* This link will be refreshed every now and then for security. Check back before sharing.\n\n'
+ '***WARNING:*** *Using this link to re-invite someone who has been kicked/banned from the server will result in your removal as well.*'
  
  let embed = new Discord.RichEmbed()
    .setColor(0x37a0dc)
    .setDescription(inviteText)
    message.delete();
    message.channel.send(inviteLinkText, {embed: embed});
  }

module.exports.help = {
  name: "invite"
}

