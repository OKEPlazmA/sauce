class Constants {
  constructor() {
    this.defaultColors = [
      0xff269a,
      0x00ff00,
      0x00e828,
      0x08f8ff,
      0xf226ff,
      0xff1C8e,
      0x68ff22,
      0xffbe11,
      0x2954ff,
      0x9624ed,
      0xa8ed00
    ];
    this.errorColor = 0xff0000;

    this.botInvite = 'https://discordapp.com/api/oauth2/authorize?client_id=447942787300720660&permissions=8&scope=bot';
    this.documentation = 'http://saucebot.tk/';
    this.serverInvite = 'https://discord.gg/TDWyfeR';

    this.disabledEvents = [
      'CHANNEL_PINS_UPDATE',
      'MESSAGE_UPDATE',
      'MESSAGE_REACTION_ADD',
      'MESSAGE_REACTION_REMOVE',
      'MESSAGE_REACTION_REMOVE_ALL',
      'VOICE_STATE_UPDATE',
      'TYPING_START',
      'VOICE_SERVER_UPDATE',
      'RELATIONSHIP_ADD',
      'RELATIONSHIP_REMOVE'
    ];

    this.game = '$help | Saucebot.tk';

    this.prefix = '$';

    this.regexes = {
      markdown: /(\*|~|`|_)+/g,
      prefix: /^\$/
    };

    this.cashPerMessage = 50;
    this.leaderboardCap = 10;
    this.messageCooldown = 30000;
    this.minCharLength = 7;

    this.commandSimilarity = 0.66;

    this.bully = {
      cooldown: 60000,
      maxLength: 32
    };

    this.gambling = {
      minBet: 5
    };

    this.transfer = {
      cut: 0.1,
      min: 5
    };
  }
}

module.exports = new Constants();
