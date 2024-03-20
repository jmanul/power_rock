

// Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".

const places = ["Gondor", "Mordor", "Rivendel", "La Comarca", "Nümenor"];

const dateDiv = document.querySelector('[data-function="printHere"]');

const ulLista = document.createElement('ul');

dateDiv.append(ulLista);

for (const place of places) {

     const liList = document.createElement('li');

     liList.innerText = place;

     ulLista.append(liList);
     
}