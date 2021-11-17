// 3. Agora inverta o lado do triângulo. Por exemplo:
// n = 5

//     *
//    **
//   ***
//  ****
// *****

let row = 5;
espacoVazio = '';

for (let i = 1; i <= row; i += 1) { // for para linha
    for (let space = 1; space <= row - i; space += 1) { //for para espaço
    espacoVazio += ' ';
  }
  for (let asterisco = 1; asterisco <= i; asterisco += 1) { // for para *
    espacoVazio += '*';
  }
  espacoVazio += '\n'; // quebra as linhas
}
console.log(espacoVazio);