

// Completa la función que tomando dos números como argumento devuelva el más alto.

function sum(numberOne, numberTwo) {
     
     if (numberOne > numberTwo) {
          
          console.log(`el numero ${numberOne} es mayor que el numero ${numberTwo}`);
     } else if (numberOne < numberTwo) {

          console.log(`el numero ${numberTwo} es mayor que el numero ${numberOne}`);
     } else {

          console.log('los dos numeros son iguales')
     }
}

sum(20, 20);


// Buscar la palabra más larga Completa la función que tomando un array de strings como argumento devuelva el más largo, en
// caso de que dos strings tenga la misma longitud deberá devolver el primero.
// Puedes usar este array para probar tu función:

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(param) {

     
     let maxIten = '';

     for (x = 0; x < avengers.length; x++) {

          
        

          if (avengers[x].length > maxIten.length) {

               maxIten = avengers[x];
          }

       

          console.log(maxIten);
     }

     console.log(`el string mayor es ${maxIten}`);
}

findLongestWord(avengers);

