'use strict'
var assert = require('chai').assert
  , lexer = require('../lexer')
  , _ = require('lodash')
;

describe('lexer',() => {
  itLexes('1',['NUM']);
  itLexes('1 + 2',['NUM','PLUS','NUM']);
  itLexes('1 - 2',['NUM','MINUS','NUM']);
  itLexes('1 * 2',['NUM','STAR','NUM']);
  itLexes('1 / 2',['NUM','SLASH','NUM']);
  itLexes('()',['LPAREN','RPAREN']);

  function itLexes(input, expected) {
    it(`${input} => ${JSON.stringify(expected)}`, () => {
      var actual = _.map(lexer(input).tokens,'type');
      assert.deepEqual(actual,expected);
    })
  }

})


