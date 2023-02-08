function fruits() {
    if(true) {  // a estas llaves se llama crear un blocke
        var fruit1 = 'Apple';  // Function scope - alcance dentro de la funcion
        let fruit2 = 'Kiwi';   // block scope - alcance dentro de este blocke
        const fruit3 = 'Banana'; // block scope - alcance dentro de este blocke
    }

    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();