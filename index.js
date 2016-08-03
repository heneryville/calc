var lexer = require('./lexer')
  , parser = require('./parser')
  , calc = require('./calc')
  , printer = require('./treePrinter')
  , readline = require('readline')
  , rl = readline.createInterface({ input: process.stdin, output: process.stdout })
;

function eval(input) {
  var ast = parser(lexer(input));
  console.log(printer(ast))
  return calc(ast);
}

function repl() {
  rl.question('calculator>',(input) => {
    var result = eval(input)
    console.log(result);
    repl();
  })
}

repl();

