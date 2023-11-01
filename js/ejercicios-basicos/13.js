

// Valores únicos: Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que
// existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función:



const duplicates = [
     'sushi',
     'pizza',
     'burger',
     'potatoe',
     'pasta',
     'ice-cream',
     'pizza',
     'chicken',
     'onion rings',
     'pasta',
     'soda'
];
function removeDuplicates(param) {

 
     

     for (x = 0; x < duplicates.length; x++){
          
        

          for (y = x + 1; y < duplicates.length; y++) {
             

               if (duplicates[x] === duplicates[y]) {
                    
                    duplicates.splice(y ,1);

                    
               }
          }

          
     }

     console.log(`esto es el elemento final ${duplicates}`);

}


removeDuplicates(duplicates);