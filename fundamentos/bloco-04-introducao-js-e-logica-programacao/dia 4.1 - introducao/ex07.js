// 1. Crie uma variável para armazenar o estado da pessoa candidata no processo seletivo, que pode ser: 'aprovada' , 'lista' ou 'reprovada'.
// 2. Crie uma estrutura condicional com o switch/case que irá imprimir as mensagens do exercício anterior se o estado da pessoa candidata for 'aprovada' , 'lista' ou 'reprovada' . Como default , imprima a mensagem de 'não se aplica' .

let status ='aprovada';

switch (status) {
  case 'aprovada':
    console.log('Parabéns, você foi aprovado(a)!');
    break;
  case 'lista':
    console.log('Você está na nossa lista de espera.');
    break;
  case 'reprovada':
    console.log('Você não foi aprovado(a).');
    break;
  default:
    console.log('Atribuição incorreta');
}
