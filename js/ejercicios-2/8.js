

// Dado el siguiente javascript usa forof para recorrer el array de películas,
//      genera un nuevo array con las categorías de las películas e imprime por
// consola el array de categorías.Ten en cuenta que las categorías no deberían
// repetirse.
// Para filtrar las categorías puedes ayudarte de la función.includes().


const movies = [
     {
          title: "Bracula: Condemor II",
          duration: 192,
          categories: ["comedia", "aventura"],
     },
     {
          title: "Spider-Man: No Way Home",
          duration: 122,
          categories: ["aventura", "acción"],
     },
     {
          title: "The Voices",
          duration: 223,
          categories: ["comedia", "thriller"],
     },
     {
          title: "Shrek",
          duration: 111,
          categories: ["comedia", "aventura", "animación"],
     },
];

let category = [];

for (let categoriesArray of movies) {  

   

     
     for (let categoriesarrayIn of categoriesArray.categories) {
          
             

               if (!(category.includes(categoriesarrayIn))) {

                  
                    
                    category.push(categoriesarrayIn)


               }
             
          }
                 
     }




console.log(category)

// este codigo haria lo mismo

let categoryFinal =[... new Set(category)]



console.log(categoryFinal)