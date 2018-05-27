const db = require('../../database');
const patron = require('patron.js');
const StringUtil = require('../../utility/StringUtil.js');
const USD = require('../../utility/USD.js');

class ModifyCash extends patron.Command {
  constructor() {
    super({
      names: ['modifycash'],
      groupName: 'administration',
      description: 'Allows you to modify the cash of any member.',
      args: [
        new patron.Argument({
          name: 'amount',
          key: 'amount',
          type: 'currency',
          example: '500'
        }),
        new patron.Argument({
          name: 'member',
          key: 'member',
          type: 'member',
          defaultValue: patron.ArgumentDefault.Member,
          example: 'Supa Hot Fire#0911',
          remainder: true
        })
      ]
    });
  }

  async run(msg, args, sender) {
    const newDbUser = await db.userRepo.modifyCash(msg.dbGuild, args.member, args.amount);

    return sender.reply('You have successfully modifed ' + (args.member.id === msg.author.id ? 'your' : StringUtil.boldify(args.member.user.tag) + '\'s') + ' balance to ' + USD(newDbUser.cash) + '.');
  }
}

module.exports = new ModifyCash();
