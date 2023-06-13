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

// TODO: FALTA ---------------
// Escriba una función llamada onlyUniques que acepte cualquier número de argumentos y devuelva un array de elementos únicos, sin repetidos.
onlyUniques('gato', 'pollo', 'cerdo', 'cerdo'); 
//['gato', 'pollo', 'cerdo']
onlyUniques(1, 1, 2, 2, 3, 6, 7, 8); //[1, 2, 3, 6, 7, 8]

// TODO: FALTA ----------------


// Escriba una función llamada combineAllArrays que pueda recibir cualquier cantidad de arrays como argumentos y los combine todos en un solo array.
combineAllArrays([3, 6, 7, 8],[2, 7, 3, 1])
// [3, 6, 7, 8, 2, 7, 3, 1]
combineAllArrays([2, 7, 3, 1],[2, 7, 4, 12],[2, 44, 22, 7, 3, 1]);
// [2, 7, 3, 1, 2, 7, 4, 12, 2, 44, 22, 7, 3, 1]

//REVISAR Y ESTUDIAR
// const onlyUniques = (...args) => {
//   const filtroUnique = args.filter((arg, i) => i == args.indexOf(arg));
//   return filtroUnique;
// };
// console.log(onlyUniques("gato", "pollo", "cerdo", "cerdo"));



// Escriba una función llamada sumAndSquare que reciba cualquier número de argumentos, los eleve al cuadrado y devuelva la suma de todos los valores cuadrados.

// TODO: REVISAR ESTE  CODIGO Y COMPLETAR 
// Escriba una función llamada combineAllArrays que pueda recibir cualquier cantidad de arrays como argumentos y los combine todos en un solo array.

console.log("holaaa");

function combineAllArrays(...arrays) {
  let combinedArr = []
  for(const element of arrays){
   combinedArr += element
  }

}
  
  (combineAllArrays([3, 6, 7, 8],[2, 7, 3, 1]))

// return numbers.reduce((a, b) => a + b);

// const concatenarArray = [...array1, ...array2]
// console.log(concatenarArray)


// combineAllArrays([3, 6, 7, 8],[2, 7, 3, 1])
// // [3, 6, 7, 8, 2, 7, 3, 1]
// combineAllArrays([2, 7, 3, 1],[2, 7, 4, 12],[2, 44, 22, 7, 3, 1]);
// // [2, 7, 3, 1, 2, 7, 4, 12, 2, 44, 22, 7, 3, 1]