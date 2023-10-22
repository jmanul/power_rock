

// 1.1 Consigue el valor "HULK" del array de avengers y muestralo por consola.
// const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
// 1.2 Cambia el primer elemento de avengers a "IRONMAN"
// const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
// 1.3 console numero de elementos en el array usando la propiedad correcta de Array.

 const avengers = ["hulk", "spiderman", "black panther"];

console.log(`el primer valor de avengers es ${avengers[0]}`);

avengers[0] = "ironman";


console.log(`el primer valor de avengers ahora es ${avengers[0]}`);

console.log(`el numero de elementos en el array es ${avengers.length}`);

// 1.4 Añade 2 elementos al array: "Morty" y "Summer".
// Muestra en consola el último personaje del array
// const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
// 1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
// const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
// 1.6 Elimina el segundo elemento del array y muestra el array por consola.
// const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

avengers.unshift("morty", "summer");//delante

console.log(avengers);

avengers.push("morty", "summer"); // al final del array

console.log(avengers);

const lastAvengers = avengers[avengers.length -1]

console.log(`el ultimo personaje de avengers es ${lastAvengers}`);

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

rickAndMortyCharacters.pop();

console.log(rickAndMortyCharacters);

const lastRickAndMortyCharacter = rickAndMortyCharacters[rickAndMortyCharacters.length - 1];

console.log(`el primer elemento del array es ${rickAndMortyCharacters[0]} el ultimo elemento del array es ${lastRickAndMortyCharacter} `);

rickAndMortyCharacters.splice(0, 1); // elimina la posicion del array


console.log(rickAndMortyCharacters);

rickAndMortyCharacters.splice(2, 1 , 'yo'); // añade un elemento a esta posicion del array

console.log(rickAndMortyCharacters);

const BitArray = rickAndMortyCharacters.slice(0, 2); // copia esta parte del array a otro array

console.log(BitArray);
