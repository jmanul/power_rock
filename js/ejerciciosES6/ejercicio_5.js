

// 5.1 Dado el siguiente array, utiliza.filter() para generar un nuevo array 
// con los valores que sean mayor que 18

const age = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const oldAge = age.filter((edad) => edad > 18);

console.log(oldAge);

// 5.2 Dado el siguiente array, utiliza.filter() para generar un nuevo array 
// con los valores que sean par.

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const pairAges = ages.filter((edad) => edad % 2 === 0);

console.log(pairAges);

// 5.3 Dado el siguiente array, utiliza.filter() para generar un nuevo array 
// con los streamers que tengan el gameMorePlayed = 'League of Legends'.

const streamer = [
     { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
     { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
     { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
     { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
];

const newStreamer = streamer.filter(({ gameMorePlayed }) => gameMorePlayed === 'League of Legends');

console.log(newStreamer);

// 5.4 Dado el siguiente array, utiliza.filter() para generar un nuevo array 
// con los streamers que incluyan el caracter 'u' en su propiedad.name.Recomendamos 
// usar la funcion.includes() para la comprobación.

const streamers = [
     { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
     { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
     { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
     { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
];

const includeStreamers = streamers.filter(({ name }) => name.includes('u'));

console.log(includeStreamers)

// 5.5 utiliza.filter() para generar un nuevo array con los streamers que incluyan 
// el caracter 'Legends' en su propiedad.gameMorePlayed.Recomendamos usar la funcion         .includes() para la comprobación.Además, pon el valor de la propiedad.gameMorePlayed a MAYUSCULAS cuando .age sea mayor que 35.




const capitalStreamers = streamers.filter((stream) => stream.gameMorePlayed.includes('Legends')).map((stream) => {

     stream.age > 35 ? stream.gameMorePlayed = stream.gameMorePlayed.toUpperCase() : stream.gameMorePlayed;

     return stream;


});


console.log(capitalStreamers)