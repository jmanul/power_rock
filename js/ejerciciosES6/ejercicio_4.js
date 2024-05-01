

// 4.1 Dado el siguiente array, devuelve un array con sus nombres utilizando.map().

const user = [
     { id: 1, name: 'Abel' },
     { id: 2, name: 'Julia' },
     { id: 3, name: 'Pedro' },
     { id: 4, name: 'Amanda' }
];


const userName = user.map(({ name }) => name);

console.log(userName);

// 4.2 Dado el siguiente array, devuelve una lista que contenga los valores 
// de la propiedad.name y cambia el nombre a 'Anacleto' en caso de que 
// empiece por 'A'.

const users = [
     { id: 1, name: 'Abel' },
     { id: 2, name: 'Julia' },
     { id: 3, name: 'Pedro' },
     { id: 4, name: 'Amanda' }
];


// const userNewName = users.map(({ name }) => {
     
//      let firstName = name[0];
     
//      if (firstName === 'A') {

//           name = 'Anacleto';
//      }

//      return name;
// });

const userNewName = users.map(({ name }) => name[0] === 'A' ? 'Anacleto' : name);

console.log(userNewName)

// 4.3 Dado el siguiente array, devuelve una lista que contenga los valores 
// de la propiedad.name y añade al valor de.name el string ' (Visitado)' 
// cuando el valor de la propiedad isVisited = true.

const cities = [
     { isVisited: true, name: 'Tokyo' },
     { isVisited: false, name: 'Madagascar' },
     { isVisited: true, name: 'Amsterdam' },
     { isVisited: false, name: 'Seul' }
];

// const newCities = cities.map(({ isVisited, name }) => {
//      if (isVisited === true) {

//           name = name + '(visitado)';
//      }

//      return name;
// });

const newCities = cities.map(({ isVisited, name }) => isVisited === true ? name +'(visitado)' : name);

console.log(newCities)