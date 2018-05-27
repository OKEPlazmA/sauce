class Guild {
  constructor(guildId) {
    this.guildId = guildId;
    this.roles = {
      rank: []
    };
  }
}

module.exports = Guild;
