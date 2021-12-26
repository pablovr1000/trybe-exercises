const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1923,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

// Adicione o código do exercício aqui:

// Adicione o código do exercício aqui:

// 1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
const bornIn1947 = books.find((element) => element.author.birthYear === 1947).author.name;

console.log(bornIn1947);

// 2 - Retorne o nome do livro de menor nome.
function smallerName() {
  let menorNome = books[0].name;
  const book = books.forEach((element) => {
    if (element.name.length < menorNome.length) {
      menorNome = element.name;
    }
  }) 
  return menorNome;
}
console.log(smallerName());

// 3 - Encontre o primeiro livro cujo nome possui 26 caracteres.

function getNamedBook() {
  return books.find((element) => element.name.length === 26);
}

console.log(getNamedBook());

// 4 - Ordene os livros por data de lançamento em ordem decrescente.
const sortBooksName = books.sort((a,b) => b.releaseYear - a.releaseYear);
console.log(sortBooksName);

// 5 - Faça uma função que retorne true, se todas as pessoas autoras nasceram no século XX, ou false, caso contrário.
const bornInXX = books.every((element) => element.author.birthYear > 1901 && element.author.birthYear < 2000);
console.log(bornInXX);

// 6 - Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false , caso contrário.
const releasedInThe80s = books.some((element) => element.releaseYear >= 1980 && element.releaseYear < 1990);
console.log(releasedInThe80s);

// 7 - Faça uma função que retorne true caso nenhum author tenha nascido no mesmo ano e false caso tenham nascido no mesmo ano.
const bornInTheSameYear = books