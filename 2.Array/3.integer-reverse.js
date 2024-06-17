const reverseNumber = num => {
  let sign = num,
    reverseNum = '';

  if (num < 0) {
    num = Math.abs(num);
  }

  while (num > 0) {
    reverseNum += num % 10;
    num = Math.floor(num / 10);
  }
  return parseInt(reverseNum) * Math.sign(sign);
};

console.log(reverseNumber(-457));
