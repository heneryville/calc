'use strict'
var assert = require('chai').assert
  , lexer = require('../lexer')
  , parser = require('../parser')
  , treePrinter = require('../treePrinter')
  , _ = require('lodash')
;

describe('parser',() => {
  itParses('1',`number`);
  itParses('1 + 2',
`add
.number
.number`);

  function itParses(input, expected) {
    it(`${input} => ${expected}`, () => {
      var ast = parser(lexer(input));
      var rep = treePrinter(ast);
      assert.equal(expected,rep);
    })
  }

})


