
// 1.1 Basandote en el array siguiente, crea una lista ul > li 
// dinámicamente en el html que imprima cada uno de los paises.

const countriesFirst = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const ulList = document.createElement('ul');

for (const country of countriesFirst) {
     
     const liList = document.createElement('li');

     liList.innerText = country;

     ulList.append(liList);
   
}

document.body.append(ulList);


// 1.2 Elimina el elemento que tenga la clase.fn - remove - me.

const mRemove = document.querySelector('.fn-remove-me');

mRemove.remove();


// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
// en el div de html con el atributo data - function="printHere".

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const divData = document.querySelector('[data-function="printHere"]');

const carUl = document.createElement('ul');

for (const car of cars) {

     const carLi = document.createElement('li');
     carLi.innerText = car;
     carUl.append(carLi);
};

divData.append(carUl);


// 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento 
// h4 para el titulo y otro elemento img para la imagen.

const countries = [
     { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
     { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
     { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
     { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
     { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
];

const divs = document.createElement('div');

const createUl = () => { 

   

     for (const country of countries) {
          const elementTitle = document.createElement('h4');
          elementTitle.innerText = country.title;

          const elementImg = document.createElement('img');
          elementImg.innerHTML = country.imgUrl;

          const elementDiv = document.createElement('div');
          elementDiv.append(elementTitle);
          elementDiv.append(elementImg);
          elementDiv.className = 'elementDiv';
          divs.append(elementDiv);
     };

     
}

createUl();

document.body.append(divs);


// 1.5 Basandote en el ejercicio anterior.Crea un botón que elimine el último 
// elemento de la serie de divs.



const endButton = document.createElement('button');
endButton.innerText = 'eliminar';
endButton.className = 'endButton';



divs.children[4].append(endButton);

const deletElement = (e) => {
     
     const elementDelete = e.target.parentElement;

     elementDelete.remove();

};

endButton.addEventListener('click', deletElement);




// 1.6 Basandote en el ejercicio anterior.Crea un botón para cada uno de los 
// divs que elimine ese mismo elemento del html.

const allDivsIn = document.querySelectorAll('div.elementDiv');



for (let i = 0; i < (allDivsIn.length - 1); i++) {

     const element = allDivsIn[i]

     const elementButton = document.createElement('button');

     elementButton.innerText = 'eliminar';
     element.append(elementButton);
     elementButton.addEventListener('click', deletElement);

}

