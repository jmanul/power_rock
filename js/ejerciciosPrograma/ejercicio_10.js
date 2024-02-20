
//* media de lista de numeros

const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(param) {

     let sum = 0;
     // let total = 0;

     // for (let i = 0; i < param.length; i++) { 

     //      sum = sum + param[i];
     //      total = sum / (i + 1);
     // };

     // return total;
     
     for (let i of param) {

          sum += i;
          
     }
     
     return sum / (param.length);
    
}


console.log(average(numbers));