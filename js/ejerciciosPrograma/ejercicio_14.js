

//?  función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma


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
     
     const repeat = [];


     for (x = 0; x < param.length; x++) {

          let contador = 1;

          if (!repeat.includes(param[x])) {
              
               repeat.push(param[x]);

               for (y = x + 1; y < param.length; y++) {

                    if (param[x] === param[y]) {

                         contador += 1;   

                    } 
               }

               console.log(`la palabra ${param[x]} se repite ${contador} veces`)
         }

     }

}

repeatCounter(counterWords);
