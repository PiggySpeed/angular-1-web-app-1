// From http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript

module.exports = {
  s4: function() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  },
  generateId: function() {
    return this.s4() + this.s4() + '-' + this.s4() + this.s4();
  },
  generateIdShort: function() {
    return this.s4();
  }
};
