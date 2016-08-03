var Lexer = require('lexer')
  , lexer = new Lexer()
  , TokenStream = require('./TokenStream')
;

lexer.addRule(/\+/i, function (lexeme) { return {type: 'PLUS'}; });
lexer.addRule(/\-/i, function (lexeme) { return {type: 'MINUS'}; });
lexer.addRule(/\*/i, function (lexeme) { return {type: 'STAR'}; });
lexer.addRule(/\//i, function (lexeme) { return {type: 'SLASH'}; });
lexer.addRule(/\(/i, function (lexeme) { return {type: 'LPAREN'}; });
lexer.addRule(/\)/i, function (lexeme) { return {type: 'RPAREN'}; });
lexer.addRule(/\d+/i, function (lexeme) { return {type: 'NUM', value: lexeme}; });
lexer.addRule(/(\d+)?\.\d+/i, function (lexeme) { return {type: 'NUM', value: lexeme}; });
lexer.addRule(/\s+/i, function (lexeme) { return {type: 'SPACE' }; });

module.exports = function(input){
  lexer.setInput(input)
  var stream = [];
  while(true) {
    var token = lexer.lex();
    if(!token) return new TokenStream(stream);
    if(token.type == 'SPACE') continue;
    stream.push(token);
  }
}
