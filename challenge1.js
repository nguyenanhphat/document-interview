const array = [1, 5, 4, 7, 8];

const main = (data) => {
  let i = 0;
  let result = false;
  let arrayValid = [];

  while (i < data.length - 1) {
    const dataOriginal = [...data];
    dataOriginal.splice(i, 1);
    result = checkArrayAscending(dataOriginal);

    if (result) {
      result = true;
      arrayValid = dataOriginal;
      break;
    }

    i++;
  }
  return {
    result,
    arrayValid,
  };
};

const checkArrayAscending = (data) => {
  let isAscending = true;
  let i = 0;

  while (i < data.length - 1) {
    if (i === data.length) {
      break;
    }

    const num = data[i];
    const numNext = data[i + 1];

    if (num > numNext) {
      isAscending = false;
      break;
    }

    i++;
  }

  return isAscending;
};

const data = main(array);
console.log(data);
