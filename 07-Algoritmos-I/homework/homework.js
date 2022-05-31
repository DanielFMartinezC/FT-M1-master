'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  var iArr = [];
  var solution = [1];
  for(let i = 0; i < num; i ++){
    iArr.push(i)
  }
  function esPrimo(numero) {
    if(numero < 2) { return false };
    if(numero === 2) { return true };
    for(let i = 2; i < numero; i++) {
      if(numero % i === 0) {
        return false;
      }
    }
    return true
  }
  let arrayPrimos = iArr.filter(x => esPrimo(x));
  var numDiv = [num]  //[180, 90... 1]
  for(let i = 0; numDiv[numDiv.length - 1] > 1; i++){
    for(let j = 0; j < arrayPrimos.length; j++){
      if(numDiv[i] % arrayPrimos[j] === 0){
        solution.push(arrayPrimos[j]);
        numDiv.push(numDiv[i] / arrayPrimos[j]);
        break;
      }
    }
  }
  return solution
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:

}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:

}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
