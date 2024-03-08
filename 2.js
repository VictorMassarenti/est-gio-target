function isFibonacci(num) {
  let a = 0,
    b = 1,
    c = 0;
  while (c < num) {
    c = a + b;
    a = b;
    b = c;
  }
  return c === num;
}

console.log(isFibonacci(14));
