

// 5.1 Dado el siguiente array, utiliza.filter() para generar un nuevo array
// con los valores que sean mayor que 18

const ages1 = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const newAges1 = ages1.filter((age) => {

     return age > 18;

});

console.log(newAges1);

// 5.2 Dado el siguiente array, utiliza.filter() para generar un nuevo array
// con los valores que sean par.

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const newAge = ages.filter((age) => {

     return age % 2 === 0;

});

console.log(newAge)


// 5.3 Dado el siguiente array, utiliza.filter() para generar un nuevo array
// con los streamers que tengan el gameMorePlayed = 'League of Legends'.

const streamers1 = [
     { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
     { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
     { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
     { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
];

const newStreamers1 = streamers1.filter((stream) => {

     return stream.gameMorePlayed === 'League of Legends';
});

console.log(newStreamers1);

// 5.4 Dado el siguiente array, utiliza.filter() para generar un nuevo array
// con los streamers que incluyan el caracter 'u' en su propiedad.name.Recomendamos
// usar la funcion.includes() para la comprobación.

const streamers = [
     { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
     { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
     { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
     { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
];


const newStreamers = streamers.filter((stream) => {

     return stream.name.includes('u');


});

console.log(newStreamers)

// 5.5 utiliza.filter() para generar un nuevo array con los streamers que incluyan
// el caracter 'Legends' en su propiedad.gameMorePlayed.Recomendamos usar la funcion
     // .includes() para la comprobación.
     //      Además, pon el valor de la propiedad.gameMorePlayed a MAYUSCULAS cuando
//           .age sea mayor que 35.
   

const newStreamers0 = streamers.filter((stream) => {

return stream.gameMorePlayed.includes('Legends');
   
}).map((stream) => { 

     // if (stream.age > 35) {
       
     //     stream.gameMorePlayed = stream.gameMorePlayed.toUpperCase();
     // }

     stream.age > 35 ? stream.gameMorePlayed = stream.gameMorePlayed.toUpperCase() : stream.gameMorePlayed;
     
     return stream;


})

 console.log(newStreamers0);


// 5.6 Dado el siguiente html y javascript, utiliza.filter() para mostrar por consola los streamers que incluyan la palabra introducida en el input.De esta forma, si
// introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'.Si
// introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.

const streamers2 = [
     { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
     { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
     { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
     { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
];

