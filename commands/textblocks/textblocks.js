const assets = require('./assets.js');

module.exports.testText = function (bot, message, args) {
  return {
    text: `${assets.samzUser} was coding.\n`
    + `Banging head against the desk\nWill it ever work?`,
    // img: 'http://www.reactiongifs.com/r/magnum.gif',
    footer: [`-samzgr8, 2018`, '']
  }
};

module.exports.inviteLink = function (bot, message, args) {
  return {
    text: ['★  https://discord.gg/Xsf6qTQ  ★\n```diff\n- Invite link updated MARCH.26.2018\n```']
  }
};

module.exports.shutupPost = function (bot, message, args) {
  return {
    text: '**This is what happens when you annoy an officer.**',
    img: 'https://www.reactiongifs.com/r/ksu.gif',
    footer: ['Your privileges will be restored shortly.', '']
  }
};
