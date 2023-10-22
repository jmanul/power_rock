

// Crea un bucle for que vaya desde 0 a 9 y muestralo por consola.
// 1.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo
// cuando el resto del numero dividido entre 2 sea 0.
// 1.3 Crea un bucle para conseguir dormir contando ovejas.
// Este bucle tiene que dar 10 vueltas, es decir, 10 console.log.
// Muestra por consola un mensaje diciendo 'Intentando dormir 🐑' en cada vuelta del bucle
// y cambia el mensaje en la décima vuelta a 'Dormido!'.


for (x = 0; x < 10; x++) {

     console.log(`la x ahora vale ${x}`);
}

for (x = 0; x < 10; x++) {

     if ((x % 2) == 0) {

          console.log(`el numero ${x} es divisible por 2`);
     }
}

for (x = 0; x < 10; x++) {

     if (x < 9) {
        
          console.log('intentando dormir 🐑');
     } else {
          
          console.log('durmiendo');
   }

}

