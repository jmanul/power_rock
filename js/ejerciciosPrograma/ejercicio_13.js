// función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de
// dicho array - comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la
// contra un false


const nameFinder = [
     'Peter',
     'Steve',
     'Tony',
     'Natasha',
     'Clint',
     'Logan',
     'Xabier',
     'Bruce',
     'Peggy',
     'Jessica',
     'Marc'
];
function finderName(param , element) {
     
     
     for (x = 0; x < param.length; x++) {

          // convierte a minusculas los dos elemntos a comparar

          if (param[x].toLowerCase() === element.toLowerCase()) {

               console.log(`true en la posicion ${x + 1}`)

          } else {

               console.log('false');


          }

     }
}



finderName(nameFinder, 'steve');