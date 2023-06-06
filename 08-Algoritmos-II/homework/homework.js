'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i < array.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if (i !== min) {
      let aux = array[i];
      array[i] = array[min];
      array[min] = aux;
    }
  }
  return array;
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  //okey probemos ahora

  if (array.length === 1) {
    return array;
​}
  let div = dividir(array);
  let izq = div[0];
  let der = div[1];
​ }      
  return merge(mergeSort(izq), mergeSort(der));




// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
