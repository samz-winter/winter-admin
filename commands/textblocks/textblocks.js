module.exports.testText = function (bot, message, args) {
  // console.log(bot, message, args);
  return {
    var samzUser = bot.users.get('111980412296839168');
    console.log(samzUser.users);
    text: [`${samzUser} was coding.\nBanging head against the desk\nWill it ever work?`], // ${samzUser}
    // img: 'http://www.reactiongifs.com/r/magnum.gif',
    footer: [`-samzgr8, 2018`, '']
  }
};


