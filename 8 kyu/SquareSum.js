function squareSum(numbers) {
  return numbers.map((num) => num ** 2).reduce((a, b) => a + b, 0);
}

// Best practice
function squareSum(numbers) {
  return numbers.reduce((sum, num) => sum + num * num, 0);
}
