module.exports.testText = function (bot, message, args) {
  let samzUser = bot.users.get('111980412296839168');
  return {
    text: [`${samzUser} was coding.\nBanging head against the desk\nWill it ever work?`],
    // img: 'http://www.reactiongifs.com/r/magnum.gif',
    footer: [`-samzgr8, 2018`, '']
  }
};

module.exports.inviteLink = function (bot, message, args) {
  return {
    text: ['★  https://discord.gg/ExUTWT4  ★\n```diff\n- Invite link updated MARCH.14.2018\n```']
  }
};


