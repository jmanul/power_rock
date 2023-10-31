
// Usa includes: Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta".Usa la
// función.includes de javascript


const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta'];

let x = 0;
const camisetas = [];

while (x < products.length) {
  
    
    

     if (products[x].includes("Camiseta")) {
          
          
          camisetas.unshift(products[x]);

          console.log(products[x]);
         

     }

     x++;

  

}

console.log(camisetas);