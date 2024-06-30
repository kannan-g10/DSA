function powerOfNumber(n, m) {
  if (m == 0) return 1;
  if (m == 1) return n;
  return n * powerOfNumber(n, m - 1);
}

console.log(powerOfNumber(2, 3));
console.log(powerOfNumber(2, 0));
