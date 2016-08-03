'use strict'

module.exports = class TokenStream {
  constructor(tokens) {
    this.tokens = tokens;
    this.cursor = 0;
  }

  isAtEnd() {
    return this.cursor >= this.tokens.length;
  }

  advance() {
    this.cursor++;
  }

  isOn(type) {
    if(this.isAtEnd()) return false;
    return this.current().type == type;
  }

  current() {
    return this.tokens[this.cursor];
  }

};
