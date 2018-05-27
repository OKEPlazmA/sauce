const patron = require('patron.js');

class Crime extends patron.Group {
  constructor() {
    super({
      name: 'crime'
    });
  }
}

module.exports = new Crime();
