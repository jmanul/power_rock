

// 7.1 Dado el siguiente array, haz una suma de todos las notas de los examenes de
// los alumnos usando la función.reduce().



const exams = [
     { name: 'Yuyu Cabeza Crack', score: 5 },
     { name: 'Maria Aranda Jimenez', score: 1 },
     { name: 'Cristóbal Martínez Lorenzo', score: 6 },
     { name: 'Mercedez Regrera Brito', score: 7 },
     { name: 'Pamela Anderson', score: 3 },
     { name: 'Enrique Perez Lijó', score: 6 },
     { name: 'Pedro Benitez Pacheco', score: 8 },
     { name: 'Ayumi Hamasaki', score: 4 },
     { name: 'Robert Kiyosaki', score: 2 },
     { name: 'Keanu Reeves', score: 10 }
];


const sumaNotas = exams.reduce((acc, next) => {

     console.log(acc)
     console.log(next.score)

      

     return parseInt(acc + next.score)
},[]);

console.log(sumaNotas);

// 7.2 Dado el mismo array, haz una suma de todos las notas de los examenes de los
// alumnos que esten aprobados usando la función.reduce().

const aprobedNotas = exams.reduce((acc, next) => {
     
     if (next.score >= 5) {
          
         acc = parseInt(acc + next.score)

     }

     console.log(acc)

     return acc

},[]);

console.log(aprobedNotas);


// 7.3 Dado el mismo array, haz la media de las notas de todos los examenes.reduce().



 let mediaNotas = (x) => {


     const media = x.reduce((acc, next) => {

          return parseInt(acc + next.score)

     }, [])
      
      return media / x.length;

 }

console.log(mediaNotas(exams));


// o tambien asi


const media = exams.reduce((acc, next) => {

     return parseInt(acc + next.score)

}, [])

console.log(media / exams.length);





// Ejercicio[8] Bonus

// 6.1 Dado el siguiente javascript filtra los videojuegos por gender = 'RPG' usando
//      .filter() y usa.reduce() para conseguir la media de sus.score.
// La función.find() también podría ayudarte para el contrar el genero 'RPG' en el
// array.gender.


const videogames = [
     { name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5 },
     { name: 'Assasins Creed Valhala', genders: ['Aventura', 'RPG'], score: 4.5 },
     { name: 'The last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8 },
     { name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5 },
     { name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5 },
     { name: 'Legend of Zelda: Breath of the wild', genders: ['RPG', 'La cosamás puto bonita que he visto nunca'], score: 10 },
]

const videoRpg = videogames.filter((videogame) => {

     return videogame.genders.find((gender) => gender === 'RPG')

})

let mediaScore = videoRpg.reduce((acc, next) => {

     return parseFloat(acc + next.score)

}, []); 

console.log(mediaScore)

console.log(mediaScore/videoRpg.length)
