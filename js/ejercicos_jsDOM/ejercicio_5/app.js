

// Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html 
// que imprima cada uno de los albums.

const albums = [
     "De Mysteriis Dom Sathanas",
     "Reign of Blood",
     "Ride the Lightning",
     "Painkiller",
     "Iron Fist",
];


const ulList = document.createElement("ul");

document.body.append(ulList);

for (const element of albums) {

     const elementLi = document.createElement("li");

     elementLi.innerText = element;

     ulList.append(elementLi);
     
}