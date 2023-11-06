

// funciones sort para ordenar numeros ascendiente y descendientemente

const numbers = [3, 1, 90, 1000, 2];
const names = ['juan', 'antonio', 'felipe', 'Artuto', 'Sandra'];

const people = [
     { name: 'juan', age: 60 },
     { name: 'antonio', age: 30 },
     { name: 'felipe', age: 20 },
     { name: 'Artuto', age: 90 }];

const orderNumbersAscending = (a, b) => a - b;
const orderNumbersDescending = (a, b) => b - a;

numbers.sort(orderNumbersAscending);
numbers.sort(orderNumbersDescending);

// funciones sort para ordenar strings

const compareStringsAscending = (a, b) => a.localeCompare(b);
const compareStringsDesscending = (a, b) => b.localeCompare(a);

names.sort(compareStringsAscending);
names.sort(compareStringsDesscending);


// funciones sort para ordenar objetos

people.sort((a, b) => {
     
     return compareStringsAscending(a.name, b.name);
})
