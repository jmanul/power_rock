

// Calcular un promedio es una tarea extremadamente común.Puedes usar este array para probar tu función:


const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

const numbers = [12, 21, 38, 5, 45, 37, 6];

function averageWord(param) {

     // let media = 0;
     let numero = 0;
     let sumaMedia = 0;

     for (i = 0; i < numbers.length; i++) {

        
          numero = numbers[i];

          sumaMedia += numero /numbers.length;

         
     }

     // media = suma / numbers.length;

     console.log(`la media es ${suma}`);

}

averageWord(numbers);