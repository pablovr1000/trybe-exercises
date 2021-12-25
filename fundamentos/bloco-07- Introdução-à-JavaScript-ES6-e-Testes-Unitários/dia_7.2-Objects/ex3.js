const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Crie uma função para adicionar o turno da noite na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

// const newKey = (obj, key, value) => {
//   obj[key] = value;
//   return obj;
// };

// console.log(newKey(lesson2, 'turno', 'noite'));

// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

// const listKeys = (obj) => {
//   const answer = Object.keys(obj);
//   return answer;
// }
// console.log(listKeys(lesson3));

// Crie uma função para mostrar o tamanho de um objeto.

// const objLength = (obj) => {
//   const answer = Object.keys(obj).length;
//   return answer;
// }
// console.log(objLength(lesson1));

// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

// const objValues = (obj) => {
//   const answer = Object.values(obj);
//   return answer;
// }
// console.log(objValues(lesson1));

// Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons).

  const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
// console.log(createClone());

// Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

const totalNumberOfStudents = () => {
  let number = 0;
  const acessaObj = Object.keys(allLessons); // ['lesson1', 'lesson2', 'lesson3']
  for (let index = 0; index < acessaObj.length; index += 1) {
    let students = allLessons[acessaObj[index]]['numeroEstudantes'];
    number += students
  }
  return number;
}
console.log(totalNumberOfStudents());

// Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:
const checkValue = (obj, position) => {
  return Object.values(obj)[position];
}
console.log(checkValue(lesson1, 0));

// Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:

const checkEntries = (obj, keyName, keyValue) => {
  let accessObject = Object.entries(obj);
 
  for (let index in accessObject) {
    if (accessObject[index][0] === keyName && accessObject[index][1] === keyValue) {
      return true; 
    }
  }
  return false;
}
console.log(checkEntries(lesson1, 'turno', 'Maria Clara'));

// Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.
const mathStudents = (obj) => {
  let number = 0;
  const acessaObj = Object.keys(obj); // ['lesson1', 'lesson2', 'lesson3']
  for (let index in acessaObj) {
    if (obj[acessaObj[index]].materia === 'Matemática') {
      number += obj[acessaObj[index]].numeroEstudantes;
    }
  }
  return number;
}
console.log('oi')
console.log(mathStudents(allLessons));

// Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:

const finalFunction = (obj, teacherName) => {
  const completeObject = Object.values(obj);
  const classes = []
  let students = 0;
  
  for (let index in completeObject) {
    if (allLessons[index].professor === teacherName) {
      classes.push(allLessons[completeObject[index]].materia);
      students += allLessons[completeObject[index]].numeroEstudantes;
    }
  }
  return asnwer = {professor: teacherName; aulas: completeObject; estudantes: students};
}
console.log(finalFunction(allLessons, 'Maria Clara'));