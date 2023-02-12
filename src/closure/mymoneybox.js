// AQUI NO FUNCIONA 

// function moneyBox(coins) {
//   let saveCoins = 0;
//   saveCoins += coins;
//   console.log(`Money Box: ${saveCoins}`);
// }

// moneyBox(5);
// moneyBox(5);


// Aquí si funcionara
function moneyBox() {
  let saveCoins = 0;
  function countCoins(coins) {
    saveCoins += coins;
    console.log(`Money Box: $${saveCoins}`);
  }
  return countCoins;
}

const myMoneyBox = moneyBox(); // Para poder utilizar la funcion de contar las monedas ingresadas a la alcancia.
myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(52);
myMoneyBox(8);
myMoneyBox(48);

// Para otra persona
const moneyBoxAna = moneyBox();
moneyBoxAna(5);
moneyBoxAna(3);
moneyBoxAna(45);