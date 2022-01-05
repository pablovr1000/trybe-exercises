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
      birthYear: 1920,
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

// 1 - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA (com a função map)

const booksName = books.map((book) => book.name);
// console.log(booksName)
const booksGenre = books.map((bookGenre) => bookGenre.genre);
// console.log(booksGenre)
const authors = books.map((bookAuthor) => bookAuthor.author.name);
// console.log(author);

// 2 - Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author, com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado.

const booksInfo = books.map((book) => ({
  authorName: book.author.name,
  age: book.releaseYear - book.author.birthYear,
}));
// console.log(booksInfo);

const organizeAgeOfBooks = booksInfo.sort((a, b) => a.age - b.age);
// console.log(organizeAgeOfBooks);

// 3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.
const sciFiOrFantasyGenreBooks = books.filter((bookGenre) => bookGenre.genre === 'Ficção Científica' || bookGenre.genre === 'Fantasia');
// console.log(sciFiOrFantasyGenreBooks);

// 4 - Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.
// Dica: use as funções filter e sort

const oldestBook = books.filter((param) => 2022 - param.releaseYear > 60 ? param.releaseYear : false);
const sortOldestBook = oldestBook.sort((a, b) => a.releaseYear - b.releaseYear);
// console.log(sortOldestBook);

// 5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.
const sciFiAndFantGenre = books.filter((bookGenre) => bookGenre.genre === 'Ficção Científica' || bookGenre.genre === 'Fantasia');
const sciFiAndFantGenreAuthors = sciFiAndFantGenre.map((param2) => param2.author.name);
const sortAuthors = sciFiAndFantGenreAuthors.sort((a, b) => a.localeCompare(b));

// 6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.
const booksOver60 = books.filter((param) => 2022 - param.releaseYear > 60 ? param.releaseYear : false);
const arrBooksOver60 = booksOver60.map((param) => param.name);

// 7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.
const bookWith3lettersNameAuthor = books.find((book) => book.author.name.match(/^(\w\.\s){3}/)).name

