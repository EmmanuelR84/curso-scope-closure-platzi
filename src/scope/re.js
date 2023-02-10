var firstName; // Undefined
firstName = 'Oscar';
console.log(firstName);

var lastName = 'David';  // Declarando / Asignando
lastName = 'Ana'; // Reasignamos el valor de la variable
console.log(lastName);

var secondName = 'Ramello';  // Declarando / Asignando
var secondName = 'Julia'; // Reasignamos el valor de la variable
console.log(lastName);

// let
let fruit = 'Apple';  //Decarar / Asignar
fruit = 'Kiwi'; // Reasignar

// let fruit = 'Banana'; // NO PODEMOS REDELARAR


// const
const animal = 'Dog'; // declarando y asignando
// animal = 'Cat'; // nos devolvera sintax error, NO SE PUEDE reasignar y redeclarar



const vehicles = [];  // Aquí si podemos usar .push() y .pop()
vehicles.push('jeep');
console.log(vehicles);

vehicles.pop();
console.log(vehicles);