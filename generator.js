function* generateSequence() {
  // yield 1;
  yield 2;
  // return 3;
  return;
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
let generator = gen();
let question = generator.next().value;
generator.next(4);
