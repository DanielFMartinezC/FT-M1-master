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
  if(array.length === 1 || array.length === 0){
    return array
  };
  var div = Math.floor((array.length - 1) / 2);
  var arrayLeft = array.slice(0, div+1)
  var arrayRigth = array.slice(div+1, array.length);
  var vacio = []
  for(let i = 0; i < mergeSort(arrayLeft).length; i++){
    for(let j = 0; j < mergeSort(arrayRigth).length; j++){
      if(mergeSort(arrayLeft)[i] > mergeSort(arrayRigth)[j]){
        vacio.push(mergeSort(arrayRigth)[j])
      }
      if(mergeSort(arrayLeft)[i] < mergeSort(arrayRigth)[j]){
        vacio.push(mergeSort(arrayLeft)[i]);
        i++
      }
      if(mergeSort(arrayLeft).length !== mergeSort(arrayRigth).length){
        if(mergeSort(arrayLeft).length > mergeSort(arrayRigth).length){
          
        }
      }
    }
  }
  return vacio
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
