'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length === 1 || array.length === 0){
    return array
  } else {
    var pivote = Math.ceil(Math.random() * array.length - 1);
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
  if(array.length === 1){
    return array
  };
  var div = Math.floor(array.length / 2);
  var arrayLeft = array.slice(0, div)
  var arrayRight = array.slice(div);
  return merge(mergeSort(arrayLeft),mergeSort(arrayRight))
};

function merge(arrayLeft, arrayRight){
  let arrayLeftIndex = 0;
  let arrayRightIndex = 0;
  let array = [];
  while(arrayLeftIndex < arrayLeft.length && arrayRightIndex < arrayRight.length){
    if(arrayLeft[arrayLeftIndex] < arrayRight[arrayRightIndex]){
      array.push(arrayLeft[arrayLeftIndex]);
      arrayLeftIndex++
    }else {
      array.push(arrayRight[arrayRightIndex]);
      arrayRightIndex++;
    }
  }
  return array.concat(arrayLeft.slice(arrayLeftIndex)).concat(arrayRight.slice(arrayRightIndex));
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
