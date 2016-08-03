module.exports = function(ast) {
  return calc(ast);
}

function calc(node) {
  if(node.type == 'number') return node.value;
  if(node.type == 'add') return calc(node.left) + calc(node.right);
  if(node.type == 'subtract') return calc(node.left) - calc(node.right);
  if(node.type == 'multiply') return calc(node.left) * calc(node.right);
  if(node.type == 'divide') return calc(node.left) / calc(node.right);
}
