

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

function swap(array, text1, text2) {

     let position1 = 0;
     let position2 = 0;

     for (let i = 0; i < array.length; i++) {

          if (array[i] === text1) {


               array[i] = text2; 
             

          } else if (array[i] === text2) {
               
             

               array[i] = text1;
              
          }

      
     }
     
 

       
      

     return array;
}


let swap1 = swap(fantasticFour, 'La antorcha humana', 'La cosa');
console.log(swap1);