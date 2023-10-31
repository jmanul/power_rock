

// Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo
// conforma.Puedes usar este array para probar tu función:

const counterWords = [
     'code',
     'repeat',
     'eat',
     'sleep',
     'code',
     'enjoy',
     'sleep',
     'code',
     'enjoy',
     'upgrade',
     'code'
];
function repeatCounter(param) {


     const repeat = counterWords.slice();


     for (x = 0; x < repeat.length; x++) {
          
          let contador = 1;



          for (y = x + 1; y < repeat.length; y++) {

               if (repeat[x] === repeat[y]) {

                    contador = contador + 1;

                    repeat.splice(y , 1);


               }
          }

          console.log(`la palabra ${repeat[x]} se repite ${contador} veces`)
     }
     

     console.log(repeat);
}

repeatCounter(counterWords);
