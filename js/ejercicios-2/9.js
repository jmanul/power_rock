

// Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el
// Haz varios ejemplos y compruebalos.
// Sugerencia de función:
// function findArrayIndex(array, text) { }
// Ej array:


const mainCharacters = [
     "Luke",
     "Leia",
     "Han Solo",
     "Chewbacca",
     "Rey",
     "Anakin",
     "Obi-Wan",
];

function findArrayIndex(array, text) { 

     let position = 0;

     for (let i = 0; i < array.length; i++) {

          if (array[i] === text) {


                position = i + 1;


          }
     }

     return position;
}

let positionText = findArrayIndex(mainCharacters, 'Anakin');

console.log(`la posicion es ${positionText}`);