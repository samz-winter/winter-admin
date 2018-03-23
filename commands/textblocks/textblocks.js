module.exports.testText = function (bot, message, args) {
  return {
    let samzUser = bot.users.find("id", "111980412296839168");
    text: `${samzUser} was coding.\nBanging head against the desk\nWill it ever work?`, // ${samzUser}
    // img: 'http://www.reactiongifs.com/r/magnum.gif',
    footer: [`-samzgr8, 2018`, '']
  }
};
