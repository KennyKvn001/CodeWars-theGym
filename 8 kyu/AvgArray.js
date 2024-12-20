function findAverage(array) {
  let avg = array.reduce((a, b) => a + b, 0) / array.length;
  return avg || 0;
}

// Clever
var find_average = (array) => {
  return array.length === 0
    ? 0
    : array.reduce((acc, ind) => acc + ind, 0) / array.length;
};
