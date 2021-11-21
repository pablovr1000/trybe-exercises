/* Diferença entre nextsibling e nextelementsibling */
const nextSibling = start.nextSibling;
console.log(nextSibling); // retorna nó, ou seja a próxima coisa que vem depois, não importa se é tag ou não

const nextElementSibling = start.nextElementSibling;
console.log(nextElementSibling); // retorna <p>elemento</p>, ou seja, retorna a tag e o que tem dentro dela.