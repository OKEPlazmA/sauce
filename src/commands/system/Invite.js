const patron = require('patron.js');
const Constants = require('../../utility/Constants.js');

class Invite extends patron.Command {
  constructor() {
    super({
      names: ['invite', 'join', 'add'],
      groupName: 'system',
      description: 'Add Sauce to your server.',
      guildOnly: false
    });
  }

  run(msg, args, sender) {
    return sender.reply('You may add sauciest bot around by clicking here: ' + Constants.botInvite + '.\n\nIf you have any questions or concerns, you may always join the **Official DEA Support Server:** ' + Constants.serverInvite);
  }
}

module.exports = new Invite();
