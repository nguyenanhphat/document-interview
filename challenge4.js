const arr = [8, 2, 4, 6, 7];

function main(data) {
  let result = null;

  for (let i = 0; i < data.length - 1; i++) {
    if (!data[i + 1] || !data[i + 2] || !data[i + 3]) {
      return;
    }
    const total = data[i] + data[i + 1] + data[i + 2] + data[i + 3];

    if (!result) {
      result = {
        total: total,
        numberSmaller: total,
        operation: `${data[i]} + ${data[i + 1]} + ${data[i + 2]} + ${
          data[i + 3]
        }`,
      };
    } else {
      if (result.total < total) {
        result = {
          ...result,
          total: total,
          numberSmaller: result.total,
          operation: result.operation,
        };
      }
    }
  }
  return result;
}

const result = main(arr);
