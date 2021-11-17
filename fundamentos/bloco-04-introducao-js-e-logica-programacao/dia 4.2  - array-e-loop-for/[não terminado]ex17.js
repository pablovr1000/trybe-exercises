// Ordene o array numbers em ordem crescente e imprima seus valores;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numb = numbers[1];
let array = [];

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > numb) {
        numb = numbers[index]
        array.push(numb);
    } 
}
console.log(array);