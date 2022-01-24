const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra "a" maiúscula ou minúscula.

function containsA(acc, name) {
  name.split('').forEach((letter) => {
    if (letter === 'A' || letter === 'a') {
      acc += 1;
    }
  })
  return acc;
}

const searchLetterA = names.reduce(containsA, 0);
// todo reduce tem que retornar o acc