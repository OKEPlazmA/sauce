const Constants = require('../utility/Constants.js');
const client = require('../singletons/client.js');
const Logger = require('../utility/Logger.js');
const Sender = require('../utility/Sender.js');
const Try = require('../utility/Try.js');

// TODO: Update welcome message to something better.

client.on('guildCreate', async (guild) => {
  (async () => {
    const mainChannel = guild.mainChannel;

    if (mainChannel !== undefined) {
      return Try(Sender.send(mainChannel, 'Hey! I am DEA, ya know, the slickest bot in town.\n\nJust wanted to let you know that you can use the `' + Constants.prefix +'help` command to get all the command info a man\'s heart could desire.\n\nAlso, you can setup automatic welcome messages with the `' + Constants.prefix + 'welcome <message>` command. Unsourceable studies have shown that new users are more likely to stay if they are instantly welcomed!\n\nIf you don\'t like it, no problem! You can disable it at any time with the `' + Constants.prefix + 'disablewelcome` command. If you have any questions or concerns, you may always join the **Official DEA Support Server:** ' + Constants.serverInvite + '.'));
    }
  })()
    .catch((err) => Logger.handleError(err));
});
