

// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
// evento click que ejecute un console log con la información del evento del click

const btnToClick = document.createElement('button');
btnToClick.id = 'btnToClick';
btnToClick.className = 'btnToClick';
btnToClick.classList.add('click');
btnToClick.innerText = 'click'
document.body.append(btnToClick);

const eventoToClick = (e) => {

     console.log(`has hecho click en el elemnto ${e.type}`);
}

btnToClick.addEventListener('click', eventoToClick);

// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

const btnToFocus = document.querySelector('input.focus');

btnToFocus.placeholder = 'focus';


btnToFocus.addEventListener('focus', (event) => {

     console.log(`has hecho focus en elemento ${event.target.value}`);
} );

// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

const btnToInput = document.querySelector('input.value');

btnToInput.placeholder = 'input';

btnToInput.addEventListener('input', (event) => {

     console.log(`has hecho focus en elemento ${event.target.value}`);
});