const waking = () => 'Acordando!';
const breakFast = () => 'Bora tomar café!';
const sleep = () => 'Partiu dormir!'
const doingThings = (func) => func();

console.log(doingThings(waking));
console.log(doingThings(breakFast));
console.log(doingThings(sleep));

// const waking = () => 'Acordando!';
// const breakFast = () => 'Bora tomar café!';
// const sleep = () => 'Partiu dormir!'

// const doingThings = (callback) => {
//   const answer = callback();
//   return answer
// }

// console.log(doingThings(waking));
