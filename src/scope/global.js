// variables

var a; // declarando
var b = 'b'; //declarando y asignando
b = 'bb'; // reasignacion
var a = 'aa'; //redeclaracion


// Global Scope

var fruit = 'Apple'; // Global

function bestFruit() {
    console.log(fruit);
}

bestFruit();

function countries() {
    country = 'Argentina'; // Global (si agregamos var. let, const; no podriamos acceder desde fuera de la function)
    console.log(country);
}

countries();
console.log(country);