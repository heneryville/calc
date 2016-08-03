module.exports = function parse(stream) {
  return parseExpression(stream);
}

function parseExpression(stream) {
  return parseAdd(stream);
}

function parseAdd(stream) {
  var left = parseMult(stream);
  var op = stream.isOn('PLUS') ? 'add'
    : stream.isOn('MINUS') ? 'subtract'
    : null;
  if(!op) return left;
  stream.advance();
  return { left: left, type: op, right: parseAdd(stream) };
}

function parseMult(stream) {
  var left = parseVExpr(stream);
  var op = stream.isOn('STAR') ? 'multiply'
    : stream.isOn('SLASH') ? 'divide'
    : null;
  if(!op) return left;
  stream.advance();
  return { left: left, type: op, right: parseMult(stream) };
}

function parseVExpr(stream) {
  if(stream.isOn('LPAREN')) {
    stream.advance();
    var central = parseExpression(stream);
    if(!stream.isOn('RPAREN')) throw new Error(`Expected a ), got ${stream.current()}`)
    stream.advance();
    return central;
  } else if(stream.isOn('NUM')) {
    var node = {type: 'number', value: +stream.current().value };
    stream.advance();
    return node;
  }
  throw new Error(`Expected number, got ${JSON.stringify(stream.current())}`)
}
