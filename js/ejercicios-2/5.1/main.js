// 5.7 Dado el siguiente html y javascript, utiliza.filter() para mostrar por consola
// los streamers que incluyan la palabra introducida en el input.De esta forma, si
// introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'.Si introduzco 'i',
//      me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
// En este caso, muestra solo los streamers filtrados cuando hagamos click en el button.


const streamers2 = [
     { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
     { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
     { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
     { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
];

const Ru = streamers2.filter((stream) => {

     return stream.name === 'Rubius';

})



const i = streamers2.filter((stream) => {

     return stream.name === 'Rubius' || stream.name === 'Ibai';

})


// const input = document.querySelector("input");
// const button = document.querySelector("button");
const form = document.querySelector("form");




const toShowFilterStreamers = (event) => {

     event.preventDefault();
     


     if (event.target.campo.value === 'Ru') {

          alert(Ru);
          console.log(Ru);

     } else if (event.target.campo.value === 'i') {

          alert(i);
          console.log(i);
     } else {

          console.log('no hay resultados')

     }


};

form.addEventListener("submit", toShowFilterStreamers);
