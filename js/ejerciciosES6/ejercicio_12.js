

// Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro.

// Haz varios ejemplos y compruebalos.

// Sugerencia de función:

function findArrayIndex(array, text) { 

     for (let i = 0; i < array.length; i++) {

          const item = array[i];

          if (text === item) {

               console.log(`la posicion de ${text} es ${i}`);
          }
          
     }
}

// ej array:

const mainCharacters = [
     "Luke",
     "Leia",
     "Han Solo",
     "Chewbacca",
     "Rey",
     "Anakin",
     "Obi-Wan",
];

findArrayIndex(mainCharacters, "Luke" );
findArrayIndex(mainCharacters, "Chewbacca" );
findArrayIndex(mainCharacters, "Anakin" );