function nthFibo(n) {
  return n < 1 ? 0 : n <= 2 ? 1 : nthFibo(n - 1) + nthFibo(n - 2);
}
console.log(nthFibo(3));
