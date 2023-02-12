console.log(nameOfDog); // Aquí nuestro programa va a asigar un valor a esta variable (undefined).
var nameOfDog = 'Elmo';
console.log(nameOfDog); // va a imprimir (undefined y luego Elmo).


nameOfDogFunc();

function nameOfDogFunc() {
    console.log(`El mejore perrito es ${elmo}`);
}  // Hasta este punto al ejecutar nos devolvera error.

var elmo = 'Elmito'; // Hatsa este punto va a devolver undefined.

nameOfDogFunc(); //Aquí ya devolvera Emito.