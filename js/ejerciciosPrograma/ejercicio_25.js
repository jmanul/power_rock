
// Bucle para sumar el total de las ventas (sellCount) y mostrar por consola la media de las ventas.

const products = [
     { name: "Funko Dr. Strange", sellCount: 10 },
     { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
     { name: "Sable laser FX", sellCount: 23 },
     { name: "Varita de Voldemort", sellCount: 6 },
];

let total = 0;

for (let product of products) {

     total += product.sellCount;


};

console.log(`la media de sellcount de productos es : ${total / products.length}`);