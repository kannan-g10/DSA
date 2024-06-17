const twoSum = (arr, target) => {
  //   for (let i = 0; i < arr.length; i++) {
  //     for (let j = i + 1; j < arr.length; j++) {
  //       if (arr[i] + arr[j] == target) {
  //         return [i, j];
  //       }
  //     }
  //   }
  //   return [];
  let pair = {};
  for (let i = 0; i < arr.length; i++) {
    if (target - arr[i] in pair) {
      return [pair[target - arr[i]], i];
    }
    pair[arr[i]] = i;
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([1, 3, 7, 9, 2], 11));
