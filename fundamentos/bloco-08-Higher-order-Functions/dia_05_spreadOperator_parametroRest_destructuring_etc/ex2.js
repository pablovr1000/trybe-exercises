// 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
// Dica: use parâmetro rest .

const sum = (...args) => args.reduce((acc, currentValue) => acc + currentValue, 0);
console.log(sum(4, 9, 6, 4, 3));