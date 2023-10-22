

// Calcular promedio de strings: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo
// contrario cuente la longitud del string y lo sume.Puedes usar este array para probar tu función:

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];


function averageWord(param) {


     let suma1 = 0; 
     let suma2 = 0;
     let total = 0;
     let cont1 = 0;
     let cont2 = 0;

     for (x = 0; x < mixedElements.length; x++) {



          if (Number(mixedElements[x]) ) {
               
               suma1 += Number(mixedElements[x]);
               cont1 += 1;

             

          } else if (String(mixedElements[x])) {

              
               suma2 += mixedElements[x].length;
               cont2 += 1;
            
          }

          total = suma1 + suma2;
         
   
     
     }

     console.log(`la suma total es ${total}`);

     console.log(`media de numeros ${suma1 / cont1}`);

     console.log(`media de numeros ${suma2 / cont2}`); 

    
}

averageWord(mixedElements);