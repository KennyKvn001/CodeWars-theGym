function positiveSum(arr) {
  return arr.map((n) => (n > 0 ? n : 0)).reduce((a, b) => a + b, 0);
}

// Clever
function positiveSum(arr) {
  return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);
}
