const patron = require('patron.js');

class Administrator extends patron.Precondition {
  constructor() {
    super({
      name: 'administrator'
    });
  }

  async run(command, msg) {
    if (msg.member.hasPermission('ADMINISTRATOR') === true) {
      return patron.PreconditionResult.fromSuccess();
    }

    return patron.PreconditionResult.fromError(command, 'You must be an administrator in order to use this command.');
  }
}

module.exports = new Administrator();
