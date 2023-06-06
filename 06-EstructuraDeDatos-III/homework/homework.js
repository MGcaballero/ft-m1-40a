'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
   function BinarySearchTree(value) {

  if (typeof value !== "number") {
    throw new TypeError("El valor debe ser un nÃºmero");
  };

  this.value = value;
  this.left = null;
  this.right = null;

};

BinarySearchTree.prototype.insert = function(value) {

  value < this.value
    ? this.left
      ? this.left.insert(value)
      : (this.left = new BinarySearchTree(value))
    : this.right
      ? this.right.insert(value)
      : (this.right = new BinarySearchTree(value));

};

BinarySearchTree.prototype.contains = function(value) {

  if (value === this.value) {
    return true;

  } else if (value < this.value) {
      return this.left ? this.left.contains(value) : false;

  } else {
      return this.right ? this.right.contains(value) : false;

  };

};

BinarySearchTree.prototype.size = function() {

  let leftSize = this.left ? this.left.size() : 0;
  let rightSize = this.right ? this.right.size() : 0;

  return leftSize + rightSize + 1;

};

BinarySearchTree.prototype.depthFirstForEach = function(printNodeValue, order = "in-order") {

  if (order === "pre-order") printNodeValue(this.value);
  if (this.left) this.left.depthFirstForEach(printNodeValue, order);
  if (order === "in-order") printNodeValue(this.value);
  if (this.right) this.right.depthFirstForEach(printNodeValue, order);
  if (order === "post-order") printNodeValue(this.value);

};

BinarySearchTree.prototype.breadthFirstForEach = function(printNodeValue) {

  let queue = [this];

  while (queue.length > 0) {
    
    let node = queue.shift();

    printNodeValue(node.value);
    
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);

  };

};



let tree = new BinarySearchTree(8);

tree.insert(3);
tree.insert(10);
tree.insert(1);
tree.insert(6);
tree.insert(14);
tree.insert(4);
tree.insert(7);
tree.insert(13);

tree.breadthFirstForEach((value) => console.log(value), "post-order");


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
