// 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

function verificaResposta(gabarito, respostasASeremVerificadas) {
  let pontos = 0;
  for (let index = 0; index < gabarito.length; index += 1) {
    if (gabarito[index] === respostasASeremVerificadas[index]) {
      pontos += 1;
    } else if (respostasASeremVerificadas[index] === "N.A") {
      continue;
    } else if (gabarito[index] !== respostasASeremVerificadas[index]) {
      pontos -= 0.5;
    }
  }
  return `Você tirou ${pontos}`;
}

function resposta(gabarito, respostasASeremVerificadas, callback) {
  return callback(gabarito, respostasASeremVerificadas);
}

console.log(resposta(['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'], ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'], verificaResposta));