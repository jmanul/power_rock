

// Probando For: Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y 40.
// Imprime en un console log el array.Puedes usar este array:

const placesToTravel = [{ id: 5, name: 'Japan' }, { id: 11, name: 'Venecia' }, { id: 23, name: 'Murcia' }, { id: 40, name: 'Santander' }, { id: 44, name: 'Argentina' }];

// creando un array con los elementos que no coiuncidan

// let copyPlacesToTravel = []; 

// for (let i = 0; i < placesToTravel.length; i++) {

    
     

//      if (placesToTravel[i].id !== 11 && placesToTravel[i].id !== 40) {

//           console.log(placesToTravel[i].id);

//           copyPlacesToTravel.push(placesToTravel[i]);
//      }

     

    
// }

// console.log(copyPlacesToTravel);

// eliminando del array los elementos que coincidan

let copyPlacesToTravel = placesToTravel.slice();

for (let i = 0; i < copyPlacesToTravel.length; i++) {




     if (copyPlacesToTravel[i].id === 11 || copyPlacesToTravel[i].id === 40) {

          console.log(copyPlacesToTravel[i].id);

          copyPlacesToTravel.splice(i, 1);

          i--; // al eliminar perdemos una posicion pra ello restamos a la i esa posicion
          
     }




}

console.log(copyPlacesToTravel);