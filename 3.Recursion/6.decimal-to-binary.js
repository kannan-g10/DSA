function decimalToBinary(n) {
  if (n == 1) return 1;
  return decimalToBinary(Math.floor(n / 2)) + (n % 2).toString();
}

console.log(decimalToBinary(10));
console.log(decimalToBinary(13));
console.log(decimalToBinary(20));
