function reverseStr(str) {
  let reversedStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] != ' ') reversedStr += str[i];
  }

  return reversedStr;

  //   return str.split('').reverse().join('');
}

console.log(reverseStr('Ap   ple'));
