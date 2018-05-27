const patron = require('patron.js');
const db = require('../../database');
const util = require('util');
const Constants = require('../../utility/Constants.js');

class Eval extends patron.Command {
  constructor() {
    super({
      names: ['eval'],
      groupName: 'botowners',
      description: 'Evalute JavaScript code.',
      args: [
        new patron.Argument({
          name: 'code',
          key: 'code',
          type: 'string',
          example: 'client.token',
          remainder: true
        })
      ]
    });
  }

  async run(msg, args, sender) {
    try {
      /* eslint-disable no-unused-vars */
      const client = msg.client;
      const message = msg;
      const guild = msg.guild;
      const channel = msg.channel;
      const author = msg.author;
      const member = msg.member;
      const database = db;

      let result = await eval('(async () => { return ' + args.code + '})()');

      if (typeof result !== 'string') {
        result = util.inspect(result, { depth: 0 });
      }

      result = result.replace(client.token, ' ').replace(/\[Object\]/g, 'Object').replace(/\[Array\]/g, 'Array');

      return sender.sendFields(['Eval', '```js\n' + args.code + '```', 'Returns', '```js\n' + result + '```']);
    } catch (err) {
      return sender.sendFields(['Eval', '```js\n' + args.code + '```', 'Error', '```js\n' + err + '```'], { color: Constants.errorColor });
    }
  }
}

module.exports = new Eval();
