

// Crea una función llamada swap que reciba un array y dos parametros que sean 
// indices del array.La función deberá intercambiar la posición de los valores de 
// los indices que hayamos enviado como parametro.Retorna el array resultante.

// Sugerencia de array:

const fantasticFour = [
     "La antorcha humana",
     "Mr. Fantástico",
     "La mujer invisible",
     "La cosa",
];

const fantasticFourResult = []

const swap = (array, index1, index2) => {


     for (let i = 0; i < array.length; i++) { 

          let position = array[i];

          if (position === index1) {

               fantasticFourResult.push(index2);

          } else if (position === index2) { 
   
               fantasticFourResult.push(index1);

          } else {

               fantasticFourResult.push(position);
          }
     }

     return fantasticFourResult;
}

console.log(swap(fantasticFour, "La cosa", "Mr. Fantástico"));