

// Mixed For...of e includes: Usa un bucle for...of para recorrer todos los juguetes y elimina los que incluyan la palabra gato.
// Recuerda que puedes usar la función.includes() para comprobarlo.Puedes usar este array:

const toys = [
     { id: 5, name: 'Buzz MyYear' },
     { id: 11, name: 'Action Woman' },
     { id: 23, name: 'Barbie Man' },
     { id: 40, name: 'El gato con Guantes' },
     { id: 40, name: 'el gato Felix' }];

let toysCopy = toys.slice();

let cont = 0;

for (const i of toys) {
          


          if (i.name.includes('gato')) {

               toysCopy.splice(cont , 1);


               cont--;


          }
     cont++;
     
     console.log(toysCopy);
}
     



