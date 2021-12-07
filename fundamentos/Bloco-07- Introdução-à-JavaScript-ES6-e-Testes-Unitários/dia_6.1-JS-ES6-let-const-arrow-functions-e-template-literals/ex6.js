// let teste = (string) => {
//   let sentence = 'Boa tarde, x!. Estamos muito felizes em recebê-la, x.';
//   if (sentence.includes('x')) {
//     let result = sentence.replace(/x/g, string);
//     return result;
//   }
//  }
// console.log(teste('Maria'));

const array = ['JavaScript', 'React', 'Bootstrap', 'Linux', 'Python'];
array.toString();

function function1(string) {
  const sentence = 'Tryber x aqui!';
  let answer = sentence.replace(/x/g, string);
  return answer;
}

function function2(arrayRecebido) {
  let returnFunction1 = function1('João');
  let newString = 'Minhas cinco principais habilidades são:';
  let newArray = arrayRecebido.sort();
  let newestArray = newArray.join(', ');
  let finalAnswer = `${returnFunction1} ${newString} ${newestArray}.`;
  return finalAnswer;
}

console.log(function2(array));
