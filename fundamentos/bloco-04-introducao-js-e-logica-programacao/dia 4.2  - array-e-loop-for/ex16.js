// Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
let contagem = [];
for (let i = 1; i <= 25; i += 1) {
    contagem.push(i);
}
// console.log(contagem);

//Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.
for (let i = 0; i < contagem.length; i += 1) {
    console.log(contagem[i] / 2);
}
