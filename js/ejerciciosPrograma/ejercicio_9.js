
//! suma de la lista de numeros

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param) {

     let sum = 0;
     for (const i of param) {

          sum += i;
          
     }

     return sum;
}

console.log(sumAll(numbers));