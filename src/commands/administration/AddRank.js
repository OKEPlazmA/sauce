const db = require('../../database');
const patron = require('patron.js');
const USD = require('../../utility/USD.js');
const Constants = require('../../utility/Constants.js');

class AddRank extends patron.Command {
  constructor() {
    super({
      names: ['addrank', 'setrank', 'enablerank'],
      groupName: 'administration',
      description: 'Add a rank.',
      botPermissions: ['MANAGE_ROLES'],
      args: [
        new patron.Argument({
          name: 'role',
          key: 'role',
          type: 'role',
          example: 'Sicario',
          preconditions: ['hierarchy']
        }),
        new patron.Argument({
          name: 'cashRequired',
          key: 'cashRequired',
          type: 'currency',
          example: '500'
        })
      ]
    });
  }

  async run(msg, args, sender) {
    if (msg.dbGuild.roles.rank.some((role) => role.id === args.role.id) === true) {
      return sender.reply('This rank role has already been set.', { color: Constants.errorColor });
    }

    await db.guildRepo.upsertGuild(msg.guild.id, new db.updates.Push('roles.rank', { id: args.role.id, cashRequired: Math.round(args.cashRequired) }));

    return sender.reply('You have successfully added the rank role ' + args.role + ' with a cash required amount of ' + USD(args.cashRequired) + '.');
  }
}

module.exports = new AddRank();
