

// suma los numeros y la longitud de los string de la lista

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

function averageWord(param) {

     let sum = 0;
     
     for (let i of param) {

          if (typeof i === 'string') {

               sum += i.length;
               
          } else if (typeof i === 'number') {

               sum += i;
          };
          
          //else {
               
          //      sum += i;
          // }

          
     }

     return sum;
};


console.log(averageWord(mixedElements));