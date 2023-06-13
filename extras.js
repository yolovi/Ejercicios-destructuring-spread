// 3. Extras

// OK // Dado el siguiente objeto:
const HIGH_TEMPERATURES = {
    yesterday: 30,
    today: 35,
    tomorrow: 32,
  };
  // Cambiar las siguientes líneas para guardar desestructurando los valores de temperaturas en las variables maximaHoy y maximaManana
    // const maximaHoy = HIGH_TEMPERATURES.today;
    // const maximaManana = HIGH_TEMPERATURES.tomorrow;
  
  const {today, tomorrow} = HIGH_TEMPERATURES
  const maximaHoy = today
  const maximaManana = tomorrow
  
  
  console.log(maximaHoy)
  console.log(maximaManana)


// Escriba una función llamada onlyUniques que acepte cualquier número de argumentos y devuelva un array de elementos únicos, sin repetidos.
// onlyUniques('gato', 'pollo', 'cerdo', 'cerdo'); 
// //['gato', 'pollo', 'cerdo']
// onlyUniques(1, 1, 2, 2, 3, 6, 7, 8); //[1, 2, 3, 6, 7, 8]

// VERSION 1: -------------------------------------------------------

function onlyUniques(...args) {
  return [...new Set(args)];
}

// Ejemplo de uso:
const uniqueArray = onlyUniques('gato', 'pollo', 'cerdo', 'cerdo');
console.log(uniqueArray); // ['gato', 'pollo', 'cerdo']

console.log(onlyUniques(1, 1, 2, 2, 3, 6, 7, 8))

// // // VERSION 2: -------------------------------------------------------

// const unicos = [];

// function onlyUniques(...args) {
//   args.forEach(elemento => {
//     if(!unicos.includes(elemento) ){
//       unicos.push(elemento)
//     }
//   })
// }

// onlyUniques('gato','pollo', 'cerdo', 'cerdo');
// console.log(unicos)

// onlyUniques(1, 1, 2, 2, 3, 6, 7, 8); //[1, 2, 3, 6, 7, 8]
// console.log(unicos)

//----------------------------------------------------------------------------



// Escriba una función llamada combineAllArrays que pueda recibir cualquier cantidad de arrays como argumentos y los combine todos en un solo array.


// con el nuevo array fuera de la funcion:

// let combinedArr = []

// function combineAllArrays(...arrays) {

//   for(const element of arrays){
//    combinedArr.push(...element)
//   }
// }

// combineAllArrays([3, 6, 7, 8],[2, 7, 3, 1])
// console.log(combinedArr)

//con el nuevo array dentro de la funcion y con un return:

function combineAllArrays(...arrays) {
  let combinedArr = []

  for(const element of arrays){
   combinedArr.push(...element)
  }

  return combinedArr
}

console.log(combineAllArrays([3, 6, 7, 8],[2, 7, 3, 1]))

//resultados esperados

// combineAllArrays([3, 6, 7, 8],[2, 7, 3, 1])
// // [3, 6, 7, 8, 2, 7, 3, 1]
// combineAllArrays([2, 7, 3, 1],[2, 7, 4, 12],[2, 44, 22, 7, 3, 1]);
// // [2, 7, 3, 1, 2, 7, 4, 12, 2, 44, 22, 7, 3, 1]


// Escriba una función llamada sumAndSquare que reciba cualquier número de argumentos, los eleve al cuadrado y devuelva la suma de todos los valores cuadrados.

function sumAndSquare(...args){
 
  let resultSquare = []

  args.forEach(num => resultSquare.push(num**2))
      
 let resultSum = resultSquare.reduce((a,b) => a + b);
  return resultSum
}

result = sumAndSquare(1,2,3,4)
console.log(result)


