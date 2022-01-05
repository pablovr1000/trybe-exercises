// 1 - Dada uma matriz, transforme em um array.
const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten(accumulator, currentValue) {
  return accumulator.concat(currentValue)
}
const concatArrays = arrays.reduce(flatten);
console.log(concatArrays);