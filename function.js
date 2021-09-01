// const main = (a) => (b) => (c) => {
//   return a * b * c;
// };
// const text = main(10)(2);
let john = { name: "John" };

let array = [john];

john = null;
console.log("array---:", array);
console.log("john---:", john);
