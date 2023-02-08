function greeting() {
    let userName = 'Ana';  // Solo tiene alcance dentro de la funcion
    console.log(userName);

    if(userName === 'Ana') {
        console.log(`Hello ${userName}!`);
    }
}

greeting();
console.log(userName); //  No podemos acceder a esta variable, ya que no es global