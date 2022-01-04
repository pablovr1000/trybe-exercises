// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.
// Bonus: use somente um if.

const valorA = 10;
const valorB = 4;
const valorC = 8;

if (valorA % 2 === 0 || valorB % 2 === 0 || valorC % 2 === 0) {
  console.log('true');
} else {
  console.log('false');
}

// outra forma de fazer:

// let numeroPar = false;

// if ((valorA % 2 === 0 || valorB % 2 === 0 || valorC % 2 === 0)) {
//     numeroPar = true;
// };

// console.log(numeroPar);

