// Crie uma função que receba um número e retorne seu fatorial.
// let fatorial = (a) => {
//   number = 1;
//   for (let index = a; index >= 1; index -= 1) {
//     number *= index;
//   }
//   return number
// }

// console.log(fatorial(7));

// Crie uma função que receba uma frase e retorne qual a maior palavra.
const returnLargestWord = sentence => {
  let wordSplitted = sentence.split(' '); // cada palavra separada por vírgula é um index
  let largestWord = 0;
  let answer = '';

  for (let index = 0; index < wordSplitted.length; index += 1) {
    if (wordSplitted[index].length > largestWord) {
      largestWord = wordSplitted[index].length;
      answer = largestWord;
    }
  }
  return answer;
}

console.log(returnLargestWord("Antonio foi no banheiro e não sabemos o que aconteceu"));

const longestWord = text => {
  let wordArray = text.split(' ');
  let maxLength = 0;
  let result = '';

  for (const word of wordArray) {
      if (word.length > maxLength) {
          maxLength = word.length;
          result = word;
      }
  }

  return result;
}

console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"));