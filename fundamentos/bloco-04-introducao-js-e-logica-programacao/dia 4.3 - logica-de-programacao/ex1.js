// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:

// n = 5

// *****
// *****
// *****
// *****
// *****

let n = 5; 
let espacoVazio = '';

for (let i = 0; i < n; i += 1) {
    espacoVazio += '*' // espacoVazio = espacoVazio + '*' -> lembre: o + concatena. No segundo for ele vai pegar a última linha e imprimir 5 vezes, porque a última linha é o valor final do espaço vazio.
}
for (let i = 0; i < n; i += 1) {
    console.log(espacoVazio)
}