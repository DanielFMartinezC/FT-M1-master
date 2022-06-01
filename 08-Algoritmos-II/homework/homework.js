'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length === 0){
    return array
  }
  if(array.length === 1){
    return array
  } else {
    var pivote = Math.ceil(Math.random() * ((array.length - 1) - 0) + 0);
    var arrPivote = array[pivote]
    var arrayLeft = [];
    var arrayRigth = [];
    for(let i = 0; i < pivote; i++){
      if(array[i] < array[pivote]){
        arrayLeft.push(array[i])
      } else {
        arrayRigth.push(array[i])
      }
    };
    for(let i = pivote + 1; i < array.length; i++){
      if(array[i] < array[pivote]){
        arrayLeft.push(array[i])
      } else {
        arrayRigth.push(array[i])
      }
    };
  }
  array = [];
  array = quickSort(arrayLeft).concat(arrPivote).concat(quickSort(arrayRigth))
  return array
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
