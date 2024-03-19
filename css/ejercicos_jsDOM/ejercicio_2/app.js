
// 1.1 Inserta dinamicamente en un html un div vacio con javascript.

const divVacio = document.createElement('div');

document.body.appendChild(divVacio);


// 1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const divP = document.createElement('div');

divP.innerText = 'p';

document.body.appendChild(divP);


// 1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

const div6P = document.createElement('div');

for (let i = 0; i < 6; i++) { 

     const listP = document.createElement('p');
     div6P.append(listP);
};

document.body.appendChild(div6P);



// 1.4 Inserta dinamicamente con javascript en un html una p con el 
// 	texto 'Soy dinámico!'.

const pSoy = document.createElement('p');

pSoy.innerText = 'soy dinamico';

document.body.append(pSoy);

// 1.5 Inserta en el h2 con la clase.fn - insert - here el texto 'Wubba Lubba dub dub'.

//* const wubba = document.querySelectorAll('h2.fn-insert-here').innerText = 'Wubba Lubba dub dub';

//* const wubba = document.querySelectorAll('h2.fn-insert-here');

//* wubba[0].innerText = 'Wubba Lubba dub dub';

const wubba = document.querySelector('h2.fn-insert-here');

wubba.innerText = 'Wubba Lubba dub dub';


// 1.6 Basandote en el siguiente array crea una lista ul > li con 
// los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const ulList = document.createElement('ul');
ulList.innerText = 'soy una lista de rrss'
for (const element of apps) {

     const liList = document.createElement('li');
     liList.innerText = element;
     ulList.append(liList);
     
}

document.body.appendChild(ulList);





// 1.7 Elimina todos los nodos que tengan la clase.fn - remove - me

const allRemove = document.getElementsByClassName('fn-remove-me');

for (let i = 0; i < allRemove.length; i++) {

     allRemove[i].remove();

     i--;   
}


// 1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
// 	Recuerda que no solo puedes insertar elementos con.appendChild.

const pBetwen = document.createElement('p');

pBetwen.innerText = 'Voy en medio';

const divPosition = document.querySelectorAll('div');

document.body.insertBefore(pBetwen , divPosition[1]);


//* console.log(document.body.children);

//* document.body.insertBefore(pBetwen, document.body.children[6]);


// 1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase
//      .fn - insert - here


const allInser = document.querySelectorAll('div.fn-insert-here');

for (let i = 0; i < allInser.length; i++) {
     
     const pDentro = document.createElement('p');

     pDentro.innerText = 'voy dentro!';

     allInser[i].append(pDentro);
 }






