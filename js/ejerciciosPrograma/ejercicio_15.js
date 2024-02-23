
// muestra todos los valores que incluyan la palabra camiseta

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']


let Productcamiseta = [];

for (let x of products) {
     

     if (x.toLocaleLowerCase().includes('camiseta')) {
          
          Productcamiseta.push(x)
          console.log(x);
     }

     
}

console.log(`estas son las camkisetas de la lista ${Productcamiseta}`);
