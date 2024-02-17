
//? busca la primera palabra mas larga de este array 

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(param) {

     let elemntBigger = '';

     for (let i = 0; i < param.length; i++) {

          let element = param[i];

          if (element.length > elemntBigger.length) {
               
               elemntBigger = element;
          }
          
     }
     
  

     return elemntBigger;
};


console.log(findLongestWord(avengers));
