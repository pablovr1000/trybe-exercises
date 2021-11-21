// 4- Depois, faça uma pirâmide com n asteriscos de base:

// n = 5

//   *
//  ***
// *****


let n = 3;
let espacoVazio = ''; // não é nem espaço vazio. É nada.

for (let i = 1; i <= n; i += 1) {	// for para fazer a linha/altura da árvore
  for (let space = 1; space <= n - i; space++) { // for do leading space
    espacoVazio += ' ';
  }
  for (let asterisco = 0; asterisco < 2 * i - 1; asterisco++) { // for dos asteriscos
    espacoVazio += '*';
  }
  espacoVazio += '\n';
}
console.log(espacoVazio);
