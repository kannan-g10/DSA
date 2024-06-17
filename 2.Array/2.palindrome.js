const isPalindrome = str => {
  let newStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }

  return str === newStr;
};

console.log(isPalindrome('abba'));
console.log(isPalindrome('malayalam'));
console.log(isPalindrome('Hello world'));
