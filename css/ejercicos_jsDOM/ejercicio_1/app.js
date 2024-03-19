
// 1.1 Usa querySelector para mostrar por consola el botón con la clase.showme

const showme = document.querySelector('button.showme');

console.log(showme);


// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

const pillado = document.querySelector('h1#pillado');

console.log(pillado);

// 1.3 Usa querySelector para mostrar por consola todos los p

const pAll = document.querySelectorAll('p');

console.log(pAll);

// 1.4 Usa querySelector para mostrar por consola todos los elementos con 
// la clase.pokemon

const pokemones = document.querySelectorAll('.pokemon');

console.log(pokemones);

// 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo data - function="testMe".

const dataFunc = document.querySelectorAll('[data-function=testMe]');

console.log(dataFunc);

// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo
// data - function="testMe".

const threedataFunc = document.querySelectorAll('[data-function=testMe]')[2];

console.log(threedataFunc);

//* const threedataFunc = document.querySelectorAll('[data-function=testMe]');


//* console.log(threedataFunc[2]);