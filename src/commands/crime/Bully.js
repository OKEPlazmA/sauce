const patron = require('patron.js');
const Constants = require('../../utility/Constants.js');
const StringUtil = require('../../utility/StringUtil.js');

class Bully extends patron.Command {
  constructor() {
    super({
      names: ['bully'],
      groupName: 'crime',
      description: 'Bully any user by changing their nickname.',
      cooldown: Constants.bully.cooldown,
      args: [
        new patron.Argument({
          name: 'member',
          key: 'member',
          type: 'member',
          example: '"Johnny Boy#7052"',
          preconditions: ['noself']
        }),
        new patron.Argument({
          name: 'nickname',
          key: 'nickname',
          type: 'string',
          example: 'ass hat',
          preconditions: [{ name: 'characterlimit', options: { limit: Constants.bully.maxLength } }],
          remainder: true
        })
      ]
    });
  }

  async run(msg, args, sender) {
    await args.member.setNickname(args.nickname);

    return sender.reply('You just __BULLIED__ ' + StringUtil.boldify(args.member.user.tag) + ' to ' + StringUtil.boldify(args.nickname) + '.');
  }
}

module.exports = new Bully();
