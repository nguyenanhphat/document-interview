function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}
let sequence = [0, ...generateSequence()];
// let one = generator.next();
// let two = generator.next();

// for (let value of sequence) {
//   console.log(value);
// }

function* gen() {
  // Pass a question to the outer code and wait for an answer
  let result = yield "2 + 2 = ?"; // (*)
  alert(result);
}
// let generator = gen();
// let question = generator.next().value;
// generator.next(4);

let generator = generateSequence();

const gen1 = generator.next();
const gen2 = generator.next();
// const gen3 = generator.next();
// const gen4 = generator.next();
// console.log('gen1---:', gen1);
// console.log('gen2---:', gen2);
// console.log('gen3---:', gen3);
// console.log('gen4---:', gen4);
