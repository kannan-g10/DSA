function facto(n) {
  if (n <= 1) return 1;

  return n * facto(n - 1);
}

console.log(facto(5));
console.log(facto(10));
console.log(facto(0));
