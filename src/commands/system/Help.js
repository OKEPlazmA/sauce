const patron = require('patron.js');
const StringUtil = require('../../utility/StringUtil.js');
const Constants = require('../../utility/Constants.js');

class Help extends patron.Command {
  constructor() {
    super({
      names: ['help', 'commands', 'command', 'cmd', 'cmds', 'support', 'docs'],
      groupName: 'system',
      description: 'All command information.',
      guildOnly: false,
      args: [
        new patron.Argument({
          name: 'command',
          key: 'command',
          type: 'string',
          defaultValue: '',
          example: 'money'
        })
      ]
    });
  }

  async run(msg, args, sender) {
    if (StringUtil.isNullOrWhiteSpace(args.command) === true) {
      await sender.dm(
        'Sauce is **THE** sauciest bot around, and you can have it in **YOUR** server simply by clicking here: ' + Constants.botInvite + '.\n\nFor all information about command usage and setup on your Discord Sever, view the official documentation: ' + Constants.documentation + '.\n\nThe `' + Constants.prefix + 'help <command>` command may be used for view the usage and an example of any command.\n\nIf you have **ANY** questions, you may join the **Official Sauce Discord Server:** ' + Constants.serverInvite + ' for instant support along with a great community.');

      if (msg.channel.type !== 'dm') {
        return sender.reply('You have been DMed with all the command information!');
      }
    } else {
      args.command = args.command.startsWith(Constants.prefix) ? args.command.slice(Constants.prefix.length) : args.command;

      const lowerInput = args.command.toLowerCase();

      const command = msg.client.registry.commands.find((x) => x.names.some((y) => y === lowerInput));

      if (command === undefined) {
        return sender.reply('This command does not exist.', { color: Constants.errorColor });
      }

      return sender.send('**Description:** ' + command.description + '\n**Usage:** `' + Constants.prefix + command.getUsage() + '`\n**Example:** `' + Constants.prefix + command.getExample() + '`', { title: StringUtil.upperFirstChar(command.names[0]) });
    }
  }
}

module.exports = new Help();
