//OK // 1.  Ejercicios destructuring
// Dado el siguiente objeto:
const empleados = [
  { name: "Luis", email: "Luis@gmail.com" },
  { name: "Ana", email: "Ana@gmail.com" },
  { name: "Andrea", email: "Andrea@gmail.com" },
];

//OK // Extrae la empleada Ana con todos sus datos personales:
// {"name":"Ana", "email":"Ana@gmail.com"}

const [p1, p2] = empleados;
console.log(p2);

//OK // Extrae el email del empleado Luis --> Luis@gmail.com
const { email } = p1;
console.log(email);

// Dado el siguiente objeto:
const pokemon = {
  name: "Bulbasaur",
  type: "grass",
  ability: {
    primary: "Overgrow",
    hidden: "Chlorophyll",
  },
  stats: {
    hp: 45,
    attack: 49,
    deffense: 59,
    speed: 45,
  },
  moves: ["Growl", "Tackle", "Vine Whip", "Razor Leaf"],
};

//OK // Cambia el nombre de la propiedad “name” por “nombre

const { name: nombre } = pokemon;
console.log(nombre);

// Extrae el nombre del Pokemon

const { name } = pokemon;
console.log(name);

//OK // Extrae el tipo de Pokemon que es

const { type } = pokemon;

//OK // Extrae el movimiento “Tackle”

const { moves } = pokemon;
const [m1, m2] = moves;

console.log(m2);

// 2. Ejercicios spread/rest
//OK // Mergea el siguiente pokémon con el Pokemon del ejercicio anterior:
const pikachu = {
  name: "Pikachu",
  type: "electric",
  ability: {
    primary: "Static",
    hidden: "Lightning rod",
  },
  stats: {
    hp: 35,
    attack: 55,
    deffense: 40,
    speed: 90,
  },
  moves: ["Quick Attack", "Volt Tackle", "Iron Tail", "Thunderbolt"],
};

const mergearPokemon = { ...pokemon, ...pikachu };
console.log(mergearPokemon);

// Escribe una función llamada sumEveryOther que pueda recibir cualquier cantidad de números y devuelva la suma de todos los demás argumentos.
//   sumEveryOther(6, 8, 2, 3, 1); //20
//   sumEveryOther(11, 3, 12); //26

numArr = [0, 1, 2];

function sumEveryOther(...numbers) {
  // aqui utilizamos el operador REST para poder pasar cualquier num de args
  return numbers.reduce((a, b) => a + b);
}

console.log(sumEveryOther(6, 8, 2, 3, 1));
console.log(sumEveryOther(11, 3, 12));
console.log(sumEveryOther(...[11, 3, 12])); // si se le pasa un array para sumar los valores de dentro hay que utilizar el operador SPREAD en el array que se le pasa como arguamento para sacar los datos del array y que los pueda sumar. Mira la diferencia en los 2 siguientes console.log
console.log(sumEveryOther(...numArr));
console.log(sumEveryOther(numArr)); //al no utilizar SPREAD solo devuelve el array

// Escribe una función llamada addOnlyNums que pueda recibir cualquier número de argumentos (incluyendo números y strings y retorne la suma solo de los números.
// addOnlyNums(1, 'perro', 2, 4); //7

// VERSION 1:

// function addOnlyNums(...args) {
//   const onlyNums = [];
//   for (const elemento of args) {
//     if (typeof elemento === "number") {
//       onlyNums.push(elemento);
//     }
//   }
//   return onlyNums.reduce((a, b) => a + b);
// }

// console.log(addOnlyNums(1, "perro", 2, 4));//7

// VERSION 2:

function addOnlyNums(...args) {
    const onlyNums = args.filter( arg => typeof arg === "number" )
        return onlyNums.reduce((a, b) => a + b)
}

console.log(addOnlyNums(1, "perro", 2, 4)); //7

//OK // Escribe una función llamada countTheArgs que pueda recibir cualquier número de argumentos y devuelva un número que indique cuántos argumentos ha recibido.
// countTheArgs('gato', 'perro'); //2
// countTheArgs('gato', 'perro', 'pollo', 'oso'); //4

function countTheArgs(...args) {
  return args.length;
}

console.log(countTheArgs("gato", "perro")); //2
console.log(countTheArgs("gato", "perro", "pollo", "oso")); //4

// Escribe una función llamada combineTwoArrays que reciba dos array cómo argumentos y devuelva solo un array que combine los dos (usando spread operator).

const arrLetters = ["a", "b", "c"];
const arrNumbers = [1, 2, 3];

function combineTwoArrays(arr1, arr2) {
  const concatenarArray = [...arr1, ...arr2];
  return concatenarArray;
}

console.log(combineTwoArrays(arrLetters, arrNumbers));


