const patron = require('patron.js');
const Sender = require('../../utility/Sender.js');

class Send extends patron.Command {
  constructor() {
    super({
      names: ['send'],
      groupName: 'botowners',
      description: 'Send a message in any channel.',
      args: [
        new patron.Argument({
          name: 'channel',
          key: 'channel',
          type: 'channel',
          example: '290759415362224139'
        }),
        new patron.Argument({
          name: 'message',
          key: 'message',
          type: 'string',
          example: 'who want sum fuck',
          remainder: true
        })
      ]
    });
  }

  async run(msg, args, sender) {
    await Sender.send(args.channel, args.message);
    return sender.reply('You have successfully sent a message in ' + args.channel.id + '.');
  }
}

module.exports = new Send();
