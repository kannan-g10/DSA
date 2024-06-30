function gcd(n, m) {
  if (m == 0) return n;
  return gcd(m, n % m);
}

console.log(gcd(48, 18));
console.log(gcd(18, 48));
console.log(gcd(8, 12));
