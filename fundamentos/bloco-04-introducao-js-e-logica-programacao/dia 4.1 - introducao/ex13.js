// 6. Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.

let xadrez = 'torre'.toLowerCase();

// if (xadrez === 'Torre') {
//     console.log('movimento para frente ou trás ou lados direito e esquerdo quantas casas achar necessário');
// } else {
//     console.log('valor inválido');
// }

switch (xadrez) {
    case 'cavalo':
        console.log('duas casas para frente ou trás seguido do movimento ou para direta ou esquerda de uma casa');
        break;
    case 'rei':
        console.log('movimento para qualquer direção movendo apenas uma casa');
        break;
    case 'torre':
        console.log('movimento para frente ou trás ou lados direto e esquerdo quantas casas achar necessário');
        break;
    default:
        console.log('peça inválida');
        break;
}

