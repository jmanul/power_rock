

// función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados.

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
     
     for (x = 0; x < param.length; x++) {



          for (y = x + 1; y < param.length; y++) {


               if (param[x] === param[y]) {

                    param.splice(y, 1);
                     
                    x--;

               }
          }


     }

     return param;

}

console.log(`esta es la lista final -> ${removeDuplicates(duplicates) }`);



