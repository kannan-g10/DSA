function sum(n) {
  n = Math.abs(n);
  if (n < 10) return n;
  return (n % 10) + sum(Math.floor(n / 10));
}

console.log(sum(4));
console.log(sum(12));
console.log(sum(112));
console.log(sum(-11));
console.log(sum(11111));
