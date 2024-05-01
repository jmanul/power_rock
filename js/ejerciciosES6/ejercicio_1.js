// Crea una arrow function que tenga dos parametros a y b y que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre por consola la suma de los dos parametros.

const sumaDos = (a = 10, b = 5) => a + b;


console.log(sumaDos());

console.log(sumaDos(6));
console.log(sumaDos(5, 6));


