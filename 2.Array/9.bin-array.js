const binArray = arr => {
  let start = 0,
    end = arr.length - 1;

  while (start <= end) {
    if (arr[start] == 0) start++;
    else {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      end--;
    }
  }
  return arr;
};

console.log(binArray([0, 0, 1, 1, 0, 1, 0, 1]));
