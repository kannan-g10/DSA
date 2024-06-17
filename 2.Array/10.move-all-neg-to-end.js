const moveToEnd = arr => {
  let posIndex = 0,
    negindex = arr.length - 1;
  result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      result[posIndex++] = arr[i];
    } else {
      result[negindex--] = arr[i];
    }
  }

  for (let i = negindex + 1, j = result.length - 1; i < j; i++, j--) {
    let temp = result[i];
    result[i] = result[j];
    result[j] = temp;
  }

  return result;
};

console.log(moveToEnd([1, -1, 3, 2, -7, -5, 11, 6]));
console.log(moveToEnd([-5, 7, -3, -4, 9, 10, -1, 11]));
