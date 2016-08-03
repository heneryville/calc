'use strict'
var assert = require('chai').assert
  , lexer = require('../lexer')
  , parser = require('../parser')
  , calc = require('../calc')
;

describe('parser',() => {
  itExecutes('1',1);
  itExecutes('1 + 2', 3);

  function itExecutes(input, expected) {
    it(`${input} => ${expected}`, () => {
      var actual = calc(parser(lexer(input)));
      assert.equal(expected,actual);
    })
  }

})


