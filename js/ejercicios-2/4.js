

// 4.1 Dado el siguiente array, devuelve un array con sus nombres
// utilizando.map().

const users = [
     { id: 1, name: 'Abel' },
     { id: 2, name: 'Julia' },
     { id: 3, name: 'Pedro' },
     { id: 4, name: 'Amanda' }
];

const copyUsers = users.map((user) => {

     return user.name;
})
 
console.log(copyUsers);

// 4.2 Dado el siguiente array, devuelve una lista que contenga los valores
// de la propiedad.name y cambia el nombre a 'Anacleto' en caso de que
// empiece por 'A'.

const users1 = [
     { id: 1, name: 'Abel' },
     { id: 2, name: 'Julia' },
     { id: 3, name: 'Pedro' },
     { id: 4, name: 'Amanda' }
];

const copyUsers1 = users1.map((user) => {

     if (user.name.startsWith('A')) {
          
          user.name = 'Anacleto'

          
     }

     return user.name;
})

console.log(copyUsers1)

// 4.3 Dado el siguiente array, devuelve una lista que contenga los valores
// de la propiedad.name y añade al valor de.name el string ' (Visitado)'
// cuando el valor de la propiedad isVisited = true.

const cities = [
     { isVisited: true, name: 'Tokyo' },
     { isVisited: false, name: 'Madagascar' },
     { isVisited: true, name: 'Amsterdam' },
     { isVisited: false, name: 'Seul' }
];

const copyCities = cities.map((cita) => {

     if (cita.isVisited === true) {

         cita.name = cita.name + ' (Visitado)'
     }

     return cita.name;
})

console.log(copyCities);