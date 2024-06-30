function fibo(n) {
  if (n <= 1) return n;
  return fibo(n - 1) + fibo(n - 2);
}

console.log(fibo(2));
console.log(fibo(6));
console.log(fibo(1));

//0 1 1 2 3 5 8 13 21 34 55 98
