// 2. Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
// n = 5

// *
// **
// ***
// ****
// *****

let n = 5;
let conteudoString = ''; //quantidade de asteriscos impressos em uma linha

for (let i = 0; i < n; i += 1) {
  conteudoString = conteudoString + '*';
    console.log(conteudoString)
}
// toda vez que o primeiro for terminar ele irá para o segundo, quando o segundo acabar ele volta para o primeiro
// toda vez que eu começo o primeiro for ele começa com o console log
