// Crie uma função que receba uma frase e retorne qual a maior palavra.

const returnLongestWord = string => {
  let sentence = string.split(' ');
  let largestWord = 0;
  let finalWord = '';

  for (let index = 0; index < sentence.length; index +=1 ) {
    if (sentence[index].length > largestWord) {
      largestWord = sentence[index].length;
      finalWord = sentence[index];
    }
  }
  return finalWord;
}

console.log(returnLongestWord("Frase gigante teste exercício da Trybe"));