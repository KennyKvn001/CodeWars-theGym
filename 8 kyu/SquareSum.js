function squareSum(numbers) {
  return numbers.map((num) => num ** 2).reduce((a, b) => a + b, 0);
}
