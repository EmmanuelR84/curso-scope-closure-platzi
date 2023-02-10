'use strict';  // Esto hara que hagamos todo de forma estricta, debemos declarar de forma correcta la variable (ej. let pi = 3.1416;)
pi = 3.1416;
console.log(pi);

function myNumber() {
    'use strict';  // Aquí de la misma forma estamos diciendo que use el modo estricto.
    return pi = 3.1416;
}

console.log(myNumber());