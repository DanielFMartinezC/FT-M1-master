"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes,según se indique por parámetro
  ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.size = function() {
  var count = 1;
  if(this.left) {
    count++;
    this.left.size()
  }
  if(this.right){
    count++;
    this.right.size()
  }
  return count
};

BinarySearchTree.prototype.insert = function(value) {
  const newTree = new BinarySearchTree(value);
  if(value < this.value) {
    if(!this.left) {
      this.left = newTree;
    }else {
      this.left.insert(value)
    }
  }  
  if(value > this.value) {
    if(!this.right) {
      this.right = newTree;
    } else {
      this.right.insert(value)
    }
  } 
};

BinarySearchTree.prototype.contains = function(x) {
  if(this.value === x) {
    return true
  }
  if(x < this.value) {
    if(this.left) {
      return this.left.contains(x)
    }else {
      return false
    }
  }else {
    if(this.right) {
      return this.right.contains(x)
    }else {
      return false
    }
  } 
};

BinarySearchTree.prototype.depthFirstForEach = function(cb, order) {
  switch(order){
    case 'pre-order':
      cb(this.value);
      if(this.left){this.left.depthFirstForEach(cb, order)};
      if(this.right){this.right.depthFirstForEach(cb, order)};
      break;
    case 'post-order':
      if(this.left){this.left.depthFirstForEach(cb, order)};
      if(this.right){this.right.depthFirstForEach(cb, order)};
      cb(this.value);
      break;
    default:
      if(this.left){this.left.depthFirstForEach(cb, order)};
      cb(this.value);
      if(this.right){this.right.depthFirstForEach(cb, order)};
      break;
  }
};

BinarySearchTree.prototype.breadthFirstForEach = function(cb, arr = []) { 
  cb(this.value);
  if(this.left){
    arr.push(this.left)
  };
  if(this.right){
    arr.push(this.right)
  }
  if(arr.length){
    arr.shift().breadthFirstForEach(cb, arr)
  }
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
