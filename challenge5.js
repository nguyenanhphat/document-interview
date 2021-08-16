class Stack {
  popArr = (arr, index) => {
    if (!arr || !arr[index]) {
      return arr;
    }
    const newArr = [...arr];
    for (let i = index; i < newArr.length - 1; i++) {
      newArr[index] = newArr[index + 1];
    }
    newArr.length = newArr.length - 1;

    return newArr;
  };

  pushArr = (arr, item) => {
    const newArr = !arr ? [] : [...arr];
    newArr.length = newArr.length + 1;
    newArr[newArr.length - 1] = item;
    return newArr;
  };

  checkIsEmpty = (arr) => {
    return !arr || arr[0] === undefined;
  };
}
const arr = null;
const stack = new Stack();

const newArr1 = stack.popArr(arr);
const newArr2 = stack.popArr(newArr1);
const isEmpty = stack.checkIsEmpty(newArr2);

const newArr3 = stack.pushArr(newArr2, 1);
const isEmpty2 = stack.checkIsEmpty(newArr3);

console.log("newArr1---:", newArr1);
console.log("newArr2---:", newArr2);
console.log("isEmpty---:", isEmpty);
console.log("newArr3---:", newArr3);
console.log("isEmpty2---:", isEmpty2);
