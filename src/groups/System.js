const patron = require('patron.js');

class SystemGroup extends patron.Group {
  constructor() {
    super({
      name: 'system'
    });
  }
}

module.exports = new SystemGroup();
