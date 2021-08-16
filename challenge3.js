var data = [2, 3, 4, 5];

const allEqual = (arr) => arr.every((v) => v === arr[0]);

function test(arr, step = 0) {
  let maxIndex = arr.indexOf(Math.max(...arr));
  for (let i = 0; i < arr.length; i++) {
    if (maxIndex !== i) {
      arr[i]++;
    }
  }
  step = step + 1;
  if (allEqual(arr)) {
    return step;
  } else {
    return test(arr, step);
  }
}

const step = test(data, 0);
console.log(step);
