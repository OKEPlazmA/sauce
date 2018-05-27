const patron = require('patron.js');

class Gambling extends patron.Group {
  constructor() {
    super({
      name: 'gambling'
    });
  }
}

module.exports = new Gambling();
