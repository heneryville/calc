module.exports = function(ast) {
  return print(ast,0);
}

function print(node,depth) {
  var str = "";
  for(var i=0; i<depth; ++i) str = str + '.';
  if(node.type == 'number') return str + node.type;
  else return str + node.type + '\n' + print(node.left,depth+1) + '\n' + print(node.right,depth+1);
}
